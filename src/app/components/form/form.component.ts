import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();
  
  stars: number[] = [0, 1, 2, 3, 4];
  halfStar: number | null = null;
  tempRating: number = 0;
  isWrapperVisible: boolean = true;

  setRating(value: number) {
    this.rating = value;
    this.ratingChange.emit(this.rating);
    console.log(this.rating)
  }

  updateHover(index: number, event: MouseEvent) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = event.clientX - rect.left;
    const isHalf = x < rect.width / 2;
    this.halfStar = isHalf ? index + 0.5 : null;
    this.tempRating = isHalf ? index + 0.5 : index + 1;
  }

  resetHover() {
    this.halfStar = null;
    this.tempRating = 0;
  }

  toggleWrapper() {
    this.isWrapperVisible = !this.isWrapperVisible;
  }
}
