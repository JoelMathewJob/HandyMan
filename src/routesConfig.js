import  { lazy } from 'react';


const QR = lazy(() => import('./tools/qrgenerator'));
const Wordcloud = lazy(() => import('./tools/wordcloudgenerator'));
const ImagetoText = lazy(() => import('./tools/imagetotext'));
const Colourgradient = lazy(() => import('./tools/Csscolourgradient/csscolourgradient'));
const PasswordGenerator = lazy(() => import('./tools/passwordgenerator'));
const RecipeGenerator = lazy(()=> import('./tools/Recipegenerator/recipegenerator'))
const MarkdownEditor = lazy(()=> import('./tools/markdowneditor'))

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
        icon: '🔐',
        name: 'Password Generator',
        path: '/passwordgenerator',
        component: PasswordGenerator,
        desc: 'Creates best and complex Passwords for you.'
    },
    {
        icon: '🍕',
        name: 'Smart Recipe Generator',
        path: '/recipe-generator',
        component: RecipeGenerator,
        desc: 'Provides recipes with ingredients avaliable with u.'
    },
    {
        icon: '📝',
        name: 'Markdown Editor',
        path: '/markdown-editor',
        component: MarkdownEditor ,
        desc: 'Create, Edit, Modify your markdown file. '
    },
    
    
    // Add more routes here
];

export default routes;
