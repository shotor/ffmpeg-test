import { steps } from './steps.js'

const logSteps = () => {
  console.log('Available steps:')
  steps.forEach((step, index) => {
    console.log(`${index + 1}. ${step.name}`)
  })
}

const run = () => {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error('Please provide the step number to run')
    console.error('Example: npm start 1')
    console.error('Example: npm start all')
    logSteps()
    process.exit(1)
  }

  if (args[0] === 'all') {
    steps.forEach((step) => step.run())
    return
  }

  const stepNumber = parseInt(args[0], 10)
  const step = steps[stepNumber - 1]

  if (!step) {
    console.error(`Step ${stepNumber} not found`)
    logSteps()
    process.exit(1)
  }

  step.run()
}

run()
