import React, { lazy } from 'react';


const QR = lazy(() => import('./tools/qrgenerator'));
const Wordcloud = lazy(() => import('./tools/wordcloudgenerator'));
const ImagetoText = lazy(() => import('./tools/imagetotext'));

const routes = [
    {
        icon: '🏁',
        name: 'QR-Code Generator',
        path: '/qrgenerator',
        component: QR,
        desc: 'Converts Texts, URL to QR-Code'
    },

    {
        icon: '⛅',
        name: 'WordCloud Generator',
        path: '/wordcloudgenerator',
        component: Wordcloud,
        desc: 'Creates Wordcloud Using Texts'
    },
    {
        icon: '📸',
        name: 'Image to Text',
        path: '/imagetotext',
        component: ImagetoText,
        desc: 'Scans Texts from the Image '
    },
    // Add more routes here
];

export default routes;
