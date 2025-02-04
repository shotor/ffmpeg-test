import { execSync } from 'child_process'
import * as FFmpeg from '../utils/ffmpeg.js'

export const run = () => {
  console.log('Comparing videos using 7.1...')
  const command = FFmpeg.compareVideo('7.1', '6.1-video', '7.1-video')
  console.log(command)
  execSync(command, {
    stdio: 'inherit',
  })
}
