module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73a6c03c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AudioMotion.vue?vue&type=template&id=7cc9d5ce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"audioMotion"})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/AudioMotion.vue?vue&type=template&id=7cc9d5ce&

// CONCATENATED MODULE: ./node_modules/audiomotion-analyzer/dist/audioMotion-analyzer.js
/*!
 * audioMotion-analyzer
 * High-resolution real-time graphic audio spectrum analyzer JS module
 *
 * @version 2.1.0
 * @author  Henrique Avila Vianna <hvianna@gmail.com> <https://henriquevianna.com>
 * @license AGPL-3.0-or-later
 */

const _VERSION = '2.1.0';

class AudioMotionAnalyzer {

/**
 * CONSTRUCTOR
 *
 * @param {object} [container] DOM element where to insert the analyzer; if undefined, uses the document body
 * @param {object} [options]
 * @returns {object} AudioMotionAnalyzer object
 */
	constructor( container, options = {} ) {

		this._initDone = false;

		// Settings defaults

		const defaults = {
			mode        : 0,
			fftSize     : 8192,
			minFreq     : 20,
			maxFreq     : 22000,
			smoothing   : 0.5,
			gradient    : 'classic',
			minDecibels : -85,
			maxDecibels : -25,
			showBgColor : true,
			showLeds    : false,
			showScale   : true,
			showPeaks   : true,
			showFPS     : false,
			lumiBars    : false,
			loRes       : false,
			reflexRatio : 0,
			reflexAlpha : 0.15,
			reflexFit   : true,
			lineWidth   : 0,
			fillAlpha   : 1,
			barSpace    : 0.1,
			start       : true
		};

		// Gradient definitions

		this._gradients = {
			classic: {
				bgColor: '#111',
				colorStops: [
					'hsl( 0, 100%, 50% )',
					{ pos: .6, color: 'hsl( 60, 100%, 50% )' },
					'hsl( 120, 100%, 50% )'
				]
			},
			prism:   {
				bgColor: '#111',
				colorStops: [
					'hsl( 0, 100%, 50% )',
					'hsl( 60, 100%, 50% )',
					'hsl( 120, 100%, 50% )',
					'hsl( 180, 100%, 50% )',
					'hsl( 240, 100%, 50% )',
				]
			},
			rainbow: {
				bgColor: '#111',
				dir: 'h',
				colorStops: [
					'hsl( 0, 100%, 50% )',
					'hsl( 60, 100%, 50% )',
					'hsl( 120, 100%, 50% )',
					'hsl( 180, 100%, 47% )',
					'hsl( 240, 100%, 58% )',
					'hsl( 300, 100%, 50% )',
					'hsl( 360, 100%, 50% )'
				]
			},
		};

		// Set container
		this._container = container || document.body;

		// Make sure we have minimal width and height dimensions in case of an inline container
		this._defaultWidth  = this._container.clientWidth  || 640;
		this._defaultHeight = this._container.clientHeight || 270;

		// Use audio context provided by user, or create a new one

		const AudioContext = window.AudioContext || window.webkitAudioContext;

		if ( options.hasOwnProperty( 'audioCtx' ) ) {
			if ( options.audioCtx instanceof AudioContext )
				this._audioCtx = options.audioCtx;
			else
				throw new AudioMotionError( 'ERR_INVALID_AUDIO_CONTEXT', 'Provided audio context is not valid' );
		}
		else {
			try {
				this._audioCtx = new AudioContext();
			}
			catch( err ) {
				throw new AudioMotionError( 'ERR_AUDIO_CONTEXT_FAIL', 'Could not create audio context. Web Audio API not supported?' );
			}
		}

		// Create analyzer node, connect audio source (if provided) and connect it to the destination

		this._analyzer = this._audioCtx.createAnalyser();
		this._audioSource = ( options.source ) ? this.connectAudio( options.source ) : undefined;
		this._analyzer.connect( this._audioCtx.destination );

		// Create canvases

		// main spectrum analyzer canvas
		this._canvas = document.createElement('canvas');
		this._canvas.style = 'max-width: 100%;';
		this._container.appendChild( this._canvas );
		this._canvasCtx = this._canvas.getContext( '2d', { alpha: false } );

		// auxiliary canvas for the LED mask
		this._ledsMask = document.createElement('canvas');
		this._ledsCtx = this._ledsMask.getContext('2d');

		// auxiliary canvas for the X-axis scale labels
		this._labels = document.createElement('canvas');
		this._labelsCtx = this._labels.getContext('2d');

		// adjust canvas on window resize
		window.addEventListener( 'resize', () => {
			if ( ! this._width || ! this._height ) // fluid width or height
				this._setCanvas('resize');
		});

		// adjust canvas size on fullscreen change
		this._canvas.addEventListener( 'fullscreenchange', () => this._setCanvas('fschange') );

		// Set configuration options, using defaults for any missing properties

		this._setProperties( options, defaults );

		// Finish canvas setup

		this._initDone = true;
		this._setCanvas('create');
	}

	/**
	 * ==========================================================================
	 *
	 * PUBLIC PROPERTIES GETTERS AND SETTERS
	 *
	 * ==========================================================================
	 */

	// Bar spacing (for octave bands modes)

	get barSpace() {
		return this._barSpace;
	}
	set barSpace( value ) {
		this._barSpace = Number( value );
		this._calculateBarSpacePx();
		this._createLedMask();
	}

	// FFT size

	get fftSize() {
		return this._analyzer.fftSize;
	}
	set fftSize( value ) {
		this._analyzer.fftSize = value;
		this._dataArray = new Uint8Array( this._analyzer.frequencyBinCount );
		this._precalculateBarPositions();
	}

	// Gradient

	get gradient() {
		return this._gradient;
	}
	set gradient( value ) {
		if ( this._gradients.hasOwnProperty( value ) )
			this._gradient = value;
		else
			throw new AudioMotionError( 'ERR_UNKNOWN_GRADIENT', `Unknown gradient: '${value}'` );
	}

	// Canvas size

	get height() {
		return this._height;
	}
	set height( h ) {
		this._height = h;
		this._setCanvas('user');
	}
	get width() {
		return this._width;
	}
	set width( w ) {
		this._width = w;
		this._setCanvas('user');
	}

	// Visualization mode

	get mode() {
		return this._mode;
	}
	set mode( value ) {
		const mode = Number( value );
		if ( mode >= 0 && mode <= 10 && mode != 9 ) {
			this._mode = mode;
			this._precalculateBarPositions();
			if ( this._reflexRatio > 0 )
				this._generateGradients();
		}
		else
			throw new AudioMotionError( 'ERR_INVALID_MODE', `Invalid mode: ${mode}` );
	}

	// Low-resolution mode

	get loRes() {
		return this._loRes;
	}
	set loRes( value ) {
		this._loRes = Boolean( value );
		this._setCanvas('lores');
	}

	get lumiBars() {
		return this._lumiBars;
	}
	set lumiBars( value ) {
		this._lumiBars = Boolean( value );
		if ( this._reflexRatio > 0 ) {
			this._generateGradients();
			this._createLedMask();
		}
	}

	// Reflex

	get reflexRatio() {
		return this._reflexRatio;
	}
	set reflexRatio( value ) {
		value = Number( value );
		if ( value < 0 || value >= 1 )
			throw new AudioMotionError( 'ERR_REFLEX_OUT_OF_RANGE', `Reflex ratio must be >= 0 and < 1` );
		else {
			this._reflexRatio = value;
			this._generateGradients();
			this._createLedMask();
		}
	}

	// Current frequency range

	get minFreq() {
		return this._minFreq;
	}
	set minFreq( value ) {
		if ( value < 1 )
			throw new AudioMotionError( 'ERR_FREQUENCY_TOO_LOW', `Frequency values must be >= 1` );
		else {
			this._minFreq = value;
			this._precalculateBarPositions();
		}
	}
	get maxFreq() {
		return this._maxFreq;
	}
	set maxFreq( value ) {
		if ( value < 1 )
			throw new AudioMotionError( 'ERR_FREQUENCY_TOO_LOW', `Frequency values must be >= 1` );
		else {
			this._maxFreq = value;
			this._precalculateBarPositions();
		}
	}

	// Analyzer's sensitivity

	get minDecibels() {
		return this._analyzer.minDecibels;
	}
	set minDecibels( value ) {
		this._analyzer.minDecibels = value;
	}
	get maxDecibels() {
		return this._analyzer.maxDecibels;
	}
	set maxDecibels( value ) {
		this._analyzer.maxDecibels = value;
	}

	// Analyzer's smoothing time constant

	get smoothing() {
		return this._analyzer.smoothingTimeConstant;
	}
	set smoothing( value ) {
		this._analyzer.smoothingTimeConstant = value;
	}

	// Read only properties

	get analyzer() {
		return this._analyzer;
	}
	get audioCtx() {
		return this._audioCtx;
	}
	get audioSource() {
		return this._audioSource;
	}
	get canvas() {
		return this._canvas;
	}
	get canvasCtx() {
		return this._canvasCtx;
	}
	get dataArray() {
		return this._dataArray;
	}
	get fsWidth() {
		return this._fsWidth;
	}
	get fsHeight() {
		return this._fsHeight;
	}
	get fps() {
		return this._fps;
	}
	get isFullscreen() {
		if ( document.fullscreenElement )
			return document.fullscreenElement === this._canvas;
		else if ( document.webkitFullscreenElement )
			return document.webkitFullscreenElement === this._canvas;
		else
			return false;
	}
	get isOn() {
		return this._animationReq !== undefined;
	}
	get pixelRatio() {
		return this._pixelRatio;
	}
	get version() {
		return _VERSION;
	}

	/**
	 * ==========================================================================
     *
	 * PUBLIC METHODS
	 *
	 * ==========================================================================
	 */

	/**
	 * Connect HTML audio element to analyzer
	 *
	 * @param {object} element HTML audio element
	 * @returns {object} a MediaElementAudioSourceNode object
	 */
	connectAudio( element ) {
		const audioSource = this._audioCtx.createMediaElementSource( element );
		audioSource.connect( this._analyzer );
		return audioSource;
	}

	/**
	 * Registers a custom gradient
	 *
	 * @param {string} name
	 * @param {object} options
	 */
	registerGradient( name, options ) {
		if ( typeof name !== 'string' || name.trim().length == 0 )
			throw new AudioMotionError( 'ERR_GRADIENT_INVALID_NAME', 'Gradient name must be a non-empty string' );

		if ( typeof options !== 'object' )
			throw new AudioMotionError( 'ERR_GRADIENT_NOT_AN_OBJECT', 'Gradient options must be an object' );

		if ( options.colorStops === undefined || options.colorStops.length < 2 )
			throw new AudioMotionError( 'ERR_GRADIENT_MISSING_COLOR', 'Gradient must define at least two colors' );

		this._gradients[ name ] = {};

		if ( options.bgColor !== undefined )
			this._gradients[ name ].bgColor = options.bgColor;
		else
			this._gradients[ name ].bgColor = '#111';

		if ( options.dir !== undefined )
			this._gradients[ name ].dir = options.dir;

		this._gradients[ name ].colorStops = options.colorStops;

		this._generateGradients();
	}

	/**
	 * Set dimensions of analyzer's canvas
	 *
	 * @param {number} w width in pixels
	 * @param {number} h height in pixels
	 */
	setCanvasSize( w, h ) {
		this._width = w;
		this._height = h;
		this._setCanvas('user');
	}

	/**
	 * Set desired frequency range
	 *
	 * @param {number} min lowest frequency represented in the x-axis
	 * @param {number} max highest frequency represented in the x-axis
	 */
	setFreqRange( min, max ) {
		if ( min < 1 || max < 1 )
			throw new AudioMotionError( 'ERR_FREQUENCY_TOO_LOW', `Frequency values must be >= 1` );
		else {
			this._minFreq = Math.min( min, max );
			this._maxFreq = Math.max( min, max );
			this._precalculateBarPositions();
		}
	}

	/**
	 * Shorthand function for setting several options at once
	 *
	 * @param {object} options
	 */
	setOptions( options ) {
		this._setProperties( options );
	}

	/**
	 * Adjust the analyzer's sensitivity
	 *
	 * @param {number} min minimum decibels value
	 * @param {number} max maximum decibels value
	 */
	setSensitivity( min, max ) {
		this._analyzer.minDecibels = Math.min( min, max );
		this._analyzer.maxDecibels = Math.max( min, max );
	}

	/**
	 * Start / stop canvas animation
	 *
	 * @param {boolean} [value] if undefined, inverts the current status
	 * @returns {boolean} resulting status after the change
	 */
	toggleAnalyzer( value ) {
		const started = this.isOn;

		if ( value === undefined )
			value = ! started;

		if ( started && ! value ) {
			cancelAnimationFrame( this._animationReq );
			this._animationReq = undefined;
		}
		else if ( ! started && value ) {
			this._frame = this._fps = 0;
			this._time = performance.now();
			this._animationReq = requestAnimationFrame( timestamp => this._draw( timestamp ) );
		}

		return this.isOn;
	}

	/**
	 * Toggles canvas full-screen mode
	 */
	toggleFullscreen() {
		if ( this.isFullscreen ) {
			if ( document.exitFullscreen )
				document.exitFullscreen();
			else if ( document.webkitExitFullscreen )
				document.webkitExitFullscreen();
		}
		else {
			if ( this._canvas.requestFullscreen )
				this._canvas.requestFullscreen();
			else if ( this._canvas.webkitRequestFullscreen )
				this._canvas.webkitRequestFullscreen();
		}
	}

	/**
	 * ==========================================================================
	 *
	 * PRIVATE METHODS
	 *
	 * ==========================================================================
	 */

	/**
	 * Calculate bar spacing in pixels
	 */
	_calculateBarSpacePx() {
		this._barSpacePx = Math.min( this._barWidth - 1, ( this._barSpace > 0 && this._barSpace < 1 ) ? this._barWidth * this._barSpace : this._barSpace );
	}

	/**
	 * Create mask for vintage LED effect on auxiliary canvas
	 */
	_createLedMask() {
		// no need for this if in discrete frequencies or area fill modes
		if ( this._mode % 10 == 0 || ! this._initDone )
			return;

		const analyzerHeight = this._lumiBars ? this._canvas.height : this._canvas.height * ( 1 - this._reflexRatio ) | 0;

		// calculates the best attributes for the LEDs effect, based on the visualization mode and canvas resolution

		let spaceV = Math.min( 6, analyzerHeight / ( 90 * this._pixelRatio ) | 0 ); // for modes 3, 4, 5 and 6
		let nLeds;

		switch ( this._mode ) {
			case 8:
				spaceV = Math.min( 16, analyzerHeight / ( 33 * this._pixelRatio ) | 0 );
				nLeds = 24;
				break;
			case 7:
				spaceV = Math.min( 8, analyzerHeight / ( 67 * this._pixelRatio ) | 0 );
				nLeds = 48;
				break;
			case 6:
				nLeds = 64;
				break;
			case 5:
				// fall through
			case 4:
				nLeds = 80;
				break;
			case 3:
				nLeds = 96;
				break;
			case 2:
				spaceV = Math.min( 4, analyzerHeight / ( 135 * this._pixelRatio ) | 0 );
				nLeds = 128;
				break;
			case 1:
				spaceV = Math.min( 3, Math.max( 2, analyzerHeight / ( 180 * this._pixelRatio ) | 0 ) );
				nLeds = 128;
		}

		spaceV *= this._pixelRatio;
		nLeds = Math.min( nLeds, ( analyzerHeight + spaceV ) / ( spaceV * 2 ) | 0 );

		this._ledOptions = {
			nLeds,
			spaceH: this._barWidth * ( this._mode == 1 ? .45 : this._mode < 5 ? .225 : .125 ),
			spaceV,
			ledHeight: ( analyzerHeight + spaceV ) / nLeds - spaceV
		};

		// use either the LEDs default horizontal space or the user selected bar space, whichever is larger
		const spacing = Math.max( this._ledOptions.spaceH, this._barSpacePx );

		// clear the auxiliary canvas
		this._ledsMask.width |= 0;

		// add a vertical black line to the left of each bar to create the LED columns
		this._analyzerBars.forEach( bar => this._ledsCtx.fillRect( bar.posX - spacing / 2, 0, spacing, analyzerHeight ) );

		// add a vertical black line in the mask canvas after the last led column
		this._ledsCtx.fillRect( this._analyzerBars[ this._analyzerBars.length - 1 ].posX + this._barWidth - spacing / 2, 0, spacing, analyzerHeight );

		// add horizontal black lines to create the LED rows
		for ( let i = this._ledOptions.ledHeight; i < analyzerHeight; i += this._ledOptions.ledHeight + this._ledOptions.spaceV )
			this._ledsCtx.fillRect( 0, i, this._canvas.width, this._ledOptions.spaceV );
	}

	/**
	 * Redraw the canvas
	 * this is called 60 times per second by requestAnimationFrame()
	 */
	_draw( timestamp ) {

		const isOctaveBands  = ( this._mode % 10 != 0 ), // mode > 0 && mode < 10
			  isLedDisplay   = ( this.showLeds  && isOctaveBands ),
			  isLumiBars     = ( this._lumiBars && isOctaveBands ),
			  analyzerHeight = this._canvas.height * ( 1 - this._reflexRatio ) | 0;

		if ( ! this.showBgColor )	// use black background
			this._canvasCtx.fillStyle = '#000';
		else
			if ( isLedDisplay )
				this._canvasCtx.fillStyle = '#111';
			else
				this._canvasCtx.fillStyle = this._gradients[ this._gradient ].bgColor; // use background color defined by gradient

		// clear the canvas
		this._canvasCtx.fillRect( 0, 0, this._canvas.width, this._canvas.height );

		// get a new array of data from the FFT
		this._analyzer.getByteFrequencyData( this._dataArray );

		// set selected gradient
		this._canvasCtx.fillStyle = this._gradients[ this._gradient ].gradient;

		// if in "area fill" mode, start the drawing path
		if ( this._mode == 10 ) {
			this._canvasCtx.beginPath();
			this._canvasCtx.moveTo( -this.lineWidth, analyzerHeight );
		}

		// compute the effective bar width, considering the selected bar spacing
		// if led effect is active, ensure at least the spacing defined by the led options
		let width = this._barWidth - ( ! isOctaveBands ? 0 : Math.max( isLedDisplay ? this._ledOptions.spaceH : 0, this._barSpacePx ) );

		// if no bar spacing is required, make sure width is integer for pixel accurate calculation
		if ( this._barSpace == 0 && ! isLedDisplay )
			width |= 0;

		// draw bars / lines

		let bar, barHeight;
		const nBars = this._analyzerBars.length;

		for ( let i = 0; i < nBars; i++ ) {

			bar = this._analyzerBars[ i ];

			if ( bar.endIdx == 0 ) { // single FFT bin
				barHeight = this._dataArray[ bar.dataIdx ];
				// apply smoothing factor when several bars share the same bin
				if ( bar.factor )
					barHeight += ( this._dataArray[ bar.dataIdx + 1 ] - barHeight ) * bar.factor;
			}
			else { 					// range of bins
				barHeight = 0;
				// use the highest value in the range
				for ( let j = bar.dataIdx; j <= bar.endIdx; j++ )
					barHeight = Math.max( barHeight, this._dataArray[ j ] );
			}

			// set opacity for lumi bars before barHeight value is normalized
			if ( isLumiBars )
				this._canvasCtx.globalAlpha = barHeight / 255;

			if ( isLedDisplay ) // normalize barHeight to match one of the "led" elements
				barHeight = ( barHeight / 255 * this._ledOptions.nLeds | 0 ) * ( this._ledOptions.ledHeight + this._ledOptions.spaceV ) - this._ledOptions.spaceV;
			else
				barHeight = barHeight / 255 * analyzerHeight | 0;

			if ( barHeight >= bar.peak ) {
				bar.peak = barHeight;
				bar.hold = 30; // set peak hold time to 30 frames (0.5s)
				bar.accel = 0;
			}

			let posX = bar.posX;
			let adjWidth = width; // bar width may need small adjustments for some bars, when barSpace == 0

			// Draw line / bar
			if ( this._mode == 10 ) {
				this._canvasCtx.lineTo( bar.posX, analyzerHeight - barHeight );
			}
			else {
				if ( this._mode > 0 ) {
					if ( isLedDisplay )
						posX += Math.max( this._ledOptions.spaceH / 2, this._barSpacePx / 2 );
					else {
						if ( this._barSpace == 0 ) {
							posX |= 0;
							if ( i > 0 && posX > this._analyzerBars[ i - 1 ].posX + width ) {
								posX--;
								adjWidth++;
							}
						}
						else
							posX += this._barSpacePx / 2;
					}
				}

				if ( isLumiBars ) {
					this._canvasCtx.fillRect( posX, 0, adjWidth, this._canvas.height );
					this._canvasCtx.globalAlpha = 1;
				}
				else
					this._canvasCtx.fillRect( posX, analyzerHeight, adjWidth, -barHeight );
			}

			// Draw peak
			if ( bar.peak > 0 ) {
				if ( this.showPeaks && ! isLumiBars ) {
					if ( isLedDisplay ) {
						this._canvasCtx.fillRect(
							posX,
							( this._ledOptions.nLeds - bar.peak / ( analyzerHeight + this._ledOptions.spaceV ) * this._ledOptions.nLeds | 0 ) * ( this._ledOptions.ledHeight + this._ledOptions.spaceV ),
							width,
							this._ledOptions.ledHeight
						);
					}
					else
						this._canvasCtx.fillRect( posX, analyzerHeight - bar.peak, adjWidth, 2 );
				}

				if ( bar.hold )
					bar.hold--;
				else {
					bar.accel++;
					bar.peak -= bar.accel;
				}
			}
		} // for ( let i = 0; i < l; i++ )

		if ( this._mode == 10 ) { // fill area
			this._canvasCtx.lineTo( bar.posX + this.lineWidth, analyzerHeight );

			if ( this.lineWidth > 0 ) {
				this._canvasCtx.lineWidth = this.lineWidth;
				this._canvasCtx.strokeStyle = this._canvasCtx.fillStyle;
				this._canvasCtx.stroke();
			}

			if ( this.fillAlpha > 0 ) {
				this._canvasCtx.globalAlpha = this.fillAlpha;
				this._canvasCtx.fill();
				this._canvasCtx.globalAlpha = 1;
			}
		}
		else if ( isLedDisplay ) // applies LEDs mask over the canvas
			this._canvasCtx.drawImage( this._ledsMask, 0, 0 );

		// Reflex effect
		if ( this._reflexRatio > 0 && ! isLumiBars ) {
			let posY, height;
			if ( this.reflexFit ) {
				posY   = 0;
				height = this._canvas.height - analyzerHeight;
			}
			else {
				posY   = this._canvas.height - analyzerHeight * 2;
				height = analyzerHeight;
			}

			this._canvasCtx.fillStyle = '#000';
			this._canvasCtx.fillRect( 0, analyzerHeight, this._canvas.width, this._canvas.height - analyzerHeight );
			this._canvasCtx.globalAlpha = this.reflexAlpha;
			this._canvasCtx.setTransform( 1, 0, 0, -1, 0, this._canvas.height );
			this._canvasCtx.drawImage( this._canvas, 0, 0, this._canvas.width, analyzerHeight, 0, posY, this._canvas.width, height );
			this._canvasCtx.globalAlpha = 1;
			this._canvasCtx.setTransform();
		}

		if ( this.showScale )
			this._canvasCtx.drawImage( this._labels, 0, this._canvas.height - this._labels.height );

		this._frame++;

		const elapsed = timestamp - this._time;

		if ( elapsed >= 1000 ) {
			this._fps = this._frame / ( elapsed / 1000 );
			this._frame = 0;
			this._time = timestamp;
		}
		if ( this.showFPS ) {
			const size = 20 * this._pixelRatio;
			this._canvasCtx.font = `bold ${size}px sans-serif`;
			this._canvasCtx.fillStyle = '#0f0';
			this._canvasCtx.textAlign = 'right';
			this._canvasCtx.fillText( Math.round( this._fps ), this._canvas.width - size, size * 2 );
		}

		if ( this.onCanvasDraw ) {
			this._canvasCtx.save();
			this.onCanvasDraw( this );
			this._canvasCtx.restore();
		}

		// schedule next canvas update
		this._animationReq = requestAnimationFrame( timestamp => this._draw( timestamp ) );
	}

	/**
	 * Find the FFT bin which represents a given frequency
	 *
	 * @param {number} freq   Frequency in hertz
	 * @param {string} [func] Rounding function: 'floor', 'round' (default) or 'ceil'
	 * @returns {number}      FFT data array index which closely represents the given frequency
	 */
	_findFrequencyBin( freq, func ) {
		const bin = freq * this._analyzer.fftSize / this._audioCtx.sampleRate;

		if ( ! ['floor','ceil'].includes( func ) )
			func = 'round';

		return Math[ func ]( bin );
	}

	/**
	 * Find the frequency represented by a given FFT bin
	 *
	 * @param {number} bin FFT data array index
	 * @returns {number}   Frequency in hertz represented by the given FFT bin
	 */
	_findBinFrequency( bin ) {
		return bin * this._audioCtx.sampleRate / this._analyzer.fftSize;
	}

	/**
	 * Generate gradients
	 */
	_generateGradients() {
		let grad;

		const analyzerHeight = ( this._lumiBars && this._mode % 10 ) ? this._canvas.height : this._canvas.height * ( 1 - this._reflexRatio ) | 0;

		Object.keys( this._gradients ).forEach( key => {
			if ( this._gradients[ key ].dir && this._gradients[ key ].dir == 'h' )
				grad = this._canvasCtx.createLinearGradient( 0, 0, this._canvas.width, 0 );
			else
				grad = this._canvasCtx.createLinearGradient( 0, 0, 0, analyzerHeight );

			if ( this._gradients[ key ].colorStops ) {
				this._gradients[ key ].colorStops.forEach( ( colorInfo, index ) => {
					if ( typeof colorInfo == 'object' )
						grad.addColorStop( colorInfo.pos, colorInfo.color );
					else
						grad.addColorStop( index / ( this._gradients[ key ].colorStops.length - 1 ), colorInfo );
				});
			}

			this._gradients[ key ].gradient = grad; // save the generated gradient back into the gradients array
		});
	}

	/**
	 * Precalculate the actual X-coordinate on screen for each analyzer bar
	 *
	 * Since the frequency scale is logarithmic, each position in the X-axis actually represents a power of 10.
	 * To improve performace, the position of each frequency is calculated in advance and stored in an array.
	 * Canvas space usage is optimized to accommodate exactly the frequency range the user needs.
	 * Positions need to be recalculated whenever the frequency range, FFT size or canvas size change.
	 *
	 *                              +-------------------------- canvas --------------------------+
	 *                              |                                                            |
	 *    |-------------------|-----|-------------|-------------------!-------------------|------|------------|
	 *    1                  10     |            100                  1K                 10K     |           100K (Hz)
	 * (10^0)              (10^1)   |          (10^2)               (10^3)              (10^4)   |          (10^5)
	 *                              |-------------|<--- bandWidth --->|--------------------------|
	 *                  minFreq--> 20                   (pixels)                                22K <--maxFreq
	 *                          (10^1.3)                                                     (10^4.34)
	 *                           minLog
	 */
	_precalculateBarPositions() {

		if ( ! this._initDone )
			return;

		let minLog, bandWidth;

		this._analyzerBars = [];

		if ( this._mode % 10 == 0 ) {
		// Discrete frequencies or area fill modes
			this._barWidth = 1;

			minLog = Math.log10( this._minFreq );
			bandWidth = this._canvas.width / ( Math.log10( this._maxFreq ) - minLog );

			const minIndex = this._findFrequencyBin( this._minFreq, 'floor' );
			const maxIndex = Math.min( this._findFrequencyBin( this._maxFreq ), this._analyzer.frequencyBinCount - 1 );

	 		let lastPos = -999;

			for ( let i = minIndex; i <= maxIndex; i++ ) {
				let freq = this._findBinFrequency( i ); // frequency represented in this bin
				let pos = Math.round( bandWidth * ( Math.log10( freq ) - minLog ) ); // avoid fractionary pixel values

				// if it's on a different X-coordinate, create a new bar for this frequency
				if ( pos > lastPos ) {
					this._analyzerBars.push( { posX: pos, dataIdx: i, endIdx: 0, factor: 0, peak: 0, hold: 0, accel: 0 } );
					lastPos = pos;
				} // otherwise, add this frequency to the last bar's range
				else if ( this._analyzerBars.length )
					this._analyzerBars[ this._analyzerBars.length - 1 ].endIdx = i;
			}
		}
		else {
		// Octave bands modes

			// how many notes grouped in each band?
			let groupNotes;

			if ( this._mode == 8 )
				groupNotes = 24;
			else if ( this._mode == 7 )
				groupNotes = 12;
			else if ( this._mode == 6 )
				groupNotes = 8;
			else if ( this._mode == 5 )
				groupNotes = 6;
			else
				groupNotes = this._mode; // for modes 1, 2, 3 and 4

			// generate a table of frequencies based on the equal tempered scale

			const root24 = 2 ** ( 1 / 24 );
			const c0 = 440 * root24 ** -114; // ~16.35 Hz

			let temperedScale = [];
			let i = 0;
			let freq;

			while ( ( freq = c0 * root24 ** i ) <= this._maxFreq ) {
				if ( freq >= this._minFreq && i % groupNotes == 0 )
					temperedScale.push( freq );
				i++;
			}

			minLog = Math.log10( temperedScale[0] );
			bandWidth = this._canvas.width / ( Math.log10( temperedScale[ temperedScale.length - 1 ] ) - minLog );

			// divide canvas space by the number of frequencies (bars) to display
			this._barWidth = this._canvas.width / temperedScale.length;
			this._calculateBarSpacePx();

			let prevBin = 0;  // last bin included in previous frequency band
			let prevIdx = -1; // previous bar FFT array index
			let nBars   = 0;  // count of bars with the same index

			temperedScale.forEach( ( freq, index ) => {
				// which FFT bin represents this frequency?
				const bin = this._findFrequencyBin( freq );

				let idx, nextBin;
				// start from the last used FFT bin
				if ( prevBin > 0 && prevBin + 1 <= bin )
					idx = prevBin + 1;
				else
					idx = bin;

				// FFT does not provide many coefficients for low frequencies, so several bars may end up using the same data
				if ( idx == prevIdx ) {
					nBars++;
				}
				else {
					// update previous bars using the same index with a smoothing factor
					if ( nBars > 1 ) {
						for ( let i = 1; i <= nBars; i++ )
							this._analyzerBars[ this._analyzerBars.length - i ].factor = ( nBars - i ) / nBars;
					}
					prevIdx = idx;
					nBars = 1;
				}

				prevBin = nextBin = bin;
				// check if there's another band after this one
				if ( temperedScale[ index + 1 ] !== undefined ) {
					nextBin = this._findFrequencyBin( temperedScale[ index + 1 ] );
					// and use half the bins in between for this band
					if ( nextBin - bin > 1 )
						prevBin += Math.round( ( nextBin - bin ) / 2 );
				}

				const endIdx = prevBin - idx > 0 ? prevBin : 0;

				this._analyzerBars.push( {
					posX: index * this._barWidth,
					dataIdx: idx,
					endIdx,
//					freq, // nominal frequency for this band
//					range: [ this._findBinFrequency( idx ), this._findBinFrequency( endIdx || idx ) ], // actual range of frequencies
					factor: 0,
					peak: 0,
					hold: 0,
					accel: 0
				} );

			} );
		}

		this._createLedMask();

		// Create the X-axis scale in the auxiliary canvas

		this._labels.width |= 0; // clear canvas
		this._labelsCtx.fillStyle = '#000c';
		this._labelsCtx.fillRect( 0, 0, this._labels.width, this._labels.height );

		this._labelsCtx.fillStyle = '#fff';
		this._labelsCtx.font = `${ this._labels.height / 2 }px sans-serif`;
		this._labelsCtx.textAlign = 'center';

		const freqLabels = [ 16, 31, 63, 125, 250, 500, 1000, 2000, 4000, 8000, 16000 ];

		for ( const freq of freqLabels ) {
			this._labelsCtx.fillText(
				( freq >= 1000 ) ? `${ freq / 1000 }k` : freq,
				bandWidth * ( Math.log10( freq ) - minLog ),
				this._labels.height * .75
			);
		}
	}

	/**
	 * Internal function to change canvas dimensions on demand
	 */
	_setCanvas( reason ) {
		if ( ! this._initDone )
			return;

		this._pixelRatio = window.devicePixelRatio; // for Retina / HiDPI devices

		if ( this._loRes )
			this._pixelRatio /= 2;

		this._fsWidth = Math.max( window.screen.width, window.screen.height ) * this._pixelRatio;
		this._fsHeight = Math.min( window.screen.height, window.screen.width ) * this._pixelRatio;

		if ( this.isFullscreen ) {
			this._canvas.width = this._fsWidth;
			this._canvas.height = this._fsHeight;
		}
		else {
			this._canvas.width = ( this._width || this._container.clientWidth || this._defaultWidth ) * this._pixelRatio;
			this._canvas.height = ( this._height || this._container.clientHeight || this._defaultHeight ) * this._pixelRatio;
		}

		// workaround for wrong dPR reported on Android TV
		if ( this._pixelRatio == 2 && window.screen.height <= 540 )
			this._pixelRatio = 1;

		// clear the canvas
		this._canvasCtx.fillStyle = '#000';
		this._canvasCtx.fillRect( 0, 0, this._canvas.width, this._canvas.height );

		// set lineJoin property for area fill mode (this is reset whenever the canvas size changes)
		this._canvasCtx.lineJoin = 'bevel';

		// (re)generate gradients
		this._generateGradients();

		// update LED mask canvas dimensions
		this._ledsMask.width = this._canvas.width;
		this._ledsMask.height = this._canvas.height;

		// update labels canvas dimensions
		this._labels.width = this._canvas.width;
		this._labels.height = this._pixelRatio * ( this.isFullscreen ? 40 : 20 );

		// calculate bar positions and led options
		this._precalculateBarPositions();

		// call callback function, if defined
		if ( this.onCanvasResize )
			this.onCanvasResize( reason, this );
	}

	/**
	 * Set object properties
	 */
	_setProperties( options, defaults ) {

		const callbacks = [ 'onCanvasDraw', 'onCanvasResize' ];

		// audioCtx is set only at initialization; we handle 'start' after setting all other properties
		const ignore = [ 'audioCtx', 'start' ];

		if ( defaults )
			options = Object.assign( defaults, options );

		for ( const prop of Object.keys( options ) ) {
			if ( callbacks.indexOf( prop ) !== -1 && typeof options[ prop ] !== 'function' ) // check invalid callback
				this[ prop ] = undefined;
			else if ( ignore.indexOf( prop ) === -1 ) // skip ignored properties
				this[ prop ] = options[ prop ];
		}

		if ( options.start !== undefined )
			this.toggleAnalyzer( options.start );
	}

}

/* Custom error class */

class AudioMotionError extends Error {
	constructor( code, message ) {
		super( message );
		this.name = 'AudioMotionError';
		this.code = code;
	}
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/AudioMotion.vue?vue&type=script&lang=js&
//
//
//

/* harmony default export */ var AudioMotionvue_type_script_lang_js_ = ({
  props: ["stream", "options"],
  mounted: function mounted() {
    this.audioMotion = this.$refs.audioMotion;
  },
  watch: {
    stream: function stream() {
      if (this.stream && this.stream.getAudioTracks().length) {
        var audioCtx = new AudioContext();
        var source = audioCtx.createMediaStreamSource(this.stream);
        var audioMotion = new AudioMotionAnalyzer(this.audioMotion, this.options);
        var sourceMic = audioMotion.audioCtx.createMediaStreamSource(this.stream);
        sourceMic.connect(audioMotion.analyzer);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/AudioMotion.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AudioMotionvue_type_script_lang_js_ = (AudioMotionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/AudioMotion.vue





/* normalize component */

var component = normalizeComponent(
  components_AudioMotionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AudioMotion = (component.exports);
// CONCATENATED MODULE: ./src/components/index.js

/* harmony default export */ var components = (AudioMotion);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ })

/******/ });
//# sourceMappingURL=vue-audiomotion.common.js.map