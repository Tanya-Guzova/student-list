import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  //Input decorator allows a parent to push data into menu property
@Input() menu: string;
  constructor() { }

  ngOnInit(): void {
  }

}
