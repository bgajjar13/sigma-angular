import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  imports: [],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.scss'
})
export class SidenavbarComponent {
  logoPath: string = 'assets/images/main-logo.svg';
  SafeIcon: string = 'assets/images/safe-ico.svg';
}
