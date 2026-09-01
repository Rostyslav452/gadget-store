import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { BreadcrumbLink } from './types';
import homeIcon from '../../../../assets/icons/home.svg';

interface Props {
  links: BreadcrumbLink[];
}

export const Breadcrumbs: React.FC<Props> = ({ links }) => {
  return (
    <nav className={styles.breadcrumbs}>
      <ol className={styles.breadcrumbs__list}>
        <li className={styles.breadcrumbs__item} key={'Home'}>
          <Link to={'/'} className={styles.breadcrumbs__link}>
            <img src={homeIcon} alt="Home" />
          </Link>
        </li>

        {links.map((link, index) => {
          const isLast = index === links.length - 1;
          const label = link.label
            ? link.label.charAt(0).toUpperCase() + link.label.slice(1)
            : '';

          return (
            <li className={styles.breadcrumbs__item} key={label}>
              {!isLast && link.to ? (
                <Link to={link.to} className={styles.breadcrumbs__link}>
                  {label}
                </Link>
              ) : (
                <span>{label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
