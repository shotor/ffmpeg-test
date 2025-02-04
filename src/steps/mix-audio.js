import { execSync } from 'child_process'
import * as FFmpeg from '../utils/ffmpeg.js'

export const run = () => {
  console.log('Mixing audio 7.1s')
  const command1 = FFmpeg.mixAudio('7.1', '7.1-audio-inverted', '7.1-audio')
  console.log(command1)
  execSync(command1, {
    stdio: 'inherit',
  })

  console.log('Mixing audio 6.1s')
  const command2 = FFmpeg.mixAudio('6.1', '6.1-audio-inverted', '6.1-audio')
  console.log(command2)
  execSync(command2, {
    stdio: 'inherit',
  })

  console.log('Mixing audio 7.1 and 6.1')
  const command3 = FFmpeg.mixAudio('7.1', '6.1-audio-inverted', '7.1-audio')
  console.log(command3)
  execSync(command3, {
    stdio: 'inherit',
  })
}
