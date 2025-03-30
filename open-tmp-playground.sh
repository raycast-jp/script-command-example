#!/bin/bash
# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Open TMP Playground
# @raycast.mode silent
# @raycast.packageName System

#
# Optional parameters:
# @raycast.argument1 { "type": "text", "placeholder": "title"}
# @raycast.icon 🎮
#
# Documentation:
# @raycast.description open tmp playground
# @raycast.author nagauta
# @raycast.authorURL https://github.com/nagauta
title=$1

# 日付を取得（YYYYMMDD形式）
date_str=$(date +%Y%m%d)

# ディレクトリ名を作成
dir_name="$HOME/Documents/tmp/${date_str}_${title}"

# ディレクトリを作成
mkdir -p "$dir_name"

# Cursorでディレクトリを開く
cursor -r "$dir_name"

