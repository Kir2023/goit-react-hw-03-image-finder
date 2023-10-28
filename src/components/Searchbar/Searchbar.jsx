import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

export const Searchbar = ({onSubmit}) => {
return (
<header className={css.searchbar}>
  <form onSubmit={onSubmit} className={css.searchForm}>
    <button type="submit" className={css.searchButton}>
      <span className={css.searchButtonLabel}>Search</span>
    </button>

    <input
      className={css.searchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
);
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}