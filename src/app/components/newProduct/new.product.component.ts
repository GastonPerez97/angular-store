import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new.product.component.html',
  styleUrls: ['./new.product.component.css']
})
export class NewProductComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router) { }

    async ngOnInit(): Promise<void> {
        const user = await this.authService.getCurrentUser();

        if (!user || user!.email !== 'tallerweb2proyecto@gmail.com') {
            this.router.navigate(['/']);
        }
    }

}
