// Hooks
import useProducts from './hooks/useProducts';

// Components
import Card from '@components/atoms/card';
import Spinner from '@components/atoms/spinner';
import Backdrop from '@components/atoms/backdrop';
import ClothCardBody from './molecules/clothCardBody';
import ClothCardFooter from './molecules/clothCardFooter';

// Styles
import styles from './clothesGrid.module.css';

// fakeapi.platzi.com/en/rest/products/

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

function ClothesGrid() {
  const { clothes, isLoading } = useProducts();
  if (isLoading) {
    return (
      <Backdrop className={styles.backdrop}>
        <Spinner />
      </Backdrop>
    );
  }

  return (
    <div className={`grid ${styles.clothesGrid}`}>
      {clothes.map(renderCloth)}
    </div>
  );
}

export default ClothesGrid;
