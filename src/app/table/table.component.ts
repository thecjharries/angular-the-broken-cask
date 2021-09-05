import { Component, Input, OnInit } from '@angular/core';

interface TableType {
  columns: Array<{ title: string; dataProperty: string; sortable?: boolean; filterable?: boolean }>
}

const LocationTableType: any = {
  columns: [
    {title: "2D6", dataProperty: "roll", sortable: true, filterable: true},
    {title: "Location", dataProperty: "location", sortable: true, filterable: true},
  ]
}

const LocationContent: Array<{ roll: number; location: string }> = [
  {roll: 2, location: "Atop a sleeping creature"},
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent<A> implements OnInit {

  @Input()
  public config: TableType;

  @Input()
  public content: any;

  constructor() {
    this.config = LocationTableType;
    this.content = LocationContent;
  }

  ngOnInit(): void {
  }

}
