#!/bin/bash

# displays
echo "Semi-automatically release PKM-blog git!"
echo "Plz execute this script after closing the Obsidian!!!"
echo 

# protect
if [ $# -lt 2 ]; then
    echo "Usage:" $0 "[tag_name] [date]"
    exit -1
fi

# init vars
tag_name=$1
date=$2

# DO
git checkout -b release-${tag_name} dev

git checkout master
git merge --no-ff release-${tag_name} -m "Merge branch 'release-${tag_name}'"
git push

git checkout dev
git merge --no-ff release-${tag_name} -m "Merge branch 'release-${tag_name}' into dev"
git push

git branch -d release-${tag_name}

git tag -a v${tag_name} master -m "v${tag_name}: Update PKM-blog on ${date}"
git push --tags
