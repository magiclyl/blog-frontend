import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
declare var $: any ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  window: any;
  isloginIn: boolean;
  username: string;
  constructor(public accountService: AccountService) { }
  ngOnInit () {
    this.window = window;
    $(function(){
      $('.button-collapse').sideNav();
      $('.card').on('mouseover', function () {
        $(this).addClass('z-depth-4') ;
      });
      $('.card').on('mouseout', function () {
        $(this).removeClass('z-depth-4') ;
      });
    });
  }
}
