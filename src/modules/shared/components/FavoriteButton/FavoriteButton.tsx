import classNames from 'classnames';
import styles from './FavoriteButton.module.scss';
import activeHeartIcon from '../../../../assets/icons/active-heart.svg';
import heartIcon from '../../../../assets/icons/heart.svg';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export const FavoriteButton: React.FC<Props> = ({
  disabled,
  selected,
  className,
  ...props
}) => {
  const classes = classNames(
    styles.btn,
    {
      [styles['btn--selected']]: selected,
    },
    className,
  );

  return (
    <button
      {...props}
      disabled={disabled}
      className={classes}
      aria-label={selected ? 'Remove from favorites' : 'Add to favorites'}
    >
      {selected ? (
        <img src={activeHeartIcon} alt="" width="16" height="14" />
      ) : (
        <img src={heartIcon} alt="" width="16" height="14" />
      )}
    </button>
  );
};
