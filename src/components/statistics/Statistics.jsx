import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({ stats, title }) {
  return (
    <section className={css.block}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statsList}>
        {stats.map(stat => {
          return (
            <li className={css.item} key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
