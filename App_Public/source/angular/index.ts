import './polyfills.ts'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { MainModule } from './modules/main/main.module'

// bootstraps app
export function main() {
    return platformBrowserDynamic().bootstrapModule(MainModule);
}

// angular 2 hrm verification
if(document.readyState === 'complete') main()
else document.addEventListener('DOMContentLoaded', main)

// angular 2 hrm ( Hot Reload module )
if(module['hot']) module['hot'].accept()
