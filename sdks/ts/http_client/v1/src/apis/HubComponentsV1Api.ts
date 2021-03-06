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

/* tslint:disable */
/* eslint-disable */
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
 */


import * as runtime from '../runtime';
import {
    RuntimeError,
    RuntimeErrorFromJSON,
    RuntimeErrorToJSON,
    V1HubComponent,
    V1HubComponentFromJSON,
    V1HubComponentToJSON,
    V1ListHubComponentsResponse,
    V1ListHubComponentsResponseFromJSON,
    V1ListHubComponentsResponseToJSON,
} from '../models';

export interface CreateHubComponentRequest {
    owner: string;
    body: V1HubComponent;
}

export interface DeleteHubComponentRequest {
    owner: string;
    uuid: string;
}

export interface GetHubComponentRequest {
    owner: string;
    uuid: string;
}

export interface ListHubComponebtNamesRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface ListHubComponentsRequest {
    owner: string;
    offset?: number;
    limit?: number;
    sort?: string;
    query?: string;
}

export interface PatchHubComponentRequest {
    owner: string;
    componentUuid: string;
    body: V1HubComponent;
}

export interface UpdateHubComponentRequest {
    owner: string;
    componentUuid: string;
    body: V1HubComponent;
}

/**
 * Polyaxon sdk
 */
export class HubComponentsV1Api extends runtime.BaseAPI {

    /**
     * Create hub component
     */
    async createHubComponentRaw(requestParameters: CreateHubComponentRequest): Promise<runtime.ApiResponse<V1HubComponent>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling createHubComponent.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createHubComponent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1HubComponentToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HubComponentFromJSON(jsonValue));
    }

    /**
     * Create hub component
     */
    async createHubComponent(requestParameters: CreateHubComponentRequest): Promise<V1HubComponent> {
        const response = await this.createHubComponentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete hub component
     */
    async deleteHubComponentRaw(requestParameters: DeleteHubComponentRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling deleteHubComponent.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling deleteHubComponent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete hub component
     */
    async deleteHubComponent(requestParameters: DeleteHubComponentRequest): Promise<void> {
        await this.deleteHubComponentRaw(requestParameters);
    }

    /**
     * Get hub component
     */
    async getHubComponentRaw(requestParameters: GetHubComponentRequest): Promise<runtime.ApiResponse<V1HubComponent>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling getHubComponent.');
        }

        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling getHubComponent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components/{uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HubComponentFromJSON(jsonValue));
    }

    /**
     * Get hub component
     */
    async getHubComponent(requestParameters: GetHubComponentRequest): Promise<V1HubComponent> {
        const response = await this.getHubComponentRaw(requestParameters);
        return await response.value();
    }

    /**
     * List hub component names
     */
    async listHubComponebtNamesRaw(requestParameters: ListHubComponebtNamesRequest): Promise<runtime.ApiResponse<V1ListHubComponentsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listHubComponebtNames.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components/names`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListHubComponentsResponseFromJSON(jsonValue));
    }

    /**
     * List hub component names
     */
    async listHubComponebtNames(requestParameters: ListHubComponebtNamesRequest): Promise<V1ListHubComponentsResponse> {
        const response = await this.listHubComponebtNamesRaw(requestParameters);
        return await response.value();
    }

    /**
     * List hub components
     */
    async listHubComponentsRaw(requestParameters: ListHubComponentsRequest): Promise<runtime.ApiResponse<V1ListHubComponentsResponse>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling listHubComponents.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ListHubComponentsResponseFromJSON(jsonValue));
    }

    /**
     * List hub components
     */
    async listHubComponents(requestParameters: ListHubComponentsRequest): Promise<V1ListHubComponentsResponse> {
        const response = await this.listHubComponentsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Patch hub component
     */
    async patchHubComponentRaw(requestParameters: PatchHubComponentRequest): Promise<runtime.ApiResponse<V1HubComponent>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling patchHubComponent.');
        }

        if (requestParameters.componentUuid === null || requestParameters.componentUuid === undefined) {
            throw new runtime.RequiredError('componentUuid','Required parameter requestParameters.componentUuid was null or undefined when calling patchHubComponent.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchHubComponent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components/{component.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"component.uuid"}}`, encodeURIComponent(String(requestParameters.componentUuid))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1HubComponentToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HubComponentFromJSON(jsonValue));
    }

    /**
     * Patch hub component
     */
    async patchHubComponent(requestParameters: PatchHubComponentRequest): Promise<V1HubComponent> {
        const response = await this.patchHubComponentRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update hub component
     */
    async updateHubComponentRaw(requestParameters: UpdateHubComponentRequest): Promise<runtime.ApiResponse<V1HubComponent>> {
        if (requestParameters.owner === null || requestParameters.owner === undefined) {
            throw new runtime.RequiredError('owner','Required parameter requestParameters.owner was null or undefined when calling updateHubComponent.');
        }

        if (requestParameters.componentUuid === null || requestParameters.componentUuid === undefined) {
            throw new runtime.RequiredError('componentUuid','Required parameter requestParameters.componentUuid was null or undefined when calling updateHubComponent.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateHubComponent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/api/v1/orgs/{owner}/components/{component.uuid}`.replace(`{${"owner"}}`, encodeURIComponent(String(requestParameters.owner))).replace(`{${"component.uuid"}}`, encodeURIComponent(String(requestParameters.componentUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: V1HubComponentToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => V1HubComponentFromJSON(jsonValue));
    }

    /**
     * Update hub component
     */
    async updateHubComponent(requestParameters: UpdateHubComponentRequest): Promise<V1HubComponent> {
        const response = await this.updateHubComponentRaw(requestParameters);
        return await response.value();
    }

}
