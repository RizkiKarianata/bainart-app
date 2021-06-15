"use strict";
// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: 'md',
  routes: routes
});

// main index
var mainView=app.views.create('.view-main',{
	url:'./index.html'
});


