import * as types from '../constants/ActionTypes';


export function editRow(id, type, flag) {
  return (dispatch, getState) => {
      const listData = getState().data.myListData;
      listData.forEach((obj, i) => {
          obj[type].forEach((val, j) => {
              if( val.id == id){
                  listData[i][type][j].edit = flag;
              }
          });
      });
      dispatch({
        type: types.EDIT_ROW,
         myListData: listData,
        });
    }
}

export function addNew(type) {
    return (dispatch, getState) => {
        const listData = getState().data.myListData;
        let len = 0;
        listData.forEach((obj, i) => {
            for (let key in obj) {
                len += obj[key].length;
            }
            obj[type].push({
                id: len + 1,
                title: '',
                img: 'http://cdn0.nflximg.net/webp/3200/9163200.webp',
                edit: true,
            });
        });


        dispatch({
            type: types.EDIT_ROW,
            myListData: listData,
        })
    }
}

export function updateRow(value, id, type) {
    return (dispatch, getState) => {
        const listData = getState().data.myListData;
        listData.forEach((obj, i) => {
            obj[type].forEach((val, j) => {
                if( val.id == id){
                    listData[i][type][j].title = value;
                }
            })
        })
        dispatch({
            type: types.EDIT_ROW,
            myListData: listData,
        })
    }
}

export function deleteRow(id, type) {
    return (dispatch, getState) => {
        const listData = getState().data.myListData;
        listData.forEach((obj, i) => {
            obj[type].forEach((val, j) => {
                if( val.id == id){
                    listData[i][type].splice(j, 1);
                }
            })
        })
        dispatch({
            type: types.EDIT_ROW,
            myListData: listData,
        })
    }
}
