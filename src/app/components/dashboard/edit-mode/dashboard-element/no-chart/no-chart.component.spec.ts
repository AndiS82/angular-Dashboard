import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoChartComponent } from './no-chart.component';

describe('NoChartComponent', () => {
  let component: NoChartComponent;
  let fixture: ComponentFixture<NoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
