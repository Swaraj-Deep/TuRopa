import { useLocation } from 'react-router-dom';

// Constants
import { EMPTY_OBJECT } from '@constants/defaults';

// Components
import ClothDetails from '@components/templates/clothDetails';

function Details() {
  const { state } = useLocation();
  const { cloth } = state || EMPTY_OBJECT;
  return <ClothDetails cloth={cloth} />;
}

export default Details;
