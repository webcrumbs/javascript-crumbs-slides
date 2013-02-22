var markdown = require('github-flavored-markdown').parse;
var mustache = require('mustache');
var fs = require('fs');
var join = require('path').join;

var build_folder = 'builds';
var chapter_folder = 'chapters';
var filename = 'Readme.md';

var slides = [];
var folders = [
  'built-ins',
  'functions',
  'inheritance',
  'introduction',
  'objects',
  'operators',
  'prototype',
  'statements',
  'syntax',
  'types'
];

var template;

fs.readFile('template.html', 'utf-8', function (err, data) {

  template = mustache.compile(data);

  folders.forEach(function (folder, i) {
    fs.readFile(join(chapter_folder, folder, filename), 'utf-8', function (err, body) {

      slides[i] = template(
        { body: body
          .split(/\n[- ]+ *\n/)
          .map(function (data) {
            return '\n<article>\n' + markdown(data) + '\n</article>\n';
          })
          .join('\n\n<!-- slide -->\n\n')
        }
      );

     fs.writeFile(join(build_folder, folder, 'index.html'), slides[i], function (err) {
       if (err) throw err;
     });
    });
  });

});
