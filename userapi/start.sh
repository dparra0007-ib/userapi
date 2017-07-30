#!/bin/bash
set -e  

git clone $GLOBALCONF
source $GLOBALCONFFILE

git clone $SYSTEMCONF
cd W53-USERAPI-CONFIG
git checkout servicebus
cd ..
source $SYSTEMCONFFILE

exec npm start