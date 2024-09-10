import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {

  @Input()
  name: string = '';

  @Input()
  // com a exclamação na frente do nome da var, ele inicia automaticamente a var por debaixo dos panos
  userData!: {email: string; role: string}
}
