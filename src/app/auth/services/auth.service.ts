import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

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
            const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
            this.sendVerificationEmail();
            return result;
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

    async sendVerificationEmail(): Promise<any> {
        try {
            return (await this.afAuth.currentUser)!.sendEmailVerification();
        } catch (error) {
            return error;
        }
    }
}
