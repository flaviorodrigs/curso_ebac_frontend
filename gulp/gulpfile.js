let gulp = require("gulp");
let sass = require("gulp-sass")(require("sass"));
let imagemin = require("gulp-imagemin");
let sourceMaps = require("gulp-sourcemaps")
let uglify = require("gulp-uglify")


function minJs(){
    return gulp.src("./script.js")
        .pipe(uglify())
        .pipe(gulp.dest("./build/script"))
}

function image (){
    return gulp.src("./imagens/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/imagens"))
}

function compilaSass (){
    return gulp.src("./source/styles/main.scss")
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourceMaps.write("./maps"))
        .pipe(gulp.dest("./build/styles"))
}


exports.default = function() {
    gulp.watch("./source/styles/*.scss",{ ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch("./script.js",{ ignoreInitial: false }, gulp.series(minJs));
    gulp.watch("./imagens/*",{ ignoreInitial: false }, gulp.series(image));
}

