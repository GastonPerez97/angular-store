import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    public user$: Observable<any> = this.authService.afAuth.user;
	public userData: any;
    public countProducts: number;
	public admin = environment.admin;

    constructor(private authService: AuthService, private router: Router, private carritoService: CarritoService) {
        this.countProducts = 0;
    }

    ngOnInit(): void {
		this.user$.subscribe(
            (response) => this.getCurrentUserData(),
            (error) => console.error("error")
        );
		
        this.countProducts = this.carritoService.getCountProducts();

        this.carritoService.getCountProducts$().subscribe(count => {
            this.countProducts = count;
        });
    }

    async logoutUser() {
        try {
            await this.authService.logoutUser();
			this.userData = null;
            this.router.navigate(['/']);
        } catch (error) {
            console.log(error);
        }
    }

	async getCurrentUserData() {
		const user = await this.authService.getCurrentUser();

		if (user) {
			this.authService.getUserData(user!.uid)
				.then(userData => this.userData = userData.val())
				.catch(error => console.error(error));
		}
	}
}