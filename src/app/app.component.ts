import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from './services/data.service';
import {HttpClient} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {Contact} from './models/issue';
import {DataSource} from '@angular/cdk/collections';
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'mobileNo', 'status', 'actions'];
  exampleDatabase: DataService | null;
  dataSource: any | null;
  index: number;
  id: number;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: DataService) {}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  ngOnInit() {
    this.loadData();
  }

  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
         this.loadData();
      }
    });
  }

  startEdit(row, i) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
            id: row.id,
            firstName: row.firstName,
            lastName: row.lastName,
            email: row.email,
             mobileNo: row.mobileNo,
             status: row.status
             }
    });

    dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
       this.loadData();

      }
   });
  }

  deleteItem(i: number, row) {
    this.index = i;
    this.id = row.id;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
      email: row.email,
       mobileNo: row.mobileNo,
       status: row.status
       }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.dataService.deleteContact(row.id).subscribe(response => {
                this.loadData();

        })
    }
    })
  }

  public loadData() {
    this.dataService.getAllContacts().subscribe(response => {
    this.dataSource = response;
    });
}
  public statusChanged(value, row) {
      if(value.checked === true) {
          row.status = "active";
      } else {
          row.status = "inactive";
      }
      this.dataService.editContact(row.id,row).subscribe();
   }
  disconnect() {}
}
