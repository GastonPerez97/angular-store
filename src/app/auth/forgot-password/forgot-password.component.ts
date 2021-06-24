import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    forgotPasswordForm: FormGroup;

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
        this.forgotPasswordForm = this.formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$')]),
        });
    }

    ngOnInit(): void {
    }

    async resetPassword() {
        try {
            const email: string = this.forgotPasswordForm.get('email')?.value;
            await this.authService.resetPassword(email);
            this.router.navigate(['/ingresar']);
        } catch (error) {
            console.log(error);
        }
    }

}
