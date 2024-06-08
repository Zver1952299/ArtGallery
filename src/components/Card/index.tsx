import styles from './Card.module.scss';

function Card({ data, authors, locations }) {
  return (
    <div className={styles.card}>
      <img
        src={`https://test-front.framework.team/${data.imageUrl}`}
        alt={data.name}
      />
      <div className={styles.info}>
        <div className={styles.name}>
          <h3>{data.name}</h3>
          <h4>{data.created}</h4>
        </div>
        <div className={styles.location}>
          <h3>{authors.name}</h3>
          <h4>{locations.location}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
