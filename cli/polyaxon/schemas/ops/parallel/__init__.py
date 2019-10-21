#!/usr/bin/python
#
# Copyright 2019 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

from marshmallow import fields

from polyaxon.schemas.base import BaseConfig, BaseOneOfSchema, BaseSchema
from polyaxon.schemas.ops.parallel.bo import BOConfig, BOSchema
from polyaxon.schemas.ops.parallel.early_stopping_policies import EarlyStoppingSchema
from polyaxon.schemas.ops.parallel.grid_search import GridSearchConfig, GridSearchSchema
from polyaxon.schemas.ops.parallel.hyperband import HyperbandConfig, HyperbandSchema
from polyaxon.schemas.ops.parallel.metrics import SearchMetricSchema
from polyaxon.schemas.ops.parallel.random_search import (
    RandomSearchConfig,
    RandomSearchSchema,
)
from polyaxon.schemas.ops.parallel.sequential import (
    SequentialSearchConfig,
    SequentialSearchSchema,
)


class ParallelAlgorithmSchema(BaseOneOfSchema):
    TYPE_FIELD = "kind"
    TYPE_FIELD_REMOVE = False
    SCHEMAS = {
        SequentialSearchConfig.IDENTIFIER: SequentialSearchSchema,
        GridSearchConfig.IDENTIFIER: GridSearchSchema,
        RandomSearchConfig.IDENTIFIER: RandomSearchSchema,
        HyperbandConfig.IDENTIFIER: HyperbandSchema,
        BOConfig.IDENTIFIER: BOSchema,
    }


class ParallelSchema(BaseSchema):
    concurrency = fields.Int(allow_none=True)
    algorithm = fields.Nested(ParallelAlgorithmSchema, allow_none=True)
    early_stopping = fields.Nested(EarlyStoppingSchema, many=True, allow_none=True)

    @staticmethod
    def schema_config():
        return ParallelConfig


class ParallelConfig(BaseConfig):
    SCHEMA = ParallelSchema
    IDENTIFIER = "parallel"
    REDUCED_ATTRIBUTES = ["concurrency", "algorithm", "early_stopping"]

    def __init__(self, concurrency=None, algorithm=None, early_stopping=None):
        self.concurrency = concurrency
        self.algorithm = algorithm
        self.early_stopping = early_stopping