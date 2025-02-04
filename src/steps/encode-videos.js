import { execSync } from 'child_process'
import { mkdirSync } from 'fs'
import * as FFmpeg from '../utils/ffmpeg.js'

export const run = () => {
  console.log('Encoding videos...')

  mkdirSync('./output', { recursive: true })

  execSync(FFmpeg.encode('6.1'), { stdio: 'inherit' })
  execSync(FFmpeg.encode('7.1'), { stdio: 'inherit' })
}
