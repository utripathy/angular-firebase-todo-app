import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideFirebaseApp(() => initializeApp(
      {
        "projectId":"todo-app-3093b",
        "appId":"1:975968114496:web:0c4e63fc10b43d6e970ca5",
        "storageBucket":"todo-app-3093b.firebasestorage.app",
        "apiKey":"AIzaSyBQYArpyvV28KB4vt7hCx8U8-_j9da65wo",
        "authDomain":"todo-app-3093b.firebaseapp.com",
        "messagingSenderId":"975968114496"
      })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())]
};
