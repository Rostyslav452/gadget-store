import { Category } from './components/CategoryCard/types';
import { CategoryCard } from './components/CategoryCard';
import styles from './CategoryList.module.scss';
import { CATEGORIES_CONFIG } from './categories';
import { Product } from '../../../shared/types/Product';
import { useMemo } from 'react';

interface Props {
  products: Product[];
}

export const CategoryList: React.FC<Props> = ({ products }) => {
  const categoriesWithCounts = useMemo(() => {
    const countsMap = products.reduce<Record<string, number>>(
      (acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
      },
      {},
    );

    return CATEGORIES_CONFIG.map((category): Category => {
      const categoryKey = category.to.replace('/catalog/', '');

      return {
        ...category,
        count: countsMap[categoryKey] || 0,
      };
    });
  }, [products]);

  return (
    <ul className={styles.list}>
      {categoriesWithCounts.map(category => (
        <CategoryCard
          key={category.title}
          to={category.to}
          imageSrc={category.imageSrc}
          altText={category.title}
          title={category.title}
          count={category.count}
        />
      ))}
    </ul>
  );
};
