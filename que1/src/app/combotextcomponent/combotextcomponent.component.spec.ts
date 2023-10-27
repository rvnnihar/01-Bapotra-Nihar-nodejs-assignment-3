import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombotextcomponentComponent } from './combotextcomponent.component';

describe('CombotextcomponentComponent', () => {
  let component: CombotextcomponentComponent;
  let fixture: ComponentFixture<CombotextcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombotextcomponentComponent]
    });
    fixture = TestBed.createComponent(CombotextcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
