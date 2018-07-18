type Item = { id: number, name: string, img: string }

// initialState
const initialState = {
  list: []
}

// actions
const UPDATE_LIST = 'UPDATE_LIST';

type UpdateList = {
  type: 'UPDATE_LIST',
  payload: Item[]
}

type Actions = UpdateList;

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
export function updateList(list: Item[]) {
  return { type: UPDATE_LIST, payload: list }
}