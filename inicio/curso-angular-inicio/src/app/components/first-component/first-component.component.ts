import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Alexandre';
  age: number = 29;
  job = 'Desenvolvedor';

  constructor() {}

  ngOnInit(): void {

  }
}
