import AccomodationCard from '../common/AccomodationCard';
import { Link } from 'react-router-dom';
import accomodations from '../../data/accomodations';

const AccomodationsSection: React.FC = () => {
  return (
    <section id="accomodations">
      <h2>Hébergements à Marseille</h2>

      <div className="cards">
        {accomodations.map((accomodation) => (
          <AccomodationCard
            key={accomodation.id}
            title={accomodation.title}
            imgUrl={accomodation.imgUrl}
            price={accomodation.price}
            rating={accomodation.rating}
          />
        ))}
      </div>

      <p className="see-more">
        <Link to="#" title="Afficher plus">
          Afficher plus
        </Link>
      </p>
    </section>
  );
};

export default AccomodationsSection;
