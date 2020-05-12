import React from 'react';

import { Title } from '@components/core/title';
import { Button } from '@components/core/button';

import { FeaturesItem } from './components/features-item';
import { ModalWindow } from '../modalbooking';

import styles from './styles.scss';

import f1 from './img/features1.jpg';
import f2 from './img/features2.jpg';
import f3 from './img/features3.jpg';
import f4 from './img/features4.jpg';

class Features extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Title className={styles.header}>Также к вашим услугам </Title>
                <FeaturesItem
                    img={f1}
                    direction="row"
                    title="Мангал"
                    text="Для вас доступны отдельная зоня барбекю и мангал. Отдельная зона вмещает в себя до 20 гостей."
                />
                <FeaturesItem
                    img={f2}
                    direction="row-reverse"
                    title="Баня"
                    text="Чистая и светлая баня с большой парной и предбанником, рассчитанная на 6-8 человек."
                />
                <FeaturesItem
                    img={f3}
                    direction="row"
                    title="Спутниковое TV"
                    text="Если вы решите расслабиться и отдохнуть перед телевизором, для вас доступно спутниковое телевиденье с более чем 50-ю каналами."
                />
                <FeaturesItem
                    img={f4}
                    direction="row-reverse"
                    title="Русская печь"
                    text="Настоящая печь согреет в холодное время года, а также позволит приготовить множество замечательных блюд так, как это делали раньше."
                />

                <ModalWindow
                    buttonText="Забронировать"
                    buttonStyles={styles.button}
                />
            </div>
        );
    }
}

export default Features;
