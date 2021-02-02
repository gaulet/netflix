import { useDispatch } from 'react-redux';
import { setPicture } from '../../actions/apiMarvel.js'

export const useConnect = () => {
    const dispatch = useDispatch();
    return {
        setPicture: () => dispatch(setPicture())
    }
}
