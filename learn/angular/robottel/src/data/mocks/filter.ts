export interface Filter{
  name: string
  description: string
  icon: string,
  isVisible: boolean
}

export const FILTERS:Filter[] = [
  {
    name: 'Order By',
    description: 'Order By Attributes',
    icon: 'order-by-attributes-icon',
    isVisible: true
  },
  {
    name: 'Marketplaces',
    description: 'List of marketplaces',
    icon: 'camera',
    isVisible: true
  },
  {
    name: 'Promotions',
    description: 'List of promotions',
    icon: 'promotions',
    isVisible: true
  },
  {
    name: 'Brands',
    description: 'List of brands',
    icon: 'brands',
    isVisible: true
  },
  {
    name: 'Download Listing',
    description: 'Download listing',
    icon: 'download-listing',
    isVisible: true
  },
]

