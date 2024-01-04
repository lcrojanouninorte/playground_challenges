export interface Listing {
  price: number;
  name: string;
  description: string;
  image: string;
  sku: string;
  quantity: number;
}

export const LISTING:Listing[] = [
  {
    price: 5000,
    name: 'Security camera',
    description: 'This Camera is great for security purposes',
    image: 'https://picsum.photos/id/1/300/300',
    sku: 'YXZ232',
    quantity: 1
  },
  {
    price: 20000,
    name: 'CCTV device',
    description: 'This device will help you monitor your property',
    image: 'https://picsum.photos/id/13/300/300',
    sku: 'ABC123',
    quantity: 1
  },
  {
    price: 40000,
    name: 'CCTV device',
    description: 'This device will help you monitor your property',
    image: 'https://picsum.photos/300/300',
    sku: 'ABC123',
    quantity: 1
  }
];
