import { Component, Input } from '@angular/core';
import { NoteItemComponent } from '../note-item/note-item.component';
import { Note } from '../../Data/notes';
import { NoteFormComponent } from '../note-form/note-form.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NoteItemComponent, NoteFormComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent {

  @Input() notes:Note[] = [];
  isOpen: boolean = false;
  toggleForm($event: boolean) {
    this.isOpen = $event;
  }

  updateNotes($event: Note) {
      let newNote = $event;
      let ids = this.notes.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }

      newNote.id = maxId + 1;
      this.notes.unshift(newNote);


  }
}
