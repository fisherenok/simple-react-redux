import React from "react";
import '../style.css';
import {changeTheme} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {ChangeTheme} from "../utils";

export default () => {
  const dispatch = useDispatch();
  let theme = useSelector(state => state.theme.value);
  ChangeTheme(theme);
  const newTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      className='btn btn-success change-theme'
      onClick={() => dispatch(changeTheme(newTheme))}
    >
      Change theme
    </button>
  )
};
