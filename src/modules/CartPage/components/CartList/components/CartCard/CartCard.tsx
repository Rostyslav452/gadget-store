import { Link } from 'react-router-dom';
import { IconButton } from '../../../../../shared/components/IconButton';
import {
  CartItem,
  useCartDispatch,
} from '../../../../../shared/store/CartContext';
import { getImageUrl } from '../../../../../shared/utils/getImageUrl';
import styles from './CartCard.module.scss';

interface Props {
  item: CartItem;
}

export const CartCard: React.FC<Props> = ({ item }) => {
  const dispatch = useCartDispatch();
  const { image, name, price, itemId } = item.product;

  return (
    <li className={styles['cart-card']}>
      <button
        onClick={() => dispatch({ type: 'deleteProduct', productId: itemId })}
        className={styles['cart-card__delete']}
      >
        <img
          src={getImageUrl('/icons/cross.svg')}
          alt={'delete item'}
          width="10"
          height="10"
        />
      </button>

      <img
        src={getImageUrl(image)}
        className={styles['cart-card__image']}
        alt={name}
      />

      <Link to={`/product/${itemId}`} className={styles['cart-card__link']}>
        <span className={styles['cart-card__title']}>{name}</span>
      </Link>

      <div className={styles['cart-card__controls']}>
        <IconButton
          aria-label="Decrement quantity"
          onClick={() =>
            dispatch({ type: 'decrementQuantity', productId: itemId })
          }
          disabled={item.quantity === 1}
        >
          <img
            src={getImageUrl('/icons/minus.svg')}
            alt={'decrease quantity'}
            width="11"
            height="2"
          />
        </IconButton>

        <span>{item.quantity}</span>

        <IconButton
          aria-label="Increment quantity"
          onClick={() =>
            dispatch({ type: 'incrementQuantity', productId: itemId })
          }
        >
          <img
            src={getImageUrl('/icons/plus.svg')}
            alt={'increase quantity'}
            width="11"
            height="11"
          />
        </IconButton>
      </div>

      <span className={styles['cart-card__price']}>${price}</span>
    </li>
  );
};
