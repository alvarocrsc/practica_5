import { Component } from '@angular/core';
import { FormComponent } from "./components/form/form.component";
import { CollapseComponent } from "./components/collapse/collapse.component";

@Component({
  selector: 'app-root',
  imports: [FormComponent, CollapseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica_5';
}
