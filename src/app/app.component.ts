import { Component } from '@angular/core';
import { Todo } from 'src/stores/data/entity/todo.entity';
import { RootStore } from 'src/stores/root.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public rootStore: RootStore) {}

  ngOnInit() {
    // @ts-ignore
    window.store = this.rootStore;
    console.log('init');
    this.rootStore.todosStore.loadItems();
  }

  trackByFn(index: number, todo: Todo) {
    return todo.id;
  }

  todos = this.rootStore.todosStore.todos;

  todosAsString = JSON.stringify(this.todos);

  // root = (rootStore.title = 'todos-mobx-ng');
}
