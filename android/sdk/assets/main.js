(this.nativeLog || function(s) {console.log(s)})('START JS FRAMEWORK: 0.15.2 Build 20160829');
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
	
	var _package = __webpack_require__(113);
	
	var _methods = __webpack_require__(114);
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fix Promise Problem on JSContext of iOS7~8
	// @see https://bugs.webkit.org/show_bug.cgi?id=135866
	// global.Promise = null
	__webpack_require__(5);
	__webpack_require__(25);
	__webpack_require__(51);
	__webpack_require__(55);

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
	
	var _init = __webpack_require__(112);
	
	var _init2 = _interopRequireDefault(_init);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	var _life = __webpack_require__(108);
	
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
	
	var _register = __webpack_require__(109);
	
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
	
	var _bridge = __webpack_require__(110);
	
	Object.defineProperty(exports, 'receiveTasks', {
	  enumerable: true,
	  get: function get() {
	    return _bridge.receiveTasks;
	  }
	});
	
	var _misc = __webpack_require__(111);
	
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
	
	var _map = __webpack_require__(107);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * create a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {string} code
	 * @param  {object} [options] option `HAS_LOG` enable print log
	 * @param  {object} [data]
	 */
	function createInstance(instanceId, code, options, data) {
	  console.debug('[!!!!createInstance] instanceMap 1', _map.instanceMap);
	  var instance = _map.instanceMap[instanceId];
	  console.debug('[!!!!createInstance] instance', instanceId, instance);
	  options = options || {};
	
	  var result = void 0;
	  if (!instance) {
	    instance = new _app2.default(instanceId, options);
	    _map.instanceMap[instanceId] = instance;
	    console.debug('[!!!!createInstance] instanceMap 2', _map.instanceMap);
	    result = instance.init(code, data);
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	
	  return result || instance;
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(82);
	
	var _ctrl = __webpack_require__(83);
	
	var ctrl = _interopRequireWildcard(_ctrl);
	
	var _instance = __webpack_require__(105);
	
	var _instance2 = _interopRequireDefault(_instance);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	(0, _util.extend)(_instance2.default.prototype, ctrl); /**
	                                                        * @fileOverview
	                                                        * Weex instance constructor & definition
	                                                        */
	exports.default = _instance2.default;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
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
	
	var _misc = __webpack_require__(104);
	
	Object.defineProperty(exports, 'updateActions', {
	  enumerable: true,
	  get: function get() {
	    return _misc.updateActions;
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
	Object.defineProperty(exports, 'refreshData', {
	  enumerable: true,
	  get: function get() {
	    return _misc.refreshData;
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
	
	var _util = __webpack_require__(82);
	
	var _bundle = __webpack_require__(85);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function init(code, data) {
	  var _this = this;
	
	  console.debug('[!!!!!!!JS Framework] Intialize an instance with:\n', data);
	
	  var result = void 0;
	  // @see: lib/app/bundle.js
	  var bundleDefine = (0, _util.bind)(_bundle.define, this);
	  var bundleBootstrap = function bundleBootstrap(name, config, _data) {
	    result = (0, _bundle.bootstrap)(_this, name, config, _data || data);
	    _this.updateActions();
	    _this.doc.listener.createFinish();
	    console.debug('[!!!!!!!!JS Framework] After intialized an instance(' + _this.id + ')');
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bootstrap = __webpack_require__(86);
	
	Object.defineProperty(exports, 'bootstrap', {
	  enumerable: true,
	  get: function get() {
	    return _bootstrap.bootstrap;
	  }
	});
	
	var _define = __webpack_require__(103);
	
	Object.defineProperty(exports, 'clearCommonModules', {
	  enumerable: true,
	  get: function get() {
	    return _define.clearCommonModules;
	  }
	});
	Object.defineProperty(exports, 'define', {
	  enumerable: true,
	  get: function get() {
	    return _define.define;
	  }
	});
	Object.defineProperty(exports, 'register', {
	  enumerable: true,
	  get: function get() {
	    return _define.register;
	  }
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bootstrap = bootstrap;
	
	var _semver = __webpack_require__(87);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _vm = __webpack_require__(89);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _downgrade = __webpack_require__(101);
	
	var downgrade = _interopRequireWildcard(_downgrade);
	
	var _util = __webpack_require__(82);
	
	var _misc = __webpack_require__(102);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bootstrap(app, name, config, data) {
	  console.debug('[JS Framework] bootstrap for ' + name);
	
	  var cleanName = void 0;
	
	  if ((0, _misc.isWeexComponent)(name)) {
	    cleanName = (0, _misc.removeWeexPrefix)(name);
	  } else if ((0, _misc.isNpmModule)(name)) {
	    cleanName = (0, _misc.removeJSSurfix)(name);
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 87 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(88)))

/***/ },
/* 88 */
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Vm;
	
	var _util = __webpack_require__(82);
	
	var _state = __webpack_require__(90);
	
	var _compiler = __webpack_require__(95);
	
	var _events = __webpack_require__(99);
	
	var _register = __webpack_require__(100);
	
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initState = initState;
	exports.initData = initData;
	exports.initComputed = initComputed;
	exports.initMethods = initMethods;
	
	var _watcher = __webpack_require__(91);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _dep = __webpack_require__(92);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _observer = __webpack_require__(93);
	
	var _util = __webpack_require__(82);
	
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Watcher;
	
	var _dep = __webpack_require__(92);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _util = __webpack_require__(82);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(88)))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	
	var _util = __webpack_require__(82);
	
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
/* 93 */
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
	
	var _dep = __webpack_require__(92);
	
	var _dep2 = _interopRequireDefault(_dep);
	
	var _array = __webpack_require__(94);
	
	var _util = __webpack_require__(82);
	
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arrayMethods = undefined;
	
	var _util = __webpack_require__(82);
	
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.build = build;
	
	var _util = __webpack_require__(82);
	
	var _state = __webpack_require__(90);
	
	var _directive = __webpack_require__(96);
	
	var _domHelper = __webpack_require__(98);
	
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
/* 96 */
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
	
	var _util = __webpack_require__(82);
	
	var _watcher = __webpack_require__(91);
	
	var _watcher2 = _interopRequireDefault(_watcher);
	
	var _config = __webpack_require__(97);
	
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
/* 97 */
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
/* 98 */
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
/* 99 */
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
/* 100 */
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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.normalizeVersion = normalizeVersion;
	exports.getError = getError;
	exports.check = check;
	
	var _semver = __webpack_require__(87);
	
	var _semver2 = _interopRequireDefault(_semver);
	
	var _util = __webpack_require__(82);
	
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
/* 102 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeWeexPrefix = removeWeexPrefix;
	exports.removeJSSurfix = removeJSSurfix;
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
	  return str.replace(WEEX_COMPONENT_REG, '').replace(WEEX_MODULE_REG, '');
	}
	
	function removeJSSurfix(str) {
	  return str.replace(JS_SURFIX_REG, '');
	}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.define = undefined;
	exports.clearCommonModules = clearCommonModules;
	exports.register = register;
	
	var _util = __webpack_require__(82);
	
	var _vm = __webpack_require__(89);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _misc = __webpack_require__(102);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	
	    if ((0, _misc.isWeexComponent)(name)) {
	      cleanName = (0, _misc.removeWeexPrefix)(name);
	      return _this.requireComponent(cleanName);
	    }
	    if ((0, _misc.isWeexModule)(name)) {
	      cleanName = (0, _misc.removeWeexPrefix)(name);
	      return _this.requireModule(cleanName);
	    }
	    if ((0, _misc.isNormalModule)(name)) {
	      cleanName = (0, _misc.removeJSSurfix)(name);
	      return commonModules[name];
	    }
	    if ((0, _misc.isNpmModule)(name)) {
	      cleanName = (0, _misc.removeJSSurfix)(name);
	      return commonModules[name];
	    }
	  };
	  var _module = { exports: {} };
	
	  var cleanName = void 0;
	  if ((0, _misc.isWeexComponent)(name)) {
	    cleanName = (0, _misc.removeWeexPrefix)(name);
	
	    factory(_require, _module.exports, _module);
	
	    this.registerComponent(cleanName, _module.exports);
	  } else if ((0, _misc.isWeexModule)(name)) {
	    cleanName = (0, _misc.removeWeexPrefix)(name);
	
	    factory(_require, _module.exports, _module);
	
	    _vm2.default.registerModules(_defineProperty({}, cleanName, _module.exports));
	  } else if ((0, _misc.isNormalModule)(name)) {
	    cleanName = (0, _misc.removeJSSurfix)(name);
	
	    factory(_require, _module.exports, _module);
	
	    commonModules[cleanName] = _module.exports;
	  } else if ((0, _misc.isNpmModule)(name)) {
	    cleanName = (0, _misc.removeJSSurfix)(name);
	
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
	
	/**
	 * @deprecated
	 */
	function register(type, options) {
	  console.warn('[JS Framework] Register is deprecated, please install lastest transformer.');
	  this.registerComponent(type, options);
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateActions = updateActions;
	exports.destroy = destroy;
	exports.getRootElement = getRootElement;
	exports.fireEvent = fireEvent;
	exports.callback = callback;
	exports.refreshData = refreshData;
	
	var _util = __webpack_require__(82);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                     * @fileOverview
	                                                                                                                                                                                                     * instance controls from native
	                                                                                                                                                                                                     *
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
	  var _this = this;
	
	  console.debug('[JS Framework] Fire a "' + type + '" event on an element(' + ref + ') in instance(' + this.id + ')');
	  if (Array.isArray(ref)) {
	    ref.some(function (ref) {
	      return _this.fireEvent(ref, type, e) !== false;
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

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = AppInstance;
	
	var _util = __webpack_require__(82);
	
	var _differ = __webpack_require__(106);
	
	var _differ2 = _interopRequireDefault(_differ);
	
	var _config = __webpack_require__(97);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _register = __webpack_require__(100);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function AppInstance(instanceId, options) {
	  this.id = instanceId;
	  this.options = options || {};
	  this.vm = null;
	  this.customComponentMap = {};
	  this.callbacks = {};
	  this.doc = new _config2.default.Document(instanceId, this.options.bundleUrl, null, _config2.default.Listener);
	  this.differ = new _differ2.default(instanceId);
	  this.uid = 0;
	}
	
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
	
	(0, _util.extend)(AppInstance.prototype, {
	  registerComponent: _register.registerComponent,
	  requireComponent: _register.requireComponent,
	  requireModule: _register.requireModule
	});

/***/ },
/* 106 */
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
/* 107 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var instanceMap = exports.instanceMap = {};
	
	global.__instanceMap = instanceMap;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = init;
	exports.refreshInstance = refreshInstance;
	exports.destroyInstance = destroyInstance;
	
	var _config = __webpack_require__(97);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _map = __webpack_require__(107);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function init(cfg) {
	  _config2.default.Document = cfg.Document;
	  _config2.default.Element = cfg.Element;
	  _config2.default.Comment = cfg.Comment;
	  _config2.default.sendTasks = cfg.sendTasks;
	  _config2.default.Listener = cfg.Listener;
	}
	
	/**
	 * refresh a Weex instance
	 *
	 * @param  {string} instanceId
	 * @param  {object} data
	 */
	function refreshInstance(instanceId, data) {
	  var instance = _map.instanceMap[instanceId];
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
	  var instance = _map.instanceMap[instanceId];
	  if (!instance) {
	    return new Error('invalid instance id "' + instanceId + '"');
	  }
	
	  instance.destroy();
	  delete _map.instanceMap[instanceId];
	  return _map.instanceMap;
	}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.registerComponents = registerComponents;
	exports.registerModules = registerModules;
	exports.registerMethods = registerMethods;
	
	var _vm = __webpack_require__(89);
	
	var _vm2 = _interopRequireDefault(_vm);
	
	var _config = __webpack_require__(97);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var nativeComponentMap = _config2.default.nativeComponentMap;
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.receiveTasks = receiveTasks;
	
	var _map = __webpack_require__(107);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var jsHandlers = {
	  fireEvent: function fireEvent(instanceId, ref, type, data, domChanges) {
	    var instance = _map.instanceMap[instanceId];
	    return instance.fireEvent(ref, type, data, domChanges);
	  },
	
	  callback: function callback(instanceId, funcId, data, ifLast) {
	    var instance = _map.instanceMap[instanceId];
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
	  var instance = _map.instanceMap[instanceId];
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

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRoot = getRoot;
	
	var _map = __webpack_require__(107);
	
	/**
	 * get a whole element tree of an instance
	 * for debugging
	 * @param  {string} instanceId
	 * @return {object} a virtual dom tree
	 */
	function getRoot(instanceId) {
	  var instance = _map.instanceMap[instanceId];
	  var result = void 0;
	  if (instance) {
	    result = instance.getRootElement();
	  } else {
	    result = new Error('invalid instance id "' + instanceId + '"');
	  }
	  return result;
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = init;
	var frameworks = void 0;
	
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
	  for (var name in frameworks) {
	    var framework = frameworks[name];
	    framework.init(config);
	  }
	
	  ;['destroyInstance', 'refreshInstance', 'receiveTasks', 'getRoot'].forEach(genInstance);['registerComponents', 'registerModules', 'registerMethods'].forEach(genInit);
	
	  adaptInstance('receiveTasks', 'callJS');
	
	  return methods;
	}

/***/ },
/* 113 */
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
		"private": true,
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
			"build:common": "webpack --config build/webpack.common.config.js",
			"build:native": "webpack --config build/webpack.native.config.js",
			"build:examples": "webpack --config build/webpack.examples.config.js",
			"build:test": "webpack --config build/webpack.test.config.js",
			"dist:browser": "npm run build:browser && npm run build:common && bash ./bin/dist-browser.sh",
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
			"copy:js": "cp -vf ./dist/native.js ./android/sdk/assets/main.js && cp -vf ./dist/native.js /Users/linx4200/Downloads/weex/main.js",
			"copy:examples": "rm -rf ./android/playground/app/src/main/assets/* && cp -vrf ./examples/build/* ./android/playground/app/src/main/assets/",
			"copy": "npm run copy:js && npm run copy:examples"
		},
		"subversion": {
			"browser": "0.3.2",
			"framework": "0.15.2",
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
/* 114 */
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
	exports.$addListener = $addListener;
	exports.$emitEvent = $emitEvent;
	
	var _util = __webpack_require__(82);
	
	var _EventEmitter = __webpack_require__(115);
	
	var _EventEmitter2 = _interopRequireDefault(_EventEmitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @fileOverview The api for invoking with "$" prefix
	 */
	var ee = new _EventEmitter2.default();
	
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
	
	function $addListener(eventName, callback) {
	  console.log('$addListener:', eventName);
	  ee.addListener(eventName, callback);
	}
	
	function $emitEvent(eventName, value) {
	  console.log('$emitEvent:', eventName, value);
	  ee.emitEvent(eventName, value);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 115 */
/***/ function(module, exports) {

	/*!
	 * EventEmitter v5.1.0 - git.io/ee
	 * Unlicense - http://unlicense.org/
	 * Oliver Caldwell - http://oli.me.uk/
	 * @preserve
	 */
	
	// ;(function (exports) {
	'use strict';
	
	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	function EventEmitter() {}
	
	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	// var originalGlobalValue = exports.EventEmitter;
	
	/**
	 * Finds the index of the listener for the event in its storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
	    var i = listeners.length;
	    while (i--) {
	        if (listeners[i].listener === listener) {
	            return i;
	        }
	    }
	
	    return -1;
	}
	
	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
	    return function aliasClosure() {
	        return this[name].apply(this, arguments);
	    };
	}
	
	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
	    var events = this._getEvents();
	    var response;
	    var key;
	
	    // Return a concatenated array of all matching events if
	    // the selector is a regular expression.
	    if (evt instanceof RegExp) {
	        response = {};
	        for (key in events) {
	            if (events.hasOwnProperty(key) && evt.test(key)) {
	                response[key] = events[key];
	            }
	        }
	    } else {
	        response = events[evt] || (events[evt] = []);
	    }
	
	    return response;
	};
	
	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
	    var flatListeners = [];
	    var i;
	
	    for (i = 0; i < listeners.length; i += 1) {
	        flatListeners.push(listeners[i].listener);
	    }
	
	    return flatListeners;
	};
	
	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
	    var listeners = this.getListeners(evt);
	    var response;
	
	    if (listeners instanceof Array) {
	        response = {};
	        response[evt] = listeners;
	    }
	
	    return response || listeners;
	};
	
	function isValidListener(listener) {
	    if (typeof listener === 'function' || listener instanceof RegExp) {
	        return true;
	    } else if (listener && (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object') {
	        return isValidListener(listener.listener);
	    } else {
	        return false;
	    }
	}
	
	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
	    if (!isValidListener(listener)) {
	        throw new TypeError('listener must be a function');
	    }
	
	    var listeners = this.getListenersAsObject(evt);
	    var listenerIsWrapped = (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object';
	    var key;
	
	    for (key in listeners) {
	        if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
	            listeners[key].push(listenerIsWrapped ? listener : {
	                listener: listener,
	                once: false
	            });
	        }
	    }
	
	    return this;
	};
	
	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');
	
	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after its first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
	    return this.addListener(evt, {
	        listener: listener,
	        once: true
	    });
	};
	
	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');
	
	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
	    this.getListeners(evt);
	    return this;
	};
	
	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
	    for (var i = 0; i < evts.length; i += 1) {
	        this.defineEvent(evts[i]);
	    }
	    return this;
	};
	
	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
	    var listeners = this.getListenersAsObject(evt);
	    var index;
	    var key;
	
	    for (key in listeners) {
	        if (listeners.hasOwnProperty(key)) {
	            index = indexOfListener(listeners[key], listener);
	
	            if (index !== -1) {
	                listeners[key].splice(index, 1);
	            }
	        }
	    }
	
	    return this;
	};
	
	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');
	
	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the first argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
	    // Pass through to manipulateListeners
	    return this.manipulateListeners(false, evt, listeners);
	};
	
	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the first argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
	    // Pass through to manipulateListeners
	    return this.manipulateListeners(true, evt, listeners);
	};
	
	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
	    var i;
	    var value;
	    var single = remove ? this.removeListener : this.addListener;
	    var multiple = remove ? this.removeListeners : this.addListeners;
	
	    // If evt is an object then pass each of its properties to this method
	    if ((typeof evt === 'undefined' ? 'undefined' : _typeof(evt)) === 'object' && !(evt instanceof RegExp)) {
	        for (i in evt) {
	            if (evt.hasOwnProperty(i) && (value = evt[i])) {
	                // Pass the single listener straight through to the singular method
	                if (typeof value === 'function') {
	                    single.call(this, i, value);
	                } else {
	                    // Otherwise pass back to the multiple function
	                    multiple.call(this, i, value);
	                }
	            }
	        }
	    } else {
	        // So evt must be a string
	        // And listeners must be an array of listeners
	        // Loop over it and pass each one to the multiple method
	        i = listeners.length;
	        while (i--) {
	            single.call(this, evt, listeners[i]);
	        }
	    }
	
	    return this;
	};
	
	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
	    var type = typeof evt === 'undefined' ? 'undefined' : _typeof(evt);
	    var events = this._getEvents();
	    var key;
	
	    // Remove different things depending on the state of evt
	    if (type === 'string') {
	        // Remove all listeners for the specified event
	        delete events[evt];
	    } else if (evt instanceof RegExp) {
	        // Remove all events matching the regex.
	        for (key in events) {
	            if (events.hasOwnProperty(key) && evt.test(key)) {
	                delete events[key];
	            }
	        }
	    } else {
	        // Remove all listeners in all events
	        delete this._events;
	    }
	
	    return this;
	};
	
	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');
	
	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
	    var listenersMap = this.getListenersAsObject(evt);
	    var listeners;
	    var listener;
	    var i;
	    var key;
	    var response;
	
	    for (key in listenersMap) {
	        if (listenersMap.hasOwnProperty(key)) {
	            listeners = listenersMap[key].slice(0);
	
	            for (i = 0; i < listeners.length; i++) {
	                // If the listener returns true then it shall be removed from the event
	                // The function is executed either with a basic call or an apply if there is an args array
	                listener = listeners[i];
	
	                if (listener.once === true) {
	                    this.removeListener(evt, listener.listener);
	                }
	
	                response = listener.listener.apply(this, args || []);
	
	                if (response === this._getOnceReturnValue()) {
	                    this.removeListener(evt, listener.listener);
	                }
	            }
	        }
	    }
	
	    return this;
	};
	
	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');
	
	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    return this.emitEvent(evt, args);
	};
	
	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
	    this._onceReturnValue = value;
	    return this;
	};
	
	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
	    if (this.hasOwnProperty('_onceReturnValue')) {
	        return this._onceReturnValue;
	    } else {
	        return true;
	    }
	};
	
	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
	    return this._events || (this._events = {});
	};
	
	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	// EventEmitter.noConflict = function noConflict() {
	//     exports.EventEmitter = originalGlobalValue;
	//     return EventEmitter;
	// };
	
	exports.default = EventEmitter;
	
	// // Expose the class either via AMD, CommonJS or the global object
	// if (typeof define === 'function' && define.amd) {
	//     define(function () {
	//         return EventEmitter;
	//     });
	// }
	// else if (typeof module === 'object' && module.exports){
	//     module.exports = EventEmitter;
	// }
	// else {
	//     exports.EventEmitter = EventEmitter;
	// }
	// }(this || {}));

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2U3ZTk3ZjFkZTg2YTBjZTExODIiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvbmF0aXZlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9zaGFyZWQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3NldFRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL2NvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvc2hhcmVkL29iamVjdEFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS92ZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L3Zkb20vbGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvcnVudGltZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9pbml0LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL34vc2VtdmVyL3NlbXZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvZGVwLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvY29yZS9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvcmUvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9jb21waWxlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3ZtL2RvbS1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC92bS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvZG93bmdyYWRlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9taXNjLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcHAvY3RybC9taXNjLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBwL2RpZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbGlmZS5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvbWlzYy5qcyIsIndlYnBhY2s6Ly8vLi9odG1sNS9ydW50aW1lL2luaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZS5qc29uIiwid2VicGFjazovLy8uL2h0bWw1L2RlZmF1bHQvYXBpL21ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vaHRtbDUvZGVmYXVsdC9hcGkvRXZlbnRFbWl0dGVyLmpzIl0sIm5hbWVzIjpbIm1ldGhvZHMiLCJuYXRpdmUiLCJ0cmFuc2Zvcm1lciIsIm1ldGhvZE5hbWUiLCJnbG9iYWwiLCJyZXQiLCJFcnJvciIsImNvbnNvbGUiLCJlcnJvciIsInRvU3RyaW5nIiwiZnJhbWV3b3JrVmVyc2lvbiIsInRyYW5zZm9ybWVyVmVyc2lvbiIsInJlZ2lzdGVyTWV0aG9kcyIsImV4dGVuZCIsImRlZiIsInJlbW92ZSIsImhhc093biIsImJpbmQiLCJ0b0FycmF5IiwiaXNPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwidGFyZ2V0Iiwic3JjIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlyc3QiLCJzaGlmdCIsImtleSIsImxlbmd0aCIsIm9iaiIsInZhbCIsImVudW1lcmFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJhcnIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJjYWxsIiwiZm4iLCJjdHgiLCJhIiwibCIsImFyZ3VtZW50cyIsImFwcGx5IiwibGlzdCIsInN0YXJ0IiwiaSIsIkFycmF5IiwiT0JKRUNUX1NUUklORyIsInNldFRpbWVvdXQiLCJzZXRUaW1lb3V0TmF0aXZlIiwidGltZW91dE1hcCIsInRpbWVvdXRJZCIsImNiIiwidGltZSIsInNldFRpbWVvdXRDYWxsYmFjayIsImlkIiwicmVxdWlyZSIsImNsYXNzb2YiLCJ0ZXN0IiwiY29mIiwiVEFHIiwiQVJHIiwidHJ5R2V0IiwiaXQiLCJlIiwibW9kdWxlIiwiZXhwb3J0cyIsIk8iLCJUIiwiQiIsInVuZGVmaW5lZCIsImNhbGxlZSIsInNsaWNlIiwic3RvcmUiLCJ1aWQiLCJTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJuYW1lIiwiU0hBUkVEIiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiaGlkZSIsImhhcyIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsInNwbGl0IiwiaW5zcGVjdFNvdXJjZSIsInNhZmUiLCJpc0Z1bmN0aW9uIiwiam9pbiIsIlN0cmluZyIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImYiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJQIiwiQXR0cmlidXRlcyIsIlR5cGVFcnJvciIsImdldCIsImV4ZWMiLCJkb2N1bWVudCIsImlzIiwiY3JlYXRlRWxlbWVudCIsIlMiLCJ2YWx1ZU9mIiwiYml0bWFwIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCIkYXQiLCJpdGVyYXRlZCIsIl90IiwiX2kiLCJwb2ludCIsImRvbmUiLCJ0b0ludGVnZXIiLCJkZWZpbmVkIiwidGhhdCIsInBvcyIsInMiLCJiIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiTElCUkFSWSIsIiRleHBvcnQiLCJyZWRlZmluZSIsIkl0ZXJhdG9ycyIsIiRpdGVyQ3JlYXRlIiwic2V0VG9TdHJpbmdUYWciLCJnZXRQcm90b3R5cGVPZiIsIklURVJBVE9SIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkJhc2UiLCJOQU1FIiwiQ29uc3RydWN0b3IiLCJuZXh0IiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsImtpbmQiLCJwcm90byIsInZhbHVlcyIsImVudHJpZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiRiIsIlBST1RPVFlQRSIsInR5cGUiLCJzb3VyY2UiLCJJU19GT1JDRUQiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiZXhwUHJvdG8iLCJvd24iLCJvdXQiLCJleHAiLCJVIiwiVyIsIlIiLCJhRnVuY3Rpb24iLCJjIiwiY3JlYXRlIiwiZGVzY3JpcHRvciIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsImNvbnRlbnRXaW5kb3ciLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJyZXN1bHQiLCJnZXRLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsIiRrZXlzIiwidG9JT2JqZWN0IiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCJwdXNoIiwiSU9iamVjdCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9MZW5ndGgiLCJ0b0luZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwibWluIiwibWF4Iiwic2hhcmVkIiwiZG9jdW1lbnRFbGVtZW50IiwidGFnIiwic3RhdCIsInRvT2JqZWN0IiwiT2JqZWN0UHJvdG8iLCJjb25zdHJ1Y3RvciIsIiRpdGVyYXRvcnMiLCJ3a3MiLCJUT19TVFJJTkdfVEFHIiwiQXJyYXlWYWx1ZXMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb24iLCJhZGRUb1Vuc2NvcGFibGVzIiwic3RlcCIsIl9rIiwiQXJndW1lbnRzIiwiVU5TQ09QQUJMRVMiLCJBcnJheVByb3RvIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic3BlY2llc0NvbnN0cnVjdG9yIiwidGFzayIsInNldCIsIm1pY3JvdGFzayIsIlBST01JU0UiLCJwcm9jZXNzIiwiJFByb21pc2UiLCJpc05vZGUiLCJlbXB0eSIsIkludGVybmFsIiwiR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJwcm9taXNlIiwicmVzb2x2ZSIsIkZha2VQcm9taXNlIiwiUHJvbWlzZVJlamVjdGlvbkV2ZW50IiwidGhlbiIsInNhbWVDb25zdHJ1Y3RvciIsImlzVGhlbmFibGUiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIkMiLCJQcm9taXNlQ2FwYWJpbGl0eSIsInJlamVjdCIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwicGVyZm9ybSIsIm5vdGlmeSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicnVuIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsImRvbWFpbiIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJlbnRlciIsImV4aXQiLCJvblVuaGFuZGxlZCIsImFicnVwdCIsImlzVW5oYW5kbGVkIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwid3JhcHBlciIsIlByb21pc2UiLCJleGVjdXRvciIsImVyciIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInIiLCJjYXBhYmlsaXR5IiwieCIsIml0ZXIiLCJhbGwiLCJpdGVyYWJsZSIsInJlbWFpbmluZyIsIiRpbmRleCIsImFscmVhZHlDYWxsZWQiLCJyYWNlIiwiZm9yYmlkZGVuRmllbGQiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiaXRlckZuIiwiaXRlcmF0b3IiLCJnZXRJdGVyYXRvck1ldGhvZCIsIlNQRUNJRVMiLCJEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInNldFRhc2siLCJzZXRJbW1lZGlhdGUiLCJjbGVhclRhc2siLCJjbGVhckltbWVkaWF0ZSIsIk1lc3NhZ2VDaGFubmVsIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsImxpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIiwiYXJncyIsIm5leHRUaWNrIiwicG9ydDIiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImltcG9ydFNjcmlwdHMiLCJyZW1vdmVDaGlsZCIsImNsZWFyIiwidW4iLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaGVhZCIsImxhc3QiLCJmbHVzaCIsInBhcmVudCIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwiREVTQ1JJUFRPUlMiLCJLRVkiLCJTQUZFX0NMT1NJTkciLCJyaXRlciIsImZyb20iLCJza2lwQ2xvc2luZyIsIm5hdGl2ZUxvZyIsIkxFVkVMUyIsImxldmVsTWFwIiwiZ2VuZXJhdGVMZXZlbE1hcCIsIldYRW52aXJvbm1lbnQiLCJwbGF0Zm9ybSIsImRlYnVnIiwiY2hlY2tMZXZlbCIsImZvcm1hdCIsImxvZyIsImluZm8iLCJ3YXJuIiwiX19vcmlfXyIsImZvckVhY2giLCJsZXZlbEluZGV4IiwibGV2ZWwiLCJ0eXBlSW5kZXgiLCJsb2dMZXZlbCIsIm1hcCIsInYiLCJ0b0xvd2VyQ2FzZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnT1BTIiwicElFIiwiJGFzc2lnbiIsIkEiLCJLIiwiayIsImFMZW4iLCJnZXRTeW1ib2xzIiwiaXNFbnVtIiwiaiIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmZpZyIsIkRvY3VtZW50IiwiRWxlbWVudCIsIkNvbW1lbnQiLCJMaXN0ZW5lciIsImZyYW1ld29ya3MiLCJzZW5kVGFza3MiLCJjYWxsTmF0aXZlIiwiTm9kZSIsIkRFRkFVTFRfVEFHX05BTUUiLCJpbnN0YW5jZU1hcCIsIm5leHROb2RlUmVmIiwidXJsIiwiVVJMIiwibm9kZU1hcCIsImdlbkNhbGxUYXNrcyIsImNyZWF0ZURvY3VtZW50RWxlbWVudCIsInRhc2tzIiwiaXNBcnJheSIsImRlc3Ryb3kiLCJiYXRjaGVkIiwiZG9jSWQiLCJvd25lckRvY3VtZW50Iiwicm9sZSIsImRlcHRoIiwicmVmIiwiX2RvY3VtZW50RWxlbWVudCIsImFwcGVuZEJvZHkiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJkb2MiLCJwdXJlQ2hpbGRyZW4iLCJwYXJlbnROb2RlIiwiY2hpbGRyZW4iLCJiZWZvcmVJbmRleCIsIm5vZGVUeXBlIiwiY2hpbGQiLCJzZXRCb2R5IiwibGlua1BhcmVudCIsIm5vZGVJZCIsImNyZWF0ZUJvZHkiLCJfcm9vdCIsImJvZHkiLCJwcm9wcyIsInRhZ05hbWUiLCJjcmVhdGVDb21tZW50IiwidGV4dCIsImZpcmVFdmVudCIsImRvbUNoYW5nZXMiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwidXBkYXRlRWxlbWVudCIsImdldFJlZiIsImNoYW5nZXMiLCJhdHRycyIsInNldEF0dHIiLCJzZXRTdHlsZSIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiYXR0ciIsImNsYXNzU3R5bGUiLCJpbnNlcnRJbmRleCIsInJlZ2lzdGVyTm9kZSIsImFkZEVsZW1lbnQiLCJtb3ZlSW5kZXgiLCJtb3ZlRWxlbWVudCIsInB1cmVCZWZvcmUiLCJuZXh0RWxlbWVudCIsImluc2VydEFmdGVyIiwiYWZ0ZXIiLCJwcmV2aW91c0VsZW1lbnQiLCJwcmVzZXJ2ZWQiLCJyZW1vdmVJbmRleCIsInJlbW92ZUVsZW1lbnQiLCJuZXdJbmRleCIsImNoYW5nZVNpYmxpbmciLCJuZXdJbmRleEFmdGVyIiwiYmVmb3JlTmV3IiwiYWZ0ZXJOZXciLCJzaWxlbnQiLCJzZXRDbGFzc1N0eWxlIiwic2V0U3R5bGVzIiwidG9TdHlsZSIsImFkZEV2ZW50IiwicmVtb3ZlRXZlbnQiLCJ0b0pTT04iLCJjcmVhdGVBY3Rpb24iLCJ1cGRhdGVzIiwiY3JlYXRlRmluaXNoIiwiY2FsbGJhY2siLCJ1cGRhdGVGaW5pc2giLCJyZWZyZXNoRmluaXNoIiwiZWxlbWVudCIsImFjdGlvbnMiLCJhZGRBY3Rpb25zIiwidGFyZ2V0UmVmIiwicGFyZW50UmVmIiwibWV0aG9kIiwiV2VleCIsImNyZWF0ZUluc3RhbmNlIiwiaW5pdCIsInJlZnJlc2hJbnN0YW5jZSIsImRlc3Ryb3lJbnN0YW5jZSIsInJlZ2lzdGVyQ29tcG9uZW50cyIsInJlZ2lzdGVyTW9kdWxlcyIsInJlY2VpdmVUYXNrcyIsImdldFJvb3QiLCJpbnN0YW5jZUlkIiwiY29kZSIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImN0cmwiLCJpc1Jlc2VydmVkIiwiY2FjaGVkIiwidHlwb2YiLCJzdHIiLCJoYXNQcm90byIsIl9TZXQiLCJTZXQiLCJtYXRjaCIsImFkZCIsImNhY2hlIiwiY2FjaGVkRm4iLCJoaXQiLCJjYW1lbGl6ZVJFIiwiY2FtZWxpemUiLCJyZXBsYWNlIiwidG9VcHBlciIsIl8iLCJ0b1VwcGVyQ2FzZSIsImh5cGhlbmF0ZVJFIiwiaHlwaGVuYXRlIiwic3Vic3RyaW5nIiwidXBkYXRlQWN0aW9ucyIsImdldFJvb3RFbGVtZW50IiwicmVmcmVzaERhdGEiLCJidW5kbGVEZWZpbmUiLCJidW5kbGVCb290c3RyYXAiLCJfZGF0YSIsImJ1bmRsZVJlZ2lzdGVyIiwiYnVuZGxlUmVuZGVyIiwiYnVuZGxlUmVxdWlyZSIsImJ1bmRsZURvY3VtZW50IiwiZnVuY3Rpb25Cb2R5Iiwic3Vic3RyIiwidGltZXIiLCJyZXF1aXJlTW9kdWxlIiwidGltZXJBUElzIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJuIiwiY2xlYXJJbnRlcnZhbCIsImJvb3RzdHJhcCIsImNsZWFyQ29tbW9uTW9kdWxlcyIsImRlZmluZSIsInJlZ2lzdGVyIiwiZG93bmdyYWRlIiwiYXBwIiwiY2xlYW5OYW1lIiwiY3VzdG9tQ29tcG9uZW50TWFwIiwic2F0aXNmaWVzIiwiX2NoZWNrRG93bmdyYWRlIiwiY2hlY2siLCJpc0Rvd25ncmFkZSIsImNhbGxUYXNrcyIsImVycm9yVHlwZSIsImVycm9yTWVzc2FnZSIsInZtIiwiX2FwcCIsIlNlbVZlciIsImVudiIsIk5PREVfREVCVUciLCJ1bnNoaWZ0IiwiU0VNVkVSX1NQRUNfVkVSU0lPTiIsIk1BWF9MRU5HVEgiLCJNQVhfU0FGRV9JTlRFR0VSIiwiTnVtYmVyIiwicmUiLCJOVU1FUklDSURFTlRJRklFUiIsIk5VTUVSSUNJREVOVElGSUVSTE9PU0UiLCJOT05OVU1FUklDSURFTlRJRklFUiIsIk1BSU5WRVJTSU9OIiwiTUFJTlZFUlNJT05MT09TRSIsIlBSRVJFTEVBU0VJREVOVElGSUVSIiwiUFJFUkVMRUFTRUlERU5USUZJRVJMT09TRSIsIlBSRVJFTEVBU0UiLCJQUkVSRUxFQVNFTE9PU0UiLCJCVUlMRElERU5USUZJRVIiLCJCVUlMRCIsIkZVTEwiLCJGVUxMUExBSU4iLCJMT09TRVBMQUlOIiwiTE9PU0UiLCJHVExUIiwiWFJBTkdFSURFTlRJRklFUkxPT1NFIiwiWFJBTkdFSURFTlRJRklFUiIsIlhSQU5HRVBMQUlOIiwiWFJBTkdFUExBSU5MT09TRSIsIlhSQU5HRSIsIlhSQU5HRUxPT1NFIiwiTE9ORVRJTERFIiwiVElMREVUUklNIiwiUmVnRXhwIiwidGlsZGVUcmltUmVwbGFjZSIsIlRJTERFIiwiVElMREVMT09TRSIsIkxPTkVDQVJFVCIsIkNBUkVUVFJJTSIsImNhcmV0VHJpbVJlcGxhY2UiLCJDQVJFVCIsIkNBUkVUTE9PU0UiLCJDT01QQVJBVE9STE9PU0UiLCJDT01QQVJBVE9SIiwiQ09NUEFSQVRPUlRSSU0iLCJjb21wYXJhdG9yVHJpbVJlcGxhY2UiLCJIWVBIRU5SQU5HRSIsIkhZUEhFTlJBTkdFTE9PU0UiLCJTVEFSIiwicGFyc2UiLCJsb29zZSIsImVyIiwidmFsaWQiLCJjbGVhbiIsInRyaW0iLCJtIiwicmF3IiwibWFqb3IiLCJtaW5vciIsInBhdGNoIiwicHJlcmVsZWFzZSIsIm51bSIsImJ1aWxkIiwiY29tcGFyZSIsIm90aGVyIiwiY29tcGFyZU1haW4iLCJjb21wYXJlUHJlIiwiY29tcGFyZUlkZW50aWZpZXJzIiwiaW5jIiwicmVsZWFzZSIsImlkZW50aWZpZXIiLCJkaWZmIiwidmVyc2lvbjEiLCJ2ZXJzaW9uMiIsImVxIiwidjEiLCJ2MiIsIm51bWVyaWMiLCJhbnVtIiwiYm51bSIsInJjb21wYXJlSWRlbnRpZmllcnMiLCJjb21wYXJlTG9vc2UiLCJyY29tcGFyZSIsInNvcnQiLCJyc29ydCIsIm5lcSIsImd0ZSIsImx0ZSIsImNtcCIsIm9wIiwiQ29tcGFyYXRvciIsImNvbXAiLCJzZW12ZXIiLCJBTlkiLCJvcGVyYXRvciIsIlJhbmdlIiwicmFuZ2UiLCJwYXJzZVJhbmdlIiwiZmlsdGVyIiwiY29tcHMiLCJociIsImh5cGhlblJlcGxhY2UiLCJjb21wUmUiLCJwYXJzZUNvbXBhcmF0b3IiLCJ0b0NvbXBhcmF0b3JzIiwicmVwbGFjZUNhcmV0cyIsInJlcGxhY2VUaWxkZXMiLCJyZXBsYWNlWFJhbmdlcyIsInJlcGxhY2VTdGFycyIsImlzWCIsInJlcGxhY2VUaWxkZSIsIk0iLCJwIiwicHIiLCJyZXBsYWNlQ2FyZXQiLCJyZXBsYWNlWFJhbmdlIiwiZ3RsdCIsInhNIiwieG0iLCJ4cCIsImFueVgiLCIkMCIsImZNIiwiZm0iLCJmcCIsImZwciIsImZiIiwidG8iLCJ0TSIsInRtIiwidHAiLCJ0cHIiLCJ0YiIsInRlc3RTZXQiLCJhbGxvd2VkIiwibWF4U2F0aXNmeWluZyIsInZlcnNpb25zIiwibWluU2F0aXNmeWluZyIsInZhbGlkUmFuZ2UiLCJsdHIiLCJvdXRzaWRlIiwiZ3RyIiwiaGlsbyIsImd0Zm4iLCJsdGVmbiIsImx0Zm4iLCJlY29tcCIsImNvbXBhcmF0b3JzIiwiaGlnaCIsImxvdyIsImNvbXBhcmF0b3IiLCJwYXJzZWQiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwiSXRlbSIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiYXJndiIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJWbSIsInBhcmVudFZtIiwicGFyZW50RWwiLCJtZXJnZWREYXRhIiwiZXh0ZXJuYWxFdmVudHMiLCJfcGFyZW50IiwiX3JlYWxQYXJlbnQiLCJfY2hpbGRyZW5WbXMiLCJfb3B0aW9ucyIsIl9tZXRob2RzIiwiX2NvbXB1dGVkIiwiY29tcHV0ZWQiLCJfY3NzIiwiX2lkcyIsIl92bUV2ZW50cyIsIl90eXBlIiwiJGVtaXQiLCJfaW5pdGVkIiwiX2NyZWF0ZWQiLCJyZWFkeSIsIl9wYXJlbnRFbCIsImluaXRTdGF0ZSIsImluaXREYXRhIiwiaW5pdENvbXB1dGVkIiwiaW5pdE1ldGhvZHMiLCJfd2F0Y2hlcnMiLCJ1c2VyRGVmIiwibWFrZUNvbXB1dGVkR2V0dGVyIiwiZ2V0dGVyIiwib3duZXIiLCJ3YXRjaGVyIiwibGF6eSIsImNvbXB1dGVkR2V0dGVyIiwiZGlydHkiLCJldmFsdWF0ZSIsImRlcGVuZCIsIldhdGNoZXIiLCJwcmV2VGFyZ2V0IiwiZXhwT3JGbiIsImlzRm4iLCJleHByZXNzaW9uIiwiYWN0aXZlIiwiZGVwcyIsIm5ld0RlcHMiLCJkZXBJZHMiLCJuZXdEZXBJZHMiLCJOT0RFX0VOViIsInF1ZXVlZCIsInNoYWxsb3ciLCJiZWZvcmVHZXQiLCJkZWVwIiwidHJhdmVyc2UiLCJhZnRlckdldCIsImFkZERlcCIsImRlcCIsImFkZFN1YiIsInJlbW92ZVN1YiIsInRtcCIsInVwZGF0ZSIsIm9sZFZhbHVlIiwiY3VycmVudCIsInRlYXJkb3duIiwiX2lzQmVpbmdEZXN0cm95ZWQiLCJfdkZvclJlbW92aW5nIiwic2Vlbk9iamVjdHMiLCJzZWVuIiwiaXNBIiwiaXNPIiwiX19vYl9fIiwiZGVwSWQiLCJEZXAiLCJzdWJzIiwic3ViIiwiZGVmaW5lUmVhY3RpdmUiLCJkZWwiLCJwcm94eSIsInVucHJveHkiLCJhcnJheUtleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiYXVnbWVudCIsInByb3RvQXVnbWVudCIsImNvcHlBdWdtZW50Iiwib2JzZXJ2ZUFycmF5Iiwid2FsayIsImNvbnZlcnQiLCJpdGVtcyIsImFkZFZtIiwidm1zIiwicmVtb3ZlVm0iLCJfX3Byb3RvX18iLCJvYiIsImlzRXh0ZW5zaWJsZSIsIl9pc1Z1ZSIsInByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwic2V0dGVyIiwiY2hpbGRPYiIsInJlYWN0aXZlR2V0dGVyIiwicmVhY3RpdmVTZXR0ZXIiLCJuZXdWYWwiLCIkZm9yY2VVcGRhdGUiLCJLRVlfV09SRFMiLCJwcm94eUdldHRlciIsInByb3h5U2V0dGVyIiwiYXJyYXlQcm90byIsImFycmF5TWV0aG9kcyIsIm9yaWdpbmFsIiwibXV0YXRvciIsImluc2VydGVkIiwiJHNldCIsIiRyZW1vdmUiLCJvcHQiLCJ0ZW1wbGF0ZSIsImNvbXBpbGUiLCJfcmVhZHkiLCJkZXN0IiwibWV0YSIsImxhc3RTaWduYWwiLCJ0YXJnZXRJc0ZyYWdtZW50IiwiY29tcGlsZUZyYWdtZW50IiwidGFyZ2V0SXNDb250ZW50IiwiX2NvbnRlbnQiLCJ0YXJnZXROZWVkQ2hlY2tSZXBlYXQiLCJjb21waWxlUmVwZWF0IiwidGFyZ2V0TmVlZENoZWNrU2hvd24iLCJjb21waWxlU2hvd24iLCJ0eXBlR2V0dGVyIiwidGFyZ2V0TmVlZENoZWNrVHlwZSIsImNvbXBpbGVUeXBlIiwiY29tcG9uZW50IiwidGFyZ2V0SXNDb21wb3NlZCIsImNvbXBpbGVDdXN0b21Db21wb25lbnQiLCJjb21waWxlTmF0aXZlQ29tcG9uZW50IiwicmVwZWF0Iiwic2hvd24iLCJjb21wb25lbnRzIiwiZnJhZ0Jsb2NrIiwib2xkU3R5bGUiLCJ0cmFja0J5IiwiYmluZFJlcGVhdCIsIm5ld01ldGEiLCJiaW5kU2hvd24iLCJDdG9yIiwic3ViVm0iLCJfZXh0ZXJuYWxCaW5kaW5nIiwiY29tcGlsZUNoaWxkcmVuIiwiX3Jvb3RFbCIsImV2ZW50cyIsImFwcGVuZCIsInRyZWVNb2RlIiwiZXZlcnkiLCJrZXlOYW1lIiwidmFsdWVOYW1lIiwiY29tcGlsZUl0ZW0iLCJjb250ZXh0IiwibmV3Q29udGV4dCIsIm1lcmdlQ29udGV4dCIsIndhdGNoQmxvY2siLCJvbGRDaGlsZHJlbiIsIm9sZFZtcyIsIm9sZERhdGEiLCJ0cmFja01hcCIsInJldXNlZE1hcCIsInJldXNlZExpc3QiLCJ1cGRhdGVNYXJrIiwicmV1c2VkIiwiY2FsYyIsImRpZmZlciIsImxhdGVzdFZhbHVlIiwicmVjb3JkZWQiLCJibG9ja0lkIiwiYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zIiwiYmluZEVsZW1lbnQiLCJiaW5kU3ViVm0iLCJiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkIiwic2V0SWQiLCJ3YXRjaCIsIm5hdGl2ZUNvbXBvbmVudE1hcCIsIlNFVFRFUlMiLCJzdWJrZXkiLCJzZXRDbGFzcyIsImNsYXNzTGlzdCIsImJpbmRFdmVudHMiLCJyZXBlYXRJdGVtIiwicmVkdWNlIiwibWVyZ2VQcm9wcyIsIm1lcmdlQ2xhc3NTdHlsZSIsIm1lcmdlU3R5bGUiLCJyZXR1cm5WYWx1ZSIsImNzcyIsIm5ld0lkIiwiYmluZERpciIsInNldEV2ZW50IiwiYmluZEtleSIsImltYWdlIiwiY29udGFpbmVyIiwic2xpZGVyIiwiY2VsbCIsImNyZWF0ZUJsb2NrIiwiYXR0YWNoVGFyZ2V0IiwibW92ZVRhcmdldCIsInJlbW92ZVRhcmdldCIsImNyZWF0ZUJsb2NrU3RhcnQiLCJlbmQiLCJjcmVhdGVCbG9ja0VuZCIsImxhc3Rlc3RCbG9ja0lkIiwiYW5jaG9yIiwic2lnbmFsIiwibW92ZUJsb2NrIiwiZ3JvdXAiLCJ0ZW1wIiwicHJlc2VydmVCbG9jayIsInJlbW92ZUJsb2NrIiwiJGRpc3BhdGNoIiwiJGJyb2FkY2FzdCIsIiRvbiIsIiRvZmYiLCJpbml0RXZlbnRzIiwibWl4aW5FdmVudHMiLCJFdnQiLCJkZXRhaWwiLCJzaG91bGRTdG9wIiwic3RvcCIsImhhc1N0b3BwZWQiLCJoYW5kbGVyTGlzdCIsImV2dCIsIkxJRkVfQ1lDTEVfVFlQRVMiLCJ0eXBlMSIsInR5cGUyIiwiY2xlYXJNb2R1bGVzIiwiZ2V0TW9kdWxlIiwicmVxdWlyZUNvbXBvbmVudCIsInJlZ2lzdGVyQ29tcG9uZW50IiwibmF0aXZlTW9kdWxlcyIsImFzc2lnbk1vZHVsZXMiLCJtb2R1bGVzIiwiaWZSZXBsYWNlIiwibW9kdWxlTmFtZSIsImFzc2lnbkFwaXMiLCJhcGlzIiwiYXBpTmFtZSIsIm5vcm1hbGl6ZVZlcnNpb24iLCJnZXRFcnJvciIsImlzVmFsaWQiLCJjcml0ZXJpYSIsImdldE1zZyIsIl9rZXkiLCJkZXZpY2VJbmZvIiwiY3VzdG9tRG93bmdyYWRlIiwiZFBsYXRmb3JtIiwiY09iaiIsImtleUxvd2VyIiwiaXNWZXJzaW9uIiwiaXNEZXZpY2VNb2RlbCIsImQiLCJfY3JpdGVyaWEiLCJyZW1vdmVXZWV4UHJlZml4IiwicmVtb3ZlSlNTdXJmaXgiLCJXRUVYX0NPTVBPTkVOVF9SRUciLCJXRUVYX01PRFVMRV9SRUciLCJOT1JNQUxfTU9EVUxFX1JFRyIsIkpTX1NVUkZJWF9SRUciLCJpc1dlZXhDb21wb25lbnQiLCJpc1dlZXhNb2R1bGUiLCJpc05vcm1hbE1vZHVsZSIsImlzTnBtTW9kdWxlIiwiY29tbW9uTW9kdWxlcyIsImZhY3RvcnkiLCJfcmVxdWlyZSIsIl9tb2R1bGUiLCJibG9ja3MiLCJjYWxsYmFja3MiLCJzb21lIiwiY2FsbGJhY2tJZCIsImlmS2VlcEFsaXZlIiwiQXBwSW5zdGFuY2UiLCJidW5kbGVVcmwiLCJub3JtYWxpemUiLCJ0b0lTT1N0cmluZyIsImFyZyIsIkRpZmZlciIsImhvb2tzIiwiaGFzVGltZXIiLCJpc1RpbWVvdXQiLCJjYWxsVHlwZU1hcCIsImNhbGxUeXBlTGlzdCIsImlzRW1wdHkiLCJfX2luc3RhbmNlTWFwIiwiY2ZnIiwianNIYW5kbGVycyIsImZ1bmNJZCIsImlmTGFzdCIsInJlc3VsdHMiLCJ2ZXJzaW9uUmVnRXhwIiwiY2hlY2tWZXJzaW9uIiwiZnJhbWV3b3JrIiwiYnVuZGxlVmVyc2lvbiIsImdlbkluaXQiLCJnZW5JbnN0YW5jZSIsImFkYXB0SW5zdGFuY2UiLCJuYXRpdmVNZXRob2ROYW1lIiwiJCIsIiRlbCIsIiR2bSIsIiRyZW5kZXJUaGVuIiwiJHNjcm9sbFRvIiwiJHRyYW5zaXRpb24iLCIkZ2V0Q29uZmlnIiwiJHNlbmRIdHRwIiwiJG9wZW5VUkwiLCIkc2V0VGl0bGUiLCIkY2FsbCIsIiRhZGRMaXN0ZW5lciIsIiRlbWl0RXZlbnQiLCJlZSIsIm9mZnNldCIsImRvbSIsInNjcm9sbFRvRWxlbWVudCIsInN0eWxlcyIsImFuaW1hdGlvbiIsInRyYW5zaXRpb24iLCJfc2V0U3R5bGUiLCJwYXJhbXMiLCJzdHJlYW0iLCJzZW5kSHR0cCIsIm9wZW5VUkwiLCJwYWdlSW5mbyIsInNldFRpdGxlIiwiZXZlbnROYW1lIiwiZW1pdEV2ZW50IiwiRXZlbnRFbWl0dGVyIiwiaW5kZXhPZkxpc3RlbmVyIiwibGlzdGVuZXJzIiwiYWxpYXMiLCJhbGlhc0Nsb3N1cmUiLCJnZXRMaXN0ZW5lcnMiLCJfZ2V0RXZlbnRzIiwicmVzcG9uc2UiLCJmbGF0dGVuTGlzdGVuZXJzIiwiZmxhdExpc3RlbmVycyIsImdldExpc3RlbmVyc0FzT2JqZWN0IiwiaXNWYWxpZExpc3RlbmVyIiwibGlzdGVuZXJJc1dyYXBwZWQiLCJhZGRPbmNlTGlzdGVuZXIiLCJkZWZpbmVFdmVudCIsImRlZmluZUV2ZW50cyIsImV2dHMiLCJhZGRMaXN0ZW5lcnMiLCJtYW5pcHVsYXRlTGlzdGVuZXJzIiwicmVtb3ZlTGlzdGVuZXJzIiwic2luZ2xlIiwibXVsdGlwbGUiLCJfZXZlbnRzIiwibGlzdGVuZXJzTWFwIiwiX2dldE9uY2VSZXR1cm5WYWx1ZSIsInRyaWdnZXIiLCJzZXRPbmNlUmV0dXJuVmFsdWUiLCJfb25jZVJldHVyblZhbHVlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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K0I7QUFDdkQsU0FBSSxLQUFLM2pDLGNBQUwsQ0FBb0Isa0JBQXBCLENBQUosRUFBNkM7QUFDekMsZ0JBQU8sS0FBSzhqQyxnQkFBWjtBQUNILE1BRkQsTUFHSztBQUNELGdCQUFPLElBQVA7QUFDSDtBQUNKLEVBUEQ7O0FBU0E7Ozs7OztBQU1BLzdCLE9BQU0wNkIsVUFBTixHQUFtQixTQUFTQSxVQUFULEdBQXNCO0FBQ3JDLFlBQU8sS0FBS2dCLE9BQUwsS0FBaUIsS0FBS0EsT0FBTCxHQUFlLEVBQWhDLENBQVA7QUFDSCxFQUZEOztBQUlBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzttQkFFZXRCLFk7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0osbUIiLCJmaWxlIjoibmF0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZTdlOTdmMWRlODZhMGNlMTE4MlxuICoqLyIsImltcG9ydCAnLi4vc2hhcmVkJ1xuaW1wb3J0IHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSdcbmltcG9ydCB7IHN1YnZlcnNpb24gfSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXG5pbXBvcnQgKiBhcyBtZXRob2RzIGZyb20gJy4uL2RlZmF1bHQvYXBpL21ldGhvZHMnXG5cbmNvbnN0IHsgbmF0aXZlLCB0cmFuc2Zvcm1lciB9ID0gc3VidmVyc2lvblxuXG4vLyByZWdpc3RlciBpbnN0YW5jZSBtYW5hZ2VtZW50IEFQSXNcbmZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBydW50aW1lKSB7XG4gIGdsb2JhbFttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmV0ID0gcnVudGltZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIGlmIChyZXQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihyZXQudG9TdHJpbmcoKSlcbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG5cbi8vIHJlZ2lzdGVyIGZyYW1ld29yayBtZXRhIGluZm9cbmdsb2JhbC5mcmFtZXdvcmtWZXJzaW9uID0gbmF0aXZlXG5nbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID0gdHJhbnNmb3JtZXJcblxuLy8gcmVnaXN0ZXIgc3BlY2lhbCBtZXRob2RzIGZvciBXZWV4IGZyYW1ld29ya1xuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyhtZXRob2RzKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9uYXRpdmUvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vc2V0VGltZW91dCdcbmltcG9ydCAnLi9wcm9taXNlJ1xuaW1wb3J0ICcuL2NvbnNvbGUnXG5pbXBvcnQgJy4vb2JqZWN0QXNzaWduJ1xuXG5leHBvcnQge1xuICBleHRlbmQsXG4gIGRlZixcbiAgcmVtb3ZlLFxuICBoYXNPd24sXG4gIGJpbmQsXG4gIHRvQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0XG59IGZyb20gJy4vdXRpbHMnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3NoYXJlZC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQsIC4uLnNyYykge1xuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc3JjKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGZpcnN0ID0gc3JjLnNoaWZ0KClcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaXJzdCkge1xuICAgICAgdGFyZ2V0W2tleV0gPSBmaXJzdFtrZXldXG4gICAgfVxuICAgIGlmIChzcmMubGVuZ3RoKSB7XG4gICAgICBleHRlbmQodGFyZ2V0LCAuLi5zcmMpXG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBpdGVtIGZyb20gYW4gYXJyYXlcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSlcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG5leHBvcnQgZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIEFycmF5LWxpa2Ugb2JqZWN0IHRvIGEgcmVhbCBBcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5LWxpa2V9IGxpc3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIC0gc3RhcnQgaW5kZXhcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDBcbiAgbGV0IGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0XG4gIGNvbnN0IHJldCA9IG5ldyBBcnJheShpKVxuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvc2hhcmVkL3V0aWxzLmpzXG4gKiovIiwiY29uc3Qge1xuICBzZXRUaW1lb3V0LFxuICBzZXRUaW1lb3V0TmF0aXZlXG59ID0gZ2xvYmFsXG5cbi8vIGZpeCBubyBzZXRUaW1lb3V0IG9uIEFuZHJvaWQgVjhcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2Ygc2V0VGltZW91dE5hdGl2ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zdCB0aW1lb3V0TWFwID0ge31cbiAgbGV0IHRpbWVvdXRJZCA9IDBcblxuICBnbG9iYWwuc2V0VGltZW91dCA9IChjYiwgdGltZSkgPT4ge1xuICAgIHRpbWVvdXRNYXBbKyt0aW1lb3V0SWRdID0gY2JcbiAgICBzZXRUaW1lb3V0TmF0aXZlKHRpbWVvdXRJZC50b1N0cmluZygpLCB0aW1lKVxuICB9XG5cbiAgZ2xvYmFsLnNldFRpbWVvdXRDYWxsYmFjayA9IChpZCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGltZW91dE1hcFtpZF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRpbWVvdXRNYXBbaWRdKClcbiAgICAgIGRlbGV0ZSB0aW1lb3V0TWFwW2lkXVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvc2V0VGltZW91dC5qc1xuICoqLyIsIi8vIGZpeCBQcm9taXNlIFByb2JsZW0gb24gSlNDb250ZXh0IG9mIGlPUzd+OFxuLy8gQHNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM1ODY2XG4vLyBnbG9iYWwuUHJvbWlzZSA9IG51bGxcbnJlcXVpcmUoJ2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpXG5yZXF1aXJlKCdjb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UnKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvcHJvbWlzZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCB0ZXN0ICAgID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jbGFzc29mLmpzXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19jb2YuanNcbiAqKi8iLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL193a3MuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qc1xuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanNcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL191aWQuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFNSQyAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKVxuICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG4gICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZihPW2tleV0gPT09IHZhbClyZXR1cm47XG4gIGlmKGlzRnVuY3Rpb24paGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKXtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoT1trZXldKU9ba2V5XSA9IHZhbDtcbiAgICAgIGVsc2UgaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfVxuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qc1xuICoqLyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzXG4gKiovIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faGFzLmpzXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2NvcmUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qc1xuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2xpYnJhcnkuanNcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQpcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanNcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2N0eC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4gKiovIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qc1xuICoqLyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuICoqLyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4gKiovIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qc1xuICoqLyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuICoqLyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8taW5kZXguanNcbiAqKi8iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4gKiovIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2h0bWwuanNcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKi8iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1ncG8uanNcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4gKiovIiwidmFyICRpdGVyYXRvcnMgICAgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpXG4gICwgcmVkZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgd2tzICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgSVRFUkFUT1IgICAgICA9IHdrcygnaXRlcmF0b3InKVxuICAsIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJylcbiAgLCBBcnJheVZhbHVlcyAgID0gSXRlcmF0b3JzLkFycmF5O1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGVcbiAgICAsIGtleTtcbiAgaWYocHJvdG8pe1xuICAgIGlmKCFwcm90b1tJVEVSQVRPUl0paGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZighcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgZm9yKGtleSBpbiAkaXRlcmF0b3JzKWlmKCFwcm90b1trZXldKXJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4gKiovIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19mb3Itb2YuanNcbiAqKi8iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanNcbiAqKi8iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqLyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuICoqLyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL190YXNrLmpzXG4gKiovIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX2ludm9rZS5qc1xuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qc1xuICoqLyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuICoqLyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbiAqKi8iLCJjb25zdCB7IGNvbnNvbGUsIG5hdGl2ZUxvZyB9ID0gZ2xvYmFsXG5jb25zdCBMRVZFTFMgPSBbJ2Vycm9yJywgJ3dhcm4nLCAnaW5mbycsICdsb2cnLCAnZGVidWcnXVxuY29uc3QgbGV2ZWxNYXAgPSB7fVxuXG5nZW5lcmF0ZUxldmVsTWFwKClcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoXG4gIHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJyB8fCAvLyBBbmRyb2lkXG4gIChnbG9iYWwuV1hFbnZpcm9ubWVudCAmJiBnbG9iYWwuV1hFbnZpcm9ubWVudC5wbGF0Zm9ybSA9PT0gJ2lPUycpIC8vIGlPU1xuKSB7XG4gIGdsb2JhbC5jb25zb2xlID0ge1xuICAgIGRlYnVnOiAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGNoZWNrTGV2ZWwoJ2RlYnVnJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fREVCVUcnKSB9XG4gICAgfSxcbiAgICBsb2c6ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnbG9nJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fTE9HJykgfVxuICAgIH0sXG4gICAgaW5mbzogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgbmF0aXZlTG9nKC4uLmZvcm1hdChhcmdzKSwgJ19fSU5GTycpIH1cbiAgICB9LFxuICAgIHdhcm46ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoY2hlY2tMZXZlbCgnd2FybicpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX1dBUk4nKSB9XG4gICAgfSxcbiAgICBlcnJvcjogKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChjaGVja0xldmVsKCdlcnJvcicpKSB7IG5hdGl2ZUxvZyguLi5mb3JtYXQoYXJncyksICdfX0VSUk9SJykgfVxuICAgIH1cbiAgfVxufVxuZWxzZSB7IC8vIEhUTUw1XG4gIGNvbnN0IHsgZGVidWcsIGxvZywgaW5mbywgd2FybiwgZXJyb3IgfSA9IGNvbnNvbGVcbiAgY29uc29sZS5fX29yaV9fID0geyBkZWJ1ZywgbG9nLCBpbmZvLCB3YXJuLCBlcnJvciB9XG4gIGNvbnNvbGUuZGVidWcgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdkZWJ1ZycpKSB7IGNvbnNvbGUuX19vcmlfXy5kZWJ1Zy5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5sb2cgPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdsb2cnKSkgeyBjb25zb2xlLl9fb3JpX18ubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxuICBjb25zb2xlLmluZm8gPSAoLi4uYXJncykgPT4ge1xuICAgIGlmIChjaGVja0xldmVsKCdpbmZvJykpIHsgY29uc29sZS5fX29yaV9fLmluZm8uYXBwbHkoY29uc29sZSwgYXJncykgfVxuICB9XG4gIGNvbnNvbGUud2FybiA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ3dhcm4nKSkgeyBjb25zb2xlLl9fb3JpX18ud2Fybi5hcHBseShjb25zb2xlLCBhcmdzKSB9XG4gIH1cbiAgY29uc29sZS5lcnJvciA9ICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNoZWNrTGV2ZWwoJ2Vycm9yJykpIHsgY29uc29sZS5fX29yaV9fLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3MpIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxldmVsTWFwICgpIHtcbiAgTEVWRUxTLmZvckVhY2gobGV2ZWwgPT4ge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBMRVZFTFMuaW5kZXhPZihsZXZlbClcbiAgICBsZXZlbE1hcFtsZXZlbF0gPSB7fVxuICAgIExFVkVMUy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgY29uc3QgdHlwZUluZGV4ID0gTEVWRUxTLmluZGV4T2YodHlwZSlcbiAgICAgIGlmICh0eXBlSW5kZXggPD0gbGV2ZWxJbmRleCkge1xuICAgICAgICBsZXZlbE1hcFtsZXZlbF1bdHlwZV0gPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tMZXZlbCAodHlwZSkge1xuICBjb25zdCBsb2dMZXZlbCA9IChnbG9iYWwuV1hFbnZpcm9ubWVudCAmJiBnbG9iYWwuV1hFbnZpcm9ubWVudC5sb2dMZXZlbCkgfHwgJ2xvZydcbiAgcmV0dXJuIGxldmVsTWFwW2xvZ0xldmVsXSAmJiBsZXZlbE1hcFtsb2dMZXZlbF1bdHlwZV1cbn1cblxuZnVuY3Rpb24gZm9ybWF0IChhcmdzKSB7XG4gIHJldHVybiBhcmdzLm1hcCgodikgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xuICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdiA9IFN0cmluZyh2KVxuICAgIH1cbiAgICByZXR1cm4gdlxuICB9KVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvY29uc29sZS5qc1xuICoqLyIsImltcG9ydCAnY29yZS1qcy9mbi9vYmplY3QvYXNzaWduJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9zaGFyZWQvb2JqZWN0QXNzaWduLmpzXG4gKiovIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9mbi9vYmplY3QvYXNzaWduLmpzXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuICoqLyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbiAqKi8iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4gKiovIiwiaW1wb3J0IHsgRG9jdW1lbnQsIEVsZW1lbnQsIENvbW1lbnQgfSBmcm9tICcuLi92ZG9tJ1xuaW1wb3J0IExpc3RlbmVyIGZyb20gJy4uL3Zkb20vbGlzdGVuZXInXG5pbXBvcnQgZnJhbWV3b3JrcyBmcm9tICcuL2NvbmZpZydcblxuaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0J1xuXG5jb25zdCBjb25maWcgPSB7XG4gIERvY3VtZW50LCBFbGVtZW50LCBDb21tZW50LCBMaXN0ZW5lciwgZnJhbWV3b3JrcyxcbiAgc2VuZFRhc2tzICguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5jYWxsTmF0aXZlKC4uLmFyZ3MpXG4gIH1cbn1cblxuY29uc3QgbWV0aG9kcyA9IGluaXQoY29uZmlnKVxuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIEEgc2ltcGxlIHZpcnR1YWwgZG9tIGltcGxlbWVudGF0aW9uXG4gKi9cbi8vIGltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3NoYXJlZC91dGlscydcblxuY29uc3QgREVGQVVMVF9UQUdfTkFNRSA9ICdkaXYnXG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZU1hcCA9IHt9XG5sZXQgbmV4dE5vZGVSZWYgPSAxXG5cbmV4cG9ydCBmdW5jdGlvbiBEb2N1bWVudCAoaWQsIHVybCwgaGFuZGxlciwgTGlzdGVuZXIpIHtcbiAgaWQgPSBpZCA/IGlkLnRvU3RyaW5nKCkgOiAnJ1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5VUkwgPSB1cmxcblxuICBpbnN0YW5jZU1hcFtpZF0gPSB0aGlzXG4gIHRoaXMubm9kZU1hcCA9IHt9XG4gIExpc3RlbmVyICYmICh0aGlzLmxpc3RlbmVyID0gbmV3IExpc3RlbmVyKGlkLCBoYW5kbGVyIHx8IGdlbkNhbGxUYXNrcyhpZCkpKVxuICB0aGlzLmNyZWF0ZURvY3VtZW50RWxlbWVudCgpXG59XG5cbmZ1bmN0aW9uIGdlbkNhbGxUYXNrcyAoaWQpIHtcbiAgcmV0dXJuICh0YXNrcykgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICAgIHRhc2tzID0gW3Rhc2tzXVxuICAgIH1cbiAgICByZXR1cm4gY2FsbE5hdGl2ZShpZCwgdGFza3MsICctMScpXG4gIH1cbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGRlbGV0ZSB0aGlzLmxpc3RlbmVyXG4gIGRlbGV0ZSB0aGlzLm5vZGVNYXBcbiAgZGVsZXRlIGluc3RhbmNlTWFwW3RoaXMuaWRdXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxpc3RlbmVyLmJhdGNoZWQgPSBmYWxzZVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGlzdGVuZXIuYmF0Y2hlZCA9IHRydWVcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZURvY3VtZW50RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmRvY3VtZW50RWxlbWVudCkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQoJ2RvY3VtZW50JylcbiAgICBlbC5kb2NJZCA9IHRoaXMuaWRcbiAgICBlbC5vd25lckRvY3VtZW50ID0gdGhpc1xuICAgIGVsLnJvbGUgPSAnZG9jdW1lbnRFbGVtZW50J1xuICAgIGVsLmRlcHRoID0gMFxuICAgIGVsLnJlZiA9ICdfZG9jdW1lbnRFbGVtZW50J1xuICAgIHRoaXMubm9kZU1hcC5fZG9jdW1lbnRFbGVtZW50ID0gZWxcbiAgICB0aGlzLmRvY3VtZW50RWxlbWVudCA9IGVsXG4gICAgZWwuYXBwZW5kQ2hpbGQgPSAobm9kZSkgPT4ge1xuICAgICAgYXBwZW5kQm9keSh0aGlzLCBub2RlKVxuICAgIH1cbiAgICBlbC5pbnNlcnRCZWZvcmUgPSAobm9kZSwgYmVmb3JlKSA9PiB7XG4gICAgICBhcHBlbmRCb2R5KHRoaXMsIG5vZGUsIGJlZm9yZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5kb2N1bWVudEVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYXBwZW5kQm9keSAoZG9jLCBub2RlLCBiZWZvcmUpIHtcbiAgY29uc3QgeyBkb2N1bWVudEVsZW1lbnQgfSA9IGRvY1xuXG4gIGlmIChkb2N1bWVudEVsZW1lbnQucHVyZUNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudEVsZW1lbnQuY2hpbGRyZW5cbiAgY29uc3QgYmVmb3JlSW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKGJlZm9yZSlcbiAgaWYgKGJlZm9yZUluZGV4IDwgMCkge1xuICAgIGNoaWxkcmVuLnB1c2gobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBjaGlsZHJlbi5zcGxpY2UoYmVmb3JlSW5kZXgsIDAsIG5vZGUpXG4gIH1cblxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChub2RlLnJvbGUgPT09ICdib2R5Jykge1xuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gbm9kZVxuICAgICAgfSlcbiAgICAgIHNldEJvZHkoZG9jLCBub2RlKVxuICAgICAgbm9kZS5kb2NJZCA9IGRvYy5pZFxuICAgICAgbm9kZS5vd25lckRvY3VtZW50ID0gZG9jXG4gICAgICBsaW5rUGFyZW50KG5vZGUsIGRvY3VtZW50RWxlbWVudClcbiAgICAgIGRlbGV0ZSBkb2Mubm9kZU1hcFtub2RlLm5vZGVJZF1cbiAgICB9XG4gICAgZG9jdW1lbnRFbGVtZW50LnB1cmVDaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgZG9jLmxpc3RlbmVyLmNyZWF0ZUJvZHkobm9kZSlcbiAgfVxuICBlbHNlIHtcbiAgICBub2RlLnBhcmVudE5vZGUgPSBkb2N1bWVudEVsZW1lbnRcbiAgICBkb2Mubm9kZU1hcFtub2RlLnJlZl0gPSBub2RlXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Qm9keSAoZG9jLCBlbCkge1xuICBlbC5yb2xlID0gJ2JvZHknXG4gIGVsLmRlcHRoID0gMVxuICBkZWxldGUgZG9jLm5vZGVNYXBbZWwubm9kZUlkXVxuICBlbC5yZWYgPSAnX3Jvb3QnXG4gIGRvYy5ub2RlTWFwLl9yb290ID0gZWxcbiAgZG9jLmJvZHkgPSBlbFxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQm9keSA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICBpZiAoIXRoaXMuYm9keSkge1xuICAgIGNvbnN0IGVsID0gbmV3IEVsZW1lbnQodHlwZSwgcHJvcHMpXG4gICAgc2V0Qm9keSh0aGlzLCBlbClcbiAgfVxuXG4gIHJldHVybiB0aGlzLmJvZHlcbn1cblxuRG9jdW1lbnQucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSwgcHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBFbGVtZW50KHRhZ05hbWUsIHByb3BzKVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlQ29tbWVudCA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHJldHVybiBuZXcgQ29tbWVudCh0ZXh0KVxufVxuXG5Eb2N1bWVudC5wcm90b3R5cGUuZmlyZUV2ZW50ID0gZnVuY3Rpb24gKGVsLCB0eXBlLCBlLCBkb21DaGFuZ2VzKSB7XG4gIGlmICghZWwpIHtcbiAgICByZXR1cm5cbiAgfVxuICBlID0gZSB8fCB7fVxuICBlLnR5cGUgPSB0eXBlXG4gIGUudGFyZ2V0ID0gZWxcbiAgZS50aW1lc3RhbXAgPSBEYXRlLm5vdygpXG4gIGlmIChkb21DaGFuZ2VzKSB7XG4gICAgdXBkYXRlRWxlbWVudChlbCwgZG9tQ2hhbmdlcylcbiAgfVxuICByZXR1cm4gZWwuZmlyZUV2ZW50KHR5cGUsIGUpXG59XG5cbkRvY3VtZW50LnByb3RvdHlwZS5nZXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gIHJldHVybiB0aGlzLm5vZGVNYXBbcmVmXVxufVxuXG5mdW5jdGlvbiB1cGRhdGVFbGVtZW50IChlbCwgY2hhbmdlcykge1xuICBjb25zdCBhdHRycyA9IGNoYW5nZXMuYXR0cnMgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIGF0dHJzKSB7XG4gICAgZWwuc2V0QXR0cihuYW1lLCBhdHRyc1tuYW1lXSwgdHJ1ZSlcbiAgfVxuICBjb25zdCBzdHlsZSA9IGNoYW5nZXMuc3R5bGUgfHwge31cbiAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlKSB7XG4gICAgZWwuc2V0U3R5bGUobmFtZSwgc3R5bGVbbmFtZV0sIHRydWUpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5vZGUgKCkge1xuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbiAgdGhpcy5wYXJlbnROb2RlID0gbnVsbFxuICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbFxuICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGxcbn1cblxuTm9kZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZG9jID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF1cbiAgaWYgKGRvYykge1xuICAgIGRlbGV0ZSB0aGlzLmRvY0lkXG4gICAgZGVsZXRlIGRvYy5ub2RlTWFwW3RoaXMubm9kZUlkXVxuICB9XG4gIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgY2hpbGQuZGVzdHJveSgpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbGVtZW50ICh0eXBlID0gREVGQVVMVF9UQUdfTkFNRSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcyB8fCB7fVxuICB0aGlzLm5vZGVUeXBlID0gMVxuICB0aGlzLm5vZGVJZCA9IChuZXh0Tm9kZVJlZisrKS50b1N0cmluZygpXG4gIHRoaXMucmVmID0gdGhpcy5ub2RlSWRcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLmF0dHIgPSBwcm9wcy5hdHRyIHx8IHt9XG4gIHRoaXMuY2xhc3NTdHlsZSA9IHByb3BzLmNsYXNzU3R5bGUgfHwge31cbiAgdGhpcy5zdHlsZSA9IHByb3BzLnN0eWxlIHx8IHt9XG4gIHRoaXMuZXZlbnQgPSB7fVxuICB0aGlzLmNoaWxkcmVuID0gW11cbiAgdGhpcy5wdXJlQ2hpbGRyZW4gPSBbXVxufVxuXG5FbGVtZW50LnByb3RvdHlwZSA9IG5ldyBOb2RlKClcblxuRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICYmIG5vZGUucGFyZW50Tm9kZSAhPT0gdGhpcykge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuLCB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGgpXG4gICAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hZGRFbGVtZW50KG5vZGUsIHRoaXMucmVmLCAtMSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4ubGVuZ3RoLCB0cnVlKVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IG1vdmVJbmRleChub2RlLCB0aGlzLnB1cmVDaGlsZHJlbiwgdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRCZWZvcmUgPSBmdW5jdGlvbiAobm9kZSwgYmVmb3JlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGJlZm9yZSB8fCBub2RlLm5leHRTaWJsaW5nID09PSBiZWZvcmUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIGxpbmtQYXJlbnQobm9kZSwgdGhpcylcbiAgICBpbnNlcnRJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAodGhpcy5kb2NJZCkge1xuICAgICAgcmVnaXN0ZXJOb2RlKHRoaXMuZG9jSWQsIG5vZGUpXG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBjb25zdCBwdXJlQmVmb3JlID0gbmV4dEVsZW1lbnQoYmVmb3JlKVxuICAgICAgY29uc3QgaW5kZXggPSBpbnNlcnRJbmRleChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgdGhpcy5wdXJlQ2hpbGRyZW4sXG4gICAgICAgIHB1cmVCZWZvcmVcbiAgICAgICAgICA/IHRoaXMucHVyZUNoaWxkcmVuLmluZGV4T2YocHVyZUJlZm9yZSlcbiAgICAgICAgICA6IHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aFxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYmVmb3JlKSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgcHVyZUJlZm9yZSA9IG5leHRFbGVtZW50KGJlZm9yZSlcbiAgICAgIGNvbnN0IGluZGV4ID0gbW92ZUluZGV4KFxuICAgICAgICBub2RlLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbixcbiAgICAgICAgcHVyZUJlZm9yZVxuICAgICAgICAgID8gdGhpcy5wdXJlQ2hpbGRyZW4uaW5kZXhPZihwdXJlQmVmb3JlKVxuICAgICAgICAgIDogdGhpcy5wdXJlQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICApXG4gICAgICBpZiAodGhpcy5kb2NJZCAmJiBpbmRleCA+PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyLm1vdmVFbGVtZW50KG5vZGUucmVmLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydEFmdGVyID0gZnVuY3Rpb24gKG5vZGUsIGFmdGVyKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5wYXJlbnROb2RlICE9PSB0aGlzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG5vZGUgPT09IGFmdGVyIHx8IG5vZGUucHJldmlvdXNTaWJsaW5nID09PSBhZnRlcikge1xuICAgIHJldHVyblxuICB9XG4gIGlmICghbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgbGlua1BhcmVudChub2RlLCB0aGlzKVxuICAgIGluc2VydEluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRoaXMuY2hpbGRyZW4uaW5kZXhPZihhZnRlcikgKyAxLCB0cnVlKVxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICByZWdpc3Rlck5vZGUodGhpcy5kb2NJZCwgbm9kZSlcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaW5zZXJ0SW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYWRkRWxlbWVudChub2RlLCB0aGlzLnJlZiwgaW5kZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIG1vdmVJbmRleChub2RlLCB0aGlzLmNoaWxkcmVuLCB0aGlzLmNoaWxkcmVuLmluZGV4T2YoYWZ0ZXIpICsgMSwgdHJ1ZSlcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBtb3ZlSW5kZXgoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIHRoaXMucHVyZUNoaWxkcmVuLFxuICAgICAgICB0aGlzLnB1cmVDaGlsZHJlbi5pbmRleE9mKHByZXZpb3VzRWxlbWVudChhZnRlcikpICsgMVxuICAgICAgKVxuICAgICAgaWYgKHRoaXMuZG9jSWQgJiYgaW5kZXggPj0gMCkge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5tb3ZlRWxlbWVudChub2RlLnJlZiwgdGhpcy5yZWYsIGluZGV4KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChub2RlLCBwcmVzZXJ2ZWQpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMuY2hpbGRyZW4sIHRydWUpXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJlbW92ZUluZGV4KG5vZGUsIHRoaXMucHVyZUNoaWxkcmVuKVxuICAgICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoIXByZXNlcnZlZCkge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIHRoaXMucHVyZUNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsaXN0ZW5lci5yZW1vdmVFbGVtZW50KG5vZGUucmVmKVxuICAgIH0pXG4gIH1cbiAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIG5vZGUuZGVzdHJveSgpXG4gIH0pXG4gIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMFxuICB0aGlzLnB1cmVDaGlsZHJlbi5sZW5ndGggPSAwXG59XG5cbmZ1bmN0aW9uIG5leHRFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLm5leHRTaWJsaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJldmlvdXNFbGVtZW50IChub2RlKSB7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnByZXZpb3VzU2libGluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpbmtQYXJlbnQgKG5vZGUsIHBhcmVudCkge1xuICBub2RlLnBhcmVudE5vZGUgPSBwYXJlbnRcbiAgaWYgKHBhcmVudC5kb2NJZCkge1xuICAgIG5vZGUuZG9jSWQgPSBwYXJlbnQuZG9jSWRcbiAgICBub2RlLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudFxuICAgIG5vZGUub3duZXJEb2N1bWVudC5ub2RlTWFwW25vZGUubm9kZUlkXSA9IG5vZGVcbiAgICBub2RlLmRlcHRoID0gcGFyZW50LmRlcHRoICsgMVxuICB9XG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgbGlua1BhcmVudChjaGlsZCwgbm9kZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOb2RlIChkb2NJZCwgbm9kZSkge1xuICBjb25zdCBkb2MgPSBpbnN0YW5jZU1hcFtkb2NJZF1cbiAgZG9jLm5vZGVNYXBbbm9kZS5ub2RlSWRdID0gbm9kZVxufVxuXG5mdW5jdGlvbiBpbnNlcnRJbmRleCAodGFyZ2V0LCBsaXN0LCBuZXdJbmRleCwgY2hhbmdlU2libGluZykge1xuICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgbmV3SW5kZXggPSAwXG4gIH1cbiAgY29uc3QgYmVmb3JlID0gbGlzdFtuZXdJbmRleCAtIDFdXG4gIGNvbnN0IGFmdGVyID0gbGlzdFtuZXdJbmRleF1cbiAgbGlzdC5zcGxpY2UobmV3SW5kZXgsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlXG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJcbiAgICBhZnRlciAmJiAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiBtb3ZlSW5kZXggKHRhcmdldCwgbGlzdCwgbmV3SW5kZXgsIGNoYW5nZVNpYmxpbmcpIHtcbiAgY29uc3QgaW5kZXggPSBsaXN0LmluZGV4T2YodGFyZ2V0KVxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBjb25zdCBiZWZvcmUgPSBsaXN0W2luZGV4IC0gMV1cbiAgICBjb25zdCBhZnRlciA9IGxpc3RbaW5kZXggKyAxXVxuICAgIGJlZm9yZSAmJiAoYmVmb3JlLm5leHRTaWJsaW5nID0gYWZ0ZXIpXG4gICAgYWZ0ZXIgJiYgKGFmdGVyLnByZXZpb3VzU2libGluZyA9IGJlZm9yZSlcbiAgfVxuICBsaXN0LnNwbGljZShpbmRleCwgMSlcbiAgbGV0IG5ld0luZGV4QWZ0ZXIgPSBuZXdJbmRleFxuICBpZiAoaW5kZXggPD0gbmV3SW5kZXgpIHtcbiAgICBuZXdJbmRleEFmdGVyID0gbmV3SW5kZXggLSAxXG4gIH1cbiAgY29uc3QgYmVmb3JlTmV3ID0gbGlzdFtuZXdJbmRleEFmdGVyIC0gMV1cbiAgY29uc3QgYWZ0ZXJOZXcgPSBsaXN0W25ld0luZGV4QWZ0ZXJdXG4gIGxpc3Quc3BsaWNlKG5ld0luZGV4QWZ0ZXIsIDAsIHRhcmdldClcbiAgaWYgKGNoYW5nZVNpYmxpbmcpIHtcbiAgICBiZWZvcmVOZXcgJiYgKGJlZm9yZU5ldy5uZXh0U2libGluZyA9IHRhcmdldClcbiAgICB0YXJnZXQucHJldmlvdXNTaWJsaW5nID0gYmVmb3JlTmV3XG4gICAgdGFyZ2V0Lm5leHRTaWJsaW5nID0gYWZ0ZXJOZXdcbiAgICBhZnRlck5ldyAmJiAoYWZ0ZXJOZXcucHJldmlvdXNTaWJsaW5nID0gdGFyZ2V0KVxuICB9XG4gIGlmIChpbmRleCA9PT0gbmV3SW5kZXhBZnRlcikge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBuZXdJbmRleFxufVxuXG5mdW5jdGlvbiByZW1vdmVJbmRleCAodGFyZ2V0LCBsaXN0LCBjaGFuZ2VTaWJsaW5nKSB7XG4gIGNvbnN0IGluZGV4ID0gbGlzdC5pbmRleE9mKHRhcmdldClcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChjaGFuZ2VTaWJsaW5nKSB7XG4gICAgY29uc3QgYmVmb3JlID0gbGlzdFtpbmRleCAtIDFdXG4gICAgY29uc3QgYWZ0ZXIgPSBsaXN0W2luZGV4ICsgMV1cbiAgICBiZWZvcmUgJiYgKGJlZm9yZS5uZXh0U2libGluZyA9IGFmdGVyKVxuICAgIGFmdGVyICYmIChhZnRlci5wcmV2aW91c1NpYmxpbmcgPSBiZWZvcmUpXG4gIH1cbiAgbGlzdC5zcGxpY2UoaW5kZXgsIDEpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgc2lsZW50KSB7XG4gIGlmICh0aGlzLmF0dHJba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLmF0dHJba2V5XSA9IHZhbHVlXG4gIGlmICghc2lsZW50ICYmIHRoaXMuZG9jSWQpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgbGlzdGVuZXIuc2V0QXR0cih0aGlzLnJlZiwga2V5LCB2YWx1ZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBzaWxlbnQpIHtcbiAgaWYgKHRoaXMuc3R5bGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLnN0eWxlW2tleV0gPSB2YWx1ZVxuICBpZiAoIXNpbGVudCAmJiB0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlKHRoaXMucmVmLCBrZXksIHZhbHVlKVxuICB9XG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnNldENsYXNzU3R5bGUgPSBmdW5jdGlvbiAoY2xhc3NTdHlsZSkge1xuICB0aGlzLmNsYXNzU3R5bGUgPSBjbGFzc1N0eWxlXG4gIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBpbnN0YW5jZU1hcFt0aGlzLmRvY0lkXS5saXN0ZW5lclxuICAgIGxpc3RlbmVyLnNldFN0eWxlcyh0aGlzLnJlZiwgdGhpcy50b1N0eWxlKCkpXG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXRoaXMuZXZlbnRbdHlwZV0pIHtcbiAgICB0aGlzLmV2ZW50W3R5cGVdID0gaGFuZGxlclxuICAgIGlmICh0aGlzLmRvY0lkKSB7XG4gICAgICBjb25zdCBsaXN0ZW5lciA9IGluc3RhbmNlTWFwW3RoaXMuZG9jSWRdLmxpc3RlbmVyXG4gICAgICBsaXN0ZW5lci5hZGRFdmVudCh0aGlzLnJlZiwgdHlwZSlcbiAgICB9XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSkge1xuICBpZiAodGhpcy5ldmVudFt0eXBlXSkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50W3R5cGVdXG4gICAgaWYgKHRoaXMuZG9jSWQpIHtcbiAgICAgIGNvbnN0IGxpc3RlbmVyID0gaW5zdGFuY2VNYXBbdGhpcy5kb2NJZF0ubGlzdGVuZXJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZUV2ZW50KHRoaXMucmVmLCB0eXBlKVxuICAgIH1cbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS5maXJlRXZlbnQgPSBmdW5jdGlvbiAodHlwZSwgZSkge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudFt0eXBlXVxuICBpZiAoaGFuZGxlcikge1xuICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSlcbiAgfVxufVxuXG5FbGVtZW50LnByb3RvdHlwZS50b1N0eWxlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLmNsYXNzU3R5bGUsIHRoaXMuc3R5bGUpXG59XG5cbkVsZW1lbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIHJlZjogdGhpcy5yZWYudG9TdHJpbmcoKSxcbiAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgYXR0cjogdGhpcy5hdHRyLFxuICAgIHN0eWxlOiB0aGlzLnRvU3R5bGUoKVxuICB9XG4gIGNvbnN0IGV2ZW50ID0gT2JqZWN0LmtleXModGhpcy5ldmVudClcbiAgaWYgKGV2ZW50Lmxlbmd0aCkge1xuICAgIHJlc3VsdC5ldmVudCA9IGV2ZW50XG4gIH1cbiAgaWYgKHRoaXMucHVyZUNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJlc3VsdC5jaGlsZHJlbiA9IHRoaXMucHVyZUNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IGNoaWxkLnRvSlNPTigpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuRWxlbWVudC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnPCcgKyB0aGlzLnR5cGUgK1xuICAgICcgYXR0cj0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy5hdHRyKSArXG4gICAgJyBzdHlsZT0nICsgSlNPTi5zdHJpbmdpZnkodGhpcy50b1N0eWxlKCkpICsgJz4nICtcbiAgICB0aGlzLnB1cmVDaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiBjaGlsZC50b1N0cmluZygpKS5qb2luKCcnKSArXG4gICAgJzwvJyArIHRoaXMudHlwZSArICc+J1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29tbWVudCAodmFsdWUpIHtcbiAgdGhpcy5ub2RlVHlwZSA9IDhcbiAgdGhpcy5ub2RlSWQgPSAobmV4dE5vZGVSZWYrKykudG9TdHJpbmcoKVxuICB0aGlzLnJlZiA9IHRoaXMubm9kZUlkXG4gIHRoaXMudHlwZSA9ICdjb21tZW50J1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5jaGlsZHJlbiA9IFtdXG4gIHRoaXMucHVyZUNoaWxkcmVuID0gW11cbn1cblxuQ29tbWVudC5wcm90b3R5cGUgPSBuZXcgTm9kZSgpXG5cbkNvbW1lbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwhLS0gJyArIHRoaXMudmFsdWUgKyAnIC0tPidcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RlbmVyIChpZCwgaGFuZGxlcikge1xuICB0aGlzLmlkID0gaWRcbiAgdGhpcy5iYXRjaGVkID0gZmFsc2VcbiAgdGhpcy51cGRhdGVzID0gW11cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlclxuICB9XG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5jcmVhdGVGaW5pc2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuICByZXR1cm4gaGFuZGxlcihbY3JlYXRlQWN0aW9uKCdjcmVhdGVGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnVwZGF0ZUZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3VwZGF0ZUZpbmlzaCcsIFtdKV0sIGNhbGxiYWNrKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUucmVmcmVzaEZpbmlzaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBjb25zdCBoYW5kbGVyID0gdGhpcy5oYW5kbGVyXG4gIHJldHVybiBoYW5kbGVyKFtjcmVhdGVBY3Rpb24oJ3JlZnJlc2hGaW5pc2gnLCBbXSldLCBjYWxsYmFjaylcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBjb25zdCBib2R5ID0gZWxlbWVudC50b0pTT04oKVxuICBjb25zdCBjaGlsZHJlbiA9IGJvZHkuY2hpbGRyZW5cbiAgZGVsZXRlIGJvZHkuY2hpbGRyZW5cbiAgY29uc3QgYWN0aW9ucyA9IFtjcmVhdGVBY3Rpb24oJ2NyZWF0ZUJvZHknLCBbYm9keV0pXVxuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBhY3Rpb25zLnB1c2guYXBwbHkoYWN0aW9ucywgY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oJ2FkZEVsZW1lbnQnLCBbYm9keS5yZWYsIGNoaWxkLCAtMV0pXG4gICAgfSkpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhhY3Rpb25zKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCByZWYsIGluZGV4KSB7XG4gIGlmICghKGluZGV4ID49IDApKSB7XG4gICAgaW5kZXggPSAtMVxuICB9XG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCdhZGRFbGVtZW50JywgW3JlZiwgZWxlbWVudC50b0pTT04oKSwgaW5kZXhdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnJlbW92ZUVsZW1lbnQgPSBmdW5jdGlvbiAocmVmKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHJlZikpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gcmVmLm1hcCgocikgPT4gY3JlYXRlQWN0aW9uKCdyZW1vdmVFbGVtZW50JywgW3JdKSlcbiAgICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGFjdGlvbnMpXG4gIH1cbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUVsZW1lbnQnLCBbcmVmXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5tb3ZlRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXRSZWYsIHBhcmVudFJlZiwgaW5kZXgpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ21vdmVFbGVtZW50JywgW3RhcmdldFJlZiwgcGFyZW50UmVmLCBpbmRleF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0QXR0ciA9IGZ1bmN0aW9uIChyZWYsIGtleSwgdmFsdWUpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbigndXBkYXRlQXR0cnMnLCBbcmVmLCByZXN1bHRdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24gKHJlZiwga2V5LCB2YWx1ZSkge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICByZXN1bHRba2V5XSA9IHZhbHVlXG4gIHJldHVybiB0aGlzLmFkZEFjdGlvbnMoY3JlYXRlQWN0aW9uKCd1cGRhdGVTdHlsZScsIFtyZWYsIHJlc3VsdF0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuc2V0U3R5bGVzID0gZnVuY3Rpb24gKHJlZiwgc3R5bGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3VwZGF0ZVN0eWxlJywgW3JlZiwgc3R5bGVdKSlcbn1cblxuTGlzdGVuZXIucHJvdG90eXBlLmFkZEV2ZW50ID0gZnVuY3Rpb24gKHJlZiwgdHlwZSkge1xuICByZXR1cm4gdGhpcy5hZGRBY3Rpb25zKGNyZWF0ZUFjdGlvbignYWRkRXZlbnQnLCBbcmVmLCB0eXBlXSkpXG59XG5cbkxpc3RlbmVyLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChyZWYsIHR5cGUpIHtcbiAgcmV0dXJuIHRoaXMuYWRkQWN0aW9ucyhjcmVhdGVBY3Rpb24oJ3JlbW92ZUV2ZW50JywgW3JlZiwgdHlwZV0pKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIChhY3Rpb25zLCBjYikge1xuICByZXR1cm4gY2IgJiYgY2IoKVxufVxuXG5MaXN0ZW5lci5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gIGNvbnN0IHVwZGF0ZXMgPSB0aGlzLnVwZGF0ZXNcbiAgY29uc3QgaGFuZGxlciA9IHRoaXMuaGFuZGxlclxuXG4gIGlmICghQXJyYXkuaXNBcnJheShhY3Rpb25zKSkge1xuICAgIGFjdGlvbnMgPSBbYWN0aW9uc11cbiAgfVxuXG4gIGlmICh0aGlzLmJhdGNoZWQpIHtcbiAgICB1cGRhdGVzLnB1c2guYXBwbHkodXBkYXRlcywgYWN0aW9ucylcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gaGFuZGxlcihhY3Rpb25zKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY3Rpb24gKG5hbWUsIGFyZ3MpIHtcbiAgcmV0dXJuIHsgbW9kdWxlOiAnZG9tJywgbWV0aG9kOiBuYW1lLCBhcmdzOiBhcmdzIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvdmRvbS9saXN0ZW5lci5qc1xuICoqLyIsIi8vIGJ1aWx0IGJ5IG5wbSBydW4gYnVpbGQ6Y29uZmlnXG5cbmltcG9ydCAqIGFzIFdlZXggZnJvbSAnLi4vZGVmYXVsdCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBXZWV4XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvY29uZmlnLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3IE1haW4gZW50cnksIGluc3RhbmNlIG1hbmFnZXJcbiAqXG4gKiAtIGNyZWF0ZUluc3RhbmNlKGluc3RhbmNlSWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpXG4gKiAtIHJlZnJlc2hJbnN0YW5jZShpbnN0YW5jZUlkLCBkYXRhKVxuICogLSBkZXN0cm95SW5zdGFuY2UoaW5zdGFuY2VJZClcbiAqIC0gcmVnaXN0ZXJDb21wb25lbnRzKGNvbXBvbmVudHMpXG4gKiAtIHJlZ2lzdGVyTW9kdWxlcyhtb2R1bGVzKVxuICogLSBnZXRSb290KGluc3RhbmNlSWQpXG4gKiAtIGluc3RhbmNlTWFwXG4gKiAtIGNhbGxKUyhpbnN0YW5jZUlkLCB0YXNrcylcbiAqICAgLSBmaXJlRXZlbnQocmVmLCB0eXBlLCBkYXRhKVxuICogICAtIGNhbGxiYWNrKGZ1bmNJZCwgZGF0YSlcbiAqL1xuZXhwb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tICcuL3N0YXRpYy9jcmVhdGUnXG5leHBvcnQgeyBpbml0LCByZWZyZXNoSW5zdGFuY2UsIGRlc3Ryb3lJbnN0YW5jZSB9IGZyb20gJy4vc3RhdGljL2xpZmUnXG5leHBvcnQgeyByZWdpc3RlckNvbXBvbmVudHMsIHJlZ2lzdGVyTW9kdWxlcywgcmVnaXN0ZXJNZXRob2RzIH0gZnJvbSAnLi9zdGF0aWMvcmVnaXN0ZXInXG5leHBvcnQgeyByZWNlaXZlVGFza3MgfSBmcm9tICcuL3N0YXRpYy9icmlkZ2UnXG5leHBvcnQgeyBnZXRSb290IH0gZnJvbSAnLi9zdGF0aWMvbWlzYydcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9pbmRleC5qc1xuICoqLyIsImltcG9ydCBBcHBJbnN0YW5jZSBmcm9tICcuLi9hcHAnXG5pbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuXG4vKipcbiAqIGNyZWF0ZSBhIFdlZXggaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGluc3RhbmNlSWRcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9uc10gb3B0aW9uIGBIQVNfTE9HYCBlbmFibGUgcHJpbnQgbG9nXG4gKiBAcGFyYW0gIHtvYmplY3R9IFtkYXRhXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UgKGluc3RhbmNlSWQsIGNvZGUsIG9wdGlvbnMsIGRhdGEpIHtcbiAgY29uc29sZS5kZWJ1ZygnWyEhISFjcmVhdGVJbnN0YW5jZV0gaW5zdGFuY2VNYXAgMScsIGluc3RhbmNlTWFwKVxuICBsZXQgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBjb25zb2xlLmRlYnVnKCdbISEhIWNyZWF0ZUluc3RhbmNlXSBpbnN0YW5jZScsIGluc3RhbmNlSWQsIGluc3RhbmNlKVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIGxldCByZXN1bHRcbiAgaWYgKCFpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlID0gbmV3IEFwcEluc3RhbmNlKGluc3RhbmNlSWQsIG9wdGlvbnMpXG4gICAgaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF0gPSBpbnN0YW5jZVxuICAgIGNvbnNvbGUuZGVidWcoJ1shISEhY3JlYXRlSW5zdGFuY2VdIGluc3RhbmNlTWFwIDInLCBpbnN0YW5jZU1hcClcbiAgICByZXN1bHQgPSBpbnN0YW5jZS5pbml0KGNvZGUsIGRhdGEpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpbnN0YW5jZUlkfVwiYClcbiAgfVxuXG4gIHJldHVybiByZXN1bHQgfHwgaW5zdGFuY2Vcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9zdGF0aWMvY3JlYXRlLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBXZWV4IGluc3RhbmNlIGNvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0ICogYXMgY3RybCBmcm9tICcuL2N0cmwnXG5pbXBvcnQgQXBwSW5zdGFuY2UgZnJvbSAnLi9pbnN0YW5jZSdcblxuZXh0ZW5kKEFwcEluc3RhbmNlLnByb3RvdHlwZSwgY3RybClcblxuZXhwb3J0IGRlZmF1bHQgQXBwSW5zdGFuY2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvaW5kZXguanNcbiAqKi8iLCJleHBvcnQge1xuICBleHRlbmQsXG4gIGRlZixcbiAgcmVtb3ZlLFxuICBoYXNPd24sXG4gIGJpbmQsXG4gIHRvQXJyYXksXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0XG59IGZyb20gJy4uLy4uL3NoYXJlZC91dGlscydcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc2VydmVkIChzdHIpIHtcbiAgY29uc3QgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKVxuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xuZXhwb3J0IGNvbnN0IGhhc1Byb3RvID0gJ19fcHJvdG9fXycgaW4ge31cblxubGV0IF9TZXRcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuaWYgKHR5cGVvZiBTZXQgIT09ICd1bmRlZmluZWQnICYmIFNldC50b1N0cmluZygpLm1hdGNoKC9uYXRpdmUgY29kZS8pKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0XG59XG5lbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9XG4gIF9TZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRba2V5XSAhPT0gdW5kZWZpbmVkXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHRoaXMuc2V0W2tleV0gPSAxXG4gIH1cbiAgX1NldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIH1cbn1cblxuZXhwb3J0IHsgX1NldCB9XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH1cbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxtaXRlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2dcbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgdG9VcHBlcilcbn0pXG5cbmZ1bmN0aW9uIHRvVXBwZXIgKF8sIGMpIHtcbiAgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJ1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmNvbnN0IGh5cGhlbmF0ZVJFID0gLyhbYS16XFxkXSkoW0EtWl0pL2dcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwb2YgKHYpIHtcbiAgY29uc3QgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKS50b0xvd2VyQ2FzZSgpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdXRpbC9pbmRleC5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogaW5zdGFuY2UgY29udHJvbHMgZnJvbSBuYXRpdmVcbiAqXG4gKiAtIGluaXQgYnVuZGxlXG4gKiAtIGZpcmUgZXZlbnRcbiAqIC0gY2FsbGJhY2tcbiAqIC0gZGVzdHJveVxuICpcbiAqIGNvcnJlc3BvbmRlZCB3aXRoIHRoZSBBUEkgb2YgaW5zdGFuY2UgbWFuYWdlciAoZnJhbWV3b3JrLmpzKVxuICovXG5leHBvcnQgeyBpbml0IH0gZnJvbSAnLi9pbml0J1xuXG5leHBvcnQge1xuICB1cGRhdGVBY3Rpb25zLFxuICBkZXN0cm95LFxuICBnZXRSb290RWxlbWVudCxcbiAgZmlyZUV2ZW50LFxuICBjYWxsYmFjayxcbiAgcmVmcmVzaERhdGFcbn0gZnJvbSAnLi9taXNjJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4uLy4uL3V0aWwnXG5cbmltcG9ydCB7XG4gIGRlZmluZSxcbiAgYm9vdHN0cmFwLFxuICByZWdpc3RlclxufSBmcm9tICcuLi9idW5kbGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0IChjb2RlLCBkYXRhKSB7XG4gIGNvbnNvbGUuZGVidWcoJ1shISEhISEhSlMgRnJhbWV3b3JrXSBJbnRpYWxpemUgYW4gaW5zdGFuY2Ugd2l0aDpcXG4nLCBkYXRhKVxuXG4gIGxldCByZXN1bHRcbiAgLy8gQHNlZTogbGliL2FwcC9idW5kbGUuanNcbiAgY29uc3QgYnVuZGxlRGVmaW5lID0gYmluZChkZWZpbmUsIHRoaXMpXG4gIGNvbnN0IGJ1bmRsZUJvb3RzdHJhcCA9IChuYW1lLCBjb25maWcsIF9kYXRhKSA9PiB7XG4gICAgcmVzdWx0ID0gYm9vdHN0cmFwKHRoaXMsIG5hbWUsIGNvbmZpZywgX2RhdGEgfHwgZGF0YSlcbiAgICB0aGlzLnVwZGF0ZUFjdGlvbnMoKVxuICAgIHRoaXMuZG9jLmxpc3RlbmVyLmNyZWF0ZUZpbmlzaCgpXG4gICAgY29uc29sZS5kZWJ1ZyhgWyEhISEhISEhSlMgRnJhbWV3b3JrXSBBZnRlciBpbnRpYWxpemVkIGFuIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcbiAgfVxuXG4gIC8vIGJhY2t3YXJkKHJlZ2lzdGVyL3JlbmRlcilcbiAgY29uc3QgYnVuZGxlUmVnaXN0ZXIgPSBiaW5kKHJlZ2lzdGVyLCB0aGlzKVxuICBjb25zdCBidW5kbGVSZW5kZXIgPSAobmFtZSwgX2RhdGEpID0+IHtcbiAgICByZXN1bHQgPSBib290c3RyYXAodGhpcywgbmFtZSwge30sIF9kYXRhKVxuICB9XG5cbiAgY29uc3QgYnVuZGxlUmVxdWlyZSA9IG5hbWUgPT4gX2RhdGEgPT4ge1xuICAgIHJlc3VsdCA9IGJvb3RzdHJhcCh0aGlzLCBuYW1lLCB7fSwgX2RhdGEpXG4gIH1cblxuICBjb25zdCBidW5kbGVEb2N1bWVudCA9IHRoaXMuZG9jXG5cbiAgbGV0IGZ1bmN0aW9uQm9keVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBjb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gYGZ1bmN0aW9uICgpIHsuLi59YCAtPiBgey4uLn1gXG4gICAgLy8gbm90IHZlcnkgc3RyaWN0XG4gICAgZnVuY3Rpb25Cb2R5ID0gY29kZS50b1N0cmluZygpLnN1YnN0cigxMilcbiAgfVxuICBlbHNlIGlmIChjb2RlKSB7XG4gICAgZnVuY3Rpb25Cb2R5ID0gY29kZS50b1N0cmluZygpXG4gIH1cblxuICBjb25zdCB7IFdYRW52aXJvbm1lbnQgfSA9IGdsb2JhbFxuICBpZiAoV1hFbnZpcm9ubWVudCAmJiBXWEVudmlyb25tZW50LnBsYXRmb3JtICE9PSAnV2ViJykge1xuICAgIGNvbnN0IHRpbWVyID0gdGhpcy5yZXF1aXJlTW9kdWxlKCd0aW1lcicpXG4gICAgY29uc3QgdGltZXJBUElzID0ge1xuICAgICAgc2V0VGltZW91dDogKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhcmdzWzBdKC4uLmFyZ3Muc2xpY2UoMikpXG4gICAgICAgIH1cbiAgICAgICAgdGltZXIuc2V0VGltZW91dChoYW5kbGVyLCBhcmdzWzFdKVxuICAgICAgICByZXR1cm4gdGhpcy51aWQudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIHNldEludGVydmFsOiAoLi4uYXJncykgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGFyZ3NbMF0oLi4uYXJncy5zbGljZSgyKSlcbiAgICAgICAgfVxuICAgICAgICB0aW1lci5zZXRJbnRlcnZhbChoYW5kbGVyLCBhcmdzWzFdKVxuICAgICAgICByZXR1cm4gdGhpcy51aWQudG9TdHJpbmcoKVxuICAgICAgfSxcbiAgICAgIGNsZWFyVGltZW91dDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJUaW1lb3V0KG4pXG4gICAgICB9LFxuICAgICAgY2xlYXJJbnRlcnZhbDogKG4pID0+IHtcbiAgICAgICAgdGltZXIuY2xlYXJJbnRlcnZhbChuKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgJ2RlZmluZScsXG4gICAgICAncmVxdWlyZScsXG4gICAgICAnZG9jdW1lbnQnLFxuICAgICAgJ2Jvb3RzdHJhcCcsXG4gICAgICAncmVnaXN0ZXInLFxuICAgICAgJ3JlbmRlcicsXG4gICAgICAnX193ZWV4X2RlZmluZV9fJywgLy8gYWxpYXMgZm9yIGRlZmluZVxuICAgICAgJ19fd2VleF9ib290c3RyYXBfXycsIC8vIGFsaWFzIGZvciBib290c3RyYXBcbiAgICAgICdzZXRUaW1lb3V0JyxcbiAgICAgICdzZXRJbnRlcnZhbCcsXG4gICAgICAnY2xlYXJUaW1lb3V0JyxcbiAgICAgICdjbGVhckludGVydmFsJyxcbiAgICAgIGZ1bmN0aW9uQm9keVxuICAgIClcblxuICAgIGZuKFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlUmVxdWlyZSxcbiAgICAgIGJ1bmRsZURvY3VtZW50LFxuICAgICAgYnVuZGxlQm9vdHN0cmFwLFxuICAgICAgYnVuZGxlUmVnaXN0ZXIsXG4gICAgICBidW5kbGVSZW5kZXIsXG4gICAgICBidW5kbGVEZWZpbmUsXG4gICAgICBidW5kbGVCb290c3RyYXAsXG4gICAgICB0aW1lckFQSXMuc2V0VGltZW91dCxcbiAgICAgIHRpbWVyQVBJcy5zZXRJbnRlcnZhbCxcbiAgICAgIHRpbWVyQVBJcy5jbGVhclRpbWVvdXQsXG4gICAgICB0aW1lckFQSXMuY2xlYXJJbnRlcnZhbClcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcbiAgICAgICdkZWZpbmUnLFxuICAgICAgJ3JlcXVpcmUnLFxuICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICdib290c3RyYXAnLFxuICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICdyZW5kZXInLFxuICAgICAgJ19fd2VleF9kZWZpbmVfXycsIC8vIGFsaWFzIGZvciBkZWZpbmVcbiAgICAgICdfX3dlZXhfYm9vdHN0cmFwX18nLCAvLyBhbGlhcyBmb3IgYm9vdHN0cmFwXG4gICAgICBmdW5jdGlvbkJvZHlcbiAgICApXG5cbiAgICBmbihcbiAgICAgIGJ1bmRsZURlZmluZSxcbiAgICAgIGJ1bmRsZVJlcXVpcmUsXG4gICAgICBidW5kbGVEb2N1bWVudCxcbiAgICAgIGJ1bmRsZUJvb3RzdHJhcCxcbiAgICAgIGJ1bmRsZVJlZ2lzdGVyLFxuICAgICAgYnVuZGxlUmVuZGVyLFxuICAgICAgYnVuZGxlRGVmaW5lLFxuICAgICAgYnVuZGxlQm9vdHN0cmFwKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9jdHJsL2luaXQuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIGFwaSB0aGF0IGludm9rZWQgYnkganMgYnVuZGxlIGNvZGVcbiAqXG4gKiAtIGRlZmluZShuYW1lLCBmYWN0b3J5KTogZGVmaW5lIGEgbmV3IGNvbXBvc2VkIGNvbXBvbmVudCB0eXBlXG4gKiAtIGJvb3RzdHJhcCh0eXBlLCBjb25maWcsIGRhdGEpOiByZXF1aXJlIGEgY2VydGFpbiB0eXBlICZcbiAqICAgICAgICAgcmVuZGVyIHdpdGggKG9wdGlvbmFsKSBkYXRhXG4gKlxuICogZGVwcmVjYXRlZDpcbiAqIC0gcmVnaXN0ZXIodHlwZSwgb3B0aW9ucyk6IHJlZ2lzdGVyIGEgbmV3IGNvbXBvc2VkIGNvbXBvbmVudCB0eXBlXG4gKiAtIHJlbmRlcih0eXBlLCBkYXRhKTogcmVuZGVyIGJ5IGEgY2VydGFpbiB0eXBlIHdpdGggKG9wdGlvbmFsKSBkYXRhXG4gKiAtIHJlcXVpcmUodHlwZSkoZGF0YSk6IHJlcXVpcmUgYSB0eXBlIHRoZW4gcmVuZGVyIHdpdGggZGF0YVxuICovXG5cbmV4cG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJy4vYm9vdHN0cmFwJ1xuZXhwb3J0IHsgY2xlYXJDb21tb25Nb2R1bGVzLCBkZWZpbmUsIHJlZ2lzdGVyIH0gZnJvbSAnLi9kZWZpbmUnXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9pbmRleC5qc1xuICoqLyIsImltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IFZtIGZyb20gJy4uLy4uL3ZtJ1xuaW1wb3J0ICogYXMgZG93bmdyYWRlIGZyb20gJy4uL2Rvd25ncmFkZSdcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QgfSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IHtcbiAgaXNXZWV4Q29tcG9uZW50LFxuICBpc05wbU1vZHVsZSxcbiAgcmVtb3ZlV2VleFByZWZpeCxcbiAgcmVtb3ZlSlNTdXJmaXhcbn0gZnJvbSAnLi9taXNjJ1xuXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwIChhcHAsIG5hbWUsIGNvbmZpZywgZGF0YSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBib290c3RyYXAgZm9yICR7bmFtZX1gKVxuXG4gIGxldCBjbGVhbk5hbWVcblxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuICB9XG4gIGVsc2UgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlSlNTdXJmaXgobmFtZSlcbiAgICAvLyBjaGVjayBpZiBkZWZpbmUgYnkgb2xkICdkZWZpbmUnIG1ldGhvZFxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghYXBwLmN1c3RvbUNvbXBvbmVudE1hcFtjbGVhbk5hbWVdKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKGBJdCdzIG5vdCBhIGNvbXBvbmVudDogJHtuYW1lfWApXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYFdyb25nIGNvbXBvbmVudCBuYW1lOiAke25hbWV9YClcbiAgfVxuXG4gIGNvbmZpZyA9IGlzUGxhaW5PYmplY3QoY29uZmlnKSA/IGNvbmZpZyA6IHt9XG5cbiAgaWYgKHR5cGVvZiBjb25maWcudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uID09PSAnc3RyaW5nJyAmJlxuICAgICFzZW12ZXIuc2F0aXNmaWVzKGNvbmZpZy50cmFuc2Zvcm1lclZlcnNpb24sXG4gICAgICBnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9uKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEpTIEJ1bmRsZSB2ZXJzaW9uOiAke2NvbmZpZy50cmFuc2Zvcm1lclZlcnNpb259IGAgK1xuICAgICAgYG5vdCBjb21wYXRpYmxlIHdpdGggJHtnbG9iYWwudHJhbnNmb3JtZXJWZXJzaW9ufWApXG4gIH1cblxuICBjb25zdCBfY2hlY2tEb3duZ3JhZGUgPSBkb3duZ3JhZGUuY2hlY2soY29uZmlnLmRvd25ncmFkZSlcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChfY2hlY2tEb3duZ3JhZGUuaXNEb3duZ3JhZGUpIHtcbiAgICBhcHAuY2FsbFRhc2tzKFt7XG4gICAgICBtb2R1bGU6ICdpbnN0YW5jZVdyYXAnLFxuICAgICAgbWV0aG9kOiAnZXJyb3InLFxuICAgICAgYXJnczogW1xuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuZXJyb3JUeXBlLFxuICAgICAgICBfY2hlY2tEb3duZ3JhZGUuY29kZSxcbiAgICAgICAgX2NoZWNrRG93bmdyYWRlLmVycm9yTWVzc2FnZVxuICAgICAgXVxuICAgIH1dKVxuICAgIHJldHVybiBuZXcgRXJyb3IoYERvd25ncmFkZVske19jaGVja0Rvd25ncmFkZS5jb2RlfV06ICR7X2NoZWNrRG93bmdyYWRlLmVycm9yTWVzc2FnZX1gKVxuICB9XG5cbiAgYXBwLnZtID0gbmV3IFZtKGNsZWFuTmFtZSwgbnVsbCwgeyBfYXBwOiBhcHAgfSwgbnVsbCwgZGF0YSlcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvYnVuZGxlL2Jvb3RzdHJhcC5qc1xuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlcjtcblxuLy8gVGhlIGRlYnVnIGZ1bmN0aW9uIGlzIGV4Y2x1ZGVkIGVudGlyZWx5IGZyb20gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG4vKiBub21pbiAqLyB2YXIgZGVidWc7XG4vKiBub21pbiAqLyBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgLyogbm9taW4gKi8gL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgLyogbm9taW4gKi8gdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIC8qIG5vbWluICovIGFyZ3MudW5zaGlmdCgnU0VNVkVSJyk7XG4gICAgLyogbm9taW4gKi8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgLyogbm9taW4gKi8gfTtcbi8qIG5vbWluICovIGVsc2VcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnO1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTAwNzE5OTI1NDc0MDk5MTtcblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbnZhciByZSA9IGV4cG9ydHMucmUgPSBbXTtcbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdO1xudmFyIFIgPSAwO1xuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG52YXIgTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJdID0gJzB8WzEtOV1cXFxcZConO1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gPSAnWzAtOV0rJztcblxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG52YXIgTk9OTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG52YXIgTUFJTlZFUlNJT04gPSBSKys7XG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBNQUlOVkVSU0lPTkxPT1NFID0gUisrO1xuc3JjW01BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknO1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gKyAnKSopKSc7XG5cbnZhciBQUkVSRUxFQVNFTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxudmFyIEJVSUxESURFTlRJRklFUiA9IFIrKztcbnNyY1tCVUlMRElERU5USUZJRVJdID0gJ1swLTlBLVphLXotXSsnO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrO1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJztcblxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKys7XG52YXIgRlVMTFBMQUlOID0gJ3Y/JyArIHNyY1tNQUlOVkVSU0lPTl0gK1xuICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFXSArICc/JyArXG4gICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/Jztcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnO1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JztcblxudmFyIExPT1NFID0gUisrO1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCc7XG5cbnZhciBHVExUID0gUisrO1xuc3JjW0dUTFRdID0gJygoPzo8fD4pPz0/KSc7XG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJztcbnZhciBYUkFOR0VJREVOVElGSUVSID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJztcblxudmFyIFhSQU5HRVBMQUlOID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRSA9IFIrKztcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFhSQU5HRUxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxudmFyIExPTkVUSUxERSA9IFIrKztcbnNyY1tMT05FVElMREVdID0gJyg/On4+PyknO1xuXG52YXIgVElMREVUUklNID0gUisrO1xuc3JjW1RJTERFVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVUSUxERV0gKyAnXFxcXHMrJztcbnJlW1RJTERFVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tUSUxERVRSSU1dLCAnZycpO1xudmFyIHRpbGRlVHJpbVJlcGxhY2UgPSAnJDF+JztcblxudmFyIFRJTERFID0gUisrO1xuc3JjW1RJTERFXSA9ICdeJyArIHNyY1tMT05FVElMREVdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBUSUxERUxPT1NFID0gUisrO1xuc3JjW1RJTERFTE9PU0VdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG52YXIgTE9ORUNBUkVUID0gUisrO1xuc3JjW0xPTkVDQVJFVF0gPSAnKD86XFxcXF4pJztcblxudmFyIENBUkVUVFJJTSA9IFIrKztcbnNyY1tDQVJFVFRSSU1dID0gJyhcXFxccyopJyArIHNyY1tMT05FQ0FSRVRdICsgJ1xcXFxzKyc7XG5yZVtDQVJFVFRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ0FSRVRUUklNXSwgJ2cnKTtcbnZhciBjYXJldFRyaW1SZXBsYWNlID0gJyQxXic7XG5cbnZhciBDQVJFVCA9IFIrKztcbnNyY1tDQVJFVF0gPSAnXicgKyBzcmNbTE9ORUNBUkVUXSArIHNyY1tYUkFOR0VQTEFJTl0gKyAnJCc7XG52YXIgQ0FSRVRMT09TRSA9IFIrKztcbnNyY1tDQVJFVExPT1NFXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxudmFyIENPTVBBUkFUT1JMT09TRSA9IFIrKztcbnNyY1tDT01QQVJBVE9STE9PU0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgTE9PU0VQTEFJTiArICcpJHxeJCc7XG52YXIgQ09NUEFSQVRPUiA9IFIrKztcbnNyY1tDT01QQVJBVE9SXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyooJyArIEZVTExQTEFJTiArICcpJHxeJCc7XG5cblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbnZhciBDT01QQVJBVE9SVFJJTSA9IFIrKztcbnNyY1tDT01QQVJBVE9SVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0dUTFRdICtcbiAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJ3wnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJztcblxuLy8gdGhpcyBvbmUgaGFzIHRvIHVzZSB0aGUgL2cgZmxhZ1xucmVbQ09NUEFSQVRPUlRSSU1dID0gbmV3IFJlZ0V4cChzcmNbQ09NUEFSQVRPUlRSSU1dLCAnZycpO1xudmFyIGNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnO1xuXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG52YXIgSFlQSEVOUkFOR0UgPSBSKys7XG5zcmNbSFlQSEVOUkFOR0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICdcXFxccystXFxcXHMrJyArXG4gICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKiQnO1xuXG52YXIgSFlQSEVOUkFOR0VMT09TRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRUxPT1NFXSA9ICdeXFxcXHMqKCcgKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbi8vIFN0YXIgcmFuZ2VzIGJhc2ljYWxseSBqdXN0IGFsbG93IGFueXRoaW5nIGF0IGFsbC5cbnZhciBTVEFSID0gUisrO1xuc3JjW1NUQVJdID0gJyg8fD4pPz0/XFxcXHMqXFxcXConO1xuXG4vLyBDb21waWxlIHRvIGFjdHVhbCByZWdleHAgb2JqZWN0cy5cbi8vIEFsbCBhcmUgZmxhZy1mcmVlLCB1bmxlc3MgdGhleSB3ZXJlIGNyZWF0ZWQgYWJvdmUgd2l0aCBhIGZsYWcuXG5mb3IgKHZhciBpID0gMDsgaSA8IFI7IGkrKykge1xuICBkZWJ1ZyhpLCBzcmNbaV0pO1xuICBpZiAoIXJlW2ldKVxuICAgIHJlW2ldID0gbmV3IFJlZ0V4cChzcmNbaV0pO1xufVxuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5mdW5jdGlvbiBwYXJzZSh2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcilcbiAgICByZXR1cm4gdmVyc2lvbjtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHIgPSBsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdO1xuICBpZiAoIXIudGVzdCh2ZXJzaW9uKSlcbiAgICByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLnZhbGlkID0gdmFsaWQ7XG5mdW5jdGlvbiB2YWxpZCh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgdiA9IHBhcnNlKHZlcnNpb24sIGxvb3NlKTtcbiAgcmV0dXJuIHYgPyB2LnZlcnNpb24gOiBudWxsO1xufVxuXG5cbmV4cG9ydHMuY2xlYW4gPSBjbGVhbjtcbmZ1bmN0aW9uIGNsZWFuKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBzID0gcGFyc2UodmVyc2lvbi50cmltKCkucmVwbGFjZSgvXls9dl0rLywgJycpLCBsb29zZSk7XG4gIHJldHVybiBzID8gcy52ZXJzaW9uIDogbnVsbDtcbn1cblxuZXhwb3J0cy5TZW1WZXIgPSBTZW1WZXI7XG5cbmZ1bmN0aW9uIFNlbVZlcih2ZXJzaW9uLCBsb29zZSkge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcikge1xuICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSBsb29zZSlcbiAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIGVsc2VcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb247XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG4gIH1cblxuICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gaXMgbG9uZ2VyIHRoYW4gJyArIE1BWF9MRU5HVEggKyAnIGNoYXJhY3RlcnMnKVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcblxuICBkZWJ1ZygnU2VtVmVyJywgdmVyc2lvbiwgbG9vc2UpO1xuICB0aGlzLmxvb3NlID0gbG9vc2U7XG4gIHZhciBtID0gdmVyc2lvbi50cmltKCkubWF0Y2gobG9vc2UgPyByZVtMT09TRV0gOiByZVtGVUxMXSk7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgVmVyc2lvbjogJyArIHZlcnNpb24pO1xuXG4gIHRoaXMucmF3ID0gdmVyc2lvbjtcblxuICAvLyB0aGVzZSBhcmUgYWN0dWFsbHkgbnVtYmVyc1xuICB0aGlzLm1ham9yID0gK21bMV07XG4gIHRoaXMubWlub3IgPSArbVsyXTtcbiAgdGhpcy5wYXRjaCA9ICttWzNdO1xuXG4gIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1ham9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLm1pbm9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1pbm9yIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG1pbm9yIHZlcnNpb24nKVxuXG4gIGlmICh0aGlzLnBhdGNoID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLnBhdGNoIDwgMClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuXG4gIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICBpZiAoIW1bNF0pXG4gICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gIGVsc2VcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBtWzRdLnNwbGl0KCcuJykubWFwKGZ1bmN0aW9uKGlkKSB7XG4gICAgICBpZiAoL15bMC05XSskLy50ZXN0KGlkKSkge1xuICAgICAgICB2YXIgbnVtID0gK2lkO1xuICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUilcbiAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlkO1xuICAgIH0pO1xuXG4gIHRoaXMuYnVpbGQgPSBtWzVdID8gbVs1XS5zcGxpdCgnLicpIDogW107XG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblNlbVZlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudmVyc2lvbiA9IHRoaXMubWFqb3IgKyAnLicgKyB0aGlzLm1pbm9yICsgJy4nICsgdGhpcy5wYXRjaDtcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgdGhpcy52ZXJzaW9uICs9ICctJyArIHRoaXMucHJlcmVsZWFzZS5qb2luKCcuJyk7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZlcnNpb247XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMubG9vc2UsIG90aGVyKTtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIHRoaXMuY29tcGFyZU1haW4ob3RoZXIpIHx8IHRoaXMuY29tcGFyZVByZShvdGhlcik7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVNYWluID0gZnVuY3Rpb24ob3RoZXIpIHtcbiAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKVxuICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5sb29zZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1ham9yLCBvdGhlci5tYWpvcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLm1pbm9yLCBvdGhlci5taW5vcikgfHxcbiAgICAgICAgIGNvbXBhcmVJZGVudGlmaWVycyh0aGlzLnBhdGNoLCBvdGhlci5wYXRjaCk7XG59O1xuXG5TZW1WZXIucHJvdG90eXBlLmNvbXBhcmVQcmUgPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICAvLyBOT1QgaGF2aW5nIGEgcHJlcmVsZWFzZSBpcyA+IGhhdmluZyBvbmVcbiAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAtMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIDE7XG4gIGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMDtcblxuICB2YXIgaSA9IDA7XG4gIGRvIHtcbiAgICB2YXIgYSA9IHRoaXMucHJlcmVsZWFzZVtpXTtcbiAgICB2YXIgYiA9IG90aGVyLnByZXJlbGVhc2VbaV07XG4gICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpO1xuICAgIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYiA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGVsc2UgaWYgKGEgPT09IGIpXG4gICAgICBjb250aW51ZTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpO1xuICB9IHdoaWxlICgrK2kpO1xufTtcblxuLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuLy8gZG93biB0byBwcmUtcmVsZWFzZS4gcHJlbWFqb3IgYW5kIHByZXBhdGNoIHdvcmsgdGhlIHNhbWUgd2F5LlxuU2VtVmVyLnByb3RvdHlwZS5pbmMgPSBmdW5jdGlvbihyZWxlYXNlLCBpZGVudGlmaWVyKSB7XG4gIHN3aXRjaCAocmVsZWFzZSkge1xuICAgIGNhc2UgJ3ByZW1ham9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yID0gMDtcbiAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZW1pbm9yJzpcbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcmVwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIGFscmVhZHkgYSBwcmVyZWxlYXNlLCBpdCB3aWxsIGJ1bXAgdG8gdGhlIG5leHQgdmVyc2lvblxuICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgIC8vIHJlbGV2YW50IGF0IHRoaXMgcG9pbnQuXG4gICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMuaW5jKCdwYXRjaCcsIGlkZW50aWZpZXIpO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgLy8gSWYgdGhlIGlucHV0IGlzIGEgbm9uLXByZXJlbGVhc2UgdmVyc2lvbiwgdGhpcyBhY3RzIHRoZSBzYW1lIGFzXG4gICAgLy8gcHJlcGF0Y2guXG4gICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ21ham9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWFqb3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtYWpvciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgIC8vIDEuMC4wLTUgYnVtcHMgdG8gMS4wLjBcbiAgICAgIC8vIDEuMS4wIGJ1bXBzIHRvIDIuMC4wXG4gICAgICBpZiAodGhpcy5taW5vciAhPT0gMCB8fCB0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWFqb3IrKztcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5wYXRjaCA9IDA7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbm9yJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtaW5vci5cbiAgICAgIC8vIDEuMi4wLTUgYnVtcHMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICBpZiAodGhpcy5wYXRjaCAhPT0gMCB8fCB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLm1pbm9yKys7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncGF0Y2gnOlxuICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBwcmUtcmVsZWFzZSB2ZXJzaW9uLCBpdCB3aWxsIGluY3JlbWVudCB0aGUgcGF0Y2guXG4gICAgICAvLyBJZiBpdCBpcyBhIHByZS1yZWxlYXNlIGl0IHdpbGwgYnVtcCB1cCB0byB0aGUgc2FtZSBwYXRjaCB2ZXJzaW9uLlxuICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAvLyAxLjIuMCBwYXRjaGVzIHRvIDEuMi4xXG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wYXRjaCsrO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICAvLyBUaGlzIHByb2JhYmx5IHNob3VsZG4ndCBiZSB1c2VkIHB1YmxpY2x5LlxuICAgIC8vIDEuMC4wIFwicHJlXCIgd291bGQgYmVjb21lIDEuMC4wLTAgd2hpY2ggaXMgdGhlIHdyb25nIGRpcmVjdGlvbi5cbiAgICBjYXNlICdwcmUnOlxuICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgaSA9IHRoaXMucHJlcmVsZWFzZS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVyZWxlYXNlW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlW2ldKys7XG4gICAgICAgICAgICBpID0gLTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpID09PSAtMSkgLy8gZGlkbid0IGluY3JlbWVudCBhbnl0aGluZ1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApO1xuICAgICAgfVxuICAgICAgaWYgKGlkZW50aWZpZXIpIHtcbiAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgLy8gMS4yLjAtYmV0YS5mb29ibHogb3IgMS4yLjAtYmV0YSBidW1wcyB0byAxLjIuMC1iZXRhLjBcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZVswXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKVxuICAgICAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW2lkZW50aWZpZXIsIDBdO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgaW5jcmVtZW50IGFyZ3VtZW50OiAnICsgcmVsZWFzZSk7XG4gIH1cbiAgdGhpcy5mb3JtYXQoKTtcbiAgdGhpcy5yYXcgPSB0aGlzLnZlcnNpb247XG4gIHJldHVybiB0aGlzO1xufTtcblxuZXhwb3J0cy5pbmMgPSBpbmM7XG5mdW5jdGlvbiBpbmModmVyc2lvbiwgcmVsZWFzZSwgbG9vc2UsIGlkZW50aWZpZXIpIHtcbiAgaWYgKHR5cGVvZihsb29zZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgaWRlbnRpZmllciA9IGxvb3NlO1xuICAgIGxvb3NlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gbmV3IFNlbVZlcih2ZXJzaW9uLCBsb29zZSkuaW5jKHJlbGVhc2UsIGlkZW50aWZpZXIpLnZlcnNpb247XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0cy5kaWZmID0gZGlmZjtcbmZ1bmN0aW9uIGRpZmYodmVyc2lvbjEsIHZlcnNpb24yKSB7XG4gIGlmIChlcSh2ZXJzaW9uMSwgdmVyc2lvbjIpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHYxID0gcGFyc2UodmVyc2lvbjEpO1xuICAgIHZhciB2MiA9IHBhcnNlKHZlcnNpb24yKTtcbiAgICBpZiAodjEucHJlcmVsZWFzZS5sZW5ndGggfHwgdjIucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgICBpZiAodjFba2V5XSAhPT0gdjJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuICdwcmUnK2tleTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAncHJlcmVsZWFzZSc7XG4gICAgfVxuICAgIGZvciAodmFyIGtleSBpbiB2MSkge1xuICAgICAgaWYgKGtleSA9PT0gJ21ham9yJyB8fCBrZXkgPT09ICdtaW5vcicgfHwga2V5ID09PSAncGF0Y2gnKSB7XG4gICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmNvbXBhcmVJZGVudGlmaWVycyA9IGNvbXBhcmVJZGVudGlmaWVycztcblxudmFyIG51bWVyaWMgPSAvXlswLTldKyQvO1xuZnVuY3Rpb24gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpIHtcbiAgdmFyIGFudW0gPSBudW1lcmljLnRlc3QoYSk7XG4gIHZhciBibnVtID0gbnVtZXJpYy50ZXN0KGIpO1xuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2E7XG4gICAgYiA9ICtiO1xuICB9XG5cbiAgcmV0dXJuIChhbnVtICYmICFibnVtKSA/IC0xIDpcbiAgICAgICAgIChibnVtICYmICFhbnVtKSA/IDEgOlxuICAgICAgICAgYSA8IGIgPyAtMSA6XG4gICAgICAgICBhID4gYiA/IDEgOlxuICAgICAgICAgMDtcbn1cblxuZXhwb3J0cy5yY29tcGFyZUlkZW50aWZpZXJzID0gcmNvbXBhcmVJZGVudGlmaWVycztcbmZ1bmN0aW9uIHJjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGIsIGEpO1xufVxuXG5leHBvcnRzLm1ham9yID0gbWFqb3I7XG5mdW5jdGlvbiBtYWpvcihhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkubWFqb3I7XG59XG5cbmV4cG9ydHMubWlub3IgPSBtaW5vcjtcbmZ1bmN0aW9uIG1pbm9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5taW5vcjtcbn1cblxuZXhwb3J0cy5wYXRjaCA9IHBhdGNoO1xuZnVuY3Rpb24gcGF0Y2goYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLnBhdGNoO1xufVxuXG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuZnVuY3Rpb24gY29tcGFyZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkuY29tcGFyZShiKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICgocmFuZ2UgaW5zdGFuY2VvZiBSYW5nZSkgJiYgcmFuZ2UubG9vc2UgPT09IGxvb3NlKVxuICAgIHJldHVybiByYW5nZTtcblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cbi8vIE1vc3RseSBqdXN0IGZvciB0ZXN0aW5nIGFuZCBsZWdhY3kgQVBJIHJlYXNvbnNcbmV4cG9ydHMudG9Db21wYXJhdG9ycyA9IHRvQ29tcGFyYXRvcnM7XG5mdW5jdGlvbiB0b0NvbXBhcmF0b3JzKHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkuc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIGNvbXAubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH0pLmpvaW4oJyAnKS50cmltKCkuc3BsaXQoJyAnKTtcbiAgfSk7XG59XG5cbi8vIGNvbXByaXNlZCBvZiB4cmFuZ2VzLCB0aWxkZXMsIHN0YXJzLCBhbmQgZ3RsdCdzIGF0IHRoaXMgcG9pbnQuXG4vLyBhbHJlYWR5IHJlcGxhY2VkIHRoZSBoeXBoZW4gcmFuZ2VzXG4vLyB0dXJuIGludG8gYSBzZXQgb2YgSlVTVCBjb21wYXJhdG9ycy5cbmZ1bmN0aW9uIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSkge1xuICBkZWJ1ZygnY29tcCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZUNhcmV0cyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSk7XG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKTtcbiAgY29tcCA9IHJlcGxhY2VYUmFuZ2VzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVN0YXJzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3N0YXJzJywgY29tcCk7XG4gIHJldHVybiBjb21wO1xufVxuXG5mdW5jdGlvbiBpc1goaWQpIHtcbiAgcmV0dXJuICFpZCB8fCBpZC50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgaWQgPT09ICcqJztcbn1cblxuLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4vLyB+MiwgfjIueCwgfjIueC54LCB+PjIsIH4+Mi54IH4+Mi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMFxuLy8gfjEuMiwgfjEuMi54LCB+PjEuMiwgfj4xLjIueCAtLT4gPj0xLjIuMCA8MS4zLjBcbi8vIH4xLjIuMywgfj4xLjIuMyAtLT4gPj0xLjIuMyA8MS4zLjBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjBcbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZXMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVRpbGRlKGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpIHtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW1RJTERFTE9PU0VdIDogcmVbVElMREVdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSlcbiAgICAgIC8vIH4xLjIgPT0gPj0xLjIuMCA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcik7XG4gICAgICBpZiAocHIuY2hhckF0KDApICE9PSAnLScpXG4gICAgICAgIHByID0gJy0nICsgcHI7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfSBlbHNlXG4gICAgICAvLyB+MS4yLjMgPT0gPj0xLjIuMyA8MS4zLjBcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wXG4vLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wXG4vLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VDYXJldChjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIGxvb3NlKTtcbiAgdmFyIHIgPSBsb29zZSA/IHJlW0NBUkVUTE9PU0VdIDogcmVbQ0FSRVRdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKF8sIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpO1xuICAgIHZhciByZXQ7XG5cbiAgICBpZiAoaXNYKE0pKVxuICAgICAgcmV0ID0gJyc7XG4gICAgZWxzZSBpZiAoaXNYKG0pKVxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgaWYgKE0gPT09ICcwJylcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VDYXJldCBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgaWYgKG0gPT09ICcwJylcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArIHByICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAnIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdubyBwcicpO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgbSArICcuJyArICgrcCArIDEpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygnY2FyZXQgcmV0dXJuJywgcmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VYUmFuZ2VzJywgY29tcCwgbG9vc2UpO1xuICByZXR1cm4gY29tcC5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VYUmFuZ2UoY29tcCwgbG9vc2UpIHtcbiAgY29tcCA9IGNvbXAudHJpbSgpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbWFJBTkdFTE9PU0VdIDogcmVbWFJBTkdFXTtcbiAgcmV0dXJuIGNvbXAucmVwbGFjZShyLCBmdW5jdGlvbihyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpO1xuICAgIHZhciB4TSA9IGlzWChNKTtcbiAgICB2YXIgeG0gPSB4TSB8fCBpc1gobSk7XG4gICAgdmFyIHhwID0geG0gfHwgaXNYKHApO1xuICAgIHZhciBhbnlYID0geHA7XG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpXG4gICAgICBndGx0ID0gJyc7XG5cbiAgICBpZiAoeE0pIHtcbiAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICByZXQgPSAnPDAuMC4wJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGd0bHQgJiYgYW55WCkge1xuICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgaWYgKHhtKVxuICAgICAgICBtID0gMDtcbiAgICAgIGlmICh4cClcbiAgICAgICAgcCA9IDA7XG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgLy8gPjEuMi4zID0+ID49IDEuMi40XG4gICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICBpZiAoeG0pIHtcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICAgIG0gPSAwO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHhwKSB7XG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgICAgICBwID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnO1xuICAgICAgICBpZiAoeG0pXG4gICAgICAgICAgTSA9ICtNICsgMTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG0gPSArbSArIDE7XG4gICAgICB9XG5cbiAgICAgIHJldCA9IGd0bHQgKyBNICsgJy4nICsgbSArICcuJyArIHA7XG4gICAgfSBlbHNlIGlmICh4bSkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLjAuMCA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuMCA8JyArIE0gKyAnLicgKyAoK20gKyAxKSArICcuMCc7XG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5mdW5jdGlvbiByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ3JlcGxhY2VTdGFycycsIGNvbXAsIGxvb3NlKTtcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW1NUQVJdLCAnJyk7XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIHRvIHN0cmluZy5yZXBsYWNlKHJlW0hZUEhFTlJBTkdFXSlcbi8vIE0sIG0sIHBhdGNoLCBwcmVyZWxlYXNlLCBidWlsZFxuLy8gMS4yIC0gMy40LjUgPT4gPj0xLjIuMCA8PTMuNC41XG4vLyAxLjIuMyAtIDMuNCA9PiA+PTEuMi4wIDwzLjUuMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wXG5mdW5jdGlvbiBoeXBoZW5SZXBsYWNlKCQwLFxuICAgICAgICAgICAgICAgICAgICAgICBmcm9tLCBmTSwgZm0sIGZwLCBmcHIsIGZiLFxuICAgICAgICAgICAgICAgICAgICAgICB0bywgdE0sIHRtLCB0cCwgdHByLCB0Yikge1xuXG4gIGlmIChpc1goZk0pKVxuICAgIGZyb20gPSAnJztcbiAgZWxzZSBpZiAoaXNYKGZtKSlcbiAgICBmcm9tID0gJz49JyArIGZNICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1goZnApKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLicgKyBmbSArICcuMCc7XG4gIGVsc2VcbiAgICBmcm9tID0gJz49JyArIGZyb207XG5cbiAgaWYgKGlzWCh0TSkpXG4gICAgdG8gPSAnJztcbiAgZWxzZSBpZiAoaXNYKHRtKSlcbiAgICB0byA9ICc8JyArICgrdE0gKyAxKSArICcuMC4wJztcbiAgZWxzZSBpZiAoaXNYKHRwKSlcbiAgICB0byA9ICc8JyArIHRNICsgJy4nICsgKCt0bSArIDEpICsgJy4wJztcbiAgZWxzZSBpZiAodHByKVxuICAgIHRvID0gJzw9JyArIHRNICsgJy4nICsgdG0gKyAnLicgKyB0cCArICctJyArIHRwcjtcbiAgZWxzZVxuICAgIHRvID0gJzw9JyArIHRvO1xuXG4gIHJldHVybiAoZnJvbSArICcgJyArIHRvKS50cmltKCk7XG59XG5cblxuLy8gaWYgQU5ZIG9mIHRoZSBzZXRzIG1hdGNoIEFMTCBvZiBpdHMgY29tcGFyYXRvcnMsIHRoZW4gcGFzc1xuUmFuZ2UucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlc3RTZXQodGhpcy5zZXRbaV0sIHZlcnNpb24pKVxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZnVuY3Rpb24gdGVzdFNldChzZXQsIHZlcnNpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXNldFtpXS50ZXN0KHZlcnNpb24pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcik7XG4gICAgICBpZiAoc2V0W2ldLnNlbXZlciA9PT0gQU5ZKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKHNldFtpXS5zZW12ZXIucHJlcmVsZWFzZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhbGxvd2VkID0gc2V0W2ldLnNlbXZlcjtcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMuc2F0aXNmaWVzID0gc2F0aXNmaWVzO1xuZnVuY3Rpb24gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIHJhbmdlID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiByYW5nZS50ZXN0KHZlcnNpb24pO1xufVxuXG5leHBvcnRzLm1heFNhdGlzZnlpbmcgPSBtYXhTYXRpc2Z5aW5nO1xuZnVuY3Rpb24gbWF4U2F0aXNmeWluZyh2ZXJzaW9ucywgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiB2ZXJzaW9ucy5maWx0ZXIoZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKTtcbiAgfSkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy5taW5TYXRpc2Z5aW5nID0gbWluU2F0aXNmeWluZztcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICByZXR1cm4gdmVyc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gc2F0aXNmaWVzKHZlcnNpb24sIHJhbmdlLCBsb29zZSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSlbMF0gfHwgbnVsbDtcbn1cblxuZXhwb3J0cy52YWxpZFJhbmdlID0gdmFsaWRSYW5nZTtcbmZ1bmN0aW9uIHZhbGlkUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgLy8gUmV0dXJuICcqJyBpbnN0ZWFkIG9mICcnIHNvIHRoYXQgdHJ1dGhpbmVzcyB3b3Jrcy5cbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgaWYgaXQncyBpbnZhbGlkIGFueXdheVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5yYW5nZSB8fCAnKic7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgbGVzcyB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlXG5leHBvcnRzLmx0ciA9IGx0cjtcbmZ1bmN0aW9uIGx0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc8JywgbG9vc2UpO1xufVxuXG4vLyBEZXRlcm1pbmUgaWYgdmVyc2lvbiBpcyBncmVhdGVyIHRoYW4gYWxsIHRoZSB2ZXJzaW9ucyBwb3NzaWJsZSBpbiB0aGUgcmFuZ2UuXG5leHBvcnRzLmd0ciA9IGd0cjtcbmZ1bmN0aW9uIGd0cih2ZXJzaW9uLCByYW5nZSwgbG9vc2UpIHtcbiAgcmV0dXJuIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsICc+JywgbG9vc2UpO1xufVxuXG5leHBvcnRzLm91dHNpZGUgPSBvdXRzaWRlO1xuZnVuY3Rpb24gb3V0c2lkZSh2ZXJzaW9uLCByYW5nZSwgaGlsbywgbG9vc2UpIHtcbiAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgbG9vc2UpO1xuXG4gIHZhciBndGZuLCBsdGVmbiwgbHRmbiwgY29tcCwgZWNvbXA7XG4gIHN3aXRjaCAoaGlsbykge1xuICAgIGNhc2UgJz4nOlxuICAgICAgZ3RmbiA9IGd0O1xuICAgICAgbHRlZm4gPSBsdGU7XG4gICAgICBsdGZuID0gbHQ7XG4gICAgICBjb21wID0gJz4nO1xuICAgICAgZWNvbXAgPSAnPj0nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnPCc6XG4gICAgICBndGZuID0gbHQ7XG4gICAgICBsdGVmbiA9IGd0ZTtcbiAgICAgIGx0Zm4gPSBndDtcbiAgICAgIGNvbXAgPSAnPCc7XG4gICAgICBlY29tcCA9ICc8PSc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTXVzdCBwcm92aWRlIGEgaGlsbyB2YWwgb2YgXCI8XCIgb3IgXCI+XCInKTtcbiAgfVxuXG4gIC8vIElmIGl0IHNhdGlzaWZlcyB0aGUgcmFuZ2UgaXQgaXMgbm90IG91dHNpZGVcbiAgaWYgKHNhdGlzZmllcyh2ZXJzaW9uLCByYW5nZSwgbG9vc2UpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRnJvbSBub3cgb24sIHZhcmlhYmxlIHRlcm1zIGFyZSBhcyBpZiB3ZSdyZSBpbiBcImd0clwiIG1vZGUuXG4gIC8vIGJ1dCBub3RlIHRoYXQgZXZlcnl0aGluZyBpcyBmbGlwcGVkIGZvciB0aGUgXCJsdHJcIiBmdW5jdGlvbi5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhbmdlLnNldC5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjb21wYXJhdG9ycyA9IHJhbmdlLnNldFtpXTtcblxuICAgIHZhciBoaWdoID0gbnVsbDtcbiAgICB2YXIgbG93ID0gbnVsbDtcblxuICAgIGNvbXBhcmF0b3JzLmZvckVhY2goZnVuY3Rpb24oY29tcGFyYXRvcikge1xuICAgICAgaWYgKGNvbXBhcmF0b3Iuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgICAgY29tcGFyYXRvciA9IG5ldyBDb21wYXJhdG9yKCc+PTAuMC4wJylcbiAgICAgIH1cbiAgICAgIGhpZ2ggPSBoaWdoIHx8IGNvbXBhcmF0b3I7XG4gICAgICBsb3cgPSBsb3cgfHwgY29tcGFyYXRvcjtcbiAgICAgIGlmIChndGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBoaWdoLnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGhpZ2ggPSBjb21wYXJhdG9yO1xuICAgICAgfSBlbHNlIGlmIChsdGZuKGNvbXBhcmF0b3Iuc2VtdmVyLCBsb3cuc2VtdmVyLCBsb29zZSkpIHtcbiAgICAgICAgbG93ID0gY29tcGFyYXRvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBlZGdlIHZlcnNpb24gY29tcGFyYXRvciBoYXMgYSBvcGVyYXRvciB0aGVuIG91ciB2ZXJzaW9uXG4gICAgLy8gaXNuJ3Qgb3V0c2lkZSBpdFxuICAgIGlmIChoaWdoLm9wZXJhdG9yID09PSBjb21wIHx8IGhpZ2gub3BlcmF0b3IgPT09IGVjb21wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGxvd2VzdCB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGFuIG9wZXJhdG9yIGFuZCBvdXIgdmVyc2lvblxuICAgIC8vIGlzIGxlc3MgdGhhbiBpdCB0aGVuIGl0IGlzbid0IGhpZ2hlciB0aGFuIHRoZSByYW5nZVxuICAgIGlmICgoIWxvdy5vcGVyYXRvciB8fCBsb3cub3BlcmF0b3IgPT09IGNvbXApICYmXG4gICAgICAgIGx0ZWZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChsb3cub3BlcmF0b3IgPT09IGVjb21wICYmIGx0Zm4odmVyc2lvbiwgbG93LnNlbXZlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydHMucHJlcmVsZWFzZSA9IHByZXJlbGVhc2U7XG5mdW5jdGlvbiBwcmVyZWxlYXNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciBwYXJzZWQgPSBwYXJzZSh2ZXJzaW9uLCBsb29zZSk7XG4gIHJldHVybiAocGFyc2VkICYmIHBhcnNlZC5wcmVyZWxlYXNlLmxlbmd0aCkgPyBwYXJzZWQucHJlcmVsZWFzZSA6IG51bGw7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vc2VtdmVyL3NlbXZlci5qc1xuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogVmlld01vZGVsIENvbnN0cnVjdG9yICYgZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge1xuICBpbml0U3RhdGVcbn0gZnJvbSAnLi4vY29yZS9zdGF0ZSdcbmltcG9ydCB7XG4gIGJ1aWxkXG59IGZyb20gJy4vY29tcGlsZXInXG5pbXBvcnQge1xuICBpbml0RXZlbnRzLFxuICBtaXhpbkV2ZW50c1xufSBmcm9tICcuL2V2ZW50cydcbmltcG9ydCB7XG4gIHJlZ2lzdGVyTW9kdWxlcyxcbiAgcmVnaXN0ZXJNZXRob2RzXG59IGZyb20gJy4uL2FwcC9yZWdpc3RlcidcblxuLyoqXG4gKiBWaWV3TW9kZWwgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgICAgY29tcG9uZW50IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnRWbSAgIHdoaWNoIGNvbnRhaW5zIF9hcHBcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnRFbCAgIHJvb3QgZWxlbWVudCBvciBmcmFnIGJsb2NrXG4gKiBAcGFyYW0ge29iamVjdH0gbWVyZ2VkRGF0YSBleHRlcm5hbCBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gZXh0ZXJuYWxFdmVudHMgZXh0ZXJuYWwgZXZlbnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZtIChcbiAgdHlwZSxcbiAgb3B0aW9ucyxcbiAgcGFyZW50Vm0sXG4gIHBhcmVudEVsLFxuICBtZXJnZWREYXRhLFxuICBleHRlcm5hbEV2ZW50c1xuKSB7XG4gIHRoaXMuX3BhcmVudCA9IHBhcmVudFZtLl9yZWFsUGFyZW50ID8gcGFyZW50Vm0uX3JlYWxQYXJlbnQgOiBwYXJlbnRWbVxuICB0aGlzLl9hcHAgPSBwYXJlbnRWbS5fYXBwXG4gIHBhcmVudFZtLl9jaGlsZHJlblZtcyAmJiBwYXJlbnRWbS5fY2hpbGRyZW5WbXMucHVzaCh0aGlzKVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB0aGlzLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwW3R5cGVdIHx8IHt9XG4gIH1cbiAgY29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCB7fVxuXG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMuX21ldGhvZHMgPSBvcHRpb25zLm1ldGhvZHMgfHwge31cbiAgdGhpcy5fY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IHt9XG4gIHRoaXMuX2NzcyA9IG9wdGlvbnMuc3R5bGUgfHwge31cbiAgdGhpcy5faWRzID0ge31cbiAgdGhpcy5fdm1FdmVudHMgPSB7fVxuICB0aGlzLl9jaGlsZHJlblZtcyA9IFtdXG4gIHRoaXMuX3R5cGUgPSB0eXBlXG5cbiAgLy8gYmluZCBldmVudHMgYW5kIGxpZmVjeWNsZXNcbiAgaW5pdEV2ZW50cyh0aGlzLCBleHRlcm5hbEV2ZW50cylcblxuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBcImluaXRcIiBsaWZlY3ljbGUgaW4gVm0oJHt0aGlzLl90eXBlfSlgKVxuICB0aGlzLiRlbWl0KCdob29rOmluaXQnKVxuICB0aGlzLl9pbml0ZWQgPSB0cnVlXG5cbiAgLy8gcHJveHkgZGF0YSBhbmQgbWV0aG9kc1xuICAvLyBvYnNlcnZlIGRhdGEgYW5kIGFkZCB0aGlzIHRvIHZtc1xuICB0aGlzLl9kYXRhID0gdHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicgPyBkYXRhKCkgOiBkYXRhXG4gIGlmIChtZXJnZWREYXRhKSB7XG4gICAgZXh0ZW5kKHRoaXMuX2RhdGEsIG1lcmdlZERhdGEpXG4gIH1cbiAgaW5pdFN0YXRlKHRoaXMpXG5cbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gXCJjcmVhdGVkXCIgbGlmZWN5Y2xlIGluIFZtKCR7dGhpcy5fdHlwZX0pYClcbiAgdGhpcy4kZW1pdCgnaG9vazpjcmVhdGVkJylcbiAgdGhpcy5fY3JlYXRlZCA9IHRydWVcblxuICAvLyBiYWNrd2FyZCBvbGQgcmVhZHkgZW50cnlcbiAgaWYgKG9wdGlvbnMubWV0aG9kcyAmJiBvcHRpb25zLm1ldGhvZHMucmVhZHkpIHtcbiAgICBjb25zb2xlLndhcm4oJ1wiZXhwb3J0cy5tZXRob2RzLnJlYWR5XCIgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAncGxlYXNlIHVzZSBcImV4cG9ydHMuY3JlYXRlZFwiIGluc3RlYWQnKVxuICAgIG9wdGlvbnMubWV0aG9kcy5yZWFkeS5jYWxsKHRoaXMpXG4gIH1cblxuICAvLyBpZiBubyBwYXJlbnRFbGVtZW50IHRoZW4gc3BlY2lmeSB0aGUgZG9jdW1lbnRFbGVtZW50XG4gIHRoaXMuX3BhcmVudEVsID0gcGFyZW50RWwgfHwgdGhpcy5fYXBwLmRvYy5kb2N1bWVudEVsZW1lbnRcbiAgYnVpbGQodGhpcylcbn1cblxubWl4aW5FdmVudHMoVm0ucHJvdG90eXBlKVxuXG5leHRlbmQoVm0sIHtcbiAgcmVnaXN0ZXJNb2R1bGVzLFxuICByZWdpc3Rlck1ldGhvZHNcbn0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vaW5kZXguanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgV2F0Y2hlciBmcm9tICcuL3dhdGNoZXInXG5pbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuaW1wb3J0IHtcbiAgb2JzZXJ2ZSxcbiAgcHJveHksXG4gIHVucHJveHlcbn0gZnJvbSAnLi9vYnNlcnZlcidcbmltcG9ydCB7XG4gIGlzUGxhaW5PYmplY3QsXG4gIGJpbmRcbn0gZnJvbSAnLi4vdXRpbCdcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdGF0ZSAodm0pIHtcbiAgdm0uX3dhdGNoZXJzID0gW11cbiAgaW5pdERhdGEodm0pXG4gIGluaXRDb21wdXRlZCh2bSlcbiAgaW5pdE1ldGhvZHModm0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF0YSAodm0pIHtcbiAgbGV0IGRhdGEgPSB2bS5fZGF0YVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgIGRhdGEgPSB7fVxuICB9XG4gIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBpID0ga2V5cy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHByb3h5KHZtLCBrZXlzW2ldKVxuICB9XG4gIC8vIG9ic2VydmUgZGF0YVxuICBvYnNlcnZlKGRhdGEsIHZtKVxufVxuXG5mdW5jdGlvbiBub29wICgpIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb21wdXRlZCAodm0pIHtcbiAgY29uc3QgY29tcHV0ZWQgPSB2bS5fY29tcHV0ZWRcbiAgaWYgKGNvbXB1dGVkKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICBjb25zdCB1c2VyRGVmID0gY29tcHV0ZWRba2V5XVxuICAgICAgY29uc3QgZGVmID0ge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkZWYuZ2V0ID0gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYsIHZtKVxuICAgICAgICBkZWYuc2V0ID0gbm9vcFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmLmdldCA9IHVzZXJEZWYuZ2V0XG4gICAgICAgICAgPyB1c2VyRGVmLmNhY2hlICE9PSBmYWxzZVxuICAgICAgICAgICAgPyBtYWtlQ29tcHV0ZWRHZXR0ZXIodXNlckRlZi5nZXQsIHZtKVxuICAgICAgICAgICAgOiBiaW5kKHVzZXJEZWYuZ2V0LCB2bSlcbiAgICAgICAgICA6IG5vb3BcbiAgICAgICAgZGVmLnNldCA9IHVzZXJEZWYuc2V0XG4gICAgICAgICAgPyBiaW5kKHVzZXJEZWYuc2V0LCB2bSlcbiAgICAgICAgICA6IG5vb3BcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2bSwga2V5LCBkZWYpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VDb21wdXRlZEdldHRlciAoZ2V0dGVyLCBvd25lcikge1xuICBjb25zdCB3YXRjaGVyID0gbmV3IFdhdGNoZXIob3duZXIsIGdldHRlciwgbnVsbCwge1xuICAgIGxhenk6IHRydWVcbiAgfSlcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgd2F0Y2hlci5ldmFsdWF0ZSgpXG4gICAgfVxuICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICB3YXRjaGVyLmRlcGVuZCgpXG4gICAgfVxuICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSkge1xuICBjb25zdCBtZXRob2RzID0gdm0uX21ldGhvZHNcbiAgaWYgKG1ldGhvZHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gbWV0aG9kcykge1xuICAgICAgdm1ba2V5XSA9IG1ldGhvZHNba2V5XVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2NvcmUvc3RhdGUuanNcbiAqKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5pbXBvcnQgRGVwIGZyb20gJy4vZGVwJ1xuLy8gaW1wb3J0IHsgcHVzaFdhdGNoZXIgfSBmcm9tICcuL2JhdGNoZXInXG5pbXBvcnQge1xuICB3YXJuLFxuICByZW1vdmUsXG4gIGV4dGVuZCxcbiAgaXNPYmplY3QsXG4gIHBhcnNlUGF0aCxcbiAgX1NldCBhcyBTZXRcbn0gZnJvbSAnLi4vdXRpbCdcblxubGV0IHVpZCA9IDBcbmxldCBwcmV2VGFyZ2V0XG5cbi8qKlxuICogQSB3YXRjaGVyIHBhcnNlcyBhbiBleHByZXNzaW9uLCBjb2xsZWN0cyBkZXBlbmRlbmNpZXMsXG4gKiBhbmQgZmlyZXMgY2FsbGJhY2sgd2hlbiB0aGUgZXhwcmVzc2lvbiB2YWx1ZSBjaGFuZ2VzLlxuICogVGhpcyBpcyB1c2VkIGZvciBib3RoIHRoZSAkd2F0Y2goKSBhcGkgYW5kIGRpcmVjdGl2ZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gZXhwT3JGblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiAgICAgICAgICAgICAgICAgLSB7QXJyYXl9IGZpbHRlcnNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB0d29XYXlcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBkZWVwXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdXNlclxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHN5bmNcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBsYXp5XG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwcmVQcm9jZXNzXVxuICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBbcG9zdFByb2Nlc3NdXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYXRjaGVyICh2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpIHtcbiAgLy8gbWl4IGluIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBleHRlbmQodGhpcywgb3B0aW9ucylcbiAgfVxuICBjb25zdCBpc0ZuID0gdHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbidcbiAgdGhpcy52bSA9IHZtXG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpXG4gIHRoaXMuZXhwcmVzc2lvbiA9IGV4cE9yRm5cbiAgdGhpcy5jYiA9IGNiXG4gIHRoaXMuaWQgPSArK3VpZCAvLyB1aWQgZm9yIGJhdGNoaW5nXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZVxuICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdXG4gIHRoaXMubmV3RGVwcyA9IFtdXG4gIHRoaXMuZGVwSWRzID0gbmV3IFNldCgpXG4gIHRoaXMubmV3RGVwSWRzID0gbmV3IFNldCgpXG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAoaXNGbikge1xuICAgIHRoaXMuZ2V0dGVyID0gZXhwT3JGblxuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pXG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBmdW5jdGlvbiAoKSB7fVxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnRmFpbGVkIHdhdGNoaW5nIHBhdGg6ICcgKyBleHBPckZuICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgIClcbiAgICB9XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiB0aGlzLmdldCgpXG4gIC8vIHN0YXRlIGZvciBhdm9pZGluZyBmYWxzZSB0cmlnZ2VycyBmb3IgZGVlcCBhbmQgQXJyYXlcbiAgLy8gd2F0Y2hlcnMgZHVyaW5nIHZtLl9kaWdlc3QoKVxuICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlXG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5iZWZvcmVHZXQoKVxuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0dGVyLmNhbGwodGhpcy52bSwgdGhpcy52bSlcbiAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICBpZiAodGhpcy5kZWVwKSB7XG4gICAgdHJhdmVyc2UodmFsdWUpXG4gIH1cbiAgdGhpcy5hZnRlckdldCgpXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIFByZXBhcmUgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5iZWZvcmVHZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHByZXZUYXJnZXQgPSBEZXAudGFyZ2V0XG4gIERlcC50YXJnZXQgPSB0aGlzXG59XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge0RlcH0gZGVwXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gKGRlcCkge1xuICBjb25zdCBpZCA9IGRlcC5pZFxuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpXG4gICAgdGhpcy5uZXdEZXBzLnB1c2goZGVwKVxuICAgIGlmICghdGhpcy5kZXBJZHMuaGFzKGlkKSkge1xuICAgICAgZGVwLmFkZFN1Yih0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYWZ0ZXJHZXQgPSBmdW5jdGlvbiAoKSB7XG4gIERlcC50YXJnZXQgPSBwcmV2VGFyZ2V0XG4gIGxldCBpID0gdGhpcy5kZXBzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3QgZGVwID0gdGhpcy5kZXBzW2ldXG4gICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgZGVwLnJlbW92ZVN1Yih0aGlzKVxuICAgIH1cbiAgfVxuICBsZXQgdG1wID0gdGhpcy5kZXBJZHNcbiAgdGhpcy5kZXBJZHMgPSB0aGlzLm5ld0RlcElkc1xuICB0aGlzLm5ld0RlcElkcyA9IHRtcFxuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpXG4gIHRtcCA9IHRoaXMuZGVwc1xuICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHNcbiAgdGhpcy5uZXdEZXBzID0gdG1wXG4gIHRoaXMubmV3RGVwcy5sZW5ndGggPSAwXG59XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hhbGxvd1xuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChzaGFsbG93KSB7XG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIHRoaXMucnVuKClcbiAgfVxuICAvLyB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAvLyAgIHRoaXMucnVuKClcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICAvLyBpZiBxdWV1ZWQsIG9ubHkgb3ZlcndyaXRlIHNoYWxsb3cgd2l0aCBub24tc2hhbGxvdyxcbiAgLy8gICAvLyBidXQgbm90IHRoZSBvdGhlciB3YXkgYXJvdW5kLlxuICAvLyAgIHRoaXMuc2hhbGxvdyA9IHRoaXMucXVldWVkXG4gIC8vICAgICA/IHNoYWxsb3dcbiAgLy8gICAgICAgPyB0aGlzLnNoYWxsb3dcbiAgLy8gICAgICAgOiBmYWxzZVxuICAvLyAgICAgOiAhIXNoYWxsb3dcbiAgLy8gICB0aGlzLnF1ZXVlZCA9IHRydWVcbiAgLy8gICBwdXNoV2F0Y2hlcih0aGlzKVxuICAvLyB9XG59XG5cbi8qKlxuICogQmF0Y2hlciBqb2IgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIGJhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KClcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxuICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAvLyBoYXZlIG11dGF0ZWQ7IGJ1dCBvbmx5IGRvIHNvIGlmIHRoaXMgaXMgYVxuICAgICAgLy8gbm9uLXNoYWxsb3cgdXBkYXRlIChjYXVzZWQgYnkgYSB2bSBkaWdlc3QpLlxuICAgICAgKChpc09iamVjdCh2YWx1ZSkgfHwgdGhpcy5kZWVwKSAmJiAhdGhpcy5zaGFsbG93KVxuICAgICkge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpXG4gICAgfVxuICAgIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gYXZvaWQgb3ZlcndyaXRpbmcgYW5vdGhlciB3YXRjaGVyIHRoYXQgaXMgYmVpbmdcbiAgLy8gY29sbGVjdGVkLlxuICBjb25zdCBjdXJyZW50ID0gRGVwLnRhcmdldFxuICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKVxuICB0aGlzLmRpcnR5ID0gZmFsc2VcbiAgRGVwLnRhcmdldCA9IGN1cnJlbnRcbn1cblxuLyoqXG4gKiBEZXBlbmQgb24gYWxsIGRlcHMgY29sbGVjdGVkIGJ5IHRoaXMgd2F0Y2hlci5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBpID0gdGhpcy5kZXBzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy5kZXBzW2ldLmRlcGVuZCgpXG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YmNyaWJlciBsaXN0LlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHZtJ3Mgd2F0Y2hlciBsaXN0XG4gICAgLy8gdGhpcyBpcyBhIHNvbWV3aGF0IGV4cGVuc2l2ZSBvcGVyYXRpb24gc28gd2Ugc2tpcCBpdFxuICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBkZXN0cm95ZWQgb3IgaXMgcGVyZm9ybWluZyBhIHYtZm9yXG4gICAgLy8gcmUtcmVuZGVyICh0aGUgd2F0Y2hlciBsaXN0IGlzIHRoZW4gZmlsdGVyZWQgYnkgdi1mb3IpLlxuICAgIGlmICghdGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZCAmJiAhdGhpcy52bS5fdkZvclJlbW92aW5nKSB7XG4gICAgICByZW1vdmUodGhpcy52bS5fd2F0Y2hlcnMsIHRoaXMpXG4gICAgfVxuICAgIGxldCBpID0gdGhpcy5kZXBzLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tpXS5yZW1vdmVTdWIodGhpcylcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZVxuICAgIHRoaXMudm0gPSB0aGlzLmNiID0gdGhpcy52YWx1ZSA9IG51bGxcbiAgfVxufVxuXG4vKipcbiAqIFJlY3J1c2l2ZWx5IHRyYXZlcnNlIGFuIG9iamVjdCB0byBldm9rZSBhbGwgY29udmVydGVkXG4gKiBnZXR0ZXJzLCBzbyB0aGF0IGV2ZXJ5IG5lc3RlZCBwcm9wZXJ0eSBpbnNpZGUgdGhlIG9iamVjdFxuICogaXMgY29sbGVjdGVkIGFzIGEgXCJkZWVwXCIgZGVwZW5kZW5jeS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtTZXR9IHNlZW5cbiAqL1xuXG5jb25zdCBzZWVuT2JqZWN0cyA9IG5ldyBTZXQoKVxuZnVuY3Rpb24gdHJhdmVyc2UgKHZhbCwgc2Vlbikge1xuICBsZXQgaSwga2V5cywgaXNBLCBpc09cbiAgaWYgKCFzZWVuKSB7XG4gICAgc2VlbiA9IHNlZW5PYmplY3RzXG4gICAgc2Vlbi5jbGVhcigpXG4gIH1cbiAgaXNBID0gQXJyYXkuaXNBcnJheSh2YWwpXG4gIGlzTyA9IGlzT2JqZWN0KHZhbClcbiAgaWYgKGlzQSB8fCBpc08pIHtcbiAgICBpZiAodmFsLl9fb2JfXykge1xuICAgICAgY29uc3QgZGVwSWQgPSB2YWwuX19vYl9fLmRlcC5pZFxuICAgICAgaWYgKHNlZW4uaGFzKGRlcElkKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZW4uYWRkKGRlcElkKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNBKSB7XG4gICAgICBpID0gdmFsLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2ldLCBzZWVuKVxuICAgIH0gZWxzZSBpZiAoaXNPKSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKVxuICAgICAgaSA9IGtleXMubGVuZ3RoXG4gICAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxba2V5c1tpXV0sIHNlZW4pXG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvY29yZS93YXRjaGVyLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHsgcmVtb3ZlIH0gZnJvbSAnLi4vdXRpbCdcblxubGV0IHVpZCA9IDBcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVwICgpIHtcbiAgdGhpcy5pZCA9IHVpZCsrXG4gIHRoaXMuc3VicyA9IFtdXG59XG5cbi8vIHRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIHRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb25seSBvbmVcbi8vIHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkIGF0IGFueSB0aW1lLlxuRGVwLnRhcmdldCA9IG51bGxcblxuLyoqXG4gKiBBZGQgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yilcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHJlbW92ZSh0aGlzLnN1YnMsIHN1Yilcbn1cblxuLyoqXG4gKiBBZGQgc2VsZiBhcyBhIGRlcGVuZGVuY3kgdG8gdGhlIHRhcmdldCB3YXRjaGVyLlxuICovXG5cbkRlcC5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICBEZXAudGFyZ2V0LmFkZERlcCh0aGlzKVxufVxuXG4vKipcbiAqIE5vdGlmeSBhbGwgc3Vic2NyaWJlcnMgb2YgYSBuZXcgdmFsdWUuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIHN0YWJsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgY29uc3Qgc3VicyA9IHRoaXMuc3Vicy5zbGljZSgpXG4gIGZvciAobGV0IGkgPSAwLCBsID0gc3Vicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBzdWJzW2ldLnVwZGF0ZSgpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL2RlcC5qc1xuICoqLyIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCBEZXAgZnJvbSAnLi9kZXAnXG5pbXBvcnQgeyBhcnJheU1ldGhvZHMgfSBmcm9tICcuL2FycmF5J1xuaW1wb3J0IHtcbiAgZGVmLFxuICByZW1vdmUsXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0LFxuICBoYXNQcm90byxcbiAgaGFzT3duLFxuICBpc1Jlc2VydmVkXG59IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IGFycmF5S2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFycmF5TWV0aG9kcylcblxuLyoqXG4gKiBPYnNlcnZlciBjbGFzcyB0aGF0IGFyZSBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0YXJnZXRcbiAqIG9iamVjdCdzIHByb3BlcnR5IGtleXMgaW50byBnZXR0ZXIvc2V0dGVycyB0aGF0XG4gKiBjb2xsZWN0IGRlcGVuZGVuY2llcyBhbmQgZGlzcGF0Y2hlcyB1cGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSB2YWx1ZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIE9ic2VydmVyICh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5kZXAgPSBuZXcgRGVwKClcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcylcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgY29uc3QgYXVnbWVudCA9IGhhc1Byb3RvXG4gICAgICA/IHByb3RvQXVnbWVudFxuICAgICAgOiBjb3B5QXVnbWVudFxuICAgIGF1Z21lbnQodmFsdWUsIGFycmF5TWV0aG9kcywgYXJyYXlLZXlzKVxuICAgIHRoaXMub2JzZXJ2ZUFycmF5KHZhbHVlKVxuICB9IGVsc2Uge1xuICAgIHRoaXMud2Fsayh2YWx1ZSlcbiAgfVxufVxuXG4vLyBJbnN0YW5jZSBtZXRob2RzXG5cbi8qKlxuICogV2FsayB0aHJvdWdoIGVhY2ggcHJvcGVydHkgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIChvYmopIHtcbiAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgIHRoaXMuY29udmVydChrZXksIG9ialtrZXldKVxuICB9XG59XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5ID0gZnVuY3Rpb24gKGl0ZW1zKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSlcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBwcm9wZXJ0eSBpbnRvIGdldHRlci9zZXR0ZXIgc28gd2UgY2FuIGVtaXRcbiAqIHRoZSBldmVudHMgd2hlbiB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQvY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gIGRlZmluZVJlYWN0aXZlKHRoaXMudmFsdWUsIGtleSwgdmFsKVxufVxuXG4vKipcbiAqIEFkZCBhbiBvd25lciB2bSwgc28gdGhhdCB3aGVuICRzZXQvJGRlbGV0ZSBtdXRhdGlvbnNcbiAqIGhhcHBlbiB3ZSBjYW4gbm90aWZ5IG93bmVyIHZtcyB0byBwcm94eSB0aGUga2V5cyBhbmRcbiAqIGRpZ2VzdCB0aGUgd2F0Y2hlcnMuIFRoaXMgaXMgb25seSBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0XG4gKiBpcyBvYnNlcnZlZCBhcyBhbiBpbnN0YW5jZSdzIHJvb3QgJGRhdGEuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLmFkZFZtID0gZnVuY3Rpb24gKHZtKSB7XG4gICh0aGlzLnZtcyB8fCAodGhpcy52bXMgPSBbXSkpLnB1c2godm0pXG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIG93bmVyIHZtLiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSBvYmplY3QgaXNcbiAqIHN3YXBwZWQgb3V0IGFzIGFuIGluc3RhbmNlJ3MgJGRhdGEgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5yZW1vdmVWbSA9IGZ1bmN0aW9uICh2bSkge1xuICByZW1vdmUodGhpcy52bXMsIHZtKVxufVxuXG4vLyBoZWxwZXJzXG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gc3JjXG4gKi9cblxuZnVuY3Rpb24gcHJvdG9BdWdtZW50ICh0YXJnZXQsIHNyYykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuICB0YXJnZXQuX19wcm90b19fID0gc3JjXG4gIC8qIGVzbGludC1lbmFibGUgbm8tcHJvdG8gKi9cbn1cblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgZGVmaW5pbmdcbiAqIGhpZGRlbiBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b1xuICovXG5cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pXG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXVxuICogQHJldHVybiB7T2JzZXJ2ZXJ8dW5kZWZpbmVkfVxuICogQHN0YXRpY1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlICh2YWx1ZSwgdm0pIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBsZXQgb2JcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX19cbiAgfSBlbHNlIGlmIChcbiAgICAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmXG4gICAgT2JqZWN0LmlzRXh0ZW5zaWJsZSh2YWx1ZSkgJiZcbiAgICAhdmFsdWUuX2lzVnVlXG4gICkge1xuICAgIG9iID0gbmV3IE9ic2VydmVyKHZhbHVlKVxuICB9XG4gIGlmIChvYiAmJiB2bSkge1xuICAgIG9iLmFkZFZtKHZtKVxuICB9XG4gIHJldHVybiBvYlxufVxuXG4vKipcbiAqIERlZmluZSBhIHJlYWN0aXZlIHByb3BlcnR5IG9uIGFuIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSAob2JqLCBrZXksIHZhbCkge1xuICBjb25zdCBkZXAgPSBuZXcgRGVwKClcblxuICBjb25zdCBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpXG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgY29uc3QgZ2V0dGVyID0gcHJvcGVydHkgJiYgcHJvcGVydHkuZ2V0XG4gIGNvbnN0IHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldFxuXG4gIGxldCBjaGlsZE9iID0gb2JzZXJ2ZSh2YWwpXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsXG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICBkZXAuZGVwZW5kKClcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKVxuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGZvciAobGV0IGUsIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlID0gdmFsdWVbaV1cbiAgICAgICAgICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIgKG5ld1ZhbCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsXG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyLmNhbGwob2JqLCBuZXdWYWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBuZXdWYWxcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSBvYnNlcnZlKG5ld1ZhbClcbiAgICAgIGRlcC5ub3RpZnkoKVxuICAgIH1cbiAgfSlcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0IChvYmosIGtleSwgdmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLnNwbGljZShrZXksIDEsIHZhbClcbiAgfVxuICBpZiAoaGFzT3duKG9iaiwga2V5KSkge1xuICAgIG9ialtrZXldID0gdmFsXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKG9iai5faXNWdWUpIHtcbiAgICBzZXQob2JqLl9kYXRhLCBrZXksIHZhbClcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBvYiA9IG9iai5fX29iX19cbiAgaWYgKCFvYikge1xuICAgIG9ialtrZXldID0gdmFsXG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuY29udmVydChrZXksIHZhbClcbiAgb2IuZGVwLm5vdGlmeSgpXG4gIGlmIChvYi52bXMpIHtcbiAgICBsZXQgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjb25zdCB2bSA9IG9iLnZtc1tpXVxuICAgICAgcHJveHkodm0sIGtleSlcbiAgICAgIHZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWxcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsIChvYmosIGtleSkge1xuICBpZiAoIWhhc093bihvYmosIGtleSkpIHtcbiAgICByZXR1cm5cbiAgfVxuICBkZWxldGUgb2JqW2tleV1cbiAgY29uc3Qgb2IgPSBvYmouX19vYl9fXG5cbiAgaWYgKCFvYikge1xuICAgIGlmIChvYmouX2lzVnVlKSB7XG4gICAgICBkZWxldGUgb2JqLl9kYXRhW2tleV1cbiAgICAgIG9iai4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBvYi5kZXAubm90aWZ5KClcbiAgaWYgKG9iLnZtcykge1xuICAgIGxldCBpID0gb2Iudm1zLmxlbmd0aFxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGNvbnN0IHZtID0gb2Iudm1zW2ldXG4gICAgICB1bnByb3h5KHZtLCBrZXkpXG4gICAgICB2bS4kZm9yY2VVcGRhdGUoKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBLRVlfV09SRFMgPSBbJyRpbmRleCcsICckdmFsdWUnLCAnJGV2ZW50J11cbmV4cG9ydCBmdW5jdGlvbiBwcm94eSAodm0sIGtleSkge1xuICBpZiAoS0VZX1dPUkRTLmluZGV4T2Yoa2V5KSA+IC0xIHx8ICFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodm0sIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gcHJveHlHZXR0ZXIgKCkge1xuICAgICAgICByZXR1cm4gdm0uX2RhdGFba2V5XVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gcHJveHlTZXR0ZXIgKHZhbCkge1xuICAgICAgICB2bS5fZGF0YVtrZXldID0gdmFsXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5wcm94eSAodm0sIGtleSkge1xuICBpZiAoIWlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgIGRlbGV0ZSB2bVtrZXldXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL29ic2VydmVyLmpzXG4gKiovIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IHsgZGVmIH0gZnJvbSAnLi4vdXRpbCdcblxuY29uc3QgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZVxuZXhwb3J0IGNvbnN0IGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90bylcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xuXG47W1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXVxuLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgY29uc3Qgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF1cbiAgZGVmKGFycmF5TWV0aG9kcywgbWV0aG9kLCBmdW5jdGlvbiBtdXRhdG9yICgpIHtcbiAgICAvLyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50czpcbiAgICAvLyBodHRwOi8vanNwZXJmLmNvbS9jbG9zdXJlLXdpdGgtYXJndW1lbnRzXG4gICAgbGV0IGkgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgY29uc3QgYXJncyA9IG5ldyBBcnJheShpKVxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJncylcbiAgICBjb25zdCBvYiA9IHRoaXMuX19vYl9fXG4gICAgbGV0IGluc2VydGVkXG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZClcbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KVxufSlcblxuLyoqXG4gKiBTd2FwIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleCB3aXRoIGEgbmV3IHZhbHVlXG4gKiBhbmQgZW1pdHMgY29ycmVzcG9uZGluZyBldmVudC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHsqfSAtIHJlcGxhY2VkIGVsZW1lbnRcbiAqL1xuXG5kZWYoXG4gIGFycmF5UHJvdG8sXG4gICckc2V0JyxcbiAgZnVuY3Rpb24gJHNldCAoaW5kZXgsIHZhbCkge1xuICAgIGlmIChpbmRleCA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGggPSBpbmRleCArIDFcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAxLCB2YWwpWzBdXG4gIH1cbilcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gcmVtb3ZlIHRoZSBlbGVtZW50IGF0IGdpdmVuIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5kZWYoXG4gIGFycmF5UHJvdG8sXG4gICckcmVtb3ZlJyxcbiAgZnVuY3Rpb24gJHJlbW92ZSAoaW5kZXgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSB0aGlzLmluZGV4T2YoaW5kZXgpXG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb3JlL2FycmF5LmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBWaWV3TW9kZWwgdGVtcGxhdGUgcGFyc2VyICYgZGF0YS1iaW5kaW5nIHByb2Nlc3NcbiAqXG4gKiByZXF1aXJlZDpcbiAqIGluZGV4LmpzOiBWbVxuICogZG9tLWhlbHBlci5qczogY3JlYXRlRWxlbWVudCwgY3JlYXRlQmxvY2tcbiAqIGRvbS1oZWxwZXIuanM6IGF0dGFjaFRhcmdldCwgbW92ZVRhcmdldCwgcmVtb3ZlVGFyZ2V0XG4gKiBkaXJlY3RpdmUuanM6IGJpbmRFbGVtZW50LCBiaW5kU3ViVm0sIHNldElkLCB3YXRjaFxuICogZXZlbnRzLmpzOiAkb25cbiAqL1xuXG5pbXBvcnQge1xuICBleHRlbmQsXG4gIGlzT2JqZWN0LFxuICBiaW5kXG59IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQge1xuICBpbml0RGF0YSxcbiAgaW5pdENvbXB1dGVkXG59IGZyb20gJy4uL2NvcmUvc3RhdGUnXG5pbXBvcnQge1xuICBiaW5kRWxlbWVudCxcbiAgc2V0SWQsXG4gIGJpbmRTdWJWbSxcbiAgYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCxcbiAgYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zLFxuICB3YXRjaFxufSBmcm9tICcuL2RpcmVjdGl2ZSdcbmltcG9ydCB7XG4gIGNyZWF0ZUJsb2NrLFxuICBjcmVhdGVCb2R5LFxuICBjcmVhdGVFbGVtZW50LFxuICBhdHRhY2hUYXJnZXQsXG4gIG1vdmVUYXJnZXQsXG4gIHJlbW92ZVRhcmdldFxufSBmcm9tICcuL2RvbS1oZWxwZXInXG5cbi8qKlxuICogYnVpbGQoZXh0ZXJuYWxEaXJzKVxuICogICBjcmVhdGVWbSgpXG4gKiAgIG1lcmdlKGV4dGVybmFsRGlycywgZGlycylcbiAqICAgY29tcGlsZSh0ZW1wbGF0ZSwgcGFyZW50Tm9kZSlcbiAqICAgICBpZiAodHlwZSBpcyBjb250ZW50KSBjcmVhdGUgY29udGVudE5vZGVcbiAqICAgICBlbHNlIGlmIChkaXJzIGhhdmUgdi1mb3IpIGZvcmVhY2ggLT4gY3JlYXRlIGNvbnRleHRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0Rm9yLCBwYXJlbnROb2RlKTogZGlmZihsaXN0KSBvbmNoYW5nZVxuICogICAgIGVsc2UgaWYgKGRpcnMgaGF2ZSB2LWlmKSBhc3NlcnRcbiAqICAgICAgIC0+IGNvbXBpbGUodGVtcGxhdGVXaXRob3V0SWYsIHBhcmVudE5vZGUpOiB0b2dnbGUoc2hvd24pIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBkeW5hbWljKVxuICogICAgICAgLT4gY29tcGlsZSh0ZW1wbGF0ZVdpdGhvdXREeW5hbWljVHlwZSwgcGFyZW50Tm9kZSk6IHdhdGNoKHR5cGUpIG9uY2hhbmdlXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBjdXN0b20pXG4gKiAgICAgICBhZGRDaGlsZFZtKHZtLCBwYXJlbnRWbSlcbiAqICAgICAgIGJ1aWxkKGV4dGVybmFsRGlycylcbiAqICAgICAgIGZvcmVhY2ggY2hpbGROb2RlcyAtPiBjb21waWxlKGNoaWxkTm9kZSwgdGVtcGxhdGUpXG4gKiAgICAgZWxzZSBpZiAodHlwZSBpcyBuYXRpdmUpXG4gKiAgICAgICBzZXQoZGlycyk6IHVwZGF0ZShpZC9hdHRyL3N0eWxlL2NsYXNzKSBvbmNoYW5nZVxuICogICAgICAgYXBwZW5kKHRlbXBsYXRlLCBwYXJlbnROb2RlKVxuICogICAgICAgZm9yZWFjaCBjaGlsZE5vZGVzIC0+IGNvbXBpbGUoY2hpbGROb2RlLCB0ZW1wbGF0ZSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkICh2bSkge1xuICBjb25zdCBvcHQgPSB2bS5fb3B0aW9ucyB8fCB7fVxuICBjb25zdCB0ZW1wbGF0ZSA9IG9wdC50ZW1wbGF0ZSB8fCB7fVxuXG4gIGlmIChvcHQucmVwbGFjZSkge1xuICAgIGlmICh0ZW1wbGF0ZS5jaGlsZHJlbiAmJiB0ZW1wbGF0ZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbXBpbGUodm0sIHRlbXBsYXRlLmNoaWxkcmVuWzBdLCB2bS5fcGFyZW50RWwpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcGlsZSh2bSwgdGVtcGxhdGUuY2hpbGRyZW4sIHZtLl9wYXJlbnRFbClcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgY29tcGlsZSh2bSwgdGVtcGxhdGUsIHZtLl9wYXJlbnRFbClcbiAgfVxuXG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFwicmVhZHlcIiBsaWZlY3ljbGUgaW4gVm0oJHt2bS5fdHlwZX0pYClcbiAgdm0uJGVtaXQoJ2hvb2s6cmVhZHknKVxuICB2bS5fcmVhZHkgPSB0cnVlXG59XG5cbi8qKlxuICogR2VuZXJhdGUgZWxlbWVudHMgYnkgY2hpbGQgb3IgY2hpbGRyZW4gYW5kIGFwcGVuZCB0byBwYXJlbnQgZWxlbWVudHMuXG4gKiBSb290IGVsZW1lbnQgaW5mbyB3b3VsZCBiZSBtZXJnZWQgaWYgaGFzLiBUaGUgZmlyc3QgYXJndW1lbnQgbWF5IGJlIGFuIGFycmF5XG4gKiBpZiB0aGUgcm9vdCBlbGVtZW50IHdpdGggb3B0aW9ucy5yZXBsYWNlIGhhcyBub3Qgb25seSBvbmUgY2hpbGQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgICAgIGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSAgICAgICBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUgKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpIHtcbiAgY29uc3QgYXBwID0gdm0uX2FwcCB8fCB7fVxuXG4gIGlmIChhcHAubGFzdFNpZ25hbCA9PT0gLTEpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0YXJnZXRJc0ZyYWdtZW50KHRhcmdldCkpIHtcbiAgICBjb21waWxlRnJhZ21lbnQodm0sIHRhcmdldCwgZGVzdCwgbWV0YSlcbiAgICByZXR1cm5cbiAgfVxuICBtZXRhID0gbWV0YSB8fCB7fVxuICBpZiAodGFyZ2V0SXNDb250ZW50KHRhcmdldCkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwiY29udGVudFwiIGJsb2NrIGJ5JywgdGFyZ2V0KVxuICAgIHZtLl9jb250ZW50ID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodGFyZ2V0TmVlZENoZWNrUmVwZWF0KHRhcmdldCwgbWV0YSkpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIFwicmVwZWF0XCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgY29tcGlsZVJlcGVhdCh2bSwgdGFyZ2V0LCBkZXN0KVxuICAgIHJldHVyblxuICB9XG4gIGlmICh0YXJnZXROZWVkQ2hlY2tTaG93bih0YXJnZXQsIG1ldGEpKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBcImlmXCIgbG9naWMgYnknLCB0YXJnZXQpXG4gICAgY29tcGlsZVNob3duKHZtLCB0YXJnZXQsIGRlc3QsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgdHlwZUdldHRlciA9IG1ldGEudHlwZSB8fCB0YXJnZXQudHlwZVxuICBpZiAodGFyZ2V0TmVlZENoZWNrVHlwZSh0eXBlR2V0dGVyLCBtZXRhKSkge1xuICAgIGNvbXBpbGVUeXBlKHZtLCB0YXJnZXQsIGRlc3QsIHR5cGVHZXR0ZXIsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgdHlwZSA9IHR5cGVHZXR0ZXJcbiAgY29uc3QgY29tcG9uZW50ID0gdGFyZ2V0SXNDb21wb3NlZCh2bSwgdGFyZ2V0LCB0eXBlKVxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBjb21wb3NlZCBjb21wb25lbnQgYnknLCB0YXJnZXQpXG4gICAgY29tcGlsZUN1c3RvbUNvbXBvbmVudCh2bSwgY29tcG9uZW50LCB0YXJnZXQsIGRlc3QsIHR5cGUsIG1ldGEpXG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gY29tcGlsZSBuYXRpdmUgY29tcG9uZW50IGJ5JywgdGFyZ2V0KVxuICBjb21waWxlTmF0aXZlQ29tcG9uZW50KHZtLCB0YXJnZXQsIGRlc3QsIHR5cGUpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IGlzIGEgZnJhZ21lbnQgKGFuIGFycmF5KS5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICB0YXJnZXRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzRnJhZ21lbnQgKHRhcmdldCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh0YXJnZXQpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IHR5cGUgaXMgY29udGVudC9zbG90LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0SXNDb250ZW50ICh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC50eXBlID09PSAnY29udGVudCcgfHwgdGFyZ2V0LnR5cGUgPT09ICdzbG90J1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRhcmdldCBuZWVkIHRvIGNvbXBpbGUgYnkgYSBsaXN0LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gIHRhcmdldFxuICogQHBhcmFtICB7b2JqZWN0fSAgbWV0YVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gdGFyZ2V0TmVlZENoZWNrUmVwZWF0ICh0YXJnZXQsIG1ldGEpIHtcbiAgcmV0dXJuICFtZXRhLmhhc093blByb3BlcnR5KCdyZXBlYXQnKSAmJiB0YXJnZXQucmVwZWF0XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGFyZ2V0IG5lZWQgdG8gY29tcGlsZSBieSBhIGJvb2xlYW4gdmFsdWUuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9ICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXROZWVkQ2hlY2tTaG93biAodGFyZ2V0LCBtZXRhKSB7XG4gIHJldHVybiAhbWV0YS5oYXNPd25Qcm9wZXJ0eSgnc2hvd24nKSAmJiB0YXJnZXQuc2hvd25cbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0YXJnZXQgbmVlZCB0byBjb21waWxlIGJ5IGEgZHluYW1pYyB0eXBlLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ3xmdW5jdGlvbn0gdHlwZUdldHRlclxuICogQHBhcmFtICB7b2JqZWN0fSAgICAgICAgICBtZXRhXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiB0YXJnZXROZWVkQ2hlY2tUeXBlICh0eXBlR2V0dGVyLCBtZXRhKSB7XG4gIHJldHVybiAodHlwZW9mIHR5cGVHZXR0ZXIgPT09ICdmdW5jdGlvbicpICYmICFtZXRhLmhhc093blByb3BlcnR5KCd0eXBlJylcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGtpbmQgb2YgY29tcG9uZW50IGlzIGNvbXBvc2VkLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRhcmdldElzQ29tcG9zZWQgKHZtLCB0YXJnZXQsIHR5cGUpIHtcbiAgbGV0IGNvbXBvbmVudFxuICBpZiAodm0uX2FwcCAmJiB2bS5fYXBwLmN1c3RvbUNvbXBvbmVudE1hcCkge1xuICAgIGNvbXBvbmVudCA9IHZtLl9hcHAuY3VzdG9tQ29tcG9uZW50TWFwW3R5cGVdXG4gIH1cbiAgaWYgKHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICBjb21wb25lbnQgPSB2bS5fb3B0aW9ucy5jb21wb25lbnRzW3R5cGVdXG4gIH1cbiAgaWYgKHRhcmdldC5jb21wb25lbnQpIHtcbiAgICBjb21wb25lbnQgPSBjb21wb25lbnQgfHwge31cbiAgfVxuICByZXR1cm4gY29tcG9uZW50XG59XG5cbi8qKlxuICogQ29tcGlsZSBhIGxpc3Qgb2YgdGFyZ2V0cy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdFxuICogQHBhcmFtIHtvYmplY3R9IG1ldGFcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUZyYWdtZW50ICh2bSwgdGFyZ2V0LCBkZXN0LCBtZXRhKSB7XG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuICB0YXJnZXQuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjb21waWxlKHZtLCBjaGlsZCwgZnJhZ0Jsb2NrLCBtZXRhKVxuICB9KVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCByZXBlYXQgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVSZXBlYXQgKHZtLCB0YXJnZXQsIGRlc3QpIHtcbiAgY29uc3QgcmVwZWF0ID0gdGFyZ2V0LnJlcGVhdFxuICBjb25zdCBvbGRTdHlsZSA9IHR5cGVvZiByZXBlYXQgPT09ICdmdW5jdGlvbidcbiAgbGV0IGdldHRlciA9IHJlcGVhdC5nZXR0ZXIgfHwgcmVwZWF0LmV4cHJlc3Npb24gfHwgcmVwZWF0XG4gIGlmICh0eXBlb2YgZ2V0dGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgZ2V0dGVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfVxuICB9XG4gIGNvbnN0IGtleSA9IHJlcGVhdC5rZXkgfHwgJyRpbmRleCdcbiAgY29uc3QgdmFsdWUgPSByZXBlYXQudmFsdWUgfHwgJyR2YWx1ZSdcbiAgY29uc3QgdHJhY2tCeSA9IHJlcGVhdC50cmFja0J5IHx8IHRhcmdldC50cmFja0J5IHx8XG4gICAgKHRhcmdldC5hdHRyICYmIHRhcmdldC5hdHRyLnRyYWNrQnkpXG5cbiAgY29uc3QgZnJhZ0Jsb2NrID0gY3JlYXRlQmxvY2sodm0sIGRlc3QpXG4gIGZyYWdCbG9jay5jaGlsZHJlbiA9IFtdXG4gIGZyYWdCbG9jay5kYXRhID0gW11cbiAgZnJhZ0Jsb2NrLnZtcyA9IFtdXG5cbiAgYmluZFJlcGVhdCh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIHsgZ2V0dGVyLCBrZXksIHZhbHVlLCB0cmFja0J5LCBvbGRTdHlsZSB9KVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCBpZiBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVTaG93biAodm0sIHRhcmdldCwgZGVzdCwgbWV0YSkge1xuICBjb25zdCBuZXdNZXRhID0geyBzaG93bjogdHJ1ZSB9XG4gIGNvbnN0IGZyYWdCbG9jayA9IGNyZWF0ZUJsb2NrKHZtLCBkZXN0KVxuXG4gIGlmIChkZXN0LmVsZW1lbnQgJiYgZGVzdC5jaGlsZHJlbikge1xuICAgIGRlc3QuY2hpbGRyZW4ucHVzaChmcmFnQmxvY2spXG4gIH1cblxuICBpZiAobWV0YS5yZXBlYXQpIHtcbiAgICBuZXdNZXRhLnJlcGVhdCA9IG1ldGEucmVwZWF0XG4gIH1cblxuICBiaW5kU2hvd24odm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0YXJnZXQgd2l0aCBkeW5hbWljIGNvbXBvbmVudCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSAgIHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9ICAgZGVzdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gdHlwZUdldHRlclxuICovXG5mdW5jdGlvbiBjb21waWxlVHlwZSAodm0sIHRhcmdldCwgZGVzdCwgdHlwZUdldHRlciwgbWV0YSkge1xuICBjb25zdCB0eXBlID0gdHlwZUdldHRlci5jYWxsKHZtKVxuICBjb25zdCBuZXdNZXRhID0gZXh0ZW5kKHsgdHlwZSB9LCBtZXRhKVxuICBjb25zdCBmcmFnQmxvY2sgPSBjcmVhdGVCbG9jayh2bSwgZGVzdClcblxuICBpZiAoZGVzdC5lbGVtZW50ICYmIGRlc3QuY2hpbGRyZW4pIHtcbiAgICBkZXN0LmNoaWxkcmVuLnB1c2goZnJhZ0Jsb2NrKVxuICB9XG5cbiAgd2F0Y2godm0sIHR5cGVHZXR0ZXIsICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld01ldGEgPSBleHRlbmQoeyB0eXBlOiB2YWx1ZSB9LCBtZXRhKVxuICAgIHJlbW92ZVRhcmdldCh2bSwgZnJhZ0Jsb2NrLCB0cnVlKVxuICAgIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxuICB9KVxuXG4gIGNvbXBpbGUodm0sIHRhcmdldCwgZnJhZ0Jsb2NrLCBuZXdNZXRhKVxufVxuXG4vKipcbiAqIENvbXBpbGUgYSBjb21wb3NlZCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICogQHBhcmFtIHtvYmplY3R9IGRlc3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVDdXN0b21Db21wb25lbnQgKHZtLCBjb21wb25lbnQsIHRhcmdldCwgZGVzdCwgdHlwZSwgbWV0YSkge1xuICBjb25zdCBDdG9yID0gdm0uY29uc3RydWN0b3JcbiAgY29uc3Qgc3ViVm0gPSBuZXcgQ3Rvcih0eXBlLCBjb21wb25lbnQsIHZtLCBkZXN0LCB1bmRlZmluZWQsIHtcbiAgICAnaG9vazppbml0JzogZnVuY3Rpb24gKCkge1xuICAgICAgc2V0SWQodm0sIG51bGwsIHRhcmdldC5pZCwgdGhpcylcbiAgICAgIC8vIGJpbmQgdGVtcGxhdGUgZWFybGllciBiZWNhdXNlIG9mIGxpZmVjeWNsZSBpc3N1ZXNcbiAgICAgIHRoaXMuX2V4dGVybmFsQmluZGluZyA9IHtcbiAgICAgICAgcGFyZW50OiB2bSxcbiAgICAgICAgdGVtcGxhdGU6IHRhcmdldFxuICAgICAgfVxuICAgIH0sXG4gICAgJ2hvb2s6Y3JlYXRlZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGJpbmRTdWJWbSh2bSwgdGhpcywgdGFyZ2V0LCBtZXRhLnJlcGVhdClcbiAgICB9LFxuICAgICdob29rOnJlYWR5JzogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpIHtcbiAgICAgICAgY29tcGlsZUNoaWxkcmVuKHZtLCB0YXJnZXQsIHRoaXMuX2NvbnRlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KVxuICBiaW5kU3ViVm1BZnRlckluaXRpYWxpemVkKHZtLCBzdWJWbSwgdGFyZ2V0KVxufVxuXG4vKipcbiAqIEdlbmVyYXRlIGVsZW1lbnQgZnJvbSB0ZW1wbGF0ZSBhbmQgYXR0YWNoIHRvIHRoZSBkZXN0IGlmIG5lZWRlZC5cbiAqIFRoZSB0aW1lIHRvIGF0dGFjaCBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIG1vZGUgc3RhdHVzIGlzIG5vZGUgb3IgdHJlZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjb21waWxlTmF0aXZlQ29tcG9uZW50ICh2bSwgdGVtcGxhdGUsIGRlc3QsIHR5cGUpIHtcbiAgYXBwbHlOYWl0dmVDb21wb25lbnRPcHRpb25zKHRlbXBsYXRlKVxuXG4gIGxldCBlbGVtZW50XG4gIGlmIChkZXN0LnJlZiA9PT0gJ19kb2N1bWVudEVsZW1lbnQnKSB7XG4gICAgLy8gaWYgaXRzIHBhcmVudCBpcyBkb2N1bWVudEVsZW1lbnQgdGhlbiBpdCdzIGEgYm9keVxuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gY3JlYXRlIGJvZHkgZm9yICR7dHlwZX1gKVxuICAgIGVsZW1lbnQgPSBjcmVhdGVCb2R5KHZtLCB0eXBlKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNvbXBpbGUgdG8gY3JlYXRlIGVsZW1lbnQgZm9yICR7dHlwZX1gKVxuICAgIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHZtLCB0eXBlKVxuICB9XG5cbiAgaWYgKCF2bS5fcm9vdEVsKSB7XG4gICAgdm0uX3Jvb3RFbCA9IGVsZW1lbnRcbiAgICAvLyBiaW5kIGV2ZW50IGVhcmxpZXIgYmVjYXVzZSBvZiBsaWZlY3ljbGUgaXNzdWVzXG4gICAgY29uc3QgYmluZGluZyA9IHZtLl9leHRlcm5hbEJpbmRpbmcgfHwge31cbiAgICBjb25zdCB0YXJnZXQgPSBiaW5kaW5nLnRlbXBsYXRlXG4gICAgY29uc3QgcGFyZW50Vm0gPSBiaW5kaW5nLnBhcmVudFxuICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmV2ZW50cyAmJiBwYXJlbnRWbSAmJiBlbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IHR5cGUgaW4gdGFyZ2V0LmV2ZW50cykge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gcGFyZW50Vm1bdGFyZ2V0LmV2ZW50c1t0eXBlXV1cbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50KHR5cGUsIGJpbmQoaGFuZGxlciwgcGFyZW50Vm0pKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYmluZEVsZW1lbnQodm0sIGVsZW1lbnQsIHRlbXBsYXRlKVxuXG4gIGlmICh0ZW1wbGF0ZS5hdHRyICYmIHRlbXBsYXRlLmF0dHIuYXBwZW5kKSB7IC8vIGJhY2t3YXJkLCBhcHBlbmQgcHJvcCBpbiBhdHRyXG4gICAgdGVtcGxhdGUuYXBwZW5kID0gdGVtcGxhdGUuYXR0ci5hcHBlbmRcbiAgfVxuXG4gIGlmICh0ZW1wbGF0ZS5hcHBlbmQpIHsgLy8gZ2l2ZSB0aGUgYXBwZW5kIGF0dHJpYnV0ZSBmb3IgaW9zIGFkYXB0YXRpb25cbiAgICBlbGVtZW50LmF0dHIgPSBlbGVtZW50LmF0dHIgfHwge31cbiAgICBlbGVtZW50LmF0dHIuYXBwZW5kID0gdGVtcGxhdGUuYXBwZW5kXG4gIH1cblxuICBjb25zdCB0cmVlTW9kZSA9IHRlbXBsYXRlLmFwcGVuZCA9PT0gJ3RyZWUnXG4gIGNvbnN0IGFwcCA9IHZtLl9hcHAgfHwge31cbiAgaWYgKGFwcC5sYXN0U2lnbmFsICE9PSAtMSAmJiAhdHJlZU1vZGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGFwcGVuZCBzaW5nbGUgbm9kZSBmb3InLCBlbGVtZW50KVxuICAgIGFwcC5sYXN0U2lnbmFsID0gYXR0YWNoVGFyZ2V0KHZtLCBlbGVtZW50LCBkZXN0KVxuICB9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEpIHtcbiAgICBjb21waWxlQ2hpbGRyZW4odm0sIHRlbXBsYXRlLCBlbGVtZW50KVxuICB9XG4gIGlmIChhcHAubGFzdFNpZ25hbCAhPT0gLTEgJiYgdHJlZU1vZGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSBjb21waWxlIHRvIGFwcGVuZCB3aG9sZSB0cmVlIGZvcicsIGVsZW1lbnQpXG4gICAgYXBwLmxhc3RTaWduYWwgPSBhdHRhY2hUYXJnZXQodm0sIGVsZW1lbnQsIGRlc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBTZXQgYWxsIGNoaWxkcmVuIHRvIGEgY2VydGFpbiBwYXJlbnQgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkZXN0XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVDaGlsZHJlbiAodm0sIHRlbXBsYXRlLCBkZXN0KSB7XG4gIGNvbnN0IGFwcCA9IHZtLl9hcHAgfHwge31cbiAgY29uc3QgY2hpbGRyZW4gPSB0ZW1wbGF0ZS5jaGlsZHJlblxuICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgY2hpbGRyZW4uZXZlcnkoKGNoaWxkKSA9PiB7XG4gICAgICBjb21waWxlKHZtLCBjaGlsZCwgZGVzdClcbiAgICAgIHJldHVybiBhcHAubGFzdFNpZ25hbCAhPT0gLTFcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogV2F0Y2ggdGhlIGxpc3QgdXBkYXRlIGFuZCByZWZyZXNoIHRoZSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmcmFnQmxvY2sge3ZtcywgZGF0YSwgY2hpbGRyZW59XG4gKiBAcGFyYW0ge29iamVjdH0gaW5mbyAgICAgIHtnZXR0ZXIsIGtleSwgdmFsdWUsIHRyYWNrQnksIG9sZFN0eWxlfVxuICovXG5mdW5jdGlvbiBiaW5kUmVwZWF0ICh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIGluZm8pIHtcbiAgY29uc3Qgdm1zID0gZnJhZ0Jsb2NrLnZtc1xuICBjb25zdCBjaGlsZHJlbiA9IGZyYWdCbG9jay5jaGlsZHJlblxuICBjb25zdCB7IGdldHRlciwgdHJhY2tCeSwgb2xkU3R5bGUgfSA9IGluZm9cbiAgY29uc3Qga2V5TmFtZSA9IGluZm8ua2V5XG4gIGNvbnN0IHZhbHVlTmFtZSA9IGluZm8udmFsdWVcblxuICBmdW5jdGlvbiBjb21waWxlSXRlbSAoaXRlbSwgaW5kZXgsIGNvbnRleHQpIHtcbiAgICBsZXQgbWVyZ2VkRGF0YVxuICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgbWVyZ2VkRGF0YSA9IGl0ZW1cbiAgICAgIGlmIChpc09iamVjdChpdGVtKSkge1xuICAgICAgICBtZXJnZWREYXRhW2tleU5hbWVdID0gaW5kZXhcbiAgICAgICAgaWYgKCFtZXJnZWREYXRhLmhhc093blByb3BlcnR5KCdJTkRFWCcpKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lcmdlZERhdGEsICdJTkRFWCcsIHtcbiAgICAgICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gXCJJTkRFWFwiIGluIHJlcGVhdCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAgICAgICAncGxlYXNlIHVzZSBcIiRpbmRleFwiIGluc3RlYWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIEVhY2ggbGlzdCBpdGVtIG11c3QgYmUgYW4gb2JqZWN0IGluIG9sZC1zdHlsZSByZXBlYXQsICdcbiAgICAgICAgICArICdwbGVhc2UgdXNlIGByZXBlYXQ9e3t2IGluIGxpc3R9fWAgaW5zdGVhZC4nKVxuICAgICAgICBtZXJnZWREYXRhID0ge31cbiAgICAgICAgbWVyZ2VkRGF0YVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgIG1lcmdlZERhdGFbdmFsdWVOYW1lXSA9IGl0ZW1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtZXJnZWREYXRhID0ge31cbiAgICAgIG1lcmdlZERhdGFba2V5TmFtZV0gPSBpbmRleFxuICAgICAgbWVyZ2VkRGF0YVt2YWx1ZU5hbWVdID0gaXRlbVxuICAgIH1cbiAgICBjb25zdCBuZXdDb250ZXh0ID0gbWVyZ2VDb250ZXh0KGNvbnRleHQsIG1lcmdlZERhdGEpXG4gICAgdm1zLnB1c2gobmV3Q29udGV4dClcbiAgICBjb21waWxlKG5ld0NvbnRleHQsIHRhcmdldCwgZnJhZ0Jsb2NrLCB7IHJlcGVhdDogaXRlbSB9KVxuICB9XG5cbiAgY29uc3QgbGlzdCA9IHdhdGNoQmxvY2sodm0sIGZyYWdCbG9jaywgZ2V0dGVyLCAncmVwZWF0JyxcbiAgICAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5kZWJ1ZygnW0pTIEZyYW1ld29ya10gdGhlIFwicmVwZWF0XCIgaXRlbSBoYXMgY2hhbmdlZCcsIGRhdGEpXG4gICAgICBpZiAoIWZyYWdCbG9jaykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2xkQ2hpbGRyZW4gPSBjaGlsZHJlbi5zbGljZSgpXG4gICAgICBjb25zdCBvbGRWbXMgPSB2bXMuc2xpY2UoKVxuICAgICAgY29uc3Qgb2xkRGF0YSA9IGZyYWdCbG9jay5kYXRhLnNsaWNlKClcbiAgICAgIC8vIDEuIGNvbGxlY3QgYWxsIG5ldyByZWZzIHRyYWNrIGJ5XG4gICAgICBjb25zdCB0cmFja01hcCA9IHt9XG4gICAgICBjb25zdCByZXVzZWRNYXAgPSB7fVxuICAgICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0cmFja0J5ID8gaXRlbVt0cmFja0J5XSA6IChvbGRTdHlsZSA/IGl0ZW1ba2V5TmFtZV0gOiBpbmRleClcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChrZXkgPT0gbnVsbCB8fCBrZXkgPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdHJhY2tNYXBba2V5XSA9IGl0ZW1cbiAgICAgIH0pXG5cbiAgICAgIC8vIDIuIHJlbW92ZSB1bnVzZWQgZWxlbWVudCBmb3JlYWNoIG9sZCBpdGVtXG4gICAgICBjb25zdCByZXVzZWRMaXN0ID0gW11cbiAgICAgIG9sZERhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdHJhY2tCeSA/IGl0ZW1bdHJhY2tCeV0gOiAob2xkU3R5bGUgPyBpdGVtW2tleU5hbWVdIDogaW5kZXgpXG4gICAgICAgIGlmICh0cmFja01hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmV1c2VkTWFwW2tleV0gPSB7XG4gICAgICAgICAgICBpdGVtLCBpbmRleCwga2V5LFxuICAgICAgICAgICAgdGFyZ2V0OiBvbGRDaGlsZHJlbltpbmRleF0sXG4gICAgICAgICAgICB2bTogb2xkVm1zW2luZGV4XVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXVzZWRMaXN0LnB1c2goaXRlbSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZW1vdmVUYXJnZXQodm0sIG9sZENoaWxkcmVuW2luZGV4XSlcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgLy8gMy4gY3JlYXRlIG5ldyBlbGVtZW50IGZvcmVhY2ggbmV3IGl0ZW1cbiAgICAgIGNoaWxkcmVuLmxlbmd0aCA9IDBcbiAgICAgIHZtcy5sZW5ndGggPSAwXG4gICAgICBmcmFnQmxvY2suZGF0YSA9IGRhdGEuc2xpY2UoKVxuICAgICAgZnJhZ0Jsb2NrLnVwZGF0ZU1hcmsgPSBmcmFnQmxvY2suc3RhcnRcblxuICAgICAgZGF0YS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB0cmFja0J5ID8gaXRlbVt0cmFja0J5XSA6IChvbGRTdHlsZSA/IGl0ZW1ba2V5TmFtZV0gOiBpbmRleClcbiAgICAgICAgY29uc3QgcmV1c2VkID0gcmV1c2VkTWFwW2tleV1cbiAgICAgICAgaWYgKHJldXNlZCkge1xuICAgICAgICAgIGlmIChyZXVzZWQuaXRlbSA9PT0gcmV1c2VkTGlzdFswXSkge1xuICAgICAgICAgICAgcmV1c2VkTGlzdC5zaGlmdCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV1c2VkTGlzdC4kcmVtb3ZlKHJldXNlZC5pdGVtKVxuICAgICAgICAgICAgbW92ZVRhcmdldCh2bSwgcmV1c2VkLnRhcmdldCwgZnJhZ0Jsb2NrLnVwZGF0ZU1hcmssIHRydWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNoaWxkcmVuLnB1c2gocmV1c2VkLnRhcmdldClcbiAgICAgICAgICB2bXMucHVzaChyZXVzZWQudm0pXG4gICAgICAgICAgaWYgKG9sZFN0eWxlKSB7XG4gICAgICAgICAgICByZXVzZWQudm0gPSBpdGVtXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV1c2VkLnZtW3ZhbHVlTmFtZV0gPSBpdGVtXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldXNlZC52bVtrZXlOYW1lXSA9IGluZGV4XG4gICAgICAgICAgZnJhZ0Jsb2NrLnVwZGF0ZU1hcmsgPSByZXVzZWQudGFyZ2V0XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29tcGlsZUl0ZW0oaXRlbSwgaW5kZXgsIHZtKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBkZWxldGUgZnJhZ0Jsb2NrLnVwZGF0ZU1hcmtcbiAgICB9XG4gIClcblxuICBmcmFnQmxvY2suZGF0YSA9IGxpc3Quc2xpY2UoMClcbiAgbGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbXBpbGVJdGVtKGl0ZW0sIGluZGV4LCB2bSlcbiAgfSlcbn1cblxuLyoqXG4gKiBXYXRjaCB0aGUgZGlzcGxheSB1cGRhdGUgYW5kIGFkZC9yZW1vdmUgdGhlIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSB0YXJnZXRcbiAqIEBwYXJhbSAge29iamVjdH0gZnJhZ0Jsb2NrXG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gYmluZFNob3duICh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpIHtcbiAgY29uc3QgZGlzcGxheSA9IHdhdGNoQmxvY2sodm0sIGZyYWdCbG9jaywgdGFyZ2V0LnNob3duLCAnc2hvd24nLFxuICAgIChkaXNwbGF5KSA9PiB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdbSlMgRnJhbWV3b3JrXSB0aGUgXCJpZlwiIGl0ZW0gd2FzIGNoYW5nZWQnLCBkaXNwbGF5KVxuXG4gICAgICBpZiAoIWZyYWdCbG9jayB8fCAhIWZyYWdCbG9jay5kaXNwbGF5ID09PSAhIWRpc3BsYXkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmcmFnQmxvY2suZGlzcGxheSA9ICEhZGlzcGxheVxuICAgICAgaWYgKGRpc3BsYXkpIHtcbiAgICAgICAgY29tcGlsZSh2bSwgdGFyZ2V0LCBmcmFnQmxvY2ssIG1ldGEpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlVGFyZ2V0KHZtLCBmcmFnQmxvY2ssIHRydWUpXG4gICAgICB9XG4gICAgfVxuICApXG5cbiAgZnJhZ0Jsb2NrLmRpc3BsYXkgPSAhIWRpc3BsYXlcbiAgaWYgKGRpc3BsYXkpIHtcbiAgICBjb21waWxlKHZtLCB0YXJnZXQsIGZyYWdCbG9jaywgbWV0YSlcbiAgfVxufVxuXG4vKipcbiAqIFdhdGNoIGNhbGMgdmFsdWUgY2hhbmdlcyBhbmQgYXBwZW5kIGNlcnRhaW4gdHlwZSBhY3Rpb24gdG8gZGlmZmVyLlxuICogSXQgaXMgdXNlZCBmb3IgaWYgb3IgcmVwZWF0IGRhdGEtYmluZGluZyBnZW5lcmF0b3IuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSAgIGZyYWdCbG9ja1xuICogQHBhcmFtICB7ZnVuY3Rpb259IGNhbGNcbiAqIEBwYXJhbSAge3N0cmluZ30gICB0eXBlXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gaGFuZGxlclxuICogQHJldHVybiB7YW55fSAgICAgIGluaXQgdmFsdWUgb2YgY2FsY1xuICovXG5mdW5jdGlvbiB3YXRjaEJsb2NrICh2bSwgZnJhZ0Jsb2NrLCBjYWxjLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGRpZmZlciA9IHZtICYmIHZtLl9hcHAgJiYgdm0uX2FwcC5kaWZmZXJcbiAgY29uc3QgY29uZmlnID0ge31cbiAgY29uc3QgZGVwdGggPSAoZnJhZ0Jsb2NrLmVsZW1lbnQuZGVwdGggfHwgMCkgKyAxXG5cbiAgcmV0dXJuIHdhdGNoKHZtLCBjYWxjLCAodmFsdWUpID0+IHtcbiAgICBjb25maWcubGF0ZXN0VmFsdWUgPSB2YWx1ZVxuICAgIGlmIChkaWZmZXIgJiYgIWNvbmZpZy5yZWNvcmRlZCkge1xuICAgICAgZGlmZmVyLmFwcGVuZCh0eXBlLCBkZXB0aCwgZnJhZ0Jsb2NrLmJsb2NrSWQsICgpID0+IHtcbiAgICAgICAgY29uc3QgbGF0ZXN0VmFsdWUgPSBjb25maWcubGF0ZXN0VmFsdWVcbiAgICAgICAgaGFuZGxlcihsYXRlc3RWYWx1ZSlcbiAgICAgICAgY29uZmlnLnJlY29yZGVkID0gZmFsc2VcbiAgICAgICAgY29uZmlnLmxhdGVzdFZhbHVlID0gdW5kZWZpbmVkXG4gICAgICB9KVxuICAgIH1cbiAgICBjb25maWcucmVjb3JkZWQgPSB0cnVlXG4gIH0pXG59XG5cbi8qKlxuICogQ2xvbmUgYSBjb250ZXh0IGFuZCBtZXJnZSBjZXJ0YWluIGRhdGEuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBtZXJnZWREYXRhXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIG1lcmdlQ29udGV4dCAoY29udGV4dCwgbWVyZ2VkRGF0YSkge1xuICBjb25zdCBuZXdDb250ZXh0ID0gT2JqZWN0LmNyZWF0ZShjb250ZXh0KVxuICBuZXdDb250ZXh0Ll9kYXRhID0gbWVyZ2VkRGF0YVxuICBpbml0RGF0YShuZXdDb250ZXh0KVxuICBpbml0Q29tcHV0ZWQobmV3Q29udGV4dClcbiAgbmV3Q29udGV4dC5fcmVhbFBhcmVudCA9IGNvbnRleHRcbiAgcmV0dXJuIG5ld0NvbnRleHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9jb21waWxlci5qc1xuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlld1xuICogRGlyZWN0aXZlIFBhcnNlclxuICovXG5cbmltcG9ydCB7IGJpbmQsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcblxuaW1wb3J0IFdhdGNoZXIgZnJvbSAnLi4vY29yZS93YXRjaGVyJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHsgbmF0aXZlQ29tcG9uZW50TWFwIH0gPSBjb25maWdcblxuY29uc3QgU0VUVEVSUyA9IHtcbiAgYXR0cjogJ3NldEF0dHInLFxuICBzdHlsZTogJ3NldFN0eWxlJyxcbiAgZXZlbnQ6ICdhZGRFdmVudCdcbn1cblxuLyoqXG4gKiBhcHBseSB0aGUgbmF0aXZlIGNvbXBvbmVudCdzIG9wdGlvbnMoc3BlY2lmaWVkIGJ5IHRlbXBsYXRlLnR5cGUpXG4gKiB0byB0aGUgdGVtcGxhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5TmFpdHZlQ29tcG9uZW50T3B0aW9ucyAodGVtcGxhdGUpIHtcbiAgY29uc3QgeyB0eXBlIH0gPSB0ZW1wbGF0ZVxuICBjb25zdCBvcHRpb25zID0gbmF0aXZlQ29tcG9uZW50TWFwW3R5cGVdXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0ZW1wbGF0ZVtrZXldID09IG51bGwpIHtcbiAgICAgICAgdGVtcGxhdGVba2V5XSA9IG9wdGlvbnNba2V5XVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwb2YodGVtcGxhdGVba2V5XSkgPT09ICdvYmplY3QnICYmXG4gICAgICAgIHR5cG9mKG9wdGlvbnNba2V5XSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3Via2V5IGluIG9wdGlvbnNba2V5XSkge1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZVtrZXldW3N1YmtleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGVtcGxhdGVba2V5XVtzdWJrZXldID0gb3B0aW9uc1trZXldW3N1YmtleV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGFsbCBpZCwgYXR0ciwgY2xhc3NuYW1lcywgc3R5bGUsIGV2ZW50cyB0byBhbiBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kRWxlbWVudCAodm0sIGVsLCB0ZW1wbGF0ZSkge1xuICBzZXRJZCh2bSwgZWwsIHRlbXBsYXRlLmlkLCB2bSlcbiAgc2V0QXR0cih2bSwgZWwsIHRlbXBsYXRlLmF0dHIpXG4gIHNldENsYXNzKHZtLCBlbCwgdGVtcGxhdGUuY2xhc3NMaXN0KVxuICBzZXRTdHlsZSh2bSwgZWwsIHRlbXBsYXRlLnN0eWxlKVxuICBiaW5kRXZlbnRzKHZtLCBlbCwgdGVtcGxhdGUuZXZlbnRzKVxufVxuXG4vKipcbiAqIGJpbmQgYWxsIHByb3BzIHRvIHN1YiB2bSBhbmQgYmluZCBhbGwgc3R5bGUsIGV2ZW50cyB0byB0aGUgcm9vdCBlbGVtZW50XG4gKiBvZiB0aGUgc3ViIHZtIGlmIGl0IGRvZXNuJ3QgaGF2ZSBhIHJlcGxhY2VkIG11bHRpLW5vZGUgZnJhZ21lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRTdWJWbSAodm0sIHN1YlZtLCB0ZW1wbGF0ZSwgcmVwZWF0SXRlbSkge1xuICBzdWJWbSA9IHN1YlZtIHx8IHt9XG4gIHRlbXBsYXRlID0gdGVtcGxhdGUgfHwge31cblxuICBjb25zdCBvcHRpb25zID0gc3ViVm0uX29wdGlvbnMgfHwge31cblxuICAvLyBiaW5kIHByb3BzXG4gIGxldCBwcm9wcyA9IG9wdGlvbnMucHJvcHNcblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICBwcm9wcyA9IHByb3BzLnJlZHVjZSgocmVzdWx0LCB2YWx1ZSkgPT4ge1xuICAgICAgcmVzdWx0W3ZhbHVlXSA9IHRydWVcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LCB7fSlcbiAgfVxuXG4gIG1lcmdlUHJvcHMocmVwZWF0SXRlbSwgcHJvcHMsIHZtLCBzdWJWbSlcbiAgbWVyZ2VQcm9wcyh0ZW1wbGF0ZS5hdHRyLCBwcm9wcywgdm0sIHN1YlZtKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZFN1YlZtQWZ0ZXJJbml0aWFsaXplZCAodm0sIHN1YlZtLCB0ZW1wbGF0ZSkge1xuICBtZXJnZUNsYXNzU3R5bGUodGVtcGxhdGUuY2xhc3NMaXN0LCB2bSwgc3ViVm0pXG4gIG1lcmdlU3R5bGUodGVtcGxhdGUuc3R5bGUsIHZtLCBzdWJWbSlcbn1cblxuZnVuY3Rpb24gbWVyZ2VQcm9wcyAodGFyZ2V0LCBwcm9wcywgdm0sIHN1YlZtKSB7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgaWYgKCFwcm9wcyB8fCBwcm9wc1trZXldKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtrZXldXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gd2F0Y2godm0sIHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHN1YlZtW2tleV0gPSB2XG4gICAgICAgIH0pXG4gICAgICAgIHN1YlZtW2tleV0gPSByZXR1cm5WYWx1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN1YlZtW2tleV0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZVN0eWxlICh0YXJnZXQsIHZtLCBzdWJWbSkge1xuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtrZXldXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSB3YXRjaCh2bSwgdmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmIChzdWJWbS5fcm9vdEVsKSB7XG4gICAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHYpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBzdWJWbS5fcm9vdEVsLnNldFN0eWxlKGtleSwgcmV0dXJuVmFsdWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHN1YlZtLl9yb290RWwpIHtcbiAgICAgICAgc3ViVm0uX3Jvb3RFbC5zZXRTdHlsZShrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZUNsYXNzU3R5bGUgKHRhcmdldCwgdm0sIHN1YlZtKSB7XG4gIGNvbnN0IGNzcyA9IHZtLl9vcHRpb25zICYmIHZtLl9vcHRpb25zLnN0eWxlIHx8IHt9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghc3ViVm0uX3Jvb3RFbCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCB0YXJnZXQsIHYgPT4ge1xuICAgICAgc2V0Q2xhc3NTdHlsZShzdWJWbS5fcm9vdEVsLCBjc3MsIHYpXG4gICAgfSlcbiAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdmFsdWUpXG4gIH1cbiAgZWxzZSBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICBzZXRDbGFzc1N0eWxlKHN1YlZtLl9yb290RWwsIGNzcywgdGFyZ2V0KVxuICB9XG59XG5cbi8qKlxuICogYmluZCBpZCB0byBhbiBlbGVtZW50XG4gKiBlYWNoIGlkIGlzIHVuaXF1ZSBpbiBhIHdob2xlIHZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRJZCAodm0sIGVsLCBpZCwgdGFyZ2V0KSB7XG4gIGNvbnN0IG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtYXAsIHtcbiAgICB2bToge1xuICAgICAgdmFsdWU6IHRhcmdldCxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICB9LFxuICAgIGVsOiB7XG4gICAgICBnZXQ6ICgpID0+IGVsIHx8IHRhcmdldC5fcm9vdEVsLFxuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH1cbiAgfSlcblxuICBpZiAodHlwZW9mIGlkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IGlkXG4gICAgaWQgPSBoYW5kbGVyLmNhbGwodm0pXG4gICAgaWYgKGlkKSB7XG4gICAgICB2bS5faWRzW2lkXSA9IG1hcFxuICAgIH1cbiAgICB3YXRjaCh2bSwgaGFuZGxlciwgKG5ld0lkKSA9PiB7XG4gICAgICBpZiAobmV3SWQpIHtcbiAgICAgICAgdm0uX2lkc1tuZXdJZF0gPSBtYXBcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGVsc2UgaWYgKGlkICYmIHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpIHtcbiAgICB2bS5faWRzW2lkXSA9IG1hcFxuICB9XG59XG5cbi8qKlxuICogYmluZCBhdHRyIHRvIGFuIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gc2V0QXR0ciAodm0sIGVsLCBhdHRyKSB7XG4gIGJpbmREaXIodm0sIGVsLCAnYXR0cicsIGF0dHIpXG59XG5cbmZ1bmN0aW9uIHNldENsYXNzU3R5bGUgKGVsLCBjc3MsIGNsYXNzTGlzdCkge1xuICBjb25zdCBjbGFzc1N0eWxlID0ge31cbiAgY29uc3QgbGVuZ3RoID0gY2xhc3NMaXN0Lmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdHlsZSA9IGNzc1tjbGFzc0xpc3RbaV1dXG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgICAgICBjbGFzc1N0eWxlW2tleV0gPSBzdHlsZVtrZXldXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsLnNldENsYXNzU3R5bGUoY2xhc3NTdHlsZSlcbn1cblxuLyoqXG4gKiBiaW5kIGNsYXNzbmFtZXMgdG8gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRDbGFzcyAodm0sIGVsLCBjbGFzc0xpc3QpIHtcbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgIT09ICdmdW5jdGlvbicgJiYgIUFycmF5LmlzQXJyYXkoY2xhc3NMaXN0KSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTGlzdCkgJiYgIWNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICBlbC5zZXRDbGFzc1N0eWxlKHt9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3Qgc3R5bGUgPSB2bS5fb3B0aW9ucyAmJiB2bS5fb3B0aW9ucy5zdHlsZSB8fCB7fVxuICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IHZhbHVlID0gd2F0Y2godm0sIGNsYXNzTGlzdCwgdiA9PiB7XG4gICAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgdilcbiAgICB9KVxuICAgIHNldENsYXNzU3R5bGUoZWwsIHN0eWxlLCB2YWx1ZSlcbiAgfVxuICBlbHNlIHtcbiAgICBzZXRDbGFzc1N0eWxlKGVsLCBzdHlsZSwgY2xhc3NMaXN0KVxuICB9XG59XG5cbi8qKlxuICogYmluZCBzdHlsZSB0byBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHNldFN0eWxlICh2bSwgZWwsIHN0eWxlKSB7XG4gIGJpbmREaXIodm0sIGVsLCAnc3R5bGUnLCBzdHlsZSlcbn1cblxuLyoqXG4gKiBhZGQgYW4gZXZlbnQgdHlwZSBhbmQgaGFuZGxlciB0byBhbiBlbGVtZW50IGFuZCBnZW5lcmF0ZSBhIGRvbSB1cGRhdGVcbiAqL1xuZnVuY3Rpb24gc2V0RXZlbnQgKHZtLCBlbCwgdHlwZSwgaGFuZGxlcikge1xuICBlbC5hZGRFdmVudCh0eXBlLCBiaW5kKGhhbmRsZXIsIHZtKSlcbn1cblxuLyoqXG4gKiBhZGQgYWxsIGV2ZW50cyBvZiBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGJpbmRFdmVudHMgKHZtLCBlbCwgZXZlbnRzKSB7XG4gIGlmICghZXZlbnRzKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cylcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgIGxldCBoYW5kbGVyID0gZXZlbnRzW2tleV1cbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICBoYW5kbGVyID0gdm1baGFuZGxlcl1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIFRoZSBtZXRob2QgXCIke2hhbmRsZXJ9XCIgaXMgbm90IGRlZmluZWQuYClcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0RXZlbnQodm0sIGVsLCBrZXksIGhhbmRsZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBzZXQgYSBzZXJpZXMgb2YgbWVtYmVycyBhcyBhIGtpbmQgb2YgYW4gZWxlbWVudFxuICogZm9yIGV4YW1wbGU6IHN0eWxlLCBhdHRyLCAuLi5cbiAqIGlmIHRoZSB2YWx1ZSBpcyBhIGZ1bmN0aW9uIHRoZW4gYmluZCB0aGUgZGF0YSBjaGFuZ2VzXG4gKi9cbmZ1bmN0aW9uIGJpbmREaXIgKHZtLCBlbCwgbmFtZSwgZGF0YSkge1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3Qga2V5ID0ga2V5c1tpXVxuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXldXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYmluZEtleSh2bSwgZWwsIG5hbWUsIGtleSwgdmFsdWUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxbU0VUVEVSU1tuYW1lXV0oa2V5LCB2YWx1ZSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBiaW5kIGRhdGEgY2hhbmdlcyB0byBhIGNlcnRhaW4ga2V5IHRvIGEgbmFtZSBzZXJpZXMgaW4gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBiaW5kS2V5ICh2bSwgZWwsIG5hbWUsIGtleSwgY2FsYykge1xuICBjb25zdCBtZXRob2ROYW1lID0gU0VUVEVSU1tuYW1lXVxuICAvLyB3YXRjaCB0aGUgY2FsYywgYW5kIHJldHVybnMgYSB2YWx1ZSBieSBjYWxjLmNhbGwoKVxuICBjb25zdCB2YWx1ZSA9IHdhdGNoKHZtLCBjYWxjLCAodmFsdWUpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVyICgpIHtcbiAgICAgIGVsW21ldGhvZE5hbWVdKGtleSwgdmFsdWUpXG4gICAgfVxuICAgIGNvbnN0IGRpZmZlciA9IHZtICYmIHZtLl9hcHAgJiYgdm0uX2FwcC5kaWZmZXJcbiAgICBpZiAoZGlmZmVyKSB7XG4gICAgICBkaWZmZXIuYXBwZW5kKCdlbGVtZW50JywgZWwuZGVwdGgsIGVsLnJlZiwgaGFuZGxlcilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBoYW5kbGVyKClcbiAgICB9XG4gIH0pXG5cbiAgZWxbbWV0aG9kTmFtZV0oa2V5LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiB3YXRjaCBhIGNhbGMgZnVuY3Rpb24gYW5kIGNhbGxiYWNrIGlmIHRoZSBjYWxjIHZhbHVlIGNoYW5nZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoICh2bSwgY2FsYywgY2FsbGJhY2spIHtcbiAgY29uc3Qgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHZtLCBjYWxjLCBmdW5jdGlvbiAodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgJiYgdmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbGJhY2sodmFsdWUpXG4gIH0pXG5cbiAgcmV0dXJuIHdhdGNoZXIudmFsdWVcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC92bS9kaXJlY3RpdmUuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG5hdGl2ZUNvbXBvbmVudE1hcDoge1xuICAgIHRleHQ6IHRydWUsXG4gICAgaW1hZ2U6IHRydWUsXG4gICAgY29udGFpbmVyOiB0cnVlLFxuICAgIHNsaWRlcjoge1xuICAgICAgdHlwZTogJ3NsaWRlcicsXG4gICAgICBhcHBlbmQ6ICd0cmVlJ1xuICAgIH0sXG4gICAgY2VsbDoge1xuICAgICAgdHlwZTogJ2NlbGwnLFxuICAgICAgYXBwZW5kOiAndHJlZSdcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9jb25maWcuanNcbiAqKi8iLCIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgRG9jdW1lbnQgJiBFbGVtZW50IEhlbHBlcnMuXG4gKlxuICogcmVxdWlyZWQ6XG4gKiBEb2N1bWVudCM6IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUNvbW1lbnQsIGdldFJlZlxuICogRWxlbWVudCM6IGFwcGVuZENoaWxkLCBpbnNlcnRCZWZvcmUsIHJlbW92ZUNoaWxkLCBuZXh0U2libGluZ1xuICovXG5cbi8qKlxuICogQ3JlYXRlIGEgYm9keSBieSB0eXBlXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2R5ICh2bSwgdHlwZSkge1xuICBjb25zdCBkb2MgPSB2bS5fYXBwLmRvY1xuICByZXR1cm4gZG9jLmNyZWF0ZUJvZHkodHlwZSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZWxlbWVudCBieSB0eXBlXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSB0eXBlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50ICh2bSwgdHlwZSkge1xuICBjb25zdCBkb2MgPSB2bS5fYXBwLmRvY1xuICByZXR1cm4gZG9jLmNyZWF0ZUVsZW1lbnQodHlwZSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIGZyYWcgYmxvY2sgZm9yIGFuIGVsZW1lbnQuXG4gKiBUaGUgZnJhZyBibG9jayBoYXMgYSBzdGFydGVyLCBlbmRlciBhbmQgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmxvY2sgKHZtLCBlbGVtZW50KSB7XG4gIGNvbnN0IHN0YXJ0ID0gY3JlYXRlQmxvY2tTdGFydCh2bSlcbiAgY29uc3QgZW5kID0gY3JlYXRlQmxvY2tFbmQodm0pXG4gIGNvbnN0IGJsb2NrSWQgPSBsYXN0ZXN0QmxvY2tJZCsrXG4gIGlmIChlbGVtZW50LmVsZW1lbnQpIHtcbiAgICBsZXQgdXBkYXRlTWFyayA9IGVsZW1lbnQudXBkYXRlTWFya1xuICAgIGlmICh1cGRhdGVNYXJrKSB7XG4gICAgICBpZiAodXBkYXRlTWFyay5lbGVtZW50KSB7XG4gICAgICAgIHVwZGF0ZU1hcmsgPSB1cGRhdGVNYXJrLmVuZFxuICAgICAgfVxuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEFmdGVyKGVuZCwgdXBkYXRlTWFyaylcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRBZnRlcihzdGFydCwgdXBkYXRlTWFyaylcbiAgICAgIGVsZW1lbnQudXBkYXRlTWFyayA9IGVuZFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGVsZW1lbnQuZWxlbWVudC5pbnNlcnRCZWZvcmUoc3RhcnQsIGVsZW1lbnQuZW5kKVxuICAgICAgZWxlbWVudC5lbGVtZW50Lmluc2VydEJlZm9yZShlbmQsIGVsZW1lbnQuZW5kKVxuICAgIH1cbiAgICBlbGVtZW50ID0gZWxlbWVudC5lbGVtZW50XG4gIH1cbiAgZWxzZSB7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChzdGFydClcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVuZClcbiAgfVxuICByZXR1cm4geyBzdGFydCwgZW5kLCBlbGVtZW50LCBibG9ja0lkIH1cbn1cblxubGV0IGxhc3Rlc3RCbG9ja0lkID0gMVxuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgYmxvY2sgc3RhcnRlci5cbiAqIFVzaW5nIHRoaXMuX2FwcC5kb2NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmxvY2tTdGFydCAodm0pIHtcbiAgY29uc3QgZG9jID0gdm0uX2FwcC5kb2NcbiAgY29uc3QgYW5jaG9yID0gZG9jLmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0JylcbiAgcmV0dXJuIGFuY2hvclxufVxuXG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgYmxvY2sgZW5kZXIuXG4gKiBVc2luZyB0aGlzLl9hcHAuZG9jXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrRW5kICh2bSkge1xuICBjb25zdCBkb2MgPSB2bS5fYXBwLmRvY1xuICBjb25zdCBhbmNob3IgPSBkb2MuY3JlYXRlQ29tbWVudCgnZW5kJylcbiAgcmV0dXJuIGFuY2hvclxufVxuXG4vKipcbiAqIEF0dGFjaCB0YXJnZXQgdG8gYSBjZXJ0YWluIGRlc3QgdXNpbmcgYXBwZW5kQ2hpbGQgYnkgZGVmYXVsdC5cbiAqIElmIHRoZSBkZXN0IGlzIGEgZnJhZyBibG9jayB0aGVuIGluc2VydCBiZWZvcmUgdGhlIGVuZGVyLlxuICogSWYgdGhlIHRhcmdldCBpcyBhIGZyYWcgYmxvY2sgdGhlbiBhdHRhY2ggdGhlIHN0YXJ0ZXIgYW5kIGVuZGVyIGluIG9yZGVyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGRlc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF0dGFjaFRhcmdldCAodm0sIHRhcmdldCwgZGVzdCkge1xuICBpZiAoZGVzdC5lbGVtZW50KSB7XG4gICAgY29uc3QgYmVmb3JlID0gZGVzdC5lbmRcbiAgICBjb25zdCBhZnRlciA9IGRlc3QudXBkYXRlTWFya1xuICAgIC8vIHB1c2ggbmV3IHRhcmdldCBmb3Igd2F0Y2ggbGlzdCB1cGRhdGUgbGF0ZXJcbiAgICBpZiAoZGVzdC5jaGlsZHJlbikge1xuICAgICAgZGVzdC5jaGlsZHJlbi5wdXNoKHRhcmdldClcbiAgICB9XG4gICAgLy8gZm9yIGNoZWNrIHJlcGVhdCBjYXNlXG4gICAgaWYgKGFmdGVyKSB7XG4gICAgICBjb25zdCBzaWduYWwgPSBtb3ZlVGFyZ2V0KHZtLCB0YXJnZXQsIGFmdGVyKVxuICAgICAgZGVzdC51cGRhdGVNYXJrID0gdGFyZ2V0LmVsZW1lbnQgPyB0YXJnZXQuZW5kIDogdGFyZ2V0XG4gICAgICByZXR1cm4gc2lnbmFsXG4gICAgfVxuICAgIGVsc2UgaWYgKHRhcmdldC5lbGVtZW50KSB7XG4gICAgICBkZXN0LmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRhcmdldC5zdGFydCwgYmVmb3JlKVxuICAgICAgZGVzdC5lbGVtZW50Lmluc2VydEJlZm9yZSh0YXJnZXQuZW5kLCBiZWZvcmUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGRlc3QuZWxlbWVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LCBiZWZvcmUpXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGlmICh0YXJnZXQuZWxlbWVudCkge1xuICAgICAgZGVzdC5hcHBlbmRDaGlsZCh0YXJnZXQuc3RhcnQpXG4gICAgICBkZXN0LmFwcGVuZENoaWxkKHRhcmdldC5lbmQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGRlc3QuYXBwZW5kQ2hpbGQodGFyZ2V0KVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1vdmUgdGFyZ2V0IGJlZm9yZSBhIGNlcnRhaW4gZWxlbWVudC4gVGhlIHRhcmdldCBtYXliZSBibG9jayBvciBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbW92ZVRhcmdldCAodm0sIHRhcmdldCwgYWZ0ZXIpIHtcbiAgaWYgKHRhcmdldC5lbGVtZW50KSB7XG4gICAgcmV0dXJuIG1vdmVCbG9jayh0YXJnZXQsIGFmdGVyKVxuICB9XG4gIHJldHVybiBtb3ZlRWxlbWVudCh0YXJnZXQsIGFmdGVyKVxufVxuXG4vKipcbiAqIE1vdmUgZWxlbWVudCBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0gIHtvYmplY3R9IGJlZm9yZVxuICovXG5mdW5jdGlvbiBtb3ZlRWxlbWVudCAoZWxlbWVudCwgYWZ0ZXIpIHtcbiAgY29uc3QgcGFyZW50ID0gYWZ0ZXIucGFyZW50Tm9kZVxuICBpZiAocGFyZW50KSB7XG4gICAgcmV0dXJuIHBhcmVudC5pbnNlcnRBZnRlcihlbGVtZW50LCBhZnRlcilcbiAgfVxufVxuXG4vKipcbiAqIE1vdmUgYWxsIGVsZW1lbnRzIG9mIHRoZSBibG9jayBiZWZvcmUgYSBjZXJ0YWluIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge29iamVjdH0gYmVmb3JlXG4gKi9cbmZ1bmN0aW9uIG1vdmVCbG9jayAoZnJhZ0Jsb2NrLCBhZnRlcikge1xuICBjb25zdCBwYXJlbnQgPSBhZnRlci5wYXJlbnROb2RlXG5cbiAgaWYgKHBhcmVudCkge1xuICAgIGxldCBlbCA9IGZyYWdCbG9jay5zdGFydFxuICAgIGxldCBzaWduYWxcbiAgICBjb25zdCBncm91cCA9IFtlbF1cblxuICAgIHdoaWxlIChlbCAmJiBlbCAhPT0gZnJhZ0Jsb2NrLmVuZCkge1xuICAgICAgZWwgPSBlbC5uZXh0U2libGluZ1xuICAgICAgZ3JvdXAucHVzaChlbClcbiAgICB9XG5cbiAgICBsZXQgdGVtcCA9IGFmdGVyXG4gICAgZ3JvdXAuZXZlcnkoKGVsKSA9PiB7XG4gICAgICBzaWduYWwgPSBwYXJlbnQuaW5zZXJ0QWZ0ZXIoZWwsIHRlbXApXG4gICAgICB0ZW1wID0gZWxcbiAgICAgIHJldHVybiBzaWduYWwgIT09IC0xXG4gICAgfSlcblxuICAgIHJldHVybiBzaWduYWxcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSB0YXJnZXQgZnJvbSBET00gdHJlZS5cbiAqIElmIHRoZSB0YXJnZXQgaXMgYSBmcmFnIGJsb2NrIHRoZW4gY2FsbCBfcmVtb3ZlQmxvY2tcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHRhcmdldFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0ICh2bSwgdGFyZ2V0LCBwcmVzZXJ2ZUJsb2NrID0gZmFsc2UpIHtcbiAgaWYgKHRhcmdldC5lbGVtZW50KSB7XG4gICAgcmVtb3ZlQmxvY2sodGFyZ2V0LCBwcmVzZXJ2ZUJsb2NrKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlbW92ZUVsZW1lbnQodGFyZ2V0KVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2VydGFpbiBlbGVtZW50LlxuICogVXNpbmcgdGhpcy5fYXBwLmRvY1xuICpcbiAqIEBwYXJhbSAge29iamVjdH0gdGFyZ2V0XG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQgKHRhcmdldCkge1xuICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxuXG4gIGlmIChwYXJlbnQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZnJhZyBibG9jay5cbiAqIFRoZSBzZWNvbmQgcGFyYW0gZGVjaWRlcyB3aGV0aGVyIHRoZSBibG9jayBzZWxmIHNob3VsZCBiZSByZW1vdmVkIHRvby5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9ICBmcmFnQmxvY2tcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHByZXNlcnZlQmxvY2s9ZmFsc2VcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQmxvY2sgKGZyYWdCbG9jaywgcHJlc2VydmVCbG9jayA9IGZhbHNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGxldCBlbCA9IGZyYWdCbG9jay5zdGFydC5uZXh0U2libGluZ1xuXG4gIHdoaWxlIChlbCAmJiBlbCAhPT0gZnJhZ0Jsb2NrLmVuZCkge1xuICAgIHJlc3VsdC5wdXNoKGVsKVxuICAgIGVsID0gZWwubmV4dFNpYmxpbmdcbiAgfVxuXG4gIGlmICghcHJlc2VydmVCbG9jaykge1xuICAgIHJlbW92ZUVsZW1lbnQoZnJhZ0Jsb2NrLnN0YXJ0KVxuICB9XG4gIHJlc3VsdC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIHJlbW92ZUVsZW1lbnQoZWwpXG4gIH0pXG4gIGlmICghcHJlc2VydmVCbG9jaykge1xuICAgIHJlbW92ZUVsZW1lbnQoZnJhZ0Jsb2NrLmVuZClcbiAgfVxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vZG9tLWhlbHBlci5qc1xuICoqLyIsImZ1bmN0aW9uIEV2dCAodHlwZSwgZGV0YWlsKSB7XG4gIGlmIChkZXRhaWwgaW5zdGFuY2VvZiBFdnQpIHtcbiAgICByZXR1cm4gZGV0YWlsXG4gIH1cblxuICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KClcbiAgdGhpcy5kZXRhaWwgPSBkZXRhaWxcbiAgdGhpcy50eXBlID0gdHlwZVxuXG4gIGxldCBzaG91bGRTdG9wID0gZmFsc2VcbiAgdGhpcy5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHNob3VsZFN0b3AgPSB0cnVlXG4gIH1cbiAgdGhpcy5oYXNTdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzaG91bGRTdG9wXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRlbWl0ICh0eXBlLCBkZXRhaWwpIHtcbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgY29uc3QgaGFuZGxlckxpc3QgPSBldmVudHNbdHlwZV1cbiAgaWYgKGhhbmRsZXJMaXN0KSB7XG4gICAgY29uc3QgZXZ0ID0gbmV3IEV2dCh0eXBlLCBkZXRhaWwpXG4gICAgaGFuZGxlckxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGV2dClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkZGlzcGF0Y2ggKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgdGhpcy4kZW1pdCh0eXBlLCBldnQpXG5cbiAgaWYgKCFldnQuaGFzU3RvcHBlZCgpICYmIHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQuJGRpc3BhdGNoKSB7XG4gICAgdGhpcy5fcGFyZW50LiRkaXNwYXRjaCh0eXBlLCBldnQpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRicm9hZGNhc3QgKHR5cGUsIGRldGFpbCkge1xuICBjb25zdCBldnQgPSBuZXcgRXZ0KHR5cGUsIGRldGFpbClcbiAgdGhpcy4kZW1pdCh0eXBlLCBldnQpXG5cbiAgaWYgKCFldnQuaGFzU3RvcHBlZCgpICYmIHRoaXMuX2NoaWxkcmVuVm1zKSB7XG4gICAgdGhpcy5fY2hpbGRyZW5WbXMuZm9yRWFjaCgoc3ViVm0pID0+IHtcbiAgICAgIHN1YlZtLiRicm9hZGNhc3QodHlwZSwgZXZ0KVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRvbiAodHlwZSwgaGFuZGxlcikge1xuICBpZiAoIXR5cGUgfHwgdHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBldmVudHMgPSB0aGlzLl92bUV2ZW50c1xuICBjb25zdCBoYW5kbGVyTGlzdCA9IGV2ZW50c1t0eXBlXSB8fCBbXVxuICBoYW5kbGVyTGlzdC5wdXNoKGhhbmRsZXIpXG4gIGV2ZW50c1t0eXBlXSA9IGhhbmRsZXJMaXN0XG5cbiAgLy8gZml4ZWQgb2xkIHZlcnNpb24gbGlmZWN5Y2xlIGRlc2lnblxuICBpZiAodHlwZSA9PT0gJ2hvb2s6cmVhZHknICYmIHRoaXMuX3JlYWR5KSB7XG4gICAgdGhpcy4kZW1pdCgnaG9vazpyZWFkeScpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uICRvZmYgKHR5cGUsIGhhbmRsZXIpIHtcbiAgaWYgKCF0eXBlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgZXZlbnRzID0gdGhpcy5fdm1FdmVudHNcbiAgaWYgKCFoYW5kbGVyKSB7XG4gICAgZGVsZXRlIGV2ZW50c1t0eXBlXVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGhhbmRsZXJMaXN0ID0gZXZlbnRzW3R5cGVdXG4gIGlmICghaGFuZGxlckxpc3QpIHtcbiAgICByZXR1cm5cbiAgfVxuICBoYW5kbGVyTGlzdC4kcmVtb3ZlKGhhbmRsZXIpXG59XG5cbmNvbnN0IExJRkVfQ1lDTEVfVFlQRVMgPSBbJ2luaXQnLCAnY3JlYXRlZCcsICdyZWFkeSddXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RXZlbnRzICh2bSwgZXh0ZXJuYWxFdmVudHMpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHZtLl9vcHRpb25zIHx8IHt9XG4gIGNvbnN0IGV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzIHx8IHt9XG4gIGZvciAoY29uc3QgdHlwZTEgaW4gZXZlbnRzKSB7XG4gICAgdm0uJG9uKHR5cGUxLCBldmVudHNbdHlwZTFdKVxuICB9XG4gIGZvciAoY29uc3QgdHlwZTIgaW4gZXh0ZXJuYWxFdmVudHMpIHtcbiAgICB2bS4kb24odHlwZTIsIGV4dGVybmFsRXZlbnRzW3R5cGUyXSlcbiAgfVxuICBMSUZFX0NZQ0xFX1RZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICB2bS4kb24oYGhvb2s6JHt0eXBlfWAsIG9wdGlvbnNbdHlwZV0pXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkV2ZW50cyAodm0pIHtcbiAgdm0uJGVtaXQgPSAkZW1pdFxuICB2bS4kZGlzcGF0Y2ggPSAkZGlzcGF0Y2hcbiAgdm0uJGJyb2FkY2FzdCA9ICRicm9hZGNhc3RcbiAgdm0uJG9uID0gJG9uXG4gIHZtLiRvZmYgPSAkb2ZmXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvdm0vZXZlbnRzLmpzXG4gKiovIiwibGV0IG5hdGl2ZU1vZHVsZXMgPSB7fVxuXG5mdW5jdGlvbiBhc3NpZ25Nb2R1bGVzIChtb2R1bGVzLCBpZlJlcGxhY2UpIHtcbiAgZm9yIChjb25zdCBtb2R1bGVOYW1lIGluIG1vZHVsZXMpIHtcbiAgICAvLyBpbml0IGBtb2R1bGVzW21vZHVsZU5hbWVdW11gXG4gICAgbGV0IG1ldGhvZHMgPSBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdXG4gICAgaWYgKCFtZXRob2RzKSB7XG4gICAgICBtZXRob2RzID0ge31cbiAgICAgIG5hdGl2ZU1vZHVsZXNbbW9kdWxlTmFtZV0gPSBtZXRob2RzXG4gICAgfVxuXG4gICAgLy8gcHVzaCBlYWNoIG5vbi1leGlzdGVkIG5ldyBtZXRob2RcbiAgICBtb2R1bGVzW21vZHVsZU5hbWVdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1ldGhvZCA9IHtcbiAgICAgICAgICBuYW1lOiBtZXRob2RcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIW1ldGhvZHNbbWV0aG9kLm5hbWVdIHx8IGlmUmVwbGFjZSkge1xuICAgICAgICBtZXRob2RzW21ldGhvZC5uYW1lXSA9IG1ldGhvZFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduQXBpcyAoQ3RvciwgYXBpcykge1xuICBjb25zdCBwID0gQ3Rvci5wcm90b3R5cGVcblxuICBmb3IgKGNvbnN0IGFwaU5hbWUgaW4gYXBpcykge1xuICAgIGlmICghcC5oYXNPd25Qcm9wZXJ0eShhcGlOYW1lKSkge1xuICAgICAgcFthcGlOYW1lXSA9IGFwaXNbYXBpTmFtZV1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTW9kdWxlcyAoKSB7XG4gIG5hdGl2ZU1vZHVsZXMgPSB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kdWxlIChtb2R1bGVOYW1lKSB7XG4gIHJldHVybiBuYXRpdmVNb2R1bGVzW21vZHVsZU5hbWVdXG59XG5cbi8qKlxuICogQGNvbnRleHQgYSBpbnN0YW5jZSBvZiBBcHBJbnN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZU1vZHVsZSAobW9kdWxlTmFtZSkge1xuICBjb25zdCBtZXRob2RzID0gbmF0aXZlTW9kdWxlc1ttb2R1bGVOYW1lXVxuICBjb25zdCB0YXJnZXQgPSB7fVxuXG4gIGZvciAoY29uc3QgbWV0aG9kTmFtZSBpbiBtZXRob2RzKSB7XG4gICAgdGFyZ2V0W21ldGhvZE5hbWVdID0gKC4uLmFyZ3MpID0+IHRoaXMuY2FsbFRhc2tzKHtcbiAgICAgIG1vZHVsZTogbW9kdWxlTmFtZSxcbiAgICAgIG1ldGhvZDogbWV0aG9kTmFtZSxcbiAgICAgIGFyZ3M6IGFyZ3NcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldFxufVxuXG4vKipcbiAqIEBjb250ZXh0IFZtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZXMgKG1vZHVsZXMsIGlmUmVwbGFjZSkge1xuICBhc3NpZ25Nb2R1bGVzKG1vZHVsZXMsIGlmUmVwbGFjZSlcbn1cblxuLyoqXG4gKiBAY29udGV4dCBWbVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNZXRob2RzIChhcGlzKSB7XG4gIGFzc2lnbkFwaXModGhpcywgYXBpcylcbn1cblxuLyoqXG4gKiBAY29udGV4dCBhIGluc3RhbmNlIG9mIEFwcEluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlQ29tcG9uZW50IChuYW1lKSB7XG4gIGNvbnN0IHsgY3VzdG9tQ29tcG9uZW50TWFwIH0gPSB0aGlzXG4gIHJldHVybiBjdXN0b21Db21wb25lbnRNYXBbbmFtZV1cbn1cblxuLyoqXG4gKiBAY29udGV4dCBhIGluc3RhbmNlIG9mIEFwcEluc3RhbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudCAobmFtZSwgZGVmKSB7XG4gIGNvbnN0IHsgY3VzdG9tQ29tcG9uZW50TWFwIH0gPSB0aGlzXG5cbiAgaWYgKGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCgke25hbWV9KSB0aGF0IGFscmVhZHkgZXhpc3RzYClcbiAgICByZXR1cm5cbiAgfVxuXG4gIGN1c3RvbUNvbXBvbmVudE1hcFtuYW1lXSA9IGRlZlxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9yZWdpc3Rlci5qc1xuICoqLyIsImltcG9ydCBzZW12ZXIgZnJvbSAnc2VtdmVyJ1xuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuXG4vKipcbiAqIFtub3JtYWxpemVWZXJzaW9uIGRlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7U3RyaW5nfSBWZXJzaW9uLiBpZTogMSwgMS4wLCAxLjAuMFxuICogQHJldHVybiB7U3RyaW5nfSBWZXJzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVWZXJzaW9uICh2KSB7XG4gIGNvbnN0IGlzVmFsaWQgPSBzZW12ZXIudmFsaWQodilcbiAgaWYgKGlzVmFsaWQpIHtcbiAgICByZXR1cm4gdlxuICB9XG5cbiAgdiA9IHR5cGVvZiAodikgPT09ICdzdHJpbmcnID8gdiA6ICcnXG4gIGNvbnN0IHNwbGl0ID0gdi5zcGxpdCgnLicpXG4gIGxldCBpID0gMFxuICBjb25zdCByZXN1bHQgPSBbXVxuXG4gIHdoaWxlIChpIDwgMykge1xuICAgIGNvbnN0IHMgPSB0eXBlb2YgKHNwbGl0W2ldKSA9PT0gJ3N0cmluZycgJiYgc3BsaXRbaV0gPyBzcGxpdFtpXSA6ICcwJ1xuICAgIHJlc3VsdC5wdXNoKHMpXG4gICAgaSsrXG4gIH1cblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJy4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXJyb3IgKGtleSwgdmFsLCBjcml0ZXJpYSkge1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgaXNEb3duZ3JhZGU6IHRydWUsXG4gICAgZXJyb3JUeXBlOiAxLFxuICAgIGNvZGU6IDEwMDBcbiAgfVxuICBjb25zdCBnZXRNc2cgPSBmdW5jdGlvbiAoa2V5LCB2YWwsIGNyaXRlcmlhKSB7XG4gICAgcmV0dXJuICdEb3duZ3JhZGVbJyArIGtleSArICddIDo6IGRldmljZUluZm8gJ1xuICAgICAgKyB2YWwgKyAnIG1hdGNoZWQgY3JpdGVyaWEgJyArIGNyaXRlcmlhXG4gIH1cbiAgY29uc3QgX2tleSA9IGtleS50b0xvd2VyQ2FzZSgpXG5cbiAgcmVzdWx0LmVycm9yTWVzc2FnZSA9IGdldE1zZyhrZXksIHZhbCwgY3JpdGVyaWEpXG5cbiAgaWYgKF9rZXkuaW5kZXhPZignb3N2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwMVxuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignYXBwdmVyc2lvbicpID49IDApIHtcbiAgICByZXN1bHQuY29kZSA9IDEwMDJcbiAgfVxuICBlbHNlIGlmIChfa2V5LmluZGV4T2YoJ3dlZXh2ZXJzaW9uJykgPj0gMCkge1xuICAgIHJlc3VsdC5jb2RlID0gMTAwM1xuICB9XG4gIGVsc2UgaWYgKF9rZXkuaW5kZXhPZignZGV2aWNlbW9kZWwnKSA+PSAwKSB7XG4gICAgcmVzdWx0LmNvZGUgPSAxMDA0XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogV0VFWCBmcmFtZXdvcmsgaW5wdXQoZGV2aWNlSW5mbylcbiAqIHtcbiAqICAgcGxhdGZvcm06ICdpT1MnIG9yICdhbmRyb2lkJ1xuICogICBvc1ZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIGFwcFZlcnNpb246ICcxLjAuMCcgb3IgJzEuMCcgb3IgJzEnXG4gKiAgIHdlZXhWZXJzaW9uOiAnMS4wLjAnIG9yICcxLjAnIG9yICcxJ1xuICogICBkRGV2aWNlTW9kZWw6ICdNT0RFTF9OQU1FJ1xuICogfVxuICpcbiAqIGRvd25ncmFkZSBjb25maWcoY29uZmlnKVxuICoge1xuICogICBpb3M6IHtcbiAqICAgICBvc1ZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIGFwcFZlcnNpb246ICc+MS4wLjAnIG9yICc+PTEuMC4wJyBvciAnPDEuMC4wJyBvciAnPD0xLjAuMCcgb3IgJzEuMC4wJ1xuICogICAgIHdlZXhWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBkZXZpY2VNb2RlbDogWydtb2RlbEEnLCAnbW9kZWxCJywgLi4uXVxuICogICB9LFxuICogICBhbmRyb2lkOiB7XG4gKiAgICAgb3NWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICBhcHBWZXJzaW9uOiAnPjEuMC4wJyBvciAnPj0xLjAuMCcgb3IgJzwxLjAuMCcgb3IgJzw9MS4wLjAnIG9yICcxLjAuMCdcbiAqICAgICB3ZWV4VmVyc2lvbjogJz4xLjAuMCcgb3IgJz49MS4wLjAnIG9yICc8MS4wLjAnIG9yICc8PTEuMC4wJyBvciAnMS4wLjAnXG4gKiAgICAgZGV2aWNlTW9kZWw6IFsnbW9kZWxBJywgJ21vZGVsQicsIC4uLl1cbiAqICAgfVxuICogfVxuICpcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRldmljZUluZm8gV2VleCBTREsgZnJhbWV3b3JrIGlucHV0XG4gKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZyAgICAgdXNlciBpbnB1dFxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgIHsgaXNEb3duZ3JhZGU6IHRydWUvZmFsc2UsIGVycm9yTWVzc2FnZS4uLiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVjayAoY29uZmlnLCBkZXZpY2VJbmZvKSB7XG4gIGRldmljZUluZm8gPSBkZXZpY2VJbmZvIHx8IGdsb2JhbC5XWEVudmlyb25tZW50XG4gIGRldmljZUluZm8gPSBpc1BsYWluT2JqZWN0KGRldmljZUluZm8pID8gZGV2aWNlSW5mbyA6IHt9XG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICBpc0Rvd25ncmFkZTogZmFsc2UgLy8gZGVmYXV0bCBpcyBwYXNzXG4gIH1cblxuICBpZiAodHlwb2YoY29uZmlnKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxldCBjdXN0b21Eb3duZ3JhZGUgPSBjb25maWcuY2FsbCh0aGlzLCBkZXZpY2VJbmZvLCB7XG4gICAgICBzZW12ZXI6IHNlbXZlcixcbiAgICAgIG5vcm1hbGl6ZVZlcnNpb246IHRoaXMubm9ybWFsaXplVmVyc2lvblxuICAgIH0pXG5cbiAgICBjdXN0b21Eb3duZ3JhZGUgPSAhIWN1c3RvbURvd25ncmFkZVxuXG4gICAgcmVzdWx0ID0gY3VzdG9tRG93bmdyYWRlID8gdGhpcy5nZXRFcnJvcignY3VzdG9tJywgJycsICdjdXN0b20gcGFyYW1zJykgOiByZXN1bHRcbiAgfVxuICBlbHNlIHtcbiAgICBjb25maWcgPSBpc1BsYWluT2JqZWN0KGNvbmZpZykgPyBjb25maWcgOiB7fVxuXG4gICAgY29uc3QgcGxhdGZvcm0gPSBkZXZpY2VJbmZvLnBsYXRmb3JtIHx8ICd1bmtub3cnXG4gICAgY29uc3QgZFBsYXRmb3JtID0gcGxhdGZvcm0udG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGNPYmogPSBjb25maWdbZFBsYXRmb3JtXSB8fCB7fVxuXG4gICAgZm9yIChjb25zdCBpIGluIGRldmljZUluZm8pIHtcbiAgICAgIGNvbnN0IGtleSA9IGlcbiAgICAgIGNvbnN0IGtleUxvd2VyID0ga2V5LnRvTG93ZXJDYXNlKClcbiAgICAgIGNvbnN0IHZhbCA9IGRldmljZUluZm9baV1cbiAgICAgIGNvbnN0IGlzVmVyc2lvbiA9IGtleUxvd2VyLmluZGV4T2YoJ3ZlcnNpb24nKSA+PSAwXG4gICAgICBjb25zdCBpc0RldmljZU1vZGVsID0ga2V5TG93ZXIuaW5kZXhPZignZGV2aWNlbW9kZWwnKSA+PSAwXG4gICAgICBjb25zdCBjcml0ZXJpYSA9IGNPYmpbaV1cblxuICAgICAgaWYgKGNyaXRlcmlhICYmIGlzVmVyc2lvbikge1xuICAgICAgICBjb25zdCBjID0gdGhpcy5ub3JtYWxpemVWZXJzaW9uKGNyaXRlcmlhKVxuICAgICAgICBjb25zdCBkID0gdGhpcy5ub3JtYWxpemVWZXJzaW9uKGRldmljZUluZm9baV0pXG5cbiAgICAgICAgaWYgKHNlbXZlci5zYXRpc2ZpZXMoZCwgYykpIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEVycm9yKGtleSwgdmFsLCBjcml0ZXJpYSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0RldmljZU1vZGVsKSB7XG4gICAgICAgIGNvbnN0IF9jcml0ZXJpYSA9IHR5cG9mKGNyaXRlcmlhKSA9PT0gJ2FycmF5JyA/IGNyaXRlcmlhIDogW2NyaXRlcmlhXVxuICAgICAgICBpZiAoX2NyaXRlcmlhLmluZGV4T2YodmFsKSA+PSAwKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRFcnJvcihrZXksIHZhbCwgY3JpdGVyaWEpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvZG93bmdyYWRlLmpzXG4gKiovIiwiY29uc3QgV0VFWF9DT01QT05FTlRfUkVHID0gL15Ad2VleC1jb21wb25lbnRcXC8vXG5jb25zdCBXRUVYX01PRFVMRV9SRUcgPSAvXkB3ZWV4LW1vZHVsZVxcLy9cbmNvbnN0IE5PUk1BTF9NT0RVTEVfUkVHID0gL15cXC57MSwyfVxcLy9cbmNvbnN0IEpTX1NVUkZJWF9SRUcgPSAvXFwuanMkL1xuXG5leHBvcnQgY29uc3QgaXNXZWV4Q29tcG9uZW50ID0gbmFtZSA9PiAhIW5hbWUubWF0Y2goV0VFWF9DT01QT05FTlRfUkVHKVxuZXhwb3J0IGNvbnN0IGlzV2VleE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKFdFRVhfTU9EVUxFX1JFRylcbmV4cG9ydCBjb25zdCBpc05vcm1hbE1vZHVsZSA9IG5hbWUgPT4gISFuYW1lLm1hdGNoKE5PUk1BTF9NT0RVTEVfUkVHKVxuZXhwb3J0IGNvbnN0IGlzTnBtTW9kdWxlID0gbmFtZSA9PiAhaXNXZWV4Q29tcG9uZW50KG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNXZWV4TW9kdWxlKG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNOb3JtYWxNb2R1bGUobmFtZSlcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdlZXhQcmVmaXggKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoV0VFWF9DT01QT05FTlRfUkVHLCAnJylcbiAgICAgICAgICAucmVwbGFjZShXRUVYX01PRFVMRV9SRUcsICcnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSlNTdXJmaXggKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoSlNfU1VSRklYX1JFRywgJycpXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2J1bmRsZS9taXNjLmpzXG4gKiovIiwiaW1wb3J0IHsgdHlwb2YgfSBmcm9tICcuLi8uLi91dGlsJ1xuaW1wb3J0IFZtIGZyb20gJy4uLy4uL3ZtJ1xuaW1wb3J0IHtcbiAgaXNXZWV4Q29tcG9uZW50LFxuICBpc1dlZXhNb2R1bGUsXG4gIGlzTm9ybWFsTW9kdWxlLFxuICBpc05wbU1vZHVsZSxcbiAgcmVtb3ZlV2VleFByZWZpeCxcbiAgcmVtb3ZlSlNTdXJmaXhcbn0gZnJvbSAnLi9taXNjJ1xuXG5sZXQgY29tbW9uTW9kdWxlcyA9IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbW1vbk1vZHVsZXMgKCkge1xuICBjb21tb25Nb2R1bGVzID0ge31cbn1cblxuLy8gZGVmaW5lKG5hbWUsIGZhY3RvcnkpIGZvciBwcmltYXJ5IHVzYWdlXG4vLyBvclxuLy8gZGVmaW5lKG5hbWUsIGRlcHMsIGZhY3RvcnkpIGZvciBjb21wYXRpYmlsaXR5XG4vLyBOb3RpY2U6IERPIE5PVCB1c2UgZnVuY3Rpb24gZGVmaW5lKCkge30sXG4vLyBpdCB3aWxsIGNhdXNlIGVycm9yIGFmdGVyIGJ1aWxkZWQgYnkgd2VicGFja1xuZXhwb3J0IGNvbnN0IGRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCBkZXBzLCBmYWN0b3J5KSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGRlZmluZSBhIGNvbXBvbmVudCAke25hbWV9YClcblxuICBpZiAodHlwb2YoZGVwcykgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmYWN0b3J5ID0gZGVwc1xuICAgIGRlcHMgPSBbXVxuICB9XG5cbiAgY29uc3QgX3JlcXVpcmUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBjbGVhbk5hbWVcblxuICAgIGlmIChpc1dlZXhDb21wb25lbnQobmFtZSkpIHtcbiAgICAgIGNsZWFuTmFtZSA9IHJlbW92ZVdlZXhQcmVmaXgobmFtZSlcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVDb21wb25lbnQoY2xlYW5OYW1lKVxuICAgIH1cbiAgICBpZiAoaXNXZWV4TW9kdWxlKG5hbWUpKSB7XG4gICAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG4gICAgICByZXR1cm4gdGhpcy5yZXF1aXJlTW9kdWxlKGNsZWFuTmFtZSlcbiAgICB9XG4gICAgaWYgKGlzTm9ybWFsTW9kdWxlKG5hbWUpKSB7XG4gICAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgICAgcmV0dXJuIGNvbW1vbk1vZHVsZXNbbmFtZV1cbiAgICB9XG4gICAgaWYgKGlzTnBtTW9kdWxlKG5hbWUpKSB7XG4gICAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuICAgICAgcmV0dXJuIGNvbW1vbk1vZHVsZXNbbmFtZV1cbiAgICB9XG4gIH1cbiAgY29uc3QgX21vZHVsZSA9IHsgZXhwb3J0czoge319XG5cbiAgbGV0IGNsZWFuTmFtZVxuICBpZiAoaXNXZWV4Q29tcG9uZW50KG5hbWUpKSB7XG4gICAgY2xlYW5OYW1lID0gcmVtb3ZlV2VleFByZWZpeChuYW1lKVxuXG4gICAgZmFjdG9yeShfcmVxdWlyZSwgX21vZHVsZS5leHBvcnRzLCBfbW9kdWxlKVxuXG4gICAgdGhpcy5yZWdpc3RlckNvbXBvbmVudChjbGVhbk5hbWUsIF9tb2R1bGUuZXhwb3J0cylcbiAgfVxuICBlbHNlIGlmIChpc1dlZXhNb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVXZWV4UHJlZml4KG5hbWUpXG5cbiAgICBmYWN0b3J5KF9yZXF1aXJlLCBfbW9kdWxlLmV4cG9ydHMsIF9tb2R1bGUpXG5cbiAgICBWbS5yZWdpc3Rlck1vZHVsZXMoe1xuICAgICAgW2NsZWFuTmFtZV06IF9tb2R1bGUuZXhwb3J0c1xuICAgIH0pXG4gIH1cbiAgZWxzZSBpZiAoaXNOb3JtYWxNb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuXG4gICAgZmFjdG9yeShfcmVxdWlyZSwgX21vZHVsZS5leHBvcnRzLCBfbW9kdWxlKVxuXG4gICAgY29tbW9uTW9kdWxlc1tjbGVhbk5hbWVdID0gX21vZHVsZS5leHBvcnRzXG4gIH1cbiAgZWxzZSBpZiAoaXNOcG1Nb2R1bGUobmFtZSkpIHtcbiAgICBjbGVhbk5hbWUgPSByZW1vdmVKU1N1cmZpeChuYW1lKVxuXG4gICAgZmFjdG9yeShfcmVxdWlyZSwgX21vZHVsZS5leHBvcnRzLCBfbW9kdWxlKVxuXG4gICAgY29uc3QgZXhwb3J0cyA9IF9tb2R1bGUuZXhwb3J0c1xuICAgIGlmIChleHBvcnRzLnRlbXBsYXRlIHx8XG4gICAgICAgIGV4cG9ydHMuc3R5bGUgfHxcbiAgICAgICAgZXhwb3J0cy5tZXRob2RzKSB7XG4gICAgICAvLyBkb3duZ3JhZGUgdG8gb2xkIGRlZmluZSBtZXRob2QgKGRlZmluZSgnY29tcG9uZW50TmFtZScsIGZhY3RvcnkpKVxuICAgICAgLy8gdGhlIGV4cG9ydHMgY29udGFpbiBvbmUga2V5IG9mIHRlbXBsYXRlLCBzdHlsZSBvciBtZXRob2RzXG4gICAgICAvLyBidXQgaXQgaGFzIHJpc2shISFcbiAgICAgIHRoaXMucmVnaXN0ZXJDb21wb25lbnQoY2xlYW5OYW1lLCBleHBvcnRzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbW1vbk1vZHVsZXNbY2xlYW5OYW1lXSA9IF9tb2R1bGUuZXhwb3J0c1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlciAodHlwZSwgb3B0aW9ucykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFJlZ2lzdGVyIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSBpbnN0YWxsIGxhc3Rlc3QgdHJhbnNmb3JtZXIuJylcbiAgdGhpcy5yZWdpc3RlckNvbXBvbmVudCh0eXBlLCBvcHRpb25zKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9idW5kbGUvZGVmaW5lLmpzXG4gKiovIiwiLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBpbnN0YW5jZSBjb250cm9scyBmcm9tIG5hdGl2ZVxuICpcbiAqIC0gZmlyZSBldmVudFxuICogLSBjYWxsYmFja1xuICogLSBkZXN0cm95XG4gKlxuICogY29ycmVzcG9uZGVkIHdpdGggdGhlIEFQSSBvZiBpbnN0YW5jZSBtYW5hZ2VyIChmcmFtZXdvcmsuanMpXG4gKi9cbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uL3V0aWwnXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBY3Rpb25zICgpIHtcbiAgdGhpcy5kaWZmZXIuZmx1c2goKVxuICBjb25zdCB0YXNrcyA9IFtdXG4gIGlmICh0aGlzLmRvYyAmJiB0aGlzLmRvYy5saXN0ZW5lciAmJiB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVzLmxlbmd0aCkge1xuICAgIHRhc2tzLnB1c2goLi4udGhpcy5kb2MubGlzdGVuZXIudXBkYXRlcylcbiAgICB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVzID0gW11cbiAgfVxuICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbFRhc2tzKHRhc2tzKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgY29uc29sZS5kZWJ1ZyhgW0pTIEZyYW1ld29ya10gRGVzdG9yeSBhbiBpbnN0YW5jZSgke3RoaXMuaWR9KWApXG5cbiAgdGhpcy5pZCA9ICcnXG4gIHRoaXMub3B0aW9ucyA9IG51bGxcbiAgdGhpcy5ibG9ja3MgPSBudWxsXG4gIHRoaXMudm0gPSBudWxsXG4gIHRoaXMuZG9jID0gbnVsbFxuICB0aGlzLmN1c3RvbUNvbXBvbmVudE1hcCA9IG51bGxcbiAgdGhpcy5jYWxsYmFja3MgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290RWxlbWVudCAoKSB7XG4gIGNvbnN0IGRvYyA9IHRoaXMuZG9jIHx8IHt9XG4gIGNvbnN0IGJvZHkgPSBkb2MuYm9keSB8fCB7fVxuICByZXR1cm4gYm9keS50b0pTT04gPyBib2R5LnRvSlNPTigpIDoge31cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpcmVFdmVudCAocmVmLCB0eXBlLCBlLCBkb21DaGFuZ2VzKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIEZpcmUgYSBcIiR7dHlwZX1cIiBldmVudCBvbiBhbiBlbGVtZW50KCR7cmVmfSkgaW4gaW5zdGFuY2UoJHt0aGlzLmlkfSlgKVxuICBpZiAoQXJyYXkuaXNBcnJheShyZWYpKSB7XG4gICAgcmVmLnNvbWUoKHJlZikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZmlyZUV2ZW50KHJlZiwgdHlwZSwgZSkgIT09IGZhbHNlXG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGVsID0gdGhpcy5kb2MuZ2V0UmVmKHJlZilcblxuICBpZiAoZWwpIHtcbiAgICB0aGlzLmRvYy5jbG9zZSgpXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kb2MuZmlyZUV2ZW50KGVsLCB0eXBlLCBlLCBkb21DaGFuZ2VzKVxuICAgIHRoaXMudXBkYXRlQWN0aW9ucygpXG4gICAgdGhpcy5kb2MubGlzdGVuZXIudXBkYXRlRmluaXNoKClcbiAgICB0aGlzLmRvYy5vcGVuKClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGVsZW1lbnQgcmVmZXJlbmNlIFwiJHtyZWZ9XCJgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2sgKGNhbGxiYWNrSWQsIGRhdGEsIGlmS2VlcEFsaXZlKSB7XG4gIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIEludm9rZSBhIGNhbGxiYWNrKCR7Y2FsbGJhY2tJZH0pIHdpdGhgLCBkYXRhLFxuICAgICAgICAgICAgYGluIGluc3RhbmNlKCR7dGhpcy5pZH0pYClcblxuICBjb25zdCBjYWxsYmFjayA9IHRoaXMuY2FsbGJhY2tzW2NhbGxiYWNrSWRdXG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZG9jLmNsb3NlKClcbiAgICBjYWxsYmFjayhkYXRhKSAvLyBkYXRhIGlzIGFscmVhZHkgYSBvYmplY3QsIEBzZWU6IGxpYi9ydW50aW1lL2luZGV4LmpzXG5cbiAgICBpZiAodHlwZW9mIGlmS2VlcEFsaXZlID09PSAndW5kZWZpbmVkJyB8fCBpZktlZXBBbGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY2FsbGJhY2tzW2NhbGxiYWNrSWRdID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVBY3Rpb25zKClcbiAgICB0aGlzLmRvYy5saXN0ZW5lci51cGRhdGVGaW5pc2goKVxuICAgIHRoaXMuZG9jLm9wZW4oKVxuICAgIHJldHVyblxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBjYWxsYmFjayBpZCBcIiR7Y2FsbGJhY2tJZH1cImApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoRGF0YSAoZGF0YSkge1xuICBjb25zb2xlLmRlYnVnKGBbSlMgRnJhbWV3b3JrXSBSZWZyZXNoIHdpdGhgLCBkYXRhLFxuICAgICAgICAgICAgYGluIGluc3RhbmNlWyR7dGhpcy5pZH1dYClcblxuICBjb25zdCB2bSA9IHRoaXMudm1cblxuICBpZiAodm0gJiYgZGF0YSkge1xuICAgIHRoaXMuZG9jLmNsb3NlKClcbiAgICBpZiAodHlwZW9mIHZtLnJlZnJlc2hEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2bS5yZWZyZXNoRGF0YShkYXRhKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV4dGVuZCh2bSwgZGF0YSlcbiAgICB9XG4gICAgdGhpcy51cGRhdGVBY3Rpb25zKClcbiAgICB0aGlzLmRvYy5saXN0ZW5lci5yZWZyZXNoRmluaXNoKClcbiAgICB0aGlzLmRvYy5vcGVuKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgZGF0YSBcIiR7ZGF0YX1cImApXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBwL2N0cmwvbWlzYy5qc1xuICoqLyIsImltcG9ydCB7IGV4dGVuZCwgdHlwb2YgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IERpZmZlciBmcm9tICcuL2RpZmZlcidcbmltcG9ydCByZW5kZXJlciBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudCwgcmVxdWlyZUNvbXBvbmVudCwgcmVxdWlyZU1vZHVsZSB9IGZyb20gJy4vcmVnaXN0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcEluc3RhbmNlIChpbnN0YW5jZUlkLCBvcHRpb25zKSB7XG4gIHRoaXMuaWQgPSBpbnN0YW5jZUlkXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgdGhpcy52bSA9IG51bGxcbiAgdGhpcy5jdXN0b21Db21wb25lbnRNYXAgPSB7fVxuICB0aGlzLmNhbGxiYWNrcyA9IHt9XG4gIHRoaXMuZG9jID0gbmV3IHJlbmRlcmVyLkRvY3VtZW50KFxuICAgIGluc3RhbmNlSWQsXG4gICAgdGhpcy5vcHRpb25zLmJ1bmRsZVVybCxcbiAgICBudWxsLFxuICAgIHJlbmRlcmVyLkxpc3RlbmVyXG4gIClcbiAgdGhpcy5kaWZmZXIgPSBuZXcgRGlmZmVyKGluc3RhbmNlSWQpXG4gIHRoaXMudWlkID0gMFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemUgKGFwcCwgdikge1xuICBjb25zdCB0eXBlID0gdHlwb2YodilcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgIGNhc2UgJ251bGwnOlxuICAgICAgcmV0dXJuICcnXG4gICAgY2FzZSAncmVnZXhwJzpcbiAgICAgIHJldHVybiB2LnRvU3RyaW5nKClcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiB2LnRvSVNPU3RyaW5nKClcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAnYXJyYXknOlxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAodiBpbnN0YW5jZW9mIHJlbmRlcmVyLkVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHYucmVmXG4gICAgICB9XG4gICAgICByZXR1cm4gdlxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIGFwcC5jYWxsYmFja3NbKythcHAudWlkXSA9IHZcbiAgICAgIHJldHVybiBhcHAudWlkLnRvU3RyaW5nKClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpXG4gIH1cbn1cblxuQXBwSW5zdGFuY2UucHJvdG90eXBlLmNhbGxUYXNrcyA9IGZ1bmN0aW9uICh0YXNrcykge1xuICBpZiAodHlwb2YodGFza3MpICE9PSAnYXJyYXknKSB7XG4gICAgdGFza3MgPSBbdGFza3NdXG4gIH1cblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgdGFzay5hcmdzID0gdGFzay5hcmdzLm1hcChhcmcgPT4gbm9ybWFsaXplKHRoaXMsIGFyZykpXG4gIH0pXG5cbiAgcmV0dXJuIHJlbmRlcmVyLnNlbmRUYXNrcyh0aGlzLmlkLCB0YXNrcywgJy0xJylcbn1cblxuZXh0ZW5kKEFwcEluc3RhbmNlLnByb3RvdHlwZSwge1xuICByZWdpc3RlckNvbXBvbmVudCxcbiAgcmVxdWlyZUNvbXBvbmVudCxcbiAgcmVxdWlyZU1vZHVsZVxufSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaHRtbDUvZGVmYXVsdC9hcHAvaW5zdGFuY2UuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWZmZXIge1xuICBjb25zdHJ1Y3RvciAoaWQpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm1hcCA9IFtdXG4gICAgdGhpcy5ob29rcyA9IFtdXG4gIH1cbiAgaXNFbXB0eSAoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmxlbmd0aCA9PT0gMFxuICB9XG4gIGFwcGVuZCAodHlwZSwgZGVwdGgsIHJlZiwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5oYXNUaW1lcikge1xuICAgICAgdGhpcy5oYXNUaW1lciA9IHRydWVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhhc1RpbWVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5mbHVzaCh0cnVlKVxuICAgICAgfSwgMClcbiAgICB9XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBcbiAgICBpZiAoIW1hcFtkZXB0aF0pIHtcbiAgICAgIG1hcFtkZXB0aF0gPSB7fVxuICAgIH1cbiAgICBjb25zdCBncm91cCA9IG1hcFtkZXB0aF1cbiAgICBpZiAoIWdyb3VwW3R5cGVdKSB7XG4gICAgICBncm91cFt0eXBlXSA9IHt9XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICAgIGlmICghZ3JvdXBbdHlwZV1bcmVmXSkge1xuICAgICAgICBncm91cFt0eXBlXVtyZWZdID0gW11cbiAgICAgIH1cbiAgICAgIGdyb3VwW3R5cGVdW3JlZl0ucHVzaChoYW5kbGVyKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGdyb3VwW3R5cGVdW3JlZl0gPSBoYW5kbGVyXG4gICAgfVxuICB9XG4gIGZsdXNoIChpc1RpbWVvdXQpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcC5zbGljZSgpXG4gICAgdGhpcy5tYXAubGVuZ3RoID0gMFxuICAgIG1hcC5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgY2FsbFR5cGVNYXAoZ3JvdXAsICdyZXBlYXQnKVxuICAgICAgY2FsbFR5cGVNYXAoZ3JvdXAsICdzaG93bicpXG4gICAgICBjYWxsVHlwZUxpc3QoZ3JvdXAsICdlbGVtZW50JylcbiAgICB9KVxuXG4gICAgY29uc3QgaG9va3MgPSB0aGlzLmhvb2tzLnNsaWNlKClcbiAgICB0aGlzLmhvb2tzLmxlbmd0aCA9IDBcbiAgICBob29rcy5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgZm4oKVxuICAgIH0pXG5cbiAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aGlzLmZsdXNoKClcbiAgICB9XG4gIH1cbiAgdGhlbiAoZm4pIHtcbiAgICB0aGlzLmhvb2tzLnB1c2goZm4pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFR5cGVNYXAgKGdyb3VwLCB0eXBlKSB7XG4gIGNvbnN0IG1hcCA9IGdyb3VwW3R5cGVdXG4gIGZvciAoY29uc3QgcmVmIGluIG1hcCkge1xuICAgIG1hcFtyZWZdKClcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsVHlwZUxpc3QgKGdyb3VwLCB0eXBlKSB7XG4gIGNvbnN0IG1hcCA9IGdyb3VwW3R5cGVdXG4gIGZvciAoY29uc3QgcmVmIGluIG1hcCkge1xuICAgIGNvbnN0IGxpc3QgPSBtYXBbcmVmXVxuICAgIGxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4geyBoYW5kbGVyKCkgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwcC9kaWZmZXIuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgaW5zdGFuY2VNYXAgPSB7fVxuXG5nbG9iYWwuX19pbnN0YW5jZU1hcCA9IGluc3RhbmNlTWFwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvc3RhdGljL21hcC5qc1xuICoqLyIsImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IHsgaW5zdGFuY2VNYXAgfSBmcm9tICcuL21hcCdcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQgKGNmZykge1xuICBjb25maWcuRG9jdW1lbnQgPSBjZmcuRG9jdW1lbnRcbiAgY29uZmlnLkVsZW1lbnQgPSBjZmcuRWxlbWVudFxuICBjb25maWcuQ29tbWVudCA9IGNmZy5Db21tZW50XG4gIGNvbmZpZy5zZW5kVGFza3MgPSBjZmcuc2VuZFRhc2tzXG4gIGNvbmZpZy5MaXN0ZW5lciA9IGNmZy5MaXN0ZW5lclxufVxuXG4vKipcbiAqIHJlZnJlc2ggYSBXZWV4IGluc3RhbmNlXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hJbnN0YW5jZSAoaW5zdGFuY2VJZCwgZGF0YSkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIGxldCByZXN1bHRcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmVzdWx0ID0gaW5zdGFuY2UucmVmcmVzaERhdGEoZGF0YSlcbiAgfVxuICBlbHNlIHtcbiAgICByZXN1bHQgPSBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCJgKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBkZXN0cm95IGEgV2VleCBpbnN0YW5jZVxuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95SW5zdGFuY2UgKGluc3RhbmNlSWQpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBpbnN0YW5jZU1hcFtpbnN0YW5jZUlkXVxuICBpZiAoIWluc3RhbmNlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aW5zdGFuY2VJZH1cImApXG4gIH1cblxuICBpbnN0YW5jZS5kZXN0cm95KClcbiAgZGVsZXRlIGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIHJldHVybiBpbnN0YW5jZU1hcFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9saWZlLmpzXG4gKiovIiwiaW1wb3J0IFZtIGZyb20gJy4uL3ZtJ1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXG5cbmNvbnN0IHtcbiAgbmF0aXZlQ29tcG9uZW50TWFwXG59ID0gY29uZmlnXG5cbi8qKlxuICogcmVnaXN0ZXIgdGhlIG5hbWUgb2YgZWFjaCBuYXRpdmUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHthcnJheX0gY29tcG9uZW50cyBhcnJheSBvZiBuYW1lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudHMgKGNvbXBvbmVudHMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29tcG9uZW50cykpIHtcbiAgICBjb21wb25lbnRzLmZvckVhY2goZnVuY3Rpb24gcmVnaXN0ZXIgKG5hbWUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYXRpdmVDb21wb25lbnRNYXBbbmFtZV0gPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG5hbWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmF0aXZlQ29tcG9uZW50TWFwW25hbWUudHlwZV0gPSBuYW1lXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIHJlZ2lzdGVyIHRoZSBuYW1lIGFuZCBtZXRob2RzIG9mIGVhY2ggbW9kdWxlXG4gKiBAcGFyYW0gIHtvYmplY3R9IG1vZHVsZXMgYSBvYmplY3Qgb2YgbW9kdWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGVzIChtb2R1bGVzKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ29iamVjdCcpIHtcbiAgICBWbS5yZWdpc3Rlck1vZHVsZXMobW9kdWxlcylcbiAgfVxufVxuXG4vKipcbiAqIHJlZ2lzdGVyIHRoZSBuYW1lIGFuZCBtZXRob2RzIG9mIGVhY2ggYXBpXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFwaXMgYSBvYmplY3Qgb2YgYXBpc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJNZXRob2RzIChhcGlzKSB7XG4gIGlmICh0eXBlb2YgYXBpcyA9PT0gJ29iamVjdCcpIHtcbiAgICBWbS5yZWdpc3Rlck1ldGhvZHMoYXBpcylcbiAgfVxufVxuZ2xvYmFsLnJlZ2lzdGVyTWV0aG9kcyA9IHJlZ2lzdGVyTWV0aG9kc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9yZWdpc3Rlci5qc1xuICoqLyIsImltcG9ydCB7IGluc3RhbmNlTWFwIH0gZnJvbSAnLi9tYXAnXG5cbmNvbnN0IGpzSGFuZGxlcnMgPSB7XG4gIGZpcmVFdmVudDogZnVuY3Rpb24gZmlyZUV2ZW50IChpbnN0YW5jZUlkLCByZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gICAgcmV0dXJuIGluc3RhbmNlLmZpcmVFdmVudChyZWYsIHR5cGUsIGRhdGEsIGRvbUNoYW5nZXMpXG4gIH0sXG5cbiAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrIChpbnN0YW5jZUlkLCBmdW5jSWQsIGRhdGEsIGlmTGFzdCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgICByZXR1cm4gaW5zdGFuY2UuY2FsbGJhY2soZnVuY0lkLCBkYXRhLCBpZkxhc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBhY2NlcHQgY2FsbHMgZnJvbSBuYXRpdmUgKGV2ZW50IG9yIGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaW5zdGFuY2VJZFxuICogQHBhcmFtICB7YXJyYXl9IHRhc2tzIGxpc3Qgd2l0aCBgbWV0aG9kYCBhbmQgYGFyZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlVGFza3MgKGluc3RhbmNlSWQsIHRhc2tzKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gaW5zdGFuY2VNYXBbaW5zdGFuY2VJZF1cbiAgaWYgKGluc3RhbmNlICYmIEFycmF5LmlzQXJyYXkodGFza3MpKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlciA9IGpzSGFuZGxlcnNbdGFzay5tZXRob2RdXG4gICAgICBjb25zdCBhcmdzID0gWy4uLnRhc2suYXJnc11cbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoaW5zdGFuY2VJZClcbiAgICAgICAgcmVzdWx0cy5wdXNoKGhhbmRsZXIoLi4uYXJncykpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIHJldHVybiBuZXcgRXJyb3IoYGludmFsaWQgaW5zdGFuY2UgaWQgXCIke2luc3RhbmNlSWR9XCIgb3IgdGFza3NgKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9icmlkZ2UuanNcbiAqKi8iLCJpbXBvcnQgeyBpbnN0YW5jZU1hcCB9IGZyb20gJy4vbWFwJ1xuXG4vKipcbiAqIGdldCBhIHdob2xlIGVsZW1lbnQgdHJlZSBvZiBhbiBpbnN0YW5jZVxuICogZm9yIGRlYnVnZ2luZ1xuICogQHBhcmFtICB7c3RyaW5nfSBpbnN0YW5jZUlkXG4gKiBAcmV0dXJuIHtvYmplY3R9IGEgdmlydHVhbCBkb20gdHJlZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdCAoaW5zdGFuY2VJZCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbmNlTWFwW2luc3RhbmNlSWRdXG4gIGxldCByZXN1bHRcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmVzdWx0ID0gaW5zdGFuY2UuZ2V0Um9vdEVsZW1lbnQoKVxuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IG5ldyBFcnJvcihgaW52YWxpZCBpbnN0YW5jZSBpZCBcIiR7aW5zdGFuY2VJZH1cImApXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L3N0YXRpYy9taXNjLmpzXG4gKiovIiwibGV0IGZyYW1ld29ya3NcblxuY29uc3QgdmVyc2lvblJlZ0V4cCA9IC9eXFwvXFwvICooXFx7W15cXH1dKlxcfSkgKlxccj9cXG4vXG5cbmZ1bmN0aW9uIGNoZWNrVmVyc2lvbiAoY29kZSkge1xuICBsZXQgaW5mb1xuICBjb25zdCByZXN1bHQgPSB2ZXJzaW9uUmVnRXhwLmV4ZWMoY29kZSlcbiAgaWYgKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICBpbmZvID0gSlNPTi5wYXJzZShyZXN1bHRbMV0pXG4gICAgfVxuICAgIGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiBpbmZvXG59XG5cbmNvbnN0IGluc3RhbmNlTWFwID0ge31cblxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UgKGlkLCBjb2RlLCBjb25maWcsIGRhdGEpIHtcbiAgbGV0IGluZm8gPSBpbnN0YW5jZU1hcFtpZF1cbiAgaWYgKCFpbmZvKSB7XG4gICAgaW5mbyA9IGNoZWNrVmVyc2lvbihjb2RlKSB8fCB7fVxuICAgIGlmICghZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIGluZm8uZnJhbWV3b3JrID0gJ1dlZXgnXG4gICAgfVxuICAgIGluc3RhbmNlTWFwW2lkXSA9IGluZm9cbiAgICBjb25maWcgPSBjb25maWcgfHwge31cbiAgICBjb25maWcuYnVuZGxlVmVyc2lvbiA9IGluZm8udmVyc2lvblxuICAgIGNvbnNvbGUuZGVidWcoYFtKUyBGcmFtZXdvcmtdIGNyZWF0ZSBhbiAke2luZm8uZnJhbWV3b3JrfUAke2NvbmZpZy5idW5kbGVWZXJzaW9ufSBpbnN0YW5jZSBmcm9tICR7Y29uZmlnLmJ1bmRsZVZlcnNpb259YClcbiAgICByZXR1cm4gZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10uY3JlYXRlSW5zdGFuY2UoaWQsIGNvZGUsIGNvbmZpZywgZGF0YSlcbiAgfVxuICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG59XG5cbmNvbnN0IG1ldGhvZHMgPSB7XG4gIGNyZWF0ZUluc3RhbmNlXG59XG5cbmZ1bmN0aW9uIGdlbkluaXQgKG1ldGhvZE5hbWUpIHtcbiAgbWV0aG9kc1ttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIGluIGZyYW1ld29ya3MpIHtcbiAgICAgIGNvbnN0IGZyYW1ld29yayA9IGZyYW1ld29ya3NbbmFtZV1cbiAgICAgIGlmIChmcmFtZXdvcmsgJiYgZnJhbWV3b3JrW21ldGhvZE5hbWVdKSB7XG4gICAgICAgIGZyYW1ld29ya1ttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5JbnN0YW5jZSAobWV0aG9kTmFtZSkge1xuICBtZXRob2RzW21ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBpZCA9IGFyZ3NbMF1cbiAgICBjb25zdCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gICAgaWYgKGluZm8gJiYgZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRhcHRJbnN0YW5jZSAobWV0aG9kTmFtZSwgbmF0aXZlTWV0aG9kTmFtZSkge1xuICBtZXRob2RzW25hdGl2ZU1ldGhvZE5hbWVdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBpZCA9IGFyZ3NbMF1cbiAgICBjb25zdCBpbmZvID0gaW5zdGFuY2VNYXBbaWRdXG4gICAgaWYgKGluZm8gJiYgZnJhbWV3b3Jrc1tpbmZvLmZyYW1ld29ya10pIHtcbiAgICAgIHJldHVybiBmcmFtZXdvcmtzW2luZm8uZnJhbWV3b3JrXVttZXRob2ROYW1lXSguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKGBpbnZhbGlkIGluc3RhbmNlIGlkIFwiJHtpZH1cImApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCAoY29uZmlnKSB7XG4gIGZyYW1ld29ya3MgPSBjb25maWcuZnJhbWV3b3JrcyB8fCB7fVxuICBmb3IgKGNvbnN0IG5hbWUgaW4gZnJhbWV3b3Jrcykge1xuICAgIGNvbnN0IGZyYW1ld29yayA9IGZyYW1ld29ya3NbbmFtZV1cbiAgICBmcmFtZXdvcmsuaW5pdChjb25maWcpXG4gIH1cblxuICA7IFsnZGVzdHJveUluc3RhbmNlJywgJ3JlZnJlc2hJbnN0YW5jZScsICdyZWNlaXZlVGFza3MnLCAnZ2V0Um9vdCddLmZvckVhY2goZ2VuSW5zdGFuY2UpXG5cbiAgOyBbJ3JlZ2lzdGVyQ29tcG9uZW50cycsICdyZWdpc3Rlck1vZHVsZXMnLCAncmVnaXN0ZXJNZXRob2RzJ10uZm9yRWFjaChnZW5Jbml0KVxuXG4gIGFkYXB0SW5zdGFuY2UoJ3JlY2VpdmVUYXNrcycsICdjYWxsSlMnKVxuXG4gIHJldHVybiBtZXRob2RzXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L3J1bnRpbWUvaW5pdC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hbWVcIjogXCJ3ZWV4XCIsXG5cdFwidmVyc2lvblwiOiBcIjAuNC4wXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJBIGZyYW1ld29yayBmb3IgYnVpbGRpbmcgTW9iaWxlIGNyb3NzLXBsYXRmb3JtIFVJXCIsXG5cdFwibGljZW5zZVwiOiBcIkFwYWNoZS0yLjBcIixcblx0XCJyZXBvc2l0b3J5XCI6IHtcblx0XHRcInR5cGVcIjogXCJnaXRcIixcblx0XHRcInVybFwiOiBcImdpdEBnaXRodWIuY29tOmFsaWJhYmEvd2VleC5naXRcIlxuXHR9LFxuXHRcImhvbWVwYWdlXCI6IFwiaHR0cDovL2FsaWJhYmEuZ2l0aHViLmlvL3dlZXgvXCIsXG5cdFwiYnVnc1wiOiB7XG5cdFx0XCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYWxpYmFiYS93ZWV4L2lzc3Vlc1wiXG5cdH0sXG5cdFwicHJpdmF0ZVwiOiB0cnVlLFxuXHRcImtleXdvcmRzXCI6IFtcblx0XHRcIndlZXhcIixcblx0XHRcImh5YnJpZFwiLFxuXHRcdFwid2ViY29tcG9uZW50XCIsXG5cdFx0XCJhcHBmcmFtZXdvcmtcIixcblx0XHRcIm12dm1cIixcblx0XHRcImphdmFzY3JpcHRcIixcblx0XHRcIndlYmtpdFwiLFxuXHRcdFwidjhcIixcblx0XHRcImpzY29yZVwiLFxuXHRcdFwiaHRtbDVcIixcblx0XHRcImFuZHJvaWRcIixcblx0XHRcImlvc1wiLFxuXHRcdFwieXVub3NcIlxuXHRdLFxuXHRcImVuZ2luZXNcIjoge1xuXHRcdFwibm9kZVwiOiBcIj49NFwiXG5cdH0sXG5cdFwic2NyaXB0c1wiOiB7XG5cdFx0XCJwb3N0aW5zdGFsbFwiOiBcImJhc2ggLi9iaW4vaW5zdGFsbC1ob29rcy5zaFwiLFxuXHRcdFwiYnVpbGQ6Y29uZmlnXCI6IFwibm9kZSBidWlsZC9jb25maWcuZnJhbWV3b3Jrcy5qc1wiLFxuXHRcdFwiYnVpbGQ6YnJvd3NlclwiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5icm93c2VyLmNvbmZpZy5qc1wiLFxuXHRcdFwiYnVpbGQ6Y29tbW9uXCI6IFwid2VicGFjayAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmNvbW1vbi5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOm5hdGl2ZVwiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5uYXRpdmUuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZDpleGFtcGxlc1wiOiBcIndlYnBhY2sgLS1jb25maWcgYnVpbGQvd2VicGFjay5leGFtcGxlcy5jb25maWcuanNcIixcblx0XHRcImJ1aWxkOnRlc3RcIjogXCJ3ZWJwYWNrIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2sudGVzdC5jb25maWcuanNcIixcblx0XHRcImRpc3Q6YnJvd3NlclwiOiBcIm5wbSBydW4gYnVpbGQ6YnJvd3NlciAmJiBucG0gcnVuIGJ1aWxkOmNvbW1vbiAmJiBiYXNoIC4vYmluL2Rpc3QtYnJvd3Nlci5zaFwiLFxuXHRcdFwiZGlzdFwiOiBcIm5wbSBydW4gZGlzdDpicm93c2VyXCIsXG5cdFx0XCJkZXY6YnJvd3NlclwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLmJyb3dzZXIuY29uZmlnLmpzXCIsXG5cdFx0XCJkZXY6bmF0aXZlXCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2submF0aXZlLmNvbmZpZy5qc1wiLFxuXHRcdFwiZGV2OmV4YW1wbGVzXCI6IFwid2VicGFjayAtLXdhdGNoIC0tY29uZmlnIGJ1aWxkL3dlYnBhY2suZXhhbXBsZXMuY29uZmlnLmpzXCIsXG5cdFx0XCJkZXY6dGVzdFwiOiBcIndlYnBhY2sgLS13YXRjaCAtLWNvbmZpZyBidWlsZC93ZWJwYWNrLnRlc3QuY29uZmlnLmpzXCIsXG5cdFx0XCJidWlsZFwiOiBcIm5wbSBydW4gYnVpbGQ6bmF0aXZlICYmIG5wbSBydW4gYnVpbGQ6YnJvd3NlciAmJiBucG0gcnVuIGJ1aWxkOmV4YW1wbGVzICYmIG5wbSBydW4gYnVpbGQ6dGVzdFwiLFxuXHRcdFwibGludFwiOiBcImVzbGludCBodG1sNVwiLFxuXHRcdFwidGVzdDp1bml0XCI6IFwibW9jaGEgLS1jb21waWxlcnMganM6YmFiZWwtY29yZS9yZWdpc3RlciBodG1sNS90ZXN0L3VuaXQvKi8qLmpzIGh0bWw1L3Rlc3QvdW5pdC8qLyovKi5qc1wiLFxuXHRcdFwidGVzdDpjb3ZlclwiOiBcImJhYmVsLW5vZGUgbm9kZV9tb2R1bGVzL2lzcGFydGEvYmluL2lzcGFydGEgY292ZXIgLS1yZXBvcnQgdGV4dCBub2RlX21vZHVsZXMvbW9jaGEvYmluL19tb2NoYSAtLSAtLXJlcG9ydGVyIGRvdCBodG1sNS90ZXN0L3VuaXQvKi8qLmpzIGh0bWw1L3Rlc3QvdW5pdC8qLyovKi5qc1wiLFxuXHRcdFwidGVzdDplMmVcIjogXCJucG0gcnVuIGJ1aWxkOmJyb3dzZXIgJiYgbm9kZSBodG1sNS90ZXN0L2UyZS9ydW5uZXIuanNcIixcblx0XHRcInRlc3RcIjogXCJucG0gcnVuIGJ1aWxkOmNvbmZpZyAmJiBucG0gcnVuIGxpbnQgJiYgbnBtIHJ1biB0ZXN0OmNvdmVyICYmIG5wbSBydW4gdGVzdDplMmVcIixcblx0XHRcInNlcnZlXCI6IFwic2VydmUgLi8gLXAgMTI1ODBcIixcblx0XHRcImNsZWFuOmV4YW1wbGVzXCI6IFwiZWNobyBcXFwiXFxcXDAzM1szNjsxbVtDbGVhbl1cXFxcMDMzWzBtIFxcXFwwMzNbMzNtZXhhbXBsZXNcXFxcMDMzWzBtXFxcIiAmJiBybSAtdnJmIGV4YW1wbGVzL2J1aWxkLypcIixcblx0XHRcImNsZWFuOnRlc3RcIjogXCJlY2hvIFxcXCJcXFxcMDMzWzM2OzFtW0NsZWFuXVxcXFwwMzNbMG0gXFxcXDAzM1szM210ZXN0XFxcXDAzM1swbVxcXCIgJiYgcm0gLXZyZiB0ZXN0L2J1aWxkLypcIixcblx0XHRcImNsZWFuXCI6IFwibnBtIHJ1biBjbGVhbjpleGFtcGxlcyAmJiBucG0gcnVuIGNsZWFuOnRlc3RcIixcblx0XHRcImNvcHk6anNcIjogXCJjcCAtdmYgLi9kaXN0L25hdGl2ZS5qcyAuL2FuZHJvaWQvc2RrL2Fzc2V0cy9tYWluLmpzICYmIGNwIC12ZiAuL2Rpc3QvbmF0aXZlLmpzIC9Vc2Vycy9saW54NDIwMC9Eb3dubG9hZHMvd2VleC9tYWluLmpzXCIsXG5cdFx0XCJjb3B5OmV4YW1wbGVzXCI6IFwicm0gLXJmIC4vYW5kcm9pZC9wbGF5Z3JvdW5kL2FwcC9zcmMvbWFpbi9hc3NldHMvKiAmJiBjcCAtdnJmIC4vZXhhbXBsZXMvYnVpbGQvKiAuL2FuZHJvaWQvcGxheWdyb3VuZC9hcHAvc3JjL21haW4vYXNzZXRzL1wiLFxuXHRcdFwiY29weVwiOiBcIm5wbSBydW4gY29weTpqcyAmJiBucG0gcnVuIGNvcHk6ZXhhbXBsZXNcIlxuXHR9LFxuXHRcInN1YnZlcnNpb25cIjoge1xuXHRcdFwiYnJvd3NlclwiOiBcIjAuMy4yXCIsXG5cdFx0XCJmcmFtZXdvcmtcIjogXCIwLjE1LjJcIixcblx0XHRcInRyYW5zZm9ybWVyXCI6IFwiPj0wLjEuNSA8MC40XCJcblx0fSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiYW5pbWF0aW9uanNcIjogXCJeMC4xLjVcIixcblx0XHRcImNvcmUtanNcIjogXCJeMi40LjBcIixcblx0XHRcImN1YmljYmV6aWVyXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJlbnZkXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJodHRwdXJsXCI6IFwiXjAuMS4xXCIsXG5cdFx0XCJsYXp5aW1nXCI6IFwiXjAuMS4yXCIsXG5cdFx0XCJtb2RhbHNcIjogXCJeMC4xLjVcIixcblx0XHRcInNjcm9sbC10b1wiOiBcIjAuMC4yXCIsXG5cdFx0XCJzZW12ZXJcIjogXCJeNS4xLjBcIixcblx0XHRcIndlZXgtY29tcG9uZW50c1wiOiBcIl4wLjEuM1wiXG5cdH0sXG5cdFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImJhYmVsLWNsaVwiOiBcIn42LjQuNVwiLFxuXHRcdFwiYmFiZWwtbG9hZGVyXCI6IFwiXjYuMi40XCIsXG5cdFx0XCJiYWJlbC1wcmVzZXQtZXMyMDE1XCI6IFwiXjYuOS4wXCIsXG5cdFx0XCJjaGFpXCI6IFwiXjMuNS4wXCIsXG5cdFx0XCJjaHJvbWVkcml2ZXJcIjogXCJeMi4yMS4yXCIsXG5cdFx0XCJjcm9zcy1zcGF3blwiOiBcIl40LjAuMFwiLFxuXHRcdFwiY3NzLWxvYWRlclwiOiBcIl4wLjIzLjFcIixcblx0XHRcImVzbGludFwiOiBcIl4yLjExLjFcIixcblx0XHRcImh0dHAtc2VydmVyXCI6IFwiXjAuOS4wXCIsXG5cdFx0XCJpc3BhcnRhXCI6IFwiXjQuMC4wXCIsXG5cdFx0XCJpc3RhbmJ1bFwiOiBcIl4wLjQuM1wiLFxuXHRcdFwianNvbi1sb2FkZXJcIjogXCJeMC41LjRcIixcblx0XHRcIm1vY2hhXCI6IFwiXjIuNS4zXCIsXG5cdFx0XCJuaWdodHdhdGNoXCI6IFwiXjAuOS40XCIsXG5cdFx0XCJwaGFudG9tanMtcHJlYnVpbHRcIjogXCJeMi4xLjdcIixcblx0XHRcInNlbGVuaXVtLXNlcnZlclwiOiBcIjIuNTMuMVwiLFxuXHRcdFwic2VydmVcIjogXCJeMS40LjBcIixcblx0XHRcInNpbm9uXCI6IFwiXjEuMTcuNFwiLFxuXHRcdFwic2lub24tY2hhaVwiOiBcIl4yLjguMFwiLFxuXHRcdFwic3R5bGUtbG9hZGVyXCI6IFwiXjAuMTMuMVwiLFxuXHRcdFwidWdsaWZ5LWpzXCI6IFwiXjIuNi40XCIsXG5cdFx0XCJ3ZWJwYWNrXCI6IFwiXjEuMTMuMVwiLFxuXHRcdFwid2VleC1sb2FkZXJcIjogXCJeMC4yLjBcIlxuXHR9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9wYWNrYWdlLmpzb25cbiAqKiBtb2R1bGUgaWQgPSAxMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGZpbGVPdmVydmlldyBUaGUgYXBpIGZvciBpbnZva2luZyB3aXRoIFwiJFwiIHByZWZpeFxuICovXG5pbXBvcnQgeyBleHRlbmQsIHR5cG9mIH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9FdmVudEVtaXR0ZXInXG5jb25zdCBlZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIGNvbW1vblxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlICR2bSBpbnN0ZWFkXG4gKiBmaW5kIHRoZSB2bSBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICQgKGlkKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJCBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFZtIyR2bSBpbnN0ZWFkJylcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogZmluZCB0aGUgZWxlbWVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gJGVsIChpZCkge1xuICBjb25zdCBpbmZvID0gdGhpcy5faWRzW2lkXVxuICBpZiAoaW5mbykge1xuICAgIHJldHVybiBpbmZvLmVsXG4gIH1cbn1cblxuLyoqXG4gKiBmaW5kIHRoZSB2bSBvZiB0aGUgY3VzdG9tIGNvbXBvbmVudCBieSBpZFxuICogTm90ZTogdGhlcmUgaXMgb25seSBvbmUgaWQgaW4gd2hvbGUgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtWbX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICR2bSAoaWQpIHtcbiAgY29uc3QgaW5mbyA9IHRoaXMuX2lkc1tpZF1cbiAgaWYgKGluZm8pIHtcbiAgICByZXR1cm4gaW5mby52bVxuICB9XG59XG5cbi8qKlxuICogRmlyZSB3aGVuIGRpZmZlciByZW5kZXJpbmcgZmluaXNoZWRcbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRyZW5kZXJUaGVuIChmbikge1xuICBjb25zdCBhcHAgPSB0aGlzLl9hcHBcbiAgY29uc3QgZGlmZmVyID0gYXBwLmRpZmZlclxuICByZXR1cm4gZGlmZmVyLnRoZW4oKCkgPT4ge1xuICAgIGZuKClcbiAgfSlcbn1cblxuLyoqXG4gKiBzY3JvbGwgYW4gZWxlbWVudCBzcGVjaWZpZWQgYnkgaWQgaW50byB2aWV3LFxuICogbW9yZW92ZXIgc3BlY2lmeSBhIG51bWJlciBvZiBvZmZzZXQgb3B0aW9uYWxseVxuICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICogQHBhcmFtICB7bnVtYmVyfSBvZmZzZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzY3JvbGxUbyAoaWQsIG9mZnNldCkge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzY3JvbGxUbyBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2RvbVxcJyknICtcbiAgICAgICAgICAnLnNjcm9sbFRvKGVsLCBvcHRpb25zKVwiIGluc3RlYWQnKVxuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwpIHtcbiAgICBjb25zdCBkb20gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgnZG9tJylcbiAgICBkb20uc2Nyb2xsVG9FbGVtZW50KGVsLnJlZiwgeyBvZmZzZXQ6IG9mZnNldCB9KVxuICB9XG59XG5cbi8qKlxuICogcGVyZm9ybSB0cmFuc2l0aW9uIGFuaW1hdGlvbiBvbiBhbiBlbGVtZW50IHNwZWNpZmllZCBieSBpZFxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9uc1xuICogQHBhcmFtICB7b2JqZWN0fSAgIG9wdGlvbnMuc3R5bGVzXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgb3B0aW9ucy5kdXJhdGlvbihtcylcbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy50aW1pbmdGdW5jdGlvbl1cbiAqIEBwYXJhbSAge29iamVjdH0gICBbb3B0aW9ucy5kZWxheT0wKG1zKV1cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gJHRyYW5zaXRpb24gKGlkLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjb25zdCBlbCA9IHRoaXMuJGVsKGlkKVxuICBpZiAoZWwgJiYgb3B0aW9ucyAmJiBvcHRpb25zLnN0eWxlcykge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKVxuICAgIGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLnJlZiwgb3B0aW9ucywgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRoaXMuX3NldFN0eWxlKGVsLCBvcHRpb25zLnN0eWxlcylcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKC4uLmFyZ3MpXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGdldCBzb21lIGNvbmZpZ1xuICogQHJldHVybiB7b2JqZWN0fSBzb21lIGNvbmZpZyBmb3IgYXBwIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYnVuZGxlVXJsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRlYnVnXG4gKiBAcHJvcGVydHkge29iamVjdH0gZW52XG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LndlZXhWZXJzaW9uKGV4LiAxLjAuMClcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBlbnYuYXBwTmFtZShleC4gVEIvVE0pXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmFwcFZlcnNpb24oZXguIDUuMC4wKVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGVudi5wbGF0Zm9ybShleC4gaU9TL0FuZHJvaWQpXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52Lm9zVmVyc2lvbihleC4gNy4wLjApXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZW52LmRldmljZU1vZGVsICoqbmF0aXZlIG9ubHkqKlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5bZGV2aWNlV2lkdGg9NzUwXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVudi5kZXZpY2VIZWlnaHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRnZXRDb25maWcgKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGV4dGVuZCh7XG4gICAgZW52OiBnbG9iYWwuV1hFbnZpcm9ubWVudCB8fCB7fVxuICB9LCB0aGlzLl9hcHAub3B0aW9ucylcbiAgaWYgKHR5cG9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gdGhlIGNhbGxiYWNrIG9mIFZtIyRnZXRDb25maWcoY2FsbGJhY2spIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3RoaXMgYXBpIG5vdyBjYW4gZGlyZWN0bHkgUkVUVVJOIGNvbmZpZyBpbmZvLicpXG4gICAgY2FsbGJhY2soY29uZmlnKVxuICB9XG4gIHJldHVybiBjb25maWdcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogcmVxdWVzdCBuZXR3b3JrIHZpYSBodHRwIHByb3RvY29sXG4gKiBAcGFyYW0gIHtvYmplY3R9ICAgcGFyYW1zXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRzZW5kSHR0cCAocGFyYW1zLCBjYWxsYmFjaykge1xuICBjb25zb2xlLndhcm4oJ1tKUyBGcmFtZXdvcmtdIFZtIyRzZW5kSHR0cCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL3N0cmVhbVxcJyknICtcbiAgICAgICAgICAnLnNlbmRIdHRwKHBhcmFtcywgY2FsbGJhY2spXCIgaW5zdGVhZCcpXG4gIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2FwcC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKVxuICBzdHJlYW0uc2VuZEh0dHAocGFyYW1zLCBjYWxsYmFjaylcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogb3BlbiBhIHVybFxuICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRvcGVuVVJMICh1cmwpIHtcbiAgY29uc29sZS53YXJuKCdbSlMgRnJhbWV3b3JrXSBWbSMkb3BlblVSTCBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICAgICAncGxlYXNlIHVzZSBcInJlcXVpcmUoXFwnQHdlZXgtbW9kdWxlL2V2ZW50XFwnKScgK1xuICAgICAgICAgICcub3BlblVSTCh1cmwpXCIgaW5zdGVhZCcpXG4gIGNvbnN0IGV2ZW50ID0gdGhpcy5fYXBwLnJlcXVpcmVNb2R1bGUoJ2V2ZW50JylcbiAgZXZlbnQub3BlblVSTCh1cmwpXG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHNldCBhIHRpdGxlIGZvciBwYWdlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRpdGxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAkc2V0VGl0bGUgKHRpdGxlKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJHNldFRpdGxlIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgICAgICdwbGVhc2UgdXNlIFwicmVxdWlyZShcXCdAd2VleC1tb2R1bGUvcGFnZUluZm9cXCcpJyArXG4gICAgICAgICAgJy5zZXRUaXRsZSh0aXRsZSlcIiBpbnN0ZWFkJylcbiAgY29uc3QgcGFnZUluZm8gPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZSgncGFnZUluZm8nKVxuICBwYWdlSW5mby5zZXRUaXRsZSh0aXRsZSlcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgXCJyZXF1aXJlKCdAd2VleC1tb2R1bGUvbW9kdWxlTmFtZScpIGluc3RlYWRcIlxuICogaW52b2tlIGEgbmF0aXZlIG1ldGhvZCBieSBzcGVjaWZpbmcgdGhlIG5hbWUgb2YgbW9kdWxlIGFuZCBtZXRob2RcbiAqIEBwYXJhbSAge3N0cmluZ30gbW9kdWxlTmFtZVxuICogQHBhcmFtICB7c3RyaW5nfSBtZXRob2ROYW1lXG4gKiBAcGFyYW0gIHsuLi4qfSB0aGUgcmVzdCBhcmd1bWVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICRjYWxsIChtb2R1bGVOYW1lLCBtZXRob2ROYW1lLCAuLi5hcmdzKSB7XG4gIGNvbnNvbGUud2FybignW0pTIEZyYW1ld29ya10gVm0jJGNhbGwgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgJ3BsZWFzZSB1c2UgXCJyZXF1aXJlKFxcJ0B3ZWV4LW1vZHVsZS9tb2R1bGVOYW1lXFwnKVwiIGluc3RlYWQnKVxuICBjb25zdCBtb2R1bGUgPSB0aGlzLl9hcHAucmVxdWlyZU1vZHVsZShtb2R1bGVOYW1lKVxuICBpZiAobW9kdWxlICYmIG1vZHVsZVttZXRob2ROYW1lXSkge1xuICAgIG1vZHVsZVttZXRob2ROYW1lXSguLi5hcmdzKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkYWRkTGlzdGVuZXIgKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgY29uc29sZS5sb2coJyRhZGRMaXN0ZW5lcjonLCBldmVudE5hbWUpXG4gIGVlLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spXG59XG5cbmV4cG9ydCBmdW5jdGlvbiAkZW1pdEV2ZW50IChldmVudE5hbWUsIHZhbHVlKSB7XG4gIGNvbnNvbGUubG9nKCckZW1pdEV2ZW50OicsIGV2ZW50TmFtZSwgdmFsdWUpXG4gIGVlLmVtaXRFdmVudChldmVudE5hbWUsIHZhbHVlKVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9odG1sNS9kZWZhdWx0L2FwaS9tZXRob2RzLmpzXG4gKiovIiwiLyohXG4gKiBFdmVudEVtaXR0ZXIgdjUuMS4wIC0gZ2l0LmlvL2VlXG4gKiBVbmxpY2Vuc2UgLSBodHRwOi8vdW5saWNlbnNlLm9yZy9cbiAqIE9saXZlciBDYWxkd2VsbCAtIGh0dHA6Ly9vbGkubWUudWsvXG4gKiBAcHJlc2VydmVcbiAqL1xuXG4vLyA7KGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgZm9yIG1hbmFnaW5nIGV2ZW50cy5cbiAgICAgKiBDYW4gYmUgZXh0ZW5kZWQgdG8gcHJvdmlkZSBldmVudCBmdW5jdGlvbmFsaXR5IGluIG90aGVyIGNsYXNzZXMuXG4gICAgICpcbiAgICAgKiBAY2xhc3MgRXZlbnRFbWl0dGVyIE1hbmFnZXMgZXZlbnQgcmVnaXN0ZXJpbmcgYW5kIGVtaXR0aW5nLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHt9XG5cbiAgICAvLyBTaG9ydGN1dHMgdG8gaW1wcm92ZSBzcGVlZCBhbmQgc2l6ZVxuICAgIHZhciBwcm90byA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGU7XG4gICAgLy8gdmFyIG9yaWdpbmFsR2xvYmFsVmFsdWUgPSBleHBvcnRzLkV2ZW50RW1pdHRlcjtcblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSBpbmRleCBvZiB0aGUgbGlzdGVuZXIgZm9yIHRoZSBldmVudCBpbiBpdHMgc3RvcmFnZSBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gbGlzdGVuZXJzIEFycmF5IG9mIGxpc3RlbmVycyB0byBzZWFyY2ggdGhyb3VnaC5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBNZXRob2QgdG8gbG9vayBmb3IuXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBJbmRleCBvZiB0aGUgc3BlY2lmaWVkIGxpc3RlbmVyLCAtMSBpZiBub3QgZm91bmRcbiAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpbmRleE9mTGlzdGVuZXIobGlzdGVuZXJzLCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgaSA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgYSBtZXRob2Qgd2hpbGUga2VlcGluZyB0aGUgY29udGV4dCBjb3JyZWN0LCB0byBhbGxvdyBmb3Igb3ZlcndyaXRpbmcgb2YgdGFyZ2V0IG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0YXJnZXQgbWV0aG9kLlxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgYWxpYXNlZCBtZXRob2RcbiAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhbGlhcyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhbGlhc0Nsb3N1cmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tuYW1lXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3RlbmVyIGFycmF5IGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqIFdpbGwgaW5pdGlhbGlzZSB0aGUgZXZlbnQgb2JqZWN0IGFuZCBsaXN0ZW5lciBhcnJheXMgaWYgcmVxdWlyZWQuXG4gICAgICogV2lsbCByZXR1cm4gYW4gb2JqZWN0IGlmIHlvdSB1c2UgYSByZWdleCBzZWFyY2guIFRoZSBvYmplY3QgY29udGFpbnMga2V5cyBmb3IgZWFjaCBtYXRjaGVkIGV2ZW50LiBTbyAvYmFbcnpdLyBtaWdodCByZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYmFyIGFuZCBiYXouIEJ1dCBvbmx5IGlmIHlvdSBoYXZlIGVpdGhlciBkZWZpbmVkIHRoZW0gd2l0aCBkZWZpbmVFdmVudCBvciBhZGRlZCBzb21lIGxpc3RlbmVycyB0byB0aGVtLlxuICAgICAqIEVhY2ggcHJvcGVydHkgaW4gdGhlIG9iamVjdCByZXNwb25zZSBpcyBhbiBhcnJheSBvZiBsaXN0ZW5lciBmdW5jdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IGV2dCBOYW1lIG9mIHRoZSBldmVudCB0byByZXR1cm4gdGhlIGxpc3RlbmVycyBmcm9tLlxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9uW118T2JqZWN0fSBBbGwgbGlzdGVuZXIgZnVuY3Rpb25zIGZvciB0aGUgZXZlbnQuXG4gICAgICovXG4gICAgcHJvdG8uZ2V0TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TGlzdGVuZXJzKGV2dCkge1xuICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5fZ2V0RXZlbnRzKCk7XG4gICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICAvLyBSZXR1cm4gYSBjb25jYXRlbmF0ZWQgYXJyYXkgb2YgYWxsIG1hdGNoaW5nIGV2ZW50cyBpZlxuICAgICAgICAvLyB0aGUgc2VsZWN0b3IgaXMgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gICAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0ge307XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGtleSkgJiYgZXZ0LnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVtrZXldID0gZXZlbnRzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBldmVudHNbZXZ0XSB8fCAoZXZlbnRzW2V2dF0gPSBbXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRha2VzIGEgbGlzdCBvZiBsaXN0ZW5lciBvYmplY3RzIGFuZCBmbGF0dGVucyBpdCBpbnRvIGEgbGlzdCBvZiBsaXN0ZW5lciBmdW5jdGlvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBsaXN0ZW5lcnMgUmF3IGxpc3RlbmVyIG9iamVjdHMuXG4gICAgICogQHJldHVybiB7RnVuY3Rpb25bXX0gSnVzdCB0aGUgbGlzdGVuZXIgZnVuY3Rpb25zLlxuICAgICAqL1xuICAgIHByb3RvLmZsYXR0ZW5MaXN0ZW5lcnMgPSBmdW5jdGlvbiBmbGF0dGVuTGlzdGVuZXJzKGxpc3RlbmVycykge1xuICAgICAgICB2YXIgZmxhdExpc3RlbmVycyA9IFtdO1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBmbGF0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXJzW2ldLmxpc3RlbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmbGF0TGlzdGVuZXJzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIHRoZSByZXF1ZXN0ZWQgbGlzdGVuZXJzIHZpYSBnZXRMaXN0ZW5lcnMgYnV0IHdpbGwgYWx3YXlzIHJldHVybiB0aGUgcmVzdWx0cyBpbnNpZGUgYW4gb2JqZWN0LiBUaGlzIGlzIG1haW5seSBmb3IgaW50ZXJuYWwgdXNlIGJ1dCBvdGhlcnMgbWF5IGZpbmQgaXQgdXNlZnVsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBldnQgTmFtZSBvZiB0aGUgZXZlbnQgdG8gcmV0dXJuIHRoZSBsaXN0ZW5lcnMgZnJvbS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEFsbCBsaXN0ZW5lciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IGluIGFuIG9iamVjdC5cbiAgICAgKi9cbiAgICBwcm90by5nZXRMaXN0ZW5lcnNBc09iamVjdCA9IGZ1bmN0aW9uIGdldExpc3RlbmVyc0FzT2JqZWN0KGV2dCkge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5nZXRMaXN0ZW5lcnMoZXZ0KTtcbiAgICAgICAgdmFyIHJlc3BvbnNlO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB7fTtcbiAgICAgICAgICAgIHJlc3BvbnNlW2V2dF0gPSBsaXN0ZW5lcnM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2UgfHwgbGlzdGVuZXJzO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBpc1ZhbGlkTGlzdGVuZXIgKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgPT09ICdmdW5jdGlvbicgfHwgbGlzdGVuZXIgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXIgJiYgdHlwZW9mIGxpc3RlbmVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWRMaXN0ZW5lcihsaXN0ZW5lci5saXN0ZW5lcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAgICogVGhlIGxpc3RlbmVyIHdpbGwgbm90IGJlIGFkZGVkIGlmIGl0IGlzIGEgZHVwbGljYXRlLlxuICAgICAqIElmIHRoZSBsaXN0ZW5lciByZXR1cm5zIHRydWUgdGhlbiBpdCB3aWxsIGJlIHJlbW92ZWQgYWZ0ZXIgaXQgaXMgY2FsbGVkLlxuICAgICAqIElmIHlvdSBwYXNzIGEgcmVndWxhciBleHByZXNzaW9uIGFzIHRoZSBldmVudCBuYW1lIHRoZW4gdGhlIGxpc3RlbmVyIHdpbGwgYmUgYWRkZWQgdG8gYWxsIGV2ZW50cyB0aGF0IG1hdGNoIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBldnQgTmFtZSBvZiB0aGUgZXZlbnQgdG8gYXR0YWNoIHRoZSBsaXN0ZW5lciB0by5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBNZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGV2ZW50IGlzIGVtaXR0ZWQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIHRydWUgdGhlbiBpdCB3aWxsIGJlIHJlbW92ZWQgYWZ0ZXIgY2FsbGluZy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGV2dCwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkTGlzdGVuZXIobGlzdGVuZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmdldExpc3RlbmVyc0FzT2JqZWN0KGV2dCk7XG4gICAgICAgIHZhciBsaXN0ZW5lcklzV3JhcHBlZCA9IHR5cGVvZiBsaXN0ZW5lciA9PT0gJ29iamVjdCc7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgaW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyc1trZXldLCBsaXN0ZW5lcikgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW2tleV0ucHVzaChsaXN0ZW5lcklzV3JhcHBlZCA/IGxpc3RlbmVyIDoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIG9uY2U6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgb2YgYWRkTGlzdGVuZXJcbiAgICAgKi9cbiAgICBwcm90by5vbiA9IGFsaWFzKCdhZGRMaXN0ZW5lcicpO1xuXG4gICAgLyoqXG4gICAgICogU2VtaS1hbGlhcyBvZiBhZGRMaXN0ZW5lci4gSXQgd2lsbCBhZGQgYSBsaXN0ZW5lciB0aGF0IHdpbGwgYmVcbiAgICAgKiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgYWZ0ZXIgaXRzIGZpcnN0IGV4ZWN1dGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZXZ0IE5hbWUgb2YgdGhlIGV2ZW50IHRvIGF0dGFjaCB0aGUgbGlzdGVuZXIgdG8uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBldmVudCBpcyBlbWl0dGVkLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyB0cnVlIHRoZW4gaXQgd2lsbCBiZSByZW1vdmVkIGFmdGVyIGNhbGxpbmcuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8uYWRkT25jZUxpc3RlbmVyID0gZnVuY3Rpb24gYWRkT25jZUxpc3RlbmVyKGV2dCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoZXZ0LCB7XG4gICAgICAgICAgICBsaXN0ZW5lcjogbGlzdGVuZXIsXG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBvZiBhZGRPbmNlTGlzdGVuZXIuXG4gICAgICovXG4gICAgcHJvdG8ub25jZSA9IGFsaWFzKCdhZGRPbmNlTGlzdGVuZXInKTtcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgYW4gZXZlbnQgbmFtZS4gVGhpcyBpcyByZXF1aXJlZCBpZiB5b3Ugd2FudCB0byB1c2UgYSByZWdleCB0byBhZGQgYSBsaXN0ZW5lciB0byBtdWx0aXBsZSBldmVudHMgYXQgb25jZS4gSWYgeW91IGRvbid0IGRvIHRoaXMgdGhlbiBob3cgZG8geW91IGV4cGVjdCBpdCB0byBrbm93IHdoYXQgZXZlbnQgdG8gYWRkIHRvPyBTaG91bGQgaXQganVzdCBhZGQgdG8gZXZlcnkgcG9zc2libGUgbWF0Y2ggZm9yIGEgcmVnZXg/IE5vLiBUaGF0IGlzIHNjYXJ5IGFuZCBiYWQuXG4gICAgICogWW91IG5lZWQgdG8gdGVsbCBpdCB3aGF0IGV2ZW50IG5hbWVzIHNob3VsZCBiZSBtYXRjaGVkIGJ5IGEgcmVnZXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZXZ0IE5hbWUgb2YgdGhlIGV2ZW50IHRvIGNyZWF0ZS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5kZWZpbmVFdmVudCA9IGZ1bmN0aW9uIGRlZmluZUV2ZW50KGV2dCkge1xuICAgICAgICB0aGlzLmdldExpc3RlbmVycyhldnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXNlcyBkZWZpbmVFdmVudCB0byBkZWZpbmUgbXVsdGlwbGUgZXZlbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gZXZ0cyBBbiBhcnJheSBvZiBldmVudCBuYW1lcyB0byBkZWZpbmUuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8uZGVmaW5lRXZlbnRzID0gZnVuY3Rpb24gZGVmaW5lRXZlbnRzKGV2dHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmluZUV2ZW50KGV2dHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnVuY3Rpb24gZnJvbSB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqIFdoZW4gcGFzc2VkIGEgcmVndWxhciBleHByZXNzaW9uIGFzIHRoZSBldmVudCBuYW1lLCBpdCB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgZnJvbSBhbGwgZXZlbnRzIHRoYXQgbWF0Y2ggaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IGV2dCBOYW1lIG9mIHRoZSBldmVudCB0byByZW1vdmUgdGhlIGxpc3RlbmVyIGZyb20uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTWV0aG9kIHRvIHJlbW92ZSBmcm9tIHRoZSBldmVudC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2dCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuZ2V0TGlzdGVuZXJzQXNPYmplY3QoZXZ0KTtcbiAgICAgICAgdmFyIGluZGV4O1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIGxpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpbmRleE9mTGlzdGVuZXIobGlzdGVuZXJzW2tleV0sIGxpc3RlbmVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgb2YgcmVtb3ZlTGlzdGVuZXJcbiAgICAgKi9cbiAgICBwcm90by5vZmYgPSBhbGlhcygncmVtb3ZlTGlzdGVuZXInKTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgbGlzdGVuZXJzIGluIGJ1bGsgdXNpbmcgdGhlIG1hbmlwdWxhdGVMaXN0ZW5lcnMgbWV0aG9kLlxuICAgICAqIElmIHlvdSBwYXNzIGFuIG9iamVjdCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgeW91IGNhbiBhZGQgdG8gbXVsdGlwbGUgZXZlbnRzIGF0IG9uY2UuIFRoZSBvYmplY3Qgc2hvdWxkIGNvbnRhaW4ga2V5IHZhbHVlIHBhaXJzIG9mIGV2ZW50cyBhbmQgbGlzdGVuZXJzIG9yIGxpc3RlbmVyIGFycmF5cy4gWW91IGNhbiBhbHNvIHBhc3MgaXQgYW4gZXZlbnQgbmFtZSBhbmQgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIHRvIGJlIGFkZGVkLlxuICAgICAqIFlvdSBjYW4gYWxzbyBwYXNzIGl0IGEgcmVndWxhciBleHByZXNzaW9uIHRvIGFkZCB0aGUgYXJyYXkgb2YgbGlzdGVuZXJzIHRvIGFsbCBldmVudHMgdGhhdCBtYXRjaCBpdC5cbiAgICAgKiBZZWFoLCB0aGlzIGZ1bmN0aW9uIGRvZXMgcXVpdGUgYSBiaXQuIFRoYXQncyBwcm9iYWJseSBhIGJhZCB0aGluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdHxSZWdFeHB9IGV2dCBBbiBldmVudCBuYW1lIGlmIHlvdSB3aWxsIHBhc3MgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIG5leHQuIEFuIG9iamVjdCBpZiB5b3Ugd2lzaCB0byBhZGQgdG8gbXVsdGlwbGUgZXZlbnRzIGF0IG9uY2UuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbltdfSBbbGlzdGVuZXJzXSBBbiBvcHRpb25hbCBhcnJheSBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdG8gYWRkLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQ3VycmVudCBpbnN0YW5jZSBvZiBFdmVudEVtaXR0ZXIgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHByb3RvLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZExpc3RlbmVycyhldnQsIGxpc3RlbmVycykge1xuICAgICAgICAvLyBQYXNzIHRocm91Z2ggdG8gbWFuaXB1bGF0ZUxpc3RlbmVyc1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5pcHVsYXRlTGlzdGVuZXJzKGZhbHNlLCBldnQsIGxpc3RlbmVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgbGlzdGVuZXJzIGluIGJ1bGsgdXNpbmcgdGhlIG1hbmlwdWxhdGVMaXN0ZW5lcnMgbWV0aG9kLlxuICAgICAqIElmIHlvdSBwYXNzIGFuIG9iamVjdCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgeW91IGNhbiByZW1vdmUgZnJvbSBtdWx0aXBsZSBldmVudHMgYXQgb25jZS4gVGhlIG9iamVjdCBzaG91bGQgY29udGFpbiBrZXkgdmFsdWUgcGFpcnMgb2YgZXZlbnRzIGFuZCBsaXN0ZW5lcnMgb3IgbGlzdGVuZXIgYXJyYXlzLlxuICAgICAqIFlvdSBjYW4gYWxzbyBwYXNzIGl0IGFuIGV2ZW50IG5hbWUgYW5kIGFuIGFycmF5IG9mIGxpc3RlbmVycyB0byBiZSByZW1vdmVkLlxuICAgICAqIFlvdSBjYW4gYWxzbyBwYXNzIGl0IGEgcmVndWxhciBleHByZXNzaW9uIHRvIHJlbW92ZSB0aGUgbGlzdGVuZXJzIGZyb20gYWxsIGV2ZW50cyB0aGF0IG1hdGNoIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fFJlZ0V4cH0gZXZ0IEFuIGV2ZW50IG5hbWUgaWYgeW91IHdpbGwgcGFzcyBhbiBhcnJheSBvZiBsaXN0ZW5lcnMgbmV4dC4gQW4gb2JqZWN0IGlmIHlvdSB3aXNoIHRvIHJlbW92ZSBmcm9tIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gW2xpc3RlbmVyc10gQW4gb3B0aW9uYWwgYXJyYXkgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRvIHJlbW92ZS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5yZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoZXZ0LCBsaXN0ZW5lcnMpIHtcbiAgICAgICAgLy8gUGFzcyB0aHJvdWdoIHRvIG1hbmlwdWxhdGVMaXN0ZW5lcnNcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuaXB1bGF0ZUxpc3RlbmVycyh0cnVlLCBldnQsIGxpc3RlbmVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVkaXRzIGxpc3RlbmVycyBpbiBidWxrLiBUaGUgYWRkTGlzdGVuZXJzIGFuZCByZW1vdmVMaXN0ZW5lcnMgbWV0aG9kcyBib3RoIHVzZSB0aGlzIHRvIGRvIHRoZWlyIGpvYi4gWW91IHNob3VsZCByZWFsbHkgdXNlIHRob3NlIGluc3RlYWQsIHRoaXMgaXMgYSBsaXR0bGUgbG93ZXIgbGV2ZWwuXG4gICAgICogVGhlIGZpcnN0IGFyZ3VtZW50IHdpbGwgZGV0ZXJtaW5lIGlmIHRoZSBsaXN0ZW5lcnMgYXJlIHJlbW92ZWQgKHRydWUpIG9yIGFkZGVkIChmYWxzZSkuXG4gICAgICogSWYgeW91IHBhc3MgYW4gb2JqZWN0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgeW91IGNhbiBhZGQvcmVtb3ZlIGZyb20gbXVsdGlwbGUgZXZlbnRzIGF0IG9uY2UuIFRoZSBvYmplY3Qgc2hvdWxkIGNvbnRhaW4ga2V5IHZhbHVlIHBhaXJzIG9mIGV2ZW50cyBhbmQgbGlzdGVuZXJzIG9yIGxpc3RlbmVyIGFycmF5cy5cbiAgICAgKiBZb3UgY2FuIGFsc28gcGFzcyBpdCBhbiBldmVudCBuYW1lIGFuZCBhbiBhcnJheSBvZiBsaXN0ZW5lcnMgdG8gYmUgYWRkZWQvcmVtb3ZlZC5cbiAgICAgKiBZb3UgY2FuIGFsc28gcGFzcyBpdCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYW5pcHVsYXRlIHRoZSBsaXN0ZW5lcnMgb2YgYWxsIGV2ZW50cyB0aGF0IG1hdGNoIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSByZW1vdmUgVHJ1ZSBpZiB5b3Ugd2FudCB0byByZW1vdmUgbGlzdGVuZXJzLCBmYWxzZSBpZiB5b3Ugd2FudCB0byBhZGQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fFJlZ0V4cH0gZXZ0IEFuIGV2ZW50IG5hbWUgaWYgeW91IHdpbGwgcGFzcyBhbiBhcnJheSBvZiBsaXN0ZW5lcnMgbmV4dC4gQW4gb2JqZWN0IGlmIHlvdSB3aXNoIHRvIGFkZC9yZW1vdmUgZnJvbSBtdWx0aXBsZSBldmVudHMgYXQgb25jZS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uW119IFtsaXN0ZW5lcnNdIEFuIG9wdGlvbmFsIGFycmF5IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0byBhZGQvcmVtb3ZlLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQ3VycmVudCBpbnN0YW5jZSBvZiBFdmVudEVtaXR0ZXIgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHByb3RvLm1hbmlwdWxhdGVMaXN0ZW5lcnMgPSBmdW5jdGlvbiBtYW5pcHVsYXRlTGlzdGVuZXJzKHJlbW92ZSwgZXZ0LCBsaXN0ZW5lcnMpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgdmFyIHNpbmdsZSA9IHJlbW92ZSA/IHRoaXMucmVtb3ZlTGlzdGVuZXIgOiB0aGlzLmFkZExpc3RlbmVyO1xuICAgICAgICB2YXIgbXVsdGlwbGUgPSByZW1vdmUgPyB0aGlzLnJlbW92ZUxpc3RlbmVycyA6IHRoaXMuYWRkTGlzdGVuZXJzO1xuXG4gICAgICAgIC8vIElmIGV2dCBpcyBhbiBvYmplY3QgdGhlbiBwYXNzIGVhY2ggb2YgaXRzIHByb3BlcnRpZXMgdG8gdGhpcyBtZXRob2RcbiAgICAgICAgaWYgKHR5cGVvZiBldnQgPT09ICdvYmplY3QnICYmICEoZXZ0IGluc3RhbmNlb2YgUmVnRXhwKSkge1xuICAgICAgICAgICAgZm9yIChpIGluIGV2dCkge1xuICAgICAgICAgICAgICAgIGlmIChldnQuaGFzT3duUHJvcGVydHkoaSkgJiYgKHZhbHVlID0gZXZ0W2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIHRoZSBzaW5nbGUgbGlzdGVuZXIgc3RyYWlnaHQgdGhyb3VnaCB0byB0aGUgc2luZ3VsYXIgbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZS5jYWxsKHRoaXMsIGksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBwYXNzIGJhY2sgdG8gdGhlIG11bHRpcGxlIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZS5jYWxsKHRoaXMsIGksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNvIGV2dCBtdXN0IGJlIGEgc3RyaW5nXG4gICAgICAgICAgICAvLyBBbmQgbGlzdGVuZXJzIG11c3QgYmUgYW4gYXJyYXkgb2YgbGlzdGVuZXJzXG4gICAgICAgICAgICAvLyBMb29wIG92ZXIgaXQgYW5kIHBhc3MgZWFjaCBvbmUgdG8gdGhlIG11bHRpcGxlIG1ldGhvZFxuICAgICAgICAgICAgaSA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgc2luZ2xlLmNhbGwodGhpcywgZXZ0LCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGxpc3RlbmVycyBmcm9tIGEgc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqIElmIHlvdSBkbyBub3Qgc3BlY2lmeSBhbiBldmVudCB0aGVuIGFsbCBsaXN0ZW5lcnMgd2lsbCBiZSByZW1vdmVkLlxuICAgICAqIFRoYXQgbWVhbnMgZXZlcnkgZXZlbnQgd2lsbCBiZSBlbXB0aWVkLlxuICAgICAqIFlvdSBjYW4gYWxzbyBwYXNzIGEgcmVnZXggdG8gcmVtb3ZlIGFsbCBldmVudHMgdGhhdCBtYXRjaCBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gW2V2dF0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgZXZlbnQgdG8gcmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yLiBXaWxsIHJlbW92ZSBmcm9tIGV2ZXJ5IGV2ZW50IGlmIG5vdCBwYXNzZWQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8ucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiByZW1vdmVFdmVudChldnQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgZXZ0O1xuICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5fZ2V0RXZlbnRzKCk7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGRpZmZlcmVudCB0aGluZ3MgZGVwZW5kaW5nIG9uIHRoZSBzdGF0ZSBvZiBldnRcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IgdGhlIHNwZWNpZmllZCBldmVudFxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1tldnRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2dCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudHMgbWF0Y2hpbmcgdGhlIHJlZ2V4LlxuICAgICAgICAgICAgZm9yIChrZXkgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGV2dC50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgbGlzdGVuZXJzIGluIGFsbCBldmVudHNcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgb2YgcmVtb3ZlRXZlbnQuXG4gICAgICpcbiAgICAgKiBBZGRlZCB0byBtaXJyb3IgdGhlIG5vZGUgQVBJLlxuICAgICAqL1xuICAgIHByb3RvLnJlbW92ZUFsbExpc3RlbmVycyA9IGFsaWFzKCdyZW1vdmVFdmVudCcpO1xuXG4gICAgLyoqXG4gICAgICogRW1pdHMgYW4gZXZlbnQgb2YgeW91ciBjaG9pY2UuXG4gICAgICogV2hlbiBlbWl0dGVkLCBldmVyeSBsaXN0ZW5lciBhdHRhY2hlZCB0byB0aGF0IGV2ZW50IHdpbGwgYmUgZXhlY3V0ZWQuXG4gICAgICogSWYgeW91IHBhc3MgdGhlIG9wdGlvbmFsIGFyZ3VtZW50IGFycmF5IHRoZW4gdGhvc2UgYXJndW1lbnRzIHdpbGwgYmUgcGFzc2VkIHRvIGV2ZXJ5IGxpc3RlbmVyIHVwb24gZXhlY3V0aW9uLlxuICAgICAqIEJlY2F1c2UgaXQgdXNlcyBgYXBwbHlgLCB5b3VyIGFycmF5IG9mIGFyZ3VtZW50cyB3aWxsIGJlIHBhc3NlZCBhcyBpZiB5b3Ugd3JvdGUgdGhlbSBvdXQgc2VwYXJhdGVseS5cbiAgICAgKiBTbyB0aGV5IHdpbGwgbm90IGFycml2ZSB3aXRoaW4gdGhlIGFycmF5IG9uIHRoZSBvdGhlciBzaWRlLCB0aGV5IHdpbGwgYmUgc2VwYXJhdGUuXG4gICAgICogWW91IGNhbiBhbHNvIHBhc3MgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gZW1pdCB0byBhbGwgZXZlbnRzIHRoYXQgbWF0Y2ggaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IGV2dCBOYW1lIG9mIHRoZSBldmVudCB0byBlbWl0IGFuZCBleGVjdXRlIGxpc3RlbmVycyBmb3IuXG4gICAgICogQHBhcmFtIHtBcnJheX0gW2FyZ3NdIE9wdGlvbmFsIGFycmF5IG9mIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gZWFjaCBsaXN0ZW5lci5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiBlbWl0RXZlbnQoZXZ0LCBhcmdzKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnNNYXAgPSB0aGlzLmdldExpc3RlbmVyc0FzT2JqZWN0KGV2dCk7XG4gICAgICAgIHZhciBsaXN0ZW5lcnM7XG4gICAgICAgIHZhciBsaXN0ZW5lcjtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIHZhciByZXNwb25zZTtcblxuICAgICAgICBmb3IgKGtleSBpbiBsaXN0ZW5lcnNNYXApIHtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVyc01hcFtrZXldLnNsaWNlKDApO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJucyB0cnVlIHRoZW4gaXQgc2hhbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgZWl0aGVyIHdpdGggYSBiYXNpYyBjYWxsIG9yIGFuIGFwcGx5IGlmIHRoZXJlIGlzIGFuIGFyZ3MgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZ0LCBsaXN0ZW5lci5saXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IGxpc3RlbmVyLmxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MgfHwgW10pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PT0gdGhpcy5fZ2V0T25jZVJldHVyblZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZ0LCBsaXN0ZW5lci5saXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgb2YgZW1pdEV2ZW50XG4gICAgICovXG4gICAgcHJvdG8udHJpZ2dlciA9IGFsaWFzKCdlbWl0RXZlbnQnKTtcblxuICAgIC8qKlxuICAgICAqIFN1YnRseSBkaWZmZXJlbnQgZnJvbSBlbWl0RXZlbnQgaW4gdGhhdCBpdCB3aWxsIHBhc3MgaXRzIGFyZ3VtZW50cyBvbiB0byB0aGUgbGlzdGVuZXJzLCBhcyBvcHBvc2VkIHRvIHRha2luZyBhIHNpbmdsZSBhcnJheSBvZiBhcmd1bWVudHMgdG8gcGFzcyBvbi5cbiAgICAgKiBBcyB3aXRoIGVtaXRFdmVudCwgeW91IGNhbiBwYXNzIGEgcmVnZXggaW4gcGxhY2Ugb2YgdGhlIGV2ZW50IG5hbWUgdG8gZW1pdCB0byBhbGwgZXZlbnRzIHRoYXQgbWF0Y2ggaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IGV2dCBOYW1lIG9mIHRoZSBldmVudCB0byBlbWl0IGFuZCBleGVjdXRlIGxpc3RlbmVycyBmb3IuXG4gICAgICogQHBhcmFtIHsuLi4qfSBPcHRpb25hbCBhZGRpdGlvbmFsIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gZWFjaCBsaXN0ZW5lci5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5lbWl0ID0gZnVuY3Rpb24gZW1pdChldnQpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbWl0RXZlbnQoZXZ0LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCB2YWx1ZSB0byBjaGVjayBhZ2FpbnN0IHdoZW4gZXhlY3V0aW5nIGxpc3RlbmVycy4gSWYgYVxuICAgICAqIGxpc3RlbmVycyByZXR1cm4gdmFsdWUgbWF0Y2hlcyB0aGUgb25lIHNldCBoZXJlIHRoZW4gaXQgd2lsbCBiZSByZW1vdmVkXG4gICAgICogYWZ0ZXIgZXhlY3V0aW9uLiBUaGlzIHZhbHVlIGRlZmF1bHRzIHRvIHRydWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBuZXcgdmFsdWUgdG8gY2hlY2sgZm9yIHdoZW4gZXhlY3V0aW5nIGxpc3RlbmVycy5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5zZXRPbmNlUmV0dXJuVmFsdWUgPSBmdW5jdGlvbiBzZXRPbmNlUmV0dXJuVmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fb25jZVJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIHRoZSBjdXJyZW50IHZhbHVlIHRvIGNoZWNrIGFnYWluc3Qgd2hlbiBleGVjdXRpbmcgbGlzdGVuZXJzLiBJZlxuICAgICAqIHRoZSBsaXN0ZW5lcnMgcmV0dXJuIHZhbHVlIG1hdGNoZXMgdGhpcyBvbmUgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAqIGF1dG9tYXRpY2FsbHkuIEl0IHdpbGwgcmV0dXJuIHRydWUgYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4geyp8Qm9vbGVhbn0gVGhlIGN1cnJlbnQgdmFsdWUgdG8gY2hlY2sgZm9yIG9yIHRoZSBkZWZhdWx0LCB0cnVlLlxuICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAqL1xuICAgIHByb3RvLl9nZXRPbmNlUmV0dXJuVmFsdWUgPSBmdW5jdGlvbiBfZ2V0T25jZVJldHVyblZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eSgnX29uY2VSZXR1cm5WYWx1ZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb25jZVJldHVyblZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyB0aGUgZXZlbnRzIG9iamVjdCBhbmQgY3JlYXRlcyBvbmUgaWYgcmVxdWlyZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBldmVudHMgc3RvcmFnZSBvYmplY3QuXG4gICAgICogQGFwaSBwcml2YXRlXG4gICAgICovXG4gICAgcHJvdG8uX2dldEV2ZW50cyA9IGZ1bmN0aW9uIF9nZXRFdmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHMgfHwgKHRoaXMuX2V2ZW50cyA9IHt9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV2ZXJ0cyB0aGUgZ2xvYmFsIHtAbGluayBFdmVudEVtaXR0ZXJ9IHRvIGl0cyBwcmV2aW91cyB2YWx1ZSBhbmQgcmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGlzIHZlcnNpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gTm9uIGNvbmZsaWN0aW5nIEV2ZW50RW1pdHRlciBjbGFzcy5cbiAgICAgKi9cbiAgICAvLyBFdmVudEVtaXR0ZXIubm9Db25mbGljdCA9IGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgLy8gICAgIGV4cG9ydHMuRXZlbnRFbWl0dGVyID0gb3JpZ2luYWxHbG9iYWxWYWx1ZTtcbiAgICAvLyAgICAgcmV0dXJuIEV2ZW50RW1pdHRlcjtcbiAgICAvLyB9O1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyXG5cbiAgICAvLyAvLyBFeHBvc2UgdGhlIGNsYXNzIGVpdGhlciB2aWEgQU1ELCBDb21tb25KUyBvciB0aGUgZ2xvYmFsIG9iamVjdFxuICAgIC8vIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyl7XG4gICAgLy8gICAgIG1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgICAgZXhwb3J0cy5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgLy8gfVxuLy8gfSh0aGlzIHx8IHt9KSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2h0bWw1L2RlZmF1bHQvYXBpL0V2ZW50RW1pdHRlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=