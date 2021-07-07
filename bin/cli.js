#!/usr/bin/env node

const inquirer = require('inquirer')

const hasAtomic = (answers) => {
  return answers.useAtomic
}

;(async () => {
  const answers = await inquirer.prompt([
    {
      name: 'name',
      type: 'input',
      message: "What's the name of your component?"
    },
    {
      name: 'useAtomic',
      message: 'Do you use Atomic Design?',
      type: 'confirm'
    },
    {
      name: 'type',
      message: 'What kind is your component?',
      type: 'list',
      when: hasAtomic,
      choices: ['atom', 'molecule', 'organism', 'template', 'page']
    }
  ])

  console.log(`🔧 Your component: "${answers.name}" was successfully created`)
})()
