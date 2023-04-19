import { useEffect, useState, ReactElement } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { cardInfo } from './data';
import './App.scss';

interface ICard {
  img: string,
  location: string,
  author: string,
  major: string,
  likes: number,
  views: number,
  isFavorite: boolean
}
type TCard = typeof initCard;
const initCard = { name: 'Jon' }

const App = (): ReactElement => {
  const [cards, setCards] = useState<ICard>([]);
  useEffect(() => {
    setCards(cardInfo.map(e => <Card img={e.img} location={e.location} author={e.author} major={e.major} likes={e.likes} views={e.views} isFavorite={e.isFavorite} />))
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className='cards' >
        {cards}
      </div>
    </div>
  )
}

export default App
