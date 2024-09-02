#!/bin/bash

if [ "$1" = "data" ]; then
    python3.11 src/util/data-helper.py -f public/tour-data.json -o public/tour-data-update.json
elif [ "$1" = "deploy" ]; then
    ng deploy --base-href=/minigolf-tour/ --repo=git@github.com:kylemv/minigolf-tour.git
fi
