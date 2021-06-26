import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    public user$: Observable<any> = this.authService.afAuth.user;

    constructor(private authService: AuthService, private router: Router) { }

    async logoutUser() {
        try {
            await this.authService.logoutUser();
            this.router.navigate(['/']);
        } catch (error) {
            console.log(error);
        }
    }
}
