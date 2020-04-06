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

package teams_v1

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

// NewTeamsV1DeleteTeamParams creates a new TeamsV1DeleteTeamParams object
// with the default values initialized.
func NewTeamsV1DeleteTeamParams() *TeamsV1DeleteTeamParams {
	var ()
	return &TeamsV1DeleteTeamParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewTeamsV1DeleteTeamParamsWithTimeout creates a new TeamsV1DeleteTeamParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewTeamsV1DeleteTeamParamsWithTimeout(timeout time.Duration) *TeamsV1DeleteTeamParams {
	var ()
	return &TeamsV1DeleteTeamParams{

		timeout: timeout,
	}
}

// NewTeamsV1DeleteTeamParamsWithContext creates a new TeamsV1DeleteTeamParams object
// with the default values initialized, and the ability to set a context for a request
func NewTeamsV1DeleteTeamParamsWithContext(ctx context.Context) *TeamsV1DeleteTeamParams {
	var ()
	return &TeamsV1DeleteTeamParams{

		Context: ctx,
	}
}

// NewTeamsV1DeleteTeamParamsWithHTTPClient creates a new TeamsV1DeleteTeamParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewTeamsV1DeleteTeamParamsWithHTTPClient(client *http.Client) *TeamsV1DeleteTeamParams {
	var ()
	return &TeamsV1DeleteTeamParams{
		HTTPClient: client,
	}
}

/*TeamsV1DeleteTeamParams contains all the parameters to send to the API endpoint
for the teams v1 delete team operation typically these are written to a http.Request
*/
type TeamsV1DeleteTeamParams struct {

	/*Owner
	  Owner of the namespace

	*/
	Owner string
	/*Team
	  Team under namesapce

	*/
	Team string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the teams v1 delete team params
func (o *TeamsV1DeleteTeamParams) WithTimeout(timeout time.Duration) *TeamsV1DeleteTeamParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the teams v1 delete team params
func (o *TeamsV1DeleteTeamParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the teams v1 delete team params
func (o *TeamsV1DeleteTeamParams) WithContext(ctx context.Context) *TeamsV1DeleteTeamParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the teams v1 delete team params
func (o *TeamsV1DeleteTeamParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the teams v1 delete team params
func (o *TeamsV1DeleteTeamParams) WithHTTPClient(client *http.Client) *TeamsV1DeleteTeamParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the teams v1 delete team params
func (o *TeamsV1DeleteTeamParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithOwner adds the owner to the teams v1 delete team params
func (o *TeamsV1DeleteTeamParams) WithOwner(owner string) *TeamsV1DeleteTeamParams {
	o.SetOwner(owner)
	return o
}

// SetOwner adds the owner to the teams v1 delete team params
func (o *TeamsV1DeleteTeamParams) SetOwner(owner string) {
	o.Owner = owner
}

// WithTeam adds the team to the teams v1 delete team params
func (o *TeamsV1DeleteTeamParams) WithTeam(team string) *TeamsV1DeleteTeamParams {
	o.SetTeam(team)
	return o
}

// SetTeam adds the team to the teams v1 delete team params
func (o *TeamsV1DeleteTeamParams) SetTeam(team string) {
	o.Team = team
}

// WriteToRequest writes these params to a swagger request
func (o *TeamsV1DeleteTeamParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param owner
	if err := r.SetPathParam("owner", o.Owner); err != nil {
		return err
	}

	// path param team
	if err := r.SetPathParam("team", o.Team); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}