export interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
}

export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Note 1',
    content: 'Content 1',
    date: '2022-01-01'
  },
  {
    id: 2,
    title: 'Note 2',
    content: 'Content 2',
    date: '2022-01-01'
  },
  {
    id: 3,
    title: 'Note 3',
    content: 'Content 3',
    date: '2022-01-01'
  }
]
