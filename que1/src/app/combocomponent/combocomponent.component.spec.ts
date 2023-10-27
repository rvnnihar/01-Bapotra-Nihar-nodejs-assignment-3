import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombocomponentComponent } from './combocomponent.component';

describe('CombocomponentComponent', () => {
  let component: CombocomponentComponent;
  let fixture: ComponentFixture<CombocomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombocomponentComponent]
    });
    fixture = TestBed.createComponent(CombocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
