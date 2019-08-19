import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mobile = false;

  constructor() {
  }

  ngOnInit() {
    this.isMobile();
  }

  isMobile(): void {
    const plat = navigator.platform;
    const wid = window.screen.width;
    // window.console.log(plat);
    // window.console.log(wid);
    if (wid <= 375) {
      this.mobile = true;
    }
  }
}
