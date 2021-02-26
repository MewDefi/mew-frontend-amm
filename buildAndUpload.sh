#!/usr/bin/bash

npm run build
aws s3 sync ./build s3://pikachu-frontend-amm --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --exclude '*.bat' --exclude '*.sh' --delete --profile pikachuFinance
