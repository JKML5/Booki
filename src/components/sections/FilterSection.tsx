import FilterTag from '../common/FilterTag';
import filters from '../../data/filters';

const FilterSection: React.FC = () => {
  return (
    <section id="filter_section">
      <strong>Filtres</strong>

      <div className="content">
        {filters.map((filter) => (
          <FilterTag
            key={filter.id}
            title={filter.title}
            iconClassName={filter.iconClassName}
          />
        ))}
      </div>
    </section>
  );
};

export default FilterSection;
