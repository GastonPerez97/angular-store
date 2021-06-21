import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { 
        this.registerForm = this.formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$')]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    ngOnInit(): void {
    }

    registerFormGet(name: string) {
        return this.registerForm.get(name);
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
