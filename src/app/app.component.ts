import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  title = 'project-app';

  logged = true;
  isShown = false;
  username = '';
  password = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  constructor(private categoryService: CategoryService) {
  }
  login() {
    this.categoryService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);

      this.logged = true;
      this.username = '';
      this.password = '';
    });



  }

  logout(){
    this.logged = false;
    localStorage.removeItem('token');
    this.isShown = false;
  }


  visualizeForm(isShown){
    if(!isShown){
      this.logout();
    }
  }
}
