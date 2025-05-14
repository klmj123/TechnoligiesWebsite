import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksApiComponent } from './books-api.component';

describe('BooksApiComponent', () => {
  let component: BooksApiComponent;
  let fixture: ComponentFixture<BooksApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
