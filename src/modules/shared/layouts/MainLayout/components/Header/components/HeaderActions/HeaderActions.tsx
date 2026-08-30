import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './HeaderActions.module.scss';
import { useCartState } from '../../../../../../store/CartContext';
import { useFavorites } from '../../../../../../store/FavoritesContext';
import heartIcon from '../../../../../../../../assets/icons/heart.svg';
import shoppingBagIcon from '../../../../../../../../assets/icons/shopping-bag.svg';

const handleActiveLink = ({ isActive }: { isActive: boolean }) => {
  return classNames(styles['header-actions__link'], {
    [styles['header-actions__link--active']]: isActive,
  });
};

interface Props {
  className?: string;
  onClose?: () => void;
}

export const HeaderActions: React.FC<Props> = ({ className, onClose }) => {
  const location = useLocation();
  const state = useCartState();
  const { favorites } = useFavorites();
  const favoritesCount = favorites.length;
  const cartCount = state.cartItems.length;

  return (
    <ul className={classNames(styles['header-actions'], className)}>
      <li className={styles['header-actions__item']}>
        <NavLink
          to={'/favorites'}
          className={handleActiveLink}
          state={{ from: location.pathname + location.search }}
          onClick={onClose}
        >
          <div className={styles['header-actions__wrapper']}>
            <img src={heartIcon} alt="Favorites" width="16" height="14" />
            {favoritesCount > 0 && (
              <span className={styles['header-actions__count']}>
                {favoritesCount}
              </span>
            )}
          </div>
        </NavLink>
      </li>
      <li className={classNames(styles['header-actions__item'])}>
        <NavLink
          to={'/cart'}
          className={handleActiveLink}
          state={{ from: location.pathname + location.search }}
          onClick={onClose}
        >
          {' '}
          <div className={styles['header-actions__wrapper']}>
            <img
              src={shoppingBagIcon}
              alt="Shopping cart"
              width="16"
              height="16"
            />
            {cartCount > 0 && (
              <span className={styles['header-actions__count']}>
                {cartCount}
              </span>
            )}
          </div>
        </NavLink>
      </li>
    </ul>
  );
};
