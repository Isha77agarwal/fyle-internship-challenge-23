import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgIconsModule } from '@ng-icons/core';
import { heroLink } from '@ng-icons/heroicons/outline';
import { ionLocation } from '@ng-icons/ionicons';
import {MatSelectModule} from '@angular/material/select';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { RepositoryComponent } from './repository/repository.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { RepositoriesSectionComponent } from './repositories-section/repositories-section.component';
import { PaginationSectionComponent } from './pagination-section/pagination-section.component';


@NgModule({
  declarations: [
    AppComponent,
    SkeletonLoaderComponent,
    ProfileSectionComponent,
    RepositoryComponent,
    SearchSectionComponent,
    RepositoriesSectionComponent,
    PaginationSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    NgIconsModule.withIcons({heroLink, ionLocation}),
    MatSelectModule
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
