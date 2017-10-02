module.exports = function(grunt) {
  "use strict";
  require('load-grunt-tasks')(grunt);
  //TODO: Add coverage of tests
  //TODO: Add dist dir to save the reports
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: true
      }
    },
    watch: {
      js: {
        files: ['Gruntfile.js', 'app.js', 'server/**/*.js','server/**/**/*.js', 'test/**/*.js'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['public/views/**'],
        options: {
          livereload: true
        }
      }
    },
    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          args: [],
          ignore: ['public/**','test/**/*.js'],
          ext: 'js,html',
          nodeArgs: [],
          delayTime: 1
        }
      }
    },
    concurrent: {
      server: ['nodemon', 'watch', 'open:server'],
      debug: ['node-inspector', 'shell:debug', 'open:debug'],
      options: {
        logConcurrentOutput: true
      }
    },
    mochaTest: {
      test: {
        options: {
          timeout: '15000',
          reporter: 'spec',
          captureFile: 'TestResults.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
          noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
        },
        src: ['test/**/*.js']
      }
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['lib/**/*.js', 'test/**/*.js']
    },
    'node-inspector': {
      dev: {}
    },
    shell: {
      options: {
        stdout: true,
        stderr: true
      },
      debug: {
        options: {
          stdout: true
        },
        command: 'env NODE_PATH=. node --debug-brk app.js'
      },
      seed: {
        command: 'node ./bin/seed/seed.js'
      }
    },
    open: {
      debug: {
        path: 'http://127.0.0.1:8080/debug?port=5858',
        app: 'Google Chrome'
      },
      server: {
        path: 'http://localhost:8000/docs',
        app: 'Google Chrome'
      }
    },
  });
  // Load Tasks
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-node-inspector');
  grunt.loadNpmTasks('grunt-open');
  // Tasks
  grunt.registerTask('test', ['jshint','eslint','mochaTest']);
  grunt.registerTask('seeds',['shell:seed']);
  grunt.registerTask('server',['concurrent:server']);
  grunt.registerTask('debug', ['concurrent:debug']);
  grunt.registerTask('default');

};