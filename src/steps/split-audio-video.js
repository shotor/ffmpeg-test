import { execSync } from 'child_process'
import * as FFmpeg from '../utils/ffmpeg.js'

export const run = () => {
  console.log('Splitting audio and video tracks...')

  const command1 = FFmpeg.split('6.1')
  const command2 = FFmpeg.split('7.1')

  console.log(command1)
  execSync(command1, { stdio: 'inherit' })

  console.log(command2)
  execSync(command2, { stdio: 'inherit' })
}
