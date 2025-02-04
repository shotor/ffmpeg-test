import { execSync } from 'child_process'
import * as FFmpeg from '../utils/ffmpeg.js'

export const run = () => {
  console.log('Generating spectrograms for 6.1...')
  execSync(FFmpeg.spectrogram('6.1', '6.1-audio'), {
    stdio: 'inherit',
  })
  execSync(FFmpeg.spectrogram('6.1', '6.1-audio-inverted'), {
    stdio: 'inherit',
  })

  console.log('Generating spectrograms for 7.1...')
  execSync(FFmpeg.spectrogram('7.1', '7.1-audio'), {
    stdio: 'inherit',
  })
  execSync(FFmpeg.spectrogram('7.1', '7.1-audio-inverted'), {
    stdio: 'inherit',
  })

  console.log('Generating spectrogram for 7.1 mixed audio...')
  execSync(FFmpeg.spectrogram('7.1', '7.1-audio-inverted-7.1-audio-mixed'), {
    stdio: 'inherit',
  })

  console.log('Generating spectrogram for 6.1 mixed audio')
  execSync(FFmpeg.spectrogram('6.1', '6.1-audio-inverted-6.1-audio-mixed'), {
    stdio: 'inherit',
  })

  console.log('Generating spectrom for 6.1 and 7.1 mixed audio')
  const command7 = FFmpeg.spectrogram(
    '7.1',
    '6.1-audio-inverted-7.1-audio-mixed'
  )
  console.log(command7)
  execSync(command7, {
    stdio: 'inherit',
  })
}
