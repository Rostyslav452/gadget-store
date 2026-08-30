import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { IconButton } from '../../../../components/IconButton';
import { useCallback } from 'react';
import logoIcon from '../../../../../../assets/icons/logo.png';
import arrowTopIcon from '../../../../../../assets/icons/arrow-top.svg';

export const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer className={styles.footer}>
      <Link to={'/'}>
        <img
          src={logoIcon}
          alt="Nice Device Logo"
          className={styles.footer__logo}
          width="64"
          height="22"
        />
      </Link>
      <ul className={styles.footer__list}>
        <li className={styles.footer__item}>
          <Link
            to={'https://github.com/Rostyslav452'}
            className={styles.footer__link}
          >
            GitHub
          </Link>
        </li>
        <li className={styles.footer__item}>
          <Link
            to={'mailto:rooostik2016@gmail.com'}
            className={styles.footer__link}
          >
            Contacts
          </Link>
        </li>
        <li className={styles.footer__item}>
          <Link
            to={'https://opensource.org/license/mit'}
            className={styles.footer__link}
          >
            Rights
          </Link>
        </li>
      </ul>
      <div className={styles.footer__button}>
        <span className={styles.text}>Back to top</span>
        <IconButton aria-label={`Scroll to top`} onClick={scrollToTop}>
          <img src={arrowTopIcon} alt="" width="16" height="16" />
        </IconButton>
      </div>
    </footer>
  );
};
