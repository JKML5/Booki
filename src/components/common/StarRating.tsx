type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);

  let stars = [];

  // Ajouter les étoiles pleines
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fa-solid fa-star checked"></i>);
  }

  // Ajouter les étoiles vides pour compléter jusqu'à 5 étoiles
  const emptyStars = 5 - fullStars;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className="fa-solid fa-star"></i>);
  }

  return <div className="rating">{stars}</div>;
};

export default StarRating;
