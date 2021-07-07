const functionalComponent = ({ name }) => {
  return {
    template:
`import PropTypes from 'prop-types'

function ${name} (props) {
  return (
    <div>

    </div>
  )
}

${name}.propTypes = {

}

export default ${name}
`,
    filename: 'index.js'
  }
}

const testJest = ({ name }) => {
  return {
    template:
`import ${name} from './index.js'

describe('', () => {
  test('should ', () => {

  })
})
`,
    filename: `${name}.test.js`
  }
}

const storybookStory = ({ name, type }) => {
  return {
    template:
`import ${name} from './index.js'

export default {
  component: ${name},
  title: '${type || 'component'}/${name}'
}

const Template = (args) => <${name} {...args} />

export const Primary = Template.bind({})

Primary.args = {

}
`,
    filename: `${name}.stories.js`
  }
}

module.exports = {
  Component: functionalComponent,
  Test: testJest,
  Storybook: storybookStory
}
