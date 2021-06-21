import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    })

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    async registerUser() {
        const { email, password } = this.registerForm.value;

        try {
            const user = await this.authService.registerUser(email, password);
            
            if (user)
                this.router.navigate(['/verificar-email']);
        } catch (error) {
            console.log(error);
        }
    }
}
