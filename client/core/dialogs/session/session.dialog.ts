import {
    MatDialogRef,
    MAT_DIALOG_DATA
  } from '@angular/material/dialog';
  
  import {
    Component,
    Inject
  } from '@angular/core';
  
  import { Session } from '../../models';
  
  @Component({
    selector: 'session-dialog',
    templateUrl: 'session.dialog.html'
  })
  export class SessionDialog {
    constructor(
      public dialog: MatDialogRef<SessionDialog>,
      @Inject(MAT_DIALOG_DATA) public session: Session
    ) { }
  }
  