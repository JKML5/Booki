type ActivityCardProps = {
  size: string;
  title: string;
  imgUrl: string;
};

const ActivityCard: React.FC<ActivityCardProps> = ({ size, title, imgUrl }) => {
  return (
    <a href="#">
      <div className={'card ' + size}>
        <img src={imgUrl} alt={title} />
        <div className="description">
          <h3>{title}</h3>
        </div>
      </div>
    </a>
  );
};

export default ActivityCard;
