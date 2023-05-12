import { Component } from '@angular/core';
import { UserapiService } from './user-manage/userapi.service';
import { loginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(public userSerive:loginService){

  }
}