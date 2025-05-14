import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIsListComponent } from './apis-list.component';

describe('APIsListComponent', () => {
  let component: APIsListComponent;
  let fixture: ComponentFixture<APIsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APIsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
