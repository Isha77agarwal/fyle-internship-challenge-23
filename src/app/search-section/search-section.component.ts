import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup ,Validators} from '@angular/forms'

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit{
  @Output() sendLoginEvent = new EventEmitter<string>();
  
  searchGroup: FormGroup = new FormGroup({})

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.searchGroup = this.formBuilder.group({
      login: ['',Validators.required]
    })
  }

  sendLoginId() {
    this.sendLoginEvent.emit(this.searchGroup.value.login)
    this.searchGroup.reset()
  }
}
