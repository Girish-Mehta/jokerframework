import { Component, OnInit } from '@angular/core';
import { title } from "../../config/global.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = title;

  constructor() { }

  ngOnInit(): void {
  }

}
