import { Component } from '@angular/core';
import { Todo } from '../types/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my_basic_app';
  todos:Array<Todo> = [];
  loadedFeature = "recipe"

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
