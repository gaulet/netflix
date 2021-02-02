import { useSelector } from 'react-redux';
import { getSearchPicture } from '../../selectors/picture';


export const useSearchPicture = (string) => ({
  picture: useSelector(getSearchPicture(string)),
});
