import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-section',
  templateUrl: './pagination-section.component.html',
  styleUrls: ['./pagination-section.component.scss']
})
export class PaginationSectionComponent {
  @Input() totalPages = 0
  @Output() changePageNumberEvent = new EventEmitter<number>();

  pageNumber: number = 1
  onClickPrevious() {
    if(this.pageNumber > 1) {
      this.pageNumber--;
      this.changePageNumberEvent.emit(this.pageNumber)
    }
  }
  
  onClickNext() {
    if(this.pageNumber < this.totalPages) {
      this.pageNumber++;
      this.changePageNumberEvent.emit(this.pageNumber)
    }
  }
}
