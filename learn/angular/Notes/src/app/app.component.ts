import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NOTES, Note } from '../Data/notes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NotesComponent, NoteFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Notes';
  notes: Note[] = NOTES;
}
