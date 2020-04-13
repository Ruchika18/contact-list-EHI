import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, Validators} from '@angular/forms';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})

export class AddDialogComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              public dataService: DataService) {
              }

  public data: any = {};

  ngOnInit() {
       this.data.status = "inactive";
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    if (this.formControl.hasError('required')) {
      return 'Required field';
    } else if(this.formControl.hasError('email')) {
      return 'Not a valid email';
    }
  }

  getEmailErrorMessage() {
      if (this.formControl.hasError('required')) {
        return 'Not a valid email';
      }
   }

  submit() {
  // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
     this.dataService.createContact(this.data).subscribe();
  }

  statusChanged(value): void {
    if(value.checked === true) {
       this.data.status = "active";
    } else {
       this.data.status = "inactive";
    }
  }
  keyPress(event: any) {
      const pattern = /[0-9\+\-\ ]/;

      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
   }
}
