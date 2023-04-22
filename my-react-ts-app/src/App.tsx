import { useEffect, useState, ReactElement } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { cardInfo } from './data';
import './App.scss';

const App = (): ReactElement => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(cardInfo.map(e => <Card key={e.img} img={e.img} location={e.location} author={e.author} major={e.major} likes={e.likes} views={e.views} isFavorite={e.isFavorite} />));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className='cards' >
        {cards}
        {cards}
      </div>
    </div>
  )
}

export default App
