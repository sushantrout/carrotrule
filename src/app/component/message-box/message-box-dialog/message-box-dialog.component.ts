import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-message-box-dialog',
  templateUrl: './message-box-dialog.component.html',
  styleUrls: ['./message-box-dialog.component.css'],
})
export class MessageBoxDialogComponent implements OnInit {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<MessageBoxDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData
  ) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }
  ngOnInit(): void {}

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
