declare module "@capacitor/core" {
  interface PluginRegistry {
    AppleSignInPlugin: AppleSignInPluginPlugin;
  }
}

export interface AppleSignInPluginPlugin {
  login(): Promise<{response: any}>;
}
