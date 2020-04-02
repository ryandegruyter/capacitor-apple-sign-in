import {WebPlugin} from '@capacitor/core';
import {AppleSignInPlugin, AuthResult} from './definitions';

export class AppleSignInWeb extends WebPlugin implements AppleSignInPlugin {
    constructor() {
        super({
            name: 'AppleSignIn',
            platforms: ['web']
        });
    }

    async auth(): Promise<{ authResult: AuthResult }> {
        console.log('This plugin only has an iOS implementation');
        return;
    }
}

const AppleSignIn = new AppleSignInWeb();

export {AppleSignIn};

import {registerWebPlugin} from '@capacitor/core';

registerWebPlugin(AppleSignIn);
