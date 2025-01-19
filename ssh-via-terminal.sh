#!/bin/bash
# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title SSH via terminal
# @raycast.mode silent
# @raycast.packageName System

#
# Optional parameters:
# @raycast.argument1 { "type": "text", "placeholder": "hostname"}
# @raycast.icon 💻
#
# Documentation:
# @raycast.description apply command and boot terminal
# @raycast.author nagauta
# @raycast.authorURL https://github.com/nagauta
hostname=$1

osascript -e "
tell application \"Terminal\"
    do script \"ssh $hostname\"
    activate
end tell"