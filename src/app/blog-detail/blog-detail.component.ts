import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var showdown: any;
declare var hljs: any;
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: any;
  constructor() {
  }
  ngOnInit() {
    $(function(){
      $('ul.tabs').tabs();
    });
    this.blog = JSON.parse(sessionStorage.getItem('content'));
    console.log(this.blog)
    const converter = new showdown.Converter();
    document.getElementById('content').innerHTML = converter.makeHtml(this.blog.content);
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
    $.ajax({
      url: `http://127.0.0.1:3000/blog/addReading?id=${this.blog._id}`,
      success: function(data: any){
      }
    });
  }
}
