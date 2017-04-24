#!/bin/bash
set -e  

git clone $SYSTEMCONF
source $SYSTEMCONFFILE

exec npm start