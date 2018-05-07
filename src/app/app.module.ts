import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { AgregarTasksComponent } from './components/agregar-tasks/agregar-tasks.component';


import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TareasfelicesService } from './services/tareasfelices.service' ;
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    AgregarTasksComponent
  ],
  imports: [
    BrowserModule
    , AngularFireModule
    , AngularFirestoreModule
    , AngularFireModule.initializeApp(environment.firebase,'angular-fs'),
    FormsModule
  ],
  providers: [ TareasfelicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
