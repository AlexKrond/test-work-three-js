#!/usr/bin/env bash

npm install

npx webpack --config ./webpack.production.config.js

npm start
