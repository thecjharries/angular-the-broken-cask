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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.less']
})
export class RollComponent implements OnInit {

  @Input()
  public min: number = 0;

  @Input()
  public max: number = 0;

  @Output()
  newRollEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public roll() {
    this.newRollEvent.emit(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
  }

  public clear() {
    this.newRollEvent.emit(-1)
  }
}
