#!/usr/bin/env node

const inquirer = require('inquirer')
const fs = require('fs/promises')
const path = require('path')

const addons = require('../lib/addons')
const questions = require('../lib/questions')

const execDir = process.cwd()

;(async () => {
  const answers = await inquirer.prompt(questions)

  try {
    const targetPath = answers.type
      ? path.join(execDir, 'components', `${answers.type}s`, answers.name)
      : path.join(execDir, 'components', `${answers.type}s`, answers.name)

    await fs.mkdir(targetPath, {
      recursive: true
    })

    await fs.writeFile(path.join(targetPath, 'index.js'), addons.Component(answers).template, {
      encoding: 'utf-8'
    })

    for (const addon of answers.addons) {
      const selectedAddon = addons[addon](answers)
      const selectedAddonFilename = path.join(targetPath, selectedAddon.filename)
      await fs.writeFile(selectedAddonFilename, selectedAddon.template, {
        encoding: 'utf-8'
      })
    }
  } catch (error) {
    console.error(error)
  }

  console.log(`🔧 Your component: "${answers.name}" was successfully created`)
})()
