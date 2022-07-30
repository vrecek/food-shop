import { OpinionType } from "../interfaces/OtherInterfaces"
import img1 from '../images/user1.jpg'
import img2 from '../images/user2.jpg'
import img3 from '../images/user3.jpg'
import OneOpinion from "../components/Main Page/Opinions/OneOpinion"

const OpinionsData: OpinionType[] = [
   {
      name: 'Willard',
      surname: 'Wormald',
      avatar: img1,
      title: 'Quick and efficient',
      txt: 'Cras gravida sapien sed egestas porttitor. Aenean fringilla consequat magna efficitur faucibus. Sed dolor nibh, ultrices eget imperdiet at, tristique quis est. Vivamus auctor ornare dolor. Morbi tellus nisi, laoreet nec nulla ac, gravida sollicitudin ipsum. Pellentesque gravida euismod ligula eget egestas. Mauris convallis odio quis metus egestas auctor. Donec dui elit.',
      rate: 4
   },

   {
      name: 'Colleen',
      surname: 'Martins',
      avatar: img2,
      title: 'High quality food',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit doloribus saepe quidem eaque eligendi suscipit similique laudantium explicabo dolorem dolor autem cupiditate, sunt, delectus aperiam ipsam non accusamus quaerat nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laboriosam perferendis, quasi, alias omnis distinctio officia doloribus dolores aliquam, incidunt nobis eveniet! Veritatis, dignissimos laborum ab voluptatum expedita labore molestiae!',
      rate: 5
   },

   {
      name: 'Mildred',
      surname: 'Mcgrath',
      avatar: img3,
      title: 'Nicest service ever',
      txt: 'Integer placerat, massa ac volutpat faucibus, urna ante vulputate metus, non consectetur justo urna nec dui. Fusce ornare vel ligula nec vestibulum. Pellentesque laoreet erat viverra nibh viverra tempor. Suspendisse dictum velit quis laoreet lobortis. Nunc facilisis auctor interdum. Vestibulum tincidunt orci eget augue vehicula blandit. Proin bibendum.',
      rate: 5
   }
]

type WhichElement = 'last' | 'first'
const returnElement = (whichOne: WhichElement): JSX.Element => {
   const index: number = whichOne === 'first' ? 0 : OpinionsData.length - 1
   const { name, surname, avatar, title, txt, rate } = OpinionsData[index]

   return (
      <OneOpinion 
         name={ name }
         surname={ surname }
         avatar={ avatar }
         title={ title }
         txt={ txt }
         rate={ rate }
      />
   )
}

export default OpinionsData
export { returnElement }