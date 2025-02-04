export const encode = (version) =>
  [
    `./bin/${version}/ffmpeg`,
    '-y',
    '-i ./input/sample.mp4',
    '-ar 22050',
    '-ab 64k',
    '-ac 1',
    '-s 120x40',
    '-crf 30',
    '-g 150',
    `./output/${version}.mp4`,
  ].join(' ')

export const split = (version) =>
  [
    `./bin/${version}/ffmpeg`,
    '-y',
    `-i ./output/${version}.mp4`,
    '-an',
    '-c:v copy',
    `./output/${version}-video.mp4`,
    '-vn',
    '-c:a pcm_s16le',
    '-ar 44100',
    '-ac 2',
    `./output/${version}-audio.wav`,
  ].join(' ')

export const invertAudio = (version) =>
  [
    `./bin/${version}/ffmpeg`,
    '-y',
    `-i ./output/${version}-audio.wav`,
    '-af "volume=-1"',
    `./output/${version}-audio-inverted.wav`,
  ].join(' ')

export const mixAudio = (version, file1, file2) =>
  [
    `./bin/${version}/ffmpeg`,
    '-y',
    `-i ./output/${file1}.wav`,
    `-i ./output/${file2}.wav`,
    '-filter_complex "[0:a][1:a]amix=inputs=2:duration=first:normalize=0"',
    `./output/${file1}-${file2}-mixed.wav`,
  ].join(' ')

export const spectrogram = (version, file) =>
  [
    `./bin/${version}/ffmpeg`,
    '-y',
    `-i ./output/${file}.wav`,
    '-lavfi showspectrumpic=s=800x600:legend=disabled',
    '-frames:v 1',
    '-update 1',
    '-vsync vfr',
    `./output/${file}-spectrogram.png`,
  ].join(' ')

export const difference = (version, file) =>
  [
    `./bin/${version}/ffmpeg`,
    '-y',
    `-i ./output/${file}.wav`,
    '-af volumedetect',
    '-f null',
    '/dev/null',
  ].join(' ')

export const compareVideo = (version, file1, file2) =>
  [
    `./bin/${version}/ffmpeg`,
    `-i ./output/${file1}.mp4`,
    `-i ./output/${file2}.mp4`,
    `-filter_complex "ssim"`,
    `-f null -`,
  ].join(' ')
