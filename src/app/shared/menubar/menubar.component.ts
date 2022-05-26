import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styles: [
  ]
})
export class MenubarComponent implements OnInit {

  @Output() onDisplaySideBar = new EventEmitter<boolean>();
  display: boolean = false;

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
      this.items = [
        {
          icon: 'pi pi-bars',
          command: (_) => this.displaySidebar()
        }
      ]
  }

  displaySidebar() {
    this.display = !this.display;
    this.onDisplaySideBar.emit(this.display);
  }
}
