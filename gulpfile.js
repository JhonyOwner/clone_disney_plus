const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function testeGulp(cb) {
    console.log('Gulp está funcionando!');
    cb();
}

exports.default = testeGulp;