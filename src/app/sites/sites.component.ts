import { Component, OnInit } from '@angular/core';
declare  var $: any;
@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function(){
      $('.tooltipped').tooltip({delay: 50});
    });
  }

}
