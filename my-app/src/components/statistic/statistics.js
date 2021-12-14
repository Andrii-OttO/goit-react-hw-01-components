import PropTypes from 'prop-types';
import style from './static.module.css';

function randomColor() {
  var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while (color.length < 6) {
    color = '0' + color;
  }
  return { background: '#' + color };
}

const Statistics = ({ title = '', stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      {/* {books.map(book => (
      <li key={book.id}>{book.name}</li> */}

      <ul className={style.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={style.item} style={randomColor()}>
            <span className="label">.{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.number.isRequired,
};

export default Statistics;
