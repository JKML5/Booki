import { Link } from 'react-router-dom';
import StarRating from './StarRating';

type AccomodationCardProps = {
  title: string;
  imgUrl: string;
  price: number;
  rating: number;
};

const AccomodationCard: React.FC<AccomodationCardProps> = ({
  title,
  imgUrl,
  price,
  rating,
}) => {
  return (
    <Link to="#">
      <div className="card">
        <img src={imgUrl} alt={'Photo ' + title} />
        <div className="description">
          <h3>{title}</h3>
          <p>
            Nuit à partir de <strong>{price}€</strong>
          </p>
          <StarRating rating={rating} />
        </div>
      </div>
    </Link>
  );
};

export default AccomodationCard;
