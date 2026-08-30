import classNames from 'classnames';
import arrowLeftIcon from '../../../../assets/icons/arrow-left.svg';
import arrowRightIcon from '../../../../assets/icons/arrow-right.svg';
import { IconButton } from '../IconButton';
import styles from './Pagination.module.scss';
import { generatePagination } from './utils';

interface Props {
  pageCount: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  pageCount,
  currentPage,
  handleChangePage,
}) => {
  const pages = generatePagination(currentPage, pageCount);

  return (
    <div className={styles.pagination}>
      <IconButton
        aria-label={`To previous page`}
        disabled={currentPage === 1}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        <img src={arrowLeftIcon} alt="Previous" width="6" height="10" />
      </IconButton>

      <div className={styles.pagination__pages}>
        {pages.map((page, index) => {
          if (page === '...') {
            return <span key={`ellipsis-${index}`}>...</span>;
          }

          return (
            <IconButton
              aria-label={`To ${page} page`}
              key={page}
              onClick={() => handleChangePage(+page)}
              className={classNames({
                [styles['pagination__button-active']]: currentPage == page,
              })}
            >
              {page}
            </IconButton>
          );
        })}
      </div>

      <IconButton
        aria-label={`To next page`}
        disabled={currentPage === pageCount}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        <img src={arrowRightIcon} alt="Next" width="6" height="10" />
      </IconButton>
    </div>
  );
};
