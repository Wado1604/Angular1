import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HombreComponent } from './hombre.component';

describe('HombreComponent', () => {
  let component: HombreComponent;
  let fixture: ComponentFixture<HombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HombreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


