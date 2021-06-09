import { RootStore }  from '../root.store';
import { IStore }     from '../types/store.interface';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UsersStore implements IStore {
  currentUser: { id: number } = {id: 1};

  constructor(public root: RootStore) {
  }

  async init() {
  }
}
