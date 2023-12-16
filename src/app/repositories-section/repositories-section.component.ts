import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-repositories-section',
  templateUrl: './repositories-section.component.html',
  styleUrls: ['./repositories-section.component.scss']
})
export class RepositoriesSectionComponent {
  @Input() repositories: Repository[] = []
  @Input() errorMessage = ''
  @Input() profileLoaded = false
  @Input() profile: any
  @Input() totalPages = 0
  @Input() repositoriesLoaded = false

  @Output() perPageChangeEvent = new EventEmitter<string>();
  @Output() pageNumberChange = new EventEmitter<number>()
  onChangePerPageNumber(event: any) {
    this.perPageChangeEvent.emit(event.target.value)
    this.pageNumberChange.emit(1)
  }

  onChangePageNumber(pageNum: number) {
    this.pageNumberChange.emit(pageNum)
  }
}
