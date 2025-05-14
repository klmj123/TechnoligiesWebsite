import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBotComponent } from './text-bot.component';

describe('TextBotComponent', () => {
  let component: TextBotComponent;
  let fixture: ComponentFixture<TextBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
