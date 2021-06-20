import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
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
        } catch (error) {
            return error;
        }
    }
}
