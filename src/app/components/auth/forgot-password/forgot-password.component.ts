import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
    forgotPasswordForm: FormGroup;

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
        this.forgotPasswordForm = this.formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$')]),
        });
    }

    async resetPassword() {
        try {
            const email: string = this.forgotPasswordForm.get('email')?.value;
            await this.authService.resetPassword(email);

            Swal.fire({
                title: '¡Éxito!',
                text: "Enviamos un mail a tu correo, acordate de revisar los correos no deseados.",
                icon: 'success',
                confirmButtonColor: '#3459e6',
                confirmButtonText: 'Ir a Iniciar Sesión'
              }).then((result) => {
                this.router.navigate(['/ingresar']);
            })

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
