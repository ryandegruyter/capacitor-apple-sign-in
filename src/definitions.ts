declare module "@capacitor/core" {
    interface PluginRegistry {
        AppleSignIn: AppleSignInPlugin;
    }
}

export interface AuthResult {
    userId: string;
    identityToken: string;
    authorizationCode: string;
    email?: string;
    familyName?: string;
    givenName?: string;
}

export interface AppleSignInPlugin {
    auth(): Promise<{ authResult: AuthResult }>;
}
