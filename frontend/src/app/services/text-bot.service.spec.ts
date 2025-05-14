import { TestBed } from '@angular/core/testing';

import { TextBotService } from '../services/text-bot.service';

describe('TextBotService', () => {
  let service: TextBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
