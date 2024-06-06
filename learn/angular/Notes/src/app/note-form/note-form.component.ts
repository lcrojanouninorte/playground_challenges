import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Note } from '../../Data/notes';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.sass'
})
export class NoteFormComponent {

  @Output() toggleForm: EventEmitter<boolean> = new EventEmitter(false);
  @Output() updateNotes: EventEmitter<Note> = new EventEmitter();
  isOpen: boolean = false;

  noteForm: FormGroup   = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content : new FormControl('')
  }) ;

  toggle() {
    this.isOpen = !this.isOpen
    this.toggleForm.emit(this.isOpen);

    if(this.isOpen) {
      this.noteForm.reset();
    }
  }

  addNote(){


    if(this.noteForm.valid) {
      let note = this.noteForm.value as Note;
      note.date = Date.now().toString();
      this.updateNotes.emit(this.noteForm.value as Note);
      this.toggle();
    }
  }

}
