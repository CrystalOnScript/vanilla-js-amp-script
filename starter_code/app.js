/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

const express = require('express')
const app = express()
const port = 8080
const ampCors = require('amp-toolbox-cors')
const { join } = require('path')
const { promisify } = require('util')
const { readFile } = require('fs')
const readFileAsync = promisify(readFile)

const ampCorsMiddleware = ampCors({ verbose: true })
app.use(ampCors({
  verifyOrigin: false
}));

app.use(ampCorsMiddleware);

app.use('/js', express.static(join(__dirname, 'public/js')))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

app.post('/form', function (req, res) {
  res.json({});
})

app.listen(port, () => console.log(`App listening on port ${port}!`))