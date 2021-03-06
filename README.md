

# ```Bot Info```
<p align="center">
<a href="https://github.com/darlyn1234/followers"><img title="Followers" src="https://img.shields.io/github/followers/darlyn1234?color=red&style=flat-square"></a>
<a href="https://github.com/darlyn1234/darimi-bot/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/darlyn1234/darimi-bot?color=blue&style=flat-square"></a>
<a href="https://github.com/darlyn1234/darimi-bot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/darlyn1234/darimi-bot?color=red&style=flat-square"></a>
<a href="https://github.com/darlyn1234/darimi-bot/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/darlyn1234/darimi-bot?label=Watchers&color=blue&style=flat-square"></a>
<a href="https://github.com/darlyn1234/darimi-bot"><img title="Open Source" src="https://img.shields.io/badge/Author-Xeon%20Bot%20Inc.-red?v=103"></a>
<a href="https://github.com/darlyn1234/darimi-bot/"><img title="Size" src="https://img.shields.io/github/repo-size/darlyn1234/darimi-bot?style=flat-square&color=green"></a>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2darlyn1234%2Fdarimi-bot&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2300FF6D&title=hits&edge_flat=false"/></a>
<a href="https://github.com/darlyn1234/darimi-bot/graphs/commit-activity"><img height="20" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg"></a>&nbsp;&nbsp;
</p>
<p align='center'>
    </p>

## ` BUILDPACKS`

```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
https://github.com/DuckyTeam/heroku-buildpack-imagemagick
heroku/nodejs
```

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/darlyn1234/darimi-bot/)

# Install Manually 👇
## `Requirements`
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)
* [Libwebp](https://developers.google.com/speed/webp/download)
* Any text editor
## `Clone Repo & Installation dependencies`
```bash
git clone https://github.com/
cd darimi-bot
npm start
```
## `For Termux/Ssh/Ubuntu`
```bash
apt update
apt upgrade
pkg update && pkg upgrade
pkg install bash
pkg install libwebp
pkg install git -y
pkg install nodejs -y 
pkg install ffmpeg -y 
pkg install wget
pkg install imagemagick -y
git clone https://github.com/
cd 
npm start
```
## `For VPS`
```bash
apt install nodejs 
apt install git 
apt apt install ffmpeg 
apt apt install libwebp 
apt apt install imagemagick
apt install bash
git clone https://github.com/
cd 
npm start
```
## `For 24/7 Activation`
```bash
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```