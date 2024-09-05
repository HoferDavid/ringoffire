import { Injectable, inject } from '@angular/core';
import { Game } from '../../models/game';
import { Firestore, collectionData, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  normalGames: Game[] = [];


  unsubList;
  // unsubSingle;


  // games$;

  firestore: Firestore = inject(Firestore);


  constructor() {

    this.unsubList = onSnapshot(this.getGameRef(), (list) => {
      list.forEach(element => {
        console.log(element);
      })
    });

    this.unsubList();


    // this.games$ = collectionData(this.getGameRef());
  }


  getGameRef() {
    console.log('getGameRef() test');

    return collection(this.firestore, 'games');
  }


  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
