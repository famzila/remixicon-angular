import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remixicons } from './remixicon.component';

describe('AngularComponent', () => {
  let component: Remixicons;
  let fixture: ComponentFixture<Remixicons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remixicons]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Remixicons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
