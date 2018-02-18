import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtbashComponent } from './atbash.component';

describe('AtbashComponent', () => {
  let component: AtbashComponent;
  let fixture: ComponentFixture<AtbashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtbashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtbashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
