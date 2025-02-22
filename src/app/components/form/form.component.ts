import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GamesService } from '../../services/games.service';
import { IGame } from '../../interfaces/igame.interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Input() rating: number = 0;
  @Output() ratingChange = new EventEmitter<number>();
  gameService = inject(GamesService);
  
  stars: number[] = [0, 1, 2, 3, 4];
  halfStar: number | null = null;
  tempRating: number = 0;
  isWrapperVisible: boolean = true;

  getDataForm(gameForm: NgForm) {
    if (gameForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields before submitting.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }

    let newGame: IGame =  {
      ...gameForm.value, 
      stars: this.rating
    };

    let response = this.gameService.Insert(newGame);

    Swal.fire({
      title: response.status ? 'Great!' : 'Ooops!',
      text: response.msg,
      icon: response.status ? 'success' : 'error',
      confirmButtonText: 'OK'
    })

    if (response.status) {
      gameForm.reset();
      this.rating = 0;
    }
  }

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
}
