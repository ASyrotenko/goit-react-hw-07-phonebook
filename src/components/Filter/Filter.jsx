import { useSelector, useDispatch } from 'react-redux';

import { changeFilterRedux } from 'redux/filterSlice/filterSlice';

import styles from './filter.module.css';

const Filter = () => {
  const filterRedux = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <input
        type="text"
        value={filterRedux}
        onChange={({ currentTarget }) =>
          dispatch(changeFilterRedux(currentTarget.value))
        }
      />
    </label>
  );
};

export default Filter;
