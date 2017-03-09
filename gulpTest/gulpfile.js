var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var watch=require('gulp-watch');
var paths={
	scripts:['js/index.js','js/main.js']
};
gulp.task('default', function() {
	return watch('js/*.js',function(){
		gulp.src('js/*.js')//
		.pipe(uglify())
		.pipe(concat('all.min.js'))
		.pipe(gulp.dest('build'));
	})
	
});
// gulp.watch('js/*.js',function(event){
// 	console.log('file'+event.path+' was '+event.type+' ,running tasking...');
// })