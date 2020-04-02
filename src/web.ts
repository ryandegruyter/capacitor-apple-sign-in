import { WebPlugin } from '@capacitor/core';
import { AppleSignInPluginPlugin } from './definitions';

export class AppleSignInPluginWeb extends WebPlugin implements AppleSignInPluginPlugin {
  constructor() {
    super({
      name: 'AppleSignInPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const AppleSignInPlugin = new AppleSignInPluginWeb();

export { AppleSignInPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AppleSignInPlugin);
