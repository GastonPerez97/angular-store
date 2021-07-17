import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    registerForm: FormGroup;

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { 
        this.registerForm = this.formBuilder.group({
            name: new FormControl('', Validators.required),
            surname: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$')]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
        }, { validator: this.checkPasswords() });
    }

    registerFormGet(name: string) {
        return this.registerForm.get(name);
    }

    async registerUser() {
        const { email, password, name, surname, address } = this.registerForm.value;

        try {
            const user = await this.authService.registerUser(email, password, name, surname, address);
            
            if (user.message && user.code) {
                throw user;
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

    checkPasswords() {
        return (formGroup: FormGroup) => {
            const passwordControl = formGroup.controls['password'];
            const confirmPasswordControl = formGroup.controls['confirmPassword'];
    
            if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
                return;
            }

            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
            } else {
                confirmPasswordControl.setErrors(null);
            }
        }
    }
}
