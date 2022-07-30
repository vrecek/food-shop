import { FaWeight } from "react-icons/fa"
import { MdOutlineDeliveryDining } from "react-icons/md"
import { ProductType } from "../interfaces/OtherInterfaces"
import burg1 from '../images/products/burg1.jpg'
import burg2 from '../images/products/burg2.jpg'
import dess1 from '../images/products/dess1.jpg'
import drink1 from '../images/products/drink1.jpg'
import drink2 from '../images/products/drink2.jpg'
import fries1 from '../images/products/fries1.jpg'
import fries2 from '../images/products/fries2.jpg'
import oth1 from '../images/products/oth1.jpg'
import pizz1 from '../images/products/pizz1.jpg'
import pizz2 from '../images/products/pizz2.jpg'
import pizz3 from '../images/products/pizz3.jpg'

const Products: ProductType[] = [
   {
      title: 'Medium cheeseburger with vegetables',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 4,
      category: 'Burgers',
      price: 8,
      id: 'ba0f783fd6524f8ca1c0ac0c0cd210dd',
      addedDate: 1,
      image: burg1,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '1332 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   },

   {
      title: 'Big beefy burger',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 5,
      category: 'Burgers',
      price: 10,
      id: '2782086ba89e4735ba1cc3b39a33da9f',
      addedDate: 2,
      image: burg2,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '1632 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   },

   {
      title: 'Milkshake with pieces of chocolate',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 5,
      category: 'Desserts',
      price: 5,
      id: 'fdbdd799a51c46129959a8a9097e3f1a',
      addedDate: 3,
      image: dess1,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '532 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   },

   {
      title: 'Strawberry drink with ice',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 3,
      category: 'Drinks',
      price: 3,
      id: 'e913298468534f08bbd904aa652b0837',
      addedDate: 4,
      image: drink1,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '252 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   },

   {
      title: 'Cola with ice',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 4,
      category: 'Drinks',
      price: 3,
      id: '5fb9123d595046958961e2d1540e338e',
      addedDate: 5,
      image: drink2,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '1132 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   },

   {
      title: 'Regular french fries',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 4,
      category: 'Fries',
      price: 4,
      id: 'cf0ebdafbd6d4d1a83a745983968c36c',
      addedDate: 6,
      image: fries1,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '829 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   },

   {
      title: 'Big sized fries',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 5,
      category: 'Fries',
      price: 5,
      id: 'ad5bfdf7878e480381fd5ef25e940475',
      addedDate: 7,
      image: fries2,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '1129 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   },

   {
      title: 'Chicken tortilla with salad',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 5,
      category: 'Other',
      price: 8,
      id: '00ed223dddef4d17a75473ed69c81ffb4',
      addedDate: 8,
      image: oth1,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '1429 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   },

   {
      title: 'Pizza with a ham and olive',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 4,
      category: 'Pizzas',
      price: 6,
      id: 'edcd8bd81a2c44939abb7a51e18b046f',
      addedDate: 9,
      image: pizz1,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '1629 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   },

   {
      title: 'Pizza with shrimps and tomatoes',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 3,
      category: 'Pizzas',
      price: 11,
      id: 'e3e971d6caec42508f3e5fc95b513d39',
      addedDate: 10,
      image: pizz2,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '1312 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   },

   {
      title: 'Hawaii soft pizza',
      shortPara: 'Lorem ipsum dolor ist amet conqestaur elisg olo niqsut',
      rate: 2,
      category: 'Pizzas',
      price: 7,
      id: '6b834d9aac0a42acb31f050c08a23d1d',
      addedDate: 11,
      image: pizz3,
      inUsersBasket: 0,
      sizes: ['S', 'M', 'L', 'XL'],
      miscInfo: [
         {
            icon: <FaWeight />,
            text: '1029 kcal'
         },

         {
            icon: <MdOutlineDeliveryDining />,
            text: '10 minutes'
         }
      ]
   }
]

export default Products