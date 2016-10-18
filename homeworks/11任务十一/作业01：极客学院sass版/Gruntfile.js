module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
          //sass转css模块 
         sass: {
             dist: {
                 files: { 
                    "css/style.css":"sass/newstyle.scss"
                 }, 
                options: { 
                    style: 'expanded' 
                }
             }
         },
          concat: {//css文件合并  
            css: {  
              src: ['css/*.css'],//当前grunt项目中路径下的css目录下的所有css文件  
              dest: 'build/style.css'  //生成到grunt项目路径下的build文件夹下为style.css  
            },
            js: {
              src: ['js/*.js'],//当前grunt项目中路径下的js目录下的所有js文件
              dest: 'build/style.js'//生成到grunt项目路径下的build文件夹下为style.js
            }
          },  
          uglify: {//压缩js文件
            build: {
              src: 'build/style.js',
              dest: 'build/style.min.js'
            }
          },
          cssmin: { //css文件压缩  
             css: {  
                src: 'build/style.css',
                dest: 'build/style.min.css'
              }  
           },
         //添加监控模块
         watch: { 
            scripts: {  
               files: [ 
                    "sass/test.scss" 
                ],
                 tasks: ["sass","concat","uglify","cssmin"]
             }
         }     
         });
  // 加载包含任务的插件。
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-watch");

  // 默认被执行的任务列表。
   grunt.registerTask("default", ["sass","concat","uglify","cssmin","watch"]);

};