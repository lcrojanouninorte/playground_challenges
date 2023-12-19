import { Component } from '@angular/core';

@Component({
  selector: 'app-highlight-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './highlight-paragraph.component.html',
  styleUrl: './highlight-paragraph.component.scss'
})
export class HighlightParagraphComponent {
  public isHighLighted: boolean = false;

  highlight() {
    this.isHighLighted = !this.isHighLighted;
  }
}
