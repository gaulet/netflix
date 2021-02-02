import { useSelector } from 'react-redux';
import { getMyList } from '../../selectors/myList';

export const useMyList = () => ({
  picture: useSelector(getMyList),
});
