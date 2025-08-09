import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private readonly firestore: Firestore) {}

  getNotes() {
    let notesCollection = collection(this.firestore, 'notes');
    return collectionData(notesCollection, { idField: 'id' });
  }

  addNote(desc: string) {
    let data = { description: desc };
    let notesCollection = collection(this.firestore, 'notes');
    return addDoc(notesCollection, data);
  }

  deleteNote(id: string) {
    let docRef = doc(this.firestore, 'notes/' + id);
    return deleteDoc(docRef);
  }
}
