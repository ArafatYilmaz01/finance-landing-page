import { Component, ElementRef, HostListener, Inject, OnInit} from '@angular/core';
import { DialogRef } from '../dialog/dialog-ref';
import { DIALOG_DATA } from '../dialog/dialog-tokens';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private dialogRef: DialogRef,
    private eRef: ElementRef
  ) {}

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.close();
    } 
  }


  close() {
    this.dialogRef.close();
  }
}
