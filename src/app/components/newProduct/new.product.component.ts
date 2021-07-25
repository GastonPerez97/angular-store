import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new.product.component.html',
  styleUrls: ['./new.product.component.css']
})
export class NewProductComponent implements OnInit {
	private admin = environment.admin;

    constructor(private authService: AuthService, private router: Router) { }

    async ngOnInit(): Promise<void> {
        const user = await this.authService.getCurrentUser();

        if (!user || user!.email !== this.admin) {
            this.router.navigate(['/']);
        }
    }
}