import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = new User();
  status: boolean;

  constructor(private userService: UserService) {
    userService.getLoginStatus.subscribe(r => this.changeStatus(r));
  }

  ngOnInit() {
    this.getUserInfo();
  }

  changeStatus(status: boolean) {
    this.status = status;
  }

  getUserInfo(): void {
    UserService.getUserInfo().subscribe(user => {
      if (user != null) {
        this.user = user;
        this.userService.getLoginStatus.emit(this.user.status);
      }
    });
  }
}
