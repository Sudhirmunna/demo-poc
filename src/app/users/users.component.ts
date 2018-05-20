import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['position', 'name', 'status', 'location'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  name: string;
  position: number;
  status: string;
  location: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Sudhir', status: 'H1B', location: 'Richmond'},
  {position: 2, name: 'Kumar', status: 'H1B', location: 'Dallas'},
  {position: 3, name: 'Phani', status: 'OPT', location: 'Richmond'},
  {position: 4, name: 'Pavan', status: 'H1B', location: 'New York'},
  {position: 5, name: 'Satish', status: 'EAD', location: 'Richmond'},
  {position: 6, name: 'PK', status: 'H1B', location: 'DC'},
  {position: 7, name: 'Sudhir', status: 'OPT', location: 'Frisco'},
  {position: 8, name: 'Kumar', status: 'H1B', location: 'Richmond'},
  {position: 9, name: 'Phani', status: 'EAD', location: 'Irving'},
  {position: 10, name: 'Pavan', status: 'H1B', location: 'Richmond'},
  {position: 11, name: 'PK', status: 'H1B', location: 'Richmond'},
  {position: 12, name: 'Sudhir', status: 'GC', location: 'Devon'},
  {position: 13, name: 'Phani', status: 'OPT', location: 'Richmond'},
  {position: 14, name: 'Pavan', status: 'H1B', location: 'Richmond'},
  {position: 15, name: 'Kumar', status: 'GC', location: 'Kansas City'},
  {position: 16, name: 'Phani', status: 'H1B', location: 'Richmond'},
  {position: 17, name: 'Pavan', status: 'GC', location: 'Plano'},
  {position: 18, name: 'Sudhir', status: 'EAD', location: 'Richmond'},
  {position: 19, name: 'Kumar', status: 'H1B', location: 'MO'},
  {position: 20, name: 'PK', status: 'EAD', location: 'Richmond'}
];
