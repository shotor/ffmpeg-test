#!/bin/bash

DL_6_1_URL="https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-n6.1-latest-linux64-gpl-6.1.tar.xz"
DL_7_1_URL="https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-n7.1-latest-linux64-gpl-7.1.tar.xz"

rm -rf ./bin

mkdir -p ./bin/6.1
mkdir -p ./bin/7.1

download_and_extract() {
    local url=$1
    local version=$2
    local temp_file="ffmpeg-${version}.tar.xz"
    local temp_dir="temp-${version}"
    
    echo "Downloading FFmpeg ${version}..."
    curl -L "$url" -o "$temp_file"
    
    echo "Extracting FFmpeg ${version}..."
    mkdir "$temp_dir"
    tar -xJf "$temp_file" -C "$temp_dir"
    
    echo "Moving bin folder..."
    mv "$temp_dir"/*/bin/* "./bin/${version}/"
    
    echo "Cleaning up..."
    rm -rf "$temp_file" "$temp_dir"
}

download_and_extract "$DL_6_1_URL" "6.1"
download_and_extract "$DL_7_1_URL" "7.1"
