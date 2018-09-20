import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMonitoringListComponent } from './news-monitoring-list.component';

describe('NewsMonitoringListComponent', () => {
  let component: NewsMonitoringListComponent;
  let fixture: ComponentFixture<NewsMonitoringListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMonitoringListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMonitoringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
