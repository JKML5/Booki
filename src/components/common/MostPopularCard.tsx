import { Link } from 'react-router-dom';
import StarRating from './StarRating';

type MostPopularCardProps = {
  title: string;
  imgUrl: string;
  price: number;
  rating: number;
};

const MostPopularCard: React.FC<MostPopularCardProps> = ({
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
          <div>
            <h3>{title}</h3>
            <p>
              Nuit à partir dee <strong>{price}€</strong>
            </p>
          </div>
          <StarRating rating={rating} />
        </div>
      </div>
    </Link>
  );
};

export default MostPopularCard;
