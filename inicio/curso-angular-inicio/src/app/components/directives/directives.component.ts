import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  font = 'Arial';
  size = 40;
  color = 'red';

  classes = ['green-title', 'small-title'];
  underline = 'underline-title'
}
