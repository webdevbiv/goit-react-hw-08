import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.scss';
import { selectNameFilter } from '@redux/filters/selectors';
import { changeFilter } from '@redux/filters/slice';

const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchBox}>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
