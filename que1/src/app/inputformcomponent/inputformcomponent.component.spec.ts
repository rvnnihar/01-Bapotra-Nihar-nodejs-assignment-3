import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputformcomponentComponent } from './inputformcomponent.component';

describe('InputformcomponentComponent', () => {
  let component: InputformcomponentComponent;
  let fixture: ComponentFixture<InputformcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputformcomponentComponent]
    });
    fixture = TestBed.createComponent(InputformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
