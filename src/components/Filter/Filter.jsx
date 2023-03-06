import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import css from './Filter.module.css';
import { CgSearch } from 'react-icons/cg';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.formCard}>
      <h2>Find</h2>
      <label className={css.label}>
        Find contact by name:
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={event => dispatch(setFilter(event.target.value))}
        />
        <CgSearch className={css.findIcon} />
      </label>
    </div>
  );
};

export default Filter;
