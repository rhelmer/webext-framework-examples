import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PopupComponent } from './app/popup.component';

bootstrapApplication(PopupComponent, appConfig)
  .catch((err) => console.error(err));
