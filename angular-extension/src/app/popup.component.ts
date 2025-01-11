import { Component } from '@angular/core';
import browser from 'webextension-polyfill';

@Component({
    selector: 'app-popup',
    template: `<h1>{{message}}</h1>
             <button (click)="updateMessage()">Update Message</button>`
})
export class PopupComponent {
    message = 'Hello from Angular!';

    updateMessage() {
        browser.storage.local.set({ message: 'Updated!' });
    }
}