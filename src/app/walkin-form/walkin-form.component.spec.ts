import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinFormComponent } from './walkin-form.component';

describe('WalkinFormComponent', () => {
  let component: WalkinFormComponent;
  let fixture: ComponentFixture<WalkinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
