import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { NavMenu } from './components/NavMenu';
import { HeaderActions } from './components/HeaderActions';
import { useState } from 'react';
import { MobileMenu } from './components/MobileMenu';
import { getImageUrl } from '../../../../utils/getImageUrl';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.header__logo}>
        <img
          src={getImageUrl('/icons/logo.png')}
          alt="Nice Device Logo"
          className={styles['header__logo-image']}
          width="64"
          height="22"
        />
      </Link>
      <nav className={styles.header__menu}>
        <button
          className={styles.header__button}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-expanded={isMobileMenuOpen}
        >
          <img
            src={getImageUrl('/icons/Menu.svg')}
            alt="Menu Icon"
            width="16"
            height="16"
          />
        </button>

        <NavMenu />
      </nav>

      <div className={styles.header__actions}>
        <HeaderActions />
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
