import { FC, ReactElement } from 'react';
import LikeIcon from './LikeIcon';
import ViewIcon from './ViewIcon';
import StarIcon from './StarIcon';
import './style.scss';

type ChildProps = {
  img: string,
  location: string,
  author: string,
  major: string,
  likes: number,
  views: number,
  isFavorite: boolean
}


const Card: FC<ChildProps> = ({ img, location, author, major, likes, views, isFavorite }): ReactElement => {
  return (
    <div className='card' >
      <img className='card__image' src={img} alt='Card Image' />

      <div className='card__text-block' >
        <h3 className='card__text-block-location' >{location}</h3>

        <div className='card__text-block-author-major'>
          <p>by {author}</p>
          <hr />
          <p>{major}</p>
        </div>
      </div>

      <div className='card__icons-block' >
        <div className='card__icons-block-inner'>
          <span className='card__icons-block-inner-icon' >
            <LikeIcon /> {likes}
          </span>
          <span className='card__icons-block-inner-icon' >
            <ViewIcon />{views}
          </span>
        </div>

        <div className='card__icons-block-inner star-icon' >
          <StarIcon />
        </div>
      </div>
    </div>
  )
}

export default Card;