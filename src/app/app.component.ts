import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isUser1Activated = false;
  isUser2Activated = false;
  constructor(private usersService: UsersService){};

  ngOnInit(){
    this.usersService.userActivated.subscribe(
      (number:number)=>{
        if(number==1)
          this.isUser1Activated=true;
        if(number==2)
          this.isUser2Activated=true;
        
      }
    );
  }
}
