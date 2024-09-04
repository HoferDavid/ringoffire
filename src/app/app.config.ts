import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ringoffire-f9321","appId":"1:65925428114:web:e7be6484f7e4cfb837074b","storageBucket":"ringoffire-f9321.appspot.com","apiKey":"AIzaSyDdANl06GjaGBcc2DRVSiy-6TVvv7xSQRs","authDomain":"ringoffire-f9321.firebaseapp.com","messagingSenderId":"65925428114"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
