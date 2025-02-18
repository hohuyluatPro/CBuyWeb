import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loginWithEmail(email: string, password: string): Promise<any> {

    // Implement login logic here

    return Promise.resolve();

  }



  loginWithGoogle(): Promise<any> {

    // Implement Google login logic here

    return Promise.resolve();

  }

}
