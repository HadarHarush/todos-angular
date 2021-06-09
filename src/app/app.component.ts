import { Component }         from '@angular/core';
import { Todo }              from 'src/stores/data/entity/todo.entity';
import { RootStore }         from 'src/stores/root.store';
import { TodosStore }        from "../stores/data/todos.data.store";
import { UsersStore }        from "../stores/data/users.data.store";
import { GlobalViewStore }   from "../stores/view/global.view.store";
import { autorun, reaction } from "mobx";

@Component({
             selector   : 'app-root',
             templateUrl: './app.component.html',
             styleUrls  : ['./app.component.scss'],
           })
export class AppComponent {
  constructor(
    public root: RootStore,
    public global: GlobalViewStore,
    public ts: TodosStore,
    public us: UsersStore
  ) {
  }

  ngOnInit() {
    // @ts-ignore
    window.root = this.root;
    console.log('init');
    this.ts.loadItems();
  }

  trackByFn(index: number, todo: Todo) {
    return todo.id;
  }

  // root = (rootStore.title = 'todos-mobx-ng');
}
