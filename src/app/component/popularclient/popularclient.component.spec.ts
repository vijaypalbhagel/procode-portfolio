import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularclientComponent } from './popularclient.component';

describe('PopularclientComponent', () => {
  let component: PopularclientComponent;
  let fixture: ComponentFixture<PopularclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularclientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
