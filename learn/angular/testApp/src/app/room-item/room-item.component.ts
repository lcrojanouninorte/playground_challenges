import { Component, Input } from '@angular/core';
import { Room } from '../../data/rooms';
@Component({
  selector: 'app-room-item',
  standalone: true,
  imports: [],
  templateUrl: './room-item.component.html',
  styleUrl: './room-item.component.sass'
})

export class RoomItemComponent {
  @Input("room") room: Room | undefined;

}
