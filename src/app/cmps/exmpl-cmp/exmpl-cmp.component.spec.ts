import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmplCmpComponent } from './exmpl-cmp.component';

describe('ExmplCmpComponent', () => {
  let component: ExmplCmpComponent;
  let fixture: ComponentFixture<ExmplCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmplCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExmplCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
