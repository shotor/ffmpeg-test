import { execSync } from 'child_process'
import * as FFmpeg from '../utils/ffmpeg.js'

export const run = () => {
  console.log('Inverting audio...')

  const command1 = FFmpeg.invertAudio('6.1')
  const command2 = FFmpeg.invertAudio('7.1')

  console.log(command1)
  execSync(command2, { stdio: 'inherit' })

  console.log(command2)
  execSync(command2, { stdio: 'inherit' })
}
