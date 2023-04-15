import css from './Statistics.module.css';

export default function Statistics({ stats, title }) {
  return (
    <section className={css.block}>
      <h2 className={css.title}>{title}</h2>
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
