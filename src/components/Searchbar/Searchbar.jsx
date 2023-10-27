// import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

export const Searchbar =() => {
return (
<div className={css.search}>
    <input
        className="SearchInput"
        type="text"
        // onChange={onChange}
        // placeholder={placeholder}
      />
</div>
);
};