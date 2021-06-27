import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$')]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
     }

    ngOnInit(): void {
    }

    loginFormGet(name: string) {
        return this.loginForm.get(name);
    }

    async loginUser() {
        const { email, password } = this.loginForm.value;

        try {
            const user = await this.authService.loginUser(email, password);
            
            if (user.user?.emailVerified) {
                this.router.navigate(['/']);
            } else {
                this.router.navigate(['/verificar-email']);
            }
        } catch (error) {
            Swal.fire({
                title: '¡Error!',
                text: this.authService.authErrors[error.code],
                icon: 'error',
                confirmButtonColor: '#3459e6',
                confirmButtonText: 'Cerrar'
            })
        }
    }
}
