import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnDestroy {
    public user$: Observable<any> = this.authService.afAuth.user;

    constructor(private authService: AuthService, private router: Router) { }
    
    ngOnDestroy() {
        this.authService.logoutUser();
    }

    async sendVerificationEmail() {
        try {
            await this.authService.sendVerificationEmail();

            Swal.fire({
                title: '¡Éxito!',
                text: "Enviamos un mail a tu correo, acordate de revisar los correos no deseados.",
                icon: 'success',
                confirmButtonColor: '#3085d6',
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
