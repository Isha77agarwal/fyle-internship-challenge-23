import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent {
  @Input() profile: any
  @Input() errorMessage = ''
  @Input() profileLoaded = false
}
