import accomodations from '../../data/mostPopularAccomodations';
import MostPopularCard from '../common/MostPopularCard';

const MostPopularSection: React.FC = () => {
  return (
    <section id="most_popular">
      <h2>
        Les plus populaires <i className="fa-solid fa-star"></i>
      </h2>

      <div className="cards">
        {accomodations.map((accomodation) => (
          <MostPopularCard
            key={accomodation.id}
            title={accomodation.title}
            imgUrl={accomodation.imgUrl}
            price={accomodation.price}
            rating={accomodation.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default MostPopularSection;
