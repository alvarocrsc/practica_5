import { Component } from '@angular/core';
import { FormComponent } from "./components/form/form.component";
import { CollapseComponent } from "./components/collapse/collapse.component";
import { BlogComponent } from "./components/blog/blog.component";

@Component({
  selector: 'app-root',
  imports: [FormComponent, CollapseComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica_5';
}
