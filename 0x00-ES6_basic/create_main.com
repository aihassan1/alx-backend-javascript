#!/usr/bin/env bash

# This script is used to generate the list of all the files in the repository
i=0 
for i in {1..12}
do 
touch "$i-main.js"
done
