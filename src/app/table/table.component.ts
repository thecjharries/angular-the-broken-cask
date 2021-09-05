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

import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { TableConfigType } from "../data/data.interfaces";
import { sanitizeId } from "../helpers/sanitize_id";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit, OnChanges {

  @Input()
  public tableConfig: TableConfigType = {} as any;

  @Input()
  public tableContent: any;

  public activeRoll: number = 2;

  constructor() {}

  public getSanitizedId(): string {
    return sanitizeId(this.tableConfig.title);
  }

  public roll(rollValue: number) {
    this.activeRoll = rollValue;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

  }

}
