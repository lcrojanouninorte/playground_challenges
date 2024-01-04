import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightParagraphComponent } from './highlight-paragraph.component';

describe('HighlightParagraphComponent', () => {
  let component: HighlightParagraphComponent;
  let fixture: ComponentFixture<HighlightParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightParagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
