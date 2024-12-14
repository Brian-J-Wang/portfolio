import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSpreadComponent } from './tech-spread.component';

describe('TechSpreadComponent', () => {
  let component: TechSpreadComponent;
  let fixture: ComponentFixture<TechSpreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSpreadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
