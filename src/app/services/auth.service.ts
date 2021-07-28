import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
    authErrors: any = {
        'auth/invalid-email': 'El formato del E-Mail no es válido.',
        'auth/wrong-password': 'El E-Mail o la contraseña es incorrecta.',
        'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
        'auth/user-not-found': 'El E-Mail o la contraseña es incorrecta.',
        'auth/email-already-in-use': 'El E-Mail ingresado ya está siendo usado por otra cuenta.',
        'auth/too-many-requests': 'Se han realizado muchas solicitudes en poco tiempo. Intentalo más tarde.'
    };

    constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) { }

    async loginUser(email: string, password: string) {
        return await this.afAuth.signInWithEmailAndPassword(email, password);
    }

    async registerUser(email: string, password: string, name: string, surname: string, address: string) {
        try {
            const user = await this.afAuth.createUserWithEmailAndPassword(email, password);
            var userId: any;
            userId = user.user?.uid;
            this.saveUserData(userId, name, surname, address);
            this.sendVerificationEmail();
            return user;
        } catch (error) {
            return error;
        }
    }

    async saveUserData(userId:string, name: string, surname: string, address: string) {
        try {
            const result = await this.db.database.ref('users/' + userId)
                                 .set({name: name, surname: surname, address: address});

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

    async resetPassword(email: string): Promise<any> {
        try {
            return this.afAuth.sendPasswordResetEmail(email);
        } catch (error) {
            return error;
        }
    }

    async getCurrentUser() {
        return this.afAuth.authState.pipe(first()).toPromise();
    }

	async getUserData(id: string) {
		return await this.db.database.ref('users').child(id).once("value");
	}

    async logoutIfEmailNotVerified() {
        const user = await this.getCurrentUser();
        
        if (!user?.emailVerified) {
            this.logoutUser();
        }
    }
}