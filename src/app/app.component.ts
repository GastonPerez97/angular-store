import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    router: Router;

    constructor(private authService: AuthService, private _router: Router) {
        this.router = _router;
        this.authService.logoutIfEmailNotVerified();
    }
}
