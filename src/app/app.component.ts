import { Component } from '@angular/core';
import { FormComponent } from "./components/form/form.component";
import { CollapseComponent } from "./components/collapse/collapse.component";
import { BlogComponent } from "./components/blog/blog.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [FormComponent, CollapseComponent, BlogComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica_5';
}
