#!/bin/bash
set -e  

git clone https://dparra0007@gitlab.com/dparra0007/W53-USERAPI-CONFIG.git
source ./W53-USERAPI-CONFIG/env.sh

exec npm start