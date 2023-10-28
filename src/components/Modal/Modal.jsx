import PropTypes from 'prop-types';
import css from './Modal.module.css'

export const Modal = ({src, alt, handleClose}) => (
        <div className={css.modalOverlay} onClick={handleClose}>
  <div className={css.modalImg}>
    <img src={src} alt={alt} />
  </div>
</div>
    )

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};