import {
  CHANGE_THEME,
  CREATE_POST,
  HIDE_ALERT,
  HIDE_LOADER,
  REQUEST_POST,
  SHOW_ALERT,
  SHOW_LOADER
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    });

    setTimeout(() => {
      dispatch(hideAlert())
    },3000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}

export function fetchPost() {
  return {
    type: REQUEST_POST
  }
  // return async dispatch => {
  //   try {
  //     dispatch(showLoader());
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
  //     const json = await response.json();
  //     setTimeout(() => {
  //       dispatch({type: FETCHED_POST, payload: json});
  //       dispatch(hideLoader());
  //     }, 500);
  //   } catch (e) {
  //     dispatch(showAlert('Oops... Something went wrong :('));
  //     dispatch(hideLoader());
  //   }
  // }
}
