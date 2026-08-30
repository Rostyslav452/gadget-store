import { Route, Routes } from 'react-router-dom';
import './modules/shared/styles/main.scss';
import { MainLayout } from './modules/shared/layouts/MainLayout/MainLayout';
import styles from './App.module.scss';

import { NotFoundPage } from './modules/NotFoundPage';
import { lazy, Suspense } from 'react';
import { Loader } from './modules/shared/components/Loader';

const HomePage = lazy(() =>
  import('./modules/HomePage').then(m => ({ default: m.HomePage })),
);
const CatalogPage = lazy(() =>
  import('./modules/CatalogPage').then(m => ({ default: m.CatalogPage })),
);
const ItemPage = lazy(() =>
  import('./modules/ItemPage').then(m => ({ default: m.ItemPage })),
);
const CartPage = lazy(() =>
  import('./modules/CartPage').then(m => ({ default: m.CartPage })),
);
const FavoritesPage = lazy(() =>
  import('./modules/FavoritesPage').then(m => ({ default: m.FavoritesPage })),
);

export const App = () => (
  <Suspense
    fallback={
      <div className={styles.app__loader}>
        <Loader />
      </div>
    }
  >
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path="/catalog/:category" element={<CatalogPage />} />
        <Route path="/product/:productId" element={<ItemPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Suspense>
);
