import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  constructor() { }
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.value;
  }

  public getUserFromStorage() {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }


  logout(): void {
    this.userSubject.next(null);
    localStorage.setItem('user', JSON.stringify(null));
  }

  loginWithEmail(email: string, password: string): Promise<any> {

    // Implement login logic here

    return Promise.resolve();

  }



  loginWithGoogle(): Promise<any> {

    // Implement Google login logic here

    return Promise.resolve();

  }

}
