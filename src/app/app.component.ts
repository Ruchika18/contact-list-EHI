import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from './services/data.service';
import {MatDialog } from '@angular/material/dialog';
import {Contact} from './models/contact';
import {DataSource} from '@angular/cdk/collections';
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  displayedColumns = ['id', 'firstName', 'lastName', 'email', 'mobileNo', 'status', 'actions'];
  dataSource: any | null;

  constructor(
        public dialog: MatDialog,
        public dataService: DataService
        ) {}

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

  deleteItem(i: number, row: Contact) {
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
}
