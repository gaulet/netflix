import { useDispatch, useSelector } from 'react-redux';
import { setAddPicture, setDeletePicture } from '../../actions/myList';
import { getItemMyListTrue } from '../../selectors/myList';


export const useItemMyListTrue = (src) => ({
    bool: useSelector(getItemMyListTrue(src)),
});

export const useConnect = (elem) => {
    const dispatch = useDispatch();

    return {
        setAddPicture: () => dispatch(setAddPicture(elem)),
        setDeletePicture: () => dispatch(setDeletePicture(elem.src)),
    };
};
