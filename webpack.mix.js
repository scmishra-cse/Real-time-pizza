// webpack.mix.js

let mix = require('laravel-mix');

mix.js('res/js/app.js', 'public/js').sass('res/scss/app.scss', '/css');
mix.setPublicPath('public');