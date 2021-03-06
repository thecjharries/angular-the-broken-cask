// Copyright 2021 CJ Harries
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, OnInit } from '@angular/core';
import { StaticDataService } from "../static-data.service";
import {StaticDataType} from "../data/data.interfaces";

@Component({
  selector: 'app-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.less']
})
export class TableWrapperComponent implements OnInit {

  public tables: Array<StaticDataType>

  constructor(
    private staticDataService: StaticDataService,
  ) {
    this.tables = this.staticDataService.getTables()
  }

  ngOnInit(): void {
  }

}
