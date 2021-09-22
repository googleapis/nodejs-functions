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

function main() {
  // [START functions_list_functions_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The project and location from which the function should be listed,
   *  specified in the format `projects/* /locations/*`
   *  If you want to list functions in all locations, use "-" in place of a
   *  location. When listing functions in all locations, if one or more
   *  location(s) are unreachable, the response will contain functions from all
   *  reachable locations along with the names of any unreachable locations.
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of functions to return per call.
   */
  // const pageSize = 1234
  /**
   *  The value returned by the last
   *  `ListFunctionsResponse`; indicates that
   *  this is a continuation of a prior `ListFunctions` call, and that the
   *  system should return the next page of data.
   */
  // const pageToken = 'abc123'

  // Imports the Functions library
  const {CloudFunctionsServiceClient} = require('@google-cloud/functions').v1;

  // Instantiates a client
  const functionsClient = new CloudFunctionsServiceClient();

  async function listFunctions() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await functionsClient.listFunctionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listFunctions();
  // [END functions_list_functions_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
