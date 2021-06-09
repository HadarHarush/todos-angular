import { TodosStore }      from './data/todos.data.store';
import { UsersStore }      from './data/users.data.store';
import { TodosAdapter }    from '../adapters/todos.adapter';
import { GlobalViewStore } from './view/global.view.store';
import { Injectable }      from '@angular/core';

@Injectable({
              providedIn: 'root',
            })
export class RootStore {
  todosStore: TodosStore;
  usersStore: UsersStore;
  globalViewStore: GlobalViewStore;
  todosAdapter: TodosAdapter;

  constructor() {

  }
}

// export const rootStore = new RootStore();
