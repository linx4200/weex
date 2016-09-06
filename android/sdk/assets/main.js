(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.2 Build 20160901');
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
	
	var _runtime = __webpack_require__(74);
	
	var _runtime2 = _interopRequireDefault(_runtime);
	
	var _package = __webpack_require__(99);
	
	var _methods = __webpack_require__(100);
	
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.extend = extend;
	exports.def = def;
	exports.remove = remove;
	exports.hasOwn = hasOwn;
	exports.bind = bind;
	exports.toArray = toArray;
	exports.isObject = isObject;
	exports.isPlainObject = isPlainObject;
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(67);
	
	__webpack_require__(68);
	
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
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _global = global;
	var setTimeout = _global.setTimeout;
	var setTimeoutNative = _global.setTimeoutNative;
	
	// fix no setTimeout on Android V8
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fix Promise Problem on JSContext of iOS7~8
	// @see https://bugs.webkit.org/show_bug.cgi?id=135866
	// global.Promise = null
	__webpack_require__(4);
	__webpack_require__(24);
	__webpack_require__(50);
	__webpack_require__(54);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	
	var classof = __webpack_require__(5),
	    test = {};
	test[__webpack_require__(7)('toStringTag')] = 'z';
	if (test + '' != '[object z]') {
	  __webpack_require__(11)(Object.prototype, 'toString', function toString() {
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(6),
	    TAG = __webpack_require__(7)('toStringTag')
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
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(8)('wks'),
	    uid = __webpack_require__(10),
	    _Symbol = __webpack_require__(9).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    hide = __webpack_require__(12),
	    has = __webpack_require__(22),
	    SRC = __webpack_require__(10)('src'),
	    TO_STRING = 'toString',
	    $toString = Function[TO_STRING],
	    TPL = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(23).inspectSource = function (it) {
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(13),
	    createDesc = __webpack_require__(21);
	module.exports = __webpack_require__(17) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(14),
	    IE8_DOM_DEFINE = __webpack_require__(16),
	    toPrimitive = __webpack_require__(20),
	    dP = Object.defineProperty;
	
	exports.f = __webpack_require__(17) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(15);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(17) && !__webpack_require__(18)(function () {
	  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(18)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(15),
	    document = __webpack_require__(9).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
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
/* 21 */
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
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(25)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(28)(String, 'String', function (iterated) {
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(26),
	    defined = __webpack_require__(27);
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
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(29),
	    $export = __webpack_require__(30),
	    redefine = __webpack_require__(11),
	    hide = __webpack_require__(12),
	    has = __webpack_require__(22),
	    Iterators = __webpack_require__(33),
	    $iterCreate = __webpack_require__(34),
	    setToStringTag = __webpack_require__(47),
	    getPrototypeOf = __webpack_require__(48),
	    ITERATOR = __webpack_require__(7)('iterator'),
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
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = false;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    core = __webpack_require__(23),
	    hide = __webpack_require__(12),
	    redefine = __webpack_require__(11),
	    ctx = __webpack_require__(31),
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(32);
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
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(35),
	    descriptor = __webpack_require__(21),
	    setToStringTag = __webpack_require__(47),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(7)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(14),
	    dPs = __webpack_require__(36),
	    enumBugKeys = __webpack_require__(45),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(19)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(13),
	    anObject = __webpack_require__(14),
	    getKeys = __webpack_require__(37);
	
	module.exports = __webpack_require__(17) ? Object.defineProperties : function defineProperties(O, Properties) {
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(38),
	    enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(22),
	    toIObject = __webpack_require__(39),
	    arrayIndexOf = __webpack_require__(41)(false),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO');
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(40),
	    defined = __webpack_require__(27);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(6);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(39),
	    toLength = __webpack_require__(42),
	    toIndex = __webpack_require__(43);
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(26),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(26),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(8)('keys'),
	    uid = __webpack_require__(10);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(9).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(13).f,
	    has = __webpack_require__(22),
	    TAG = __webpack_require__(7)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(22),
	    toObject = __webpack_require__(49),
	    IE_PROTO = __webpack_require__(44)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $iterators = __webpack_require__(51),
	    redefine = __webpack_require__(11),
	    global = __webpack_require__(9),
	    hide = __webpack_require__(12),
	    Iterators = __webpack_require__(33),
	    wks = __webpack_require__(7),
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(52),
	    step = __webpack_require__(53),
	    Iterators = __webpack_require__(33),
	    toIObject = __webpack_require__(39);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(28)(Array, 'Array', function (iterated, kind) {
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(7)('unscopables'),
	    ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(12)(ArrayProto, UNSCOPABLES, {});
	module.exports = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(29),
	    global = __webpack_require__(9),
	    ctx = __webpack_require__(31),
	    classof = __webpack_require__(5),
	    $export = __webpack_require__(30),
	    isObject = __webpack_require__(15),
	    aFunction = __webpack_require__(32),
	    anInstance = __webpack_require__(55),
	    forOf = __webpack_require__(56),
	    speciesConstructor = __webpack_require__(60),
	    task = __webpack_require__(61).set,
	    microtask = __webpack_require__(63)(),
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
	        FakePromise = (promise.constructor = {})[__webpack_require__(7)('species')] = function (exec) {
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
	  Internal.prototype = __webpack_require__(64)($Promise.prototype, {
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
	__webpack_require__(47)($Promise, PROMISE);
	__webpack_require__(65)(PROMISE);
	Wrapper = __webpack_require__(23)[PROMISE];
	
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(66)(function (iter) {
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
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(31),
	    call = __webpack_require__(57),
	    isArrayIter = __webpack_require__(58),
	    anObject = __webpack_require__(14),
	    toLength = __webpack_require__(42),
	    getIterFn = __webpack_require__(59),
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(33),
	    ITERATOR = __webpack_require__(7)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(5),
	    ITERATOR = __webpack_require__(7)('iterator'),
	    Iterators = __webpack_require__(33);
	module.exports = __webpack_require__(23).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(14),
	    aFunction = __webpack_require__(32),
	    SPECIES = __webpack_require__(7)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(31),
	    invoke = __webpack_require__(62),
	    html = __webpack_require__(46),
	    cel = __webpack_require__(19),
	    global = __webpack_require__(9),
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
	  if (__webpack_require__(6)(process) == 'process') {
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
/* 62 */
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    macrotask = __webpack_require__(61).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(6)(process) == 'process';
	
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(11);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    redefine(target, key, src[key], safe);
	  }return target;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(9),
	    dP = __webpack_require__(13),
	    DESCRIPTORS = __webpack_require__(17),
	    SPECIES = __webpack_require__(7)('species');
	
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(7)('iterator'),
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
/* 67 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var _global = global;
	var console = _global.console;
	var nativeLog = _global.nativeLog;
	
	var LEVELS = ['error', 'warn', 'info', 'log', 'debug'];
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
	
	function checkLevel(type) {
	  var logLevel = global.WXEnvironment && global.WXEnvironment.logLevel || 'log';
	  return levelMap[logLevel] && levelMap[logLevel][type];
	}
	
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(69);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(70);
	module.exports = __webpack_require__(23).Object.assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(30);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(71) });

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	
	var getKeys = __webpack_require__(37),
	    gOPS = __webpack_require__(72),
	    pIE = __webpack_require__(73),
	    toObject = __webpack_require__(49),
	    IObject = __webpack_require__(40),
	    $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(18)(function () {
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
/* 72 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";
	
	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createInstance = createInstance;
	
	var _config = __webpack_require__(75);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _vdom = __webpack_require__(97);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var config = {
	  Document: _vdom.Document, Element: _vdom.Element, Comment: _vdom.Comment,
	  sendTasks: function sendTasks() {
	    var _global;
	
	    return (_global = global).callNative.apply(_global, arguments);
	  }
	};
	
	for (var name in _config2.default) {
	  var framework = _config2.default[name];
	  framework.init(config);
	}
	
	var versionRegExp = /^\/\/ *(\{[^\}]*\}) *\r?\n/;
	
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
	
	function createInstance(id, code, config, data) {
	  var info = instanceMap[id];
	  if (!info) {
	    info = checkVersion(code) || {};
	    if (!_config2.default[info.framework]) {
	      info.framework = 'Weex';
	    }
	    instanceMap[id] = info;
	    config = config || {};
	    config.bundleVersion = info.version;
	    console.debug('[JS Framework] create an ' + info.framework + '@' + config.bundleVersion + ' instance from ' + config.bundleVersion);
	    return _config2.default[info.framework].createInstance(id, code, config, data);
	  }
	  return new Error('invalid instance id "' + id + '"');
	}
	
	var methods = {
	  createInstance: createInstance
	};
	
	function genInit(methodName) {
	  methods[methodName] = function () {
	    for (var _name in _config2.default) {
	      var _framework = _config2.default[_name];
	      if (_framework && _framework[methodName]) {
	        _framework[methodName].apply(_framework, arguments);
	      }
	    }
	  };
	}
	
	['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit);
	
	function genInstance(methodName) {
	  methods[methodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && _config2.default[info.framework]) {
	      var _frameworks$info$fram;
	
	      return (_frameworks$info$fram = _config2.default[info.framework])[methodName].apply(_frameworks$info$fram, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);
	
	function adaptInstance(methodName, nativeMethodName) {
	  methods[nativeMethodName] = function () {
	    var id = arguments.length <= 0 ? undefined : arguments[0];
	    var info = instanceMap[id];
	    if (info && _config2.default[info.framework]) {
	      var _frameworks$info$fram2;
	
	      return (_frameworks$info$fram2 = _config2.default[info.framework])[methodName].apply(_frameworks$info$fram2, arguments);
	    }
	    return new Error('invalid instance id "' + id + '"');
	  };
	}
	
	adaptInstance('receiveTasks', 'callJS');
	
	exports.default = methods;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _default = __webpack_require__(76);
	
	var Weex = _interopRequireWildcard(_default);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	  Weex: Weex
	}; // built by npm run build:config

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                   * @fileOverview Main entry, instance manager
	                                                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                                                   * - createInstance(instanceId, code, options, data)
	                                                                                                                                                                                                                                                   * - refreshInstance(instanceId, data)
	                                                                                                                                                                                                                                                   * - destroyInstance(instanceId)
	                                                                                                                                                                                                                                                   * - registerComponents(components)
	                                                                                                                                                                                                                                                   * - registerModules(modules)
	                                                                                                                                                                                                                                                   * - getRoot(instanceId)
	                                                                                                                                                                                                                                                   * - instanceMap
	                                                                                                                                                                                                                                                   * - callJS(instanceId, tasks)
	                                                                                                                                                                                                                                                   *   - fireEvent(ref, type, data)
	                                                                                                                                                                                                                                                   *   - callback(funcId, data)
	                                                                                                                                                                                                                                                   */
	
	exports.init = init;
	exports.createInstance = createInstance;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.getRoot = getRoot;
	exports.receiveTasks = receiveTasks;
	
	var _config = __webpack_require__(77);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _app = __webpack_require__(78);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _vm = __webpack_require__(84);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
	var instanceMap = {};
	
	function init(cfg) {
	  _config2.default.Document = cfg.Document;
	  _config2.default.Element = cfg.Element;
	  _config2.default.Comment = cfg.Comment;
	  _config2.default.sendTasks = cfg.sendTasks;
	}
	
	/**
	 * create a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(instanceId, code, options, data) {
	  var instance = instanceMap[instanceId];
	  options = options || {};
	
	  var result = void 0;
	  if (!instance) {
	    instance = new _app2.default(instanceId, options);
	    instanceMap[instanceId] = instance;
	    result = instance.init(code, data);
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	
	  return result;
	}
	
	/**
	 * refresh a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {object} data
	 */
	function refreshInstance(instanceId, data) {
	  var instance = instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.refreshData(data);
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	  return result;
	}
	
	/**
	 * destroy a Weex instance
	 * @param  {string} instanceId
	 */
	function destroyInstance(instanceId) {
	  var instance = instanceMap[instanceId];
	  if (!instance) {
	    return new Error('invalid instance id "' + instanceId + '"');
	  }
	
	  instance.destroy();
	  delete instanceMap[instanceId];
	  return instanceMap;
	}
	
	/**
	 * register the name of each native component
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
	 * register the name and methods of each module
	 * @param  {object} modules a object of modules
	 */
	function registerModules(modules) {
	  if ((typeof modules === 'undefined' ? 'undefined' : _typeof(modules)) === 'object') {
	    _vm2.default.registerModules(modules);
	  }
	}
	
	/**
	 * register the name and methods of each api
	 * @param  {object} apis a object of apis
	 */
	function registerMethods(apis) {
	  if ((typeof apis === 'undefined' ? 'undefined' : _typeof(apis)) === 'object') {
	    _vm2.default.registerMethods(apis);
	  }
	}
	global.registerMethods = registerMethods;
	
	/**
	 * get a whole element tree of an instance
	 * for debugging
	 * @param  {string} instanceId
	 * @return {object} a virtual dom tree
	 */
	function getRoot(instanceId) {
	  var instance = instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.getRootElement();
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	  return result;
	}
	
	var jsHandlers = {
	  fireEvent: function fireEvent(instanceId, ref, type, data, domChanges) {
	    var instance = instanceMap[instanceId];
	    return instance.fireEvent(ref, type, data, domChanges);
	  },
	
	  callback: function callback(instanceId, funcId, data, ifLast) {
	    var instance = instanceMap[instanceId];
	    return instance.callback(funcId, data, ifLast);
	  }
	};
	
	/**
	 * accept calls from native (event or callback)
	 *
	 * @param  {string} instanceId
	 * @param  {array} tasks list with `method` and `args`
	 */
	function receiveTasks(instanceId, tasks) {
	  var instance = instanceMap[instanceId];
	  if (instance && Array.isArray(tasks)) {
	    var _ret = function () {
	      var results = [];
	      tasks.forEach(function (task) {
	        var handler = jsHandlers[task.method];
	        var args = [].concat(_toConsumableArray(task.args));
	        if (typeof handler === 'function') {
	          args.unshift(instanceId);
	          results.push(handler.apply(undefined, _toConsumableArray(args)));
	        }
	      });
	      return {
	        v: results
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	  return new Error('invalid instance id "' + instanceId + '" or tasks');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AppInstance;
	
	var _util = __webpack_require__(79);
	
	var _ctrl = __webpack_require__(80);
	
	var ctrl = _interopRequireWildcard(_ctrl);
	
	var _differ = __webpack_require__(96);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _config = __webpack_require__(77);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _register = __webpack_require__(94);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function AppInstance(instanceId, options) {
	  this.id = instanceId;
	  this.options = options || {};
	  this.vm = null;
	  this.customComponentMap = {};
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(instanceId, this.options.bundleUrl);
	  this.differ = new _differ2.default(instanceId);
	  this.uid = 0;
	} /**
	   * @fileOverview
	   * Weex instance constructor & definition
	   */
	
	function normalize(app, v) {
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
	
	AppInstance.prototype.callTasks = function (tasks) {
	  var _this = this;
	
	  if ((0, _util.typof)(tasks) !== 'array') {
	    tasks = [tasks];
	  }
	
	  tasks.forEach(function (task) {
	    task.args = task.args.map(function (arg) {
	      return normalize(_this, arg);
	    });
	  });
	
	  return _config2.default.sendTasks(this.id, tasks, '-1');
	};
	
	(0, _util.extend)(AppInstance.prototype, ctrl, {
	  registerComponent: _register.registerComponent,
	  requireComponent: _register.requireComponent,
	  requireModule: _register.requireModule
	});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _shared = __webpack_require__(1);
	
	Object.defineProperty(exports, 'extend', {
	  enumerable: true,
	  get: function get() {
	    return _shared.extend;
	  }
	});
	Object.defineProperty(exports, 'def', {
	  enumerable: true,
	  get: function get() {
	    return _shared.def;
	  }
	});
	Object.defineProperty(exports, 'remove', {
	  enumerable: true,
	  get: function get() {
	    return _shared.remove;
	  }
	});
	Object.defineProperty(exports, 'hasOwn', {
	  enumerable: true,
	  get: function get() {
	    return _shared.hasOwn;
	  }
	});
	Object.defineProperty(exports, 'bind', {
	  enumerable: true,
	  get: function get() {
	    return _shared.bind;
	  }
	});
	Object.defineProperty(exports, 'toArray', {
	  enumerable: true,
	  get: function get() {
	    return _shared.toArray;
	  }
	});
	Object.defineProperty(exports, 'isObject', {
	  enumerable: true,
	  get: function get() {
	    return _shared.isObject;
	  }
	});
	Object.defineProperty(exports, 'isPlainObject', {
	  enumerable: true,
	  get: function get() {
	    return _shared.isPlainObject;
	  }
	});
	exports.isReserved = isReserved;
	exports.cached = cached;
	exports.typof = typof;
	
	
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

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateActions = updateActions;
	exports.init = init;
	exports.destroy = destroy;
	exports.getRootElement = getRootElement;
	exports.fireEvent = fireEvent;
	exports.callback = callback;
	exports.refreshData = refreshData;
	
	var _util = __webpack_require__(79);
	
	var _bundle = __webpack_require__(81);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * - init bundle
	                                                                                                                                                                                                     * - fire event
	                                                                                                                                                                                                     * - callback
	                                                                                                                                                                                                     * - destroy
	                                                                                                                                                                                                     *
	                                                                                                                                                                                                     * corresponded with the API of instance manager (framework.js)
	                                                                                                                                                                                                     */
	
	function updateActions() {
	  this.differ.flush();
	  var tasks = [];
	  if (this.doc && this.doc.listener && this.doc.listener.updates.length) {
	    tasks.push.apply(tasks, _toConsumableArray(this.doc.listener.updates));
	    this.doc.listener.updates = [];
	  }
	  if (tasks.length) {
	    return this.callTasks(tasks);
	  }
	}
	
	function init(code, data) {
	  var _this = this;
	
	  console.debug('[JS Framework] Intialize an instance with:\n', data);
	
	  var result = void 0;
	  // @see: lib/app/bundle.js
	  var bundleDefine = (0, _util.bind)(_bundle.define, this);
	  var bundleBootstrap = function bundleBootstrap(name, config, _data) {
	    result = (0, _bundle.bootstrap)(_this, name, config, _data || data);
	    _this.updateActions();
	    _this.doc.listener.createFinish();
	    console.debug('[JS Framework] After intialized an instance(' + _this.id + ')');
	  };
	
	  // backward(register/render)
	  var bundleRegister = (0, _util.bind)(_bundle.register, this);
	  var bundleRender = function bundleRender(name, _data) {
	    result = (0, _bundle.bootstrap)(_this, name, {}, _data);
	  };
	
	  var bundleRequire = function bundleRequire(name) {
	    return function (_data) {
	      result = (0, _bundle.bootstrap)(_this, name, {}, _data);
	    };
	  };
	
	  var bundleDocument = this.doc;
	
	  var functionBody = void 0;
	  /* istanbul ignore if */
	  if (typeof code === 'function') {
	    // `function () {...}` -> `{...}`
	    // not very strict
	    functionBody = code.toString().substr(12);
	  } else if (code) {
	    functionBody = code.toString();
	  }
	
	  var _global = global;
	  var WXEnvironment = _global.WXEnvironment;
	
	  if (WXEnvironment && WXEnvironment.platform !== 'Web') {
	    (function () {
	      var timer = _this.requireModule('timer');
	      var timerAPIs = {
	        setTimeout: function setTimeout() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setTimeout(handler, args[1]);
	          return _this.uid.toString();
	        },
	        setInterval: function setInterval() {
	          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }
	
	          var handler = function handler() {
	            args[0].apply(args, _toConsumableArray(args.slice(2)));
	          };
	          timer.setInterval(handler, args[1]);
	          return _this.uid.toString();
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
	      'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', functionBody);
	
	      fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap, timerAPIs.setTimeout, timerAPIs.setInterval, timerAPIs.clearTimeout, timerAPIs.clearInterval);
	    })();
	  } else {
	    var _fn = new Function('define', 'require', 'document', 'bootstrap', 'register', 'render', '__weex_define__', // alias for define
	    '__weex_bootstrap__', // alias for bootstrap
	    functionBody);
	
	    _fn(bundleDefine, bundleRequire, bundleDocument, bundleBootstrap, bundleRegister, bundleRender, bundleDefine, bundleBootstrap);
	  }
	
	  return result;
	}
	
	function destroy() {
	  console.debug('[JS Framework] Destory an instance(' + this.id + ')');
	
	  this.id = '';
	  this.options = null;
	  this.blocks = null;
	  this.vm = null;
	  this.doc = null;
	  this.customComponentMap = null;
	  this.callbacks = null;
	}
	
	function getRootElement() {
	  var doc = this.doc || {};
	  var body = doc.body || {};
	  return body.toJSON ? body.toJSON() : {};
	}
	
	function fireEvent(ref, type, e, domChanges) {
	  var _this2 = this;
	
	  console.debug('[JS Framework] Fire a "' + type + '" event on an element(' + ref + ') in instance(' + this.id + ')');
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return _this2.fireEvent(ref, type, e) !== false;
	    });
	    return;
	  }
	
	  var el = this.doc.getRef(ref);
	
	  if (el) {
	    this.doc.close();
	    var result = this.doc.fireEvent(el, type, e, domChanges);
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    this.doc.open();
	    return result;
	  }
	
	  return new Error('invalid element reference "' + ref + '"');
	}
	
	function callback(callbackId, data, ifKeepAlive) {
	  console.debug('[JS Framework] Invoke a callback(' + callbackId + ') with', data, 'in instance(' + this.id + ')');
	
	  var callback = this.callbacks[callbackId];
	
	  if (typeof callback === 'function') {
	    this.doc.close();
	    callback(data); // data is already a object, @see: lib/runtime/index.js
	
	    if (typeof ifKeepAlive === 'undefined' || ifKeepAlive === false) {
	      this.callbacks[callbackId] = undefined;
	    }
	
	    this.updateActions();
	    this.doc.listener.updateFinish();
	    this.doc.open();
	    return;
	  }
	
	  return new Error('invalid callback id "' + callbackId + '"');
	}
	
	function refreshData(data) {
	  console.debug('[JS Framework] Refresh with', data, 'in instance[' + this.id + ']');
	
	  var vm = this.vm;
	
	  if (vm && data) {
	    this.doc.close();
	    if (typeof vm.refreshData === 'function') {
	      vm.refreshData(data);
	    } else {
	      (0, _util.extend)(vm, data);
	    }
	    this.updateActions();
	    this.doc.listener.refreshFinish();
	    this.doc.open();
	    return;
	  }
	
	  return new Error('invalid data "' + data + '"');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = undefined;
	exports.clearCommonModules = clearCommonModules;
	exports.bootstrap = bootstrap;
	exports.register = register;
	
	var _semver = __webpack_require__(82);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(79);
	
	var _vm = __webpack_require__(84);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(95);
	
	var downgrade = _interopRequireWildcard(_downgrade);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
	                                                                                                                                                                                                                   * @fileOverview
	                                                                                                                                                                                                                   * api that invoked by js bundle code
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * - define(name, factory): define a new composed component type
	                                                                                                                                                                                                                   * - bootstrap(type, config, data): require a certain type &
	                                                                                                                                                                                                                   *         render with (optional) data
	                                                                                                                                                                                                                   *
	                                                                                                                                                                                                                   * deprecated:
	                                                                                                                                                                                                                   * - register(type, options): register a new composed component type
	                                                                                                                                                                                                                   * - render(type, data): render by a certain type with (optional) data
	                                                                                                                                                                                                                   * - require(type)(data): require a type then render with data
	                                                                                                                                                                                                                   */
	
	var WEEX_COMPONENT_REG = /^@weex-component\//;
	var WEEX_MODULE_REG = /^@weex-module\//;
	var NORMAL_MODULE_REG = /^\.{1,2}\//;
	var JS_SURFIX_REG = /\.js$/;
	
	var isWeexComponent = function isWeexComponent(name) {
	  return !!name.match(WEEX_COMPONENT_REG);
	};
	var isWeexModule = function isWeexModule(name) {
	  return !!name.match(WEEX_MODULE_REG);
	};
	var isNormalModule = function isNormalModule(name) {
	  return !!name.match(NORMAL_MODULE_REG);
	};
	var isNpmModule = function isNpmModule(name) {
	  return !isWeexComponent(name) && !isWeexModule(name) && !isNormalModule(name);
	};
	
	function removeWeexPrefix(str) {
	  return str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
	}
	
	function removeJSSurfix(str) {
	  return str.replace(JS_SURFIX_REG, '');
	}
	
	var commonModules = {};
	
	function clearCommonModules() {
	  commonModules = {};
	}
	
	// define(name, factory) for primary usage
	// or
	// define(name, deps, factory) for compatibility
	// Notice: DO NOT use function define() {},
	// it will cause error after builded by webpack
	var define = exports.define = function define(name, deps, factory) {
	  var _this = this;
	
	  console.debug('[JS Framework] define a component ' + name);
	
	  if ((0, _util.typof)(deps) === 'function') {
	    factory = deps;
	    deps = [];
	  }
	
	  var _require = function _require(name) {
	    var cleanName = void 0;
	
	    if (isWeexComponent(name)) {
	      cleanName = removeWeexPrefix(name);
	      return _this.requireComponent(cleanName);
	    }
	    if (isWeexModule(name)) {
	      cleanName = removeWeexPrefix(name);
	      return _this.requireModule(cleanName);
	    }
	    if (isNormalModule(name)) {
	      cleanName = removeJSSurfix(name);
	      return commonModules[name];
	    }
	    if (isNpmModule(name)) {
	      cleanName = removeJSSurfix(name);
	      return commonModules[name];
	    }
	  };
	  var _module = { exports: {} };
	
	  var cleanName = void 0;
	  if (isWeexComponent(name)) {
	    cleanName = removeWeexPrefix(name);
	
	    factory(_require, _module.exports, _module);
	
	    this.registerComponent(cleanName, _module.exports);
	  } else if (isWeexModule(name)) {
	    cleanName = removeWeexPrefix(name);
	
	    factory(_require, _module.exports, _module);
	
	    _vm2.default.registerModules(_defineProperty({}, cleanName, _module.exports));
	  } else if (isNormalModule(name)) {
	    cleanName = removeJSSurfix(name);
	
	    factory(_require, _module.exports, _module);
	
	    commonModules[cleanName] = _module.exports;
	  } else if (isNpmModule(name)) {
	    cleanName = removeJSSurfix(name);
	
	    factory(_require, _module.exports, _module);
	
	    var exports = _module.exports;
	    if (exports.template || exports.style || exports.methods) {
	      // downgrade to old define method (define('componentName', factory))
	      // the exports contain one key of template, style or methods
	      // but it has risk!!!
	      this.registerComponent(cleanName, exports);
	    } else {
	      commonModules[cleanName] = _module.exports;
	    }
	  }
	};
	
	function bootstrap(app, name, config, data) {
	  console.debug('[JS Framework] bootstrap for ' + name);
	
	  var cleanName = void 0;
	
	  if (isWeexComponent(name)) {
	    cleanName = removeWeexPrefix(name);
	  } else if (isNpmModule(name)) {
	    cleanName = removeJSSurfix(name);
	    // check if define by old 'define' method
	    /* istanbul ignore if */
	    if (!app.customComponentMap[cleanName]) {
	      return new Error('It\'s not a component: ' + name);
	    }
	  } else {
	    return new Error('Wrong component name: ' + name);
	  }
	
	  config = (0, _util.isPlainObject)(config) ? config : {};
	
	  if (typeof config.transformerVersion === 'string' && typeof global.transformerVersion === 'string' && !_semver2.default.satisfies(config.transformerVersion, global.transformerVersion)) {
	    return new Error('JS Bundle version: ' + config.transformerVersion + ' ' + ('not compatible with ' + global.transformerVersion));
	  }
	
	  var _checkDowngrade = downgrade.check(config.downgrade);
	  /* istanbul ignore if */
	  if (_checkDowngrade.isDowngrade) {
	    app.callTasks([{
	      module: 'instanceWrap',
	      method: 'error',
	      args: [_checkDowngrade.errorType, _checkDowngrade.code, _checkDowngrade.errorMessage]
	    }]);
	    return new Error('Downgrade[' + _checkDowngrade.code + ']: ' + _checkDowngrade.errorMessage);
	  }
	
	  app.vm = new _vm2.default(cleanName, null, { _app: app }, null, data);
	}
	
	/**
	 * @deprecated
	 */
	function register(type, options) {
	  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
	  this.registerComponent(type, options);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 82 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)))

/***/ },
/* 83 */
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
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
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
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _util = __webpack_require__(79);
	
	var _state = __webpack_require__(85);
	
	var _compiler = __webpack_require__(90);
	
	var _events = __webpack_require__(93);
	
	var _register = __webpack_require__(94);
	
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
	function Vm(type, options, parentVm, parentEl, mergedData, externalEvents) {
	  this._parent = parentVm._realParent ? parentVm._realParent : parentVm;
	  this._app = parentVm._app;
	  parentVm._childrenVms && parentVm._childrenVms.push(this);
	
	  if (!options) {
	    options = this._app.customComponentMap[type] || {};
	  }
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
	
	  // if no parentElement then specify the documentElement
	  this._parentEl = parentEl || this._app.doc.documentElement;
	  (0, _compiler.build)(this);
	} /**
	   * @fileOverview
	   * ViewModel Constructor & definition
	   */
	
	(0, _events.mixinEvents)(Vm.prototype);
	
	(0, _util.extend)(Vm, {
	  registerModules: _register.registerModules,
	  registerMethods: _register.registerMethods
	});

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initState = initState;
	exports.initData = initData;
	exports.initComputed = initComputed;
	exports.initMethods = initMethods;
	
	var _watcher = __webpack_require__(86);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(87);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(88);
	
	var _util = __webpack_require__(79);
	
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;
	
	var _dep = __webpack_require__(87);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _util = __webpack_require__(79);
	
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
	  this.depIds = new _util._Set();
	  this.newDepIds = new _util._Set();
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
	
	var seenObjects = new _util._Set();
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	
	var _util = __webpack_require__(79);
	
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
/* 88 */
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
	
	var _dep = __webpack_require__(87);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(89);
	
	var _util = __webpack_require__(79);
	
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
	      vm.$forceUpdate();
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
	      obj.$forceUpdate();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      unproxy(vm, key);
	      vm.$forceUpdate();
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _util = __webpack_require__(79);
	
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.build = build;
	
	var _util = __webpack_require__(79);
	
	var _state = __webpack_require__(85);
	
	var _directive = __webpack_require__(91);
	
	var _domHelper = __webpack_require__(92);
	
	/**
	 * build(externalDirs)
	 *   createVm()
	 *   merge(externalDirs, dirs)
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
	 *
	 * required:
	 * index.js: Vm
	 * dom-helper.js: createElement, createBlock
	 * dom-helper.js: attachTarget, moveTarget, removeTarget
	 * directive.js: bindElement, bindSubVm, setId, watch
	 * events.js: $on
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
	    compileRepeat(vm, target, dest);
	    return;
	  }
	  if (targetNeedCheckShown(target, meta)) {
	    console.debug('[JS Framework] compile "if" logic by', target);
	    compileShown(vm, target, dest, meta);
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
/* 91 */
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
	
	var _util = __webpack_require__(79);
	
	var _watcher = __webpack_require__(86);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(77);
	
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
	
	function bindSubVmAfterInitialized(vm, subVm, template) {
	  mergeClassStyle(template.classList, vm, subVm);
	  mergeStyle(template.style, vm, subVm);
	}
	
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
/* 92 */
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
/* 93 */
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
	function Evt(type, detail) {
	  if (detail instanceof Evt) {
	    return detail;
	  }
	
	  this.timestamp = Date.now();
	  this.detail = detail;
	  this.type = type;
	
	  var shouldStop = false;
	  this.stop = function () {
	    shouldStop = true;
	  };
	  this.hasStopped = function () {
	    return shouldStop;
	  };
	}
	
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
	
	function $dispatch(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._parent && this._parent.$dispatch) {
	    this._parent.$dispatch(type, evt);
	  }
	}
	
	function $broadcast(type, detail) {
	  var evt = new Evt(type, detail);
	  this.$emit(type, evt);
	
	  if (!evt.hasStopped() && this._childrenVms) {
	    this._childrenVms.forEach(function (subVm) {
	      subVm.$broadcast(type, evt);
	    });
	  }
	}
	
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
	
	function mixinEvents(vm) {
	  vm.$emit = $emit;
	  vm.$dispatch = $dispatch;
	  vm.$broadcast = $broadcast;
	  vm.$on = $on;
	  vm.$off = $off;
	}

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearModules = clearModules;
	exports.getModule = getModule;
	exports.requireModule = requireModule;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	exports.requireComponent = requireComponent;
	exports.registerComponent = registerComponent;
	var nativeModules = {};
	
	function assignModules(modules, ifReplace) {
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
	
	function assignApis(Ctor, apis) {
	  var p = Ctor.prototype;
	
	  for (var apiName in apis) {
	    if (!p.hasOwnProperty(apiName)) {
	      p[apiName] = apis[apiName];
	    }
	  }
	}
	
	function clearModules() {
	  nativeModules = {};
	}
	
	function getModule(moduleName) {
	  return nativeModules[moduleName];
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function requireModule(moduleName) {
	  var _this = this;
	
	  var methods = nativeModules[moduleName];
	  var target = {};
	
	  var _loop2 = function _loop2(methodName) {
	    target[methodName] = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _this.callTasks({
	        module: moduleName,
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
	 * @context Vm
	 */
	function registerModules(modules, ifReplace) {
	  assignModules(modules, ifReplace);
	}
	
	/**
	 * @context Vm
	 */
	function registerMethods(apis) {
	  assignApis(this, apis);
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function requireComponent(name) {
	  var customComponentMap = this.customComponentMap;
	
	  return customComponentMap[name];
	}
	
	/**
	 * @context a instance of AppInstance
	 */
	function registerComponent(name, def) {
	  var customComponentMap = this.customComponentMap;
	
	
	  if (customComponentMap[name]) {
	    console.error('[JS Framework] define a component(' + name + ') that already exists');
	    return;
	  }
	
	  customComponentMap[name] = def;
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(82);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(79);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * [normalizeVersion description]
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
/* 96 */
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
/* 97 */
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
	
	var _listener4 = __webpack_require__(98);
	
	var _listener5 = _interopRequireDefault(_listener4);
	
	var _shared = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @fileOverview
	 * A simple virtual dom implementation
	 */
	
	var DEFAULT_TAG_NAME = 'div';
	
	var instanceMap = exports.instanceMap = {};
	var nextNodeRef = 1;
	
	function Document(id, url, handler) {
	  id = id ? id.toString() : '';
	  this.id = id;
	  this.URL = url;
	
	  instanceMap[id] = this;
	  this.nodeMap = {};
	  this.listener = new _listener5.default(id, handler || genCallTasks(id));
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
	  if (this.attr[key] === value) {
	    return;
	  }
	  this.attr[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setAttr(this.ref, key, value);
	  }
	};
	
	Element.prototype.setStyle = function (key, value, silent) {
	  if (this.style[key] === value) {
	    return;
	  }
	  this.style[key] = value;
	  if (!silent && this.docId) {
	    var listener = instanceMap[this.docId].listener;
	    listener.setStyle(this.ref, key, value);
	  }
	};
	
	Element.prototype.setClassStyle = function (classStyle) {
	  this.classStyle = classStyle;
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
	  return (0, _shared.extend)({}, this.classStyle, this.style);
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
/* 98 */
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
/* 99 */
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
			"copy": "npm run copy:js && npm run copy:examples"
		},
		"subversion": {
			"browser": "0.3.0",
			"framework": "0.15.2",
			"transformer": ">=0.1.5 <0.4"
		},
		"dependencies": {
			"animationjs": "^0.1.5",
			"carrousel": "^0.1.11",
			"core-js": "^2.4.0",
			"cubicbezier": "^0.1.1",
			"envd": "^0.1.1",
			"fixedsticky": "^0.1.0",
			"httpurl": "^0.1.1",
			"kountdown": "^0.1.2",
			"lazyimg": "^0.1.2",
			"lie": "^3.0.4",
			"modals": "^0.1.5",
			"scroll-to": "0.0.2",
			"semver": "^5.1.0",
			"transitionize": "0.0.3",
			"weex-components": "^0.1.3"
		},
		"devDependencies": {
			"babel-cli": "~6.4.5",
			"babel-loader": "^6.2.4",
			"babel-preset-es2015": "^6.9.0",
			"chai": "^3.5.0",
			"chromedriver": "^2.21.2",
			"cross-spawn": "^4.0.0",
			"css-loader": "^0.23.1",
			"eslint": "^2.11.1",
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
			"weex-loader": "^0.2.0"
		}
	};

/***/ },
/* 100 */
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
	
	var _util = __webpack_require__(79);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2IzNTc0NGQzNmQxMzMzZDVkNTMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvc2V0VGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvb2JqZWN0QXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3J1bnRpbWUvY29uZmlnLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL34vc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvZGVwLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9jb21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvZG93bmdyYWRlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3Zkb20vbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBpL21ldGhvZHMuanMiXSwibmFtZXMiOlsibWV0aG9kcyIsIm5hdGl2ZSIsInRyYW5zZm9ybWVyIiwibWV0aG9kTmFtZSIsImdsb2JhbCIsInJldCIsIkVycm9yIiwiY29uc29sZSIsImVycm9yIiwidG9TdHJpbmciLCJmcmFtZXdvcmtWZXJzaW9uIiwidHJhbnNmb3JtZXJWZXJzaW9uIiwicmVnaXN0ZXJNZXRob2RzIiwiZXh0ZW5kIiwiZGVmIiwicmVtb3ZlIiwiaGFzT3duIiwiYmluZCIsInRvQXJyYXkiLCJpc09iamVjdCIsImlzUGxhaW5PYmplY3QiLCJ0YXJnZXQiLCJzcmMiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdCIsInNoaWZ0Iiwia2V5IiwibGVuZ3RoIiwib2JqIiwidmFsIiwiZW51bWVyYWJsZSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImFyciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsImNhbGwiLCJmbiIsImN0eCIsImEiLCJsIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJsaXN0Iiwic3RhcnQiLCJpIiwiQXJyYXkiLCJPQkpFQ1RfU1RSSU5HIiwic2V0VGltZW91dCIsInNldFRpbWVvdXROYXRpdmUiLCJ0aW1lb3V0TWFwIiwidGltZW91dElkIiwiY2IiLCJ0aW1lIiwic2V0VGltZW91dENhbGxiYWNrIiwiaWQiLCJyZXF1aXJlIiwiY2xhc3NvZiIsInRlc3QiLCJjb2YiLCJUQUciLCJBUkciLCJ0cnlHZXQiLCJpdCIsImUiLCJtb2R1bGUiLCJleHBvcnRzIiwiTyIsIlQiLCJCIiwidW5kZWZpbmVkIiwiY2FsbGVlIiwic2xpY2UiLCJzdG9yZSIsInVpZCIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsIm5hbWUiLCJTSEFSRUQiLCJ3aW5kb3ciLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJoaWRlIiwiaGFzIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwic3BsaXQiLCJpbnNwZWN0U291cmNlIiwic2FmZSIsImlzRnVuY3Rpb24iLCJqb2luIiwiU3RyaW5nIiwiZFAiLCJjcmVhdGVEZXNjIiwib2JqZWN0IiwiZiIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIlAiLCJBdHRyaWJ1dGVzIiwiVHlwZUVycm9yIiwiZ2V0IiwiZXhlYyIsImRvY3VtZW50IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiUyIsInZhbHVlT2YiLCJiaXRtYXAiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIiRhdCIsIml0ZXJhdGVkIiwiX3QiLCJfaSIsInBvaW50IiwiZG9uZSIsInRvSW50ZWdlciIsImRlZmluZWQiLCJ0aGF0IiwicG9zIiwicyIsImIiLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwiY2VpbCIsImZsb29yIiwiaXNOYU4iLCJMSUJSQVJZIiwiJGV4cG9ydCIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJGIiwiUFJPVE9UWVBFIiwidHlwZSIsInNvdXJjZSIsIklTX0ZPUkNFRCIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJleHBQcm90byIsIm93biIsIm91dCIsImV4cCIsIlUiLCJXIiwiUiIsImFGdW5jdGlvbiIsImMiLCJjcmVhdGUiLCJkZXNjcmlwdG9yIiwiZFBzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIkVtcHR5IiwiY3JlYXRlRGljdCIsImlmcmFtZSIsImx0IiwiZ3QiLCJpZnJhbWVEb2N1bWVudCIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsInJlc3VsdCIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiJGtleXMiLCJ0b0lPYmplY3QiLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsInB1c2giLCJJT2JqZWN0IiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b0xlbmd0aCIsInRvSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJtaW4iLCJtYXgiLCJzaGFyZWQiLCJkb2N1bWVudEVsZW1lbnQiLCJ0YWciLCJzdGF0IiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImNvbnN0cnVjdG9yIiwiJGl0ZXJhdG9ycyIsIndrcyIsIlRPX1NUUklOR19UQUciLCJBcnJheVZhbHVlcyIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbiIsImFkZFRvVW5zY29wYWJsZXMiLCJzdGVwIiwiX2siLCJBcmd1bWVudHMiLCJVTlNDT1BBQkxFUyIsIkFycmF5UHJvdG8iLCJhbkluc3RhbmNlIiwiZm9yT2YiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJ0YXNrIiwic2V0IiwibWljcm90YXNrIiwiUFJPTUlTRSIsInByb2Nlc3MiLCIkUHJvbWlzZSIsImlzTm9kZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJXcmFwcGVyIiwiVVNFX05BVElWRSIsInByb21pc2UiLCJyZXNvbHZlIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJ0aGVuIiwic2FtZUNvbnN0cnVjdG9yIiwiaXNUaGVuYWJsZSIsIm5ld1Byb21pc2VDYXBhYmlsaXR5IiwiQyIsIlByb21pc2VDYXBhYmlsaXR5IiwicmVqZWN0IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCJwZXJmb3JtIiwibm90aWZ5IiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJydW4iLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiZG9tYWluIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsImVudGVyIiwiZXhpdCIsIm9uVW5oYW5kbGVkIiwiYWJydXB0IiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiUHJvbWlzZSIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiciIsImNhcGFiaWxpdHkiLCJ4IiwiaXRlciIsImFsbCIsIml0ZXJhYmxlIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCJmb3JiaWRkZW5GaWVsZCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyRm4iLCJpdGVyYXRvciIsImdldEl0ZXJhdG9yTWV0aG9kIiwiU1BFQ0lFUyIsIkQiLCJpbnZva2UiLCJodG1sIiwiY2VsIiwic2V0VGFzayIsInNldEltbWVkaWF0ZSIsImNsZWFyVGFzayIsImNsZWFySW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJjb3VudGVyIiwicXVldWUiLCJPTlJFQURZU1RBVEVDSEFOR0UiLCJkZWZlciIsImNoYW5uZWwiLCJwb3J0IiwibGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJhcmdzIiwibmV4dFRpY2siLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiaW1wb3J0U2NyaXB0cyIsInJlbW92ZUNoaWxkIiwiY2xlYXIiLCJ1biIsIm1hY3JvdGFzayIsIk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJoZWFkIiwibGFzdCIsImZsdXNoIiwicGFyZW50IiwidG9nZ2xlIiwibm9kZSIsImNyZWF0ZVRleHROb2RlIiwib2JzZXJ2ZSIsImNoYXJhY3RlckRhdGEiLCJERVNDUklQVE9SUyIsIktFWSIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwibmF0aXZlTG9nIiwiTEVWRUxTIiwibGV2ZWxNYXAiLCJnZW5lcmF0ZUxldmVsTWFwIiwiV1hFbnZpcm9ubWVudCIsInBsYXRmb3JtIiwiZGVidWciLCJjaGVja0xldmVsIiwiZm9ybWF0IiwibG9nIiwiaW5mbyIsIndhcm4iLCJfX29yaV9fIiwiZm9yRWFjaCIsImxldmVsSW5kZXgiLCJsZXZlbCIsInR5cGVJbmRleCIsImxvZ0xldmVsIiwibWFwIiwidiIsInRvTG93ZXJDYXNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImdPUFMiLCJwSUUiLCIkYXNzaWduIiwiQSIsIksiLCJrIiwiYUxlbiIsImdldFN5bWJvbHMiLCJpc0VudW0iLCJqIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY3JlYXRlSW5zdGFuY2UiLCJjb25maWciLCJEb2N1bWVudCIsIkVsZW1lbnQiLCJDb21tZW50Iiwic2VuZFRhc2tzIiwiY2FsbE5hdGl2ZSIsImZyYW1ld29yayIsImluaXQiLCJ2ZXJzaW9uUmVnRXhwIiwiY2hlY2tWZXJzaW9uIiwiY29kZSIsInBhcnNlIiwiaW5zdGFuY2VNYXAiLCJidW5kbGVWZXJzaW9uIiwiZ2VuSW5pdCIsImdlbkluc3RhbmNlIiwiYWRhcHRJbnN0YW5jZSIsIm5hdGl2ZU1ldGhvZE5hbWUiLCJXZWV4IiwicmVmcmVzaEluc3RhbmNlIiwiZGVzdHJveUluc3RhbmNlIiwicmVnaXN0ZXJDb21wb25lbnRzIiwicmVnaXN0ZXJNb2R1bGVzIiwiZ2V0Um9vdCIsInJlY2VpdmVUYXNrcyIsIm5hdGl2ZUNvbXBvbmVudE1hcCIsImNmZyIsImluc3RhbmNlSWQiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJyZWZyZXNoRGF0YSIsImRlc3Ryb3kiLCJjb21wb25lbnRzIiwiaXNBcnJheSIsInJlZ2lzdGVyIiwibW9kdWxlcyIsImFwaXMiLCJnZXRSb290RWxlbWVudCIsImpzSGFuZGxlcnMiLCJmaXJlRXZlbnQiLCJyZWYiLCJkb21DaGFuZ2VzIiwiY2FsbGJhY2siLCJmdW5jSWQiLCJpZkxhc3QiLCJ0YXNrcyIsInJlc3VsdHMiLCJtZXRob2QiLCJ1bnNoaWZ0IiwidGV4dCIsImltYWdlIiwiY29udGFpbmVyIiwic2xpZGVyIiwiYXBwZW5kIiwiY2VsbCIsIkFwcEluc3RhbmNlIiwiY3RybCIsInZtIiwiY3VzdG9tQ29tcG9uZW50TWFwIiwiY2FsbGJhY2tzIiwiZG9jIiwiYnVuZGxlVXJsIiwiZGlmZmVyIiwibm9ybWFsaXplIiwiYXBwIiwidG9JU09TdHJpbmciLCJjYWxsVGFza3MiLCJhcmciLCJyZWdpc3RlckNvbXBvbmVudCIsInJlcXVpcmVDb21wb25lbnQiLCJyZXF1aXJlTW9kdWxlIiwiaXNSZXNlcnZlZCIsImNhY2hlZCIsInR5cG9mIiwic3RyIiwiaGFzUHJvdG8iLCJfU2V0IiwiU2V0IiwibWF0Y2giLCJhZGQiLCJjYWNoZSIsImNhY2hlZEZuIiwiaGl0IiwiY2FtZWxpemVSRSIsImNhbWVsaXplIiwicmVwbGFjZSIsInRvVXBwZXIiLCJfIiwidG9VcHBlckNhc2UiLCJoeXBoZW5hdGVSRSIsImh5cGhlbmF0ZSIsInN1YnN0cmluZyIsInVwZGF0ZUFjdGlvbnMiLCJ1cGRhdGVzIiwiYnVuZGxlRGVmaW5lIiwiYnVuZGxlQm9vdHN0cmFwIiwiX2RhdGEiLCJjcmVhdGVGaW5pc2giLCJidW5kbGVSZWdpc3RlciIsImJ1bmRsZVJlbmRlciIsImJ1bmRsZVJlcXVpcmUiLCJidW5kbGVEb2N1bWVudCIsImZ1bmN0aW9uQm9keSIsInN1YnN0ciIsInRpbWVyIiwidGltZXJBUElzIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJuIiwiY2xlYXJJbnRlcnZhbCIsImJsb2NrcyIsImJvZHkiLCJ0b0pTT04iLCJzb21lIiwiZ2V0UmVmIiwidXBkYXRlRmluaXNoIiwiY2FsbGJhY2tJZCIsImlmS2VlcEFsaXZlIiwicmVmcmVzaEZpbmlzaCIsImNsZWFyQ29tbW9uTW9kdWxlcyIsImJvb3RzdHJhcCIsImRvd25ncmFkZSIsIldFRVhfQ09NUE9ORU5UX1JFRyIsIldFRVhfTU9EVUxFX1JFRyIsIk5PUk1BTF9NT0RVTEVfUkVHIiwiSlNfU1VSRklYX1JFRyIsImlzV2VleENvbXBvbmVudCIsImlzV2VleE1vZHVsZSIsImlzTm9ybWFsTW9kdWxlIiwiaXNOcG1Nb2R1bGUiLCJyZW1vdmVXZWV4UHJlZml4IiwicmVtb3ZlSlNTdXJmaXgiLCJjb21tb25Nb2R1bGVzIiwiZGVmaW5lIiwiZGVwcyIsImZhY3RvcnkiLCJfcmVxdWlyZSIsImNsZWFuTmFtZSIsIl9tb2R1bGUiLCJ0ZW1wbGF0ZSIsInNhdGlzZmllcyIsIl9jaGVja0Rvd25ncmFkZSIsImNoZWNrIiwiaXNEb3duZ3JhZGUiLCJlcnJvclR5cGUiLCJlcnJvck1lc3NhZ2UiLCJfYXBwIiwiU2VtVmVyIiwiZW52IiwiTk9ERV9ERUJVRyIsIlNFTVZFUl9TUEVDX1ZFUlNJT04iLCJNQVhfTEVOR1RIIiwiTUFYX1NBRkVfSU5URUdFUiIsIk51bWJlciIsInJlIiwiTlVNRVJJQ0lERU5USUZJRVIiLCJOVU1FUklDSURFTlRJRklFUkxPT1NFIiwiTk9OTlVNRVJJQ0lERU5USUZJRVIiLCJNQUlOVkVSU0lPTiIsIk1BSU5WRVJTSU9OTE9PU0UiLCJQUkVSRUxFQVNFSURFTlRJRklFUiIsIlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UiLCJQUkVSRUxFQVNFIiwiUFJFUkVMRUFTRUxPT1NFIiwiQlVJTERJREVOVElGSUVSIiwiQlVJTEQiLCJGVUxMIiwiRlVMTFBMQUlOIiwiTE9PU0VQTEFJTiIsIkxPT1NFIiwiR1RMVCIsIlhSQU5HRUlERU5USUZJRVJMT09TRSIsIlhSQU5HRUlERU5USUZJRVIiLCJYUkFOR0VQTEFJTiIsIlhSQU5HRVBMQUlOTE9PU0UiLCJYUkFOR0UiLCJYUkFOR0VMT09TRSIsIkxPTkVUSUxERSIsIlRJTERFVFJJTSIsIlJlZ0V4cCIsInRpbGRlVHJpbVJlcGxhY2UiLCJUSUxERSIsIlRJTERFTE9PU0UiLCJMT05FQ0FSRVQiLCJDQVJFVFRSSU0iLCJjYXJldFRyaW1SZXBsYWNlIiwiQ0FSRVQiLCJDQVJFVExPT1NFIiwiQ09NUEFSQVRPUkxPT1NFIiwiQ09NUEFSQVRPUiIsIkNPTVBBUkFUT1JUUklNIiwiY29tcGFyYXRvclRyaW1SZXBsYWNlIiwiSFlQSEVOUkFOR0UiLCJIWVBIRU5SQU5HRUxPT1NFIiwiU1RBUiIsImxvb3NlIiwiZXIiLCJ2YWxpZCIsImNsZWFuIiwidHJpbSIsIm0iLCJyYXciLCJtYWpvciIsIm1pbm9yIiwicGF0Y2giLCJwcmVyZWxlYXNlIiwibnVtIiwiYnVpbGQiLCJjb21wYXJlIiwib3RoZXIiLCJjb21wYXJlTWFpbiIsImNvbXBhcmVQcmUiLCJjb21wYXJlSWRlbnRpZmllcnMiLCJpbmMiLCJyZWxlYXNlIiwiaWRlbnRpZmllciIsImRpZmYiLCJ2ZXJzaW9uMSIsInZlcnNpb24yIiwiZXEiLCJ2MSIsInYyIiwibnVtZXJpYyIsImFudW0iLCJibnVtIiwicmNvbXBhcmVJZGVudGlmaWVycyIsImNvbXBhcmVMb29zZSIsInJjb21wYXJlIiwic29ydCIsInJzb3J0IiwibmVxIiwiZ3RlIiwibHRlIiwiY21wIiwib3AiLCJDb21wYXJhdG9yIiwiY29tcCIsInNlbXZlciIsIkFOWSIsIm9wZXJhdG9yIiwiUmFuZ2UiLCJyYW5nZSIsInBhcnNlUmFuZ2UiLCJmaWx0ZXIiLCJjb21wcyIsImhyIiwiaHlwaGVuUmVwbGFjZSIsImNvbXBSZSIsInBhcnNlQ29tcGFyYXRvciIsInRvQ29tcGFyYXRvcnMiLCJyZXBsYWNlQ2FyZXRzIiwicmVwbGFjZVRpbGRlcyIsInJlcGxhY2VYUmFuZ2VzIiwicmVwbGFjZVN0YXJzIiwiaXNYIiwicmVwbGFjZVRpbGRlIiwiTSIsInAiLCJwciIsInJlcGxhY2VDYXJldCIsInJlcGxhY2VYUmFuZ2UiLCJndGx0IiwieE0iLCJ4bSIsInhwIiwiYW55WCIsIiQwIiwiZk0iLCJmbSIsImZwIiwiZnByIiwiZmIiLCJ0byIsInRNIiwidG0iLCJ0cCIsInRwciIsInRiIiwidGVzdFNldCIsImFsbG93ZWQiLCJtYXhTYXRpc2Z5aW5nIiwidmVyc2lvbnMiLCJtaW5TYXRpc2Z5aW5nIiwidmFsaWRSYW5nZSIsImx0ciIsIm91dHNpZGUiLCJndHIiLCJoaWxvIiwiZ3RmbiIsImx0ZWZuIiwibHRmbiIsImVjb21wIiwiY29tcGFyYXRvcnMiLCJoaWdoIiwibG93IiwiY29tcGFyYXRvciIsInBhcnNlZCIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsIkl0ZW0iLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiVm0iLCJwYXJlbnRWbSIsInBhcmVudEVsIiwibWVyZ2VkRGF0YSIsImV4dGVybmFsRXZlbnRzIiwiX3BhcmVudCIsIl9yZWFsUGFyZW50IiwiX2NoaWxkcmVuVm1zIiwiX29wdGlvbnMiLCJfbWV0aG9kcyIsIl9jb21wdXRlZCIsImNvbXB1dGVkIiwiX2NzcyIsIl9pZHMiLCJfdm1FdmVudHMiLCJfdHlwZSIsIiRlbWl0IiwiX2luaXRlZCIsIl9jcmVhdGVkIiwicmVhZHkiLCJfcGFyZW50RWwiLCJpbml0U3RhdGUiLCJpbml0RGF0YSIsImluaXRDb21wdXRlZCIsImluaXRNZXRob2RzIiwiX3dhdGNoZXJzIiwidXNlckRlZiIsIm1ha2VDb21wdXRlZEdldHRlciIsImdldHRlciIsIm93bmVyIiwid2F0Y2hlciIsImxhenkiLCJjb21wdXRlZEdldHRlciIsImRpcnR5IiwiZXZhbHVhdGUiLCJkZXBlbmQiLCJXYXRjaGVyIiwicHJldlRhcmdldCIsImV4cE9yRm4iLCJpc0ZuIiwiZXhwcmVzc2lvbiIsImFjdGl2ZSIsIm5ld0RlcHMiLCJkZXBJZHMiLCJuZXdEZXBJZHMiLCJOT0RFX0VOViIsInF1ZXVlZCIsInNoYWxsb3ciLCJiZWZvcmVHZXQiLCJkZWVwIiwidHJhdmVyc2UiLCJhZnRlckdldCIsImFkZERlcCIsImRlcCIsImFkZFN1YiIsInJlbW92ZVN1YiIsInRtcCIsInVwZGF0ZSIsIm9sZFZhbHVlIiwiY3VycmVudCIsInRlYXJkb3duIiwiX2lzQmVpbmdEZXN0cm95ZWQiLCJfdkZvclJlbW92aW5nIiwic2Vlbk9iamVjdHMiLCJzZWVuIiwiaXNBIiwiaXNPIiwiX19vYl9fIiwiZGVwSWQiLCJEZXAiLCJzdWJzIiwic3ViIiwiZGVmaW5lUmVhY3RpdmUiLCJkZWwiLCJwcm94eSIsInVucHJveHkiLCJhcnJheUtleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiYXVnbWVudCIsInByb3RvQXVnbWVudCIsImNvcHlBdWdtZW50Iiwib2JzZXJ2ZUFycmF5Iiwid2FsayIsImNvbnZlcnQiLCJpdGVtcyIsImFkZFZtIiwidm1zIiwicmVtb3ZlVm0iLCJfX3Byb3RvX18iLCJvYiIsImlzRXh0ZW5zaWJsZSIsIl9pc1Z1ZSIsInByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwic2V0dGVyIiwiY2hpbGRPYiIsInJlYWN0aXZlR2V0dGVyIiwicmVhY3RpdmVTZXR0ZXIiLCJuZXdWYWwiLCIkZm9yY2VVcGRhdGUiLCJLRVlfV09SRFMiLCJwcm94eUdldHRlciIsInByb3h5U2V0dGVyIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsIm9yaWdpbmFsIiwibXV0YXRvciIsImluc2VydGVkIiwiJHNldCIsIiRyZW1vdmUiLCJvcHQiLCJjaGlsZHJlbiIsImNvbXBpbGUiLCJfcmVhZHkiLCJkZXN0IiwibWV0YSIsImxhc3RTaWduYWwiLCJ0YXJnZXRJc0ZyYWdtZW50IiwiY29tcGlsZUZyYWdtZW50IiwidGFyZ2V0SXNDb250ZW50IiwiX2NvbnRlbnQiLCJ0YXJnZXROZWVkQ2hlY2tSZXBlYXQiLCJjb21waWxlUmVwZWF0IiwidGFyZ2V0TmVlZENoZWNrU2hvd24iLCJjb21waWxlU2hvd24iLCJ0eXBlR2V0dGVyIiwidGFyZ2V0TmVlZENoZWNrVHlwZSIsImNvbXBpbGVUeXBlIiwiY29tcG9uZW50IiwidGFyZ2V0SXNDb21wb3NlZCIsImNvbXBpbGVDdXN0b21Db21wb25lbnQiLCJjb21waWxlTmF0aXZlQ29tcG9uZW50IiwicmVwZWF0Iiwic2hvd24iLCJmcmFnQmxvY2siLCJjaGlsZCIsIm9sZFN0eWxlIiwidHJhY2tCeSIsImF0dHIiLCJiaW5kUmVwZWF0IiwibmV3TWV0YSIsImVsZW1lbnQiLCJiaW5kU2hvd24iLCJDdG9yIiwic3ViVm0iLCJfZXh0ZXJuYWxCaW5kaW5nIiwiY29tcGlsZUNoaWxkcmVuIiwiX3Jvb3RFbCIsImV2ZW50cyIsImFkZEV2ZW50IiwidHJlZU1vZGUiLCJldmVyeSIsImtleU5hbWUiLCJ2YWx1ZU5hbWUiLCJjb21waWxlSXRlbSIsImNvbnRleHQiLCJuZXdDb250ZXh0IiwibWVyZ2VDb250ZXh0Iiwid2F0Y2hCbG9jayIsIm9sZENoaWxkcmVuIiwib2xkVm1zIiwib2xkRGF0YSIsInRyYWNrTWFwIiwicmV1c2VkTWFwIiwicmV1c2VkTGlzdCIsInVwZGF0ZU1hcmsiLCJyZXVzZWQiLCJjYWxjIiwiZGVwdGgiLCJsYXRlc3RWYWx1ZSIsInJlY29yZGVkIiwiYmxvY2tJZCIsImFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyIsImJpbmRFbGVtZW50IiwiYmluZFN1YlZtIiwiYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCIsInNldElkIiwid2F0Y2giLCJTRVRURVJTIiwic3Via2V5Iiwic2V0QXR0ciIsInNldENsYXNzIiwiY2xhc3NMaXN0Iiwic2V0U3R5bGUiLCJiaW5kRXZlbnRzIiwicmVwZWF0SXRlbSIsInByb3BzIiwicmVkdWNlIiwibWVyZ2VQcm9wcyIsIm1lcmdlQ2xhc3NTdHlsZSIsIm1lcmdlU3R5bGUiLCJyZXR1cm5WYWx1ZSIsImNzcyIsInNldENsYXNzU3R5bGUiLCJuZXdJZCIsImJpbmREaXIiLCJjbGFzc1N0eWxlIiwic2V0RXZlbnQiLCJiaW5kS2V5IiwiY3JlYXRlQm9keSIsImNyZWF0ZUJsb2NrIiwiYXR0YWNoVGFyZ2V0IiwibW92ZVRhcmdldCIsInJlbW92ZVRhcmdldCIsImNyZWF0ZUJsb2NrU3RhcnQiLCJlbmQiLCJjcmVhdGVCbG9ja0VuZCIsImxhc3Rlc3RCbG9ja0lkIiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRCZWZvcmUiLCJhbmNob3IiLCJjcmVhdGVDb21tZW50IiwiYmVmb3JlIiwiYWZ0ZXIiLCJzaWduYWwiLCJtb3ZlQmxvY2siLCJtb3ZlRWxlbWVudCIsInBhcmVudE5vZGUiLCJncm91cCIsIm5leHRTaWJsaW5nIiwidGVtcCIsInByZXNlcnZlQmxvY2siLCJyZW1vdmVCbG9jayIsInJlbW92ZUVsZW1lbnQiLCIkZGlzcGF0Y2giLCIkYnJvYWRjYXN0IiwiJG9uIiwiJG9mZiIsImluaXRFdmVudHMiLCJtaXhpbkV2ZW50cyIsIkV2dCIsImRldGFpbCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJzaG91bGRTdG9wIiwic3RvcCIsImhhc1N0b3BwZWQiLCJoYW5kbGVyTGlzdCIsImV2dCIsIkxJRkVfQ1lDTEVfVFlQRVMiLCJ0eXBlMSIsInR5cGUyIiwiY2xlYXJNb2R1bGVzIiwiZ2V0TW9kdWxlIiwibmF0aXZlTW9kdWxlcyIsImFzc2lnbk1vZHVsZXMiLCJpZlJlcGxhY2UiLCJtb2R1bGVOYW1lIiwiYXNzaWduQXBpcyIsImFwaU5hbWUiLCJub3JtYWxpemVWZXJzaW9uIiwiZ2V0RXJyb3IiLCJpc1ZhbGlkIiwiY3JpdGVyaWEiLCJnZXRNc2ciLCJfa2V5IiwiZGV2aWNlSW5mbyIsImN1c3RvbURvd25ncmFkZSIsImRQbGF0Zm9ybSIsImNPYmoiLCJrZXlMb3dlciIsImlzVmVyc2lvbiIsImlzRGV2aWNlTW9kZWwiLCJkIiwiX2NyaXRlcmlhIiwiRGlmZmVyIiwiaG9va3MiLCJoYXNUaW1lciIsImlzVGltZW91dCIsImNhbGxUeXBlTWFwIiwiY2FsbFR5cGVMaXN0IiwiaXNFbXB0eSIsIk5vZGUiLCJERUZBVUxUX1RBR19OQU1FIiwibmV4dE5vZGVSZWYiLCJ1cmwiLCJVUkwiLCJub2RlTWFwIiwiZ2VuQ2FsbFRhc2tzIiwiY3JlYXRlRG9jdW1lbnRFbGVtZW50IiwiYmF0Y2hlZCIsImRvY0lkIiwib3duZXJEb2N1bWVudCIsInJvbGUiLCJfZG9jdW1lbnRFbGVtZW50IiwiYXBwZW5kQm9keSIsInB1cmVDaGlsZHJlbiIsImJlZm9yZUluZGV4Iiwibm9kZVR5cGUiLCJzZXRCb2R5IiwibGlua1BhcmVudCIsIm5vZGVJZCIsIl9yb290IiwidGFnTmFtZSIsInVwZGF0ZUVsZW1lbnQiLCJjaGFuZ2VzIiwiYXR0cnMiLCJwcmV2aW91c1NpYmxpbmciLCJpbnNlcnRJbmRleCIsInJlZ2lzdGVyTm9kZSIsImFkZEVsZW1lbnQiLCJtb3ZlSW5kZXgiLCJwdXJlQmVmb3JlIiwibmV4dEVsZW1lbnQiLCJwcmV2aW91c0VsZW1lbnQiLCJwcmVzZXJ2ZWQiLCJyZW1vdmVJbmRleCIsIm5ld0luZGV4IiwiY2hhbmdlU2libGluZyIsIm5ld0luZGV4QWZ0ZXIiLCJiZWZvcmVOZXciLCJhZnRlck5ldyIsInNpbGVudCIsInNldFN0eWxlcyIsInRvU3R5bGUiLCJyZW1vdmVFdmVudCIsIkxpc3RlbmVyIiwiY3JlYXRlQWN0aW9uIiwiYWN0aW9ucyIsImFkZEFjdGlvbnMiLCJ0YXJnZXRSZWYiLCJwYXJlbnRSZWYiLCIkIiwiJGVsIiwiJHZtIiwiJHJlbmRlclRoZW4iLCIkc2Nyb2xsVG8iLCIkdHJhbnNpdGlvbiIsIiRnZXRDb25maWciLCIkc2VuZEh0dHAiLCIkb3BlblVSTCIsIiRzZXRUaXRsZSIsIiRjYWxsIiwib2Zmc2V0IiwiZG9tIiwic2Nyb2xsVG9FbGVtZW50Iiwic3R5bGVzIiwiYW5pbWF0aW9uIiwidHJhbnNpdGlvbiIsIl9zZXRTdHlsZSIsInBhcmFtcyIsInN0cmVhbSIsInNlbmRIdHRwIiwib3BlblVSTCIsInBhZ2VJbmZvIiwic2V0VGl0bGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0tBQVlBLE87Ozs7OztLQUVKQyxNLHVCQUFBQSxNO0tBQVFDLFcsdUJBQUFBLFc7O0FBRWhCOzs0QkFDV0MsVTtBQUNUQyxVQUFPRCxVQUFQLElBQXFCLFlBQWE7QUFDaEMsU0FBTUUsTUFBTSxrQkFBUUYsVUFBUixxQ0FBWjtBQUNBLFNBQUlFLGVBQWVDLEtBQW5CLEVBQTBCO0FBQ3hCQyxlQUFRQyxLQUFSLENBQWNILElBQUlJLFFB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Z0RBREssR0FFTCwyQkFGUjtBQUdBLE9BQU0wckIsV0FBVyxLQUFLaGhCLElBQUwsQ0FBVTVFLGFBQVYsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQTRsQixZQUFTQyxRQUFULENBQWtCelcsS0FBbEI7QUFDRDs7QUFFRDs7Ozs7OztBQU9PLFVBQVM0VixLQUFULENBQWdCckYsVUFBaEIsRUFBNEJqK0IsVUFBNUIsRUFBaUQ7QUFDdERJLFdBQVFvWSxJQUFSLENBQWEsNENBQ1gsMkRBREY7QUFFQSxPQUFNblUsU0FBUyxLQUFLNmUsSUFBTCxDQUFVNUUsYUFBVixDQUF3QjJmLFVBQXhCLENBQWY7QUFDQSxPQUFJNTVCLFVBQVVBLE9BQU9yRSxVQUFQLENBQWQsRUFBa0M7QUFBQSx1Q0FKYytWLElBSWQ7QUFKY0EsV0FJZDtBQUFBOztBQUNoQzFSLFlBQU9yRSxVQUFQLGdCQUFzQitWLElBQXRCO0FBQ0Q7QUFDRixFIiwiZmlsZSI6Im5hdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgN2IzNTc0NGQzNmQxMzMzZDVkNTNcbiAqKi8iLCJpbXBvcnQgJy4uL3NoYXJlZCdcbmltcG9ydCBydW50aW1lIGZyb20gJy4uL3J1bnRpbWUnXG5pbXBvcnQgeyBzdWJ2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJ1xuaW1wb3J0ICogYXMgbWV0aG9kcyBmcm9tICcuLi9kZWZhdWx0L2FwaS9tZXRob2RzJ1xuXG5jb25zdCB7IG5hdGl2ZSwgdHJhbnNmb3JtZXIgfSA9IHN1YnZlcnNpb25cblxuLy8gcmVnaXN0ZXIgaW5zdGFuY2UgbWFuYWdlbWVudCBBUElzXG5mb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gcnVudGltZSkge1xuICBnbG9iYWxbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJldCA9IHJ1bnRpbWVbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgICBpZiAocmV0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmV0LnRvU3RyaW5nKCkpXG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxufVxuXG4vLyByZWdpc3RlciBmcmFtZXdvcmsgbWV0YSBpbmZvXG5nbG9iYWwuZnJhbWV3b3JrVmVyc2lvbiA9IG5hdGl2ZVxuZ2xvYmFsLnRyYW5zZm9ybWVyVmVyc2lvbiA9IHRyYW5zZm9ybWVyXG5cbi8vIHJlZ2lzdGVyIHNwZWNpYWwgbWV0aG9kcyBmb3IgV2VleCBmcmFtZXdvcmtcbmdsb2JhbC5yZWdpc3Rlck1ldGhvZHMobWV0aG9kcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvbmF0aXZlL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0ICcuL3NldFRpbWVvdXQnXG5pbXBvcnQgJy4vcHJvbWlzZSdcbmltcG9ydCAnLi9jb25zb2xlJ1xuaW1wb3J0ICcuL29iamVjdEFzc2lnbidcblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRvXG4gKiBAcGFyYW0ge09iamVjdH0gZnJvbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQgKHRhcmdldCwgLi4uc3JjKSB7XG4gIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zcmMpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZmlyc3QgPSBzcmMuc2hpZnQoKVxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpcnN0KSB7XG4gICAgICB0YXJnZXRba2V5XSA9IGZpcnN0W2tleV1cbiAgICB9XG4gICAgaWYgKHNyYy5sZW5ndGgpIHtcbiAgICAgIGV4dGVuZCh0YXJnZXQsIC4uLnNyYylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldFxufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtlbnVtZXJhYmxlXVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pXG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHsqfSBpdGVtXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSAoYXJyLCBpdGVtKSB7XG4gIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgY29uc3QgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd24gKG9iaiwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxufVxuXG4vKipcbiAqIFNpbXBsZSBiaW5kLCBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQgKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgY29uc3QgbCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXktbGlrZX0gbGlzdFxuICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydF0gLSBzdGFydCBpbmRleFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMFxuICBsZXQgaSA9IGxpc3QubGVuZ3RoIC0gc3RhcnRcbiAgY29uc3QgcmV0ID0gbmV3IEFycmF5KGkpXG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF1cbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5jb25zdCBPQkpFQ1RfU1RSSU5HID0gJ1tvYmplY3QgT2JqZWN0XSdcbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gT0JKRUNUX1NUUklOR1xufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9pbmRleC5qc1xuICoqLyIsImNvbnN0IHtcbiAgc2V0VGltZW91dCxcbiAgc2V0VGltZW91dE5hdGl2ZVxufSA9IGdsb2JhbFxuXG4vLyBmaXggbm8gc2V0VGltZW91dCBvbiBBbmRyb2lkIFY4XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIHNldFRpbWVvdXROYXRpdmUgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc3QgdGltZW91dE1hcCA9IHt9XG4gIGxldCB0aW1lb3V0SWQgPSAwXG5cbiAgZ2xvYmFsLnNldFRpbWVvdXQgPSAoY2IsIHRpbWUpID0+IHtcbiAgICB0aW1lb3V0TWFwWysrdGltZW91dElkXSA9IGNiXG4gICAgc2V0VGltZW91dE5hdGl2ZSh0aW1lb3V0SWQudG9TdHJpbmcoKSwgdGltZSlcbiAgfVxuXG4gIGdsb2JhbC5zZXRUaW1lb3V0Q2FsbGJhY2sgPSAoaWQpID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWVvdXRNYXBbaWRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aW1lb3V0TWFwW2lkXSgpXG4gICAgICBkZWxldGUgdGltZW91dE1hcFtpZF1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL3NldFRpbWVvdXQuanNcbiAqKi8iLCIvLyBmaXggUHJvbWlzZSBQcm9ibGVtIG9uIEpTQ29udGV4dCBvZiBpT1M3fjhcbi8vIEBzZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNTg2NlxuLy8gZ2xvYmFsLlByb21pc2UgPSBudWxsXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKVxucmVxdWlyZSgnY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlJylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL3Byb21pc2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qc1xuICoqLyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qc1xuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fY29mLmpzXG4gKiovIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanNcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYoT1trZXldID09PSB2YWwpcmV0dXJuO1xuICBpZihpc0Z1bmN0aW9uKWhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSl7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKE9ba2V5XSlPW2tleV0gPSB2YWw7XG4gICAgICBlbHNlIGhpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUuanNcbiAqKi8iLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qc1xuICoqLyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbiAqKi8iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2hhcy5qc1xuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanNcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0KXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jdHguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbiAqKi8iLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanNcbiAqKi8iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuICoqLyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuICoqLyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanNcbiAqKi8iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbiAqKi8iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanNcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWluZGV4LmpzXG4gKiovIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuICoqLyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19odG1sLmpzXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4gKiovIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qc1xuICoqLyIsInZhciAkaXRlcmF0b3JzICAgID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKVxuICAsIHJlZGVmaW5lICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHdrcyAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIElURVJBVE9SICAgICAgPSB3a3MoJ2l0ZXJhdG9yJylcbiAgLCBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpXG4gICwgQXJyYXlWYWx1ZXMgICA9IEl0ZXJhdG9ycy5BcnJheTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlXG4gICAgLCBrZXk7XG4gIGlmKHByb3RvKXtcbiAgICBpZighcHJvdG9bSVRFUkFUT1JdKWhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYoIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGZvcihrZXkgaW4gJGl0ZXJhdG9ycylpZighcHJvdG9ba2V5XSlyZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqLyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItc3RlcC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4gKiovIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzXG4gKiovIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4gKiovIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbiAqKi8iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdGFzay5qc1xuICoqLyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19taWNyb3Rhc2suanNcbiAqKi8iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbiAqKi8iLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4gKiovIiwiY29uc3QgeyBjb25zb2xlLCBuYXRpdmVMb2cgfSA9IGdsb2JhbFxuY29uc3QgTEVWRUxTID0gWydlcnJvcicsICd3YXJuJywgJ2luZm8nLCAnbG9nJywgJ2RlYnVnJ11cbmNvbnN0IGxldmVsTWFwID0ge31cblxuZ2VuZXJhdGVMZXZlbE1hcCgpXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKFxuICB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcgfHwgLy8gQW5kcm9pZFxuICAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQucGxhdGZvcm0gPT09ICdpT1MnKSAvLyBpT1Ncbikge1xuICBnbG9iYWwuY29uc29sZSA9IHtcbiAgICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0RFQlVHJykgfVxuICAgIH0sXG4gICAgbG9nOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2xvZycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0xPRycpIH1cbiAgICB9LFxuICAgIGluZm86ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0lORk8nKSB9XG4gICAgfSxcbiAgICB3YXJuOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19XQVJOJykgfVxuICAgIH0sXG4gICAgZXJyb3I6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnZXJyb3InKSkgeyBuYXRpdmVMb2coLi4uZm9ybWF0KGFyZ3MpLCAnX19FUlJPUicpIH1cbiAgICB9XG4gIH1cbn1cbmVsc2UgeyAvLyBIVE1MNVxuICBjb25zdCB7IGRlYnVnLCBsb2csIGluZm8sIHdhcm4sIGVycm9yIH0gPSBjb25zb2xlXG4gIGNvbnNvbGUuX19vcmlfXyA9IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfVxuICBjb25zb2xlLmRlYnVnID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnZGVidWcnKSkgeyBjb25zb2xlLl9fb3JpX18uZGVidWcuYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgY29uc29sZS5fX29yaV9fLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5pbmZvID0gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAoY2hlY2tMZXZlbCgnaW5mbycpKSB7IGNvbnNvbGUuX19vcmlfXy5pbmZvLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLndhcm4gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCd3YXJuJykpIHsgY29uc29sZS5fX29yaV9fLndhcm4uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUuZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IGNvbnNvbGUuX19vcmlfXy5lcnJvci5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMZXZlbE1hcCAoKSB7XG4gIExFVkVMUy5mb3JFYWNoKGxldmVsID0+IHtcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gTEVWRUxTLmluZGV4T2YobGV2ZWwpXG4gICAgbGV2ZWxNYXBbbGV2ZWxdID0ge31cbiAgICBMRVZFTFMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgIGNvbnN0IHR5cGVJbmRleCA9IExFVkVMUy5pbmRleE9mKHR5cGUpXG4gICAgICBpZiAodHlwZUluZGV4IDw9IGxldmVsSW5kZXgpIHtcbiAgICAgICAgbGV2ZWxNYXBbbGV2ZWxdW3R5cGVdID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNoZWNrTGV2ZWwgKHR5cGUpIHtcbiAgY29uc3QgbG9nTGV2ZWwgPSAoZ2xvYmFsLldYRW52aXJvbm1lbnQgJiYgZ2xvYmFsLldYRW52aXJvbm1lbnQubG9nTGV2ZWwpIHx8ICdsb2cnXG4gIHJldHVybiBsZXZlbE1hcFtsb2dMZXZlbF0gJiYgbGV2ZWxNYXBbbG9nTGV2ZWxdW3R5cGVdXG59XG5cbmZ1bmN0aW9uIGZvcm1hdCAoYXJncykge1xuICByZXR1cm4gYXJncy5tYXAoKHYpID0+IHtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcbiAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHYgPSBTdHJpbmcodilcbiAgICB9XG4gICAgcmV0dXJuIHZcbiAgfSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL2NvbnNvbGUuanNcbiAqKi8iLCJpbXBvcnQgJ2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbidcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL29iamVjdEFzc2lnbi5qc1xuICoqLyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuICoqLyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbiAqKi8iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4gKiovIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuICoqLyIsImltcG9ydCBmcmFtZXdvcmtzIGZyb20gJy4vY29uZmlnJ1xuXG5pbXBvcnQgeyBEb2N1bWVudCwgRWxlbWVudCwgQ29tbWVudCB9IGZyb20gJy4uL3Zkb20nXG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgRG9jdW1lbnQsIEVsZW1lbnQsIENvbW1lbnQsXG4gIHNlbmRUYXNrcyAoLi4uYXJncykge1xuICAgIHJldHVybiBnbG9iYWwuY2FsbE5hdGl2ZSguLi5hcmdzKVxuICB9XG59XG5cbmZvciAoY29uc3QgbmFtZSBpbiBmcmFtZXdvcmtzKSB7XG4gIGNvbnN0IGZyYW1ld29yayA9IGZyYW1ld29ya3NbbmFtZV1cbiAgZnJhbWV3b3JrLmluaXQoY29uZmlnKVxufVxuXG5jb25zdCB2ZXJzaW9uUmVnRXhwID0gL15cXC9cXC8gKihcXHtbXlxcfV0qXFx9KSAqXFxyP1xcbi9cblxuZnVuY3Rpb24gY2hlY2tWZXJzaW9uIChjb2RlKSB7XG4gIGxldCBpbmZvXG4gIGNvbnN0IHJlc3VsdCA9IHZlcnNpb25SZWdFeHAuZXhlYyhjb2RlKVxuICBpZiAocmVzdWx0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGluZm8gPSBKU09OLnBhcnNlKHJlc3VsdFsxXSlcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIGluZm9cbn1cblxuY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UgKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpIHtcbiAgbGV0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgaWYgKCFpbmZvKSB7XG4gICAgaW5mbyA9IGNoZWNrVmVyc2lvbihjb2RlKSB8fCB7fVxuICAgIGlmICghZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIGluZm8uZnJhbWV3b3JrID0gJ1dlZXgnXG4gICAgfVxuICAgIGluc3RhbmNlTWFwW2lkXSA9IGluZm9cbiAgICBjb25maWcgPSBjb25maWcgfHwge31cbiAgICBjb25maWcuYnVuZGxlVmVyc2lvbiA9IGluZm8udmVyc2lvblxuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNyZWF0ZSBhbiAke2luZm8uZnJhbWV3b3JrfUAke2NvbmZpZy5idW5kbGVWZXJzaW9ufSBpbnN0YW5jZSBmcm9tICR7Y29uZmlnLmJ1bmRsZVZlcnNpb259YClcbiAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10uY3JlYXRlSW5zdGFuY2UoaWQsIGNvZGUsIGNvbmZpZywgZGF0YSlcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG59XG5cbmNvbnN0IG1ldGhvZHMgPSB7XG4gIGNyZWF0ZUluc3RhbmNlXG59XG5cbmZ1bmN0aW9uIGdlbkluaXQgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgICAgIGNvbnN0IGZyYW1ld29yayA9IGZyYW1ld29ya3NbbmFtZV1cbiAgICAgIGlmIChmcmFtZXdvcmsgJiYgZnJhbWV3b3JrW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIGZyYW1ld29ya1ttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5bJ3JlZ2lzdGVyQ29tcG9uZW50cycsICdyZWdpc3Rlck1vZHVsZXMnLCAncmVnaXN0ZXJNZXRob2RzJ10uZm9yRWFjaChnZW5Jbml0KVxuXG5mdW5jdGlvbiBnZW5JbnN0YW5jZSAobWV0aG9kTmFtZSkge1xuICBtZXRob2RzW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBpZCA9IGFyZ3NbMF1cbiAgICBjb25zdCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gICAgaWYgKGluZm8gJiYgZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbn1cblxuWydkZXN0cm95SW5zdGFuY2UnLCAncmVmcmVzaEluc3RhbmNlJywgJ3JlY2VpdmVUYXNrcycsICdnZXRSb290J10uZm9yRWFjaChnZW5JbnN0YW5jZSlcblxuZnVuY3Rpb24gYWRhcHRJbnN0YW5jZSAobWV0aG9kTmFtZSwgbmF0aXZlTWV0aG9kTmFtZSkge1xuICBtZXRob2RzW25hdGl2ZU1ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBpZCA9IGFyZ3NbMF1cbiAgICBjb25zdCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gICAgaWYgKGluZm8gJiYgZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbn1cblxuYWRhcHRJbnN0YW5jZSgncmVjZWl2ZVRhc2tzJywgJ2NhbGxKUycpXG5cbmV4cG9ydCBkZWZhdWx0IG1ldGhvZHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvcnVudGltZS9pbmRleC5qc1xuICoqLyIsIi8vIGJ1aWx0IGJ5IG5wbSBydW4gYnVpbGQ6Y29uZmlnXG5cbmltcG9ydCAqIGFzIFdlZXggZnJvbSAnLi4vZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBXZWV4XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IE1haW4gZW50cnksIGluc3RhbmNlIG1hbmFnZXJcbiAqXG4gKiAtIGNyZWF0ZUluc3RhbmNlKGluc3RhbmNlSWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpXG4gKiAtIHJlZnJlc2hJbnN0YW5jZShpbnN0YW5jZUlkLCBkYXRhKVxuICogLSBkZXN0cm95SW5zdGFuY2UoaW5zdGFuY2VJZClcbiAqIC0gcmVnaXN0ZXJDb21wb25lbnRzKGNvbXBvbmVudHMpXG4gKiAtIHJlZ2lzdGVyTW9kdWxlcyhtb2R1bGVzKVxuICogLSBnZXRSb290KGluc3RhbmNlSWQpXG4gKiAtIGluc3RhbmNlTWFwXG4gKiAtIGNhbGxKUyhpbnN0YW5jZUlkLCB0YXNrcylcbiAqICAgLSBmaXJlRXZlbnQocmVmLCB0eXBlLCBkYXRhKVxuICogICAtIGNhbGxiYWNrKGZ1bmNJZCwgZGF0YSlcbiAqL1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xuaW1wb3J0IEFwcEluc3RhbmNlIGZyb20gJy4vYXBwJ1xuaW1wb3J0IFZtIGZyb20gJy4vdm0nXG5cbmNvbnN0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwXG59ID0gY29uZmlnXG5jb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0IChjZmcpIHtcbiAgY29uZmlnLkRvY3VtZW50ID0gY2ZnLkRvY3VtZW50XG4gIGNvbmZpZy5FbGVtZW50ID0gY2ZnLkVsZW1lbnRcbiAgY29uZmlnLkNvbW1lbnQgPSBjZmcuQ29tbWVudFxuICBjb25maWcuc2VuZFRhc2tzID0gY2ZnLnNlbmRUYXNrc1xufVxuXG4vKipcbiAqIGNyZWF0ZSBhIFdlZXggaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGluc3RhbmNlSWRcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9uc10gb3B0aW9uIGBIQVNfTE9HYCBlbmFibGUgcHJpbnQgbG9nXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtkYXRhXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UgKGluc3RhbmNlSWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpIHtcbiAgbGV0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBsZXQgcmVzdWx0XG4gIGlmICghaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBBcHBJbnN0YW5jZShpbnN0YW5jZUlkLCBvcHRpb25zKVxuICAgIGluc3RhbmNlTWFwW2luc3RhbmNlSWRdID0gaW5zdGFuY2VcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5pbml0KGNvZGUsIGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiByZWZyZXNoIGEgV2VleCBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoSW5zdGFuY2UgKGluc3RhbmNlSWQsIGRhdGEpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBsZXQgcmVzdWx0XG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJlc3VsdCA9IGluc3RhbmNlLnJlZnJlc2hEYXRhKGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogZGVzdHJveSBhIFdlZXggaW5zdGFuY2VcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveUluc3RhbmNlIChpbnN0YW5jZUlkKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG5cbiAgaW5zdGFuY2UuZGVzdHJveSgpXG4gIGRlbGV0ZSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICByZXR1cm4gaW5zdGFuY2VNYXBcbn1cblxuLyoqXG4gKiByZWdpc3RlciB0aGUgbmFtZSBvZiBlYWNoIG5hdGl2ZSBjb21wb25lbnRcbiAqIEBwYXJhbSAge2FycmF5fSBjb21wb25lbnRzIGFycmF5IG9mIG5hbWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29tcG9uZW50cyAoY29tcG9uZW50cykge1xuICBpZiAoQXJyYXkuaXNBcnJheShjb21wb25lbnRzKSkge1xuICAgIGNvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbiByZWdpc3RlciAobmFtZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hdGl2ZUNvbXBvbmVudE1hcFtuYW1lXSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbmFtZS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYXRpdmVDb21wb25lbnRNYXBbbmFtZS50eXBlXSA9IG5hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogcmVnaXN0ZXIgdGhlIG5hbWUgYW5kIG1ldGhvZHMgb2YgZWFjaCBtb2R1bGVcbiAqIEBwYXJhbSAge29iamVjdH0gbW9kdWxlcyBhIG9iamVjdCBvZiBtb2R1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZXMgKG1vZHVsZXMpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnb2JqZWN0Jykge1xuICAgIFZtLnJlZ2lzdGVyTW9kdWxlcyhtb2R1bGVzKVxuICB9XG59XG5cbi8qKlxuICogcmVnaXN0ZXIgdGhlIG5hbWUgYW5kIG1ldGhvZHMgb2YgZWFjaCBhcGlcbiAqIEBwYXJhbSAge29iamVjdH0gYXBpcyBhIG9iamVjdCBvZiBhcGlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1ldGhvZHMgKGFwaXMpIHtcbiAgaWYgKHR5cGVvZiBhcGlzID09PSAnb2JqZWN0Jykge1xuICAgIFZtLnJlZ2lzdGVyTWV0aG9kcyhhcGlzKVxuICB9XG59XG5nbG9iYWwucmVnaXN0ZXJNZXRob2RzID0gcmVnaXN0ZXJNZXRob2RzXG5cbi8qKlxuICogZ2V0IGEgd2hvbGUgZWxlbWVudCB0cmVlIG9mIGFuIGluc3RhbmNlXG4gKiBmb3IgZGVidWdnaW5nXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGluc3RhbmNlSWRcbiAqIEByZXR1cm4ge29iamVjdH0gYSB2aXJ0dWFsIGRvbSB0cmVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290IChpbnN0YW5jZUlkKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgbGV0IHJlc3VsdFxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5nZXRSb290RWxlbWVudCgpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGpzSGFuZGxlcnMgPSB7XG4gIGZpcmVFdmVudDogZnVuY3Rpb24gZmlyZUV2ZW50IChpbnN0YW5jZUlkLCByZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gICAgcmV0dXJuIGluc3RhbmNlLmZpcmVFdmVudChyZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpXG4gIH0sXG5cbiAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrIChpbnN0YW5jZUlkLCBmdW5jSWQsIGRhdGEsIGlmTGFzdCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgICByZXR1cm4gaW5zdGFuY2UuY2FsbGJhY2soZnVuY0lkLCBkYXRhLCBpZkxhc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBhY2NlcHQgY2FsbHMgZnJvbSBuYXRpdmUgKGV2ZW50IG9yIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7YXJyYXl9IHRhc2tzIGxpc3Qgd2l0aCBgbWV0aG9kYCBhbmQgYGFyZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVGFza3MgKGluc3RhbmNlSWQsIHRhc2tzKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgaWYgKGluc3RhbmNlICYmIEFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9IGpzSGFuZGxlcnNbdGFzay5tZXRob2RdXG4gICAgICBjb25zdCBhcmdzID0gWy4uLnRhc2suYXJnc11cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoaW5zdGFuY2VJZClcbiAgICAgICAgcmVzdWx0cy5wdXNoKGhhbmRsZXIoLi4uYXJncykpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCIgb3IgdGFza3NgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYXRpdmVDb21wb25lbnRNYXA6IHtcbiAgICB0ZXh0OiB0cnVlLFxuICAgIGltYWdlOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICBzbGlkZXI6IHtcbiAgICAgIHR5cGU6ICdzbGlkZXInLFxuICAgICAgYXBwZW5kOiAndHJlZSdcbiAgICB9LFxuICAgIGNlbGw6IHtcbiAgICAgIHR5cGU6ICdjZWxsJyxcbiAgICAgIGFwcGVuZDogJ3RyZWUnXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IGluc3RhbmNlIGNvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICogYXMgY3RybCBmcm9tICcuL2N0cmwnXG5pbXBvcnQgRGlmZmVyIGZyb20gJy4vZGlmZmVyJ1xuXG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgcmVnaXN0ZXJDb21wb25lbnQsIHJlcXVpcmVDb21wb25lbnQsIHJlcXVpcmVNb2R1bGUgfSBmcm9tICcuL3JlZ2lzdGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBJbnN0YW5jZSAoaW5zdGFuY2VJZCwgb3B0aW9ucykge1xuICB0aGlzLmlkID0gaW5zdGFuY2VJZFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMudm0gPSBudWxsXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0ge31cbiAgdGhpcy5jYWxsYmFja3MgPSB7fVxuICB0aGlzLmRvYyA9IG5ldyByZW5kZXJlci5Eb2N1bWVudChcbiAgICBpbnN0YW5jZUlkLFxuICAgIHRoaXMub3B0aW9ucy5idW5kbGVVcmxcbiAgKVxuICB0aGlzLmRpZmZlciA9IG5ldyBEaWZmZXIoaW5zdGFuY2VJZClcbiAgdGhpcy51aWQgPSAwXG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAoYXBwLCB2KSB7XG4gIGNvbnN0IHR5cGUgPSB0eXBvZih2KVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgY2FzZSAnbnVsbCc6XG4gICAgICByZXR1cm4gJydcbiAgICBjYXNlICdyZWdleHAnOlxuICAgICAgcmV0dXJuIHYudG9TdHJpbmcoKVxuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIHYudG9JU09TdHJpbmcoKVxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICdhcnJheSc6XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmICh2IGluc3RhbmNlb2YgcmVuZGVyZXIuRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdi5yZWZcbiAgICAgIH1cbiAgICAgIHJldHVybiB2XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgYXBwLmNhbGxiYWNrc1srK2FwcC51aWRdID0gdlxuICAgICAgcmV0dXJuIGFwcC51aWQudG9TdHJpbmcoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodilcbiAgfVxufVxuXG5BcHBJbnN0YW5jZS5wcm90b3R5cGUuY2FsbFRhc2tzID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gIGlmICh0eXBvZih0YXNrcykgIT09ICdhcnJheScpIHtcbiAgICB0YXNrcyA9IFt0YXNrc11cbiAgfVxuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICB0YXNrLmFyZ3MgPSB0YXNrLmFyZ3MubWFwKGFyZyA9PiBub3JtYWxpemUodGhpcywgYXJnKSlcbiAgfSlcblxuICByZXR1cm4gcmVuZGVyZXIuc2VuZFRhc2tzKHRoaXMuaWQsIHRhc2tzLCAnLTEnKVxufVxuXG5leHRlbmQoQXBwSW5zdGFuY2UucHJvdG90eXBlLCBjdHJsLCB7XG4gIHJlZ2lzdGVyQ29tcG9uZW50LFxuICByZXF1aXJlQ29tcG9uZW50LFxuICByZXF1aXJlTW9kdWxlXG59KVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2luZGV4LmpzXG4gKiovIiwiZXhwb3J0IHtcbiAgZXh0ZW5kLFxuICBkZWYsXG4gIHJlbW92ZSxcbiAgaGFzT3duLFxuICBiaW5kLFxuICB0b0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdFxufSBmcm9tICcuLi8uLi9zaGFyZWQnXG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIGNvbnN0IGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMClcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbmV4cG9ydCBjb25zdCBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9XG5cbmxldCBfU2V0XG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBTZXQudG9TdHJpbmcoKS5tYXRjaCgvbmF0aXZlIGNvZGUvKSkge1xuICAvLyB1c2UgbmF0aXZlIFNldCB3aGVuIGF2YWlsYWJsZS5cbiAgX1NldCA9IFNldFxufVxuZWxzZSB7XG4gIC8vIGEgbm9uLXN0YW5kYXJkIFNldCBwb2x5ZmlsbCB0aGF0IG9ubHkgd29ya3Mgd2l0aCBwcmltaXRpdmUga2V5cy5cbiAgX1NldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgfVxuICBfU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gIT09IHVuZGVmaW5lZFxuICB9XG4gIF9TZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0aGlzLnNldFtrZXldID0gMVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG59XG5cbmV4cG9ydCB7IF9TZXQgfVxuXG4vKipcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHJldHVybiBmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgY29uc3QgaGl0ID0gY2FjaGVbc3RyXVxuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9XG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nXG5leHBvcnQgY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIHRvVXBwZXIpXG59KVxuXG5mdW5jdGlvbiB0b1VwcGVyIChfLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJydcbn1cblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW2EtelxcZF0pKFtBLVpdKS9nXG5leHBvcnQgY29uc3QgaHlwaGVuYXRlID0gY2FjaGVkKHN0ciA9PiB7XG4gIHJldHVybiBzdHJcbiAgICAucmVwbGFjZShoeXBoZW5hdGVSRSwgJyQxLSQyJylcbiAgICAudG9Mb3dlckNhc2UoKVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIGNvbnN0IHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSkudG9Mb3dlckNhc2UoKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3V0aWwvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIGluc3RhbmNlIGNvbnRyb2xzIGZyb20gbmF0aXZlXG4gKlxuICogLSBpbml0IGJ1bmRsZVxuICogLSBmaXJlIGV2ZW50XG4gKiAtIGNhbGxiYWNrXG4gKiAtIGRlc3Ryb3lcbiAqXG4gKiBjb3JyZXNwb25kZWQgd2l0aCB0aGUgQVBJIG9mIGluc3RhbmNlIG1hbmFnZXIgKGZyYW1ld29yay5qcylcbiAqL1xuXG5pbXBvcnQgeyBleHRlbmQsIGJpbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgZGVmaW5lLFxuICBib290c3RyYXAsXG4gIHJlZ2lzdGVyXG59IGZyb20gJy4vYnVuZGxlJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWN0aW9ucyAoKSB7XG4gIHRoaXMuZGlmZmVyLmZsdXNoKClcbiAgY29uc3QgdGFza3MgPSBbXVxuICBpZiAodGhpcy5kb2MgJiYgdGhpcy5kb2MubGlzdGVuZXIgJiYgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlcy5sZW5ndGgpIHtcbiAgICB0YXNrcy5wdXNoKC4uLnRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZXMpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlcyA9IFtdXG4gIH1cbiAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxUYXNrcyh0YXNrcylcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAoY29kZSwgZGF0YSkge1xuICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBJbnRpYWxpemUgYW4gaW5zdGFuY2Ugd2l0aDpcXG4nLCBkYXRhKVxuXG4gIGxldCByZXN1bHRcbiAgLy8gQHNlZTogbGliL2FwcC9idW5kbGUuanNcbiAgY29uc3QgYnVuZGxlRGVmaW5lID0gYmluZChkZWZpbmUsIHRoaXMpXG4gIGNvbnN0IGJ1bmRsZUJvb3RzdHJhcCA9IChuYW1lLCBjb25maWcsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKHRoaXMsIG5hbWUsIGNvbmZpZywgX2RhdGEgfHwgZGF0YSlcbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLmNyZWF0ZUZpbmlzaCgpXG4gICAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gQWZ0ZXIgaW50aWFsaXplZCBhbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG4gIH1cblxuICAvLyBiYWNrd2FyZChyZWdpc3Rlci9yZW5kZXIpXG4gIGNvbnN0IGJ1bmRsZVJlZ2lzdGVyID0gYmluZChyZWdpc3RlciwgdGhpcylcbiAgY29uc3QgYnVuZGxlUmVuZGVyID0gKG5hbWUsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKHRoaXMsIG5hbWUsIHt9LCBfZGF0YSlcbiAgfVxuXG4gIGNvbnN0IGJ1bmRsZVJlcXVpcmUgPSBuYW1lID0+IF9kYXRhID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAodGhpcywgbmFtZSwge30sIF9kYXRhKVxuICB9XG5cbiAgY29uc3QgYnVuZGxlRG9jdW1lbnQgPSB0aGlzLmRvY1xuXG4gIGxldCBmdW5jdGlvbkJvZHlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgY29kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGBmdW5jdGlvbiAoKSB7Li4ufWAgLT4gYHsuLi59YFxuICAgIC8vIG5vdCB2ZXJ5IHN0cmljdFxuICAgIGZ1bmN0aW9uQm9keSA9IGNvZGUudG9TdHJpbmcoKS5zdWJzdHIoMTIpXG4gIH1cbiAgZWxzZSBpZiAoY29kZSkge1xuICAgIGZ1bmN0aW9uQm9keSA9IGNvZGUudG9TdHJpbmcoKVxuICB9XG5cbiAgY29uc3QgeyBXWEVudmlyb25tZW50IH0gPSBnbG9iYWxcbiAgaWYgKFdYRW52aXJvbm1lbnQgJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSAhPT0gJ1dlYicpIHtcbiAgICBjb25zdCB0aW1lciA9IHRoaXMucmVxdWlyZU1vZHVsZSgndGltZXInKVxuICAgIGNvbnN0IHRpbWVyQVBJcyA9IHtcbiAgICAgIHNldFRpbWVvdXQ6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYXJnc1swXSguLi5hcmdzLnNsaWNlKDIpKVxuICAgICAgICB9XG4gICAgICAgIHRpbWVyLnNldFRpbWVvdXQoaGFuZGxlciwgYXJnc1sxXSlcbiAgICAgICAgcmV0dXJuIHRoaXMudWlkLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBzZXRJbnRlcnZhbDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0SW50ZXJ2YWwoaGFuZGxlciwgYXJnc1sxXSlcbiAgICAgICAgcmV0dXJuIHRoaXMudWlkLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBjbGVhclRpbWVvdXQ6IChuKSA9PiB7XG4gICAgICAgIHRpbWVyLmNsZWFyVGltZW91dChuKVxuICAgICAgfSxcbiAgICAgIGNsZWFySW50ZXJ2YWw6IChuKSA9PiB7XG4gICAgICAgIHRpbWVyLmNsZWFySW50ZXJ2YWwobilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdkZWZpbmUnLFxuICAgICAgJ3JlcXVpcmUnLFxuICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICdib290c3RyYXAnLFxuICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICdyZW5kZXInLFxuICAgICAgJ19fd2VleF9kZWZpbmVfXycsIC8vIGFsaWFzIGZvciBkZWZpbmVcbiAgICAgICdfX3dlZXhfYm9vdHN0cmFwX18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICAnc2V0VGltZW91dCcsXG4gICAgICAnc2V0SW50ZXJ2YWwnLFxuICAgICAgJ2NsZWFyVGltZW91dCcsXG4gICAgICAnY2xlYXJJbnRlcnZhbCcsXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgdGltZXJBUElzLnNldFRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuc2V0SW50ZXJ2YWwsXG4gICAgICB0aW1lckFQSXMuY2xlYXJUaW1lb3V0LFxuICAgICAgdGltZXJBUElzLmNsZWFySW50ZXJ2YWwpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXG4gICAgICAnZGVmaW5lJyxcbiAgICAgICdyZXF1aXJlJyxcbiAgICAgICdkb2N1bWVudCcsXG4gICAgICAnYm9vdHN0cmFwJyxcbiAgICAgICdyZWdpc3RlcicsXG4gICAgICAncmVuZGVyJyxcbiAgICAgICdfX3dlZXhfZGVmaW5lX18nLCAvLyBhbGlhcyBmb3IgZGVmaW5lXG4gICAgICAnX193ZWV4X2Jvb3RzdHJhcF9fJywgLy8gYWxpYXMgZm9yIGJvb3RzdHJhcFxuICAgICAgZnVuY3Rpb25Cb2R5XG4gICAgKVxuXG4gICAgZm4oXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVSZXF1aXJlLFxuICAgICAgYnVuZGxlRG9jdW1lbnQsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICBidW5kbGVSZWdpc3RlcixcbiAgICAgIGJ1bmRsZVJlbmRlcixcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBEZXN0b3J5IGFuIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcblxuICB0aGlzLmlkID0gJydcbiAgdGhpcy5vcHRpb25zID0gbnVsbFxuICB0aGlzLmJsb2NrcyA9IG51bGxcbiAgdGhpcy52bSA9IG51bGxcbiAgdGhpcy5kb2MgPSBudWxsXG4gIHRoaXMuY3VzdG9tQ29tcG9uZW50TWFwID0gbnVsbFxuICB0aGlzLmNhbGxiYWNrcyA9IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RFbGVtZW50ICgpIHtcbiAgY29uc3QgZG9jID0gdGhpcy5kb2MgfHwge31cbiAgY29uc3QgYm9keSA9IGRvYy5ib2R5IHx8IHt9XG4gIHJldHVybiBib2R5LnRvSlNPTiA/IGJvZHkudG9KU09OKCkgOiB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyZUV2ZW50IChyZWYsIHR5cGUsIGUsIGRvbUNoYW5nZXMpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gRmlyZSBhIFwiJHt0eXBlfVwiIGV2ZW50IG9uIGFuIGVsZW1lbnQoJHtyZWZ9KSBpbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICByZWYuc29tZSgocmVmKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5maXJlRXZlbnQocmVmLCB0eXBlLCBlKSAhPT0gZmFsc2VcbiAgICB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZWwgPSB0aGlzLmRvYy5nZXRSZWYocmVmKVxuXG4gIGlmIChlbCkge1xuICAgIHRoaXMuZG9jLmNsb3NlKClcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRvYy5maXJlRXZlbnQoZWwsIHR5cGUsIGUsIGRvbUNoYW5nZXMpXG4gICAgdGhpcy51cGRhdGVBY3Rpb25zKClcbiAgICB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVGaW5pc2goKVxuICAgIHRoaXMuZG9jLm9wZW4oKVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZWxlbWVudCByZWZlcmVuY2UgXCIke3JlZn1cImApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsYmFjayAoY2FsbGJhY2tJZCwgZGF0YSwgaWZLZWVwQWxpdmUpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gSW52b2tlIGEgY2FsbGJhY2soJHtjYWxsYmFja0lkfSkgd2l0aGAsIGRhdGEsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2UoJHt0aGlzLmlkfSlgKVxuXG4gIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5jYWxsYmFja3NbY2FsbGJhY2tJZF1cblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5kb2MuY2xvc2UoKVxuICAgIGNhbGxiYWNrKGRhdGEpIC8vIGRhdGEgaXMgYWxyZWFkeSBhIG9iamVjdCwgQHNlZTogbGliL3J1bnRpbWUvaW5kZXguanNcblxuICAgIGlmICh0eXBlb2YgaWZLZWVwQWxpdmUgPT09ICd1bmRlZmluZWQnIHx8IGlmS2VlcEFsaXZlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5jYWxsYmFja3NbY2FsbGJhY2tJZF0gPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnVwZGF0ZUZpbmlzaCgpXG4gICAgdGhpcy5kb2Mub3BlbigpXG4gICAgcmV0dXJuXG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGNhbGxiYWNrIGlkIFwiJHtjYWxsYmFja0lkfVwiYClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hEYXRhIChkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFJlZnJlc2ggd2l0aGAsIGRhdGEsXG4gICAgICAgICAgICBgaW4gaW5zdGFuY2VbJHt0aGlzLmlkfV1gKVxuXG4gIGNvbnN0IHZtID0gdGhpcy52bVxuXG4gIGlmICh2bSAmJiBkYXRhKSB7XG4gICAgdGhpcy5kb2MuY2xvc2UoKVxuICAgIGlmICh0eXBlb2Ygdm0ucmVmcmVzaERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZtLnJlZnJlc2hEYXRhKGRhdGEpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZXh0ZW5kKHZtLCBkYXRhKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLnJlZnJlc2hGaW5pc2goKVxuICAgIHRoaXMuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBkYXRhIFwiJHtkYXRhfVwiYClcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogYXBpIHRoYXQgaW52b2tlZCBieSBqcyBidW5kbGUgY29kZVxuICpcbiAqIC0gZGVmaW5lKG5hbWUsIGZhY3RvcnkpOiBkZWZpbmUgYSBuZXcgY29tcG9zZWQgY29tcG9uZW50IHR5cGVcbiAqIC0gYm9vdHN0cmFwKHR5cGUsIGNvbmZpZywgZGF0YSk6IHJlcXVpcmUgYSBjZXJ0YWluIHR5cGUgJlxuICogICAgICAgICByZW5kZXIgd2l0aCAob3B0aW9uYWwpIGRhdGFcbiAqXG4gKiBkZXByZWNhdGVkOlxuICogLSByZWdpc3Rlcih0eXBlLCBvcHRpb25zKTogcmVnaXN0ZXIgYSBuZXcgY29tcG9zZWQgY29tcG9uZW50IHR5cGVcbiAqIC0gcmVuZGVyKHR5cGUsIGRhdGEpOiByZW5kZXIgYnkgYSBjZXJ0YWluIHR5cGUgd2l0aCAob3B0aW9uYWwpIGRhdGFcbiAqIC0gcmVxdWlyZSh0eXBlKShkYXRhKTogcmVxdWlyZSBhIHR5cGUgdGhlbiByZW5kZXIgd2l0aCBkYXRhXG4gKi9cblxuaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInXG5pbXBvcnQgeyB0eXBvZiwgaXNQbGFpbk9iamVjdCB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgVm0gZnJvbSAnLi4vdm0nXG5pbXBvcnQgKiBhcyBkb3duZ3JhZGUgZnJvbSAnLi9kb3duZ3JhZGUnXG5cbmNvbnN0IFdFRVhfQ09NUE9ORU5UX1JFRyA9IC9eQHdlZXgtY29tcG9uZW50XFwvL1xuY29uc3QgV0VFWF9NT0RVTEVfUkVHID0gL15Ad2VleC1tb2R1bGVcXC8vXG5jb25zdCBOT1JNQUxfTU9EVUxFX1JFRyA9IC9eXFwuezEsMn1cXC8vXG5jb25zdCBKU19TVVJGSVhfUkVHID0gL1xcLmpzJC9cblxuY29uc3QgaXNXZWV4Q29tcG9uZW50ID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9DT01QT05FTlRfUkVHKVxuY29uc3QgaXNXZWV4TW9kdWxlID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9NT0RVTEVfUkVHKVxuY29uc3QgaXNOb3JtYWxNb2R1bGUgPSBuYW1lID0+ICEhbmFtZS5tYXRjaChOT1JNQUxfTU9EVUxFX1JFRylcbmNvbnN0IGlzTnBtTW9kdWxlID0gbmFtZSA9PiAhaXNXZWV4Q29tcG9uZW50KG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNXZWV4TW9kdWxlKG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNOb3JtYWxNb2R1bGUobmFtZSlcblxuZnVuY3Rpb24gcmVtb3ZlV2VleFByZWZpeCAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShXRUVYX0NPTVBPTkVOVF9SRUcsICcnKVxuICAgICAgICAgIC5yZXBsYWNlKFdFRVhfTU9EVUxFX1JFRywgJycpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUpTU3VyZml4IChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKEpTX1NVUkZJWF9SRUcsICcnKVxufVxuXG5sZXQgY29tbW9uTW9kdWxlcyA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbW1vbk1vZHVsZXMgKCkge1xuICBjb21tb25Nb2R1bGVzID0ge31cbn1cblxuLy8gZGVmaW5lKG5hbWUsIGZhY3RvcnkpIGZvciBwcmltYXJ5IHVzYWdlXG4vLyBvclxuLy8gZGVmaW5lKG5hbWUsIGRlcHMsIGZhY3RvcnkpIGZvciBjb21wYXRpYmlsaXR5XG4vLyBOb3RpY2U6IERPIE5PVCB1c2UgZnVuY3Rpb24gZGVmaW5lKCkge30sXG4vLyBpdCB3aWxsIGNhdXNlIGVycm9yIGFmdGVyIGJ1aWxkZWQgYnkgd2VicGFja1xuZXhwb3J0IGNvbnN0IGRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBkZXBzLCBmYWN0b3J5KSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCAke25hbWV9YClcblxuICBpZiAodHlwb2YoZGVwcykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmYWN0b3J5ID0gZGVwc1xuICAgIGRlcHMgPSBbXVxuICB9XG5cbiAgY29uc3QgX3JlcXVpcmUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBjbGVhbk5hbWVcblxuICAgIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVDb21wb25lbnQoY2xlYW5OYW1lKVxuICAgIH1cbiAgICBpZiAoaXNXZWV4TW9kdWxlKG5hbWUpKSB7XG4gICAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICByZXR1cm4gdGhpcy5yZXF1aXJlTW9kdWxlKGNsZWFuTmFtZSlcbiAgICB9XG4gICAgaWYgKGlzTm9ybWFsTW9kdWxlKG5hbWUpKSB7XG4gICAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgICAgcmV0dXJuIGNvbW1vbk1vZHVsZXNbbmFtZV1cbiAgICB9XG4gICAgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgICAgcmV0dXJuIGNvbW1vbk1vZHVsZXNbbmFtZV1cbiAgICB9XG4gIH1cbiAgY29uc3QgX21vZHVsZSA9IHsgZXhwb3J0czoge319XG5cbiAgbGV0IGNsZWFuTmFtZVxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuXG4gICAgZmFjdG9yeShfcmVxdWlyZSwgX21vZHVsZS5leHBvcnRzLCBfbW9kdWxlKVxuXG4gICAgdGhpcy5yZWdpc3RlckNvbXBvbmVudChjbGVhbk5hbWUsIF9tb2R1bGUuZXhwb3J0cylcbiAgfVxuICBlbHNlIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBWbS5yZWdpc3Rlck1vZHVsZXMoe1xuICAgICAgW2NsZWFuTmFtZV06IF9tb2R1bGUuZXhwb3J0c1xuICAgIH0pXG4gIH1cbiAgZWxzZSBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuXG4gICAgZmFjdG9yeShfcmVxdWlyZSwgX21vZHVsZS5leHBvcnRzLCBfbW9kdWxlKVxuXG4gICAgY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gX21vZHVsZS5leHBvcnRzXG4gIH1cbiAgZWxzZSBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuXG4gICAgZmFjdG9yeShfcmVxdWlyZSwgX21vZHVsZS5leHBvcnRzLCBfbW9kdWxlKVxuXG4gICAgY29uc3QgZXhwb3J0cyA9IF9tb2R1bGUuZXhwb3J0c1xuICAgIGlmIChleHBvcnRzLnRlbXBsYXRlIHx8XG4gICAgICAgIGV4cG9ydHMuc3R5bGUgfHxcbiAgICAgICAgZXhwb3J0cy5tZXRob2RzKSB7XG4gICAgICAvLyBkb3duZ3JhZGUgdG8gb2xkIGRlZmluZSBtZXRob2QgKGRlZmluZSgnY29tcG9uZW50TmFtZScsIGZhY3RvcnkpKVxuICAgICAgLy8gdGhlIGV4cG9ydHMgY29udGFpbiBvbmUga2V5IG9mIHRlbXBsYXRlLCBzdHlsZSBvciBtZXRob2RzXG4gICAgICAvLyBidXQgaXQgaGFzIHJpc2shISFcbiAgICAgIHRoaXMucmVnaXN0ZXJDb21wb25lbnQoY2xlYW5OYW1lLCBleHBvcnRzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbW1vbk1vZHVsZXNbY2xlYW5OYW1lXSA9IF9tb2R1bGUuZXhwb3J0c1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwIChhcHAsIG5hbWUsIGNvbmZpZywgZGF0YSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBib290c3RyYXAgZm9yICR7bmFtZX1gKVxuXG4gIGxldCBjbGVhbk5hbWVcblxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAvLyBjaGVjayBpZiBkZWZpbmUgYnkgb2xkICdkZWZpbmUnIG1ldGhvZFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghYXBwLmN1c3RvbUNvbXBvbmVudE1hcFtjbGVhbk5hbWVdKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBJdCdzIG5vdCBhIGNvbXBvbmVudDogJHtuYW1lfWApXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYFdyb25nIGNvbXBvbmVudCBuYW1lOiAke25hbWV9YClcbiAgfVxuXG4gIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgaWYgKHR5cGVvZiBjb25maWcudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgICFzZW12ZXIuc2F0aXNmaWVzKGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24sXG4gICAgICBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEpTIEJ1bmRsZSB2ZXJzaW9uOiAke2NvbmZpZy50cmFuc2Zvcm1lclZlcnNpb259IGAgK1xuICAgICAgYG5vdCBjb21wYXRpYmxlIHdpdGggJHtnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9ufWApXG4gIH1cblxuICBjb25zdCBfY2hlY2tEb3duZ3JhZGUgPSBkb3duZ3JhZGUuY2hlY2soY29uZmlnLmRvd25ncmFkZSlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChfY2hlY2tEb3duZ3JhZGUuaXNEb3duZ3JhZGUpIHtcbiAgICBhcHAuY2FsbFRhc2tzKFt7XG4gICAgICBtb2R1bGU6ICdpbnN0YW5jZVdyYXAnLFxuICAgICAgbWV0aG9kOiAnZXJyb3InLFxuICAgICAgYXJnczogW1xuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuZXJyb3JUeXBlLFxuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuY29kZSxcbiAgICAgICAgX2NoZWNrRG93bmdyYWRlLmVycm9yTWVzc2FnZVxuICAgICAgXVxuICAgIH1dKVxuICAgIHJldHVybiBuZXcgRXJyb3IoYERvd25ncmFkZVske19jaGVja0Rvd25ncmFkZS5jb2RlfV06ICR7X2NoZWNrRG93bmdyYWRlLmVycm9yTWVzc2FnZX1gKVxuICB9XG5cbiAgYXBwLnZtID0gbmV3IFZtKGNsZWFuTmFtZSwgbnVsbCwgeyBfYXBwOiBhcHAgfSwgbnVsbCwgZGF0YSlcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIgKHR5cGUsIG9wdGlvbnMpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBSZWdpc3RlciBpcyBkZXByZWNhdGVkLCBwbGVhc2UgaW5zdGFsbCBsYXN0ZXN0IHRyYW5zZm9ybWVyLicpXG4gIHRoaXMucmVnaXN0ZXJDb21wb25lbnQodHlwZSwgb3B0aW9ucylcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlLmpzXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gU2VtVmVyO1xuXG4vLyBUaGUgZGVidWcgZnVuY3Rpb24gaXMgZXhjbHVkZWQgZW50aXJlbHkgZnJvbSB0aGUgbWluaWZpZWQgdmVyc2lvbi5cbi8qIG5vbWluICovIHZhciBkZWJ1Zztcbi8qIG5vbWluICovIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudiAmJlxuICAgIC8qIG5vbWluICovIHByb2Nlc3MuZW52Lk5PREVfREVCVUcgJiZcbiAgICAvKiBub21pbiAqLyAvXFxic2VtdmVyXFxiL2kudGVzdChwcm9jZXNzLmVudi5OT0RFX0RFQlVHKSlcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHtcbiAgICAvKiBub21pbiAqLyB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgLyogbm9taW4gKi8gYXJncy51bnNoaWZ0KCdTRU1WRVInKTtcbiAgICAvKiBub21pbiAqLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAvKiBub21pbiAqLyB9O1xuLyogbm9taW4gKi8gZWxzZVxuICAvKiBub21pbiAqLyBkZWJ1ZyA9IGZ1bmN0aW9uKCkge307XG5cbi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmV4cG9ydHMuU0VNVkVSX1NQRUNfVkVSU0lPTiA9ICcyLjAuMCc7XG5cbnZhciBNQVhfTEVOR1RIID0gMjU2O1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fCA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vLyBUaGUgYWN0dWFsIHJlZ2V4cHMgZ28gb24gZXhwb3J0cy5yZVxudmFyIHJlID0gZXhwb3J0cy5yZSA9IFtdO1xudmFyIHNyYyA9IGV4cG9ydHMuc3JjID0gW107XG52YXIgUiA9IDA7XG5cbi8vIFRoZSBmb2xsb3dpbmcgUmVndWxhciBFeHByZXNzaW9ucyBjYW4gYmUgdXNlZCBmb3IgdG9rZW5pemluZyxcbi8vIHZhbGlkYXRpbmcsIGFuZCBwYXJzaW5nIFNlbVZlciB2ZXJzaW9uIHN0cmluZ3MuXG5cbi8vICMjIE51bWVyaWMgSWRlbnRpZmllclxuLy8gQSBzaW5nbGUgYDBgLCBvciBhIG5vbi16ZXJvIGRpZ2l0IGZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBkaWdpdHMuXG5cbnZhciBOVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUl0gPSAnMHxbMS05XVxcXFxkKic7XG52YXIgTlVNRVJJQ0lERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSA9ICdbMC05XSsnO1xuXG5cbi8vICMjIE5vbi1udW1lcmljIElkZW50aWZpZXJcbi8vIFplcm8gb3IgbW9yZSBkaWdpdHMsIGZvbGxvd2VkIGJ5IGEgbGV0dGVyIG9yIGh5cGhlbiwgYW5kIHRoZW4gemVybyBvclxuLy8gbW9yZSBsZXR0ZXJzLCBkaWdpdHMsIG9yIGh5cGhlbnMuXG5cbnZhciBOT05OVU1FUklDSURFTlRJRklFUiA9IFIrKztcbnNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5cblxuLy8gIyMgTWFpbiBWZXJzaW9uXG4vLyBUaHJlZSBkb3Qtc2VwYXJhdGVkIG51bWVyaWMgaWRlbnRpZmllcnMuXG5cbnZhciBNQUlOVkVSU0lPTiA9IFIrKztcbnNyY1tNQUlOVkVSU0lPTl0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIE1BSU5WRVJTSU9OTE9PU0UgPSBSKys7XG5zcmNbTUFJTlZFUlNJT05MT09TRV0gPSAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKVxcXFwuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gKyAnKSc7XG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb24gSWRlbnRpZmllclxuLy8gQSBudW1lcmljIGlkZW50aWZpZXIsIG9yIGEgbm9uLW51bWVyaWMgaWRlbnRpZmllci5cblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSA9ICcoPzonICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxudmFyIFBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnfCcgKyBzcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdICsgJyknO1xuXG5cbi8vICMjIFByZS1yZWxlYXNlIFZlcnNpb25cbi8vIEh5cGhlbiwgZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgZG90LXNlcGFyYXRlZCBwcmUtcmVsZWFzZSB2ZXJzaW9uXG4vLyBpZGVudGlmaWVycy5cblxudmFyIFBSRVJFTEVBU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRV0gPSAnKD86LSgnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSXSArICcpKikpJztcblxudmFyIFBSRVJFTEVBU0VMT09TRSA9IFIrKztcbnNyY1tQUkVSRUxFQVNFTE9PU0VdID0gJyg/Oi0/KCcgKyBzcmNbUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4nICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICsgJykqKSknO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG52YXIgQlVJTERJREVOVElGSUVSID0gUisrO1xuc3JjW0JVSUxESURFTlRJRklFUl0gPSAnWzAtOUEtWmEtei1dKyc7XG5cbi8vICMjIEJ1aWxkIE1ldGFkYXRhXG4vLyBQbHVzIHNpZ24sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIHBlcmlvZC1zZXBhcmF0ZWQgYnVpbGQgbWV0YWRhdGFcbi8vIGlkZW50aWZpZXJzLlxuXG52YXIgQlVJTEQgPSBSKys7XG5zcmNbQlVJTERdID0gJyg/OlxcXFwrKCcgKyBzcmNbQlVJTERJREVOVElGSUVSXSArXG4gICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tCVUlMRElERU5USUZJRVJdICsgJykqKSknO1xuXG5cbi8vICMjIEZ1bGwgVmVyc2lvbiBTdHJpbmdcbi8vIEEgbWFpbiB2ZXJzaW9uLCBmb2xsb3dlZCBvcHRpb25hbGx5IGJ5IGEgcHJlLXJlbGVhc2UgdmVyc2lvbiBhbmRcbi8vIGJ1aWxkIG1ldGFkYXRhLlxuXG4vLyBOb3RlIHRoYXQgdGhlIG9ubHkgbWFqb3IsIG1pbm9yLCBwYXRjaCwgYW5kIHByZS1yZWxlYXNlIHNlY3Rpb25zIG9mXG4vLyB0aGUgdmVyc2lvbiBzdHJpbmcgYXJlIGNhcHR1cmluZyBncm91cHMuICBUaGUgYnVpbGQgbWV0YWRhdGEgaXMgbm90IGFcbi8vIGNhcHR1cmluZyBncm91cCwgYmVjYXVzZSBpdCBzaG91bGQgbm90IGV2ZXIgYmUgdXNlZCBpbiB2ZXJzaW9uXG4vLyBjb21wYXJpc29uLlxuXG52YXIgRlVMTCA9IFIrKztcbnZhciBGVUxMUExBSU4gPSAndj8nICsgc3JjW01BSU5WRVJTSU9OXSArXG4gICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG5zcmNbRlVMTF0gPSAnXicgKyBGVUxMUExBSU4gKyAnJCc7XG5cbi8vIGxpa2UgZnVsbCwgYnV0IGFsbG93cyB2MS4yLjMgYW5kID0xLjIuMywgd2hpY2ggcGVvcGxlIGRvIHNvbWV0aW1lcy5cbi8vIGFsc28sIDEuMC4wYWxwaGExIChwcmVyZWxlYXNlIHdpdGhvdXQgdGhlIGh5cGhlbikgd2hpY2ggaXMgcHJldHR5XG4vLyBjb21tb24gaW4gdGhlIG5wbSByZWdpc3RyeS5cbnZhciBMT09TRVBMQUlOID0gJ1t2PVxcXFxzXSonICsgc3JjW01BSU5WRVJTSU9OTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnPycgK1xuICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nO1xuXG52YXIgTE9PU0UgPSBSKys7XG5zcmNbTE9PU0VdID0gJ14nICsgTE9PU0VQTEFJTiArICckJztcblxudmFyIEdUTFQgPSBSKys7XG5zcmNbR1RMVF0gPSAnKCg/Ojx8Pik/PT8pJztcblxuLy8gU29tZXRoaW5nIGxpa2UgXCIyLipcIiBvciBcIjEuMi54XCIuXG4vLyBOb3RlIHRoYXQgXCJ4LnhcIiBpcyBhIHZhbGlkIHhSYW5nZSBpZGVudGlmZXIsIG1lYW5pbmcgXCJhbnkgdmVyc2lvblwiXG4vLyBPbmx5IHRoZSBmaXJzdCBpdGVtIGlzIHN0cmljdGx5IHJlcXVpcmVkLlxudmFyIFhSQU5HRUlERU5USUZJRVJMT09TRSA9IFIrKztcbnNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdID0gc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJ3x4fFh8XFxcXConO1xudmFyIFhSQU5HRUlERU5USUZJRVIgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUl0gPSBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJ3x4fFh8XFxcXConO1xuXG52YXIgWFJBTkdFUExBSU4gPSBSKys7XG5zcmNbWFJBTkdFUExBSU5dID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFXSArICcpPycgK1xuICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRVBMQUlOTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFUExBSU5MT09TRV0gPSAnW3Y9XFxcXHNdKignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzonICsgc3JjW1BSRVJFTEVBU0VMT09TRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyY1tCVUlMRF0gKyAnPycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyk/KT8nO1xuXG52YXIgWFJBTkdFID0gUisrO1xuc3JjW1hSQU5HRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgWFJBTkdFTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFTE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWQ7XG4gICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKVxuICAgICAgICAgIHJldHVybiBudW07XG4gICAgICB9XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSk7XG5cbiAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXTtcbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYWpvciArICcuJyArIHRoaXMubWlub3IgKyAnLicgKyB0aGlzLnBhdGNoO1xuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICB0aGlzLnZlcnNpb24gKz0gJy0nICsgdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKTtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5sb29zZSwgb3RoZXIpO1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZU1haW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWFqb3IsIG90aGVyLm1ham9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWlub3IsIG90aGVyLm1pbm9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucGF0Y2gsIG90aGVyLnBhdGNoKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZVByZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIC0xO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAwO1xuXG4gIHZhciBpID0gMDtcbiAgZG8ge1xuICAgIHZhciBhID0gdGhpcy5wcmVyZWxlYXNlW2ldO1xuICAgIHZhciBiID0gb3RoZXIucHJlcmVsZWFzZVtpXTtcbiAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYik7XG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMDtcbiAgICBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgZWxzZSBpZiAoYSA9PT0gYilcbiAgICAgIGNvbnRpbnVlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYik7XG4gIH0gd2hpbGUgKCsraSk7XG59O1xuXG4vLyBwcmVtaW5vciB3aWxsIGJ1bXAgdGhlIHZlcnNpb24gdXAgdG8gdGhlIG5leHQgbWlub3IgcmVsZWFzZSwgYW5kIGltbWVkaWF0ZWx5XG4vLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG5TZW1WZXIucHJvdG90eXBlLmluYyA9IGZ1bmN0aW9uKHJlbGVhc2UsIGlkZW50aWZpZXIpIHtcbiAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAvLyBwcmVwYXRjaC5cbiAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWFqb3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgLy8gMS4wLjAtNSBidW1wcyB0byAxLjAuMFxuICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgIGlmICh0aGlzLm1pbm9yICE9PSAwIHx8IHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlub3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnBhdGNoKys7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgLy8gMS4wLjAgXCJwcmVcIiB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgIGNhc2UgJ3ByZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gWzBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXJlbGVhc2VbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rKztcbiAgICAgICAgICAgIGkgPSAtMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IC0xKSAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMCk7XG4gICAgICB9XG4gICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAvLyAxLjIuMC1iZXRhLmZvb2JseiBvciAxLjIuMC1iZXRhIGJ1bXBzIHRvIDEuMi4wLWJldGEuMFxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlWzBdID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpXG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICcgKyByZWxlYXNlKTtcbiAgfVxuICB0aGlzLmZvcm1hdCgpO1xuICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzLmluYyA9IGluYztcbmZ1bmN0aW9uIGluYyh2ZXJzaW9uLCByZWxlYXNlLCBsb29zZSwgaWRlbnRpZmllcikge1xuICBpZiAodHlwZW9mKGxvb3NlKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyID0gbG9vc2U7XG4gICAgbG9vc2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllcikudmVyc2lvbjtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLmRpZmYgPSBkaWZmO1xuZnVuY3Rpb24gZGlmZih2ZXJzaW9uMSwgdmVyc2lvbjIpIHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdjEgPSBwYXJzZSh2ZXJzaW9uMSk7XG4gICAgdmFyIHYyID0gcGFyc2UodmVyc2lvbjIpO1xuICAgIGlmICh2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ByZScra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdwcmVyZWxlYXNlJztcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuY29tcGFyZUlkZW50aWZpZXJzID0gY29tcGFyZUlkZW50aWZpZXJzO1xuXG52YXIgbnVtZXJpYyA9IC9eWzAtOV0rJC87XG5mdW5jdGlvbiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICB2YXIgYW51bSA9IG51bWVyaWMudGVzdChhKTtcbiAgdmFyIGJudW0gPSBudW1lcmljLnRlc3QoYik7XG5cbiAgaWYgKGFudW0gJiYgYm51bSkge1xuICAgIGEgPSArYTtcbiAgICBiID0gK2I7XG4gIH1cblxuICByZXR1cm4gKGFudW0gJiYgIWJudW0pID8gLTEgOlxuICAgICAgICAgKGJudW0gJiYgIWFudW0pID8gMSA6XG4gICAgICAgICBhIDwgYiA/IC0xIDpcbiAgICAgICAgIGEgPiBiID8gMSA6XG4gICAgICAgICAwO1xufVxuXG5leHBvcnRzLnJjb21wYXJlSWRlbnRpZmllcnMgPSByY29tcGFyZUlkZW50aWZpZXJzO1xuZnVuY3Rpb24gcmNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSk7XG59XG5cbmV4cG9ydHMubWFqb3IgPSBtYWpvcjtcbmZ1bmN0aW9uIG1ham9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvcjtcbn1cblxuZXhwb3J0cy5taW5vciA9IG1pbm9yO1xuZnVuY3Rpb24gbWlub3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1pbm9yO1xufVxuXG5leHBvcnRzLnBhdGNoID0gcGF0Y2g7XG5mdW5jdGlvbiBwYXRjaChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2g7XG59XG5cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKGIpO1xufVxuXG5leHBvcnRzLmNvbXBhcmVMb29zZSA9IGNvbXBhcmVMb29zZTtcbmZ1bmN0aW9uIGNvbXBhcmVMb29zZShhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIHRydWUpO1xufVxuXG5leHBvcnRzLnJjb21wYXJlID0gcmNvbXBhcmU7XG5mdW5jdGlvbiByY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShiLCBhLCBsb29zZSk7XG59XG5cbmV4cG9ydHMuc29ydCA9IHNvcnQ7XG5mdW5jdGlvbiBzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5yc29ydCA9IHJzb3J0O1xuZnVuY3Rpb24gcnNvcnQobGlzdCwgbG9vc2UpIHtcbiAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMucmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KTtcbn1cblxuZXhwb3J0cy5ndCA9IGd0O1xuZnVuY3Rpb24gZ3QoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID4gMDtcbn1cblxuZXhwb3J0cy5sdCA9IGx0O1xuZnVuY3Rpb24gbHQoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDwgMDtcbn1cblxuZXhwb3J0cy5lcSA9IGVxO1xuZnVuY3Rpb24gZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwO1xufVxuXG5leHBvcnRzLm5lcSA9IG5lcTtcbmZ1bmN0aW9uIG5lcShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgIT09IDA7XG59XG5cbmV4cG9ydHMuZ3RlID0gZ3RlO1xuZnVuY3Rpb24gZ3RlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+PSAwO1xufVxuXG5leHBvcnRzLmx0ZSA9IGx0ZTtcbmZ1bmN0aW9uIGx0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMDtcbn1cblxuZXhwb3J0cy5jbXAgPSBjbXA7XG5mdW5jdGlvbiBjbXAoYSwgb3AsIGIsIGxvb3NlKSB7XG4gIHZhciByZXQ7XG4gIHN3aXRjaCAob3ApIHtcbiAgICBjYXNlICc9PT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JykgYSA9IGEudmVyc2lvbjtcbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpIGIgPSBiLnZlcnNpb247XG4gICAgICByZXQgPSBhID09PSBiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnIT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSAhPT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyc6IGNhc2UgJz0nOiBjYXNlICc9PSc6IHJldCA9IGVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnIT0nOiByZXQgPSBuZXEoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+JzogcmV0ID0gZ3QoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc+PSc6IHJldCA9IGd0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzwnOiByZXQgPSBsdChhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJzw9JzogcmV0ID0gbHRlKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBvcGVyYXRvcjogJyArIG9wKTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnRzLkNvbXBhcmF0b3IgPSBDb21wYXJhdG9yO1xuZnVuY3Rpb24gQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICBpZiAoY29tcC5sb29zZSA9PT0gbG9vc2UpXG4gICAgICByZXR1cm4gY29tcDtcbiAgICBlbHNlXG4gICAgICBjb21wID0gY29tcC52YWx1ZTtcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSlcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuXG4gIGRlYnVnKCdjb21wYXJhdG9yJywgY29tcCwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHRoaXMucGFyc2UoY29tcCk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICBlbHNlXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMub3BlcmF0b3IgKyB0aGlzLnNlbXZlci52ZXJzaW9uO1xuXG4gIGRlYnVnKCdjb21wJywgdGhpcyk7XG59XG5cbnZhciBBTlkgPSB7fTtcbkNvbXBhcmF0b3IucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oY29tcCkge1xuICB2YXIgciA9IHRoaXMubG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBtID0gY29tcC5tYXRjaChyKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjb21wYXJhdG9yOiAnICsgY29tcCk7XG5cbiAgdGhpcy5vcGVyYXRvciA9IG1bMV07XG4gIGlmICh0aGlzLm9wZXJhdG9yID09PSAnPScpXG4gICAgdGhpcy5vcGVyYXRvciA9ICcnO1xuXG4gIC8vIGlmIGl0IGxpdGVyYWxseSBpcyBqdXN0ICc+JyBvciAnJyB0aGVuIGFsbG93IGFueXRoaW5nLlxuICBpZiAoIW1bMl0pXG4gICAgdGhpcy5zZW12ZXIgPSBBTlk7XG4gIGVsc2VcbiAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5sb29zZSk7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy52YWx1ZTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSlcbiAgICByZXR1cm4gdHJ1ZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIHJldHVybiBjbXAodmVyc2lvbiwgdGhpcy5vcGVyYXRvciwgdGhpcy5zZW12ZXIsIHRoaXMubG9vc2UpO1xufTtcblxuXG5leHBvcnRzLlJhbmdlID0gUmFuZ2U7XG5mdW5jdGlvbiBSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgaWYgKChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSAmJiByYW5nZS5sb29zZSA9PT0gbG9vc2UpXG4gICAgcmV0dXJuIHJhbmdlO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSYW5nZSkpXG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHRoaXMubG9vc2UgPSBsb29zZTtcblxuICAvLyBGaXJzdCwgc3BsaXQgYmFzZWQgb24gYm9vbGVhbiBvciB8fFxuICB0aGlzLnJhdyA9IHJhbmdlO1xuICB0aGlzLnNldCA9IHJhbmdlLnNwbGl0KC9cXHMqXFx8XFx8XFxzKi8pLm1hcChmdW5jdGlvbihyYW5nZSkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlUmFuZ2UocmFuZ2UudHJpbSgpKTtcbiAgfSwgdGhpcykuZmlsdGVyKGZ1bmN0aW9uKGMpIHtcbiAgICAvLyB0aHJvdyBvdXQgYW55IHRoYXQgYXJlIG5vdCByZWxldmFudCBmb3Igd2hhdGV2ZXIgcmVhc29uXG4gICAgcmV0dXJuIGMubGVuZ3RoO1xuICB9KTtcblxuICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgU2VtVmVyIFJhbmdlOiAnICsgcmFuZ2UpO1xuICB9XG5cbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuUmFuZ2UucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJhbmdlID0gdGhpcy5zZXQubWFwKGZ1bmN0aW9uKGNvbXBzKSB7XG4gICAgcmV0dXJuIGNvbXBzLmpvaW4oJyAnKS50cmltKCk7XG4gIH0pLmpvaW4oJ3x8JykudHJpbSgpO1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5yYW5nZTtcbn07XG5cblJhbmdlLnByb3RvdHlwZS5wYXJzZVJhbmdlID0gZnVuY3Rpb24ocmFuZ2UpIHtcbiAgdmFyIGxvb3NlID0gdGhpcy5sb29zZTtcbiAgcmFuZ2UgPSByYW5nZS50cmltKCk7XG4gIGRlYnVnKCdyYW5nZScsIHJhbmdlLCBsb29zZSk7XG4gIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICB2YXIgaHIgPSBsb29zZSA/IHJlW0hZUEhFTlJBTkdFTE9PU0VdIDogcmVbSFlQSEVOUkFOR0VdO1xuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UpO1xuICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSk7XG4gIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbQ09NUEFSQVRPUlRSSU1dLCBjb21wYXJhdG9yVHJpbVJlcGxhY2UpO1xuICBkZWJ1ZygnY29tcGFyYXRvciB0cmltJywgcmFuZ2UsIHJlW0NPTVBBUkFUT1JUUklNXSk7XG5cbiAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtUSUxERVRSSU1dLCB0aWxkZVRyaW1SZXBsYWNlKTtcblxuICAvLyBgXiAxLjIuM2AgPT4gYF4xLjIuM2BcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpO1xuXG4gIC8vIG5vcm1hbGl6ZSBzcGFjZXNcbiAgcmFuZ2UgPSByYW5nZS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKTtcblxuICAvLyBBdCB0aGlzIHBvaW50LCB0aGUgcmFuZ2UgaXMgY29tcGxldGVseSB0cmltbWVkIGFuZFxuICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gIHZhciBjb21wUmUgPSBsb29zZSA/IHJlW0NPTVBBUkFUT1JMT09TRV0gOiByZVtDT01QQVJBVE9SXTtcbiAgdmFyIHNldCA9IHJhbmdlLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpLnNwbGl0KC9cXHMrLyk7XG4gIGlmICh0aGlzLmxvb3NlKSB7XG4gICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICBzZXQgPSBzZXQuZmlsdGVyKGZ1bmN0aW9uKGNvbXApIHtcbiAgICAgIHJldHVybiAhIWNvbXAubWF0Y2goY29tcFJlKTtcbiAgICB9KTtcbiAgfVxuICBzZXQgPSBzZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gbmV3IENvbXBhcmF0b3IoY29tcCwgbG9vc2UpO1xuICB9KTtcblxuICByZXR1cm4gc2V0O1xufTtcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuZXhwb3J0cy50b0NvbXBhcmF0b3JzID0gdG9Db21wYXJhdG9ycztcbmZ1bmN0aW9uIHRvQ29tcGFyYXRvcnMocmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5zZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gY29tcC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICB9KTtcbn1cblxuLy8gY29tcHJpc2VkIG9mIHhyYW5nZXMsIHRpbGRlcywgc3RhcnMsIGFuZCBndGx0J3MgYXQgdGhpcyBwb2ludC5cbi8vIGFscmVhZHkgcmVwbGFjZWQgdGhlIGh5cGhlbiByYW5nZXNcbi8vIHR1cm4gaW50byBhIHNldCBvZiBKVVNUIGNvbXBhcmF0b3JzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjb21wJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3RpbGRlcycsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygneHJhbmdlJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpO1xuICBkZWJ1Zygnc3RhcnMnLCBjb21wKTtcbiAgcmV0dXJuIGNvbXA7XG59XG5cbmZ1bmN0aW9uIGlzWChpZCkge1xuICByZXR1cm4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonO1xufVxuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMFxuLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMFxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSkge1xuICB2YXIgciA9IGxvb3NlID8gcmVbVElMREVMT09TRV0gOiByZVtUSUxERV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKVxuICAgICAgLy8gfjEuMiA9PSA+PTEuMi4wIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9IGVsc2VcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjBcbmZ1bmN0aW9uIHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgbG9vc2UpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbQ0FSRVRMT09TRV0gOiByZVtDQVJFVF07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJyk7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBsb29zZSk7XG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSkge1xuICBjb21wID0gY29tcC50cmltKCk7XG4gIHZhciByID0gbG9vc2UgPyByZVtYUkFOR0VMT09TRV0gOiByZVtYUkFOR0VdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHhNID0gaXNYKE0pO1xuICAgIHZhciB4bSA9IHhNIHx8IGlzWChtKTtcbiAgICB2YXIgeHAgPSB4bSB8fCBpc1gocCk7XG4gICAgdmFyIGFueVggPSB4cDtcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WClcbiAgICAgIGd0bHQgPSAnJztcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBmb3JiaWRkZW5cbiAgICAgICAgcmV0ID0gJyonO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pXG4gICAgICAgIG0gPSAwO1xuICAgICAgaWYgKHhwKVxuICAgICAgICBwID0gMDtcblxuICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICAvLyA+MS4yLjMgPT4gPj0gMS4yLjRcbiAgICAgICAgZ3RsdCA9ICc+PSc7XG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCc7XG4gICAgICAgIGlmICh4bSlcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0ID0gZ3RsdCArIE0gKyAnLicgKyBtICsgJy4nICsgcDtcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmZ1bmN0aW9uIHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgbG9vc2UpO1xuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2UocmVbU1RBUl0sICcnKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbSFlQSEVOUkFOR0VdKVxuLy8gTSwgbSwgcGF0Y2gsIHByZXJlbGVhc2UsIGJ1aWxkXG4vLyAxLjIgLSAzLjQuNSA9PiA+PTEuMi4wIDw9My40LjVcbi8vIDEuMi4zIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjBcbmZ1bmN0aW9uIGh5cGhlblJlcGxhY2UoJDAsXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gICAgICAgICAgICAgICAgICAgICAgIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSB7XG5cbiAgaWYgKGlzWChmTSkpXG4gICAgZnJvbSA9ICcnO1xuICBlbHNlIGlmIChpc1goZm0pKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWChmcCkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuJyArIGZtICsgJy4wJztcbiAgZWxzZVxuICAgIGZyb20gPSAnPj0nICsgZnJvbTtcblxuICBpZiAoaXNYKHRNKSlcbiAgICB0byA9ICcnO1xuICBlbHNlIGlmIChpc1godG0pKVxuICAgIHRvID0gJzwnICsgKCt0TSArIDEpICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1godHApKVxuICAgIHRvID0gJzwnICsgdE0gKyAnLicgKyAoK3RtICsgMSkgKyAnLjAnO1xuICBlbHNlIGlmICh0cHIpXG4gICAgdG8gPSAnPD0nICsgdE0gKyAnLicgKyB0bSArICcuJyArIHRwICsgJy0nICsgdHByO1xuICBlbHNlXG4gICAgdG8gPSAnPD0nICsgdG87XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKTtcbn1cblxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgaWYgKCF2ZXJzaW9uKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbikpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiB0ZXN0U2V0KHNldCwgdmVyc2lvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZyhzZXRbaV0uc2VtdmVyKTtcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyO1xuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5zYXRpc2ZpZXMgPSBzYXRpc2ZpZXM7XG5mdW5jdGlvbiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbik7XG59XG5cbmV4cG9ydHMubWF4U2F0aXNmeWluZyA9IG1heFNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtYXhTYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIHZlcnNpb25zLmZpbHRlcihmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpO1xuICB9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gcmNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLm1pblNhdGlzZnlpbmcgPSBtaW5TYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWluU2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpO1xuICB9KVswXSB8fCBudWxsO1xufVxuXG5leHBvcnRzLnZhbGlkUmFuZ2UgPSB2YWxpZFJhbmdlO1xuZnVuY3Rpb24gdmFsaWRSYW5nZShyYW5nZSwgbG9vc2UpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXR1cm4gJyonIGluc3RlYWQgb2YgJycgc28gdGhhdCB0cnV0aGluZXNzIHdvcmtzLlxuICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBpZiBpdCdzIGludmFsaWQgYW55d2F5XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpLnJhbmdlIHx8ICcqJztcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBsZXNzIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2VcbmV4cG9ydHMubHRyID0gbHRyO1xuZnVuY3Rpb24gbHRyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJzwnLCBsb29zZSk7XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGdyZWF0ZXIgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZS5cbmV4cG9ydHMuZ3RyID0gZ3RyO1xuZnVuY3Rpb24gZ3RyKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgJz4nLCBsb29zZSk7XG59XG5cbmV4cG9ydHMub3V0c2lkZSA9IG91dHNpZGU7XG5mdW5jdGlvbiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCBoaWxvLCBsb29zZSkge1xuICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSk7XG4gIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG5cbiAgdmFyIGd0Zm4sIGx0ZWZuLCBsdGZuLCBjb21wLCBlY29tcDtcbiAgc3dpdGNoIChoaWxvKSB7XG4gICAgY2FzZSAnPic6XG4gICAgICBndGZuID0gZ3Q7XG4gICAgICBsdGVmbiA9IGx0ZTtcbiAgICAgIGx0Zm4gPSBsdDtcbiAgICAgIGNvbXAgPSAnPic7XG4gICAgICBlY29tcCA9ICc+PSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICc8JzpcbiAgICAgIGd0Zm4gPSBsdDtcbiAgICAgIGx0ZWZuID0gZ3RlO1xuICAgICAgbHRmbiA9IGd0O1xuICAgICAgY29tcCA9ICc8JztcbiAgICAgIGVjb21wID0gJzw9JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNdXN0IHByb3ZpZGUgYSBoaWxvIHZhbCBvZiBcIjxcIiBvciBcIj5cIicpO1xuICB9XG5cbiAgLy8gSWYgaXQgc2F0aXNpZmVzIHRoZSByYW5nZSBpdCBpcyBub3Qgb3V0c2lkZVxuICBpZiAoc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBGcm9tIG5vdyBvbiwgdmFyaWFibGUgdGVybXMgYXJlIGFzIGlmIHdlJ3JlIGluIFwiZ3RyXCIgbW9kZS5cbiAgLy8gYnV0IG5vdGUgdGhhdCBldmVyeXRoaW5nIGlzIGZsaXBwZWQgZm9yIHRoZSBcImx0clwiIGZ1bmN0aW9uLlxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmFuZ2Uuc2V0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNvbXBhcmF0b3JzID0gcmFuZ2Uuc2V0W2ldO1xuXG4gICAgdmFyIGhpZ2ggPSBudWxsO1xuICAgIHZhciBsb3cgPSBudWxsO1xuXG4gICAgY29tcGFyYXRvcnMuZm9yRWFjaChmdW5jdGlvbihjb21wYXJhdG9yKSB7XG4gICAgICBpZiAoY29tcGFyYXRvci5zZW12ZXIgPT09IEFOWSkge1xuICAgICAgICBjb21wYXJhdG9yID0gbmV3IENvbXBhcmF0b3IoJz49MC4wLjAnKVxuICAgICAgfVxuICAgICAgaGlnaCA9IGhpZ2ggfHwgY29tcGFyYXRvcjtcbiAgICAgIGxvdyA9IGxvdyB8fCBjb21wYXJhdG9yO1xuICAgICAgaWYgKGd0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGhpZ2guc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgaGlnaCA9IGNvbXBhcmF0b3I7XG4gICAgICB9IGVsc2UgaWYgKGx0Zm4oY29tcGFyYXRvci5zZW12ZXIsIGxvdy5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBsb3cgPSBjb21wYXJhdG9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGVkZ2UgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhIG9wZXJhdG9yIHRoZW4gb3VyIHZlcnNpb25cbiAgICAvLyBpc24ndCBvdXRzaWRlIGl0XG4gICAgaWYgKGhpZ2gub3BlcmF0b3IgPT09IGNvbXAgfHwgaGlnaC5vcGVyYXRvciA9PT0gZWNvbXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgbG93ZXN0IHZlcnNpb24gY29tcGFyYXRvciBoYXMgYW4gb3BlcmF0b3IgYW5kIG91ciB2ZXJzaW9uXG4gICAgLy8gaXMgbGVzcyB0aGFuIGl0IHRoZW4gaXQgaXNuJ3QgaGlnaGVyIHRoYW4gdGhlIHJhbmdlXG4gICAgaWYgKCghbG93Lm9wZXJhdG9yIHx8IGxvdy5vcGVyYXRvciA9PT0gY29tcCkgJiZcbiAgICAgICAgbHRlZm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGxvdy5vcGVyYXRvciA9PT0gZWNvbXAgJiYgbHRmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5wcmVyZWxlYXNlID0gcHJlcmVsZWFzZTtcbmZ1bmN0aW9uIHByZXJlbGVhc2UodmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHBhcnNlZCA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIChwYXJzZWQgJiYgcGFyc2VkLnByZXJlbGVhc2UubGVuZ3RoKSA/IHBhcnNlZC5wcmVyZWxlYXNlIDogbnVsbDtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9zZW12ZXIvc2VtdmVyLmpzXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIFZpZXdNb2RlbCBDb25zdHJ1Y3RvciAmIGRlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdFN0YXRlXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBidWlsZFxufSBmcm9tICcuL2NvbXBpbGVyJ1xuaW1wb3J0IHtcbiAgaW5pdEV2ZW50cyxcbiAgbWl4aW5FdmVudHNcbn0gZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQge1xuICByZWdpc3Rlck1vZHVsZXMsXG4gIHJlZ2lzdGVyTWV0aG9kc1xufSBmcm9tICcuLi9hcHAvcmVnaXN0ZXInXG5cbi8qKlxuICogVmlld01vZGVsIGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zICAgIGNvbXBvbmVudCBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50Vm0gICB3aGljaCBjb250YWlucyBfYXBwXG4gKiBAcGFyYW0ge29iamVjdH0gcGFyZW50RWwgICByb290IGVsZW1lbnQgb3IgZnJhZyBibG9ja1xuICogQHBhcmFtIHtvYmplY3R9IG1lcmdlZERhdGEgZXh0ZXJuYWwgZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IGV4dGVybmFsRXZlbnRzIGV4dGVybmFsIGV2ZW50c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWbSAoXG4gIHR5cGUsXG4gIG9wdGlvbnMsXG4gIHBhcmVudFZtLFxuICBwYXJlbnRFbCxcbiAgbWVyZ2VkRGF0YSxcbiAgZXh0ZXJuYWxFdmVudHNcbikge1xuICB0aGlzLl9wYXJlbnQgPSBwYXJlbnRWbS5fcmVhbFBhcmVudCA/IHBhcmVudFZtLl9yZWFsUGFyZW50IDogcGFyZW50Vm1cbiAgdGhpcy5fYXBwID0gcGFyZW50Vm0uX2FwcFxuICBwYXJlbnRWbS5fY2hpbGRyZW5WbXMgJiYgcGFyZW50Vm0uX2NoaWxkcmVuVm1zLnB1c2godGhpcylcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gdGhpcy5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXSB8fCB7fVxuICB9XG4gIGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwge31cblxuICB0aGlzLl9vcHRpb25zID0gb3B0aW9uc1xuICB0aGlzLl9tZXRob2RzID0gb3B0aW9ucy5tZXRob2RzIHx8IHt9XG4gIHRoaXMuX2NvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCB7fVxuICB0aGlzLl9jc3MgPSBvcHRpb25zLnN0eWxlIHx8IHt9XG4gIHRoaXMuX2lkcyA9IHt9XG4gIHRoaXMuX3ZtRXZlbnRzID0ge31cbiAgdGhpcy5fY2hpbGRyZW5WbXMgPSBbXVxuICB0aGlzLl90eXBlID0gdHlwZVxuXG4gIC8vIGJpbmQgZXZlbnRzIGFuZCBsaWZlY3ljbGVzXG4gIGluaXRFdmVudHModGhpcywgZXh0ZXJuYWxFdmVudHMpXG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJpbml0XCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazppbml0JylcbiAgdGhpcy5faW5pdGVkID0gdHJ1ZVxuXG4gIC8vIHByb3h5IGRhdGEgYW5kIG1ldGhvZHNcbiAgLy8gb2JzZXJ2ZSBkYXRhIGFuZCBhZGQgdGhpcyB0byB2bXNcbiAgdGhpcy5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nID8gZGF0YSgpIDogZGF0YVxuICBpZiAobWVyZ2VkRGF0YSkge1xuICAgIGV4dGVuZCh0aGlzLl9kYXRhLCBtZXJnZWREYXRhKVxuICB9XG4gIGluaXRTdGF0ZSh0aGlzKVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwiY3JlYXRlZFwiIGxpZmVjeWNsZSBpbiBWbSgke3RoaXMuX3R5cGV9KWApXG4gIHRoaXMuJGVtaXQoJ2hvb2s6Y3JlYXRlZCcpXG4gIHRoaXMuX2NyZWF0ZWQgPSB0cnVlXG5cbiAgLy8gYmFja3dhcmQgb2xkIHJlYWR5IGVudHJ5XG4gIGlmIChvcHRpb25zLm1ldGhvZHMgJiYgb3B0aW9ucy5tZXRob2RzLnJlYWR5KSB7XG4gICAgY29uc29sZS53YXJuKCdcImV4cG9ydHMubWV0aG9kcy5yZWFkeVwiIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3BsZWFzZSB1c2UgXCJleHBvcnRzLmNyZWF0ZWRcIiBpbnN0ZWFkJylcbiAgICBvcHRpb25zLm1ldGhvZHMucmVhZHkuY2FsbCh0aGlzKVxuICB9XG5cbiAgLy8gaWYgbm8gcGFyZW50RWxlbWVudCB0aGVuIHNwZWNpZnkgdGhlIGRvY3VtZW50RWxlbWVudFxuICB0aGlzLl9wYXJlbnRFbCA9IHBhcmVudEVsIHx8IHRoaXMuX2FwcC5kb2MuZG9jdW1lbnRFbGVtZW50XG4gIGJ1aWxkKHRoaXMpXG59XG5cbm1peGluRXZlbnRzKFZtLnByb3RvdHlwZSlcblxuZXh0ZW5kKFZtLCB7XG4gIHJlZ2lzdGVyTW9kdWxlcyxcbiAgcmVnaXN0ZXJNZXRob2RzXG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi93YXRjaGVyJ1xuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbmltcG9ydCB7XG4gIG9ic2VydmUsXG4gIHByb3h5LFxuICB1bnByb3h5XG59IGZyb20gJy4vb2JzZXJ2ZXInXG5pbXBvcnQge1xuICBpc1BsYWluT2JqZWN0LFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdXG4gIGluaXREYXRhKHZtKVxuICBpbml0Q29tcHV0ZWQodm0pXG4gIGluaXRNZXRob2RzKHZtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIGxldCBkYXRhID0gdm0uX2RhdGFcblxuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge31cbiAgfVxuICAvLyBwcm94eSBkYXRhIG9uIGluc3RhbmNlXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKVxuICBsZXQgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBwcm94eSh2bSwga2V5c1tpXSlcbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB2bSlcbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtKSB7XG4gIGNvbnN0IGNvbXB1dGVkID0gdm0uX2NvbXB1dGVkXG4gIGlmIChjb21wdXRlZCkge1xuICAgIGZvciAobGV0IGtleSBpbiBjb21wdXRlZCkge1xuICAgICAgY29uc3QgdXNlckRlZiA9IGNvbXB1dGVkW2tleV1cbiAgICAgIGNvbnN0IGRlZiA9IHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGVmLmdldCA9IG1ha2VDb21wdXRlZEdldHRlcih1c2VyRGVmLCB2bSlcbiAgICAgICAgZGVmLnNldCA9IG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICAgID8gdXNlckRlZi5jYWNoZSAhPT0gZmFsc2VcbiAgICAgICAgICAgID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICAgIDogYmluZCh1c2VyRGVmLmdldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICAgIGRlZi5zZXQgPSB1c2VyRGVmLnNldFxuICAgICAgICAgID8gYmluZCh1c2VyRGVmLnNldCwgdm0pXG4gICAgICAgICAgOiBub29wXG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwgZGVmKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQ29tcHV0ZWRHZXR0ZXIgKGdldHRlciwgb3duZXIpIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG51bGwsIHtcbiAgICBsYXp5OiB0cnVlXG4gIH0pXG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgIHdhdGNoZXIuZXZhbHVhdGUoKVxuICAgIH1cbiAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgd2F0Y2hlci5kZXBlbmQoKVxuICAgIH1cbiAgICByZXR1cm4gd2F0Y2hlci52YWx1ZVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWV0aG9kcyAodm0pIHtcbiAgY29uc3QgbWV0aG9kcyA9IHZtLl9tZXRob2RzXG4gIGlmIChtZXRob2RzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIHZtW2tleV0gPSBtZXRob2RzW2tleV1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL3N0YXRlLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IERlcCBmcm9tICcuL2RlcCdcbi8vIGltcG9ydCB7IHB1c2hXYXRjaGVyIH0gZnJvbSAnLi9iYXRjaGVyJ1xuaW1wb3J0IHtcbiAgd2FybixcbiAgcmVtb3ZlLFxuICBleHRlbmQsXG4gIGlzT2JqZWN0LFxuICBwYXJzZVBhdGgsXG4gIF9TZXQgYXMgU2V0XG59IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5sZXQgcHJldlRhcmdldFxuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGV4cE9yRm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogICAgICAgICAgICAgICAgIC0ge0FycmF5fSBmaWx0ZXJzXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdHdvV2F5XG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZGVlcFxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHVzZXJcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBzeW5jXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gbGF6eVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcHJlUHJvY2Vzc11cbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3Bvc3RQcm9jZXNzXVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2F0Y2hlciAodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKSB7XG4gIC8vIG1peCBpbiBvcHRpb25zXG4gIGlmIChvcHRpb25zKSB7XG4gICAgZXh0ZW5kKHRoaXMsIG9wdGlvbnMpXG4gIH1cbiAgY29uc3QgaXNGbiA9IHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nXG4gIHRoaXMudm0gPSB2bVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKVxuICB0aGlzLmV4cHJlc3Npb24gPSBleHBPckZuXG4gIHRoaXMuY2IgPSBjYlxuICB0aGlzLmlkID0gKyt1aWQgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWVcbiAgdGhpcy5kaXJ0eSA9IHRoaXMubGF6eSAvLyBmb3IgbGF6eSB3YXRjaGVyc1xuICB0aGlzLmRlcHMgPSBbXVxuICB0aGlzLm5ld0RlcHMgPSBbXVxuICB0aGlzLmRlcElkcyA9IG5ldyBTZXQoKVxuICB0aGlzLm5ld0RlcElkcyA9IG5ldyBTZXQoKVxuICAvLyBwYXJzZSBleHByZXNzaW9uIGZvciBnZXR0ZXJcbiAgaWYgKGlzRm4pIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm5cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmdldHRlciA9IHBhcnNlUGF0aChleHBPckZuKVxuICAgIGlmICghdGhpcy5nZXR0ZXIpIHtcbiAgICAgIHRoaXMuZ2V0dGVyID0gZnVuY3Rpb24gKCkge31cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgJ0ZhaWxlZCB3YXRjaGluZyBwYXRoOiAnICsgZXhwT3JGbiArXG4gICAgICAgICdXYXRjaGVyIG9ubHkgYWNjZXB0cyBzaW1wbGUgZG90LWRlbGltaXRlZCBwYXRocy4gJyArXG4gICAgICAgICdGb3IgZnVsbCBjb250cm9sLCB1c2UgYSBmdW5jdGlvbiBpbnN0ZWFkLicsXG4gICAgICAgIHZtXG4gICAgICApXG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKVxuICAvLyBzdGF0ZSBmb3IgYXZvaWRpbmcgZmFsc2UgdHJpZ2dlcnMgZm9yIGRlZXAgYW5kIEFycmF5XG4gIC8vIHdhdGNoZXJzIGR1cmluZyB2bS5fZGlnZXN0KClcbiAgdGhpcy5xdWV1ZWQgPSB0aGlzLnNoYWxsb3cgPSBmYWxzZVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYmVmb3JlR2V0KClcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHRoaXMudm0sIHRoaXMudm0pXG4gIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgaWYgKHRoaXMuZGVlcCkge1xuICAgIHRyYXZlcnNlKHZhbHVlKVxuICB9XG4gIHRoaXMuYWZ0ZXJHZXQoKVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBQcmVwYXJlIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYmVmb3JlR2V0ID0gZnVuY3Rpb24gKCkge1xuICBwcmV2VGFyZ2V0ID0gRGVwLnRhcmdldFxuICBEZXAudGFyZ2V0ID0gdGhpc1xufVxuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtEZXB9IGRlcFxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIChkZXApIHtcbiAgY29uc3QgaWQgPSBkZXAuaWRcbiAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKVxuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcClcbiAgICBpZiAoIXRoaXMuZGVwSWRzLmhhcyhpZCkpIHtcbiAgICAgIGRlcC5hZGRTdWIodGhpcylcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFmdGVyR2V0ID0gZnVuY3Rpb24gKCkge1xuICBEZXAudGFyZ2V0ID0gcHJldlRhcmdldFxuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGRlcCA9IHRoaXMuZGVwc1tpXVxuICAgIGlmICghdGhpcy5uZXdEZXBJZHMuaGFzKGRlcC5pZCkpIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcylcbiAgICB9XG4gIH1cbiAgbGV0IHRtcCA9IHRoaXMuZGVwSWRzXG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHNcbiAgdGhpcy5uZXdEZXBJZHMgPSB0bXBcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKVxuICB0bXAgPSB0aGlzLmRlcHNcbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzXG4gIHRoaXMubmV3RGVwcyA9IHRtcFxuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMFxufVxuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNoYWxsb3dcbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoc2hhbGxvdykge1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJ1bigpXG4gIH1cbiAgLy8gfSBlbHNlIGlmICh0aGlzLnN5bmMpIHtcbiAgLy8gICB0aGlzLnJ1bigpXG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgLy8gaWYgcXVldWVkLCBvbmx5IG92ZXJ3cml0ZSBzaGFsbG93IHdpdGggbm9uLXNoYWxsb3csXG4gIC8vICAgLy8gYnV0IG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgLy8gICB0aGlzLnNoYWxsb3cgPSB0aGlzLnF1ZXVlZFxuICAvLyAgICAgPyBzaGFsbG93XG4gIC8vICAgICAgID8gdGhpcy5zaGFsbG93XG4gIC8vICAgICAgIDogZmFsc2VcbiAgLy8gICAgIDogISFzaGFsbG93XG4gIC8vICAgdGhpcy5xdWV1ZWQgPSB0cnVlXG4gIC8vICAgcHVzaFdhdGNoZXIodGhpcylcbiAgLy8gfVxufVxuXG4vKipcbiAqIEJhdGNoZXIgam9iIGludGVyZmFjZS5cbiAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBiYXRjaGVyLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldCgpXG4gICAgaWYgKFxuICAgICAgdmFsdWUgIT09IHRoaXMudmFsdWUgfHxcbiAgICAgIC8vIERlZXAgd2F0Y2hlcnMgYW5kIHdhdGNoZXJzIG9uIE9iamVjdC9BcnJheXMgc2hvdWxkIGZpcmUgZXZlblxuICAgICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgICAgLy8gaGF2ZSBtdXRhdGVkOyBidXQgb25seSBkbyBzbyBpZiB0aGlzIGlzIGFcbiAgICAgIC8vIG5vbi1zaGFsbG93IHVwZGF0ZSAoY2F1c2VkIGJ5IGEgdm0gZGlnZXN0KS5cbiAgICAgICgoaXNPYmplY3QodmFsdWUpIHx8IHRoaXMuZGVlcCkgJiYgIXRoaXMuc2hhbGxvdylcbiAgICApIHtcbiAgICAgIC8vIHNldCBuZXcgdmFsdWVcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy52YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgIH1cbiAgICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGF2b2lkIG92ZXJ3cml0aW5nIGFub3RoZXIgd2F0Y2hlciB0aGF0IGlzIGJlaW5nXG4gIC8vIGNvbGxlY3RlZC5cbiAgY29uc3QgY3VycmVudCA9IERlcC50YXJnZXRcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KClcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlXG4gIERlcC50YXJnZXQgPSBjdXJyZW50XG59XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJjcmliZXIgbGlzdC5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkIG9yIGlzIHBlcmZvcm1pbmcgYSB2LWZvclxuICAgIC8vIHJlLXJlbmRlciAodGhlIHdhdGNoZXIgbGlzdCBpcyB0aGVuIGZpbHRlcmVkIGJ5IHYtZm9yKS5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXRoaXMudm0uX3ZGb3JSZW1vdmluZykge1xuICAgICAgcmVtb3ZlKHRoaXMudm0uX3dhdGNoZXJzLCB0aGlzKVxuICAgIH1cbiAgICBsZXQgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLnZtID0gdGhpcy5jYiA9IHRoaXMudmFsdWUgPSBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBSZWNydXNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKlxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7U2V0fSBzZWVuXG4gKi9cblxuY29uc3Qgc2Vlbk9iamVjdHMgPSBuZXcgU2V0KClcbmZ1bmN0aW9uIHRyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgbGV0IGksIGtleXMsIGlzQSwgaXNPXG4gIGlmICghc2Vlbikge1xuICAgIHNlZW4gPSBzZWVuT2JqZWN0c1xuICAgIHNlZW4uY2xlYXIoKVxuICB9XG4gIGlzQSA9IEFycmF5LmlzQXJyYXkodmFsKVxuICBpc08gPSBpc09iamVjdCh2YWwpXG4gIGlmIChpc0EgfHwgaXNPKSB7XG4gICAgaWYgKHZhbC5fX29iX18pIHtcbiAgICAgIGNvbnN0IGRlcElkID0gdmFsLl9fb2JfXy5kZXAuaWRcbiAgICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWVuLmFkZChkZXBJZClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQSkge1xuICAgICAgaSA9IHZhbC5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtpXSwgc2VlbilcbiAgICB9IGVsc2UgaWYgKGlzTykge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbClcbiAgICAgIGkgPSBrZXlzLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJy4uL3V0aWwnXG5cbmxldCB1aWQgPSAwXG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuaWQgPSB1aWQrK1xuICB0aGlzLnN1YnMgPSBbXVxufVxuXG4vLyB0aGUgY3VycmVudCB0YXJnZXQgd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQuXG4vLyB0aGlzIGlzIGdsb2JhbGx5IHVuaXF1ZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG9ubHkgb25lXG4vLyB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZCBhdCBhbnkgdGltZS5cbkRlcC50YXJnZXQgPSBudWxsXG5cbi8qKlxuICogQWRkIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbkRlcC5wcm90b3R5cGUuYWRkU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpXG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbkRlcC5wcm90b3R5cGUucmVtb3ZlU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpXG59XG5cbi8qKlxuICogQWRkIHNlbGYgYXMgYSBkZXBlbmRlbmN5IHRvIHRoZSB0YXJnZXQgd2F0Y2hlci5cbiAqL1xuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldC5hZGREZXAodGhpcylcbn1cblxuLyoqXG4gKiBOb3RpZnkgYWxsIHN1YnNjcmliZXJzIG9mIGEgbmV3IHZhbHVlLlxuICovXG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAvLyBzdGFibGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIGNvbnN0IHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKVxuICBmb3IgKGxldCBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9kZXAuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuaW1wb3J0IHsgYXJyYXlNZXRob2RzIH0gZnJvbSAnLi9hcnJheSdcbmltcG9ydCB7XG4gIGRlZixcbiAgcmVtb3ZlLFxuICBpc09iamVjdCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaGFzUHJvdG8sXG4gIGhhc093bixcbiAgaXNSZXNlcnZlZFxufSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpXG5cbi8qKlxuICogT2JzZXJ2ZXIgY2xhc3MgdGhhdCBhcmUgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGFyZ2V0XG4gKiBvYmplY3QncyBwcm9wZXJ0eSBrZXlzIGludG8gZ2V0dGVyL3NldHRlcnMgdGhhdFxuICogY29sbGVjdCBkZXBlbmRlbmNpZXMgYW5kIGRpc3BhdGNoZXMgdXBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gdmFsdWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuZGVwID0gbmV3IERlcCgpXG4gIGRlZih2YWx1ZSwgJ19fb2JfXycsIHRoaXMpXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGNvbnN0IGF1Z21lbnQgPSBoYXNQcm90b1xuICAgICAgPyBwcm90b0F1Z21lbnRcbiAgICAgIDogY29weUF1Z21lbnRcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cylcbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpXG4gIH1cbn1cblxuLy8gSW5zdGFuY2UgbWV0aG9kc1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICB0aGlzLmNvbnZlcnQoa2V5LCBvYmpba2V5XSlcbiAgfVxufVxuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIChpdGVtcykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9ic2VydmUoaXRlbXNbaV0pXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcHJvcGVydHkgaW50byBnZXR0ZXIvc2V0dGVyIHNvIHdlIGNhbiBlbWl0XG4gKiB0aGUgZXZlbnRzIHdoZW4gdGhlIHByb3BlcnR5IGlzIGFjY2Vzc2VkL2NoYW5nZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICBkZWZpbmVSZWFjdGl2ZSh0aGlzLnZhbHVlLCBrZXksIHZhbClcbn1cblxuLyoqXG4gKiBBZGQgYW4gb3duZXIgdm0sIHNvIHRoYXQgd2hlbiAkc2V0LyRkZWxldGUgbXV0YXRpb25zXG4gKiBoYXBwZW4gd2UgY2FuIG5vdGlmeSBvd25lciB2bXMgdG8gcHJveHkgdGhlIGtleXMgYW5kXG4gKiBkaWdlc3QgdGhlIHdhdGNoZXJzLiBUaGlzIGlzIG9ubHkgY2FsbGVkIHdoZW4gdGhlIG9iamVjdFxuICogaXMgb2JzZXJ2ZWQgYXMgYW4gaW5zdGFuY2UncyByb290ICRkYXRhLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5hZGRWbSA9IGZ1bmN0aW9uICh2bSkge1xuICAodGhpcy52bXMgfHwgKHRoaXMudm1zID0gW10pKS5wdXNoKHZtKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBvd25lciB2bS4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0IGlzXG4gKiBzd2FwcGVkIG91dCBhcyBhbiBpbnN0YW5jZSdzICRkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUucmVtb3ZlVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgcmVtb3ZlKHRoaXMudm1zLCB2bSlcbn1cblxuLy8gaGVscGVyc1xuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHNyY1xuICovXG5cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyY1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG9cbiAqL1xuXG5mdW5jdGlvbiBjb3B5QXVnbWVudCAodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBkZWYodGFyZ2V0LCBrZXksIHNyY1trZXldKVxuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEByZXR1cm4ge09ic2VydmVyfHVuZGVmaW5lZH1cbiAqIEBzdGF0aWNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIHZtKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgbGV0IG9iXG4gIGlmIChoYXNPd24odmFsdWUsICdfX29iX18nKSAmJiB2YWx1ZS5fX29iX18gaW5zdGFuY2VvZiBPYnNlcnZlcikge1xuICAgIG9iID0gdmFsdWUuX19vYl9fXG4gIH0gZWxzZSBpZiAoXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSlcbiAgfVxuICBpZiAob2IgJiYgdm0pIHtcbiAgICBvYi5hZGRWbSh2bSlcbiAgfVxuICByZXR1cm4gb2Jcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lUmVhY3RpdmUgKG9iaiwga2V5LCB2YWwpIHtcbiAgY29uc3QgZGVwID0gbmV3IERlcCgpXG5cbiAgY29uc3QgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KVxuICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gIGNvbnN0IGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldFxuICBjb25zdCBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXRcblxuICBsZXQgY2hpbGRPYiA9IG9ic2VydmUodmFsKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlR2V0dGVyICgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpXG4gICAgICAgIGlmIChjaGlsZE9iKSB7XG4gICAgICAgICAgY2hpbGRPYi5kZXAuZGVwZW5kKClcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBmb3IgKGxldCBlLCBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgZSA9IHZhbHVlW2ldXG4gICAgICAgICAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbFxuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gbmV3VmFsXG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gb2JzZXJ2ZShuZXdWYWwpXG4gICAgICBkZXAubm90aWZ5KClcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldCAob2JqLCBrZXksIHZhbCkge1xuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5zcGxpY2Uoa2V5LCAxLCB2YWwpXG4gIH1cbiAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIGlmIChvYmouX2lzVnVlKSB7XG4gICAgc2V0KG9iai5fZGF0YSwga2V5LCB2YWwpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qgb2IgPSBvYmouX19vYl9fXG4gIGlmICghb2IpIHtcbiAgICBvYmpba2V5XSA9IHZhbFxuICAgIHJldHVyblxuICB9XG4gIG9iLmNvbnZlcnQoa2V5LCB2YWwpXG4gIG9iLmRlcC5ub3RpZnkoKVxuICBpZiAob2Iudm1zKSB7XG4gICAgbGV0IGkgPSBvYi52bXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qgdm0gPSBvYi52bXNbaV1cbiAgICAgIHByb3h5KHZtLCBrZXkpXG4gICAgICB2bS4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbCAob2JqLCBrZXkpIHtcbiAgaWYgKCFoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIG9ialtrZXldXG4gIGNvbnN0IG9iID0gb2JqLl9fb2JfX1xuXG4gIGlmICghb2IpIHtcbiAgICBpZiAob2JqLl9pc1Z1ZSkge1xuICAgICAgZGVsZXRlIG9iai5fZGF0YVtrZXldXG4gICAgICBvYmouJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICBsZXQgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCB2bSA9IG9iLnZtc1tpXVxuICAgICAgdW5wcm94eSh2bSwga2V5KVxuICAgICAgdm0uJGZvcmNlVXBkYXRlKClcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgS0VZX1dPUkRTID0gWyckaW5kZXgnLCAnJHZhbHVlJywgJyRldmVudCddXG5leHBvcnQgZnVuY3Rpb24gcHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKEtFWV9XT1JEUy5pbmRleE9mKGtleSkgPiAtMSB8fCAhaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICAgICAgcmV0dXJuIHZtLl9kYXRhW2tleV1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICAgICAgdm0uX2RhdGFba2V5XSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucHJveHkgKHZtLCBrZXkpIHtcbiAgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICBkZWxldGUgdm1ba2V5XVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9vYnNlcnZlci5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCB7IGRlZiB9IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGVcbmV4cG9ydCBjb25zdCBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pXG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cblxuO1tcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl1cbi5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgLy8gY2FjaGUgb3JpZ2luYWwgbWV0aG9kXG4gIGNvbnN0IG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvciAoKSB7XG4gICAgLy8gYXZvaWQgbGVha2luZyBhcmd1bWVudHM6XG4gICAgLy8gaHR0cDovL2pzcGVyZi5jb20vY2xvc3VyZS13aXRoLWFyZ3VtZW50c1xuICAgIGxldCBpID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIGNvbnN0IGFyZ3MgPSBuZXcgQXJyYXkoaSlcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgY29uc3Qgb2IgPSB0aGlzLl9fb2JfX1xuICAgIGxldCBpbnNlcnRlZFxuICAgIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd1bnNoaWZ0JzpcbiAgICAgICAgaW5zZXJ0ZWQgPSBhcmdzXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMilcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSBvYi5vYnNlcnZlQXJyYXkoaW5zZXJ0ZWQpXG4gICAgLy8gbm90aWZ5IGNoYW5nZVxuICAgIG9iLmRlcC5ub3RpZnkoKVxuICAgIHJldHVybiByZXN1bHRcbiAgfSlcbn0pXG5cbi8qKlxuICogU3dhcCB0aGUgZWxlbWVudCBhdCB0aGUgZ2l2ZW4gaW5kZXggd2l0aCBhIG5ldyB2YWx1ZVxuICogYW5kIGVtaXRzIGNvcnJlc3BvbmRpbmcgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7Kn0gLSByZXBsYWNlZCBlbGVtZW50XG4gKi9cblxuZGVmKFxuICBhcnJheVByb3RvLFxuICAnJHNldCcsXG4gIGZ1bmN0aW9uICRzZXQgKGluZGV4LCB2YWwpIHtcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gaW5kZXggKyAxXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSwgdmFsKVswXVxuICB9XG4pXG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJlbW92ZSB0aGUgZWxlbWVudCBhdCBnaXZlbiBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZGVmKFxuICBhcnJheVByb3RvLFxuICAnJHJlbW92ZScsXG4gIGZ1bmN0aW9uICRyZW1vdmUgKGluZGV4KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuXG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5pbmRleE9mKGluZGV4KVxuICAgIH1cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS9hcnJheS5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIHRlbXBsYXRlIHBhcnNlciAmIGRhdGEtYmluZGluZyBwcm9jZXNzXG4gKlxuICogcmVxdWlyZWQ6XG4gKiBpbmRleC5qczogVm1cbiAqIGRvbS1oZWxwZXIuanM6IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUJsb2NrXG4gKiBkb20taGVscGVyLmpzOiBhdHRhY2hUYXJnZXQsIG1vdmVUYXJnZXQsIHJlbW92ZVRhcmdldFxuICogZGlyZWN0aXZlLmpzOiBiaW5kRWxlbWVudCwgYmluZFN1YlZtLCBzZXRJZCwgd2F0Y2hcbiAqIGV2ZW50cy5qczogJG9uXG4gKi9cblxuaW1wb3J0IHtcbiAgZXh0ZW5kLFxuICBpc09iamVjdCxcbiAgYmluZFxufSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHtcbiAgaW5pdERhdGEsXG4gIGluaXRDb21wdXRlZFxufSBmcm9tICcuLi9jb3JlL3N0YXRlJ1xuaW1wb3J0IHtcbiAgYmluZEVsZW1lbnQsXG4gIHNldElkLFxuICBiaW5kU3ViVm0sXG4gIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQsXG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyxcbiAgd2F0Y2hcbn0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQge1xuICBjcmVhdGVCbG9jayxcbiAgY3JlYXRlQm9keSxcbiAgY3JlYXRlRWxlbWVudCxcbiAgYXR0YWNoVGFyZ2V0LFxuICBtb3ZlVGFyZ2V0LFxuICByZW1vdmVUYXJnZXRcbn0gZnJvbSAnLi9kb20taGVscGVyJ1xuXG4vKipcbiAqIGJ1aWxkKGV4dGVybmFsRGlycylcbiAqICAgY3JlYXRlVm0oKVxuICogICBtZXJnZShleHRlcm5hbERpcnMsIGRpcnMpXG4gKiAgIGNvbXBpbGUodGVtcGxhdGUsIHBhcmVudE5vZGUpXG4gKiAgICAgaWYgKHR5cGUgaXMgY29udGVudCkgY3JlYXRlIGNvbnRlbnROb2RlXG4gKiAgICAgZWxzZSBpZiAoZGlycyBoYXZlIHYtZm9yKSBmb3JlYWNoIC0+IGNyZWF0ZSBjb250ZXh0XG4gKiAgICAgICAtPiBjb21waWxlKHRlbXBsYXRlV2l0aG91dEZvciwgcGFyZW50Tm9kZSk6IGRpZmYobGlzdCkgb25jaGFuZ2VcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1pZikgYXNzZXJ0XG4gKiAgICAgICAtPiBjb21waWxlKHRlbXBsYXRlV2l0aG91dElmLCBwYXJlbnROb2RlKTogdG9nZ2xlKHNob3duKSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgZHluYW1pYylcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0RHluYW1pY1R5cGUsIHBhcmVudE5vZGUpOiB3YXRjaCh0eXBlKSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgY3VzdG9tKVxuICogICAgICAgYWRkQ2hpbGRWbSh2bSwgcGFyZW50Vm0pXG4gKiAgICAgICBidWlsZChleHRlcm5hbERpcnMpXG4gKiAgICAgICBmb3JlYWNoIGNoaWxkTm9kZXMgLT4gY29tcGlsZShjaGlsZE5vZGUsIHRlbXBsYXRlKVxuICogICAgIGVsc2UgaWYgKHR5cGUgaXMgbmF0aXZlKVxuICogICAgICAgc2V0KGRpcnMpOiB1cGRhdGUoaWQvYXR0ci9zdHlsZS9jbGFzcykgb25jaGFuZ2VcbiAqICAgICAgIGFwcGVuZCh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZCAodm0pIHtcbiAgY29uc3Qgb3B0ID0gdm0uX29wdGlvbnMgfHwge31cbiAgY29uc3QgdGVtcGxhdGUgPSBvcHQudGVtcGxhdGUgfHwge31cblxuICBpZiAob3B0LnJlcGxhY2UpIHtcbiAgICBpZiAodGVtcGxhdGUuY2hpbGRyZW4gJiYgdGVtcGxhdGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb21waWxlKHZtLCB0ZW1wbGF0ZS5jaGlsZHJlblswXSwgdm0uX3BhcmVudEVsKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLCB2bS5fcGFyZW50RWwpXG4gIH1cblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcInJlYWR5XCIgbGlmZWN5Y2xlIGluIFZtKCR7dm0uX3R5cGV9KWApXG4gIHZtLiRlbWl0KCdob29rOnJlYWR5JylcbiAgdm0uX3JlYWR5ID0gdHJ1ZVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGVsZW1lbnRzIGJ5IGNoaWxkIG9yIGNoaWxkcmVuIGFuZCBhcHBlbmQgdG8gcGFyZW50IGVsZW1lbnRzLlxuICogUm9vdCBlbGVtZW50IGluZm8gd291bGQgYmUgbWVyZ2VkIGlmIGhhcy4gVGhlIGZpcnN0IGFyZ3VtZW50IG1heSBiZSBhbiBhcnJheVxuICogaWYgdGhlIHJvb3QgZWxlbWVudCB3aXRoIG9wdGlvbnMucmVwbGFjZSBoYXMgbm90IG9ubHkgb25lIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gICAgICAgbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlICh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IGFwcCA9IHZtLl9hcHAgfHwge31cblxuICBpZiAoYXBwLmxhc3RTaWduYWwgPT09IC0xKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGFyZ2V0SXNGcmFnbWVudCh0YXJnZXQpKSB7XG4gICAgY29tcGlsZUZyYWdtZW50KHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgbWV0YSA9IG1ldGEgfHwge31cbiAgaWYgKHRhcmdldElzQ29udGVudCh0YXJnZXQpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcImNvbnRlbnRcIiBibG9jayBieScsIHRhcmdldClcbiAgICB2bS5fY29udGVudCA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHRhcmdldE5lZWRDaGVja1JlcGVhdCh0YXJnZXQsIG1ldGEpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcInJlcGVhdFwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVSZXBlYXQodm0sIHRhcmdldCwgZGVzdClcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodGFyZ2V0TmVlZENoZWNrU2hvd24odGFyZ2V0LCBtZXRhKSkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgXCJpZlwiIGxvZ2ljIGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVTaG93bih2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGVHZXR0ZXIgPSBtZXRhLnR5cGUgfHwgdGFyZ2V0LnR5cGVcbiAgaWYgKHRhcmdldE5lZWRDaGVja1R5cGUodHlwZUdldHRlciwgbWV0YSkpIHtcbiAgICBjb21waWxlVHlwZSh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlR2V0dGVyLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHR5cGUgPSB0eXBlR2V0dGVyXG4gIGNvbnN0IGNvbXBvbmVudCA9IHRhcmdldElzQ29tcG9zZWQodm0sIHRhcmdldCwgdHlwZSlcbiAgaWYgKGNvbXBvbmVudCkge1xuICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgY29tcG9zZWQgY29tcG9uZW50IGJ5JywgdGFyZ2V0KVxuICAgIGNvbXBpbGVDdXN0b21Db21wb25lbnQodm0sIGNvbXBvbmVudCwgdGFyZ2V0LCBkZXN0LCB0eXBlLCBtZXRhKVxuICAgIHJldHVyblxuICB9XG4gIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIGNvbXBpbGUgbmF0aXZlIGNvbXBvbmVudCBieScsIHRhcmdldClcbiAgY29tcGlsZU5hdGl2ZUNvbXBvbmVudCh2bSwgdGFyZ2V0LCBkZXN0LCB0eXBlKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBpcyBhIGZyYWdtZW50IChhbiBhcnJheSkuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0ZyYWdtZW50ICh0YXJnZXQpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCB0eXBlIGlzIGNvbnRlbnQvc2xvdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzQ29udGVudCAodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQudHlwZSA9PT0gJ2NvbnRlbnQnIHx8IHRhcmdldC50eXBlID09PSAnc2xvdCdcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gIG1ldGFcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldE5lZWRDaGVja1JlcGVhdCAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgncmVwZWF0JykgJiYgdGFyZ2V0LnJlcGVhdFxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBib29sZWFuIHZhbHVlLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrU2hvd24gKHRhcmdldCwgbWV0YSkge1xuICByZXR1cm4gIW1ldGEuaGFzT3duUHJvcGVydHkoJ3Nob3duJykgJiYgdGFyZ2V0LnNob3duXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGR5bmFtaWMgdHlwZS5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd8ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqIEBwYXJhbSAge29iamVjdH0gICAgICAgICAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrVHlwZSAodHlwZUdldHRlciwgbWV0YSkge1xuICByZXR1cm4gKHR5cGVvZiB0eXBlR2V0dGVyID09PSAnZnVuY3Rpb24nKSAmJiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBraW5kIG9mIGNvbXBvbmVudCBpcyBjb21wb3NlZC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXRJc0NvbXBvc2VkICh2bSwgdGFyZ2V0LCB0eXBlKSB7XG4gIGxldCBjb21wb25lbnRcbiAgaWYgKHZtLl9hcHAgJiYgdm0uX2FwcC5jdXN0b21Db21wb25lbnRNYXApIHtcbiAgICBjb21wb25lbnQgPSB2bS5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcFt0eXBlXVxuICB9XG4gIGlmICh2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgY29tcG9uZW50ID0gdm0uX29wdGlvbnMuY29tcG9uZW50c1t0eXBlXVxuICB9XG4gIGlmICh0YXJnZXQuY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50ID0gY29tcG9uZW50IHx8IHt9XG4gIH1cbiAgcmV0dXJuIGNvbXBvbmVudFxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBsaXN0IG9mIHRhcmdldHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVGcmFnbWVudCAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcbiAgdGFyZ2V0LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY29tcGlsZSh2bSwgY2hpbGQsIGZyYWdCbG9jaywgbWV0YSlcbiAgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggcmVwZWF0IGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlUmVwZWF0ICh2bSwgdGFyZ2V0LCBkZXN0KSB7XG4gIGNvbnN0IHJlcGVhdCA9IHRhcmdldC5yZXBlYXRcbiAgY29uc3Qgb2xkU3R5bGUgPSB0eXBlb2YgcmVwZWF0ID09PSAnZnVuY3Rpb24nXG4gIGxldCBnZXR0ZXIgPSByZXBlYXQuZ2V0dGVyIHx8IHJlcGVhdC5leHByZXNzaW9uIHx8IHJlcGVhdFxuICBpZiAodHlwZW9mIGdldHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGdldHRlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH1cbiAgfVxuICBjb25zdCBrZXkgPSByZXBlYXQua2V5IHx8ICckaW5kZXgnXG4gIGNvbnN0IHZhbHVlID0gcmVwZWF0LnZhbHVlIHx8ICckdmFsdWUnXG4gIGNvbnN0IHRyYWNrQnkgPSByZXBlYXQudHJhY2tCeSB8fCB0YXJnZXQudHJhY2tCeSB8fFxuICAgICh0YXJnZXQuYXR0ciAmJiB0YXJnZXQuYXR0ci50cmFja0J5KVxuXG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICBmcmFnQmxvY2suY2hpbGRyZW4gPSBbXVxuICBmcmFnQmxvY2suZGF0YSA9IFtdXG4gIGZyYWdCbG9jay52bXMgPSBbXVxuXG4gIGJpbmRSZXBlYXQodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCB7IGdldHRlciwga2V5LCB2YWx1ZSwgdHJhY2tCeSwgb2xkU3R5bGUgfSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggaWYgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge29iamVjdH0gbWV0YVxuICovXG5mdW5jdGlvbiBjb21waWxlU2hvd24gKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgbmV3TWV0YSA9IHsgc2hvd246IHRydWUgfVxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgaWYgKG1ldGEucmVwZWF0KSB7XG4gICAgbmV3TWV0YS5yZXBlYXQgPSBtZXRhLnJlcGVhdFxuICB9XG5cbiAgYmluZFNob3duKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGFyZ2V0IHdpdGggZHluYW1pYyBjb21wb25lbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gICB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIGRlc3RcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHR5cGVHZXR0ZXJcbiAqL1xuZnVuY3Rpb24gY29tcGlsZVR5cGUgKHZtLCB0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXIuY2FsbCh2bSlcbiAgY29uc3QgbmV3TWV0YSA9IGV4dGVuZCh7IHR5cGUgfSwgbWV0YSlcbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG5cbiAgaWYgKGRlc3QuZWxlbWVudCAmJiBkZXN0LmNoaWxkcmVuKSB7XG4gICAgZGVzdC5jaGlsZHJlbi5wdXNoKGZyYWdCbG9jaylcbiAgfVxuXG4gIHdhdGNoKHZtLCB0eXBlR2V0dGVyLCAodmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdNZXRhID0gZXh0ZW5kKHsgdHlwZTogdmFsdWUgfSwgbWV0YSlcbiAgICByZW1vdmVUYXJnZXQodm0sIGZyYWdCbG9jaywgdHJ1ZSlcbiAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbiAgfSlcblxuICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbmV3TWV0YSlcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgY29tcG9zZWQgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjb21waWxlQ3VzdG9tQ29tcG9uZW50ICh2bSwgY29tcG9uZW50LCB0YXJnZXQsIGRlc3QsIHR5cGUsIG1ldGEpIHtcbiAgY29uc3QgQ3RvciA9IHZtLmNvbnN0cnVjdG9yXG4gIGNvbnN0IHN1YlZtID0gbmV3IEN0b3IodHlwZSwgY29tcG9uZW50LCB2bSwgZGVzdCwgdW5kZWZpbmVkLCB7XG4gICAgJ2hvb2s6aW5pdCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldElkKHZtLCBudWxsLCB0YXJnZXQuaWQsIHRoaXMpXG4gICAgICAvLyBiaW5kIHRlbXBsYXRlIGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgICB0aGlzLl9leHRlcm5hbEJpbmRpbmcgPSB7XG4gICAgICAgIHBhcmVudDogdm0sXG4gICAgICAgIHRlbXBsYXRlOiB0YXJnZXRcbiAgICAgIH1cbiAgICB9LFxuICAgICdob29rOmNyZWF0ZWQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICBiaW5kU3ViVm0odm0sIHRoaXMsIHRhcmdldCwgbWV0YS5yZXBlYXQpXG4gICAgfSxcbiAgICAnaG9vazpyZWFkeSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLl9jb250ZW50KSB7XG4gICAgICAgIGNvbXBpbGVDaGlsZHJlbih2bSwgdGFyZ2V0LCB0aGlzLl9jb250ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCh2bSwgc3ViVm0sIHRhcmdldClcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBlbGVtZW50IGZyb20gdGVtcGxhdGUgYW5kIGF0dGFjaCB0byB0aGUgZGVzdCBpZiBuZWVkZWQuXG4gKiBUaGUgdGltZSB0byBhdHRhY2ggZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBtb2RlIHN0YXR1cyBpcyBub2RlIG9yIHRyZWUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZU5hdGl2ZUNvbXBvbmVudCAodm0sIHRlbXBsYXRlLCBkZXN0LCB0eXBlKSB7XG4gIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyh0ZW1wbGF0ZSlcblxuICBsZXQgZWxlbWVudFxuICBpZiAoZGVzdC5yZWYgPT09ICdfZG9jdW1lbnRFbGVtZW50Jykge1xuICAgIC8vIGlmIGl0cyBwYXJlbnQgaXMgZG9jdW1lbnRFbGVtZW50IHRoZW4gaXQncyBhIGJvZHlcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBib2R5IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlQm9keSh2bSwgdHlwZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGNyZWF0ZSBlbGVtZW50IGZvciAke3R5cGV9YClcbiAgICBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCh2bSwgdHlwZSlcbiAgfVxuXG4gIGlmICghdm0uX3Jvb3RFbCkge1xuICAgIHZtLl9yb290RWwgPSBlbGVtZW50XG4gICAgLy8gYmluZCBldmVudCBlYXJsaWVyIGJlY2F1c2Ugb2YgbGlmZWN5Y2xlIGlzc3Vlc1xuICAgIGNvbnN0IGJpbmRpbmcgPSB2bS5fZXh0ZXJuYWxCaW5kaW5nIHx8IHt9XG4gICAgY29uc3QgdGFyZ2V0ID0gYmluZGluZy50ZW1wbGF0ZVxuICAgIGNvbnN0IHBhcmVudFZtID0gYmluZGluZy5wYXJlbnRcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5ldmVudHMgJiYgcGFyZW50Vm0gJiYgZWxlbWVudCkge1xuICAgICAgZm9yIChjb25zdCB0eXBlIGluIHRhcmdldC5ldmVudHMpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHBhcmVudFZtW3RhcmdldC5ldmVudHNbdHlwZV1dXG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudCh0eXBlLCBiaW5kKGhhbmRsZXIsIHBhcmVudFZtKSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJpbmRFbGVtZW50KHZtLCBlbGVtZW50LCB0ZW1wbGF0ZSlcblxuICBpZiAodGVtcGxhdGUuYXR0ciAmJiB0ZW1wbGF0ZS5hdHRyLmFwcGVuZCkgeyAvLyBiYWNrd2FyZCwgYXBwZW5kIHByb3AgaW4gYXR0clxuICAgIHRlbXBsYXRlLmFwcGVuZCA9IHRlbXBsYXRlLmF0dHIuYXBwZW5kXG4gIH1cblxuICBpZiAodGVtcGxhdGUuYXBwZW5kKSB7IC8vIGdpdmUgdGhlIGFwcGVuZCBhdHRyaWJ1dGUgZm9yIGlvcyBhZGFwdGF0aW9uXG4gICAgZWxlbWVudC5hdHRyID0gZWxlbWVudC5hdHRyIHx8IHt9XG4gICAgZWxlbWVudC5hdHRyLmFwcGVuZCA9IHRlbXBsYXRlLmFwcGVuZFxuICB9XG5cbiAgY29uc3QgdHJlZU1vZGUgPSB0ZW1wbGF0ZS5hcHBlbmQgPT09ICd0cmVlJ1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgIXRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgc2luZ2xlIG5vZGUgZm9yJywgZWxlbWVudClcbiAgICBhcHAubGFzdFNpZ25hbCA9IGF0dGFjaFRhcmdldCh2bSwgZWxlbWVudCwgZGVzdClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xKSB7XG4gICAgY29tcGlsZUNoaWxkcmVuKHZtLCB0ZW1wbGF0ZSwgZWxlbWVudClcbiAgfVxuICBpZiAoYXBwLmxhc3RTaWduYWwgIT09IC0xICYmIHRyZWVNb2RlKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSB0byBhcHBlbmQgd2hvbGUgdHJlZSBmb3InLCBlbGVtZW50KVxuICAgIGFwcC5sYXN0U2lnbmFsID0gYXR0YWNoVGFyZ2V0KHZtLCBlbGVtZW50LCBkZXN0KVxuICB9XG59XG5cbi8qKlxuICogU2V0IGFsbCBjaGlsZHJlbiB0byBhIGNlcnRhaW4gcGFyZW50IGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICovXG5mdW5jdGlvbiBjb21waWxlQ2hpbGRyZW4gKHZtLCB0ZW1wbGF0ZSwgZGVzdCkge1xuICBjb25zdCBhcHAgPSB2bS5fYXBwIHx8IHt9XG4gIGNvbnN0IGNoaWxkcmVuID0gdGVtcGxhdGUuY2hpbGRyZW5cbiAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNoaWxkcmVuLmV2ZXJ5KChjaGlsZCkgPT4ge1xuICAgICAgY29tcGlsZSh2bSwgY2hpbGQsIGRlc3QpXG4gICAgICByZXR1cm4gYXBwLmxhc3RTaWduYWwgIT09IC0xXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIHRoZSBsaXN0IHVwZGF0ZSBhbmQgcmVmcmVzaCB0aGUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZnJhZ0Jsb2NrIHt2bXMsIGRhdGEsIGNoaWxkcmVufVxuICogQHBhcmFtIHtvYmplY3R9IGluZm8gICAgICB7Z2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZX1cbiAqL1xuZnVuY3Rpb24gYmluZFJlcGVhdCAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBpbmZvKSB7XG4gIGNvbnN0IHZtcyA9IGZyYWdCbG9jay52bXNcbiAgY29uc3QgY2hpbGRyZW4gPSBmcmFnQmxvY2suY2hpbGRyZW5cbiAgY29uc3QgeyBnZXR0ZXIsIHRyYWNrQnksIG9sZFN0eWxlIH0gPSBpbmZvXG4gIGNvbnN0IGtleU5hbWUgPSBpbmZvLmtleVxuICBjb25zdCB2YWx1ZU5hbWUgPSBpbmZvLnZhbHVlXG5cbiAgZnVuY3Rpb24gY29tcGlsZUl0ZW0gKGl0ZW0sIGluZGV4LCBjb250ZXh0KSB7XG4gICAgbGV0IG1lcmdlZERhdGFcbiAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgIG1lcmdlZERhdGEgPSBpdGVtXG4gICAgICBpZiAoaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgIGlmICghbWVyZ2VkRGF0YS5oYXNPd25Qcm9wZXJ0eSgnSU5ERVgnKSkge1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXJnZWREYXRhLCAnSU5ERVgnLCB7XG4gICAgICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFwiSU5ERVhcIiBpbiByZXBlYXQgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgICAgICAgJ3BsZWFzZSB1c2UgXCIkaW5kZXhcIiBpbnN0ZWFkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBFYWNoIGxpc3QgaXRlbSBtdXN0IGJlIGFuIG9iamVjdCBpbiBvbGQtc3R5bGUgcmVwZWF0LCAnXG4gICAgICAgICAgKyAncGxlYXNlIHVzZSBgcmVwZWF0PXt7diBpbiBsaXN0fX1gIGluc3RlYWQuJylcbiAgICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICBtZXJnZWREYXRhW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbWVyZ2VkRGF0YSA9IHt9XG4gICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgIG1lcmdlZERhdGFbdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICB9XG4gICAgY29uc3QgbmV3Q29udGV4dCA9IG1lcmdlQ29udGV4dChjb250ZXh0LCBtZXJnZWREYXRhKVxuICAgIHZtcy5wdXNoKG5ld0NvbnRleHQpXG4gICAgY29tcGlsZShuZXdDb250ZXh0LCB0YXJnZXQsIGZyYWdCbG9jaywgeyByZXBlYXQ6IGl0ZW0gfSlcbiAgfVxuXG4gIGNvbnN0IGxpc3QgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIGdldHRlciwgJ3JlcGVhdCcsXG4gICAgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1tKUyBGcmFtZXdvcmtdIHRoZSBcInJlcGVhdFwiIGl0ZW0gaGFzIGNoYW5nZWQnLCBkYXRhKVxuICAgICAgaWYgKCFmcmFnQmxvY2spIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZENoaWxkcmVuID0gY2hpbGRyZW4uc2xpY2UoKVxuICAgICAgY29uc3Qgb2xkVm1zID0gdm1zLnNsaWNlKClcbiAgICAgIGNvbnN0IG9sZERhdGEgPSBmcmFnQmxvY2suZGF0YS5zbGljZSgpXG4gICAgICAvLyAxLiBjb2xsZWN0IGFsbCBuZXcgcmVmcyB0cmFjayBieVxuICAgICAgY29uc3QgdHJhY2tNYXAgPSB7fVxuICAgICAgY29uc3QgcmV1c2VkTWFwID0ge31cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoa2V5ID09IG51bGwgfHwga2V5ID09PSAnJykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRyYWNrTWFwW2tleV0gPSBpdGVtXG4gICAgICB9KVxuXG4gICAgICAvLyAyLiByZW1vdmUgdW51c2VkIGVsZW1lbnQgZm9yZWFjaCBvbGQgaXRlbVxuICAgICAgY29uc3QgcmV1c2VkTGlzdCA9IFtdXG4gICAgICBvbGREYXRhLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRyYWNrQnkgPyBpdGVtW3RyYWNrQnldIDogKG9sZFN0eWxlID8gaXRlbVtrZXlOYW1lXSA6IGluZGV4KVxuICAgICAgICBpZiAodHJhY2tNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJldXNlZE1hcFtrZXldID0ge1xuICAgICAgICAgICAgaXRlbSwgaW5kZXgsIGtleSxcbiAgICAgICAgICAgIHRhcmdldDogb2xkQ2hpbGRyZW5baW5kZXhdLFxuICAgICAgICAgICAgdm06IG9sZFZtc1tpbmRleF1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV1c2VkTGlzdC5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlVGFyZ2V0KHZtLCBvbGRDaGlsZHJlbltpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDMuIGNyZWF0ZSBuZXcgZWxlbWVudCBmb3JlYWNoIG5ldyBpdGVtXG4gICAgICBjaGlsZHJlbi5sZW5ndGggPSAwXG4gICAgICB2bXMubGVuZ3RoID0gMFxuICAgICAgZnJhZ0Jsb2NrLmRhdGEgPSBkYXRhLnNsaWNlKClcbiAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gZnJhZ0Jsb2NrLnN0YXJ0XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIGNvbnN0IHJldXNlZCA9IHJldXNlZE1hcFtrZXldXG4gICAgICAgIGlmIChyZXVzZWQpIHtcbiAgICAgICAgICBpZiAocmV1c2VkLml0ZW0gPT09IHJldXNlZExpc3RbMF0pIHtcbiAgICAgICAgICAgIHJldXNlZExpc3Quc2hpZnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZExpc3QuJHJlbW92ZShyZXVzZWQuaXRlbSlcbiAgICAgICAgICAgIG1vdmVUYXJnZXQodm0sIHJldXNlZC50YXJnZXQsIGZyYWdCbG9jay51cGRhdGVNYXJrLCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKHJldXNlZC50YXJnZXQpXG4gICAgICAgICAgdm1zLnB1c2gocmV1c2VkLnZtKVxuICAgICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV1c2VkLnZtID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldXNlZC52bVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXVzZWQudm1ba2V5TmFtZV0gPSBpbmRleFxuICAgICAgICAgIGZyYWdCbG9jay51cGRhdGVNYXJrID0gcmV1c2VkLnRhcmdldFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB2bSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgZGVsZXRlIGZyYWdCbG9jay51cGRhdGVNYXJrXG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRhdGEgPSBsaXN0LnNsaWNlKDApXG4gIGxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb21waWxlSXRlbShpdGVtLCBpbmRleCwgdm0pXG4gIH0pXG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGRpc3BsYXkgdXBkYXRlIGFuZCBhZGQvcmVtb3ZlIHRoZSBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGZyYWdCbG9ja1xuICogQHBhcmFtICB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGJpbmRTaG93biAodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKSB7XG4gIGNvbnN0IGRpc3BsYXkgPSB3YXRjaEJsb2NrKHZtLCBmcmFnQmxvY2ssIHRhcmdldC5zaG93biwgJ3Nob3duJyxcbiAgICAoZGlzcGxheSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gdGhlIFwiaWZcIiBpdGVtIHdhcyBjaGFuZ2VkJywgZGlzcGxheSlcblxuICAgICAgaWYgKCFmcmFnQmxvY2sgfHwgISFmcmFnQmxvY2suZGlzcGxheSA9PT0gISFkaXNwbGF5KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgICAgIGlmIChkaXNwbGF5KSB7XG4gICAgICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVRhcmdldCh2bSwgZnJhZ0Jsb2NrLCB0cnVlKVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGZyYWdCbG9jay5kaXNwbGF5ID0gISFkaXNwbGF5XG4gIGlmIChkaXNwbGF5KSB7XG4gICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpXG4gIH1cbn1cblxuLyoqXG4gKiBXYXRjaCBjYWxjIHZhbHVlIGNoYW5nZXMgYW5kIGFwcGVuZCBjZXJ0YWluIHR5cGUgYWN0aW9uIHRvIGRpZmZlci5cbiAqIEl0IGlzIHVzZWQgZm9yIGlmIG9yIHJlcGVhdCBkYXRhLWJpbmRpbmcgZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBjYWxjXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgdHlwZVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqIEByZXR1cm4ge2FueX0gICAgICBpbml0IHZhbHVlIG9mIGNhbGNcbiAqL1xuZnVuY3Rpb24gd2F0Y2hCbG9jayAodm0sIGZyYWdCbG9jaywgY2FsYywgdHlwZSwgaGFuZGxlcikge1xuICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gIGNvbnN0IGNvbmZpZyA9IHt9XG4gIGNvbnN0IGRlcHRoID0gKGZyYWdCbG9jay5lbGVtZW50LmRlcHRoIHx8IDApICsgMVxuXG4gIHJldHVybiB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgY29uZmlnLmxhdGVzdFZhbHVlID0gdmFsdWVcbiAgICBpZiAoZGlmZmVyICYmICFjb25maWcucmVjb3JkZWQpIHtcbiAgICAgIGRpZmZlci5hcHBlbmQodHlwZSwgZGVwdGgsIGZyYWdCbG9jay5ibG9ja0lkLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhdGVzdFZhbHVlID0gY29uZmlnLmxhdGVzdFZhbHVlXG4gICAgICAgIGhhbmRsZXIobGF0ZXN0VmFsdWUpXG4gICAgICAgIGNvbmZpZy5yZWNvcmRlZCA9IGZhbHNlXG4gICAgICAgIGNvbmZpZy5sYXRlc3RWYWx1ZSA9IHVuZGVmaW5lZFxuICAgICAgfSlcbiAgICB9XG4gICAgY29uZmlnLnJlY29yZGVkID0gdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIENsb25lIGEgY29udGV4dCBhbmQgbWVyZ2UgY2VydGFpbiBkYXRhLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gbWVyZ2VkRGF0YVxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBtZXJnZUNvbnRleHQgKGNvbnRleHQsIG1lcmdlZERhdGEpIHtcbiAgY29uc3QgbmV3Q29udGV4dCA9IE9iamVjdC5jcmVhdGUoY29udGV4dClcbiAgbmV3Q29udGV4dC5fZGF0YSA9IG1lcmdlZERhdGFcbiAgaW5pdERhdGEobmV3Q29udGV4dClcbiAgaW5pdENvbXB1dGVkKG5ld0NvbnRleHQpXG4gIG5ld0NvbnRleHQuX3JlYWxQYXJlbnQgPSBjb250ZXh0XG4gIHJldHVybiBuZXdDb250ZXh0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vY29tcGlsZXIuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIERpcmVjdGl2ZSBQYXJzZXJcbiAqL1xuXG5pbXBvcnQgeyBiaW5kLCB0eXBvZiB9IGZyb20gJy4uL3V0aWwnXG5cbmltcG9ydCBXYXRjaGVyIGZyb20gJy4uL2NvcmUvd2F0Y2hlcidcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCB7IG5hdGl2ZUNvbXBvbmVudE1hcCB9ID0gY29uZmlnXG5cbmNvbnN0IFNFVFRFUlMgPSB7XG4gIGF0dHI6ICdzZXRBdHRyJyxcbiAgc3R5bGU6ICdzZXRTdHlsZScsXG4gIGV2ZW50OiAnYWRkRXZlbnQnXG59XG5cbi8qKlxuICogYXBwbHkgdGhlIG5hdGl2ZSBjb21wb25lbnQncyBvcHRpb25zKHNwZWNpZmllZCBieSB0ZW1wbGF0ZS50eXBlKVxuICogdG8gdGhlIHRlbXBsYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseU5haXR2ZUNvbXBvbmVudE9wdGlvbnMgKHRlbXBsYXRlKSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gdGVtcGxhdGVcbiAgY29uc3Qgb3B0aW9ucyA9IG5hdGl2ZUNvbXBvbmVudE1hcFt0eXBlXVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAodGVtcGxhdGVba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIHRlbXBsYXRlW2tleV0gPSBvcHRpb25zW2tleV1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHR5cG9mKHRlbXBsYXRlW2tleV0pID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBvZihvcHRpb25zW2tleV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKGNvbnN0IHN1YmtleSBpbiBvcHRpb25zW2tleV0pIHtcbiAgICAgICAgICBpZiAodGVtcGxhdGVba2V5XVtzdWJrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBsYXRlW2tleV1bc3Via2V5XSA9IG9wdGlvbnNba2V5XVtzdWJrZXldXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBhbGwgaWQsIGF0dHIsIGNsYXNzbmFtZXMsIHN0eWxlLCBldmVudHMgdG8gYW4gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEVsZW1lbnQgKHZtLCBlbCwgdGVtcGxhdGUpIHtcbiAgc2V0SWQodm0sIGVsLCB0ZW1wbGF0ZS5pZCwgdm0pXG4gIHNldEF0dHIodm0sIGVsLCB0ZW1wbGF0ZS5hdHRyKVxuICBzZXRDbGFzcyh2bSwgZWwsIHRlbXBsYXRlLmNsYXNzTGlzdClcbiAgc2V0U3R5bGUodm0sIGVsLCB0ZW1wbGF0ZS5zdHlsZSlcbiAgYmluZEV2ZW50cyh2bSwgZWwsIHRlbXBsYXRlLmV2ZW50cylcbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBwcm9wcyB0byBzdWIgdm0gYW5kIGJpbmQgYWxsIHN0eWxlLCBldmVudHMgdG8gdGhlIHJvb3QgZWxlbWVudFxuICogb2YgdGhlIHN1YiB2bSBpZiBpdCBkb2Vzbid0IGhhdmUgYSByZXBsYWNlZCBtdWx0aS1ub2RlIGZyYWdtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kU3ViVm0gKHZtLCBzdWJWbSwgdGVtcGxhdGUsIHJlcGVhdEl0ZW0pIHtcbiAgc3ViVm0gPSBzdWJWbSB8fCB7fVxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlIHx8IHt9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHN1YlZtLl9vcHRpb25zIHx8IHt9XG5cbiAgLy8gYmluZCBwcm9wc1xuICBsZXQgcHJvcHMgPSBvcHRpb25zLnByb3BzXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgcHJvcHMgPSBwcm9wcy5yZWR1Y2UoKHJlc3VsdCwgdmFsdWUpID0+IHtcbiAgICAgIHJlc3VsdFt2YWx1ZV0gPSB0cnVlXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwge30pXG4gIH1cblxuICBtZXJnZVByb3BzKHJlcGVhdEl0ZW0sIHByb3BzLCB2bSwgc3ViVm0pXG4gIG1lcmdlUHJvcHModGVtcGxhdGUuYXR0ciwgcHJvcHMsIHZtLCBzdWJWbSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTdWJWbUFmdGVySW5pdGlhbGl6ZWQgKHZtLCBzdWJWbSwgdGVtcGxhdGUpIHtcbiAgbWVyZ2VDbGFzc1N0eWxlKHRlbXBsYXRlLmNsYXNzTGlzdCwgdm0sIHN1YlZtKVxuICBtZXJnZVN0eWxlKHRlbXBsYXRlLnN0eWxlLCB2bSwgc3ViVm0pXG59XG5cbmZ1bmN0aW9uIG1lcmdlUHJvcHMgKHRhcmdldCwgcHJvcHMsIHZtLCBzdWJWbSkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVyblxuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldCkge1xuICAgIGlmICghcHJvcHMgfHwgcHJvcHNba2V5XSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHdhdGNoKHZtLCB2YWx1ZSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBzdWJWbVtrZXldID0gdlxuICAgICAgICB9KVxuICAgICAgICBzdWJWbVtrZXldID0gcmV0dXJuVmFsdWVcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdWJWbVtrZXldID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VTdHlsZSAodGFyZ2V0LCB2bSwgc3ViVm0pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXRba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gd2F0Y2godm0sIHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICBpZiAoc3ViVm0uX3Jvb3RFbCkge1xuICAgICAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCB2KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHJldHVyblZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgIHN1YlZtLl9yb290RWwuc2V0U3R5bGUoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VDbGFzc1N0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBjb25zdCBjc3MgPSB2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5zdHlsZSB8fCB7fVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIXN1YlZtLl9yb290RWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgdGFyZ2V0LCB2ID0+IHtcbiAgICAgIHNldENsYXNzU3R5bGUoc3ViVm0uX3Jvb3RFbCwgY3NzLCB2KVxuICAgIH0pXG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHZhbHVlKVxuICB9XG4gIGVsc2UgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgaWQgdG8gYW4gZWxlbWVudFxuICogZWFjaCBpZCBpcyB1bmlxdWUgaW4gYSB3aG9sZSB2bVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SWQgKHZtLCBlbCwgaWQsIHRhcmdldCkge1xuICBjb25zdCBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWFwLCB7XG4gICAgdm06IHtcbiAgICAgIHZhbHVlOiB0YXJnZXQsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSxcbiAgICBlbDoge1xuICAgICAgZ2V0OiAoKSA9PiBlbCB8fCB0YXJnZXQuX3Jvb3RFbCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9XG4gIH0pXG5cbiAgaWYgKHR5cGVvZiBpZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBpZFxuICAgIGlkID0gaGFuZGxlci5jYWxsKHZtKVxuICAgIGlmIChpZCkge1xuICAgICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgICB9XG4gICAgd2F0Y2godm0sIGhhbmRsZXIsIChuZXdJZCkgPT4ge1xuICAgICAgaWYgKG5ld0lkKSB7XG4gICAgICAgIHZtLl9pZHNbbmV3SWRdID0gbWFwXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBlbHNlIGlmIChpZCAmJiB0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgdm0uX2lkc1tpZF0gPSBtYXBcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgYXR0ciB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldEF0dHIgKHZtLCBlbCwgYXR0cikge1xuICBiaW5kRGlyKHZtLCBlbCwgJ2F0dHInLCBhdHRyKVxufVxuXG5mdW5jdGlvbiBzZXRDbGFzc1N0eWxlIChlbCwgY3NzLCBjbGFzc0xpc3QpIHtcbiAgY29uc3QgY2xhc3NTdHlsZSA9IHt9XG4gIGNvbnN0IGxlbmd0aCA9IGNsYXNzTGlzdC5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBjc3NbY2xhc3NMaXN0W2ldXVxuICAgIGlmIChzdHlsZSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGUpIHtcbiAgICAgICAgY2xhc3NTdHlsZVtrZXldID0gc3R5bGVba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbC5zZXRDbGFzc1N0eWxlKGNsYXNzU3R5bGUpXG59XG5cbi8qKlxuICogYmluZCBjbGFzc25hbWVzIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q2xhc3MgKHZtLCBlbCwgY2xhc3NMaXN0KSB7XG4gIGlmICh0eXBlb2YgY2xhc3NMaXN0ICE9PSAnZnVuY3Rpb24nICYmICFBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc0xpc3QpICYmICFjbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgZWwuc2V0Q2xhc3NTdHlsZSh7fSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IHN0eWxlID0gdm0uX29wdGlvbnMgJiYgdm0uX29wdGlvbnMuc3R5bGUgfHwge31cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCBjbGFzc0xpc3QsIHYgPT4ge1xuICAgICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIHYpXG4gICAgfSlcbiAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgdmFsdWUpXG4gIH1cbiAgZWxzZSB7XG4gICAgc2V0Q2xhc3NTdHlsZShlbCwgc3R5bGUsIGNsYXNzTGlzdClcbiAgfVxufVxuXG4vKipcbiAqIGJpbmQgc3R5bGUgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZSAodm0sIGVsLCBzdHlsZSkge1xuICBiaW5kRGlyKHZtLCBlbCwgJ3N0eWxlJywgc3R5bGUpXG59XG5cbi8qKlxuICogYWRkIGFuIGV2ZW50IHR5cGUgYW5kIGhhbmRsZXIgdG8gYW4gZWxlbWVudCBhbmQgZ2VuZXJhdGUgYSBkb20gdXBkYXRlXG4gKi9cbmZ1bmN0aW9uIHNldEV2ZW50ICh2bSwgZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgZWwuYWRkRXZlbnQodHlwZSwgYmluZChoYW5kbGVyLCB2bSkpXG59XG5cbi8qKlxuICogYWRkIGFsbCBldmVudHMgb2YgYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBiaW5kRXZlbnRzICh2bSwgZWwsIGV2ZW50cykge1xuICBpZiAoIWV2ZW50cykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBsZXQgaGFuZGxlciA9IGV2ZW50c1trZXldXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnc3RyaW5nJykge1xuICAgICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBUaGUgbWV0aG9kIFwiJHtoYW5kbGVyfVwiIGlzIG5vdCBkZWZpbmVkLmApXG4gICAgICB9XG4gICAgfVxuICAgIHNldEV2ZW50KHZtLCBlbCwga2V5LCBoYW5kbGVyKVxuICB9XG59XG5cbi8qKlxuICogc2V0IGEgc2VyaWVzIG9mIG1lbWJlcnMgYXMgYSBraW5kIG9mIGFuIGVsZW1lbnRcbiAqIGZvciBleGFtcGxlOiBzdHlsZSwgYXR0ciwgLi4uXG4gKiBpZiB0aGUgdmFsdWUgaXMgYSBmdW5jdGlvbiB0aGVuIGJpbmQgdGhlIGRhdGEgY2hhbmdlc1xuICovXG5mdW5jdGlvbiBiaW5kRGlyICh2bSwgZWwsIG5hbWUsIGRhdGEpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV1cbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJpbmRLZXkodm0sIGVsLCBuYW1lLCBrZXksIHZhbHVlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsW1NFVFRFUlNbbmFtZV1dKGtleSwgdmFsdWUpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogYmluZCBkYXRhIGNoYW5nZXMgdG8gYSBjZXJ0YWluIGtleSB0byBhIG5hbWUgc2VyaWVzIGluIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gYmluZEtleSAodm0sIGVsLCBuYW1lLCBrZXksIGNhbGMpIHtcbiAgY29uc3QgbWV0aG9kTmFtZSA9IFNFVFRFUlNbbmFtZV1cbiAgLy8gd2F0Y2ggdGhlIGNhbGMsIGFuZCByZXR1cm5zIGEgdmFsdWUgYnkgY2FsYy5jYWxsKClcbiAgY29uc3QgdmFsdWUgPSB3YXRjaCh2bSwgY2FsYywgKHZhbHVlKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlciAoKSB7XG4gICAgICBlbFttZXRob2ROYW1lXShrZXksIHZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBkaWZmZXIgPSB2bSAmJiB2bS5fYXBwICYmIHZtLl9hcHAuZGlmZmVyXG4gICAgaWYgKGRpZmZlcikge1xuICAgICAgZGlmZmVyLmFwcGVuZCgnZWxlbWVudCcsIGVsLmRlcHRoLCBlbC5yZWYsIGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaGFuZGxlcigpXG4gICAgfVxuICB9KVxuXG4gIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG59XG5cbi8qKlxuICogd2F0Y2ggYSBjYWxjIGZ1bmN0aW9uIGFuZCBjYWxsYmFjayBpZiB0aGUgY2FsYyB2YWx1ZSBjaGFuZ2VzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3YXRjaCAodm0sIGNhbGMsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgY2FsYywgZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnICYmIHZhbHVlID09PSBvbGRWYWx1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNhbGxiYWNrKHZhbHVlKVxuICB9KVxuXG4gIHJldHVybiB3YXRjaGVyLnZhbHVlXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vZGlyZWN0aXZlLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IERvY3VtZW50ICYgRWxlbWVudCBIZWxwZXJzLlxuICpcbiAqIHJlcXVpcmVkOlxuICogRG9jdW1lbnQjOiBjcmVhdGVFbGVtZW50LCBjcmVhdGVDb21tZW50LCBnZXRSZWZcbiAqIEVsZW1lbnQjOiBhcHBlbmRDaGlsZCwgaW5zZXJ0QmVmb3JlLCByZW1vdmVDaGlsZCwgbmV4dFNpYmxpbmdcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIGJvZHkgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9keSAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVCb2R5KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGVsZW1lbnQgYnkgdHlwZVxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gdHlwZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCAodm0sIHR5cGUpIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgcmV0dXJuIGRvYy5jcmVhdGVFbGVtZW50KHR5cGUpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBmcmFnIGJsb2NrIGZvciBhbiBlbGVtZW50LlxuICogVGhlIGZyYWcgYmxvY2sgaGFzIGEgc3RhcnRlciwgZW5kZXIgYW5kIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2NrICh2bSwgZWxlbWVudCkge1xuICBjb25zdCBzdGFydCA9IGNyZWF0ZUJsb2NrU3RhcnQodm0pXG4gIGNvbnN0IGVuZCA9IGNyZWF0ZUJsb2NrRW5kKHZtKVxuICBjb25zdCBibG9ja0lkID0gbGFzdGVzdEJsb2NrSWQrK1xuICBpZiAoZWxlbWVudC5lbGVtZW50KSB7XG4gICAgbGV0IHVwZGF0ZU1hcmsgPSBlbGVtZW50LnVwZGF0ZU1hcmtcbiAgICBpZiAodXBkYXRlTWFyaykge1xuICAgICAgaWYgKHVwZGF0ZU1hcmsuZWxlbWVudCkge1xuICAgICAgICB1cGRhdGVNYXJrID0gdXBkYXRlTWFyay5lbmRcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRBZnRlcihlbmQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QWZ0ZXIoc3RhcnQsIHVwZGF0ZU1hcmspXG4gICAgICBlbGVtZW50LnVwZGF0ZU1hcmsgPSBlbmRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbGVtZW50LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0LCBlbGVtZW50LmVuZClcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRCZWZvcmUoZW5kLCBlbGVtZW50LmVuZClcbiAgICB9XG4gICAgZWxlbWVudCA9IGVsZW1lbnQuZWxlbWVudFxuICB9XG4gIGVsc2Uge1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3RhcnQpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbmQpXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZCwgZWxlbWVudCwgYmxvY2tJZCB9XG59XG5cbmxldCBsYXN0ZXN0QmxvY2tJZCA9IDFcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIHN0YXJ0ZXIuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrU3RhcnQgKHZtKSB7XG4gIGNvbnN0IGRvYyA9IHZtLl9hcHAuZG9jXG4gIGNvbnN0IGFuY2hvciA9IGRvYy5jcmVhdGVDb21tZW50KCdzdGFydCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGJsb2NrIGVuZGVyLlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICovXG5mdW5jdGlvbiBjcmVhdGVCbG9ja0VuZCAodm0pIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgY29uc3QgYW5jaG9yID0gZG9jLmNyZWF0ZUNvbW1lbnQoJ2VuZCcpXG4gIHJldHVybiBhbmNob3Jcbn1cblxuLyoqXG4gKiBBdHRhY2ggdGFyZ2V0IHRvIGEgY2VydGFpbiBkZXN0IHVzaW5nIGFwcGVuZENoaWxkIGJ5IGRlZmF1bHQuXG4gKiBJZiB0aGUgZGVzdCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBpbnNlcnQgYmVmb3JlIHRoZSBlbmRlci5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gYXR0YWNoIHRoZSBzdGFydGVyIGFuZCBlbmRlciBpbiBvcmRlci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBkZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hUYXJnZXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgaWYgKGRlc3QuZWxlbWVudCkge1xuICAgIGNvbnN0IGJlZm9yZSA9IGRlc3QuZW5kXG4gICAgY29uc3QgYWZ0ZXIgPSBkZXN0LnVwZGF0ZU1hcmtcbiAgICAvLyBwdXNoIG5ldyB0YXJnZXQgZm9yIHdhdGNoIGxpc3QgdXBkYXRlIGxhdGVyXG4gICAgaWYgKGRlc3QuY2hpbGRyZW4pIHtcbiAgICAgIGRlc3QuY2hpbGRyZW4ucHVzaCh0YXJnZXQpXG4gICAgfVxuICAgIC8vIGZvciBjaGVjayByZXBlYXQgY2FzZVxuICAgIGlmIChhZnRlcikge1xuICAgICAgY29uc3Qgc2lnbmFsID0gbW92ZVRhcmdldCh2bSwgdGFyZ2V0LCBhZnRlcilcbiAgICAgIGRlc3QudXBkYXRlTWFyayA9IHRhcmdldC5lbGVtZW50ID8gdGFyZ2V0LmVuZCA6IHRhcmdldFxuICAgICAgcmV0dXJuIHNpZ25hbFxuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgICAgZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQuc3RhcnQsIGJlZm9yZSlcbiAgICAgIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LmVuZCwgYmVmb3JlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldCwgYmVmb3JlKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBpZiAodGFyZ2V0LmVsZW1lbnQpIHtcbiAgICAgIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0LnN0YXJ0KVxuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuZW5kKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBkZXN0LmFwcGVuZENoaWxkKHRhcmdldClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIHRhcmdldCBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuIFRoZSB0YXJnZXQgbWF5YmUgYmxvY2sgb3IgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1vdmVUYXJnZXQgKHZtLCB0YXJnZXQsIGFmdGVyKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJldHVybiBtb3ZlQmxvY2sodGFyZ2V0LCBhZnRlcilcbiAgfVxuICByZXR1cm4gbW92ZUVsZW1lbnQodGFyZ2V0LCBhZnRlcilcbn1cblxuLyoqXG4gKiBNb3ZlIGVsZW1lbnQgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtICB7b2JqZWN0fSBiZWZvcmVcbiAqL1xuZnVuY3Rpb24gbW92ZUVsZW1lbnQgKGVsZW1lbnQsIGFmdGVyKSB7XG4gIGNvbnN0IHBhcmVudCA9IGFmdGVyLnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHJldHVybiBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCwgYWZ0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBNb3ZlIGFsbCBlbGVtZW50cyBvZiB0aGUgYmxvY2sgYmVmb3JlIGEgY2VydGFpbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5mdW5jdGlvbiBtb3ZlQmxvY2sgKGZyYWdCbG9jaywgYWZ0ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnRcbiAgICBsZXQgc2lnbmFsXG4gICAgY29uc3QgZ3JvdXAgPSBbZWxdXG5cbiAgICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICAgIGVsID0gZWwubmV4dFNpYmxpbmdcbiAgICAgIGdyb3VwLnB1c2goZWwpXG4gICAgfVxuXG4gICAgbGV0IHRlbXAgPSBhZnRlclxuICAgIGdyb3VwLmV2ZXJ5KChlbCkgPT4ge1xuICAgICAgc2lnbmFsID0gcGFyZW50Lmluc2VydEFmdGVyKGVsLCB0ZW1wKVxuICAgICAgdGVtcCA9IGVsXG4gICAgICByZXR1cm4gc2lnbmFsICE9PSAtMVxuICAgIH0pXG5cbiAgICByZXR1cm4gc2lnbmFsXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGFyZ2V0IGZyb20gRE9NIHRyZWUuXG4gKiBJZiB0aGUgdGFyZ2V0IGlzIGEgZnJhZyBibG9jayB0aGVuIGNhbGwgX3JlbW92ZUJsb2NrXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhcmdldCAodm0sIHRhcmdldCwgcHJlc2VydmVCbG9jayA9IGZhbHNlKSB7XG4gIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgIHJlbW92ZUJsb2NrKHRhcmdldCwgcHJlc2VydmVCbG9jaylcbiAgfVxuICBlbHNlIHtcbiAgICByZW1vdmVFbGVtZW50KHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNlcnRhaW4gZWxlbWVudC5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50ICh0YXJnZXQpIHtcbiAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcblxuICBpZiAocGFyZW50KSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGZyYWcgYmxvY2suXG4gKiBUaGUgc2Vjb25kIHBhcmFtIGRlY2lkZXMgd2hldGhlciB0aGUgYmxvY2sgc2VsZiBzaG91bGQgYmUgcmVtb3ZlZCB0b28uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtCb29sZWFufSBwcmVzZXJ2ZUJsb2NrPWZhbHNlXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUJsb2NrIChmcmFnQmxvY2ssIHByZXNlcnZlQmxvY2sgPSBmYWxzZSkge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgZWwgPSBmcmFnQmxvY2suc3RhcnQubmV4dFNpYmxpbmdcblxuICB3aGlsZSAoZWwgJiYgZWwgIT09IGZyYWdCbG9jay5lbmQpIHtcbiAgICByZXN1bHQucHVzaChlbClcbiAgICBlbCA9IGVsLm5leHRTaWJsaW5nXG4gIH1cblxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5zdGFydClcbiAgfVxuICByZXN1bHQuZm9yRWFjaCgoZWwpID0+IHtcbiAgICByZW1vdmVFbGVtZW50KGVsKVxuICB9KVxuICBpZiAoIXByZXNlcnZlQmxvY2spIHtcbiAgICByZW1vdmVFbGVtZW50KGZyYWdCbG9jay5lbmQpXG4gIH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanNcbiAqKi8iLCJmdW5jdGlvbiBFdnQgKHR5cGUsIGRldGFpbCkge1xuICBpZiAoZGV0YWlsIGluc3RhbmNlb2YgRXZ0KSB7XG4gICAgcmV0dXJuIGRldGFpbFxuICB9XG5cbiAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIHRoaXMuZGV0YWlsID0gZGV0YWlsXG4gIHRoaXMudHlwZSA9IHR5cGVcblxuICBsZXQgc2hvdWxkU3RvcCA9IGZhbHNlXG4gIHRoaXMuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzaG91bGRTdG9wID0gdHJ1ZVxuICB9XG4gIHRoaXMuaGFzU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2hvdWxkU3RvcFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkZW1pdCAodHlwZSwgZGV0YWlsKSB7XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdXG4gIGlmIChoYW5kbGVyTGlzdCkge1xuICAgIGNvbnN0IGV2dCA9IG5ldyBFdnQodHlwZSwgZGV0YWlsKVxuICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBldnQpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gJGRpc3BhdGNoICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50LiRkaXNwYXRjaCkge1xuICAgIHRoaXMuX3BhcmVudC4kZGlzcGF0Y2godHlwZSwgZXZ0KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkYnJvYWRjYXN0ICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gIHRoaXMuJGVtaXQodHlwZSwgZXZ0KVxuXG4gIGlmICghZXZ0Lmhhc1N0b3BwZWQoKSAmJiB0aGlzLl9jaGlsZHJlblZtcykge1xuICAgIHRoaXMuX2NoaWxkcmVuVm1zLmZvckVhY2goKHN1YlZtKSA9PiB7XG4gICAgICBzdWJWbS4kYnJvYWRjYXN0KHR5cGUsIGV2dClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkb24gKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV0gfHwgW11cbiAgaGFuZGxlckxpc3QucHVzaChoYW5kbGVyKVxuICBldmVudHNbdHlwZV0gPSBoYW5kbGVyTGlzdFxuXG4gIC8vIGZpeGVkIG9sZCB2ZXJzaW9uIGxpZmVjeWNsZSBkZXNpZ25cbiAgaWYgKHR5cGUgPT09ICdob29rOnJlYWR5JyAmJiB0aGlzLl9yZWFkeSkge1xuICAgIHRoaXMuJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkb2ZmICh0eXBlLCBoYW5kbGVyKSB7XG4gIGlmICghdHlwZSkge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGV2ZW50cyA9IHRoaXMuX3ZtRXZlbnRzXG4gIGlmICghaGFuZGxlcikge1xuICAgIGRlbGV0ZSBldmVudHNbdHlwZV1cbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXVxuICBpZiAoIWhhbmRsZXJMaXN0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaGFuZGxlckxpc3QuJHJlbW92ZShoYW5kbGVyKVxufVxuXG5jb25zdCBMSUZFX0NZQ0xFX1RZUEVTID0gWydpbml0JywgJ2NyZWF0ZWQnLCAncmVhZHknXVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0sIGV4dGVybmFsRXZlbnRzKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB2bS5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCBldmVudHMgPSBvcHRpb25zLmV2ZW50cyB8fCB7fVxuICBmb3IgKGNvbnN0IHR5cGUxIGluIGV2ZW50cykge1xuICAgIHZtLiRvbih0eXBlMSwgZXZlbnRzW3R5cGUxXSlcbiAgfVxuICBmb3IgKGNvbnN0IHR5cGUyIGluIGV4dGVybmFsRXZlbnRzKSB7XG4gICAgdm0uJG9uKHR5cGUyLCBleHRlcm5hbEV2ZW50c1t0eXBlMl0pXG4gIH1cbiAgTElGRV9DWUNMRV9UWVBFUy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgdm0uJG9uKGBob29rOiR7dHlwZX1gLCBvcHRpb25zW3R5cGVdKVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4aW5FdmVudHMgKHZtKSB7XG4gIHZtLiRlbWl0ID0gJGVtaXRcbiAgdm0uJGRpc3BhdGNoID0gJGRpc3BhdGNoXG4gIHZtLiRicm9hZGNhc3QgPSAkYnJvYWRjYXN0XG4gIHZtLiRvbiA9ICRvblxuICB2bS4kb2ZmID0gJG9mZlxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3ZtL2V2ZW50cy5qc1xuICoqLyIsImxldCBuYXRpdmVNb2R1bGVzID0ge31cblxuZnVuY3Rpb24gYXNzaWduTW9kdWxlcyAobW9kdWxlcywgaWZSZXBsYWNlKSB7XG4gIGZvciAoY29uc3QgbW9kdWxlTmFtZSBpbiBtb2R1bGVzKSB7XG4gICAgLy8gaW5pdCBgbW9kdWxlc1ttb2R1bGVOYW1lXVtdYFxuICAgIGxldCBtZXRob2RzID0gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxuICAgIGlmICghbWV0aG9kcykge1xuICAgICAgbWV0aG9kcyA9IHt9XG4gICAgICBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdID0gbWV0aG9kc1xuICAgIH1cblxuICAgIC8vIHB1c2ggZWFjaCBub24tZXhpc3RlZCBuZXcgbWV0aG9kXG4gICAgbW9kdWxlc1ttb2R1bGVOYW1lXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZXRob2QgPSB7XG4gICAgICAgICAgbmFtZTogbWV0aG9kXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFtZXRob2RzW21ldGhvZC5uYW1lXSB8fCBpZlJlcGxhY2UpIHtcbiAgICAgICAgbWV0aG9kc1ttZXRob2QubmFtZV0gPSBtZXRob2RcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkFwaXMgKEN0b3IsIGFwaXMpIHtcbiAgY29uc3QgcCA9IEN0b3IucHJvdG90eXBlXG5cbiAgZm9yIChjb25zdCBhcGlOYW1lIGluIGFwaXMpIHtcbiAgICBpZiAoIXAuaGFzT3duUHJvcGVydHkoYXBpTmFtZSkpIHtcbiAgICAgIHBbYXBpTmFtZV0gPSBhcGlzW2FwaU5hbWVdXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck1vZHVsZXMgKCkge1xuICBuYXRpdmVNb2R1bGVzID0ge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZHVsZSAobW9kdWxlTmFtZSkge1xuICByZXR1cm4gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxufVxuXG4vKipcbiAqIEBjb250ZXh0IGEgaW5zdGFuY2Ugb2YgQXBwSW5zdGFuY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVNb2R1bGUgKG1vZHVsZU5hbWUpIHtcbiAgY29uc3QgbWV0aG9kcyA9IG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgY29uc3QgdGFyZ2V0ID0ge31cblxuICBmb3IgKGNvbnN0IG1ldGhvZE5hbWUgaW4gbWV0aG9kcykge1xuICAgIHRhcmdldFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB0aGlzLmNhbGxUYXNrcyh7XG4gICAgICBtb2R1bGU6IG1vZHVsZU5hbWUsXG4gICAgICBtZXRob2Q6IG1ldGhvZE5hbWUsXG4gICAgICBhcmdzOiBhcmdzXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBAY29udGV4dCBWbVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGVzIChtb2R1bGVzLCBpZlJlcGxhY2UpIHtcbiAgYXNzaWduTW9kdWxlcyhtb2R1bGVzLCBpZlJlcGxhY2UpXG59XG5cbi8qKlxuICogQGNvbnRleHQgVm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTWV0aG9kcyAoYXBpcykge1xuICBhc3NpZ25BcGlzKHRoaXMsIGFwaXMpXG59XG5cbi8qKlxuICogQGNvbnRleHQgYSBpbnN0YW5jZSBvZiBBcHBJbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZUNvbXBvbmVudCAobmFtZSkge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gdGhpc1xuICByZXR1cm4gY3VzdG9tQ29tcG9uZW50TWFwW25hbWVdXG59XG5cbi8qKlxuICogQGNvbnRleHQgYSBpbnN0YW5jZSBvZiBBcHBJbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnQgKG5hbWUsIGRlZikge1xuICBjb25zdCB7IGN1c3RvbUNvbXBvbmVudE1hcCB9ID0gdGhpc1xuXG4gIGlmIChjdXN0b21Db21wb25lbnRNYXBbbmFtZV0pIHtcbiAgICBjb25zb2xlLmVycm9yKGBbSlMgRnJhbWV3b3JrXSBkZWZpbmUgYSBjb21wb25lbnQoJHtuYW1lfSkgdGhhdCBhbHJlYWR5IGV4aXN0c2ApXG4gICAgcmV0dXJuXG4gIH1cblxuICBjdXN0b21Db21wb25lbnRNYXBbbmFtZV0gPSBkZWZcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanNcbiAqKi8iLCJpbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuLyoqXG4gKiBbbm9ybWFsaXplVmVyc2lvbiBkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1N0cmluZ30gVmVyc2lvbi4gaWU6IDEsIDEuMCwgMS4wLjBcbiAqIEByZXR1cm4ge1N0cmluZ30gVmVyc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVmVyc2lvbiAodikge1xuICBjb25zdCBpc1ZhbGlkID0gc2VtdmVyLnZhbGlkKHYpXG4gIGlmIChpc1ZhbGlkKSB7XG4gICAgcmV0dXJuIHZcbiAgfVxuXG4gIHYgPSB0eXBlb2YgKHYpID09PSAnc3RyaW5nJyA/IHYgOiAnJ1xuICBjb25zdCBzcGxpdCA9IHYuc3BsaXQoJy4nKVxuICBsZXQgaSA9IDBcbiAgY29uc3QgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoaSA8IDMpIHtcbiAgICBjb25zdCBzID0gdHlwZW9mIChzcGxpdFtpXSkgPT09ICdzdHJpbmcnICYmIHNwbGl0W2ldID8gc3BsaXRbaV0gOiAnMCdcbiAgICByZXN1bHQucHVzaChzKVxuICAgIGkrK1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcuJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVycm9yIChrZXksIHZhbCwgY3JpdGVyaWEpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGlzRG93bmdyYWRlOiB0cnVlLFxuICAgIGVycm9yVHlwZTogMSxcbiAgICBjb2RlOiAxMDAwXG4gIH1cbiAgY29uc3QgZ2V0TXNnID0gZnVuY3Rpb24gKGtleSwgdmFsLCBjcml0ZXJpYSkge1xuICAgIHJldHVybiAnRG93bmdyYWRlWycgKyBrZXkgKyAnXSA6OiBkZXZpY2VJbmZvICdcbiAgICAgICsgdmFsICsgJyBtYXRjaGVkIGNyaXRlcmlhICcgKyBjcml0ZXJpYVxuICB9XG4gIGNvbnN0IF9rZXkgPSBrZXkudG9Mb3dlckNhc2UoKVxuXG4gIHJlc3VsdC5lcnJvck1lc3NhZ2UgPSBnZXRNc2coa2V5LCB2YWwsIGNyaXRlcmlhKVxuXG4gIGlmIChfa2V5LmluZGV4T2YoJ29zdmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDFcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ2FwcHZlcnNpb24nKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDAyXG4gIH1cbiAgZWxzZSBpZiAoX2tleS5pbmRleE9mKCd3ZWV4dmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDNcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ2RldmljZW1vZGVsJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwNFxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFdFRVggZnJhbWV3b3JrIGlucHV0KGRldmljZUluZm8pXG4gKiB7XG4gKiAgIHBsYXRmb3JtOiAnaU9TJyBvciAnYW5kcm9pZCdcbiAqICAgb3NWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICBhcHBWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICB3ZWV4VmVyc2lvbjogJzEuMC4wJyBvciAnMS4wJyBvciAnMSdcbiAqICAgZERldmljZU1vZGVsOiAnTU9ERUxfTkFNRSdcbiAqIH1cbiAqXG4gKiBkb3duZ3JhZGUgY29uZmlnKGNvbmZpZylcbiAqIHtcbiAqICAgaW9zOiB7XG4gKiAgICAgb3NWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBhcHBWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICB3ZWV4VmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgZGV2aWNlTW9kZWw6IFsnbW9kZWxBJywgJ21vZGVsQicsIC4uLl1cbiAqICAgfSxcbiAqICAgYW5kcm9pZDoge1xuICogICAgIG9zVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgYXBwVmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgd2VleFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGRldmljZU1vZGVsOiBbJ21vZGVsQScsICdtb2RlbEInLCAuLi5dXG4gKiAgIH1cbiAqIH1cbiAqXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBkZXZpY2VJbmZvIFdlZXggU0RLIGZyYW1ld29yayBpbnB1dFxuICogQHBhcmFtICB7b2JqZWN0fSBjb25maWcgICAgIHVzZXIgaW5wdXRcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICB7IGlzRG93bmdyYWRlOiB0cnVlL2ZhbHNlLCBlcnJvck1lc3NhZ2UuLi4gfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2sgKGNvbmZpZywgZGV2aWNlSW5mbykge1xuICBkZXZpY2VJbmZvID0gZGV2aWNlSW5mbyB8fCBnbG9iYWwuV1hFbnZpcm9ubWVudFxuICBkZXZpY2VJbmZvID0gaXNQbGFpbk9iamVjdChkZXZpY2VJbmZvKSA/IGRldmljZUluZm8gOiB7fVxuXG4gIGxldCByZXN1bHQgPSB7XG4gICAgaXNEb3duZ3JhZGU6IGZhbHNlIC8vIGRlZmF1dGwgaXMgcGFzc1xuICB9XG5cbiAgaWYgKHR5cG9mKGNvbmZpZykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsZXQgY3VzdG9tRG93bmdyYWRlID0gY29uZmlnLmNhbGwodGhpcywgZGV2aWNlSW5mbywge1xuICAgICAgc2VtdmVyOiBzZW12ZXIsXG4gICAgICBub3JtYWxpemVWZXJzaW9uOiB0aGlzLm5vcm1hbGl6ZVZlcnNpb25cbiAgICB9KVxuXG4gICAgY3VzdG9tRG93bmdyYWRlID0gISFjdXN0b21Eb3duZ3JhZGVcblxuICAgIHJlc3VsdCA9IGN1c3RvbURvd25ncmFkZSA/IHRoaXMuZ2V0RXJyb3IoJ2N1c3RvbScsICcnLCAnY3VzdG9tIHBhcmFtcycpIDogcmVzdWx0XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uZmlnID0gaXNQbGFpbk9iamVjdChjb25maWcpID8gY29uZmlnIDoge31cblxuICAgIGNvbnN0IHBsYXRmb3JtID0gZGV2aWNlSW5mby5wbGF0Zm9ybSB8fCAndW5rbm93J1xuICAgIGNvbnN0IGRQbGF0Zm9ybSA9IHBsYXRmb3JtLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBjT2JqID0gY29uZmlnW2RQbGF0Zm9ybV0gfHwge31cblxuICAgIGZvciAoY29uc3QgaSBpbiBkZXZpY2VJbmZvKSB7XG4gICAgICBjb25zdCBrZXkgPSBpXG4gICAgICBjb25zdCBrZXlMb3dlciA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICBjb25zdCB2YWwgPSBkZXZpY2VJbmZvW2ldXG4gICAgICBjb25zdCBpc1ZlcnNpb24gPSBrZXlMb3dlci5pbmRleE9mKCd2ZXJzaW9uJykgPj0gMFxuICAgICAgY29uc3QgaXNEZXZpY2VNb2RlbCA9IGtleUxvd2VyLmluZGV4T2YoJ2RldmljZW1vZGVsJykgPj0gMFxuICAgICAgY29uc3QgY3JpdGVyaWEgPSBjT2JqW2ldXG5cbiAgICAgIGlmIChjcml0ZXJpYSAmJiBpc1ZlcnNpb24pIHtcbiAgICAgICAgY29uc3QgYyA9IHRoaXMubm9ybWFsaXplVmVyc2lvbihjcml0ZXJpYSlcbiAgICAgICAgY29uc3QgZCA9IHRoaXMubm9ybWFsaXplVmVyc2lvbihkZXZpY2VJbmZvW2ldKVxuXG4gICAgICAgIGlmIChzZW12ZXIuc2F0aXNmaWVzKGQsIGMpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRFcnJvcihrZXksIHZhbCwgY3JpdGVyaWEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNEZXZpY2VNb2RlbCkge1xuICAgICAgICBjb25zdCBfY3JpdGVyaWEgPSB0eXBvZihjcml0ZXJpYSkgPT09ICdhcnJheScgPyBjcml0ZXJpYSA6IFtjcml0ZXJpYV1cbiAgICAgICAgaWYgKF9jcml0ZXJpYS5pbmRleE9mKHZhbCkgPj0gMCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0RXJyb3Ioa2V5LCB2YWwsIGNyaXRlcmlhKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2Rvd25ncmFkZS5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZlciB7XG4gIGNvbnN0cnVjdG9yIChpZCkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubWFwID0gW11cbiAgICB0aGlzLmhvb2tzID0gW11cbiAgfVxuICBpc0VtcHR5ICgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAubGVuZ3RoID09PSAwXG4gIH1cbiAgYXBwZW5kICh0eXBlLCBkZXB0aCwgcmVmLCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RpbWVyKSB7XG4gICAgICB0aGlzLmhhc1RpbWVyID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzVGltZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmZsdXNoKHRydWUpXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFxuICAgIGlmICghbWFwW2RlcHRoXSkge1xuICAgICAgbWFwW2RlcHRoXSA9IHt9XG4gICAgfVxuICAgIGNvbnN0IGdyb3VwID0gbWFwW2RlcHRoXVxuICAgIGlmICghZ3JvdXBbdHlwZV0pIHtcbiAgICAgIGdyb3VwW3R5cGVdID0ge31cbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgaWYgKCFncm91cFt0eXBlXVtyZWZdKSB7XG4gICAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBbXVxuICAgICAgfVxuICAgICAgZ3JvdXBbdHlwZV1bcmVmXS5wdXNoKGhhbmRsZXIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZ3JvdXBbdHlwZV1bcmVmXSA9IGhhbmRsZXJcbiAgICB9XG4gIH1cbiAgZmx1c2ggKGlzVGltZW91dCkge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwLnNsaWNlKClcbiAgICB0aGlzLm1hcC5sZW5ndGggPSAwXG4gICAgbWFwLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3JlcGVhdCcpXG4gICAgICBjYWxsVHlwZU1hcChncm91cCwgJ3Nob3duJylcbiAgICAgIGNhbGxUeXBlTGlzdChncm91cCwgJ2VsZW1lbnQnKVxuICAgIH0pXG5cbiAgICBjb25zdCBob29rcyA9IHRoaXMuaG9va3Muc2xpY2UoKVxuICAgIHRoaXMuaG9va3MubGVuZ3RoID0gMFxuICAgIGhvb2tzLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICBmbigpXG4gICAgfSlcblxuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuZmx1c2goKVxuICAgIH1cbiAgfVxuICB0aGVuIChmbikge1xuICAgIHRoaXMuaG9va3MucHVzaChmbilcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZU1hcCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgbWFwW3JlZl0oKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxUeXBlTGlzdCAoZ3JvdXAsIHR5cGUpIHtcbiAgY29uc3QgbWFwID0gZ3JvdXBbdHlwZV1cbiAgZm9yIChjb25zdCByZWYgaW4gbWFwKSB7XG4gICAgY29uc3QgbGlzdCA9IG1hcFtyZWZdXG4gICAgbGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7IGhhbmRsZXIoKSB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogQSBzaW1wbGUgdmlydHVhbCBkb20gaW1wbGVtZW50YXRpb25cbiAqL1xuXG5pbXBvcnQgTGlzdGVuZXIgZnJvbSAnLi9saXN0ZW5lcidcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgREVGQVVMVF9UQUdfTkFNRSA9ICdkaXYnXG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5sZXQgbmV4dE5vZGVSZWYgPSAxXG5cbmV4cG9ydCBmdW5jdGlvbiBEb2N1bWVudCAoaWQsIHVybCwgaGFuZGxlcikge1xuICBpZCA9IGlkID8gaWQudG9TdHJpbmcoKSA6ICcnXG4gIHRoaXMuaWQgPSBpZFxuICB0aGlzLlVSTCA9IHVybFxuXG4gIGluc3RhbmNlTWFwW2lkXSA9IHRoaXNcbiAgdGhpcy5ub2RlTWFwID0ge31cbiAgdGhpcy5saXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihpZCwgaGFuZGxlciB8fCBnZW5DYWxsVGFza3MoaWQpKVxuICB0aGlzLmNyZWF0ZURvY3VtZW50RWxlbWVudCgpXG59XG5cbmZ1bmN0aW9uIGdlbkNhbGxUYXNrcyAoaWQpIHtcbiAgcmV0dXJuICh0YXNrcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICAgIHRhc2tzID0gW3Rhc2tzXVxuICAgIH1cbiAgICByZXR1cm4gY2FsbE5hdGl2ZShpZCwgdGFza3MsICctMScpXG4gIH1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGRlbGV0ZSB0aGlzLmxpc3RlbmVyXG4gIGRlbGV0ZSB0aGlzLm5vZGVNYXBcbiAgZGVsZXRlIGluc3RhbmNlTWFwW3RoaXMuaWRdXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSBmYWxzZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IHRydWVcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmRvY3VtZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQoJ2RvY3VtZW50JylcbiAgICBlbC5kb2NJZCA9IHRoaXMuaWRcbiAgICBlbC5vd25lckRvY3VtZW50ID0gdGhpc1xuICAgIGVsLnJvbGUgPSAnZG9jdW1lbnRFbGVtZW50J1xuICAgIGVsLmRlcHRoID0gMFxuICAgIGVsLnJlZiA9ICdfZG9jdW1lbnRFbGVtZW50J1xuICAgIHRoaXMubm9kZU1hcC5fZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IGVsXG4gICAgZWwuYXBwZW5kQ2hpbGQgPSAobm9kZSkgPT4ge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlKVxuICAgIH1cbiAgICBlbC5pbnNlcnRCZWZvcmUgPSAobm9kZSwgYmVmb3JlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUsIGJlZm9yZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYXBwZW5kQm9keSAoZG9jLCBub2RlLCBiZWZvcmUpIHtcbiAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQgfSA9IGRvY1xuXG4gIGlmIChkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudEVsZW1lbnQuY2hpbGRyZW5cbiAgY29uc3QgYmVmb3JlSW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGJlZm9yZSlcbiAgaWYgKGJlZm9yZUluZGV4IDwgMCkge1xuICAgIGNoaWxkcmVuLnB1c2gobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjaGlsZHJlbi5zcGxpY2UoYmVmb3JlSW5kZXgsIDAsIG5vZGUpXG4gIH1cblxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChub2RlLnJvbGUgPT09ICdib2R5Jykge1xuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gbm9kZVxuICAgICAgfSlcbiAgICAgIHNldEJvZHkoZG9jLCBub2RlKVxuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBsaW5rUGFyZW50KG5vZGUsIGRvY3VtZW50RWxlbWVudClcbiAgICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF1cbiAgICB9XG4gICAgZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgZG9jLmxpc3RlbmVyLmNyZWF0ZUJvZHkobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICBkb2Mubm9kZU1hcFtub2RlLnJlZl0gPSBub2RlXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Qm9keSAoZG9jLCBlbCkge1xuICBlbC5yb2xlID0gJ2JvZHknXG4gIGVsLmRlcHRoID0gMVxuICBkZWxldGUgZG9jLm5vZGVNYXBbZWwubm9kZUlkXVxuICBlbC5yZWYgPSAnX3Jvb3QnXG4gIGRvYy5ub2RlTWFwLl9yb290ID0gZWxcbiAgZG9jLmJvZHkgPSBlbFxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQm9keSA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICBpZiAoIXRoaXMuYm9keSkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQodHlwZSwgcHJvcHMpXG4gICAgc2V0Qm9keSh0aGlzLCBlbClcbiAgfVxuXG4gIHJldHVybiB0aGlzLmJvZHlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KHRhZ05hbWUsIHByb3BzKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQ29tbWVudCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHJldHVybiBuZXcgQ29tbWVudCh0ZXh0KVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZmlyZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBlLCBkb21DaGFuZ2VzKSB7XG4gIGlmICghZWwpIHtcbiAgICByZXR1cm5cbiAgfVxuICBlID0gZSB8fCB7fVxuICBlLnR5cGUgPSB0eXBlXG4gIGUudGFyZ2V0ID0gZWxcbiAgZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIGlmIChkb21DaGFuZ2VzKSB7XG4gICAgdXBkYXRlRWxlbWVudChlbCwgZG9tQ2hhbmdlcylcbiAgfVxuICByZXR1cm4gZWwuZmlyZUV2ZW50KHR5cGUsIGUpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5nZXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHJldHVybiB0aGlzLm5vZGVNYXBbcmVmXVxufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50IChlbCwgY2hhbmdlcykge1xuICBjb25zdCBhdHRycyA9IGNoYW5nZXMuYXR0cnMgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIGF0dHJzKSB7XG4gICAgZWwuc2V0QXR0cihuYW1lLCBhdHRyc1tuYW1lXSwgdHJ1ZSlcbiAgfVxuICBjb25zdCBzdHlsZSA9IGNoYW5nZXMuc3R5bGUgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlKSB7XG4gICAgZWwuc2V0U3R5bGUobmFtZSwgc3R5bGVbbmFtZV0sIHRydWUpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5vZGUgKCkge1xuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbiAgdGhpcy5wYXJlbnROb2RlID0gbnVsbFxuICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbFxuICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGxcbn1cblxuTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF1cbiAgaWYgKGRvYykge1xuICAgIGRlbGV0ZSB0aGlzLmRvY0lkXG4gICAgZGVsZXRlIGRvYy5ub2RlTWFwW3RoaXMubm9kZUlkXVxuICB9XG4gIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgY2hpbGQuZGVzdHJveSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbGVtZW50ICh0eXBlID0gREVGQVVMVF9UQUdfTkFNRSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcyB8fCB7fVxuICB0aGlzLm5vZGVUeXBlID0gMVxuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLmF0dHIgPSBwcm9wcy5hdHRyIHx8IHt9XG4gIHRoaXMuY2xhc3NTdHlsZSA9IHByb3BzLmNsYXNzU3R5bGUgfHwge31cbiAgdGhpcy5zdHlsZSA9IHByb3BzLnN0eWxlIHx8IHt9XG4gIHRoaXMuZXZlbnQgPSB7fVxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxufVxuXG5FbGVtZW50LnByb3RvdHlwZSA9IG5ldyBOb2RlKClcblxuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCAtMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiAobm9kZSwgYmVmb3JlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGJlZm9yZSB8fCBub2RlLm5leHRTaWJsaW5nID09PSBiZWZvcmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlID0gbmV4dEVsZW1lbnQoYmVmb3JlKVxuICAgICAgY29uc3QgaW5kZXggPSBpbnNlcnRJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHB1cmVCZWZvcmVcbiAgICAgICAgICA/IHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHVyZUJlZm9yZSlcbiAgICAgICAgICA6IHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgcHVyZUJlZm9yZVxuICAgICAgICAgID8gdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwdXJlQmVmb3JlKVxuICAgICAgICAgIDogdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKG5vZGUsIGFmdGVyKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGFmdGVyIHx8IG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBhZnRlcikge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihhZnRlcikgKyAxLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChub2RlLCBwcmVzZXJ2ZWQpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXByZXNlcnZlZCkge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIHRoaXMucHVyZUNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgIH0pXG4gIH1cbiAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH0pXG4gIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMFxuICB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGggPSAwXG59XG5cbmZ1bmN0aW9uIG5leHRFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJldmlvdXNFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpbmtQYXJlbnQgKG5vZGUsIHBhcmVudCkge1xuICBub2RlLnBhcmVudE5vZGUgPSBwYXJlbnRcbiAgaWYgKHBhcmVudC5kb2NJZCkge1xuICAgIG5vZGUuZG9jSWQgPSBwYXJlbnQuZG9jSWRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudFxuICAgIG5vZGUub3duZXJEb2N1bWVudC5ub2RlTWFwW25vZGUubm9kZUlkXSA9IG5vZGVcbiAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMVxuICB9XG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgbGlua1BhcmVudChjaGlsZCwgbm9kZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOb2RlIChkb2NJZCwgbm9kZSkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFtkb2NJZF1cbiAgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxufVxuXG5mdW5jdGlvbiBpbnNlcnRJbmRleCAodGFyZ2V0LCBsaXN0LCBuZXdJbmRleCwgY2hhbmdlU2libGluZykge1xuICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgbmV3SW5kZXggPSAwXG4gIH1cbiAgY29uc3QgYmVmb3JlID0gbGlzdFtuZXdJbmRleCAtIDFdXG4gIGNvbnN0IGFmdGVyID0gbGlzdFtuZXdJbmRleF1cbiAgbGlzdC5zcGxpY2UobmV3SW5kZXgsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlXG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiBtb3ZlSW5kZXggKHRhcmdldCwgbGlzdCwgbmV3SW5kZXgsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbiAgbGV0IG5ld0luZGV4QWZ0ZXIgPSBuZXdJbmRleFxuICBpZiAoaW5kZXggPD0gbmV3SW5kZXgpIHtcbiAgICBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXggLSAxXG4gIH1cbiAgY29uc3QgYmVmb3JlTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyIC0gMV1cbiAgY29uc3QgYWZ0ZXJOZXcgPSBsaXN0W25ld0luZGV4QWZ0ZXJdXG4gIGxpc3Quc3BsaWNlKG5ld0luZGV4QWZ0ZXIsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmVOZXcgJiYgKGJlZm9yZU5ldy5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlTmV3XG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJOZXdcbiAgICBhZnRlck5ldyAmJiAoYWZ0ZXJOZXcucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIGlmIChpbmRleCA9PT0gbmV3SW5kZXhBZnRlcikge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiByZW1vdmVJbmRleCAodGFyZ2V0LCBsaXN0LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLmF0dHJba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLmF0dHJba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0QXR0cih0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuc3R5bGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLnN0eWxlW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlKHRoaXMucmVmLCBrZXksIHZhbHVlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoY2xhc3NTdHlsZSkge1xuICB0aGlzLmNsYXNzU3R5bGUgPSBjbGFzc1N0eWxlXG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlcyh0aGlzLnJlZiwgdGhpcy50b1N0eWxlKCkpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICB0aGlzLmV2ZW50W3R5cGVdID0gaGFuZGxlclxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5hZGRFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodGhpcy5ldmVudFt0eXBlXSkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50W3R5cGVdXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgZSkge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudFt0eXBlXVxuICBpZiAoaGFuZGxlcikge1xuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLmNsYXNzU3R5bGUsIHRoaXMuc3R5bGUpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJlZjogdGhpcy5yZWYudG9TdHJpbmcoKSxcbiAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgYXR0cjogdGhpcy5hdHRyLFxuICAgIHN0eWxlOiB0aGlzLnRvU3R5bGUoKVxuICB9XG4gIGNvbnN0IGV2ZW50ID0gT2JqZWN0LmtleXModGhpcy5ldmVudClcbiAgaWYgKGV2ZW50Lmxlbmd0aCkge1xuICAgIHJlc3VsdC5ldmVudCA9IGV2ZW50XG4gIH1cbiAgaWYgKHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJlc3VsdC5jaGlsZHJlbiA9IHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvSlNPTigpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPCcgKyB0aGlzLnR5cGUgK1xuICAgICcgYXR0cj0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5hdHRyKSArXG4gICAgJyBzdHlsZT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy50b1N0eWxlKCkpICsgJz4nICtcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b1N0cmluZygpKS5qb2luKCcnKSArXG4gICAgJzwvJyArIHRoaXMudHlwZSArICc+J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tbWVudCAodmFsdWUpIHtcbiAgdGhpcy5ub2RlVHlwZSA9IDhcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9ICdjb21tZW50J1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuQ29tbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkNvbW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwhLS0gJyArIHRoaXMudmFsdWUgKyAnIC0tPidcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RlbmVyIChpZCwgaGFuZGxlcikge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5iYXRjaGVkID0gZmFsc2VcbiAgdGhpcy51cGRhdGVzID0gW11cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlclxuICB9XG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdjcmVhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnVwZGF0ZUZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3VwZGF0ZUZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVmcmVzaEZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3JlZnJlc2hGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBjb25zdCBib2R5ID0gZWxlbWVudC50b0pTT04oKVxuICBjb25zdCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW5cbiAgZGVsZXRlIGJvZHkuY2hpbGRyZW5cbiAgY29uc3QgYWN0aW9ucyA9IFtjcmVhdGVBY3Rpb24oJ2NyZWF0ZUJvZHknLCBbYm9keV0pXVxuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBhY3Rpb25zLnB1c2guYXBwbHkoYWN0aW9ucywgY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oJ2FkZEVsZW1lbnQnLCBbYm9keS5yZWYsIGNoaWxkLCAtMV0pXG4gICAgfSkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCByZWYsIGluZGV4KSB7XG4gIGlmICghKGluZGV4ID49IDApKSB7XG4gICAgaW5kZXggPSAtMVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW3JlZiwgZWxlbWVudC50b0pTT04oKSwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gcmVmLm1hcCgocikgPT4gY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JdKSlcbiAgICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUVsZW1lbnQnLCBbcmVmXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5tb3ZlRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXgpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ21vdmVFbGVtZW50JywgW3RhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlQXR0cnMnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKHJlZiwga2V5LCB2YWx1ZSkge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICByZXN1bHRba2V5XSA9IHZhbHVlXG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHJlc3VsdF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0U3R5bGVzID0gZnVuY3Rpb24gKHJlZiwgc3R5bGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZVN0eWxlJywgW3JlZiwgc3R5bGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIChhY3Rpb25zLCBjYikge1xuICByZXR1cm4gY2IgJiYgY2IoKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gIGNvbnN0IHVwZGF0ZXMgPSB0aGlzLnVwZGF0ZXNcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuXG4gIGlmICghQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xuICAgIGFjdGlvbnMgPSBbYWN0aW9uc11cbiAgfVxuXG4gIGlmICh0aGlzLmJhdGNoZWQpIHtcbiAgICB1cGRhdGVzLnB1c2guYXBwbHkodXBkYXRlcywgYWN0aW9ucylcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gaGFuZGxlcihhY3Rpb25zKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgcmV0dXJuIHsgbW9kdWxlOiAnZG9tJywgbWV0aG9kOiBuYW1lLCBhcmdzOiBhcmdzIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9saXN0ZW5lci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hbWVcIjogXCJ3ZWV4XCIsXG5cdFwidmVyc2lvblwiOiBcIjAuNC4wXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJBIGZyYW1ld29yayBmb3IgYnVpbGRpbmcgTW9iaWxlIGNyb3NzLXBsYXRmb3JtIFVJXCIsXG5cdFwibGljZW5zZVwiOiBcIkFwYWNoZS0yLjBcIixcblx0XCJyZXBvc2l0b3J5XCI6IHtcblx0XHRcInR5cGVcIjogXCJnaXRcIixcblx0XHRcInVybFwiOiBcImdpdEBnaXRodWIuY29tOmFsaWJhYmEvd2VleC5naXRcIlxuXHR9LFxuXHRcImhvbWVwYWdlXCI6IFwiaHR0cDovL2FsaWJhYmEuZ2l0aHViLmlvL3dlZXgvXCIsXG5cdFwiYnVnc1wiOiB7XG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxpYmFiYS93ZWV4L2lzc3Vlc1wiXG5cdH0sXG5cdFwicHJpdmF0ZVwiOiBcInRydWVcIixcblx0XCJrZXl3b3Jkc1wiOiBbXG5cdFx0XCJ3ZWV4XCIsXG5cdFx0XCJoeWJyaWRcIixcblx0XHRcIndlYmNvbXBvbmVudFwiLFxuXHRcdFwiYXBwZnJhbWV3b3JrXCIsXG5cdFx0XCJtdnZtXCIsXG5cdFx0XCJqYXZhc2NyaXB0XCIsXG5cdFx0XCJ3ZWJraXRcIixcblx0XHRcInY4XCIsXG5cdFx0XCJqc2NvcmVcIixcblx0XHRcImh0bWw1XCIsXG5cdFx0XCJhbmRyb2lkXCIsXG5cdFx0XCJpb3NcIixcblx0XHRcInl1bm9zXCJcblx0XSxcblx0XCJlbmdpbmVzXCI6IHtcblx0XHRcIm5vZGVcIjogXCI+PTRcIlxuXHR9LFxuXHRcInNjcmlwdHNcIjoge1xuXHRcdFwicG9zdGluc3RhbGxcIjogXCJiYXNoIC4vYmluL2luc3RhbGwtaG9va3Muc2hcIixcblx0XHRcImJ1aWxkOmNvbmZpZ1wiOiBcIm5vZGUgYnVpbGQvY29uZmlnLmZyYW1ld29ya3MuanNcIixcblx0XHRcImJ1aWxkOmJyb3dzZXJcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suYnJvd3Nlci5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOm5hdGl2ZVwiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5uYXRpdmUuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDpleGFtcGxlc1wiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5leGFtcGxlcy5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOnRlc3RcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2sudGVzdC5jb25maWcuanNcIixcblx0XHRcImRpc3Q6YnJvd3NlclwiOiBcIm5wbSBydW4gYnVpbGQ6YnJvd3NlciAmJiBiYXNoIC4vYmluL2Rpc3QtYnJvd3Nlci5zaFwiLFxuXHRcdFwiZGlzdFwiOiBcIm5wbSBydW4gZGlzdDpicm93c2VyXCIsXG5cdFx0XCJkZXY6YnJvd3NlclwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmJyb3dzZXIuY29uZmlnLmpzXCIsXG5cdFx0XCJkZXY6bmF0aXZlXCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2submF0aXZlLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2OmV4YW1wbGVzXCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suZXhhbXBsZXMuY29uZmlnLmpzXCIsXG5cdFx0XCJkZXY6dGVzdFwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLnRlc3QuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZFwiOiBcIm5wbSBydW4gYnVpbGQ6bmF0aXZlICYmIG5wbSBydW4gYnVpbGQ6YnJvd3NlciAmJiBucG0gcnVuIGJ1aWxkOmV4YW1wbGVzICYmIG5wbSBydW4gYnVpbGQ6dGVzdFwiLFxuXHRcdFwibGludFwiOiBcImVzbGludCBodG1sNVwiLFxuXHRcdFwidGVzdDp1bml0XCI6IFwibW9jaGEgLS1jb21waWxlcnMganM6YmFiZWwtY29yZS9yZWdpc3RlciBodG1sNS90ZXN0L3VuaXQvKi8qLmpzIGh0bWw1L3Rlc3QvdW5pdC8qLyovKi5qc1wiLFxuXHRcdFwidGVzdDpjb3ZlclwiOiBcImJhYmVsLW5vZGUgbm9kZV9tb2R1bGVzL2lzcGFydGEvYmluL2lzcGFydGEgY292ZXIgLS1yZXBvcnQgdGV4dCBub2RlX21vZHVsZXMvbW9jaGEvYmluL19tb2NoYSAtLSAtLXJlcG9ydGVyIGRvdCBodG1sNS90ZXN0L3VuaXQvKi8qLmpzIGh0bWw1L3Rlc3QvdW5pdC8qLyovKi5qc1wiLFxuXHRcdFwidGVzdDplMmVcIjogXCJucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgbm9kZSBodG1sNS90ZXN0L2UyZS9ydW5uZXIuanNcIixcblx0XHRcInRlc3RcIjogXCJucG0gcnVuIGJ1aWxkOmNvbmZpZyAmJiBucG0gcnVuIGxpbnQgJiYgbnBtIHJ1biB0ZXN0OmNvdmVyICYmIG5wbSBydW4gdGVzdDplMmVcIixcblx0XHRcInNlcnZlXCI6IFwic2VydmUgLi8gLXAgMTI1ODBcIixcblx0XHRcImNsZWFuOmV4YW1wbGVzXCI6IFwiZWNobyBcXFwiXFxcXDAzM1szNjsxbVtDbGVhbl1cXFxcMDMzWzBtIFxcXFwwMzNbMzNtZXhhbXBsZXNcXFxcMDMzWzBtXFxcIiAmJiBybSAtdnJmIGV4YW1wbGVzL2J1aWxkLypcIixcblx0XHRcImNsZWFuOnRlc3RcIjogXCJlY2hvIFxcXCJcXFxcMDMzWzM2OzFtW0NsZWFuXVxcXFwwMzNbMG0gXFxcXDAzM1szM210ZXN0XFxcXDAzM1swbVxcXCIgJiYgcm0gLXZyZiB0ZXN0L2J1aWxkLypcIixcblx0XHRcImNsZWFuXCI6IFwibnBtIHJ1biBjbGVhbjpleGFtcGxlcyAmJiBucG0gcnVuIGNsZWFuOnRlc3RcIixcblx0XHRcImNvcHk6anNcIjogXCJjcCAtdmYgLi9kaXN0L25hdGl2ZS5qcyAuL2FuZHJvaWQvc2RrL2Fzc2V0cy9tYWluLmpzXCIsXG5cdFx0XCJjb3B5OmV4YW1wbGVzXCI6IFwicm0gLXJmIC4vYW5kcm9pZC9wbGF5Z3JvdW5kL2FwcC9zcmMvbWFpbi9hc3NldHMvKiAmJiBjcCAtdnJmIC4vZXhhbXBsZXMvYnVpbGQvKiAuL2FuZHJvaWQvcGxheWdyb3VuZC9hcHAvc3JjL21haW4vYXNzZXRzL1wiLFxuXHRcdFwiY29weVwiOiBcIm5wbSBydW4gY29weTpqcyAmJiBucG0gcnVuIGNvcHk6ZXhhbXBsZXNcIlxuXHR9LFxuXHRcInN1YnZlcnNpb25cIjoge1xuXHRcdFwiYnJvd3NlclwiOiBcIjAuMy4wXCIsXG5cdFx0XCJmcmFtZXdvcmtcIjogXCIwLjE1LjJcIixcblx0XHRcInRyYW5zZm9ybWVyXCI6IFwiPj0wLjEuNSA8MC40XCJcblx0fSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYW5pbWF0aW9uanNcIjogXCJeMC4xLjVcIixcblx0XHRcImNhcnJvdXNlbFwiOiBcIl4wLjEuMTFcIixcblx0XHRcImNvcmUtanNcIjogXCJeMi40LjBcIixcblx0XHRcImN1YmljYmV6aWVyXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJlbnZkXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJmaXhlZHN0aWNreVwiOiBcIl4wLjEuMFwiLFxuXHRcdFwiaHR0cHVybFwiOiBcIl4wLjEuMVwiLFxuXHRcdFwia291bnRkb3duXCI6IFwiXjAuMS4yXCIsXG5cdFx0XCJsYXp5aW1nXCI6IFwiXjAuMS4yXCIsXG5cdFx0XCJsaWVcIjogXCJeMy4wLjRcIixcblx0XHRcIm1vZGFsc1wiOiBcIl4wLjEuNVwiLFxuXHRcdFwic2Nyb2xsLXRvXCI6IFwiMC4wLjJcIixcblx0XHRcInNlbXZlclwiOiBcIl41LjEuMFwiLFxuXHRcdFwidHJhbnNpdGlvbml6ZVwiOiBcIjAuMC4zXCIsXG5cdFx0XCJ3ZWV4LWNvbXBvbmVudHNcIjogXCJeMC4xLjNcIlxuXHR9LFxuXHRcImRldkRlcGVuZGVuY2llc1wiOiB7XG5cdFx0XCJiYWJlbC1jbGlcIjogXCJ+Ni40LjVcIixcblx0XHRcImJhYmVsLWxvYWRlclwiOiBcIl42LjIuNFwiLFxuXHRcdFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOiBcIl42LjkuMFwiLFxuXHRcdFwiY2hhaVwiOiBcIl4zLjUuMFwiLFxuXHRcdFwiY2hyb21lZHJpdmVyXCI6IFwiXjIuMjEuMlwiLFxuXHRcdFwiY3Jvc3Mtc3Bhd25cIjogXCJeNC4wLjBcIixcblx0XHRcImNzcy1sb2FkZXJcIjogXCJeMC4yMy4xXCIsXG5cdFx0XCJlc2xpbnRcIjogXCJeMi4xMS4xXCIsXG5cdFx0XCJodHRwLXNlcnZlclwiOiBcIl4wLjkuMFwiLFxuXHRcdFwiaXNwYXJ0YVwiOiBcIl40LjAuMFwiLFxuXHRcdFwiaXN0YW5idWxcIjogXCJeMC40LjNcIixcblx0XHRcImpzb24tbG9hZGVyXCI6IFwiXjAuNS40XCIsXG5cdFx0XCJtb2NoYVwiOiBcIl4yLjUuM1wiLFxuXHRcdFwibmlnaHR3YXRjaFwiOiBcIl4wLjkuNFwiLFxuXHRcdFwicGhhbnRvbWpzLXByZWJ1aWx0XCI6IFwiXjIuMS43XCIsXG5cdFx0XCJzZWxlbml1bS1zZXJ2ZXJcIjogXCIyLjUzLjFcIixcblx0XHRcInNlcnZlXCI6IFwiXjEuNC4wXCIsXG5cdFx0XCJzaW5vblwiOiBcIl4xLjE3LjRcIixcblx0XHRcInNpbm9uLWNoYWlcIjogXCJeMi44LjBcIixcblx0XHRcInN0eWxlLWxvYWRlclwiOiBcIl4wLjEzLjFcIixcblx0XHRcInVnbGlmeS1qc1wiOiBcIl4yLjYuNFwiLFxuXHRcdFwid2VicGFja1wiOiBcIl4xLjEzLjFcIixcblx0XHRcIndlZXgtbG9hZGVyXCI6IFwiXjAuMi4wXCJcblx0fVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcGFja2FnZS5qc29uXG4gKiogbW9kdWxlIGlkID0gOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBUaGUgYXBpIGZvciBpbnZva2luZyB3aXRoIFwiJFwiIHByZWZpeFxuICovXG5pbXBvcnQgeyBleHRlbmQsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuLyoqXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBjb21tb25cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHVzZSAkdm0gaW5zdGVhZFxuICogZmluZCB0aGUgdm0gYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Vm19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkIChpZCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBWbSMkdm0gaW5zdGVhZCcpXG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8udm1cbiAgfVxufVxuXG4vKipcbiAqIGZpbmQgdGhlIGVsZW1lbnQgYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRlbCAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby5lbFxuICB9XG59XG5cbi8qKlxuICogZmluZCB0aGUgdm0gb2YgdGhlIGN1c3RvbSBjb21wb25lbnQgYnkgaWRcbiAqIE5vdGU6IHRoZXJlIGlzIG9ubHkgb25lIGlkIGluIHdob2xlIGNvbXBvbmVudFxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Vm19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkdm0gKGlkKSB7XG4gIGNvbnN0IGluZm8gPSB0aGlzLl9pZHNbaWRdXG4gIGlmIChpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8udm1cbiAgfVxufVxuXG4vKipcbiAqIEZpcmUgd2hlbiBkaWZmZXIgcmVuZGVyaW5nIGZpbmlzaGVkXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkcmVuZGVyVGhlbiAoZm4pIHtcbiAgY29uc3QgYXBwID0gdGhpcy5fYXBwXG4gIGNvbnN0IGRpZmZlciA9IGFwcC5kaWZmZXJcbiAgcmV0dXJuIGRpZmZlci50aGVuKCgpID0+IHtcbiAgICBmbigpXG4gIH0pXG59XG5cbi8qKlxuICogc2Nyb2xsIGFuIGVsZW1lbnQgc3BlY2lmaWVkIGJ5IGlkIGludG8gdmlldyxcbiAqIG1vcmVvdmVyIHNwZWNpZnkgYSBudW1iZXIgb2Ygb2Zmc2V0IG9wdGlvbmFsbHlcbiAqIEBwYXJhbSAge3N0cmluZ30gaWRcbiAqIEBwYXJhbSAge251bWJlcn0gb2Zmc2V0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2Nyb2xsVG8gKGlkLCBvZmZzZXQpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2Nyb2xsVG8gaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9kb21cXCcpJyArXG4gICAgICAgICAgJy5zY3JvbGxUbyhlbCwgb3B0aW9ucylcIiBpbnN0ZWFkJylcbiAgY29uc3QgZWwgPSB0aGlzLiRlbChpZClcbiAgaWYgKGVsKSB7XG4gICAgY29uc3QgZG9tID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2RvbScpXG4gICAgZG9tLnNjcm9sbFRvRWxlbWVudChlbC5yZWYsIHsgb2Zmc2V0OiBvZmZzZXQgfSlcbiAgfVxufVxuXG4vKipcbiAqIHBlcmZvcm0gdHJhbnNpdGlvbiBhbmltYXRpb24gb24gYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWRcbiAqIEBwYXJhbSAge3N0cmluZ30gICBpZFxuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnNcbiAqIEBwYXJhbSAge29iamVjdH0gICBvcHRpb25zLnN0eWxlc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuZHVyYXRpb24obXMpXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgW29wdGlvbnMudGltaW5nRnVuY3Rpb25dXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgW29wdGlvbnMuZGVsYXk9MChtcyldXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR0cmFuc2l0aW9uIChpZCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY29uc3QgZWwgPSB0aGlzLiRlbChpZClcbiAgaWYgKGVsICYmIG9wdGlvbnMgJiYgb3B0aW9ucy5zdHlsZXMpIHtcbiAgICBjb25zdCBhbmltYXRpb24gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJylcbiAgICBhbmltYXRpb24udHJhbnNpdGlvbihlbC5yZWYsIG9wdGlvbnMsICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLl9zZXRTdHlsZShlbCwgb3B0aW9ucy5zdHlsZXMpXG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayguLi5hcmdzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBnZXQgc29tZSBjb25maWdcbiAqIEByZXR1cm4ge29iamVjdH0gc29tZSBjb25maWcgZm9yIGFwcCBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJ1bmRsZVVybFxuICogQHByb3BlcnR5IHtib29sZWFufSBkZWJ1Z1xuICogQHByb3BlcnR5IHtvYmplY3R9IGVudlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi53ZWV4VmVyc2lvbihleC4gMS4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcE5hbWUoZXguIFRCL1RNKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5hcHBWZXJzaW9uKGV4LiA1LjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYucGxhdGZvcm0oZXguIGlPUy9BbmRyb2lkKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5vc1ZlcnNpb24oZXguIDcuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5kZXZpY2VNb2RlbCAqKm5hdGl2ZSBvbmx5KipcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbnYuW2RldmljZVdpZHRoPTc1MF1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbnYuZGV2aWNlSGVpZ2h0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkZ2V0Q29uZmlnIChjYWxsYmFjaykge1xuICBjb25zdCBjb25maWcgPSBleHRlbmQoe1xuICAgIGVudjogZ2xvYmFsLldYRW52aXJvbm1lbnQgfHwge31cbiAgfSwgdGhpcy5fYXBwLm9wdGlvbnMpXG4gIGlmICh0eXBvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIHRoZSBjYWxsYmFjayBvZiBWbSMkZ2V0Q29uZmlnKGNhbGxiYWNrKSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICd0aGlzIGFwaSBub3cgY2FuIGRpcmVjdGx5IFJFVFVSTiBjb25maWcgaW5mby4nKVxuICAgIGNhbGxiYWNrKGNvbmZpZylcbiAgfVxuICByZXR1cm4gY29uZmlnXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHJlcXVlc3QgbmV0d29yayB2aWEgaHR0cCBwcm90b2NvbFxuICogQHBhcmFtICB7b2JqZWN0fSAgIHBhcmFtc1xuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2VuZEh0dHAgKHBhcmFtcywgY2FsbGJhY2spIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkc2VuZEh0dHAgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9zdHJlYW1cXCcpJyArXG4gICAgICAgICAgJy5zZW5kSHR0cChwYXJhbXMsIGNhbGxiYWNrKVwiIGluc3RlYWQnKVxuICBjb25zdCBzdHJlYW0gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnc3RyZWFtJylcbiAgc3RyZWFtLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIG9wZW4gYSB1cmxcbiAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkb3BlblVSTCAodXJsKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJG9wZW5VUkwgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAgICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9ldmVudFxcJyknICtcbiAgICAgICAgICAnLm9wZW5VUkwodXJsKVwiIGluc3RlYWQnKVxuICBjb25zdCBldmVudCA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdldmVudCcpXG4gIGV2ZW50Lm9wZW5VUkwodXJsKVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBzZXQgYSB0aXRsZSBmb3IgcGFnZVxuICogQHBhcmFtICB7c3RyaW5nfSB0aXRsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gJHNldFRpdGxlICh0aXRsZSkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZXRUaXRsZSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3BhZ2VJbmZvXFwnKScgK1xuICAgICAgICAgICcuc2V0VGl0bGUodGl0bGUpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHBhZ2VJbmZvID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ3BhZ2VJbmZvJylcbiAgcGFnZUluZm8uc2V0VGl0bGUodGl0bGUpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIFwicmVxdWlyZSgnQHdlZXgtbW9kdWxlL21vZHVsZU5hbWUnKSBpbnN0ZWFkXCJcbiAqIGludm9rZSBhIG5hdGl2ZSBtZXRob2QgYnkgc3BlY2lmaW5nIHRoZSBuYW1lIG9mIG1vZHVsZSBhbmQgbWV0aG9kXG4gKiBAcGFyYW0gIHtzdHJpbmd9IG1vZHVsZU5hbWVcbiAqIEBwYXJhbSAge3N0cmluZ30gbWV0aG9kTmFtZVxuICogQHBhcmFtICB7Li4uKn0gdGhlIHJlc3QgYXJndW1lbnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkY2FsbCAobW9kdWxlTmFtZSwgbWV0aG9kTmFtZSwgLi4uYXJncykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRjYWxsIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZVxcJylcIiBpbnN0ZWFkJylcbiAgY29uc3QgbW9kdWxlID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUobW9kdWxlTmFtZSlcbiAgaWYgKG1vZHVsZSAmJiBtb2R1bGVbbWV0aG9kTmFtZV0pIHtcbiAgICBtb2R1bGVbbWV0aG9kTmFtZV0oLi4uYXJncylcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwaS9tZXRob2RzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==