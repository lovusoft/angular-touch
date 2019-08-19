import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoastComponent } from './roast.component';

describe('RoastComponent', () => {
  let component: RoastComponent;
  let fixture: ComponentFixture<RoastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
