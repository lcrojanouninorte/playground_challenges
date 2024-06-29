import { Component, Input } from '@angular/core';
import { Note } from '../../Data/notes';

@Component({
  selector: 'app-note-item',
  standalone: true,
  imports: [],
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.sass','../../theme/styles.css']
})
export class NoteItemComponent {
  @Input() note: Note = { id: 0, title: '', content: '', date: Date.now().toString() };
}
