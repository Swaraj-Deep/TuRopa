// Components
import Skeleton from '@components/atoms/skeleton';

// Styles
import styles from './clothCardShimmer.module.css';

function renderBody() {
  return (
    <div>
      <Skeleton className={styles.rating} />
      <Skeleton className={`mt-xs ${styles.title}`} />
      <Skeleton className={`mt-xxs ${styles.description}`} />
    </div>
  );
}

function renderFooter() {
  return <Skeleton className={`mt-sm ${styles.footer}`} />;
}

function renderImage() {
  return <Skeleton className={styles.image} />;
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
