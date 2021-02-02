import { useSelector } from 'react-redux';
import { getAllPicture } from '../../selectors/picture';

export const useAllPicture = () => ({
  picture: useSelector(getAllPicture()),
});
