import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { User } from 'firebase';
// import { Auth } from 'firebase/app';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
    // public user: User;

    constructor(public afAuth: AngularFireAuth) { }

    async loginUser(email: string, password: string) {
        try {
            return await this.afAuth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            return error;
        }
    }

    async registerUser(email: string, password: string) {
        try {
            return await this.afAuth.createUserWithEmailAndPassword(email, password);
        } catch (error) {
            return error;
        }

    }

    async logoutUser() {
        try {
            await this.afAuth.signOut();
            // redirect user
        } catch (error) {
            return error;
        }
    }

    async getCurrentUser()  {
        try {
            return await this.afAuth.authState.pipe(first()).toPromise();
        } catch (error) {
            return error;
        }
    }
}
