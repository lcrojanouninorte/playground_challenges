import { Component } from '@angular/core';
import { RoomItemComponent } from '../room-item/room-item.component';
import { Room, ROOMS } from '../../data/rooms';

@Component({
  selector: 'app-room-listing',
  standalone: true,
  imports: [RoomItemComponent],
  templateUrl: './room-listing.component.html',
  styleUrl: './room-listing.component.sass'
})
export class RoomListingComponent {

  rooms: Room[] = ROOMS;
}
