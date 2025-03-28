export interface Product {
  image: string
  title: string
  description: string
  price: number
  button: string
}

export const mockProducts: Product[] = [
  {
    image: '/img/image1.png',
    title: 'First operation',
    description: 'This is the first operation we can do',
    price: 345.23,
    button: 'Order now!',
  },
  {
    image: '/img/image2.png',
    title: 'Second operation',
    description: 'This is the second operation we can do',
    price: 3245.23,
    button: 'Order now!',
  },
  {
    image: '/img/image3.png',
    title: 'Third operation',
    description: 'This is the third operation we can do',
    price: 35.23,
    button: 'Order now!',
  },
]

export default mockProducts
