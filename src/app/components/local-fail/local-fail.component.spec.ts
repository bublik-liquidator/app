import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFailComponent } from './local-fail.component';

describe('LocalFailComponent', () => {
  let component: LocalFailComponent;
  let fixture: ComponentFixture<LocalFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalFailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
