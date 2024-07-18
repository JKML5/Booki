import ActivityCard from '../common/ActivityCard';
import activities from '../../data/activities';

const ActivitiesSection: React.FC = () => {
  return (
    <section id="activities">
      <h2>Activités à Marseille</h2>
      <div className="cards">
        {activities.map((activity) => (
          <ActivityCard
            size={activity.size}
            title={activity.title}
            imgUrl={activity.imgUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
