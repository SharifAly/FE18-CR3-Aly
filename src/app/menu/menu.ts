export let menu = [
  {
    name: 'Pizza',
    price: 12.99,
    img: 'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191__340.jpg',
    details: 'Very delicious Pizza',
    availability: true,
  },
  {
    name: 'Pasta',
    price: 14.99,
    img: 'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078__340.jpg',
    details: 'A creamy and good taste pasta',
    availability: true,
  },
  {
    name: 'Spare Ribs',
    price: 21.99,
    img: 'https://cdn.pixabay.com/photo/2015/03/03/14/43/freddys-657466__340.jpg',
    details: 'Spare Ribs from the grill',
    availability: false,
  },
  {
    name: 'Couscous',
    price: 13.99,
    img: 'https://cdn.pixabay.com/photo/2015/09/18/04/13/couscous-945029__340.jpg',
    details: 'Couscous is a oriental food',
    availability: false,
  },
  {
    name: 'Forelle grilled',
    price: 14.99,
    img: 'https://cdn.pixabay.com/photo/2018/06/18/21/58/fish-3483465__340.jpg',
    details: 'Fish is very healthy',
    availability: true,
  },
  {
    name: 'T-Bone Steak',
    price: 31.99,
    img: 'https://cdn.pixabay.com/photo/2022/01/19/17/56/t-bone-steak-6950611__340.jpg',
    details: 'A steak have a high pirice, but a wonderful taste',
    availability: true,
  },
];

export interface IMenu {
  name: string;
  price: number;
  img: string;
  details?: string;
  availability: boolean;
}
