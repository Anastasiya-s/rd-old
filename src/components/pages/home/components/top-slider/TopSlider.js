import React from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

import { PrevIcon, NextIcon } from '@components/core/icons';
import next from './img/arrowRight.svg';

import styles from './styles.scss';

const Prev = ({ onClick }) => (
    <div className={classnames(styles.arrow, styles.prev)} onClick={onClick}>
        <PrevIcon />
    </div>
);

const Next = ({ onClick }) => (
    <div className={classnames(styles.arrow, styles.next)} onClick={onClick}>
        <NextIcon />
    </div>);

class TopSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <Prev />,
            nextArrow: <Next />,
            // appendDots: dots => (
            //   <div >
            //     <ul className={styles.dots}> {dots} </ul>
            //   </div>
            // ),
        };
        return (
            <Slider {...settings} className={styles.slider}>
                <div className={classnames(styles.slide, styles.s1)}>
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <h3 className={styles.header}>
                Проведите незабываемый отдых рядом с природой
                            </h3>
                            <p className={styles.text}>
                Закрытая территория <br />
                Домашняя кухня, уютная обстановка <br />
                Удобная парковка
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classnames(styles.slide, styles.s2)}>
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <h3 className={styles.header}>
                  Проведите незабываемый отдых рядом с природой
                            </h3>
                            <p className={styles.text}>
                  Закрытая территория <br />
                  Домашняя кухня, уютная обстановка <br />
                  Удобная парковка
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classnames(styles.slide, styles.s3)}>
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <h3 className={styles.header}>
                Проведите незабываемый отдых рядом с природой
                            </h3>
                            <p className={styles.text}>
                Закрытая территория <br />
                Домашняя кухня, уютная обстановка <br />
                Удобная парковка
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classnames(styles.slide, styles.s4)}>
                    <div className={styles.wrapper}>
                        <div className={styles.content}>
                            <h3 className={styles.header}>
                Проведите незабываемый отдых рядом с природой
                            </h3>
                            <p className={styles.text}>
                Закрытая территория <br />
                Домашняя кухня, уютная обстановка <br />
                Удобная парковка
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}

export default TopSlider;
