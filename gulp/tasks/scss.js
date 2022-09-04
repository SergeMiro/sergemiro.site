import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // Сжатие CSS файла
import webpcss from 'gulp-webpcss';  // Вывод WEBP изображений // установить обязательно npm i -D webp-converter@2.2.3
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Групировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({ //Создание выплывающего поп-аппа на случай ошибки
				title: "SCSS",
				message: "Error: <%= error.message %>" 
			})))
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(app.plugins.replace(/@img\//g, '../img/')) //Замена ./img на alias /@img что работали пути к картинкам после компиляции
		.pipe(
			app.plugins.if(
				app.isBuild,
				groupCssMediaQueries()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({ // Добавление вендорных префиксов - добавления кусков кода чтобы сайт поддерживался старыми браузерами
					grid: true,
					overrideBrowserslist: ["last 3 versions"], // Три последних версии браузера
					cascade: true
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpcss( // конвертация картинок в .WEBP формат (без .SVG)
					{
						webpClass: ".webp",
						noWebpClass: ".no-webp"
					}
				)
			)
		)
		// Раскомментировать если нужен не сжатый дубль файла стилей
		// .pipe(app.gulp.dest(app.path.build.css))
		.pipe(
			app.plugins.if(
				app.isBuild,
				cleanCss() // Сжатие CSS файла
			)
		)
		.pipe(rename({ // Переименование CSS файла
			extname: ".min.css"
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream());
}

