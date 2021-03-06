// Copyright 2018-2020 Polyaxon, Inc.
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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.0.89
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1User from '../model/V1User';

/**
* UsersV1 service.
* @module api/UsersV1Api
* @version 1.0.89
*/
export default class UsersV1Api {

    /**
    * Constructs a new UsersV1Api. 
    * Polyaxon sdk
    * @alias module:api/UsersV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UsersV1Api~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current user
     * @param {module:api/UsersV1Api~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1User}
     */
    getUser(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1User;
      return this.apiClient.callApi(
        '/api/v1/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchUser operation.
     * @callback module:api/UsersV1Api~patchUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch current user
     * @param {module:model/V1User} body 
     * @param {module:api/UsersV1Api~patchUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1User}
     */
    patchUser(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1User;
      return this.apiClient.callApi(
        '/api/v1/users', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UsersV1Api~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update current user
     * @param {module:model/V1User} body 
     * @param {module:api/UsersV1Api~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1User}
     */
    updateUser(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1User;
      return this.apiClient.callApi(
        '/api/v1/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
