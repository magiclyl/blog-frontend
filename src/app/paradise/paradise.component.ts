import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-paradise',
  templateUrl: './paradise.component.html',
  styleUrls: ['./paradise.component.css']
})
export class ParadiseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $('ul.tabs').tabs();
    });
  }

}
