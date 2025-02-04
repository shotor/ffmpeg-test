import { execSync } from 'child_process'
import * as FFmpeg from '../utils/ffmpeg.js'

export const run = () => {
  console.log('Calculating difference between 6.1s mixed...')
  execSync(FFmpeg.difference('6.1', '6.1-audio-inverted-6.1-audio-mixed'), {
    stdio: 'inherit',
  })

  console.log('Calculating difference between 7.1s mixed...')
  execSync(FFmpeg.difference('7.1', '7.1-audio-inverted-7.1-audio-mixed'), {
    stdio: 'inherit',
  })

  console.log('Calculating difference between 6.1 and 7.1 mixed...')
  const command3 = FFmpeg.difference(
    '7.1',
    '6.1-audio-inverted-7.1-audio-mixed'
  )
  console.log(command3)
  execSync(command3, {
    stdio: 'inherit',
  })
}
