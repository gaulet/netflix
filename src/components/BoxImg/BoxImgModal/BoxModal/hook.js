import { useDispatch } from 'react-redux';
import { setAddPicture } from '../../../../actions/myList';

export const useConnect = (elem) => {
    const dispatch = useDispatch();

    return {
        setAddPicture: () => dispatch(setAddPicture(elem)),
    };
};
