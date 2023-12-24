import { Component } from '@angular/core';
import { LoginComponent } from '../home/login/login.component';
import { DialogService } from '../home/dialog/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dialog: DialogService) {}

  openLoginDialog(ev: any) {
    ev.stopPropagation();
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(() => {
      // Subscription runs after the dialog closes
      console.log('Dialog closed!');
    });
  }
}
