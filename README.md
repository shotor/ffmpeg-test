# ffmpeg-test

Test whether audio and video channels of 2 video files are the same

## Usage

```
# download ffmpeg versions 6.1 and 7.1
npm run dl:ffmpeg

# download sample video file
npm run dl:sample

# run specific step
npm start {1..7}

# or run all
npm start all
```

## Steps

# 1. Encode videos

Encodes the `sample.mp4` video using ffmpeg 6.1 and 7.1 and ouputs to `./output/{version}.mp4` .

# 2. Split audio and video track

Splits `./output/{version}.mp4` to `./output/${version}-audio.wav` and `./output/${version}-video.mp4`.

# 3. Invert audio

Inverts audio from `output` folder to `./output/${version}-audio-inverted.wav`.

# 4. Mix audio

Mixes the following:

- `6.1-audio` with `6.1-audio-inverted`
- `7.1-audio` with `7.1-audio-inverted`
- `6.1-audio-inverted` with `7.1-audio`

# 5. Generate spectograms

Generates spectograms for all audio files for visual inspection.

Spectograms for mixed audio should be completely or almost completely blank. Because we mixed with the inverse of the audio file.

# 6. Calculate difference

Calculate difference using `ffmpeg` filter `volumedetect`. If `mean_volume` is below `80db` then both files are identical or nearly identical.

# 7. Compare video

Compare video using `ffmpeg` filter `ssim`. The closer `SSIM` ouput is to `1`, the more identical the files are.

# LICENSE

MIT
