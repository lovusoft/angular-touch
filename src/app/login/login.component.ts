import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  verificationStatus = true;

  loginForm = this.formBuilder.group({
    userId: ['', Validators.required],
    userPassword: ['', Validators.required],
    verificationCode: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
  }

  login(): void {
    this.userService.userLogin(this.loginForm.value);
    this.verificationStatus = false;
  }
}
