import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';

import { TareaFeliz  } from '../modelos/tareafeliz';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TareasfelicesService {
  tareasFelicesCollection: AngularFirestoreCollection<TareaFeliz>;
  tareasFelicesObservable: Observable<TareaFeliz[]>;
  tareaFelizDoc: AngularFirestoreDocument<TareaFeliz>;

  constructor(public afs:AngularFirestore) {
    // pero la gran flauta, aqui se pone el nombre de la coleccion habia sido
    this.tareasFelicesCollection = this.afs.collection('tareasfelices');
    this.tareasFelicesObservable = this.tareasFelicesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as TareaFeliz;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getTareasFelices() : Observable<TareaFeliz[]> {
    return this.tareasFelicesObservable; 
  }

  addTareaFeliz(tareafeliz: TareaFeliz) {
    this.tareasFelicesCollection.add(tareafeliz);
  }

  deleteTareaFeliz(tareafeliz: TareaFeliz) {
    this.tareaFelizDoc = this.afs.doc(`tareasFelicesObservable/${tareafeliz.id}`);
    this.tareaFelizDoc.delete();
  }

  updateTareaFeliz(tareafeliz: TareaFeliz) {
    this.tareaFelizDoc = this.afs.doc(`tareasFelicesObservable/${tareafeliz.id}`);
    this.tareaFelizDoc.update(tareafeliz);
  }
}