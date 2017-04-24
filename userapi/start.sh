#!/bin/bash
set -e  

git clone $GLOBALCONF
source $GLOBALCONFFILE

git clone $SYSTEMCONF
source $SYSTEMCONFFILE

exec npm start