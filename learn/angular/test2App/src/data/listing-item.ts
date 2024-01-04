export interface ListingItem {
  id: string
  name: string
  description: string
  price: number
  stock: number
}

export const LISTING_ITEMS: ListingItem[] = [
  {
    id: '1',
    name: 'Item 1',
    description: 'Description 1',
    price: 100,
    stock: 10
  },
  {
    id: '2',
    name: 'Item 2',
    description: 'Description 2',
    price: 200,
    stock: 20
  },
  {
    id: '3',
    name: 'Item 3',
    description: 'Description 3',
    price: 300,
    stock: 30
  }
]
