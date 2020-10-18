import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  phoneNumber: string;
  otp;

  constructor() { }

  ngOnInit(): void {
  }

  generateOTP() {
    // TODO: Validate phone number and generate OTP after user clicks on submit button
  }

  verifyOTP() {
    // TODO: Validate entered OTP with the firebase generated OTP and login the user if valid
  }
}
