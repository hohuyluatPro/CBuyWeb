import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  constructor(private keycloak: KeycloakService,
    private http: HttpClient
  ) { }
  
  // async getAuthenticationCode(): Promise<any> {
  //   try {
  //     const userProfile = await this.keycloak.loadUserProfile();
  //     return this.http.post('http://localhost:8080', { username: userProfile.username }).toPromise();
  //   } catch (error) {
  //     console.error('User not logged in', error);
  //     return null;
  //   }
  // }touch src/app/keycloak-init.factory.ts

  async getToken(): Promise<string> {
    const keycloak = new KeycloakService();
    await keycloak.init({});
    return keycloak.getToken();
  }

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
