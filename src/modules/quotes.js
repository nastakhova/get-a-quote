export const ADD_QUOTE = 'quotes/ADD_QUOTE'
export const REMOVE_QUOTE = 'quotes/REMOVE_QUOTE'
export const SAVE_QUOTE = 'quotes/SAVE_QUOTE'
export const EDIT_QUOTE = 'quotes/EDIT_QUOTE'
export const ERROR_QUOTE = 'quotes/ERROR_QUOTE'

const initialState = {
  count: 0,
  quotes: [],
  edit: false,
  activeId: null,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUOTE:
      return {
        ...state,
        quotes: [...state.quotes, action.payload],
        count: state.count + 1,
        edit: false,
        activeId: null,
        error: false
      }

    case REMOVE_QUOTE:
      return {
        ...state,
        count: state.count - 1,
        edit: false,
        activeId: null,
        quotes: state.quotes.filter(quote => quote.ID !== action.payload)
      }

    case EDIT_QUOTE:
      return {
        ...state,
        edit: true,
        activeId: action.payload
    }

    case ERROR_QUOTE:
      return {
        ...state,
        error: true
    }

    case SAVE_QUOTE: 
      return {
        ...state,
        edit: false,
        activeId: null,
        quotes: state.quotes.map(quote => {
             if(quote.ID === action.payload.ID) quote = action.payload
             return quote
        })
      }

    default:
      return state
  }
}

export function fetchQuote() {
  return dispatch => {
    return fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then(data => {
        data.text()
        .then(text => {
            dispatch(addQuote(JSON.parse(text)[0]));
            return JSON.parse(text)
        })
      })
      .catch(error => {
        console.log(error)
        dispatch(errorQuote());
        }
      );
  };
}


export const addQuote = quote => {
  return dispatch => {
    dispatch({
      type: ADD_QUOTE,
      payload: quote
    })
  }
}

export const errorQuote = () => {
  return dispatch => {
    dispatch({
      type: ERROR_QUOTE
    })
  }
}


export const removeQuote = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_QUOTE,
      payload: id
    })
  }
}

export const editQuote = id => {
  return dispatch => {
    dispatch({
      type: EDIT_QUOTE,
      payload: id
    })
  }
}

export const saveQuote = obj => {
  return dispatch => {
    dispatch({
      type: SAVE_QUOTE,
      payload: obj
    })
  }
}
