import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

declare var $: any;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  list: Array<any>;
  isActive: boolean;
  arr: number[]; // 数组声明
  keyword: string;
  counter: number;
  qrcode: any;
  type: string;
  window: any;
  isShowloadMore: boolean;
  constructor(private titleService: Title) {
    enum Color {Red, Green, Blue}
    interface LabelledValue { // 接口
      label?: string;
      name?: string; // 可选属性
      readonly y: number; // 只读属性
      [index: number]: string; // 可索引的类型，let myArray: StringArray;myArray = ["Bob", "Fred"];let myStr: string = myArray[0];
    }

    function printLabel(labelledObj: LabelledValue) {
      console.log(labelledObj.label);
    }
    const myObj = {size: 10, label: 'Size 10 Object', y: 1};
    printLabel(myObj);
  }

  ngOnInit() {
    this.titleService.setTitle('Magic前端博客社区');
    this.window = window.location.href;
    this.list = [];
    this.isShowloadMore = false;
    this.counter = 1;
    $(function () {
      $('.topics ul.tabs').tabs();
    });
    this.getArticles(1);
  }
  saveContent(con: any) {
    sessionStorage.setItem('content', JSON.stringify(con));
  }
  getArticles(n?: any, more?: any) {
    if (this.type !== n) {
      this.list.splice(0, this.list.length);
      this.counter = 1;
    }
    if (this.type === n && !more) {
      return;
    }
    this.type = n;
    const that = this;
    $.ajax({
      url: `http://127.0.0.1:3000/blog/getList?type=${n || this.type}&page=${this.counter}`,
      success: function(data: any){
        that.list = that.list.concat(data.data);
        if ((data.data as Array<any>).length < data.pageSize) { // 类型断言
          that.isShowloadMore = false;
        }else {
          that.isShowloadMore = true;
        }
      }
    });
  }
  loadMore() {
      this.counter++;
      this.getArticles(this.type, 'more');
  }
  toCode(e) {
    $(e.target.firstElementChild).show();
    this.qrcode = $(e.target.firstElementChild).qrcode({
      width: 150,
      height: 150,
      text: this.window,
      colorDark: '#efb73e',
      colorLight: '#ffffff'
    });
  }
  hideCode() {
    $('.topic canvas').remove();
  }
  keyup(e) {
    if (e.keyCode === 13) {
      this.searchTopic();
    }
  }
  searchTopic(key?: any) {
    const that = this;
    $.ajax({
      url: `http://127.0.0.1:3000/blog/getListByKeyword?keyword=${key || this.keyword || ''}&page=${this.counter}`,
      success: function(data: any){
        that.list = [];
        that.list = that.list.concat(data.data);
        if ((data.data as Array<any>).length < data.pageSize) { // 类型断言
          that.isShowloadMore = false;
        }else {
          that.isShowloadMore = true;
        }
      }
    });
  }
}
/*
接口继承：
   interface Shape {
   color: string;
   }

   interface Square extends Shape {
   sideLength: number;
   }

   let square = <Square>{};
   square.color = "blue";
   square.sideLength = 10;
类：
 当成员被标记成private时，它就不能在声明它的类的外部访问
this:
 箭头函数能保存函数创建时的 this值，而不是调用时的值：
* */
