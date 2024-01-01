// Components
import Skeleton from '@components/atoms/skeleton';

// Styles
import styles from './clothDetailsShimmer.module.css';

function ClothDetailsShimmer() {
  return (
    <div>
      <div>
        <Skeleton className={styles.carousel} />
        <div
          className={`flex items-center justify-center gap-xxs mt-xs ${styles.indicators}`}
        >
          <Skeleton className={styles.activeIndicator} />
          <Skeleton className={styles.indicator} />
          <Skeleton className={styles.indicator} />
          <Skeleton className={styles.indicator} />
        </div>
      </div>
    </div>
  );
}

export default ClothDetailsShimmer;
