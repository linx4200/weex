(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.5 Build 20160831');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	__webpack_require__(1);
	
	var _runtime = __webpack_require__(75);
	
	var _runtime2 = _interopRequireDefault(_runtime);
	
	var _package = __webpack_require__(112);
	
	var _methods = __webpack_require__(113);
	
	var methods = _interopRequireWildcard(_methods);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var native = _package.subversion.native;
	var transformer = _package.subversion.transformer;
	
	// register instance management APIs
	
	var _loop = function _loop(methodName) {
	  global[methodName] = function () {
	    var ret = _runtime2.default[methodName].apply(_runtime2.default, arguments);
	    if (ret instanceof Error) {
	      console.error(ret.toString());
	    }
	    return ret;
	  };
	};
	
	for (var methodName in _runtime2.default) {
	  _loop(methodName);
	}
	
	// register framework meta info
	global.frameworkVersion = native;
	global.transformerVersion = transformer;
	
	// register special methods for Weex framework
	global.registerMethods(methods);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isPlainObject = exports.isObject = exports.toArray = exports.bind = exports.hasOwn = exports.remove = exports.def = exports.extend = undefined;
	
	var _utils = __webpack_require__(2);
	
	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _utils.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _utils.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _utils.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _utils.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _utils.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _utils.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isPlainObject;
	  }
	});
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	__webpack_require__(68);
	
	__webpack_require__(69);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.extend = extend;
	exports.def = def;
	exports.remove = remove;
	exports.hasOwn = hasOwn;
	exports.bind = bind;
	exports.toArray = toArray;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(target) {
	  for (var _len = arguments.length, src = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    src[_key - 1] = arguments[_key];
	  }
	
	  if (typeof Object.assign === 'function') {
	    Object.assign.apply(Object, [target].concat(src));
	  } else {
	    var first = src.shift();
	    for (var key in first) {
	      target[key] = first[key];
	    }
	    if (src.length) {
	      extend.apply(undefined, [target].concat(src));
	    }
	  }
	  return target;
	}
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Remove an item from an array
	 *
	 * @param {Array} arr
	 * @param {*} item
	 */
	
	function remove(arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1);
	    }
	  }
	}
	
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/**
	 * @fileOverview
	 * Polyfill `setTimeout` on Android V8 using native method
	 * `setTimeoutNative(callbackId, time)` and JS method
	 * `setTimeoutCallback(callbackId)`.
	 * This polyfill is only used in virtual-DOM diff & flush agorithm. Not
	 * accessed by JS Bundle code (The timer APIs polyfill for JS Bundle is in
	 * `html5/default/app/ctrl.js`).
	 */
	
	var _global = global;
	var setTimeout = _global.setTimeout;
	var setTimeoutNative = _global.setTimeoutNative;
	
	/* istanbul ignore if */
	
	if (typeof setTimeout === 'undefined' && typeof setTimeoutNative === 'function') {
	  (function () {
	    var timeoutMap = {};
	    var timeoutId = 0;
	
	    global.setTimeout = function (cb, time) {
	      timeoutMap[++timeoutId] = cb;
	      setTimeoutNative(timeoutId.toString(), time);
	    };
	
	    global.setTimeoutCallback = function (id) {
	      if (typeof timeoutMap[id] === 'function') {
	        timeoutMap[id]();
	        delete timeoutMap[id];
	      }
	    };
	  })();
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// fix Promise Problem on JSContext of iOS7~8
	// @see https://bugs.webkit.org/show_bug.cgi?id=135866
	var _global = global;
	var WXEnvironment = _global.WXEnvironment;
	
	if (WXEnvironment && WXEnvironment.platform === 'iOS' && /^(7|8)\./.test(WXEnvironment.osVersion)) {
	  global.Promise = null;
	}
	__webpack_require__(5);
	__webpack_require__(25);
	__webpack_require__(51);
	__webpack_require__(55);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(6),
	    test = {};
	test[__webpack_require__(8)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(12)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(7),
	    TAG = __webpack_require__(8)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(9)('wks'),
	    uid = __webpack_require__(11),
	    _Symbol = __webpack_require__(10).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    hide = __webpack_require__(13),
	    has = __webpack_require__(23),
	    SRC = __webpack_require__(11)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(24).inspectSource = function (it) {
	  return $toString.call(it);
	};
	
	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) has(val, 'name') || hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === global) {
	    O[key] = val;
	  } else {
	    if (!safe) {
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if (O[key]) O[key] = val;else hide(O, key, val);
	    }
	  }
	  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(14),
	    createDesc = __webpack_require__(22);
	module.exports = __webpack_require__(18) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(15),
	    IE8_DOM_DEFINE = __webpack_require__(17),
	    toPrimitive = __webpack_require__(21),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(18) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(16);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(18) && !__webpack_require__(19)(function () {
	  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(19)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(16),
	    document = __webpack_require__(10).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(16);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(26)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(29)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(27),
	    defined = __webpack_require__(28);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(30),
	    $export = __webpack_require__(31),
	    redefine = __webpack_require__(12),
	    hide = __webpack_require__(13),
	    has = __webpack_require__(23),
	    Iterators = __webpack_require__(34),
	    $iterCreate = __webpack_require__(35),
	    setToStringTag = __webpack_require__(48),
	    getPrototypeOf = __webpack_require__(49),
	    ITERATOR = __webpack_require__(8)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    core = __webpack_require__(24),
	    hide = __webpack_require__(13),
	    redefine = __webpack_require__(12),
	    ctx = __webpack_require__(32),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
	      key,
	      own,
	      out,
	      exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if (target) redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(33);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(36),
	    descriptor = __webpack_require__(22),
	    setToStringTag = __webpack_require__(48),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(13)(IteratorPrototype, __webpack_require__(8)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(15),
	    dPs = __webpack_require__(37),
	    enumBugKeys = __webpack_require__(46),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(20)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(47).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(14),
	    anObject = __webpack_require__(15),
	    getKeys = __webpack_require__(38);
	
	module.exports = __webpack_require__(18) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(39),
	    enumBugKeys = __webpack_require__(46);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(23),
	    toIObject = __webpack_require__(40),
	    arrayIndexOf = __webpack_require__(42)(false),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(41),
	    defined = __webpack_require__(28);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(7);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(40),
	    toLength = __webpack_require__(43),
	    toIndex = __webpack_require__(44);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(27),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(9)('keys'),
	    uid = __webpack_require__(11);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(10).document && document.documentElement;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(14).f,
	    has = __webpack_require__(23),
	    TAG = __webpack_require__(8)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(23),
	    toObject = __webpack_require__(50),
	    IE_PROTO = __webpack_require__(45)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(52),
	    redefine = __webpack_require__(12),
	    global = __webpack_require__(10),
	    hide = __webpack_require__(13),
	    Iterators = __webpack_require__(34),
	    wks = __webpack_require__(8),
	    ITERATOR = wks('iterator'),
	    TO_STRING_TAG = wks('toStringTag'),
	    ArrayValues = Iterators.Array;
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype,
	      key;
	  if (proto) {
	    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
	    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for (key in $iterators) {
	      if (!proto[key]) redefine(proto, key, $iterators[key], true);
	    }
	  }
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(53),
	    step = __webpack_require__(54),
	    Iterators = __webpack_require__(34),
	    toIObject = __webpack_require__(40);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(29)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(8)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(13)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(30),
	    global = __webpack_require__(10),
	    ctx = __webpack_require__(32),
	    classof = __webpack_require__(6),
	    $export = __webpack_require__(31),
	    isObject = __webpack_require__(16),
	    aFunction = __webpack_require__(33),
	    anInstance = __webpack_require__(56),
	    forOf = __webpack_require__(57),
	    speciesConstructor = __webpack_require__(61),
	    task = __webpack_require__(62).set,
	    microtask = __webpack_require__(64)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(8)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this,
	      then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(65)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(48)($Promise, PROMISE);
	__webpack_require__(66)(PROMISE);
	Wrapper = __webpack_require__(24)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(67)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(32),
	    call = __webpack_require__(58),
	    isArrayIter = __webpack_require__(59),
	    anObject = __webpack_require__(15),
	    toLength = __webpack_require__(43),
	    getIterFn = __webpack_require__(60),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(15);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(34),
	    ITERATOR = __webpack_require__(8)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(6),
	    ITERATOR = __webpack_require__(8)('iterator'),
	    Iterators = __webpack_require__(34);
	module.exports = __webpack_require__(24).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(15),
	    aFunction = __webpack_require__(33),
	    SPECIES = __webpack_require__(8)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(32),
	    invoke = __webpack_require__(63),
	    html = __webpack_require__(47),
	    cel = __webpack_require__(20),
	    global = __webpack_require__(10),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(7)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	"use strict";
	
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    macrotask = __webpack_require__(62).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(7)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true,
	        node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(12);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(10),
	    dP = __webpack_require__(14),
	    DESCRIPTORS = __webpack_require__(18),
	    SPECIES = __webpack_require__(8)('species');
	
	module.exports = function (KEY) {
	  var C = global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(8)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * @fileOverview
	 * This file will hack `console` methods by `WXEnvironment.logLevel`.
	 * So we can control how many and which messages will be sent by change the log level.
	 * Additionally in native platform the message content must be primitive values and
	 * using `nativeLog(...args, logLevelMark)` so we create a new `console` object in
	 * global add a format process for its methods.
	 */
	
	var _global = global;
	var console = _global.console;
	var nativeLog = _global.nativeLog;
	
	var LEVELS = ['off', 'error', 'warn', 'info', 'log', 'debug'];
	var levelMap = {};
	
	generateLevelMap();
	
	/* istanbul ignore if */
	if (typeof console === 'undefined' || // Android
	global.WXEnvironment && global.WXEnvironment.platform === 'iOS' // iOS
	) {
	    global.console = {
	      debug: function debug() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        if (checkLevel('debug')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__DEBUG']));
	        }
	      },
	      log: function log() {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }
	
	        if (checkLevel('log')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__LOG']));
	        }
	      },
	      info: function info() {
	        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          args[_key3] = arguments[_key3];
	        }
	
	        if (checkLevel('info')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__INFO']));
	        }
	      },
	      warn: function warn() {
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }
	
	        if (checkLevel('warn')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__WARN']));
	        }
	      },
	      error: function error() {
	        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	          args[_key5] = arguments[_key5];
	        }
	
	        if (checkLevel('error')) {
	          nativeLog.apply(undefined, _toConsumableArray(format(args)).concat(['__ERROR']));
	        }
	      }
	    };
	  } else {
	  // HTML5
	  var debug = console.debug;
	  var log = console.log;
	  var info = console.info;
	  var warn = console.warn;
	  var error = console.error;
	
	  console.__ori__ = { debug: debug, log: log, info: info, warn: warn, error: error };
	  console.debug = function () {
	    for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	      args[_key6] = arguments[_key6];
	    }
	
	    if (checkLevel('debug')) {
	      console.__ori__.debug.apply(console, args);
	    }
	  };
	  console.log = function () {
	    for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	      args[_key7] = arguments[_key7];
	    }
	
	    if (checkLevel('log')) {
	      console.__ori__.log.apply(console, args);
	    }
	  };
	  console.info = function () {
	    for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	      args[_key8] = arguments[_key8];
	    }
	
	    if (checkLevel('info')) {
	      console.__ori__.info.apply(console, args);
	    }
	  };
	  console.warn = function () {
	    for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	      args[_key9] = arguments[_key9];
	    }
	
	    if (checkLevel('warn')) {
	      console.__ori__.warn.apply(console, args);
	    }
	  };
	  console.error = function () {
	    for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
	      args[_key10] = arguments[_key10];
	    }
	
	    if (checkLevel('error')) {
	      console.__ori__.error.apply(console, args);
	    }
	  };
	}
	
	/**
	 * Generate map for which types of message will be sent in a certain message level
	 * as the order of LEVELS.
	 */
	function generateLevelMap() {
	  LEVELS.forEach(function (level) {
	    var levelIndex = LEVELS.indexOf(level);
	    levelMap[level] = {};
	    LEVELS.forEach(function (type) {
	      var typeIndex = LEVELS.indexOf(type);
	      if (typeIndex <= levelIndex) {
	        levelMap[level][type] = true;
	      }
	    });
	  });
	}
	
	/**
	 * Check if a certain type of message will be sent in current log level of env.
	 * @param  {string} type
	 * @return {boolean}
	 */
	function checkLevel(type) {
	  var logLevel = global.WXEnvironment && global.WXEnvironment.logLevel || 'log';
	  return levelMap[logLevel] && levelMap[logLevel][type];
	}
	
	/**
	 * Convert all log arguments into primitive values.
	 * @param  {array} args
	 * @return {array}
	 */
	function format(args) {
	  return args.map(function (v) {
	    var type = Object.prototype.toString.call(v);
	    if (type.toLowerCase() === '[object object]') {
	      v = JSON.stringify(v);
	    } else {
	      v = String(v);
	    }
	    return v;
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(70);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(71);
	module.exports = __webpack_require__(24).Object.assign;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(31);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(72) });

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(38),
	    gOPS = __webpack_require__(73),
	    pIE = __webpack_require__(74),
	    toObject = __webpack_require__(50),
	    IObject = __webpack_require__(41),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(19)(function () {
	  var A = {},
	      B = {},
	      S = Symbol(),
	      K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) {
	    B[k] = k;
	  });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject(target),
	      aLen = arguments.length,
	      index = 1,
	      getSymbols = gOPS.f,
	      isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]),
	        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
	        length = keys.length,
	        j = 0,
	        key;
	    while (length > j) {
	      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	    }
	  }return T;
	} : $assign;

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vdom = __webpack_require__(76);
	
	var _listener = __webpack_require__(77);
	
	var _listener2 = _interopRequireDefault(_listener);
	
	var _config = __webpack_require__(78);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _init = __webpack_require__(111);
	
	var _init2 = _interopRequireDefault(_init);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @fileOverview
	 * Register framework(s) in JS runtime. Weex supply two layers for 3rd-party
	 * framework(s): one is the instance management layer, another is the
	 * virtual-DOM layer.
	 */
	
	// This config is generated by `npm run build:config`.
	// It will collect all `runtime/framework-*.js` files and import each of them.
	// The filename is also the framework name.
	var config = {
	  Document: _vdom.Document, Element: _vdom.Element, Comment: _vdom.Comment, Listener: _listener2.default, frameworks: _config2.default,
	  sendTasks: function sendTasks() {
	    var _global;
	
	    return (_global = global).callNative.apply(_global, arguments);
	  }
	};
	
	var methods = (0, _init2.default)(config);
	
	exports.default = methods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.instanceMap = undefined;
	exports.Document = Document;
	exports.Node = Node;
	exports.Element = Element;
	exports.Comment = Comment;
	
	var _utils = __webpack_require__(2);
	
	var DEFAULT_TAG_NAME = 'div'; /**
	                               * @fileOverview
	                               * A simple virtual dom implementation
	                               */
	// import { extend } from '../shared'
	var instanceMap = exports.instanceMap = {};
	var nextNodeRef = 1;
	
	function Document(id, url, handler, Listener) {
	  id = id ? id.toString() : '';
	  this.id = id;
	  this.URL = url;
	
	  instanceMap[id] = this;
	  this.nodeMap = {};
	  Listener && (this.listener = new Listener(id, handler || genCallTasks(id)));
	  this.createDocumentElement();
	}
	
	function genCallTasks(id) {
	  return function (tasks) {
	    if (!Array.isArray(tasks)) {
	      tasks = [tasks];
	    }
	    return callNative(id, tasks, '-1');
	  };
	}
	
	Document.prototype.destroy = function () {
	  delete this.listener;
	  delete this.nodeMap;
	  delete instanceMap[this.id];
	};
	
	Document.prototype.open = function () {
	  this.listener.batched = false;
	};
	
	Document.prototype.close = function () {
	  this.listener.batched = true;
	};
	
	Document.prototype.createDocumentElement = function () {
	  var _this = this;
	
	  if (!this.documentElement) {
	    var el = new Element('document');
	    el.docId = this.id;
	    el.ownerDocument = this;
	    el.role = 'documentElement';
	    el.depth = 0;
	    el.ref = '_documentElement';
	    this.nodeMap._documentElement = el;
	    this.documentElement = el;
	    el.appendChild = function (node) {
	      appendBody(_this, node);
	    };
	    el.insertBefore = function (node, before) {
	      appendBody(_this, node, before);
	    };
	  }
	
	  return this.documentElement;
	};
	
	function appendBody(doc, node, before) {
	  var documentElement = doc.documentElement;
	
	
	  if (documentElement.pureChildren.length > 0 || node.parentNode) {
	    return;
	  }
	  var children = documentElement.children;
	  var beforeIndex = children.indexOf(before);
	  if (beforeIndex < 0) {
	    children.push(node);
	  } else {
	    children.splice(beforeIndex, 0, node);
	  }
	
	  if (node.nodeType === 1) {
	    if (node.role === 'body') {
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      node.parentNode = documentElement;
	    } else {
	      node.children.forEach(function (child) {
	        child.parentNode = node;
	      });
	      setBody(doc, node);
	      node.docId = doc.id;
	      node.ownerDocument = doc;
	      linkParent(node, documentElement);
	      delete doc.nodeMap[node.nodeId];
	    }
	    documentElement.pureChildren.push(node);
	    doc.listener.createBody(node);
	  } else {
	    node.parentNode = documentElement;
	    doc.nodeMap[node.ref] = node;
	  }
	}
	
	function setBody(doc, el) {
	  el.role = 'body';
	  el.depth = 1;
	  delete doc.nodeMap[el.nodeId];
	  el.ref = '_root';
	  doc.nodeMap._root = el;
	  doc.body = el;
	}
	
	Document.prototype.createBody = function (type, props) {
	  if (!this.body) {
	    var el = new Element(type, props);
	    setBody(this, el);
	  }
	
	  return this.body;
	};
	
	Document.prototype.createElement = function (tagName, props) {
	  return new Element(tagName, props);
	};
	
	Document.prototype.createComment = function (text) {
	  return new Comment(text);
	};
	
	Document.prototype.fireEvent = function (el, type, e, domChanges) {
	  if (!el) {
	    return;
	  }
	  e = e || {};
	  e.type = type;
	  e.target = el;
	  e.timestamp = Date.now();
	  if (domChanges) {
	    updateElement(el, domChanges);
	  }
	  return el.fireEvent(type, e);
	};
	
	Document.prototype.getRef = function (ref) {
	  return this.nodeMap[ref];
	};
	
	function updateElement(el, changes) {
	  var attrs = changes.attrs || {};
	  for (var name in attrs) {
	    el.setAttr(name, attrs[name], true);
	  }
	  var style = changes.style || {};
	  for (var _name in style) {
	    el.setStyle(_name, style[_name], true);
	  }
	}
	
	function Node() {
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.children = [];
	  this.pureChildren = [];
	  this.parentNode = null;
	  this.nextSibling = null;
	  this.previousSibling = null;
	}
	
	Node.prototype.destroy = function () {
	  var doc = instanceMap[this.docId];
	  if (doc) {
	    delete this.docId;
	    delete doc.nodeMap[this.nodeId];
	  }
	  this.children.forEach(function (child) {
	    child.destroy();
	  });
	};
	
	function Element() {
	  var type = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_TAG_NAME : arguments[0];
	  var props = arguments[1];
	
	  props = props || {};
	  this.nodeType = 1;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = type;
	  this.attr = props.attr || {};
	  this.classStyle = props.classStyle || {};
	  this.style = props.style || {};
	  this.event = {};
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Element.prototype = new Node();
	
	Element.prototype.appendChild = function (node) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.length, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      insertIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, -1);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.length, true);
	    if (node.nodeType === 1) {
	      var index = moveIndex(node, this.pureChildren, this.pureChildren.length);
	      if (this.docId && index >= 0) {
	        var _listener = instanceMap[this.docId].listener;
	        return _listener.moveElement(node.ref, this.ref, index);
	      }
	    }
	  }
	};
	
	Element.prototype.insertBefore = function (node, before) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === before || node.nextSibling === before) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(before), true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var pureBefore = nextElement(before);
	      var index = insertIndex(node, this.pureChildren, pureBefore ? this.pureChildren.indexOf(pureBefore) : this.pureChildren.length);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(before), true);
	    if (node.nodeType === 1) {
	      var _pureBefore = nextElement(before);
	      var _index = moveIndex(node, this.pureChildren, _pureBefore ? this.pureChildren.indexOf(_pureBefore) : this.pureChildren.length);
	      if (this.docId && _index >= 0) {
	        var _listener2 = instanceMap[this.docId].listener;
	        return _listener2.moveElement(node.ref, this.ref, _index);
	      }
	    }
	  }
	};
	
	Element.prototype.insertAfter = function (node, after) {
	  if (node.parentNode && node.parentNode !== this) {
	    return;
	  }
	  if (node === after || node.previousSibling === after) {
	    return;
	  }
	  if (!node.parentNode) {
	    linkParent(node, this);
	    insertIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (this.docId) {
	      registerNode(this.docId, node);
	    }
	    if (node.nodeType === 1) {
	      var index = insertIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        return listener.addElement(node, this.ref, index);
	      }
	    }
	  } else {
	    moveIndex(node, this.children, this.children.indexOf(after) + 1, true);
	    if (node.nodeType === 1) {
	      var _index2 = moveIndex(node, this.pureChildren, this.pureChildren.indexOf(previousElement(after)) + 1);
	      if (this.docId && _index2 >= 0) {
	        var _listener3 = instanceMap[this.docId].listener;
	        return _listener3.moveElement(node.ref, this.ref, _index2);
	      }
	    }
	  }
	};
	
	Element.prototype.removeChild = function (node, preserved) {
	  if (node.parentNode) {
	    removeIndex(node, this.children, true);
	    if (node.nodeType === 1) {
	      removeIndex(node, this.pureChildren);
	      if (this.docId) {
	        var listener = instanceMap[this.docId].listener;
	        listener.removeElement(node.ref);
	      }
	    }
	  }
	  if (!preserved) {
	    node.destroy();
	  }
	};
	
	Element.prototype.clear = function () {
	  var _this2 = this;
	
	  if (this.docId) {
	    (function () {
	      var listener = instanceMap[_this2.docId].listener;
	      _this2.pureChildren.forEach(function (node) {
	        listener.removeElement(node.ref);
	      });
	    })();
	  }
	  this.children.forEach(function (node) {
	    node.destroy();
	  });
	  this.children.length = 0;
	  this.pureChildren.length = 0;
	};
	
	function nextElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.nextSibling;
	  }
	}
	
	function previousElement(node) {
	  while (node) {
	    if (node.nodeType === 1) {
	      return node;
	    }
	    node = node.previousSibling;
	  }
	}
	
	function linkParent(node, parent) {
	  node.parentNode = parent;
	  if (parent.docId) {
	    node.docId = parent.docId;
	    node.ownerDocument = parent.ownerDocument;
	    node.ownerDocument.nodeMap[node.nodeId] = node;
	    node.depth = parent.depth + 1;
	  }
	  node.children.forEach(function (child) {
	    linkParent(child, node);
	  });
	}
	
	function registerNode(docId, node) {
	  var doc = instanceMap[docId];
	  doc.nodeMap[node.nodeId] = node;
	}
	
	function insertIndex(target, list, newIndex, changeSibling) {
	  if (newIndex < 0) {
	    newIndex = 0;
	  }
	  var before = list[newIndex - 1];
	  var after = list[newIndex];
	  list.splice(newIndex, 0, target);
	  if (changeSibling) {
	    before && (before.nextSibling = target);
	    target.previousSibling = before;
	    target.nextSibling = after;
	    after && (after.previousSibling = target);
	  }
	  return newIndex;
	}
	
	function moveIndex(target, list, newIndex, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return -1;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	  var newIndexAfter = newIndex;
	  if (index <= newIndex) {
	    newIndexAfter = newIndex - 1;
	  }
	  var beforeNew = list[newIndexAfter - 1];
	  var afterNew = list[newIndexAfter];
	  list.splice(newIndexAfter, 0, target);
	  if (changeSibling) {
	    beforeNew && (beforeNew.nextSibling = target);
	    target.previousSibling = beforeNew;
	    target.nextSibling = afterNew;
	    afterNew && (afterNew.previousSibling = target);
	  }
	  if (index === newIndexAfter) {
	    return -1;
	  }
	  return newIndex;
	}
	
	function removeIndex(target, list, changeSibling) {
	  var index = list.indexOf(target);
	  if (index < 0) {
	    return;
	  }
	  if (changeSibling) {
	    var before = list[index - 1];
	    var after = list[index + 1];
	    before && (before.nextSibling = after);
	    after && (after.previousSibling = before);
	  }
	  list.splice(index, 1);
	}
	
	Element.prototype.setAttr = function (key, value, silent) {
	  if (this.attr[key] === value && silent !== false) {
	    return;
	  }
	  this.attr[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setAttr(this.ref, key, value);
	  }
	};
	
	Element.prototype.setStyle = function (key, value, silent) {
	  if (this.style[key] === value && silent !== false) {
	    return;
	  }
	  this.style[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyle(this.ref, key, value);
	  }
	};
	
	Element.prototype.resetClassStyle = function () {
	  for (var key in this.classStyle) {
	    this.classStyle[key] = '';
	  }
	};
	
	Element.prototype.setClassStyle = function (classStyle) {
	  this.resetClassStyle();
	  (0, _utils.extend)(this.classStyle, classStyle);
	  if (this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyles(this.ref, this.toStyle());
	  }
	};
	
	Element.prototype.addEvent = function (type, handler) {
	  if (!this.event[type]) {
	    this.event[type] = handler;
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.addEvent(this.ref, type);
	    }
	  }
	};
	
	Element.prototype.removeEvent = function (type) {
	  if (this.event[type]) {
	    delete this.event[type];
	    if (this.docId) {
	      var listener = instanceMap[this.docId].listener;
	      listener.removeEvent(this.ref, type);
	    }
	  }
	};
	
	Element.prototype.fireEvent = function (type, e) {
	  var handler = this.event[type];
	  if (handler) {
	    return handler.call(this, e);
	  }
	};
	
	Element.prototype.toStyle = function () {
	  return (0, _utils.extend)({}, this.classStyle, this.style);
	};
	
	Element.prototype.toJSON = function () {
	  var result = {
	    ref: this.ref.toString(),
	    type: this.type,
	    attr: this.attr,
	    style: this.toStyle()
	  };
	  var event = Object.keys(this.event);
	  if (event.length) {
	    result.event = event;
	  }
	  if (this.pureChildren.length) {
	    result.children = this.pureChildren.map(function (child) {
	      return child.toJSON();
	    });
	  }
	  return result;
	};
	
	Element.prototype.toString = function () {
	  return '<' + this.type + ' attr=' + JSON.stringify(this.attr) + ' style=' + JSON.stringify(this.toStyle()) + '>' + this.pureChildren.map(function (child) {
	    return child.toString();
	  }).join('') + '</' + this.type + '>';
	};
	
	function Comment(value) {
	  this.nodeType = 8;
	  this.nodeId = (nextNodeRef++).toString();
	  this.ref = this.nodeId;
	  this.type = 'comment';
	  this.value = value;
	  this.children = [];
	  this.pureChildren = [];
	}
	
	Comment.prototype = new Node();
	
	Comment.prototype.toString = function () {
	  return '<!-- ' + this.value + ' -->';
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Listener;
	exports.createAction = createAction;
	function Listener(id, handler) {
	  this.id = id;
	  this.batched = false;
	  this.updates = [];
	  if (typeof handler === 'function') {
	    this.handler = handler;
	  }
	}
	
	Listener.prototype.createFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('createFinish', [])], callback);
	};
	
	Listener.prototype.updateFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('updateFinish', [])], callback);
	};
	
	Listener.prototype.refreshFinish = function (callback) {
	  var handler = this.handler;
	  return handler([createAction('refreshFinish', [])], callback);
	};
	
	Listener.prototype.createBody = function (element) {
	  var body = element.toJSON();
	  var children = body.children;
	  delete body.children;
	  var actions = [createAction('createBody', [body])];
	  if (children) {
	    actions.push.apply(actions, children.map(function (child) {
	      return createAction('addElement', [body.ref, child, -1]);
	    }));
	  }
	  return this.addActions(actions);
	};
	
	Listener.prototype.addElement = function (element, ref, index) {
	  if (!(index >= 0)) {
	    index = -1;
	  }
	  return this.addActions(createAction('addElement', [ref, element.toJSON(), index]));
	};
	
	Listener.prototype.removeElement = function (ref) {
	  if (Array.isArray(ref)) {
	    var actions = ref.map(function (r) {
	      return createAction('removeElement', [r]);
	    });
	    return this.addActions(actions);
	  }
	  return this.addActions(createAction('removeElement', [ref]));
	};
	
	Listener.prototype.moveElement = function (targetRef, parentRef, index) {
	  return this.addActions(createAction('moveElement', [targetRef, parentRef, index]));
	};
	
	Listener.prototype.setAttr = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateAttrs', [ref, result]));
	};
	
	Listener.prototype.setStyle = function (ref, key, value) {
	  var result = {};
	  result[key] = value;
	  return this.addActions(createAction('updateStyle', [ref, result]));
	};
	
	Listener.prototype.setStyles = function (ref, style) {
	  return this.addActions(createAction('updateStyle', [ref, style]));
	};
	
	Listener.prototype.addEvent = function (ref, type) {
	  return this.addActions(createAction('addEvent', [ref, type]));
	};
	
	Listener.prototype.removeEvent = function (ref, type) {
	  return this.addActions(createAction('removeEvent', [ref, type]));
	};
	
	Listener.prototype.handler = function (actions, cb) {
	  return cb && cb();
	};
	
	Listener.prototype.addActions = function (actions) {
	  var updates = this.updates;
	  var handler = this.handler;
	
	  if (!Array.isArray(actions)) {
	    actions = [actions];
	  }
	
	  if (this.batched) {
	    updates.push.apply(updates, actions);
	  } else {
	    return handler(actions);
	  }
	};
	
	function createAction(name, args) {
	  return { module: 'dom', method: name, args: args };
	}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _default = __webpack_require__(79);
	
	var Weex = _interopRequireWildcard(_default);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	  Weex: Weex
	}; // built by npm run build:config

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _create = __webpack_require__(80);
	
	Object.defineProperty(exports, 'createInstance', {
	  enumerable: true,
	  get: function get() {
	    return _create.createInstance;
	  }
	});
	
	var _life = __webpack_require__(107);
	
	Object.defineProperty(exports, 'init', {
	  enumerable: true,
	  get: function get() {
	    return _life.init;
	  }
	});
	Object.defineProperty(exports, 'refreshInstance', {
	  enumerable: true,
	  get: function get() {
	    return _life.refreshInstance;
	  }
	});
	Object.defineProperty(exports, 'destroyInstance', {
	  enumerable: true,
	  get: function get() {
	    return _life.destroyInstance;
	  }
	});
	
	var _register = __webpack_require__(108);
	
	Object.defineProperty(exports, 'registerComponents', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerComponents;
	  }
	});
	Object.defineProperty(exports, 'registerModules', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerModules;
	  }
	});
	Object.defineProperty(exports, 'registerMethods', {
	  enumerable: true,
	  get: function get() {
	    return _register.registerMethods;
	  }
	});
	
	var _bridge = __webpack_require__(109);
	
	Object.defineProperty(exports, 'receiveTasks', {
	  enumerable: true,
	  get: function get() {
	    return _bridge.receiveTasks;
	  }
	});
	
	var _misc = __webpack_require__(110);
	
	Object.defineProperty(exports, 'getRoot', {
	  enumerable: true,
	  get: function get() {
	    return _misc.getRoot;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createInstance = createInstance;
	
	var _app = __webpack_require__(81);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _map = __webpack_require__(106);
	
	var _ctrl = __webpack_require__(83);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create a Weex instance.
	 *
	 * @param  {string} id
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(id, code, options, data) {
	  var instance = _map.instanceMap[id];
	  options = options || {};
	  var result = void 0;
	  if (!instance) {
	    instance = new _app2.default(id, options);
	    _map.instanceMap[id] = instance;
	    result = (0, _ctrl.init)(instance, code, data);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _register = __webpack_require__(82);
	
	var _ctrl = __webpack_require__(83);
	
	var _instance = __webpack_require__(104);
	
	var _instance2 = _interopRequireDefault(_instance);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @deprecated
	 */
	_instance2.default.prototype.requireModule = function (name) {
	  return (0, _register.requireModule)(this, name);
	};
	
	/**
	 * @deprecated
	 */
	/**
	 * @fileOverview
	 * Weex instance constructor & definition
	 */
	
	_instance2.default.prototype.updateActions = function () {
	  (0, _ctrl.updateActions)(this);
	};
	
	/**
	 * @deprecated
	 */
	_instance2.default.prototype.callTasks = function (tasks) {
	  (0, _ctrl.callTasks)(this, tasks);
	};
	
	exports.default = _instance2.default;

/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getModule = getModule;
	exports.clearModules = clearModules;
	exports.initModules = initModules;
	exports.initMethods = initMethods;
	exports.requireModule = requireModule;
	exports.requireCustomComponent = requireCustomComponent;
	exports.registerCustomComponent = registerCustomComponent;
	var nativeModules = {};
	
	// for testing
	
	/**
	 * for testing
	 */
	function getModule(moduleName) {
	  return nativeModules[moduleName];
	}
	
	/**
	 * for testing
	 */
	function clearModules() {
	  nativeModules = {};
	}
	
	// for framework
	
	/**
	 * init modules for an app instance
	 * the second param determines whether to replace an existed method
	 */
	function initModules(modules, ifReplace) {
	  var _loop = function _loop(moduleName) {
	    // init `modules[moduleName][]`
	    var methods = nativeModules[moduleName];
	    if (!methods) {
	      methods = {};
	      nativeModules[moduleName] = methods;
	    }
	
	    // push each non-existed new method
	    modules[moduleName].forEach(function (method) {
	      if (typeof method === 'string') {
	        method = {
	          name: method
	        };
	      }
	
	      if (!methods[method.name] || ifReplace) {
	        methods[method.name] = method;
	      }
	    });
	  };
	
	  for (var moduleName in modules) {
	    _loop(moduleName);
	  }
	}
	
	/**
	 * init app methods
	 */
	function initMethods(Vm, apis) {
	  var p = Vm.prototype;
	
	  for (var apiName in apis) {
	    if (!p.hasOwnProperty(apiName)) {
	      p[apiName] = apis[apiName];
	    }
	  }
	}
	
	// for app
	
	/**
	 * get a module of methods for an app instance
	 */
	function requireModule(app, name) {
	  var methods = nativeModules[name];
	  var target = {};
	
	  var _loop2 = function _loop2(methodName) {
	    target[methodName] = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return app.callTasks({
	        module: name,
	        method: methodName,
	        args: args
	      });
	    };
	  };
	
	  for (var methodName in methods) {
	    _loop2(methodName);
	  }
	  return target;
	}
	
	/**
	 * get a custom component options
	 */
	function requireCustomComponent(app, name) {
	  var customComponentMap = app.customComponentMap;
	
	  return customComponentMap[name];
	}
	
	/**
	 * register a custom component options
	 */
	function registerCustomComponent(app, name, def) {
	  var customComponentMap = app.customComponentMap;
	
	
	  if (customComponentMap[name]) {
	    console.error('[JS Framework] define a component(' + name + ') that already exists');
	    return;
	  }
	
	  customComponentMap[name] = def;
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _init = __webpack_require__(84);
	
	Object.defineProperty(exports, 'init', {
	  enumerable: true,
	  get: function get() {
	    return _init.init;
	  }
	});
	
	var _misc = __webpack_require__(103);
	
	Object.defineProperty(exports, 'refresh', {
	  enumerable: true,
	  get: function get() {
	    return _misc.refresh;
	  }
	});
	Object.defineProperty(exports, 'destroy', {
	  enumerable: true,
	  get: function get() {
	    return _misc.destroy;
	  }
	});
	Object.defineProperty(exports, 'getRootElement', {
	  enumerable: true,
	  get: function get() {
	    return _misc.getRootElement;
	  }
	});
	Object.defineProperty(exports, 'fireEvent', {
	  enumerable: true,
	  get: function get() {
	    return _misc.fireEvent;
	  }
	});
	Object.defineProperty(exports, 'callback', {
	  enumerable: true,
	  get: function get() {
	    return _misc.callback;
	  }
	});
	Object.defineProperty(exports, 'updateActions', {
	  enumerable: true,
	  get: function get() {
	    return _misc.updateActions;
	  }
	});
	Object.defineProperty(exports, 'callTasks', {
	  enumerable: true,
	  get: function get() {
	    return _misc.callTasks;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	
	var _vm = __webpack_require__(85);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _util = __webpack_require__(86);
	
	var _bundle = __webpack_require__(98);
	
	var _misc = __webpack_require__(103);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - init bundle
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	/**
	 * Init an app by run code witgh data
	 * @param  {object} app
	 * @param  {string} code
	 * @param  {object} data
	 */
	function init(app, code, data) {
	  console.debug('[JS Framework] Intialize an instance with:\n', data);
	  var result = void 0;
	
	  // prepare app env methods
	  var bundleDefine = function bundleDefine() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _bundle.defineFn.apply(undefined, [app].concat(args));
	  };
	  var bundleBootstrap = function bundleBootstrap(name, config, _data) {
	    result = (0, _bundle.bootstrap)(app, name, config, _data || data);
	    (0, _misc.updateActions)(app);
	    app.doc.listener.createFinish();
	    console.debug('[JS Framework] After intialized an instance(' + app.id + ')');
	  };
	  var bundleVm = _vm2.default;
	  var bundleRegister = function bundleRegister() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _bundle.register.apply(undefined, [app].concat(args));
	  };
	  var bundleRender = function bundleRender(name, _data) {
	    result = (0, _bundle.bootstrap)(app, name, {}, _data);
	  };
	  var bundleRequire = function bundleRequire(name) {
	    return function (_data) {
	      result = (0, _bundle.bootstrap)(app, name, {}, _data);
	    };
	  };
	  var bundleDocument = app.doc;
	  var bundleRequireModule = function bundleRequireModule(name) {
	    return app.requireModule((0, _util.removeWeexPrefix)(name));
	  };
	
	  // prepare code
	  var functionBody = void 0;
	  /* istanbul ignore if */
	  if (typeof code === 'function') {
	    // `function () {...}` -> `{...}`
	    // not very strict
	    functionBody = code.toString().substr(12);
	  } else if (code) {
	    functionBody = code.toString();
	  }
	
	  // run code and get result
	  var _global = global;
	  var WXEnvironment = _global.WXEnvironment;
	
	  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
	    (function () {
	      // timer APIs polyfill in native
	      var timer = app.requireModule('timer');
	      var timerAPIs = {
	        setTimeout: function setTimeout() {
	          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            args[_key3] = arguments[_key3];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setTimeout(handler, args[1]);
	          return app.uid.toString();
	        },
	        setInterval: function setInterval() {
	          for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	            args[_key4] = arguments[_key4];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setInterval(handler, args[1]);
	          return app.uid.toString();
	        },
	        clearTimeout: function clearTimeout(n) {
	          timer.clearTimeout(n);
	        },
	        clearInterval: function clearInterval(n) {
	          timer.clearInterval(n);
	        }
	      };
	
	      var fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	      '__weex_bootstrap__', // alias for bootstrap
	      '__weex_document__', // alias for bootstrap
	      '__weex_require__', '__weex_viewmodel__', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', functionBody);
	
	      fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, bundleDocument, bundleRequireModule, bundleVm, timerAPIs.setTimeout, timerAPIs.setInterval, timerAPIs.clearTimeout, timerAPIs.clearInterval);
	    })();
	  } else {
	    var _fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	    '__weex_bootstrap__', // alias for bootstrap
	    '__weex_document__', // alias for bootstrap
	    '__weex_require__', '__weex_viewmodel__', functionBody);
	
	    _fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, bundleDocument, bundleRequireModule, bundleVm);
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _util = __webpack_require__(86);
	
	var _state = __webpack_require__(87);
	
	var _compiler = __webpack_require__(93);
	
	var _observer = __webpack_require__(91);
	
	var _directive = __webpack_require__(94);
	
	var _events = __webpack_require__(97);
	
	/**
	 * ViewModel constructor
	 *
	 * @param {string} type
	 * @param {object} options    component options
	 * @param {object} parentVm   which contains _app
	 * @param {object} parentEl   root element or frag block
	 * @param {object} mergedData external data
	 * @param {object} externalEvents external events
	 */
	/**
	 * @fileOverview
	 * ViewModel Constructor & definition
	 */
	
	function Vm(type, options, parentVm, parentEl, mergedData, externalEvents) {
	  parentVm = parentVm || {};
	  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
	  this._app = parentVm._app || {};
	  parentVm._childrenVms && parentVm._childrenVms.push(this);
	
	  if (!options && this._app.customComponentMap) {
	    options = this._app.customComponentMap[type];
	  }
	  options = options || {};
	
	  var data = options.data || {};
	
	  this._options = options;
	  this._methods = options.methods || {};
	  this._computed = options.computed || {};
	  this._css = options.style || {};
	  this._ids = {};
	  this._vmEvents = {};
	  this._childrenVms = [];
	  this._type = type;
	
	  // bind events and lifecycles
	  (0, _events.initEvents)(this, externalEvents);
	
	  console.debug('[JS Framework] "init" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:init');
	  this._inited = true;
	
	  // proxy data and methods
	  // observe data and add this to vms
	  this._data = typeof data === 'function' ? data() : data;
	  if (mergedData) {
	    (0, _util.extend)(this._data, mergedData);
	  }
	  (0, _state.initState)(this);
	
	  console.debug('[JS Framework] "created" lifecycle in Vm(' + this._type + ')');
	  this.$emit('hook:created');
	  this._created = true;
	
	  // backward old ready entry
	  if (options.methods && options.methods.ready) {
	    console.warn('"exports.methods.ready" is deprecated, ' + 'please use "exports.created" instead');
	    options.methods.ready.call(this);
	  }
	
	  if (!this._app.doc) {
	    return;
	  }
	
	  // if no parentElement then specify the documentElement
	  this._parentEl = parentEl || this._app.doc.documentElement;
	  (0, _compiler.build)(this);
	}
	
	(0, _events.mixinEvents)(Vm.prototype);
	
	/**
	 * Watch an function and bind all the data appeared in it. When the related
	 * data changes, the callback will be called with new value as 1st param.
	 *
	 * @param {Function} fn
	 * @param {Function} callback
	 */
	Vm.prototype.$watch = function (fn, callback) {
	  (0, _directive.watch)(this, fn, callback);
	};
	
	Vm.set = _observer.set;
	Vm.delete = _observer.del;

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _utils = __webpack_require__(2);
	
	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _utils.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _utils.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _utils.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _utils.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _utils.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _utils.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _utils.isPlainObject;
	  }
	});
	exports.isReserved = isReserved;
	exports.createNewSet = createNewSet;
	exports.cached = cached;
	exports.typof = typof;
	exports.removeWeexPrefix = removeWeexPrefix;
	exports.removeJSSurfix = removeJSSurfix;
	
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	// can we use __proto__?
	var hasProto = exports.hasProto = '__proto__' in {};
	
	var _Set = void 0;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  exports._Set = _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  exports._Set = _Set = function _Set() {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	exports._Set = _Set;
	
	/**
	 * Polyfill in iOS7 by native because the JavaScript polyfill has memory problem.
	 * @return {object}
	 */
	
	function createNewSet() {
	  /* eslint-disable */
	  if ((typeof nativeSet === 'undefined' ? 'undefined' : _typeof(nativeSet)) === 'object') {
	    return nativeSet.create();
	  }
	  /* eslint-enable */
	  return new _Set();
	}
	
	/**
	 * Create a cached version of a pure function.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	var camelize = exports.camelize = cached(function (str) {
	  return str.replace(camelizeRE, toUpper);
	});
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	var hyphenate = exports.hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	});
	
	function typof(v) {
	  var s = Object.prototype.toString.call(v);
	  return s.substring(8, s.length - 1).toLowerCase();
	}
	
	// weex name rules
	
	var WEEX_COMPONENT_REG = /^@weex-component\//;
	var WEEX_MODULE_REG = /^@weex-module\//;
	var NORMAL_MODULE_REG = /^\.{1,2}\//;
	var JS_SURFIX_REG = /\.js$/;
	
	var isWeexComponent = exports.isWeexComponent = function isWeexComponent(name) {
	  return !!name.match(WEEX_COMPONENT_REG);
	};
	var isWeexModule = exports.isWeexModule = function isWeexModule(name) {
	  return !!name.match(WEEX_MODULE_REG);
	};
	var isNormalModule = exports.isNormalModule = function isNormalModule(name) {
	  return !!name.match(NORMAL_MODULE_REG);
	};
	var isNpmModule = exports.isNpmModule = function isNpmModule(name) {
	  return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name);
	};
	
	function removeWeexPrefix(str) {
	  var result = str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
	  return result;
	}
	
	function removeJSSurfix(str) {
	  return str.replace(JS_SURFIX_REG, '');
	}

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initState = initState;
	exports.initData = initData;
	exports.initComputed = initComputed;
	exports.initMethods = initMethods;
	
	var _watcher = __webpack_require__(88);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(90);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(91);
	
	var _util = __webpack_require__(86);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	function initState(vm) {
	  vm._watchers = [];
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	}
	
	function initData(vm) {
	  var data = vm._data;
	
	  if (!(0, _util.isPlainObject)(data)) {
	    data = {};
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    (0, _observer.proxy)(vm, keys[i]);
	  }
	  // observe data
	  (0, _observer.observe)(data, vm);
	}
	
	function noop() {}
	
	function initComputed(vm) {
	  var computed = vm._computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      var def = {
	        enumerable: true,
	        configurable: true
	      };
	      if (typeof userDef === 'function') {
	        def.get = makeComputedGetter(userDef, vm);
	        def.set = noop;
	      } else {
	        def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : (0, _util.bind)(userDef.get, vm) : noop;
	        def.set = userDef.set ? (0, _util.bind)(userDef.set, vm) : noop;
	      }
	      Object.defineProperty(vm, key, def);
	    }
	  }
	}
	
	function makeComputedGetter(getter, owner) {
	  var watcher = new _watcher2.default(owner, getter, null, {
	    lazy: true
	  });
	  return function computedGetter() {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (_dep2.default.target) {
	      watcher.depend();
	    }
	    return watcher.value;
	  };
	}
	
	function initMethods(vm) {
	  var methods = vm._methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key];
	    }
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;
	
	var _dep = __webpack_require__(90);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _util = __webpack_require__(86);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable */
	
	var uid = 0;
	// import { pushWatcher } from './batcher'
	
	var prevTarget = void 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    (0, _util.extend)(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = (0, _util.createNewSet)(); // new Set()
	  this.newDepIds = (0, _util.createNewSet)(); // new Set()
	  // parse expression for getter
	  if (isFn) {
	    this.getter = expOrFn;
	  } else {
	    this.getter = (0, _util.parsePath)(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && (0, _util.warn)('Failed watching path: ' + expOrFn + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
	    }
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  prevTarget = _dep2.default.target;
	  _dep2.default.target = this;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  _dep2.default.target = prevTarget;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else {
	    this.run();
	  }
	  // } else if (this.sync) {
	  //   this.run()
	  // } else {
	  //   // if queued, only overwrite shallow with non-shallow,
	  //   // but not the other way around.
	  //   this.shallow = this.queued
	  //     ? shallow
	  //       ? this.shallow
	  //       : false
	  //     : !!shallow
	  //   this.queued = true
	  //   pushWatcher(this)
	  // }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    ((0, _util.isObject)(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      this.cb.call(this.vm, value, oldValue);
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = _dep2.default.target;
	  this.value = this.get();
	  this.dirty = false;
	  _dep2.default.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      (0, _util.remove)(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 * @param {Set} seen
	 */
	
	var seenObjects = (0, _util.createNewSet)(); // new Set()
	function traverse(val, seen) {
	  var i = void 0,
	      keys = void 0,
	      isA = void 0,
	      isO = void 0;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  isA = Array.isArray(val);
	  isO = (0, _util.isObject)(val);
	  if (isA || isO) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) {
	        traverse(val[i], seen);
	      }
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) {
	        traverse(val[keys[i]], seen);
	      }
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(89)))

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	
	var _util = __webpack_require__(86);
	
	var uid = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	/* eslint-disable */
	
	function Dep() {
	  this.id = uid++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  (0, _util.remove)(this.subs, sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Observer = Observer;
	exports.observe = observe;
	exports.defineReactive = defineReactive;
	exports.set = set;
	exports.del = del;
	exports.proxy = proxy;
	exports.unproxy = unproxy;
	
	var _dep = __webpack_require__(90);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(92);
	
	var _util = __webpack_require__(86);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var arrayKeys = Object.getOwnPropertyNames(_array.arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	/* eslint-disable */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new _dep2.default();
	  (0, _util.def)(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = _util.hasProto ? protoAugment : copyAugment;
	    augment(value, _array.arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  for (var key in obj) {
	    this.convert(key, obj[key]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  (0, _util.remove)(this.vms, vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    (0, _util.def)(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!(0, _util.isObject)(value)) {
	    return;
	  }
	  var ob = void 0;
	  if ((0, _util.hasOwn)(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((Array.isArray(value) || (0, _util.isPlainObject)(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new _dep2.default();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (_dep2.default.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	function set(obj, key, val) {
	  if (Array.isArray(obj)) {
	    return obj.splice(key, 1, val);
	  }
	  if ((0, _util.hasOwn)(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      proxy(vm, key);
	      // vm.$forceUpdate()
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!(0, _util.hasOwn)(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      // obj.$forceUpdate()
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      unproxy(vm, key);
	      // vm.$forceUpdate()
	    }
	  }
	}
	
	var KEY_WORDS = ['$index', '$value', '$event'];
	function proxy(vm, key) {
	  if (KEY_WORDS.indexOf(key) > -1 || !(0, _util.isReserved)(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter() {
	        return vm._data[key];
	      },
	      set: function proxySetter(val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}
	
	function unproxy(vm, key) {
	  if (!(0, _util.isReserved)(key)) {
	    delete vm[key];
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _util = __webpack_require__(86);
	
	var arrayProto = Array.prototype; /* eslint-disable */
	
	var arrayMethods = exports.arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  (0, _util.def)(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted = void 0;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	(0, _util.def)(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = index + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	(0, _util.def)(arrayProto, '$remove', function $remove(index) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  if (typeof index !== 'number') {
	    index = this.indexOf(index);
	  }
	  if (index > -1) {
	    this.splice(index, 1);
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.build = build;
	
	var _util = __webpack_require__(86);
	
	var _state = __webpack_require__(87);
	
	var _directive = __webpack_require__(94);
	
	var _domHelper = __webpack_require__(96);
	
	/**
	 * build()
	 *   compile(template, parentNode)
	 *     if (type is content) create contentNode
	 *     else if (dirs have v-for) foreach -> create context
	 *       -> compile(templateWithoutFor, parentNode): diff(list) onchange
	 *     else if (dirs have v-if) assert
	 *       -> compile(templateWithoutIf, parentNode): toggle(shown) onchange
	 *     else if (type is dynamic)
	 *       -> compile(templateWithoutDynamicType, parentNode): watch(type) onchange
	 *     else if (type is custom)
	 *       addChildVm(vm, parentVm)
	 *       build(externalDirs)
	 *       foreach childNodes -> compile(childNode, template)
	 *     else if (type is native)
	 *       set(dirs): update(id/attr/style/class) onchange
	 *       append(template, parentNode)
	 *       foreach childNodes -> compile(childNode, template)
	 */
	/**
	 * @fileOverview
	 * ViewModel template parser & data-binding process
	 */
	
	function build(vm) {
	  var opt = vm._options || {};
	  var template = opt.template || {};
	
	  if (opt.replace) {
	    if (template.children && template.children.length === 1) {
	      compile(vm, template.children[0], vm._parentEl);
	    } else {
	      compile(vm, template.children, vm._parentEl);
	    }
	  } else {
	    compile(vm, template, vm._parentEl);
	  }
	
	  console.debug('[JS Framework] "ready" lifecycle in Vm(' + vm._type + ')');
	  vm.$emit('hook:ready');
	  vm._ready = true;
	}
	
	/**
	 * Generate elements by child or children and append to parent elements.
	 * Root element info would be merged if has. The first argument may be an array
	 * if the root element with options.replace has not only one child.
	 *
	 * @param {object|array} target
	 * @param {object}       dest
	 * @param {object}       meta
	 */
	function compile(vm, target, dest, meta) {
	  var app = vm._app || {};
	
	  if (app.lastSignal === -1) {
	    return;
	  }
	
	  if (targetIsFragment(target)) {
	    compileFragment(vm, target, dest, meta);
	    return;
	  }
	  meta = meta || {};
	  if (targetIsContent(target)) {
	    console.debug('[JS Framework] compile "content" block by', target);
	    vm._content = (0, _domHelper.createBlock)(vm, dest);
	    return;
	  }
	
	  if (targetNeedCheckRepeat(target, meta)) {
	    console.debug('[JS Framework] compile "repeat" logic by', target);
	    if (dest.type === 'document') {
	      console.warn('[JS Framework] The root element does\'t support `repeat` directive!');
	    } else {
	      compileRepeat(vm, target, dest);
	    }
	    return;
	  }
	  if (targetNeedCheckShown(target, meta)) {
	    console.debug('[JS Framework] compile "if" logic by', target);
	    if (dest.type === 'document') {
	      console.warn('[JS Framework] The root element does\'t support `if` directive!');
	    } else {
	      compileShown(vm, target, dest, meta);
	    }
	    return;
	  }
	  var typeGetter = meta.type || target.type;
	  if (targetNeedCheckType(typeGetter, meta)) {
	    compileType(vm, target, dest, typeGetter, meta);
	    return;
	  }
	  var type = typeGetter;
	  var component = targetIsComposed(vm, target, type);
	  if (component) {
	    console.debug('[JS Framework] compile composed component by', target);
	    compileCustomComponent(vm, component, target, dest, type, meta);
	    return;
	  }
	  console.debug('[JS Framework] compile native component by', target);
	  compileNativeComponent(vm, target, dest, type);
	}
	
	/**
	 * Check if target is a fragment (an array).
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsFragment(target) {
	  return Array.isArray(target);
	}
	
	/**
	 * Check if target type is content/slot.
	 *
	 * @param  {object}  target
	 * @return {boolean}
	 */
	function targetIsContent(target) {
	  return target.type === 'content' || target.type === 'slot';
	}
	
	/**
	 * Check if target need to compile by a list.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckRepeat(target, meta) {
	  return !meta.hasOwnProperty('repeat') && target.repeat;
	}
	
	/**
	 * Check if target need to compile by a boolean value.
	 *
	 * @param  {object}  target
	 * @param  {object}  meta
	 * @return {boolean}
	 */
	function targetNeedCheckShown(target, meta) {
	  return !meta.hasOwnProperty('shown') && target.shown;
	}
	
	/**
	 * Check if target need to compile by a dynamic type.
	 *
	 * @param  {string|function} typeGetter
	 * @param  {object}          meta
	 * @return {boolean}
	 */
	function targetNeedCheckType(typeGetter, meta) {
	  return typeof typeGetter === 'function' && !meta.hasOwnProperty('type');
	}
	
	/**
	 * Check if this kind of component is composed.
	 *
	 * @param  {string}  type
	 * @return {boolean}
	 */
	function targetIsComposed(vm, target, type) {
	  var component = void 0;
	  if (vm._app && vm._app.customComponentMap) {
	    component = vm._app.customComponentMap[type];
	  }
	  if (vm._options && vm._options.components) {
	    component = vm._options.components[type];
	  }
	  if (target.component) {
	    component = component || {};
	  }
	  return component;
	}
	
	/**
	 * Compile a list of targets.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileFragment(vm, target, dest, meta) {
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  target.forEach(function (child) {
	    compile(vm, child, fragBlock, meta);
	  });
	}
	
	/**
	 * Compile a target with repeat directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 */
	function compileRepeat(vm, target, dest) {
	  var repeat = target.repeat;
	  var oldStyle = typeof repeat === 'function';
	  var getter = repeat.getter || repeat.expression || repeat;
	  if (typeof getter !== 'function') {
	    getter = function getter() {
	      return [];
	    };
	  }
	  var key = repeat.key || '$index';
	  var value = repeat.value || '$value';
	  var trackBy = repeat.trackBy || target.trackBy || target.attr && target.attr.trackBy;
	
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	  fragBlock.children = [];
	  fragBlock.data = [];
	  fragBlock.vms = [];
	
	  bindRepeat(vm, target, fragBlock, { getter: getter, key: key, value: value, trackBy: trackBy, oldStyle: oldStyle });
	}
	
	/**
	 * Compile a target with if directive.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {object} meta
	 */
	function compileShown(vm, target, dest, meta) {
	  var newMeta = { shown: true };
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  if (meta.repeat) {
	    newMeta.repeat = meta.repeat;
	  }
	
	  bindShown(vm, target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a target with dynamic component type.
	 *
	 * @param {object}   target
	 * @param {object}   dest
	 * @param {function} typeGetter
	 */
	function compileType(vm, target, dest, typeGetter, meta) {
	  var type = typeGetter.call(vm);
	  var newMeta = (0, _util.extend)({ type: type }, meta);
	  var fragBlock = (0, _domHelper.createBlock)(vm, dest);
	
	  if (dest.element && dest.children) {
	    dest.children.push(fragBlock);
	  }
	
	  (0, _directive.watch)(vm, typeGetter, function (value) {
	    var newMeta = (0, _util.extend)({ type: value }, meta);
	    (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    compile(vm, target, fragBlock, newMeta);
	  });
	
	  compile(vm, target, fragBlock, newMeta);
	}
	
	/**
	 * Compile a composed component.
	 *
	 * @param {object} target
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileCustomComponent(vm, component, target, dest, type, meta) {
	  var Ctor = vm.constructor;
	  var subVm = new Ctor(type, component, vm, dest, undefined, {
	    'hook:init': function hookInit() {
	      (0, _directive.setId)(vm, null, target.id, this);
	      // bind template earlier because of lifecycle issues
	      this._externalBinding = {
	        parent: vm,
	        template: target
	      };
	    },
	    'hook:created': function hookCreated() {
	      (0, _directive.bindSubVm)(vm, this, target, meta.repeat);
	    },
	    'hook:ready': function hookReady() {
	      if (this._content) {
	        compileChildren(vm, target, this._content);
	      }
	    }
	  });
	  (0, _directive.bindSubVmAfterInitialized)(vm, subVm, target);
	}
	
	/**
	 * Generate element from template and attach to the dest if needed.
	 * The time to attach depends on whether the mode status is node or tree.
	 *
	 * @param {object} template
	 * @param {object} dest
	 * @param {string} type
	 */
	function compileNativeComponent(vm, template, dest, type) {
	  (0, _directive.applyNaitveComponentOptions)(template);
	
	  var element = void 0;
	  if (dest.ref === '_documentElement') {
	    // if its parent is documentElement then it's a body
	    console.debug('[JS Framework] compile to create body for ' + type);
	    element = (0, _domHelper.createBody)(vm, type);
	  } else {
	    console.debug('[JS Framework] compile to create element for ' + type);
	    element = (0, _domHelper.createElement)(vm, type);
	  }
	
	  if (!vm._rootEl) {
	    vm._rootEl = element;
	    // bind event earlier because of lifecycle issues
	    var binding = vm._externalBinding || {};
	    var target = binding.template;
	    var parentVm = binding.parent;
	    if (target && target.events && parentVm && element) {
	      for (var _type in target.events) {
	        var handler = parentVm[target.events[_type]];
	        if (handler) {
	          element.addEvent(_type, (0, _util.bind)(handler, parentVm));
	        }
	      }
	    }
	  }
	
	  (0, _directive.bindElement)(vm, element, template);
	
	  if (template.attr && template.attr.append) {
	    // backward, append prop in attr
	    template.append = template.attr.append;
	  }
	
	  if (template.append) {
	    // give the append attribute for ios adaptation
	    element.attr = element.attr || {};
	    element.attr.append = template.append;
	  }
	
	  var treeMode = template.append === 'tree';
	  var app = vm._app || {};
	  if (app.lastSignal !== -1 && !treeMode) {
	    console.debug('[JS Framework] compile to append single node for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	  if (app.lastSignal !== -1) {
	    compileChildren(vm, template, element);
	  }
	  if (app.lastSignal !== -1 && treeMode) {
	    console.debug('[JS Framework] compile to append whole tree for', element);
	    app.lastSignal = (0, _domHelper.attachTarget)(vm, element, dest);
	  }
	}
	
	/**
	 * Set all children to a certain parent element.
	 *
	 * @param {object} template
	 * @param {object} dest
	 */
	function compileChildren(vm, template, dest) {
	  var app = vm._app || {};
	  var children = template.children;
	  if (children && children.length) {
	    children.every(function (child) {
	      compile(vm, child, dest);
	      return app.lastSignal !== -1;
	    });
	  }
	}
	
	/**
	 * Watch the list update and refresh the changes.
	 *
	 * @param {object} target
	 * @param {object} fragBlock {vms, data, children}
	 * @param {object} info      {getter, key, value, trackBy, oldStyle}
	 */
	function bindRepeat(vm, target, fragBlock, info) {
	  var vms = fragBlock.vms;
	  var children = fragBlock.children;
	  var getter = info.getter;
	  var trackBy = info.trackBy;
	  var oldStyle = info.oldStyle;
	
	  var keyName = info.key;
	  var valueName = info.value;
	
	  function compileItem(item, index, context) {
	    var mergedData = void 0;
	    if (oldStyle) {
	      mergedData = item;
	      if ((0, _util.isObject)(item)) {
	        mergedData[keyName] = index;
	        if (!mergedData.hasOwnProperty('INDEX')) {
	          Object.defineProperty(mergedData, 'INDEX', {
	            value: function value() {
	              console.warn('[JS Framework] "INDEX" in repeat is deprecated, ' + 'please use "$index" instead');
	            }
	          });
	        }
	      } else {
	        console.warn('[JS Framework] Each list item must be an object in old-style repeat, ' + 'please use `repeat={{v in list}}` instead.');
	        mergedData = {};
	        mergedData[keyName] = index;
	        mergedData[valueName] = item;
	      }
	    } else {
	      mergedData = {};
	      mergedData[keyName] = index;
	      mergedData[valueName] = item;
	    }
	    var newContext = mergeContext(context, mergedData);
	    vms.push(newContext);
	    compile(newContext, target, fragBlock, { repeat: item });
	  }
	
	  var list = watchBlock(vm, fragBlock, getter, 'repeat', function (data) {
	    console.debug('[JS Framework] the "repeat" item has changed', data);
	    if (!fragBlock) {
	      return;
	    }
	
	    var oldChildren = children.slice();
	    var oldVms = vms.slice();
	    var oldData = fragBlock.data.slice();
	    // 1. collect all new refs track by
	    var trackMap = {};
	    var reusedMap = {};
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      /* istanbul ignore if */
	      if (key == null || key === '') {
	        return;
	      }
	      trackMap[key] = item;
	    });
	
	    // 2. remove unused element foreach old item
	    var reusedList = [];
	    oldData.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      if (trackMap.hasOwnProperty(key)) {
	        reusedMap[key] = {
	          item: item, index: index, key: key,
	          target: oldChildren[index],
	          vm: oldVms[index]
	        };
	        reusedList.push(item);
	      } else {
	        (0, _domHelper.removeTarget)(vm, oldChildren[index]);
	      }
	    });
	
	    // 3. create new element foreach new item
	    children.length = 0;
	    vms.length = 0;
	    fragBlock.data = data.slice();
	    fragBlock.updateMark = fragBlock.start;
	
	    data.forEach(function (item, index) {
	      var key = trackBy ? item[trackBy] : oldStyle ? item[keyName] : index;
	      var reused = reusedMap[key];
	      if (reused) {
	        if (reused.item === reusedList[0]) {
	          reusedList.shift();
	        } else {
	          reusedList.$remove(reused.item);
	          (0, _domHelper.moveTarget)(vm, reused.target, fragBlock.updateMark, true);
	        }
	        children.push(reused.target);
	        vms.push(reused.vm);
	        if (oldStyle) {
	          reused.vm = item;
	        } else {
	          reused.vm[valueName] = item;
	        }
	        reused.vm[keyName] = index;
	        fragBlock.updateMark = reused.target;
	      } else {
	        compileItem(item, index, vm);
	      }
	    });
	
	    delete fragBlock.updateMark;
	  });
	
	  fragBlock.data = list.slice(0);
	  list.forEach(function (item, index) {
	    compileItem(item, index, vm);
	  });
	}
	
	/**
	 * Watch the display update and add/remove the element.
	 *
	 * @param  {object} target
	 * @param  {object} fragBlock
	 * @param  {object} context
	 */
	function bindShown(vm, target, fragBlock, meta) {
	  var display = watchBlock(vm, fragBlock, target.shown, 'shown', function (display) {
	    console.debug('[JS Framework] the "if" item was changed', display);
	
	    if (!fragBlock || !!fragBlock.display === !!display) {
	      return;
	    }
	    fragBlock.display = !!display;
	    if (display) {
	      compile(vm, target, fragBlock, meta);
	    } else {
	      (0, _domHelper.removeTarget)(vm, fragBlock, true);
	    }
	  });
	
	  fragBlock.display = !!display;
	  if (display) {
	    compile(vm, target, fragBlock, meta);
	  }
	}
	
	/**
	 * Watch calc value changes and append certain type action to differ.
	 * It is used for if or repeat data-binding generator.
	 *
	 * @param  {object}   fragBlock
	 * @param  {function} calc
	 * @param  {string}   type
	 * @param  {function} handler
	 * @return {any}      init value of calc
	 */
	function watchBlock(vm, fragBlock, calc, type, handler) {
	  var differ = vm && vm._app && vm._app.differ;
	  var config = {};
	  var depth = (fragBlock.element.depth || 0) + 1;
	
	  return (0, _directive.watch)(vm, calc, function (value) {
	    config.latestValue = value;
	    if (differ && !config.recorded) {
	      differ.append(type, depth, fragBlock.blockId, function () {
	        var latestValue = config.latestValue;
	        handler(latestValue);
	        config.recorded = false;
	        config.latestValue = undefined;
	      });
	    }
	    config.recorded = true;
	  });
	}
	
	/**
	 * Clone a context and merge certain data.
	 *
	 * @param  {object} mergedData
	 * @return {object}
	 */
	function mergeContext(context, mergedData) {
	  var newContext = Object.create(context);
	  newContext._data = mergedData;
	  (0, _state.initData)(newContext);
	  (0, _state.initComputed)(newContext);
	  newContext._realParent = context;
	  return newContext;
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                                                   * Directive Parser
	                                                                                                                                                                                                                                                   */
	
	exports.applyNaitveComponentOptions = applyNaitveComponentOptions;
	exports.bindElement = bindElement;
	exports.bindSubVm = bindSubVm;
	exports.bindSubVmAfterInitialized = bindSubVmAfterInitialized;
	exports.setId = setId;
	exports.watch = watch;
	
	var _util = __webpack_require__(86);
	
	var _watcher = __webpack_require__(88);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(95);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	
	var SETTERS = {
	  attr: 'setAttr',
	  style: 'setStyle',
	  event: 'addEvent'
	};
	
	/**
	 * apply the native component's options(specified by template.type)
	 * to the template
	 */
	function applyNaitveComponentOptions(template) {
	  var type = template.type;
	
	  var options = nativeComponentMap[type];
	
	  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	    for (var key in options) {
	      if (template[key] == null) {
	        template[key] = options[key];
	      } else if ((0, _util.typof)(template[key]) === 'object' && (0, _util.typof)(options[key]) === 'object') {
	        for (var subkey in options[key]) {
	          if (template[key][subkey] == null) {
	            template[key][subkey] = options[key][subkey];
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * bind all id, attr, classnames, style, events to an element
	 */
	function bindElement(vm, el, template) {
	  setId(vm, el, template.id, vm);
	  setAttr(vm, el, template.attr);
	  setClass(vm, el, template.classList);
	  setStyle(vm, el, template.style);
	  bindEvents(vm, el, template.events);
	}
	
	/**
	 * bind all props to sub vm and bind all style, events to the root element
	 * of the sub vm if it doesn't have a replaced multi-node fragment
	 */
	function bindSubVm(vm, subVm, template, repeatItem) {
	  subVm = subVm || {};
	  template = template || {};
	
	  var options = subVm._options || {};
	
	  // bind props
	  var props = options.props;
	
	  if (Array.isArray(props)) {
	    props = props.reduce(function (result, value) {
	      result[value] = true;
	      return result;
	    }, {});
	  }
	
	  mergeProps(repeatItem, props, vm, subVm);
	  mergeProps(template.attr, props, vm, subVm);
	}
	
	/**
	 * merge class and styles from vm to sub vm.
	 */
	function bindSubVmAfterInitialized(vm, subVm, template) {
	  mergeClassStyle(template.classList, vm, subVm);
	  mergeStyle(template.style, vm, subVm);
	}
	
	/**
	 * Bind props from vm to sub vm and watch their updates.
	 */
	function mergeProps(target, props, vm, subVm) {
	  if (!target) {
	    return;
	  }
	
	  var _loop = function _loop(key) {
	    if (!props || props[key]) {
	      var value = target[key];
	      if (typeof value === 'function') {
	        var returnValue = watch(vm, value, function (v) {
	          subVm[key] = v;
	        });
	        subVm[key] = returnValue;
	      } else {
	        subVm[key] = value;
	      }
	    }
	  };
	
	  for (var key in target) {
	    _loop(key);
	  }
	}
	
	/**
	 * Bind style from vm to sub vm and watch their updates.
	 */
	function mergeStyle(target, vm, subVm) {
	  var _loop2 = function _loop2(key) {
	    var value = target[key];
	    if (typeof value === 'function') {
	      var returnValue = watch(vm, value, function (v) {
	        if (subVm._rootEl) {
	          subVm._rootEl.setStyle(key, v);
	        }
	      });
	      subVm._rootEl.setStyle(key, returnValue);
	    } else {
	      if (subVm._rootEl) {
	        subVm._rootEl.setStyle(key, value);
	      }
	    }
	  };
	
	  for (var key in target) {
	    _loop2(key);
	  }
	}
	
	/**
	 * Bind class & style from vm to sub vm and watch their updates.
	 */
	function mergeClassStyle(target, vm, subVm) {
	  var css = vm._options && vm._options.style || {};
	
	  /* istanbul ignore if */
	  if (!subVm._rootEl) {
	    return;
	  }
	
	  if (typeof target === 'function') {
	    var _value = watch(vm, target, function (v) {
	      setClassStyle(subVm._rootEl, css, v);
	    });
	    setClassStyle(subVm._rootEl, css, _value);
	  } else if (target != null) {
	    setClassStyle(subVm._rootEl, css, target);
	  }
	}
	
	/**
	 * bind id to an element
	 * each id is unique in a whole vm
	 */
	function setId(vm, el, id, target) {
	  var map = Object.create(null);
	
	  Object.defineProperties(map, {
	    vm: {
	      value: target,
	      writable: false,
	      configurable: false
	    },
	    el: {
	      get: function get() {
	        return el || target._rootEl;
	      },
	      configurable: false
	    }
	  });
	
	  if (typeof id === 'function') {
	    var handler = id;
	    id = handler.call(vm);
	    if (id) {
	      vm._ids[id] = map;
	    }
	    watch(vm, handler, function (newId) {
	      if (newId) {
	        vm._ids[newId] = map;
	      }
	    });
	  } else if (id && typeof id === 'string') {
	    vm._ids[id] = map;
	  }
	}
	
	/**
	 * bind attr to an element
	 */
	function setAttr(vm, el, attr) {
	  bindDir(vm, el, 'attr', attr);
	}
	
	function setClassStyle(el, css, classList) {
	  var classStyle = {};
	  var length = classList.length;
	
	  for (var i = 0; i < length; i++) {
	    var style = css[classList[i]];
	    if (style) {
	      for (var key in style) {
	        classStyle[key] = style[key];
	      }
	    }
	  }
	  el.setClassStyle(classStyle);
	}
	
	/**
	 * bind classnames to an element
	 */
	function setClass(vm, el, classList) {
	  if (typeof classList !== 'function' && !Array.isArray(classList)) {
	    return;
	  }
	  if (Array.isArray(classList) && !classList.length) {
	    el.setClassStyle({});
	    return;
	  }
	
	  var style = vm._options && vm._options.style || {};
	  if (typeof classList === 'function') {
	    var _value2 = watch(vm, classList, function (v) {
	      setClassStyle(el, style, v);
	    });
	    setClassStyle(el, style, _value2);
	  } else {
	    setClassStyle(el, style, classList);
	  }
	}
	
	/**
	 * bind style to an element
	 */
	function setStyle(vm, el, style) {
	  bindDir(vm, el, 'style', style);
	}
	
	/**
	 * add an event type and handler to an element and generate a dom update
	 */
	function setEvent(vm, el, type, handler) {
	  el.addEvent(type, (0, _util.bind)(handler, vm));
	}
	
	/**
	 * add all events of an element
	 */
	function bindEvents(vm, el, events) {
	  if (!events) {
	    return;
	  }
	  var keys = Object.keys(events);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var handler = events[key];
	    if (typeof handler === 'string') {
	      handler = vm[handler];
	      /* istanbul ignore if */
	      if (!handler) {
	        console.debug('[JS Framework] The method "' + handler + '" is not defined.');
	      }
	    }
	    setEvent(vm, el, key, handler);
	  }
	}
	
	/**
	 * set a series of members as a kind of an element
	 * for example: style, attr, ...
	 * if the value is a function then bind the data changes
	 */
	function bindDir(vm, el, name, data) {
	  if (!data) {
	    return;
	  }
	  var keys = Object.keys(data);
	  var i = keys.length;
	  while (i--) {
	    var key = keys[i];
	    var _value3 = data[key];
	    if (typeof _value3 === 'function') {
	      bindKey(vm, el, name, key, _value3);
	    } else {
	      el[SETTERS[name]](key, _value3);
	    }
	  }
	}
	
	/**
	 * bind data changes to a certain key to a name series in an element
	 */
	function bindKey(vm, el, name, key, calc) {
	  var methodName = SETTERS[name];
	  // watch the calc, and returns a value by calc.call()
	  var value = watch(vm, calc, function (value) {
	    function handler() {
	      el[methodName](key, value);
	    }
	    var differ = vm && vm._app && vm._app.differ;
	    if (differ) {
	      differ.append('element', el.depth, el.ref, handler);
	    } else {
	      handler();
	    }
	  });
	
	  el[methodName](key, value);
	}
	
	/**
	 * watch a calc function and callback if the calc value changes
	 */
	function watch(vm, calc, callback) {
	  var watcher = new _watcher2.default(vm, calc, function (value, oldValue) {
	    /* istanbul ignore if */
	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && value === oldValue) {
	      return;
	    }
	    callback(value);
	  });
	
	  return watcher.value;
	}

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// @todo: It should be registered by native from `registerComponents()`.
	exports.default = {
	  nativeComponentMap: {
	    text: true,
	    image: true,
	    container: true,
	    slider: {
	      type: 'slider',
	      append: 'tree'
	    },
	    cell: {
	      type: 'cell',
	      append: 'tree'
	    }
	  }
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.createBody = createBody;
	exports.createElement = createElement;
	exports.createBlock = createBlock;
	exports.attachTarget = attachTarget;
	exports.moveTarget = moveTarget;
	exports.removeTarget = removeTarget;
	/**
	 * @fileOverview Document & Element Helpers.
	 *
	 * required:
	 * Document#: createElement, createComment, getRef
	 * Element#: appendChild, insertBefore, removeChild, nextSibling
	 */
	
	/**
	 * Create a body by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createBody(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createBody(type);
	}
	
	/**
	 * Create an element by type
	 * Using this._app.doc
	 *
	 * @param  {string} type
	 */
	function createElement(vm, type) {
	  var doc = vm._app.doc;
	  return doc.createElement(type);
	}
	
	/**
	 * Create and return a frag block for an element.
	 * The frag block has a starter, ender and the element itself.
	 *
	 * @param  {object} element
	 */
	function createBlock(vm, element) {
	  var start = createBlockStart(vm);
	  var end = createBlockEnd(vm);
	  var blockId = lastestBlockId++;
	  if (element.element) {
	    var updateMark = element.updateMark;
	    if (updateMark) {
	      if (updateMark.element) {
	        updateMark = updateMark.end;
	      }
	      element.element.insertAfter(end, updateMark);
	      element.element.insertAfter(start, updateMark);
	      element.updateMark = end;
	    } else {
	      element.element.insertBefore(start, element.end);
	      element.element.insertBefore(end, element.end);
	    }
	    element = element.element;
	  } else {
	    element.appendChild(start);
	    element.appendChild(end);
	  }
	  return { start: start, end: end, element: element, blockId: blockId };
	}
	
	var lastestBlockId = 1;
	
	/**
	 * Create and return a block starter.
	 * Using this._app.doc
	 */
	function createBlockStart(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('start');
	  return anchor;
	}
	
	/**
	 * Create and return a block ender.
	 * Using this._app.doc
	 */
	function createBlockEnd(vm) {
	  var doc = vm._app.doc;
	  var anchor = doc.createComment('end');
	  return anchor;
	}
	
	/**
	 * Attach target to a certain dest using appendChild by default.
	 * If the dest is a frag block then insert before the ender.
	 * If the target is a frag block then attach the starter and ender in order.
	 *
	 * @param  {object} target
	 * @param  {object} dest
	 */
	function attachTarget(vm, target, dest) {
	  if (dest.element) {
	    var before = dest.end;
	    var after = dest.updateMark;
	    // push new target for watch list update later
	    if (dest.children) {
	      dest.children.push(target);
	    }
	    // for check repeat case
	    if (after) {
	      var signal = moveTarget(vm, target, after);
	      dest.updateMark = target.element ? target.end : target;
	      return signal;
	    } else if (target.element) {
	      dest.element.insertBefore(target.start, before);
	      dest.element.insertBefore(target.end, before);
	    } else {
	      return dest.element.insertBefore(target, before);
	    }
	  } else {
	    if (target.element) {
	      dest.appendChild(target.start);
	      dest.appendChild(target.end);
	    } else {
	      return dest.appendChild(target);
	    }
	  }
	}
	
	/**
	 * Move target before a certain element. The target maybe block or element.
	 *
	 * @param  {object} target
	 * @param  {object} before
	 */
	function moveTarget(vm, target, after) {
	  if (target.element) {
	    return moveBlock(target, after);
	  }
	  return moveElement(target, after);
	}
	
	/**
	 * Move element before a certain element.
	 *
	 * @param  {object} element
	 * @param  {object} before
	 */
	function moveElement(element, after) {
	  var parent = after.parentNode;
	  if (parent) {
	    return parent.insertAfter(element, after);
	  }
	}
	
	/**
	 * Move all elements of the block before a certain element.
	 *
	 * @param  {object} fragBlock
	 * @param  {object} before
	 */
	function moveBlock(fragBlock, after) {
	  var parent = after.parentNode;
	
	  if (parent) {
	    var _ret = function () {
	      var el = fragBlock.start;
	      var signal = void 0;
	      var group = [el];
	
	      while (el && el !== fragBlock.end) {
	        el = el.nextSibling;
	        group.push(el);
	      }
	
	      var temp = after;
	      group.every(function (el) {
	        signal = parent.insertAfter(el, temp);
	        temp = el;
	        return signal !== -1;
	      });
	
	      return {
	        v: signal
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	
	/**
	 * Remove target from DOM tree.
	 * If the target is a frag block then call _removeBlock
	 *
	 * @param  {object} target
	 */
	function removeTarget(vm, target) {
	  var preserveBlock = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	  if (target.element) {
	    removeBlock(target, preserveBlock);
	  } else {
	    removeElement(target);
	  }
	}
	
	/**
	 * Remove a certain element.
	 * Using this._app.doc
	 *
	 * @param  {object} target
	 */
	function removeElement(target) {
	  var parent = target.parentNode;
	
	  if (parent) {
	    parent.removeChild(target);
	  }
	}
	
	/**
	 * Remove a frag block.
	 * The second param decides whether the block self should be removed too.
	 *
	 * @param  {object}  fragBlock
	 * @param  {Boolean} preserveBlock=false
	 */
	function removeBlock(fragBlock) {
	  var preserveBlock = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	  var result = [];
	  var el = fragBlock.start.nextSibling;
	
	  while (el && el !== fragBlock.end) {
	    result.push(el);
	    el = el.nextSibling;
	  }
	
	  if (!preserveBlock) {
	    removeElement(fragBlock.start);
	  }
	  result.forEach(function (el) {
	    removeElement(el);
	  });
	  if (!preserveBlock) {
	    removeElement(fragBlock.end);
	  }
	}

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$emit = $emit;
	exports.$dispatch = $dispatch;
	exports.$broadcast = $broadcast;
	exports.$on = $on;
	exports.$off = $off;
	exports.initEvents = initEvents;
	exports.mixinEvents = mixinEvents;
	/**
	 * @fileOverview
	 * Everything about component event which includes event object, event listener,
	 * event emitter and lifecycle hooks.
	 */
	
	/**
	 * Event object definition. An event object has `type`, `timestamp` and
	 * `detail` from which a component emit. The event object could be dispatched to
	 * parents or broadcasted to children except `this.stop()` is called.
	 * @param {string} type
	 * @param {any}    detail
	 */
	function Evt(type, detail) {
	  if (detail instanceof Evt) {
	    return detail;
	  }
	
	  this.timestamp = Date.now();
	  this.detail = detail;
	  this.type = type;
	
	  var shouldStop = false;
	
	  /**
	   * stop dispatch and broadcast
	   */
	  this.stop = function () {
	    shouldStop = true;
	  };
	
	  /**
	   * check if it can't be dispatched or broadcasted
	   */
	  this.hasStopped = function () {
	    return shouldStop;
	  };
	}
	
	/**
	 * Emit an event but not broadcast down or dispatch up.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $emit(type, detail) {
	  var _this = this;
	
	  var events = this._vmEvents;
	  var handlerList = events[type];
	  if (handlerList) {
	    (function () {
	      var evt = new Evt(type, detail);
	      handlerList.forEach(function (handler) {
	        handler.call(_this, evt);
	      });
	    })();
	  }
	}
	
	/**
	 * Emit an event and dispatch it up.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $dispatch(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
	    this._parent.$dispatch(type, evt);
	  }
	}
	
	/**
	 * Emit an event and broadcast it down.
	 * @param  {string} type
	 * @param  {any}    detail
	 */
	function $broadcast(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._childrenVms) {
	    this._childrenVms.forEach(function (subVm) {
	      subVm.$broadcast(type, evt);
	    });
	  }
	}
	
	/**
	 * Add event listener.
	 * @param  {string}   type
	 * @param  {function} handler
	 */
	function $on(type, handler) {
	  if (!type || typeof handler !== 'function') {
	    return;
	  }
	  var events = this._vmEvents;
	  var handlerList = events[type] || [];
	  handlerList.push(handler);
	  events[type] = handlerList;
	
	  // fixed old version lifecycle design
	  if (type === 'hook:ready' && this._ready) {
	    this.$emit('hook:ready');
	  }
	}
	
	/**
	 * Remove event listener.
	 * @param  {string}   type
	 * @param  {function} handler
	 */
	function $off(type, handler) {
	  if (!type) {
	    return;
	  }
	  var events = this._vmEvents;
	  if (!handler) {
	    delete events[type];
	    return;
	  }
	  var handlerList = events[type];
	  if (!handlerList) {
	    return;
	  }
	  handlerList.$remove(handler);
	}
	
	var LIFE_CYCLE_TYPES = ['init', 'created', 'ready'];
	
	/**
	 * Init events:
	 * 1. listen `events` in component options & `externalEvents`.
	 * 2. bind lifecycle hooks.
	 * @param  {Vm}     vm
	 * @param  {object} externalEvents
	 */
	function initEvents(vm, externalEvents) {
	  var options = vm._options || {};
	  var events = options.events || {};
	  for (var type1 in events) {
	    vm.$on(type1, events[type1]);
	  }
	  for (var type2 in externalEvents) {
	    vm.$on(type2, externalEvents[type2]);
	  }
	  LIFE_CYCLE_TYPES.forEach(function (type) {
	    vm.$on('hook:' + type, options[type]);
	  });
	}
	
	/**
	 * Bind event related methods to ViewModel instance.
	 * @param  {Vm} vm
	 */
	function mixinEvents(vm) {
	  vm.$emit = $emit;
	  vm.$dispatch = $dispatch;
	  vm.$broadcast = $broadcast;
	  vm.$on = $on;
	  vm.$off = $off;
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bootstrap = __webpack_require__(99);
	
	Object.defineProperty(exports, 'bootstrap', {
	  enumerable: true,
	  get: function get() {
	    return _bootstrap.bootstrap;
	  }
	});
	
	var _define = __webpack_require__(102);
	
	Object.defineProperty(exports, 'clearCommonModules', {
	  enumerable: true,
	  get: function get() {
	    return _define.clearCommonModules;
	  }
	});
	Object.defineProperty(exports, 'defineFn', {
	  enumerable: true,
	  get: function get() {
	    return _define.defineFn;
	  }
	});
	Object.defineProperty(exports, 'register', {
	  enumerable: true,
	  get: function get() {
	    return _define.register;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = bootstrap;
	
	var _semver = __webpack_require__(100);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _vm = __webpack_require__(85);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(101);
	
	var downgrade = _interopRequireWildcard(_downgrade);
	
	var _register = __webpack_require__(82);
	
	var _util = __webpack_require__(86);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * bootstrap app from a certain custom component with config & data
	 */
	function bootstrap(app, name, config, data) {
	  console.debug('[JS Framework] bootstrap for ' + name);
	
	  // 1. validate custom component name first
	  var cleanName = void 0;
	  if ((0, _util.isWeexComponent)(name)) {
	    cleanName = (0, _util.removeWeexPrefix)(name);
	  } else if ((0, _util.isNpmModule)(name)) {
	    cleanName = (0, _util.removeJSSurfix)(name);
	    // check if define by old 'define' method
	    /* istanbul ignore if */
	    if (!(0, _register.requireCustomComponent)(app, cleanName)) {
	      return new Error('It\'s not a component: ' + name);
	    }
	  } else {
	    return new Error('Wrong component name: ' + name);
	  }
	
	  // 2. validate configuration
	  config = (0, _util.isPlainObject)(config) ? config : {};
	  // 2.1 transformer version check
	  if (typeof config.transformerVersion === 'string' && typeof global.transformerVersion === 'string' && !_semver2.default.satisfies(config.transformerVersion, global.transformerVersion)) {
	    return new Error('JS Bundle version: ' + config.transformerVersion + ' ' + ('not compatible with ' + global.transformerVersion));
	  }
	  // 2.2 downgrade version check
	  var downgradeResult = downgrade.check(config.downgrade);
	  /* istanbul ignore if */
	  if (downgradeResult.isDowngrade) {
	    app.callTasks([{
	      module: 'instanceWrap',
	      method: 'error',
	      args: [downgradeResult.errorType, downgradeResult.code, downgradeResult.errorMessage]
	    }]);
	    return new Error('Downgrade[' + downgradeResult.code + ']: ' + downgradeResult.errorMessage);
	  }
	
	  // 3. create a new Vm with custom component name and data
	  app.vm = new _vm2.default(cleanName, null, { _app: app }, null, data);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports = module.exports = SemVer;
	
	// The debug function is excluded entirely from the minified version.
	/* nomin */var debug;
	/* nomin */if ((typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' &&
	/* nomin */process.env &&
	/* nomin */process.env.NODE_DEBUG &&
	/* nomin *//\bsemver\b/i.test(process.env.NODE_DEBUG))
	  /* nomin */debug = function debug() {
	    /* nomin */var args = Array.prototype.slice.call(arguments, 0);
	    /* nomin */args.unshift('SEMVER');
	    /* nomin */console.log.apply(console, args);
	    /* nomin */
	  };
	  /* nomin */else
	  /* nomin */debug = function debug() {};
	
	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	exports.SEMVER_SPEC_VERSION = '2.0.0';
	
	var MAX_LENGTH = 256;
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	
	// The actual regexps go on exports.re
	var re = exports.re = [];
	var src = exports.src = [];
	var R = 0;
	
	// The following Regular Expressions can be used for tokenizing,
	// validating, and parsing SemVer version strings.
	
	// ## Numeric Identifier
	// A single `0`, or a non-zero digit followed by zero or more digits.
	
	var NUMERICIDENTIFIER = R++;
	src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
	var NUMERICIDENTIFIERLOOSE = R++;
	src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';
	
	// ## Non-numeric Identifier
	// Zero or more digits, followed by a letter or hyphen, and then zero or
	// more letters, digits, or hyphens.
	
	var NONNUMERICIDENTIFIER = R++;
	src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
	
	// ## Main Version
	// Three dot-separated numeric identifiers.
	
	var MAINVERSION = R++;
	src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';
	
	var MAINVERSIONLOOSE = R++;
	src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')';
	
	// ## Pre-release Version Identifier
	// A numeric identifier, or a non-numeric identifier.
	
	var PRERELEASEIDENTIFIER = R++;
	src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	var PRERELEASEIDENTIFIERLOOSE = R++;
	src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')';
	
	// ## Pre-release Version
	// Hyphen, followed by one or more dot-separated pre-release version
	// identifiers.
	
	var PRERELEASE = R++;
	src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
	
	var PRERELEASELOOSE = R++;
	src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';
	
	// ## Build Metadata Identifier
	// Any combination of digits, letters, or hyphens.
	
	var BUILDIDENTIFIER = R++;
	src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';
	
	// ## Build Metadata
	// Plus sign, followed by one or more period-separated build metadata
	// identifiers.
	
	var BUILD = R++;
	src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';
	
	// ## Full Version String
	// A main version, followed optionally by a pre-release version and
	// build metadata.
	
	// Note that the only major, minor, patch, and pre-release sections of
	// the version string are capturing groups.  The build metadata is not a
	// capturing group, because it should not ever be used in version
	// comparison.
	
	var FULL = R++;
	var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
	
	src[FULL] = '^' + FULLPLAIN + '$';
	
	// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
	// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
	// common in the npm registry.
	var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
	
	var LOOSE = R++;
	src[LOOSE] = '^' + LOOSEPLAIN + '$';
	
	var GTLT = R++;
	src[GTLT] = '((?:<|>)?=?)';
	
	// Something like "2.*" or "1.2.x".
	// Note that "x.x" is a valid xRange identifer, meaning "any version"
	// Only the first item is strictly required.
	var XRANGEIDENTIFIERLOOSE = R++;
	src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
	var XRANGEIDENTIFIER = R++;
	src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
	
	var XRANGEPLAIN = R++;
	src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';
	
	var XRANGEPLAINLOOSE = R++;
	src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';
	
	var XRANGE = R++;
	src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
	var XRANGELOOSE = R++;
	src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';
	
	// Tilde ranges.
	// Meaning is "reasonably at or greater than"
	var LONETILDE = R++;
	src[LONETILDE] = '(?:~>?)';
	
	var TILDETRIM = R++;
	src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
	re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
	var tildeTrimReplace = '$1~';
	
	var TILDE = R++;
	src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
	var TILDELOOSE = R++;
	src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';
	
	// Caret ranges.
	// Meaning is "at least and backwards compatible with"
	var LONECARET = R++;
	src[LONECARET] = '(?:\\^)';
	
	var CARETTRIM = R++;
	src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
	re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
	var caretTrimReplace = '$1^';
	
	var CARET = R++;
	src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
	var CARETLOOSE = R++;
	src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';
	
	// A simple gt/lt/eq thing, or just "" to indicate "any version"
	var COMPARATORLOOSE = R++;
	src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
	var COMPARATOR = R++;
	src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';
	
	// An expression to strip any whitespace between the gtlt and the thing
	// it modifies, so that `> 1.2.3` ==> `>1.2.3`
	var COMPARATORTRIM = R++;
	src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';
	
	// this one has to use the /g flag
	re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
	var comparatorTrimReplace = '$1$2$3';
	
	// Something like `1.2.3 - 1.2.4`
	// Note that these all use the loose form, because they'll be
	// checked against either the strict or loose comparator form
	// later.
	var HYPHENRANGE = R++;
	src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';
	
	var HYPHENRANGELOOSE = R++;
	src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$';
	
	// Star ranges basically just allow anything at all.
	var STAR = R++;
	src[STAR] = '(<|>)?=?\\s*\\*';
	
	// Compile to actual regexp objects.
	// All are flag-free, unless they were created above with a flag.
	for (var i = 0; i < R; i++) {
	  debug(i, src[i]);
	  if (!re[i]) re[i] = new RegExp(src[i]);
	}
	
	exports.parse = parse;
	function parse(version, loose) {
	  if (version instanceof SemVer) return version;
	
	  if (typeof version !== 'string') return null;
	
	  if (version.length > MAX_LENGTH) return null;
	
	  var r = loose ? re[LOOSE] : re[FULL];
	  if (!r.test(version)) return null;
	
	  try {
	    return new SemVer(version, loose);
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.valid = valid;
	function valid(version, loose) {
	  var v = parse(version, loose);
	  return v ? v.version : null;
	}
	
	exports.clean = clean;
	function clean(version, loose) {
	  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
	  return s ? s.version : null;
	}
	
	exports.SemVer = SemVer;
	
	function SemVer(version, loose) {
	  if (version instanceof SemVer) {
	    if (version.loose === loose) return version;else version = version.version;
	  } else if (typeof version !== 'string') {
	    throw new TypeError('Invalid Version: ' + version);
	  }
	
	  if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
	
	  if (!(this instanceof SemVer)) return new SemVer(version, loose);
	
	  debug('SemVer', version, loose);
	  this.loose = loose;
	  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
	
	  if (!m) throw new TypeError('Invalid Version: ' + version);
	
	  this.raw = version;
	
	  // these are actually numbers
	  this.major = +m[1];
	  this.minor = +m[2];
	  this.patch = +m[3];
	
	  if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');
	
	  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');
	
	  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version');
	
	  // numberify any prerelease numeric ids
	  if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
	    if (/^[0-9]+$/.test(id)) {
	      var num = +id;
	      if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
	    }
	    return id;
	  });
	
	  this.build = m[5] ? m[5].split('.') : [];
	  this.format();
	}
	
	SemVer.prototype.format = function () {
	  this.version = this.major + '.' + this.minor + '.' + this.patch;
	  if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
	  return this.version;
	};
	
	SemVer.prototype.toString = function () {
	  return this.version;
	};
	
	SemVer.prototype.compare = function (other) {
	  debug('SemVer.compare', this.version, this.loose, other);
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  return this.compareMain(other) || this.comparePre(other);
	};
	
	SemVer.prototype.compareMain = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
	};
	
	SemVer.prototype.comparePre = function (other) {
	  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
	
	  // NOT having a prerelease is > having one
	  if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;
	
	  var i = 0;
	  do {
	    var a = this.prerelease[i];
	    var b = other.prerelease[i];
	    debug('prerelease compare', i, a, b);
	    if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
	  } while (++i);
	};
	
	// preminor will bump the version up to the next minor release, and immediately
	// down to pre-release. premajor and prepatch work the same way.
	SemVer.prototype.inc = function (release, identifier) {
	  switch (release) {
	    case 'premajor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor = 0;
	      this.major++;
	      this.inc('pre', identifier);
	      break;
	    case 'preminor':
	      this.prerelease.length = 0;
	      this.patch = 0;
	      this.minor++;
	      this.inc('pre', identifier);
	      break;
	    case 'prepatch':
	      // If this is already a prerelease, it will bump to the next version
	      // drop any prereleases that might already exist, since they are not
	      // relevant at this point.
	      this.prerelease.length = 0;
	      this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	    // If the input is a non-prerelease version, this acts the same as
	    // prepatch.
	    case 'prerelease':
	      if (this.prerelease.length === 0) this.inc('patch', identifier);
	      this.inc('pre', identifier);
	      break;
	
	    case 'major':
	      // If this is a pre-major version, bump up to the same major version.
	      // Otherwise increment major.
	      // 1.0.0-5 bumps to 1.0.0
	      // 1.1.0 bumps to 2.0.0
	      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
	      this.minor = 0;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'minor':
	      // If this is a pre-minor version, bump up to the same minor version.
	      // Otherwise increment minor.
	      // 1.2.0-5 bumps to 1.2.0
	      // 1.2.1 bumps to 1.3.0
	      if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
	      this.patch = 0;
	      this.prerelease = [];
	      break;
	    case 'patch':
	      // If this is not a pre-release version, it will increment the patch.
	      // If it is a pre-release it will bump up to the same patch version.
	      // 1.2.0-5 patches to 1.2.0
	      // 1.2.0 patches to 1.2.1
	      if (this.prerelease.length === 0) this.patch++;
	      this.prerelease = [];
	      break;
	    // This probably shouldn't be used publicly.
	    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
	    case 'pre':
	      if (this.prerelease.length === 0) this.prerelease = [0];else {
	        var i = this.prerelease.length;
	        while (--i >= 0) {
	          if (typeof this.prerelease[i] === 'number') {
	            this.prerelease[i]++;
	            i = -2;
	          }
	        }
	        if (i === -1) // didn't increment anything
	          this.prerelease.push(0);
	      }
	      if (identifier) {
	        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	        if (this.prerelease[0] === identifier) {
	          if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
	        } else this.prerelease = [identifier, 0];
	      }
	      break;
	
	    default:
	      throw new Error('invalid increment argument: ' + release);
	  }
	  this.format();
	  this.raw = this.version;
	  return this;
	};
	
	exports.inc = inc;
	function inc(version, release, loose, identifier) {
	  if (typeof loose === 'string') {
	    identifier = loose;
	    loose = undefined;
	  }
	
	  try {
	    return new SemVer(version, loose).inc(release, identifier).version;
	  } catch (er) {
	    return null;
	  }
	}
	
	exports.diff = diff;
	function diff(version1, version2) {
	  if (eq(version1, version2)) {
	    return null;
	  } else {
	    var v1 = parse(version1);
	    var v2 = parse(version2);
	    if (v1.prerelease.length || v2.prerelease.length) {
	      for (var key in v1) {
	        if (key === 'major' || key === 'minor' || key === 'patch') {
	          if (v1[key] !== v2[key]) {
	            return 'pre' + key;
	          }
	        }
	      }
	      return 'prerelease';
	    }
	    for (var key in v1) {
	      if (key === 'major' || key === 'minor' || key === 'patch') {
	        if (v1[key] !== v2[key]) {
	          return key;
	        }
	      }
	    }
	  }
	}
	
	exports.compareIdentifiers = compareIdentifiers;
	
	var numeric = /^[0-9]+$/;
	function compareIdentifiers(a, b) {
	  var anum = numeric.test(a);
	  var bnum = numeric.test(b);
	
	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }
	
	  return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
	}
	
	exports.rcompareIdentifiers = rcompareIdentifiers;
	function rcompareIdentifiers(a, b) {
	  return compareIdentifiers(b, a);
	}
	
	exports.major = major;
	function major(a, loose) {
	  return new SemVer(a, loose).major;
	}
	
	exports.minor = minor;
	function minor(a, loose) {
	  return new SemVer(a, loose).minor;
	}
	
	exports.patch = patch;
	function patch(a, loose) {
	  return new SemVer(a, loose).patch;
	}
	
	exports.compare = compare;
	function compare(a, b, loose) {
	  return new SemVer(a, loose).compare(b);
	}
	
	exports.compareLoose = compareLoose;
	function compareLoose(a, b) {
	  return compare(a, b, true);
	}
	
	exports.rcompare = rcompare;
	function rcompare(a, b, loose) {
	  return compare(b, a, loose);
	}
	
	exports.sort = sort;
	function sort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.compare(a, b, loose);
	  });
	}
	
	exports.rsort = rsort;
	function rsort(list, loose) {
	  return list.sort(function (a, b) {
	    return exports.rcompare(a, b, loose);
	  });
	}
	
	exports.gt = gt;
	function gt(a, b, loose) {
	  return compare(a, b, loose) > 0;
	}
	
	exports.lt = lt;
	function lt(a, b, loose) {
	  return compare(a, b, loose) < 0;
	}
	
	exports.eq = eq;
	function eq(a, b, loose) {
	  return compare(a, b, loose) === 0;
	}
	
	exports.neq = neq;
	function neq(a, b, loose) {
	  return compare(a, b, loose) !== 0;
	}
	
	exports.gte = gte;
	function gte(a, b, loose) {
	  return compare(a, b, loose) >= 0;
	}
	
	exports.lte = lte;
	function lte(a, b, loose) {
	  return compare(a, b, loose) <= 0;
	}
	
	exports.cmp = cmp;
	function cmp(a, op, b, loose) {
	  var ret;
	  switch (op) {
	    case '===':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a === b;
	      break;
	    case '!==':
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') a = a.version;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') b = b.version;
	      ret = a !== b;
	      break;
	    case '':case '=':case '==':
	      ret = eq(a, b, loose);break;
	    case '!=':
	      ret = neq(a, b, loose);break;
	    case '>':
	      ret = gt(a, b, loose);break;
	    case '>=':
	      ret = gte(a, b, loose);break;
	    case '<':
	      ret = lt(a, b, loose);break;
	    case '<=':
	      ret = lte(a, b, loose);break;
	    default:
	      throw new TypeError('Invalid operator: ' + op);
	  }
	  return ret;
	}
	
	exports.Comparator = Comparator;
	function Comparator(comp, loose) {
	  if (comp instanceof Comparator) {
	    if (comp.loose === loose) return comp;else comp = comp.value;
	  }
	
	  if (!(this instanceof Comparator)) return new Comparator(comp, loose);
	
	  debug('comparator', comp, loose);
	  this.loose = loose;
	  this.parse(comp);
	
	  if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;
	
	  debug('comp', this);
	}
	
	var ANY = {};
	Comparator.prototype.parse = function (comp) {
	  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var m = comp.match(r);
	
	  if (!m) throw new TypeError('Invalid comparator: ' + comp);
	
	  this.operator = m[1];
	  if (this.operator === '=') this.operator = '';
	
	  // if it literally is just '>' or '' then allow anything.
	  if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
	};
	
	Comparator.prototype.toString = function () {
	  return this.value;
	};
	
	Comparator.prototype.test = function (version) {
	  debug('Comparator.test', version, this.loose);
	
	  if (this.semver === ANY) return true;
	
	  if (typeof version === 'string') version = new SemVer(version, this.loose);
	
	  return cmp(version, this.operator, this.semver, this.loose);
	};
	
	exports.Range = Range;
	function Range(range, loose) {
	  if (range instanceof Range && range.loose === loose) return range;
	
	  if (!(this instanceof Range)) return new Range(range, loose);
	
	  this.loose = loose;
	
	  // First, split based on boolean or ||
	  this.raw = range;
	  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
	    return this.parseRange(range.trim());
	  }, this).filter(function (c) {
	    // throw out any that are not relevant for whatever reason
	    return c.length;
	  });
	
	  if (!this.set.length) {
	    throw new TypeError('Invalid SemVer Range: ' + range);
	  }
	
	  this.format();
	}
	
	Range.prototype.format = function () {
	  this.range = this.set.map(function (comps) {
	    return comps.join(' ').trim();
	  }).join('||').trim();
	  return this.range;
	};
	
	Range.prototype.toString = function () {
	  return this.range;
	};
	
	Range.prototype.parseRange = function (range) {
	  var loose = this.loose;
	  range = range.trim();
	  debug('range', range, loose);
	  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
	  range = range.replace(hr, hyphenReplace);
	  debug('hyphen replace', range);
	  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
	  debug('comparator trim', range, re[COMPARATORTRIM]);
	
	  // `~ 1.2.3` => `~1.2.3`
	  range = range.replace(re[TILDETRIM], tildeTrimReplace);
	
	  // `^ 1.2.3` => `^1.2.3`
	  range = range.replace(re[CARETTRIM], caretTrimReplace);
	
	  // normalize spaces
	  range = range.split(/\s+/).join(' ');
	
	  // At this point, the range is completely trimmed and
	  // ready to be split into comparators.
	
	  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
	  var set = range.split(' ').map(function (comp) {
	    return parseComparator(comp, loose);
	  }).join(' ').split(/\s+/);
	  if (this.loose) {
	    // in loose mode, throw out any that are not valid comparators
	    set = set.filter(function (comp) {
	      return !!comp.match(compRe);
	    });
	  }
	  set = set.map(function (comp) {
	    return new Comparator(comp, loose);
	  });
	
	  return set;
	};
	
	// Mostly just for testing and legacy API reasons
	exports.toComparators = toComparators;
	function toComparators(range, loose) {
	  return new Range(range, loose).set.map(function (comp) {
	    return comp.map(function (c) {
	      return c.value;
	    }).join(' ').trim().split(' ');
	  });
	}
	
	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	function parseComparator(comp, loose) {
	  debug('comp', comp);
	  comp = replaceCarets(comp, loose);
	  debug('caret', comp);
	  comp = replaceTildes(comp, loose);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, loose);
	  debug('xrange', comp);
	  comp = replaceStars(comp, loose);
	  debug('stars', comp);
	  return comp;
	}
	
	function isX(id) {
	  return !id || id.toLowerCase() === 'x' || id === '*';
	}
	
	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
	function replaceTildes(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceTilde(comp, loose);
	  }).join(' ');
	}
	
	function replaceTilde(comp, loose) {
	  var r = loose ? re[TILDELOOSE] : re[TILDE];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('tilde', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p))
	      // ~1.2 == >=1.2.0 <1.3.0
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
	      debug('replaceTilde pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	    } else
	      // ~1.2.3 == >=1.2.3 <1.3.0
	      ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	
	    debug('tilde return', ret);
	    return ret;
	  });
	}
	
	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
	// ^1.2.3 --> >=1.2.3 <2.0.0
	// ^1.2.0 --> >=1.2.0 <2.0.0
	function replaceCarets(comp, loose) {
	  return comp.trim().split(/\s+/).map(function (comp) {
	    return replaceCaret(comp, loose);
	  }).join(' ');
	}
	
	function replaceCaret(comp, loose) {
	  debug('caret', comp, loose);
	  var r = loose ? re[CARETLOOSE] : re[CARET];
	  return comp.replace(r, function (_, M, m, p, pr) {
	    debug('caret', comp, _, M, m, p, pr);
	    var ret;
	
	    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
	      if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (pr.charAt(0) !== '-') pr = '-' + pr;
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
	      } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
	    }
	
	    debug('caret return', ret);
	    return ret;
	  });
	}
	
	function replaceXRanges(comp, loose) {
	  debug('replaceXRanges', comp, loose);
	  return comp.split(/\s+/).map(function (comp) {
	    return replaceXRange(comp, loose);
	  }).join(' ');
	}
	
	function replaceXRange(comp, loose) {
	  comp = comp.trim();
	  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
	  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    var xM = isX(M);
	    var xm = xM || isX(m);
	    var xp = xm || isX(p);
	    var anyX = xp;
	
	    if (gtlt === '=' && anyX) gtlt = '';
	
	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // replace X with 0
	      if (xm) m = 0;
	      if (xp) p = 0;
	
	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        // >1.2.3 => >= 1.2.4
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else if (xp) {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm) M = +M + 1;else m = +m + 1;
	      }
	
	      ret = gtlt + M + '.' + m + '.' + p;
	    } else if (xm) {
	      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
	    } else if (xp) {
	      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
	    }
	
	    debug('xRange return', ret);
	
	    return ret;
	  });
	}
	
	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	function replaceStars(comp, loose) {
	  debug('replaceStars', comp, loose);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp.trim().replace(re[STAR], '');
	}
	
	// This function is passed to string.replace(re[HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0
	function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
	
	  if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;
	
	  if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;
	
	  return (from + ' ' + to).trim();
	}
	
	// if ANY of the sets match ALL of its comparators, then pass
	Range.prototype.test = function (version) {
	  if (!version) return false;
	
	  if (typeof version === 'string') version = new SemVer(version, this.loose);
	
	  for (var i = 0; i < this.set.length; i++) {
	    if (testSet(this.set[i], version)) return true;
	  }
	  return false;
	};
	
	function testSet(set, version) {
	  for (var i = 0; i < set.length; i++) {
	    if (!set[i].test(version)) return false;
	  }
	
	  if (version.prerelease.length) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (var i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === ANY) continue;
	
	      if (set[i].semver.prerelease.length > 0) {
	        var allowed = set[i].semver;
	        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
	      }
	    }
	
	    // Version has a -pre, but it's not one of the ones we like.
	    return false;
	  }
	
	  return true;
	}
	
	exports.satisfies = satisfies;
	function satisfies(version, range, loose) {
	  try {
	    range = new Range(range, loose);
	  } catch (er) {
	    return false;
	  }
	  return range.test(version);
	}
	
	exports.maxSatisfying = maxSatisfying;
	function maxSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return rcompare(a, b, loose);
	  })[0] || null;
	}
	
	exports.minSatisfying = minSatisfying;
	function minSatisfying(versions, range, loose) {
	  return versions.filter(function (version) {
	    return satisfies(version, range, loose);
	  }).sort(function (a, b) {
	    return compare(a, b, loose);
	  })[0] || null;
	}
	
	exports.validRange = validRange;
	function validRange(range, loose) {
	  try {
	    // Return '*' instead of '' so that truthiness works.
	    // This will throw if it's invalid anyway
	    return new Range(range, loose).range || '*';
	  } catch (er) {
	    return null;
	  }
	}
	
	// Determine if version is less than all the versions possible in the range
	exports.ltr = ltr;
	function ltr(version, range, loose) {
	  return outside(version, range, '<', loose);
	}
	
	// Determine if version is greater than all the versions possible in the range.
	exports.gtr = gtr;
	function gtr(version, range, loose) {
	  return outside(version, range, '>', loose);
	}
	
	exports.outside = outside;
	function outside(version, range, hilo, loose) {
	  version = new SemVer(version, loose);
	  range = new Range(range, loose);
	
	  var gtfn, ltefn, ltfn, comp, ecomp;
	  switch (hilo) {
	    case '>':
	      gtfn = gt;
	      ltefn = lte;
	      ltfn = lt;
	      comp = '>';
	      ecomp = '>=';
	      break;
	    case '<':
	      gtfn = lt;
	      ltefn = gte;
	      ltfn = gt;
	      comp = '<';
	      ecomp = '<=';
	      break;
	    default:
	      throw new TypeError('Must provide a hilo val of "<" or ">"');
	  }
	
	  // If it satisifes the range it is not outside
	  if (satisfies(version, range, loose)) {
	    return false;
	  }
	
	  // From now on, variable terms are as if we're in "gtr" mode.
	  // but note that everything is flipped for the "ltr" function.
	
	  for (var i = 0; i < range.set.length; ++i) {
	    var comparators = range.set[i];
	
	    var high = null;
	    var low = null;
	
	    comparators.forEach(function (comparator) {
	      if (comparator.semver === ANY) {
	        comparator = new Comparator('>=0.0.0');
	      }
	      high = high || comparator;
	      low = low || comparator;
	      if (gtfn(comparator.semver, high.semver, loose)) {
	        high = comparator;
	      } else if (ltfn(comparator.semver, low.semver, loose)) {
	        low = comparator;
	      }
	    });
	
	    // If the edge version comparator has a operator then our version
	    // isn't outside it
	    if (high.operator === comp || high.operator === ecomp) {
	      return false;
	    }
	
	    // If the lowest version comparator has an operator and our version
	    // is less than it then it isn't higher than the range
	    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
	      return false;
	    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	exports.prerelease = prerelease;
	function prerelease(version, loose) {
	  var parsed = parse(version, loose);
	  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(89)))

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(100);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(86);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Normalize a version string.
	 * @param  {String} Version. ie: 1, 1.0, 1.0.0
	 * @return {String} Version
	 */
	function normalizeVersion(v) {
	  var isValid = _semver2.default.valid(v);
	  if (isValid) {
	    return v;
	  }
	
	  v = typeof v === 'string' ? v : '';
	  var split = v.split('.');
	  var i = 0;
	  var result = [];
	
	  while (i < 3) {
	    var s = typeof split[i] === 'string' && split[i] ? split[i] : '0';
	    result.push(s);
	    i++;
	  }
	
	  return result.join('.');
	}
	
	/**
	 * Get informations from different error key. Like:
	 * - code
	 * - errorMessage
	 * - errorType
	 * - isDowngrade
	 * @param  {string} key
	 * @param  {string} val
	 * @param  {string} criteria
	 * @return {object}
	 */
	function getError(key, val, criteria) {
	  var result = {
	    isDowngrade: true,
	    errorType: 1,
	    code: 1000
	  };
	  var getMsg = function getMsg(key, val, criteria) {
	    return 'Downgrade[' + key + '] :: deviceInfo ' + val + ' matched criteria ' + criteria;
	  };
	  var _key = key.toLowerCase();
	
	  result.errorMessage = getMsg(key, val, criteria);
	
	  if (_key.indexOf('osversion') >= 0) {
	    result.code = 1001;
	  } else if (_key.indexOf('appversion') >= 0) {
	    result.code = 1002;
	  } else if (_key.indexOf('weexversion') >= 0) {
	    result.code = 1003;
	  } else if (_key.indexOf('devicemodel') >= 0) {
	    result.code = 1004;
	  }
	
	  return result;
	}
	
	/**
	 * WEEX framework input(deviceInfo)
	 * {
	 *   platform: 'iOS' or 'android'
	 *   osVersion: '1.0.0' or '1.0' or '1'
	 *   appVersion: '1.0.0' or '1.0' or '1'
	 *   weexVersion: '1.0.0' or '1.0' or '1'
	 *   dDeviceModel: 'MODEL_NAME'
	 * }
	 *
	 * downgrade config(config)
	 * {
	 *   ios: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   },
	 *   android: {
	 *     osVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     appVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     weexVersion: '>1.0.0' or '>=1.0.0' or '<1.0.0' or '<=1.0.0' or '1.0.0'
	 *     deviceModel: ['modelA', 'modelB', ...]
	 *   }
	 * }
	 *
	 *
	 * @param  {object} deviceInfo Weex SDK framework input
	 * @param  {object} config     user input
	 * @return {Object}            { isDowngrade: true/false, errorMessage... }
	 */
	function check(config, deviceInfo) {
	  deviceInfo = deviceInfo || global.WXEnvironment;
	  deviceInfo = (0, _util.isPlainObject)(deviceInfo) ? deviceInfo : {};
	
	  var result = {
	    isDowngrade: false // defautl is pass
	  };
	
	  if ((0, _util.typof)(config) === 'function') {
	    var customDowngrade = config.call(this, deviceInfo, {
	      semver: _semver2.default,
	      normalizeVersion: this.normalizeVersion
	    });
	
	    customDowngrade = !!customDowngrade;
	
	    result = customDowngrade ? this.getError('custom', '', 'custom params') : result;
	  } else {
	    config = (0, _util.isPlainObject)(config) ? config : {};
	
	    var platform = deviceInfo.platform || 'unknow';
	    var dPlatform = platform.toLowerCase();
	    var cObj = config[dPlatform] || {};
	
	    for (var i in deviceInfo) {
	      var key = i;
	      var keyLower = key.toLowerCase();
	      var val = deviceInfo[i];
	      var isVersion = keyLower.indexOf('version') >= 0;
	      var isDeviceModel = keyLower.indexOf('devicemodel') >= 0;
	      var criteria = cObj[i];
	
	      if (criteria && isVersion) {
	        var c = this.normalizeVersion(criteria);
	        var d = this.normalizeVersion(deviceInfo[i]);
	
	        if (_semver2.default.satisfies(d, c)) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      } else if (isDeviceModel) {
	        var _criteria = (0, _util.typof)(criteria) === 'array' ? criteria : [criteria];
	        if (_criteria.indexOf(val) >= 0) {
	          result = this.getError(key, val, criteria);
	          break;
	        }
	      }
	    }
	  }
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defineFn = undefined;
	exports.clearCommonModules = clearCommonModules;
	exports.register = register;
	
	var _util = __webpack_require__(86);
	
	var _register = __webpack_require__(82);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * @deprecated
	 *
	 * common modules are shared to all instances
	 * it's very dangerous
	 */
	var commonModules = {};
	
	/**
	 * @deprecated
	 */
	function clearCommonModules() {
	  commonModules = {};
	}
	
	/**
	 * define(name, factory) for primary usage
	 * or
	 * define(name, deps, factory) for compatibility
	 * Notice: DO NOT use function define() {},
	 * it will cause error after builded by webpack
	 */
	var defineFn = exports.defineFn = function defineFn(app, name) {
	  console.debug('[JS Framework] define a component ' + name);
	
	  // adapt args:
	  // 1. name, deps[], factory()
	  // 2. name, factory()
	  // 3. name, definition{}
	  var factory = void 0,
	      definition = void 0;
	  if ((arguments.length <= 2 ? 0 : arguments.length - 2) > 1) {
	    definition = arguments.length <= 3 ? undefined : arguments[3];
	  } else {
	    definition = arguments.length <= 2 ? undefined : arguments[2];
	  }
	  if (typeof definition === 'function') {
	    factory = definition;
	    definition = null;
	  }
	
	  // resolve definition from factory
	  if (factory) {
	    var r = function r(name) {
	      if ((0, _util.isWeexComponent)(name)) {
	        var cleanName = (0, _util.removeWeexPrefix)(name);
	        return (0, _register.requireCustomComponent)(app, cleanName);
	      }
	      if ((0, _util.isWeexModule)(name)) {
	        var _cleanName = (0, _util.removeWeexPrefix)(name);
	        return app.requireModule(_cleanName);
	      }
	      if ((0, _util.isNormalModule)(name) || (0, _util.isNpmModule)(name)) {
	        var _cleanName2 = (0, _util.removeJSSurfix)(name);
	        return commonModules[_cleanName2];
	      }
	    };
	    var m = { exports: {} };
	    factory(r, m.exports, m);
	    definition = m.exports;
	  }
	
	  // apply definition
	  if ((0, _util.isWeexComponent)(name)) {
	    var cleanName = (0, _util.removeWeexPrefix)(name);
	    (0, _register.registerCustomComponent)(app, cleanName, definition);
	  } else if ((0, _util.isWeexModule)(name)) {
	    var _cleanName3 = (0, _util.removeWeexPrefix)(name);
	    (0, _register.initModules)(_defineProperty({}, _cleanName3, definition));
	  } else if ((0, _util.isNormalModule)(name)) {
	    var _cleanName4 = (0, _util.removeJSSurfix)(name);
	    commonModules[_cleanName4] = definition;
	  } else if ((0, _util.isNpmModule)(name)) {
	    var _cleanName5 = (0, _util.removeJSSurfix)(name);
	    if (definition.template || definition.style || definition.methods) {
	      // downgrade to old define method (define('componentName', factory))
	      // the exports contain one key of template, style or methods
	      // but it has risk!!!
	      (0, _register.registerCustomComponent)(app, _cleanName5, definition);
	    } else {
	      commonModules[_cleanName5] = definition;
	    }
	  }
	};
	
	/**
	 * @deprecated
	 */
	function register(app, type, options) {
	  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
	  (0, _register.registerCustomComponent)(app, type, options);
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.refresh = refresh;
	exports.destroy = destroy;
	exports.getRootElement = getRootElement;
	exports.fireEvent = fireEvent;
	exports.callback = callback;
	exports.updateActions = updateActions;
	exports.callTasks = callTasks;
	
	var _util = __webpack_require__(86);
	
	var _config = __webpack_require__(95);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - fire event
	                                                                                                                                                                                                     * - callback
	                                                                                                                                                                                                     * - refresh
	                                                                                                                                                                                                     * - destroy
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	
	/**
	 * Refresh an app with data to its root component options.
	 * @param  {object} app
	 * @param  {any}    data
	 */
	function refresh(app, data) {
	  console.debug('[JS Framework] Refresh with', data, 'in instance[' + app.id + ']');
	  var vm = app.vm;
	  if (vm && data) {
	    app.doc.close();
	    if (typeof vm.refreshData === 'function') {
	      vm.refreshData(data);
	    } else {
	      (0, _util.extend)(vm, data);
	    }
	    updateActions(app);
	    app.doc.listener.refreshFinish();
	    app.doc.open();
	    return;
	  }
	  return new Error('invalid data "' + data + '"');
	}
	
	/**
	 * Destroy an app.
	 * @param  {object} app
	 */
	function destroy(app) {
	  console.debug('[JS Framework] Destory an instance(' + app.id + ')');
	
	  app.id = '';
	  app.options = null;
	  app.blocks = null;
	  app.vm = null;
	  app.doc.destroy();
	  app.doc = null;
	  app.customComponentMap = null;
	  app.callbacks = null;
	}
	
	/**
	 * Get a JSON object to describe the document body.
	 * @param  {object} app
	 * @return {object}
	 */
	function getRootElement(app) {
	  var doc = app.doc || {};
	  var body = doc.body || {};
	  return body.toJSON ? body.toJSON() : {};
	}
	
	/**
	 * Fire an event from renderer. The event has type, an event object and an
	 * element ref. If the event comes with some virtual-DOM changes, it should
	 * have one more parameter to describe the changes.
	 * @param  {object} app
	 * @param  {string} ref
	 * @param  {type}   type
	 * @param  {object} e
	 * @param  {object} domChanges
	 */
	function fireEvent(app, ref, type, e, domChanges) {
	  console.debug('[JS Framework] Fire a "' + type + '" event on an element(' + ref + ') in instance(' + app.id + ')');
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return app.fireEvent(ref, type, e) !== false;
	    });
	    return;
	  }
	  var el = app.doc.getRef(ref);
	  if (el) {
	    app.doc.close();
	    var result = app.doc.fireEvent(el, type, e, domChanges);
	    updateActions(app);
	    app.doc.listener.updateFinish();
	    app.doc.open();
	    return result;
	  }
	  return new Error('invalid element reference "' + ref + '"');
	}
	
	/**
	 * Make a callback for a certain app.
	 * @param  {object}   app
	 * @param  {number}   callbackId
	 * @param  {any}      data
	 * @param  {boolean}  ifKeepAlive
	 */
	function callback(app, callbackId, data, ifKeepAlive) {
	  console.debug('[JS Framework] Invoke a callback(' + callbackId + ') with', data, 'in instance(' + app.id + ')');
	  var callback = app.callbacks[callbackId];
	  if (typeof callback === 'function') {
	    app.doc.close();
	    callback(data);
	    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	      app.callbacks[callbackId] = undefined;
	    }
	    updateActions(app);
	    app.doc.listener.updateFinish();
	    app.doc.open();
	    return;
	  }
	  return new Error('invalid callback id "' + callbackId + '"');
	}
	
	/**
	 * Collect all virtual-DOM mutations together and send them to renderer.
	 * @param  {object} app
	 */
	function updateActions(app) {
	  app.differ.flush();
	  var tasks = [];
	  if (app.doc && app.doc.listener && app.doc.listener.updates.length) {
	    tasks.push.apply(tasks, _toConsumableArray(app.doc.listener.updates));
	    app.doc.listener.updates = [];
	  }
	  if (tasks.length) {
	    return callTasks(app, tasks);
	  }
	}
	
	/**
	 * Call all tasks from an app to renderer (native).
	 * @param  {object} app
	 * @param  {array}  tasks
	 */
	function callTasks(app, tasks) {
	  if ((0, _util.typof)(tasks) !== 'array') {
	    tasks = [tasks];
	  }
	
	  tasks.forEach(function (task) {
	    task.args = task.args.map(function (arg) {
	      return normalize(arg, app);
	    });
	  });
	
	  return _config2.default.sendTasks(app.id, tasks, '-1');
	}
	
	/**
	 * Normalize a value. Specially, if the value is a function, then generate a function id
	 * and save it to `app.callbacks`, at last return the function id.
	 * @param  {any}        v
	 * @param  {object}     app
	 * @return {primitive}
	 */
	function normalize(v, app) {
	  var type = (0, _util.typof)(v);
	
	  switch (type) {
	    case 'undefined':
	    case 'null':
	      return '';
	    case 'regexp':
	      return v.toString();
	    case 'date':
	      return v.toISOString();
	    case 'number':
	    case 'string':
	    case 'boolean':
	    case 'array':
	    case 'object':
	      if (v instanceof _config2.default.Element) {
	        return v.ref;
	      }
	      return v;
	    case 'function':
	      app.callbacks[++app.uid] = v;
	      return app.uid.toString();
	    default:
	      return JSON.stringify(v);
	  }
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = App;
	
	var _differ = __webpack_require__(105);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _config = __webpack_require__(95);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * App constructor for Weex framework.
	 * @param {string} id
	 * @param {object} options
	 */
	/**
	 * @fileOverview
	 * Weex App constructor & definition
	 */
	
	function App(id, options) {
	  this.id = id;
	  this.options = options || {};
	  this.vm = null;
	  this.customComponentMap = {};
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(id, this.options.bundleUrl, null, _config2.default.Listener);
	  this.differ = new _differ2.default(id);
	  this.uid = 0;
	}

/***/ },
/* 105 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Differ = function () {
	  function Differ(id) {
	    _classCallCheck(this, Differ);
	
	    this.id = id;
	    this.map = [];
	    this.hooks = [];
	  }
	
	  _createClass(Differ, [{
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return this.map.length === 0;
	    }
	  }, {
	    key: 'append',
	    value: function append(type, depth, ref, handler) {
	      var _this = this;
	
	      if (!this.hasTimer) {
	        this.hasTimer = true;
	        setTimeout(function () {
	          _this.hasTimer = false;
	          _this.flush(true);
	        }, 0);
	      }
	      var map = this.map;
	      if (!map[depth]) {
	        map[depth] = {};
	      }
	      var group = map[depth];
	      if (!group[type]) {
	        group[type] = {};
	      }
	      if (type === 'element') {
	        if (!group[type][ref]) {
	          group[type][ref] = [];
	        }
	        group[type][ref].push(handler);
	      } else {
	        group[type][ref] = handler;
	      }
	    }
	  }, {
	    key: 'flush',
	    value: function flush(isTimeout) {
	      var map = this.map.slice();
	      this.map.length = 0;
	      map.forEach(function (group) {
	        callTypeMap(group, 'repeat');
	        callTypeMap(group, 'shown');
	        callTypeList(group, 'element');
	      });
	
	      var hooks = this.hooks.slice();
	      this.hooks.length = 0;
	      hooks.forEach(function (fn) {
	        fn();
	      });
	
	      if (!this.isEmpty()) {
	        this.flush();
	      }
	    }
	  }, {
	    key: 'then',
	    value: function then(fn) {
	      this.hooks.push(fn);
	    }
	  }]);
	
	  return Differ;
	}();
	
	exports.default = Differ;
	
	
	function callTypeMap(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    map[ref]();
	  }
	}
	
	function callTypeList(group, type) {
	  var map = group[type];
	  for (var ref in map) {
	    var list = map[ref];
	    list.forEach(function (handler) {
	      handler();
	    });
	  }
	}

/***/ },
/* 106 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var instanceMap = exports.instanceMap = {};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	
	var _config = __webpack_require__(95);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _ctrl = __webpack_require__(83);
	
	var _map = __webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Init config informations for Weex framework
	 * @param  {object} cfg
	 */
	function init(cfg) {
	  _config2.default.Document = cfg.Document;
	  _config2.default.Element = cfg.Element;
	  _config2.default.Comment = cfg.Comment;
	  _config2.default.sendTasks = cfg.sendTasks;
	  _config2.default.Listener = cfg.Listener;
	}
	
	/**
	 * Refresh a Weex instance with data.
	 *
	 * @param  {string} id
	 * @param  {object} data
	 */
	function refreshInstance(id, data) {
	  var instance = _map.instanceMap[id];
	  var result = void 0;
	  if (instance) {
	    result = (0, _ctrl.refresh)(instance, data);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}
	
	/**
	 * Destroy a Weex instance.
	 * @param  {string} id
	 */
	function destroyInstance(id) {
	  var instance = _map.instanceMap[id];
	  if (!instance) {
	    return new Error('invalid instance id "' + id + '"');
	  }
	  (0, _ctrl.destroy)(instance);
	  delete _map.instanceMap[id];
	  return _map.instanceMap;
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	
	var _vm = __webpack_require__(85);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _config = __webpack_require__(95);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _register = __webpack_require__(82);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	/**
	 * Register the name of each native component.
	 * @param  {array} components array of name
	 */
	
	function registerComponents(components) {
	  if (Array.isArray(components)) {
	    components.forEach(function register(name) {
	      /* istanbul ignore if */
	      if (!name) {
	        return;
	      }
	      if (typeof name === 'string') {
	        nativeComponentMap[name] = true;
	      } else if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object' && typeof name.type === 'string') {
	        nativeComponentMap[name.type] = name;
	      }
	    });
	  }
	}
	
	/**
	 * Register the name and methods of each module.
	 * @param  {object} modules a object of modules
	 */
	function registerModules(modules) {
	  if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
	    (0, _register.initModules)(modules);
	  }
	}
	
	/**
	 * Register the name and methods of each api.
	 * @param  {object} apis a object of apis
	 */
	function registerMethods(methods) {
	  if ((typeof methods === 'undefined' ? 'undefined' : _typeof(methods)) === 'object') {
	    (0, _register.initMethods)(_vm2.default, methods);
	  }
	}
	
	// @todo: Hack for this framework only. Will be re-designed or removed later.
	global.registerMethods = registerMethods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.receiveTasks = receiveTasks;
	
	var _map = __webpack_require__(106);
	
	var _ctrl = __webpack_require__(83);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var jsHandlers = {
	  fireEvent: function fireEvent(id) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    return _ctrl.fireEvent.apply(undefined, [_map.instanceMap[id]].concat(args));
	  },
	  callback: function callback(id) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }
	
	    return _ctrl.callback.apply(undefined, [_map.instanceMap[id]].concat(args));
	  }
	};
	
	/**
	 * Accept calls from native (event or callback).
	 *
	 * @param  {string} id
	 * @param  {array} tasks list with `method` and `args`
	 */
	function receiveTasks(id, tasks) {
	  var instance = _map.instanceMap[id];
	  if (instance && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(id);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return new Error('invalid instance id "' + id + '" or tasks');
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRoot = getRoot;
	
	var _map = __webpack_require__(106);
	
	var _ctrl = __webpack_require__(83);
	
	/**
	 * Get a whole element tree of an instance for debugging.
	 * @param  {string} id
	 * @return {object} a virtual dom tree
	 */
	function getRoot(id) {
	  var instance = _map.instanceMap[id];
	  var result = void 0;
	  if (instance) {
	    result = (0, _ctrl.getRootElement)(instance);
	  } else {
	    result = new Error('invalid instance id "' + id + '"');
	  }
	  return result;
	}

/***/ },
/* 111 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = init;
	var frameworks = void 0;
	
	var versionRegExp = /^\/\/ *(\{[^\}]*\}) *\r?\n/;
	
	/**
	 * Detect a JS Bundle code and make sure which framework it's based to. Each JS
	 * Bundle should make sure that it starts with a line of JSON comment and is
	 * more that one line.
	 * @param  {string} code
	 * @return {object}
	 */
	function checkVersion(code) {
	  var info = void 0;
	  var result = versionRegExp.exec(code);
	  if (result) {
	    try {
	      info = JSON.parse(result[1]);
	    } catch (e) {}
	  }
	  return info;
	}
	
	var instanceMap = {};
	
	/**
	 * Check which framework a certain JS Bundle code based to. And create instance
	 * by this framework.
	 * @param {string} id
	 * @param {string} code
	 * @param {object} config
	 * @param {object} data
	 */
	function createInstance(id, code, config, data) {
	  var info = instanceMap[id];
	  if (!info) {
	    info = checkVersion(code) || {};
	    if (!frameworks[info.framework]) {
	      info.framework = 'Weex';
	    }
	    instanceMap[id] = info;
	    config = config || {};
	    config.bundleVersion = info.version;
	    console.debug('[JS Framework] create an ' + info.framework + '@' + config.bundleVersion + ' instance from ' + config.bundleVersion);
	    return frameworks[info.framework].createInstance(id, code, config, data);
	  }
	  return new Error('invalid instance id "' + id + '"');
	}
	
	var methods = {
	  createInstance: createInstance
	};
	
	/**
	 * Register methods which init each frameworks.
	 * @param {string} methodName
	 */
	function genInit(methodName) {
	  methods[methodName] = function () {
	    for (var name in frameworks) {
	      var framework = frameworks[name];
	      if (framework && framework[methodName]) {
	        framework[methodName].apply(framework, arguments);
	      }
	    }
	  };
	}
	
	/**
	 * Register methods which will be called for each instance.
	 * @param {string} methodName
	 */
	function genInstance(methodName) {
	  methods[methodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && frameworks[info.framework]) {
	      var _frameworks$info$fram;
	
	      return (_frameworks$info$fram = frameworks[info.framework])[methodName].apply(_frameworks$info$fram, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	/**
	 * Adapt some legacy method(s) which will be called for each instance. These
	 * methods should be deprecated and removed later.
	 * @param {string} methodName
	 * @param {string} nativeMethodName
	 */
	function adaptInstance(methodName, nativeMethodName) {
	  methods[nativeMethodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && frameworks[info.framework]) {
	      var _frameworks$info$fram2;
	
	      return (_frameworks$info$fram2 = frameworks[info.framework])[methodName].apply(_frameworks$info$fram2, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	function init(config) {
	  frameworks = config.frameworks || {};
	
	  // Init each framework by `init` method and `config` which contains three
	  // virtual-DOM Class: `Document`, `Element` & `Comment`, and a JS bridge method:
	  // `sendTasks(...args)`.
	  for (var name in frameworks) {
	    var framework = frameworks[name];
	    framework.init(config);
	  }
	
	  // @todo: The method `registerMethods` will be re-designed or removed later.
	  ;['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit);['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);
	
	  adaptInstance('receiveTasks', 'callJS');
	
	  return methods;
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = {
		"name": "weex",
		"version": "0.4.0",
		"description": "A framework for building Mobile cross-platform UI",
		"license": "Apache-2.0",
		"repository": {
			"type": "git",
			"url": "git@github.com:alibaba/weex.git"
		},
		"homepage": "http://alibaba.github.io/weex/",
		"bugs": {
			"url": "https://github.com/alibaba/weex/issues"
		},
		"private": "true",
		"keywords": [
			"weex",
			"hybrid",
			"webcomponent",
			"appframework",
			"mvvm",
			"javascript",
			"webkit",
			"v8",
			"jscore",
			"html5",
			"android",
			"ios",
			"yunos"
		],
		"engines": {
			"node": ">=4"
		},
		"scripts": {
			"postinstall": "bash ./bin/install-hooks.sh",
			"build:config": "node build/config.frameworks.js",
			"build:browser": "webpack --config build/webpack.browser.config.js",
			"build:native": "webpack --config build/webpack.native.config.js",
			"build:examples": "webpack --config build/webpack.examples.config.js",
			"build:test": "webpack --config build/webpack.test.config.js",
			"dist:browser": "npm run build:browser && bash ./bin/dist-browser.sh",
			"dist": "npm run dist:browser",
			"dev:browser": "webpack --watch --config build/webpack.browser.config.js",
			"dev:native": "webpack --watch --config build/webpack.native.config.js",
			"dev:examples": "webpack --watch --config build/webpack.examples.config.js",
			"dev:test": "webpack --watch --config build/webpack.test.config.js",
			"build": "npm run build:native && npm run build:browser && npm run build:examples && npm run build:test",
			"lint": "eslint html5",
			"test:unit": "mocha --compilers js:babel-core/register html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:cover": "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha -- --reporter dot html5/test/unit/*/*.js html5/test/unit/*/*/*.js",
			"test:e2e": "npm run build:browser && node html5/test/e2e/runner.js",
			"test": "npm run build:config && npm run lint && npm run test:cover && npm run test:e2e",
			"serve": "serve ./ -p 12580",
			"clean:examples": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mexamples\\033[0m\" && rm -vrf examples/build/*",
			"clean:test": "echo \"\\033[36;1m[Clean]\\033[0m \\033[33mtest\\033[0m\" && rm -vrf test/build/*",
			"clean": "npm run clean:examples && npm run clean:test",
			"copy:js": "cp -vf ./dist/native.js ./android/sdk/assets/main.js",
			"copy:examples": "rm -rf ./android/playground/app/src/main/assets/* && cp -vrf ./examples/build/* ./android/playground/app/src/main/assets/",
			"copy:sdcard": "npm run copy:js && adb push ./android/sdk/assets/main.js /sdcard/weex/",
			"copy": "npm run copy:js && npm run copy:examples"
		},
		"subversion": {
			"browser": "0.3.0",
			"framework": "0.15.5",
			"transformer": ">=0.1.5 <0.4"
		},
		"dependencies": {
			"animationjs": "^0.1.5",
			"core-js": "^2.4.0",
			"cubicbezier": "^0.1.1",
			"envd": "^0.1.1",
			"httpurl": "^0.1.1",
			"lazyimg": "^0.1.2",
			"modals": "^0.1.5",
			"scroll-to": "0.0.2",
			"semver": "^5.1.0",
			"weex-components": "^0.1.3",
			"weex-rx-framework": "^0.0.9",
			"weex-x": "^0.1.0"
		},
		"devDependencies": {
			"babel-cli": "~6.4.5",
			"babel-loader": "^6.2.5",
			"babel-plugin-transform-runtime": "^6.12.0",
			"babel-preset-es2015": "^6.14.0",
			"babel-preset-stage-2": "^6.13.0",
			"babel-runtime": "^6.11.6",
			"chai": "^3.5.0",
			"chromedriver": "^2.21.2",
			"cross-spawn": "^4.0.0",
			"css-loader": "^0.23.1",
			"eslint": "^2.11.1",
			"eslint-plugin-html": "^1.5.2",
			"http-server": "^0.9.0",
			"isparta": "^4.0.0",
			"istanbul": "^0.4.3",
			"json-loader": "^0.5.4",
			"mocha": "^2.5.3",
			"nightwatch": "^0.9.4",
			"phantomjs-prebuilt": "^2.1.7",
			"selenium-server": "2.53.1",
			"serve": "^1.4.0",
			"sinon": "^1.17.4",
			"sinon-chai": "^2.8.0",
			"style-loader": "^0.13.1",
			"uglify-js": "^2.6.4",
			"webpack": "^1.13.1",
			"weex-loader": "^0.3.0-alpha"
		}
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.$ = $;
	exports.$el = $el;
	exports.$vm = $vm;
	exports.$renderThen = $renderThen;
	exports.$scrollTo = $scrollTo;
	exports.$transition = $transition;
	exports.$getConfig = $getConfig;
	exports.$sendHttp = $sendHttp;
	exports.$openURL = $openURL;
	exports.$setTitle = $setTitle;
	exports.$call = $call;
	
	var _util = __webpack_require__(86);
	
	/**
	 * ==========================================================
	 * common
	 * ==========================================================
	 */
	
	/**
	 * @deprecated use $vm instead
	 * find the vm by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $(id) {
	  console.warn('[JS Framework] Vm#$ is deprecated, please use Vm#$vm instead');
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}
	
	/**
	 * find the element by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Element}
	 */
	/**
	 * @fileOverview The api for invoking with "$" prefix
	 */
	function $el(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.el;
	  }
	}
	
	/**
	 * find the vm of the custom component by id
	 * Note: there is only one id in whole component
	 * @param  {string} id
	 * @return {Vm}
	 */
	function $vm(id) {
	  var info = this._ids[id];
	  if (info) {
	    return info.vm;
	  }
	}
	
	/**
	 * Fire when differ rendering finished
	 *
	 * @param  {Function} fn
	 */
	function $renderThen(fn) {
	  var app = this._app;
	  var differ = app.differ;
	  return differ.then(function () {
	    fn();
	  });
	}
	
	/**
	 * scroll an element specified by id into view,
	 * moreover specify a number of offset optionally
	 * @param  {string} id
	 * @param  {number} offset
	 */
	function $scrollTo(id, offset) {
	  console.warn('[JS Framework] Vm#$scrollTo is deprecated, ' + 'please use "require(\'@weex-module/dom\')' + '.scrollTo(el, options)" instead');
	  var el = this.$el(id);
	  if (el) {
	    var dom = this._app.requireModule('dom');
	    dom.scrollToElement(el.ref, { offset: offset });
	  }
	}
	
	/**
	 * perform transition animation on an element specified by id
	 * @param  {string}   id
	 * @param  {object}   options
	 * @param  {object}   options.styles
	 * @param  {object}   options.duration(ms)
	 * @param  {object}   [options.timingFunction]
	 * @param  {object}   [options.delay=0(ms)]
	 * @param  {Function} callback
	 */
	function $transition(id, options, callback) {
	  var _this = this;
	
	  var el = this.$el(id);
	  if (el && options && options.styles) {
	    var animation = this._app.requireModule('animation');
	    animation.transition(el.ref, options, function () {
	      _this._setStyle(el, options.styles);
	      callback && callback.apply(undefined, arguments);
	    });
	  }
	}
	
	/**
	 * get some config
	 * @return {object} some config for app instance
	 * @property {string} bundleUrl
	 * @property {boolean} debug
	 * @property {object} env
	 * @property {string} env.weexVersion(ex. 1.0.0)
	 * @property {string} env.appName(ex. TB/TM)
	 * @property {string} env.appVersion(ex. 5.0.0)
	 * @property {string} env.platform(ex. iOS/Android)
	 * @property {string} env.osVersion(ex. 7.0.0)
	 * @property {string} env.deviceModel **native only**
	 * @property {number} env.[deviceWidth=750]
	 * @property {number} env.deviceHeight
	 */
	function $getConfig(callback) {
	  var config = (0, _util.extend)({
	    env: global.WXEnvironment || {}
	  }, this._app.options);
	  if ((0, _util.typof)(callback) === 'function') {
	    console.warn('[JS Framework] the callback of Vm#$getConfig(callback) is deprecated, ' + 'this api now can directly RETURN config info.');
	    callback(config);
	  }
	  return config;
	}
	
	/**
	 * @deprecated
	 * request network via http protocol
	 * @param  {object}   params
	 * @param  {Function} callback
	 */
	function $sendHttp(params, callback) {
	  console.warn('[JS Framework] Vm#$sendHttp is deprecated, ' + 'please use "require(\'@weex-module/stream\')' + '.sendHttp(params, callback)" instead');
	  var stream = this._app.requireModule('stream');
	  stream.sendHttp(params, callback);
	}
	
	/**
	 * @deprecated
	 * open a url
	 * @param  {string} url
	 */
	function $openURL(url) {
	  console.warn('[JS Framework] Vm#$openURL is deprecated, ' + 'please use "require(\'@weex-module/event\')' + '.openURL(url)" instead');
	  var event = this._app.requireModule('event');
	  event.openURL(url);
	}
	
	/**
	 * @deprecated
	 * set a title for page
	 * @param  {string} title
	 */
	function $setTitle(title) {
	  console.warn('[JS Framework] Vm#$setTitle is deprecated, ' + 'please use "require(\'@weex-module/pageInfo\')' + '.setTitle(title)" instead');
	  var pageInfo = this._app.requireModule('pageInfo');
	  pageInfo.setTitle(title);
	}
	
	/**
	 * @deprecated use "require('@weex-module/moduleName') instead"
	 * invoke a native method by specifing the name of module and method
	 * @param  {string} moduleName
	 * @param  {string} methodName
	 * @param  {...*} the rest arguments
	 */
	function $call(moduleName, methodName) {
	  console.warn('[JS Framework] Vm#$call is deprecated, ' + 'please use "require(\'@weex-module/moduleName\')" instead');
	  var module = this._app.requireModule(moduleName);
	  if (module && module[methodName]) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    module[methodName].apply(module, args);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTVjYWI4YmM3YzgxYWJjNWZkMTgiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3NldFRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL29iamVjdEFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3Zkb20vbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcnVudGltZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS93YXRjaGVyLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9kZXAuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb3JlL29ic2VydmVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2NvbXBpbGVyLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvdm0vZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvdm0vZG9tLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3NlbXZlci9zZW12ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvZG93bmdyYWRlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbWlzYy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBpL21ldGhvZHMuanMiXSwibmFtZXMiOlsibWV0aG9kcyIsIm5hdGl2ZSIsInRyYW5zZm9ybWVyIiwibWV0aG9kTmFtZSIsImdsb2JhbCIsInJldCIsIkVycm9yIiwiY29uc29sZSIsImVycm9yIiwidG9TdHJpbmciLCJmcmFtZXdvcmtWZXJzaW9uIiwidHJhbnNmb3JtZXJWZXJzaW9uIiwicmVnaXN0ZXJNZXRob2RzIiwiZXh0ZW5kIiwiZGVmIiwicmVtb3ZlIiwiaGFzT3duIiwiYmluZCIsInRvQXJyYXkiLCJpc09iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0YXJnZXQiLCJzcmMiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdCIsInNoaWZ0Iiwia2V5IiwibGVuZ3RoIiwib2JqIiwidmFsIiwiZW51bWVyYWJsZSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImFyciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImNhbGwiLCJmbiIsImN0eCIsImEiLCJsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJsaXN0Iiwic3RhcnQiLCJpIiwiQXJyYXkiLCJPQkpFQ1RfU1RSSU5HIiwic2V0VGltZW91dCIsInNldFRpbWVvdXROYXRpdmUiLCJ0aW1lb3V0TWFwIiwidGltZW91dElkIiwiY2IiLCJ0aW1lIiwic2V0VGltZW91dENhbGxiYWNrIiwiaWQiLCJXWEVudmlyb25tZW50IiwicGxhdGZvcm0iLCJ0ZXN0Iiwib3NWZXJzaW9uIiwiUHJvbWlzZSIsInJlcXVpcmUiLCJjbGFzc29mIiwiY29mIiwiVEFHIiwiQVJHIiwidHJ5R2V0IiwiaXQiLCJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIk8iLCJUIiwiQiIsInVuZGVmaW5lZCIsImNhbGxlZSIsInNsaWNlIiwic3RvcmUiLCJ1aWQiLCJTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJuYW1lIiwiU0hBUkVEIiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiaGlkZSIsImhhcyIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsInNwbGl0IiwiaW5zcGVjdFNvdXJjZSIsInNhZmUiLCJpc0Z1bmN0aW9uIiwiam9pbiIsIlN0cmluZyIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImYiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJQIiwiQXR0cmlidXRlcyIsIlR5cGVFcnJvciIsImdldCIsImV4ZWMiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsIlMiLCJ2YWx1ZU9mIiwiYml0bWFwIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCIkYXQiLCJpdGVyYXRlZCIsIl90IiwiX2kiLCJwb2ludCIsImRvbmUiLCJ0b0ludGVnZXIiLCJkZWZpbmVkIiwidGhhdCIsInBvcyIsInMiLCJiIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiTElCUkFSWSIsIiRleHBvcnQiLCJyZWRlZmluZSIsIkl0ZXJhdG9ycyIsIiRpdGVyQ3JlYXRlIiwic2V0VG9TdHJpbmdUYWciLCJnZXRQcm90b3R5cGVPZiIsIklURVJBVE9SIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkJhc2UiLCJOQU1FIiwiQ29uc3RydWN0b3IiLCJuZXh0IiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsImtpbmQiLCJwcm90byIsInZhbHVlcyIsImVudHJpZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiRiIsIlBST1RPVFlQRSIsInR5cGUiLCJzb3VyY2UiLCJJU19GT1JDRUQiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiZXhwUHJvdG8iLCJvd24iLCJvdXQiLCJleHAiLCJVIiwiVyIsIlIiLCJhRnVuY3Rpb24iLCJjIiwiY3JlYXRlIiwiZGVzY3JpcHRvciIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJyZXN1bHQiLCJnZXRLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsIiRrZXlzIiwidG9JT2JqZWN0IiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJwdXNoIiwiSU9iamVjdCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9MZW5ndGgiLCJ0b0luZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwibWluIiwibWF4Iiwic2hhcmVkIiwiZG9jdW1lbnRFbGVtZW50IiwidGFnIiwic3RhdCIsInRvT2JqZWN0IiwiT2JqZWN0UHJvdG8iLCJjb25zdHJ1Y3RvciIsIiRpdGVyYXRvcnMiLCJ3a3MiLCJUT19TVFJJTkdfVEFHIiwiQXJyYXlWYWx1ZXMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb24iLCJhZGRUb1Vuc2NvcGFibGVzIiwic3RlcCIsIl9rIiwiQXJndW1lbnRzIiwiVU5TQ09QQUJMRVMiLCJBcnJheVByb3RvIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic3BlY2llc0NvbnN0cnVjdG9yIiwidGFzayIsInNldCIsIm1pY3JvdGFzayIsIlBST01JU0UiLCJwcm9jZXNzIiwiJFByb21pc2UiLCJpc05vZGUiLCJlbXB0eSIsIkludGVybmFsIiwiR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJwcm9taXNlIiwicmVzb2x2ZSIsIkZha2VQcm9taXNlIiwiUHJvbWlzZVJlamVjdGlvbkV2ZW50IiwidGhlbiIsInNhbWVDb25zdHJ1Y3RvciIsImlzVGhlbmFibGUiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIkMiLCJQcm9taXNlQ2FwYWJpbGl0eSIsInJlamVjdCIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwicGVyZm9ybSIsIm5vdGlmeSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicnVuIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImRvbWFpbiIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJlbnRlciIsImV4aXQiLCJvblVuaGFuZGxlZCIsImFicnVwdCIsImlzVW5oYW5kbGVkIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwid3JhcHBlciIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiciIsImNhcGFiaWxpdHkiLCJ4IiwiaXRlciIsImFsbCIsIml0ZXJhYmxlIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmb3JiaWRkZW5GaWVsZCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyRm4iLCJpdGVyYXRvciIsImdldEl0ZXJhdG9yTWV0aG9kIiwiU1BFQ0lFUyIsIkQiLCJpbnZva2UiLCJodG1sIiwiY2VsIiwic2V0VGFzayIsInNldEltbWVkaWF0ZSIsImNsZWFyVGFzayIsImNsZWFySW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJjb3VudGVyIiwicXVldWUiLCJPTlJFQURZU1RBVEVDSEFOR0UiLCJkZWZlciIsImNoYW5uZWwiLCJwb3J0IiwibGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJhcmdzIiwibmV4dFRpY2siLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwiY2xlYXIiLCJ1biIsIm1hY3JvdGFzayIsIk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJoZWFkIiwibGFzdCIsImZsdXNoIiwicGFyZW50IiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJERVNDUklQVE9SUyIsIktFWSIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwibmF0aXZlTG9nIiwiTEVWRUxTIiwibGV2ZWxNYXAiLCJnZW5lcmF0ZUxldmVsTWFwIiwiZGVidWciLCJjaGVja0xldmVsIiwiZm9ybWF0IiwibG9nIiwiaW5mbyIsIndhcm4iLCJfX29yaV9fIiwiZm9yRWFjaCIsImxldmVsSW5kZXgiLCJsZXZlbCIsInR5cGVJbmRleCIsImxvZ0xldmVsIiwibWFwIiwidiIsInRvTG93ZXJDYXNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdPUFMiLCJwSUUiLCIkYXNzaWduIiwiQSIsIksiLCJrIiwiYUxlbiIsImdldFN5bWJvbHMiLCJpc0VudW0iLCJqIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uZmlnIiwiRG9jdW1lbnQiLCJFbGVtZW50IiwiQ29tbWVudCIsIkxpc3RlbmVyIiwiZnJhbWV3b3JrcyIsInNlbmRUYXNrcyIsImNhbGxOYXRpdmUiLCJOb2RlIiwiREVGQVVMVF9UQUdfTkFNRSIsImluc3RhbmNlTWFwIiwibmV4dE5vZGVSZWYiLCJ1cmwiLCJVUkwiLCJub2RlTWFwIiwiZ2VuQ2FsbFRhc2tzIiwiY3JlYXRlRG9jdW1lbnRFbGVtZW50IiwidGFza3MiLCJpc0FycmF5IiwiZGVzdHJveSIsImJhdGNoZWQiLCJkb2NJZCIsIm93bmVyRG9jdW1lbnQiLCJyb2xlIiwiZGVwdGgiLCJyZWYiLCJfZG9jdW1lbnRFbGVtZW50IiwiYXBwZW5kQm9keSIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImRvYyIsInB1cmVDaGlsZHJlbiIsInBhcmVudE5vZGUiLCJjaGlsZHJlbiIsImJlZm9yZUluZGV4Iiwibm9kZVR5cGUiLCJjaGlsZCIsInNldEJvZHkiLCJsaW5rUGFyZW50Iiwibm9kZUlkIiwiY3JlYXRlQm9keSIsIl9yb290IiwiYm9keSIsInByb3BzIiwidGFnTmFtZSIsImNyZWF0ZUNvbW1lbnQiLCJ0ZXh0IiwiZmlyZUV2ZW50IiwiZG9tQ2hhbmdlcyIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJ1cGRhdGVFbGVtZW50IiwiZ2V0UmVmIiwiY2hhbmdlcyIsImF0dHJzIiwic2V0QXR0ciIsInNldFN0eWxlIiwibmV4dFNpYmxpbmciLCJwcmV2aW91c1NpYmxpbmciLCJhdHRyIiwiY2xhc3NTdHlsZSIsImluc2VydEluZGV4IiwicmVnaXN0ZXJOb2RlIiwiYWRkRWxlbWVudCIsIm1vdmVJbmRleCIsIm1vdmVFbGVtZW50IiwicHVyZUJlZm9yZSIsIm5leHRFbGVtZW50IiwiaW5zZXJ0QWZ0ZXIiLCJhZnRlciIsInByZXZpb3VzRWxlbWVudCIsInByZXNlcnZlZCIsInJlbW92ZUluZGV4IiwicmVtb3ZlRWxlbWVudCIsIm5ld0luZGV4IiwiY2hhbmdlU2libGluZyIsIm5ld0luZGV4QWZ0ZXIiLCJiZWZvcmVOZXciLCJhZnRlck5ldyIsInNpbGVudCIsInJlc2V0Q2xhc3NTdHlsZSIsInNldENsYXNzU3R5bGUiLCJzZXRTdHlsZXMiLCJ0b1N0eWxlIiwiYWRkRXZlbnQiLCJyZW1vdmVFdmVudCIsInRvSlNPTiIsImNyZWF0ZUFjdGlvbiIsInVwZGF0ZXMiLCJjcmVhdGVGaW5pc2giLCJjYWxsYmFjayIsInVwZGF0ZUZpbmlzaCIsInJlZnJlc2hGaW5pc2giLCJlbGVtZW50IiwiYWN0aW9ucyIsImFkZEFjdGlvbnMiLCJ0YXJnZXRSZWYiLCJwYXJlbnRSZWYiLCJtZXRob2QiLCJXZWV4IiwiY3JlYXRlSW5zdGFuY2UiLCJpbml0IiwicmVmcmVzaEluc3RhbmNlIiwiZGVzdHJveUluc3RhbmNlIiwicmVnaXN0ZXJDb21wb25lbnRzIiwicmVnaXN0ZXJNb2R1bGVzIiwicmVjZWl2ZVRhc2tzIiwiZ2V0Um9vdCIsImNvZGUiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJyZXF1aXJlTW9kdWxlIiwidXBkYXRlQWN0aW9ucyIsImNhbGxUYXNrcyIsImdldE1vZHVsZSIsImNsZWFyTW9kdWxlcyIsImluaXRNb2R1bGVzIiwiaW5pdE1ldGhvZHMiLCJyZXF1aXJlQ3VzdG9tQ29tcG9uZW50IiwicmVnaXN0ZXJDdXN0b21Db21wb25lbnQiLCJuYXRpdmVNb2R1bGVzIiwibW9kdWxlTmFtZSIsIm1vZHVsZXMiLCJpZlJlcGxhY2UiLCJWbSIsImFwaXMiLCJwIiwiYXBpTmFtZSIsImFwcCIsImN1c3RvbUNvbXBvbmVudE1hcCIsInJlZnJlc2giLCJnZXRSb290RWxlbWVudCIsImJ1bmRsZURlZmluZSIsImJ1bmRsZUJvb3RzdHJhcCIsIl9kYXRhIiwiYnVuZGxlVm0iLCJidW5kbGVSZWdpc3RlciIsImJ1bmRsZVJlbmRlciIsImJ1bmRsZVJlcXVpcmUiLCJidW5kbGVEb2N1bWVudCIsImJ1bmRsZVJlcXVpcmVNb2R1bGUiLCJmdW5jdGlvbkJvZHkiLCJzdWJzdHIiLCJ0aW1lciIsInRpbWVyQVBJcyIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwibiIsImNsZWFySW50ZXJ2YWwiLCJwYXJlbnRWbSIsInBhcmVudEVsIiwibWVyZ2VkRGF0YSIsImV4dGVybmFsRXZlbnRzIiwiX3BhcmVudCIsIl9yZWFsUGFyZW50IiwiX2FwcCIsIl9jaGlsZHJlblZtcyIsIl9vcHRpb25zIiwiX21ldGhvZHMiLCJfY29tcHV0ZWQiLCJjb21wdXRlZCIsIl9jc3MiLCJfaWRzIiwiX3ZtRXZlbnRzIiwiX3R5cGUiLCIkZW1pdCIsIl9pbml0ZWQiLCJfY3JlYXRlZCIsInJlYWR5IiwiX3BhcmVudEVsIiwiJHdhdGNoIiwiZGVsZXRlIiwiaXNSZXNlcnZlZCIsImNyZWF0ZU5ld1NldCIsImNhY2hlZCIsInR5cG9mIiwicmVtb3ZlV2VleFByZWZpeCIsInJlbW92ZUpTU3VyZml4Iiwic3RyIiwiaGFzUHJvdG8iLCJfU2V0IiwiU2V0IiwibWF0Y2giLCJhZGQiLCJuYXRpdmVTZXQiLCJjYWNoZSIsImNhY2hlZEZuIiwiaGl0IiwiY2FtZWxpemVSRSIsImNhbWVsaXplIiwicmVwbGFjZSIsInRvVXBwZXIiLCJfIiwidG9VcHBlckNhc2UiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInN1YnN0cmluZyIsIldFRVhfQ09NUE9ORU5UX1JFRyIsIldFRVhfTU9EVUxFX1JFRyIsIk5PUk1BTF9NT0RVTEVfUkVHIiwiSlNfU1VSRklYX1JFRyIsImlzV2VleENvbXBvbmVudCIsImlzV2VleE1vZHVsZSIsImlzTm9ybWFsTW9kdWxlIiwiaXNOcG1Nb2R1bGUiLCJpbml0U3RhdGUiLCJpbml0RGF0YSIsImluaXRDb21wdXRlZCIsInZtIiwiX3dhdGNoZXJzIiwibm9vcCIsInVzZXJEZWYiLCJtYWtlQ29tcHV0ZWRHZXR0ZXIiLCJnZXR0ZXIiLCJvd25lciIsIndhdGNoZXIiLCJsYXp5IiwiY29tcHV0ZWRHZXR0ZXIiLCJkaXJ0eSIsImV2YWx1YXRlIiwiZGVwZW5kIiwiV2F0Y2hlciIsInByZXZUYXJnZXQiLCJleHBPckZuIiwiaXNGbiIsImV4cHJlc3Npb24iLCJhY3RpdmUiLCJkZXBzIiwibmV3RGVwcyIsImRlcElkcyIsIm5ld0RlcElkcyIsImVudiIsIk5PREVfRU5WIiwicXVldWVkIiwic2hhbGxvdyIsImJlZm9yZUdldCIsImRlZXAiLCJ0cmF2ZXJzZSIsImFmdGVyR2V0IiwiYWRkRGVwIiwiZGVwIiwiYWRkU3ViIiwicmVtb3ZlU3ViIiwidG1wIiwidXBkYXRlIiwib2xkVmFsdWUiLCJjdXJyZW50IiwidGVhcmRvd24iLCJfaXNCZWluZ0Rlc3Ryb3llZCIsIl92Rm9yUmVtb3ZpbmciLCJzZWVuT2JqZWN0cyIsInNlZW4iLCJpc0EiLCJpc08iLCJfX29iX18iLCJkZXBJZCIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbnMiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJEZXAiLCJzdWJzIiwic3ViIiwiZGVmaW5lUmVhY3RpdmUiLCJkZWwiLCJwcm94eSIsInVucHJveHkiLCJhcnJheUtleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiYXVnbWVudCIsInByb3RvQXVnbWVudCIsImNvcHlBdWdtZW50Iiwib2JzZXJ2ZUFycmF5Iiwid2FsayIsImNvbnZlcnQiLCJpdGVtcyIsImFkZFZtIiwidm1zIiwicmVtb3ZlVm0iLCJfX3Byb3RvX18iLCJvYiIsImlzRXh0ZW5zaWJsZSIsIl9pc1Z1ZSIsInByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwic2V0dGVyIiwiY2hpbGRPYiIsInJlYWN0aXZlR2V0dGVyIiwicmVhY3RpdmVTZXR0ZXIiLCJuZXdWYWwiLCJLRVlfV09SRFMiLCJwcm94eUdldHRlciIsInByb3h5U2V0dGVyIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsIm9yaWdpbmFsIiwibXV0YXRvciIsImluc2VydGVkIiwiJHNldCIsIiRyZW1vdmUiLCJidWlsZCIsIm9wdCIsInRlbXBsYXRlIiwiY29tcGlsZSIsIl9yZWFkeSIsImRlc3QiLCJtZXRhIiwibGFzdFNpZ25hbCIsInRhcmdldElzRnJhZ21lbnQiLCJjb21waWxlRnJhZ21lbnQiLCJ0YXJnZXRJc0NvbnRlbnQiLCJfY29udGVudCIsInRhcmdldE5lZWRDaGVja1JlcGVhdCIsImNvbXBpbGVSZXBlYXQiLCJ0YXJnZXROZWVkQ2hlY2tTaG93biIsImNvbXBpbGVTaG93biIsInR5cGVHZXR0ZXIiLCJ0YXJnZXROZWVkQ2hlY2tUeXBlIiwiY29tcGlsZVR5cGUiLCJjb21wb25lbnQiLCJ0YXJnZXRJc0NvbXBvc2VkIiwiY29tcGlsZUN1c3RvbUNvbXBvbmVudCIsImNvbXBpbGVOYXRpdmVDb21wb25lbnQiLCJyZXBlYXQiLCJzaG93biIsImNvbXBvbmVudHMiLCJmcmFnQmxvY2siLCJvbGRTdHlsZSIsInRyYWNrQnkiLCJiaW5kUmVwZWF0IiwibmV3TWV0YSIsImJpbmRTaG93biIsIkN0b3IiLCJzdWJWbSIsIl9leHRlcm5hbEJpbmRpbmciLCJjb21waWxlQ2hpbGRyZW4iLCJfcm9vdEVsIiwiZXZlbnRzIiwiYXBwZW5kIiwidHJlZU1vZGUiLCJldmVyeSIsImtleU5hbWUiLCJ2YWx1ZU5hbWUiLCJjb21waWxlSXRlbSIsImNvbnRleHQiLCJuZXdDb250ZXh0IiwibWVyZ2VDb250ZXh0Iiwid2F0Y2hCbG9jayIsIm9sZENoaWxkcmVuIiwib2xkVm1zIiwib2xkRGF0YSIsInRyYWNrTWFwIiwicmV1c2VkTWFwIiwicmV1c2VkTGlzdCIsInVwZGF0ZU1hcmsiLCJyZXVzZWQiLCJjYWxjIiwiZGlmZmVyIiwibGF0ZXN0VmFsdWUiLCJyZWNvcmRlZCIsImJsb2NrSWQiLCJhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnMiLCJiaW5kRWxlbWVudCIsImJpbmRTdWJWbSIsImJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQiLCJzZXRJZCIsIndhdGNoIiwibmF0aXZlQ29tcG9uZW50TWFwIiwiU0VUVEVSUyIsInN1YmtleSIsInNldENsYXNzIiwiY2xhc3NMaXN0IiwiYmluZEV2ZW50cyIsInJlcGVhdEl0ZW0iLCJyZWR1Y2UiLCJtZXJnZVByb3BzIiwibWVyZ2VDbGFzc1N0eWxlIiwibWVyZ2VTdHlsZSIsInJldHVyblZhbHVlIiwiY3NzIiwibmV3SWQiLCJiaW5kRGlyIiwic2V0RXZlbnQiLCJiaW5kS2V5IiwiaW1hZ2UiLCJjb250YWluZXIiLCJzbGlkZXIiLCJjZWxsIiwiY3JlYXRlQmxvY2siLCJhdHRhY2hUYXJnZXQiLCJtb3ZlVGFyZ2V0IiwicmVtb3ZlVGFyZ2V0IiwiY3JlYXRlQmxvY2tTdGFydCIsImVuZCIsImNyZWF0ZUJsb2NrRW5kIiwibGFzdGVzdEJsb2NrSWQiLCJhbmNob3IiLCJzaWduYWwiLCJtb3ZlQmxvY2siLCJncm91cCIsInRlbXAiLCJwcmVzZXJ2ZUJsb2NrIiwicmVtb3ZlQmxvY2siLCIkZGlzcGF0Y2giLCIkYnJvYWRjYXN0IiwiJG9uIiwiJG9mZiIsImluaXRFdmVudHMiLCJtaXhpbkV2ZW50cyIsIkV2dCIsImRldGFpbCIsInNob3VsZFN0b3AiLCJzdG9wIiwiaGFzU3RvcHBlZCIsImhhbmRsZXJMaXN0IiwiZXZ0IiwiTElGRV9DWUNMRV9UWVBFUyIsInR5cGUxIiwidHlwZTIiLCJib290c3RyYXAiLCJjbGVhckNvbW1vbk1vZHVsZXMiLCJkZWZpbmVGbiIsInJlZ2lzdGVyIiwiZG93bmdyYWRlIiwiY2xlYW5OYW1lIiwic2F0aXNmaWVzIiwiZG93bmdyYWRlUmVzdWx0IiwiY2hlY2siLCJpc0Rvd25ncmFkZSIsImVycm9yVHlwZSIsImVycm9yTWVzc2FnZSIsIlNlbVZlciIsIk5PREVfREVCVUciLCJ1bnNoaWZ0IiwiU0VNVkVSX1NQRUNfVkVSU0lPTiIsIk1BWF9MRU5HVEgiLCJNQVhfU0FGRV9JTlRFR0VSIiwiTnVtYmVyIiwicmUiLCJOVU1FUklDSURFTlRJRklFUiIsIk5VTUVSSUNJREVOVElGSUVSTE9PU0UiLCJOT05OVU1FUklDSURFTlRJRklFUiIsIk1BSU5WRVJTSU9OIiwiTUFJTlZFUlNJT05MT09TRSIsIlBSRVJFTEVBU0VJREVOVElGSUVSIiwiUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRSIsIlBSRVJFTEVBU0UiLCJQUkVSRUxFQVNFTE9PU0UiLCJCVUlMRElERU5USUZJRVIiLCJCVUlMRCIsIkZVTEwiLCJGVUxMUExBSU4iLCJMT09TRVBMQUlOIiwiTE9PU0UiLCJHVExUIiwiWFJBTkdFSURFTlRJRklFUkxPT1NFIiwiWFJBTkdFSURFTlRJRklFUiIsIlhSQU5HRVBMQUlOIiwiWFJBTkdFUExBSU5MT09TRSIsIlhSQU5HRSIsIlhSQU5HRUxPT1NFIiwiTE9ORVRJTERFIiwiVElMREVUUklNIiwiUmVnRXhwIiwidGlsZGVUcmltUmVwbGFjZSIsIlRJTERFIiwiVElMREVMT09TRSIsIkxPTkVDQVJFVCIsIkNBUkVUVFJJTSIsImNhcmV0VHJpbVJlcGxhY2UiLCJDQVJFVCIsIkNBUkVUTE9PU0UiLCJDT01QQVJBVE9STE9PU0UiLCJDT01QQVJBVE9SIiwiQ09NUEFSQVRPUlRSSU0iLCJjb21wYXJhdG9yVHJpbVJlcGxhY2UiLCJIWVBIRU5SQU5HRSIsIkhZUEhFTlJBTkdFTE9PU0UiLCJTVEFSIiwicGFyc2UiLCJsb29zZSIsImVyIiwidmFsaWQiLCJjbGVhbiIsInRyaW0iLCJtIiwicmF3IiwibWFqb3IiLCJtaW5vciIsInBhdGNoIiwicHJlcmVsZWFzZSIsIm51bSIsImNvbXBhcmUiLCJvdGhlciIsImNvbXBhcmVNYWluIiwiY29tcGFyZVByZSIsImNvbXBhcmVJZGVudGlmaWVycyIsImluYyIsInJlbGVhc2UiLCJpZGVudGlmaWVyIiwiZGlmZiIsInZlcnNpb24xIiwidmVyc2lvbjIiLCJlcSIsInYxIiwidjIiLCJudW1lcmljIiwiYW51bSIsImJudW0iLCJyY29tcGFyZUlkZW50aWZpZXJzIiwiY29tcGFyZUxvb3NlIiwicmNvbXBhcmUiLCJzb3J0IiwicnNvcnQiLCJuZXEiLCJndGUiLCJsdGUiLCJjbXAiLCJvcCIsIkNvbXBhcmF0b3IiLCJjb21wIiwic2VtdmVyIiwiQU5ZIiwib3BlcmF0b3IiLCJSYW5nZSIsInJhbmdlIiwicGFyc2VSYW5nZSIsImZpbHRlciIsImNvbXBzIiwiaHIiLCJoeXBoZW5SZXBsYWNlIiwiY29tcFJlIiwicGFyc2VDb21wYXJhdG9yIiwidG9Db21wYXJhdG9ycyIsInJlcGxhY2VDYXJldHMiLCJyZXBsYWNlVGlsZGVzIiwicmVwbGFjZVhSYW5nZXMiLCJyZXBsYWNlU3RhcnMiLCJpc1giLCJyZXBsYWNlVGlsZGUiLCJNIiwicHIiLCJyZXBsYWNlQ2FyZXQiLCJyZXBsYWNlWFJhbmdlIiwiZ3RsdCIsInhNIiwieG0iLCJ4cCIsImFueVgiLCIkMCIsImZNIiwiZm0iLCJmcCIsImZwciIsImZiIiwidG8iLCJ0TSIsInRtIiwidHAiLCJ0cHIiLCJ0YiIsInRlc3RTZXQiLCJhbGxvd2VkIiwibWF4U2F0aXNmeWluZyIsIm1pblNhdGlzZnlpbmciLCJ2YWxpZFJhbmdlIiwibHRyIiwib3V0c2lkZSIsImd0ciIsImhpbG8iLCJndGZuIiwibHRlZm4iLCJsdGZuIiwiZWNvbXAiLCJjb21wYXJhdG9ycyIsImhpZ2giLCJsb3ciLCJjb21wYXJhdG9yIiwicGFyc2VkIiwibm9ybWFsaXplVmVyc2lvbiIsImdldEVycm9yIiwiaXNWYWxpZCIsImNyaXRlcmlhIiwiZ2V0TXNnIiwiX2tleSIsImRldmljZUluZm8iLCJjdXN0b21Eb3duZ3JhZGUiLCJkUGxhdGZvcm0iLCJjT2JqIiwia2V5TG93ZXIiLCJpc1ZlcnNpb24iLCJpc0RldmljZU1vZGVsIiwiZCIsIl9jcml0ZXJpYSIsImNvbW1vbk1vZHVsZXMiLCJmYWN0b3J5IiwiZGVmaW5pdGlvbiIsInJlZnJlc2hEYXRhIiwiYmxvY2tzIiwiY2FsbGJhY2tzIiwic29tZSIsImNhbGxiYWNrSWQiLCJpZktlZXBBbGl2ZSIsIm5vcm1hbGl6ZSIsImFyZyIsInRvSVNPU3RyaW5nIiwiQXBwIiwiYnVuZGxlVXJsIiwiRGlmZmVyIiwiaG9va3MiLCJoYXNUaW1lciIsImlzVGltZW91dCIsImNhbGxUeXBlTWFwIiwiY2FsbFR5cGVMaXN0IiwiaXNFbXB0eSIsImNmZyIsImpzSGFuZGxlcnMiLCJyZXN1bHRzIiwidmVyc2lvblJlZ0V4cCIsImNoZWNrVmVyc2lvbiIsImZyYW1ld29yayIsImJ1bmRsZVZlcnNpb24iLCJnZW5Jbml0IiwiZ2VuSW5zdGFuY2UiLCJhZGFwdEluc3RhbmNlIiwibmF0aXZlTWV0aG9kTmFtZSIsIiQiLCIkZWwiLCIkdm0iLCIkcmVuZGVyVGhlbiIsIiRzY3JvbGxUbyIsIiR0cmFuc2l0aW9uIiwiJGdldENvbmZpZyIsIiRzZW5kSHR0cCIsIiRvcGVuVVJMIiwiJHNldFRpdGxlIiwiJGNhbGwiLCJvZmZzZXQiLCJkb20iLCJzY3JvbGxUb0VsZW1lbnQiLCJzdHlsZXMiLCJhbmltYXRpb24iLCJ0cmFuc2l0aW9uIiwiX3NldFN0eWxlIiwicGFyYW1zIiwic3RyZWFtIiwic2VuZEh0dHAiLCJvcGVuVVJMIiwicGFnZUluZm8iLCJzZXRUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7S0FBWUEsTzs7Ozs7O0tBRUpDLE0sdUJBQUFBLE07S0FBUUMsVyx1QkFBQUEsVzs7QUFFaEI7OzRCQUNXQyxVO0FBQ1RDLFVBQU9ELFVBQVAsSUFBcUIsWUFBYTtBQUNoQyxTQUFNRSxNQUFNLGtCQUFRRixVQUFSLHFDQUFaO0FBQ0EsU0FBSUUsZUFBZUMsS0FBbkIsRUFBMEI7QUFDeEJDLGVBQVFDLEtBQVIsQ0FBY0gsSUFBSUksUUFBSixFQUFkO0FBQ0Q7QUFDRCxZQUFPSixHQUFQO0FBQ0QsSUFORDs7O0FBREYsTUFBSyxJQUFNRixVQUFYLHVCQUFrQztBQUFBLFNBQXZCQSxVQUF1QjtBQVFqQzs7QUFFRDtBQUNBQyxRQUFPTSxnQkFBUCxHQUEwQlQsTUFBMUI7QUFDQUcsUUFBT08sa0JBQVAsR0FBNEJULFdBQTVCOztBQUVBO0FBQ0FFLFFBQU9RLGVBQVAsQ0FBdUJaLE9BQXZCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDakJFYSxNOzs7Ozs7bUJBQ0FDLEc7Ozs7OzttQkFDQUMsTTs7Ozs7O21CQUNBQyxNOzs7Ozs7bUJBQ0FDLEk7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QUFTMGpCLFFBQVQsQ0FBbUJ6b0IsR0FBbkIsRUFBd0I7QUFDN0J4YSxXQUFRcVksSUFBUixDQUFhLCtDQUNMLDZDQURLLEdBRUwsd0JBRlI7QUFHQSxPQUFNekMsUUFBUSxLQUFLNE4sSUFBTCxDQUFVNUMsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBQ0FoTCxTQUFNa3VCLE9BQU4sQ0FBY3RwQixHQUFkO0FBQ0Q7O0FBRUQ7Ozs7O0FBS08sVUFBUzBvQixTQUFULENBQW9CdFksS0FBcEIsRUFBMkI7QUFDaEM1cUIsV0FBUXFZLElBQVIsQ0FBYSxnREFDTCxnREFESyxHQUVMLDJCQUZSO0FBR0EsT0FBTTByQixXQUFXLEtBQUt2Z0IsSUFBTCxDQUFVNUMsYUFBVixDQUF3QixVQUF4QixDQUFqQjtBQUNBbWpCLFlBQVNDLFFBQVQsQ0FBa0JwWixLQUFsQjtBQUNEOztBQUVEOzs7Ozs7O0FBT08sVUFBU3VZLEtBQVQsQ0FBZ0I3aEIsVUFBaEIsRUFBNEIxaEIsVUFBNUIsRUFBaUQ7QUFDdERJLFdBQVFxWSxJQUFSLENBQWEsNENBQ1gsMkRBREY7QUFFQSxPQUFNaFUsU0FBUyxLQUFLbWYsSUFBTCxDQUFVNUMsYUFBVixDQUF3QlUsVUFBeEIsQ0FBZjtBQUNBLE9BQUlqZCxVQUFVQSxPQUFPekUsVUFBUCxDQUFkLEVBQWtDO0FBQUEsdUNBSmNrVyxJQUlkO0FBSmNBLFdBSWQ7QUFBQTs7QUFDaEN6UixZQUFPekUsVUFBUCxnQkFBc0JrVyxJQUF0QjtBQUNEO0FBQ0YsRSIsImZpbGUiOiJuYXRpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDU1Y2FiOGJjN2M4MWFiYzVmZDE4XG4gKiovIiwiaW1wb3J0ICcuLi9zaGFyZWQnXG5pbXBvcnQgcnVudGltZSBmcm9tICcuLi9ydW50aW1lJ1xuaW1wb3J0IHsgc3VidmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCAqIGFzIG1ldGhvZHMgZnJvbSAnLi4vZGVmYXVsdC9hcGkvbWV0aG9kcydcblxuY29uc3QgeyBuYXRpdmUsIHRyYW5zZm9ybWVyIH0gPSBzdWJ2ZXJzaW9uXG5cbi8vIHJlZ2lzdGVyIGluc3RhbmNlIG1hbmFnZW1lbnQgQVBJc1xuZm9yIChjb25zdCBtZXRob2ROYW1lIGluIHJ1bnRpbWUpIHtcbiAgZ2xvYmFsW21ldGhvZE5hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZXQgPSBydW50aW1lW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgaWYgKHJldCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHJldC50b1N0cmluZygpKVxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cbn1cblxuLy8gcmVnaXN0ZXIgZnJhbWV3b3JrIG1ldGEgaW5mb1xuZ2xvYmFsLmZyYW1ld29ya1ZlcnNpb24gPSBuYXRpdmVcbmdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24gPSB0cmFuc2Zvcm1lclxuXG4vLyByZWdpc3RlciBzcGVjaWFsIG1ldGhvZHMgZm9yIFdlZXggZnJhbWV3b3JrXG5nbG9iYWwucmVnaXN0ZXJNZXRob2RzKG1ldGhvZHMpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L25hdGl2ZS9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnLi9zZXRUaW1lb3V0J1xuaW1wb3J0ICcuL3Byb21pc2UnXG5pbXBvcnQgJy4vY29uc29sZSdcbmltcG9ydCAnLi9vYmplY3RBc3NpZ24nXG5cbmV4cG9ydCB7XG4gIGV4dGVuZCxcbiAgZGVmLFxuICByZW1vdmUsXG4gIGhhc093bixcbiAgYmluZCxcbiAgdG9BcnJheSxcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Rcbn0gZnJvbSAnLi91dGlscydcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRvXG4gKiBAcGFyYW0ge09iamVjdH0gZnJvbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQgKHRhcmdldCwgLi4uc3JjKSB7XG4gIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zcmMpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZmlyc3QgPSBzcmMuc2hpZnQoKVxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpcnN0KSB7XG4gICAgICB0YXJnZXRba2V5XSA9IGZpcnN0W2tleV1cbiAgICB9XG4gICAgaWYgKHNyYy5sZW5ndGgpIHtcbiAgICAgIGV4dGVuZCh0YXJnZXQsIC4uLnNyYylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldFxufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtlbnVtZXJhYmxlXVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHsqfSBpdGVtXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSAoYXJyLCBpdGVtKSB7XG4gIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG4vKipcbiAqIFNpbXBsZSBiaW5kLCBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQgKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgY29uc3QgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXktbGlrZX0gbGlzdFxuICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydF0gLSBzdGFydCBpbmRleFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMFxuICBsZXQgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnRcbiAgY29uc3QgcmV0ID0gbmV3IEFycmF5KGkpXG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF1cbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5jb25zdCBPQkpFQ1RfU1RSSU5HID0gJ1tvYmplY3QgT2JqZWN0XSdcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gT0JKRUNUX1NUUklOR1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvdXRpbHMuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFBvbHlmaWxsIGBzZXRUaW1lb3V0YCBvbiBBbmRyb2lkIFY4IHVzaW5nIG5hdGl2ZSBtZXRob2RcbiAqIGBzZXRUaW1lb3V0TmF0aXZlKGNhbGxiYWNrSWQsIHRpbWUpYCBhbmQgSlMgbWV0aG9kXG4gKiBgc2V0VGltZW91dENhbGxiYWNrKGNhbGxiYWNrSWQpYC5cbiAqIFRoaXMgcG9seWZpbGwgaXMgb25seSB1c2VkIGluIHZpcnR1YWwtRE9NIGRpZmYgJiBmbHVzaCBhZ29yaXRobS4gTm90XG4gKiBhY2Nlc3NlZCBieSBKUyBCdW5kbGUgY29kZSAoVGhlIHRpbWVyIEFQSXMgcG9seWZpbGwgZm9yIEpTIEJ1bmRsZSBpcyBpblxuICogYGh0bWw1L2RlZmF1bHQvYXBwL2N0cmwuanNgKS5cbiAqL1xuXG5jb25zdCB7XG4gIHNldFRpbWVvdXQsXG4gIHNldFRpbWVvdXROYXRpdmVcbn0gPSBnbG9iYWxcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBzZXRUaW1lb3V0TmF0aXZlID09PSAnZnVuY3Rpb24nKSB7XG4gIGNvbnN0IHRpbWVvdXRNYXAgPSB7fVxuICBsZXQgdGltZW91dElkID0gMFxuXG4gIGdsb2JhbC5zZXRUaW1lb3V0ID0gKGNiLCB0aW1lKSA9PiB7XG4gICAgdGltZW91dE1hcFsrK3RpbWVvdXRJZF0gPSBjYlxuICAgIHNldFRpbWVvdXROYXRpdmUodGltZW91dElkLnRvU3RyaW5nKCksIHRpbWUpXG4gIH1cblxuICBnbG9iYWwuc2V0VGltZW91dENhbGxiYWNrID0gKGlkKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lb3V0TWFwW2lkXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGltZW91dE1hcFtpZF0oKVxuICAgICAgZGVsZXRlIHRpbWVvdXRNYXBbaWRdXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9zZXRUaW1lb3V0LmpzXG4gKiovIiwiLy8gZml4IFByb21pc2UgUHJvYmxlbSBvbiBKU0NvbnRleHQgb2YgaU9TN344XG4vLyBAc2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzU4NjZcbmNvbnN0IHsgV1hFbnZpcm9ubWVudCB9ID0gZ2xvYmFsXG5pZiAoV1hFbnZpcm9ubWVudCAmJiBXWEVudmlyb25tZW50LnBsYXRmb3JtID09PSAnaU9TJyAmJlxuICAvXig3fDgpXFwuLy50ZXN0KFdYRW52aXJvbm1lbnQub3NWZXJzaW9uKSkge1xuICBnbG9iYWwuUHJvbWlzZSA9IG51bGxcbn1cbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UnKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvcHJvbWlzZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCB0ZXN0ICAgID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanNcbiAqKi8iLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL193a3MuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFNSQyAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKVxuICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG4gICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZihPW2tleV0gPT09IHZhbClyZXR1cm47XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKXtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoT1trZXldKU9ba2V5XSA9IHZhbDtcbiAgICAgIGVsc2UgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuICoqLyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXG4gKiovIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qc1xuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4gKiovIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuICoqLyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuICoqLyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4gKiovIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuICoqLyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKi8iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKi8iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanNcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4gKiovIiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4gKiovIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbiAqKi8iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanNcbiAqKi8iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqLyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuICoqLyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4gKiovIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qc1xuICoqLyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuICoqLyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFRoaXMgZmlsZSB3aWxsIGhhY2sgYGNvbnNvbGVgIG1ldGhvZHMgYnkgYFdYRW52aXJvbm1lbnQubG9nTGV2ZWxgLlxuICogU28gd2UgY2FuIGNvbnRyb2wgaG93IG1hbnkgYW5kIHdoaWNoIG1lc3NhZ2VzIHdpbGwgYmUgc2VudCBieSBjaGFuZ2UgdGhlIGxvZyBsZXZlbC5cbiAqIEFkZGl0aW9uYWxseSBpbiBuYXRpdmUgcGxhdGZvcm0gdGhlIG1lc3NhZ2UgY29udGVudCBtdXN0IGJlIHByaW1pdGl2ZSB2YWx1ZXMgYW5kXG4gKiB1c2luZyBgbmF0aXZlTG9nKC4uLmFyZ3MsIGxvZ0xldmVsTWFyaylgIHNvIHdlIGNyZWF0ZSBhIG5ldyBgY29uc29sZWAgb2JqZWN0IGluXG4gKiBnbG9iYWwgYWRkIGEgZm9ybWF0IHByb2Nlc3MgZm9yIGl0cyBtZXRob2RzLlxuICovXG5cbmNvbnN0IHsgY29uc29sZSwgbmF0aXZlTG9nIH0gPSBnbG9iYWxcbmNvbnN0IExFVkVMUyA9IFsnb2ZmJywgJ2Vycm9yJywgJ3dhcm4nLCAnaW5mbycsICdsb2cnLCAnZGVidWcnXVxuY29uc3QgbGV2ZWxNYXAgPSB7fVxuXG5nZW5lcmF0ZUxldmVsTWFwKClcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoXG4gIHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCAvLyBBbmRyb2lkXG4gIChnbG9iYWwuV1hFbnZpcm9ubWVudCAmJiBnbG9iYWwuV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSA9PT0gJ2lPUycpIC8vIGlPU1xuKSB7XG4gIGdsb2JhbC5jb25zb2xlID0ge1xuICAgIGRlYnVnOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2RlYnVnJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fREVCVUcnKSB9XG4gICAgfSxcbiAgICBsb2c6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fTE9HJykgfVxuICAgIH0sXG4gICAgaW5mbzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fSU5GTycpIH1cbiAgICB9LFxuICAgIHdhcm46ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnd2FybicpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX1dBUk4nKSB9XG4gICAgfSxcbiAgICBlcnJvcjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0VSUk9SJykgfVxuICAgIH1cbiAgfVxufVxuZWxzZSB7IC8vIEhUTUw1XG4gIGNvbnN0IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfSA9IGNvbnNvbGVcbiAgY29uc29sZS5fX29yaV9fID0geyBkZWJ1ZywgbG9nLCBpbmZvLCB3YXJuLCBlcnJvciB9XG4gIGNvbnNvbGUuZGVidWcgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IGNvbnNvbGUuX19vcmlfXy5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdsb2cnKSkgeyBjb25zb2xlLl9fb3JpX18ubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLmluZm8gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgY29uc29sZS5fX29yaV9fLmluZm8uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUud2FybiA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBjb25zb2xlLl9fb3JpX18ud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5lcnJvciA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2Vycm9yJykpIHsgY29uc29sZS5fX29yaV9fLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIG1hcCBmb3Igd2hpY2ggdHlwZXMgb2YgbWVzc2FnZSB3aWxsIGJlIHNlbnQgaW4gYSBjZXJ0YWluIG1lc3NhZ2UgbGV2ZWxcbiAqIGFzIHRoZSBvcmRlciBvZiBMRVZFTFMuXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTGV2ZWxNYXAgKCkge1xuICBMRVZFTFMuZm9yRWFjaChsZXZlbCA9PiB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IExFVkVMUy5pbmRleE9mKGxldmVsKVxuICAgIGxldmVsTWFwW2xldmVsXSA9IHt9XG4gICAgTEVWRUxTLmZvckVhY2godHlwZSA9PiB7XG4gICAgICBjb25zdCB0eXBlSW5kZXggPSBMRVZFTFMuaW5kZXhPZih0eXBlKVxuICAgICAgaWYgKHR5cGVJbmRleCA8PSBsZXZlbEluZGV4KSB7XG4gICAgICAgIGxldmVsTWFwW2xldmVsXVt0eXBlXSA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgY2VydGFpbiB0eXBlIG9mIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGluIGN1cnJlbnQgbG9nIGxldmVsIG9mIGVudi5cbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY2hlY2tMZXZlbCAodHlwZSkge1xuICBjb25zdCBsb2dMZXZlbCA9IChnbG9iYWwuV1hFbnZpcm9ubWVudCAmJiBnbG9iYWwuV1hFbnZpcm9ubWVudC5sb2dMZXZlbCkgfHwgJ2xvZydcbiAgcmV0dXJuIGxldmVsTWFwW2xvZ0xldmVsXSAmJiBsZXZlbE1hcFtsb2dMZXZlbF1bdHlwZV1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFsbCBsb2cgYXJndW1lbnRzIGludG8gcHJpbWl0aXZlIHZhbHVlcy5cbiAqIEBwYXJhbSAge2FycmF5fSBhcmdzXG4gKiBAcmV0dXJuIHthcnJheX1cbiAqL1xuZnVuY3Rpb24gZm9ybWF0IChhcmdzKSB7XG4gIHJldHVybiBhcmdzLm1hcCgodikgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xuICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdiA9IFN0cmluZyh2KVxuICAgIH1cbiAgICByZXR1cm4gdlxuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvY29uc29sZS5qc1xuICoqLyIsImltcG9ydCAnY29yZS1qcy9mbi9vYmplY3QvYXNzaWduJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvb2JqZWN0QXNzaWduLmpzXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuICoqLyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBSZWdpc3RlciBmcmFtZXdvcmsocykgaW4gSlMgcnVudGltZS4gV2VleCBzdXBwbHkgdHdvIGxheWVycyBmb3IgM3JkLXBhcnR5XG4gKiBmcmFtZXdvcmsocyk6IG9uZSBpcyB0aGUgaW5zdGFuY2UgbWFuYWdlbWVudCBsYXllciwgYW5vdGhlciBpcyB0aGVcbiAqIHZpcnR1YWwtRE9NIGxheWVyLlxuICovXG5cbi8vIFRoaXMgY29uZmlnIGlzIGdlbmVyYXRlZCBieSBgbnBtIHJ1biBidWlsZDpjb25maWdgLlxuLy8gSXQgd2lsbCBjb2xsZWN0IGFsbCBgcnVudGltZS9mcmFtZXdvcmstKi5qc2AgZmlsZXMgYW5kIGltcG9ydCBlYWNoIG9mIHRoZW0uXG4vLyBUaGUgZmlsZW5hbWUgaXMgYWxzbyB0aGUgZnJhbWV3b3JrIG5hbWUuXG5pbXBvcnQgeyBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCB9IGZyb20gJy4uL3Zkb20nXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSAnLi4vdmRvbS9saXN0ZW5lcidcbmltcG9ydCBmcmFtZXdvcmtzIGZyb20gJy4vY29uZmlnJ1xuXG5pbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgRG9jdW1lbnQsIEVsZW1lbnQsIENvbW1lbnQsIExpc3RlbmVyLCBmcmFtZXdvcmtzLFxuICBzZW5kVGFza3MgKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gZ2xvYmFsLmNhbGxOYXRpdmUoLi4uYXJncylcbiAgfVxufVxuXG5jb25zdCBtZXRob2RzID0gaW5pdChjb25maWcpXG5cbmV4cG9ydCBkZWZhdWx0IG1ldGhvZHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvcnVudGltZS9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogQSBzaW1wbGUgdmlydHVhbCBkb20gaW1wbGVtZW50YXRpb25cbiAqL1xuLy8gaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vc2hhcmVkJ1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vc2hhcmVkL3V0aWxzJ1xuXG5jb25zdCBERUZBVUxUX1RBR19OQU1FID0gJ2RpdidcblxuZXhwb3J0IGNvbnN0IGluc3RhbmNlTWFwID0ge31cbmxldCBuZXh0Tm9kZVJlZiA9IDFcblxuZXhwb3J0IGZ1bmN0aW9uIERvY3VtZW50IChpZCwgdXJsLCBoYW5kbGVyLCBMaXN0ZW5lcikge1xuICBpZCA9IGlkID8gaWQudG9TdHJpbmcoKSA6ICcnXG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLlVSTCA9IHVybFxuXG4gIGluc3RhbmNlTWFwW2lkXSA9IHRoaXNcbiAgdGhpcy5ub2RlTWFwID0ge31cbiAgTGlzdGVuZXIgJiYgKHRoaXMubGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoaWQsIGhhbmRsZXIgfHwgZ2VuQ2FsbFRhc2tzKGlkKSkpXG4gIHRoaXMuY3JlYXRlRG9jdW1lbnRFbGVtZW50KClcbn1cblxuZnVuY3Rpb24gZ2VuQ2FsbFRhc2tzIChpZCkge1xuICByZXR1cm4gKHRhc2tzKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRhc2tzKSkge1xuICAgICAgdGFza3MgPSBbdGFza3NdXG4gICAgfVxuICAgIHJldHVybiBjYWxsTmF0aXZlKGlkLCB0YXNrcywgJy0xJylcbiAgfVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgZGVsZXRlIHRoaXMubGlzdGVuZXJcbiAgZGVsZXRlIHRoaXMubm9kZU1hcFxuICBkZWxldGUgaW5zdGFuY2VNYXBbdGhpcy5pZF1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IGZhbHNlXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5saXN0ZW5lci5iYXRjaGVkID0gdHJ1ZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRG9jdW1lbnRFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgY29uc3QgZWwgPSBuZXcgRWxlbWVudCgnZG9jdW1lbnQnKVxuICAgIGVsLmRvY0lkID0gdGhpcy5pZFxuICAgIGVsLm93bmVyRG9jdW1lbnQgPSB0aGlzXG4gICAgZWwucm9sZSA9ICdkb2N1bWVudEVsZW1lbnQnXG4gICAgZWwuZGVwdGggPSAwXG4gICAgZWwucmVmID0gJ19kb2N1bWVudEVsZW1lbnQnXG4gICAgdGhpcy5ub2RlTWFwLl9kb2N1bWVudEVsZW1lbnQgPSBlbFxuICAgIHRoaXMuZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICBlbC5hcHBlbmRDaGlsZCA9IChub2RlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUpXG4gICAgfVxuICAgIGVsLmluc2VydEJlZm9yZSA9IChub2RlLCBiZWZvcmUpID0+IHtcbiAgICAgIGFwcGVuZEJvZHkodGhpcywgbm9kZSwgYmVmb3JlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmRvY3VtZW50RWxlbWVudFxufVxuXG5mdW5jdGlvbiBhcHBlbmRCb2R5IChkb2MsIG5vZGUsIGJlZm9yZSkge1xuICBjb25zdCB7IGRvY3VtZW50RWxlbWVudCB9ID0gZG9jXG5cbiAgaWYgKGRvY3VtZW50RWxlbWVudC5wdXJlQ2hpbGRyZW4ubGVuZ3RoID4gMCB8fCBub2RlLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50RWxlbWVudC5jaGlsZHJlblxuICBjb25zdCBiZWZvcmVJbmRleCA9IGNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKVxuICBpZiAoYmVmb3JlSW5kZXggPCAwKSB7XG4gICAgY2hpbGRyZW4ucHVzaChub2RlKVxuICB9XG4gIGVsc2Uge1xuICAgIGNoaWxkcmVuLnNwbGljZShiZWZvcmVJbmRleCwgMCwgbm9kZSlcbiAgfVxuXG4gIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgaWYgKG5vZGUucm9sZSA9PT0gJ2JvZHknKSB7XG4gICAgICBub2RlLmRvY0lkID0gZG9jLmlkXG4gICAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBkb2NcbiAgICAgIG5vZGUucGFyZW50Tm9kZSA9IGRvY3VtZW50RWxlbWVudFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSBub2RlXG4gICAgICB9KVxuICAgICAgc2V0Qm9keShkb2MsIG5vZGUpXG4gICAgICBub2RlLmRvY0lkID0gZG9jLmlkXG4gICAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBkb2NcbiAgICAgIGxpbmtQYXJlbnQobm9kZSwgZG9jdW1lbnRFbGVtZW50KVxuICAgICAgZGVsZXRlIGRvYy5ub2RlTWFwW25vZGUubm9kZUlkXVxuICAgIH1cbiAgICBkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLnB1c2gobm9kZSlcbiAgICBkb2MubGlzdGVuZXIuY3JlYXRlQm9keShub2RlKVxuICB9XG4gIGVsc2Uge1xuICAgIG5vZGUucGFyZW50Tm9kZSA9IGRvY3VtZW50RWxlbWVudFxuICAgIGRvYy5ub2RlTWFwW25vZGUucmVmXSA9IG5vZGVcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRCb2R5IChkb2MsIGVsKSB7XG4gIGVsLnJvbGUgPSAnYm9keSdcbiAgZWwuZGVwdGggPSAxXG4gIGRlbGV0ZSBkb2Mubm9kZU1hcFtlbC5ub2RlSWRdXG4gIGVsLnJlZiA9ICdfcm9vdCdcbiAgZG9jLm5vZGVNYXAuX3Jvb3QgPSBlbFxuICBkb2MuYm9keSA9IGVsXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVCb2R5ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XG4gIGlmICghdGhpcy5ib2R5KSB7XG4gICAgY29uc3QgZWwgPSBuZXcgRWxlbWVudCh0eXBlLCBwcm9wcylcbiAgICBzZXRCb2R5KHRoaXMsIGVsKVxuICB9XG5cbiAgcmV0dXJuIHRoaXMuYm9keVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lLCBwcm9wcykge1xuICByZXR1cm4gbmV3IEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVDb21tZW50ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgcmV0dXJuIG5ldyBDb21tZW50KHRleHQpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAoZWwsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgaWYgKCFlbCkge1xuICAgIHJldHVyblxuICB9XG4gIGUgPSBlIHx8IHt9XG4gIGUudHlwZSA9IHR5cGVcbiAgZS50YXJnZXQgPSBlbFxuICBlLnRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgaWYgKGRvbUNoYW5nZXMpIHtcbiAgICB1cGRhdGVFbGVtZW50KGVsLCBkb21DaGFuZ2VzKVxuICB9XG4gIHJldHVybiBlbC5maXJlRXZlbnQodHlwZSwgZSlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmdldFJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgcmV0dXJuIHRoaXMubm9kZU1hcFtyZWZdXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQgKGVsLCBjaGFuZ2VzKSB7XG4gIGNvbnN0IGF0dHJzID0gY2hhbmdlcy5hdHRycyB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gYXR0cnMpIHtcbiAgICBlbC5zZXRBdHRyKG5hbWUsIGF0dHJzW25hbWVdLCB0cnVlKVxuICB9XG4gIGNvbnN0IHN0eWxlID0gY2hhbmdlcy5zdHlsZSB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGUpIHtcbiAgICBlbC5zZXRTdHlsZShuYW1lLCBzdHlsZVtuYW1lXSwgdHJ1ZSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTm9kZSAoKSB7XG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxuICB0aGlzLnBhcmVudE5vZGUgPSBudWxsXG4gIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsXG4gIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbFxufVxuXG5Ob2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXVxuICBpZiAoZG9jKSB7XG4gICAgZGVsZXRlIHRoaXMuZG9jSWRcbiAgICBkZWxldGUgZG9jLm5vZGVNYXBbdGhpcy5ub2RlSWRdXG4gIH1cbiAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBjaGlsZC5kZXN0cm95KClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVsZW1lbnQgKHR5cGUgPSBERUZBVUxUX1RBR19OQU1FLCBwcm9wcykge1xuICBwcm9wcyA9IHByb3BzIHx8IHt9XG4gIHRoaXMubm9kZVR5cGUgPSAxXG4gIHRoaXMubm9kZUlkID0gKG5leHROb2RlUmVmKyspLnRvU3RyaW5nKClcbiAgdGhpcy5yZWYgPSB0aGlzLm5vZGVJZFxuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMuYXR0ciA9IHByb3BzLmF0dHIgfHwge31cbiAgdGhpcy5jbGFzc1N0eWxlID0gcHJvcHMuY2xhc3NTdHlsZSB8fCB7fVxuICB0aGlzLnN0eWxlID0gcHJvcHMuc3R5bGUgfHwge31cbiAgdGhpcy5ldmVudCA9IHt9XG4gIHRoaXMuY2hpbGRyZW4gPSBbXVxuICB0aGlzLnB1cmVDaGlsZHJlbiA9IFtdXG59XG5cbkVsZW1lbnQucHJvdG90eXBlID0gbmV3IE5vZGUoKVxuXG5FbGVtZW50LnByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4sIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aClcbiAgICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLmFkZEVsZW1lbnQobm9kZSwgdGhpcy5yZWYsIC0xKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5sZW5ndGgsIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uIChub2RlLCBiZWZvcmUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAobm9kZSA9PT0gYmVmb3JlIHx8IG5vZGUubmV4dFNpYmxpbmcgPT09IGJlZm9yZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IHB1cmVCZWZvcmUgPSBuZXh0RWxlbWVudChiZWZvcmUpXG4gICAgICBjb25zdCBpbmRleCA9IGluc2VydEluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgcHVyZUJlZm9yZVxuICAgICAgICAgID8gdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwdXJlQmVmb3JlKVxuICAgICAgICAgIDogdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihiZWZvcmUpLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlID0gbmV4dEVsZW1lbnQoYmVmb3JlKVxuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICBwdXJlQmVmb3JlXG4gICAgICAgICAgPyB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHB1cmVCZWZvcmUpXG4gICAgICAgICAgOiB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGhcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLmRvY0lkICYmIGluZGV4ID49IDApIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIubW92ZUVsZW1lbnQobm9kZS5yZWYsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbiAobm9kZSwgYWZ0ZXIpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUgIT09IHRoaXMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAobm9kZSA9PT0gYWZ0ZXIgfHwgbm9kZS5wcmV2aW91c1NpYmxpbmcgPT09IGFmdGVyKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFub2RlLnBhcmVudE5vZGUpIHtcbiAgICBsaW5rUGFyZW50KG5vZGUsIHRoaXMpXG4gICAgaW5zZXJ0SW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdGhpcy5jaGlsZHJlbi5pbmRleE9mKGFmdGVyKSArIDEsIHRydWUpXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIHJlZ2lzdGVyTm9kZSh0aGlzLmRvY0lkLCBub2RlKVxuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBpbnNlcnRJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHJldmlvdXNFbGVtZW50KGFmdGVyKSkgKyAxXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCBpbmRleClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihhZnRlcikgKyAxLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHJldmlvdXNFbGVtZW50KGFmdGVyKSkgKyAxXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gKG5vZGUsIHByZXNlcnZlZCkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmVtb3ZlSW5kZXgobm9kZSwgdGhpcy5jaGlsZHJlbiwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmVtb3ZlSW5kZXgobm9kZSwgdGhpcy5wdXJlQ2hpbGRyZW4pXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIGxpc3RlbmVyLnJlbW92ZUVsZW1lbnQobm9kZS5yZWYpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghcHJlc2VydmVkKSB7XG4gICAgbm9kZS5kZXN0cm95KClcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgdGhpcy5wdXJlQ2hpbGRyZW4uZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUVsZW1lbnQobm9kZS5yZWYpXG4gICAgfSlcbiAgfVxuICB0aGlzLmNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgbm9kZS5kZXN0cm95KClcbiAgfSlcbiAgdGhpcy5jaGlsZHJlbi5sZW5ndGggPSAwXG4gIHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCA9IDBcbn1cblxuZnVuY3Rpb24gbmV4dEVsZW1lbnQgKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmV2aW91c0VsZW1lbnQgKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucHJldmlvdXNTaWJsaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gbGlua1BhcmVudCAobm9kZSwgcGFyZW50KSB7XG4gIG5vZGUucGFyZW50Tm9kZSA9IHBhcmVudFxuICBpZiAocGFyZW50LmRvY0lkKSB7XG4gICAgbm9kZS5kb2NJZCA9IHBhcmVudC5kb2NJZFxuICAgIG5vZGUub3duZXJEb2N1bWVudCA9IHBhcmVudC5vd25lckRvY3VtZW50XG4gICAgbm9kZS5vd25lckRvY3VtZW50Lm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxuICAgIG5vZGUuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxXG4gIH1cbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICBsaW5rUGFyZW50KGNoaWxkLCBub2RlKVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWdpc3Rlck5vZGUgKGRvY0lkLCBub2RlKSB7XG4gIGNvbnN0IGRvYyA9IGluc3RhbmNlTWFwW2RvY0lkXVxuICBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF0gPSBub2RlXG59XG5cbmZ1bmN0aW9uIGluc2VydEluZGV4ICh0YXJnZXQsIGxpc3QsIG5ld0luZGV4LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICBuZXdJbmRleCA9IDBcbiAgfVxuICBjb25zdCBiZWZvcmUgPSBsaXN0W25ld0luZGV4IC0gMV1cbiAgY29uc3QgYWZ0ZXIgPSBsaXN0W25ld0luZGV4XVxuICBsaXN0LnNwbGljZShuZXdJbmRleCwgMCwgdGFyZ2V0KVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gdGFyZ2V0KVxuICAgIHRhcmdldC5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmVcbiAgICB0YXJnZXQubmV4dFNpYmxpbmcgPSBhZnRlclxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQpXG4gIH1cbiAgcmV0dXJuIG5ld0luZGV4XG59XG5cbmZ1bmN0aW9uIG1vdmVJbmRleCAodGFyZ2V0LCBsaXN0LCBuZXdJbmRleCwgY2hhbmdlU2libGluZykge1xuICBjb25zdCBpbmRleCA9IGxpc3QuaW5kZXhPZih0YXJnZXQpXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGNvbnN0IGJlZm9yZSA9IGxpc3RbaW5kZXggLSAxXVxuICAgIGNvbnN0IGFmdGVyID0gbGlzdFtpbmRleCArIDFdXG4gICAgYmVmb3JlICYmIChiZWZvcmUubmV4dFNpYmxpbmcgPSBhZnRlcilcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlKVxuICB9XG4gIGxpc3Quc3BsaWNlKGluZGV4LCAxKVxuICBsZXQgbmV3SW5kZXhBZnRlciA9IG5ld0luZGV4XG4gIGlmIChpbmRleCA8PSBuZXdJbmRleCkge1xuICAgIG5ld0luZGV4QWZ0ZXIgPSBuZXdJbmRleCAtIDFcbiAgfVxuICBjb25zdCBiZWZvcmVOZXcgPSBsaXN0W25ld0luZGV4QWZ0ZXIgLSAxXVxuICBjb25zdCBhZnRlck5ldyA9IGxpc3RbbmV3SW5kZXhBZnRlcl1cbiAgbGlzdC5zcGxpY2UobmV3SW5kZXhBZnRlciwgMCwgdGFyZ2V0KVxuICBpZiAoY2hhbmdlU2libGluZykge1xuICAgIGJlZm9yZU5ldyAmJiAoYmVmb3JlTmV3Lm5leHRTaWJsaW5nID0gdGFyZ2V0KVxuICAgIHRhcmdldC5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmVOZXdcbiAgICB0YXJnZXQubmV4dFNpYmxpbmcgPSBhZnRlck5ld1xuICAgIGFmdGVyTmV3ICYmIChhZnRlck5ldy5wcmV2aW91c1NpYmxpbmcgPSB0YXJnZXQpXG4gIH1cbiAgaWYgKGluZGV4ID09PSBuZXdJbmRleEFmdGVyKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgcmV0dXJuIG5ld0luZGV4XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUluZGV4ICh0YXJnZXQsIGxpc3QsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuYXR0cltrZXldID09PSB2YWx1ZSAmJiBzaWxlbnQgIT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5hdHRyW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldEF0dHIodGhpcy5yZWYsIGtleSwgdmFsdWUpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLnN0eWxlW2tleV0gPT09IHZhbHVlICYmIHNpbGVudCAhPT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLnN0eWxlW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlKHRoaXMucmVmLCBrZXksIHZhbHVlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnJlc2V0Q2xhc3NTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jbGFzc1N0eWxlKSB7XG4gICAgdGhpcy5jbGFzc1N0eWxlW2tleV0gPSAnJ1xuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoY2xhc3NTdHlsZSkge1xuICB0aGlzLnJlc2V0Q2xhc3NTdHlsZSgpXG4gIGV4dGVuZCh0aGlzLmNsYXNzU3R5bGUsIGNsYXNzU3R5bGUpXG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlcyh0aGlzLnJlZiwgdGhpcy50b1N0eWxlKCkpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICB0aGlzLmV2ZW50W3R5cGVdID0gaGFuZGxlclxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5hZGRFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodGhpcy5ldmVudFt0eXBlXSkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50W3R5cGVdXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgZSkge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudFt0eXBlXVxuICBpZiAoaGFuZGxlcikge1xuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLmNsYXNzU3R5bGUsIHRoaXMuc3R5bGUpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJlZjogdGhpcy5yZWYudG9TdHJpbmcoKSxcbiAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgYXR0cjogdGhpcy5hdHRyLFxuICAgIHN0eWxlOiB0aGlzLnRvU3R5bGUoKVxuICB9XG4gIGNvbnN0IGV2ZW50ID0gT2JqZWN0LmtleXModGhpcy5ldmVudClcbiAgaWYgKGV2ZW50Lmxlbmd0aCkge1xuICAgIHJlc3VsdC5ldmVudCA9IGV2ZW50XG4gIH1cbiAgaWYgKHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJlc3VsdC5jaGlsZHJlbiA9IHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvSlNPTigpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPCcgKyB0aGlzLnR5cGUgK1xuICAgICcgYXR0cj0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5hdHRyKSArXG4gICAgJyBzdHlsZT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy50b1N0eWxlKCkpICsgJz4nICtcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b1N0cmluZygpKS5qb2luKCcnKSArXG4gICAgJzwvJyArIHRoaXMudHlwZSArICc+J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tbWVudCAodmFsdWUpIHtcbiAgdGhpcy5ub2RlVHlwZSA9IDhcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9ICdjb21tZW50J1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuQ29tbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkNvbW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwhLS0gJyArIHRoaXMudmFsdWUgKyAnIC0tPidcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RlbmVyIChpZCwgaGFuZGxlcikge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5iYXRjaGVkID0gZmFsc2VcbiAgdGhpcy51cGRhdGVzID0gW11cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlclxuICB9XG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdjcmVhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnVwZGF0ZUZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3VwZGF0ZUZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVmcmVzaEZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3JlZnJlc2hGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBjb25zdCBib2R5ID0gZWxlbWVudC50b0pTT04oKVxuICBjb25zdCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW5cbiAgZGVsZXRlIGJvZHkuY2hpbGRyZW5cbiAgY29uc3QgYWN0aW9ucyA9IFtjcmVhdGVBY3Rpb24oJ2NyZWF0ZUJvZHknLCBbYm9keV0pXVxuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBhY3Rpb25zLnB1c2guYXBwbHkoYWN0aW9ucywgY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oJ2FkZEVsZW1lbnQnLCBbYm9keS5yZWYsIGNoaWxkLCAtMV0pXG4gICAgfSkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCByZWYsIGluZGV4KSB7XG4gIGlmICghKGluZGV4ID49IDApKSB7XG4gICAgaW5kZXggPSAtMVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW3JlZiwgZWxlbWVudC50b0pTT04oKSwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gcmVmLm1hcCgocikgPT4gY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JdKSlcbiAgICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUVsZW1lbnQnLCBbcmVmXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5tb3ZlRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXgpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ21vdmVFbGVtZW50JywgW3RhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlQXR0cnMnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKHJlZiwga2V5LCB2YWx1ZSkge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICByZXN1bHRba2V5XSA9IHZhbHVlXG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHJlc3VsdF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0U3R5bGVzID0gZnVuY3Rpb24gKHJlZiwgc3R5bGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZVN0eWxlJywgW3JlZiwgc3R5bGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIChhY3Rpb25zLCBjYikge1xuICByZXR1cm4gY2IgJiYgY2IoKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gIGNvbnN0IHVwZGF0ZXMgPSB0aGlzLnVwZGF0ZXNcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuXG4gIGlmICghQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xuICAgIGFjdGlvbnMgPSBbYWN0aW9uc11cbiAgfVxuXG4gIGlmICh0aGlzLmJhdGNoZWQpIHtcbiAgICB1cGRhdGVzLnB1c2guYXBwbHkodXBkYXRlcywgYWN0aW9ucylcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gaGFuZGxlcihhY3Rpb25zKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgcmV0dXJuIHsgbW9kdWxlOiAnZG9tJywgbWV0aG9kOiBuYW1lLCBhcmdzOiBhcmdzIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9saXN0ZW5lci5qc1xuICoqLyIsIi8vIGJ1aWx0IGJ5IG5wbSBydW4gYnVpbGQ6Y29uZmlnXG5cbmltcG9ydCAqIGFzIFdlZXggZnJvbSAnLi4vZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBXZWV4XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IFdlZXggZnJhbWV3b3JrIGVudHJ5LlxuICovXG5cbmV4cG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnLi9zdGF0aWMvY3JlYXRlJ1xuZXhwb3J0IHsgaW5pdCwgcmVmcmVzaEluc3RhbmNlLCBkZXN0cm95SW5zdGFuY2UgfSBmcm9tICcuL3N0YXRpYy9saWZlJ1xuZXhwb3J0IHsgcmVnaXN0ZXJDb21wb25lbnRzLCByZWdpc3Rlck1vZHVsZXMsIHJlZ2lzdGVyTWV0aG9kcyB9IGZyb20gJy4vc3RhdGljL3JlZ2lzdGVyJ1xuZXhwb3J0IHsgcmVjZWl2ZVRhc2tzIH0gZnJvbSAnLi9zdGF0aWMvYnJpZGdlJ1xuZXhwb3J0IHsgZ2V0Um9vdCB9IGZyb20gJy4vc3RhdGljL21pc2MnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgQXBwIGZyb20gJy4uL2FwcCdcbmltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5pbXBvcnQgeyBpbml0IGFzIGluaXRBcHAgfSBmcm9tICcuLi9hcHAvY3RybCdcblxuLyoqXG4gKiBDcmVhdGUgYSBXZWV4IGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9uc10gb3B0aW9uIGBIQVNfTE9HYCBlbmFibGUgcHJpbnQgbG9nXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtkYXRhXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UgKGlkLCBjb2RlLCBvcHRpb25zLCBkYXRhKSB7XG4gIGxldCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICBsZXQgcmVzdWx0XG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBBcHAoaWQsIG9wdGlvbnMpXG4gICAgaW5zdGFuY2VNYXBbaWRdID0gaW5zdGFuY2VcbiAgICByZXN1bHQgPSBpbml0QXBwKGluc3RhbmNlLCBjb2RlLCBkYXRhKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvY3JlYXRlLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IGluc3RhbmNlIGNvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7IHJlcXVpcmVNb2R1bGUgfSBmcm9tICcuL3JlZ2lzdGVyJ1xuaW1wb3J0IHsgdXBkYXRlQWN0aW9ucywgY2FsbFRhc2tzIH0gZnJvbSAnLi9jdHJsJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2luc3RhbmNlJ1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbkFwcC5wcm90b3R5cGUucmVxdWlyZU1vZHVsZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiByZXF1aXJlTW9kdWxlKHRoaXMsIG5hbWUpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQXBwLnByb3RvdHlwZS51cGRhdGVBY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICB1cGRhdGVBY3Rpb25zKHRoaXMpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuQXBwLnByb3RvdHlwZS5jYWxsVGFza3MgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgY2FsbFRhc2tzKHRoaXMsIHRhc2tzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvaW5kZXguanNcbiAqKi8iLCJsZXQgbmF0aXZlTW9kdWxlcyA9IHt9XG5cbi8vIGZvciB0ZXN0aW5nXG5cbi8qKlxuICogZm9yIHRlc3RpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsZSAobW9kdWxlTmFtZSkge1xuICByZXR1cm4gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxufVxuXG4vKipcbiAqIGZvciB0ZXN0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZHVsZXMgKCkge1xuICBuYXRpdmVNb2R1bGVzID0ge31cbn1cblxuLy8gZm9yIGZyYW1ld29ya1xuXG4vKipcbiAqIGluaXQgbW9kdWxlcyBmb3IgYW4gYXBwIGluc3RhbmNlXG4gKiB0aGUgc2Vjb25kIHBhcmFtIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0ZWQgbWV0aG9kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0TW9kdWxlcyAobW9kdWxlcywgaWZSZXBsYWNlKSB7XG4gIGZvciAoY29uc3QgbW9kdWxlTmFtZSBpbiBtb2R1bGVzKSB7XG4gICAgLy8gaW5pdCBgbW9kdWxlc1ttb2R1bGVOYW1lXVtdYFxuICAgIGxldCBtZXRob2RzID0gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxuICAgIGlmICghbWV0aG9kcykge1xuICAgICAgbWV0aG9kcyA9IHt9XG4gICAgICBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdID0gbWV0aG9kc1xuICAgIH1cblxuICAgIC8vIHB1c2ggZWFjaCBub24tZXhpc3RlZCBuZXcgbWV0aG9kXG4gICAgbW9kdWxlc1ttb2R1bGVOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZXRob2QgPSB7XG4gICAgICAgICAgbmFtZTogbWV0aG9kXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFtZXRob2RzW21ldGhvZC5uYW1lXSB8fCBpZlJlcGxhY2UpIHtcbiAgICAgICAgbWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2RcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogaW5pdCBhcHAgbWV0aG9kc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1ldGhvZHMgKFZtLCBhcGlzKSB7XG4gIGNvbnN0IHAgPSBWbS5wcm90b3R5cGVcblxuICBmb3IgKGNvbnN0IGFwaU5hbWUgaW4gYXBpcykge1xuICAgIGlmICghcC5oYXNPd25Qcm9wZXJ0eShhcGlOYW1lKSkge1xuICAgICAgcFthcGlOYW1lXSA9IGFwaXNbYXBpTmFtZV1cbiAgICB9XG4gIH1cbn1cblxuLy8gZm9yIGFwcFxuXG4vKipcbiAqIGdldCBhIG1vZHVsZSBvZiBtZXRob2RzIGZvciBhbiBhcHAgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVNb2R1bGUgKGFwcCwgbmFtZSkge1xuICBjb25zdCBtZXRob2RzID0gbmF0aXZlTW9kdWxlc1tuYW1lXVxuICBjb25zdCB0YXJnZXQgPSB7fVxuICBmb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gbWV0aG9kcykge1xuICAgIHRhcmdldFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiBhcHAuY2FsbFRhc2tzKHtcbiAgICAgIG1vZHVsZTogbmFtZSxcbiAgICAgIG1ldGhvZDogbWV0aG9kTmFtZSxcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBnZXQgYSBjdXN0b20gY29tcG9uZW50IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVDdXN0b21Db21wb25lbnQgKGFwcCwgbmFtZSkge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gYXBwXG4gIHJldHVybiBjdXN0b21Db21wb25lbnRNYXBbbmFtZV1cbn1cblxuLyoqXG4gKiByZWdpc3RlciBhIGN1c3RvbSBjb21wb25lbnQgb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDdXN0b21Db21wb25lbnQgKGFwcCwgbmFtZSwgZGVmKSB7XG4gIGNvbnN0IHsgY3VzdG9tQ29tcG9uZW50TWFwIH0gPSBhcHBcblxuICBpZiAoY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdKSB7XG4gICAgY29uc29sZS5lcnJvcihgW0pTIEZyYW1ld29ya10gZGVmaW5lIGEgY29tcG9uZW50KCR7bmFtZX0pIHRoYXQgYWxyZWFkeSBleGlzdHNgKVxuICAgIHJldHVyblxuICB9XG5cbiAgY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdID0gZGVmXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL3JlZ2lzdGVyLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBpbnN0YW5jZSBjb250cm9scyBmcm9tIG5hdGl2ZVxuICpcbiAqIC0gaW5pdCBidW5kbGVcbiAqIC0gZmlyZSBldmVudFxuICogLSBjYWxsYmFja1xuICogLSBkZXN0cm95XG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cbmV4cG9ydCB7IGluaXQgfSBmcm9tICcuL2luaXQnXG5cbmV4cG9ydCB7XG4gIHJlZnJlc2gsXG4gIGRlc3Ryb3ksXG4gIGdldFJvb3RFbGVtZW50LFxuICBmaXJlRXZlbnQsXG4gIGNhbGxiYWNrLFxuICB1cGRhdGVBY3Rpb25zLFxuICBjYWxsVGFza3Ncbn0gZnJvbSAnLi9taXNjJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBpbnN0YW5jZSBjb250cm9scyBmcm9tIG5hdGl2ZVxuICpcbiAqIC0gaW5pdCBidW5kbGVcbiAqXG4gKiBjb3JyZXNwb25kZWQgd2l0aCB0aGUgQVBJIG9mIGluc3RhbmNlIG1hbmFnZXIgKGZyYW1ld29yay5qcylcbiAqL1xuXG5pbXBvcnQgVm0gZnJvbSAnLi4vLi4vdm0nXG5pbXBvcnQgeyByZW1vdmVXZWV4UHJlZml4IH0gZnJvbSAnLi4vLi4vdXRpbCdcbmltcG9ydCB7XG4gIGRlZmluZUZuLFxuICBib290c3RyYXAsXG4gIHJlZ2lzdGVyXG59IGZyb20gJy4uL2J1bmRsZSdcbmltcG9ydCB7IHVwZGF0ZUFjdGlvbnMgfSBmcm9tICcuL21pc2MnXG5cbi8qKlxuICogSW5pdCBhbiBhcHAgYnkgcnVuIGNvZGUgd2l0Z2ggZGF0YVxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0IChhcHAsIGNvZGUsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gSW50aWFsaXplIGFuIGluc3RhbmNlIHdpdGg6XFxuJywgZGF0YSlcbiAgbGV0IHJlc3VsdFxuXG4gIC8vIHByZXBhcmUgYXBwIGVudiBtZXRob2RzXG4gIGNvbnN0IGJ1bmRsZURlZmluZSA9ICguLi5hcmdzKSA9PiBkZWZpbmVGbihhcHAsIC4uLmFyZ3MpXG4gIGNvbnN0IGJ1bmRsZUJvb3RzdHJhcCA9IChuYW1lLCBjb25maWcsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKGFwcCwgbmFtZSwgY29uZmlnLCBfZGF0YSB8fCBkYXRhKVxuICAgIHVwZGF0ZUFjdGlvbnMoYXBwKVxuICAgIGFwcC5kb2MubGlzdGVuZXIuY3JlYXRlRmluaXNoKClcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBBZnRlciBpbnRpYWxpemVkIGFuIGluc3RhbmNlKCR7YXBwLmlkfSlgKVxuICB9XG4gIGNvbnN0IGJ1bmRsZVZtID0gVm1cbiAgY29uc3QgYnVuZGxlUmVnaXN0ZXIgPSAoLi4uYXJncykgPT4gcmVnaXN0ZXIoYXBwLCAuLi5hcmdzKVxuICBjb25zdCBidW5kbGVSZW5kZXIgPSAobmFtZSwgX2RhdGEpID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAoYXBwLCBuYW1lLCB7fSwgX2RhdGEpXG4gIH1cbiAgY29uc3QgYnVuZGxlUmVxdWlyZSA9IG5hbWUgPT4gX2RhdGEgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcChhcHAsIG5hbWUsIHt9LCBfZGF0YSlcbiAgfVxuICBjb25zdCBidW5kbGVEb2N1bWVudCA9IGFwcC5kb2NcbiAgY29uc3QgYnVuZGxlUmVxdWlyZU1vZHVsZSA9IG5hbWUgPT4gYXBwLnJlcXVpcmVNb2R1bGUocmVtb3ZlV2VleFByZWZpeChuYW1lKSlcblxuICAvLyBwcmVwYXJlIGNvZGVcbiAgbGV0IGZ1bmN0aW9uQm9keVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBjb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gYGZ1bmN0aW9uICgpIHsuLi59YCAtPiBgey4uLn1gXG4gICAgLy8gbm90IHZlcnkgc3RyaWN0XG4gICAgZnVuY3Rpb25Cb2R5ID0gY29kZS50b1N0cmluZygpLnN1YnN0cigxMilcbiAgfVxuICBlbHNlIGlmIChjb2RlKSB7XG4gICAgZnVuY3Rpb25Cb2R5ID0gY29kZS50b1N0cmluZygpXG4gIH1cblxuICAvLyBydW4gY29kZSBhbmQgZ2V0IHJlc3VsdFxuICBjb25zdCB7IFdYRW52aXJvbm1lbnQgfSA9IGdsb2JhbFxuICBpZiAoV1hFbnZpcm9ubWVudCAmJiBXWEVudmlyb25tZW50LnBsYXRmb3JtICE9PSAnV2ViJykge1xuICAgIC8vIHRpbWVyIEFQSXMgcG9seWZpbGwgaW4gbmF0aXZlXG4gICAgY29uc3QgdGltZXIgPSBhcHAucmVxdWlyZU1vZHVsZSgndGltZXInKVxuICAgIGNvbnN0IHRpbWVyQVBJcyA9IHtcbiAgICAgIHNldFRpbWVvdXQ6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYXJnc1swXSguLi5hcmdzLnNsaWNlKDIpKVxuICAgICAgICB9XG4gICAgICAgIHRpbWVyLnNldFRpbWVvdXQoaGFuZGxlciwgYXJnc1sxXSlcbiAgICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIHNldEludGVydmFsOiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFyZ3NbMF0oLi4uYXJncy5zbGljZSgyKSlcbiAgICAgICAgfVxuICAgICAgICB0aW1lci5zZXRJbnRlcnZhbChoYW5kbGVyLCBhcmdzWzFdKVxuICAgICAgICByZXR1cm4gYXBwLnVpZC50b1N0cmluZygpXG4gICAgICB9LFxuICAgICAgY2xlYXJUaW1lb3V0OiAobikgPT4ge1xuICAgICAgICB0aW1lci5jbGVhclRpbWVvdXQobilcbiAgICAgIH0sXG4gICAgICBjbGVhckludGVydmFsOiAobikgPT4ge1xuICAgICAgICB0aW1lci5jbGVhckludGVydmFsKG4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnZGVmaW5lJyxcbiAgICAgICdyZXF1aXJlJyxcbiAgICAgICdkb2N1bWVudCcsXG4gICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICdyZWdpc3RlcicsXG4gICAgICAncmVuZGVyJyxcbiAgICAgICdfX3dlZXhfZGVmaW5lX18nLCAvLyBhbGlhcyBmb3IgZGVmaW5lXG4gICAgICAnX193ZWV4X2Jvb3RzdHJhcF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9kb2N1bWVudF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgJ19fd2VleF9yZXF1aXJlX18nLFxuICAgICAgJ19fd2VleF92aWV3bW9kZWxfXycsXG4gICAgICAnc2V0VGltZW91dCcsXG4gICAgICAnc2V0SW50ZXJ2YWwnLFxuICAgICAgJ2NsZWFyVGltZW91dCcsXG4gICAgICAnY2xlYXJJbnRlcnZhbCcsXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVSZXF1aXJlTW9kdWxlLFxuICAgICAgYnVuZGxlVm0sXG4gICAgICB0aW1lckFQSXMuc2V0VGltZW91dCxcbiAgICAgIHRpbWVyQVBJcy5zZXRJbnRlcnZhbCxcbiAgICAgIHRpbWVyQVBJcy5jbGVhclRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuY2xlYXJJbnRlcnZhbClcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdkZWZpbmUnLFxuICAgICAgJ3JlcXVpcmUnLFxuICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICdib290c3RyYXAnLFxuICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICdyZW5kZXInLFxuICAgICAgJ19fd2VleF9kZWZpbmVfXycsIC8vIGFsaWFzIGZvciBkZWZpbmVcbiAgICAgICdfX3dlZXhfYm9vdHN0cmFwX18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnX193ZWV4X2RvY3VtZW50X18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnX193ZWV4X3JlcXVpcmVfXycsXG4gICAgICAnX193ZWV4X3ZpZXdtb2RlbF9fJyxcbiAgICAgIGZ1bmN0aW9uQm9keVxuICAgIClcblxuICAgIGZuKFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlUmVxdWlyZSxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlUmVnaXN0ZXIsXG4gICAgICBidW5kbGVSZW5kZXIsXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZVJlcXVpcmVNb2R1bGUsXG4gICAgICBidW5kbGVWbSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9pbml0LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBWaWV3TW9kZWwgQ29uc3RydWN0b3IgJiBkZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7XG4gIGluaXRTdGF0ZVxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYnVpbGRcbn0gZnJvbSAnLi9jb21waWxlcidcbmltcG9ydCB7XG4gIHNldCxcbiAgZGVsXG59IGZyb20gJy4uL2NvcmUvb2JzZXJ2ZXInXG5pbXBvcnQge1xuICB3YXRjaFxufSBmcm9tICcuL2RpcmVjdGl2ZSdcbmltcG9ydCB7XG4gIGluaXRFdmVudHMsXG4gIG1peGluRXZlbnRzXG59IGZyb20gJy4vZXZlbnRzJ1xuXG4vKipcbiAqIFZpZXdNb2RlbCBjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAgICBjb21wb25lbnQgb3B0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IHBhcmVudFZtICAgd2hpY2ggY29udGFpbnMgX2FwcFxuICogQHBhcmFtIHtvYmplY3R9IHBhcmVudEVsICAgcm9vdCBlbGVtZW50IG9yIGZyYWcgYmxvY2tcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXJnZWREYXRhIGV4dGVybmFsIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBleHRlcm5hbEV2ZW50cyBleHRlcm5hbCBldmVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVm0gKFxuICB0eXBlLFxuICBvcHRpb25zLFxuICBwYXJlbnRWbSxcbiAgcGFyZW50RWwsXG4gIG1lcmdlZERhdGEsXG4gIGV4dGVybmFsRXZlbnRzXG4pIHtcbiAgcGFyZW50Vm0gPSBwYXJlbnRWbSB8fCB7fVxuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnRWbS5fcmVhbFBhcmVudCA/IHBhcmVudFZtLl9yZWFsUGFyZW50IDogcGFyZW50Vm1cbiAgdGhpcy5fYXBwID0gcGFyZW50Vm0uX2FwcCB8fCB7fVxuICBwYXJlbnRWbS5fY2hpbGRyZW5WbXMgJiYgcGFyZW50Vm0uX2NoaWxkcmVuVm1zLnB1c2godGhpcylcblxuICBpZiAoIW9wdGlvbnMgJiYgdGhpcy5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcCkge1xuICAgIG9wdGlvbnMgPSB0aGlzLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwW3R5cGVdXG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhIHx8IHt9XG5cbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5fbWV0aG9kcyA9IG9wdGlvbnMubWV0aG9kcyB8fCB7fVxuICB0aGlzLl9jb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwge31cbiAgdGhpcy5fY3NzID0gb3B0aW9ucy5zdHlsZSB8fCB7fVxuICB0aGlzLl9pZHMgPSB7fVxuICB0aGlzLl92bUV2ZW50cyA9IHt9XG4gIHRoaXMuX2NoaWxkcmVuVm1zID0gW11cbiAgdGhpcy5fdHlwZSA9IHR5cGVcblxuICAvLyBiaW5kIGV2ZW50cyBhbmQgbGlmZWN5Y2xlc1xuICBpbml0RXZlbnRzKHRoaXMsIGV4dGVybmFsRXZlbnRzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiaW5pdFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6aW5pdCcpXG4gIHRoaXMuX2luaXRlZCA9IHRydWVcblxuICAvLyBwcm94eSBkYXRhIGFuZCBtZXRob2RzXG4gIC8vIG9ic2VydmUgZGF0YSBhbmQgYWRkIHRoaXMgdG8gdm1zXG4gIHRoaXMuX2RhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJyA/IGRhdGEoKSA6IGRhdGFcbiAgaWYgKG1lcmdlZERhdGEpIHtcbiAgICBleHRlbmQodGhpcy5fZGF0YSwgbWVyZ2VkRGF0YSlcbiAgfVxuICBpbml0U3RhdGUodGhpcylcblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcImNyZWF0ZWRcIiBsaWZlY3ljbGUgaW4gVm0oJHt0aGlzLl90eXBlfSlgKVxuICB0aGlzLiRlbWl0KCdob29rOmNyZWF0ZWQnKVxuICB0aGlzLl9jcmVhdGVkID0gdHJ1ZVxuXG4gIC8vIGJhY2t3YXJkIG9sZCByZWFkeSBlbnRyeVxuICBpZiAob3B0aW9ucy5tZXRob2RzICYmIG9wdGlvbnMubWV0aG9kcy5yZWFkeSkge1xuICAgIGNvbnNvbGUud2FybignXCJleHBvcnRzLm1ldGhvZHMucmVhZHlcIiBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICdwbGVhc2UgdXNlIFwiZXhwb3J0cy5jcmVhdGVkXCIgaW5zdGVhZCcpXG4gICAgb3B0aW9ucy5tZXRob2RzLnJlYWR5LmNhbGwodGhpcylcbiAgfVxuXG4gIGlmICghdGhpcy5fYXBwLmRvYykge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gaWYgbm8gcGFyZW50RWxlbWVudCB0aGVuIHNwZWNpZnkgdGhlIGRvY3VtZW50RWxlbWVudFxuICB0aGlzLl9wYXJlbnRFbCA9IHBhcmVudEVsIHx8IHRoaXMuX2FwcC5kb2MuZG9jdW1lbnRFbGVtZW50XG4gIGJ1aWxkKHRoaXMpXG59XG5cbm1peGluRXZlbnRzKFZtLnByb3RvdHlwZSlcblxuLyoqXG4gKiBXYXRjaCBhbiBmdW5jdGlvbiBhbmQgYmluZCBhbGwgdGhlIGRhdGEgYXBwZWFyZWQgaW4gaXQuIFdoZW4gdGhlIHJlbGF0ZWRcbiAqIGRhdGEgY2hhbmdlcywgdGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdpdGggbmV3IHZhbHVlIGFzIDFzdCBwYXJhbS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuVm0ucHJvdG90eXBlLiR3YXRjaCA9IGZ1bmN0aW9uIChmbiwgY2FsbGJhY2spIHtcbiAgd2F0Y2godGhpcywgZm4sIGNhbGxiYWNrKVxufVxuXG5WbS5zZXQgPSBzZXRcblZtLmRlbGV0ZSA9IGRlbFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IHtcbiAgZXh0ZW5kLFxuICBkZWYsXG4gIHJlbW92ZSxcbiAgaGFzT3duLFxuICBiaW5kLFxuICB0b0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdFxufSBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMnXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIGNvbnN0IGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMClcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbmV4cG9ydCBjb25zdCBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9XG5cbmxldCBfU2V0XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBTZXQudG9TdHJpbmcoKS5tYXRjaCgvbmF0aXZlIGNvZGUvKSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldFxufVxuZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gIT09IHVuZGVmaW5lZFxuICB9XG4gIF9TZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0aGlzLnNldFtrZXldID0gMVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG59XG5cbmV4cG9ydCB7IF9TZXQgfVxuXG4vKipcbiAqIFBvbHlmaWxsIGluIGlPUzcgYnkgbmF0aXZlIGJlY2F1c2UgdGhlIEphdmFTY3JpcHQgcG9seWZpbGwgaGFzIG1lbW9yeSBwcm9ibGVtLlxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdTZXQgKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICBpZiAodHlwZW9mIG5hdGl2ZVNldCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbmF0aXZlU2V0LmNyZWF0ZSgpXG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuICByZXR1cm4gbmV3IF9TZXQoKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXVxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9XG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIHRvVXBwZXIpXG59KVxuXG5mdW5jdGlvbiB0b1VwcGVyIChfLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJydcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSkudG9Mb3dlckNhc2UoKVxufVxuXG4vLyB3ZWV4IG5hbWUgcnVsZXNcblxuY29uc3QgV0VFWF9DT01QT05FTlRfUkVHID0gL15Ad2VleC1jb21wb25lbnRcXC8vXG5jb25zdCBXRUVYX01PRFVMRV9SRUcgPSAvXkB3ZWV4LW1vZHVsZVxcLy9cbmNvbnN0IE5PUk1BTF9NT0RVTEVfUkVHID0gL15cXC57MSwyfVxcLy9cbmNvbnN0IEpTX1NVUkZJWF9SRUcgPSAvXFwuanMkL1xuXG5leHBvcnQgY29uc3QgaXNXZWV4Q29tcG9uZW50ID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9DT01QT05FTlRfUkVHKVxuZXhwb3J0IGNvbnN0IGlzV2VleE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKFdFRVhfTU9EVUxFX1JFRylcbmV4cG9ydCBjb25zdCBpc05vcm1hbE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKE5PUk1BTF9NT0RVTEVfUkVHKVxuZXhwb3J0IGNvbnN0IGlzTnBtTW9kdWxlID0gbmFtZSA9PiAhaXNXZWV4Q29tcG9uZW50KG5hbWUpICYmICFpc1dlZXhNb2R1bGUobmFtZSkgJiYgIWlzTm9ybWFsTW9kdWxlKG5hbWUpXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVXZWV4UHJlZml4IChzdHIpIHtcbiAgY29uc3QgcmVzdWx0ID0gc3RyLnJlcGxhY2UoV0VFWF9DT01QT05FTlRfUkVHLCAnJykucmVwbGFjZShXRUVYX01PRFVMRV9SRUcsICcnKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVKU1N1cmZpeCAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShKU19TVVJGSVhfUkVHLCAnJylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC91dGlsL2luZGV4LmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi93YXRjaGVyJ1xuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7XG4gIG9ic2VydmUsXG4gIHByb3h5LFxuICB1bnByb3h5XG59IGZyb20gJy4vb2JzZXJ2ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdXG4gIGluaXREYXRhKHZtKVxuICBpbml0Q29tcHV0ZWQodm0pXG4gIGluaXRNZXRob2RzKHZtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIGxldCBkYXRhID0gdm0uX2RhdGFcblxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge31cbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBwcm94eSh2bSwga2V5c1tpXSlcbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB2bSlcbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtKSB7XG4gIGNvbnN0IGNvbXB1dGVkID0gdm0uX2NvbXB1dGVkXG4gIGlmIChjb21wdXRlZCkge1xuICAgIGZvciAobGV0IGtleSBpbiBjb21wdXRlZCkge1xuICAgICAgY29uc3QgdXNlckRlZiA9IGNvbXB1dGVkW2tleV1cbiAgICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGVmLmdldCA9IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLCB2bSlcbiAgICAgICAgZGVmLnNldCA9IG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICAgID8gdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgICAgID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICAgIDogYmluZCh1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICAgIGRlZi5zZXQgPSB1c2VyRGVmLnNldFxuICAgICAgICAgID8gYmluZCh1c2VyRGVmLnNldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwgZGVmKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZWRHZXR0ZXIgKGdldHRlciwgb3duZXIpIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG51bGwsIHtcbiAgICBsYXp5OiB0cnVlXG4gIH0pXG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKVxuICAgIH1cbiAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgd2F0Y2hlci5kZXBlbmQoKVxuICAgIH1cbiAgICByZXR1cm4gd2F0Y2hlci52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWV0aG9kcyAodm0pIHtcbiAgY29uc3QgbWV0aG9kcyA9IHZtLl9tZXRob2RzXG4gIGlmIChtZXRob2RzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHZtW2tleV0gPSBtZXRob2RzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL3N0YXRlLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbi8vIGltcG9ydCB7IHB1c2hXYXRjaGVyIH0gZnJvbSAnLi9iYXRjaGVyJ1xuaW1wb3J0IHtcbiAgd2FybixcbiAgcmVtb3ZlLFxuICBleHRlbmQsXG4gIGlzT2JqZWN0LFxuICBwYXJzZVBhdGgsXG4gIGNyZWF0ZU5ld1NldFxuICAvLyBfU2V0IGFzIFNldFxufSBmcm9tICcuLi91dGlsJ1xuXG5sZXQgdWlkID0gMFxubGV0IHByZXZUYXJnZXRcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBleHBPckZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheX0gZmlsdGVyc1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHR3b1dheVxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGRlZXBcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB1c2VyXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gc3luY1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGxhenlcbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3ByZVByb2Nlc3NdXG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwb3N0UHJvY2Vzc11cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhdGNoZXIgKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAvLyBtaXggaW4gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIGV4dGVuZCh0aGlzLCBvcHRpb25zKVxuICB9XG4gIGNvbnN0IGlzRm4gPSB0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJ1xuICB0aGlzLnZtID0gdm1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcylcbiAgdGhpcy5leHByZXNzaW9uID0gZXhwT3JGblxuICB0aGlzLmNiID0gY2JcbiAgdGhpcy5pZCA9ICsrdWlkIC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlXG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenkgLy8gZm9yIGxhenkgd2F0Y2hlcnNcbiAgdGhpcy5kZXBzID0gW11cbiAgdGhpcy5uZXdEZXBzID0gW11cbiAgdGhpcy5kZXBJZHMgPSBjcmVhdGVOZXdTZXQoKSAvLyBuZXcgU2V0KClcbiAgdGhpcy5uZXdEZXBJZHMgPSBjcmVhdGVOZXdTZXQoKSAvLyBuZXcgU2V0KClcbiAgLy8gcGFyc2UgZXhwcmVzc2lvbiBmb3IgZ2V0dGVyXG4gIGlmIChpc0ZuKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbilcbiAgICBpZiAoIXRoaXMuZ2V0dGVyKSB7XG4gICAgICB0aGlzLmdldHRlciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdGYWlsZWQgd2F0Y2hpbmcgcGF0aDogJyArIGV4cE9yRm4gK1xuICAgICAgICAnV2F0Y2hlciBvbmx5IGFjY2VwdHMgc2ltcGxlIGRvdC1kZWxpbWl0ZWQgcGF0aHMuICcgK1xuICAgICAgICAnRm9yIGZ1bGwgY29udHJvbCwgdXNlIGEgZnVuY3Rpb24gaW5zdGVhZC4nLFxuICAgICAgICB2bVxuICAgICAgKVxuICAgIH1cbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHRoaXMuZ2V0KClcbiAgLy8gc3RhdGUgZm9yIGF2b2lkaW5nIGZhbHNlIHRyaWdnZXJzIGZvciBkZWVwIGFuZCBBcnJheVxuICAvLyB3YXRjaGVycyBkdXJpbmcgdm0uX2RpZ2VzdCgpXG4gIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2Vcbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgZ2V0dGVyLCBhbmQgcmUtY29sbGVjdCBkZXBlbmRlbmNpZXMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJlZm9yZUdldCgpXG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh0aGlzLnZtLCB0aGlzLnZtKVxuICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gIGlmICh0aGlzLmRlZXApIHtcbiAgICB0cmF2ZXJzZSh2YWx1ZSlcbiAgfVxuICB0aGlzLmFmdGVyR2V0KClcbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogUHJlcGFyZSBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmJlZm9yZUdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcHJldlRhcmdldCA9IERlcC50YXJnZXRcbiAgRGVwLnRhcmdldCA9IHRoaXNcbn1cblxuLyoqXG4gKiBBZGQgYSBkZXBlbmRlbmN5IHRvIHRoaXMgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7RGVwfSBkZXBcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5hZGREZXAgPSBmdW5jdGlvbiAoZGVwKSB7XG4gIGNvbnN0IGlkID0gZGVwLmlkXG4gIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGlkKSkge1xuICAgIHRoaXMubmV3RGVwSWRzLmFkZChpZClcbiAgICB0aGlzLm5ld0RlcHMucHVzaChkZXApXG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2xlYW4gdXAgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5hZnRlckdldCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldCA9IHByZXZUYXJnZXRcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBkZXAgPSB0aGlzLmRlcHNbaV1cbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICB9XG4gIGxldCB0bXAgPSB0aGlzLmRlcElkc1xuICB0aGlzLmRlcElkcyA9IHRoaXMubmV3RGVwSWRzXG4gIHRoaXMubmV3RGVwSWRzID0gdG1wXG4gIHRoaXMubmV3RGVwSWRzLmNsZWFyKClcbiAgdG1wID0gdGhpcy5kZXBzXG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwc1xuICB0aGlzLm5ld0RlcHMgPSB0bXBcbiAgdGhpcy5uZXdEZXBzLmxlbmd0aCA9IDBcbn1cblxuLyoqXG4gKiBTdWJzY3JpYmVyIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIHdoZW4gYSBkZXBlbmRlbmN5IGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBzaGFsbG93XG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHNoYWxsb3cpIHtcbiAgaWYgKHRoaXMubGF6eSkge1xuICAgIHRoaXMuZGlydHkgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5ydW4oKVxuICB9XG4gIC8vIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gIC8vICAgdGhpcy5ydW4oKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIC8vIGlmIHF1ZXVlZCwgb25seSBvdmVyd3JpdGUgc2hhbGxvdyB3aXRoIG5vbi1zaGFsbG93LFxuICAvLyAgIC8vIGJ1dCBub3QgdGhlIG90aGVyIHdheSBhcm91bmQuXG4gIC8vICAgdGhpcy5zaGFsbG93ID0gdGhpcy5xdWV1ZWRcbiAgLy8gICAgID8gc2hhbGxvd1xuICAvLyAgICAgICA/IHRoaXMuc2hhbGxvd1xuICAvLyAgICAgICA6IGZhbHNlXG4gIC8vICAgICA6ICEhc2hhbGxvd1xuICAvLyAgIHRoaXMucXVldWVkID0gdHJ1ZVxuICAvLyAgIHB1c2hXYXRjaGVyKHRoaXMpXG4gIC8vIH1cbn1cblxuLyoqXG4gKiBCYXRjaGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgYmF0Y2hlci5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXQoKVxuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZDsgYnV0IG9ubHkgZG8gc28gaWYgdGhpcyBpcyBhXG4gICAgICAvLyBub24tc2hhbGxvdyB1cGRhdGUgKGNhdXNlZCBieSBhIHZtIGRpZ2VzdCkuXG4gICAgICAoKGlzT2JqZWN0KHZhbHVlKSB8fCB0aGlzLmRlZXApICYmICF0aGlzLnNoYWxsb3cpXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSlcbiAgICB9XG4gICAgdGhpcy5xdWV1ZWQgPSB0aGlzLnNoYWxsb3cgPSBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmV2YWx1YXRlID0gZnVuY3Rpb24gKCkge1xuICAvLyBhdm9pZCBvdmVyd3JpdGluZyBhbm90aGVyIHdhdGNoZXIgdGhhdCBpcyBiZWluZ1xuICAvLyBjb2xsZWN0ZWQuXG4gIGNvbnN0IGN1cnJlbnQgPSBEZXAudGFyZ2V0XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpXG4gIHRoaXMuZGlydHkgPSBmYWxzZVxuICBEZXAudGFyZ2V0ID0gY3VycmVudFxufVxuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3ViY3JpYmVyIGxpc3QuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZCBvciBpcyBwZXJmb3JtaW5nIGEgdi1mb3JcbiAgICAvLyByZS1yZW5kZXIgKHRoZSB3YXRjaGVyIGxpc3QgaXMgdGhlbiBmaWx0ZXJlZCBieSB2LWZvcikuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkICYmICF0aGlzLnZtLl92Rm9yUmVtb3ZpbmcpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcylcbiAgICB9XG4gICAgbGV0IGkgPSB0aGlzLmRlcHMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy52bSA9IHRoaXMuY2IgPSB0aGlzLnZhbHVlID0gbnVsbFxuICB9XG59XG5cbi8qKlxuICogUmVjcnVzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge1NldH0gc2VlblxuICovXG5cbmNvbnN0IHNlZW5PYmplY3RzID0gY3JlYXRlTmV3U2V0KCkgLy8gbmV3IFNldCgpXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIGxldCBpLCBrZXlzLCBpc0EsIGlzT1xuICBpZiAoIXNlZW4pIHtcbiAgICBzZWVuID0gc2Vlbk9iamVjdHNcbiAgICBzZWVuLmNsZWFyKClcbiAgfVxuICBpc0EgPSBBcnJheS5pc0FycmF5KHZhbClcbiAgaXNPID0gaXNPYmplY3QodmFsKVxuICBpZiAoaXNBIHx8IGlzTykge1xuICAgIGlmICh2YWwuX19vYl9fKSB7XG4gICAgICBjb25zdCBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkXG4gICAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vlbi5hZGQoZGVwSWQpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0EpIHtcbiAgICAgIGkgPSB2YWwubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxbaV0sIHNlZW4pXG4gICAgfSBlbHNlIGlmIChpc08pIHtcbiAgICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpXG4gICAgICBpID0ga2V5cy5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2VlbilcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL3dhdGNoZXIuanNcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyByZW1vdmUgfSBmcm9tICcuLi91dGlsJ1xuXG5sZXQgdWlkID0gMFxuXG4vKipcbiAqIEEgZGVwIGlzIGFuIG9ic2VydmFibGUgdGhhdCBjYW4gaGF2ZSBtdWx0aXBsZVxuICogZGlyZWN0aXZlcyBzdWJzY3JpYmluZyB0byBpdC5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKytcbiAgdGhpcy5zdWJzID0gW11cbn1cblxuLy8gdGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gdGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvbmx5IG9uZVxuLy8gd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQgYXQgYW55IHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbFxuXG4vKipcbiAqIEFkZCBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLmFkZFN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgdGhpcy5zdWJzLnB1c2goc3ViKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgcmVtb3ZlKHRoaXMuc3Vicywgc3ViKVxufVxuXG4vKipcbiAqIEFkZCBzZWxmIGFzIGEgZGVwZW5kZW5jeSB0byB0aGUgdGFyZ2V0IHdhdGNoZXIuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpXG59XG5cbi8qKlxuICogTm90aWZ5IGFsbCBzdWJzY3JpYmVycyBvZiBhIG5ldyB2YWx1ZS5cbiAqL1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gc3RhYmxpemUgdGhlIHN1YnNjcmliZXIgbGlzdCBmaXJzdFxuICBjb25zdCBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKClcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvZGVwLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7IGFycmF5TWV0aG9kcyB9IGZyb20gJy4vYXJyYXknXG5pbXBvcnQge1xuICBkZWYsXG4gIHJlbW92ZSxcbiAgaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGhhc1Byb3RvLFxuICBoYXNPd24sXG4gIGlzUmVzZXJ2ZWRcbn0gZnJvbSAnLi4vdXRpbCdcblxuY29uc3QgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAqIG9iamVjdC4gT25jZSBhdHRhY2hlZCwgdGhlIG9ic2VydmVyIGNvbnZlcnRzIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaGVzIHVwZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gT2JzZXJ2ZXIgKHZhbHVlKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxuICB0aGlzLmRlcCA9IG5ldyBEZXAoKVxuICBkZWYodmFsdWUsICdfX29iX18nLCB0aGlzKVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBjb25zdCBhdWdtZW50ID0gaGFzUHJvdG9cbiAgICAgID8gcHJvdG9BdWdtZW50XG4gICAgICA6IGNvcHlBdWdtZW50XG4gICAgYXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpXG4gICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKVxuICB9XG59XG5cbi8vIEluc3RhbmNlIG1ldGhvZHNcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggZWFjaCBwcm9wZXJ0eSBhbmQgY29udmVydCB0aGVtIGludG9cbiAqIGdldHRlci9zZXR0ZXJzLiBUaGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2hlblxuICogdmFsdWUgdHlwZSBpcyBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS53YWxrID0gZnVuY3Rpb24gKG9iaikge1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgdGhpcy5jb252ZXJ0KGtleSwgb2JqW2tleV0pXG4gIH1cbn1cblxuLyoqXG4gKiBPYnNlcnZlIGEgbGlzdCBvZiBBcnJheSBpdGVtcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBpdGVtcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvYnNlcnZlKGl0ZW1zW2ldKVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBhIHByb3BlcnR5IGludG8gZ2V0dGVyL3NldHRlciBzbyB3ZSBjYW4gZW1pdFxuICogdGhlIGV2ZW50cyB3aGVuIHRoZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZC9jaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAoa2V5LCB2YWwpIHtcbiAgZGVmaW5lUmVhY3RpdmUodGhpcy52YWx1ZSwga2V5LCB2YWwpXG59XG5cbi8qKlxuICogQWRkIGFuIG93bmVyIHZtLCBzbyB0aGF0IHdoZW4gJHNldC8kZGVsZXRlIG11dGF0aW9uc1xuICogaGFwcGVuIHdlIGNhbiBub3RpZnkgb3duZXIgdm1zIHRvIHByb3h5IHRoZSBrZXlzIGFuZFxuICogZGlnZXN0IHRoZSB3YXRjaGVycy4gVGhpcyBpcyBvbmx5IGNhbGxlZCB3aGVuIHRoZSBvYmplY3RcbiAqIGlzIG9ic2VydmVkIGFzIGFuIGluc3RhbmNlJ3Mgcm9vdCAkZGF0YS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuYWRkVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgKHRoaXMudm1zIHx8ICh0aGlzLnZtcyA9IFtdKSkucHVzaCh2bSlcbn1cblxuLyoqXG4gKiBSZW1vdmUgYW4gb3duZXIgdm0uIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIG9iamVjdCBpc1xuICogc3dhcHBlZCBvdXQgYXMgYW4gaW5zdGFuY2UncyAkZGF0YSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLnJlbW92ZVZtID0gZnVuY3Rpb24gKHZtKSB7XG4gIHJlbW92ZSh0aGlzLnZtcywgdm0pXG59XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcmNcbiAqL1xuXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQgKHRhcmdldCwgc3JjKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG4gIHRhcmdldC5fX3Byb3RvX18gPSBzcmNcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvXG4gKi9cblxuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldXG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHQgdG8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGZvciBhIHZhbHVlLFxuICogcmV0dXJucyB0aGUgbmV3IG9ic2VydmVyIGlmIHN1Y2Nlc3NmdWxseSBvYnNlcnZlZCxcbiAqIG9yIHRoZSBleGlzdGluZyBvYnNlcnZlciBpZiB0aGUgdmFsdWUgYWxyZWFkeSBoYXMgb25lLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7VnVlfSBbdm1dXG4gKiBAcmV0dXJuIHtPYnNlcnZlcnx1bmRlZmluZWR9XG4gKiBAc3RhdGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmUgKHZhbHVlLCB2bSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVyblxuICB9XG4gIGxldCBvYlxuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfX1xuICB9IGVsc2UgaWYgKFxuICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkgJiZcbiAgICBPYmplY3QuaXNFeHRlbnNpYmxlKHZhbHVlKSAmJlxuICAgICF2YWx1ZS5faXNWdWVcbiAgKSB7XG4gICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpXG4gIH1cbiAgaWYgKG9iICYmIHZtKSB7XG4gICAgb2IuYWRkVm0odm0pXG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVJlYWN0aXZlIChvYmosIGtleSwgdmFsKSB7XG4gIGNvbnN0IGRlcCA9IG5ldyBEZXAoKVxuXG4gIGNvbnN0IHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSlcbiAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNhdGVyIGZvciBwcmUtZGVmaW5lZCBnZXR0ZXIvc2V0dGVyc1xuICBjb25zdCBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXRcbiAgY29uc3Qgc2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuc2V0XG5cbiAgbGV0IGNoaWxkT2IgPSBvYnNlcnZlKHZhbClcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiByZWFjdGl2ZUdldHRlciAoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWxcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKVxuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgZm9yIChsZXQgZSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGUgPSB2YWx1ZVtpXVxuICAgICAgICAgICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWxcbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbFxuICAgICAgfVxuICAgICAgY2hpbGRPYiA9IG9ic2VydmUobmV3VmFsKVxuICAgICAgZGVwLm5vdGlmeSgpXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IG9uIGFuIG9iamVjdC4gQWRkcyB0aGUgbmV3IHByb3BlcnR5IGFuZFxuICogdHJpZ2dlcnMgY2hhbmdlIG5vdGlmaWNhdGlvbiBpZiB0aGUgcHJvcGVydHkgZG9lc24ndFxuICogYWxyZWFkeSBleGlzdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQgKG9iaiwga2V5LCB2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmouc3BsaWNlKGtleSwgMSwgdmFsKVxuICB9XG4gIGlmIChoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgIHNldChvYmouX2RhdGEsIGtleSwgdmFsKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuICBpZiAoIW9iKSB7XG4gICAgb2JqW2tleV0gPSB2YWxcbiAgICByZXR1cm5cbiAgfVxuICBvYi5jb252ZXJ0KGtleSwgdmFsKVxuICBvYi5kZXAubm90aWZ5KClcbiAgaWYgKG9iLnZtcykge1xuICAgIGxldCBpID0gb2Iudm1zLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IHZtID0gb2Iudm1zW2ldXG4gICAgICBwcm94eSh2bSwga2V5KVxuICAgICAgLy8gdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG4vKipcbiAqIERlbGV0ZSBhIHByb3BlcnR5IGFuZCB0cmlnZ2VyIGNoYW5nZSBpZiBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWwgKG9iaiwga2V5KSB7XG4gIGlmICghaGFzT3duKG9iaiwga2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSBvYmpba2V5XVxuICBjb25zdCBvYiA9IG9iai5fX29iX19cblxuICBpZiAoIW9iKSB7XG4gICAgaWYgKG9iai5faXNWdWUpIHtcbiAgICAgIGRlbGV0ZSBvYmouX2RhdGFba2V5XVxuICAgICAgLy8gb2JqLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHVucHJveHkodm0sIGtleSlcbiAgICAgIC8vIHZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IEtFWV9XT1JEUyA9IFsnJGluZGV4JywgJyR2YWx1ZScsICckZXZlbnQnXVxuZXhwb3J0IGZ1bmN0aW9uIHByb3h5ICh2bSwga2V5KSB7XG4gIGlmIChLRVlfV09SRFMuaW5kZXhPZihrZXkpID4gLTEgfHwgIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2bSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBwcm94eUdldHRlciAoKSB7XG4gICAgICAgIHJldHVybiB2bS5fZGF0YVtrZXldXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBwcm94eVNldHRlciAodmFsKSB7XG4gICAgICAgIHZtLl9kYXRhW2tleV0gPSB2YWxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnByb3h5ICh2bSwga2V5KSB7XG4gIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgZGVsZXRlIHZtW2tleV1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvb2JzZXJ2ZXIuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBkZWYgfSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlXG5leHBvcnQgY29uc3QgYXJyYXlNZXRob2RzID0gT2JqZWN0LmNyZWF0ZShhcnJheVByb3RvKVxuXG4vKipcbiAqIEludGVyY2VwdCBtdXRhdGluZyBtZXRob2RzIGFuZCBlbWl0IGV2ZW50c1xuICovXG5cbjtbXG4gICdwdXNoJyxcbiAgJ3BvcCcsXG4gICdzaGlmdCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZScsXG4gICdzb3J0JyxcbiAgJ3JldmVyc2UnXG5dXG4uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICBjb25zdCBvcmlnaW5hbCA9IGFycmF5UHJvdG9bbWV0aG9kXVxuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIC8vIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzOlxuICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2Nsb3N1cmUtd2l0aC1hcmd1bWVudHNcbiAgICBsZXQgaSA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICBjb25zdCBhcmdzID0gbmV3IEFycmF5KGkpXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgIGNvbnN0IG9iID0gdGhpcy5fX29iX19cbiAgICBsZXQgaW5zZXJ0ZWRcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJnc1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzLnNsaWNlKDIpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICAgIGlmIChpbnNlcnRlZCkgb2Iub2JzZXJ2ZUFycmF5KGluc2VydGVkKVxuICAgIC8vIG5vdGlmeSBjaGFuZ2VcbiAgICBvYi5kZXAubm90aWZ5KClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pXG59KVxuXG4vKipcbiAqIFN3YXAgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHdpdGggYSBuZXcgdmFsdWVcbiAqIGFuZCBlbWl0cyBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4geyp9IC0gcmVwbGFjZWQgZWxlbWVudFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRzZXQnLFxuICBmdW5jdGlvbiAkc2V0IChpbmRleCwgdmFsKSB7XG4gICAgaWYgKGluZGV4ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGluZGV4ICsgMVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEsIHZhbClbMF1cbiAgfVxuKVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0byByZW1vdmUgdGhlIGVsZW1lbnQgYXQgZ2l2ZW4gaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmRlZihcbiAgYXJyYXlQcm90byxcbiAgJyRyZW1vdmUnLFxuICBmdW5jdGlvbiAkcmVtb3ZlIChpbmRleCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBpbmRleCA9IHRoaXMuaW5kZXhPZihpbmRleClcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvYXJyYXkuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCB0ZW1wbGF0ZSBwYXJzZXIgJiBkYXRhLWJpbmRpbmcgcHJvY2Vzc1xuICovXG5cbmltcG9ydCB7XG4gIGV4dGVuZCxcbiAgaXNPYmplY3QsXG4gIGJpbmRcbn0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7XG4gIGluaXREYXRhLFxuICBpbml0Q29tcHV0ZWRcbn0gZnJvbSAnLi4vY29yZS9zdGF0ZSdcbmltcG9ydCB7XG4gIGJpbmRFbGVtZW50LFxuICBzZXRJZCxcbiAgYmluZFN1YlZtLFxuICBiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkLFxuICBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnMsXG4gIHdhdGNoXG59IGZyb20gJy4vZGlyZWN0aXZlJ1xuaW1wb3J0IHtcbiAgY3JlYXRlQmxvY2ssXG4gIGNyZWF0ZUJvZHksXG4gIGNyZWF0ZUVsZW1lbnQsXG4gIGF0dGFjaFRhcmdldCxcbiAgbW92ZVRhcmdldCxcbiAgcmVtb3ZlVGFyZ2V0XG59IGZyb20gJy4vZG9tLWhlbHBlcidcblxuLyoqXG4gKiBidWlsZCgpXG4gKiAgIGNvbXBpbGUodGVtcGxhdGUsIHBhcmVudE5vZGUpXG4gKiAgICAgaWYgKHR5cGUgaXMgY29udGVudCkgY3JlYXRlIGNvbnRlbnROb2RlXG4gKiAgICAgZWxzZSBpZiAoZGlycyBoYXZlIHYtZm9yKSBmb3JlYWNoIC0+IGNyZWF0ZSBjb250ZXh0XG4gKiAgICAgICAtPiBjb21waWxlKHRlbXBsYXRlV2l0aG91dEZvciwgcGFyZW50Tm9kZSk6IGRpZmYobGlzdCkgb25jaGFuZ2VcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1pZikgYXNzZXJ0XG4gKiAgICAgICAtPiBjb21waWxlKHRlbXBsYXRlV2l0aG91dElmLCBwYXJlbnROb2RlKTogdG9nZ2xlKHNob3duKSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgZHluYW1pYylcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0RHluYW1pY1R5cGUsIHBhcmVudE5vZGUpOiB3YXRjaCh0eXBlKSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgY3VzdG9tKVxuICogICAgICAgYWRkQ2hpbGRWbSh2bSwgcGFyZW50Vm0pXG4gKiAgICAgICBidWlsZChleHRlcm5hbERpcnMpXG4gKiAgICAgICBmb3JlYWNoIGNoaWxkTm9kZXMgLT4gY29tcGlsZShjaGlsZE5vZGUsIHRlbXBsYXRlKVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgbmF0aXZlKVxuICogICAgICAgc2V0KGRpcnMpOiB1cGRhdGUoaWQvYXR0ci9zdHlsZS9jbGFzcykgb25jaGFuZ2VcbiAqICAgICAgIGFwcGVuZCh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZCAodm0pIHtcbiAgY29uc3Qgb3B0ID0gdm0uX29wdGlvbnMgfHwge31cbiAgY29uc3QgdGVtcGxhdGUgPSBvcHQudGVtcGxhdGUgfHwge31cblxuICBpZiAob3B0LnJlcGxhY2UpIHtcbiAgICBpZiAodGVtcGxhdGUuY2hpbGRyZW4gJiYgdGVtcGxhdGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb21waWxlKHZtLCB0ZW1wbGF0ZS5jaGlsZHJlblswXSwgdm0uX3BhcmVudEVsKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLCB2bS5fcGFyZW50RWwpXG4gIH1cblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcInJlYWR5XCIgbGlmZWN5Y2xlIGluIFZtKCR7dm0uX3R5cGV9KWApXG4gIHZtLiRlbWl0KCdob29rOnJlYWR5JylcbiAgdm0uX3JlYWR5ID0gdHJ1ZVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGVsZW1lbnRzIGJ5IGNoaWxkIG9yIGNoaWxkcmVuIGFuZCBhcHBlbmQgdG8gcGFyZW50IGVsZW1lbnRzLlxuICogUm9vdCBlbGVtZW50IGluZm8gd291bGQgYmUgbWVyZ2VkIGlmIGhhcy4gVGhlIGZpcnN0IGFyZ3VtZW50IG1heSBiZSBhbiBhcnJheVxuICogaWYgdGhlIHJvb3QgZWxlbWVudCB3aXRoIG9wdGlvbnMucmVwbGFjZSBoYXMgbm90IG9ubHkgb25lIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gICAgICAgbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlICh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IGFwcCA9IHZtLl9hcHAgfHwge31cblxuICBpZiAoYXBwLmxhc3RTaWduYWwgPT09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGFyZ2V0SXNGcmFnbWVudCh0YXJnZXQpKSB7XG4gICAgY29tcGlsZUZyYWdtZW50KHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgbWV0YSA9IG1ldGEgfHwge31cbiAgaWYgKHRhcmdldElzQ29udGVudCh0YXJnZXQpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcImNvbnRlbnRcIiBibG9jayBieScsIHRhcmdldClcbiAgICB2bS5fY29udGVudCA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHRhcmdldE5lZWRDaGVja1JlcGVhdCh0YXJnZXQsIG1ldGEpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcInJlcGVhdFwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGlmIChkZXN0LnR5cGUgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVGhlIHJvb3QgZWxlbWVudCBkb2VzXFwndCBzdXBwb3J0IGByZXBlYXRgIGRpcmVjdGl2ZSEnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbXBpbGVSZXBlYXQodm0sIHRhcmdldCwgZGVzdClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHRhcmdldE5lZWRDaGVja1Nob3duKHRhcmdldCwgbWV0YSkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwiaWZcIiBsb2dpYyBieScsIHRhcmdldClcbiAgICBpZiAoZGVzdC50eXBlID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFRoZSByb290IGVsZW1lbnQgZG9lc1xcJ3Qgc3VwcG9ydCBgaWZgIGRpcmVjdGl2ZSEnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbXBpbGVTaG93bih2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCB0eXBlR2V0dGVyID0gbWV0YS50eXBlIHx8IHRhcmdldC50eXBlXG4gIGlmICh0YXJnZXROZWVkQ2hlY2tUeXBlKHR5cGVHZXR0ZXIsIG1ldGEpKSB7XG4gICAgY29tcGlsZVR5cGUodm0sIHRhcmdldCwgZGVzdCwgdHlwZUdldHRlciwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCB0eXBlID0gdHlwZUdldHRlclxuICBjb25zdCBjb21wb25lbnQgPSB0YXJnZXRJc0NvbXBvc2VkKHZtLCB0YXJnZXQsIHR5cGUpXG4gIGlmIChjb21wb25lbnQpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIGNvbXBvc2VkIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgICBjb21waWxlQ3VzdG9tQ29tcG9uZW50KHZtLCBjb21wb25lbnQsIHRhcmdldCwgZGVzdCwgdHlwZSwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIG5hdGl2ZSBjb21wb25lbnQgYnknLCB0YXJnZXQpXG4gIGNvbXBpbGVOYXRpdmVDb21wb25lbnQodm0sIHRhcmdldCwgZGVzdCwgdHlwZSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgaXMgYSBmcmFnbWVudCAoYW4gYXJyYXkpLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0SXNGcmFnbWVudCAodGFyZ2V0KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldClcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgdHlwZSBpcyBjb250ZW50L3Nsb3QuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0NvbnRlbnQgKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0LnR5cGUgPT09ICdjb250ZW50JyB8fCB0YXJnZXQudHlwZSA9PT0gJ3Nsb3QnXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGxpc3QuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXROZWVkQ2hlY2tSZXBlYXQgKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3JlcGVhdCcpICYmIHRhcmdldC5yZXBlYXRcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgYm9vbGVhbiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1Nob3duICh0YXJnZXQsIG1ldGEpIHtcbiAgcmV0dXJuICFtZXRhLmhhc093blByb3BlcnR5KCdzaG93bicpICYmIHRhcmdldC5zaG93blxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBkeW5hbWljIHR5cGUuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfGZ1bmN0aW9ufSB0eXBlR2V0dGVyXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgICAgIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1R5cGUgKHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgcmV0dXJuICh0eXBlb2YgdHlwZUdldHRlciA9PT0gJ2Z1bmN0aW9uJykgJiYgIW1ldGEuaGFzT3duUHJvcGVydHkoJ3R5cGUnKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMga2luZCBvZiBjb21wb25lbnQgaXMgY29tcG9zZWQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0SXNDb21wb3NlZCAodm0sIHRhcmdldCwgdHlwZSkge1xuICBsZXQgY29tcG9uZW50XG4gIGlmICh2bS5fYXBwICYmIHZtLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwKSB7XG4gICAgY29tcG9uZW50ID0gdm0uX2FwcC5jdXN0b21Db21wb25lbnRNYXBbdHlwZV1cbiAgfVxuICBpZiAodm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuY29tcG9uZW50cykge1xuICAgIGNvbXBvbmVudCA9IHZtLl9vcHRpb25zLmNvbXBvbmVudHNbdHlwZV1cbiAgfVxuICBpZiAodGFyZ2V0LmNvbXBvbmVudCkge1xuICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudCB8fCB7fVxuICB9XG4gIHJldHVybiBjb21wb25lbnRcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgbGlzdCBvZiB0YXJnZXRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlRnJhZ21lbnQgKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gIHRhcmdldC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgIGNvbXBpbGUodm0sIGNoaWxkLCBmcmFnQmxvY2ssIG1ldGEpXG4gIH0pXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRhcmdldCB3aXRoIHJlcGVhdCBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVJlcGVhdCAodm0sIHRhcmdldCwgZGVzdCkge1xuICBjb25zdCByZXBlYXQgPSB0YXJnZXQucmVwZWF0XG4gIGNvbnN0IG9sZFN0eWxlID0gdHlwZW9mIHJlcGVhdCA9PT0gJ2Z1bmN0aW9uJ1xuICBsZXQgZ2V0dGVyID0gcmVwZWF0LmdldHRlciB8fCByZXBlYXQuZXhwcmVzc2lvbiB8fCByZXBlYXRcbiAgaWYgKHR5cGVvZiBnZXR0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICBnZXR0ZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9XG4gIH1cbiAgY29uc3Qga2V5ID0gcmVwZWF0LmtleSB8fCAnJGluZGV4J1xuICBjb25zdCB2YWx1ZSA9IHJlcGVhdC52YWx1ZSB8fCAnJHZhbHVlJ1xuICBjb25zdCB0cmFja0J5ID0gcmVwZWF0LnRyYWNrQnkgfHwgdGFyZ2V0LnRyYWNrQnkgfHxcbiAgICAodGFyZ2V0LmF0dHIgJiYgdGFyZ2V0LmF0dHIudHJhY2tCeSlcblxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgZnJhZ0Jsb2NrLmNoaWxkcmVuID0gW11cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBbXVxuICBmcmFnQmxvY2sudm1zID0gW11cblxuICBiaW5kUmVwZWF0KHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgeyBnZXR0ZXIsIGtleSwgdmFsdWUsIHRyYWNrQnksIG9sZFN0eWxlIH0pXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRhcmdldCB3aXRoIGlmIGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVNob3duICh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IG5ld01ldGEgPSB7IHNob3duOiB0cnVlIH1cbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG5cbiAgaWYgKGRlc3QuZWxlbWVudCAmJiBkZXN0LmNoaWxkcmVuKSB7XG4gICAgZGVzdC5jaGlsZHJlbi5wdXNoKGZyYWdCbG9jaylcbiAgfVxuXG4gIGlmIChtZXRhLnJlcGVhdCkge1xuICAgIG5ld01ldGEucmVwZWF0ID0gbWV0YS5yZXBlYXRcbiAgfVxuXG4gIGJpbmRTaG93bih2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG5ld01ldGEpXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHRhcmdldCB3aXRoIGR5bmFtaWMgY29tcG9uZW50IHR5cGUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9ICAgdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gICBkZXN0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0eXBlR2V0dGVyXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVUeXBlICh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyLmNhbGwodm0pXG4gIGNvbnN0IG5ld01ldGEgPSBleHRlbmQoeyB0eXBlIH0sIG1ldGEpXG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuXG4gIGlmIChkZXN0LmVsZW1lbnQgJiYgZGVzdC5jaGlsZHJlbikge1xuICAgIGRlc3QuY2hpbGRyZW4ucHVzaChmcmFnQmxvY2spXG4gIH1cblxuICB3YXRjaCh2bSwgdHlwZUdldHRlciwgKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3TWV0YSA9IGV4dGVuZCh7IHR5cGU6IHZhbHVlIH0sIG1ldGEpXG4gICAgcmVtb3ZlVGFyZ2V0KHZtLCBmcmFnQmxvY2ssIHRydWUpXG4gICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG5ld01ldGEpXG4gIH0pXG5cbiAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG5ld01ldGEpXG59XG5cbi8qKlxuICogQ29tcGlsZSBhIGNvbXBvc2VkIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUN1c3RvbUNvbXBvbmVudCAodm0sIGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKSB7XG4gIGNvbnN0IEN0b3IgPSB2bS5jb25zdHJ1Y3RvclxuICBjb25zdCBzdWJWbSA9IG5ldyBDdG9yKHR5cGUsIGNvbXBvbmVudCwgdm0sIGRlc3QsIHVuZGVmaW5lZCwge1xuICAgICdob29rOmluaXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRJZCh2bSwgbnVsbCwgdGFyZ2V0LmlkLCB0aGlzKVxuICAgICAgLy8gYmluZCB0ZW1wbGF0ZSBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgICAgdGhpcy5fZXh0ZXJuYWxCaW5kaW5nID0ge1xuICAgICAgICBwYXJlbnQ6IHZtLFxuICAgICAgICB0ZW1wbGF0ZTogdGFyZ2V0XG4gICAgICB9XG4gICAgfSxcbiAgICAnaG9vazpjcmVhdGVkJzogZnVuY3Rpb24gKCkge1xuICAgICAgYmluZFN1YlZtKHZtLCB0aGlzLCB0YXJnZXQsIG1ldGEucmVwZWF0KVxuICAgIH0sXG4gICAgJ2hvb2s6cmVhZHknOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5fY29udGVudCkge1xuICAgICAgICBjb21waWxlQ2hpbGRyZW4odm0sIHRhcmdldCwgdGhpcy5fY29udGVudClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQodm0sIHN1YlZtLCB0YXJnZXQpXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudCBmcm9tIHRlbXBsYXRlIGFuZCBhdHRhY2ggdG8gdGhlIGRlc3QgaWYgbmVlZGVkLlxuICogVGhlIHRpbWUgdG8gYXR0YWNoIGRlcGVuZHMgb24gd2hldGhlciB0aGUgbW9kZSBzdGF0dXMgaXMgbm9kZSBvciB0cmVlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVOYXRpdmVDb21wb25lbnQgKHZtLCB0ZW1wbGF0ZSwgZGVzdCwgdHlwZSkge1xuICBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnModGVtcGxhdGUpXG5cbiAgbGV0IGVsZW1lbnRcbiAgaWYgKGRlc3QucmVmID09PSAnX2RvY3VtZW50RWxlbWVudCcpIHtcbiAgICAvLyBpZiBpdHMgcGFyZW50IGlzIGRvY3VtZW50RWxlbWVudCB0aGVuIGl0J3MgYSBib2R5XG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBjcmVhdGUgYm9keSBmb3IgJHt0eXBlfWApXG4gICAgZWxlbWVudCA9IGNyZWF0ZUJvZHkodm0sIHR5cGUpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBjcmVhdGUgZWxlbWVudCBmb3IgJHt0eXBlfWApXG4gICAgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQodm0sIHR5cGUpXG4gIH1cblxuICBpZiAoIXZtLl9yb290RWwpIHtcbiAgICB2bS5fcm9vdEVsID0gZWxlbWVudFxuICAgIC8vIGJpbmQgZXZlbnQgZWFybGllciBiZWNhdXNlIG9mIGxpZmVjeWNsZSBpc3N1ZXNcbiAgICBjb25zdCBiaW5kaW5nID0gdm0uX2V4dGVybmFsQmluZGluZyB8fCB7fVxuICAgIGNvbnN0IHRhcmdldCA9IGJpbmRpbmcudGVtcGxhdGVcbiAgICBjb25zdCBwYXJlbnRWbSA9IGJpbmRpbmcucGFyZW50XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZXZlbnRzICYmIHBhcmVudFZtICYmIGVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgdHlwZSBpbiB0YXJnZXQuZXZlbnRzKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBwYXJlbnRWbVt0YXJnZXQuZXZlbnRzW3R5cGVdXVxuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnQodHlwZSwgYmluZChoYW5kbGVyLCBwYXJlbnRWbSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBiaW5kRWxlbWVudCh2bSwgZWxlbWVudCwgdGVtcGxhdGUpXG5cbiAgaWYgKHRlbXBsYXRlLmF0dHIgJiYgdGVtcGxhdGUuYXR0ci5hcHBlbmQpIHsgLy8gYmFja3dhcmQsIGFwcGVuZCBwcm9wIGluIGF0dHJcbiAgICB0ZW1wbGF0ZS5hcHBlbmQgPSB0ZW1wbGF0ZS5hdHRyLmFwcGVuZFxuICB9XG5cbiAgaWYgKHRlbXBsYXRlLmFwcGVuZCkgeyAvLyBnaXZlIHRoZSBhcHBlbmQgYXR0cmlidXRlIGZvciBpb3MgYWRhcHRhdGlvblxuICAgIGVsZW1lbnQuYXR0ciA9IGVsZW1lbnQuYXR0ciB8fCB7fVxuICAgIGVsZW1lbnQuYXR0ci5hcHBlbmQgPSB0ZW1wbGF0ZS5hcHBlbmRcbiAgfVxuXG4gIGNvbnN0IHRyZWVNb2RlID0gdGVtcGxhdGUuYXBwZW5kID09PSAndHJlZSdcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmICF0cmVlTW9kZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gYXBwZW5kIHNpbmdsZSBub2RlIGZvcicsIGVsZW1lbnQpXG4gICAgYXBwLmxhc3RTaWduYWwgPSBhdHRhY2hUYXJnZXQodm0sIGVsZW1lbnQsIGRlc3QpXG4gIH1cbiAgaWYgKGFwcC5sYXN0U2lnbmFsICE9PSAtMSkge1xuICAgIGNvbXBpbGVDaGlsZHJlbih2bSwgdGVtcGxhdGUsIGVsZW1lbnQpXG4gIH1cbiAgaWYgKGFwcC5sYXN0U2lnbmFsICE9PSAtMSAmJiB0cmVlTW9kZSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gYXBwZW5kIHdob2xlIHRyZWUgZm9yJywgZWxlbWVudClcbiAgICBhcHAubGFzdFNpZ25hbCA9IGF0dGFjaFRhcmdldCh2bSwgZWxlbWVudCwgZGVzdClcbiAgfVxufVxuXG4vKipcbiAqIFNldCBhbGwgY2hpbGRyZW4gdG8gYSBjZXJ0YWluIHBhcmVudCBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUNoaWxkcmVuICh2bSwgdGVtcGxhdGUsIGRlc3QpIHtcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuICBjb25zdCBjaGlsZHJlbiA9IHRlbXBsYXRlLmNoaWxkcmVuXG4gIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBjaGlsZHJlbi5ldmVyeSgoY2hpbGQpID0+IHtcbiAgICAgIGNvbXBpbGUodm0sIGNoaWxkLCBkZXN0KVxuICAgICAgcmV0dXJuIGFwcC5sYXN0U2lnbmFsICE9PSAtMVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCB0aGUgbGlzdCB1cGRhdGUgYW5kIHJlZnJlc2ggdGhlIGNoYW5nZXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGZyYWdCbG9jayB7dm1zLCBkYXRhLCBjaGlsZHJlbn1cbiAqIEBwYXJhbSB7b2JqZWN0fSBpbmZvICAgICAge2dldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGV9XG4gKi9cbmZ1bmN0aW9uIGJpbmRSZXBlYXQgKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgaW5mbykge1xuICBjb25zdCB2bXMgPSBmcmFnQmxvY2sudm1zXG4gIGNvbnN0IGNoaWxkcmVuID0gZnJhZ0Jsb2NrLmNoaWxkcmVuXG4gIGNvbnN0IHsgZ2V0dGVyLCB0cmFja0J5LCBvbGRTdHlsZSB9ID0gaW5mb1xuICBjb25zdCBrZXlOYW1lID0gaW5mby5rZXlcbiAgY29uc3QgdmFsdWVOYW1lID0gaW5mby52YWx1ZVxuXG4gIGZ1bmN0aW9uIGNvbXBpbGVJdGVtIChpdGVtLCBpbmRleCwgY29udGV4dCkge1xuICAgIGxldCBtZXJnZWREYXRhXG4gICAgaWYgKG9sZFN0eWxlKSB7XG4gICAgICBtZXJnZWREYXRhID0gaXRlbVxuICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XG4gICAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICBpZiAoIW1lcmdlZERhdGEuaGFzT3duUHJvcGVydHkoJ0lOREVYJykpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWVyZ2VkRGF0YSwgJ0lOREVYJywge1xuICAgICAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBcIklOREVYXCIgaW4gcmVwZWF0IGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICAgICAgICdwbGVhc2UgdXNlIFwiJGluZGV4XCIgaW5zdGVhZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gRWFjaCBsaXN0IGl0ZW0gbXVzdCBiZSBhbiBvYmplY3QgaW4gb2xkLXN0eWxlIHJlcGVhdCwgJ1xuICAgICAgICAgICsgJ3BsZWFzZSB1c2UgYHJlcGVhdD17e3YgaW4gbGlzdH19YCBpbnN0ZWFkLicpXG4gICAgICAgIG1lcmdlZERhdGEgPSB7fVxuICAgICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgbWVyZ2VkRGF0YVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1lcmdlZERhdGEgPSB7fVxuICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICBtZXJnZWREYXRhW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgfVxuICAgIGNvbnN0IG5ld0NvbnRleHQgPSBtZXJnZUNvbnRleHQoY29udGV4dCwgbWVyZ2VkRGF0YSlcbiAgICB2bXMucHVzaChuZXdDb250ZXh0KVxuICAgIGNvbXBpbGUobmV3Q29udGV4dCwgdGFyZ2V0LCBmcmFnQmxvY2ssIHsgcmVwZWF0OiBpdGVtIH0pXG4gIH1cblxuICBjb25zdCBsaXN0ID0gd2F0Y2hCbG9jayh2bSwgZnJhZ0Jsb2NrLCBnZXR0ZXIsICdyZXBlYXQnLFxuICAgIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSB0aGUgXCJyZXBlYXRcIiBpdGVtIGhhcyBjaGFuZ2VkJywgZGF0YSlcbiAgICAgIGlmICghZnJhZ0Jsb2NrKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRDaGlsZHJlbiA9IGNoaWxkcmVuLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZFZtcyA9IHZtcy5zbGljZSgpXG4gICAgICBjb25zdCBvbGREYXRhID0gZnJhZ0Jsb2NrLmRhdGEuc2xpY2UoKVxuICAgICAgLy8gMS4gY29sbGVjdCBhbGwgbmV3IHJlZnMgdHJhY2sgYnlcbiAgICAgIGNvbnN0IHRyYWNrTWFwID0ge31cbiAgICAgIGNvbnN0IHJldXNlZE1hcCA9IHt9XG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGtleSA9PSBudWxsIHx8IGtleSA9PT0gJycpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0cmFja01hcFtrZXldID0gaXRlbVxuICAgICAgfSlcblxuICAgICAgLy8gMi4gcmVtb3ZlIHVudXNlZCBlbGVtZW50IGZvcmVhY2ggb2xkIGl0ZW1cbiAgICAgIGNvbnN0IHJldXNlZExpc3QgPSBbXVxuICAgICAgb2xkRGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0cmFja0J5ID8gaXRlbVt0cmFja0J5XSA6IChvbGRTdHlsZSA/IGl0ZW1ba2V5TmFtZV0gOiBpbmRleClcbiAgICAgICAgaWYgKHRyYWNrTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXVzZWRNYXBba2V5XSA9IHtcbiAgICAgICAgICAgIGl0ZW0sIGluZGV4LCBrZXksXG4gICAgICAgICAgICB0YXJnZXQ6IG9sZENoaWxkcmVuW2luZGV4XSxcbiAgICAgICAgICAgIHZtOiBvbGRWbXNbaW5kZXhdXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldXNlZExpc3QucHVzaChpdGVtKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJlbW92ZVRhcmdldCh2bSwgb2xkQ2hpbGRyZW5baW5kZXhdKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICAvLyAzLiBjcmVhdGUgbmV3IGVsZW1lbnQgZm9yZWFjaCBuZXcgaXRlbVxuICAgICAgY2hpbGRyZW4ubGVuZ3RoID0gMFxuICAgICAgdm1zLmxlbmd0aCA9IDBcbiAgICAgIGZyYWdCbG9jay5kYXRhID0gZGF0YS5zbGljZSgpXG4gICAgICBmcmFnQmxvY2sudXBkYXRlTWFyayA9IGZyYWdCbG9jay5zdGFydFxuXG4gICAgICBkYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBjb25zdCByZXVzZWQgPSByZXVzZWRNYXBba2V5XVxuICAgICAgICBpZiAocmV1c2VkKSB7XG4gICAgICAgICAgaWYgKHJldXNlZC5pdGVtID09PSByZXVzZWRMaXN0WzBdKSB7XG4gICAgICAgICAgICByZXVzZWRMaXN0LnNoaWZ0KClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXVzZWRMaXN0LiRyZW1vdmUocmV1c2VkLml0ZW0pXG4gICAgICAgICAgICBtb3ZlVGFyZ2V0KHZtLCByZXVzZWQudGFyZ2V0LCBmcmFnQmxvY2sudXBkYXRlTWFyaywgdHJ1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChyZXVzZWQudGFyZ2V0KVxuICAgICAgICAgIHZtcy5wdXNoKHJldXNlZC52bSlcbiAgICAgICAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHJldXNlZC52bSA9IGl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXVzZWQudm1bdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkLnZtW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgICBmcmFnQmxvY2sudXBkYXRlTWFyayA9IHJldXNlZC50YXJnZXRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGRlbGV0ZSBmcmFnQmxvY2sudXBkYXRlTWFya1xuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kYXRhID0gbGlzdC5zbGljZSgwKVxuICBsaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29tcGlsZUl0ZW0oaXRlbSwgaW5kZXgsIHZtKVxuICB9KVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBkaXNwbGF5IHVwZGF0ZSBhbmQgYWRkL3JlbW92ZSB0aGUgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge29iamVjdH0gY29udGV4dFxuICovXG5mdW5jdGlvbiBiaW5kU2hvd24gKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSkge1xuICBjb25zdCBkaXNwbGF5ID0gd2F0Y2hCbG9jayh2bSwgZnJhZ0Jsb2NrLCB0YXJnZXQuc2hvd24sICdzaG93bicsXG4gICAgKGRpc3BsYXkpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcImlmXCIgaXRlbSB3YXMgY2hhbmdlZCcsIGRpc3BsYXkpXG5cbiAgICAgIGlmICghZnJhZ0Jsb2NrIHx8ICEhZnJhZ0Jsb2NrLmRpc3BsYXkgPT09ICEhZGlzcGxheSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gICAgICBpZiAoZGlzcGxheSkge1xuICAgICAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIClcblxuICBmcmFnQmxvY2suZGlzcGxheSA9ICEhZGlzcGxheVxuICBpZiAoZGlzcGxheSkge1xuICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggY2FsYyB2YWx1ZSBjaGFuZ2VzIGFuZCBhcHBlbmQgY2VydGFpbiB0eXBlIGFjdGlvbiB0byBkaWZmZXIuXG4gKiBJdCBpcyB1c2VkIGZvciBpZiBvciByZXBlYXQgZGF0YS1iaW5kaW5nIGdlbmVyYXRvci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gY2FsY1xuICogQHBhcmFtICB7c3RyaW5nfSAgIHR5cGVcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKiBAcmV0dXJuIHthbnl9ICAgICAgaW5pdCB2YWx1ZSBvZiBjYWxjXG4gKi9cbmZ1bmN0aW9uIHdhdGNoQmxvY2sgKHZtLCBmcmFnQmxvY2ssIGNhbGMsIHR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZGlmZmVyID0gdm0gJiYgdm0uX2FwcCAmJiB2bS5fYXBwLmRpZmZlclxuICBjb25zdCBjb25maWcgPSB7fVxuICBjb25zdCBkZXB0aCA9IChmcmFnQmxvY2suZWxlbWVudC5kZXB0aCB8fCAwKSArIDFcblxuICByZXR1cm4gd2F0Y2godm0sIGNhbGMsICh2YWx1ZSkgPT4ge1xuICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHZhbHVlXG4gICAgaWYgKGRpZmZlciAmJiAhY29uZmlnLnJlY29yZGVkKSB7XG4gICAgICBkaWZmZXIuYXBwZW5kKHR5cGUsIGRlcHRoLCBmcmFnQmxvY2suYmxvY2tJZCwgKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXRlc3RWYWx1ZSA9IGNvbmZpZy5sYXRlc3RWYWx1ZVxuICAgICAgICBoYW5kbGVyKGxhdGVzdFZhbHVlKVxuICAgICAgICBjb25maWcucmVjb3JkZWQgPSBmYWxzZVxuICAgICAgICBjb25maWcubGF0ZXN0VmFsdWUgPSB1bmRlZmluZWRcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbmZpZy5yZWNvcmRlZCA9IHRydWVcbiAgfSlcbn1cblxuLyoqXG4gKiBDbG9uZSBhIGNvbnRleHQgYW5kIG1lcmdlIGNlcnRhaW4gZGF0YS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IG1lcmdlZERhdGFcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZnVuY3Rpb24gbWVyZ2VDb250ZXh0IChjb250ZXh0LCBtZXJnZWREYXRhKSB7XG4gIGNvbnN0IG5ld0NvbnRleHQgPSBPYmplY3QuY3JlYXRlKGNvbnRleHQpXG4gIG5ld0NvbnRleHQuX2RhdGEgPSBtZXJnZWREYXRhXG4gIGluaXREYXRhKG5ld0NvbnRleHQpXG4gIGluaXRDb21wdXRlZChuZXdDb250ZXh0KVxuICBuZXdDb250ZXh0Ll9yZWFsUGFyZW50ID0gY29udGV4dFxuICByZXR1cm4gbmV3Q29udGV4dFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2NvbXBpbGVyLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBEaXJlY3RpdmUgUGFyc2VyXG4gKi9cblxuaW1wb3J0IHsgYmluZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG5pbXBvcnQgV2F0Y2hlciBmcm9tICcuLi9jb3JlL3dhdGNoZXInXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcblxuY29uc3QgeyBuYXRpdmVDb21wb25lbnRNYXAgfSA9IGNvbmZpZ1xuXG5jb25zdCBTRVRURVJTID0ge1xuICBhdHRyOiAnc2V0QXR0cicsXG4gIHN0eWxlOiAnc2V0U3R5bGUnLFxuICBldmVudDogJ2FkZEV2ZW50J1xufVxuXG4vKipcbiAqIGFwcGx5IHRoZSBuYXRpdmUgY29tcG9uZW50J3Mgb3B0aW9ucyhzcGVjaWZpZWQgYnkgdGVtcGxhdGUudHlwZSlcbiAqIHRvIHRoZSB0ZW1wbGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zICh0ZW1wbGF0ZSkge1xuICBjb25zdCB7IHR5cGUgfSA9IHRlbXBsYXRlXG4gIGNvbnN0IG9wdGlvbnMgPSBuYXRpdmVDb21wb25lbnRNYXBbdHlwZV1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb3B0aW9ucykge1xuICAgICAgaWYgKHRlbXBsYXRlW2tleV0gPT0gbnVsbCkge1xuICAgICAgICB0ZW1wbGF0ZVtrZXldID0gb3B0aW9uc1trZXldXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBvZih0ZW1wbGF0ZVtrZXldKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwb2Yob3B0aW9uc1trZXldKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yIChjb25zdCBzdWJrZXkgaW4gb3B0aW9uc1trZXldKSB7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlW2tleV1bc3Via2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVtrZXldW3N1YmtleV0gPSBvcHRpb25zW2tleV1bc3Via2V5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgYWxsIGlkLCBhdHRyLCBjbGFzc25hbWVzLCBzdHlsZSwgZXZlbnRzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRFbGVtZW50ICh2bSwgZWwsIHRlbXBsYXRlKSB7XG4gIHNldElkKHZtLCBlbCwgdGVtcGxhdGUuaWQsIHZtKVxuICBzZXRBdHRyKHZtLCBlbCwgdGVtcGxhdGUuYXR0cilcbiAgc2V0Q2xhc3Modm0sIGVsLCB0ZW1wbGF0ZS5jbGFzc0xpc3QpXG4gIHNldFN0eWxlKHZtLCBlbCwgdGVtcGxhdGUuc3R5bGUpXG4gIGJpbmRFdmVudHModm0sIGVsLCB0ZW1wbGF0ZS5ldmVudHMpXG59XG5cbi8qKlxuICogYmluZCBhbGwgcHJvcHMgdG8gc3ViIHZtIGFuZCBiaW5kIGFsbCBzdHlsZSwgZXZlbnRzIHRvIHRoZSByb290IGVsZW1lbnRcbiAqIG9mIHRoZSBzdWIgdm0gaWYgaXQgZG9lc24ndCBoYXZlIGEgcmVwbGFjZWQgbXVsdGktbm9kZSBmcmFnbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZFN1YlZtICh2bSwgc3ViVm0sIHRlbXBsYXRlLCByZXBlYXRJdGVtKSB7XG4gIHN1YlZtID0gc3ViVm0gfHwge31cbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZSB8fCB7fVxuXG4gIGNvbnN0IG9wdGlvbnMgPSBzdWJWbS5fb3B0aW9ucyB8fCB7fVxuXG4gIC8vIGJpbmQgcHJvcHNcbiAgbGV0IHByb3BzID0gb3B0aW9ucy5wcm9wc1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgIHByb3BzID0gcHJvcHMucmVkdWNlKChyZXN1bHQsIHZhbHVlKSA9PiB7XG4gICAgICByZXN1bHRbdmFsdWVdID0gdHJ1ZVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sIHt9KVxuICB9XG5cbiAgbWVyZ2VQcm9wcyhyZXBlYXRJdGVtLCBwcm9wcywgdm0sIHN1YlZtKVxuICBtZXJnZVByb3BzKHRlbXBsYXRlLmF0dHIsIHByb3BzLCB2bSwgc3ViVm0pXG59XG5cbi8qKlxuICogbWVyZ2UgY2xhc3MgYW5kIHN0eWxlcyBmcm9tIHZtIHRvIHN1YiB2bS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQgKHZtLCBzdWJWbSwgdGVtcGxhdGUpIHtcbiAgbWVyZ2VDbGFzc1N0eWxlKHRlbXBsYXRlLmNsYXNzTGlzdCwgdm0sIHN1YlZtKVxuICBtZXJnZVN0eWxlKHRlbXBsYXRlLnN0eWxlLCB2bSwgc3ViVm0pXG59XG5cbi8qKlxuICogQmluZCBwcm9wcyBmcm9tIHZtIHRvIHN1YiB2bSBhbmQgd2F0Y2ggdGhlaXIgdXBkYXRlcy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VQcm9wcyAodGFyZ2V0LCBwcm9wcywgdm0sIHN1YlZtKSB7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgaWYgKCFwcm9wcyB8fCBwcm9wc1trZXldKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtrZXldXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gd2F0Y2godm0sIHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHN1YlZtW2tleV0gPSB2XG4gICAgICAgIH0pXG4gICAgICAgIHN1YlZtW2tleV0gPSByZXR1cm5WYWx1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN1YlZtW2tleV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJpbmQgc3R5bGUgZnJvbSB2bSB0byBzdWIgdm0gYW5kIHdhdGNoIHRoZWlyIHVwZGF0ZXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlU3R5bGUgKHRhcmdldCwgdm0sIHN1YlZtKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0W2tleV1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHdhdGNoKHZtLCB2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHN1YlZtLl9yb290RWwpIHtcbiAgICAgICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgdilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCByZXR1cm5WYWx1ZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoc3ViVm0uX3Jvb3RFbCkge1xuICAgICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQmluZCBjbGFzcyAmIHN0eWxlIGZyb20gdm0gdG8gc3ViIHZtIGFuZCB3YXRjaCB0aGVpciB1cGRhdGVzLlxuICovXG5mdW5jdGlvbiBtZXJnZUNsYXNzU3R5bGUgKHRhcmdldCwgdm0sIHN1YlZtKSB7XG4gIGNvbnN0IGNzcyA9IHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLnN0eWxlIHx8IHt9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghc3ViVm0uX3Jvb3RFbCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCB0YXJnZXQsIHYgPT4ge1xuICAgICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHYpXG4gICAgfSlcbiAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdmFsdWUpXG4gIH1cbiAgZWxzZSBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdGFyZ2V0KVxuICB9XG59XG5cbi8qKlxuICogYmluZCBpZCB0byBhbiBlbGVtZW50XG4gKiBlYWNoIGlkIGlzIHVuaXF1ZSBpbiBhIHdob2xlIHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRJZCAodm0sIGVsLCBpZCwgdGFyZ2V0KSB7XG4gIGNvbnN0IG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtYXAsIHtcbiAgICB2bToge1xuICAgICAgdmFsdWU6IHRhcmdldCxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9LFxuICAgIGVsOiB7XG4gICAgICBnZXQ6ICgpID0+IGVsIHx8IHRhcmdldC5fcm9vdEVsLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH1cbiAgfSlcblxuICBpZiAodHlwZW9mIGlkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IGlkXG4gICAgaWQgPSBoYW5kbGVyLmNhbGwodm0pXG4gICAgaWYgKGlkKSB7XG4gICAgICB2bS5faWRzW2lkXSA9IG1hcFxuICAgIH1cbiAgICB3YXRjaCh2bSwgaGFuZGxlciwgKG5ld0lkKSA9PiB7XG4gICAgICBpZiAobmV3SWQpIHtcbiAgICAgICAgdm0uX2lkc1tuZXdJZF0gPSBtYXBcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGVsc2UgaWYgKGlkICYmIHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHtcbiAgICB2bS5faWRzW2lkXSA9IG1hcFxuICB9XG59XG5cbi8qKlxuICogYmluZCBhdHRyIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0QXR0ciAodm0sIGVsLCBhdHRyKSB7XG4gIGJpbmREaXIodm0sIGVsLCAnYXR0cicsIGF0dHIpXG59XG5cbmZ1bmN0aW9uIHNldENsYXNzU3R5bGUgKGVsLCBjc3MsIGNsYXNzTGlzdCkge1xuICBjb25zdCBjbGFzc1N0eWxlID0ge31cbiAgY29uc3QgbGVuZ3RoID0gY2xhc3NMaXN0Lmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdHlsZSA9IGNzc1tjbGFzc0xpc3RbaV1dXG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgICAgICBjbGFzc1N0eWxlW2tleV0gPSBzdHlsZVtrZXldXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsLnNldENsYXNzU3R5bGUoY2xhc3NTdHlsZSlcbn1cblxuLyoqXG4gKiBiaW5kIGNsYXNzbmFtZXMgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRDbGFzcyAodm0sIGVsLCBjbGFzc0xpc3QpIHtcbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgIT09ICdmdW5jdGlvbicgJiYgIUFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkgJiYgIWNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICBlbC5zZXRDbGFzc1N0eWxlKHt9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qgc3R5bGUgPSB2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5zdHlsZSB8fCB7fVxuICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIGNsYXNzTGlzdCwgdiA9PiB7XG4gICAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgdilcbiAgICB9KVxuICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCB2YWx1ZSlcbiAgfVxuICBlbHNlIHtcbiAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgY2xhc3NMaXN0KVxuICB9XG59XG5cbi8qKlxuICogYmluZCBzdHlsZSB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldFN0eWxlICh2bSwgZWwsIHN0eWxlKSB7XG4gIGJpbmREaXIodm0sIGVsLCAnc3R5bGUnLCBzdHlsZSlcbn1cblxuLyoqXG4gKiBhZGQgYW4gZXZlbnQgdHlwZSBhbmQgaGFuZGxlciB0byBhbiBlbGVtZW50IGFuZCBnZW5lcmF0ZSBhIGRvbSB1cGRhdGVcbiAqL1xuZnVuY3Rpb24gc2V0RXZlbnQgKHZtLCBlbCwgdHlwZSwgaGFuZGxlcikge1xuICBlbC5hZGRFdmVudCh0eXBlLCBiaW5kKGhhbmRsZXIsIHZtKSlcbn1cblxuLyoqXG4gKiBhZGQgYWxsIGV2ZW50cyBvZiBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJpbmRFdmVudHMgKHZtLCBlbCwgZXZlbnRzKSB7XG4gIGlmICghZXZlbnRzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cylcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgIGxldCBoYW5kbGVyID0gZXZlbnRzW2tleV1cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBoYW5kbGVyID0gdm1baGFuZGxlcl1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFRoZSBtZXRob2QgXCIke2hhbmRsZXJ9XCIgaXMgbm90IGRlZmluZWQuYClcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0RXZlbnQodm0sIGVsLCBrZXksIGhhbmRsZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBzZXQgYSBzZXJpZXMgb2YgbWVtYmVycyBhcyBhIGtpbmQgb2YgYW4gZWxlbWVudFxuICogZm9yIGV4YW1wbGU6IHN0eWxlLCBhdHRyLCAuLi5cbiAqIGlmIHRoZSB2YWx1ZSBpcyBhIGZ1bmN0aW9uIHRoZW4gYmluZCB0aGUgZGF0YSBjaGFuZ2VzXG4gKi9cbmZ1bmN0aW9uIGJpbmREaXIgKHZtLCBlbCwgbmFtZSwgZGF0YSkge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXldXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYmluZEtleSh2bSwgZWwsIG5hbWUsIGtleSwgdmFsdWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxbU0VUVEVSU1tuYW1lXV0oa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGRhdGEgY2hhbmdlcyB0byBhIGNlcnRhaW4ga2V5IHRvIGEgbmFtZSBzZXJpZXMgaW4gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBiaW5kS2V5ICh2bSwgZWwsIG5hbWUsIGtleSwgY2FsYykge1xuICBjb25zdCBtZXRob2ROYW1lID0gU0VUVEVSU1tuYW1lXVxuICAvLyB3YXRjaCB0aGUgY2FsYywgYW5kIHJldHVybnMgYSB2YWx1ZSBieSBjYWxjLmNhbGwoKVxuICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCBjYWxjLCAodmFsdWUpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVyICgpIHtcbiAgICAgIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG4gICAgfVxuICAgIGNvbnN0IGRpZmZlciA9IHZtICYmIHZtLl9hcHAgJiYgdm0uX2FwcC5kaWZmZXJcbiAgICBpZiAoZGlmZmVyKSB7XG4gICAgICBkaWZmZXIuYXBwZW5kKCdlbGVtZW50JywgZWwuZGVwdGgsIGVsLnJlZiwgaGFuZGxlcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBoYW5kbGVyKClcbiAgICB9XG4gIH0pXG5cbiAgZWxbbWV0aG9kTmFtZV0oa2V5LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiB3YXRjaCBhIGNhbGMgZnVuY3Rpb24gYW5kIGNhbGxiYWNrIGlmIHRoZSBjYWxjIHZhbHVlIGNoYW5nZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoICh2bSwgY2FsYywgY2FsbGJhY2spIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHZtLCBjYWxjLCBmdW5jdGlvbiAodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgJiYgdmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbGJhY2sodmFsdWUpXG4gIH0pXG5cbiAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9kaXJlY3RpdmUuanNcbiAqKi8iLCIvLyBAdG9kbzogSXQgc2hvdWxkIGJlIHJlZ2lzdGVyZWQgYnkgbmF0aXZlIGZyb20gYHJlZ2lzdGVyQ29tcG9uZW50cygpYC5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwOiB7XG4gICAgdGV4dDogdHJ1ZSxcbiAgICBpbWFnZTogdHJ1ZSxcbiAgICBjb250YWluZXI6IHRydWUsXG4gICAgc2xpZGVyOiB7XG4gICAgICB0eXBlOiAnc2xpZGVyJyxcbiAgICAgIGFwcGVuZDogJ3RyZWUnXG4gICAgfSxcbiAgICBjZWxsOiB7XG4gICAgICB0eXBlOiAnY2VsbCcsXG4gICAgICBhcHBlbmQ6ICd0cmVlJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvbmZpZy5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBEb2N1bWVudCAmIEVsZW1lbnQgSGVscGVycy5cbiAqXG4gKiByZXF1aXJlZDpcbiAqIERvY3VtZW50IzogY3JlYXRlRWxlbWVudCwgY3JlYXRlQ29tbWVudCwgZ2V0UmVmXG4gKiBFbGVtZW50IzogYXBwZW5kQ2hpbGQsIGluc2VydEJlZm9yZSwgcmVtb3ZlQ2hpbGQsIG5leHRTaWJsaW5nXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBib2R5IGJ5IHR5cGVcbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvZHkgKHZtLCB0eXBlKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIHJldHVybiBkb2MuY3JlYXRlQm9keSh0eXBlKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBlbGVtZW50IGJ5IHR5cGVcbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHZtLCB0eXBlKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIHJldHVybiBkb2MuY3JlYXRlRWxlbWVudCh0eXBlKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgZnJhZyBibG9jayBmb3IgYW4gZWxlbWVudC5cbiAqIFRoZSBmcmFnIGJsb2NrIGhhcyBhIHN0YXJ0ZXIsIGVuZGVyIGFuZCB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCbG9jayAodm0sIGVsZW1lbnQpIHtcbiAgY29uc3Qgc3RhcnQgPSBjcmVhdGVCbG9ja1N0YXJ0KHZtKVxuICBjb25zdCBlbmQgPSBjcmVhdGVCbG9ja0VuZCh2bSlcbiAgY29uc3QgYmxvY2tJZCA9IGxhc3Rlc3RCbG9ja0lkKytcbiAgaWYgKGVsZW1lbnQuZWxlbWVudCkge1xuICAgIGxldCB1cGRhdGVNYXJrID0gZWxlbWVudC51cGRhdGVNYXJrXG4gICAgaWYgKHVwZGF0ZU1hcmspIHtcbiAgICAgIGlmICh1cGRhdGVNYXJrLmVsZW1lbnQpIHtcbiAgICAgICAgdXBkYXRlTWFyayA9IHVwZGF0ZU1hcmsuZW5kXG4gICAgICB9XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoZW5kLCB1cGRhdGVNYXJrKVxuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEFmdGVyKHN0YXJ0LCB1cGRhdGVNYXJrKVxuICAgICAgZWxlbWVudC51cGRhdGVNYXJrID0gZW5kXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEJlZm9yZShzdGFydCwgZWxlbWVudC5lbmQpXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVuZCwgZWxlbWVudC5lbmQpXG4gICAgfVxuICAgIGVsZW1lbnQgPSBlbGVtZW50LmVsZW1lbnRcbiAgfVxuICBlbHNlIHtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHN0YXJ0KVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZW5kKVxuICB9XG4gIHJldHVybiB7IHN0YXJ0LCBlbmQsIGVsZW1lbnQsIGJsb2NrSWQgfVxufVxuXG5sZXQgbGFzdGVzdEJsb2NrSWQgPSAxXG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBibG9jayBzdGFydGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja1N0YXJ0ICh2bSkge1xuICBjb25zdCBkb2MgPSB2bS5fYXBwLmRvY1xuICBjb25zdCBhbmNob3IgPSBkb2MuY3JlYXRlQ29tbWVudCgnc3RhcnQnKVxuICByZXR1cm4gYW5jaG9yXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBibG9jayBlbmRlci5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmxvY2tFbmQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdlbmQnKVxuICByZXR1cm4gYW5jaG9yXG59XG5cbi8qKlxuICogQXR0YWNoIHRhcmdldCB0byBhIGNlcnRhaW4gZGVzdCB1c2luZyBhcHBlbmRDaGlsZCBieSBkZWZhdWx0LlxuICogSWYgdGhlIGRlc3QgaXMgYSBmcmFnIGJsb2NrIHRoZW4gaW5zZXJ0IGJlZm9yZSB0aGUgZW5kZXIuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGF0dGFjaCB0aGUgc3RhcnRlciBhbmQgZW5kZXIgaW4gb3JkZXIuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gZGVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoVGFyZ2V0ICh2bSwgdGFyZ2V0LCBkZXN0KSB7XG4gIGlmIChkZXN0LmVsZW1lbnQpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBkZXN0LmVuZFxuICAgIGNvbnN0IGFmdGVyID0gZGVzdC51cGRhdGVNYXJrXG4gICAgLy8gcHVzaCBuZXcgdGFyZ2V0IGZvciB3YXRjaCBsaXN0IHVwZGF0ZSBsYXRlclxuICAgIGlmIChkZXN0LmNoaWxkcmVuKSB7XG4gICAgICBkZXN0LmNoaWxkcmVuLnB1c2godGFyZ2V0KVxuICAgIH1cbiAgICAvLyBmb3IgY2hlY2sgcmVwZWF0IGNhc2VcbiAgICBpZiAoYWZ0ZXIpIHtcbiAgICAgIGNvbnN0IHNpZ25hbCA9IG1vdmVUYXJnZXQodm0sIHRhcmdldCwgYWZ0ZXIpXG4gICAgICBkZXN0LnVwZGF0ZU1hcmsgPSB0YXJnZXQuZWxlbWVudCA/IHRhcmdldC5lbmQgOiB0YXJnZXRcbiAgICAgIHJldHVybiBzaWduYWxcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LnN0YXJ0LCBiZWZvcmUpXG4gICAgICBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldC5lbmQsIGJlZm9yZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIGJlZm9yZSlcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKHRhcmdldC5lbGVtZW50KSB7XG4gICAgICBkZXN0LmFwcGVuZENoaWxkKHRhcmdldC5zdGFydClcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LmVuZClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTW92ZSB0YXJnZXQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LiBUaGUgdGFyZ2V0IG1heWJlIGJsb2NrIG9yIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVGFyZ2V0ICh2bSwgdGFyZ2V0LCBhZnRlcikge1xuICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICByZXR1cm4gbW92ZUJsb2NrKHRhcmdldCwgYWZ0ZXIpXG4gIH1cbiAgcmV0dXJuIG1vdmVFbGVtZW50KHRhcmdldCwgYWZ0ZXIpXG59XG5cbi8qKlxuICogTW92ZSBlbGVtZW50IGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmZ1bmN0aW9uIG1vdmVFbGVtZW50IChlbGVtZW50LCBhZnRlcikge1xuICBjb25zdCBwYXJlbnQgPSBhZnRlci5wYXJlbnROb2RlXG4gIGlmIChwYXJlbnQpIHtcbiAgICByZXR1cm4gcGFyZW50Lmluc2VydEFmdGVyKGVsZW1lbnQsIGFmdGVyKVxuICB9XG59XG5cbi8qKlxuICogTW92ZSBhbGwgZWxlbWVudHMgb2YgdGhlIGJsb2NrIGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUJsb2NrIChmcmFnQmxvY2ssIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgbGV0IGVsID0gZnJhZ0Jsb2NrLnN0YXJ0XG4gICAgbGV0IHNpZ25hbFxuICAgIGNvbnN0IGdyb3VwID0gW2VsXVxuXG4gICAgd2hpbGUgKGVsICYmIGVsICE9PSBmcmFnQmxvY2suZW5kKSB7XG4gICAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gICAgICBncm91cC5wdXNoKGVsKVxuICAgIH1cblxuICAgIGxldCB0ZW1wID0gYWZ0ZXJcbiAgICBncm91cC5ldmVyeSgoZWwpID0+IHtcbiAgICAgIHNpZ25hbCA9IHBhcmVudC5pbnNlcnRBZnRlcihlbCwgdGVtcClcbiAgICAgIHRlbXAgPSBlbFxuICAgICAgcmV0dXJuIHNpZ25hbCAhPT0gLTFcbiAgICB9KVxuXG4gICAgcmV0dXJuIHNpZ25hbFxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHRhcmdldCBmcm9tIERPTSB0cmVlLlxuICogSWYgdGhlIHRhcmdldCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBjYWxsIF9yZW1vdmVCbG9ja1xuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICByZW1vdmVCbG9jayh0YXJnZXQsIHByZXNlcnZlQmxvY2spXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVtb3ZlRWxlbWVudCh0YXJnZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjZXJ0YWluIGVsZW1lbnQuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudCAodGFyZ2V0KSB7XG4gIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXG5cbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0YXJnZXQpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBmcmFnIGJsb2NrLlxuICogVGhlIHNlY29uZCBwYXJhbSBkZWNpZGVzIHdoZXRoZXIgdGhlIGJsb2NrIHNlbGYgc2hvdWxkIGJlIHJlbW92ZWQgdG9vLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIGZyYWdCbG9ja1xuICogQHBhcmFtICB7Qm9vbGVhbn0gcHJlc2VydmVCbG9jaz1mYWxzZVxuICovXG5mdW5jdGlvbiByZW1vdmVCbG9jayAoZnJhZ0Jsb2NrLCBwcmVzZXJ2ZUJsb2NrID0gZmFsc2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgbGV0IGVsID0gZnJhZ0Jsb2NrLnN0YXJ0Lm5leHRTaWJsaW5nXG5cbiAgd2hpbGUgKGVsICYmIGVsICE9PSBmcmFnQmxvY2suZW5kKSB7XG4gICAgcmVzdWx0LnB1c2goZWwpXG4gICAgZWwgPSBlbC5uZXh0U2libGluZ1xuICB9XG5cbiAgaWYgKCFwcmVzZXJ2ZUJsb2NrKSB7XG4gICAgcmVtb3ZlRWxlbWVudChmcmFnQmxvY2suc3RhcnQpXG4gIH1cbiAgcmVzdWx0LmZvckVhY2goKGVsKSA9PiB7XG4gICAgcmVtb3ZlRWxlbWVudChlbClcbiAgfSlcbiAgaWYgKCFwcmVzZXJ2ZUJsb2NrKSB7XG4gICAgcmVtb3ZlRWxlbWVudChmcmFnQmxvY2suZW5kKVxuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9kb20taGVscGVyLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBFdmVyeXRoaW5nIGFib3V0IGNvbXBvbmVudCBldmVudCB3aGljaCBpbmNsdWRlcyBldmVudCBvYmplY3QsIGV2ZW50IGxpc3RlbmVyLFxuICogZXZlbnQgZW1pdHRlciBhbmQgbGlmZWN5Y2xlIGhvb2tzLlxuICovXG5cbi8qKlxuICogRXZlbnQgb2JqZWN0IGRlZmluaXRpb24uIEFuIGV2ZW50IG9iamVjdCBoYXMgYHR5cGVgLCBgdGltZXN0YW1wYCBhbmRcbiAqIGBkZXRhaWxgIGZyb20gd2hpY2ggYSBjb21wb25lbnQgZW1pdC4gVGhlIGV2ZW50IG9iamVjdCBjb3VsZCBiZSBkaXNwYXRjaGVkIHRvXG4gKiBwYXJlbnRzIG9yIGJyb2FkY2FzdGVkIHRvIGNoaWxkcmVuIGV4Y2VwdCBgdGhpcy5zdG9wKClgIGlzIGNhbGxlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge2FueX0gICAgZGV0YWlsXG4gKi9cbmZ1bmN0aW9uIEV2dCAodHlwZSwgZGV0YWlsKSB7XG4gIGlmIChkZXRhaWwgaW5zdGFuY2VvZiBFdnQpIHtcbiAgICByZXR1cm4gZGV0YWlsXG4gIH1cblxuICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgdGhpcy5kZXRhaWwgPSBkZXRhaWxcbiAgdGhpcy50eXBlID0gdHlwZVxuXG4gIGxldCBzaG91bGRTdG9wID0gZmFsc2VcblxuICAvKipcbiAgICogc3RvcCBkaXNwYXRjaCBhbmQgYnJvYWRjYXN0XG4gICAqL1xuICB0aGlzLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2hvdWxkU3RvcCA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBpZiBpdCBjYW4ndCBiZSBkaXNwYXRjaGVkIG9yIGJyb2FkY2FzdGVkXG4gICAqL1xuICB0aGlzLmhhc1N0b3BwZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNob3VsZFN0b3BcbiAgfVxufVxuXG4vKipcbiAqIEVtaXQgYW4gZXZlbnQgYnV0IG5vdCBicm9hZGNhc3QgZG93biBvciBkaXNwYXRjaCB1cC5cbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICogQHBhcmFtICB7YW55fSAgICBkZXRhaWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRlbWl0ICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV1cbiAgaWYgKGhhbmRsZXJMaXN0KSB7XG4gICAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gICAgaGFuZGxlckxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGV2dClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRW1pdCBhbiBldmVudCBhbmQgZGlzcGF0Y2ggaXQgdXAuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSAge2FueX0gICAgZGV0YWlsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZGlzcGF0Y2ggKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgdGhpcy4kZW1pdCh0eXBlLCBldnQpXG5cbiAgaWYgKCFldnQuaGFzU3RvcHBlZCgpICYmIHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQuJGRpc3BhdGNoKSB7XG4gICAgdGhpcy5fcGFyZW50LiRkaXNwYXRjaCh0eXBlLCBldnQpXG4gIH1cbn1cblxuLyoqXG4gKiBFbWl0IGFuIGV2ZW50IGFuZCBicm9hZGNhc3QgaXQgZG93bi5cbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICogQHBhcmFtICB7YW55fSAgICBkZXRhaWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRicm9hZGNhc3QgKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgdGhpcy4kZW1pdCh0eXBlLCBldnQpXG5cbiAgaWYgKCFldnQuaGFzU3RvcHBlZCgpICYmIHRoaXMuX2NoaWxkcmVuVm1zKSB7XG4gICAgdGhpcy5fY2hpbGRyZW5WbXMuZm9yRWFjaCgoc3ViVm0pID0+IHtcbiAgICAgIHN1YlZtLiRicm9hZGNhc3QodHlwZSwgZXZ0KVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgZXZlbnQgbGlzdGVuZXIuXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgdHlwZVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRvbiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXR5cGUgfHwgdHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXSB8fCBbXVxuICBoYW5kbGVyTGlzdC5wdXNoKGhhbmRsZXIpXG4gIGV2ZW50c1t0eXBlXSA9IGhhbmRsZXJMaXN0XG5cbiAgLy8gZml4ZWQgb2xkIHZlcnNpb24gbGlmZWN5Y2xlIGRlc2lnblxuICBpZiAodHlwZSA9PT0gJ2hvb2s6cmVhZHknICYmIHRoaXMuX3JlYWR5KSB7XG4gICAgdGhpcy4kZW1pdCgnaG9vazpyZWFkeScpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIuXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgdHlwZVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRvZmYgKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0eXBlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgaWYgKCFoYW5kbGVyKSB7XG4gICAgZGVsZXRlIGV2ZW50c1t0eXBlXVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdXG4gIGlmICghaGFuZGxlckxpc3QpIHtcbiAgICByZXR1cm5cbiAgfVxuICBoYW5kbGVyTGlzdC4kcmVtb3ZlKGhhbmRsZXIpXG59XG5cbmNvbnN0IExJRkVfQ1lDTEVfVFlQRVMgPSBbJ2luaXQnLCAnY3JlYXRlZCcsICdyZWFkeSddXG5cbi8qKlxuICogSW5pdCBldmVudHM6XG4gKiAxLiBsaXN0ZW4gYGV2ZW50c2AgaW4gY29tcG9uZW50IG9wdGlvbnMgJiBgZXh0ZXJuYWxFdmVudHNgLlxuICogMi4gYmluZCBsaWZlY3ljbGUgaG9va3MuXG4gKiBAcGFyYW0gIHtWbX0gICAgIHZtXG4gKiBAcGFyYW0gIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0RXZlbnRzICh2bSwgZXh0ZXJuYWxFdmVudHMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHZtLl9vcHRpb25zIHx8IHt9XG4gIGNvbnN0IGV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzIHx8IHt9XG4gIGZvciAoY29uc3QgdHlwZTEgaW4gZXZlbnRzKSB7XG4gICAgdm0uJG9uKHR5cGUxLCBldmVudHNbdHlwZTFdKVxuICB9XG4gIGZvciAoY29uc3QgdHlwZTIgaW4gZXh0ZXJuYWxFdmVudHMpIHtcbiAgICB2bS4kb24odHlwZTIsIGV4dGVybmFsRXZlbnRzW3R5cGUyXSlcbiAgfVxuICBMSUZFX0NZQ0xFX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICB2bS4kb24oYGhvb2s6JHt0eXBlfWAsIG9wdGlvbnNbdHlwZV0pXG4gIH0pXG59XG5cbi8qKlxuICogQmluZCBldmVudCByZWxhdGVkIG1ldGhvZHMgdG8gVmlld01vZGVsIGluc3RhbmNlLlxuICogQHBhcmFtICB7Vm19IHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkV2ZW50cyAodm0pIHtcbiAgdm0uJGVtaXQgPSAkZW1pdFxuICB2bS4kZGlzcGF0Y2ggPSAkZGlzcGF0Y2hcbiAgdm0uJGJyb2FkY2FzdCA9ICRicm9hZGNhc3RcbiAgdm0uJG9uID0gJG9uXG4gIHZtLiRvZmYgPSAkb2ZmXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vZXZlbnRzLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBhcGkgdGhhdCBpbnZva2VkIGJ5IGpzIGJ1bmRsZSBjb2RlXG4gKlxuICogLSBkZWZpbmUobmFtZSwgZmFjdG9yeSk6IGRlZmluZSBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSBib290c3RyYXAodHlwZSwgY29uZmlnLCBkYXRhKTogcmVxdWlyZSBhIGNlcnRhaW4gdHlwZSAmXG4gKiAgICAgICAgIHJlbmRlciB3aXRoIChvcHRpb25hbCkgZGF0YVxuICpcbiAqIGRlcHJlY2F0ZWQ6XG4gKiAtIHJlZ2lzdGVyKHR5cGUsIG9wdGlvbnMpOiByZWdpc3RlciBhIG5ldyBjb21wb3NlZCBjb21wb25lbnQgdHlwZVxuICogLSByZW5kZXIodHlwZSwgZGF0YSk6IHJlbmRlciBieSBhIGNlcnRhaW4gdHlwZSB3aXRoIChvcHRpb25hbCkgZGF0YVxuICogLSByZXF1aXJlKHR5cGUpKGRhdGEpOiByZXF1aXJlIGEgdHlwZSB0aGVuIHJlbmRlciB3aXRoIGRhdGFcbiAqL1xuXG5leHBvcnQgeyBib290c3RyYXAgfSBmcm9tICcuL2Jvb3RzdHJhcCdcbmV4cG9ydCB7IGNsZWFyQ29tbW9uTW9kdWxlcywgZGVmaW5lRm4sIHJlZ2lzdGVyIH0gZnJvbSAnLi9kZWZpbmUnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9pbmRleC5qc1xuICoqLyIsImltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IFZtIGZyb20gJy4uLy4uL3ZtJ1xuaW1wb3J0ICogYXMgZG93bmdyYWRlIGZyb20gJy4uL2Rvd25ncmFkZSdcbmltcG9ydCB7XG4gIHJlcXVpcmVDdXN0b21Db21wb25lbnRcbn0gZnJvbSAnLi4vcmVnaXN0ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuLi8uLi91dGlsJ1xuXG4vKipcbiAqIGJvb3RzdHJhcCBhcHAgZnJvbSBhIGNlcnRhaW4gY3VzdG9tIGNvbXBvbmVudCB3aXRoIGNvbmZpZyAmIGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcCAoYXBwLCBuYW1lLCBjb25maWcsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gYm9vdHN0cmFwIGZvciAke25hbWV9YClcblxuICAvLyAxLiB2YWxpZGF0ZSBjdXN0b20gY29tcG9uZW50IG5hbWUgZmlyc3RcbiAgbGV0IGNsZWFuTmFtZVxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAvLyBjaGVjayBpZiBkZWZpbmUgYnkgb2xkICdkZWZpbmUnIG1ldGhvZFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghcmVxdWlyZUN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoYEl0J3Mgbm90IGEgY29tcG9uZW50OiAke25hbWV9YClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgV3JvbmcgY29tcG9uZW50IG5hbWU6ICR7bmFtZX1gKVxuICB9XG5cbiAgLy8gMi4gdmFsaWRhdGUgY29uZmlndXJhdGlvblxuICBjb25maWcgPSBpc1BsYWluT2JqZWN0KGNvbmZpZykgPyBjb25maWcgOiB7fVxuICAvLyAyLjEgdHJhbnNmb3JtZXIgdmVyc2lvbiBjaGVja1xuICBpZiAodHlwZW9mIGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgdHlwZW9mIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24gPT09ICdzdHJpbmcnICYmXG4gICAgIXNlbXZlci5zYXRpc2ZpZXMoY29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbixcbiAgICAgIGdsb2JhbC50cmFuc2Zvcm1lclZlcnNpb24pKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSlMgQnVuZGxlIHZlcnNpb246ICR7Y29uZmlnLnRyYW5zZm9ybWVyVmVyc2lvbn0gYCArXG4gICAgICBgbm90IGNvbXBhdGlibGUgd2l0aCAke2dsb2JhbC50cmFuc2Zvcm1lclZlcnNpb259YClcbiAgfVxuICAvLyAyLjIgZG93bmdyYWRlIHZlcnNpb24gY2hlY2tcbiAgY29uc3QgZG93bmdyYWRlUmVzdWx0ID0gZG93bmdyYWRlLmNoZWNrKGNvbmZpZy5kb3duZ3JhZGUpXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoZG93bmdyYWRlUmVzdWx0LmlzRG93bmdyYWRlKSB7XG4gICAgYXBwLmNhbGxUYXNrcyhbe1xuICAgICAgbW9kdWxlOiAnaW5zdGFuY2VXcmFwJyxcbiAgICAgIG1ldGhvZDogJ2Vycm9yJyxcbiAgICAgIGFyZ3M6IFtcbiAgICAgICAgZG93bmdyYWRlUmVzdWx0LmVycm9yVHlwZSxcbiAgICAgICAgZG93bmdyYWRlUmVzdWx0LmNvZGUsXG4gICAgICAgIGRvd25ncmFkZVJlc3VsdC5lcnJvck1lc3NhZ2VcbiAgICAgIF1cbiAgICB9XSlcbiAgICByZXR1cm4gbmV3IEVycm9yKGBEb3duZ3JhZGVbJHtkb3duZ3JhZGVSZXN1bHQuY29kZX1dOiAke2Rvd25ncmFkZVJlc3VsdC5lcnJvck1lc3NhZ2V9YClcbiAgfVxuXG4gIC8vIDMuIGNyZWF0ZSBhIG5ldyBWbSB3aXRoIGN1c3RvbSBjb21wb25lbnQgbmFtZSBhbmQgZGF0YVxuICBhcHAudm0gPSBuZXcgVm0oY2xlYW5OYW1lLCBudWxsLCB7IF9hcHA6IGFwcCB9LCBudWxsLCBkYXRhKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvYm9vdHN0cmFwLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyO1xuXG4vLyBUaGUgZGVidWcgZnVuY3Rpb24gaXMgZXhjbHVkZWQgZW50aXJlbHkgZnJvbSB0aGUgbWluaWZpZWQgdmVyc2lvbi5cbi8qIG5vbWluICovIHZhciBkZWJ1Zztcbi8qIG5vbWluICovIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudiAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvKiBub21pbiAqLyAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSlcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAvKiBub21pbiAqLyB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgLyogbm9taW4gKi8gYXJncy51bnNoaWZ0KCdTRU1WRVInKTtcbiAgICAvKiBub21pbiAqLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAvKiBub21pbiAqLyB9O1xuLyogbm9taW4gKi8gZWxzZVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCc7XG5cbnZhciBNQVhfTEVOR1RIID0gMjU2O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdO1xudmFyIHNyYyA9IGV4cG9ydHMuc3JjID0gW107XG52YXIgUiA9IDA7XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUl0gPSAnMHxbMS05XVxcXFxkKic7XG52YXIgTlVNRVJJQ0lERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnO1xuXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5cblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnZhciBNQUlOVkVSU0lPTiA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTl0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKys7XG5zcmNbTUFJTlZFUlNJT05MT09TRV0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKSc7XG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudmFyIFBSRVJFTEVBU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJztcblxudmFyIFBSRVJFTEVBU0VMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFTE9PU0VdID0gJyg/Oi0/KCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrO1xuc3JjW0JVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKyc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgQlVJTEQgPSBSKys7XG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknO1xuXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrKztcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG5zcmNbRlVMTF0gPSAnXicgKyBGVUxMUExBSU4gKyAnJCc7XG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG52YXIgTE9PU0UgPSBSKys7XG5zcmNbTE9PU0VdID0gJ14nICsgTE9PU0VQTEFJTiArICckJztcblxudmFyIEdUTFQgPSBSKys7XG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJztcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxudmFyIFhSQU5HRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConO1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUl0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJ3x4fFh8XFxcXConO1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKys7XG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRVBMQUlOTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFID0gUisrO1xuc3JjW1hSQU5HRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgWFJBTkdFTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWQ7XG4gICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKVxuICAgICAgICAgIHJldHVybiBudW07XG4gICAgICB9XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSk7XG5cbiAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXTtcbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYWpvciArICcuJyArIHRoaXMubWlub3IgKyAnLicgKyB0aGlzLnBhdGNoO1xuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICB0aGlzLnZlcnNpb24gKz0gJy0nICsgdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKTtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5sb29zZSwgb3RoZXIpO1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZU1haW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWFqb3IsIG90aGVyLm1ham9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWlub3IsIG90aGVyLm1pbm9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucGF0Y2gsIG90aGVyLnBhdGNoKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZVByZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIC0xO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAwO1xuXG4gIHZhciBpID0gMDtcbiAgZG8ge1xuICAgIHZhciBhID0gdGhpcy5wcmVyZWxlYXNlW2ldO1xuICAgIHZhciBiID0gb3RoZXIucHJlcmVsZWFzZVtpXTtcbiAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYik7XG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMDtcbiAgICBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgZWxzZSBpZiAoYSA9PT0gYilcbiAgICAgIGNvbnRpbnVlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYik7XG4gIH0gd2hpbGUgKCsraSk7XG59O1xuXG4vLyBwcmVtaW5vciB3aWxsIGJ1bXAgdGhlIHZlcnNpb24gdXAgdG8gdGhlIG5leHQgbWlub3IgcmVsZWFzZSwgYW5kIGltbWVkaWF0ZWx5XG4vLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG5TZW1WZXIucHJvdG90eXBlLmluYyA9IGZ1bmN0aW9uKHJlbGVhc2UsIGlkZW50aWZpZXIpIHtcbiAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAvLyBwcmVwYXRjaC5cbiAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWFqb3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgLy8gMS4wLjAtNSBidW1wcyB0byAxLjAuMFxuICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgIGlmICh0aGlzLm1pbm9yICE9PSAwIHx8IHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlub3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnBhdGNoKys7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgLy8gMS4wLjAgXCJwcmVcIiB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgIGNhc2UgJ3ByZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gWzBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXJlbGVhc2VbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rKztcbiAgICAgICAgICAgIGkgPSAtMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IC0xKSAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMCk7XG4gICAgICB9XG4gICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAvLyAxLjIuMC1iZXRhLmZvb2JseiBvciAxLjIuMC1iZXRhIGJ1bXBzIHRvIDEuMi4wLWJldGEuMFxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlWzBdID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpXG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICcgKyByZWxlYXNlKTtcbiAgfVxuICB0aGlzLmZvcm1hdCgpO1xuICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzLmluYyA9IGluYztcbmZ1bmN0aW9uIGluYyh2ZXJzaW9uLCByZWxlYXNlLCBsb29zZSwgaWRlbnRpZmllcikge1xuICBpZiAodHlwZW9mKGxvb3NlKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyID0gbG9vc2U7XG4gICAgbG9vc2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllcikudmVyc2lvbjtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLmRpZmYgPSBkaWZmO1xuZnVuY3Rpb24gZGlmZih2ZXJzaW9uMSwgdmVyc2lvbjIpIHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdjEgPSBwYXJzZSh2ZXJzaW9uMSk7XG4gICAgdmFyIHYyID0gcGFyc2UodmVyc2lvbjIpO1xuICAgIGlmICh2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ByZScra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdwcmVyZWxlYXNlJztcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuY29tcGFyZUlkZW50aWZpZXJzID0gY29tcGFyZUlkZW50aWZpZXJzO1xuXG52YXIgbnVtZXJpYyA9IC9eWzAtOV0rJC87XG5mdW5jdGlvbiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICB2YXIgYW51bSA9IG51bWVyaWMudGVzdChhKTtcbiAgdmFyIGJudW0gPSBudW1lcmljLnRlc3QoYik7XG5cbiAgaWYgKGFudW0gJiYgYm51bSkge1xuICAgIGEgPSArYTtcbiAgICBiID0gK2I7XG4gIH1cblxuICByZXR1cm4gKGFudW0gJiYgIWJudW0pID8gLTEgOlxuICAgICAgICAgKGJudW0gJiYgIWFudW0pID8gMSA6XG4gICAgICAgICBhIDwgYiA/IC0xIDpcbiAgICAgICAgIGEgPiBiID8gMSA6XG4gICAgICAgICAwO1xufVxuXG5leHBvcnRzLnJjb21wYXJlSWRlbnRpZmllcnMgPSByY29tcGFyZUlkZW50aWZpZXJzO1xuZnVuY3Rpb24gcmNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSk7XG59XG5cbmV4cG9ydHMubWFqb3IgPSBtYWpvcjtcbmZ1bmN0aW9uIG1ham9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvcjtcbn1cblxuZXhwb3J0cy5taW5vciA9IG1pbm9yO1xuZnVuY3Rpb24gbWlub3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1pbm9yO1xufVxuXG5leHBvcnRzLnBhdGNoID0gcGF0Y2g7XG5mdW5jdGlvbiBwYXRjaChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2g7XG59XG5cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKGIpO1xufVxuXG5leHBvcnRzLmNvbXBhcmVMb29zZSA9IGNvbXBhcmVMb29zZTtcbmZ1bmN0aW9uIGNvbXBhcmVMb29zZShhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIHRydWUpO1xufVxuXG5leHBvcnRzLnJjb21wYXJlID0gcmNvbXBhcmU7XG5mdW5jdGlvbiByY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShiLCBhLCBsb29zZSk7XG59XG5cbmV4cG9ydHMuc29ydCA9IHNvcnQ7XG5mdW5jdGlvbiBzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5yc29ydCA9IHJzb3J0O1xuZnVuY3Rpb24gcnNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMucmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5ndCA9IGd0O1xuZnVuY3Rpb24gZ3QoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMDtcbn1cblxuZXhwb3J0cy5sdCA9IGx0O1xuZnVuY3Rpb24gbHQoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDwgMDtcbn1cblxuZXhwb3J0cy5lcSA9IGVxO1xuZnVuY3Rpb24gZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwO1xufVxuXG5leHBvcnRzLm5lcSA9IG5lcTtcbmZ1bmN0aW9uIG5lcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgIT09IDA7XG59XG5cbmV4cG9ydHMuZ3RlID0gZ3RlO1xuZnVuY3Rpb24gZ3RlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+PSAwO1xufVxuXG5leHBvcnRzLmx0ZSA9IGx0ZTtcbmZ1bmN0aW9uIGx0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMDtcbn1cblxuZXhwb3J0cy5jbXAgPSBjbXA7XG5mdW5jdGlvbiBjbXAoYSwgb3AsIGIsIGxvb3NlKSB7XG4gIHZhciByZXQ7XG4gIHN3aXRjaCAob3ApIHtcbiAgICBjYXNlICc9PT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhID09PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSAhPT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyc6IGNhc2UgJz0nOiBjYXNlICc9PSc6IHJldCA9IGVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnIT0nOiByZXQgPSBuZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+JzogcmV0ID0gZ3QoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+PSc6IHJldCA9IGd0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzwnOiByZXQgPSBsdChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzw9JzogcmV0ID0gbHRlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvcGVyYXRvcjogJyArIG9wKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnRzLkNvbXBhcmF0b3IgPSBDb21wYXJhdG9yO1xuZnVuY3Rpb24gQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICBpZiAoY29tcC5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gY29tcDtcbiAgICBlbHNlXG4gICAgICBjb21wID0gY29tcC52YWx1ZTtcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSlcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuXG4gIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHRoaXMucGFyc2UoY29tcCk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICBlbHNlXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uO1xuXG4gIGRlYnVnKCdjb21wJywgdGhpcyk7XG59XG5cbnZhciBBTlkgPSB7fTtcbkNvbXBhcmF0b3IucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oY29tcCkge1xuICB2YXIgciA9IHRoaXMubG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBtID0gY29tcC5tYXRjaChyKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjb21wYXJhdG9yOiAnICsgY29tcCk7XG5cbiAgdGhpcy5vcGVyYXRvciA9IG1bMV07XG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpXG4gICAgdGhpcy5vcGVyYXRvciA9ICcnO1xuXG4gIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICBpZiAoIW1bMl0pXG4gICAgdGhpcy5zZW12ZXIgPSBBTlk7XG4gIGVsc2VcbiAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5sb29zZSk7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjbXAodmVyc2lvbiwgdGhpcy5vcGVyYXRvciwgdGhpcy5zZW12ZXIsIHRoaXMubG9vc2UpO1xufTtcblxuXG5leHBvcnRzLlJhbmdlID0gUmFuZ2U7XG5mdW5jdGlvbiBSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgaWYgKChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSAmJiByYW5nZS5sb29zZSA9PT0gbG9vc2UpXG4gICAgcmV0dXJuIHJhbmdlO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSYW5nZSkpXG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHRoaXMubG9vc2UgPSBsb29zZTtcblxuICAvLyBGaXJzdCwgc3BsaXQgYmFzZWQgb24gYm9vbGVhbiBvciB8fFxuICB0aGlzLnJhdyA9IHJhbmdlO1xuICB0aGlzLnNldCA9IHJhbmdlLnNwbGl0KC9cXHMqXFx8XFx8XFxzKi8pLm1hcChmdW5jdGlvbihyYW5nZSkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlUmFuZ2UocmFuZ2UudHJpbSgpKTtcbiAgfSwgdGhpcykuZmlsdGVyKGZ1bmN0aW9uKGMpIHtcbiAgICAvLyB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCByZWxldmFudCBmb3Igd2hhdGV2ZXIgcmVhc29uXG4gICAgcmV0dXJuIGMubGVuZ3RoO1xuICB9KTtcblxuICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgU2VtVmVyIFJhbmdlOiAnICsgcmFuZ2UpO1xuICB9XG5cbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuUmFuZ2UucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJhbmdlID0gdGhpcy5zZXQubWFwKGZ1bmN0aW9uKGNvbXBzKSB7XG4gICAgcmV0dXJuIGNvbXBzLmpvaW4oJyAnKS50cmltKCk7XG4gIH0pLmpvaW4oJ3x8JykudHJpbSgpO1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS5wYXJzZVJhbmdlID0gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgdmFyIGxvb3NlID0gdGhpcy5sb29zZTtcbiAgcmFuZ2UgPSByYW5nZS50cmltKCk7XG4gIGRlYnVnKCdyYW5nZScsIHJhbmdlLCBsb29zZSk7XG4gIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICB2YXIgaHIgPSBsb29zZSA/IHJlW0hZUEhFTlJBTkdFTE9PU0VdIDogcmVbSFlQSEVOUkFOR0VdO1xuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UpO1xuICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSk7XG4gIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpO1xuICBkZWJ1ZygnY29tcGFyYXRvciB0cmltJywgcmFuZ2UsIHJlW0NPTVBBUkFUT1JUUklNXSk7XG5cbiAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtUSUxERVRSSU1dLCB0aWxkZVRyaW1SZXBsYWNlKTtcblxuICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpO1xuXG4gIC8vIG5vcm1hbGl6ZSBzcGFjZXNcbiAgcmFuZ2UgPSByYW5nZS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKTtcblxuICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgcmFuZ2UgaXMgY29tcGxldGVseSB0cmltbWVkIGFuZFxuICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gIHZhciBjb21wUmUgPSBsb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIHNldCA9IHJhbmdlLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpLnNwbGl0KC9cXHMrLyk7XG4gIGlmICh0aGlzLmxvb3NlKSB7XG4gICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICBzZXQgPSBzZXQuZmlsdGVyKGZ1bmN0aW9uKGNvbXApIHtcbiAgICAgIHJldHVybiAhIWNvbXAubWF0Y2goY29tcFJlKTtcbiAgICB9KTtcbiAgfVxuICBzZXQgPSBzZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KTtcblxuICByZXR1cm4gc2V0O1xufTtcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuZXhwb3J0cy50b0NvbXBhcmF0b3JzID0gdG9Db21wYXJhdG9ycztcbmZ1bmN0aW9uIHRvQ29tcGFyYXRvcnMocmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5zZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gY29tcC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICB9KTtcbn1cblxuLy8gY29tcHJpc2VkIG9mIHhyYW5nZXMsIHRpbGRlcywgc3RhcnMsIGFuZCBndGx0J3MgYXQgdGhpcyBwb2ludC5cbi8vIGFscmVhZHkgcmVwbGFjZWQgdGhlIGh5cGhlbiByYW5nZXNcbi8vIHR1cm4gaW50byBhIHNldCBvZiBKVVNUIGNvbXBhcmF0b3JzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjb21wJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3RpbGRlcycsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygneHJhbmdlJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpO1xuICBkZWJ1Zygnc3RhcnMnLCBjb21wKTtcbiAgcmV0dXJuIGNvbXA7XG59XG5cbmZ1bmN0aW9uIGlzWChpZCkge1xuICByZXR1cm4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonO1xufVxuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMFxuLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMFxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSkge1xuICB2YXIgciA9IGxvb3NlID8gcmVbVElMREVMT09TRV0gOiByZVtUSUxERV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKVxuICAgICAgLy8gfjEuMiA9PSA+PTEuMi4wIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9IGVsc2VcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjBcbmZ1bmN0aW9uIHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgbG9vc2UpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbQ0FSRVRMT09TRV0gOiByZVtDQVJFVF07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJyk7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBsb29zZSk7XG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSkge1xuICBjb21wID0gY29tcC50cmltKCk7XG4gIHZhciByID0gbG9vc2UgPyByZVtYUkFOR0VMT09TRV0gOiByZVtYUkFOR0VdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHhNID0gaXNYKE0pO1xuICAgIHZhciB4bSA9IHhNIHx8IGlzWChtKTtcbiAgICB2YXIgeHAgPSB4bSB8fCBpc1gocCk7XG4gICAgdmFyIGFueVggPSB4cDtcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WClcbiAgICAgIGd0bHQgPSAnJztcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBmb3JiaWRkZW5cbiAgICAgICAgcmV0ID0gJyonO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pXG4gICAgICAgIG0gPSAwO1xuICAgICAgaWYgKHhwKVxuICAgICAgICBwID0gMDtcblxuICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICAvLyA+MS4yLjMgPT4gPj0gMS4yLjRcbiAgICAgICAgZ3RsdCA9ICc+PSc7XG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCc7XG4gICAgICAgIGlmICh4bSlcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0ID0gZ3RsdCArIE0gKyAnLicgKyBtICsgJy4nICsgcDtcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmZ1bmN0aW9uIHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgbG9vc2UpO1xuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2UocmVbU1RBUl0sICcnKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbSFlQSEVOUkFOR0VdKVxuLy8gTSwgbSwgcGF0Y2gsIHByZXJlbGVhc2UsIGJ1aWxkXG4vLyAxLjIgLSAzLjQuNSA9PiA+PTEuMi4wIDw9My40LjVcbi8vIDEuMi4zIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjBcbmZ1bmN0aW9uIGh5cGhlblJlcGxhY2UoJDAsXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gICAgICAgICAgICAgICAgICAgICAgIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSB7XG5cbiAgaWYgKGlzWChmTSkpXG4gICAgZnJvbSA9ICcnO1xuICBlbHNlIGlmIChpc1goZm0pKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWChmcCkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuJyArIGZtICsgJy4wJztcbiAgZWxzZVxuICAgIGZyb20gPSAnPj0nICsgZnJvbTtcblxuICBpZiAoaXNYKHRNKSlcbiAgICB0byA9ICcnO1xuICBlbHNlIGlmIChpc1godG0pKVxuICAgIHRvID0gJzwnICsgKCt0TSArIDEpICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1godHApKVxuICAgIHRvID0gJzwnICsgdE0gKyAnLicgKyAoK3RtICsgMSkgKyAnLjAnO1xuICBlbHNlIGlmICh0cHIpXG4gICAgdG8gPSAnPD0nICsgdE0gKyAnLicgKyB0bSArICcuJyArIHRwICsgJy0nICsgdHByO1xuICBlbHNlXG4gICAgdG8gPSAnPD0nICsgdG87XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKTtcbn1cblxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgaWYgKCF2ZXJzaW9uKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbikpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiB0ZXN0U2V0KHNldCwgdmVyc2lvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZyhzZXRbaV0uc2VtdmVyKTtcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyO1xuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5zYXRpc2ZpZXMgPSBzYXRpc2ZpZXM7XG5mdW5jdGlvbiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbik7XG59XG5cbmV4cG9ydHMubWF4U2F0aXNmeWluZyA9IG1heFNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtYXhTYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gcmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLm1pblNhdGlzZnlpbmcgPSBtaW5TYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWluU2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLnZhbGlkUmFuZ2UgPSB2YWxpZFJhbmdlO1xuZnVuY3Rpb24gdmFsaWRSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnJhbmdlIHx8ICcqJztcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmV4cG9ydHMubHRyID0gbHRyO1xuZnVuY3Rpb24gbHRyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJzwnLCBsb29zZSk7XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmV4cG9ydHMuZ3RyID0gZ3RyO1xuZnVuY3Rpb24gZ3RyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJz4nLCBsb29zZSk7XG59XG5cbmV4cG9ydHMub3V0c2lkZSA9IG91dHNpZGU7XG5mdW5jdGlvbiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBsb29zZSkge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdmFyIGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcDtcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3Q7XG4gICAgICBsdGVmbiA9IGx0ZTtcbiAgICAgIGx0Zm4gPSBsdDtcbiAgICAgIGNvbXAgPSAnPic7XG4gICAgICBlY29tcCA9ICc+PSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdDtcbiAgICAgIGx0ZWZuID0gZ3RlO1xuICAgICAgbHRmbiA9IGd0O1xuICAgICAgY29tcCA9ICc8JztcbiAgICAgIGVjb21wID0gJzw9JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpO1xuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNpZmVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldO1xuXG4gICAgdmFyIGhpZ2ggPSBudWxsO1xuICAgIHZhciBsb3cgPSBudWxsO1xuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcGFyYXRvci5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgICBjb21wYXJhdG9yID0gbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKVxuICAgICAgfVxuICAgICAgaGlnaCA9IGhpZ2ggfHwgY29tcGFyYXRvcjtcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yO1xuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgaGlnaCA9IGNvbXBhcmF0b3I7XG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGxvdy5vcGVyYXRvciA9PT0gZWNvbXAgJiYgbHRmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZTtcbmZ1bmN0aW9uIHByZXJlbGVhc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbDtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9zZW12ZXIvc2VtdmVyLmpzXG4gKiovIiwiaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbi8qKlxuICogTm9ybWFsaXplIGEgdmVyc2lvbiBzdHJpbmcuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFZlcnNpb24uIGllOiAxLCAxLjAsIDEuMC4wXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFZlcnNpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZlcnNpb24gKHYpIHtcbiAgY29uc3QgaXNWYWxpZCA9IHNlbXZlci52YWxpZCh2KVxuICBpZiAoaXNWYWxpZCkge1xuICAgIHJldHVybiB2XG4gIH1cblxuICB2ID0gdHlwZW9mICh2KSA9PT0gJ3N0cmluZycgPyB2IDogJydcbiAgY29uc3Qgc3BsaXQgPSB2LnNwbGl0KCcuJylcbiAgbGV0IGkgPSAwXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgd2hpbGUgKGkgPCAzKSB7XG4gICAgY29uc3QgcyA9IHR5cGVvZiAoc3BsaXRbaV0pID09PSAnc3RyaW5nJyAmJiBzcGxpdFtpXSA/IHNwbGl0W2ldIDogJzAnXG4gICAgcmVzdWx0LnB1c2gocylcbiAgICBpKytcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignLicpXG59XG5cbi8qKlxuICogR2V0IGluZm9ybWF0aW9ucyBmcm9tIGRpZmZlcmVudCBlcnJvciBrZXkuIExpa2U6XG4gKiAtIGNvZGVcbiAqIC0gZXJyb3JNZXNzYWdlXG4gKiAtIGVycm9yVHlwZVxuICogLSBpc0Rvd25ncmFkZVxuICogQHBhcmFtICB7c3RyaW5nfSBrZXlcbiAqIEBwYXJhbSAge3N0cmluZ30gdmFsXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNyaXRlcmlhXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcnJvciAoa2V5LCB2YWwsIGNyaXRlcmlhKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogdHJ1ZSxcbiAgICBlcnJvclR5cGU6IDEsXG4gICAgY29kZTogMTAwMFxuICB9XG4gIGNvbnN0IGdldE1zZyA9IGZ1bmN0aW9uIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgICByZXR1cm4gJ0Rvd25ncmFkZVsnICsga2V5ICsgJ10gOjogZGV2aWNlSW5mbyAnXG4gICAgICArIHZhbCArICcgbWF0Y2hlZCBjcml0ZXJpYSAnICsgY3JpdGVyaWFcbiAgfVxuICBjb25zdCBfa2V5ID0ga2V5LnRvTG93ZXJDYXNlKClcblxuICByZXN1bHQuZXJyb3JNZXNzYWdlID0gZ2V0TXNnKGtleSwgdmFsLCBjcml0ZXJpYSlcblxuICBpZiAoX2tleS5pbmRleE9mKCdvc3ZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAxXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdhcHB2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwMlxuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignd2VleHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAzXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDRcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBXRUVYIGZyYW1ld29yayBpbnB1dChkZXZpY2VJbmZvKVxuICoge1xuICogICBwbGF0Zm9ybTogJ2lPUycgb3IgJ2FuZHJvaWQnXG4gKiAgIG9zVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgYXBwVmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgd2VleFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGREZXZpY2VNb2RlbDogJ01PREVMX05BTUUnXG4gKiB9XG4gKlxuICogZG93bmdyYWRlIGNvbmZpZyhjb25maWcpXG4gKiB7XG4gKiAgIGlvczoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH0sXG4gKiAgIGFuZHJvaWQ6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9XG4gKiB9XG4gKlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGV2aWNlSW5mbyBXZWV4IFNESyBmcmFtZXdvcmsgaW5wdXRcbiAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnICAgICB1c2VyIGlucHV0XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgeyBpc0Rvd25ncmFkZTogdHJ1ZS9mYWxzZSwgZXJyb3JNZXNzYWdlLi4uIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrIChjb25maWcsIGRldmljZUluZm8pIHtcbiAgZGV2aWNlSW5mbyA9IGRldmljZUluZm8gfHwgZ2xvYmFsLldYRW52aXJvbm1lbnRcbiAgZGV2aWNlSW5mbyA9IGlzUGxhaW5PYmplY3QoZGV2aWNlSW5mbykgPyBkZXZpY2VJbmZvIDoge31cblxuICBsZXQgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiBmYWxzZSAvLyBkZWZhdXRsIGlzIHBhc3NcbiAgfVxuXG4gIGlmICh0eXBvZihjb25maWcpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGV0IGN1c3RvbURvd25ncmFkZSA9IGNvbmZpZy5jYWxsKHRoaXMsIGRldmljZUluZm8sIHtcbiAgICAgIHNlbXZlcjogc2VtdmVyLFxuICAgICAgbm9ybWFsaXplVmVyc2lvbjogdGhpcy5ub3JtYWxpemVWZXJzaW9uXG4gICAgfSlcblxuICAgIGN1c3RvbURvd25ncmFkZSA9ICEhY3VzdG9tRG93bmdyYWRlXG5cbiAgICByZXN1bHQgPSBjdXN0b21Eb3duZ3JhZGUgPyB0aGlzLmdldEVycm9yKCdjdXN0b20nLCAnJywgJ2N1c3RvbSBwYXJhbXMnKSA6IHJlc3VsdFxuICB9XG4gIGVsc2Uge1xuICAgIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgICBjb25zdCBwbGF0Zm9ybSA9IGRldmljZUluZm8ucGxhdGZvcm0gfHwgJ3Vua25vdydcbiAgICBjb25zdCBkUGxhdGZvcm0gPSBwbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgY09iaiA9IGNvbmZpZ1tkUGxhdGZvcm1dIHx8IHt9XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gZGV2aWNlSW5mbykge1xuICAgICAgY29uc3Qga2V5ID0gaVxuICAgICAgY29uc3Qga2V5TG93ZXIgPSBrZXkudG9Mb3dlckNhc2UoKVxuICAgICAgY29uc3QgdmFsID0gZGV2aWNlSW5mb1tpXVxuICAgICAgY29uc3QgaXNWZXJzaW9uID0ga2V5TG93ZXIuaW5kZXhPZigndmVyc2lvbicpID49IDBcbiAgICAgIGNvbnN0IGlzRGV2aWNlTW9kZWwgPSBrZXlMb3dlci5pbmRleE9mKCdkZXZpY2Vtb2RlbCcpID49IDBcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0gY09ialtpXVxuXG4gICAgICBpZiAoY3JpdGVyaWEgJiYgaXNWZXJzaW9uKSB7XG4gICAgICAgIGNvbnN0IGMgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oY3JpdGVyaWEpXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLm5vcm1hbGl6ZVZlcnNpb24oZGV2aWNlSW5mb1tpXSlcblxuICAgICAgICBpZiAoc2VtdmVyLnNhdGlzZmllcyhkLCBjKSkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0RXJyb3Ioa2V5LCB2YWwsIGNyaXRlcmlhKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzRGV2aWNlTW9kZWwpIHtcbiAgICAgICAgY29uc3QgX2NyaXRlcmlhID0gdHlwb2YoY3JpdGVyaWEpID09PSAnYXJyYXknID8gY3JpdGVyaWEgOiBbY3JpdGVyaWFdXG4gICAgICAgIGlmIChfY3JpdGVyaWEuaW5kZXhPZih2YWwpID49IDApIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9kb3duZ3JhZGUuanNcbiAqKi8iLCJpbXBvcnQge1xuICBpc1dlZXhDb21wb25lbnQsXG4gIGlzV2VleE1vZHVsZSxcbiAgaXNOb3JtYWxNb2R1bGUsXG4gIGlzTnBtTW9kdWxlLFxuICByZW1vdmVXZWV4UHJlZml4LFxuICByZW1vdmVKU1N1cmZpeFxufSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHtcbiAgcmVnaXN0ZXJDdXN0b21Db21wb25lbnQsXG4gIHJlcXVpcmVDdXN0b21Db21wb25lbnQsXG4gIGluaXRNb2R1bGVzXG59IGZyb20gJy4uL3JlZ2lzdGVyJ1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKlxuICogY29tbW9uIG1vZHVsZXMgYXJlIHNoYXJlZCB0byBhbGwgaW5zdGFuY2VzXG4gKiBpdCdzIHZlcnkgZGFuZ2Vyb3VzXG4gKi9cbmxldCBjb21tb25Nb2R1bGVzID0ge31cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDb21tb25Nb2R1bGVzICgpIHtcbiAgY29tbW9uTW9kdWxlcyA9IHt9XG59XG5cbi8qKlxuICogZGVmaW5lKG5hbWUsIGZhY3RvcnkpIGZvciBwcmltYXJ5IHVzYWdlXG4gKiBvclxuICogZGVmaW5lKG5hbWUsIGRlcHMsIGZhY3RvcnkpIGZvciBjb21wYXRpYmlsaXR5XG4gKiBOb3RpY2U6IERPIE5PVCB1c2UgZnVuY3Rpb24gZGVmaW5lKCkge30sXG4gKiBpdCB3aWxsIGNhdXNlIGVycm9yIGFmdGVyIGJ1aWxkZWQgYnkgd2VicGFja1xuICovXG5leHBvcnQgY29uc3QgZGVmaW5lRm4gPSBmdW5jdGlvbiAoYXBwLCBuYW1lLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCAke25hbWV9YClcblxuICAvLyBhZGFwdCBhcmdzOlxuICAvLyAxLiBuYW1lLCBkZXBzW10sIGZhY3RvcnkoKVxuICAvLyAyLiBuYW1lLCBmYWN0b3J5KClcbiAgLy8gMy4gbmFtZSwgZGVmaW5pdGlvbnt9XG4gIGxldCBmYWN0b3J5LCBkZWZpbml0aW9uXG4gIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICBkZWZpbml0aW9uID0gYXJnc1sxXVxuICB9XG4gIGVsc2Uge1xuICAgIGRlZmluaXRpb24gPSBhcmdzWzBdXG4gIH1cbiAgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZmFjdG9yeSA9IGRlZmluaXRpb25cbiAgICBkZWZpbml0aW9uID0gbnVsbFxuICB9XG5cbiAgLy8gcmVzb2x2ZSBkZWZpbml0aW9uIGZyb20gZmFjdG9yeVxuICBpZiAoZmFjdG9yeSkge1xuICAgIGNvbnN0IHIgPSAobmFtZSkgPT4ge1xuICAgICAgaWYgKGlzV2VleENvbXBvbmVudChuYW1lKSkge1xuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICAgIHJldHVybiByZXF1aXJlQ3VzdG9tQ29tcG9uZW50KGFwcCwgY2xlYW5OYW1lKVxuICAgICAgfVxuICAgICAgaWYgKGlzV2VleE1vZHVsZShuYW1lKSkge1xuICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICAgIHJldHVybiBhcHAucmVxdWlyZU1vZHVsZShjbGVhbk5hbWUpXG4gICAgICB9XG4gICAgICBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkgfHwgaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAgICAgcmV0dXJuIGNvbW1vbk1vZHVsZXNbY2xlYW5OYW1lXVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBtID0geyBleHBvcnRzOiB7fX1cbiAgICBmYWN0b3J5KHIsIG0uZXhwb3J0cywgbSlcbiAgICBkZWZpbml0aW9uID0gbS5leHBvcnRzXG4gIH1cblxuICAvLyBhcHBseSBkZWZpbml0aW9uXG4gIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICBjb25zdCBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgcmVnaXN0ZXJDdXN0b21Db21wb25lbnQoYXBwLCBjbGVhbk5hbWUsIGRlZmluaXRpb24pXG4gIH1cbiAgZWxzZSBpZiAoaXNXZWV4TW9kdWxlKG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICAgIGluaXRNb2R1bGVzKHsgW2NsZWFuTmFtZV06IGRlZmluaXRpb24gfSlcbiAgfVxuICBlbHNlIGlmIChpc05vcm1hbE1vZHVsZShuYW1lKSkge1xuICAgIGNvbnN0IGNsZWFuTmFtZSA9IHJlbW92ZUpTU3VyZml4KG5hbWUpXG4gICAgY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gZGVmaW5pdGlvblxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY29uc3QgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICBpZiAoZGVmaW5pdGlvbi50ZW1wbGF0ZSB8fFxuICAgICAgICBkZWZpbml0aW9uLnN0eWxlIHx8XG4gICAgICAgIGRlZmluaXRpb24ubWV0aG9kcykge1xuICAgICAgLy8gZG93bmdyYWRlIHRvIG9sZCBkZWZpbmUgbWV0aG9kIChkZWZpbmUoJ2NvbXBvbmVudE5hbWUnLCBmYWN0b3J5KSlcbiAgICAgIC8vIHRoZSBleHBvcnRzIGNvbnRhaW4gb25lIGtleSBvZiB0ZW1wbGF0ZSwgc3R5bGUgb3IgbWV0aG9kc1xuICAgICAgLy8gYnV0IGl0IGhhcyByaXNrISEhXG4gICAgICByZWdpc3RlckN1c3RvbUNvbXBvbmVudChhcHAsIGNsZWFuTmFtZSwgZGVmaW5pdGlvbilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb21tb25Nb2R1bGVzW2NsZWFuTmFtZV0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyIChhcHAsIHR5cGUsIG9wdGlvbnMpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBSZWdpc3RlciBpcyBkZXByZWNhdGVkLCBwbGVhc2UgaW5zdGFsbCBsYXN0ZXN0IHRyYW5zZm9ybWVyLicpXG4gIHJlZ2lzdGVyQ3VzdG9tQ29tcG9uZW50KGFwcCwgdHlwZSwgb3B0aW9ucylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2RlZmluZS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gcmVmcmVzaFxuICogLSBkZXN0cm95XG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cbmltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uLy4uL2NvbmZpZydcblxuLyoqXG4gKiBSZWZyZXNoIGFuIGFwcCB3aXRoIGRhdGEgdG8gaXRzIHJvb3QgY29tcG9uZW50IG9wdGlvbnMuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHBhcmFtICB7YW55fSAgICBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoIChhcHAsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gUmVmcmVzaCB3aXRoYCwgZGF0YSxcbiAgICAgICAgICAgIGBpbiBpbnN0YW5jZVske2FwcC5pZH1dYClcbiAgY29uc3Qgdm0gPSBhcHAudm1cbiAgaWYgKHZtICYmIGRhdGEpIHtcbiAgICBhcHAuZG9jLmNsb3NlKClcbiAgICBpZiAodHlwZW9mIHZtLnJlZnJlc2hEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2bS5yZWZyZXNoRGF0YShkYXRhKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4dGVuZCh2bSwgZGF0YSlcbiAgICB9XG4gICAgdXBkYXRlQWN0aW9ucyhhcHApXG4gICAgYXBwLmRvYy5saXN0ZW5lci5yZWZyZXNoRmluaXNoKClcbiAgICBhcHAuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZGF0YSBcIiR7ZGF0YX1cImApXG59XG5cbi8qKlxuICogRGVzdHJveSBhbiBhcHAuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSAoYXBwKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIERlc3RvcnkgYW4gaW5zdGFuY2UoJHthcHAuaWR9KWApXG5cbiAgYXBwLmlkID0gJydcbiAgYXBwLm9wdGlvbnMgPSBudWxsXG4gIGFwcC5ibG9ja3MgPSBudWxsXG4gIGFwcC52bSA9IG51bGxcbiAgYXBwLmRvYy5kZXN0cm95KClcbiAgYXBwLmRvYyA9IG51bGxcbiAgYXBwLmN1c3RvbUNvbXBvbmVudE1hcCA9IG51bGxcbiAgYXBwLmNhbGxiYWNrcyA9IG51bGxcbn1cblxuLyoqXG4gKiBHZXQgYSBKU09OIG9iamVjdCB0byBkZXNjcmliZSB0aGUgZG9jdW1lbnQgYm9keS5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290RWxlbWVudCAoYXBwKSB7XG4gIGNvbnN0IGRvYyA9IGFwcC5kb2MgfHwge31cbiAgY29uc3QgYm9keSA9IGRvYy5ib2R5IHx8IHt9XG4gIHJldHVybiBib2R5LnRvSlNPTiA/IGJvZHkudG9KU09OKCkgOiB7fVxufVxuXG4vKipcbiAqIEZpcmUgYW4gZXZlbnQgZnJvbSByZW5kZXJlci4gVGhlIGV2ZW50IGhhcyB0eXBlLCBhbiBldmVudCBvYmplY3QgYW5kIGFuXG4gKiBlbGVtZW50IHJlZi4gSWYgdGhlIGV2ZW50IGNvbWVzIHdpdGggc29tZSB2aXJ0dWFsLURPTSBjaGFuZ2VzLCBpdCBzaG91bGRcbiAqIGhhdmUgb25lIG1vcmUgcGFyYW1ldGVyIHRvIGRlc2NyaWJlIHRoZSBjaGFuZ2VzLlxuICogQHBhcmFtICB7b2JqZWN0fSBhcHBcbiAqIEBwYXJhbSAge3N0cmluZ30gcmVmXG4gKiBAcGFyYW0gIHt0eXBlfSAgIHR5cGVcbiAqIEBwYXJhbSAge29iamVjdH0gZVxuICogQHBhcmFtICB7b2JqZWN0fSBkb21DaGFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaXJlRXZlbnQgKGFwcCwgcmVmLCB0eXBlLCBlLCBkb21DaGFuZ2VzKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIEZpcmUgYSBcIiR7dHlwZX1cIiBldmVudCBvbiBhbiBlbGVtZW50KCR7cmVmfSkgaW4gaW5zdGFuY2UoJHthcHAuaWR9KWApXG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICByZWYuc29tZSgocmVmKSA9PiB7XG4gICAgICByZXR1cm4gYXBwLmZpcmVFdmVudChyZWYsIHR5cGUsIGUpICE9PSBmYWxzZVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZWwgPSBhcHAuZG9jLmdldFJlZihyZWYpXG4gIGlmIChlbCkge1xuICAgIGFwcC5kb2MuY2xvc2UoKVxuICAgIGNvbnN0IHJlc3VsdCA9IGFwcC5kb2MuZmlyZUV2ZW50KGVsLCB0eXBlLCBlLCBkb21DaGFuZ2VzKVxuICAgIHVwZGF0ZUFjdGlvbnMoYXBwKVxuICAgIGFwcC5kb2MubGlzdGVuZXIudXBkYXRlRmluaXNoKClcbiAgICBhcHAuZG9jLm9wZW4oKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGVsZW1lbnQgcmVmZXJlbmNlIFwiJHtyZWZ9XCJgKVxufVxuXG4vKipcbiAqIE1ha2UgYSBjYWxsYmFjayBmb3IgYSBjZXJ0YWluIGFwcC5cbiAqIEBwYXJhbSAge29iamVjdH0gICBhcHBcbiAqIEBwYXJhbSAge251bWJlcn0gICBjYWxsYmFja0lkXG4gKiBAcGFyYW0gIHthbnl9ICAgICAgZGF0YVxuICogQHBhcmFtICB7Ym9vbGVhbn0gIGlmS2VlcEFsaXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFjayAoYXBwLCBjYWxsYmFja0lkLCBkYXRhLCBpZktlZXBBbGl2ZSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBJbnZva2UgYSBjYWxsYmFjaygke2NhbGxiYWNrSWR9KSB3aXRoYCwgZGF0YSxcbiAgICAgICAgICAgIGBpbiBpbnN0YW5jZSgke2FwcC5pZH0pYClcbiAgY29uc3QgY2FsbGJhY2sgPSBhcHAuY2FsbGJhY2tzW2NhbGxiYWNrSWRdXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICBhcHAuZG9jLmNsb3NlKClcbiAgICBjYWxsYmFjayhkYXRhKVxuICAgIGlmICh0eXBlb2YgaWZLZWVwQWxpdmUgPT09ICd1bmRlZmluZWQnIHx8IGlmS2VlcEFsaXZlID09PSBmYWxzZSkge1xuICAgICAgYXBwLmNhbGxiYWNrc1tjYWxsYmFja0lkXSA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICB1cGRhdGVBY3Rpb25zKGFwcClcbiAgICBhcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZUZpbmlzaCgpXG4gICAgYXBwLmRvYy5vcGVuKClcbiAgICByZXR1cm5cbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGNhbGxiYWNrIGlkIFwiJHtjYWxsYmFja0lkfVwiYClcbn1cblxuLyoqXG4gKiBDb2xsZWN0IGFsbCB2aXJ0dWFsLURPTSBtdXRhdGlvbnMgdG9nZXRoZXIgYW5kIHNlbmQgdGhlbSB0byByZW5kZXJlci5cbiAqIEBwYXJhbSAge29iamVjdH0gYXBwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBY3Rpb25zIChhcHApIHtcbiAgYXBwLmRpZmZlci5mbHVzaCgpXG4gIGNvbnN0IHRhc2tzID0gW11cbiAgaWYgKGFwcC5kb2MgJiYgYXBwLmRvYy5saXN0ZW5lciAmJiBhcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZXMubGVuZ3RoKSB7XG4gICAgdGFza3MucHVzaCguLi5hcHAuZG9jLmxpc3RlbmVyLnVwZGF0ZXMpXG4gICAgYXBwLmRvYy5saXN0ZW5lci51cGRhdGVzID0gW11cbiAgfVxuICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxUYXNrcyhhcHAsIHRhc2tzKVxuICB9XG59XG5cbi8qKlxuICogQ2FsbCBhbGwgdGFza3MgZnJvbSBhbiBhcHAgdG8gcmVuZGVyZXIgKG5hdGl2ZSkuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwcFxuICogQHBhcmFtICB7YXJyYXl9ICB0YXNrc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsbFRhc2tzIChhcHAsIHRhc2tzKSB7XG4gIGlmICh0eXBvZih0YXNrcykgIT09ICdhcnJheScpIHtcbiAgICB0YXNrcyA9IFt0YXNrc11cbiAgfVxuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmFyZ3MgPSB0YXNrLmFyZ3MubWFwKGFyZyA9PiBub3JtYWxpemUoYXJnLCBhcHApKVxuICB9KVxuXG4gIHJldHVybiByZW5kZXJlci5zZW5kVGFza3MoYXBwLmlkLCB0YXNrcywgJy0xJylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSB2YWx1ZS4gU3BlY2lhbGx5LCBpZiB0aGUgdmFsdWUgaXMgYSBmdW5jdGlvbiwgdGhlbiBnZW5lcmF0ZSBhIGZ1bmN0aW9uIGlkXG4gKiBhbmQgc2F2ZSBpdCB0byBgYXBwLmNhbGxiYWNrc2AsIGF0IGxhc3QgcmV0dXJuIHRoZSBmdW5jdGlvbiBpZC5cbiAqIEBwYXJhbSAge2FueX0gICAgICAgIHZcbiAqIEBwYXJhbSAge29iamVjdH0gICAgIGFwcFxuICogQHJldHVybiB7cHJpbWl0aXZlfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemUgKHYsIGFwcCkge1xuICBjb25zdCB0eXBlID0gdHlwb2YodilcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgIGNhc2UgJ251bGwnOlxuICAgICAgcmV0dXJuICcnXG4gICAgY2FzZSAncmVnZXhwJzpcbiAgICAgIHJldHVybiB2LnRvU3RyaW5nKClcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiB2LnRvSVNPU3RyaW5nKClcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAnYXJyYXknOlxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAodiBpbnN0YW5jZW9mIHJlbmRlcmVyLkVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHYucmVmXG4gICAgICB9XG4gICAgICByZXR1cm4gdlxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIGFwcC5jYWxsYmFja3NbKythcHAudWlkXSA9IHZcbiAgICAgIHJldHVybiBhcHAudWlkLnRvU3RyaW5nKClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IEFwcCBjb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgRGlmZmVyIGZyb20gJy4vZGlmZmVyJ1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJy4uL2NvbmZpZydcblxuLyoqXG4gKiBBcHAgY29uc3RydWN0b3IgZm9yIFdlZXggZnJhbWV3b3JrLlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAgKGlkLCBvcHRpb25zKSB7XG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMudm0gPSBudWxsXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0ge31cbiAgdGhpcy5jYWxsYmFja3MgPSB7fVxuICB0aGlzLmRvYyA9IG5ldyByZW5kZXJlci5Eb2N1bWVudChcbiAgICBpZCxcbiAgICB0aGlzLm9wdGlvbnMuYnVuZGxlVXJsLFxuICAgIG51bGwsXG4gICAgcmVuZGVyZXIuTGlzdGVuZXJcbiAgKVxuICB0aGlzLmRpZmZlciA9IG5ldyBEaWZmZXIoaWQpXG4gIHRoaXMudWlkID0gMFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9pbnN0YW5jZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZlciB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubWFwID0gW11cbiAgICB0aGlzLmhvb2tzID0gW11cbiAgfVxuICBpc0VtcHR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAubGVuZ3RoID09PSAwXG4gIH1cbiAgYXBwZW5kICh0eXBlLCBkZXB0aCwgcmVmLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RpbWVyKSB7XG4gICAgICB0aGlzLmhhc1RpbWVyID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzVGltZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmZsdXNoKHRydWUpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFxuICAgIGlmICghbWFwW2RlcHRoXSkge1xuICAgICAgbWFwW2RlcHRoXSA9IHt9XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwID0gbWFwW2RlcHRoXVxuICAgIGlmICghZ3JvdXBbdHlwZV0pIHtcbiAgICAgIGdyb3VwW3R5cGVdID0ge31cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgaWYgKCFncm91cFt0eXBlXVtyZWZdKSB7XG4gICAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBbXVxuICAgICAgfVxuICAgICAgZ3JvdXBbdHlwZV1bcmVmXS5wdXNoKGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZ3JvdXBbdHlwZV1bcmVmXSA9IGhhbmRsZXJcbiAgICB9XG4gIH1cbiAgZmx1c2ggKGlzVGltZW91dCkge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwLnNsaWNlKClcbiAgICB0aGlzLm1hcC5sZW5ndGggPSAwXG4gICAgbWFwLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3JlcGVhdCcpXG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3Nob3duJylcbiAgICAgIGNhbGxUeXBlTGlzdChncm91cCwgJ2VsZW1lbnQnKVxuICAgIH0pXG5cbiAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3Muc2xpY2UoKVxuICAgIHRoaXMuaG9va3MubGVuZ3RoID0gMFxuICAgIGhvb2tzLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICBmbigpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuZmx1c2goKVxuICAgIH1cbiAgfVxuICB0aGVuIChmbikge1xuICAgIHRoaXMuaG9va3MucHVzaChmbilcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZU1hcCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgbWFwW3JlZl0oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTGlzdCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgY29uc3QgbGlzdCA9IG1hcFtyZWZdXG4gICAgbGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7IGhhbmRsZXIoKSB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL21hcC5qc1xuICoqLyIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHtcbiAgcmVmcmVzaCxcbiAgZGVzdHJveVxufSBmcm9tICcuLi9hcHAvY3RybCdcbmltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5cbi8qKlxuICogSW5pdCBjb25maWcgaW5mb3JtYXRpb25zIGZvciBXZWV4IGZyYW1ld29ya1xuICogQHBhcmFtICB7b2JqZWN0fSBjZmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQgKGNmZykge1xuICBjb25maWcuRG9jdW1lbnQgPSBjZmcuRG9jdW1lbnRcbiAgY29uZmlnLkVsZW1lbnQgPSBjZmcuRWxlbWVudFxuICBjb25maWcuQ29tbWVudCA9IGNmZy5Db21tZW50XG4gIGNvbmZpZy5zZW5kVGFza3MgPSBjZmcuc2VuZFRhc2tzXG4gIGNvbmZpZy5MaXN0ZW5lciA9IGNmZy5MaXN0ZW5lclxufVxuXG4vKipcbiAqIFJlZnJlc2ggYSBXZWV4IGluc3RhbmNlIHdpdGggZGF0YS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hJbnN0YW5jZSAoaWQsIGRhdGEpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgbGV0IHJlc3VsdFxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXN1bHQgPSByZWZyZXNoKGluc3RhbmNlLCBkYXRhKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBEZXN0cm95IGEgV2VleCBpbnN0YW5jZS5cbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lJbnN0YW5jZSAoaWQpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxuICBkZXN0cm95KGluc3RhbmNlKVxuICBkZWxldGUgaW5zdGFuY2VNYXBbaWRdXG4gIHJldHVybiBpbnN0YW5jZU1hcFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9saWZlLmpzXG4gKiovIiwiaW1wb3J0IFZtIGZyb20gJy4uL3ZtJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQge1xuICBpbml0TW9kdWxlcyxcbiAgaW5pdE1ldGhvZHNcbn0gZnJvbSAnLi4vYXBwL3JlZ2lzdGVyJ1xuXG5jb25zdCB7XG4gIG5hdGl2ZUNvbXBvbmVudE1hcFxufSA9IGNvbmZpZ1xuXG4vKipcbiAqIFJlZ2lzdGVyIHRoZSBuYW1lIG9mIGVhY2ggbmF0aXZlIGNvbXBvbmVudC5cbiAqIEBwYXJhbSAge2FycmF5fSBjb21wb25lbnRzIGFycmF5IG9mIG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50cyAoY29tcG9uZW50cykge1xuICBpZiAoQXJyYXkuaXNBcnJheShjb21wb25lbnRzKSkge1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiByZWdpc3RlciAobmFtZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lXSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbmFtZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYXRpdmVDb21wb25lbnRNYXBbbmFtZS50eXBlXSA9IG5hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIG5hbWUgYW5kIG1ldGhvZHMgb2YgZWFjaCBtb2R1bGUuXG4gKiBAcGFyYW0gIHtvYmplY3R9IG1vZHVsZXMgYSBvYmplY3Qgb2YgbW9kdWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGVzIChtb2R1bGVzKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ29iamVjdCcpIHtcbiAgICBpbml0TW9kdWxlcyhtb2R1bGVzKVxuICB9XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgdGhlIG5hbWUgYW5kIG1ldGhvZHMgb2YgZWFjaCBhcGkuXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwaXMgYSBvYmplY3Qgb2YgYXBpc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNZXRob2RzIChtZXRob2RzKSB7XG4gIGlmICh0eXBlb2YgbWV0aG9kcyA9PT0gJ29iamVjdCcpIHtcbiAgICBpbml0TWV0aG9kcyhWbSwgbWV0aG9kcylcbiAgfVxufVxuXG4vLyBAdG9kbzogSGFjayBmb3IgdGhpcyBmcmFtZXdvcmsgb25seS4gV2lsbCBiZSByZS1kZXNpZ25lZCBvciByZW1vdmVkIGxhdGVyLlxuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyA9IHJlZ2lzdGVyTWV0aG9kc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9yZWdpc3Rlci5qc1xuICoqLyIsImltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5pbXBvcnQge1xuICBmaXJlRXZlbnQsXG4gIGNhbGxiYWNrXG59IGZyb20gJy4uL2FwcC9jdHJsJ1xuXG5jb25zdCBqc0hhbmRsZXJzID0ge1xuICBmaXJlRXZlbnQ6IChpZCwgLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBmaXJlRXZlbnQoaW5zdGFuY2VNYXBbaWRdLCAuLi5hcmdzKVxuICB9LFxuICBjYWxsYmFjazogKGlkLCAuLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKGluc3RhbmNlTWFwW2lkXSwgLi4uYXJncylcbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdCBjYWxscyBmcm9tIG5hdGl2ZSAoZXZlbnQgb3IgY2FsbGJhY2spLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge2FycmF5fSB0YXNrcyBsaXN0IHdpdGggYG1ldGhvZGAgYW5kIGBhcmdzYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZVRhc2tzIChpZCwgdGFza3MpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpZF1cbiAgaWYgKGluc3RhbmNlICYmIEFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9IGpzSGFuZGxlcnNbdGFzay5tZXRob2RdXG4gICAgICBjb25zdCBhcmdzID0gWy4uLnRhc2suYXJnc11cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoaWQpXG4gICAgICAgIHJlc3VsdHMucHVzaChoYW5kbGVyKC4uLmFyZ3MpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cIiBvciB0YXNrc2ApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL2JyaWRnZS5qc1xuICoqLyIsImltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5pbXBvcnQge1xuICBnZXRSb290RWxlbWVudFxufSBmcm9tICcuLi9hcHAvY3RybCdcblxuLyoqXG4gKiBHZXQgYSB3aG9sZSBlbGVtZW50IHRyZWUgb2YgYW4gaW5zdGFuY2UgZm9yIGRlYnVnZ2luZy5cbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge29iamVjdH0gYSB2aXJ0dWFsIGRvbSB0cmVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290IChpZCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2lkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IGdldFJvb3RFbGVtZW50KGluc3RhbmNlKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbWlzYy5qc1xuICoqLyIsImxldCBmcmFtZXdvcmtzXG5cbmNvbnN0IHZlcnNpb25SZWdFeHAgPSAvXlxcL1xcLyAqKFxce1teXFx9XSpcXH0pICpcXHI/XFxuL1xuXG4vKipcbiAqIERldGVjdCBhIEpTIEJ1bmRsZSBjb2RlIGFuZCBtYWtlIHN1cmUgd2hpY2ggZnJhbWV3b3JrIGl0J3MgYmFzZWQgdG8uIEVhY2ggSlNcbiAqIEJ1bmRsZSBzaG91bGQgbWFrZSBzdXJlIHRoYXQgaXQgc3RhcnRzIHdpdGggYSBsaW5lIG9mIEpTT04gY29tbWVudCBhbmQgaXNcbiAqIG1vcmUgdGhhdCBvbmUgbGluZS5cbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBjaGVja1ZlcnNpb24gKGNvZGUpIHtcbiAgbGV0IGluZm9cbiAgY29uc3QgcmVzdWx0ID0gdmVyc2lvblJlZ0V4cC5leGVjKGNvZGUpXG4gIGlmIChyZXN1bHQpIHtcbiAgICB0cnkge1xuICAgICAgaW5mbyA9IEpTT04ucGFyc2UocmVzdWx0WzFdKVxuICAgIH1cbiAgICBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gaW5mb1xufVxuXG5jb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5cbi8qKlxuICogQ2hlY2sgd2hpY2ggZnJhbWV3b3JrIGEgY2VydGFpbiBKUyBCdW5kbGUgY29kZSBiYXNlZCB0by4gQW5kIGNyZWF0ZSBpbnN0YW5jZVxuICogYnkgdGhpcyBmcmFtZXdvcmsuXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZSAoaWQsIGNvZGUsIGNvbmZpZywgZGF0YSkge1xuICBsZXQgaW5mbyA9IGluc3RhbmNlTWFwW2lkXVxuICBpZiAoIWluZm8pIHtcbiAgICBpbmZvID0gY2hlY2tWZXJzaW9uKGNvZGUpIHx8IHt9XG4gICAgaWYgKCFmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgaW5mby5mcmFtZXdvcmsgPSAnV2VleCdcbiAgICB9XG4gICAgaW5zdGFuY2VNYXBbaWRdID0gaW5mb1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fVxuICAgIGNvbmZpZy5idW5kbGVWZXJzaW9uID0gaW5mby52ZXJzaW9uXG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gY3JlYXRlIGFuICR7aW5mby5mcmFtZXdvcmt9QCR7Y29uZmlnLmJ1bmRsZVZlcnNpb259IGluc3RhbmNlIGZyb20gJHtjb25maWcuYnVuZGxlVmVyc2lvbn1gKVxuICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXS5jcmVhdGVJbnN0YW5jZShpZCwgY29kZSwgY29uZmlnLCBkYXRhKVxuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbn1cblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgY3JlYXRlSW5zdGFuY2Vcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBtZXRob2RzIHdoaWNoIGluaXQgZWFjaCBmcmFtZXdvcmtzLlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAqL1xuZnVuY3Rpb24gZ2VuSW5pdCAobWV0aG9kTmFtZSkge1xuICBtZXRob2RzW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZnJhbWV3b3Jrcykge1xuICAgICAgY29uc3QgZnJhbWV3b3JrID0gZnJhbWV3b3Jrc1tuYW1lXVxuICAgICAgaWYgKGZyYW1ld29yayAmJiBmcmFtZXdvcmtbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgZnJhbWV3b3JrW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVnaXN0ZXIgbWV0aG9kcyB3aGljaCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKi9cbmZ1bmN0aW9uIGdlbkluc3RhbmNlIChtZXRob2ROYW1lKSB7XG4gIG1ldGhvZHNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNvbnN0IGlkID0gYXJnc1swXVxuICAgIGNvbnN0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgICBpZiAoaW5mbyAmJiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXSkge1xuICAgICAgcmV0dXJuIGZyYW1ld29ya3NbaW5mby5mcmFtZXdvcmtdW21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2lkfVwiYClcbiAgfVxufVxuXG4vKipcbiAqIEFkYXB0IHNvbWUgbGVnYWN5IG1ldGhvZChzKSB3aGljaCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBpbnN0YW5jZS4gVGhlc2VcbiAqIG1ldGhvZHMgc2hvdWxkIGJlIGRlcHJlY2F0ZWQgYW5kIHJlbW92ZWQgbGF0ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IG5hdGl2ZU1ldGhvZE5hbWVcbiAqL1xuZnVuY3Rpb24gYWRhcHRJbnN0YW5jZSAobWV0aG9kTmFtZSwgbmF0aXZlTWV0aG9kTmFtZSkge1xuICBtZXRob2RzW25hdGl2ZU1ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBpZCA9IGFyZ3NbMF1cbiAgICBjb25zdCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gICAgaWYgKGluZm8gJiYgZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCAoY29uZmlnKSB7XG4gIGZyYW1ld29ya3MgPSBjb25maWcuZnJhbWV3b3JrcyB8fCB7fVxuXG4gIC8vIEluaXQgZWFjaCBmcmFtZXdvcmsgYnkgYGluaXRgIG1ldGhvZCBhbmQgYGNvbmZpZ2Agd2hpY2ggY29udGFpbnMgdGhyZWVcbiAgLy8gdmlydHVhbC1ET00gQ2xhc3M6IGBEb2N1bWVudGAsIGBFbGVtZW50YCAmIGBDb21tZW50YCwgYW5kIGEgSlMgYnJpZGdlIG1ldGhvZDpcbiAgLy8gYHNlbmRUYXNrcyguLi5hcmdzKWAuXG4gIGZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gICAgY29uc3QgZnJhbWV3b3JrID0gZnJhbWV3b3Jrc1tuYW1lXVxuICAgIGZyYW1ld29yay5pbml0KGNvbmZpZylcbiAgfVxuXG4gIC8vIEB0b2RvOiBUaGUgbWV0aG9kIGByZWdpc3Rlck1ldGhvZHNgIHdpbGwgYmUgcmUtZGVzaWduZWQgb3IgcmVtb3ZlZCBsYXRlci5cbiAgOyBbJ3JlZ2lzdGVyQ29tcG9uZW50cycsICdyZWdpc3Rlck1vZHVsZXMnLCAncmVnaXN0ZXJNZXRob2RzJ10uZm9yRWFjaChnZW5Jbml0KVxuXG4gIDsgWydkZXN0cm95SW5zdGFuY2UnLCAncmVmcmVzaEluc3RhbmNlJywgJ3JlY2VpdmVUYXNrcycsICdnZXRSb290J10uZm9yRWFjaChnZW5JbnN0YW5jZSlcblxuICBhZGFwdEluc3RhbmNlKCdyZWNlaXZlVGFza3MnLCAnY2FsbEpTJylcblxuICByZXR1cm4gbWV0aG9kc1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9ydW50aW1lL2luaXQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYW1lXCI6IFwid2VleFwiLFxuXHRcInZlcnNpb25cIjogXCIwLjQuMFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiQSBmcmFtZXdvcmsgZm9yIGJ1aWxkaW5nIE1vYmlsZSBjcm9zcy1wbGF0Zm9ybSBVSVwiLFxuXHRcImxpY2Vuc2VcIjogXCJBcGFjaGUtMi4wXCIsXG5cdFwicmVwb3NpdG9yeVwiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0XCIsXG5cdFx0XCJ1cmxcIjogXCJnaXRAZ2l0aHViLmNvbTphbGliYWJhL3dlZXguZ2l0XCJcblx0fSxcblx0XCJob21lcGFnZVwiOiBcImh0dHA6Ly9hbGliYWJhLmdpdGh1Yi5pby93ZWV4L1wiLFxuXHRcImJ1Z3NcIjoge1xuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvd2VleC9pc3N1ZXNcIlxuXHR9LFxuXHRcInByaXZhdGVcIjogXCJ0cnVlXCIsXG5cdFwia2V5d29yZHNcIjogW1xuXHRcdFwid2VleFwiLFxuXHRcdFwiaHlicmlkXCIsXG5cdFx0XCJ3ZWJjb21wb25lbnRcIixcblx0XHRcImFwcGZyYW1ld29ya1wiLFxuXHRcdFwibXZ2bVwiLFxuXHRcdFwiamF2YXNjcmlwdFwiLFxuXHRcdFwid2Via2l0XCIsXG5cdFx0XCJ2OFwiLFxuXHRcdFwianNjb3JlXCIsXG5cdFx0XCJodG1sNVwiLFxuXHRcdFwiYW5kcm9pZFwiLFxuXHRcdFwiaW9zXCIsXG5cdFx0XCJ5dW5vc1wiXG5cdF0sXG5cdFwiZW5naW5lc1wiOiB7XG5cdFx0XCJub2RlXCI6IFwiPj00XCJcblx0fSxcblx0XCJzY3JpcHRzXCI6IHtcblx0XHRcInBvc3RpbnN0YWxsXCI6IFwiYmFzaCAuL2Jpbi9pbnN0YWxsLWhvb2tzLnNoXCIsXG5cdFx0XCJidWlsZDpjb25maWdcIjogXCJub2RlIGJ1aWxkL2NvbmZpZy5mcmFtZXdvcmtzLmpzXCIsXG5cdFx0XCJidWlsZDpicm93c2VyXCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmJyb3dzZXIuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDpuYXRpdmVcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2submF0aXZlLmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGQ6ZXhhbXBsZXNcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suZXhhbXBsZXMuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDp0ZXN0XCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLnRlc3QuY29uZmlnLmpzXCIsXG5cdFx0XCJkaXN0OmJyb3dzZXJcIjogXCJucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgYmFzaCAuL2Jpbi9kaXN0LWJyb3dzZXIuc2hcIixcblx0XHRcImRpc3RcIjogXCJucG0gcnVuIGRpc3Q6YnJvd3NlclwiLFxuXHRcdFwiZGV2OmJyb3dzZXJcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay5icm93c2VyLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2Om5hdGl2ZVwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLm5hdGl2ZS5jb25maWcuanNcIixcblx0XHRcImRldjpleGFtcGxlc1wiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmV4YW1wbGVzLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2OnRlc3RcIjogXCJ3ZWJwYWNrIC0td2F0Y2ggLS1jb25maWcgYnVpbGQvd2VicGFjay50ZXN0LmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGRcIjogXCJucG0gcnVuIGJ1aWxkOm5hdGl2ZSAmJiBucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgbnBtIHJ1biBidWlsZDpleGFtcGxlcyAmJiBucG0gcnVuIGJ1aWxkOnRlc3RcIixcblx0XHRcImxpbnRcIjogXCJlc2xpbnQgaHRtbDVcIixcblx0XHRcInRlc3Q6dW5pdFwiOiBcIm1vY2hhIC0tY29tcGlsZXJzIGpzOmJhYmVsLWNvcmUvcmVnaXN0ZXIgaHRtbDUvdGVzdC91bml0LyovKi5qcyBodG1sNS90ZXN0L3VuaXQvKi8qLyouanNcIixcblx0XHRcInRlc3Q6Y292ZXJcIjogXCJiYWJlbC1ub2RlIG5vZGVfbW9kdWxlcy9pc3BhcnRhL2Jpbi9pc3BhcnRhIGNvdmVyIC0tcmVwb3J0IHRleHQgbm9kZV9tb2R1bGVzL21vY2hhL2Jpbi9fbW9jaGEgLS0gLS1yZXBvcnRlciBkb3QgaHRtbDUvdGVzdC91bml0LyovKi5qcyBodG1sNS90ZXN0L3VuaXQvKi8qLyouanNcIixcblx0XHRcInRlc3Q6ZTJlXCI6IFwibnBtIHJ1biBidWlsZDpicm93c2VyICYmIG5vZGUgaHRtbDUvdGVzdC9lMmUvcnVubmVyLmpzXCIsXG5cdFx0XCJ0ZXN0XCI6IFwibnBtIHJ1biBidWlsZDpjb25maWcgJiYgbnBtIHJ1biBsaW50ICYmIG5wbSBydW4gdGVzdDpjb3ZlciAmJiBucG0gcnVuIHRlc3Q6ZTJlXCIsXG5cdFx0XCJzZXJ2ZVwiOiBcInNlcnZlIC4vIC1wIDEyNTgwXCIsXG5cdFx0XCJjbGVhbjpleGFtcGxlc1wiOiBcImVjaG8gXFxcIlxcXFwwMzNbMzY7MW1bQ2xlYW5dXFxcXDAzM1swbSBcXFxcMDMzWzMzbWV4YW1wbGVzXFxcXDAzM1swbVxcXCIgJiYgcm0gLXZyZiBleGFtcGxlcy9idWlsZC8qXCIsXG5cdFx0XCJjbGVhbjp0ZXN0XCI6IFwiZWNobyBcXFwiXFxcXDAzM1szNjsxbVtDbGVhbl1cXFxcMDMzWzBtIFxcXFwwMzNbMzNtdGVzdFxcXFwwMzNbMG1cXFwiICYmIHJtIC12cmYgdGVzdC9idWlsZC8qXCIsXG5cdFx0XCJjbGVhblwiOiBcIm5wbSBydW4gY2xlYW46ZXhhbXBsZXMgJiYgbnBtIHJ1biBjbGVhbjp0ZXN0XCIsXG5cdFx0XCJjb3B5OmpzXCI6IFwiY3AgLXZmIC4vZGlzdC9uYXRpdmUuanMgLi9hbmRyb2lkL3Nkay9hc3NldHMvbWFpbi5qc1wiLFxuXHRcdFwiY29weTpleGFtcGxlc1wiOiBcInJtIC1yZiAuL2FuZHJvaWQvcGxheWdyb3VuZC9hcHAvc3JjL21haW4vYXNzZXRzLyogJiYgY3AgLXZyZiAuL2V4YW1wbGVzL2J1aWxkLyogLi9hbmRyb2lkL3BsYXlncm91bmQvYXBwL3NyYy9tYWluL2Fzc2V0cy9cIixcblx0XHRcImNvcHk6c2RjYXJkXCI6IFwibnBtIHJ1biBjb3B5OmpzICYmIGFkYiBwdXNoIC4vYW5kcm9pZC9zZGsvYXNzZXRzL21haW4uanMgL3NkY2FyZC93ZWV4L1wiLFxuXHRcdFwiY29weVwiOiBcIm5wbSBydW4gY29weTpqcyAmJiBucG0gcnVuIGNvcHk6ZXhhbXBsZXNcIlxuXHR9LFxuXHRcInN1YnZlcnNpb25cIjoge1xuXHRcdFwiYnJvd3NlclwiOiBcIjAuMy4wXCIsXG5cdFx0XCJmcmFtZXdvcmtcIjogXCIwLjE1LjVcIixcblx0XHRcInRyYW5zZm9ybWVyXCI6IFwiPj0wLjEuNSA8MC40XCJcblx0fSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYW5pbWF0aW9uanNcIjogXCJeMC4xLjVcIixcblx0XHRcImNvcmUtanNcIjogXCJeMi40LjBcIixcblx0XHRcImN1YmljYmV6aWVyXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJlbnZkXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJodHRwdXJsXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJsYXp5aW1nXCI6IFwiXjAuMS4yXCIsXG5cdFx0XCJtb2RhbHNcIjogXCJeMC4xLjVcIixcblx0XHRcInNjcm9sbC10b1wiOiBcIjAuMC4yXCIsXG5cdFx0XCJzZW12ZXJcIjogXCJeNS4xLjBcIixcblx0XHRcIndlZXgtY29tcG9uZW50c1wiOiBcIl4wLjEuM1wiLFxuXHRcdFwid2VleC1yeC1mcmFtZXdvcmtcIjogXCJeMC4wLjlcIixcblx0XHRcIndlZXgteFwiOiBcIl4wLjEuMFwiXG5cdH0sXG5cdFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImJhYmVsLWNsaVwiOiBcIn42LjQuNVwiLFxuXHRcdFwiYmFiZWwtbG9hZGVyXCI6IFwiXjYuMi41XCIsXG5cdFx0XCJiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWVcIjogXCJeNi4xMi4wXCIsXG5cdFx0XCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6IFwiXjYuMTQuMFwiLFxuXHRcdFwiYmFiZWwtcHJlc2V0LXN0YWdlLTJcIjogXCJeNi4xMy4wXCIsXG5cdFx0XCJiYWJlbC1ydW50aW1lXCI6IFwiXjYuMTEuNlwiLFxuXHRcdFwiY2hhaVwiOiBcIl4zLjUuMFwiLFxuXHRcdFwiY2hyb21lZHJpdmVyXCI6IFwiXjIuMjEuMlwiLFxuXHRcdFwiY3Jvc3Mtc3Bhd25cIjogXCJeNC4wLjBcIixcblx0XHRcImNzcy1sb2FkZXJcIjogXCJeMC4yMy4xXCIsXG5cdFx0XCJlc2xpbnRcIjogXCJeMi4xMS4xXCIsXG5cdFx0XCJlc2xpbnQtcGx1Z2luLWh0bWxcIjogXCJeMS41LjJcIixcblx0XHRcImh0dHAtc2VydmVyXCI6IFwiXjAuOS4wXCIsXG5cdFx0XCJpc3BhcnRhXCI6IFwiXjQuMC4wXCIsXG5cdFx0XCJpc3RhbmJ1bFwiOiBcIl4wLjQuM1wiLFxuXHRcdFwianNvbi1sb2FkZXJcIjogXCJeMC41LjRcIixcblx0XHRcIm1vY2hhXCI6IFwiXjIuNS4zXCIsXG5cdFx0XCJuaWdodHdhdGNoXCI6IFwiXjAuOS40XCIsXG5cdFx0XCJwaGFudG9tanMtcHJlYnVpbHRcIjogXCJeMi4xLjdcIixcblx0XHRcInNlbGVuaXVtLXNlcnZlclwiOiBcIjIuNTMuMVwiLFxuXHRcdFwic2VydmVcIjogXCJeMS40LjBcIixcblx0XHRcInNpbm9uXCI6IFwiXjEuMTcuNFwiLFxuXHRcdFwic2lub24tY2hhaVwiOiBcIl4yLjguMFwiLFxuXHRcdFwic3R5bGUtbG9hZGVyXCI6IFwiXjAuMTMuMVwiLFxuXHRcdFwidWdsaWZ5LWpzXCI6IFwiXjIuNi40XCIsXG5cdFx0XCJ3ZWJwYWNrXCI6IFwiXjEuMTMuMVwiLFxuXHRcdFwid2VleC1sb2FkZXJcIjogXCJeMC4zLjAtYWxwaGFcIlxuXHR9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wYWNrYWdlLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAxMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBUaGUgYXBpIGZvciBpbnZva2luZyB3aXRoIFwiJFwiIHByZWZpeFxuICovXG5pbXBvcnQgeyBleHRlbmQsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuLyoqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBjb21tb25cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSAkdm0gaW5zdGVhZFxuICogZmluZCB0aGUgdm0gYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Vm19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkIChpZCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBWbSMkdm0gaW5zdGVhZCcpXG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8udm1cbiAgfVxufVxuXG4vKipcbiAqIGZpbmQgdGhlIGVsZW1lbnQgYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRlbCAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby5lbFxuICB9XG59XG5cbi8qKlxuICogZmluZCB0aGUgdm0gb2YgdGhlIGN1c3RvbSBjb21wb25lbnQgYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Vm19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkdm0gKGlkKSB7XG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8udm1cbiAgfVxufVxuXG4vKipcbiAqIEZpcmUgd2hlbiBkaWZmZXIgcmVuZGVyaW5nIGZpbmlzaGVkXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkcmVuZGVyVGhlbiAoZm4pIHtcbiAgY29uc3QgYXBwID0gdGhpcy5fYXBwXG4gIGNvbnN0IGRpZmZlciA9IGFwcC5kaWZmZXJcbiAgcmV0dXJuIGRpZmZlci50aGVuKCgpID0+IHtcbiAgICBmbigpXG4gIH0pXG59XG5cbi8qKlxuICogc2Nyb2xsIGFuIGVsZW1lbnQgc3BlY2lmaWVkIGJ5IGlkIGludG8gdmlldyxcbiAqIG1vcmVvdmVyIHNwZWNpZnkgYSBudW1iZXIgb2Ygb2Zmc2V0IG9wdGlvbmFsbHlcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge251bWJlcn0gb2Zmc2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2Nyb2xsVG8gKGlkLCBvZmZzZXQpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2Nyb2xsVG8gaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9kb21cXCcpJyArXG4gICAgICAgICAgJy5zY3JvbGxUbyhlbCwgb3B0aW9ucylcIiBpbnN0ZWFkJylcbiAgY29uc3QgZWwgPSB0aGlzLiRlbChpZClcbiAgaWYgKGVsKSB7XG4gICAgY29uc3QgZG9tID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2RvbScpXG4gICAgZG9tLnNjcm9sbFRvRWxlbWVudChlbC5yZWYsIHsgb2Zmc2V0OiBvZmZzZXQgfSlcbiAgfVxufVxuXG4vKipcbiAqIHBlcmZvcm0gdHJhbnNpdGlvbiBhbmltYXRpb24gb24gYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWRcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZFxuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnNcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zLnN0eWxlc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuZHVyYXRpb24obXMpXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgW29wdGlvbnMudGltaW5nRnVuY3Rpb25dXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgW29wdGlvbnMuZGVsYXk9MChtcyldXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR0cmFuc2l0aW9uIChpZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3QgZWwgPSB0aGlzLiRlbChpZClcbiAgaWYgKGVsICYmIG9wdGlvbnMgJiYgb3B0aW9ucy5zdHlsZXMpIHtcbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJylcbiAgICBhbmltYXRpb24udHJhbnNpdGlvbihlbC5yZWYsIG9wdGlvbnMsICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLl9zZXRTdHlsZShlbCwgb3B0aW9ucy5zdHlsZXMpXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayguLi5hcmdzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBnZXQgc29tZSBjb25maWdcbiAqIEByZXR1cm4ge29iamVjdH0gc29tZSBjb25maWcgZm9yIGFwcCBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJ1bmRsZVVybFxuICogQHByb3BlcnR5IHtib29sZWFufSBkZWJ1Z1xuICogQHByb3BlcnR5IHtvYmplY3R9IGVudlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi53ZWV4VmVyc2lvbihleC4gMS4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcE5hbWUoZXguIFRCL1RNKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5hcHBWZXJzaW9uKGV4LiA1LjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYucGxhdGZvcm0oZXguIGlPUy9BbmRyb2lkKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5vc1ZlcnNpb24oZXguIDcuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5kZXZpY2VNb2RlbCAqKm5hdGl2ZSBvbmx5KipcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbnYuW2RldmljZVdpZHRoPTc1MF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbnYuZGV2aWNlSGVpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZ2V0Q29uZmlnIChjYWxsYmFjaykge1xuICBjb25zdCBjb25maWcgPSBleHRlbmQoe1xuICAgIGVudjogZ2xvYmFsLldYRW52aXJvbm1lbnQgfHwge31cbiAgfSwgdGhpcy5fYXBwLm9wdGlvbnMpXG4gIGlmICh0eXBvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIHRoZSBjYWxsYmFjayBvZiBWbSMkZ2V0Q29uZmlnKGNhbGxiYWNrKSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICd0aGlzIGFwaSBub3cgY2FuIGRpcmVjdGx5IFJFVFVSTiBjb25maWcgaW5mby4nKVxuICAgIGNhbGxiYWNrKGNvbmZpZylcbiAgfVxuICByZXR1cm4gY29uZmlnXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHJlcXVlc3QgbmV0d29yayB2aWEgaHR0cCBwcm90b2NvbFxuICogQHBhcmFtICB7b2JqZWN0fSAgIHBhcmFtc1xuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2VuZEh0dHAgKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2VuZEh0dHAgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9zdHJlYW1cXCcpJyArXG4gICAgICAgICAgJy5zZW5kSHR0cChwYXJhbXMsIGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICBjb25zdCBzdHJlYW0gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnc3RyZWFtJylcbiAgc3RyZWFtLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIG9wZW4gYSB1cmxcbiAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb3BlblVSTCAodXJsKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJG9wZW5VUkwgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9ldmVudFxcJyknICtcbiAgICAgICAgICAnLm9wZW5VUkwodXJsKVwiIGluc3RlYWQnKVxuICBjb25zdCBldmVudCA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdldmVudCcpXG4gIGV2ZW50Lm9wZW5VUkwodXJsKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBzZXQgYSB0aXRsZSBmb3IgcGFnZVxuICogQHBhcmFtICB7c3RyaW5nfSB0aXRsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNldFRpdGxlICh0aXRsZSkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZXRUaXRsZSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3BhZ2VJbmZvXFwnKScgK1xuICAgICAgICAgICcuc2V0VGl0bGUodGl0bGUpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHBhZ2VJbmZvID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3BhZ2VJbmZvJylcbiAgcGFnZUluZm8uc2V0VGl0bGUodGl0bGUpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIFwicmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZHVsZU5hbWUnKSBpbnN0ZWFkXCJcbiAqIGludm9rZSBhIG5hdGl2ZSBtZXRob2QgYnkgc3BlY2lmaW5nIHRoZSBuYW1lIG9mIG1vZHVsZSBhbmQgbWV0aG9kXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1vZHVsZU5hbWVcbiAqIEBwYXJhbSAge3N0cmluZ30gbWV0aG9kTmFtZVxuICogQHBhcmFtICB7Li4uKn0gdGhlIHJlc3QgYXJndW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkY2FsbCAobW9kdWxlTmFtZSwgbWV0aG9kTmFtZSwgLi4uYXJncykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRjYWxsIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZVxcJylcIiBpbnN0ZWFkJylcbiAgY29uc3QgbW9kdWxlID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUobW9kdWxlTmFtZSlcbiAgaWYgKG1vZHVsZSAmJiBtb2R1bGVbbWV0aG9kTmFtZV0pIHtcbiAgICBtb2R1bGVbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwaS9tZXRob2RzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==