var gulp       = require('gulp'),
	pug          = require('gulp-pug'),
	styl         = require('gulp-stylus'),
	sourcemaps   = require('gulp-sourcemaps'),
	notify       = require('gulp-notify'),
	plumber      = require('gulp-plumber'),
	smartgrid  	 = require('smart-grid'),
	combineMq    = require('gulp-combine-mq'),
	uglyfly      = require('gulp-uglyfly'),
	autoprefixer = require('gulp-autoprefixer'),
	uglifycss    = require('gulp-uglifycss'),
	imagemin     = require('gulp-imagemin'),
	browserSync  = require('browser-sync').create(),
	reload       = browserSync.reload;
	//csscomb 		 = require('gulp-csscomb');
	// sudo npm i -D gulp-pug gulp-stylus gulp-sourcemaps gulp-notify gulp-plumber browser-sync smart-grid gulp-combine-mq gulp-uglyfly gulp-autoprefixer

var src  = 'app/',
		dist = 'public/';

var paths = {
	html: [
		src + 'pug/*.pug',
		'!' + src + 'pug/_*.pug'
	],
	css: [
		src + 'stylus/**/*.styl',
		'!' + src + 'stylus/**/_*.styl'
	],
	additionalCss: [
		src + 'stylus/**/_*.styl'
	],
	js: [src + 'js/*.js'],
	img: [src + 'img/*.*']
};

//Pug
gulp.task('pug', function() {
	return gulp.src(paths.html)
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Task : Pug',
				message: err.message
			}))
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(dist))
		.pipe(reload({stream:true}));
}); 

//Stylus
gulp.task('styl', function(){
	return gulp.src(paths.css)
		.pipe(plumber({
			errorHandler: notify.onError(err => ({
				title: 'Task : Stylus',
				message: err.message
			}))
		}))
		.pipe(sourcemaps.init())
		.pipe(styl())
		.pipe(combineMq({
			beautify: true}
		))
		.pipe(autoprefixer({
			 browsers: ['last 10 versions']
		}))
		// .pipe(uglifycss({
		// "maxLineLen": 80,
		// "uglyComments": true
		// }))
		//.pipe(csscomb())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(dist +'css/'))
		.pipe(reload({stream:true}));
});

//jsmin
gulp.task('jsmin', function() {
	return gulp.src(paths.js)
		.pipe(uglyfly())
		.pipe(gulp.dest(dist + 'js'))
});

//ImageMin
gulp.task('imagemin', function(){
	return gulp.src(paths.img)
		.pipe(imagemin())
		.pipe(gulp.dest(dist + 'img'));
});

gulp.task('serve', ['pug', 'styl', 'imagemin'], function() {

	browserSync.init({
		server: './public',
		ui: {
			port: 8080
		}
	});

	gulp.watch(paths.html, ['pug']);
	gulp.watch(paths.css, ['styl']);
	gulp.watch(paths.additionalCss, ['styl']);
	gulp.watch(paths.img, ['imagemin']);
	//gulp.watch(paths.js, ['jsmin']);
	gulp.watch([
		dist +'*.html',
		dist +'js/**/*.js',
		dist + 'css/*.css'
	]).on('change', browserSync.reload);
});