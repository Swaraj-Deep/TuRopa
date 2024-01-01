// Hooks
import useProducts from './hooks/useProducts';

// Utils
import _times from '@utils/times';

// Constants
import { DEFAULT_LOADING_CARDS } from './clothesGrid.constants';

// Components
import Card from '@components/atoms/card';
import ClothCardBody from './molecules/clothCardBody';
import ClothCardFooter from './molecules/clothCardFooter';
import ClothCardShimmer from './molecules/clothCardShimmer';

// Styles
import styles from './clothesGrid.module.css';

function renderBody(cloth) {
  return <ClothCardBody cloth={cloth} />;
}

function renderFooter(cloth) {
  return <ClothCardFooter cloth={cloth} />;
}

function renderCloth(cloth) {
  return (
    <Card
      key={cloth.id}
      imageUrl={cloth.thumbnail}
      renderBody={() => renderBody(cloth)}
      renderFooter={() => renderFooter(cloth)}
    />
  );
}

function renderShimmerLayout() {
  return _times(DEFAULT_LOADING_CARDS, (i) => <ClothCardShimmer key={i} />);
}

function ClothesGrid() {
  const { clothes, isLoading } = useProducts();

  return (
    <div className={`grid ${styles.clothesGrid}`}>
      {isLoading ? renderShimmerLayout() : clothes.map(renderCloth)}
    </div>
  );
}

export default ClothesGrid;
