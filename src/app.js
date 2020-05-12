import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from '@components/pages/home';

import '@assets/styles/styles.scss';

render(
    <BrowserRouter>
        <div className="app__content">
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.querySelector('.app')
);
