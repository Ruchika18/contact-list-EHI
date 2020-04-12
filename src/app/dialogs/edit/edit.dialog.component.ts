import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../../dialogs/edit/edit.dialog.html',
  styleUrls: ['../../dialogs/edit/edit.dialog.css']
})
export class EditDialogComponent {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
      if (this.formControl.hasError('required')) {
        return 'Required field';
      } else if(this.formControl.hasError('lastName') || this.formControl.hasError('firstName')) {
        return 'Not a valid input';
      }
    }

  getEmailErrorMessage() {
      if (this.formControl.hasError('email')) {
        return 'Not valid Email Id';
      }
   }

   getMobileErrorMessage() {
         if (this.formControl.hasError('mobileNo')) {
           return 'Not valid Mobile Number';
         }
      }


  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.dataService.editContact(this.data.id, this.data).subscribe();
  }
}
