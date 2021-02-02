import { map } from 'ramda';


export const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}


export const ramdomArray = (tab = []) => {
    return [...map(() => tab[Math.floor(Math.random() * Math.floor(tab.length - 1))], tab)]
}