import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'test-app';
    router: Router;

    constructor(private authService: AuthService, private _router: Router) {
        this.router = _router;
        this.authService.logoutIfEmailNotVerified();
    }
}
