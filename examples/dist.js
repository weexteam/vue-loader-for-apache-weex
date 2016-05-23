// { framework: "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	  module.exports = {
	    el: 'scroller',
	    components: {
	      item: __webpack_require__(1)
	    }
	  }

	module.exports.render = function() {with(this){return _h(_e('div'),[_h(_e('item',{staticAttrs:{"welcome":"Hello"}}))])}}
	new Vue(module.exports)


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	  module.exports = {
	    props: ['welcome'],
	    data: function () {
	      return {
	        welcome: 'Hello Weex',
	        list: ['a', 'b', 'c', 'd', 'e']
	      }
	    }
	  }

	module.exports.style = {
	  "wrapper": {
	    "alignItems": "center",
	    "marginTop": 80
	  },
	  "demo-size": {
	    "fontSize": 64
	  }
	}
	module.exports.render = function() {with(this){return _h(_e('div',{staticClass:["wrapper"]}),[_m(0),_h(_e('text',{staticClass:["demo-size"],attrs:{"value":(_s(welcome))}})),(list)&&_l((list),function(v,$index,k){return (k % 2)?_h(_e('text',{staticClass:["demo-size"],attrs:{"value":(_s(k)+"-"+_s(v))}})):void 0})])}}
	module.exports.staticRenderFns = [function(){with(this){return _h(_e('image',{staticStyle:{width:"180",height:"41"},staticAttrs:{"src":"http://alibaba.github.io/weex/img/weex_logo_blue@3x.png"}}))}}]


/***/ }
/******/ ]);