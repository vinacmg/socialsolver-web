import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FeedComponent } from './components/feed/feed.component';
import { MapComponent } from './components/map/map.component';

import { DenunciaService } from './services/denuncia.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FeedComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule
  ],
  providers: [DenunciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
