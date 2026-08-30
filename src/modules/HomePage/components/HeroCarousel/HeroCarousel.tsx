import { useCallback, useEffect, useState } from 'react';
import styles from './HeroCarousel.module.scss';
import { HeroCardData } from './types';
import classNames from 'classnames';
import { IconButton } from '../../../shared/components/IconButton';
// eslint-disable-next-line max-len
import { ProgressivePicture } from '../../../shared/components/ProgressivePicture';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import arrowLeftIcon from '../../../../assets/icons/arrow-left.svg';
import arrowRightIcon from '../../../../assets/icons/arrow-right.svg';
import { useNavigate } from 'react-router-dom';

interface Props {
  images: HeroCardData[];
}

export const HeroCarousel: React.FC<Props> = ({ images: cards }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })],
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setCurrentImageIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__main}>
        <IconButton
          aria-label="To previous image"
          onClick={scrollPrev}
          className={styles['carousel__main-arrows']}
        >
          <img src={arrowLeftIcon} alt="Previous" width="6" height="10" />
        </IconButton>

        <div className={styles.carousel__wrapper} ref={emblaRef}>
          <ul className={styles.carousel__collection}>
            {cards.map(card => (
              <li key={`${card.id}`} className={styles.carousel__item}>
                <div className={styles.carousel__banner}>
                  <ProgressivePicture
                    srcMobile={card.srcMobile}
                    srcTablet={card.srcDesktop}
                    srcDesktop={card.srcDesktop}
                    alt={card.alt}
                    className={styles['carousel__banner-image']}
                  />
                  <button
                    className={styles['carousel__banner-action']}
                    onClick={() => navigate('/catalog/phones')}
                  >
                    ORDER NOW
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <IconButton
          aria-label="To next image"
          onClick={scrollNext}
          className={styles['carousel__main-arrows']}
        >
          <img src={arrowRightIcon} alt="Next" width="6" height="10" />
        </IconButton>
      </div>

      <div className={styles.carousel__button}>
        {cards.map((_, index) => (
          <div
            key={index}
            className={classNames(styles['carousel__button-item'], {
              [styles['carousel__button-item--active']]:
                index === currentImageIndex,
            })}
            onClick={() => {
              scrollTo(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
