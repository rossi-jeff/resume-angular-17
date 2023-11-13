import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStepperComponent } from './contact-stepper.component';

describe('ContactStepperComponent', () => {
  let component: ContactStepperComponent;
  let fixture: ComponentFixture<ContactStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
