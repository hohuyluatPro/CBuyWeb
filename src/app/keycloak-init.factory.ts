import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return async () => {
    try {
      await keycloak.init({
        config: {
          url: 'http://localhost:8080/auth', // Nếu Keycloak < 17, đổi thành 'http://localhost:8080/auth'
          realm: 'myRealm',
          clientId: 'my-app-client-new'
        },
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false,
          pkceMethod: 'S256'
        }
      });
      console.log("✅ Keycloak initialized successfully");
    } catch (error) {
      console.error("❌ Keycloak initialization failed", error);
    }
  };
}
