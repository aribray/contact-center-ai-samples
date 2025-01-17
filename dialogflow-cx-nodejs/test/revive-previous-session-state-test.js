// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {assert} = require('chai');
const {describe, it} = require('mocha');
const execSync = require('child_process').execSync;
const exec = cmd => execSync(cmd, {encoding: 'utf8'});

describe('revive previous session state', () => {
  const cmd = 'node revive-previous-session-state.js';

  const projectId = process.env.GCLOUD_PROJECT;
  const location = 'global';
  const agentId = '5d23f659-cd71-43e9-8fb2-b69cd9896370';
  const languageCode = 'en';

  it('should include parameters revived from previous session state"', async () => {
    const output = exec(
      `${cmd} ${projectId} ${location} ${agentId} 'Hello!' ${languageCode}`
    );
    assert.include(output, 'firstName');
  });
});
