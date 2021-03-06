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

import ApiClient from '../ApiClient';
import V1Notification from './V1Notification';

/**
 * The V1Plugins model module.
 * @module model/V1Plugins
 * @version 1.0.89
 */
class V1Plugins {
    /**
     * Constructs a new <code>V1Plugins</code>.
     * @alias module:model/V1Plugins
     */
    constructor() { 
        
        V1Plugins.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Plugins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Plugins} obj Optional instance to populate.
     * @return {module:model/V1Plugins} The populated <code>V1Plugins</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Plugins();

            if (data.hasOwnProperty('auth')) {
                obj['auth'] = ApiClient.convertToType(data['auth'], 'Boolean');
            }
            if (data.hasOwnProperty('docker')) {
                obj['docker'] = ApiClient.convertToType(data['docker'], 'Boolean');
            }
            if (data.hasOwnProperty('shm')) {
                obj['shm'] = ApiClient.convertToType(data['shm'], 'Boolean');
            }
            if (data.hasOwnProperty('collect_artifacts')) {
                obj['collect_artifacts'] = ApiClient.convertToType(data['collect_artifacts'], 'Boolean');
            }
            if (data.hasOwnProperty('collect_logs')) {
                obj['collect_logs'] = ApiClient.convertToType(data['collect_logs'], 'Boolean');
            }
            if (data.hasOwnProperty('collect_resources')) {
                obj['collect_resources'] = ApiClient.convertToType(data['collect_resources'], 'String');
            }
            if (data.hasOwnProperty('sync_statuses')) {
                obj['sync_statuses'] = ApiClient.convertToType(data['sync_statuses'], 'Boolean');
            }
            if (data.hasOwnProperty('log_level')) {
                obj['log_level'] = ApiClient.convertToType(data['log_level'], 'String');
            }
            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = ApiClient.convertToType(data['notifications'], [V1Notification]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} auth
 */
V1Plugins.prototype['auth'] = undefined;

/**
 * @member {Boolean} docker
 */
V1Plugins.prototype['docker'] = undefined;

/**
 * @member {Boolean} shm
 */
V1Plugins.prototype['shm'] = undefined;

/**
 * @member {Boolean} collect_artifacts
 */
V1Plugins.prototype['collect_artifacts'] = undefined;

/**
 * @member {Boolean} collect_logs
 */
V1Plugins.prototype['collect_logs'] = undefined;

/**
 * @member {String} collect_resources
 */
V1Plugins.prototype['collect_resources'] = undefined;

/**
 * @member {Boolean} sync_statuses
 */
V1Plugins.prototype['sync_statuses'] = undefined;

/**
 * @member {String} log_level
 */
V1Plugins.prototype['log_level'] = undefined;

/**
 * @member {Array.<module:model/V1Notification>} notifications
 */
V1Plugins.prototype['notifications'] = undefined;






export default V1Plugins;

