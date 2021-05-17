import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: environment.kcConfig,
            bearerExcludedUrls: ['/assets'],
            loadUserProfileAtStartUp: true,
            enableBearerInterceptor: true,
            initOptions: {
                onLoad: 'login-required',
                silentCheckSsoRedirectUri:
                    window.location.origin + '/assets/silent-check-sso.html',
            },
        });
}