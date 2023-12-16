import { Component, Input } from '@angular/core';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent {
  @Input() repository : Repository = {
    name : '',
    description : '',
    topics : [],
    html_url: ''
  }
}
