const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const { src } = require("gulp");
const sync = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");

// Styles

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}
//HTML

const html = () =>{
  return gulp.src("source/*.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest("build"));
};

exports.html = html;

 //Scripts

  const scripts = () => {
  return gulp.src("source/js/script.js")
   .pipe(terser())
   .pipe(rename("script.min.js"))
   .pipe(gulp.dest("build/js"))
   .pipe(sync.stream());
   }
   exports.scripts = scripts;

exports.default = gulp.series(
  styles, server, watcher,html,scripts
);

