import { run as step1 } from './steps/encode-videos.js'
import { run as step2 } from './steps/split-audio-video.js'
import { run as step3 } from './steps/invert-audio.js'
import { run as step4 } from './steps/mix-audio.js'
import { run as step5 } from './steps/spectogram.js'
import { run as step6 } from './steps/difference.js'
import { run as step7 } from './steps/compare-video.js'

export const steps = [
  {
    name: 'Encode videos',
    run: step1,
  },
  {
    name: 'Split audio and video tracks',
    run: step2,
  },
  {
    name: 'Invert audio',
    run: step3,
  },
  {
    name: 'Mix audio',
    run: step4,
  },
  {
    name: 'Generate spectograms',
    run: step5,
  },
  {
    name: 'Calculate difference',
    run: step6,
  },
  {
    name: 'Compare video',
    run: step7,
  },
]
