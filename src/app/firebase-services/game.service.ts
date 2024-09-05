import { Injectable, inject } from '@angular/core';
import { Game } from '../../models/game';
import { Firestore, collectionData, collection, doc, onSnapshot, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  normalGames: Game[] = [];


  unsubList;
  // unsubSingle;


  games$;
  games;


  firestore: Firestore = inject(Firestore);


  constructor() {

    // this.unsubSingle = onSnapshot(this.getSingleDocRef('games', id), (list) => {
    //   console.log(list);

    // })


    this.unsubList = onSnapshot(this.getGameRef(), (list) => {
      list.forEach(element => {
        // console.log(list);
        // console.log(element);
        // console.log(element.id);
        // console.log(element.ref);
        console.log('game update:', element.data());
      })
    });


    // this.games$ = collectionData(this.getGameRef())
    // this.games = this.games$.subscribe((list) => {
    //   list.forEach(element => {
    //     console.log(element);
    //   });
    // });


    this.games$ = collectionData(this.getGameRef())
    this.games = this.games$.subscribe((game) => {
        console.log(game);

    });
  }


  async addGame(item: Game) {
    await addDoc(this.getGameRef(), item).catch(
      (err) => { console.log(err) }
    ).then(
      (docRef) => console.log('Document written with ID:', docRef)
    )
  }


  ngOnDestroy(){
    this.unsubList();
  }


  getGameRef() {
    return collection(this.firestore, 'games');
  }


  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
