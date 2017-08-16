import { Component, OnInit } from '@angular/core';
declare var $: any ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $('.card').on('mouseover', function () {
        $(this).addClass('z-depth-4') ;
      });
      $('.card').on('mouseout', function () {
        $(this).removeClass('z-depth-4') ;
      });
    });
  }

}
