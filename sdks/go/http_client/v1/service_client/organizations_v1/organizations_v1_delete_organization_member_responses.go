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

package organizations_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// OrganizationsV1DeleteOrganizationMemberReader is a Reader for the OrganizationsV1DeleteOrganizationMember structure.
type OrganizationsV1DeleteOrganizationMemberReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *OrganizationsV1DeleteOrganizationMemberReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewOrganizationsV1DeleteOrganizationMemberOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewOrganizationsV1DeleteOrganizationMemberNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewOrganizationsV1DeleteOrganizationMemberForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewOrganizationsV1DeleteOrganizationMemberNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewOrganizationsV1DeleteOrganizationMemberDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewOrganizationsV1DeleteOrganizationMemberOK creates a OrganizationsV1DeleteOrganizationMemberOK with default headers values
func NewOrganizationsV1DeleteOrganizationMemberOK() *OrganizationsV1DeleteOrganizationMemberOK {
	return &OrganizationsV1DeleteOrganizationMemberOK{}
}

/*OrganizationsV1DeleteOrganizationMemberOK handles this case with default header values.

A successful response.
*/
type OrganizationsV1DeleteOrganizationMemberOK struct {
}

func (o *OrganizationsV1DeleteOrganizationMemberOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/members/{user}][%d] organizationsV1DeleteOrganizationMemberOK ", 200)
}

func (o *OrganizationsV1DeleteOrganizationMemberOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewOrganizationsV1DeleteOrganizationMemberNoContent creates a OrganizationsV1DeleteOrganizationMemberNoContent with default headers values
func NewOrganizationsV1DeleteOrganizationMemberNoContent() *OrganizationsV1DeleteOrganizationMemberNoContent {
	return &OrganizationsV1DeleteOrganizationMemberNoContent{}
}

/*OrganizationsV1DeleteOrganizationMemberNoContent handles this case with default header values.

No content.
*/
type OrganizationsV1DeleteOrganizationMemberNoContent struct {
	Payload interface{}
}

func (o *OrganizationsV1DeleteOrganizationMemberNoContent) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/members/{user}][%d] organizationsV1DeleteOrganizationMemberNoContent  %+v", 204, o.Payload)
}

func (o *OrganizationsV1DeleteOrganizationMemberNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *OrganizationsV1DeleteOrganizationMemberNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewOrganizationsV1DeleteOrganizationMemberForbidden creates a OrganizationsV1DeleteOrganizationMemberForbidden with default headers values
func NewOrganizationsV1DeleteOrganizationMemberForbidden() *OrganizationsV1DeleteOrganizationMemberForbidden {
	return &OrganizationsV1DeleteOrganizationMemberForbidden{}
}

/*OrganizationsV1DeleteOrganizationMemberForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type OrganizationsV1DeleteOrganizationMemberForbidden struct {
	Payload interface{}
}

func (o *OrganizationsV1DeleteOrganizationMemberForbidden) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/members/{user}][%d] organizationsV1DeleteOrganizationMemberForbidden  %+v", 403, o.Payload)
}

func (o *OrganizationsV1DeleteOrganizationMemberForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *OrganizationsV1DeleteOrganizationMemberForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewOrganizationsV1DeleteOrganizationMemberNotFound creates a OrganizationsV1DeleteOrganizationMemberNotFound with default headers values
func NewOrganizationsV1DeleteOrganizationMemberNotFound() *OrganizationsV1DeleteOrganizationMemberNotFound {
	return &OrganizationsV1DeleteOrganizationMemberNotFound{}
}

/*OrganizationsV1DeleteOrganizationMemberNotFound handles this case with default header values.

Resource does not exist.
*/
type OrganizationsV1DeleteOrganizationMemberNotFound struct {
	Payload interface{}
}

func (o *OrganizationsV1DeleteOrganizationMemberNotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/members/{user}][%d] organizationsV1DeleteOrganizationMemberNotFound  %+v", 404, o.Payload)
}

func (o *OrganizationsV1DeleteOrganizationMemberNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *OrganizationsV1DeleteOrganizationMemberNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewOrganizationsV1DeleteOrganizationMemberDefault creates a OrganizationsV1DeleteOrganizationMemberDefault with default headers values
func NewOrganizationsV1DeleteOrganizationMemberDefault(code int) *OrganizationsV1DeleteOrganizationMemberDefault {
	return &OrganizationsV1DeleteOrganizationMemberDefault{
		_statusCode: code,
	}
}

/*OrganizationsV1DeleteOrganizationMemberDefault handles this case with default header values.

An unexpected error response
*/
type OrganizationsV1DeleteOrganizationMemberDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the organizations v1 delete organization member default response
func (o *OrganizationsV1DeleteOrganizationMemberDefault) Code() int {
	return o._statusCode
}

func (o *OrganizationsV1DeleteOrganizationMemberDefault) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/orgs/{owner}/members/{user}][%d] OrganizationsV1_DeleteOrganizationMember default  %+v", o._statusCode, o.Payload)
}

func (o *OrganizationsV1DeleteOrganizationMemberDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *OrganizationsV1DeleteOrganizationMemberDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}