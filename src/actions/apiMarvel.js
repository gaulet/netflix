import axios from "axios"
import {APIMARVEL} from '../constants'

function getRandom(max = 100) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export const API = {
    data: 'set-picture',
  };

export const setPicture = () => (dispatch) => {
    axios.get(APIMARVEL).then(function (response) {
        const {data: {data: {results: res}}} = response
    
        const data = res.map((item)=> {
          const {thumbnail: {path: url, extension: ext}} = item
          return {name: `${getRandom()}${getRandom()}`,src: (url+"."+ext)}
        })
        dispatch({ type: API.data, data: data })
      })
      .catch(function (error) {
        console.log(error);
      })
};

