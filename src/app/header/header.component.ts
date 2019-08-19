import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  status: boolean;

  constructor(private router: Router, private userService: UserService) {
    userService.getLoginStatus.subscribe(r => this.changeStatus(r));
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(): void {
    UserService.getUserInfo().subscribe(user => {
      if (user != null) {
        this.status = user.status;
      }
    });
  }

  changeStatus(status: boolean) {
    this.status = status;
  }

  logout() {
    if (confirm('确认登出您的账户吗？')) {
      window.sessionStorage.removeItem('userInfo');
      this.userService.getLoginStatus.emit(false);
    }
  }
}
