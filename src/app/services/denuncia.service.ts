import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Denuncia } from '../models/Denuncia';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  denunciasCollection: AngularFirestoreCollection<Denuncia>;
  denuncias: Observable<Denuncia[]>;
  denunciaDoc: AngularFirestoreDocument<Denuncia>;

  constructor(public firestore: AngularFirestore) {
    this.denunciasCollection = this.firestore.collection('denuncias', ref => ref.orderBy('titulo', 'asc'));
    
    //this.denuncias = this.denunciasCollection.valueChanges();
    this.denuncias = this.denunciasCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Denuncia;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  getDenuncias() {
    return this.denuncias;
  }

  addDenuncia(denuncia: Denuncia) {
    this.denunciasCollection.add(denuncia);
  }

  deleteDenuncia(denuncia: Denuncia) {
    this.denunciaDoc = this.firestore.doc(`denuncias/${denuncia.id}`);
    this.denunciaDoc.delete();
  }

}
