type FilterTagProp = {
  title: string;
  iconClassName: string;
};

const FilterTag: React.FC<FilterTagProp> = ({
  title,
  iconClassName,
}: FilterTagProp) => {
  return (
    <div className="filter">
      <div className="icon">
        <i className={'fa-solid ' + iconClassName}></i>
      </div>
      {title}
    </div>
  );
};

export default FilterTag;
