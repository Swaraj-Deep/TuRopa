// Styles
import styles from './clothCardShimmer.module.css';

function renderBody() {
  return (
    <div>
      <div className={`${styles.rating} ${styles.shimmer}`}></div>
      <div className={`mt-xs ${styles.title} ${styles.shimmer}`}></div>
      <div className={`mt-xxs ${styles.description} ${styles.shimmer}`}></div>
    </div>
  );
}

function renderFooter() {
  return <div className={`mt-sm ${styles.footer} ${styles.shimmer}`}></div>;
}

function renderImage() {
  return <div className={`${styles.image} ${styles.shimmer}`}></div>;
}

function ClothCardShimmer() {
  return (
    <div className={styles.clothCardShimmer}>
      {renderImage()}
      <div className={styles.cardShimmerContent}>
        {renderBody()}
        {renderFooter()}
      </div>
    </div>
  );
}

export default ClothCardShimmer;
