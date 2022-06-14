// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START cloudfunctions_v2beta_generated_FunctionService_GenerateUploadUrl_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location in which the Google Cloud Storage signed URL
   *  should be generated, specified in the format `projects/* /locations/*`.
   */
  // const parent = 'abc123'

  // Imports the Functions library
  const {FunctionServiceClient} = require('@google-cloud/functions').v2beta;

  // Instantiates a client
  const functionsClient = new FunctionServiceClient();

  async function callGenerateUploadUrl() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await functionsClient.generateUploadUrl(request);
    console.log(response);
  }

  callGenerateUploadUrl();
  // [END cloudfunctions_v2beta_generated_FunctionService_GenerateUploadUrl_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
