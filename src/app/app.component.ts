import { Component } from '@angular/core';
import { TodosComponent } from "./components/todos/todos.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Nick Fletcher";
  title = 'angular-crash';

  constructor () {
    this.changeName("Hello Angular");
  }

  changeName(text: string): void {
    var tmp = this.name;
    
    this.name = `The old name was ${tmp}, it's now ${text}`;
  }
}
