import { Component } from '@angular/core';
import { FormComponent } from "./components/form/form.component";
import { BlogComponent } from "./components/blog/blog.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [FormComponent, BlogComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica_5';
}
