import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnDestroy {
    public user$: Observable<any> = this.authService.afAuth.user;

    constructor(private authService: AuthService) { }

    sendVerificationEmail(): void {
        this.authService.sendVerificationEmail();
    }

    ngOnDestroy() {
        this.authService.logoutUser();
    }
}
