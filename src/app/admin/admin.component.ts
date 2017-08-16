import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $: any;
declare var showdown: any;
declare var hljs: any;
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public formModel: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    $(function(){
      $('ul.tabs').tabs();
      /*testEditor = editormd('test-editormd', {
        width   : '100%',
        height  : '400',
        syncScrolling : 'single',
        path    : '../assets/editormd/lib/'
      });*/
    });
    this.formModel = this.fb.group({
      title: ['', [ Validators.required ]],
      summary: ['', [ Validators.required ]],
      type: ['', [ Validators.required ]],
      content: ['', [ Validators.required ]],
      link: ['', [ Validators.required ]]
    });
  }
  submit() {
    console.log(this.formModel.value);
    $.ajax({
      type: 'post',
      data: this.formModel.value,
      url: 'http://127.0.0.1:3000/blog/saveBlog',
      success: function(data: any){
        console.log(data);
      }
    });
  }
  pre() {
    const converter = new showdown.Converter();
    document.getElementById('markdown').innerHTML = converter.makeHtml(this.formModel.value.content);
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
}

