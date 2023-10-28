import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

export const Searchbar = ({onSubmit}) => (
<header className={css.searchbar}>
  <form className={css.searchForm} onSubmit={onSubmit}>
    <button type="submit" className={css.searchButton}>
      <span className={css.searchButtonLabel}>Search</span>
    </button>

    <input
      name="inputForSearch"
      className={css.searchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
}