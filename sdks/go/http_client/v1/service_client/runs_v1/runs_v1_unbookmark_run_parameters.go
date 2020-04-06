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

// Code generated by go-swagger; DO NOT EDIT.

package runs_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
)

// NewRunsV1UnbookmarkRunParams creates a new RunsV1UnbookmarkRunParams object
// with the default values initialized.
func NewRunsV1UnbookmarkRunParams() *RunsV1UnbookmarkRunParams {
	var ()
	return &RunsV1UnbookmarkRunParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewRunsV1UnbookmarkRunParamsWithTimeout creates a new RunsV1UnbookmarkRunParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewRunsV1UnbookmarkRunParamsWithTimeout(timeout time.Duration) *RunsV1UnbookmarkRunParams {
	var ()
	return &RunsV1UnbookmarkRunParams{

		timeout: timeout,
	}
}

// NewRunsV1UnbookmarkRunParamsWithContext creates a new RunsV1UnbookmarkRunParams object
// with the default values initialized, and the ability to set a context for a request
func NewRunsV1UnbookmarkRunParamsWithContext(ctx context.Context) *RunsV1UnbookmarkRunParams {
	var ()
	return &RunsV1UnbookmarkRunParams{

		Context: ctx,
	}
}

// NewRunsV1UnbookmarkRunParamsWithHTTPClient creates a new RunsV1UnbookmarkRunParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewRunsV1UnbookmarkRunParamsWithHTTPClient(client *http.Client) *RunsV1UnbookmarkRunParams {
	var ()
	return &RunsV1UnbookmarkRunParams{
		HTTPClient: client,
	}
}

/*RunsV1UnbookmarkRunParams contains all the parameters to send to the API endpoint
for the runs v1 unbookmark run operation typically these are written to a http.Request
*/
type RunsV1UnbookmarkRunParams struct {

	/*Owner
	  Owner of the namespace

	*/
	Owner string
	/*Project
	  Project

	*/
	Project string
	/*UUID
	  Uuid identifier of the entity

	*/
	UUID string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) WithTimeout(timeout time.Duration) *RunsV1UnbookmarkRunParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) WithContext(ctx context.Context) *RunsV1UnbookmarkRunParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) WithHTTPClient(client *http.Client) *RunsV1UnbookmarkRunParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithOwner adds the owner to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) WithOwner(owner string) *RunsV1UnbookmarkRunParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithProject adds the project to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) WithProject(project string) *RunsV1UnbookmarkRunParams {
	o.SetProject(project)
	return o
}

// SetProject adds the project to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) SetProject(project string) {
	o.Project = project
}

// WithUUID adds the uuid to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) WithUUID(uuid string) *RunsV1UnbookmarkRunParams {
	o.SetUUID(uuid)
	return o
}

// SetUUID adds the uuid to the runs v1 unbookmark run params
func (o *RunsV1UnbookmarkRunParams) SetUUID(uuid string) {
	o.UUID = uuid
}

// WriteToRequest writes these params to a swagger request
func (o *RunsV1UnbookmarkRunParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param project
	if err := r.SetPathParam("project", o.Project); err != nil {
		return err
	}

	// path param uuid
	if err := r.SetPathParam("uuid", o.UUID); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}