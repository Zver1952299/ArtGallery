import styles from './Card.module.scss';
// import image from '../../assets/Card/image.jpg';

function Card({ data }) {
  const { imageUrl, name, created } = data;

  return (
    <div className={styles.card}>
      <img src={`https://test-front.framework.team/${imageUrl}`} alt={name} />
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          <h4>{created}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
