import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClildComponentComponent } from './clild-component.component';

describe('ClildComponentComponent', () => {
  let component: ClildComponentComponent;
  let fixture: ComponentFixture<ClildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClildComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
