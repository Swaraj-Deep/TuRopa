import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

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

const renderCloth = (onClothClick) => (cloth) => {
  const onClick = () => onClothClick(cloth);
  return (
    <Card
      key={cloth.id}
      imageUrl={cloth.thumbnail}
      renderBody={() => renderBody(cloth)}
      renderFooter={() => renderFooter(cloth)}
      onClick={onClick}
    />
  );
};

function renderShimmerLayout() {
  return _times(DEFAULT_LOADING_CARDS, (i) => <ClothCardShimmer key={i} />);
}

function ClothesGrid() {
  const { clothes, isLoading } = useProducts();
  const navigate = useNavigate();

  const onClothClick = useCallback(
    (cloth) => {
      const { id } = cloth;
      navigate(`details/${id}`, { state: { cloth } });
    },
    [navigate]
  );

  return (
    <div className={`grid ${styles.clothesGrid}`}>
      {isLoading
        ? renderShimmerLayout()
        : clothes.map(renderCloth(onClothClick))}
    </div>
  );
}

export default ClothesGrid;
