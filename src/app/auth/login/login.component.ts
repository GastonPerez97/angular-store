import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    })

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
    }

    loginUser() {
        const { email, password } = this.loginForm.value;
        this.authService.loginUser(email, password);
    }
}
