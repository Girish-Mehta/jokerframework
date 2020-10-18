import { Component } from '@angular/core';
import { title } from "../config/global.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= title;
}
