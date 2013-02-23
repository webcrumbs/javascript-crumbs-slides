var mustache = require('mustache');
var fs = require('fs');
var join = require('path').join;
var highlight = require('highlight.js');
var marked = require('marked').parse;
marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  langPrefix: 'language-',
  highlight: function(code, lang) {
    if (lang === 'js') {
      return highlight.highlightAuto(code).value;
    }
    return code;
  }
});


var build_folder = './';
var chapter_folder = '../chapters';
var filename = 'Readme.md';
var template_file = './template.html';
var code_style_file = './code-github-style.css';

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

fs.readFile(template_file, 'utf-8', function (err, template_data) {
  if (err) throw err;
  template = mustache.compile(template_data);

  fs.readFile(code_style_file, 'utf-8', function (err, code_style_data) {
    if (err) throw err;

    folders.forEach(function (folder, i) {
      fs.readFile(join(chapter_folder, folder, filename), 'utf-8', function (err, body) {
        if (err) throw err;

        slides[i] = template(
          {
            code_style: code_style_data,
            body: body
              .split(/\n[- ]+ *\n/)
              .map(function (data) {
                return '\n<article>\n' + marked(data) + '\n</article>\n';
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
});
