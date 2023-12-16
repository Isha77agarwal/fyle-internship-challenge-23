import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Profile } from './models/profile';
import { Repository } from './models/repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  profile: Profile = {
    name : "",
    avatar_url : "",
    bio : "",
    location : "",
    public_repos : 0,
    login : "",
    html_url : ""
  }
  repositories: Repository[] = []
  errorMessage: string = ""
  ProfileLoaded: boolean = false
  repositoriesLoaded: boolean = false
  pageNumber: number = 1
  totalPages: number = 0
  perPage: number = 10

  constructor(
    private apiService: ApiService,
  ) {}

  search(loginId: string) : void {
      
      this.ProfileLoaded = true
      this.repositories = []
      this.perPage = 10
      this.pageNumber = 1

      //load github profile
      this.apiService.getUser(loginId).subscribe({
        next: (profile) => {
          this.profile = profile
          this.profile.login = profile.login
        },
        error: (e) => {
          this.errorMessage = e.error.message
          this.ProfileLoaded = false
          this.profile.login = '' //clearing the profile for next search
        },
        complete: () => {
          this.totalPages = Math.ceil(this.profile.public_repos/this.perPage)
          
          this.loadRepos()    //load repositories if profile exists
          this.ProfileLoaded = false
        }
      });

      setTimeout(() => {
        this.errorMessage = ""
      }, 4000);
  }

  loadRepos() : void {
    this.repositoriesLoaded = true;
    this.repositories = []
    this.apiService.getRepos(this.profile.login,this.perPage,this.pageNumber).subscribe({
      next: (repositories) => {
        this.repositories = repositories
      },
      complete: () => {
        this.repositoriesLoaded = false;
      }
    });
  }

  onChangePageNumber(pageNum: number){
    this.pageNumber = pageNum
    this.loadRepos()
  }

  onChange(perPage: any){
    this.perPage = perPage
    this.pageNumber = 1
    this.totalPages = Math.ceil(this.profile.public_repos/this.perPage)
    this.loadRepos()
  }
}
