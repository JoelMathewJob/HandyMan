import React, { lazy } from 'react';


const QR = lazy(() => import('./tools/qrgenerator'));
const Wordcloud = lazy(() => import('./tools/wordcloudgenerator'));

const routes = [
    {
        name: 'QR-Code Generator',
        path: '/qrgenerator',
        component: QR,
        desc: 'Converts Texts, URL to QR-Code'
    },

    {
        name: 'WordCloud Generator',
        path: '/wordcloudgenerator',
        component: Wordcloud,
        desc: 'Creates Wordcloud Using Texts'
    },
    // Add more routes here
];

export default routes;
