const hasAtomic = (answers) => {
  return answers.useAtomic
}

module.exports = [
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
    name: 'addons',
    message: 'Do you want to use some addons?',
    type: 'checkbox',
    choices: ['Storybook', 'Test']
  },
  {
    name: 'type',
    message: 'What kind is your component?',
    type: 'list',
    when: hasAtomic,
    choices: ['atom', 'molecule', 'organism', 'template', 'page']
  }
]
