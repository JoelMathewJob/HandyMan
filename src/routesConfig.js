import  { lazy } from 'react';


const QR = lazy(() => import('./tools/qrgenerator'));
const Wordcloud = lazy(() => import('./tools/wordcloudgenerator'));
const ImagetoText = lazy(() => import('./tools/imagetotext'));
const Colourgradient = lazy(() => import('./tools/Csscolourgradient/csscolourgradient'));

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
        name: 'Word Cloud Generator',
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
    {
        icon: '🎨',
        name: ' CSS Colour Gradient',
        path: '/colourgradient',
        component: Colourgradient,
        desc: 'Creates Colour gradients for your choice of colours in CSS.'
    },
    {
        icon: '🎨',
        name: 'Tailwind Colour Gradient',
        path: '/colourgradient',
        component: Colourgradient,
        desc: 'Creates Colour gradients for your choice of colours in TailwindCSS.'
    },
    {
        icon: '🎨',
        name: 'Colour Gradient',
        path: '/colourgradient',
        component: Colourgradient,
        desc: 'Creates Colour gradients for your choice of colours.'
    },
    {
        icon: '🎨',
        name: 'Colour Gradient',
        path: '/colourgradient',
        component: Colourgradient,
        desc: 'Creates Colour gradients for your choice of colours.'
    },
    {
        icon: '🎨',
        name: 'Colour Gradient',
        path: '/colourgradient',
        component: Colourgradient,
        desc: 'Creates Colour gradients for your choice of colours.'
    },
    {
        icon: '🎨',
        name: 'Colour Gradient',
        path: '/colourgradient',
        component: Colourgradient,
        desc: 'Creates Colour gradients for your choice of colours.'
    },
    {
        icon: '🎨',
        name: 'Colour Gradient',
        path: '/colourgradient',
        component: Colourgradient,
        desc: 'Creates Colour gradients for your choice of colours.'
    },
    {
        icon: '🎨',
        name: 'Colour Gradient',
        path: '/colourgradient',
        component: Colourgradient,
        desc: 'Creates Colour gradients for your choice of colours.'
    },
    {
        icon: '🎨',
        name: 'Colour Gradient',
        path: '/colourgradient',
        component: Colourgradient,
        desc: 'Creates Colour gradients for your choice of colours.'
    },
    // Add more routes here
];

export default routes;
