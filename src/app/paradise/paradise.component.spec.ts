import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadiseComponent } from './paradise.component';

describe('ParadiseComponent', () => {
  let component: ParadiseComponent;
  let fixture: ComponentFixture<ParadiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParadiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParadiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
