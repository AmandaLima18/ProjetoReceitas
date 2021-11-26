import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: 'home', icon: 'home' },
    { title: 'Salgadas', url: 'salgadas', icon: 'pizza' },
    { title: 'Doces', url: 'doces', icon: 'heart' },
    { title: 'Bebidas', url: 'bebidas', icon: 'beer' },
    { title: 'Dicas', url: 'dicas', icon: 'help' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
