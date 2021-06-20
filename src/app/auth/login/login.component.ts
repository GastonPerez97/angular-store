import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    async loginUser() {
        const { email, password } = this.loginForm.value;

        try {
            const user = await this.authService.loginUser(email, password);

            if (user)
                this.router.navigate(['/']);
        } catch (error) {
            console.log(error);
        }
    }
}
