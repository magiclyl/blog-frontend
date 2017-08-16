var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
        var that = this;
        $(function () {
            $('ul.tabs').tabs();
        });
        $.ajax({
            url: 'http://127.0.0.1:3000/blog/getList?type=1',
            success: function (data) {
                console.log(data);
                that.list = data.data;
            }
        });
    };
    BlogComponent.prototype.saveContent = function (con) {
        sessionStorage.setItem('content', JSON.stringify(con));
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    Component({
        selector: 'app-blog',
        templateUrl: './blog.component.html',
        styleUrls: ['./blog.component.css']
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);
export { BlogComponent };
//# sourceMappingURL=blog.component.js.map