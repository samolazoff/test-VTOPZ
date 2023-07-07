const { src, dest, watch, task, parallel,series} = require('gulp');

const gulp= require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass')(require('sass'));

    task('pug', function(){
        return src('src/views/**/*.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(dest('build'));
    });

    task('sass', function(){
        return src('src/style/main.sass')
        .pipe(sass({
            pretty:true
        }))
        .pipe(dest('build/style'));
    });
    
    
    task('watch', function () {
        watch('src/**/*.pug', series('pug'));
        watch('src/**/*.sass', series('sass'));
        
    })
    
    task('default', gulp.series (
        parallel('pug'),
        parallel('sass'),
        parallel( 'watch')
    ));