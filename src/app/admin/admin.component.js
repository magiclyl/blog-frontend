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
import { FormBuilder, Validators } from '@angular/forms';
var AdminComponent = (function () {
    function AdminComponent(fb) {
        this.fb = fb;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.formModel = this.fb.group({
            title: ['', [Validators.required]],
            summary: ['', [Validators.required]],
            type: ['', [Validators.required]],
            content: ['', [Validators.required]]
        });
    };
    AdminComponent.prototype.submit = function () {
        console.log(this.formModel.value);
        $.ajax({
            type: 'post',
            data: this.formModel.value,
            url: 'http://127.0.0.1:3000/blog/saveBlog',
            success: function (data) {
                console.log(data);
            }
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Component({
        selector: 'app-admin',
        templateUrl: './admin.component.html',
        styleUrls: ['./admin.component.css']
    }),
    __metadata("design:paramtypes", [FormBuilder])
], AdminComponent);
export { AdminComponent };
//# sourceMappingURL=admin.component.js.map