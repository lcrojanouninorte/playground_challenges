export interface Room {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  rooms: number;
}


export const ROOMS: Room[] =[
  {
    id: '1',
    name: 'Room 1',
    description: 'This is room 1',
    imageUrl: 'https://picsum.photos/200/300',
    price: 100,
    rooms: 1
  },
  {
    id: '2',
    name: 'Room 2',
    description: 'This is room 2',
    imageUrl: 'https://picsum.photos/200/300',
    price: 200,
    rooms: 2
  },
  {
    id: '3',
    name: 'Room 3',
    description: 'This is room 3',
    imageUrl: 'https://picsum.photos/200/300',
    price: 300,
    rooms: 3
  }
]
