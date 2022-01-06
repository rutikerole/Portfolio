import { v4 as uuidv4 } from 'uuid';

import PomodoroImg from '../images/pomodoro.jpg';
import MyDietImg from '../images/mydiet.jpg';
import TodoImg from '../images/todo.jpg';
import ParaImg from '../images/para.jpg';
import CocktailImg from '../images/cocktail.jpg';
import AmazonImg from '../images/amazon_clone.jpg';
import WhatsappImg from '../images/whatsapp_clone.jpg';
import TeslaImg from '../images/tesla_clone.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Pomodoro',
    desc:
      'An website which is use as counter, using this web we can set a timer for any task.',
    img: PomodoroImg,
    link: 'https://pomodoro-app-rutik.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'My Diet',
    desc:
      'An website which to help people to get good and healthy home made food for good life-style.',
    img: MyDietImg,
    link: 'https://mydiet-rutik.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Todo',
    desc:
      'It is basically our todo list which remind us to complete your task. its use for set daily or month goal',
    img: TodoImg,
    link: 'https://todo-1-rutik.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Para Generator',
    desc:
      'Generally we build something we need random text or paras, so this web app help us.',
    img: ParaImg,
    link: 'https://para-genrator-rutik.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Cocktail',
    desc:
      'Using this website we find many diffrent combination of drinks and good quality of cocktails.',
    img: CocktailImg,
    link: 'https://cocktails-rutik.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Amazon_clone',
    desc:
      'This is the basic frontend of Amazon, i can make it for learning purpose and some practise of react js',
    img: AmazonImg,
    link: 'https://amazon-clone-rutik.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'WhatsApp_clone',
    desc:
      'This is the basic frontend of WhatsApp, i can make it for learning purpose and some practise of react js',
    img: WhatsappImg,
    link: 'https://whatsapp-clone-rutik.netlify.app',
  },
  {
    id: uuidv4(),
    name: 'Tesla_clone',
    desc:
      'This is the basic frontend of Tesla, i can make it for learning purpose and some practise of react js',
    img: TeslaImg,
    link: 'https://tesla-clone-rutik.netlify.app',
  },
];

export default projects;
