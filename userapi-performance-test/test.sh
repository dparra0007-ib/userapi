#!/bin/bash
set -e  


curl --request GET --url 'https://api.getpostman.com/environments/651996-b80ed237-9179-35ec-d8a1-35d574e118c8' --header 'X-Api-Key: 100822fe2bd7454eb916c8ebdd4be266' > ci.json
wget -O collection.json https://www.getpostman.com/collections/6d9fe4f1a0033de5a2af
bzt /bzt-configs/test.yml -o modules.blazemeter.report-name="$REPORT"