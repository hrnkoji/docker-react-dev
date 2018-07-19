interface IItem { id: number, name: string, img: string }

// initialState
const initialState = {
  list: []
}

// actions
const UPDATE_LIST = 'UPDATE_LIST';

interface IUpdateList { type: 'UPDATE_LIST', payload: IItem[] }

type Actions = IUpdateList;

// reducer
export default function reducer(state = initialState, action: Actions) {
  switch(action.type) {
    case UPDATE_LIST: {
      return { ...state, list: action.payload };
    }
    default: {
      return state;
    }
  }
}

// action creator
export function updateList(list: IItem[]) {
  return { type: UPDATE_LIST, payload: list }
}