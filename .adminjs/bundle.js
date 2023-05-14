(function (React$1, designSystem, pkg) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
	var pkg__default = /*#__PURE__*/_interopDefaultLegacy(pkg);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire(path) {
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}

	var moment$1 = {exports: {}};

	(function (module, exports) {
	(function (global, factory) {
		    module.exports = factory() ;
		}(commonjsGlobal, (function () {
		    var hookCallback;

		    function hooks() {
		        return hookCallback.apply(null, arguments);
		    }

		    // This is done to register the method called with moment()
		    // without creating circular dependencies.
		    function setHookCallback(callback) {
		        hookCallback = callback;
		    }

		    function isArray(input) {
		        return (
		            input instanceof Array ||
		            Object.prototype.toString.call(input) === '[object Array]'
		        );
		    }

		    function isObject(input) {
		        // IE8 will treat undefined and null as object if it wasn't for
		        // input != null
		        return (
		            input != null &&
		            Object.prototype.toString.call(input) === '[object Object]'
		        );
		    }

		    function hasOwnProp(a, b) {
		        return Object.prototype.hasOwnProperty.call(a, b);
		    }

		    function isObjectEmpty(obj) {
		        if (Object.getOwnPropertyNames) {
		            return Object.getOwnPropertyNames(obj).length === 0;
		        } else {
		            var k;
		            for (k in obj) {
		                if (hasOwnProp(obj, k)) {
		                    return false;
		                }
		            }
		            return true;
		        }
		    }

		    function isUndefined(input) {
		        return input === void 0;
		    }

		    function isNumber(input) {
		        return (
		            typeof input === 'number' ||
		            Object.prototype.toString.call(input) === '[object Number]'
		        );
		    }

		    function isDate(input) {
		        return (
		            input instanceof Date ||
		            Object.prototype.toString.call(input) === '[object Date]'
		        );
		    }

		    function map(arr, fn) {
		        var res = [],
		            i,
		            arrLen = arr.length;
		        for (i = 0; i < arrLen; ++i) {
		            res.push(fn(arr[i], i));
		        }
		        return res;
		    }

		    function extend(a, b) {
		        for (var i in b) {
		            if (hasOwnProp(b, i)) {
		                a[i] = b[i];
		            }
		        }

		        if (hasOwnProp(b, 'toString')) {
		            a.toString = b.toString;
		        }

		        if (hasOwnProp(b, 'valueOf')) {
		            a.valueOf = b.valueOf;
		        }

		        return a;
		    }

		    function createUTC(input, format, locale, strict) {
		        return createLocalOrUTC(input, format, locale, strict, true).utc();
		    }

		    function defaultParsingFlags() {
		        // We need to deep clone this object.
		        return {
		            empty: false,
		            unusedTokens: [],
		            unusedInput: [],
		            overflow: -2,
		            charsLeftOver: 0,
		            nullInput: false,
		            invalidEra: null,
		            invalidMonth: null,
		            invalidFormat: false,
		            userInvalidated: false,
		            iso: false,
		            parsedDateParts: [],
		            era: null,
		            meridiem: null,
		            rfc2822: false,
		            weekdayMismatch: false,
		        };
		    }

		    function getParsingFlags(m) {
		        if (m._pf == null) {
		            m._pf = defaultParsingFlags();
		        }
		        return m._pf;
		    }

		    var some;
		    if (Array.prototype.some) {
		        some = Array.prototype.some;
		    } else {
		        some = function (fun) {
		            var t = Object(this),
		                len = t.length >>> 0,
		                i;

		            for (i = 0; i < len; i++) {
		                if (i in t && fun.call(this, t[i], i, t)) {
		                    return true;
		                }
		            }

		            return false;
		        };
		    }

		    function isValid(m) {
		        if (m._isValid == null) {
		            var flags = getParsingFlags(m),
		                parsedParts = some.call(flags.parsedDateParts, function (i) {
		                    return i != null;
		                }),
		                isNowValid =
		                    !isNaN(m._d.getTime()) &&
		                    flags.overflow < 0 &&
		                    !flags.empty &&
		                    !flags.invalidEra &&
		                    !flags.invalidMonth &&
		                    !flags.invalidWeekday &&
		                    !flags.weekdayMismatch &&
		                    !flags.nullInput &&
		                    !flags.invalidFormat &&
		                    !flags.userInvalidated &&
		                    (!flags.meridiem || (flags.meridiem && parsedParts));

		            if (m._strict) {
		                isNowValid =
		                    isNowValid &&
		                    flags.charsLeftOver === 0 &&
		                    flags.unusedTokens.length === 0 &&
		                    flags.bigHour === undefined;
		            }

		            if (Object.isFrozen == null || !Object.isFrozen(m)) {
		                m._isValid = isNowValid;
		            } else {
		                return isNowValid;
		            }
		        }
		        return m._isValid;
		    }

		    function createInvalid(flags) {
		        var m = createUTC(NaN);
		        if (flags != null) {
		            extend(getParsingFlags(m), flags);
		        } else {
		            getParsingFlags(m).userInvalidated = true;
		        }

		        return m;
		    }

		    // Plugins that add properties should also add the key here (null value),
		    // so we can properly clone ourselves.
		    var momentProperties = (hooks.momentProperties = []),
		        updateInProgress = false;

		    function copyConfig(to, from) {
		        var i,
		            prop,
		            val,
		            momentPropertiesLen = momentProperties.length;

		        if (!isUndefined(from._isAMomentObject)) {
		            to._isAMomentObject = from._isAMomentObject;
		        }
		        if (!isUndefined(from._i)) {
		            to._i = from._i;
		        }
		        if (!isUndefined(from._f)) {
		            to._f = from._f;
		        }
		        if (!isUndefined(from._l)) {
		            to._l = from._l;
		        }
		        if (!isUndefined(from._strict)) {
		            to._strict = from._strict;
		        }
		        if (!isUndefined(from._tzm)) {
		            to._tzm = from._tzm;
		        }
		        if (!isUndefined(from._isUTC)) {
		            to._isUTC = from._isUTC;
		        }
		        if (!isUndefined(from._offset)) {
		            to._offset = from._offset;
		        }
		        if (!isUndefined(from._pf)) {
		            to._pf = getParsingFlags(from);
		        }
		        if (!isUndefined(from._locale)) {
		            to._locale = from._locale;
		        }

		        if (momentPropertiesLen > 0) {
		            for (i = 0; i < momentPropertiesLen; i++) {
		                prop = momentProperties[i];
		                val = from[prop];
		                if (!isUndefined(val)) {
		                    to[prop] = val;
		                }
		            }
		        }

		        return to;
		    }

		    // Moment prototype object
		    function Moment(config) {
		        copyConfig(this, config);
		        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
		        if (!this.isValid()) {
		            this._d = new Date(NaN);
		        }
		        // Prevent infinite loop in case updateOffset creates new moment
		        // objects.
		        if (updateInProgress === false) {
		            updateInProgress = true;
		            hooks.updateOffset(this);
		            updateInProgress = false;
		        }
		    }

		    function isMoment(obj) {
		        return (
		            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
		        );
		    }

		    function warn(msg) {
		        if (
		            hooks.suppressDeprecationWarnings === false &&
		            typeof console !== 'undefined' &&
		            console.warn
		        ) {
		            console.warn('Deprecation warning: ' + msg);
		        }
		    }

		    function deprecate(msg, fn) {
		        var firstTime = true;

		        return extend(function () {
		            if (hooks.deprecationHandler != null) {
		                hooks.deprecationHandler(null, msg);
		            }
		            if (firstTime) {
		                var args = [],
		                    arg,
		                    i,
		                    key,
		                    argLen = arguments.length;
		                for (i = 0; i < argLen; i++) {
		                    arg = '';
		                    if (typeof arguments[i] === 'object') {
		                        arg += '\n[' + i + '] ';
		                        for (key in arguments[0]) {
		                            if (hasOwnProp(arguments[0], key)) {
		                                arg += key + ': ' + arguments[0][key] + ', ';
		                            }
		                        }
		                        arg = arg.slice(0, -2); // Remove trailing comma and space
		                    } else {
		                        arg = arguments[i];
		                    }
		                    args.push(arg);
		                }
		                warn(
		                    msg +
		                        '\nArguments: ' +
		                        Array.prototype.slice.call(args).join('') +
		                        '\n' +
		                        new Error().stack
		                );
		                firstTime = false;
		            }
		            return fn.apply(this, arguments);
		        }, fn);
		    }

		    var deprecations = {};

		    function deprecateSimple(name, msg) {
		        if (hooks.deprecationHandler != null) {
		            hooks.deprecationHandler(name, msg);
		        }
		        if (!deprecations[name]) {
		            warn(msg);
		            deprecations[name] = true;
		        }
		    }

		    hooks.suppressDeprecationWarnings = false;
		    hooks.deprecationHandler = null;

		    function isFunction(input) {
		        return (
		            (typeof Function !== 'undefined' && input instanceof Function) ||
		            Object.prototype.toString.call(input) === '[object Function]'
		        );
		    }

		    function set(config) {
		        var prop, i;
		        for (i in config) {
		            if (hasOwnProp(config, i)) {
		                prop = config[i];
		                if (isFunction(prop)) {
		                    this[i] = prop;
		                } else {
		                    this['_' + i] = prop;
		                }
		            }
		        }
		        this._config = config;
		        // Lenient ordinal parsing accepts just a number in addition to
		        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
		        // TODO: Remove "ordinalParse" fallback in next major release.
		        this._dayOfMonthOrdinalParseLenient = new RegExp(
		            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
		                '|' +
		                /\d{1,2}/.source
		        );
		    }

		    function mergeConfigs(parentConfig, childConfig) {
		        var res = extend({}, parentConfig),
		            prop;
		        for (prop in childConfig) {
		            if (hasOwnProp(childConfig, prop)) {
		                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
		                    res[prop] = {};
		                    extend(res[prop], parentConfig[prop]);
		                    extend(res[prop], childConfig[prop]);
		                } else if (childConfig[prop] != null) {
		                    res[prop] = childConfig[prop];
		                } else {
		                    delete res[prop];
		                }
		            }
		        }
		        for (prop in parentConfig) {
		            if (
		                hasOwnProp(parentConfig, prop) &&
		                !hasOwnProp(childConfig, prop) &&
		                isObject(parentConfig[prop])
		            ) {
		                // make sure changes to properties don't modify parent config
		                res[prop] = extend({}, res[prop]);
		            }
		        }
		        return res;
		    }

		    function Locale(config) {
		        if (config != null) {
		            this.set(config);
		        }
		    }

		    var keys;

		    if (Object.keys) {
		        keys = Object.keys;
		    } else {
		        keys = function (obj) {
		            var i,
		                res = [];
		            for (i in obj) {
		                if (hasOwnProp(obj, i)) {
		                    res.push(i);
		                }
		            }
		            return res;
		        };
		    }

		    var defaultCalendar = {
		        sameDay: '[Today at] LT',
		        nextDay: '[Tomorrow at] LT',
		        nextWeek: 'dddd [at] LT',
		        lastDay: '[Yesterday at] LT',
		        lastWeek: '[Last] dddd [at] LT',
		        sameElse: 'L',
		    };

		    function calendar(key, mom, now) {
		        var output = this._calendar[key] || this._calendar['sameElse'];
		        return isFunction(output) ? output.call(mom, now) : output;
		    }

		    function zeroFill(number, targetLength, forceSign) {
		        var absNumber = '' + Math.abs(number),
		            zerosToFill = targetLength - absNumber.length,
		            sign = number >= 0;
		        return (
		            (sign ? (forceSign ? '+' : '') : '-') +
		            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
		            absNumber
		        );
		    }

		    var formattingTokens =
		            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		        formatFunctions = {},
		        formatTokenFunctions = {};

		    // token:    'M'
		    // padded:   ['MM', 2]
		    // ordinal:  'Mo'
		    // callback: function () { this.month() + 1 }
		    function addFormatToken(token, padded, ordinal, callback) {
		        var func = callback;
		        if (typeof callback === 'string') {
		            func = function () {
		                return this[callback]();
		            };
		        }
		        if (token) {
		            formatTokenFunctions[token] = func;
		        }
		        if (padded) {
		            formatTokenFunctions[padded[0]] = function () {
		                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
		            };
		        }
		        if (ordinal) {
		            formatTokenFunctions[ordinal] = function () {
		                return this.localeData().ordinal(
		                    func.apply(this, arguments),
		                    token
		                );
		            };
		        }
		    }

		    function removeFormattingTokens(input) {
		        if (input.match(/\[[\s\S]/)) {
		            return input.replace(/^\[|\]$/g, '');
		        }
		        return input.replace(/\\/g, '');
		    }

		    function makeFormatFunction(format) {
		        var array = format.match(formattingTokens),
		            i,
		            length;

		        for (i = 0, length = array.length; i < length; i++) {
		            if (formatTokenFunctions[array[i]]) {
		                array[i] = formatTokenFunctions[array[i]];
		            } else {
		                array[i] = removeFormattingTokens(array[i]);
		            }
		        }

		        return function (mom) {
		            var output = '',
		                i;
		            for (i = 0; i < length; i++) {
		                output += isFunction(array[i])
		                    ? array[i].call(mom, format)
		                    : array[i];
		            }
		            return output;
		        };
		    }

		    // format date using native date object
		    function formatMoment(m, format) {
		        if (!m.isValid()) {
		            return m.localeData().invalidDate();
		        }

		        format = expandFormat(format, m.localeData());
		        formatFunctions[format] =
		            formatFunctions[format] || makeFormatFunction(format);

		        return formatFunctions[format](m);
		    }

		    function expandFormat(format, locale) {
		        var i = 5;

		        function replaceLongDateFormatTokens(input) {
		            return locale.longDateFormat(input) || input;
		        }

		        localFormattingTokens.lastIndex = 0;
		        while (i >= 0 && localFormattingTokens.test(format)) {
		            format = format.replace(
		                localFormattingTokens,
		                replaceLongDateFormatTokens
		            );
		            localFormattingTokens.lastIndex = 0;
		            i -= 1;
		        }

		        return format;
		    }

		    var defaultLongDateFormat = {
		        LTS: 'h:mm:ss A',
		        LT: 'h:mm A',
		        L: 'MM/DD/YYYY',
		        LL: 'MMMM D, YYYY',
		        LLL: 'MMMM D, YYYY h:mm A',
		        LLLL: 'dddd, MMMM D, YYYY h:mm A',
		    };

		    function longDateFormat(key) {
		        var format = this._longDateFormat[key],
		            formatUpper = this._longDateFormat[key.toUpperCase()];

		        if (format || !formatUpper) {
		            return format;
		        }

		        this._longDateFormat[key] = formatUpper
		            .match(formattingTokens)
		            .map(function (tok) {
		                if (
		                    tok === 'MMMM' ||
		                    tok === 'MM' ||
		                    tok === 'DD' ||
		                    tok === 'dddd'
		                ) {
		                    return tok.slice(1);
		                }
		                return tok;
		            })
		            .join('');

		        return this._longDateFormat[key];
		    }

		    var defaultInvalidDate = 'Invalid date';

		    function invalidDate() {
		        return this._invalidDate;
		    }

		    var defaultOrdinal = '%d',
		        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

		    function ordinal(number) {
		        return this._ordinal.replace('%d', number);
		    }

		    var defaultRelativeTime = {
		        future: 'in %s',
		        past: '%s ago',
		        s: 'a few seconds',
		        ss: '%d seconds',
		        m: 'a minute',
		        mm: '%d minutes',
		        h: 'an hour',
		        hh: '%d hours',
		        d: 'a day',
		        dd: '%d days',
		        w: 'a week',
		        ww: '%d weeks',
		        M: 'a month',
		        MM: '%d months',
		        y: 'a year',
		        yy: '%d years',
		    };

		    function relativeTime(number, withoutSuffix, string, isFuture) {
		        var output = this._relativeTime[string];
		        return isFunction(output)
		            ? output(number, withoutSuffix, string, isFuture)
		            : output.replace(/%d/i, number);
		    }

		    function pastFuture(diff, output) {
		        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
		        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
		    }

		    var aliases = {};

		    function addUnitAlias(unit, shorthand) {
		        var lowerCase = unit.toLowerCase();
		        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
		    }

		    function normalizeUnits(units) {
		        return typeof units === 'string'
		            ? aliases[units] || aliases[units.toLowerCase()]
		            : undefined;
		    }

		    function normalizeObjectUnits(inputObject) {
		        var normalizedInput = {},
		            normalizedProp,
		            prop;

		        for (prop in inputObject) {
		            if (hasOwnProp(inputObject, prop)) {
		                normalizedProp = normalizeUnits(prop);
		                if (normalizedProp) {
		                    normalizedInput[normalizedProp] = inputObject[prop];
		                }
		            }
		        }

		        return normalizedInput;
		    }

		    var priorities = {};

		    function addUnitPriority(unit, priority) {
		        priorities[unit] = priority;
		    }

		    function getPrioritizedUnits(unitsObj) {
		        var units = [],
		            u;
		        for (u in unitsObj) {
		            if (hasOwnProp(unitsObj, u)) {
		                units.push({ unit: u, priority: priorities[u] });
		            }
		        }
		        units.sort(function (a, b) {
		            return a.priority - b.priority;
		        });
		        return units;
		    }

		    function isLeapYear(year) {
		        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
		    }

		    function absFloor(number) {
		        if (number < 0) {
		            // -0 -> 0
		            return Math.ceil(number) || 0;
		        } else {
		            return Math.floor(number);
		        }
		    }

		    function toInt(argumentForCoercion) {
		        var coercedNumber = +argumentForCoercion,
		            value = 0;

		        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
		            value = absFloor(coercedNumber);
		        }

		        return value;
		    }

		    function makeGetSet(unit, keepTime) {
		        return function (value) {
		            if (value != null) {
		                set$1(this, unit, value);
		                hooks.updateOffset(this, keepTime);
		                return this;
		            } else {
		                return get(this, unit);
		            }
		        };
		    }

		    function get(mom, unit) {
		        return mom.isValid()
		            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
		            : NaN;
		    }

		    function set$1(mom, unit, value) {
		        if (mom.isValid() && !isNaN(value)) {
		            if (
		                unit === 'FullYear' &&
		                isLeapYear(mom.year()) &&
		                mom.month() === 1 &&
		                mom.date() === 29
		            ) {
		                value = toInt(value);
		                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
		                    value,
		                    mom.month(),
		                    daysInMonth(value, mom.month())
		                );
		            } else {
		                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
		            }
		        }
		    }

		    // MOMENTS

		    function stringGet(units) {
		        units = normalizeUnits(units);
		        if (isFunction(this[units])) {
		            return this[units]();
		        }
		        return this;
		    }

		    function stringSet(units, value) {
		        if (typeof units === 'object') {
		            units = normalizeObjectUnits(units);
		            var prioritized = getPrioritizedUnits(units),
		                i,
		                prioritizedLen = prioritized.length;
		            for (i = 0; i < prioritizedLen; i++) {
		                this[prioritized[i].unit](units[prioritized[i].unit]);
		            }
		        } else {
		            units = normalizeUnits(units);
		            if (isFunction(this[units])) {
		                return this[units](value);
		            }
		        }
		        return this;
		    }

		    var match1 = /\d/, //       0 - 9
		        match2 = /\d\d/, //      00 - 99
		        match3 = /\d{3}/, //     000 - 999
		        match4 = /\d{4}/, //    0000 - 9999
		        match6 = /[+-]?\d{6}/, // -999999 - 999999
		        match1to2 = /\d\d?/, //       0 - 99
		        match3to4 = /\d\d\d\d?/, //     999 - 9999
		        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
		        match1to3 = /\d{1,3}/, //       0 - 999
		        match1to4 = /\d{1,4}/, //       0 - 9999
		        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
		        matchUnsigned = /\d+/, //       0 - inf
		        matchSigned = /[+-]?\d+/, //    -inf - inf
		        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
		        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
		        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
		        // any word (or two) characters or numbers including two/three word month in arabic.
		        // includes scottish gaelic two word and hyphenated months
		        matchWord =
		            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
		        regexes;

		    regexes = {};

		    function addRegexToken(token, regex, strictRegex) {
		        regexes[token] = isFunction(regex)
		            ? regex
		            : function (isStrict, localeData) {
		                  return isStrict && strictRegex ? strictRegex : regex;
		              };
		    }

		    function getParseRegexForToken(token, config) {
		        if (!hasOwnProp(regexes, token)) {
		            return new RegExp(unescapeFormat(token));
		        }

		        return regexes[token](config._strict, config._locale);
		    }

		    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
		    function unescapeFormat(s) {
		        return regexEscape(
		            s
		                .replace('\\', '')
		                .replace(
		                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
		                    function (matched, p1, p2, p3, p4) {
		                        return p1 || p2 || p3 || p4;
		                    }
		                )
		        );
		    }

		    function regexEscape(s) {
		        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		    }

		    var tokens = {};

		    function addParseToken(token, callback) {
		        var i,
		            func = callback,
		            tokenLen;
		        if (typeof token === 'string') {
		            token = [token];
		        }
		        if (isNumber(callback)) {
		            func = function (input, array) {
		                array[callback] = toInt(input);
		            };
		        }
		        tokenLen = token.length;
		        for (i = 0; i < tokenLen; i++) {
		            tokens[token[i]] = func;
		        }
		    }

		    function addWeekParseToken(token, callback) {
		        addParseToken(token, function (input, array, config, token) {
		            config._w = config._w || {};
		            callback(input, config._w, config, token);
		        });
		    }

		    function addTimeToArrayFromToken(token, input, config) {
		        if (input != null && hasOwnProp(tokens, token)) {
		            tokens[token](input, config._a, config, token);
		        }
		    }

		    var YEAR = 0,
		        MONTH = 1,
		        DATE = 2,
		        HOUR = 3,
		        MINUTE = 4,
		        SECOND = 5,
		        MILLISECOND = 6,
		        WEEK = 7,
		        WEEKDAY = 8;

		    function mod(n, x) {
		        return ((n % x) + x) % x;
		    }

		    var indexOf;

		    if (Array.prototype.indexOf) {
		        indexOf = Array.prototype.indexOf;
		    } else {
		        indexOf = function (o) {
		            // I know
		            var i;
		            for (i = 0; i < this.length; ++i) {
		                if (this[i] === o) {
		                    return i;
		                }
		            }
		            return -1;
		        };
		    }

		    function daysInMonth(year, month) {
		        if (isNaN(year) || isNaN(month)) {
		            return NaN;
		        }
		        var modMonth = mod(month, 12);
		        year += (month - modMonth) / 12;
		        return modMonth === 1
		            ? isLeapYear(year)
		                ? 29
		                : 28
		            : 31 - ((modMonth % 7) % 2);
		    }

		    // FORMATTING

		    addFormatToken('M', ['MM', 2], 'Mo', function () {
		        return this.month() + 1;
		    });

		    addFormatToken('MMM', 0, 0, function (format) {
		        return this.localeData().monthsShort(this, format);
		    });

		    addFormatToken('MMMM', 0, 0, function (format) {
		        return this.localeData().months(this, format);
		    });

		    // ALIASES

		    addUnitAlias('month', 'M');

		    // PRIORITY

		    addUnitPriority('month', 8);

		    // PARSING

		    addRegexToken('M', match1to2);
		    addRegexToken('MM', match1to2, match2);
		    addRegexToken('MMM', function (isStrict, locale) {
		        return locale.monthsShortRegex(isStrict);
		    });
		    addRegexToken('MMMM', function (isStrict, locale) {
		        return locale.monthsRegex(isStrict);
		    });

		    addParseToken(['M', 'MM'], function (input, array) {
		        array[MONTH] = toInt(input) - 1;
		    });

		    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
		        var month = config._locale.monthsParse(input, token, config._strict);
		        // if we didn't find a month name, mark the date as invalid.
		        if (month != null) {
		            array[MONTH] = month;
		        } else {
		            getParsingFlags(config).invalidMonth = input;
		        }
		    });

		    // LOCALES

		    var defaultLocaleMonths =
		            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
		                '_'
		            ),
		        defaultLocaleMonthsShort =
		            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
		        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
		        defaultMonthsShortRegex = matchWord,
		        defaultMonthsRegex = matchWord;

		    function localeMonths(m, format) {
		        if (!m) {
		            return isArray(this._months)
		                ? this._months
		                : this._months['standalone'];
		        }
		        return isArray(this._months)
		            ? this._months[m.month()]
		            : this._months[
		                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
		                      ? 'format'
		                      : 'standalone'
		              ][m.month()];
		    }

		    function localeMonthsShort(m, format) {
		        if (!m) {
		            return isArray(this._monthsShort)
		                ? this._monthsShort
		                : this._monthsShort['standalone'];
		        }
		        return isArray(this._monthsShort)
		            ? this._monthsShort[m.month()]
		            : this._monthsShort[
		                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
		              ][m.month()];
		    }

		    function handleStrictParse(monthName, format, strict) {
		        var i,
		            ii,
		            mom,
		            llc = monthName.toLocaleLowerCase();
		        if (!this._monthsParse) {
		            // this is not used
		            this._monthsParse = [];
		            this._longMonthsParse = [];
		            this._shortMonthsParse = [];
		            for (i = 0; i < 12; ++i) {
		                mom = createUTC([2000, i]);
		                this._shortMonthsParse[i] = this.monthsShort(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
		            }
		        }

		        if (strict) {
		            if (format === 'MMM') {
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._longMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        } else {
		            if (format === 'MMM') {
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._longMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._longMonthsParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortMonthsParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        }
		    }

		    function localeMonthsParse(monthName, format, strict) {
		        var i, mom, regex;

		        if (this._monthsParseExact) {
		            return handleStrictParse.call(this, monthName, format, strict);
		        }

		        if (!this._monthsParse) {
		            this._monthsParse = [];
		            this._longMonthsParse = [];
		            this._shortMonthsParse = [];
		        }

		        // TODO: add sorting
		        // Sorting makes sure if one month (or abbr) is a prefix of another
		        // see sorting in computeMonthsParse
		        for (i = 0; i < 12; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, i]);
		            if (strict && !this._longMonthsParse[i]) {
		                this._longMonthsParse[i] = new RegExp(
		                    '^' + this.months(mom, '').replace('.', '') + '$',
		                    'i'
		                );
		                this._shortMonthsParse[i] = new RegExp(
		                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
		                    'i'
		                );
		            }
		            if (!strict && !this._monthsParse[i]) {
		                regex =
		                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
		                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
		            }
		            // test the regex
		            if (
		                strict &&
		                format === 'MMMM' &&
		                this._longMonthsParse[i].test(monthName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'MMM' &&
		                this._shortMonthsParse[i].test(monthName)
		            ) {
		                return i;
		            } else if (!strict && this._monthsParse[i].test(monthName)) {
		                return i;
		            }
		        }
		    }

		    // MOMENTS

		    function setMonth(mom, value) {
		        var dayOfMonth;

		        if (!mom.isValid()) {
		            // No op
		            return mom;
		        }

		        if (typeof value === 'string') {
		            if (/^\d+$/.test(value)) {
		                value = toInt(value);
		            } else {
		                value = mom.localeData().monthsParse(value);
		                // TODO: Another silent failure?
		                if (!isNumber(value)) {
		                    return mom;
		                }
		            }
		        }

		        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
		        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
		        return mom;
		    }

		    function getSetMonth(value) {
		        if (value != null) {
		            setMonth(this, value);
		            hooks.updateOffset(this, true);
		            return this;
		        } else {
		            return get(this, 'Month');
		        }
		    }

		    function getDaysInMonth() {
		        return daysInMonth(this.year(), this.month());
		    }

		    function monthsShortRegex(isStrict) {
		        if (this._monthsParseExact) {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                computeMonthsParse.call(this);
		            }
		            if (isStrict) {
		                return this._monthsShortStrictRegex;
		            } else {
		                return this._monthsShortRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_monthsShortRegex')) {
		                this._monthsShortRegex = defaultMonthsShortRegex;
		            }
		            return this._monthsShortStrictRegex && isStrict
		                ? this._monthsShortStrictRegex
		                : this._monthsShortRegex;
		        }
		    }

		    function monthsRegex(isStrict) {
		        if (this._monthsParseExact) {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                computeMonthsParse.call(this);
		            }
		            if (isStrict) {
		                return this._monthsStrictRegex;
		            } else {
		                return this._monthsRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_monthsRegex')) {
		                this._monthsRegex = defaultMonthsRegex;
		            }
		            return this._monthsStrictRegex && isStrict
		                ? this._monthsStrictRegex
		                : this._monthsRegex;
		        }
		    }

		    function computeMonthsParse() {
		        function cmpLenRev(a, b) {
		            return b.length - a.length;
		        }

		        var shortPieces = [],
		            longPieces = [],
		            mixedPieces = [],
		            i,
		            mom;
		        for (i = 0; i < 12; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, i]);
		            shortPieces.push(this.monthsShort(mom, ''));
		            longPieces.push(this.months(mom, ''));
		            mixedPieces.push(this.months(mom, ''));
		            mixedPieces.push(this.monthsShort(mom, ''));
		        }
		        // Sorting makes sure if one month (or abbr) is a prefix of another it
		        // will match the longer piece.
		        shortPieces.sort(cmpLenRev);
		        longPieces.sort(cmpLenRev);
		        mixedPieces.sort(cmpLenRev);
		        for (i = 0; i < 12; i++) {
		            shortPieces[i] = regexEscape(shortPieces[i]);
		            longPieces[i] = regexEscape(longPieces[i]);
		        }
		        for (i = 0; i < 24; i++) {
		            mixedPieces[i] = regexEscape(mixedPieces[i]);
		        }

		        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._monthsShortRegex = this._monthsRegex;
		        this._monthsStrictRegex = new RegExp(
		            '^(' + longPieces.join('|') + ')',
		            'i'
		        );
		        this._monthsShortStrictRegex = new RegExp(
		            '^(' + shortPieces.join('|') + ')',
		            'i'
		        );
		    }

		    // FORMATTING

		    addFormatToken('Y', 0, 0, function () {
		        var y = this.year();
		        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
		    });

		    addFormatToken(0, ['YY', 2], 0, function () {
		        return this.year() % 100;
		    });

		    addFormatToken(0, ['YYYY', 4], 0, 'year');
		    addFormatToken(0, ['YYYYY', 5], 0, 'year');
		    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

		    // ALIASES

		    addUnitAlias('year', 'y');

		    // PRIORITIES

		    addUnitPriority('year', 1);

		    // PARSING

		    addRegexToken('Y', matchSigned);
		    addRegexToken('YY', match1to2, match2);
		    addRegexToken('YYYY', match1to4, match4);
		    addRegexToken('YYYYY', match1to6, match6);
		    addRegexToken('YYYYYY', match1to6, match6);

		    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
		    addParseToken('YYYY', function (input, array) {
		        array[YEAR] =
		            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
		    });
		    addParseToken('YY', function (input, array) {
		        array[YEAR] = hooks.parseTwoDigitYear(input);
		    });
		    addParseToken('Y', function (input, array) {
		        array[YEAR] = parseInt(input, 10);
		    });

		    // HELPERS

		    function daysInYear(year) {
		        return isLeapYear(year) ? 366 : 365;
		    }

		    // HOOKS

		    hooks.parseTwoDigitYear = function (input) {
		        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
		    };

		    // MOMENTS

		    var getSetYear = makeGetSet('FullYear', true);

		    function getIsLeapYear() {
		        return isLeapYear(this.year());
		    }

		    function createDate(y, m, d, h, M, s, ms) {
		        // can't just apply() to create a date:
		        // https://stackoverflow.com/q/181348
		        var date;
		        // the date constructor remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            date = new Date(y + 400, m, d, h, M, s, ms);
		            if (isFinite(date.getFullYear())) {
		                date.setFullYear(y);
		            }
		        } else {
		            date = new Date(y, m, d, h, M, s, ms);
		        }

		        return date;
		    }

		    function createUTCDate(y) {
		        var date, args;
		        // the Date.UTC function remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            args = Array.prototype.slice.call(arguments);
		            // preserve leap years using a full 400 year cycle, then reset
		            args[0] = y + 400;
		            date = new Date(Date.UTC.apply(null, args));
		            if (isFinite(date.getUTCFullYear())) {
		                date.setUTCFullYear(y);
		            }
		        } else {
		            date = new Date(Date.UTC.apply(null, arguments));
		        }

		        return date;
		    }

		    // start-of-first-week - start-of-year
		    function firstWeekOffset(year, dow, doy) {
		        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
		            fwd = 7 + dow - doy,
		            // first-week day local weekday -- which local weekday is fwd
		            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

		        return -fwdlw + fwd - 1;
		    }

		    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
		    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
		        var localWeekday = (7 + weekday - dow) % 7,
		            weekOffset = firstWeekOffset(year, dow, doy),
		            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
		            resYear,
		            resDayOfYear;

		        if (dayOfYear <= 0) {
		            resYear = year - 1;
		            resDayOfYear = daysInYear(resYear) + dayOfYear;
		        } else if (dayOfYear > daysInYear(year)) {
		            resYear = year + 1;
		            resDayOfYear = dayOfYear - daysInYear(year);
		        } else {
		            resYear = year;
		            resDayOfYear = dayOfYear;
		        }

		        return {
		            year: resYear,
		            dayOfYear: resDayOfYear,
		        };
		    }

		    function weekOfYear(mom, dow, doy) {
		        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
		            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
		            resWeek,
		            resYear;

		        if (week < 1) {
		            resYear = mom.year() - 1;
		            resWeek = week + weeksInYear(resYear, dow, doy);
		        } else if (week > weeksInYear(mom.year(), dow, doy)) {
		            resWeek = week - weeksInYear(mom.year(), dow, doy);
		            resYear = mom.year() + 1;
		        } else {
		            resYear = mom.year();
		            resWeek = week;
		        }

		        return {
		            week: resWeek,
		            year: resYear,
		        };
		    }

		    function weeksInYear(year, dow, doy) {
		        var weekOffset = firstWeekOffset(year, dow, doy),
		            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
		        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
		    }

		    // FORMATTING

		    addFormatToken('w', ['ww', 2], 'wo', 'week');
		    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

		    // ALIASES

		    addUnitAlias('week', 'w');
		    addUnitAlias('isoWeek', 'W');

		    // PRIORITIES

		    addUnitPriority('week', 5);
		    addUnitPriority('isoWeek', 5);

		    // PARSING

		    addRegexToken('w', match1to2);
		    addRegexToken('ww', match1to2, match2);
		    addRegexToken('W', match1to2);
		    addRegexToken('WW', match1to2, match2);

		    addWeekParseToken(
		        ['w', 'ww', 'W', 'WW'],
		        function (input, week, config, token) {
		            week[token.substr(0, 1)] = toInt(input);
		        }
		    );

		    // HELPERS

		    // LOCALES

		    function localeWeek(mom) {
		        return weekOfYear(mom, this._week.dow, this._week.doy).week;
		    }

		    var defaultLocaleWeek = {
		        dow: 0, // Sunday is the first day of the week.
		        doy: 6, // The week that contains Jan 6th is the first week of the year.
		    };

		    function localeFirstDayOfWeek() {
		        return this._week.dow;
		    }

		    function localeFirstDayOfYear() {
		        return this._week.doy;
		    }

		    // MOMENTS

		    function getSetWeek(input) {
		        var week = this.localeData().week(this);
		        return input == null ? week : this.add((input - week) * 7, 'd');
		    }

		    function getSetISOWeek(input) {
		        var week = weekOfYear(this, 1, 4).week;
		        return input == null ? week : this.add((input - week) * 7, 'd');
		    }

		    // FORMATTING

		    addFormatToken('d', 0, 'do', 'day');

		    addFormatToken('dd', 0, 0, function (format) {
		        return this.localeData().weekdaysMin(this, format);
		    });

		    addFormatToken('ddd', 0, 0, function (format) {
		        return this.localeData().weekdaysShort(this, format);
		    });

		    addFormatToken('dddd', 0, 0, function (format) {
		        return this.localeData().weekdays(this, format);
		    });

		    addFormatToken('e', 0, 0, 'weekday');
		    addFormatToken('E', 0, 0, 'isoWeekday');

		    // ALIASES

		    addUnitAlias('day', 'd');
		    addUnitAlias('weekday', 'e');
		    addUnitAlias('isoWeekday', 'E');

		    // PRIORITY
		    addUnitPriority('day', 11);
		    addUnitPriority('weekday', 11);
		    addUnitPriority('isoWeekday', 11);

		    // PARSING

		    addRegexToken('d', match1to2);
		    addRegexToken('e', match1to2);
		    addRegexToken('E', match1to2);
		    addRegexToken('dd', function (isStrict, locale) {
		        return locale.weekdaysMinRegex(isStrict);
		    });
		    addRegexToken('ddd', function (isStrict, locale) {
		        return locale.weekdaysShortRegex(isStrict);
		    });
		    addRegexToken('dddd', function (isStrict, locale) {
		        return locale.weekdaysRegex(isStrict);
		    });

		    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
		        var weekday = config._locale.weekdaysParse(input, token, config._strict);
		        // if we didn't get a weekday name, mark the date as invalid
		        if (weekday != null) {
		            week.d = weekday;
		        } else {
		            getParsingFlags(config).invalidWeekday = input;
		        }
		    });

		    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
		        week[token] = toInt(input);
		    });

		    // HELPERS

		    function parseWeekday(input, locale) {
		        if (typeof input !== 'string') {
		            return input;
		        }

		        if (!isNaN(input)) {
		            return parseInt(input, 10);
		        }

		        input = locale.weekdaysParse(input);
		        if (typeof input === 'number') {
		            return input;
		        }

		        return null;
		    }

		    function parseIsoWeekday(input, locale) {
		        if (typeof input === 'string') {
		            return locale.weekdaysParse(input) % 7 || 7;
		        }
		        return isNaN(input) ? null : input;
		    }

		    // LOCALES
		    function shiftWeekdays(ws, n) {
		        return ws.slice(n, 7).concat(ws.slice(0, n));
		    }

		    var defaultLocaleWeekdays =
		            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
		        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
		        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
		        defaultWeekdaysRegex = matchWord,
		        defaultWeekdaysShortRegex = matchWord,
		        defaultWeekdaysMinRegex = matchWord;

		    function localeWeekdays(m, format) {
		        var weekdays = isArray(this._weekdays)
		            ? this._weekdays
		            : this._weekdays[
		                  m && m !== true && this._weekdays.isFormat.test(format)
		                      ? 'format'
		                      : 'standalone'
		              ];
		        return m === true
		            ? shiftWeekdays(weekdays, this._week.dow)
		            : m
		            ? weekdays[m.day()]
		            : weekdays;
		    }

		    function localeWeekdaysShort(m) {
		        return m === true
		            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
		            : m
		            ? this._weekdaysShort[m.day()]
		            : this._weekdaysShort;
		    }

		    function localeWeekdaysMin(m) {
		        return m === true
		            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
		            : m
		            ? this._weekdaysMin[m.day()]
		            : this._weekdaysMin;
		    }

		    function handleStrictParse$1(weekdayName, format, strict) {
		        var i,
		            ii,
		            mom,
		            llc = weekdayName.toLocaleLowerCase();
		        if (!this._weekdaysParse) {
		            this._weekdaysParse = [];
		            this._shortWeekdaysParse = [];
		            this._minWeekdaysParse = [];

		            for (i = 0; i < 7; ++i) {
		                mom = createUTC([2000, 1]).day(i);
		                this._minWeekdaysParse[i] = this.weekdaysMin(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._shortWeekdaysParse[i] = this.weekdaysShort(
		                    mom,
		                    ''
		                ).toLocaleLowerCase();
		                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
		            }
		        }

		        if (strict) {
		            if (format === 'dddd') {
		                ii = indexOf.call(this._weekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else if (format === 'ddd') {
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        } else {
		            if (format === 'dddd') {
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else if (format === 'ddd') {
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            } else {
		                ii = indexOf.call(this._minWeekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._weekdaysParse, llc);
		                if (ii !== -1) {
		                    return ii;
		                }
		                ii = indexOf.call(this._shortWeekdaysParse, llc);
		                return ii !== -1 ? ii : null;
		            }
		        }
		    }

		    function localeWeekdaysParse(weekdayName, format, strict) {
		        var i, mom, regex;

		        if (this._weekdaysParseExact) {
		            return handleStrictParse$1.call(this, weekdayName, format, strict);
		        }

		        if (!this._weekdaysParse) {
		            this._weekdaysParse = [];
		            this._minWeekdaysParse = [];
		            this._shortWeekdaysParse = [];
		            this._fullWeekdaysParse = [];
		        }

		        for (i = 0; i < 7; i++) {
		            // make the regex if we don't have it already

		            mom = createUTC([2000, 1]).day(i);
		            if (strict && !this._fullWeekdaysParse[i]) {
		                this._fullWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		                this._shortWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		                this._minWeekdaysParse[i] = new RegExp(
		                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
		                    'i'
		                );
		            }
		            if (!this._weekdaysParse[i]) {
		                regex =
		                    '^' +
		                    this.weekdays(mom, '') +
		                    '|^' +
		                    this.weekdaysShort(mom, '') +
		                    '|^' +
		                    this.weekdaysMin(mom, '');
		                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
		            }
		            // test the regex
		            if (
		                strict &&
		                format === 'dddd' &&
		                this._fullWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'ddd' &&
		                this._shortWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (
		                strict &&
		                format === 'dd' &&
		                this._minWeekdaysParse[i].test(weekdayName)
		            ) {
		                return i;
		            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
		                return i;
		            }
		        }
		    }

		    // MOMENTS

		    function getSetDayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }
		        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		        if (input != null) {
		            input = parseWeekday(input, this.localeData());
		            return this.add(input - day, 'd');
		        } else {
		            return day;
		        }
		    }

		    function getSetLocaleDayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }
		        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
		        return input == null ? weekday : this.add(input - weekday, 'd');
		    }

		    function getSetISODayOfWeek(input) {
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }

		        // behaves the same as moment#day except
		        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
		        // as a setter, sunday should belong to the previous week.

		        if (input != null) {
		            var weekday = parseIsoWeekday(input, this.localeData());
		            return this.day(this.day() % 7 ? weekday : weekday - 7);
		        } else {
		            return this.day() || 7;
		        }
		    }

		    function weekdaysRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysStrictRegex;
		            } else {
		                return this._weekdaysRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                this._weekdaysRegex = defaultWeekdaysRegex;
		            }
		            return this._weekdaysStrictRegex && isStrict
		                ? this._weekdaysStrictRegex
		                : this._weekdaysRegex;
		        }
		    }

		    function weekdaysShortRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysShortStrictRegex;
		            } else {
		                return this._weekdaysShortRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
		                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
		            }
		            return this._weekdaysShortStrictRegex && isStrict
		                ? this._weekdaysShortStrictRegex
		                : this._weekdaysShortRegex;
		        }
		    }

		    function weekdaysMinRegex(isStrict) {
		        if (this._weekdaysParseExact) {
		            if (!hasOwnProp(this, '_weekdaysRegex')) {
		                computeWeekdaysParse.call(this);
		            }
		            if (isStrict) {
		                return this._weekdaysMinStrictRegex;
		            } else {
		                return this._weekdaysMinRegex;
		            }
		        } else {
		            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
		                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
		            }
		            return this._weekdaysMinStrictRegex && isStrict
		                ? this._weekdaysMinStrictRegex
		                : this._weekdaysMinRegex;
		        }
		    }

		    function computeWeekdaysParse() {
		        function cmpLenRev(a, b) {
		            return b.length - a.length;
		        }

		        var minPieces = [],
		            shortPieces = [],
		            longPieces = [],
		            mixedPieces = [],
		            i,
		            mom,
		            minp,
		            shortp,
		            longp;
		        for (i = 0; i < 7; i++) {
		            // make the regex if we don't have it already
		            mom = createUTC([2000, 1]).day(i);
		            minp = regexEscape(this.weekdaysMin(mom, ''));
		            shortp = regexEscape(this.weekdaysShort(mom, ''));
		            longp = regexEscape(this.weekdays(mom, ''));
		            minPieces.push(minp);
		            shortPieces.push(shortp);
		            longPieces.push(longp);
		            mixedPieces.push(minp);
		            mixedPieces.push(shortp);
		            mixedPieces.push(longp);
		        }
		        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
		        // will match the longer piece.
		        minPieces.sort(cmpLenRev);
		        shortPieces.sort(cmpLenRev);
		        longPieces.sort(cmpLenRev);
		        mixedPieces.sort(cmpLenRev);

		        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._weekdaysShortRegex = this._weekdaysRegex;
		        this._weekdaysMinRegex = this._weekdaysRegex;

		        this._weekdaysStrictRegex = new RegExp(
		            '^(' + longPieces.join('|') + ')',
		            'i'
		        );
		        this._weekdaysShortStrictRegex = new RegExp(
		            '^(' + shortPieces.join('|') + ')',
		            'i'
		        );
		        this._weekdaysMinStrictRegex = new RegExp(
		            '^(' + minPieces.join('|') + ')',
		            'i'
		        );
		    }

		    // FORMATTING

		    function hFormat() {
		        return this.hours() % 12 || 12;
		    }

		    function kFormat() {
		        return this.hours() || 24;
		    }

		    addFormatToken('H', ['HH', 2], 0, 'hour');
		    addFormatToken('h', ['hh', 2], 0, hFormat);
		    addFormatToken('k', ['kk', 2], 0, kFormat);

		    addFormatToken('hmm', 0, 0, function () {
		        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
		    });

		    addFormatToken('hmmss', 0, 0, function () {
		        return (
		            '' +
		            hFormat.apply(this) +
		            zeroFill(this.minutes(), 2) +
		            zeroFill(this.seconds(), 2)
		        );
		    });

		    addFormatToken('Hmm', 0, 0, function () {
		        return '' + this.hours() + zeroFill(this.minutes(), 2);
		    });

		    addFormatToken('Hmmss', 0, 0, function () {
		        return (
		            '' +
		            this.hours() +
		            zeroFill(this.minutes(), 2) +
		            zeroFill(this.seconds(), 2)
		        );
		    });

		    function meridiem(token, lowercase) {
		        addFormatToken(token, 0, 0, function () {
		            return this.localeData().meridiem(
		                this.hours(),
		                this.minutes(),
		                lowercase
		            );
		        });
		    }

		    meridiem('a', true);
		    meridiem('A', false);

		    // ALIASES

		    addUnitAlias('hour', 'h');

		    // PRIORITY
		    addUnitPriority('hour', 13);

		    // PARSING

		    function matchMeridiem(isStrict, locale) {
		        return locale._meridiemParse;
		    }

		    addRegexToken('a', matchMeridiem);
		    addRegexToken('A', matchMeridiem);
		    addRegexToken('H', match1to2);
		    addRegexToken('h', match1to2);
		    addRegexToken('k', match1to2);
		    addRegexToken('HH', match1to2, match2);
		    addRegexToken('hh', match1to2, match2);
		    addRegexToken('kk', match1to2, match2);

		    addRegexToken('hmm', match3to4);
		    addRegexToken('hmmss', match5to6);
		    addRegexToken('Hmm', match3to4);
		    addRegexToken('Hmmss', match5to6);

		    addParseToken(['H', 'HH'], HOUR);
		    addParseToken(['k', 'kk'], function (input, array, config) {
		        var kInput = toInt(input);
		        array[HOUR] = kInput === 24 ? 0 : kInput;
		    });
		    addParseToken(['a', 'A'], function (input, array, config) {
		        config._isPm = config._locale.isPM(input);
		        config._meridiem = input;
		    });
		    addParseToken(['h', 'hh'], function (input, array, config) {
		        array[HOUR] = toInt(input);
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('hmm', function (input, array, config) {
		        var pos = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos));
		        array[MINUTE] = toInt(input.substr(pos));
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('hmmss', function (input, array, config) {
		        var pos1 = input.length - 4,
		            pos2 = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos1));
		        array[MINUTE] = toInt(input.substr(pos1, 2));
		        array[SECOND] = toInt(input.substr(pos2));
		        getParsingFlags(config).bigHour = true;
		    });
		    addParseToken('Hmm', function (input, array, config) {
		        var pos = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos));
		        array[MINUTE] = toInt(input.substr(pos));
		    });
		    addParseToken('Hmmss', function (input, array, config) {
		        var pos1 = input.length - 4,
		            pos2 = input.length - 2;
		        array[HOUR] = toInt(input.substr(0, pos1));
		        array[MINUTE] = toInt(input.substr(pos1, 2));
		        array[SECOND] = toInt(input.substr(pos2));
		    });

		    // LOCALES

		    function localeIsPM(input) {
		        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
		        // Using charAt should be more compatible.
		        return (input + '').toLowerCase().charAt(0) === 'p';
		    }

		    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
		        // Setting the hour should keep the time, because the user explicitly
		        // specified which hour they want. So trying to maintain the same hour (in
		        // a new timezone) makes sense. Adding/subtracting hours does not follow
		        // this rule.
		        getSetHour = makeGetSet('Hours', true);

		    function localeMeridiem(hours, minutes, isLower) {
		        if (hours > 11) {
		            return isLower ? 'pm' : 'PM';
		        } else {
		            return isLower ? 'am' : 'AM';
		        }
		    }

		    var baseConfig = {
		        calendar: defaultCalendar,
		        longDateFormat: defaultLongDateFormat,
		        invalidDate: defaultInvalidDate,
		        ordinal: defaultOrdinal,
		        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
		        relativeTime: defaultRelativeTime,

		        months: defaultLocaleMonths,
		        monthsShort: defaultLocaleMonthsShort,

		        week: defaultLocaleWeek,

		        weekdays: defaultLocaleWeekdays,
		        weekdaysMin: defaultLocaleWeekdaysMin,
		        weekdaysShort: defaultLocaleWeekdaysShort,

		        meridiemParse: defaultLocaleMeridiemParse,
		    };

		    // internal storage for locale config files
		    var locales = {},
		        localeFamilies = {},
		        globalLocale;

		    function commonPrefix(arr1, arr2) {
		        var i,
		            minl = Math.min(arr1.length, arr2.length);
		        for (i = 0; i < minl; i += 1) {
		            if (arr1[i] !== arr2[i]) {
		                return i;
		            }
		        }
		        return minl;
		    }

		    function normalizeLocale(key) {
		        return key ? key.toLowerCase().replace('_', '-') : key;
		    }

		    // pick the locale from the array
		    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
		    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
		    function chooseLocale(names) {
		        var i = 0,
		            j,
		            next,
		            locale,
		            split;

		        while (i < names.length) {
		            split = normalizeLocale(names[i]).split('-');
		            j = split.length;
		            next = normalizeLocale(names[i + 1]);
		            next = next ? next.split('-') : null;
		            while (j > 0) {
		                locale = loadLocale(split.slice(0, j).join('-'));
		                if (locale) {
		                    return locale;
		                }
		                if (
		                    next &&
		                    next.length >= j &&
		                    commonPrefix(split, next) >= j - 1
		                ) {
		                    //the next array item is better than a shallower substring of this one
		                    break;
		                }
		                j--;
		            }
		            i++;
		        }
		        return globalLocale;
		    }

		    function isLocaleNameSane(name) {
		        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
		        return name.match('^[^/\\\\]*$') != null;
		    }

		    function loadLocale(name) {
		        var oldLocale = null,
		            aliasedRequire;
		        // TODO: Find a better way to register and load all the locales in Node
		        if (
		            locales[name] === undefined &&
		            'object' !== 'undefined' &&
		            module &&
		            module.exports &&
		            isLocaleNameSane(name)
		        ) {
		            try {
		                oldLocale = globalLocale._abbr;
		                aliasedRequire = commonjsRequire;
		                aliasedRequire('./locale/' + name);
		                getSetGlobalLocale(oldLocale);
		            } catch (e) {
		                // mark as not found to avoid repeating expensive file require call causing high CPU
		                // when trying to find en-US, en_US, en-us for every format call
		                locales[name] = null; // null means not found
		            }
		        }
		        return locales[name];
		    }

		    // This function will load locale and then set the global locale.  If
		    // no arguments are passed in, it will simply return the current global
		    // locale key.
		    function getSetGlobalLocale(key, values) {
		        var data;
		        if (key) {
		            if (isUndefined(values)) {
		                data = getLocale(key);
		            } else {
		                data = defineLocale(key, values);
		            }

		            if (data) {
		                // moment.duration._locale = moment._locale = data;
		                globalLocale = data;
		            } else {
		                if (typeof console !== 'undefined' && console.warn) {
		                    //warn user if arguments are passed but the locale could not be set
		                    console.warn(
		                        'Locale ' + key + ' not found. Did you forget to load it?'
		                    );
		                }
		            }
		        }

		        return globalLocale._abbr;
		    }

		    function defineLocale(name, config) {
		        if (config !== null) {
		            var locale,
		                parentConfig = baseConfig;
		            config.abbr = name;
		            if (locales[name] != null) {
		                deprecateSimple(
		                    'defineLocaleOverride',
		                    'use moment.updateLocale(localeName, config) to change ' +
		                        'an existing locale. moment.defineLocale(localeName, ' +
		                        'config) should only be used for creating a new locale ' +
		                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
		                );
		                parentConfig = locales[name]._config;
		            } else if (config.parentLocale != null) {
		                if (locales[config.parentLocale] != null) {
		                    parentConfig = locales[config.parentLocale]._config;
		                } else {
		                    locale = loadLocale(config.parentLocale);
		                    if (locale != null) {
		                        parentConfig = locale._config;
		                    } else {
		                        if (!localeFamilies[config.parentLocale]) {
		                            localeFamilies[config.parentLocale] = [];
		                        }
		                        localeFamilies[config.parentLocale].push({
		                            name: name,
		                            config: config,
		                        });
		                        return null;
		                    }
		                }
		            }
		            locales[name] = new Locale(mergeConfigs(parentConfig, config));

		            if (localeFamilies[name]) {
		                localeFamilies[name].forEach(function (x) {
		                    defineLocale(x.name, x.config);
		                });
		            }

		            // backwards compat for now: also set the locale
		            // make sure we set the locale AFTER all child locales have been
		            // created, so we won't end up with the child locale set.
		            getSetGlobalLocale(name);

		            return locales[name];
		        } else {
		            // useful for testing
		            delete locales[name];
		            return null;
		        }
		    }

		    function updateLocale(name, config) {
		        if (config != null) {
		            var locale,
		                tmpLocale,
		                parentConfig = baseConfig;

		            if (locales[name] != null && locales[name].parentLocale != null) {
		                // Update existing child locale in-place to avoid memory-leaks
		                locales[name].set(mergeConfigs(locales[name]._config, config));
		            } else {
		                // MERGE
		                tmpLocale = loadLocale(name);
		                if (tmpLocale != null) {
		                    parentConfig = tmpLocale._config;
		                }
		                config = mergeConfigs(parentConfig, config);
		                if (tmpLocale == null) {
		                    // updateLocale is called for creating a new locale
		                    // Set abbr so it will have a name (getters return
		                    // undefined otherwise).
		                    config.abbr = name;
		                }
		                locale = new Locale(config);
		                locale.parentLocale = locales[name];
		                locales[name] = locale;
		            }

		            // backwards compat for now: also set the locale
		            getSetGlobalLocale(name);
		        } else {
		            // pass null for config to unupdate, useful for tests
		            if (locales[name] != null) {
		                if (locales[name].parentLocale != null) {
		                    locales[name] = locales[name].parentLocale;
		                    if (name === getSetGlobalLocale()) {
		                        getSetGlobalLocale(name);
		                    }
		                } else if (locales[name] != null) {
		                    delete locales[name];
		                }
		            }
		        }
		        return locales[name];
		    }

		    // returns locale data
		    function getLocale(key) {
		        var locale;

		        if (key && key._locale && key._locale._abbr) {
		            key = key._locale._abbr;
		        }

		        if (!key) {
		            return globalLocale;
		        }

		        if (!isArray(key)) {
		            //short-circuit everything else
		            locale = loadLocale(key);
		            if (locale) {
		                return locale;
		            }
		            key = [key];
		        }

		        return chooseLocale(key);
		    }

		    function listLocales() {
		        return keys(locales);
		    }

		    function checkOverflow(m) {
		        var overflow,
		            a = m._a;

		        if (a && getParsingFlags(m).overflow === -2) {
		            overflow =
		                a[MONTH] < 0 || a[MONTH] > 11
		                    ? MONTH
		                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
		                    ? DATE
		                    : a[HOUR] < 0 ||
		                      a[HOUR] > 24 ||
		                      (a[HOUR] === 24 &&
		                          (a[MINUTE] !== 0 ||
		                              a[SECOND] !== 0 ||
		                              a[MILLISECOND] !== 0))
		                    ? HOUR
		                    : a[MINUTE] < 0 || a[MINUTE] > 59
		                    ? MINUTE
		                    : a[SECOND] < 0 || a[SECOND] > 59
		                    ? SECOND
		                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
		                    ? MILLISECOND
		                    : -1;

		            if (
		                getParsingFlags(m)._overflowDayOfYear &&
		                (overflow < YEAR || overflow > DATE)
		            ) {
		                overflow = DATE;
		            }
		            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
		                overflow = WEEK;
		            }
		            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
		                overflow = WEEKDAY;
		            }

		            getParsingFlags(m).overflow = overflow;
		        }

		        return m;
		    }

		    // iso 8601 regex
		    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
		    var extendedIsoRegex =
		            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		        basicIsoRegex =
		            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
		        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
		        isoDates = [
		            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
		            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
		            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
		            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
		            ['YYYY-DDD', /\d{4}-\d{3}/],
		            ['YYYY-MM', /\d{4}-\d\d/, false],
		            ['YYYYYYMMDD', /[+-]\d{10}/],
		            ['YYYYMMDD', /\d{8}/],
		            ['GGGG[W]WWE', /\d{4}W\d{3}/],
		            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
		            ['YYYYDDD', /\d{7}/],
		            ['YYYYMM', /\d{6}/, false],
		            ['YYYY', /\d{4}/, false],
		        ],
		        // iso time formats and regexes
		        isoTimes = [
		            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
		            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
		            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
		            ['HH:mm', /\d\d:\d\d/],
		            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
		            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
		            ['HHmmss', /\d\d\d\d\d\d/],
		            ['HHmm', /\d\d\d\d/],
		            ['HH', /\d\d/],
		        ],
		        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
		        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
		        rfc2822 =
		            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
		        obsOffsets = {
		            UT: 0,
		            GMT: 0,
		            EDT: -4 * 60,
		            EST: -5 * 60,
		            CDT: -5 * 60,
		            CST: -6 * 60,
		            MDT: -6 * 60,
		            MST: -7 * 60,
		            PDT: -7 * 60,
		            PST: -8 * 60,
		        };

		    // date from iso format
		    function configFromISO(config) {
		        var i,
		            l,
		            string = config._i,
		            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
		            allowTime,
		            dateFormat,
		            timeFormat,
		            tzFormat,
		            isoDatesLen = isoDates.length,
		            isoTimesLen = isoTimes.length;

		        if (match) {
		            getParsingFlags(config).iso = true;
		            for (i = 0, l = isoDatesLen; i < l; i++) {
		                if (isoDates[i][1].exec(match[1])) {
		                    dateFormat = isoDates[i][0];
		                    allowTime = isoDates[i][2] !== false;
		                    break;
		                }
		            }
		            if (dateFormat == null) {
		                config._isValid = false;
		                return;
		            }
		            if (match[3]) {
		                for (i = 0, l = isoTimesLen; i < l; i++) {
		                    if (isoTimes[i][1].exec(match[3])) {
		                        // match[2] should be 'T' or space
		                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
		                        break;
		                    }
		                }
		                if (timeFormat == null) {
		                    config._isValid = false;
		                    return;
		                }
		            }
		            if (!allowTime && timeFormat != null) {
		                config._isValid = false;
		                return;
		            }
		            if (match[4]) {
		                if (tzRegex.exec(match[4])) {
		                    tzFormat = 'Z';
		                } else {
		                    config._isValid = false;
		                    return;
		                }
		            }
		            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
		            configFromStringAndFormat(config);
		        } else {
		            config._isValid = false;
		        }
		    }

		    function extractFromRFC2822Strings(
		        yearStr,
		        monthStr,
		        dayStr,
		        hourStr,
		        minuteStr,
		        secondStr
		    ) {
		        var result = [
		            untruncateYear(yearStr),
		            defaultLocaleMonthsShort.indexOf(monthStr),
		            parseInt(dayStr, 10),
		            parseInt(hourStr, 10),
		            parseInt(minuteStr, 10),
		        ];

		        if (secondStr) {
		            result.push(parseInt(secondStr, 10));
		        }

		        return result;
		    }

		    function untruncateYear(yearStr) {
		        var year = parseInt(yearStr, 10);
		        if (year <= 49) {
		            return 2000 + year;
		        } else if (year <= 999) {
		            return 1900 + year;
		        }
		        return year;
		    }

		    function preprocessRFC2822(s) {
		        // Remove comments and folding whitespace and replace multiple-spaces with a single space
		        return s
		            .replace(/\([^()]*\)|[\n\t]/g, ' ')
		            .replace(/(\s\s+)/g, ' ')
		            .replace(/^\s\s*/, '')
		            .replace(/\s\s*$/, '');
		    }

		    function checkWeekday(weekdayStr, parsedInput, config) {
		        if (weekdayStr) {
		            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
		            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
		                weekdayActual = new Date(
		                    parsedInput[0],
		                    parsedInput[1],
		                    parsedInput[2]
		                ).getDay();
		            if (weekdayProvided !== weekdayActual) {
		                getParsingFlags(config).weekdayMismatch = true;
		                config._isValid = false;
		                return false;
		            }
		        }
		        return true;
		    }

		    function calculateOffset(obsOffset, militaryOffset, numOffset) {
		        if (obsOffset) {
		            return obsOffsets[obsOffset];
		        } else if (militaryOffset) {
		            // the only allowed military tz is Z
		            return 0;
		        } else {
		            var hm = parseInt(numOffset, 10),
		                m = hm % 100,
		                h = (hm - m) / 100;
		            return h * 60 + m;
		        }
		    }

		    // date and time from ref 2822 format
		    function configFromRFC2822(config) {
		        var match = rfc2822.exec(preprocessRFC2822(config._i)),
		            parsedArray;
		        if (match) {
		            parsedArray = extractFromRFC2822Strings(
		                match[4],
		                match[3],
		                match[2],
		                match[5],
		                match[6],
		                match[7]
		            );
		            if (!checkWeekday(match[1], parsedArray, config)) {
		                return;
		            }

		            config._a = parsedArray;
		            config._tzm = calculateOffset(match[8], match[9], match[10]);

		            config._d = createUTCDate.apply(null, config._a);
		            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

		            getParsingFlags(config).rfc2822 = true;
		        } else {
		            config._isValid = false;
		        }
		    }

		    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
		    function configFromString(config) {
		        var matched = aspNetJsonRegex.exec(config._i);
		        if (matched !== null) {
		            config._d = new Date(+matched[1]);
		            return;
		        }

		        configFromISO(config);
		        if (config._isValid === false) {
		            delete config._isValid;
		        } else {
		            return;
		        }

		        configFromRFC2822(config);
		        if (config._isValid === false) {
		            delete config._isValid;
		        } else {
		            return;
		        }

		        if (config._strict) {
		            config._isValid = false;
		        } else {
		            // Final attempt, use Input Fallback
		            hooks.createFromInputFallback(config);
		        }
		    }

		    hooks.createFromInputFallback = deprecate(
		        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
		            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
		            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
		        function (config) {
		            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
		        }
		    );

		    // Pick the first defined of two or three arguments.
		    function defaults(a, b, c) {
		        if (a != null) {
		            return a;
		        }
		        if (b != null) {
		            return b;
		        }
		        return c;
		    }

		    function currentDateArray(config) {
		        // hooks is actually the exported moment object
		        var nowValue = new Date(hooks.now());
		        if (config._useUTC) {
		            return [
		                nowValue.getUTCFullYear(),
		                nowValue.getUTCMonth(),
		                nowValue.getUTCDate(),
		            ];
		        }
		        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
		    }

		    // convert an array to a date.
		    // the array should mirror the parameters below
		    // note: all values past the year are optional and will default to the lowest possible value.
		    // [year, month, day , hour, minute, second, millisecond]
		    function configFromArray(config) {
		        var i,
		            date,
		            input = [],
		            currentDate,
		            expectedWeekday,
		            yearToUse;

		        if (config._d) {
		            return;
		        }

		        currentDate = currentDateArray(config);

		        //compute day of the year from weeks and weekdays
		        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
		            dayOfYearFromWeekInfo(config);
		        }

		        //if the day of the year is set, figure out what it is
		        if (config._dayOfYear != null) {
		            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

		            if (
		                config._dayOfYear > daysInYear(yearToUse) ||
		                config._dayOfYear === 0
		            ) {
		                getParsingFlags(config)._overflowDayOfYear = true;
		            }

		            date = createUTCDate(yearToUse, 0, config._dayOfYear);
		            config._a[MONTH] = date.getUTCMonth();
		            config._a[DATE] = date.getUTCDate();
		        }

		        // Default to current date.
		        // * if no year, month, day of month are given, default to today
		        // * if day of month is given, default month and year
		        // * if month is given, default only year
		        // * if year is given, don't default anything
		        for (i = 0; i < 3 && config._a[i] == null; ++i) {
		            config._a[i] = input[i] = currentDate[i];
		        }

		        // Zero out whatever was not defaulted, including time
		        for (; i < 7; i++) {
		            config._a[i] = input[i] =
		                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
		        }

		        // Check for 24:00:00.000
		        if (
		            config._a[HOUR] === 24 &&
		            config._a[MINUTE] === 0 &&
		            config._a[SECOND] === 0 &&
		            config._a[MILLISECOND] === 0
		        ) {
		            config._nextDay = true;
		            config._a[HOUR] = 0;
		        }

		        config._d = (config._useUTC ? createUTCDate : createDate).apply(
		            null,
		            input
		        );
		        expectedWeekday = config._useUTC
		            ? config._d.getUTCDay()
		            : config._d.getDay();

		        // Apply timezone offset from input. The actual utcOffset can be changed
		        // with parseZone.
		        if (config._tzm != null) {
		            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
		        }

		        if (config._nextDay) {
		            config._a[HOUR] = 24;
		        }

		        // check for mismatching day of week
		        if (
		            config._w &&
		            typeof config._w.d !== 'undefined' &&
		            config._w.d !== expectedWeekday
		        ) {
		            getParsingFlags(config).weekdayMismatch = true;
		        }
		    }

		    function dayOfYearFromWeekInfo(config) {
		        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

		        w = config._w;
		        if (w.GG != null || w.W != null || w.E != null) {
		            dow = 1;
		            doy = 4;

		            // TODO: We need to take the current isoWeekYear, but that depends on
		            // how we interpret now (local, utc, fixed offset). So create
		            // a now version of current config (take local/utc/offset flags, and
		            // create now).
		            weekYear = defaults(
		                w.GG,
		                config._a[YEAR],
		                weekOfYear(createLocal(), 1, 4).year
		            );
		            week = defaults(w.W, 1);
		            weekday = defaults(w.E, 1);
		            if (weekday < 1 || weekday > 7) {
		                weekdayOverflow = true;
		            }
		        } else {
		            dow = config._locale._week.dow;
		            doy = config._locale._week.doy;

		            curWeek = weekOfYear(createLocal(), dow, doy);

		            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

		            // Default to current week.
		            week = defaults(w.w, curWeek.week);

		            if (w.d != null) {
		                // weekday -- low day numbers are considered next week
		                weekday = w.d;
		                if (weekday < 0 || weekday > 6) {
		                    weekdayOverflow = true;
		                }
		            } else if (w.e != null) {
		                // local weekday -- counting starts from beginning of week
		                weekday = w.e + dow;
		                if (w.e < 0 || w.e > 6) {
		                    weekdayOverflow = true;
		                }
		            } else {
		                // default to beginning of week
		                weekday = dow;
		            }
		        }
		        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
		            getParsingFlags(config)._overflowWeeks = true;
		        } else if (weekdayOverflow != null) {
		            getParsingFlags(config)._overflowWeekday = true;
		        } else {
		            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
		            config._a[YEAR] = temp.year;
		            config._dayOfYear = temp.dayOfYear;
		        }
		    }

		    // constant that refers to the ISO standard
		    hooks.ISO_8601 = function () {};

		    // constant that refers to the RFC 2822 form
		    hooks.RFC_2822 = function () {};

		    // date from string and format string
		    function configFromStringAndFormat(config) {
		        // TODO: Move this to another part of the creation flow to prevent circular deps
		        if (config._f === hooks.ISO_8601) {
		            configFromISO(config);
		            return;
		        }
		        if (config._f === hooks.RFC_2822) {
		            configFromRFC2822(config);
		            return;
		        }
		        config._a = [];
		        getParsingFlags(config).empty = true;

		        // This array is used to make a Date, either with `new Date` or `Date.UTC`
		        var string = '' + config._i,
		            i,
		            parsedInput,
		            tokens,
		            token,
		            skipped,
		            stringLength = string.length,
		            totalParsedInputLength = 0,
		            era,
		            tokenLen;

		        tokens =
		            expandFormat(config._f, config._locale).match(formattingTokens) || [];
		        tokenLen = tokens.length;
		        for (i = 0; i < tokenLen; i++) {
		            token = tokens[i];
		            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
		                [])[0];
		            if (parsedInput) {
		                skipped = string.substr(0, string.indexOf(parsedInput));
		                if (skipped.length > 0) {
		                    getParsingFlags(config).unusedInput.push(skipped);
		                }
		                string = string.slice(
		                    string.indexOf(parsedInput) + parsedInput.length
		                );
		                totalParsedInputLength += parsedInput.length;
		            }
		            // don't parse if it's not a known token
		            if (formatTokenFunctions[token]) {
		                if (parsedInput) {
		                    getParsingFlags(config).empty = false;
		                } else {
		                    getParsingFlags(config).unusedTokens.push(token);
		                }
		                addTimeToArrayFromToken(token, parsedInput, config);
		            } else if (config._strict && !parsedInput) {
		                getParsingFlags(config).unusedTokens.push(token);
		            }
		        }

		        // add remaining unparsed input length to the string
		        getParsingFlags(config).charsLeftOver =
		            stringLength - totalParsedInputLength;
		        if (string.length > 0) {
		            getParsingFlags(config).unusedInput.push(string);
		        }

		        // clear _12h flag if hour is <= 12
		        if (
		            config._a[HOUR] <= 12 &&
		            getParsingFlags(config).bigHour === true &&
		            config._a[HOUR] > 0
		        ) {
		            getParsingFlags(config).bigHour = undefined;
		        }

		        getParsingFlags(config).parsedDateParts = config._a.slice(0);
		        getParsingFlags(config).meridiem = config._meridiem;
		        // handle meridiem
		        config._a[HOUR] = meridiemFixWrap(
		            config._locale,
		            config._a[HOUR],
		            config._meridiem
		        );

		        // handle era
		        era = getParsingFlags(config).era;
		        if (era !== null) {
		            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
		        }

		        configFromArray(config);
		        checkOverflow(config);
		    }

		    function meridiemFixWrap(locale, hour, meridiem) {
		        var isPm;

		        if (meridiem == null) {
		            // nothing to do
		            return hour;
		        }
		        if (locale.meridiemHour != null) {
		            return locale.meridiemHour(hour, meridiem);
		        } else if (locale.isPM != null) {
		            // Fallback
		            isPm = locale.isPM(meridiem);
		            if (isPm && hour < 12) {
		                hour += 12;
		            }
		            if (!isPm && hour === 12) {
		                hour = 0;
		            }
		            return hour;
		        } else {
		            // this is not supposed to happen
		            return hour;
		        }
		    }

		    // date from string and array of format strings
		    function configFromStringAndArray(config) {
		        var tempConfig,
		            bestMoment,
		            scoreToBeat,
		            i,
		            currentScore,
		            validFormatFound,
		            bestFormatIsValid = false,
		            configfLen = config._f.length;

		        if (configfLen === 0) {
		            getParsingFlags(config).invalidFormat = true;
		            config._d = new Date(NaN);
		            return;
		        }

		        for (i = 0; i < configfLen; i++) {
		            currentScore = 0;
		            validFormatFound = false;
		            tempConfig = copyConfig({}, config);
		            if (config._useUTC != null) {
		                tempConfig._useUTC = config._useUTC;
		            }
		            tempConfig._f = config._f[i];
		            configFromStringAndFormat(tempConfig);

		            if (isValid(tempConfig)) {
		                validFormatFound = true;
		            }

		            // if there is any input that was not parsed add a penalty for that format
		            currentScore += getParsingFlags(tempConfig).charsLeftOver;

		            //or tokens
		            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

		            getParsingFlags(tempConfig).score = currentScore;

		            if (!bestFormatIsValid) {
		                if (
		                    scoreToBeat == null ||
		                    currentScore < scoreToBeat ||
		                    validFormatFound
		                ) {
		                    scoreToBeat = currentScore;
		                    bestMoment = tempConfig;
		                    if (validFormatFound) {
		                        bestFormatIsValid = true;
		                    }
		                }
		            } else {
		                if (currentScore < scoreToBeat) {
		                    scoreToBeat = currentScore;
		                    bestMoment = tempConfig;
		                }
		            }
		        }

		        extend(config, bestMoment || tempConfig);
		    }

		    function configFromObject(config) {
		        if (config._d) {
		            return;
		        }

		        var i = normalizeObjectUnits(config._i),
		            dayOrDate = i.day === undefined ? i.date : i.day;
		        config._a = map(
		            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
		            function (obj) {
		                return obj && parseInt(obj, 10);
		            }
		        );

		        configFromArray(config);
		    }

		    function createFromConfig(config) {
		        var res = new Moment(checkOverflow(prepareConfig(config)));
		        if (res._nextDay) {
		            // Adding is smart enough around DST
		            res.add(1, 'd');
		            res._nextDay = undefined;
		        }

		        return res;
		    }

		    function prepareConfig(config) {
		        var input = config._i,
		            format = config._f;

		        config._locale = config._locale || getLocale(config._l);

		        if (input === null || (format === undefined && input === '')) {
		            return createInvalid({ nullInput: true });
		        }

		        if (typeof input === 'string') {
		            config._i = input = config._locale.preparse(input);
		        }

		        if (isMoment(input)) {
		            return new Moment(checkOverflow(input));
		        } else if (isDate(input)) {
		            config._d = input;
		        } else if (isArray(format)) {
		            configFromStringAndArray(config);
		        } else if (format) {
		            configFromStringAndFormat(config);
		        } else {
		            configFromInput(config);
		        }

		        if (!isValid(config)) {
		            config._d = null;
		        }

		        return config;
		    }

		    function configFromInput(config) {
		        var input = config._i;
		        if (isUndefined(input)) {
		            config._d = new Date(hooks.now());
		        } else if (isDate(input)) {
		            config._d = new Date(input.valueOf());
		        } else if (typeof input === 'string') {
		            configFromString(config);
		        } else if (isArray(input)) {
		            config._a = map(input.slice(0), function (obj) {
		                return parseInt(obj, 10);
		            });
		            configFromArray(config);
		        } else if (isObject(input)) {
		            configFromObject(config);
		        } else if (isNumber(input)) {
		            // from milliseconds
		            config._d = new Date(input);
		        } else {
		            hooks.createFromInputFallback(config);
		        }
		    }

		    function createLocalOrUTC(input, format, locale, strict, isUTC) {
		        var c = {};

		        if (format === true || format === false) {
		            strict = format;
		            format = undefined;
		        }

		        if (locale === true || locale === false) {
		            strict = locale;
		            locale = undefined;
		        }

		        if (
		            (isObject(input) && isObjectEmpty(input)) ||
		            (isArray(input) && input.length === 0)
		        ) {
		            input = undefined;
		        }
		        // object construction must be done this way.
		        // https://github.com/moment/moment/issues/1423
		        c._isAMomentObject = true;
		        c._useUTC = c._isUTC = isUTC;
		        c._l = locale;
		        c._i = input;
		        c._f = format;
		        c._strict = strict;

		        return createFromConfig(c);
		    }

		    function createLocal(input, format, locale, strict) {
		        return createLocalOrUTC(input, format, locale, strict, false);
		    }

		    var prototypeMin = deprecate(
		            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
		            function () {
		                var other = createLocal.apply(null, arguments);
		                if (this.isValid() && other.isValid()) {
		                    return other < this ? this : other;
		                } else {
		                    return createInvalid();
		                }
		            }
		        ),
		        prototypeMax = deprecate(
		            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
		            function () {
		                var other = createLocal.apply(null, arguments);
		                if (this.isValid() && other.isValid()) {
		                    return other > this ? this : other;
		                } else {
		                    return createInvalid();
		                }
		            }
		        );

		    // Pick a moment m from moments so that m[fn](other) is true for all
		    // other. This relies on the function fn to be transitive.
		    //
		    // moments should either be an array of moment objects or an array, whose
		    // first element is an array of moment objects.
		    function pickBy(fn, moments) {
		        var res, i;
		        if (moments.length === 1 && isArray(moments[0])) {
		            moments = moments[0];
		        }
		        if (!moments.length) {
		            return createLocal();
		        }
		        res = moments[0];
		        for (i = 1; i < moments.length; ++i) {
		            if (!moments[i].isValid() || moments[i][fn](res)) {
		                res = moments[i];
		            }
		        }
		        return res;
		    }

		    // TODO: Use [].sort instead?
		    function min() {
		        var args = [].slice.call(arguments, 0);

		        return pickBy('isBefore', args);
		    }

		    function max() {
		        var args = [].slice.call(arguments, 0);

		        return pickBy('isAfter', args);
		    }

		    var now = function () {
		        return Date.now ? Date.now() : +new Date();
		    };

		    var ordering = [
		        'year',
		        'quarter',
		        'month',
		        'week',
		        'day',
		        'hour',
		        'minute',
		        'second',
		        'millisecond',
		    ];

		    function isDurationValid(m) {
		        var key,
		            unitHasDecimal = false,
		            i,
		            orderLen = ordering.length;
		        for (key in m) {
		            if (
		                hasOwnProp(m, key) &&
		                !(
		                    indexOf.call(ordering, key) !== -1 &&
		                    (m[key] == null || !isNaN(m[key]))
		                )
		            ) {
		                return false;
		            }
		        }

		        for (i = 0; i < orderLen; ++i) {
		            if (m[ordering[i]]) {
		                if (unitHasDecimal) {
		                    return false; // only allow non-integers for smallest unit
		                }
		                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
		                    unitHasDecimal = true;
		                }
		            }
		        }

		        return true;
		    }

		    function isValid$1() {
		        return this._isValid;
		    }

		    function createInvalid$1() {
		        return createDuration(NaN);
		    }

		    function Duration(duration) {
		        var normalizedInput = normalizeObjectUnits(duration),
		            years = normalizedInput.year || 0,
		            quarters = normalizedInput.quarter || 0,
		            months = normalizedInput.month || 0,
		            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
		            days = normalizedInput.day || 0,
		            hours = normalizedInput.hour || 0,
		            minutes = normalizedInput.minute || 0,
		            seconds = normalizedInput.second || 0,
		            milliseconds = normalizedInput.millisecond || 0;

		        this._isValid = isDurationValid(normalizedInput);

		        // representation for dateAddRemove
		        this._milliseconds =
		            +milliseconds +
		            seconds * 1e3 + // 1000
		            minutes * 6e4 + // 1000 * 60
		            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
		        // Because of dateAddRemove treats 24 hours as different from a
		        // day when working around DST, we need to store them separately
		        this._days = +days + weeks * 7;
		        // It is impossible to translate months into days without knowing
		        // which months you are are talking about, so we have to store
		        // it separately.
		        this._months = +months + quarters * 3 + years * 12;

		        this._data = {};

		        this._locale = getLocale();

		        this._bubble();
		    }

		    function isDuration(obj) {
		        return obj instanceof Duration;
		    }

		    function absRound(number) {
		        if (number < 0) {
		            return Math.round(-1 * number) * -1;
		        } else {
		            return Math.round(number);
		        }
		    }

		    // compare two arrays, return the number of differences
		    function compareArrays(array1, array2, dontConvert) {
		        var len = Math.min(array1.length, array2.length),
		            lengthDiff = Math.abs(array1.length - array2.length),
		            diffs = 0,
		            i;
		        for (i = 0; i < len; i++) {
		            if (
		                (dontConvert && array1[i] !== array2[i]) ||
		                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
		            ) {
		                diffs++;
		            }
		        }
		        return diffs + lengthDiff;
		    }

		    // FORMATTING

		    function offset(token, separator) {
		        addFormatToken(token, 0, 0, function () {
		            var offset = this.utcOffset(),
		                sign = '+';
		            if (offset < 0) {
		                offset = -offset;
		                sign = '-';
		            }
		            return (
		                sign +
		                zeroFill(~~(offset / 60), 2) +
		                separator +
		                zeroFill(~~offset % 60, 2)
		            );
		        });
		    }

		    offset('Z', ':');
		    offset('ZZ', '');

		    // PARSING

		    addRegexToken('Z', matchShortOffset);
		    addRegexToken('ZZ', matchShortOffset);
		    addParseToken(['Z', 'ZZ'], function (input, array, config) {
		        config._useUTC = true;
		        config._tzm = offsetFromString(matchShortOffset, input);
		    });

		    // HELPERS

		    // timezone chunker
		    // '+10:00' > ['10',  '00']
		    // '-1530'  > ['-15', '30']
		    var chunkOffset = /([\+\-]|\d\d)/gi;

		    function offsetFromString(matcher, string) {
		        var matches = (string || '').match(matcher),
		            chunk,
		            parts,
		            minutes;

		        if (matches === null) {
		            return null;
		        }

		        chunk = matches[matches.length - 1] || [];
		        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
		        minutes = +(parts[1] * 60) + toInt(parts[2]);

		        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
		    }

		    // Return a moment from input, that is local/utc/zone equivalent to model.
		    function cloneWithOffset(input, model) {
		        var res, diff;
		        if (model._isUTC) {
		            res = model.clone();
		            diff =
		                (isMoment(input) || isDate(input)
		                    ? input.valueOf()
		                    : createLocal(input).valueOf()) - res.valueOf();
		            // Use low-level api, because this fn is low-level api.
		            res._d.setTime(res._d.valueOf() + diff);
		            hooks.updateOffset(res, false);
		            return res;
		        } else {
		            return createLocal(input).local();
		        }
		    }

		    function getDateOffset(m) {
		        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
		        // https://github.com/moment/moment/pull/1871
		        return -Math.round(m._d.getTimezoneOffset());
		    }

		    // HOOKS

		    // This function will be called whenever a moment is mutated.
		    // It is intended to keep the offset in sync with the timezone.
		    hooks.updateOffset = function () {};

		    // MOMENTS

		    // keepLocalTime = true means only change the timezone, without
		    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
		    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
		    // +0200, so we adjust the time as needed, to be valid.
		    //
		    // Keeping the time actually adds/subtracts (one hour)
		    // from the actual represented time. That is why we call updateOffset
		    // a second time. In case it wants us to change the offset again
		    // _changeInProgress == true case, then we have to adjust, because
		    // there is no such time in the given timezone.
		    function getSetOffset(input, keepLocalTime, keepMinutes) {
		        var offset = this._offset || 0,
		            localAdjust;
		        if (!this.isValid()) {
		            return input != null ? this : NaN;
		        }
		        if (input != null) {
		            if (typeof input === 'string') {
		                input = offsetFromString(matchShortOffset, input);
		                if (input === null) {
		                    return this;
		                }
		            } else if (Math.abs(input) < 16 && !keepMinutes) {
		                input = input * 60;
		            }
		            if (!this._isUTC && keepLocalTime) {
		                localAdjust = getDateOffset(this);
		            }
		            this._offset = input;
		            this._isUTC = true;
		            if (localAdjust != null) {
		                this.add(localAdjust, 'm');
		            }
		            if (offset !== input) {
		                if (!keepLocalTime || this._changeInProgress) {
		                    addSubtract(
		                        this,
		                        createDuration(input - offset, 'm'),
		                        1,
		                        false
		                    );
		                } else if (!this._changeInProgress) {
		                    this._changeInProgress = true;
		                    hooks.updateOffset(this, true);
		                    this._changeInProgress = null;
		                }
		            }
		            return this;
		        } else {
		            return this._isUTC ? offset : getDateOffset(this);
		        }
		    }

		    function getSetZone(input, keepLocalTime) {
		        if (input != null) {
		            if (typeof input !== 'string') {
		                input = -input;
		            }

		            this.utcOffset(input, keepLocalTime);

		            return this;
		        } else {
		            return -this.utcOffset();
		        }
		    }

		    function setOffsetToUTC(keepLocalTime) {
		        return this.utcOffset(0, keepLocalTime);
		    }

		    function setOffsetToLocal(keepLocalTime) {
		        if (this._isUTC) {
		            this.utcOffset(0, keepLocalTime);
		            this._isUTC = false;

		            if (keepLocalTime) {
		                this.subtract(getDateOffset(this), 'm');
		            }
		        }
		        return this;
		    }

		    function setOffsetToParsedOffset() {
		        if (this._tzm != null) {
		            this.utcOffset(this._tzm, false, true);
		        } else if (typeof this._i === 'string') {
		            var tZone = offsetFromString(matchOffset, this._i);
		            if (tZone != null) {
		                this.utcOffset(tZone);
		            } else {
		                this.utcOffset(0, true);
		            }
		        }
		        return this;
		    }

		    function hasAlignedHourOffset(input) {
		        if (!this.isValid()) {
		            return false;
		        }
		        input = input ? createLocal(input).utcOffset() : 0;

		        return (this.utcOffset() - input) % 60 === 0;
		    }

		    function isDaylightSavingTime() {
		        return (
		            this.utcOffset() > this.clone().month(0).utcOffset() ||
		            this.utcOffset() > this.clone().month(5).utcOffset()
		        );
		    }

		    function isDaylightSavingTimeShifted() {
		        if (!isUndefined(this._isDSTShifted)) {
		            return this._isDSTShifted;
		        }

		        var c = {},
		            other;

		        copyConfig(c, this);
		        c = prepareConfig(c);

		        if (c._a) {
		            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
		            this._isDSTShifted =
		                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
		        } else {
		            this._isDSTShifted = false;
		        }

		        return this._isDSTShifted;
		    }

		    function isLocal() {
		        return this.isValid() ? !this._isUTC : false;
		    }

		    function isUtcOffset() {
		        return this.isValid() ? this._isUTC : false;
		    }

		    function isUtc() {
		        return this.isValid() ? this._isUTC && this._offset === 0 : false;
		    }

		    // ASP.NET json date format regex
		    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
		        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
		        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
		        // and further modified to allow for strings containing both week and day
		        isoRegex =
		            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

		    function createDuration(input, key) {
		        var duration = input,
		            // matching against regexp is expensive, do it on demand
		            match = null,
		            sign,
		            ret,
		            diffRes;

		        if (isDuration(input)) {
		            duration = {
		                ms: input._milliseconds,
		                d: input._days,
		                M: input._months,
		            };
		        } else if (isNumber(input) || !isNaN(+input)) {
		            duration = {};
		            if (key) {
		                duration[key] = +input;
		            } else {
		                duration.milliseconds = +input;
		            }
		        } else if ((match = aspNetRegex.exec(input))) {
		            sign = match[1] === '-' ? -1 : 1;
		            duration = {
		                y: 0,
		                d: toInt(match[DATE]) * sign,
		                h: toInt(match[HOUR]) * sign,
		                m: toInt(match[MINUTE]) * sign,
		                s: toInt(match[SECOND]) * sign,
		                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
		            };
		        } else if ((match = isoRegex.exec(input))) {
		            sign = match[1] === '-' ? -1 : 1;
		            duration = {
		                y: parseIso(match[2], sign),
		                M: parseIso(match[3], sign),
		                w: parseIso(match[4], sign),
		                d: parseIso(match[5], sign),
		                h: parseIso(match[6], sign),
		                m: parseIso(match[7], sign),
		                s: parseIso(match[8], sign),
		            };
		        } else if (duration == null) {
		            // checks for null or undefined
		            duration = {};
		        } else if (
		            typeof duration === 'object' &&
		            ('from' in duration || 'to' in duration)
		        ) {
		            diffRes = momentsDifference(
		                createLocal(duration.from),
		                createLocal(duration.to)
		            );

		            duration = {};
		            duration.ms = diffRes.milliseconds;
		            duration.M = diffRes.months;
		        }

		        ret = new Duration(duration);

		        if (isDuration(input) && hasOwnProp(input, '_locale')) {
		            ret._locale = input._locale;
		        }

		        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
		            ret._isValid = input._isValid;
		        }

		        return ret;
		    }

		    createDuration.fn = Duration.prototype;
		    createDuration.invalid = createInvalid$1;

		    function parseIso(inp, sign) {
		        // We'd normally use ~~inp for this, but unfortunately it also
		        // converts floats to ints.
		        // inp may be undefined, so careful calling replace on it.
		        var res = inp && parseFloat(inp.replace(',', '.'));
		        // apply sign while we're at it
		        return (isNaN(res) ? 0 : res) * sign;
		    }

		    function positiveMomentsDifference(base, other) {
		        var res = {};

		        res.months =
		            other.month() - base.month() + (other.year() - base.year()) * 12;
		        if (base.clone().add(res.months, 'M').isAfter(other)) {
		            --res.months;
		        }

		        res.milliseconds = +other - +base.clone().add(res.months, 'M');

		        return res;
		    }

		    function momentsDifference(base, other) {
		        var res;
		        if (!(base.isValid() && other.isValid())) {
		            return { milliseconds: 0, months: 0 };
		        }

		        other = cloneWithOffset(other, base);
		        if (base.isBefore(other)) {
		            res = positiveMomentsDifference(base, other);
		        } else {
		            res = positiveMomentsDifference(other, base);
		            res.milliseconds = -res.milliseconds;
		            res.months = -res.months;
		        }

		        return res;
		    }

		    // TODO: remove 'name' arg after deprecation is removed
		    function createAdder(direction, name) {
		        return function (val, period) {
		            var dur, tmp;
		            //invert the arguments, but complain about it
		            if (period !== null && !isNaN(+period)) {
		                deprecateSimple(
		                    name,
		                    'moment().' +
		                        name +
		                        '(period, number) is deprecated. Please use moment().' +
		                        name +
		                        '(number, period). ' +
		                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
		                );
		                tmp = val;
		                val = period;
		                period = tmp;
		            }

		            dur = createDuration(val, period);
		            addSubtract(this, dur, direction);
		            return this;
		        };
		    }

		    function addSubtract(mom, duration, isAdding, updateOffset) {
		        var milliseconds = duration._milliseconds,
		            days = absRound(duration._days),
		            months = absRound(duration._months);

		        if (!mom.isValid()) {
		            // No op
		            return;
		        }

		        updateOffset = updateOffset == null ? true : updateOffset;

		        if (months) {
		            setMonth(mom, get(mom, 'Month') + months * isAdding);
		        }
		        if (days) {
		            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
		        }
		        if (milliseconds) {
		            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
		        }
		        if (updateOffset) {
		            hooks.updateOffset(mom, days || months);
		        }
		    }

		    var add = createAdder(1, 'add'),
		        subtract = createAdder(-1, 'subtract');

		    function isString(input) {
		        return typeof input === 'string' || input instanceof String;
		    }

		    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
		    function isMomentInput(input) {
		        return (
		            isMoment(input) ||
		            isDate(input) ||
		            isString(input) ||
		            isNumber(input) ||
		            isNumberOrStringArray(input) ||
		            isMomentInputObject(input) ||
		            input === null ||
		            input === undefined
		        );
		    }

		    function isMomentInputObject(input) {
		        var objectTest = isObject(input) && !isObjectEmpty(input),
		            propertyTest = false,
		            properties = [
		                'years',
		                'year',
		                'y',
		                'months',
		                'month',
		                'M',
		                'days',
		                'day',
		                'd',
		                'dates',
		                'date',
		                'D',
		                'hours',
		                'hour',
		                'h',
		                'minutes',
		                'minute',
		                'm',
		                'seconds',
		                'second',
		                's',
		                'milliseconds',
		                'millisecond',
		                'ms',
		            ],
		            i,
		            property,
		            propertyLen = properties.length;

		        for (i = 0; i < propertyLen; i += 1) {
		            property = properties[i];
		            propertyTest = propertyTest || hasOwnProp(input, property);
		        }

		        return objectTest && propertyTest;
		    }

		    function isNumberOrStringArray(input) {
		        var arrayTest = isArray(input),
		            dataTypeTest = false;
		        if (arrayTest) {
		            dataTypeTest =
		                input.filter(function (item) {
		                    return !isNumber(item) && isString(input);
		                }).length === 0;
		        }
		        return arrayTest && dataTypeTest;
		    }

		    function isCalendarSpec(input) {
		        var objectTest = isObject(input) && !isObjectEmpty(input),
		            propertyTest = false,
		            properties = [
		                'sameDay',
		                'nextDay',
		                'lastDay',
		                'nextWeek',
		                'lastWeek',
		                'sameElse',
		            ],
		            i,
		            property;

		        for (i = 0; i < properties.length; i += 1) {
		            property = properties[i];
		            propertyTest = propertyTest || hasOwnProp(input, property);
		        }

		        return objectTest && propertyTest;
		    }

		    function getCalendarFormat(myMoment, now) {
		        var diff = myMoment.diff(now, 'days', true);
		        return diff < -6
		            ? 'sameElse'
		            : diff < -1
		            ? 'lastWeek'
		            : diff < 0
		            ? 'lastDay'
		            : diff < 1
		            ? 'sameDay'
		            : diff < 2
		            ? 'nextDay'
		            : diff < 7
		            ? 'nextWeek'
		            : 'sameElse';
		    }

		    function calendar$1(time, formats) {
		        // Support for single parameter, formats only overload to the calendar function
		        if (arguments.length === 1) {
		            if (!arguments[0]) {
		                time = undefined;
		                formats = undefined;
		            } else if (isMomentInput(arguments[0])) {
		                time = arguments[0];
		                formats = undefined;
		            } else if (isCalendarSpec(arguments[0])) {
		                formats = arguments[0];
		                time = undefined;
		            }
		        }
		        // We want to compare the start of today, vs this.
		        // Getting start-of-today depends on whether we're local/utc/offset or not.
		        var now = time || createLocal(),
		            sod = cloneWithOffset(now, this).startOf('day'),
		            format = hooks.calendarFormat(this, sod) || 'sameElse',
		            output =
		                formats &&
		                (isFunction(formats[format])
		                    ? formats[format].call(this, now)
		                    : formats[format]);

		        return this.format(
		            output || this.localeData().calendar(format, this, createLocal(now))
		        );
		    }

		    function clone() {
		        return new Moment(this);
		    }

		    function isAfter(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input);
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() > localInput.valueOf();
		        } else {
		            return localInput.valueOf() < this.clone().startOf(units).valueOf();
		        }
		    }

		    function isBefore(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input);
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() < localInput.valueOf();
		        } else {
		            return this.clone().endOf(units).valueOf() < localInput.valueOf();
		        }
		    }

		    function isBetween(from, to, units, inclusivity) {
		        var localFrom = isMoment(from) ? from : createLocal(from),
		            localTo = isMoment(to) ? to : createLocal(to);
		        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
		            return false;
		        }
		        inclusivity = inclusivity || '()';
		        return (
		            (inclusivity[0] === '('
		                ? this.isAfter(localFrom, units)
		                : !this.isBefore(localFrom, units)) &&
		            (inclusivity[1] === ')'
		                ? this.isBefore(localTo, units)
		                : !this.isAfter(localTo, units))
		        );
		    }

		    function isSame(input, units) {
		        var localInput = isMoment(input) ? input : createLocal(input),
		            inputMs;
		        if (!(this.isValid() && localInput.isValid())) {
		            return false;
		        }
		        units = normalizeUnits(units) || 'millisecond';
		        if (units === 'millisecond') {
		            return this.valueOf() === localInput.valueOf();
		        } else {
		            inputMs = localInput.valueOf();
		            return (
		                this.clone().startOf(units).valueOf() <= inputMs &&
		                inputMs <= this.clone().endOf(units).valueOf()
		            );
		        }
		    }

		    function isSameOrAfter(input, units) {
		        return this.isSame(input, units) || this.isAfter(input, units);
		    }

		    function isSameOrBefore(input, units) {
		        return this.isSame(input, units) || this.isBefore(input, units);
		    }

		    function diff(input, units, asFloat) {
		        var that, zoneDelta, output;

		        if (!this.isValid()) {
		            return NaN;
		        }

		        that = cloneWithOffset(input, this);

		        if (!that.isValid()) {
		            return NaN;
		        }

		        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

		        units = normalizeUnits(units);

		        switch (units) {
		            case 'year':
		                output = monthDiff(this, that) / 12;
		                break;
		            case 'month':
		                output = monthDiff(this, that);
		                break;
		            case 'quarter':
		                output = monthDiff(this, that) / 3;
		                break;
		            case 'second':
		                output = (this - that) / 1e3;
		                break; // 1000
		            case 'minute':
		                output = (this - that) / 6e4;
		                break; // 1000 * 60
		            case 'hour':
		                output = (this - that) / 36e5;
		                break; // 1000 * 60 * 60
		            case 'day':
		                output = (this - that - zoneDelta) / 864e5;
		                break; // 1000 * 60 * 60 * 24, negate dst
		            case 'week':
		                output = (this - that - zoneDelta) / 6048e5;
		                break; // 1000 * 60 * 60 * 24 * 7, negate dst
		            default:
		                output = this - that;
		        }

		        return asFloat ? output : absFloor(output);
		    }

		    function monthDiff(a, b) {
		        if (a.date() < b.date()) {
		            // end-of-month calculations work correct when the start month has more
		            // days than the end month.
		            return -monthDiff(b, a);
		        }
		        // difference in months
		        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
		            // b is in (anchor - 1 month, anchor + 1 month)
		            anchor = a.clone().add(wholeMonthDiff, 'months'),
		            anchor2,
		            adjust;

		        if (b - anchor < 0) {
		            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
		            // linear across the month
		            adjust = (b - anchor) / (anchor - anchor2);
		        } else {
		            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
		            // linear across the month
		            adjust = (b - anchor) / (anchor2 - anchor);
		        }

		        //check for negative zero, return zero if negative zero
		        return -(wholeMonthDiff + adjust) || 0;
		    }

		    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
		    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

		    function toString() {
		        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
		    }

		    function toISOString(keepOffset) {
		        if (!this.isValid()) {
		            return null;
		        }
		        var utc = keepOffset !== true,
		            m = utc ? this.clone().utc() : this;
		        if (m.year() < 0 || m.year() > 9999) {
		            return formatMoment(
		                m,
		                utc
		                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
		                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
		            );
		        }
		        if (isFunction(Date.prototype.toISOString)) {
		            // native implementation is ~50x faster, use it when we can
		            if (utc) {
		                return this.toDate().toISOString();
		            } else {
		                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
		                    .toISOString()
		                    .replace('Z', formatMoment(m, 'Z'));
		            }
		        }
		        return formatMoment(
		            m,
		            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
		        );
		    }

		    /**
		     * Return a human readable representation of a moment that can
		     * also be evaluated to get a new moment which is the same
		     *
		     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
		     */
		    function inspect() {
		        if (!this.isValid()) {
		            return 'moment.invalid(/* ' + this._i + ' */)';
		        }
		        var func = 'moment',
		            zone = '',
		            prefix,
		            year,
		            datetime,
		            suffix;
		        if (!this.isLocal()) {
		            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
		            zone = 'Z';
		        }
		        prefix = '[' + func + '("]';
		        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
		        datetime = '-MM-DD[T]HH:mm:ss.SSS';
		        suffix = zone + '[")]';

		        return this.format(prefix + year + datetime + suffix);
		    }

		    function format(inputString) {
		        if (!inputString) {
		            inputString = this.isUtc()
		                ? hooks.defaultFormatUtc
		                : hooks.defaultFormat;
		        }
		        var output = formatMoment(this, inputString);
		        return this.localeData().postformat(output);
		    }

		    function from(time, withoutSuffix) {
		        if (
		            this.isValid() &&
		            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
		        ) {
		            return createDuration({ to: this, from: time })
		                .locale(this.locale())
		                .humanize(!withoutSuffix);
		        } else {
		            return this.localeData().invalidDate();
		        }
		    }

		    function fromNow(withoutSuffix) {
		        return this.from(createLocal(), withoutSuffix);
		    }

		    function to(time, withoutSuffix) {
		        if (
		            this.isValid() &&
		            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
		        ) {
		            return createDuration({ from: this, to: time })
		                .locale(this.locale())
		                .humanize(!withoutSuffix);
		        } else {
		            return this.localeData().invalidDate();
		        }
		    }

		    function toNow(withoutSuffix) {
		        return this.to(createLocal(), withoutSuffix);
		    }

		    // If passed a locale key, it will set the locale for this
		    // instance.  Otherwise, it will return the locale configuration
		    // variables for this instance.
		    function locale(key) {
		        var newLocaleData;

		        if (key === undefined) {
		            return this._locale._abbr;
		        } else {
		            newLocaleData = getLocale(key);
		            if (newLocaleData != null) {
		                this._locale = newLocaleData;
		            }
		            return this;
		        }
		    }

		    var lang = deprecate(
		        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
		        function (key) {
		            if (key === undefined) {
		                return this.localeData();
		            } else {
		                return this.locale(key);
		            }
		        }
		    );

		    function localeData() {
		        return this._locale;
		    }

		    var MS_PER_SECOND = 1000,
		        MS_PER_MINUTE = 60 * MS_PER_SECOND,
		        MS_PER_HOUR = 60 * MS_PER_MINUTE,
		        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

		    // actual modulo - handles negative numbers (for dates before 1970):
		    function mod$1(dividend, divisor) {
		        return ((dividend % divisor) + divisor) % divisor;
		    }

		    function localStartOfDate(y, m, d) {
		        // the date constructor remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
		        } else {
		            return new Date(y, m, d).valueOf();
		        }
		    }

		    function utcStartOfDate(y, m, d) {
		        // Date.UTC remaps years 0-99 to 1900-1999
		        if (y < 100 && y >= 0) {
		            // preserve leap years using a full 400 year cycle, then reset
		            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
		        } else {
		            return Date.UTC(y, m, d);
		        }
		    }

		    function startOf(units) {
		        var time, startOfDate;
		        units = normalizeUnits(units);
		        if (units === undefined || units === 'millisecond' || !this.isValid()) {
		            return this;
		        }

		        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

		        switch (units) {
		            case 'year':
		                time = startOfDate(this.year(), 0, 1);
		                break;
		            case 'quarter':
		                time = startOfDate(
		                    this.year(),
		                    this.month() - (this.month() % 3),
		                    1
		                );
		                break;
		            case 'month':
		                time = startOfDate(this.year(), this.month(), 1);
		                break;
		            case 'week':
		                time = startOfDate(
		                    this.year(),
		                    this.month(),
		                    this.date() - this.weekday()
		                );
		                break;
		            case 'isoWeek':
		                time = startOfDate(
		                    this.year(),
		                    this.month(),
		                    this.date() - (this.isoWeekday() - 1)
		                );
		                break;
		            case 'day':
		            case 'date':
		                time = startOfDate(this.year(), this.month(), this.date());
		                break;
		            case 'hour':
		                time = this._d.valueOf();
		                time -= mod$1(
		                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
		                    MS_PER_HOUR
		                );
		                break;
		            case 'minute':
		                time = this._d.valueOf();
		                time -= mod$1(time, MS_PER_MINUTE);
		                break;
		            case 'second':
		                time = this._d.valueOf();
		                time -= mod$1(time, MS_PER_SECOND);
		                break;
		        }

		        this._d.setTime(time);
		        hooks.updateOffset(this, true);
		        return this;
		    }

		    function endOf(units) {
		        var time, startOfDate;
		        units = normalizeUnits(units);
		        if (units === undefined || units === 'millisecond' || !this.isValid()) {
		            return this;
		        }

		        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

		        switch (units) {
		            case 'year':
		                time = startOfDate(this.year() + 1, 0, 1) - 1;
		                break;
		            case 'quarter':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month() - (this.month() % 3) + 3,
		                        1
		                    ) - 1;
		                break;
		            case 'month':
		                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
		                break;
		            case 'week':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month(),
		                        this.date() - this.weekday() + 7
		                    ) - 1;
		                break;
		            case 'isoWeek':
		                time =
		                    startOfDate(
		                        this.year(),
		                        this.month(),
		                        this.date() - (this.isoWeekday() - 1) + 7
		                    ) - 1;
		                break;
		            case 'day':
		            case 'date':
		                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
		                break;
		            case 'hour':
		                time = this._d.valueOf();
		                time +=
		                    MS_PER_HOUR -
		                    mod$1(
		                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
		                        MS_PER_HOUR
		                    ) -
		                    1;
		                break;
		            case 'minute':
		                time = this._d.valueOf();
		                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
		                break;
		            case 'second':
		                time = this._d.valueOf();
		                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
		                break;
		        }

		        this._d.setTime(time);
		        hooks.updateOffset(this, true);
		        return this;
		    }

		    function valueOf() {
		        return this._d.valueOf() - (this._offset || 0) * 60000;
		    }

		    function unix() {
		        return Math.floor(this.valueOf() / 1000);
		    }

		    function toDate() {
		        return new Date(this.valueOf());
		    }

		    function toArray() {
		        var m = this;
		        return [
		            m.year(),
		            m.month(),
		            m.date(),
		            m.hour(),
		            m.minute(),
		            m.second(),
		            m.millisecond(),
		        ];
		    }

		    function toObject() {
		        var m = this;
		        return {
		            years: m.year(),
		            months: m.month(),
		            date: m.date(),
		            hours: m.hours(),
		            minutes: m.minutes(),
		            seconds: m.seconds(),
		            milliseconds: m.milliseconds(),
		        };
		    }

		    function toJSON() {
		        // new Date(NaN).toJSON() === null
		        return this.isValid() ? this.toISOString() : null;
		    }

		    function isValid$2() {
		        return isValid(this);
		    }

		    function parsingFlags() {
		        return extend({}, getParsingFlags(this));
		    }

		    function invalidAt() {
		        return getParsingFlags(this).overflow;
		    }

		    function creationData() {
		        return {
		            input: this._i,
		            format: this._f,
		            locale: this._locale,
		            isUTC: this._isUTC,
		            strict: this._strict,
		        };
		    }

		    addFormatToken('N', 0, 0, 'eraAbbr');
		    addFormatToken('NN', 0, 0, 'eraAbbr');
		    addFormatToken('NNN', 0, 0, 'eraAbbr');
		    addFormatToken('NNNN', 0, 0, 'eraName');
		    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

		    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
		    addFormatToken('y', ['yy', 2], 0, 'eraYear');
		    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
		    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

		    addRegexToken('N', matchEraAbbr);
		    addRegexToken('NN', matchEraAbbr);
		    addRegexToken('NNN', matchEraAbbr);
		    addRegexToken('NNNN', matchEraName);
		    addRegexToken('NNNNN', matchEraNarrow);

		    addParseToken(
		        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
		        function (input, array, config, token) {
		            var era = config._locale.erasParse(input, token, config._strict);
		            if (era) {
		                getParsingFlags(config).era = era;
		            } else {
		                getParsingFlags(config).invalidEra = input;
		            }
		        }
		    );

		    addRegexToken('y', matchUnsigned);
		    addRegexToken('yy', matchUnsigned);
		    addRegexToken('yyy', matchUnsigned);
		    addRegexToken('yyyy', matchUnsigned);
		    addRegexToken('yo', matchEraYearOrdinal);

		    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
		    addParseToken(['yo'], function (input, array, config, token) {
		        var match;
		        if (config._locale._eraYearOrdinalRegex) {
		            match = input.match(config._locale._eraYearOrdinalRegex);
		        }

		        if (config._locale.eraYearOrdinalParse) {
		            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
		        } else {
		            array[YEAR] = parseInt(input, 10);
		        }
		    });

		    function localeEras(m, format) {
		        var i,
		            l,
		            date,
		            eras = this._eras || getLocale('en')._eras;
		        for (i = 0, l = eras.length; i < l; ++i) {
		            switch (typeof eras[i].since) {
		                case 'string':
		                    // truncate time
		                    date = hooks(eras[i].since).startOf('day');
		                    eras[i].since = date.valueOf();
		                    break;
		            }

		            switch (typeof eras[i].until) {
		                case 'undefined':
		                    eras[i].until = +Infinity;
		                    break;
		                case 'string':
		                    // truncate time
		                    date = hooks(eras[i].until).startOf('day').valueOf();
		                    eras[i].until = date.valueOf();
		                    break;
		            }
		        }
		        return eras;
		    }

		    function localeErasParse(eraName, format, strict) {
		        var i,
		            l,
		            eras = this.eras(),
		            name,
		            abbr,
		            narrow;
		        eraName = eraName.toUpperCase();

		        for (i = 0, l = eras.length; i < l; ++i) {
		            name = eras[i].name.toUpperCase();
		            abbr = eras[i].abbr.toUpperCase();
		            narrow = eras[i].narrow.toUpperCase();

		            if (strict) {
		                switch (format) {
		                    case 'N':
		                    case 'NN':
		                    case 'NNN':
		                        if (abbr === eraName) {
		                            return eras[i];
		                        }
		                        break;

		                    case 'NNNN':
		                        if (name === eraName) {
		                            return eras[i];
		                        }
		                        break;

		                    case 'NNNNN':
		                        if (narrow === eraName) {
		                            return eras[i];
		                        }
		                        break;
		                }
		            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
		                return eras[i];
		            }
		        }
		    }

		    function localeErasConvertYear(era, year) {
		        var dir = era.since <= era.until ? +1 : -1;
		        if (year === undefined) {
		            return hooks(era.since).year();
		        } else {
		            return hooks(era.since).year() + (year - era.offset) * dir;
		        }
		    }

		    function getEraName() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].name;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].name;
		            }
		        }

		        return '';
		    }

		    function getEraNarrow() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].narrow;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].narrow;
		            }
		        }

		        return '';
		    }

		    function getEraAbbr() {
		        var i,
		            l,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (eras[i].since <= val && val <= eras[i].until) {
		                return eras[i].abbr;
		            }
		            if (eras[i].until <= val && val <= eras[i].since) {
		                return eras[i].abbr;
		            }
		        }

		        return '';
		    }

		    function getEraYear() {
		        var i,
		            l,
		            dir,
		            val,
		            eras = this.localeData().eras();
		        for (i = 0, l = eras.length; i < l; ++i) {
		            dir = eras[i].since <= eras[i].until ? +1 : -1;

		            // truncate time
		            val = this.clone().startOf('day').valueOf();

		            if (
		                (eras[i].since <= val && val <= eras[i].until) ||
		                (eras[i].until <= val && val <= eras[i].since)
		            ) {
		                return (
		                    (this.year() - hooks(eras[i].since).year()) * dir +
		                    eras[i].offset
		                );
		            }
		        }

		        return this.year();
		    }

		    function erasNameRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasNameRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasNameRegex : this._erasRegex;
		    }

		    function erasAbbrRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasAbbrRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasAbbrRegex : this._erasRegex;
		    }

		    function erasNarrowRegex(isStrict) {
		        if (!hasOwnProp(this, '_erasNarrowRegex')) {
		            computeErasParse.call(this);
		        }
		        return isStrict ? this._erasNarrowRegex : this._erasRegex;
		    }

		    function matchEraAbbr(isStrict, locale) {
		        return locale.erasAbbrRegex(isStrict);
		    }

		    function matchEraName(isStrict, locale) {
		        return locale.erasNameRegex(isStrict);
		    }

		    function matchEraNarrow(isStrict, locale) {
		        return locale.erasNarrowRegex(isStrict);
		    }

		    function matchEraYearOrdinal(isStrict, locale) {
		        return locale._eraYearOrdinalRegex || matchUnsigned;
		    }

		    function computeErasParse() {
		        var abbrPieces = [],
		            namePieces = [],
		            narrowPieces = [],
		            mixedPieces = [],
		            i,
		            l,
		            eras = this.eras();

		        for (i = 0, l = eras.length; i < l; ++i) {
		            namePieces.push(regexEscape(eras[i].name));
		            abbrPieces.push(regexEscape(eras[i].abbr));
		            narrowPieces.push(regexEscape(eras[i].narrow));

		            mixedPieces.push(regexEscape(eras[i].name));
		            mixedPieces.push(regexEscape(eras[i].abbr));
		            mixedPieces.push(regexEscape(eras[i].narrow));
		        }

		        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
		        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
		        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
		        this._erasNarrowRegex = new RegExp(
		            '^(' + narrowPieces.join('|') + ')',
		            'i'
		        );
		    }

		    // FORMATTING

		    addFormatToken(0, ['gg', 2], 0, function () {
		        return this.weekYear() % 100;
		    });

		    addFormatToken(0, ['GG', 2], 0, function () {
		        return this.isoWeekYear() % 100;
		    });

		    function addWeekYearFormatToken(token, getter) {
		        addFormatToken(0, [token, token.length], 0, getter);
		    }

		    addWeekYearFormatToken('gggg', 'weekYear');
		    addWeekYearFormatToken('ggggg', 'weekYear');
		    addWeekYearFormatToken('GGGG', 'isoWeekYear');
		    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

		    // ALIASES

		    addUnitAlias('weekYear', 'gg');
		    addUnitAlias('isoWeekYear', 'GG');

		    // PRIORITY

		    addUnitPriority('weekYear', 1);
		    addUnitPriority('isoWeekYear', 1);

		    // PARSING

		    addRegexToken('G', matchSigned);
		    addRegexToken('g', matchSigned);
		    addRegexToken('GG', match1to2, match2);
		    addRegexToken('gg', match1to2, match2);
		    addRegexToken('GGGG', match1to4, match4);
		    addRegexToken('gggg', match1to4, match4);
		    addRegexToken('GGGGG', match1to6, match6);
		    addRegexToken('ggggg', match1to6, match6);

		    addWeekParseToken(
		        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
		        function (input, week, config, token) {
		            week[token.substr(0, 2)] = toInt(input);
		        }
		    );

		    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
		        week[token] = hooks.parseTwoDigitYear(input);
		    });

		    // MOMENTS

		    function getSetWeekYear(input) {
		        return getSetWeekYearHelper.call(
		            this,
		            input,
		            this.week(),
		            this.weekday(),
		            this.localeData()._week.dow,
		            this.localeData()._week.doy
		        );
		    }

		    function getSetISOWeekYear(input) {
		        return getSetWeekYearHelper.call(
		            this,
		            input,
		            this.isoWeek(),
		            this.isoWeekday(),
		            1,
		            4
		        );
		    }

		    function getISOWeeksInYear() {
		        return weeksInYear(this.year(), 1, 4);
		    }

		    function getISOWeeksInISOWeekYear() {
		        return weeksInYear(this.isoWeekYear(), 1, 4);
		    }

		    function getWeeksInYear() {
		        var weekInfo = this.localeData()._week;
		        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
		    }

		    function getWeeksInWeekYear() {
		        var weekInfo = this.localeData()._week;
		        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
		    }

		    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
		        var weeksTarget;
		        if (input == null) {
		            return weekOfYear(this, dow, doy).year;
		        } else {
		            weeksTarget = weeksInYear(input, dow, doy);
		            if (week > weeksTarget) {
		                week = weeksTarget;
		            }
		            return setWeekAll.call(this, input, week, weekday, dow, doy);
		        }
		    }

		    function setWeekAll(weekYear, week, weekday, dow, doy) {
		        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
		            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

		        this.year(date.getUTCFullYear());
		        this.month(date.getUTCMonth());
		        this.date(date.getUTCDate());
		        return this;
		    }

		    // FORMATTING

		    addFormatToken('Q', 0, 'Qo', 'quarter');

		    // ALIASES

		    addUnitAlias('quarter', 'Q');

		    // PRIORITY

		    addUnitPriority('quarter', 7);

		    // PARSING

		    addRegexToken('Q', match1);
		    addParseToken('Q', function (input, array) {
		        array[MONTH] = (toInt(input) - 1) * 3;
		    });

		    // MOMENTS

		    function getSetQuarter(input) {
		        return input == null
		            ? Math.ceil((this.month() + 1) / 3)
		            : this.month((input - 1) * 3 + (this.month() % 3));
		    }

		    // FORMATTING

		    addFormatToken('D', ['DD', 2], 'Do', 'date');

		    // ALIASES

		    addUnitAlias('date', 'D');

		    // PRIORITY
		    addUnitPriority('date', 9);

		    // PARSING

		    addRegexToken('D', match1to2);
		    addRegexToken('DD', match1to2, match2);
		    addRegexToken('Do', function (isStrict, locale) {
		        // TODO: Remove "ordinalParse" fallback in next major release.
		        return isStrict
		            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
		            : locale._dayOfMonthOrdinalParseLenient;
		    });

		    addParseToken(['D', 'DD'], DATE);
		    addParseToken('Do', function (input, array) {
		        array[DATE] = toInt(input.match(match1to2)[0]);
		    });

		    // MOMENTS

		    var getSetDayOfMonth = makeGetSet('Date', true);

		    // FORMATTING

		    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

		    // ALIASES

		    addUnitAlias('dayOfYear', 'DDD');

		    // PRIORITY
		    addUnitPriority('dayOfYear', 4);

		    // PARSING

		    addRegexToken('DDD', match1to3);
		    addRegexToken('DDDD', match3);
		    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
		        config._dayOfYear = toInt(input);
		    });

		    // HELPERS

		    // MOMENTS

		    function getSetDayOfYear(input) {
		        var dayOfYear =
		            Math.round(
		                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
		            ) + 1;
		        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
		    }

		    // FORMATTING

		    addFormatToken('m', ['mm', 2], 0, 'minute');

		    // ALIASES

		    addUnitAlias('minute', 'm');

		    // PRIORITY

		    addUnitPriority('minute', 14);

		    // PARSING

		    addRegexToken('m', match1to2);
		    addRegexToken('mm', match1to2, match2);
		    addParseToken(['m', 'mm'], MINUTE);

		    // MOMENTS

		    var getSetMinute = makeGetSet('Minutes', false);

		    // FORMATTING

		    addFormatToken('s', ['ss', 2], 0, 'second');

		    // ALIASES

		    addUnitAlias('second', 's');

		    // PRIORITY

		    addUnitPriority('second', 15);

		    // PARSING

		    addRegexToken('s', match1to2);
		    addRegexToken('ss', match1to2, match2);
		    addParseToken(['s', 'ss'], SECOND);

		    // MOMENTS

		    var getSetSecond = makeGetSet('Seconds', false);

		    // FORMATTING

		    addFormatToken('S', 0, 0, function () {
		        return ~~(this.millisecond() / 100);
		    });

		    addFormatToken(0, ['SS', 2], 0, function () {
		        return ~~(this.millisecond() / 10);
		    });

		    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
		    addFormatToken(0, ['SSSS', 4], 0, function () {
		        return this.millisecond() * 10;
		    });
		    addFormatToken(0, ['SSSSS', 5], 0, function () {
		        return this.millisecond() * 100;
		    });
		    addFormatToken(0, ['SSSSSS', 6], 0, function () {
		        return this.millisecond() * 1000;
		    });
		    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
		        return this.millisecond() * 10000;
		    });
		    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
		        return this.millisecond() * 100000;
		    });
		    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
		        return this.millisecond() * 1000000;
		    });

		    // ALIASES

		    addUnitAlias('millisecond', 'ms');

		    // PRIORITY

		    addUnitPriority('millisecond', 16);

		    // PARSING

		    addRegexToken('S', match1to3, match1);
		    addRegexToken('SS', match1to3, match2);
		    addRegexToken('SSS', match1to3, match3);

		    var token, getSetMillisecond;
		    for (token = 'SSSS'; token.length <= 9; token += 'S') {
		        addRegexToken(token, matchUnsigned);
		    }

		    function parseMs(input, array) {
		        array[MILLISECOND] = toInt(('0.' + input) * 1000);
		    }

		    for (token = 'S'; token.length <= 9; token += 'S') {
		        addParseToken(token, parseMs);
		    }

		    getSetMillisecond = makeGetSet('Milliseconds', false);

		    // FORMATTING

		    addFormatToken('z', 0, 0, 'zoneAbbr');
		    addFormatToken('zz', 0, 0, 'zoneName');

		    // MOMENTS

		    function getZoneAbbr() {
		        return this._isUTC ? 'UTC' : '';
		    }

		    function getZoneName() {
		        return this._isUTC ? 'Coordinated Universal Time' : '';
		    }

		    var proto = Moment.prototype;

		    proto.add = add;
		    proto.calendar = calendar$1;
		    proto.clone = clone;
		    proto.diff = diff;
		    proto.endOf = endOf;
		    proto.format = format;
		    proto.from = from;
		    proto.fromNow = fromNow;
		    proto.to = to;
		    proto.toNow = toNow;
		    proto.get = stringGet;
		    proto.invalidAt = invalidAt;
		    proto.isAfter = isAfter;
		    proto.isBefore = isBefore;
		    proto.isBetween = isBetween;
		    proto.isSame = isSame;
		    proto.isSameOrAfter = isSameOrAfter;
		    proto.isSameOrBefore = isSameOrBefore;
		    proto.isValid = isValid$2;
		    proto.lang = lang;
		    proto.locale = locale;
		    proto.localeData = localeData;
		    proto.max = prototypeMax;
		    proto.min = prototypeMin;
		    proto.parsingFlags = parsingFlags;
		    proto.set = stringSet;
		    proto.startOf = startOf;
		    proto.subtract = subtract;
		    proto.toArray = toArray;
		    proto.toObject = toObject;
		    proto.toDate = toDate;
		    proto.toISOString = toISOString;
		    proto.inspect = inspect;
		    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
		        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
		            return 'Moment<' + this.format() + '>';
		        };
		    }
		    proto.toJSON = toJSON;
		    proto.toString = toString;
		    proto.unix = unix;
		    proto.valueOf = valueOf;
		    proto.creationData = creationData;
		    proto.eraName = getEraName;
		    proto.eraNarrow = getEraNarrow;
		    proto.eraAbbr = getEraAbbr;
		    proto.eraYear = getEraYear;
		    proto.year = getSetYear;
		    proto.isLeapYear = getIsLeapYear;
		    proto.weekYear = getSetWeekYear;
		    proto.isoWeekYear = getSetISOWeekYear;
		    proto.quarter = proto.quarters = getSetQuarter;
		    proto.month = getSetMonth;
		    proto.daysInMonth = getDaysInMonth;
		    proto.week = proto.weeks = getSetWeek;
		    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
		    proto.weeksInYear = getWeeksInYear;
		    proto.weeksInWeekYear = getWeeksInWeekYear;
		    proto.isoWeeksInYear = getISOWeeksInYear;
		    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
		    proto.date = getSetDayOfMonth;
		    proto.day = proto.days = getSetDayOfWeek;
		    proto.weekday = getSetLocaleDayOfWeek;
		    proto.isoWeekday = getSetISODayOfWeek;
		    proto.dayOfYear = getSetDayOfYear;
		    proto.hour = proto.hours = getSetHour;
		    proto.minute = proto.minutes = getSetMinute;
		    proto.second = proto.seconds = getSetSecond;
		    proto.millisecond = proto.milliseconds = getSetMillisecond;
		    proto.utcOffset = getSetOffset;
		    proto.utc = setOffsetToUTC;
		    proto.local = setOffsetToLocal;
		    proto.parseZone = setOffsetToParsedOffset;
		    proto.hasAlignedHourOffset = hasAlignedHourOffset;
		    proto.isDST = isDaylightSavingTime;
		    proto.isLocal = isLocal;
		    proto.isUtcOffset = isUtcOffset;
		    proto.isUtc = isUtc;
		    proto.isUTC = isUtc;
		    proto.zoneAbbr = getZoneAbbr;
		    proto.zoneName = getZoneName;
		    proto.dates = deprecate(
		        'dates accessor is deprecated. Use date instead.',
		        getSetDayOfMonth
		    );
		    proto.months = deprecate(
		        'months accessor is deprecated. Use month instead',
		        getSetMonth
		    );
		    proto.years = deprecate(
		        'years accessor is deprecated. Use year instead',
		        getSetYear
		    );
		    proto.zone = deprecate(
		        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
		        getSetZone
		    );
		    proto.isDSTShifted = deprecate(
		        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
		        isDaylightSavingTimeShifted
		    );

		    function createUnix(input) {
		        return createLocal(input * 1000);
		    }

		    function createInZone() {
		        return createLocal.apply(null, arguments).parseZone();
		    }

		    function preParsePostFormat(string) {
		        return string;
		    }

		    var proto$1 = Locale.prototype;

		    proto$1.calendar = calendar;
		    proto$1.longDateFormat = longDateFormat;
		    proto$1.invalidDate = invalidDate;
		    proto$1.ordinal = ordinal;
		    proto$1.preparse = preParsePostFormat;
		    proto$1.postformat = preParsePostFormat;
		    proto$1.relativeTime = relativeTime;
		    proto$1.pastFuture = pastFuture;
		    proto$1.set = set;
		    proto$1.eras = localeEras;
		    proto$1.erasParse = localeErasParse;
		    proto$1.erasConvertYear = localeErasConvertYear;
		    proto$1.erasAbbrRegex = erasAbbrRegex;
		    proto$1.erasNameRegex = erasNameRegex;
		    proto$1.erasNarrowRegex = erasNarrowRegex;

		    proto$1.months = localeMonths;
		    proto$1.monthsShort = localeMonthsShort;
		    proto$1.monthsParse = localeMonthsParse;
		    proto$1.monthsRegex = monthsRegex;
		    proto$1.monthsShortRegex = monthsShortRegex;
		    proto$1.week = localeWeek;
		    proto$1.firstDayOfYear = localeFirstDayOfYear;
		    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

		    proto$1.weekdays = localeWeekdays;
		    proto$1.weekdaysMin = localeWeekdaysMin;
		    proto$1.weekdaysShort = localeWeekdaysShort;
		    proto$1.weekdaysParse = localeWeekdaysParse;

		    proto$1.weekdaysRegex = weekdaysRegex;
		    proto$1.weekdaysShortRegex = weekdaysShortRegex;
		    proto$1.weekdaysMinRegex = weekdaysMinRegex;

		    proto$1.isPM = localeIsPM;
		    proto$1.meridiem = localeMeridiem;

		    function get$1(format, index, field, setter) {
		        var locale = getLocale(),
		            utc = createUTC().set(setter, index);
		        return locale[field](utc, format);
		    }

		    function listMonthsImpl(format, index, field) {
		        if (isNumber(format)) {
		            index = format;
		            format = undefined;
		        }

		        format = format || '';

		        if (index != null) {
		            return get$1(format, index, field, 'month');
		        }

		        var i,
		            out = [];
		        for (i = 0; i < 12; i++) {
		            out[i] = get$1(format, i, field, 'month');
		        }
		        return out;
		    }

		    // ()
		    // (5)
		    // (fmt, 5)
		    // (fmt)
		    // (true)
		    // (true, 5)
		    // (true, fmt, 5)
		    // (true, fmt)
		    function listWeekdaysImpl(localeSorted, format, index, field) {
		        if (typeof localeSorted === 'boolean') {
		            if (isNumber(format)) {
		                index = format;
		                format = undefined;
		            }

		            format = format || '';
		        } else {
		            format = localeSorted;
		            index = format;
		            localeSorted = false;

		            if (isNumber(format)) {
		                index = format;
		                format = undefined;
		            }

		            format = format || '';
		        }

		        var locale = getLocale(),
		            shift = localeSorted ? locale._week.dow : 0,
		            i,
		            out = [];

		        if (index != null) {
		            return get$1(format, (index + shift) % 7, field, 'day');
		        }

		        for (i = 0; i < 7; i++) {
		            out[i] = get$1(format, (i + shift) % 7, field, 'day');
		        }
		        return out;
		    }

		    function listMonths(format, index) {
		        return listMonthsImpl(format, index, 'months');
		    }

		    function listMonthsShort(format, index) {
		        return listMonthsImpl(format, index, 'monthsShort');
		    }

		    function listWeekdays(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
		    }

		    function listWeekdaysShort(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
		    }

		    function listWeekdaysMin(localeSorted, format, index) {
		        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
		    }

		    getSetGlobalLocale('en', {
		        eras: [
		            {
		                since: '0001-01-01',
		                until: +Infinity,
		                offset: 1,
		                name: 'Anno Domini',
		                narrow: 'AD',
		                abbr: 'AD',
		            },
		            {
		                since: '0000-12-31',
		                until: -Infinity,
		                offset: 1,
		                name: 'Before Christ',
		                narrow: 'BC',
		                abbr: 'BC',
		            },
		        ],
		        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
		        ordinal: function (number) {
		            var b = number % 10,
		                output =
		                    toInt((number % 100) / 10) === 1
		                        ? 'th'
		                        : b === 1
		                        ? 'st'
		                        : b === 2
		                        ? 'nd'
		                        : b === 3
		                        ? 'rd'
		                        : 'th';
		            return number + output;
		        },
		    });

		    // Side effect imports

		    hooks.lang = deprecate(
		        'moment.lang is deprecated. Use moment.locale instead.',
		        getSetGlobalLocale
		    );
		    hooks.langData = deprecate(
		        'moment.langData is deprecated. Use moment.localeData instead.',
		        getLocale
		    );

		    var mathAbs = Math.abs;

		    function abs() {
		        var data = this._data;

		        this._milliseconds = mathAbs(this._milliseconds);
		        this._days = mathAbs(this._days);
		        this._months = mathAbs(this._months);

		        data.milliseconds = mathAbs(data.milliseconds);
		        data.seconds = mathAbs(data.seconds);
		        data.minutes = mathAbs(data.minutes);
		        data.hours = mathAbs(data.hours);
		        data.months = mathAbs(data.months);
		        data.years = mathAbs(data.years);

		        return this;
		    }

		    function addSubtract$1(duration, input, value, direction) {
		        var other = createDuration(input, value);

		        duration._milliseconds += direction * other._milliseconds;
		        duration._days += direction * other._days;
		        duration._months += direction * other._months;

		        return duration._bubble();
		    }

		    // supports only 2.0-style add(1, 's') or add(duration)
		    function add$1(input, value) {
		        return addSubtract$1(this, input, value, 1);
		    }

		    // supports only 2.0-style subtract(1, 's') or subtract(duration)
		    function subtract$1(input, value) {
		        return addSubtract$1(this, input, value, -1);
		    }

		    function absCeil(number) {
		        if (number < 0) {
		            return Math.floor(number);
		        } else {
		            return Math.ceil(number);
		        }
		    }

		    function bubble() {
		        var milliseconds = this._milliseconds,
		            days = this._days,
		            months = this._months,
		            data = this._data,
		            seconds,
		            minutes,
		            hours,
		            years,
		            monthsFromDays;

		        // if we have a mix of positive and negative values, bubble down first
		        // check: https://github.com/moment/moment/issues/2166
		        if (
		            !(
		                (milliseconds >= 0 && days >= 0 && months >= 0) ||
		                (milliseconds <= 0 && days <= 0 && months <= 0)
		            )
		        ) {
		            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
		            days = 0;
		            months = 0;
		        }

		        // The following code bubbles up values, see the tests for
		        // examples of what that means.
		        data.milliseconds = milliseconds % 1000;

		        seconds = absFloor(milliseconds / 1000);
		        data.seconds = seconds % 60;

		        minutes = absFloor(seconds / 60);
		        data.minutes = minutes % 60;

		        hours = absFloor(minutes / 60);
		        data.hours = hours % 24;

		        days += absFloor(hours / 24);

		        // convert days to months
		        monthsFromDays = absFloor(daysToMonths(days));
		        months += monthsFromDays;
		        days -= absCeil(monthsToDays(monthsFromDays));

		        // 12 months -> 1 year
		        years = absFloor(months / 12);
		        months %= 12;

		        data.days = days;
		        data.months = months;
		        data.years = years;

		        return this;
		    }

		    function daysToMonths(days) {
		        // 400 years have 146097 days (taking into account leap year rules)
		        // 400 years have 12 months === 4800
		        return (days * 4800) / 146097;
		    }

		    function monthsToDays(months) {
		        // the reverse of daysToMonths
		        return (months * 146097) / 4800;
		    }

		    function as(units) {
		        if (!this.isValid()) {
		            return NaN;
		        }
		        var days,
		            months,
		            milliseconds = this._milliseconds;

		        units = normalizeUnits(units);

		        if (units === 'month' || units === 'quarter' || units === 'year') {
		            days = this._days + milliseconds / 864e5;
		            months = this._months + daysToMonths(days);
		            switch (units) {
		                case 'month':
		                    return months;
		                case 'quarter':
		                    return months / 3;
		                case 'year':
		                    return months / 12;
		            }
		        } else {
		            // handle milliseconds separately because of floating point math errors (issue #1867)
		            days = this._days + Math.round(monthsToDays(this._months));
		            switch (units) {
		                case 'week':
		                    return days / 7 + milliseconds / 6048e5;
		                case 'day':
		                    return days + milliseconds / 864e5;
		                case 'hour':
		                    return days * 24 + milliseconds / 36e5;
		                case 'minute':
		                    return days * 1440 + milliseconds / 6e4;
		                case 'second':
		                    return days * 86400 + milliseconds / 1000;
		                // Math.floor prevents floating point math errors here
		                case 'millisecond':
		                    return Math.floor(days * 864e5) + milliseconds;
		                default:
		                    throw new Error('Unknown unit ' + units);
		            }
		        }
		    }

		    // TODO: Use this.as('ms')?
		    function valueOf$1() {
		        if (!this.isValid()) {
		            return NaN;
		        }
		        return (
		            this._milliseconds +
		            this._days * 864e5 +
		            (this._months % 12) * 2592e6 +
		            toInt(this._months / 12) * 31536e6
		        );
		    }

		    function makeAs(alias) {
		        return function () {
		            return this.as(alias);
		        };
		    }

		    var asMilliseconds = makeAs('ms'),
		        asSeconds = makeAs('s'),
		        asMinutes = makeAs('m'),
		        asHours = makeAs('h'),
		        asDays = makeAs('d'),
		        asWeeks = makeAs('w'),
		        asMonths = makeAs('M'),
		        asQuarters = makeAs('Q'),
		        asYears = makeAs('y');

		    function clone$1() {
		        return createDuration(this);
		    }

		    function get$2(units) {
		        units = normalizeUnits(units);
		        return this.isValid() ? this[units + 's']() : NaN;
		    }

		    function makeGetter(name) {
		        return function () {
		            return this.isValid() ? this._data[name] : NaN;
		        };
		    }

		    var milliseconds = makeGetter('milliseconds'),
		        seconds = makeGetter('seconds'),
		        minutes = makeGetter('minutes'),
		        hours = makeGetter('hours'),
		        days = makeGetter('days'),
		        months = makeGetter('months'),
		        years = makeGetter('years');

		    function weeks() {
		        return absFloor(this.days() / 7);
		    }

		    var round = Math.round,
		        thresholds = {
		            ss: 44, // a few seconds to seconds
		            s: 45, // seconds to minute
		            m: 45, // minutes to hour
		            h: 22, // hours to day
		            d: 26, // days to month/week
		            w: null, // weeks to month
		            M: 11, // months to year
		        };

		    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
		    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
		        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
		    }

		    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
		        var duration = createDuration(posNegDuration).abs(),
		            seconds = round(duration.as('s')),
		            minutes = round(duration.as('m')),
		            hours = round(duration.as('h')),
		            days = round(duration.as('d')),
		            months = round(duration.as('M')),
		            weeks = round(duration.as('w')),
		            years = round(duration.as('y')),
		            a =
		                (seconds <= thresholds.ss && ['s', seconds]) ||
		                (seconds < thresholds.s && ['ss', seconds]) ||
		                (minutes <= 1 && ['m']) ||
		                (minutes < thresholds.m && ['mm', minutes]) ||
		                (hours <= 1 && ['h']) ||
		                (hours < thresholds.h && ['hh', hours]) ||
		                (days <= 1 && ['d']) ||
		                (days < thresholds.d && ['dd', days]);

		        if (thresholds.w != null) {
		            a =
		                a ||
		                (weeks <= 1 && ['w']) ||
		                (weeks < thresholds.w && ['ww', weeks]);
		        }
		        a = a ||
		            (months <= 1 && ['M']) ||
		            (months < thresholds.M && ['MM', months]) ||
		            (years <= 1 && ['y']) || ['yy', years];

		        a[2] = withoutSuffix;
		        a[3] = +posNegDuration > 0;
		        a[4] = locale;
		        return substituteTimeAgo.apply(null, a);
		    }

		    // This function allows you to set the rounding function for relative time strings
		    function getSetRelativeTimeRounding(roundingFunction) {
		        if (roundingFunction === undefined) {
		            return round;
		        }
		        if (typeof roundingFunction === 'function') {
		            round = roundingFunction;
		            return true;
		        }
		        return false;
		    }

		    // This function allows you to set a threshold for relative time strings
		    function getSetRelativeTimeThreshold(threshold, limit) {
		        if (thresholds[threshold] === undefined) {
		            return false;
		        }
		        if (limit === undefined) {
		            return thresholds[threshold];
		        }
		        thresholds[threshold] = limit;
		        if (threshold === 's') {
		            thresholds.ss = limit - 1;
		        }
		        return true;
		    }

		    function humanize(argWithSuffix, argThresholds) {
		        if (!this.isValid()) {
		            return this.localeData().invalidDate();
		        }

		        var withSuffix = false,
		            th = thresholds,
		            locale,
		            output;

		        if (typeof argWithSuffix === 'object') {
		            argThresholds = argWithSuffix;
		            argWithSuffix = false;
		        }
		        if (typeof argWithSuffix === 'boolean') {
		            withSuffix = argWithSuffix;
		        }
		        if (typeof argThresholds === 'object') {
		            th = Object.assign({}, thresholds, argThresholds);
		            if (argThresholds.s != null && argThresholds.ss == null) {
		                th.ss = argThresholds.s - 1;
		            }
		        }

		        locale = this.localeData();
		        output = relativeTime$1(this, !withSuffix, th, locale);

		        if (withSuffix) {
		            output = locale.pastFuture(+this, output);
		        }

		        return locale.postformat(output);
		    }

		    var abs$1 = Math.abs;

		    function sign(x) {
		        return (x > 0) - (x < 0) || +x;
		    }

		    function toISOString$1() {
		        // for ISO strings we do not use the normal bubbling rules:
		        //  * milliseconds bubble up until they become hours
		        //  * days do not bubble at all
		        //  * months bubble up until they become years
		        // This is because there is no context-free conversion between hours and days
		        // (think of clock changes)
		        // and also not between days and months (28-31 days per month)
		        if (!this.isValid()) {
		            return this.localeData().invalidDate();
		        }

		        var seconds = abs$1(this._milliseconds) / 1000,
		            days = abs$1(this._days),
		            months = abs$1(this._months),
		            minutes,
		            hours,
		            years,
		            s,
		            total = this.asSeconds(),
		            totalSign,
		            ymSign,
		            daysSign,
		            hmsSign;

		        if (!total) {
		            // this is the same as C#'s (Noda) and python (isodate)...
		            // but not other JS (goog.date)
		            return 'P0D';
		        }

		        // 3600 seconds -> 60 minutes -> 1 hour
		        minutes = absFloor(seconds / 60);
		        hours = absFloor(minutes / 60);
		        seconds %= 60;
		        minutes %= 60;

		        // 12 months -> 1 year
		        years = absFloor(months / 12);
		        months %= 12;

		        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
		        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

		        totalSign = total < 0 ? '-' : '';
		        ymSign = sign(this._months) !== sign(total) ? '-' : '';
		        daysSign = sign(this._days) !== sign(total) ? '-' : '';
		        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

		        return (
		            totalSign +
		            'P' +
		            (years ? ymSign + years + 'Y' : '') +
		            (months ? ymSign + months + 'M' : '') +
		            (days ? daysSign + days + 'D' : '') +
		            (hours || minutes || seconds ? 'T' : '') +
		            (hours ? hmsSign + hours + 'H' : '') +
		            (minutes ? hmsSign + minutes + 'M' : '') +
		            (seconds ? hmsSign + s + 'S' : '')
		        );
		    }

		    var proto$2 = Duration.prototype;

		    proto$2.isValid = isValid$1;
		    proto$2.abs = abs;
		    proto$2.add = add$1;
		    proto$2.subtract = subtract$1;
		    proto$2.as = as;
		    proto$2.asMilliseconds = asMilliseconds;
		    proto$2.asSeconds = asSeconds;
		    proto$2.asMinutes = asMinutes;
		    proto$2.asHours = asHours;
		    proto$2.asDays = asDays;
		    proto$2.asWeeks = asWeeks;
		    proto$2.asMonths = asMonths;
		    proto$2.asQuarters = asQuarters;
		    proto$2.asYears = asYears;
		    proto$2.valueOf = valueOf$1;
		    proto$2._bubble = bubble;
		    proto$2.clone = clone$1;
		    proto$2.get = get$2;
		    proto$2.milliseconds = milliseconds;
		    proto$2.seconds = seconds;
		    proto$2.minutes = minutes;
		    proto$2.hours = hours;
		    proto$2.days = days;
		    proto$2.weeks = weeks;
		    proto$2.months = months;
		    proto$2.years = years;
		    proto$2.humanize = humanize;
		    proto$2.toISOString = toISOString$1;
		    proto$2.toString = toISOString$1;
		    proto$2.toJSON = toISOString$1;
		    proto$2.locale = locale;
		    proto$2.localeData = localeData;

		    proto$2.toIsoString = deprecate(
		        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
		        toISOString$1
		    );
		    proto$2.lang = lang;

		    // FORMATTING

		    addFormatToken('X', 0, 0, 'unix');
		    addFormatToken('x', 0, 0, 'valueOf');

		    // PARSING

		    addRegexToken('x', matchSigned);
		    addRegexToken('X', matchTimestamp);
		    addParseToken('X', function (input, array, config) {
		        config._d = new Date(parseFloat(input) * 1000);
		    });
		    addParseToken('x', function (input, array, config) {
		        config._d = new Date(toInt(input));
		    });

		    //! moment.js

		    hooks.version = '2.29.4';

		    setHookCallback(createLocal);

		    hooks.fn = proto;
		    hooks.min = min;
		    hooks.max = max;
		    hooks.now = now;
		    hooks.utc = createUTC;
		    hooks.unix = createUnix;
		    hooks.months = listMonths;
		    hooks.isDate = isDate;
		    hooks.locale = getSetGlobalLocale;
		    hooks.invalid = createInvalid;
		    hooks.duration = createDuration;
		    hooks.isMoment = isMoment;
		    hooks.weekdays = listWeekdays;
		    hooks.parseZone = createInZone;
		    hooks.localeData = getLocale;
		    hooks.isDuration = isDuration;
		    hooks.monthsShort = listMonthsShort;
		    hooks.weekdaysMin = listWeekdaysMin;
		    hooks.defineLocale = defineLocale;
		    hooks.updateLocale = updateLocale;
		    hooks.locales = listLocales;
		    hooks.weekdaysShort = listWeekdaysShort;
		    hooks.normalizeUnits = normalizeUnits;
		    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
		    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
		    hooks.calendarFormat = getCalendarFormat;
		    hooks.prototype = proto;

		    // currently HTML5 input type only supports 24-hour formats
		    hooks.HTML5_FMT = {
		        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
		        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
		        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
		        DATE: 'YYYY-MM-DD', // <input type="date" />
		        TIME: 'HH:mm', // <input type="time" />
		        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
		        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
		        WEEK: 'GGGG-[W]WW', // <input type="week" />
		        MONTH: 'YYYY-MM', // <input type="month" />
		    };

		    return hooks;

		})));
	} (moment$1));

	var moment = moment$1.exports;

	var DateField = function DateField(props) {
	  var value = new Date(props.record.params.tanggal_lahir).toLocaleDateString();
	  return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, null, moment(value).format('D MMMM YYYY'));
	};

	var Dashboard = function Dashboard(props) {
	  return /*#__PURE__*/React__default["default"].createElement(designSystem.Box, null, "My custom dashboard");
	};

	var flat = pkg__default["default"].flat;
	var ListKaryawan = function ListKaryawan(props) {
	  var params = flat.unflatten(props.record.params);
	  return /*#__PURE__*/React.createElement(designSystem.FormGroup, null, /*#__PURE__*/React.createElement(designSystem.Label, null, "List Karyawan"), /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Table, null, /*#__PURE__*/React.createElement(designSystem.TableHead, null, /*#__PURE__*/React.createElement(designSystem.TableRow, null, /*#__PURE__*/React.createElement(designSystem.TableCell, null, "NIK"), /*#__PURE__*/React.createElement(designSystem.TableCell, null, "Nama"), /*#__PURE__*/React.createElement(designSystem.TableCell, null, "Email"), /*#__PURE__*/React.createElement(designSystem.TableCell, null, "Status"))), /*#__PURE__*/React.createElement(designSystem.TableBody, null, !params.karyawan.length && /*#__PURE__*/React.createElement(designSystem.TableRow, null, /*#__PURE__*/React.createElement(designSystem.TableCell, {
	    colSpan: 4,
	    style: {
	      textAlign: 'center'
	    }
	  }, "Tidak ada karyawan pada divisi ini")), params.karyawan.length > 0 && params.karyawan.map(function (_ref, index) {
	    var profil = _ref.profil;
	    console.log(profil);
	    return /*#__PURE__*/React.createElement(designSystem.TableRow, {
	      key: index
	    }, /*#__PURE__*/React.createElement(designSystem.TableCell, null, profil.nik), /*#__PURE__*/React.createElement(designSystem.TableCell, null, profil.nama), /*#__PURE__*/React.createElement(designSystem.TableCell, null, profil.email), /*#__PURE__*/React.createElement(designSystem.TableCell, null, profil.status == 0 ? "Inactive" : "Active"));
	  })))));
	};

	AdminJS.UserComponents = {};
	AdminJS.UserComponents.DateField = DateField;
	AdminJS.UserComponents.Dashboard = Dashboard;
	AdminJS.UserComponents.ListKaryawan = ListKaryawan;

})(React, AdminJSDesignSystem, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL0RhdGVGaWVsZC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTGlzdEthcnlhd2FuLmpzeCIsIi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyEgbW9tZW50LmpzXG4vLyEgdmVyc2lvbiA6IDIuMjkuNFxuLy8hIGF1dGhvcnMgOiBUaW0gV29vZCwgSXNrcmVuIENoZXJuZXYsIE1vbWVudC5qcyBjb250cmlidXRvcnNcbi8vISBsaWNlbnNlIDogTUlUXG4vLyEgbW9tZW50anMuY29tXG5cbjsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIGdsb2JhbC5tb21lbnQgPSBmYWN0b3J5KClcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGhvb2tDYWxsYmFjaztcblxuICAgIGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgICByZXR1cm4gaG9va0NhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBkb25lIHRvIHJlZ2lzdGVyIHRoZSBtZXRob2QgY2FsbGVkIHdpdGggbW9tZW50KClcbiAgICAvLyB3aXRob3V0IGNyZWF0aW5nIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cbiAgICBmdW5jdGlvbiBzZXRIb29rQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICAgICAgaG9va0NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBcnJheShpbnB1dCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaW5wdXQgaW5zdGFuY2VvZiBBcnJheSB8fFxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzT2JqZWN0KGlucHV0KSB7XG4gICAgICAgIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxuICAgICAgICAvLyBpbnB1dCAhPSBudWxsXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpbnB1dCAhPSBudWxsICYmXG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBPYmplY3RdJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhc093blByb3AoYSwgYikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcykge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoID09PSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGs7XG4gICAgICAgICAgICBmb3IgKGsgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc093blByb3Aob2JqLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1VuZGVmaW5lZChpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXQgPT09IHZvaWQgMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc051bWJlcihpbnB1dCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgdHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgTnVtYmVyXSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0RhdGUoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGlucHV0IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGlucHV0KSA9PT0gJ1tvYmplY3QgRGF0ZV0nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFwKGFyciwgZm4pIHtcbiAgICAgICAgdmFyIHJlcyA9IFtdLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGFyckxlbiA9IGFyci5sZW5ndGg7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnJMZW47ICsraSkge1xuICAgICAgICAgICAgcmVzLnB1c2goZm4oYXJyW2ldLCBpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHRlbmQoYSwgYikge1xuICAgICAgICBmb3IgKHZhciBpIGluIGIpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKGIsIGkpKSB7XG4gICAgICAgICAgICAgICAgYVtpXSA9IGJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzT3duUHJvcChiLCAndG9TdHJpbmcnKSkge1xuICAgICAgICAgICAgYS50b1N0cmluZyA9IGIudG9TdHJpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzT3duUHJvcChiLCAndmFsdWVPZicpKSB7XG4gICAgICAgICAgICBhLnZhbHVlT2YgPSBiLnZhbHVlT2Y7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIHRydWUpLnV0YygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRQYXJzaW5nRmxhZ3MoKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gZGVlcCBjbG9uZSB0aGlzIG9iamVjdC5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtcHR5OiBmYWxzZSxcbiAgICAgICAgICAgIHVudXNlZFRva2VuczogW10sXG4gICAgICAgICAgICB1bnVzZWRJbnB1dDogW10sXG4gICAgICAgICAgICBvdmVyZmxvdzogLTIsXG4gICAgICAgICAgICBjaGFyc0xlZnRPdmVyOiAwLFxuICAgICAgICAgICAgbnVsbElucHV0OiBmYWxzZSxcbiAgICAgICAgICAgIGludmFsaWRFcmE6IG51bGwsXG4gICAgICAgICAgICBpbnZhbGlkTW9udGg6IG51bGwsXG4gICAgICAgICAgICBpbnZhbGlkRm9ybWF0OiBmYWxzZSxcbiAgICAgICAgICAgIHVzZXJJbnZhbGlkYXRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc286IGZhbHNlLFxuICAgICAgICAgICAgcGFyc2VkRGF0ZVBhcnRzOiBbXSxcbiAgICAgICAgICAgIGVyYTogbnVsbCxcbiAgICAgICAgICAgIG1lcmlkaWVtOiBudWxsLFxuICAgICAgICAgICAgcmZjMjgyMjogZmFsc2UsXG4gICAgICAgICAgICB3ZWVrZGF5TWlzbWF0Y2g6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhcnNpbmdGbGFncyhtKSB7XG4gICAgICAgIGlmIChtLl9wZiA9PSBudWxsKSB7XG4gICAgICAgICAgICBtLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbS5fcGY7XG4gICAgfVxuXG4gICAgdmFyIHNvbWU7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5zb21lKSB7XG4gICAgICAgIHNvbWUgPSBBcnJheS5wcm90b3R5cGUuc29tZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzb21lID0gZnVuY3Rpb24gKGZ1bikge1xuICAgICAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyksXG4gICAgICAgICAgICAgICAgbGVuID0gdC5sZW5ndGggPj4+IDAsXG4gICAgICAgICAgICAgICAgaTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgaW4gdCAmJiBmdW4uY2FsbCh0aGlzLCB0W2ldLCBpLCB0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1ZhbGlkKG0pIHtcbiAgICAgICAgaWYgKG0uX2lzVmFsaWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGZsYWdzID0gZ2V0UGFyc2luZ0ZsYWdzKG0pLFxuICAgICAgICAgICAgICAgIHBhcnNlZFBhcnRzID0gc29tZS5jYWxsKGZsYWdzLnBhcnNlZERhdGVQYXJ0cywgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgIT0gbnVsbDtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBpc05vd1ZhbGlkID1cbiAgICAgICAgICAgICAgICAgICAgIWlzTmFOKG0uX2QuZ2V0VGltZSgpKSAmJlxuICAgICAgICAgICAgICAgICAgICBmbGFncy5vdmVyZmxvdyA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgIWZsYWdzLmVtcHR5ICYmXG4gICAgICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkRXJhICYmXG4gICAgICAgICAgICAgICAgICAgICFmbGFncy5pbnZhbGlkTW9udGggJiZcbiAgICAgICAgICAgICAgICAgICAgIWZsYWdzLmludmFsaWRXZWVrZGF5ICYmXG4gICAgICAgICAgICAgICAgICAgICFmbGFncy53ZWVrZGF5TWlzbWF0Y2ggJiZcbiAgICAgICAgICAgICAgICAgICAgIWZsYWdzLm51bGxJbnB1dCAmJlxuICAgICAgICAgICAgICAgICAgICAhZmxhZ3MuaW52YWxpZEZvcm1hdCAmJlxuICAgICAgICAgICAgICAgICAgICAhZmxhZ3MudXNlckludmFsaWRhdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICghZmxhZ3MubWVyaWRpZW0gfHwgKGZsYWdzLm1lcmlkaWVtICYmIHBhcnNlZFBhcnRzKSk7XG5cbiAgICAgICAgICAgIGlmIChtLl9zdHJpY3QpIHtcbiAgICAgICAgICAgICAgICBpc05vd1ZhbGlkID1cbiAgICAgICAgICAgICAgICAgICAgaXNOb3dWYWxpZCAmJlxuICAgICAgICAgICAgICAgICAgICBmbGFncy5jaGFyc0xlZnRPdmVyID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIGZsYWdzLnVudXNlZFRva2Vucy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgZmxhZ3MuYmlnSG91ciA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmlzRnJvemVuID09IG51bGwgfHwgIU9iamVjdC5pc0Zyb3plbihtKSkge1xuICAgICAgICAgICAgICAgIG0uX2lzVmFsaWQgPSBpc05vd1ZhbGlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNOb3dWYWxpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbS5faXNWYWxpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkKGZsYWdzKSB7XG4gICAgICAgIHZhciBtID0gY3JlYXRlVVRDKE5hTik7XG4gICAgICAgIGlmIChmbGFncyAhPSBudWxsKSB7XG4gICAgICAgICAgICBleHRlbmQoZ2V0UGFyc2luZ0ZsYWdzKG0pLCBmbGFncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MobSkudXNlckludmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIC8vIFBsdWdpbnMgdGhhdCBhZGQgcHJvcGVydGllcyBzaG91bGQgYWxzbyBhZGQgdGhlIGtleSBoZXJlIChudWxsIHZhbHVlKSxcbiAgICAvLyBzbyB3ZSBjYW4gcHJvcGVybHkgY2xvbmUgb3Vyc2VsdmVzLlxuICAgIHZhciBtb21lbnRQcm9wZXJ0aWVzID0gKGhvb2tzLm1vbWVudFByb3BlcnRpZXMgPSBbXSksXG4gICAgICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGNvcHlDb25maWcodG8sIGZyb20pIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBwcm9wLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgbW9tZW50UHJvcGVydGllc0xlbiA9IG1vbWVudFByb3BlcnRpZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNBTW9tZW50T2JqZWN0KSkge1xuICAgICAgICAgICAgdG8uX2lzQU1vbWVudE9iamVjdCA9IGZyb20uX2lzQU1vbWVudE9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2kpKSB7XG4gICAgICAgICAgICB0by5faSA9IGZyb20uX2k7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9mKSkge1xuICAgICAgICAgICAgdG8uX2YgPSBmcm9tLl9mO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5fbCkpIHtcbiAgICAgICAgICAgIHRvLl9sID0gZnJvbS5fbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX3N0cmljdCkpIHtcbiAgICAgICAgICAgIHRvLl9zdHJpY3QgPSBmcm9tLl9zdHJpY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl90em0pKSB7XG4gICAgICAgICAgICB0by5fdHptID0gZnJvbS5fdHptO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQoZnJvbS5faXNVVEMpKSB7XG4gICAgICAgICAgICB0by5faXNVVEMgPSBmcm9tLl9pc1VUQztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX29mZnNldCkpIHtcbiAgICAgICAgICAgIHRvLl9vZmZzZXQgPSBmcm9tLl9vZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChmcm9tLl9wZikpIHtcbiAgICAgICAgICAgIHRvLl9wZiA9IGdldFBhcnNpbmdGbGFncyhmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGZyb20uX2xvY2FsZSkpIHtcbiAgICAgICAgICAgIHRvLl9sb2NhbGUgPSBmcm9tLl9sb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9tZW50UHJvcGVydGllc0xlbiA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtb21lbnRQcm9wZXJ0aWVzTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwcm9wID0gbW9tZW50UHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgICAgICB2YWwgPSBmcm9tW3Byb3BdO1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQodmFsKSkge1xuICAgICAgICAgICAgICAgICAgICB0b1twcm9wXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG87XG4gICAgfVxuXG4gICAgLy8gTW9tZW50IHByb3RvdHlwZSBvYmplY3RcbiAgICBmdW5jdGlvbiBNb21lbnQoY29uZmlnKSB7XG4gICAgICAgIGNvcHlDb25maWcodGhpcywgY29uZmlnKTtcbiAgICAgICAgdGhpcy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5fZCAhPSBudWxsID8gY29uZmlnLl9kLmdldFRpbWUoKSA6IE5hTik7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2QgPSBuZXcgRGF0ZShOYU4pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcCBpbiBjYXNlIHVwZGF0ZU9mZnNldCBjcmVhdGVzIG5ldyBtb21lbnRcbiAgICAgICAgLy8gb2JqZWN0cy5cbiAgICAgICAgaWYgKHVwZGF0ZUluUHJvZ3Jlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB1cGRhdGVJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzKTtcbiAgICAgICAgICAgIHVwZGF0ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTW9tZW50KG9iaikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgb2JqIGluc3RhbmNlb2YgTW9tZW50IHx8IChvYmogIT0gbnVsbCAmJiBvYmouX2lzQU1vbWVudE9iamVjdCAhPSBudWxsKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhcm4obXNnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGhvb2tzLnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgY29uc29sZS53YXJuXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdEZXByZWNhdGlvbiB3YXJuaW5nOiAnICsgbXNnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlcHJlY2F0ZShtc2csIGZuKSB7XG4gICAgICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBleHRlbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyKG51bGwsIG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3RUaW1lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXJnLFxuICAgICAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIGFyZ0xlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFyZ0xlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyArPSAnXFxuWycgKyBpICsgJ10gJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIGFyZ3VtZW50c1swXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKGFyZ3VtZW50c1swXSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcgKz0ga2V5ICsgJzogJyArIGFyZ3VtZW50c1swXVtrZXldICsgJywgJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2UoMCwgLTIpOyAvLyBSZW1vdmUgdHJhaWxpbmcgY29tbWEgYW5kIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKGFyZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgICAgICAgIG1zZyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxuQXJndW1lbnRzOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpLmpvaW4oJycpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcigpLnN0YWNrXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBmbik7XG4gICAgfVxuXG4gICAgdmFyIGRlcHJlY2F0aW9ucyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gZGVwcmVjYXRlU2ltcGxlKG5hbWUsIG1zZykge1xuICAgICAgICBpZiAoaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGhvb2tzLmRlcHJlY2F0aW9uSGFuZGxlcihuYW1lLCBtc2cpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGVwcmVjYXRpb25zW25hbWVdKSB7XG4gICAgICAgICAgICB3YXJuKG1zZyk7XG4gICAgICAgICAgICBkZXByZWNhdGlvbnNbbmFtZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9va3Muc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID0gZmFsc2U7XG4gICAgaG9va3MuZGVwcmVjYXRpb25IYW5kbGVyID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGlzRnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICh0eXBlb2YgRnVuY3Rpb24gIT09ICd1bmRlZmluZWQnICYmIGlucHV0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHx8XG4gICAgICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0KGNvbmZpZykge1xuICAgICAgICB2YXIgcHJvcCwgaTtcbiAgICAgICAgZm9yIChpIGluIGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AoY29uZmlnLCBpKSkge1xuICAgICAgICAgICAgICAgIHByb3AgPSBjb25maWdbaV07XG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXSA9IHByb3A7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1snXycgKyBpXSA9IHByb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgLy8gTGVuaWVudCBvcmRpbmFsIHBhcnNpbmcgYWNjZXB0cyBqdXN0IGEgbnVtYmVyIGluIGFkZGl0aW9uIHRvXG4gICAgICAgIC8vIG51bWJlciArIChwb3NzaWJseSkgc3R1ZmYgY29taW5nIGZyb20gX2RheU9mTW9udGhPcmRpbmFsUGFyc2UuXG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBcIm9yZGluYWxQYXJzZVwiIGZhbGxiYWNrIGluIG5leHQgbWFqb3IgcmVsZWFzZS5cbiAgICAgICAgdGhpcy5fZGF5T2ZNb250aE9yZGluYWxQYXJzZUxlbmllbnQgPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgKHRoaXMuX2RheU9mTW9udGhPcmRpbmFsUGFyc2Uuc291cmNlIHx8IHRoaXMuX29yZGluYWxQYXJzZS5zb3VyY2UpICtcbiAgICAgICAgICAgICAgICAnfCcgK1xuICAgICAgICAgICAgICAgIC9cXGR7MSwyfS8uc291cmNlXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY2hpbGRDb25maWcpIHtcbiAgICAgICAgdmFyIHJlcyA9IGV4dGVuZCh7fSwgcGFyZW50Q29uZmlnKSxcbiAgICAgICAgICAgIHByb3A7XG4gICAgICAgIGZvciAocHJvcCBpbiBjaGlsZENvbmZpZykge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3AoY2hpbGRDb25maWcsIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHBhcmVudENvbmZpZ1twcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBwYXJlbnRDb25maWdbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICBleHRlbmQocmVzW3Byb3BdLCBjaGlsZENvbmZpZ1twcm9wXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZENvbmZpZ1twcm9wXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc1twcm9wXSA9IGNoaWxkQ29uZmlnW3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAocHJvcCBpbiBwYXJlbnRDb25maWcpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBoYXNPd25Qcm9wKHBhcmVudENvbmZpZywgcHJvcCkgJiZcbiAgICAgICAgICAgICAgICAhaGFzT3duUHJvcChjaGlsZENvbmZpZywgcHJvcCkgJiZcbiAgICAgICAgICAgICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcHJvcF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzIGRvbid0IG1vZGlmeSBwYXJlbnQgY29uZmlnXG4gICAgICAgICAgICAgICAgcmVzW3Byb3BdID0gZXh0ZW5kKHt9LCByZXNbcHJvcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTG9jYWxlKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cztcblxuICAgIGlmIChPYmplY3Qua2V5cykge1xuICAgICAgICBrZXlzID0gT2JqZWN0LmtleXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAga2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICAgIHJlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChpIGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wKG9iaiwgaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdENhbGVuZGFyID0ge1xuICAgICAgICBzYW1lRGF5OiAnW1RvZGF5IGF0XSBMVCcsXG4gICAgICAgIG5leHREYXk6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgICAgICAgbmV4dFdlZWs6ICdkZGRkIFthdF0gTFQnLFxuICAgICAgICBsYXN0RGF5OiAnW1llc3RlcmRheSBhdF0gTFQnLFxuICAgICAgICBsYXN0V2VlazogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICAgICAgICBzYW1lRWxzZTogJ0wnLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjYWxlbmRhcihrZXksIG1vbSwgbm93KSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLl9jYWxlbmRhcltrZXldIHx8IHRoaXMuX2NhbGVuZGFyWydzYW1lRWxzZSddO1xuICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobW9tLCBub3cpIDogb3V0cHV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHplcm9GaWxsKG51bWJlciwgdGFyZ2V0TGVuZ3RoLCBmb3JjZVNpZ24pIHtcbiAgICAgICAgdmFyIGFic051bWJlciA9ICcnICsgTWF0aC5hYnMobnVtYmVyKSxcbiAgICAgICAgICAgIHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aCxcbiAgICAgICAgICAgIHNpZ24gPSBudW1iZXIgPj0gMDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJykgK1xuICAgICAgICAgICAgTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSkgK1xuICAgICAgICAgICAgYWJzTnVtYmVyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRpbmdUb2tlbnMgPVxuICAgICAgICAgICAgLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xOezEsNX18WVlZWVlZfFlZWVlZfFlZWVl8WVl8eXsyLDR9fHlvP3xnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZyxcbiAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZyxcbiAgICAgICAgZm9ybWF0RnVuY3Rpb25zID0ge30sXG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zID0ge307XG5cbiAgICAvLyB0b2tlbjogICAgJ00nXG4gICAgLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxuICAgIC8vIG9yZGluYWw6ICAnTW8nXG4gICAgLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XG4gICAgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4odG9rZW4sIHBhZGRlZCwgb3JkaW5hbCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBjYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbY2FsbGJhY2tdKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gZnVuYztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFkZGVkKSB7XG4gICAgICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB6ZXJvRmlsbChmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yZGluYWwpIHtcbiAgICAgICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW29yZGluYWxdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5vcmRpbmFsKFxuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxlbmd0aDtcblxuICAgICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXSkge1xuICAgICAgICAgICAgICAgIGFycmF5W2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcnJheVtpXSA9IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtb20pIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSAnJyxcbiAgICAgICAgICAgICAgICBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ICs9IGlzRnVuY3Rpb24oYXJyYXlbaV0pXG4gICAgICAgICAgICAgICAgICAgID8gYXJyYXlbaV0uY2FsbChtb20sIGZvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgOiBhcnJheVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XG4gICAgZnVuY3Rpb24gZm9ybWF0TW9tZW50KG0sIGZvcm1hdCkge1xuICAgICAgICBpZiAoIW0uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbS5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPVxuICAgICAgICAgICAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChmb3JtYXQsIGxvY2FsZSkge1xuICAgICAgICB2YXIgaSA9IDU7XG5cbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlLmxvbmdEYXRlRm9ybWF0KGlucHV0KSB8fCBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIGxvY2FsRm9ybWF0dGluZ1Rva2VucyxcbiAgICAgICAgICAgICAgICByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIGkgLT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRMb25nRGF0ZUZvcm1hdCA9IHtcbiAgICAgICAgTFRTOiAnaDptbTpzcyBBJyxcbiAgICAgICAgTFQ6ICdoOm1tIEEnLFxuICAgICAgICBMOiAnTU0vREQvWVlZWScsXG4gICAgICAgIExMOiAnTU1NTSBELCBZWVlZJyxcbiAgICAgICAgTExMOiAnTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gICAgICAgIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJyxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbG9uZ0RhdGVGb3JtYXQoa2V5KSB7XG4gICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldLFxuICAgICAgICAgICAgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XG5cbiAgICAgICAgaWYgKGZvcm1hdCB8fCAhZm9ybWF0VXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldID0gZm9ybWF0VXBwZXJcbiAgICAgICAgICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAodG9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0b2sgPT09ICdNTU1NJyB8fFxuICAgICAgICAgICAgICAgICAgICB0b2sgPT09ICdNTScgfHxcbiAgICAgICAgICAgICAgICAgICAgdG9rID09PSAnREQnIHx8XG4gICAgICAgICAgICAgICAgICAgIHRvayA9PT0gJ2RkZGQnXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2suc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0b2s7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0SW52YWxpZERhdGUgPSAnSW52YWxpZCBkYXRlJztcblxuICAgIGZ1bmN0aW9uIGludmFsaWREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52YWxpZERhdGU7XG4gICAgfVxuXG4gICAgdmFyIGRlZmF1bHRPcmRpbmFsID0gJyVkJyxcbiAgICAgICAgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UgPSAvXFxkezEsMn0vO1xuXG4gICAgZnVuY3Rpb24gb3JkaW5hbChudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgnJWQnLCBudW1iZXIpO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0UmVsYXRpdmVUaW1lID0ge1xuICAgICAgICBmdXR1cmU6ICdpbiAlcycsXG4gICAgICAgIHBhc3Q6ICclcyBhZ28nLFxuICAgICAgICBzOiAnYSBmZXcgc2Vjb25kcycsXG4gICAgICAgIHNzOiAnJWQgc2Vjb25kcycsXG4gICAgICAgIG06ICdhIG1pbnV0ZScsXG4gICAgICAgIG1tOiAnJWQgbWludXRlcycsXG4gICAgICAgIGg6ICdhbiBob3VyJyxcbiAgICAgICAgaGg6ICclZCBob3VycycsXG4gICAgICAgIGQ6ICdhIGRheScsXG4gICAgICAgIGRkOiAnJWQgZGF5cycsXG4gICAgICAgIHc6ICdhIHdlZWsnLFxuICAgICAgICB3dzogJyVkIHdlZWtzJyxcbiAgICAgICAgTTogJ2EgbW9udGgnLFxuICAgICAgICBNTTogJyVkIG1vbnRocycsXG4gICAgICAgIHk6ICdhIHllYXInLFxuICAgICAgICB5eTogJyVkIHllYXJzJyxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW3N0cmluZ107XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKG91dHB1dClcbiAgICAgICAgICAgID8gb3V0cHV0KG51bWJlciwgd2l0aG91dFN1ZmZpeCwgc3RyaW5nLCBpc0Z1dHVyZSlcbiAgICAgICAgICAgIDogb3V0cHV0LnJlcGxhY2UoLyVkL2ksIG51bWJlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFzdEZ1dHVyZShkaWZmLCBvdXRwdXQpIHtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMuX3JlbGF0aXZlVGltZVtkaWZmID4gMCA/ICdmdXR1cmUnIDogJ3Bhc3QnXTtcbiAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oZm9ybWF0KSA/IGZvcm1hdChvdXRwdXQpIDogZm9ybWF0LnJlcGxhY2UoLyVzL2ksIG91dHB1dCk7XG4gICAgfVxuXG4gICAgdmFyIGFsaWFzZXMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGFkZFVuaXRBbGlhcyh1bml0LCBzaG9ydGhhbmQpIHtcbiAgICAgICAgdmFyIGxvd2VyQ2FzZSA9IHVuaXQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgYWxpYXNlc1tsb3dlckNhc2VdID0gYWxpYXNlc1tsb3dlckNhc2UgKyAncyddID0gYWxpYXNlc1tzaG9ydGhhbmRdID0gdW5pdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVVbml0cyh1bml0cykge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHVuaXRzID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgPyBhbGlhc2VzW3VuaXRzXSB8fCBhbGlhc2VzW3VuaXRzLnRvTG93ZXJDYXNlKCldXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdCkge1xuICAgICAgICB2YXIgbm9ybWFsaXplZElucHV0ID0ge30sXG4gICAgICAgICAgICBub3JtYWxpemVkUHJvcCxcbiAgICAgICAgICAgIHByb3A7XG5cbiAgICAgICAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcChpbnB1dE9iamVjdCwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkSW5wdXRbbm9ybWFsaXplZFByb3BdID0gaW5wdXRPYmplY3RbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dDtcbiAgICB9XG5cbiAgICB2YXIgcHJpb3JpdGllcyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gYWRkVW5pdFByaW9yaXR5KHVuaXQsIHByaW9yaXR5KSB7XG4gICAgICAgIHByaW9yaXRpZXNbdW5pdF0gPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzT2JqKSB7XG4gICAgICAgIHZhciB1bml0cyA9IFtdLFxuICAgICAgICAgICAgdTtcbiAgICAgICAgZm9yICh1IGluIHVuaXRzT2JqKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcCh1bml0c09iaiwgdSkpIHtcbiAgICAgICAgICAgICAgICB1bml0cy5wdXNoKHsgdW5pdDogdSwgcHJpb3JpdHk6IHByaW9yaXRpZXNbdV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdW5pdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVuaXRzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICAgICAgICByZXR1cm4gKHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDApIHx8IHllYXIgJSA0MDAgPT09IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWJzRmxvb3IobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICAvLyAtMCAtPiAwXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcikgfHwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0ludChhcmd1bWVudEZvckNvZXJjaW9uKSB7XG4gICAgICAgIHZhciBjb2VyY2VkTnVtYmVyID0gK2FyZ3VtZW50Rm9yQ29lcmNpb24sXG4gICAgICAgICAgICB2YWx1ZSA9IDA7XG5cbiAgICAgICAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYWJzRmxvb3IoY29lcmNlZE51bWJlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUdldFNldCh1bml0LCBrZWVwVGltZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNldCQxKHRoaXMsIHVuaXQsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0KHRoaXMsIHVuaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldChtb20sIHVuaXQpIHtcbiAgICAgICAgcmV0dXJuIG1vbS5pc1ZhbGlkKClcbiAgICAgICAgICAgID8gbW9tLl9kWydnZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArIHVuaXRdKClcbiAgICAgICAgICAgIDogTmFOO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldCQxKG1vbSwgdW5pdCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG1vbS5pc1ZhbGlkKCkgJiYgIWlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHVuaXQgPT09ICdGdWxsWWVhcicgJiZcbiAgICAgICAgICAgICAgICBpc0xlYXBZZWFyKG1vbS55ZWFyKCkpICYmXG4gICAgICAgICAgICAgICAgbW9tLm1vbnRoKCkgPT09IDEgJiZcbiAgICAgICAgICAgICAgICBtb20uZGF0ZSgpID09PSAyOVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0b0ludCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgbW9tLl9kWydzZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArIHVuaXRdKFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbW9tLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoKHZhbHVlLCBtb20ubW9udGgoKSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb20uX2RbJ3NldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgdW5pdF0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgZnVuY3Rpb24gc3RyaW5nR2V0KHVuaXRzKSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzW3VuaXRzXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0cmluZ1NldCh1bml0cywgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB1bml0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplT2JqZWN0VW5pdHModW5pdHMpO1xuICAgICAgICAgICAgdmFyIHByaW9yaXRpemVkID0gZ2V0UHJpb3JpdGl6ZWRVbml0cyh1bml0cyksXG4gICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICBwcmlvcml0aXplZExlbiA9IHByaW9yaXRpemVkLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwcmlvcml0aXplZExlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpc1twcmlvcml0aXplZFtpXS51bml0XSh1bml0c1twcmlvcml0aXplZFtpXS51bml0XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHRoaXNbdW5pdHNdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoMSA9IC9cXGQvLCAvLyAgICAgICAwIC0gOVxuICAgICAgICBtYXRjaDIgPSAvXFxkXFxkLywgLy8gICAgICAwMCAtIDk5XG4gICAgICAgIG1hdGNoMyA9IC9cXGR7M30vLCAvLyAgICAgMDAwIC0gOTk5XG4gICAgICAgIG1hdGNoNCA9IC9cXGR7NH0vLCAvLyAgICAwMDAwIC0gOTk5OVxuICAgICAgICBtYXRjaDYgPSAvWystXT9cXGR7Nn0vLCAvLyAtOTk5OTk5IC0gOTk5OTk5XG4gICAgICAgIG1hdGNoMXRvMiA9IC9cXGRcXGQ/LywgLy8gICAgICAgMCAtIDk5XG4gICAgICAgIG1hdGNoM3RvNCA9IC9cXGRcXGRcXGRcXGQ/LywgLy8gICAgIDk5OSAtIDk5OTlcbiAgICAgICAgbWF0Y2g1dG82ID0gL1xcZFxcZFxcZFxcZFxcZFxcZD8vLCAvLyAgIDk5OTk5IC0gOTk5OTk5XG4gICAgICAgIG1hdGNoMXRvMyA9IC9cXGR7MSwzfS8sIC8vICAgICAgIDAgLSA5OTlcbiAgICAgICAgbWF0Y2gxdG80ID0gL1xcZHsxLDR9LywgLy8gICAgICAgMCAtIDk5OTlcbiAgICAgICAgbWF0Y2gxdG82ID0gL1srLV0/XFxkezEsNn0vLCAvLyAtOTk5OTk5IC0gOTk5OTk5XG4gICAgICAgIG1hdGNoVW5zaWduZWQgPSAvXFxkKy8sIC8vICAgICAgIDAgLSBpbmZcbiAgICAgICAgbWF0Y2hTaWduZWQgPSAvWystXT9cXGQrLywgLy8gICAgLWluZiAtIGluZlxuICAgICAgICBtYXRjaE9mZnNldCA9IC9afFsrLV1cXGRcXGQ6P1xcZFxcZC9naSwgLy8gKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXG4gICAgICAgIG1hdGNoU2hvcnRPZmZzZXQgPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9naSwgLy8gKzAwIC0wMCArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbiAgICAgICAgbWF0Y2hUaW1lc3RhbXAgPSAvWystXT9cXGQrKFxcLlxcZHsxLDN9KT8vLCAvLyAxMjM0NTY3ODkgMTIzNDU2Nzg5LjEyM1xuICAgICAgICAvLyBhbnkgd29yZCAob3IgdHdvKSBjaGFyYWN0ZXJzIG9yIG51bWJlcnMgaW5jbHVkaW5nIHR3by90aHJlZSB3b3JkIG1vbnRoIGluIGFyYWJpYy5cbiAgICAgICAgLy8gaW5jbHVkZXMgc2NvdHRpc2ggZ2FlbGljIHR3byB3b3JkIGFuZCBoeXBoZW5hdGVkIG1vbnRoc1xuICAgICAgICBtYXRjaFdvcmQgPVxuICAgICAgICAgICAgL1swLTldezAsMjU2fVsnYS16XFx1MDBBMC1cXHUwNUZGXFx1MDcwMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRjA3XFx1RkYxMC1cXHVGRkVGXXsxLDI1Nn18W1xcdTA2MDAtXFx1MDZGRlxcL117MSwyNTZ9KFxccyo/W1xcdTA2MDAtXFx1MDZGRl17MSwyNTZ9KXsxLDJ9L2ksXG4gICAgICAgIHJlZ2V4ZXM7XG5cbiAgICByZWdleGVzID0ge307XG5cbiAgICBmdW5jdGlvbiBhZGRSZWdleFRva2VuKHRva2VuLCByZWdleCwgc3RyaWN0UmVnZXgpIHtcbiAgICAgICAgcmVnZXhlc1t0b2tlbl0gPSBpc0Z1bmN0aW9uKHJlZ2V4KVxuICAgICAgICAgICAgPyByZWdleFxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBpc1N0cmljdCAmJiBzdHJpY3RSZWdleCA/IHN0cmljdFJlZ2V4IDogcmVnZXg7XG4gICAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHJlZ2V4ZXMsIHRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodW5lc2NhcGVGb3JtYXQodG9rZW4pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZWdleGVzW3Rva2VuXShjb25maWcuX3N0cmljdCwgY29uZmlnLl9sb2NhbGUpO1xuICAgIH1cblxuICAgIC8vIENvZGUgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjE0OTMvaXMtdGhlcmUtYS1yZWdleHAtZXNjYXBlLWZ1bmN0aW9uLWluLWphdmFzY3JpcHRcbiAgICBmdW5jdGlvbiB1bmVzY2FwZUZvcm1hdChzKSB7XG4gICAgICAgIHJldHVybiByZWdleEVzY2FwZShcbiAgICAgICAgICAgIHNcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgnXFxcXCcsICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAvXFxcXChcXFspfFxcXFwoXFxdKXxcXFsoW15cXF1cXFtdKilcXF18XFxcXCguKS9nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobWF0Y2hlZCwgcDEsIHAyLCBwMywgcDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwMSB8fCBwMiB8fCBwMyB8fCBwNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWdleEVzY2FwZShzKSB7XG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuICAgIH1cblxuICAgIHZhciB0b2tlbnMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGFkZFBhcnNlVG9rZW4odG9rZW4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgZnVuYyA9IGNhbGxiYWNrLFxuICAgICAgICAgICAgdG9rZW5MZW47XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0b2tlbiA9IFt0b2tlbl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTnVtYmVyKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICBhcnJheVtjYWxsYmFja10gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRva2VuTGVuID0gdG9rZW4ubGVuZ3RoO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5MZW47IGkrKykge1xuICAgICAgICAgICAgdG9rZW5zW3Rva2VuW2ldXSA9IGZ1bmM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRXZWVrUGFyc2VUb2tlbih0b2tlbiwgY2FsbGJhY2spIHtcbiAgICAgICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICAgICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xuICAgICAgICAgICAgY2FsbGJhY2soaW5wdXQsIGNvbmZpZy5fdywgY29uZmlnLCB0b2tlbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBpbnB1dCwgY29uZmlnKSB7XG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsICYmIGhhc093blByb3AodG9rZW5zLCB0b2tlbikpIHtcbiAgICAgICAgICAgIHRva2Vuc1t0b2tlbl0oaW5wdXQsIGNvbmZpZy5fYSwgY29uZmlnLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgWUVBUiA9IDAsXG4gICAgICAgIE1PTlRIID0gMSxcbiAgICAgICAgREFURSA9IDIsXG4gICAgICAgIEhPVVIgPSAzLFxuICAgICAgICBNSU5VVEUgPSA0LFxuICAgICAgICBTRUNPTkQgPSA1LFxuICAgICAgICBNSUxMSVNFQ09ORCA9IDYsXG4gICAgICAgIFdFRUsgPSA3LFxuICAgICAgICBXRUVLREFZID0gODtcblxuICAgIGZ1bmN0aW9uIG1vZChuLCB4KSB7XG4gICAgICAgIHJldHVybiAoKG4gJSB4KSArIHgpICUgeDtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXhPZjtcblxuICAgIGlmIChBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgICAgICBpbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXhPZiA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgICAvLyBJIGtub3dcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1tpXSA9PT0gbykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGF5c0luTW9udGgoeWVhciwgbW9udGgpIHtcbiAgICAgICAgaWYgKGlzTmFOKHllYXIpIHx8IGlzTmFOKG1vbnRoKSkge1xuICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW9kTW9udGggPSBtb2QobW9udGgsIDEyKTtcbiAgICAgICAgeWVhciArPSAobW9udGggLSBtb2RNb250aCkgLyAxMjtcbiAgICAgICAgcmV0dXJuIG1vZE1vbnRoID09PSAxXG4gICAgICAgICAgICA/IGlzTGVhcFllYXIoeWVhcilcbiAgICAgICAgICAgICAgICA/IDI5XG4gICAgICAgICAgICAgICAgOiAyOFxuICAgICAgICAgICAgOiAzMSAtICgobW9kTW9udGggJSA3KSAlIDIpO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdNJywgWydNTScsIDJdLCAnTW8nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRoKCkgKyAxO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ01NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRoc1Nob3J0KHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignTU1NTScsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLm1vbnRocyh0aGlzLCBmb3JtYXQpO1xuICAgIH0pO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdtb250aCcsICdNJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdtb250aCcsIDgpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignTScsIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignTU0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcbiAgICB9KTtcbiAgICBhZGRSZWdleFRva2VuKCdNTU1NJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5tb250aHNSZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnTScsICdNTSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W01PTlRIXSA9IHRvSW50KGlucHV0KSAtIDE7XG4gICAgfSk7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnTU1NJywgJ01NTU0nXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICB2YXIgbW9udGggPSBjb25maWcuX2xvY2FsZS5tb250aHNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgICAgLy8gaWYgd2UgZGlkbid0IGZpbmQgYSBtb250aCBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWQuXG4gICAgICAgIGlmIChtb250aCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhcnJheVtNT05USF0gPSBtb250aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRNb250aCA9IGlucHV0O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBMT0NBTEVTXG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZU1vbnRocyA9XG4gICAgICAgICAgICAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoXG4gICAgICAgICAgICAgICAgJ18nXG4gICAgICAgICAgICApLFxuICAgICAgICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQgPVxuICAgICAgICAgICAgJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxuICAgICAgICBNT05USFNfSU5fRk9STUFUID0gL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrTU1NTT8vLFxuICAgICAgICBkZWZhdWx0TW9udGhzU2hvcnRSZWdleCA9IG1hdGNoV29yZCxcbiAgICAgICAgZGVmYXVsdE1vbnRoc1JlZ2V4ID0gbWF0Y2hXb3JkO1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlTW9udGhzKG0sIGZvcm1hdCkge1xuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpc0FycmF5KHRoaXMuX21vbnRocylcbiAgICAgICAgICAgICAgICA/IHRoaXMuX21vbnRoc1xuICAgICAgICAgICAgICAgIDogdGhpcy5fbW9udGhzWydzdGFuZGFsb25lJ107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzKVxuICAgICAgICAgICAgPyB0aGlzLl9tb250aHNbbS5tb250aCgpXVxuICAgICAgICAgICAgOiB0aGlzLl9tb250aHNbXG4gICAgICAgICAgICAgICAgICAodGhpcy5fbW9udGhzLmlzRm9ybWF0IHx8IE1PTlRIU19JTl9GT1JNQVQpLnRlc3QoZm9ybWF0KVxuICAgICAgICAgICAgICAgICAgICAgID8gJ2Zvcm1hdCdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdzdGFuZGFsb25lJ1xuICAgICAgICAgICAgICBdW20ubW9udGgoKV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlTW9udGhzU2hvcnQobSwgZm9ybWF0KSB7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5fbW9udGhzU2hvcnQpXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFxuICAgICAgICAgICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnRbJ3N0YW5kYWxvbmUnXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNBcnJheSh0aGlzLl9tb250aHNTaG9ydClcbiAgICAgICAgICAgID8gdGhpcy5fbW9udGhzU2hvcnRbbS5tb250aCgpXVxuICAgICAgICAgICAgOiB0aGlzLl9tb250aHNTaG9ydFtcbiAgICAgICAgICAgICAgICAgIE1PTlRIU19JTl9GT1JNQVQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICAgICAgXVttLm1vbnRoKCldO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0cmljdFBhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBpaSxcbiAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgIGxsYyA9IG1vbnRoTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXG4gICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7ICsraSkge1xuICAgICAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRoc1Nob3J0KFxuICAgICAgICAgICAgICAgICAgICBtb20sXG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbG9uZ01vbnRoc1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX2xvbmdNb250aHNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9sb25nTW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsZU1vbnRoc1BhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICAgICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICAgICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVTdHJpY3RQYXJzZS5jYWxsKHRoaXMsIG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogYWRkIHNvcnRpbmdcbiAgICAgICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlclxuICAgICAgICAvLyBzZWUgc29ydGluZyBpbiBjb21wdXRlTW9udGhzUGFyc2VcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCBpXSk7XG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAgICAgICAnXicgKyB0aGlzLm1vbnRocyhtb20sICcnKS5yZXBsYWNlKCcuJywgJycpICsgJyQnLFxuICAgICAgICAgICAgICAgICAgICAnaSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAgICAgICAnXicgKyB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnJykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0cmljdCAmJiAhdGhpcy5fbW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpICsgJ3xeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgICAgIGZvcm1hdCA9PT0gJ01NTU0nICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgICAgIGZvcm1hdCA9PT0gJ01NTScgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgdGhpcy5fbW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBzZXRNb250aChtb20sIHZhbHVlKSB7XG4gICAgICAgIHZhciBkYXlPZk1vbnRoO1xuXG4gICAgICAgIGlmICghbW9tLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgLy8gTm8gb3BcbiAgICAgICAgICAgIHJldHVybiBtb207XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0b0ludCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbW9tLmxvY2FsZURhdGEoKS5tb250aHNQYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQW5vdGhlciBzaWxlbnQgZmFpbHVyZT9cbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRheU9mTW9udGggPSBNYXRoLm1pbihtb20uZGF0ZSgpLCBkYXlzSW5Nb250aChtb20ueWVhcigpLCB2YWx1ZSkpO1xuICAgICAgICBtb20uX2RbJ3NldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgJ01vbnRoJ10odmFsdWUsIGRheU9mTW9udGgpO1xuICAgICAgICByZXR1cm4gbW9tO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldE1vbnRoKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzZXRNb250aCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQodGhpcywgJ01vbnRoJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREYXlzSW5Nb250aCgpIHtcbiAgICAgICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1Nob3J0UmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSBkZWZhdWx0TW9udGhzU2hvcnRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4XG4gICAgICAgICAgICAgICAgOiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9udGhzUmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlTW9udGhzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1JlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gZGVmYXVsdE1vbnRoc1JlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICAgICAgPyB0aGlzLl9tb250aHNTdHJpY3RSZWdleFxuICAgICAgICAgICAgICAgIDogdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlTW9udGhzUGFyc2UoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNtcExlblJldihhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzaG9ydFBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgbG9uZ1BpZWNlcyA9IFtdLFxuICAgICAgICAgICAgbWl4ZWRQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBtb207XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcbiAgICAgICAgICAgIG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgaV0pO1xuICAgICAgICAgICAgc2hvcnRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpKTtcbiAgICAgICAgICAgIGxvbmdQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhtb20sICcnKSk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzKG1vbSwgJycpKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChtb20sICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxuICAgICAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXG4gICAgICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XG4gICAgICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xuICAgICAgICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnXignICsgbWl4ZWRQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gdGhpcy5fbW9udGhzUmVnZXg7XG4gICAgICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeKCcgKyBsb25nUGllY2VzLmpvaW4oJ3wnKSArICcpJyxcbiAgICAgICAgICAgICdpJ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICdeKCcgKyBzaG9ydFBpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICAnaSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignWScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnllYXIoKTtcbiAgICAgICAgcmV0dXJuIHkgPD0gOTk5OSA/IHplcm9GaWxsKHksIDQpIDogJysnICsgeTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnWVknLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55ZWFyKCkgJSAxMDA7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVknLCA0XSwgMCwgJ3llYXInKTtcbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ1lZWVlZJywgNV0sIDAsICd5ZWFyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydZWVlZWVknLCA2LCB0cnVlXSwgMCwgJ3llYXInKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygneWVhcicsICd5Jyk7XG5cbiAgICAvLyBQUklPUklUSUVTXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ3llYXInLCAxKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1knLCBtYXRjaFNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbignWVknLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignWVlZWScsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcbiAgICBhZGRSZWdleFRva2VuKCdZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcbiAgICBhZGRSZWdleFRva2VuKCdZWVlZWVknLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbiAgICBhZGRQYXJzZVRva2VuKFsnWVlZWVknLCAnWVlZWVlZJ10sIFlFQVIpO1xuICAgIGFkZFBhcnNlVG9rZW4oJ1lZWVknLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W1lFQVJdID1cbiAgICAgICAgICAgIGlucHV0Lmxlbmd0aCA9PT0gMiA/IGhvb2tzLnBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPSBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbWUVBUl0gPSBwYXJzZUludChpbnB1dCwgMTApO1xuICAgIH0pO1xuXG4gICAgLy8gSEVMUEVSU1xuXG4gICAgZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XG4gICAgICAgIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xuICAgIH1cblxuICAgIC8vIEhPT0tTXG5cbiAgICBob29rcy5wYXJzZVR3b0RpZ2l0WWVhciA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gdG9JbnQoaW5wdXQpICsgKHRvSW50KGlucHV0KSA+IDY4ID8gMTkwMCA6IDIwMDApO1xuICAgIH07XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICB2YXIgZ2V0U2V0WWVhciA9IG1ha2VHZXRTZXQoJ0Z1bGxZZWFyJywgdHJ1ZSk7XG5cbiAgICBmdW5jdGlvbiBnZXRJc0xlYXBZZWFyKCkge1xuICAgICAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcykge1xuICAgICAgICAvLyBjYW4ndCBqdXN0IGFwcGx5KCkgdG8gY3JlYXRlIGEgZGF0ZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzE4MTM0OFxuICAgICAgICB2YXIgZGF0ZTtcbiAgICAgICAgLy8gdGhlIGRhdGUgY29uc3RydWN0b3IgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICAgICAgLy8gcHJlc2VydmUgbGVhcCB5ZWFycyB1c2luZyBhIGZ1bGwgNDAwIHllYXIgY3ljbGUsIHRoZW4gcmVzZXRcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ICsgNDAwLCBtLCBkLCBoLCBNLCBzLCBtcyk7XG4gICAgICAgICAgICBpZiAoaXNGaW5pdGUoZGF0ZS5nZXRGdWxsWWVhcigpKSkge1xuICAgICAgICAgICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoeSwgbSwgZCwgaCwgTSwgcywgbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVVRDRGF0ZSh5KSB7XG4gICAgICAgIHZhciBkYXRlLCBhcmdzO1xuICAgICAgICAvLyB0aGUgRGF0ZS5VVEMgZnVuY3Rpb24gcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAvLyBwcmVzZXJ2ZSBsZWFwIHllYXJzIHVzaW5nIGEgZnVsbCA0MDAgeWVhciBjeWNsZSwgdGhlbiByZXNldFxuICAgICAgICAgICAgYXJnc1swXSA9IHkgKyA0MDA7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJncykpO1xuICAgICAgICAgICAgaWYgKGlzRmluaXRlKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSkpIHtcbiAgICAgICAgICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuXG4gICAgLy8gc3RhcnQtb2YtZmlyc3Qtd2VlayAtIHN0YXJ0LW9mLXllYXJcbiAgICBmdW5jdGlvbiBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIC8vIGZpcnN0LXdlZWsgZGF5IC0tIHdoaWNoIGphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrICg0IGZvciBpc28sIDEgZm9yIG90aGVyKVxuICAgICAgICAgICAgZndkID0gNyArIGRvdyAtIGRveSxcbiAgICAgICAgICAgIC8vIGZpcnN0LXdlZWsgZGF5IGxvY2FsIHdlZWtkYXkgLS0gd2hpY2ggbG9jYWwgd2Vla2RheSBpcyBmd2RcbiAgICAgICAgICAgIGZ3ZGx3ID0gKDcgKyBjcmVhdGVVVENEYXRlKHllYXIsIDAsIGZ3ZCkuZ2V0VVRDRGF5KCkgLSBkb3cpICUgNztcblxuICAgICAgICByZXR1cm4gLWZ3ZGx3ICsgZndkIC0gMTtcbiAgICB9XG5cbiAgICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlI0NhbGN1bGF0aW5nX2FfZGF0ZV9naXZlbl90aGVfeWVhci4yQ193ZWVrX251bWJlcl9hbmRfd2Vla2RheVxuICAgIGZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrcyh5ZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSkge1xuICAgICAgICB2YXIgbG9jYWxXZWVrZGF5ID0gKDcgKyB3ZWVrZGF5IC0gZG93KSAlIDcsXG4gICAgICAgICAgICB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KSxcbiAgICAgICAgICAgIGRheU9mWWVhciA9IDEgKyA3ICogKHdlZWsgLSAxKSArIGxvY2FsV2Vla2RheSArIHdlZWtPZmZzZXQsXG4gICAgICAgICAgICByZXNZZWFyLFxuICAgICAgICAgICAgcmVzRGF5T2ZZZWFyO1xuXG4gICAgICAgIGlmIChkYXlPZlllYXIgPD0gMCkge1xuICAgICAgICAgICAgcmVzWWVhciA9IHllYXIgLSAxO1xuICAgICAgICAgICAgcmVzRGF5T2ZZZWFyID0gZGF5c0luWWVhcihyZXNZZWFyKSArIGRheU9mWWVhcjtcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXIpKSB7XG4gICAgICAgICAgICByZXNZZWFyID0geWVhciArIDE7XG4gICAgICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXIgLSBkYXlzSW5ZZWFyKHllYXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzWWVhciA9IHllYXI7XG4gICAgICAgICAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeWVhcjogcmVzWWVhcixcbiAgICAgICAgICAgIGRheU9mWWVhcjogcmVzRGF5T2ZZZWFyLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdlZWtPZlllYXIobW9tLCBkb3csIGRveSkge1xuICAgICAgICB2YXIgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldChtb20ueWVhcigpLCBkb3csIGRveSksXG4gICAgICAgICAgICB3ZWVrID0gTWF0aC5mbG9vcigobW9tLmRheU9mWWVhcigpIC0gd2Vla09mZnNldCAtIDEpIC8gNykgKyAxLFxuICAgICAgICAgICAgcmVzV2VlayxcbiAgICAgICAgICAgIHJlc1llYXI7XG5cbiAgICAgICAgaWYgKHdlZWsgPCAxKSB7XG4gICAgICAgICAgICByZXNZZWFyID0gbW9tLnllYXIoKSAtIDE7XG4gICAgICAgICAgICByZXNXZWVrID0gd2VlayArIHdlZWtzSW5ZZWFyKHJlc1llYXIsIGRvdywgZG95KTtcbiAgICAgICAgfSBlbHNlIGlmICh3ZWVrID4gd2Vla3NJblllYXIobW9tLnllYXIoKSwgZG93LCBkb3kpKSB7XG4gICAgICAgICAgICByZXNXZWVrID0gd2VlayAtIHdlZWtzSW5ZZWFyKG1vbS55ZWFyKCksIGRvdywgZG95KTtcbiAgICAgICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc1llYXIgPSBtb20ueWVhcigpO1xuICAgICAgICAgICAgcmVzV2VlayA9IHdlZWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2VlazogcmVzV2VlayxcbiAgICAgICAgICAgIHllYXI6IHJlc1llYXIsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Vla3NJblllYXIoeWVhciwgZG93LCBkb3kpIHtcbiAgICAgICAgdmFyIHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpLFxuICAgICAgICAgICAgd2Vla09mZnNldE5leHQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciArIDEsIGRvdywgZG95KTtcbiAgICAgICAgcmV0dXJuIChkYXlzSW5ZZWFyKHllYXIpIC0gd2Vla09mZnNldCArIHdlZWtPZmZzZXROZXh0KSAvIDc7XG4gICAgfVxuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ3cnLCBbJ3d3JywgMl0sICd3bycsICd3ZWVrJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ1cnLCBbJ1dXJywgMl0sICdXbycsICdpc29XZWVrJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ3dlZWsnLCAndycpO1xuICAgIGFkZFVuaXRBbGlhcygnaXNvV2VlaycsICdXJyk7XG5cbiAgICAvLyBQUklPUklUSUVTXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ3dlZWsnLCA1KTtcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWsnLCA1KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ3cnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ3d3JywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1cnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ1dXJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oXG4gICAgICAgIFsndycsICd3dycsICdXJywgJ1dXJ10sXG4gICAgICAgIGZ1bmN0aW9uIChpbnB1dCwgd2VlaywgY29uZmlnLCB0b2tlbikge1xuICAgICAgICAgICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMSldID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIEhFTFBFUlNcblxuICAgIC8vIExPQ0FMRVNcblxuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWsobW9tKSB7XG4gICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKG1vbSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95KS53ZWVrO1xuICAgIH1cblxuICAgIHZhciBkZWZhdWx0TG9jYWxlV2VlayA9IHtcbiAgICAgICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICAgICAgZG95OiA2LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA2dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGxvY2FsZUZpcnN0RGF5T2ZXZWVrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlRmlyc3REYXlPZlllYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcbiAgICB9XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRTZXRXZWVrKGlucHV0KSB7XG4gICAgICAgIHZhciB3ZWVrID0gdGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNldElTT1dlZWsoaW5wdXQpIHtcbiAgICAgICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XG4gICAgICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKChpbnB1dCAtIHdlZWspICogNywgJ2QnKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignZCcsIDAsICdkbycsICdkYXknKTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdkZCcsIDAsIDAsIGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLndlZWtkYXlzTWluKHRoaXMsIGZvcm1hdCk7XG4gICAgfSk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbignZGRkJywgMCwgMCwgZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkud2Vla2RheXNTaG9ydCh0aGlzLCBmb3JtYXQpO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2RkZGQnLCAwLCAwLCBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS53ZWVrZGF5cyh0aGlzLCBmb3JtYXQpO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2UnLCAwLCAwLCAnd2Vla2RheScpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdFJywgMCwgMCwgJ2lzb1dlZWtkYXknKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnZGF5JywgJ2QnKTtcbiAgICBhZGRVbml0QWxpYXMoJ3dlZWtkYXknLCAnZScpO1xuICAgIGFkZFVuaXRBbGlhcygnaXNvV2Vla2RheScsICdFJyk7XG5cbiAgICAvLyBQUklPUklUWVxuICAgIGFkZFVuaXRQcmlvcml0eSgnZGF5JywgMTEpO1xuICAgIGFkZFVuaXRQcmlvcml0eSgnd2Vla2RheScsIDExKTtcbiAgICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtkYXknLCAxMSk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdkJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdlJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdFJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdkZCcsIGZ1bmN0aW9uIChpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNNaW5SZWdleChpc1N0cmljdCk7XG4gICAgfSk7XG4gICAgYWRkUmVnZXhUb2tlbignZGRkJywgZnVuY3Rpb24gKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xuICAgIH0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUmVnZXgoaXNTdHJpY3QpO1xuICAgIH0pO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oWydkZCcsICdkZGQnLCAnZGRkZCddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgdmFyIHdlZWtkYXkgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xuICAgICAgICAvLyBpZiB3ZSBkaWRuJ3QgZ2V0IGEgd2Vla2RheSBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWRcbiAgICAgICAgaWYgKHdlZWtkYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgd2Vlay5kID0gd2Vla2RheTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRXZWVrZGF5ID0gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGFkZFdlZWtQYXJzZVRva2VuKFsnZCcsICdlJywgJ0UnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHdlZWtbdG9rZW5dID0gdG9JbnQoaW5wdXQpO1xuICAgIH0pO1xuXG4gICAgLy8gSEVMUEVSU1xuXG4gICAgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGlucHV0LCBsb2NhbGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0ID0gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpO1xuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VJc29XZWVrZGF5KGlucHV0LCBsb2NhbGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCkgJSA3IHx8IDc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcbiAgICB9XG5cbiAgICAvLyBMT0NBTEVTXG4gICAgZnVuY3Rpb24gc2hpZnRXZWVrZGF5cyh3cywgbikge1xuICAgICAgICByZXR1cm4gd3Muc2xpY2UobiwgNykuY29uY2F0KHdzLnNsaWNlKDAsIG4pKTtcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZVdlZWtkYXlzID1cbiAgICAgICAgICAgICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcbiAgICAgICAgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQgPSAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdCgnXycpLFxuICAgICAgICBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4gPSAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyksXG4gICAgICAgIGRlZmF1bHRXZWVrZGF5c1JlZ2V4ID0gbWF0Y2hXb3JkLFxuICAgICAgICBkZWZhdWx0V2Vla2RheXNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkLFxuICAgICAgICBkZWZhdWx0V2Vla2RheXNNaW5SZWdleCA9IG1hdGNoV29yZDtcblxuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzKG0sIGZvcm1hdCkge1xuICAgICAgICB2YXIgd2Vla2RheXMgPSBpc0FycmF5KHRoaXMuX3dlZWtkYXlzKVxuICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1xuICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c1tcbiAgICAgICAgICAgICAgICAgIG0gJiYgbSAhPT0gdHJ1ZSAmJiB0aGlzLl93ZWVrZGF5cy5pc0Zvcm1hdC50ZXN0KGZvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgICA/ICdmb3JtYXQnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnc3RhbmRhbG9uZSdcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIG0gPT09IHRydWVcbiAgICAgICAgICAgID8gc2hpZnRXZWVrZGF5cyh3ZWVrZGF5cywgdGhpcy5fd2Vlay5kb3cpXG4gICAgICAgICAgICA6IG1cbiAgICAgICAgICAgID8gd2Vla2RheXNbbS5kYXkoKV1cbiAgICAgICAgICAgIDogd2Vla2RheXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlV2Vla2RheXNTaG9ydChtKSB7XG4gICAgICAgIHJldHVybiBtID09PSB0cnVlXG4gICAgICAgICAgICA/IHNoaWZ0V2Vla2RheXModGhpcy5fd2Vla2RheXNTaG9ydCwgdGhpcy5fd2Vlay5kb3cpXG4gICAgICAgICAgICA6IG1cbiAgICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNTaG9ydFttLmRheSgpXVxuICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsZVdlZWtkYXlzTWluKG0pIHtcbiAgICAgICAgcmV0dXJuIG0gPT09IHRydWVcbiAgICAgICAgICAgID8gc2hpZnRXZWVrZGF5cyh0aGlzLl93ZWVrZGF5c01pbiwgdGhpcy5fd2Vlay5kb3cpXG4gICAgICAgICAgICA6IG1cbiAgICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNNaW5bbS5kYXkoKV1cbiAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNNaW47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3RyaWN0UGFyc2UkMSh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBpaSxcbiAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgIGxsYyA9IHdlZWtkYXlOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xuICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XG4gICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyArK2kpIHtcbiAgICAgICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNNaW4oXG4gICAgICAgICAgICAgICAgICAgIG1vbSxcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICApLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c1Nob3J0KFxuICAgICAgICAgICAgICAgICAgICBtb20sXG4gICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RyaWN0KSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl93ZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIGlmIChpaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9taW5XZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcbiAgICAgICAgICAgICAgICBpaSA9IGluZGV4T2YuY2FsbCh0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX3dlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgaWYgKGlpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlpID0gaW5kZXhPZi5jYWxsKHRoaXMuX21pbldlZWtkYXlzUGFyc2UsIGxsYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fbWluV2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fd2Vla2RheXNQYXJzZSwgbGxjKTtcbiAgICAgICAgICAgICAgICBpZiAoaWkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWkgPSBpbmRleE9mLmNhbGwodGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLCBsbGMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2NhbGVXZWVrZGF5c1BhcnNlKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCkge1xuICAgICAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgICAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlU3RyaWN0UGFyc2UkMS5jYWxsKHRoaXMsIHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuXG4gICAgICAgICAgICBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XG4gICAgICAgICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAgICAgJ14nICsgdGhpcy53ZWVrZGF5cyhtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcXFwuPycpICsgJyQnLFxuICAgICAgICAgICAgICAgICAgICAnaSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICdeJyArIHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKS5yZXBsYWNlKCcuJywgJ1xcXFwuPycpICsgJyQnLFxuICAgICAgICAgICAgICAgICAgICAnaSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgICAgICAgICAnXicgKyB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpLnJlcGxhY2UoJy4nLCAnXFxcXC4/JykgKyAnJCcsXG4gICAgICAgICAgICAgICAgICAgICdpJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICAgICAgICAgICdeJyArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2Vla2RheXMobW9tLCAnJykgK1xuICAgICAgICAgICAgICAgICAgICAnfF4nICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpICtcbiAgICAgICAgICAgICAgICAgICAgJ3xeJyArXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2Vla2RheXNNaW4obW9tLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgc3RyaWN0ICYmXG4gICAgICAgICAgICAgICAgZm9ybWF0ID09PSAnZGRkZCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHN0cmljdCAmJlxuICAgICAgICAgICAgICAgIGZvcm1hdCA9PT0gJ2RkZCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICBzdHJpY3QgJiZcbiAgICAgICAgICAgICAgICBmb3JtYXQgPT09ICdkZCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRTZXREYXlPZldlZWsoaW5wdXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkYXkgPSB0aGlzLl9pc1VUQyA/IHRoaXMuX2QuZ2V0VVRDRGF5KCkgOiB0aGlzLl9kLmdldERheSgpO1xuICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaW5wdXQgPSBwYXJzZVdlZWtkYXkoaW5wdXQsIHRoaXMubG9jYWxlRGF0YSgpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChpbnB1dCAtIGRheSwgJ2QnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkYXk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXRMb2NhbGVEYXlPZldlZWsoaW5wdXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3ZWVrZGF5ID0gKHRoaXMuZGF5KCkgKyA3IC0gdGhpcy5sb2NhbGVEYXRhKCkuX3dlZWsuZG93KSAlIDc7XG4gICAgICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2Vla2RheSA6IHRoaXMuYWRkKGlucHV0IC0gd2Vla2RheSwgJ2QnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXRJU09EYXlPZldlZWsoaW5wdXQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmVoYXZlcyB0aGUgc2FtZSBhcyBtb21lbnQjZGF5IGV4Y2VwdFxuICAgICAgICAvLyBhcyBhIGdldHRlciwgcmV0dXJucyA3IGluc3RlYWQgb2YgMCAoMS03IHJhbmdlIGluc3RlYWQgb2YgMC02KVxuICAgICAgICAvLyBhcyBhIHNldHRlciwgc3VuZGF5IHNob3VsZCBiZWxvbmcgdG8gdGhlIHByZXZpb3VzIHdlZWsuXG5cbiAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5ID0gcGFyc2VJc29XZWVrZGF5KGlucHV0LCB0aGlzLmxvY2FsZURhdGEoKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXkodGhpcy5kYXkoKSAlIDcgPyB3ZWVrZGF5IDogd2Vla2RheSAtIDcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF5KCkgfHwgNztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdlZWtkYXlzUmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZVdlZWtkYXlzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1N0cmljdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBkZWZhdWx0V2Vla2RheXNSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0XG4gICAgICAgICAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4XG4gICAgICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNTaG9ydFJlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSBkZWZhdWx0V2Vla2RheXNTaG9ydFJlZ2V4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdFxuICAgICAgICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4XG4gICAgICAgICAgICAgICAgOiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KSB7XG4gICAgICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcbiAgICAgICAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVXZWVrZGF5c1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdHJpY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c01pblJlZ2V4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gZGVmYXVsdFdlZWtkYXlzTWluUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCAmJiBpc1N0cmljdFxuICAgICAgICAgICAgICAgID8gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleFxuICAgICAgICAgICAgICAgIDogdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVXZWVrZGF5c1BhcnNlKCkge1xuICAgICAgICBmdW5jdGlvbiBjbXBMZW5SZXYoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWluUGllY2VzID0gW10sXG4gICAgICAgICAgICBzaG9ydFBpZWNlcyA9IFtdLFxuICAgICAgICAgICAgbG9uZ1BpZWNlcyA9IFtdLFxuICAgICAgICAgICAgbWl4ZWRQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBtb20sXG4gICAgICAgICAgICBtaW5wLFxuICAgICAgICAgICAgc2hvcnRwLFxuICAgICAgICAgICAgbG9uZ3A7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICAgICAgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xuICAgICAgICAgICAgbWlucCA9IHJlZ2V4RXNjYXBlKHRoaXMud2Vla2RheXNNaW4obW9tLCAnJykpO1xuICAgICAgICAgICAgc2hvcnRwID0gcmVnZXhFc2NhcGUodGhpcy53ZWVrZGF5c1Nob3J0KG1vbSwgJycpKTtcbiAgICAgICAgICAgIGxvbmdwID0gcmVnZXhFc2NhcGUodGhpcy53ZWVrZGF5cyhtb20sICcnKSk7XG4gICAgICAgICAgICBtaW5QaWVjZXMucHVzaChtaW5wKTtcbiAgICAgICAgICAgIHNob3J0UGllY2VzLnB1c2goc2hvcnRwKTtcbiAgICAgICAgICAgIGxvbmdQaWVjZXMucHVzaChsb25ncCk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKG1pbnApO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChzaG9ydHApO1xuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChsb25ncCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSB3ZWVrZGF5IChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XG4gICAgICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cbiAgICAgICAgbWluUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuICAgICAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcbiAgICAgICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xuXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xuXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgJ14oJyArIGxvbmdQaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAgICAgJ2knXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAnXignICsgc2hvcnRQaWVjZXMuam9pbignfCcpICsgJyknLFxuICAgICAgICAgICAgJ2knXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgJ14oJyArIG1pblBpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICAnaSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBmdW5jdGlvbiBoRm9ybWF0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3VycygpICUgMTIgfHwgMTI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga0Zvcm1hdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMoKSB8fCAyNDtcbiAgICB9XG5cbiAgICBhZGRGb3JtYXRUb2tlbignSCcsIFsnSEgnLCAyXSwgMCwgJ2hvdXInKTtcbiAgICBhZGRGb3JtYXRUb2tlbignaCcsIFsnaGgnLCAyXSwgMCwgaEZvcm1hdCk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ2snLCBbJ2trJywgMl0sIDAsIGtGb3JtYXQpO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ2htbScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcnICsgaEZvcm1hdC5hcHBseSh0aGlzKSArIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKCdobW1zcycsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICcnICtcbiAgICAgICAgICAgIGhGb3JtYXQuYXBwbHkodGhpcykgK1xuICAgICAgICAgICAgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpICtcbiAgICAgICAgICAgIHplcm9GaWxsKHRoaXMuc2Vjb25kcygpLCAyKVxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ0htbScsIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcnICsgdGhpcy5ob3VycygpICsgemVyb0ZpbGwodGhpcy5taW51dGVzKCksIDIpO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ0htbXNzJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgJycgK1xuICAgICAgICAgICAgdGhpcy5ob3VycygpICtcbiAgICAgICAgICAgIHplcm9GaWxsKHRoaXMubWludXRlcygpLCAyKSArXG4gICAgICAgICAgICB6ZXJvRmlsbCh0aGlzLnNlY29uZHMoKSwgMilcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG1lcmlkaWVtKHRva2VuLCBsb3dlcmNhc2UpIHtcbiAgICAgICAgYWRkRm9ybWF0VG9rZW4odG9rZW4sIDAsIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5tZXJpZGllbShcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXJzKCksXG4gICAgICAgICAgICAgICAgdGhpcy5taW51dGVzKCksXG4gICAgICAgICAgICAgICAgbG93ZXJjYXNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtZXJpZGllbSgnYScsIHRydWUpO1xuICAgIG1lcmlkaWVtKCdBJywgZmFsc2UpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdob3VyJywgJ2gnKTtcblxuICAgIC8vIFBSSU9SSVRZXG4gICAgYWRkVW5pdFByaW9yaXR5KCdob3VyJywgMTMpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgZnVuY3Rpb24gbWF0Y2hNZXJpZGllbShpc1N0cmljdCwgbG9jYWxlKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuX21lcmlkaWVtUGFyc2U7XG4gICAgfVxuXG4gICAgYWRkUmVnZXhUb2tlbignYScsIG1hdGNoTWVyaWRpZW0pO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0EnLCBtYXRjaE1lcmlkaWVtKTtcbiAgICBhZGRSZWdleFRva2VuKCdIJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdoJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdrJywgbWF0Y2gxdG8yKTtcbiAgICBhZGRSZWdleFRva2VuKCdISCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdoaCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdraycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ2htbScsIG1hdGNoM3RvNCk7XG4gICAgYWRkUmVnZXhUb2tlbignaG1tc3MnLCBtYXRjaDV0bzYpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0htbScsIG1hdGNoM3RvNCk7XG4gICAgYWRkUmVnZXhUb2tlbignSG1tc3MnLCBtYXRjaDV0bzYpO1xuXG4gICAgYWRkUGFyc2VUb2tlbihbJ0gnLCAnSEgnXSwgSE9VUik7XG4gICAgYWRkUGFyc2VUb2tlbihbJ2snLCAna2snXSwgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBrSW5wdXQgPSB0b0ludChpbnB1dCk7XG4gICAgICAgIGFycmF5W0hPVVJdID0ga0lucHV0ID09PSAyNCA/IDAgOiBrSW5wdXQ7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbihbJ2EnLCAnQSddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgY29uZmlnLl9pc1BtID0gY29uZmlnLl9sb2NhbGUuaXNQTShpbnB1dCk7XG4gICAgICAgIGNvbmZpZy5fbWVyaWRpZW0gPSBpbnB1dDtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKFsnaCcsICdoaCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ2htbScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICB2YXIgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICAgICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XG4gICAgICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xuICAgIH0pO1xuICAgIGFkZFBhcnNlVG9rZW4oJ2htbXNzJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNCxcbiAgICAgICAgICAgIHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MxKSk7XG4gICAgICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xuICAgICAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbignSG1tJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIHZhciBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xuICAgICAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcbiAgICAgICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcbiAgICB9KTtcbiAgICBhZGRQYXJzZVRva2VuKCdIbW1zcycsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICB2YXIgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQsXG4gICAgICAgICAgICBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcbiAgICAgICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xuICAgICAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczEsIDIpKTtcbiAgICAgICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XG4gICAgfSk7XG5cbiAgICAvLyBMT0NBTEVTXG5cbiAgICBmdW5jdGlvbiBsb2NhbGVJc1BNKGlucHV0KSB7XG4gICAgICAgIC8vIElFOCBRdWlya3MgTW9kZSAmIElFNyBTdGFuZGFyZHMgTW9kZSBkbyBub3QgYWxsb3cgYWNjZXNzaW5nIHN0cmluZ3MgbGlrZSBhcnJheXNcbiAgICAgICAgLy8gVXNpbmcgY2hhckF0IHNob3VsZCBiZSBtb3JlIGNvbXBhdGlibGUuXG4gICAgICAgIHJldHVybiAoaW5wdXQgKyAnJykudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJztcbiAgICB9XG5cbiAgICB2YXIgZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UgPSAvW2FwXVxcLj9tP1xcLj8vaSxcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgaG91ciBzaG91bGQga2VlcCB0aGUgdGltZSwgYmVjYXVzZSB0aGUgdXNlciBleHBsaWNpdGx5XG4gICAgICAgIC8vIHNwZWNpZmllZCB3aGljaCBob3VyIHRoZXkgd2FudC4gU28gdHJ5aW5nIHRvIG1haW50YWluIHRoZSBzYW1lIGhvdXIgKGluXG4gICAgICAgIC8vIGEgbmV3IHRpbWV6b25lKSBtYWtlcyBzZW5zZS4gQWRkaW5nL3N1YnRyYWN0aW5nIGhvdXJzIGRvZXMgbm90IGZvbGxvd1xuICAgICAgICAvLyB0aGlzIHJ1bGUuXG4gICAgICAgIGdldFNldEhvdXIgPSBtYWtlR2V0U2V0KCdIb3VycycsIHRydWUpO1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlTWVyaWRpZW0oaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICAgICAgaWYgKGhvdXJzID4gMTEpIHtcbiAgICAgICAgICAgIHJldHVybiBpc0xvd2VyID8gJ3BtJyA6ICdQTSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXNMb3dlciA/ICdhbScgOiAnQU0nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGJhc2VDb25maWcgPSB7XG4gICAgICAgIGNhbGVuZGFyOiBkZWZhdWx0Q2FsZW5kYXIsXG4gICAgICAgIGxvbmdEYXRlRm9ybWF0OiBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQsXG4gICAgICAgIGludmFsaWREYXRlOiBkZWZhdWx0SW52YWxpZERhdGUsXG4gICAgICAgIG9yZGluYWw6IGRlZmF1bHRPcmRpbmFsLFxuICAgICAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSxcbiAgICAgICAgcmVsYXRpdmVUaW1lOiBkZWZhdWx0UmVsYXRpdmVUaW1lLFxuXG4gICAgICAgIG1vbnRoczogZGVmYXVsdExvY2FsZU1vbnRocyxcbiAgICAgICAgbW9udGhzU2hvcnQ6IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCxcblxuICAgICAgICB3ZWVrOiBkZWZhdWx0TG9jYWxlV2VlayxcblxuICAgICAgICB3ZWVrZGF5czogZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxuICAgICAgICB3ZWVrZGF5c01pbjogZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0OiBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCxcblxuICAgICAgICBtZXJpZGllbVBhcnNlOiBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZSxcbiAgICB9O1xuXG4gICAgLy8gaW50ZXJuYWwgc3RvcmFnZSBmb3IgbG9jYWxlIGNvbmZpZyBmaWxlc1xuICAgIHZhciBsb2NhbGVzID0ge30sXG4gICAgICAgIGxvY2FsZUZhbWlsaWVzID0ge30sXG4gICAgICAgIGdsb2JhbExvY2FsZTtcblxuICAgIGZ1bmN0aW9uIGNvbW1vblByZWZpeChhcnIxLCBhcnIyKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbWlubCA9IE1hdGgubWluKGFycjEubGVuZ3RoLCBhcnIyLmxlbmd0aCk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBtaW5sOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChhcnIxW2ldICE9PSBhcnIyW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbmw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XG4gICAgfVxuXG4gICAgLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XG4gICAgLy8gdHJ5IFsnZW4tYXUnLCAnZW4tZ2InXSBhcyAnZW4tYXUnLCAnZW4tZ2InLCAnZW4nLCBhcyBpbiBtb3ZlIHRocm91Z2ggdGhlIGxpc3QgdHJ5aW5nIGVhY2hcbiAgICAvLyBzdWJzdHJpbmcgZnJvbSBtb3N0IHNwZWNpZmljIHRvIGxlYXN0LCBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XG4gICAgZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzKSB7XG4gICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBuZXh0LFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgc3BsaXQ7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNwbGl0ID0gbm9ybWFsaXplTG9jYWxlKG5hbWVzW2ldKS5zcGxpdCgnLScpO1xuICAgICAgICAgICAgaiA9IHNwbGl0Lmxlbmd0aDtcbiAgICAgICAgICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcbiAgICAgICAgICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcbiAgICAgICAgICAgIHdoaWxlIChqID4gMCkge1xuICAgICAgICAgICAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbmV4dCAmJlxuICAgICAgICAgICAgICAgICAgICBuZXh0Lmxlbmd0aCA+PSBqICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vblByZWZpeChzcGxpdCwgbmV4dCkgPj0gaiAtIDFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgLy90aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNMb2NhbGVOYW1lU2FuZShuYW1lKSB7XG4gICAgICAgIC8vIFByZXZlbnQgbmFtZXMgdGhhdCBsb29rIGxpa2UgZmlsZXN5c3RlbSBwYXRocywgaS5lIGNvbnRhaW4gJy8nIG9yICdcXCdcbiAgICAgICAgcmV0dXJuIG5hbWUubWF0Y2goJ15bXi9cXFxcXFxcXF0qJCcpICE9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lKSB7XG4gICAgICAgIHZhciBvbGRMb2NhbGUgPSBudWxsLFxuICAgICAgICAgICAgYWxpYXNlZFJlcXVpcmU7XG4gICAgICAgIC8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHJlZ2lzdGVyIGFuZCBsb2FkIGFsbCB0aGUgbG9jYWxlcyBpbiBOb2RlXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIG1vZHVsZSAmJlxuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgJiZcbiAgICAgICAgICAgIGlzTG9jYWxlTmFtZVNhbmUobmFtZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG9sZExvY2FsZSA9IGdsb2JhbExvY2FsZS5fYWJicjtcbiAgICAgICAgICAgICAgICBhbGlhc2VkUmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICAgICAgICAgICAgYWxpYXNlZFJlcXVpcmUoJy4vbG9jYWxlLycgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUob2xkTG9jYWxlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBtYXJrIGFzIG5vdCBmb3VuZCB0byBhdm9pZCByZXBlYXRpbmcgZXhwZW5zaXZlIGZpbGUgcmVxdWlyZSBjYWxsIGNhdXNpbmcgaGlnaCBDUFVcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRyeWluZyB0byBmaW5kIGVuLVVTLCBlbl9VUywgZW4tdXMgZm9yIGV2ZXJ5IGZvcm1hdCBjYWxsXG4gICAgICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9IG51bGw7IC8vIG51bGwgbWVhbnMgbm90IGZvdW5kXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG4gICAgfVxuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgbG9jYWxlIGFuZCB0aGVuIHNldCB0aGUgZ2xvYmFsIGxvY2FsZS4gIElmXG4gICAgLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBnbG9iYWxcbiAgICAvLyBsb2NhbGUga2V5LlxuICAgIGZ1bmN0aW9uIGdldFNldEdsb2JhbExvY2FsZShrZXksIHZhbHVlcykge1xuICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIG1vbWVudC5kdXJhdGlvbi5fbG9jYWxlID0gbW9tZW50Ll9sb2NhbGUgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGdsb2JhbExvY2FsZSA9IGRhdGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vd2FybiB1c2VyIGlmIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGJ1dCB0aGUgbG9jYWxlIGNvdWxkIG5vdCBiZSBzZXRcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0xvY2FsZSAnICsga2V5ICsgJyBub3QgZm91bmQuIERpZCB5b3UgZm9yZ2V0IHRvIGxvYWQgaXQ/J1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnbG9iYWxMb2NhbGUuX2FiYnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmaW5lTG9jYWxlKG5hbWUsIGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlLFxuICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XG4gICAgICAgICAgICBjb25maWcuYWJiciA9IG5hbWU7XG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKFxuICAgICAgICAgICAgICAgICAgICAnZGVmaW5lTG9jYWxlT3ZlcnJpZGUnLFxuICAgICAgICAgICAgICAgICAgICAndXNlIG1vbWVudC51cGRhdGVMb2NhbGUobG9jYWxlTmFtZSwgY29uZmlnKSB0byBjaGFuZ2UgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnYW4gZXhpc3RpbmcgbG9jYWxlLiBtb21lbnQuZGVmaW5lTG9jYWxlKGxvY2FsZU5hbWUsICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbmZpZykgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgY3JlYXRpbmcgYSBuZXcgbG9jYWxlICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1NlZSBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2RlZmluZS1sb2NhbGUvIGZvciBtb3JlIGluZm8uJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tuYW1lXS5fY29uZmlnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25maWcucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0uX2NvbmZpZztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKGNvbmZpZy5wYXJlbnRMb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZS5fY29uZmlnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2FsZXNbbmFtZV0gPSBuZXcgTG9jYWxlKG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZykpO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBsb2NhbGVGYW1pbGllc1tuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmluZUxvY2FsZSh4Lm5hbWUsIHguY29uZmlnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBsb2NhbGUgQUZURVIgYWxsIGNoaWxkIGxvY2FsZXMgaGF2ZSBiZWVuXG4gICAgICAgICAgICAvLyBjcmVhdGVkLCBzbyB3ZSB3b24ndCBlbmQgdXAgd2l0aCB0aGUgY2hpbGQgbG9jYWxlIHNldC5cbiAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB1c2VmdWwgZm9yIHRlc3RpbmdcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbGUobmFtZSwgY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSxcbiAgICAgICAgICAgICAgICB0bXBMb2NhbGUsXG4gICAgICAgICAgICAgICAgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcblxuICAgICAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCAmJiBsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGNoaWxkIGxvY2FsZSBpbi1wbGFjZSB0byBhdm9pZCBtZW1vcnktbGVha3NcbiAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdLnNldChtZXJnZUNvbmZpZ3MobG9jYWxlc1tuYW1lXS5fY29uZmlnLCBjb25maWcpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTUVSR0VcbiAgICAgICAgICAgICAgICB0bXBMb2NhbGUgPSBsb2FkTG9jYWxlKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICh0bXBMb2NhbGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDb25maWcgPSB0bXBMb2NhbGUuX2NvbmZpZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uZmlnID0gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICBpZiAodG1wTG9jYWxlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlTG9jYWxlIGlzIGNhbGxlZCBmb3IgY3JlYXRpbmcgYSBuZXcgbG9jYWxlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBhYmJyIHNvIGl0IHdpbGwgaGF2ZSBhIG5hbWUgKGdldHRlcnMgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVmaW5lZCBvdGhlcndpc2UpLlxuICAgICAgICAgICAgICAgICAgICBjb25maWcuYWJiciA9IG5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvY2FsZSA9IG5ldyBMb2NhbGUoY29uZmlnKTtcbiAgICAgICAgICAgICAgICBsb2NhbGUucGFyZW50TG9jYWxlID0gbG9jYWxlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcbiAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHBhc3MgbnVsbCBmb3IgY29uZmlnIHRvIHVudXBkYXRlLCB1c2VmdWwgZm9yIHRlc3RzXG4gICAgICAgICAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gZ2V0U2V0R2xvYmFsTG9jYWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGxvY2FsZSBkYXRhXG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxlKGtleSkge1xuICAgICAgICB2YXIgbG9jYWxlO1xuXG4gICAgICAgIGlmIChrZXkgJiYga2V5Ll9sb2NhbGUgJiYga2V5Ll9sb2NhbGUuX2FiYnIpIHtcbiAgICAgICAgICAgIGtleSA9IGtleS5fbG9jYWxlLl9hYmJyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzQXJyYXkoa2V5KSkge1xuICAgICAgICAgICAgLy9zaG9ydC1jaXJjdWl0IGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgbG9jYWxlID0gbG9hZExvY2FsZShrZXkpO1xuICAgICAgICAgICAgaWYgKGxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaG9vc2VMb2NhbGUoa2V5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0TG9jYWxlcygpIHtcbiAgICAgICAgcmV0dXJuIGtleXMobG9jYWxlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdyhtKSB7XG4gICAgICAgIHZhciBvdmVyZmxvdyxcbiAgICAgICAgICAgIGEgPSBtLl9hO1xuXG4gICAgICAgIGlmIChhICYmIGdldFBhcnNpbmdGbGFncyhtKS5vdmVyZmxvdyA9PT0gLTIpIHtcbiAgICAgICAgICAgIG92ZXJmbG93ID1cbiAgICAgICAgICAgICAgICBhW01PTlRIXSA8IDAgfHwgYVtNT05USF0gPiAxMVxuICAgICAgICAgICAgICAgICAgICA/IE1PTlRIXG4gICAgICAgICAgICAgICAgICAgIDogYVtEQVRFXSA8IDEgfHwgYVtEQVRFXSA+IGRheXNJbk1vbnRoKGFbWUVBUl0sIGFbTU9OVEhdKVxuICAgICAgICAgICAgICAgICAgICA/IERBVEVcbiAgICAgICAgICAgICAgICAgICAgOiBhW0hPVVJdIDwgMCB8fFxuICAgICAgICAgICAgICAgICAgICAgIGFbSE9VUl0gPiAyNCB8fFxuICAgICAgICAgICAgICAgICAgICAgIChhW0hPVVJdID09PSAyNCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoYVtNSU5VVEVdICE9PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1NFQ09ORF0gIT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbTUlMTElTRUNPTkRdICE9PSAwKSlcbiAgICAgICAgICAgICAgICAgICAgPyBIT1VSXG4gICAgICAgICAgICAgICAgICAgIDogYVtNSU5VVEVdIDwgMCB8fCBhW01JTlVURV0gPiA1OVxuICAgICAgICAgICAgICAgICAgICA/IE1JTlVURVxuICAgICAgICAgICAgICAgICAgICA6IGFbU0VDT05EXSA8IDAgfHwgYVtTRUNPTkRdID4gNTlcbiAgICAgICAgICAgICAgICAgICAgPyBTRUNPTkRcbiAgICAgICAgICAgICAgICAgICAgOiBhW01JTExJU0VDT05EXSA8IDAgfHwgYVtNSUxMSVNFQ09ORF0gPiA5OTlcbiAgICAgICAgICAgICAgICAgICAgPyBNSUxMSVNFQ09ORFxuICAgICAgICAgICAgICAgICAgICA6IC0xO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd0RheU9mWWVhciAmJlxuICAgICAgICAgICAgICAgIChvdmVyZmxvdyA8IFlFQVIgfHwgb3ZlcmZsb3cgPiBEQVRFKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cgPSBEQVRFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGdldFBhcnNpbmdGbGFncyhtKS5fb3ZlcmZsb3dXZWVrcyAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdyA9IFdFRUs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKG0pLl9vdmVyZmxvd1dlZWtkYXkgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cgPSBXRUVLREFZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MobSkub3ZlcmZsb3cgPSBvdmVyZmxvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIC8vIGlzbyA4NjAxIHJlZ2V4XG4gICAgLy8gMDAwMC0wMC0wMCAwMDAwLVcwMCBvciAwMDAwLVcwMC0wICsgVCArIDAwIG9yIDAwOjAwIG9yIDAwOjAwOjAwIG9yIDAwOjAwOjAwLjAwMCArICswMDowMCBvciArMDAwMCBvciArMDApXG4gICAgdmFyIGV4dGVuZGVkSXNvUmVnZXggPVxuICAgICAgICAgICAgL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzpcXGRcXGQtXFxkXFxkfFdcXGRcXGQtXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoWystXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC8sXG4gICAgICAgIGJhc2ljSXNvUmVnZXggPVxuICAgICAgICAgICAgL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KSg/OlxcZFxcZFxcZFxcZHxXXFxkXFxkXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZHwpKSg/OihUfCApKFxcZFxcZCg/OlxcZFxcZCg/OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbKy1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLyxcbiAgICAgICAgdHpSZWdleCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/LyxcbiAgICAgICAgaXNvRGF0ZXMgPSBbXG4gICAgICAgICAgICBbJ1lZWVlZWS1NTS1ERCcsIC9bKy1dXFxkezZ9LVxcZFxcZC1cXGRcXGQvXSxcbiAgICAgICAgICAgIFsnWVlZWS1NTS1ERCcsIC9cXGR7NH0tXFxkXFxkLVxcZFxcZC9dLFxuICAgICAgICAgICAgWydHR0dHLVtXXVdXLUUnLCAvXFxkezR9LVdcXGRcXGQtXFxkL10sXG4gICAgICAgICAgICBbJ0dHR0ctW1ddV1cnLCAvXFxkezR9LVdcXGRcXGQvLCBmYWxzZV0sXG4gICAgICAgICAgICBbJ1lZWVktREREJywgL1xcZHs0fS1cXGR7M30vXSxcbiAgICAgICAgICAgIFsnWVlZWS1NTScsIC9cXGR7NH0tXFxkXFxkLywgZmFsc2VdLFxuICAgICAgICAgICAgWydZWVlZWVlNTUREJywgL1srLV1cXGR7MTB9L10sXG4gICAgICAgICAgICBbJ1lZWVlNTUREJywgL1xcZHs4fS9dLFxuICAgICAgICAgICAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vXSxcbiAgICAgICAgICAgIFsnR0dHR1tXXVdXJywgL1xcZHs0fVdcXGR7Mn0vLCBmYWxzZV0sXG4gICAgICAgICAgICBbJ1lZWVlEREQnLCAvXFxkezd9L10sXG4gICAgICAgICAgICBbJ1lZWVlNTScsIC9cXGR7Nn0vLCBmYWxzZV0sXG4gICAgICAgICAgICBbJ1lZWVknLCAvXFxkezR9LywgZmFsc2VdLFxuICAgICAgICBdLFxuICAgICAgICAvLyBpc28gdGltZSBmb3JtYXRzIGFuZCByZWdleGVzXG4gICAgICAgIGlzb1RpbWVzID0gW1xuICAgICAgICAgICAgWydISDptbTpzcy5TU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkXFwuXFxkKy9dLFxuICAgICAgICAgICAgWydISDptbTpzcyxTU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkLFxcZCsvXSxcbiAgICAgICAgICAgIFsnSEg6bW06c3MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQvXSxcbiAgICAgICAgICAgIFsnSEg6bW0nLCAvXFxkXFxkOlxcZFxcZC9dLFxuICAgICAgICAgICAgWydISG1tc3MuU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGRcXC5cXGQrL10sXG4gICAgICAgICAgICBbJ0hIbW1zcyxTU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZCxcXGQrL10sXG4gICAgICAgICAgICBbJ0hIbW1zcycsIC9cXGRcXGRcXGRcXGRcXGRcXGQvXSxcbiAgICAgICAgICAgIFsnSEhtbScsIC9cXGRcXGRcXGRcXGQvXSxcbiAgICAgICAgICAgIFsnSEgnLCAvXFxkXFxkL10sXG4gICAgICAgIF0sXG4gICAgICAgIGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoLT9cXGQrKS9pLFxuICAgICAgICAvLyBSRkMgMjgyMiByZWdleDogRm9yIGRldGFpbHMgc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyODIyI3NlY3Rpb24tMy4zXG4gICAgICAgIHJmYzI4MjIgPVxuICAgICAgICAgICAgL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSw/XFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfChbKy1dXFxkezR9KSkkLyxcbiAgICAgICAgb2JzT2Zmc2V0cyA9IHtcbiAgICAgICAgICAgIFVUOiAwLFxuICAgICAgICAgICAgR01UOiAwLFxuICAgICAgICAgICAgRURUOiAtNCAqIDYwLFxuICAgICAgICAgICAgRVNUOiAtNSAqIDYwLFxuICAgICAgICAgICAgQ0RUOiAtNSAqIDYwLFxuICAgICAgICAgICAgQ1NUOiAtNiAqIDYwLFxuICAgICAgICAgICAgTURUOiAtNiAqIDYwLFxuICAgICAgICAgICAgTVNUOiAtNyAqIDYwLFxuICAgICAgICAgICAgUERUOiAtNyAqIDYwLFxuICAgICAgICAgICAgUFNUOiAtOCAqIDYwLFxuICAgICAgICB9O1xuXG4gICAgLy8gZGF0ZSBmcm9tIGlzbyBmb3JtYXRcbiAgICBmdW5jdGlvbiBjb25maWdGcm9tSVNPKGNvbmZpZykge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICBzdHJpbmcgPSBjb25maWcuX2ksXG4gICAgICAgICAgICBtYXRjaCA9IGV4dGVuZGVkSXNvUmVnZXguZXhlYyhzdHJpbmcpIHx8IGJhc2ljSXNvUmVnZXguZXhlYyhzdHJpbmcpLFxuICAgICAgICAgICAgYWxsb3dUaW1lLFxuICAgICAgICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgICAgICAgIHRpbWVGb3JtYXQsXG4gICAgICAgICAgICB0ekZvcm1hdCxcbiAgICAgICAgICAgIGlzb0RhdGVzTGVuID0gaXNvRGF0ZXMubGVuZ3RoLFxuICAgICAgICAgICAgaXNvVGltZXNMZW4gPSBpc29UaW1lcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pc28gPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb0RhdGVzTGVuOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzb0RhdGVzW2ldWzFdLmV4ZWMobWF0Y2hbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQgPSBpc29EYXRlc1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dUaW1lID0gaXNvRGF0ZXNbaV1bMl0gIT09IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0ZUZvcm1hdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb1RpbWVzTGVuOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc29UaW1lc1tpXVsxXS5leGVjKG1hdGNoWzNdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hbMl0gc2hvdWxkIGJlICdUJyBvciBzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdCA9IChtYXRjaFsyXSB8fCAnICcpICsgaXNvVGltZXNbaV1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGltZUZvcm1hdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhbGxvd1RpbWUgJiYgdGltZUZvcm1hdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoWzRdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR6UmVnZXguZXhlYyhtYXRjaFs0XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHpGb3JtYXQgPSAnWic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25maWcuX2YgPSBkYXRlRm9ybWF0ICsgKHRpbWVGb3JtYXQgfHwgJycpICsgKHR6Rm9ybWF0IHx8ICcnKTtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyhcbiAgICAgICAgeWVhclN0cixcbiAgICAgICAgbW9udGhTdHIsXG4gICAgICAgIGRheVN0cixcbiAgICAgICAgaG91clN0cixcbiAgICAgICAgbWludXRlU3RyLFxuICAgICAgICBzZWNvbmRTdHJcbiAgICApIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtcbiAgICAgICAgICAgIHVudHJ1bmNhdGVZZWFyKHllYXJTdHIpLFxuICAgICAgICAgICAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpLFxuICAgICAgICAgICAgcGFyc2VJbnQoZGF5U3RyLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChob3VyU3RyLCAxMCksXG4gICAgICAgICAgICBwYXJzZUludChtaW51dGVTdHIsIDEwKSxcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAoc2Vjb25kU3RyKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZUludChzZWNvbmRTdHIsIDEwKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVudHJ1bmNhdGVZZWFyKHllYXJTdHIpIHtcbiAgICAgICAgdmFyIHllYXIgPSBwYXJzZUludCh5ZWFyU3RyLCAxMCk7XG4gICAgICAgIGlmICh5ZWFyIDw9IDQ5KSB7XG4gICAgICAgICAgICByZXR1cm4gMjAwMCArIHllYXI7XG4gICAgICAgIH0gZWxzZSBpZiAoeWVhciA8PSA5OTkpIHtcbiAgICAgICAgICAgIHJldHVybiAxOTAwICsgeWVhcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geWVhcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzKSB7XG4gICAgICAgIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gICAgICAgIHJldHVybiBzXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwoW14oKV0qXFwpfFtcXG5cXHRdL2csICcgJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXFxzXFxzKykvZywgJyAnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXHNcXHMqLywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxzXFxzKiQvLCAnJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tXZWVrZGF5KHdlZWtkYXlTdHIsIHBhcnNlZElucHV0LCBjb25maWcpIHtcbiAgICAgICAgaWYgKHdlZWtkYXlTdHIpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IFJlcGxhY2UgdGhlIHZhbmlsbGEgSlMgRGF0ZSBvYmplY3Qgd2l0aCBhbiBpbmRlcGVuZGVudCBkYXktb2Ytd2VlayBjaGVjay5cbiAgICAgICAgICAgIHZhciB3ZWVrZGF5UHJvdmlkZWQgPSBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpLFxuICAgICAgICAgICAgICAgIHdlZWtkYXlBY3R1YWwgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkSW5wdXRbMF0sXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZElucHV0WzFdLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRJbnB1dFsyXVxuICAgICAgICAgICAgICAgICkuZ2V0RGF5KCk7XG4gICAgICAgICAgICBpZiAod2Vla2RheVByb3ZpZGVkICE9PSB3ZWVrZGF5QWN0dWFsKSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KG9ic09mZnNldCwgbWlsaXRhcnlPZmZzZXQsIG51bU9mZnNldCkge1xuICAgICAgICBpZiAob2JzT2Zmc2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xuICAgICAgICB9IGVsc2UgaWYgKG1pbGl0YXJ5T2Zmc2V0KSB7XG4gICAgICAgICAgICAvLyB0aGUgb25seSBhbGxvd2VkIG1pbGl0YXJ5IHR6IGlzIFpcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGhtID0gcGFyc2VJbnQobnVtT2Zmc2V0LCAxMCksXG4gICAgICAgICAgICAgICAgbSA9IGhtICUgMTAwLFxuICAgICAgICAgICAgICAgIGggPSAoaG0gLSBtKSAvIDEwMDtcbiAgICAgICAgICAgIHJldHVybiBoICogNjAgKyBtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGF0ZSBhbmQgdGltZSBmcm9tIHJlZiAyODIyIGZvcm1hdFxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZykge1xuICAgICAgICB2YXIgbWF0Y2ggPSByZmMyODIyLmV4ZWMocHJlcHJvY2Vzc1JGQzI4MjIoY29uZmlnLl9pKSksXG4gICAgICAgICAgICBwYXJzZWRBcnJheTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBwYXJzZWRBcnJheSA9IGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MoXG4gICAgICAgICAgICAgICAgbWF0Y2hbNF0sXG4gICAgICAgICAgICAgICAgbWF0Y2hbM10sXG4gICAgICAgICAgICAgICAgbWF0Y2hbMl0sXG4gICAgICAgICAgICAgICAgbWF0Y2hbNV0sXG4gICAgICAgICAgICAgICAgbWF0Y2hbNl0sXG4gICAgICAgICAgICAgICAgbWF0Y2hbN11cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIWNoZWNrV2Vla2RheShtYXRjaFsxXSwgcGFyc2VkQXJyYXksIGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbmZpZy5fYSA9IHBhcnNlZEFycmF5O1xuICAgICAgICAgICAgY29uZmlnLl90em0gPSBjYWxjdWxhdGVPZmZzZXQobWF0Y2hbOF0sIG1hdGNoWzldLCBtYXRjaFsxMF0pO1xuXG4gICAgICAgICAgICBjb25maWcuX2QgPSBjcmVhdGVVVENEYXRlLmFwcGx5KG51bGwsIGNvbmZpZy5fYSk7XG4gICAgICAgICAgICBjb25maWcuX2Quc2V0VVRDTWludXRlcyhjb25maWcuX2QuZ2V0VVRDTWludXRlcygpIC0gY29uZmlnLl90em0pO1xuXG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5yZmMyODIyID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGF0ZSBmcm9tIDEpIEFTUC5ORVQsIDIpIElTTywgMykgUkZDIDI4MjIgZm9ybWF0cywgb3IgNCkgb3B0aW9uYWwgZmFsbGJhY2sgaWYgcGFyc2luZyBpc24ndCBzdHJpY3RcbiAgICBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nKGNvbmZpZykge1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IGFzcE5ldEpzb25SZWdleC5leGVjKGNvbmZpZy5faSk7XG4gICAgICAgIGlmIChtYXRjaGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgrbWF0Y2hlZFsxXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdGcm9tSVNPKGNvbmZpZyk7XG4gICAgICAgIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcbiAgICAgICAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLl9zdHJpY3QpIHtcbiAgICAgICAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRmluYWwgYXR0ZW1wdCwgdXNlIElucHV0IEZhbGxiYWNrXG4gICAgICAgICAgICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2sgPSBkZXByZWNhdGUoXG4gICAgICAgICd2YWx1ZSBwcm92aWRlZCBpcyBub3QgaW4gYSByZWNvZ25pemVkIFJGQzI4MjIgb3IgSVNPIGZvcm1hdC4gbW9tZW50IGNvbnN0cnVjdGlvbiBmYWxscyBiYWNrIHRvIGpzIERhdGUoKSwgJyArXG4gICAgICAgICAgICAnd2hpY2ggaXMgbm90IHJlbGlhYmxlIGFjcm9zcyBhbGwgYnJvd3NlcnMgYW5kIHZlcnNpb25zLiBOb24gUkZDMjgyMi9JU08gZGF0ZSBmb3JtYXRzIGFyZSAnICtcbiAgICAgICAgICAgICdkaXNjb3VyYWdlZC4gUGxlYXNlIHJlZmVyIHRvIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvanMtZGF0ZS8gZm9yIG1vcmUgaW5mby4nLFxuICAgICAgICBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShjb25maWcuX2kgKyAoY29uZmlnLl91c2VVVEMgPyAnIFVUQycgOiAnJykpO1xuICAgICAgICB9XG4gICAgKTtcblxuICAgIC8vIFBpY2sgdGhlIGZpcnN0IGRlZmluZWQgb2YgdHdvIG9yIHRocmVlIGFyZ3VtZW50cy5cbiAgICBmdW5jdGlvbiBkZWZhdWx0cyhhLCBiLCBjKSB7XG4gICAgICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKSB7XG4gICAgICAgIC8vIGhvb2tzIGlzIGFjdHVhbGx5IHRoZSBleHBvcnRlZCBtb21lbnQgb2JqZWN0XG4gICAgICAgIHZhciBub3dWYWx1ZSA9IG5ldyBEYXRlKGhvb2tzLm5vdygpKTtcbiAgICAgICAgaWYgKGNvbmZpZy5fdXNlVVRDKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5vd1ZhbHVlLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgbm93VmFsdWUuZ2V0VVRDTW9udGgoKSxcbiAgICAgICAgICAgICAgICBub3dWYWx1ZS5nZXRVVENEYXRlKCksXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbbm93VmFsdWUuZ2V0RnVsbFllYXIoKSwgbm93VmFsdWUuZ2V0TW9udGgoKSwgbm93VmFsdWUuZ2V0RGF0ZSgpXTtcbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0IGFuIGFycmF5IHRvIGEgZGF0ZS5cbiAgICAvLyB0aGUgYXJyYXkgc2hvdWxkIG1pcnJvciB0aGUgcGFyYW1ldGVycyBiZWxvd1xuICAgIC8vIG5vdGU6IGFsbCB2YWx1ZXMgcGFzdCB0aGUgeWVhciBhcmUgb3B0aW9uYWwgYW5kIHdpbGwgZGVmYXVsdCB0byB0aGUgbG93ZXN0IHBvc3NpYmxlIHZhbHVlLlxuICAgIC8vIFt5ZWFyLCBtb250aCwgZGF5ICwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXVxuICAgIGZ1bmN0aW9uIGNvbmZpZ0Zyb21BcnJheShjb25maWcpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgaW5wdXQgPSBbXSxcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLFxuICAgICAgICAgICAgZXhwZWN0ZWRXZWVrZGF5LFxuICAgICAgICAgICAgeWVhclRvVXNlO1xuXG4gICAgICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnREYXRlID0gY3VycmVudERhdGVBcnJheShjb25maWcpO1xuXG4gICAgICAgIC8vY29tcHV0ZSBkYXkgb2YgdGhlIHllYXIgZnJvbSB3ZWVrcyBhbmQgd2Vla2RheXNcbiAgICAgICAgaWYgKGNvbmZpZy5fdyAmJiBjb25maWcuX2FbREFURV0gPT0gbnVsbCAmJiBjb25maWcuX2FbTU9OVEhdID09IG51bGwpIHtcbiAgICAgICAgICAgIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB0aGUgZGF5IG9mIHRoZSB5ZWFyIGlzIHNldCwgZmlndXJlIG91dCB3aGF0IGl0IGlzXG4gICAgICAgIGlmIChjb25maWcuX2RheU9mWWVhciAhPSBudWxsKSB7XG4gICAgICAgICAgICB5ZWFyVG9Vc2UgPSBkZWZhdWx0cyhjb25maWcuX2FbWUVBUl0sIGN1cnJlbnREYXRlW1lFQVJdKTtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyVG9Vc2UpIHx8XG4gICAgICAgICAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPT09IDBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd0RheU9mWWVhciA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRhdGUgPSBjcmVhdGVVVENEYXRlKHllYXJUb1VzZSwgMCwgY29uZmlnLl9kYXlPZlllYXIpO1xuICAgICAgICAgICAgY29uZmlnLl9hW01PTlRIXSA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtEQVRFXSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IGRhdGUuXG4gICAgICAgIC8vICogaWYgbm8geWVhciwgbW9udGgsIGRheSBvZiBtb250aCBhcmUgZ2l2ZW4sIGRlZmF1bHQgdG8gdG9kYXlcbiAgICAgICAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcbiAgICAgICAgLy8gKiBpZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBvbmx5IHllYXJcbiAgICAgICAgLy8gKiBpZiB5ZWFyIGlzIGdpdmVuLCBkb24ndCBkZWZhdWx0IGFueXRoaW5nXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gY3VycmVudERhdGVbaV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcbiAgICAgICAgZm9yICg7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID1cbiAgICAgICAgICAgICAgICBjb25maWcuX2FbaV0gPT0gbnVsbCA/IChpID09PSAyID8gMSA6IDApIDogY29uZmlnLl9hW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIDI0OjAwOjAwLjAwMFxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPT09IDI0ICYmXG4gICAgICAgICAgICBjb25maWcuX2FbTUlOVVRFXSA9PT0gMCAmJlxuICAgICAgICAgICAgY29uZmlnLl9hW1NFQ09ORF0gPT09IDAgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtNSUxMSVNFQ09ORF0gPT09IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25maWcuX25leHREYXkgPSB0cnVlO1xuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZy5fZCA9IChjb25maWcuX3VzZVVUQyA/IGNyZWF0ZVVUQ0RhdGUgOiBjcmVhdGVEYXRlKS5hcHBseShcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBpbnB1dFxuICAgICAgICApO1xuICAgICAgICBleHBlY3RlZFdlZWtkYXkgPSBjb25maWcuX3VzZVVUQ1xuICAgICAgICAgICAgPyBjb25maWcuX2QuZ2V0VVRDRGF5KClcbiAgICAgICAgICAgIDogY29uZmlnLl9kLmdldERheSgpO1xuXG4gICAgICAgIC8vIEFwcGx5IHRpbWV6b25lIG9mZnNldCBmcm9tIGlucHV0LiBUaGUgYWN0dWFsIHV0Y09mZnNldCBjYW4gYmUgY2hhbmdlZFxuICAgICAgICAvLyB3aXRoIHBhcnNlWm9uZS5cbiAgICAgICAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLl9uZXh0RGF5KSB7XG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPSAyNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZvciBtaXNtYXRjaGluZyBkYXkgb2Ygd2Vla1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb25maWcuX3cgJiZcbiAgICAgICAgICAgIHR5cGVvZiBjb25maWcuX3cuZCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fdy5kICE9PSBleHBlY3RlZFdlZWtkYXlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZykge1xuICAgICAgICB2YXIgdywgd2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95LCB0ZW1wLCB3ZWVrZGF5T3ZlcmZsb3csIGN1cldlZWs7XG5cbiAgICAgICAgdyA9IGNvbmZpZy5fdztcbiAgICAgICAgaWYgKHcuR0cgIT0gbnVsbCB8fCB3LlcgIT0gbnVsbCB8fCB3LkUgIT0gbnVsbCkge1xuICAgICAgICAgICAgZG93ID0gMTtcbiAgICAgICAgICAgIGRveSA9IDQ7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gdGFrZSB0aGUgY3VycmVudCBpc29XZWVrWWVhciwgYnV0IHRoYXQgZGVwZW5kcyBvblxuICAgICAgICAgICAgLy8gaG93IHdlIGludGVycHJldCBub3cgKGxvY2FsLCB1dGMsIGZpeGVkIG9mZnNldCkuIFNvIGNyZWF0ZVxuICAgICAgICAgICAgLy8gYSBub3cgdmVyc2lvbiBvZiBjdXJyZW50IGNvbmZpZyAodGFrZSBsb2NhbC91dGMvb2Zmc2V0IGZsYWdzLCBhbmRcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBub3cpLlxuICAgICAgICAgICAgd2Vla1llYXIgPSBkZWZhdWx0cyhcbiAgICAgICAgICAgICAgICB3LkdHLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5fYVtZRUFSXSxcbiAgICAgICAgICAgICAgICB3ZWVrT2ZZZWFyKGNyZWF0ZUxvY2FsKCksIDEsIDQpLnllYXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB3ZWVrID0gZGVmYXVsdHMody5XLCAxKTtcbiAgICAgICAgICAgIHdlZWtkYXkgPSBkZWZhdWx0cyh3LkUsIDEpO1xuICAgICAgICAgICAgaWYgKHdlZWtkYXkgPCAxIHx8IHdlZWtkYXkgPiA3KSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvdyA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRvdztcbiAgICAgICAgICAgIGRveSA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRveTtcblxuICAgICAgICAgICAgY3VyV2VlayA9IHdlZWtPZlllYXIoY3JlYXRlTG9jYWwoKSwgZG93LCBkb3kpO1xuXG4gICAgICAgICAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuZ2csIGNvbmZpZy5fYVtZRUFSXSwgY3VyV2Vlay55ZWFyKTtcblxuICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IHdlZWsuXG4gICAgICAgICAgICB3ZWVrID0gZGVmYXVsdHMody53LCBjdXJXZWVrLndlZWspO1xuXG4gICAgICAgICAgICBpZiAody5kICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZWVrZGF5IC0tIGxvdyBkYXkgbnVtYmVycyBhcmUgY29uc2lkZXJlZCBuZXh0IHdlZWtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gdy5kO1xuICAgICAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgMCB8fCB3ZWVrZGF5ID4gNikge1xuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAody5lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBsb2NhbCB3ZWVrZGF5IC0tIGNvdW50aW5nIHN0YXJ0cyBmcm9tIGJlZ2lubmluZyBvZiB3ZWVrXG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IHcuZSArIGRvdztcbiAgICAgICAgICAgICAgICBpZiAody5lIDwgMCB8fCB3LmUgPiA2KSB7XG4gICAgICAgICAgICAgICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHRvIGJlZ2lubmluZyBvZiB3ZWVrXG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IGRvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAod2VlayA8IDEgfHwgd2VlayA+IHdlZWtzSW5ZZWFyKHdlZWtZZWFyLCBkb3csIGRveSkpIHtcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh3ZWVrZGF5T3ZlcmZsb3cgIT0gbnVsbCkge1xuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla2RheSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XG4gICAgICAgICAgICBjb25maWcuX2FbWUVBUl0gPSB0ZW1wLnllYXI7XG4gICAgICAgICAgICBjb25maWcuX2RheU9mWWVhciA9IHRlbXAuZGF5T2ZZZWFyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIElTTyBzdGFuZGFyZFxuICAgIGhvb2tzLklTT184NjAxID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAvLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgUkZDIDI4MjIgZm9ybVxuICAgIGhvb2tzLlJGQ18yODIyID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAvLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpIHtcbiAgICAgICAgLy8gVE9ETzogTW92ZSB0aGlzIHRvIGFub3RoZXIgcGFydCBvZiB0aGUgY3JlYXRpb24gZmxvdyB0byBwcmV2ZW50IGNpcmN1bGFyIGRlcHNcbiAgICAgICAgaWYgKGNvbmZpZy5fZiA9PT0gaG9va3MuSVNPXzg2MDEpIHtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLl9mID09PSBob29rcy5SRkNfMjgyMikge1xuICAgICAgICAgICAgY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25maWcuX2EgPSBbXTtcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSB0cnVlO1xuXG4gICAgICAgIC8vIFRoaXMgYXJyYXkgaXMgdXNlZCB0byBtYWtlIGEgRGF0ZSwgZWl0aGVyIHdpdGggYG5ldyBEYXRlYCBvciBgRGF0ZS5VVENgXG4gICAgICAgIHZhciBzdHJpbmcgPSAnJyArIGNvbmZpZy5faSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBwYXJzZWRJbnB1dCxcbiAgICAgICAgICAgIHRva2VucyxcbiAgICAgICAgICAgIHRva2VuLFxuICAgICAgICAgICAgc2tpcHBlZCxcbiAgICAgICAgICAgIHN0cmluZ0xlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoID0gMCxcbiAgICAgICAgICAgIGVyYSxcbiAgICAgICAgICAgIHRva2VuTGVuO1xuXG4gICAgICAgIHRva2VucyA9XG4gICAgICAgICAgICBleHBhbmRGb3JtYXQoY29uZmlnLl9mLCBjb25maWcuX2xvY2FsZSkubWF0Y2goZm9ybWF0dGluZ1Rva2VucykgfHwgW107XG4gICAgICAgIHRva2VuTGVuID0gdG9rZW5zLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRva2VuTGVuOyBpKyspIHtcbiAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgcGFyc2VkSW5wdXQgPSAoc3RyaW5nLm1hdGNoKGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnKSkgfHxcbiAgICAgICAgICAgICAgICBbXSlbMF07XG4gICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBza2lwcGVkID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkpO1xuICAgICAgICAgICAgICAgIGlmIChza2lwcGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkSW5wdXQucHVzaChza2lwcGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkgKyBwYXJzZWRJbnB1dC5sZW5ndGhcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggKz0gcGFyc2VkSW5wdXQubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZG9uJ3QgcGFyc2UgaWYgaXQncyBub3QgYSBrbm93biB0b2tlblxuICAgICAgICAgICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIHBhcnNlZElucHV0LCBjb25maWcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25maWcuX3N0cmljdCAmJiAhcGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgcmVtYWluaW5nIHVucGFyc2VkIGlucHV0IGxlbmd0aCB0byB0aGUgc3RyaW5nXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmNoYXJzTGVmdE92ZXIgPVxuICAgICAgICAgICAgc3RyaW5nTGVuZ3RoIC0gdG90YWxQYXJzZWRJbnB1dExlbmd0aDtcbiAgICAgICAgaWYgKHN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKHN0cmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbGVhciBfMTJoIGZsYWcgaWYgaG91ciBpcyA8PSAxMlxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBjb25maWcuX2FbSE9VUl0gPD0gMTIgJiZcbiAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPT09IHRydWUgJiZcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucGFyc2VkRGF0ZVBhcnRzID0gY29uZmlnLl9hLnNsaWNlKDApO1xuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5tZXJpZGllbSA9IGNvbmZpZy5fbWVyaWRpZW07XG4gICAgICAgIC8vIGhhbmRsZSBtZXJpZGllbVxuICAgICAgICBjb25maWcuX2FbSE9VUl0gPSBtZXJpZGllbUZpeFdyYXAoXG4gICAgICAgICAgICBjb25maWcuX2xvY2FsZSxcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSxcbiAgICAgICAgICAgIGNvbmZpZy5fbWVyaWRpZW1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBoYW5kbGUgZXJhXG4gICAgICAgIGVyYSA9IGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVyYTtcbiAgICAgICAgaWYgKGVyYSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9hW1lFQVJdID0gY29uZmlnLl9sb2NhbGUuZXJhc0NvbnZlcnRZZWFyKGVyYSwgY29uZmlnLl9hW1lFQVJdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgICAgICBjaGVja092ZXJmbG93KGNvbmZpZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVyaWRpZW1GaXhXcmFwKGxvY2FsZSwgaG91ciwgbWVyaWRpZW0pIHtcbiAgICAgICAgdmFyIGlzUG07XG5cbiAgICAgICAgaWYgKG1lcmlkaWVtID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG9cbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUubWVyaWRpZW1Ib3VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbGUubWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhbGUuaXNQTSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFja1xuICAgICAgICAgICAgaXNQbSA9IGxvY2FsZS5pc1BNKG1lcmlkaWVtKTtcbiAgICAgICAgICAgIGlmIChpc1BtICYmIGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlzUG0gJiYgaG91ciA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICBob3VyID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcyBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuXG4gICAgICAgICAgICByZXR1cm4gaG91cjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGFycmF5IG9mIGZvcm1hdCBzdHJpbmdzXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZykge1xuICAgICAgICB2YXIgdGVtcENvbmZpZyxcbiAgICAgICAgICAgIGJlc3RNb21lbnQsXG4gICAgICAgICAgICBzY29yZVRvQmVhdCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBjdXJyZW50U2NvcmUsXG4gICAgICAgICAgICB2YWxpZEZvcm1hdEZvdW5kLFxuICAgICAgICAgICAgYmVzdEZvcm1hdElzVmFsaWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ2ZMZW4gPSBjb25maWcuX2YubGVuZ3RoO1xuXG4gICAgICAgIGlmIChjb25maWdmTGVuID09PSAwKSB7XG4gICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29uZmlnZkxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgPSAwO1xuICAgICAgICAgICAgdmFsaWRGb3JtYXRGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGVtcENvbmZpZyA9IGNvcHlDb25maWcoe30sIGNvbmZpZyk7XG4gICAgICAgICAgICBpZiAoY29uZmlnLl91c2VVVEMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRlbXBDb25maWcuX3VzZVVUQyA9IGNvbmZpZy5fdXNlVVRDO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGVtcENvbmZpZy5fZiA9IGNvbmZpZy5fZltpXTtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQodGVtcENvbmZpZyk7XG5cbiAgICAgICAgICAgIGlmIChpc1ZhbGlkKHRlbXBDb25maWcpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRGb3JtYXRGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGFueSBpbnB1dCB0aGF0IHdhcyBub3QgcGFyc2VkIGFkZCBhIHBlbmFsdHkgZm9yIHRoYXQgZm9ybWF0XG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLmNoYXJzTGVmdE92ZXI7XG5cbiAgICAgICAgICAgIC8vb3IgdG9rZW5zXG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnVudXNlZFRva2Vucy5sZW5ndGggKiAxMDtcblxuICAgICAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgICAgICAgICBpZiAoIWJlc3RGb3JtYXRJc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBzY29yZVRvQmVhdCA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0IHx8XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkRm9ybWF0Rm91bmRcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVUb0JlYXQgPSBjdXJyZW50U2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRGb3JtYXRGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVzdEZvcm1hdElzVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNjb3JlIDwgc2NvcmVUb0JlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVUb0JlYXQgPSBjdXJyZW50U2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV4dGVuZChjb25maWcsIGJlc3RNb21lbnQgfHwgdGVtcENvbmZpZyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlnRnJvbU9iamVjdChjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZy5fZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGkgPSBub3JtYWxpemVPYmplY3RVbml0cyhjb25maWcuX2kpLFxuICAgICAgICAgICAgZGF5T3JEYXRlID0gaS5kYXkgPT09IHVuZGVmaW5lZCA/IGkuZGF0ZSA6IGkuZGF5O1xuICAgICAgICBjb25maWcuX2EgPSBtYXAoXG4gICAgICAgICAgICBbaS55ZWFyLCBpLm1vbnRoLCBkYXlPckRhdGUsIGkuaG91ciwgaS5taW51dGUsIGkuc2Vjb25kLCBpLm1pbGxpc2Vjb25kXSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqICYmIHBhcnNlSW50KG9iaiwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZyb21Db25maWcoY29uZmlnKSB7XG4gICAgICAgIHZhciByZXMgPSBuZXcgTW9tZW50KGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKSk7XG4gICAgICAgIGlmIChyZXMuX25leHREYXkpIHtcbiAgICAgICAgICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxuICAgICAgICAgICAgcmVzLmFkZCgxLCAnZCcpO1xuICAgICAgICAgICAgcmVzLl9uZXh0RGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlQ29uZmlnKGNvbmZpZykge1xuICAgICAgICB2YXIgaW5wdXQgPSBjb25maWcuX2ksXG4gICAgICAgICAgICBmb3JtYXQgPSBjb25maWcuX2Y7XG5cbiAgICAgICAgY29uZmlnLl9sb2NhbGUgPSBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoY29uZmlnLl9sKTtcblxuICAgICAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgKGZvcm1hdCA9PT0gdW5kZWZpbmVkICYmIGlucHV0ID09PSAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKHsgbnVsbElucHV0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbmZpZy5faSA9IGlucHV0ID0gY29uZmlnLl9sb2NhbGUucHJlcGFyc2UoaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTW9tZW50KGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNb21lbnQoY2hlY2tPdmVyZmxvdyhpbnB1dCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IGlucHV0O1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkoZm9ybWF0KSkge1xuICAgICAgICAgICAgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0KSB7XG4gICAgICAgICAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNWYWxpZChjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcuX2QgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWdGcm9tSW5wdXQoY29uZmlnKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faTtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoaG9va3Mubm93KCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0LnZhbHVlT2YoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25maWcuX2EgPSBtYXAoaW5wdXQuc2xpY2UoMCksIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQob2JqLCAxMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnRnJvbU9iamVjdChjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xuICAgICAgICAgICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZSwgc3RyaWN0LCBpc1VUQykge1xuICAgICAgICB2YXIgYyA9IHt9O1xuXG4gICAgICAgIGlmIChmb3JtYXQgPT09IHRydWUgfHwgZm9ybWF0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgc3RyaWN0ID0gZm9ybWF0O1xuICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gdHJ1ZSB8fCBsb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdHJpY3QgPSBsb2NhbGU7XG4gICAgICAgICAgICBsb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoaXNPYmplY3QoaW5wdXQpICYmIGlzT2JqZWN0RW1wdHkoaW5wdXQpKSB8fFxuICAgICAgICAgICAgKGlzQXJyYXkoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpbnB1dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE0MjNcbiAgICAgICAgYy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgYy5fdXNlVVRDID0gYy5faXNVVEMgPSBpc1VUQztcbiAgICAgICAgYy5fbCA9IGxvY2FsZTtcbiAgICAgICAgYy5faSA9IGlucHV0O1xuICAgICAgICBjLl9mID0gZm9ybWF0O1xuICAgICAgICBjLl9zdHJpY3QgPSBzdHJpY3Q7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUZyb21Db25maWcoYyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9jYWwoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlLCBzdHJpY3QsIGZhbHNlKTtcbiAgICB9XG5cbiAgICB2YXIgcHJvdG90eXBlTWluID0gZGVwcmVjYXRlKFxuICAgICAgICAgICAgJ21vbWVudCgpLm1pbiBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1heCBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL21pbi1tYXgvJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3RoZXIgPSBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyIDwgdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKSxcbiAgICAgICAgcHJvdG90eXBlTWF4ID0gZGVwcmVjYXRlKFxuICAgICAgICAgICAgJ21vbWVudCgpLm1heCBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1pbiBpbnN0ZWFkLiBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL21pbi1tYXgvJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3RoZXIgPSBjcmVhdGVMb2NhbC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSAmJiBvdGhlci5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyID4gdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlSW52YWxpZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIC8vIFBpY2sgYSBtb21lbnQgbSBmcm9tIG1vbWVudHMgc28gdGhhdCBtW2ZuXShvdGhlcikgaXMgdHJ1ZSBmb3IgYWxsXG4gICAgLy8gb3RoZXIuIFRoaXMgcmVsaWVzIG9uIHRoZSBmdW5jdGlvbiBmbiB0byBiZSB0cmFuc2l0aXZlLlxuICAgIC8vXG4gICAgLy8gbW9tZW50cyBzaG91bGQgZWl0aGVyIGJlIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzIG9yIGFuIGFycmF5LCB3aG9zZVxuICAgIC8vIGZpcnN0IGVsZW1lbnQgaXMgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMuXG4gICAgZnVuY3Rpb24gcGlja0J5KGZuLCBtb21lbnRzKSB7XG4gICAgICAgIHZhciByZXMsIGk7XG4gICAgICAgIGlmIChtb21lbnRzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KG1vbWVudHNbMF0pKSB7XG4gICAgICAgICAgICBtb21lbnRzID0gbW9tZW50c1swXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1vbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXMgPSBtb21lbnRzWzBdO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbW9tZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKCFtb21lbnRzW2ldLmlzVmFsaWQoKSB8fCBtb21lbnRzW2ldW2ZuXShyZXMpKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gbW9tZW50c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIC8vIFRPRE86IFVzZSBbXS5zb3J0IGluc3RlYWQ/XG4gICAgZnVuY3Rpb24gbWluKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgICAgICByZXR1cm4gcGlja0J5KCdpc0JlZm9yZScsIGFyZ3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1heCgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG5cbiAgICAgICAgcmV0dXJuIHBpY2tCeSgnaXNBZnRlcicsIGFyZ3MpO1xuICAgIH1cblxuICAgIHZhciBub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdyA/IERhdGUubm93KCkgOiArbmV3IERhdGUoKTtcbiAgICB9O1xuXG4gICAgdmFyIG9yZGVyaW5nID0gW1xuICAgICAgICAneWVhcicsXG4gICAgICAgICdxdWFydGVyJyxcbiAgICAgICAgJ21vbnRoJyxcbiAgICAgICAgJ3dlZWsnLFxuICAgICAgICAnZGF5JyxcbiAgICAgICAgJ2hvdXInLFxuICAgICAgICAnbWludXRlJyxcbiAgICAgICAgJ3NlY29uZCcsXG4gICAgICAgICdtaWxsaXNlY29uZCcsXG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIGlzRHVyYXRpb25WYWxpZChtKSB7XG4gICAgICAgIHZhciBrZXksXG4gICAgICAgICAgICB1bml0SGFzRGVjaW1hbCA9IGZhbHNlLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIG9yZGVyTGVuID0gb3JkZXJpbmcubGVuZ3RoO1xuICAgICAgICBmb3IgKGtleSBpbiBtKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaGFzT3duUHJvcChtLCBrZXkpICYmXG4gICAgICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZi5jYWxsKG9yZGVyaW5nLCBrZXkpICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAobVtrZXldID09IG51bGwgfHwgIWlzTmFOKG1ba2V5XSkpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG9yZGVyTGVuOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChtW29yZGVyaW5nW2ldXSkge1xuICAgICAgICAgICAgICAgIGlmICh1bml0SGFzRGVjaW1hbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG9ubHkgYWxsb3cgbm9uLWludGVnZXJzIGZvciBzbWFsbGVzdCB1bml0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KG1bb3JkZXJpbmdbaV1dKSAhPT0gdG9JbnQobVtvcmRlcmluZ1tpXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1ZhbGlkJDEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQkMSgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKE5hTik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJbnB1dCA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGR1cmF0aW9uKSxcbiAgICAgICAgICAgIHllYXJzID0gbm9ybWFsaXplZElucHV0LnllYXIgfHwgMCxcbiAgICAgICAgICAgIHF1YXJ0ZXJzID0gbm9ybWFsaXplZElucHV0LnF1YXJ0ZXIgfHwgMCxcbiAgICAgICAgICAgIG1vbnRocyA9IG5vcm1hbGl6ZWRJbnB1dC5tb250aCB8fCAwLFxuICAgICAgICAgICAgd2Vla3MgPSBub3JtYWxpemVkSW5wdXQud2VlayB8fCBub3JtYWxpemVkSW5wdXQuaXNvV2VlayB8fCAwLFxuICAgICAgICAgICAgZGF5cyA9IG5vcm1hbGl6ZWRJbnB1dC5kYXkgfHwgMCxcbiAgICAgICAgICAgIGhvdXJzID0gbm9ybWFsaXplZElucHV0LmhvdXIgfHwgMCxcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBub3JtYWxpemVkSW5wdXQubWludXRlIHx8IDAsXG4gICAgICAgICAgICBzZWNvbmRzID0gbm9ybWFsaXplZElucHV0LnNlY29uZCB8fCAwLFxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzID0gbm9ybWFsaXplZElucHV0Lm1pbGxpc2Vjb25kIHx8IDA7XG5cbiAgICAgICAgdGhpcy5faXNWYWxpZCA9IGlzRHVyYXRpb25WYWxpZChub3JtYWxpemVkSW5wdXQpO1xuXG4gICAgICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXG4gICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9XG4gICAgICAgICAgICArbWlsbGlzZWNvbmRzICtcbiAgICAgICAgICAgIHNlY29uZHMgKiAxZTMgKyAvLyAxMDAwXG4gICAgICAgICAgICBtaW51dGVzICogNmU0ICsgLy8gMTAwMCAqIDYwXG4gICAgICAgICAgICBob3VycyAqIDEwMDAgKiA2MCAqIDYwOyAvL3VzaW5nIDEwMDAgKiA2MCAqIDYwIGluc3RlYWQgb2YgMzZlNSB0byBhdm9pZCBmbG9hdGluZyBwb2ludCByb3VuZGluZyBlcnJvcnMgaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzI5NzhcbiAgICAgICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcbiAgICAgICAgdGhpcy5fZGF5cyA9ICtkYXlzICsgd2Vla3MgKiA3O1xuICAgICAgICAvLyBJdCBpcyBpbXBvc3NpYmxlIHRvIHRyYW5zbGF0ZSBtb250aHMgaW50byBkYXlzIHdpdGhvdXQga25vd2luZ1xuICAgICAgICAvLyB3aGljaCBtb250aHMgeW91IGFyZSBhcmUgdGFsa2luZyBhYm91dCwgc28gd2UgaGF2ZSB0byBzdG9yZVxuICAgICAgICAvLyBpdCBzZXBhcmF0ZWx5LlxuICAgICAgICB0aGlzLl9tb250aHMgPSArbW9udGhzICsgcXVhcnRlcnMgKiAzICsgeWVhcnMgKiAxMjtcblxuICAgICAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICAgICAgdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKCk7XG5cbiAgICAgICAgdGhpcy5fYnViYmxlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEdXJhdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFic1JvdW5kKG51bWJlcikge1xuICAgICAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoLTEgKiBudW1iZXIpICogLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29tcGFyZSB0d28gYXJyYXlzLCByZXR1cm4gdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlc1xuICAgIGZ1bmN0aW9uIGNvbXBhcmVBcnJheXMoYXJyYXkxLCBhcnJheTIsIGRvbnRDb252ZXJ0KSB7XG4gICAgICAgIHZhciBsZW4gPSBNYXRoLm1pbihhcnJheTEubGVuZ3RoLCBhcnJheTIubGVuZ3RoKSxcbiAgICAgICAgICAgIGxlbmd0aERpZmYgPSBNYXRoLmFicyhhcnJheTEubGVuZ3RoIC0gYXJyYXkyLmxlbmd0aCksXG4gICAgICAgICAgICBkaWZmcyA9IDAsXG4gICAgICAgICAgICBpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoZG9udENvbnZlcnQgJiYgYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pIHx8XG4gICAgICAgICAgICAgICAgKCFkb250Q29udmVydCAmJiB0b0ludChhcnJheTFbaV0pICE9PSB0b0ludChhcnJheTJbaV0pKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZGlmZnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlmZnMgKyBsZW5ndGhEaWZmO1xuICAgIH1cblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGZ1bmN0aW9uIG9mZnNldCh0b2tlbiwgc2VwYXJhdG9yKSB7XG4gICAgICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCAwLCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy51dGNPZmZzZXQoKSxcbiAgICAgICAgICAgICAgICBzaWduID0gJysnO1xuICAgICAgICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAtb2Zmc2V0O1xuICAgICAgICAgICAgICAgIHNpZ24gPSAnLSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHNpZ24gK1xuICAgICAgICAgICAgICAgIHplcm9GaWxsKH5+KG9mZnNldCAvIDYwKSwgMikgK1xuICAgICAgICAgICAgICAgIHNlcGFyYXRvciArXG4gICAgICAgICAgICAgICAgemVyb0ZpbGwofn5vZmZzZXQgJSA2MCwgMilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9mZnNldCgnWicsICc6Jyk7XG4gICAgb2Zmc2V0KCdaWicsICcnKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1onLCBtYXRjaFNob3J0T2Zmc2V0KTtcbiAgICBhZGRSZWdleFRva2VuKCdaWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xuICAgIGFkZFBhcnNlVG9rZW4oWydaJywgJ1paJ10sIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX3VzZVVUQyA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5fdHptID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG4gICAgfSk7XG5cbiAgICAvLyBIRUxQRVJTXG5cbiAgICAvLyB0aW1lem9uZSBjaHVua2VyXG4gICAgLy8gJysxMDowMCcgPiBbJzEwJywgICcwMCddXG4gICAgLy8gJy0xNTMwJyAgPiBbJy0xNScsICczMCddXG4gICAgdmFyIGNodW5rT2Zmc2V0ID0gLyhbXFwrXFwtXXxcXGRcXGQpL2dpO1xuXG4gICAgZnVuY3Rpb24gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaGVyLCBzdHJpbmcpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSAoc3RyaW5nIHx8ICcnKS5tYXRjaChtYXRjaGVyKSxcbiAgICAgICAgICAgIGNodW5rLFxuICAgICAgICAgICAgcGFydHMsXG4gICAgICAgICAgICBtaW51dGVzO1xuXG4gICAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNodW5rID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdIHx8IFtdO1xuICAgICAgICBwYXJ0cyA9IChjaHVuayArICcnKS5tYXRjaChjaHVua09mZnNldCkgfHwgWyctJywgMCwgMF07XG4gICAgICAgIG1pbnV0ZXMgPSArKHBhcnRzWzFdICogNjApICsgdG9JbnQocGFydHNbMl0pO1xuXG4gICAgICAgIHJldHVybiBtaW51dGVzID09PSAwID8gMCA6IHBhcnRzWzBdID09PSAnKycgPyBtaW51dGVzIDogLW1pbnV0ZXM7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGEgbW9tZW50IGZyb20gaW5wdXQsIHRoYXQgaXMgbG9jYWwvdXRjL3pvbmUgZXF1aXZhbGVudCB0byBtb2RlbC5cbiAgICBmdW5jdGlvbiBjbG9uZVdpdGhPZmZzZXQoaW5wdXQsIG1vZGVsKSB7XG4gICAgICAgIHZhciByZXMsIGRpZmY7XG4gICAgICAgIGlmIChtb2RlbC5faXNVVEMpIHtcbiAgICAgICAgICAgIHJlcyA9IG1vZGVsLmNsb25lKCk7XG4gICAgICAgICAgICBkaWZmID1cbiAgICAgICAgICAgICAgICAoaXNNb21lbnQoaW5wdXQpIHx8IGlzRGF0ZShpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgPyBpbnB1dC52YWx1ZU9mKClcbiAgICAgICAgICAgICAgICAgICAgOiBjcmVhdGVMb2NhbChpbnB1dCkudmFsdWVPZigpKSAtIHJlcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICAvLyBVc2UgbG93LWxldmVsIGFwaSwgYmVjYXVzZSB0aGlzIGZuIGlzIGxvdy1sZXZlbCBhcGkuXG4gICAgICAgICAgICByZXMuX2Quc2V0VGltZShyZXMuX2QudmFsdWVPZigpICsgZGlmZik7XG4gICAgICAgICAgICBob29rcy51cGRhdGVPZmZzZXQocmVzLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKGlucHV0KS5sb2NhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGF0ZU9mZnNldChtKSB7XG4gICAgICAgIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L3B1bGwvMTg3MVxuICAgICAgICByZXR1cm4gLU1hdGgucm91bmQobS5fZC5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgICB9XG5cbiAgICAvLyBIT09LU1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciBhIG1vbWVudCBpcyBtdXRhdGVkLlxuICAgIC8vIEl0IGlzIGludGVuZGVkIHRvIGtlZXAgdGhlIG9mZnNldCBpbiBzeW5jIHdpdGggdGhlIHRpbWV6b25lLlxuICAgIGhvb2tzLnVwZGF0ZU9mZnNldCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgLy8ga2VlcExvY2FsVGltZSA9IHRydWUgbWVhbnMgb25seSBjaGFuZ2UgdGhlIHRpbWV6b25lLCB3aXRob3V0XG4gICAgLy8gYWZmZWN0aW5nIHRoZSBsb2NhbCBob3VyLiBTbyA1OjMxOjI2ICswMzAwIC0tW3V0Y09mZnNldCgyLCB0cnVlKV0tLT5cbiAgICAvLyA1OjMxOjI2ICswMjAwIEl0IGlzIHBvc3NpYmxlIHRoYXQgNTozMToyNiBkb2Vzbid0IGV4aXN0IHdpdGggb2Zmc2V0XG4gICAgLy8gKzAyMDAsIHNvIHdlIGFkanVzdCB0aGUgdGltZSBhcyBuZWVkZWQsIHRvIGJlIHZhbGlkLlxuICAgIC8vXG4gICAgLy8gS2VlcGluZyB0aGUgdGltZSBhY3R1YWxseSBhZGRzL3N1YnRyYWN0cyAob25lIGhvdXIpXG4gICAgLy8gZnJvbSB0aGUgYWN0dWFsIHJlcHJlc2VudGVkIHRpbWUuIFRoYXQgaXMgd2h5IHdlIGNhbGwgdXBkYXRlT2Zmc2V0XG4gICAgLy8gYSBzZWNvbmQgdGltZS4gSW4gY2FzZSBpdCB3YW50cyB1cyB0byBjaGFuZ2UgdGhlIG9mZnNldCBhZ2FpblxuICAgIC8vIF9jaGFuZ2VJblByb2dyZXNzID09IHRydWUgY2FzZSwgdGhlbiB3ZSBoYXZlIHRvIGFkanVzdCwgYmVjYXVzZVxuICAgIC8vIHRoZXJlIGlzIG5vIHN1Y2ggdGltZSBpbiB0aGUgZ2l2ZW4gdGltZXpvbmUuXG4gICAgZnVuY3Rpb24gZ2V0U2V0T2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lLCBrZWVwTWludXRlcykge1xuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5fb2Zmc2V0IHx8IDAsXG4gICAgICAgICAgICBsb2NhbEFkanVzdDtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0ICE9IG51bGwgPyB0aGlzIDogTmFOO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoaW5wdXQpIDwgMTYgJiYgIWtlZXBNaW51dGVzKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBpbnB1dCAqIDYwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc1VUQyAmJiBrZWVwTG9jYWxUaW1lKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxBZGp1c3QgPSBnZXREYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fb2Zmc2V0ID0gaW5wdXQ7XG4gICAgICAgICAgICB0aGlzLl9pc1VUQyA9IHRydWU7XG4gICAgICAgICAgICBpZiAobG9jYWxBZGp1c3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGxvY2FsQWRqdXN0LCAnbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9mZnNldCAhPT0gaW5wdXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWtlZXBMb2NhbFRpbWUgfHwgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICBhZGRTdWJ0cmFjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVEdXJhdGlvbihpbnB1dCAtIG9mZnNldCwgJ20nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlSW5Qcm9ncmVzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyBvZmZzZXQgOiBnZXREYXRlT2Zmc2V0KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0Wm9uZShpbnB1dCwga2VlcExvY2FsVGltZSkge1xuICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IC1pbnB1dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtdGhpcy51dGNPZmZzZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE9mZnNldFRvVVRDKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE9mZnNldFRvTG9jYWwoa2VlcExvY2FsVGltZSkge1xuICAgICAgICBpZiAodGhpcy5faXNVVEMpIHtcbiAgICAgICAgICAgIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5faXNVVEMgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnRyYWN0KGdldERhdGVPZmZzZXQodGhpcyksICdtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl90em0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQodGhpcy5fdHptLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMuX2kgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgdFpvbmUgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoT2Zmc2V0LCB0aGlzLl9pKTtcbiAgICAgICAgICAgIGlmICh0Wm9uZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51dGNPZmZzZXQodFpvbmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgwLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNBbGlnbmVkSG91ck9mZnNldChpbnB1dCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQgPSBpbnB1dCA/IGNyZWF0ZUxvY2FsKGlucHV0KS51dGNPZmZzZXQoKSA6IDA7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLnV0Y09mZnNldCgpIC0gaW5wdXQpICUgNjAgPT09IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDApLnV0Y09mZnNldCgpIHx8XG4gICAgICAgICAgICB0aGlzLnV0Y09mZnNldCgpID4gdGhpcy5jbG9uZSgpLm1vbnRoKDUpLnV0Y09mZnNldCgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkKCkge1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX2lzRFNUU2hpZnRlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc0RTVFNoaWZ0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYyA9IHt9LFxuICAgICAgICAgICAgb3RoZXI7XG5cbiAgICAgICAgY29weUNvbmZpZyhjLCB0aGlzKTtcbiAgICAgICAgYyA9IHByZXBhcmVDb25maWcoYyk7XG5cbiAgICAgICAgaWYgKGMuX2EpIHtcbiAgICAgICAgICAgIG90aGVyID0gYy5faXNVVEMgPyBjcmVhdGVVVEMoYy5fYSkgOiBjcmVhdGVMb2NhbChjLl9hKTtcbiAgICAgICAgICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkKCkgJiYgY29tcGFyZUFycmF5cyhjLl9hLCBvdGhlci50b0FycmF5KCkpID4gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0xvY2FsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1V0Y09mZnNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1V0YygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQVNQLk5FVCBqc29uIGRhdGUgZm9ybWF0IHJlZ2V4XG4gICAgdmFyIGFzcE5ldFJlZ2V4ID0gL14oLXxcXCspPyg/OihcXGQqKVsuIF0pPyhcXGQrKTooXFxkKykoPzo6KFxcZCspKFxcLlxcZCopPyk/JC8sXG4gICAgICAgIC8vIGZyb20gaHR0cDovL2RvY3MuY2xvc3VyZS1saWJyYXJ5Lmdvb2dsZWNvZGUuY29tL2dpdC9jbG9zdXJlX2dvb2dfZGF0ZV9kYXRlLmpzLnNvdXJjZS5odG1sXG4gICAgICAgIC8vIHNvbWV3aGF0IG1vcmUgaW4gbGluZSB3aXRoIDQuNC4zLjIgMjAwNCBzcGVjLCBidXQgYWxsb3dzIGRlY2ltYWwgYW55d2hlcmVcbiAgICAgICAgLy8gYW5kIGZ1cnRoZXIgbW9kaWZpZWQgdG8gYWxsb3cgZm9yIHN0cmluZ3MgY29udGFpbmluZyBib3RoIHdlZWsgYW5kIGRheVxuICAgICAgICBpc29SZWdleCA9XG4gICAgICAgICAgICAvXigtfFxcKyk/UCg/OihbLStdP1swLTksLl0qKVkpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVcpPyg/OihbLStdP1swLTksLl0qKUQpPyg/OlQoPzooWy0rXT9bMC05LC5dKilIKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilTKT8pPyQvO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlRHVyYXRpb24oaW5wdXQsIGtleSkge1xuICAgICAgICB2YXIgZHVyYXRpb24gPSBpbnB1dCxcbiAgICAgICAgICAgIC8vIG1hdGNoaW5nIGFnYWluc3QgcmVnZXhwIGlzIGV4cGVuc2l2ZSwgZG8gaXQgb24gZGVtYW5kXG4gICAgICAgICAgICBtYXRjaCA9IG51bGwsXG4gICAgICAgICAgICBzaWduLFxuICAgICAgICAgICAgcmV0LFxuICAgICAgICAgICAgZGlmZlJlcztcblxuICAgICAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIG1zOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgICAgIGQ6IGlucHV0Ll9kYXlzLFxuICAgICAgICAgICAgICAgIE06IGlucHV0Ll9tb250aHMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSB8fCAhaXNOYU4oK2lucHV0KSkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbltrZXldID0gK2lucHV0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbi5taWxsaXNlY29uZHMgPSAraW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoKG1hdGNoID0gYXNwTmV0UmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgICAgICBzaWduID0gbWF0Y2hbMV0gPT09ICctJyA/IC0xIDogMTtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgZDogdG9JbnQobWF0Y2hbREFURV0pICogc2lnbixcbiAgICAgICAgICAgICAgICBoOiB0b0ludChtYXRjaFtIT1VSXSkgKiBzaWduLFxuICAgICAgICAgICAgICAgIG06IHRvSW50KG1hdGNoW01JTlVURV0pICogc2lnbixcbiAgICAgICAgICAgICAgICBzOiB0b0ludChtYXRjaFtTRUNPTkRdKSAqIHNpZ24sXG4gICAgICAgICAgICAgICAgbXM6IHRvSW50KGFic1JvdW5kKG1hdGNoW01JTExJU0VDT05EXSAqIDEwMDApKSAqIHNpZ24sIC8vIHRoZSBtaWxsaXNlY29uZCBkZWNpbWFsIHBvaW50IGlzIGluY2x1ZGVkIGluIHRoZSBtYXRjaFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICgobWF0Y2ggPSBpc29SZWdleC5leGVjKGlucHV0KSkpIHtcbiAgICAgICAgICAgIHNpZ24gPSBtYXRjaFsxXSA9PT0gJy0nID8gLTEgOiAxO1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeTogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxuICAgICAgICAgICAgICAgIE06IHBhcnNlSXNvKG1hdGNoWzNdLCBzaWduKSxcbiAgICAgICAgICAgICAgICB3OiBwYXJzZUlzbyhtYXRjaFs0XSwgc2lnbiksXG4gICAgICAgICAgICAgICAgZDogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxuICAgICAgICAgICAgICAgIGg6IHBhcnNlSXNvKG1hdGNoWzZdLCBzaWduKSxcbiAgICAgICAgICAgICAgICBtOiBwYXJzZUlzbyhtYXRjaFs3XSwgc2lnbiksXG4gICAgICAgICAgICAgICAgczogcGFyc2VJc28obWF0Y2hbOF0sIHNpZ24pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgICBkdXJhdGlvbiA9IHt9O1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGR1cmF0aW9uID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgKCdmcm9tJyBpbiBkdXJhdGlvbiB8fCAndG8nIGluIGR1cmF0aW9uKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShcbiAgICAgICAgICAgICAgICBjcmVhdGVMb2NhbChkdXJhdGlvbi5mcm9tKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVMb2NhbChkdXJhdGlvbi50bylcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGR1cmF0aW9uID0ge307XG4gICAgICAgICAgICBkdXJhdGlvbi5tcyA9IGRpZmZSZXMubWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgZHVyYXRpb24uTSA9IGRpZmZSZXMubW9udGhzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gbmV3IER1cmF0aW9uKGR1cmF0aW9uKTtcblxuICAgICAgICBpZiAoaXNEdXJhdGlvbihpbnB1dCkgJiYgaGFzT3duUHJvcChpbnB1dCwgJ19sb2NhbGUnKSkge1xuICAgICAgICAgICAgcmV0Ll9sb2NhbGUgPSBpbnB1dC5fbG9jYWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRHVyYXRpb24oaW5wdXQpICYmIGhhc093blByb3AoaW5wdXQsICdfaXNWYWxpZCcpKSB7XG4gICAgICAgICAgICByZXQuX2lzVmFsaWQgPSBpbnB1dC5faXNWYWxpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgY3JlYXRlRHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGU7XG4gICAgY3JlYXRlRHVyYXRpb24uaW52YWxpZCA9IGNyZWF0ZUludmFsaWQkMTtcblxuICAgIGZ1bmN0aW9uIHBhcnNlSXNvKGlucCwgc2lnbikge1xuICAgICAgICAvLyBXZSdkIG5vcm1hbGx5IHVzZSB+fmlucCBmb3IgdGhpcywgYnV0IHVuZm9ydHVuYXRlbHkgaXQgYWxzb1xuICAgICAgICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cbiAgICAgICAgLy8gaW5wIG1heSBiZSB1bmRlZmluZWQsIHNvIGNhcmVmdWwgY2FsbGluZyByZXBsYWNlIG9uIGl0LlxuICAgICAgICB2YXIgcmVzID0gaW5wICYmIHBhcnNlRmxvYXQoaW5wLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgICAgICAgLy8gYXBwbHkgc2lnbiB3aGlsZSB3ZSdyZSBhdCBpdFxuICAgICAgICByZXR1cm4gKGlzTmFOKHJlcykgPyAwIDogcmVzKSAqIHNpZ247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcikge1xuICAgICAgICB2YXIgcmVzID0ge307XG5cbiAgICAgICAgcmVzLm1vbnRocyA9XG4gICAgICAgICAgICBvdGhlci5tb250aCgpIC0gYmFzZS5tb250aCgpICsgKG90aGVyLnllYXIoKSAtIGJhc2UueWVhcigpKSAqIDEyO1xuICAgICAgICBpZiAoYmFzZS5jbG9uZSgpLmFkZChyZXMubW9udGhzLCAnTScpLmlzQWZ0ZXIob3RoZXIpKSB7XG4gICAgICAgICAgICAtLXJlcy5tb250aHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXMubWlsbGlzZWNvbmRzID0gK290aGVyIC0gK2Jhc2UuY2xvbmUoKS5hZGQocmVzLm1vbnRocywgJ00nKTtcblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIG90aGVyKSB7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIGlmICghKGJhc2UuaXNWYWxpZCgpICYmIG90aGVyLmlzVmFsaWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XG4gICAgICAgIH1cblxuICAgICAgICBvdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSk7XG4gICAgICAgIGlmIChiYXNlLmlzQmVmb3JlKG90aGVyKSkge1xuICAgICAgICAgICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlLCBvdGhlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKG90aGVyLCBiYXNlKTtcbiAgICAgICAgICAgIHJlcy5taWxsaXNlY29uZHMgPSAtcmVzLm1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogcmVtb3ZlICduYW1lJyBhcmcgYWZ0ZXIgZGVwcmVjYXRpb24gaXMgcmVtb3ZlZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkZGVyKGRpcmVjdGlvbiwgbmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCwgcGVyaW9kKSB7XG4gICAgICAgICAgICB2YXIgZHVyLCB0bXA7XG4gICAgICAgICAgICAvL2ludmVydCB0aGUgYXJndW1lbnRzLCBidXQgY29tcGxhaW4gYWJvdXQgaXRcbiAgICAgICAgICAgIGlmIChwZXJpb2QgIT09IG51bGwgJiYgIWlzTmFOKCtwZXJpb2QpKSB7XG4gICAgICAgICAgICAgICAgZGVwcmVjYXRlU2ltcGxlKFxuICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAnbW9tZW50KCkuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcocGVyaW9kLCBudW1iZXIpIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgbW9tZW50KCkuJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcobnVtYmVyLCBwZXJpb2QpLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdTZWUgaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9hZGQtaW52ZXJ0ZWQtcGFyYW0vIGZvciBtb3JlIGluZm8uJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdG1wID0gdmFsO1xuICAgICAgICAgICAgICAgIHZhbCA9IHBlcmlvZDtcbiAgICAgICAgICAgICAgICBwZXJpb2QgPSB0bXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGR1ciA9IGNyZWF0ZUR1cmF0aW9uKHZhbCwgcGVyaW9kKTtcbiAgICAgICAgICAgIGFkZFN1YnRyYWN0KHRoaXMsIGR1ciwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFN1YnRyYWN0KG1vbSwgZHVyYXRpb24sIGlzQWRkaW5nLCB1cGRhdGVPZmZzZXQpIHtcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHMsXG4gICAgICAgICAgICBkYXlzID0gYWJzUm91bmQoZHVyYXRpb24uX2RheXMpLFxuICAgICAgICAgICAgbW9udGhzID0gYWJzUm91bmQoZHVyYXRpb24uX21vbnRocyk7XG5cbiAgICAgICAgaWYgKCFtb20uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAvLyBObyBvcFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gICAgICAgIGlmIChtb250aHMpIHtcbiAgICAgICAgICAgIHNldE1vbnRoKG1vbSwgZ2V0KG1vbSwgJ01vbnRoJykgKyBtb250aHMgKiBpc0FkZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheXMpIHtcbiAgICAgICAgICAgIHNldCQxKG1vbSwgJ0RhdGUnLCBnZXQobW9tLCAnRGF0ZScpICsgZGF5cyAqIGlzQWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWlsbGlzZWNvbmRzKSB7XG4gICAgICAgICAgICBtb20uX2Quc2V0VGltZShtb20uX2QudmFsdWVPZigpICsgbWlsbGlzZWNvbmRzICogaXNBZGRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1cGRhdGVPZmZzZXQpIHtcbiAgICAgICAgICAgIGhvb2tzLnVwZGF0ZU9mZnNldChtb20sIGRheXMgfHwgbW9udGhzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhZGQgPSBjcmVhdGVBZGRlcigxLCAnYWRkJyksXG4gICAgICAgIHN1YnRyYWN0ID0gY3JlYXRlQWRkZXIoLTEsICdzdWJ0cmFjdCcpO1xuXG4gICAgZnVuY3Rpb24gaXNTdHJpbmcoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgaW5wdXQgaW5zdGFuY2VvZiBTdHJpbmc7XG4gICAgfVxuXG4gICAgLy8gdHlwZSBNb21lbnRJbnB1dCA9IE1vbWVudCB8IERhdGUgfCBzdHJpbmcgfCBudW1iZXIgfCAobnVtYmVyIHwgc3RyaW5nKVtdIHwgTW9tZW50SW5wdXRPYmplY3QgfCB2b2lkOyAvLyBudWxsIHwgdW5kZWZpbmVkXG4gICAgZnVuY3Rpb24gaXNNb21lbnRJbnB1dChpbnB1dCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgaXNNb21lbnQoaW5wdXQpIHx8XG4gICAgICAgICAgICBpc0RhdGUoaW5wdXQpIHx8XG4gICAgICAgICAgICBpc1N0cmluZyhpbnB1dCkgfHxcbiAgICAgICAgICAgIGlzTnVtYmVyKGlucHV0KSB8fFxuICAgICAgICAgICAgaXNOdW1iZXJPclN0cmluZ0FycmF5KGlucHV0KSB8fFxuICAgICAgICAgICAgaXNNb21lbnRJbnB1dE9iamVjdChpbnB1dCkgfHxcbiAgICAgICAgICAgIGlucHV0ID09PSBudWxsIHx8XG4gICAgICAgICAgICBpbnB1dCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNNb21lbnRJbnB1dE9iamVjdChpbnB1dCkge1xuICAgICAgICB2YXIgb2JqZWN0VGVzdCA9IGlzT2JqZWN0KGlucHV0KSAmJiAhaXNPYmplY3RFbXB0eShpbnB1dCksXG4gICAgICAgICAgICBwcm9wZXJ0eVRlc3QgPSBmYWxzZSxcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBbXG4gICAgICAgICAgICAgICAgJ3llYXJzJyxcbiAgICAgICAgICAgICAgICAneWVhcicsXG4gICAgICAgICAgICAgICAgJ3knLFxuICAgICAgICAgICAgICAgICdtb250aHMnLFxuICAgICAgICAgICAgICAgICdtb250aCcsXG4gICAgICAgICAgICAgICAgJ00nLFxuICAgICAgICAgICAgICAgICdkYXlzJyxcbiAgICAgICAgICAgICAgICAnZGF5JyxcbiAgICAgICAgICAgICAgICAnZCcsXG4gICAgICAgICAgICAgICAgJ2RhdGVzJyxcbiAgICAgICAgICAgICAgICAnZGF0ZScsXG4gICAgICAgICAgICAgICAgJ0QnLFxuICAgICAgICAgICAgICAgICdob3VycycsXG4gICAgICAgICAgICAgICAgJ2hvdXInLFxuICAgICAgICAgICAgICAgICdoJyxcbiAgICAgICAgICAgICAgICAnbWludXRlcycsXG4gICAgICAgICAgICAgICAgJ21pbnV0ZScsXG4gICAgICAgICAgICAgICAgJ20nLFxuICAgICAgICAgICAgICAgICdzZWNvbmRzJyxcbiAgICAgICAgICAgICAgICAnc2Vjb25kJyxcbiAgICAgICAgICAgICAgICAncycsXG4gICAgICAgICAgICAgICAgJ21pbGxpc2Vjb25kcycsXG4gICAgICAgICAgICAgICAgJ21pbGxpc2Vjb25kJyxcbiAgICAgICAgICAgICAgICAnbXMnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHByb3BlcnR5TGVuID0gcHJvcGVydGllcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHByb3BlcnR5TGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgIHByb3BlcnR5VGVzdCA9IHByb3BlcnR5VGVzdCB8fCBoYXNPd25Qcm9wKGlucHV0LCBwcm9wZXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqZWN0VGVzdCAmJiBwcm9wZXJ0eVRlc3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNOdW1iZXJPclN0cmluZ0FycmF5KGlucHV0KSB7XG4gICAgICAgIHZhciBhcnJheVRlc3QgPSBpc0FycmF5KGlucHV0KSxcbiAgICAgICAgICAgIGRhdGFUeXBlVGVzdCA9IGZhbHNlO1xuICAgICAgICBpZiAoYXJyYXlUZXN0KSB7XG4gICAgICAgICAgICBkYXRhVHlwZVRlc3QgPVxuICAgICAgICAgICAgICAgIGlucHV0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWlzTnVtYmVyKGl0ZW0pICYmIGlzU3RyaW5nKGlucHV0KTtcbiAgICAgICAgICAgICAgICB9KS5sZW5ndGggPT09IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5VGVzdCAmJiBkYXRhVHlwZVRlc3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNDYWxlbmRhclNwZWMoaW5wdXQpIHtcbiAgICAgICAgdmFyIG9iamVjdFRlc3QgPSBpc09iamVjdChpbnB1dCkgJiYgIWlzT2JqZWN0RW1wdHkoaW5wdXQpLFxuICAgICAgICAgICAgcHJvcGVydHlUZXN0ID0gZmFsc2UsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gW1xuICAgICAgICAgICAgICAgICdzYW1lRGF5JyxcbiAgICAgICAgICAgICAgICAnbmV4dERheScsXG4gICAgICAgICAgICAgICAgJ2xhc3REYXknLFxuICAgICAgICAgICAgICAgICduZXh0V2VlaycsXG4gICAgICAgICAgICAgICAgJ2xhc3RXZWVrJyxcbiAgICAgICAgICAgICAgICAnc2FtZUVsc2UnLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBwcm9wZXJ0eTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgICAgcHJvcGVydHlUZXN0ID0gcHJvcGVydHlUZXN0IHx8IGhhc093blByb3AoaW5wdXQsIHByb3BlcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmplY3RUZXN0ICYmIHByb3BlcnR5VGVzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDYWxlbmRhckZvcm1hdChteU1vbWVudCwgbm93KSB7XG4gICAgICAgIHZhciBkaWZmID0gbXlNb21lbnQuZGlmZihub3csICdkYXlzJywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBkaWZmIDwgLTZcbiAgICAgICAgICAgID8gJ3NhbWVFbHNlJ1xuICAgICAgICAgICAgOiBkaWZmIDwgLTFcbiAgICAgICAgICAgID8gJ2xhc3RXZWVrJ1xuICAgICAgICAgICAgOiBkaWZmIDwgMFxuICAgICAgICAgICAgPyAnbGFzdERheSdcbiAgICAgICAgICAgIDogZGlmZiA8IDFcbiAgICAgICAgICAgID8gJ3NhbWVEYXknXG4gICAgICAgICAgICA6IGRpZmYgPCAyXG4gICAgICAgICAgICA/ICduZXh0RGF5J1xuICAgICAgICAgICAgOiBkaWZmIDwgN1xuICAgICAgICAgICAgPyAnbmV4dFdlZWsnXG4gICAgICAgICAgICA6ICdzYW1lRWxzZSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsZW5kYXIkMSh0aW1lLCBmb3JtYXRzKSB7XG4gICAgICAgIC8vIFN1cHBvcnQgZm9yIHNpbmdsZSBwYXJhbWV0ZXIsIGZvcm1hdHMgb25seSBvdmVybG9hZCB0byB0aGUgY2FsZW5kYXIgZnVuY3Rpb25cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzWzBdKSB7XG4gICAgICAgICAgICAgICAgdGltZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBmb3JtYXRzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc01vbWVudElucHV0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIGZvcm1hdHMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2FsZW5kYXJTcGVjKGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgICAgICAgICBmb3JtYXRzID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHRpbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2Ugd2FudCB0byBjb21wYXJlIHRoZSBzdGFydCBvZiB0b2RheSwgdnMgdGhpcy5cbiAgICAgICAgLy8gR2V0dGluZyBzdGFydC1vZi10b2RheSBkZXBlbmRzIG9uIHdoZXRoZXIgd2UncmUgbG9jYWwvdXRjL29mZnNldCBvciBub3QuXG4gICAgICAgIHZhciBub3cgPSB0aW1lIHx8IGNyZWF0ZUxvY2FsKCksXG4gICAgICAgICAgICBzb2QgPSBjbG9uZVdpdGhPZmZzZXQobm93LCB0aGlzKS5zdGFydE9mKCdkYXknKSxcbiAgICAgICAgICAgIGZvcm1hdCA9IGhvb2tzLmNhbGVuZGFyRm9ybWF0KHRoaXMsIHNvZCkgfHwgJ3NhbWVFbHNlJyxcbiAgICAgICAgICAgIG91dHB1dCA9XG4gICAgICAgICAgICAgICAgZm9ybWF0cyAmJlxuICAgICAgICAgICAgICAgIChpc0Z1bmN0aW9uKGZvcm1hdHNbZm9ybWF0XSlcbiAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRzW2Zvcm1hdF0uY2FsbCh0aGlzLCBub3cpXG4gICAgICAgICAgICAgICAgICAgIDogZm9ybWF0c1tmb3JtYXRdKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQoXG4gICAgICAgICAgICBvdXRwdXQgfHwgdGhpcy5sb2NhbGVEYXRhKCkuY2FsZW5kYXIoZm9ybWF0LCB0aGlzLCBjcmVhdGVMb2NhbChub3cpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1vbWVudCh0aGlzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FmdGVyKGlucHV0LCB1bml0cykge1xuICAgICAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpO1xuICAgICAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB8fCAnbWlsbGlzZWNvbmQnO1xuICAgICAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA+IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsSW5wdXQudmFsdWVPZigpIDwgdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQmVmb3JlKGlucHV0LCB1bml0cykge1xuICAgICAgICB2YXIgbG9jYWxJbnB1dCA9IGlzTW9tZW50KGlucHV0KSA/IGlucHV0IDogY3JlYXRlTG9jYWwoaW5wdXQpO1xuICAgICAgICBpZiAoISh0aGlzLmlzVmFsaWQoKSAmJiBsb2NhbElucHV0LmlzVmFsaWQoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB8fCAnbWlsbGlzZWNvbmQnO1xuICAgICAgICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKSA8IGxvY2FsSW5wdXQudmFsdWVPZigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5lbmRPZih1bml0cykudmFsdWVPZigpIDwgbG9jYWxJbnB1dC52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0JldHdlZW4oZnJvbSwgdG8sIHVuaXRzLCBpbmNsdXNpdml0eSkge1xuICAgICAgICB2YXIgbG9jYWxGcm9tID0gaXNNb21lbnQoZnJvbSkgPyBmcm9tIDogY3JlYXRlTG9jYWwoZnJvbSksXG4gICAgICAgICAgICBsb2NhbFRvID0gaXNNb21lbnQodG8pID8gdG8gOiBjcmVhdGVMb2NhbCh0byk7XG4gICAgICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsRnJvbS5pc1ZhbGlkKCkgJiYgbG9jYWxUby5pc1ZhbGlkKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaW5jbHVzaXZpdHkgPSBpbmNsdXNpdml0eSB8fCAnKCknO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKGluY2x1c2l2aXR5WzBdID09PSAnKCdcbiAgICAgICAgICAgICAgICA/IHRoaXMuaXNBZnRlcihsb2NhbEZyb20sIHVuaXRzKVxuICAgICAgICAgICAgICAgIDogIXRoaXMuaXNCZWZvcmUobG9jYWxGcm9tLCB1bml0cykpICYmXG4gICAgICAgICAgICAoaW5jbHVzaXZpdHlbMV0gPT09ICcpJ1xuICAgICAgICAgICAgICAgID8gdGhpcy5pc0JlZm9yZShsb2NhbFRvLCB1bml0cylcbiAgICAgICAgICAgICAgICA6ICF0aGlzLmlzQWZ0ZXIobG9jYWxUbywgdW5pdHMpKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU2FtZShpbnB1dCwgdW5pdHMpIHtcbiAgICAgICAgdmFyIGxvY2FsSW5wdXQgPSBpc01vbWVudChpbnB1dCkgPyBpbnB1dCA6IGNyZWF0ZUxvY2FsKGlucHV0KSxcbiAgICAgICAgICAgIGlucHV0TXM7XG4gICAgICAgIGlmICghKHRoaXMuaXNWYWxpZCgpICYmIGxvY2FsSW5wdXQuaXNWYWxpZCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpIHx8ICdtaWxsaXNlY29uZCc7XG4gICAgICAgIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID09PSBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0TXMgPSBsb2NhbElucHV0LnZhbHVlT2YoKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpLnZhbHVlT2YoKSA8PSBpbnB1dE1zICYmXG4gICAgICAgICAgICAgICAgaW5wdXRNcyA8PSB0aGlzLmNsb25lKCkuZW5kT2YodW5pdHMpLnZhbHVlT2YoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU2FtZU9yQWZ0ZXIoaW5wdXQsIHVuaXRzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU2FtZShpbnB1dCwgdW5pdHMpIHx8IHRoaXMuaXNBZnRlcihpbnB1dCwgdW5pdHMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU2FtZU9yQmVmb3JlKGlucHV0LCB1bml0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1NhbWUoaW5wdXQsIHVuaXRzKSB8fCB0aGlzLmlzQmVmb3JlKGlucHV0LCB1bml0cyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlmZihpbnB1dCwgdW5pdHMsIGFzRmxvYXQpIHtcbiAgICAgICAgdmFyIHRoYXQsIHpvbmVEZWx0YSwgb3V0cHV0O1xuXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0ID0gY2xvbmVXaXRoT2Zmc2V0KGlucHV0LCB0aGlzKTtcblxuICAgICAgICBpZiAoIXRoYXQuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG5cbiAgICAgICAgem9uZURlbHRhID0gKHRoYXQudXRjT2Zmc2V0KCkgLSB0aGlzLnV0Y09mZnNldCgpKSAqIDZlNDtcblxuICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcblxuICAgICAgICBzd2l0Y2ggKHVuaXRzKSB7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCkgLyAxMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBtb250aERpZmYodGhpcywgdGhhdCkgLyAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2Vjb25kJzpcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodGhpcyAtIHRoYXQpIC8gMWUzO1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyAxMDAwXG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCkgLyA2ZTQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MFxuICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0KSAvIDM2ZTU7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwXG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgICAgIG91dHB1dCA9ICh0aGlzIC0gdGhhdCAtIHpvbmVEZWx0YSkgLyA4NjRlNTtcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gMTAwMCAqIDYwICogNjAgKiAyNCwgbmVnYXRlIGRzdFxuICAgICAgICAgICAgY2FzZSAnd2Vlayc6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gKHRoaXMgLSB0aGF0IC0gem9uZURlbHRhKSAvIDYwNDhlNTtcbiAgICAgICAgICAgICAgICBicmVhazsgLy8gMTAwMCAqIDYwICogNjAgKiAyNCAqIDcsIG5lZ2F0ZSBkc3RcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gdGhpcyAtIHRoYXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNGbG9hdCA/IG91dHB1dCA6IGFic0Zsb29yKG91dHB1dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9udGhEaWZmKGEsIGIpIHtcbiAgICAgICAgaWYgKGEuZGF0ZSgpIDwgYi5kYXRlKCkpIHtcbiAgICAgICAgICAgIC8vIGVuZC1vZi1tb250aCBjYWxjdWxhdGlvbnMgd29yayBjb3JyZWN0IHdoZW4gdGhlIHN0YXJ0IG1vbnRoIGhhcyBtb3JlXG4gICAgICAgICAgICAvLyBkYXlzIHRoYW4gdGhlIGVuZCBtb250aC5cbiAgICAgICAgICAgIHJldHVybiAtbW9udGhEaWZmKGIsIGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRpZmZlcmVuY2UgaW4gbW9udGhzXG4gICAgICAgIHZhciB3aG9sZU1vbnRoRGlmZiA9IChiLnllYXIoKSAtIGEueWVhcigpKSAqIDEyICsgKGIubW9udGgoKSAtIGEubW9udGgoKSksXG4gICAgICAgICAgICAvLyBiIGlzIGluIChhbmNob3IgLSAxIG1vbnRoLCBhbmNob3IgKyAxIG1vbnRoKVxuICAgICAgICAgICAgYW5jaG9yID0gYS5jbG9uZSgpLmFkZCh3aG9sZU1vbnRoRGlmZiwgJ21vbnRocycpLFxuICAgICAgICAgICAgYW5jaG9yMixcbiAgICAgICAgICAgIGFkanVzdDtcblxuICAgICAgICBpZiAoYiAtIGFuY2hvciA8IDApIHtcbiAgICAgICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmIC0gMSwgJ21vbnRocycpO1xuICAgICAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IgLSBhbmNob3IyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmICsgMSwgJ21vbnRocycpO1xuICAgICAgICAgICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcbiAgICAgICAgICAgIGFkanVzdCA9IChiIC0gYW5jaG9yKSAvIChhbmNob3IyIC0gYW5jaG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY2hlY2sgZm9yIG5lZ2F0aXZlIHplcm8sIHJldHVybiB6ZXJvIGlmIG5lZ2F0aXZlIHplcm9cbiAgICAgICAgcmV0dXJuIC0od2hvbGVNb250aERpZmYgKyBhZGp1c3QpIHx8IDA7XG4gICAgfVxuXG4gICAgaG9va3MuZGVmYXVsdEZvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzWic7XG4gICAgaG9va3MuZGVmYXVsdEZvcm1hdFV0YyA9ICdZWVlZLU1NLUREVEhIOm1tOnNzW1pdJztcblxuICAgIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmxvY2FsZSgnZW4nKS5mb3JtYXQoJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9JU09TdHJpbmcoa2VlcE9mZnNldCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXRjID0ga2VlcE9mZnNldCAhPT0gdHJ1ZSxcbiAgICAgICAgICAgIG0gPSB1dGMgPyB0aGlzLmNsb25lKCkudXRjKCkgOiB0aGlzO1xuICAgICAgICBpZiAobS55ZWFyKCkgPCAwIHx8IG0ueWVhcigpID4gOTk5OSkge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdE1vbWVudChcbiAgICAgICAgICAgICAgICBtLFxuICAgICAgICAgICAgICAgIHV0Y1xuICAgICAgICAgICAgICAgICAgICA/ICdZWVlZWVktTU0tRERbVF1ISDptbTpzcy5TU1NbWl0nXG4gICAgICAgICAgICAgICAgICAgIDogJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1onXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKSkge1xuICAgICAgICAgICAgLy8gbmF0aXZlIGltcGxlbWVudGF0aW9uIGlzIH41MHggZmFzdGVyLCB1c2UgaXQgd2hlbiB3ZSBjYW5cbiAgICAgICAgICAgIGlmICh1dGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkgKyB0aGlzLnV0Y09mZnNldCgpICogNjAgKiAxMDAwKVxuICAgICAgICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnWicsIGZvcm1hdE1vbWVudChtLCAnWicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KFxuICAgICAgICAgICAgbSxcbiAgICAgICAgICAgIHV0YyA/ICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyA6ICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTWidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBodW1hbiByZWFkYWJsZSByZXByZXNlbnRhdGlvbiBvZiBhIG1vbWVudCB0aGF0IGNhblxuICAgICAqIGFsc28gYmUgZXZhbHVhdGVkIHRvIGdldCBhIG5ldyBtb21lbnQgd2hpY2ggaXMgdGhlIHNhbWVcbiAgICAgKlxuICAgICAqIEBsaW5rIGh0dHBzOi8vbm9kZWpzLm9yZy9kaXN0L2xhdGVzdC9kb2NzL2FwaS91dGlsLmh0bWwjdXRpbF9jdXN0b21faW5zcGVjdF9mdW5jdGlvbl9vbl9vYmplY3RzXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5zcGVjdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuICdtb21lbnQuaW52YWxpZCgvKiAnICsgdGhpcy5faSArICcgKi8pJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgZnVuYyA9ICdtb21lbnQnLFxuICAgICAgICAgICAgem9uZSA9ICcnLFxuICAgICAgICAgICAgcHJlZml4LFxuICAgICAgICAgICAgeWVhcixcbiAgICAgICAgICAgIGRhdGV0aW1lLFxuICAgICAgICAgICAgc3VmZml4O1xuICAgICAgICBpZiAoIXRoaXMuaXNMb2NhbCgpKSB7XG4gICAgICAgICAgICBmdW5jID0gdGhpcy51dGNPZmZzZXQoKSA9PT0gMCA/ICdtb21lbnQudXRjJyA6ICdtb21lbnQucGFyc2Vab25lJztcbiAgICAgICAgICAgIHpvbmUgPSAnWic7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZml4ID0gJ1snICsgZnVuYyArICcoXCJdJztcbiAgICAgICAgeWVhciA9IDAgPD0gdGhpcy55ZWFyKCkgJiYgdGhpcy55ZWFyKCkgPD0gOTk5OSA/ICdZWVlZJyA6ICdZWVlZWVknO1xuICAgICAgICBkYXRldGltZSA9ICctTU0tRERbVF1ISDptbTpzcy5TU1MnO1xuICAgICAgICBzdWZmaXggPSB6b25lICsgJ1tcIildJztcblxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXQocHJlZml4ICsgeWVhciArIGRhdGV0aW1lICsgc3VmZml4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JtYXQoaW5wdXRTdHJpbmcpIHtcbiAgICAgICAgaWYgKCFpbnB1dFN0cmluZykge1xuICAgICAgICAgICAgaW5wdXRTdHJpbmcgPSB0aGlzLmlzVXRjKClcbiAgICAgICAgICAgICAgICA/IGhvb2tzLmRlZmF1bHRGb3JtYXRVdGNcbiAgICAgICAgICAgICAgICA6IGhvb2tzLmRlZmF1bHRGb3JtYXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dHB1dCA9IGZvcm1hdE1vbWVudCh0aGlzLCBpbnB1dFN0cmluZyk7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5wb3N0Zm9ybWF0KG91dHB1dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZnJvbSh0aW1lLCB3aXRob3V0U3VmZml4KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCgpICYmXG4gICAgICAgICAgICAoKGlzTW9tZW50KHRpbWUpICYmIHRpbWUuaXNWYWxpZCgpKSB8fCBjcmVhdGVMb2NhbCh0aW1lKS5pc1ZhbGlkKCkpXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHsgdG86IHRoaXMsIGZyb206IHRpbWUgfSlcbiAgICAgICAgICAgICAgICAubG9jYWxlKHRoaXMubG9jYWxlKCkpXG4gICAgICAgICAgICAgICAgLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZnJvbU5vdyh3aXRob3V0U3VmZml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZyb20oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG8odGltZSwgd2l0aG91dFN1ZmZpeCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQoKSAmJlxuICAgICAgICAgICAgKChpc01vbWVudCh0aW1lKSAmJiB0aW1lLmlzVmFsaWQoKSkgfHwgY3JlYXRlTG9jYWwodGltZSkuaXNWYWxpZCgpKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih7IGZyb206IHRoaXMsIHRvOiB0aW1lIH0pXG4gICAgICAgICAgICAgICAgLmxvY2FsZSh0aGlzLmxvY2FsZSgpKVxuICAgICAgICAgICAgICAgIC5odW1hbml6ZSghd2l0aG91dFN1ZmZpeCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvTm93KHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG8oY3JlYXRlTG9jYWwoKSwgd2l0aG91dFN1ZmZpeCk7XG4gICAgfVxuXG4gICAgLy8gSWYgcGFzc2VkIGEgbG9jYWxlIGtleSwgaXQgd2lsbCBzZXQgdGhlIGxvY2FsZSBmb3IgdGhpc1xuICAgIC8vIGluc3RhbmNlLiAgT3RoZXJ3aXNlLCBpdCB3aWxsIHJldHVybiB0aGUgbG9jYWxlIGNvbmZpZ3VyYXRpb25cbiAgICAvLyB2YXJpYWJsZXMgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgZnVuY3Rpb24gbG9jYWxlKGtleSkge1xuICAgICAgICB2YXIgbmV3TG9jYWxlRGF0YTtcblxuICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUuX2FiYnI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdMb2NhbGVEYXRhID0gZ2V0TG9jYWxlKGtleSk7XG4gICAgICAgICAgICBpZiAobmV3TG9jYWxlRGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9jYWxlID0gbmV3TG9jYWxlRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxhbmcgPSBkZXByZWNhdGUoXG4gICAgICAgICdtb21lbnQoKS5sYW5nKCkgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCwgdXNlIG1vbWVudCgpLmxvY2FsZURhdGEoKSB0byBnZXQgdGhlIGxhbmd1YWdlIGNvbmZpZ3VyYXRpb24uIFVzZSBtb21lbnQoKS5sb2NhbGUoKSB0byBjaGFuZ2UgbGFuZ3VhZ2VzLicsXG4gICAgICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgICB9XG5cbiAgICB2YXIgTVNfUEVSX1NFQ09ORCA9IDEwMDAsXG4gICAgICAgIE1TX1BFUl9NSU5VVEUgPSA2MCAqIE1TX1BFUl9TRUNPTkQsXG4gICAgICAgIE1TX1BFUl9IT1VSID0gNjAgKiBNU19QRVJfTUlOVVRFLFxuICAgICAgICBNU19QRVJfNDAwX1lFQVJTID0gKDM2NSAqIDQwMCArIDk3KSAqIDI0ICogTVNfUEVSX0hPVVI7XG5cbiAgICAvLyBhY3R1YWwgbW9kdWxvIC0gaGFuZGxlcyBuZWdhdGl2ZSBudW1iZXJzIChmb3IgZGF0ZXMgYmVmb3JlIDE5NzApOlxuICAgIGZ1bmN0aW9uIG1vZCQxKGRpdmlkZW5kLCBkaXZpc29yKSB7XG4gICAgICAgIHJldHVybiAoKGRpdmlkZW5kICUgZGl2aXNvcikgKyBkaXZpc29yKSAlIGRpdmlzb3I7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxTdGFydE9mRGF0ZSh5LCBtLCBkKSB7XG4gICAgICAgIC8vIHRoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxuICAgICAgICBpZiAoeSA8IDEwMCAmJiB5ID49IDApIHtcbiAgICAgICAgICAgIC8vIHByZXNlcnZlIGxlYXAgeWVhcnMgdXNpbmcgYSBmdWxsIDQwMCB5ZWFyIGN5Y2xlLCB0aGVuIHJlc2V0XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoeSArIDQwMCwgbSwgZCkgLSBNU19QRVJfNDAwX1lFQVJTO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHksIG0sIGQpLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHV0Y1N0YXJ0T2ZEYXRlKHksIG0sIGQpIHtcbiAgICAgICAgLy8gRGF0ZS5VVEMgcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XG4gICAgICAgIGlmICh5IDwgMTAwICYmIHkgPj0gMCkge1xuICAgICAgICAgICAgLy8gcHJlc2VydmUgbGVhcCB5ZWFycyB1c2luZyBhIGZ1bGwgNDAwIHllYXIgY3ljbGUsIHRoZW4gcmVzZXRcbiAgICAgICAgICAgIHJldHVybiBEYXRlLlVUQyh5ICsgNDAwLCBtLCBkKSAtIE1TX1BFUl80MDBfWUVBUlM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5VVEMoeSwgbSwgZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydE9mKHVuaXRzKSB7XG4gICAgICAgIHZhciB0aW1lLCBzdGFydE9mRGF0ZTtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgIGlmICh1bml0cyA9PT0gdW5kZWZpbmVkIHx8IHVuaXRzID09PSAnbWlsbGlzZWNvbmQnIHx8ICF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydE9mRGF0ZSA9IHRoaXMuX2lzVVRDID8gdXRjU3RhcnRPZkRhdGUgOiBsb2NhbFN0YXJ0T2ZEYXRlO1xuXG4gICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgMCwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdxdWFydGVyJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCkgLSAodGhpcy5tb250aCgpICUgMyksXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlKCkgLSB0aGlzLndlZWtkYXkoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdpc29XZWVrJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpIC0gKHRoaXMuaXNvV2Vla2RheSgpIC0gMSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCB0aGlzLmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSAtPSBtb2QkMShcbiAgICAgICAgICAgICAgICAgICAgdGltZSArICh0aGlzLl9pc1VUQyA/IDAgOiB0aGlzLnV0Y09mZnNldCgpICogTVNfUEVSX01JTlVURSksXG4gICAgICAgICAgICAgICAgICAgIE1TX1BFUl9IT1VSXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIHRpbWUgLT0gbW9kJDEodGltZSwgTVNfUEVSX01JTlVURSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLl9kLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICB0aW1lIC09IG1vZCQxKHRpbWUsIE1TX1BFUl9TRUNPTkQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZC5zZXRUaW1lKHRpbWUpO1xuICAgICAgICBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZE9mKHVuaXRzKSB7XG4gICAgICAgIHZhciB0aW1lLCBzdGFydE9mRGF0ZTtcbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgIGlmICh1bml0cyA9PT0gdW5kZWZpbmVkIHx8IHVuaXRzID09PSAnbWlsbGlzZWNvbmQnIHx8ICF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydE9mRGF0ZSA9IHRoaXMuX2lzVVRDID8gdXRjU3RhcnRPZkRhdGUgOiBsb2NhbFN0YXJ0T2ZEYXRlO1xuXG4gICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIHRpbWUgPSBzdGFydE9mRGF0ZSh0aGlzLnllYXIoKSArIDEsIDAsIDEpIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxuICAgICAgICAgICAgICAgIHRpbWUgPVxuICAgICAgICAgICAgICAgICAgICBzdGFydE9mRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueWVhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aCgpIC0gKHRoaXMubW9udGgoKSAlIDMpICsgMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHN0YXJ0T2ZEYXRlKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkgKyAxLCAxKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3ZWVrJzpcbiAgICAgICAgICAgICAgICB0aW1lID1cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRPZkRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXIoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGgoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSgpIC0gdGhpcy53ZWVrZGF5KCkgKyA3XG4gICAgICAgICAgICAgICAgICAgICkgLSAxO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgICAgICAgICAgICAgdGltZSA9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0T2ZEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGUoKSAtICh0aGlzLmlzb1dlZWtkYXkoKSAtIDEpICsgN1xuICAgICAgICAgICAgICAgICAgICApIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gc3RhcnRPZkRhdGUodGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgdGhpcy5kYXRlKCkgKyAxKSAtIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gdGhpcy5fZC52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgdGltZSArPVxuICAgICAgICAgICAgICAgICAgICBNU19QRVJfSE9VUiAtXG4gICAgICAgICAgICAgICAgICAgIG1vZCQxKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSArICh0aGlzLl9pc1VUQyA/IDAgOiB0aGlzLnV0Y09mZnNldCgpICogTVNfUEVSX01JTlVURSksXG4gICAgICAgICAgICAgICAgICAgICAgICBNU19QRVJfSE9VUlxuICAgICAgICAgICAgICAgICAgICApIC1cbiAgICAgICAgICAgICAgICAgICAgMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIHRpbWUgKz0gTVNfUEVSX01JTlVURSAtIG1vZCQxKHRpbWUsIE1TX1BFUl9NSU5VVEUpIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHRoaXMuX2QudmFsdWVPZigpO1xuICAgICAgICAgICAgICAgIHRpbWUgKz0gTVNfUEVSX1NFQ09ORCAtIG1vZCQxKHRpbWUsIE1TX1BFUl9TRUNPTkQpIC0gMTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2Quc2V0VGltZSh0aW1lKTtcbiAgICAgICAgaG9va3MudXBkYXRlT2Zmc2V0KHRoaXMsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWx1ZU9mKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZC52YWx1ZU9mKCkgLSAodGhpcy5fb2Zmc2V0IHx8IDApICogNjAwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5peCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkgLyAxMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0RhdGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9BcnJheSgpIHtcbiAgICAgICAgdmFyIG0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbS55ZWFyKCksXG4gICAgICAgICAgICBtLm1vbnRoKCksXG4gICAgICAgICAgICBtLmRhdGUoKSxcbiAgICAgICAgICAgIG0uaG91cigpLFxuICAgICAgICAgICAgbS5taW51dGUoKSxcbiAgICAgICAgICAgIG0uc2Vjb25kKCksXG4gICAgICAgICAgICBtLm1pbGxpc2Vjb25kKCksXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9PYmplY3QoKSB7XG4gICAgICAgIHZhciBtID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHllYXJzOiBtLnllYXIoKSxcbiAgICAgICAgICAgIG1vbnRoczogbS5tb250aCgpLFxuICAgICAgICAgICAgZGF0ZTogbS5kYXRlKCksXG4gICAgICAgICAgICBob3VyczogbS5ob3VycygpLFxuICAgICAgICAgICAgbWludXRlczogbS5taW51dGVzKCksXG4gICAgICAgICAgICBzZWNvbmRzOiBtLnNlY29uZHMoKSxcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kczogbS5taWxsaXNlY29uZHMoKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgICAgIC8vIG5ldyBEYXRlKE5hTikudG9KU09OKCkgPT09IG51bGxcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy50b0lTT1N0cmluZygpIDogbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1ZhbGlkJDIoKSB7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNpbmdGbGFncygpIHtcbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgZ2V0UGFyc2luZ0ZsYWdzKHRoaXMpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZhbGlkQXQoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJzaW5nRmxhZ3ModGhpcykub3ZlcmZsb3c7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRpb25EYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXQ6IHRoaXMuX2ksXG4gICAgICAgICAgICBmb3JtYXQ6IHRoaXMuX2YsXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgICAgIGlzVVRDOiB0aGlzLl9pc1VUQyxcbiAgICAgICAgICAgIHN0cmljdDogdGhpcy5fc3RyaWN0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFkZEZvcm1hdFRva2VuKCdOJywgMCwgMCwgJ2VyYUFiYnInKTtcbiAgICBhZGRGb3JtYXRUb2tlbignTk4nLCAwLCAwLCAnZXJhQWJicicpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdOTk4nLCAwLCAwLCAnZXJhQWJicicpO1xuICAgIGFkZEZvcm1hdFRva2VuKCdOTk5OJywgMCwgMCwgJ2VyYU5hbWUnKTtcbiAgICBhZGRGb3JtYXRUb2tlbignTk5OTk4nLCAwLCAwLCAnZXJhTmFycm93Jyk7XG5cbiAgICBhZGRGb3JtYXRUb2tlbigneScsIFsneScsIDFdLCAneW8nLCAnZXJhWWVhcicpO1xuICAgIGFkZEZvcm1hdFRva2VuKCd5JywgWyd5eScsIDJdLCAwLCAnZXJhWWVhcicpO1xuICAgIGFkZEZvcm1hdFRva2VuKCd5JywgWyd5eXknLCAzXSwgMCwgJ2VyYVllYXInKTtcbiAgICBhZGRGb3JtYXRUb2tlbigneScsIFsneXl5eScsIDRdLCAwLCAnZXJhWWVhcicpO1xuXG4gICAgYWRkUmVnZXhUb2tlbignTicsIG1hdGNoRXJhQWJicik7XG4gICAgYWRkUmVnZXhUb2tlbignTk4nLCBtYXRjaEVyYUFiYnIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ05OTicsIG1hdGNoRXJhQWJicik7XG4gICAgYWRkUmVnZXhUb2tlbignTk5OTicsIG1hdGNoRXJhTmFtZSk7XG4gICAgYWRkUmVnZXhUb2tlbignTk5OTk4nLCBtYXRjaEVyYU5hcnJvdyk7XG5cbiAgICBhZGRQYXJzZVRva2VuKFxuICAgICAgICBbJ04nLCAnTk4nLCAnTk5OJywgJ05OTk4nLCAnTk5OTk4nXSxcbiAgICAgICAgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnLCB0b2tlbikge1xuICAgICAgICAgICAgdmFyIGVyYSA9IGNvbmZpZy5fbG9jYWxlLmVyYXNQYXJzZShpbnB1dCwgdG9rZW4sIGNvbmZpZy5fc3RyaWN0KTtcbiAgICAgICAgICAgIGlmIChlcmEpIHtcbiAgICAgICAgICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lcmEgPSBlcmE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRFcmEgPSBpbnB1dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBhZGRSZWdleFRva2VuKCd5JywgbWF0Y2hVbnNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbigneXknLCBtYXRjaFVuc2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCd5eXknLCBtYXRjaFVuc2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCd5eXl5JywgbWF0Y2hVbnNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbigneW8nLCBtYXRjaEVyYVllYXJPcmRpbmFsKTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWyd5JywgJ3l5JywgJ3l5eScsICd5eXl5J10sIFlFQVIpO1xuICAgIGFkZFBhcnNlVG9rZW4oWyd5byddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgIHZhciBtYXRjaDtcbiAgICAgICAgaWYgKGNvbmZpZy5fbG9jYWxlLl9lcmFZZWFyT3JkaW5hbFJlZ2V4KSB7XG4gICAgICAgICAgICBtYXRjaCA9IGlucHV0Lm1hdGNoKGNvbmZpZy5fbG9jYWxlLl9lcmFZZWFyT3JkaW5hbFJlZ2V4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuX2xvY2FsZS5lcmFZZWFyT3JkaW5hbFBhcnNlKSB7XG4gICAgICAgICAgICBhcnJheVtZRUFSXSA9IGNvbmZpZy5fbG9jYWxlLmVyYVllYXJPcmRpbmFsUGFyc2UoaW5wdXQsIG1hdGNoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycmF5W1lFQVJdID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbG9jYWxlRXJhcyhtLCBmb3JtYXQpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLl9lcmFzIHx8IGdldExvY2FsZSgnZW4nKS5fZXJhcztcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBlcmFzW2ldLnNpbmNlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgICAgICAgICBkYXRlID0gaG9va3MoZXJhc1tpXS5zaW5jZSkuc3RhcnRPZignZGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVyYXNbaV0uc2luY2UgPSBkYXRlLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIGVyYXNbaV0udW50aWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgICAgICAgICBlcmFzW2ldLnVudGlsID0gK0luZmluaXR5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgICAgICAgICAgICAgIGRhdGUgPSBob29rcyhlcmFzW2ldLnVudGlsKS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG4gICAgICAgICAgICAgICAgICAgIGVyYXNbaV0udW50aWwgPSBkYXRlLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVyYXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9jYWxlRXJhc1BhcnNlKGVyYU5hbWUsIGZvcm1hdCwgc3RyaWN0KSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmVyYXMoKSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhYmJyLFxuICAgICAgICAgICAgbmFycm93O1xuICAgICAgICBlcmFOYW1lID0gZXJhTmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgbmFtZSA9IGVyYXNbaV0ubmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgYWJiciA9IGVyYXNbaV0uYWJici50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgbmFycm93ID0gZXJhc1tpXS5uYXJyb3cudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKHN0cmljdCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ04nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdOTic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ05OTic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWJiciA9PT0gZXJhTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTk5OTic6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gZXJhTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTk5OTk4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hcnJvdyA9PT0gZXJhTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChbbmFtZSwgYWJiciwgbmFycm93XS5pbmRleE9mKGVyYU5hbWUpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvY2FsZUVyYXNDb252ZXJ0WWVhcihlcmEsIHllYXIpIHtcbiAgICAgICAgdmFyIGRpciA9IGVyYS5zaW5jZSA8PSBlcmEudW50aWwgPyArMSA6IC0xO1xuICAgICAgICBpZiAoeWVhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gaG9va3MoZXJhLnNpbmNlKS55ZWFyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaG9va3MoZXJhLnNpbmNlKS55ZWFyKCkgKyAoeWVhciAtIGVyYS5vZmZzZXQpICogZGlyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXJhTmFtZSgpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgZXJhcyA9IHRoaXMubG9jYWxlRGF0YSgpLmVyYXMoKTtcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgICAgICB2YWwgPSB0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuXG4gICAgICAgICAgICBpZiAoZXJhc1tpXS5zaW5jZSA8PSB2YWwgJiYgdmFsIDw9IGVyYXNbaV0udW50aWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJhc1tpXS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVyYXNbaV0udW50aWwgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnNpbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0ubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFcmFOYXJyb3coKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgdmFsID0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcblxuICAgICAgICAgICAgaWYgKGVyYXNbaV0uc2luY2UgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0ubmFycm93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVyYXNbaV0udW50aWwgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnNpbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0ubmFycm93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEVyYUFiYnIoKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIGVyYXMgPSB0aGlzLmxvY2FsZURhdGEoKS5lcmFzKCk7XG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgLy8gdHJ1bmNhdGUgdGltZVxuICAgICAgICAgICAgdmFsID0gdGhpcy5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLnZhbHVlT2YoKTtcblxuICAgICAgICAgICAgaWYgKGVyYXNbaV0uc2luY2UgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnVudGlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyYXNbaV0uYWJicjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlcmFzW2ldLmFiYnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXJhWWVhcigpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgZGlyLFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgZXJhcyA9IHRoaXMubG9jYWxlRGF0YSgpLmVyYXMoKTtcbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGVyYXMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgICBkaXIgPSBlcmFzW2ldLnNpbmNlIDw9IGVyYXNbaV0udW50aWwgPyArMSA6IC0xO1xuXG4gICAgICAgICAgICAvLyB0cnVuY2F0ZSB0aW1lXG4gICAgICAgICAgICB2YWwgPSB0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykudmFsdWVPZigpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGVyYXNbaV0uc2luY2UgPD0gdmFsICYmIHZhbCA8PSBlcmFzW2ldLnVudGlsKSB8fFxuICAgICAgICAgICAgICAgIChlcmFzW2ldLnVudGlsIDw9IHZhbCAmJiB2YWwgPD0gZXJhc1tpXS5zaW5jZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLnllYXIoKSAtIGhvb2tzKGVyYXNbaV0uc2luY2UpLnllYXIoKSkgKiBkaXIgK1xuICAgICAgICAgICAgICAgICAgICBlcmFzW2ldLm9mZnNldFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy55ZWFyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXJhc05hbWVSZWdleChpc1N0cmljdCkge1xuICAgICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19lcmFzTmFtZVJlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVFcmFzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNTdHJpY3QgPyB0aGlzLl9lcmFzTmFtZVJlZ2V4IDogdGhpcy5fZXJhc1JlZ2V4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVyYXNBYmJyUmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfZXJhc0FiYnJSZWdleCcpKSB7XG4gICAgICAgICAgICBjb21wdXRlRXJhc1BhcnNlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzU3RyaWN0ID8gdGhpcy5fZXJhc0FiYnJSZWdleCA6IHRoaXMuX2VyYXNSZWdleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcmFzTmFycm93UmVnZXgoaXNTdHJpY3QpIHtcbiAgICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfZXJhc05hcnJvd1JlZ2V4JykpIHtcbiAgICAgICAgICAgIGNvbXB1dGVFcmFzUGFyc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNTdHJpY3QgPyB0aGlzLl9lcmFzTmFycm93UmVnZXggOiB0aGlzLl9lcmFzUmVnZXg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWF0Y2hFcmFBYmJyKGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5lcmFzQWJiclJlZ2V4KGlzU3RyaWN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXRjaEVyYU5hbWUoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmVyYXNOYW1lUmVnZXgoaXNTdHJpY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoRXJhTmFycm93KGlzU3RyaWN0LCBsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5lcmFzTmFycm93UmVnZXgoaXNTdHJpY3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hdGNoRXJhWWVhck9yZGluYWwoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLl9lcmFZZWFyT3JkaW5hbFJlZ2V4IHx8IG1hdGNoVW5zaWduZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZUVyYXNQYXJzZSgpIHtcbiAgICAgICAgdmFyIGFiYnJQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIG5hbWVQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIG5hcnJvd1BpZWNlcyA9IFtdLFxuICAgICAgICAgICAgbWl4ZWRQaWVjZXMgPSBbXSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgZXJhcyA9IHRoaXMuZXJhcygpO1xuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBlcmFzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgbmFtZVBpZWNlcy5wdXNoKHJlZ2V4RXNjYXBlKGVyYXNbaV0ubmFtZSkpO1xuICAgICAgICAgICAgYWJiclBpZWNlcy5wdXNoKHJlZ2V4RXNjYXBlKGVyYXNbaV0uYWJicikpO1xuICAgICAgICAgICAgbmFycm93UGllY2VzLnB1c2gocmVnZXhFc2NhcGUoZXJhc1tpXS5uYXJyb3cpKTtcblxuICAgICAgICAgICAgbWl4ZWRQaWVjZXMucHVzaChyZWdleEVzY2FwZShlcmFzW2ldLm5hbWUpKTtcbiAgICAgICAgICAgIG1peGVkUGllY2VzLnB1c2gocmVnZXhFc2NhcGUoZXJhc1tpXS5hYmJyKSk7XG4gICAgICAgICAgICBtaXhlZFBpZWNlcy5wdXNoKHJlZ2V4RXNjYXBlKGVyYXNbaV0ubmFycm93KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lcmFzUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBtaXhlZFBpZWNlcy5qb2luKCd8JykgKyAnKScsICdpJyk7XG4gICAgICAgIHRoaXMuX2VyYXNOYW1lUmVnZXggPSBuZXcgUmVnRXhwKCdeKCcgKyBuYW1lUGllY2VzLmpvaW4oJ3wnKSArICcpJywgJ2knKTtcbiAgICAgICAgdGhpcy5fZXJhc0FiYnJSZWdleCA9IG5ldyBSZWdFeHAoJ14oJyArIGFiYnJQaWVjZXMuam9pbignfCcpICsgJyknLCAnaScpO1xuICAgICAgICB0aGlzLl9lcmFzTmFycm93UmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAgICAgJ14oJyArIG5hcnJvd1BpZWNlcy5qb2luKCd8JykgKyAnKScsXG4gICAgICAgICAgICAnaSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbigwLCBbJ2dnJywgMl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2Vla1llYXIoKSAlIDEwMDtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnR0cnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpICUgMTAwO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gYWRkV2Vla1llYXJGb3JtYXRUb2tlbih0b2tlbiwgZ2V0dGVyKSB7XG4gICAgICAgIGFkZEZvcm1hdFRva2VuKDAsIFt0b2tlbiwgdG9rZW4ubGVuZ3RoXSwgMCwgZ2V0dGVyKTtcbiAgICB9XG5cbiAgICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnJywgJ3dlZWtZZWFyJyk7XG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZ2cnLCAnd2Vla1llYXInKTtcbiAgICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHJywgJ2lzb1dlZWtZZWFyJyk7XG4gICAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHR0cnLCAnaXNvV2Vla1llYXInKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnd2Vla1llYXInLCAnZ2cnKTtcbiAgICBhZGRVbml0QWxpYXMoJ2lzb1dlZWtZZWFyJywgJ0dHJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCd3ZWVrWWVhcicsIDEpO1xuICAgIGFkZFVuaXRQcmlvcml0eSgnaXNvV2Vla1llYXInLCAxKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ0cnLCBtYXRjaFNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbignZycsIG1hdGNoU2lnbmVkKTtcbiAgICBhZGRSZWdleFRva2VuKCdHRycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdnZycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcbiAgICBhZGRSZWdleFRva2VuKCdHR0dHJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ2dnZ2cnLCBtYXRjaDF0bzQsIG1hdGNoNCk7XG4gICAgYWRkUmVnZXhUb2tlbignR0dHR0cnLCBtYXRjaDF0bzYsIG1hdGNoNik7XG4gICAgYWRkUmVnZXhUb2tlbignZ2dnZ2cnLCBtYXRjaDF0bzYsIG1hdGNoNik7XG5cbiAgICBhZGRXZWVrUGFyc2VUb2tlbihcbiAgICAgICAgWydnZ2dnJywgJ2dnZ2dnJywgJ0dHR0cnLCAnR0dHR0cnXSxcbiAgICAgICAgZnVuY3Rpb24gKGlucHV0LCB3ZWVrLCBjb25maWcsIHRva2VuKSB7XG4gICAgICAgICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAyKV0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgYWRkV2Vla1BhcnNlVG9rZW4oWydnZycsICdHRyddLCBmdW5jdGlvbiAoaW5wdXQsIHdlZWssIGNvbmZpZywgdG9rZW4pIHtcbiAgICAgICAgd2Vla1t0b2tlbl0gPSBob29rcy5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG4gICAgfSk7XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRTZXRXZWVrWWVhcihpbnB1dCkge1xuICAgICAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIHRoaXMud2VlaygpLFxuICAgICAgICAgICAgdGhpcy53ZWVrZGF5KCksXG4gICAgICAgICAgICB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3csXG4gICAgICAgICAgICB0aGlzLmxvY2FsZURhdGEoKS5fd2Vlay5kb3lcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZXRJU09XZWVrWWVhcihpbnB1dCkge1xuICAgICAgICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIHRoaXMuaXNvV2VlaygpLFxuICAgICAgICAgICAgdGhpcy5pc29XZWVrZGF5KCksXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgNFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldElTT1dlZWtzSW5ZZWFyKCkge1xuICAgICAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIDEsIDQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldElTT1dlZWtzSW5JU09XZWVrWWVhcigpIHtcbiAgICAgICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMuaXNvV2Vla1llYXIoKSwgMSwgNCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V2Vla3NJblllYXIoKSB7XG4gICAgICAgIHZhciB3ZWVrSW5mbyA9IHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrO1xuICAgICAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy55ZWFyKCksIHdlZWtJbmZvLmRvdywgd2Vla0luZm8uZG95KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXZWVrc0luV2Vla1llYXIoKSB7XG4gICAgICAgIHZhciB3ZWVrSW5mbyA9IHRoaXMubG9jYWxlRGF0YSgpLl93ZWVrO1xuICAgICAgICByZXR1cm4gd2Vla3NJblllYXIodGhpcy53ZWVrWWVhcigpLCB3ZWVrSW5mby5kb3csIHdlZWtJbmZvLmRveSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXJIZWxwZXIoaW5wdXQsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgICAgIHZhciB3ZWVrc1RhcmdldDtcbiAgICAgICAgaWYgKGlucHV0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKHRoaXMsIGRvdywgZG95KS55ZWFyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2Vla3NUYXJnZXQgPSB3ZWVrc0luWWVhcihpbnB1dCwgZG93LCBkb3kpO1xuICAgICAgICAgICAgaWYgKHdlZWsgPiB3ZWVrc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHdlZWsgPSB3ZWVrc1RhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZXRXZWVrQWxsLmNhbGwodGhpcywgaW5wdXQsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFdlZWtBbGwod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KSB7XG4gICAgICAgIHZhciBkYXlPZlllYXJEYXRhID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSksXG4gICAgICAgICAgICBkYXRlID0gY3JlYXRlVVRDRGF0ZShkYXlPZlllYXJEYXRhLnllYXIsIDAsIGRheU9mWWVhckRhdGEuZGF5T2ZZZWFyKTtcblxuICAgICAgICB0aGlzLnllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpKTtcbiAgICAgICAgdGhpcy5tb250aChkYXRlLmdldFVUQ01vbnRoKCkpO1xuICAgICAgICB0aGlzLmRhdGUoZGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignUScsIDAsICdRbycsICdxdWFydGVyJyk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ3F1YXJ0ZXInLCAnUScpO1xuXG4gICAgLy8gUFJJT1JJVFlcblxuICAgIGFkZFVuaXRQcmlvcml0eSgncXVhcnRlcicsIDcpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignUScsIG1hdGNoMSk7XG4gICAgYWRkUGFyc2VUb2tlbignUScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXkpIHtcbiAgICAgICAgYXJyYXlbTU9OVEhdID0gKHRvSW50KGlucHV0KSAtIDEpICogMztcbiAgICB9KTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIGZ1bmN0aW9uIGdldFNldFF1YXJ0ZXIoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGxcbiAgICAgICAgICAgID8gTWF0aC5jZWlsKCh0aGlzLm1vbnRoKCkgKyAxKSAvIDMpXG4gICAgICAgICAgICA6IHRoaXMubW9udGgoKGlucHV0IC0gMSkgKiAzICsgKHRoaXMubW9udGgoKSAlIDMpKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignRCcsIFsnREQnLCAyXSwgJ0RvJywgJ2RhdGUnKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnZGF0ZScsICdEJyk7XG5cbiAgICAvLyBQUklPUklUWVxuICAgIGFkZFVuaXRQcmlvcml0eSgnZGF0ZScsIDkpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignRCcsIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignREQnLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignRG8nLCBmdW5jdGlvbiAoaXNTdHJpY3QsIGxvY2FsZSkge1xuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgXCJvcmRpbmFsUGFyc2VcIiBmYWxsYmFjayBpbiBuZXh0IG1ham9yIHJlbGVhc2UuXG4gICAgICAgIHJldHVybiBpc1N0cmljdFxuICAgICAgICAgICAgPyBsb2NhbGUuX2RheU9mTW9udGhPcmRpbmFsUGFyc2UgfHwgbG9jYWxlLl9vcmRpbmFsUGFyc2VcbiAgICAgICAgICAgIDogbG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlTGVuaWVudDtcbiAgICB9KTtcblxuICAgIGFkZFBhcnNlVG9rZW4oWydEJywgJ0REJ10sIERBVEUpO1xuICAgIGFkZFBhcnNlVG9rZW4oJ0RvJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSkge1xuICAgICAgICBhcnJheVtEQVRFXSA9IHRvSW50KGlucHV0Lm1hdGNoKG1hdGNoMXRvMilbMF0pO1xuICAgIH0pO1xuXG4gICAgLy8gTU9NRU5UU1xuXG4gICAgdmFyIGdldFNldERheU9mTW9udGggPSBtYWtlR2V0U2V0KCdEYXRlJywgdHJ1ZSk7XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignREREJywgWydEREREJywgM10sICdERERvJywgJ2RheU9mWWVhcicpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdkYXlPZlllYXInLCAnREREJyk7XG5cbiAgICAvLyBQUklPUklUWVxuICAgIGFkZFVuaXRQcmlvcml0eSgnZGF5T2ZZZWFyJywgNCk7XG5cbiAgICAvLyBQQVJTSU5HXG5cbiAgICBhZGRSZWdleFRva2VuKCdEREQnLCBtYXRjaDF0bzMpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ0REREQnLCBtYXRjaDMpO1xuICAgIGFkZFBhcnNlVG9rZW4oWydEREQnLCAnRERERCddLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcbiAgICAgICAgY29uZmlnLl9kYXlPZlllYXIgPSB0b0ludChpbnB1dCk7XG4gICAgfSk7XG5cbiAgICAvLyBIRUxQRVJTXG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRTZXREYXlPZlllYXIoaW5wdXQpIHtcbiAgICAgICAgdmFyIGRheU9mWWVhciA9XG4gICAgICAgICAgICBNYXRoLnJvdW5kKFxuICAgICAgICAgICAgICAgICh0aGlzLmNsb25lKCkuc3RhcnRPZignZGF5JykgLSB0aGlzLmNsb25lKCkuc3RhcnRPZigneWVhcicpKSAvIDg2NGU1XG4gICAgICAgICAgICApICsgMTtcbiAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyBkYXlPZlllYXIgOiB0aGlzLmFkZChpbnB1dCAtIGRheU9mWWVhciwgJ2QnKTtcbiAgICB9XG5cbiAgICAvLyBGT1JNQVRUSU5HXG5cbiAgICBhZGRGb3JtYXRUb2tlbignbScsIFsnbW0nLCAyXSwgMCwgJ21pbnV0ZScpO1xuXG4gICAgLy8gQUxJQVNFU1xuXG4gICAgYWRkVW5pdEFsaWFzKCdtaW51dGUnLCAnbScpO1xuXG4gICAgLy8gUFJJT1JJVFlcblxuICAgIGFkZFVuaXRQcmlvcml0eSgnbWludXRlJywgMTQpO1xuXG4gICAgLy8gUEFSU0lOR1xuXG4gICAgYWRkUmVnZXhUb2tlbignbScsIG1hdGNoMXRvMik7XG4gICAgYWRkUmVnZXhUb2tlbignbW0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XG4gICAgYWRkUGFyc2VUb2tlbihbJ20nLCAnbW0nXSwgTUlOVVRFKTtcblxuICAgIC8vIE1PTUVOVFNcblxuICAgIHZhciBnZXRTZXRNaW51dGUgPSBtYWtlR2V0U2V0KCdNaW51dGVzJywgZmFsc2UpO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ3MnLCBbJ3NzJywgMl0sIDAsICdzZWNvbmQnKTtcblxuICAgIC8vIEFMSUFTRVNcblxuICAgIGFkZFVuaXRBbGlhcygnc2Vjb25kJywgJ3MnKTtcblxuICAgIC8vIFBSSU9SSVRZXG5cbiAgICBhZGRVbml0UHJpb3JpdHkoJ3NlY29uZCcsIDE1KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ3MnLCBtYXRjaDF0bzIpO1xuICAgIGFkZFJlZ2V4VG9rZW4oJ3NzJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xuICAgIGFkZFBhcnNlVG9rZW4oWydzJywgJ3NzJ10sIFNFQ09ORCk7XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICB2YXIgZ2V0U2V0U2Vjb25kID0gbWFrZUdldFNldCgnU2Vjb25kcycsIGZhbHNlKTtcblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCdTJywgMCwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTAwKTtcbiAgICB9KTtcblxuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1MnLCAyXSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gfn4odGhpcy5taWxsaXNlY29uZCgpIC8gMTApO1xuICAgIH0pO1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1MnLCAzXSwgMCwgJ21pbGxpc2Vjb25kJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTJywgNF0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwO1xuICAgIH0pO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1MnLCA1XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwO1xuICAgIH0pO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTJywgNl0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDA7XG4gICAgfSk7XG4gICAgYWRkRm9ybWF0VG9rZW4oMCwgWydTU1NTU1NTJywgN10sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwO1xuICAgIH0pO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTU1MnLCA4XSwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZCgpICogMTAwMDAwO1xuICAgIH0pO1xuICAgIGFkZEZvcm1hdFRva2VuKDAsIFsnU1NTU1NTU1NTJywgOV0sIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmQoKSAqIDEwMDAwMDA7XG4gICAgfSk7XG5cbiAgICAvLyBBTElBU0VTXG5cbiAgICBhZGRVbml0QWxpYXMoJ21pbGxpc2Vjb25kJywgJ21zJyk7XG5cbiAgICAvLyBQUklPUklUWVxuXG4gICAgYWRkVW5pdFByaW9yaXR5KCdtaWxsaXNlY29uZCcsIDE2KTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ1MnLCBtYXRjaDF0bzMsIG1hdGNoMSk7XG4gICAgYWRkUmVnZXhUb2tlbignU1MnLCBtYXRjaDF0bzMsIG1hdGNoMik7XG4gICAgYWRkUmVnZXhUb2tlbignU1NTJywgbWF0Y2gxdG8zLCBtYXRjaDMpO1xuXG4gICAgdmFyIHRva2VuLCBnZXRTZXRNaWxsaXNlY29uZDtcbiAgICBmb3IgKHRva2VuID0gJ1NTU1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XG4gICAgICAgIGFkZFJlZ2V4VG9rZW4odG9rZW4sIG1hdGNoVW5zaWduZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTXMoaW5wdXQsIGFycmF5KSB7XG4gICAgICAgIGFycmF5W01JTExJU0VDT05EXSA9IHRvSW50KCgnMC4nICsgaW5wdXQpICogMTAwMCk7XG4gICAgfVxuXG4gICAgZm9yICh0b2tlbiA9ICdTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xuICAgICAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBwYXJzZU1zKTtcbiAgICB9XG5cbiAgICBnZXRTZXRNaWxsaXNlY29uZCA9IG1ha2VHZXRTZXQoJ01pbGxpc2Vjb25kcycsIGZhbHNlKTtcblxuICAgIC8vIEZPUk1BVFRJTkdcblxuICAgIGFkZEZvcm1hdFRva2VuKCd6JywgMCwgMCwgJ3pvbmVBYmJyJyk7XG4gICAgYWRkRm9ybWF0VG9rZW4oJ3p6JywgMCwgMCwgJ3pvbmVOYW1lJyk7XG5cbiAgICAvLyBNT01FTlRTXG5cbiAgICBmdW5jdGlvbiBnZXRab25lQWJicigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ1VUQycgOiAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRab25lTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gJ0Nvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lJyA6ICcnO1xuICAgIH1cblxuICAgIHZhciBwcm90byA9IE1vbWVudC5wcm90b3R5cGU7XG5cbiAgICBwcm90by5hZGQgPSBhZGQ7XG4gICAgcHJvdG8uY2FsZW5kYXIgPSBjYWxlbmRhciQxO1xuICAgIHByb3RvLmNsb25lID0gY2xvbmU7XG4gICAgcHJvdG8uZGlmZiA9IGRpZmY7XG4gICAgcHJvdG8uZW5kT2YgPSBlbmRPZjtcbiAgICBwcm90by5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgcHJvdG8uZnJvbSA9IGZyb207XG4gICAgcHJvdG8uZnJvbU5vdyA9IGZyb21Ob3c7XG4gICAgcHJvdG8udG8gPSB0bztcbiAgICBwcm90by50b05vdyA9IHRvTm93O1xuICAgIHByb3RvLmdldCA9IHN0cmluZ0dldDtcbiAgICBwcm90by5pbnZhbGlkQXQgPSBpbnZhbGlkQXQ7XG4gICAgcHJvdG8uaXNBZnRlciA9IGlzQWZ0ZXI7XG4gICAgcHJvdG8uaXNCZWZvcmUgPSBpc0JlZm9yZTtcbiAgICBwcm90by5pc0JldHdlZW4gPSBpc0JldHdlZW47XG4gICAgcHJvdG8uaXNTYW1lID0gaXNTYW1lO1xuICAgIHByb3RvLmlzU2FtZU9yQWZ0ZXIgPSBpc1NhbWVPckFmdGVyO1xuICAgIHByb3RvLmlzU2FtZU9yQmVmb3JlID0gaXNTYW1lT3JCZWZvcmU7XG4gICAgcHJvdG8uaXNWYWxpZCA9IGlzVmFsaWQkMjtcbiAgICBwcm90by5sYW5nID0gbGFuZztcbiAgICBwcm90by5sb2NhbGUgPSBsb2NhbGU7XG4gICAgcHJvdG8ubG9jYWxlRGF0YSA9IGxvY2FsZURhdGE7XG4gICAgcHJvdG8ubWF4ID0gcHJvdG90eXBlTWF4O1xuICAgIHByb3RvLm1pbiA9IHByb3RvdHlwZU1pbjtcbiAgICBwcm90by5wYXJzaW5nRmxhZ3MgPSBwYXJzaW5nRmxhZ3M7XG4gICAgcHJvdG8uc2V0ID0gc3RyaW5nU2V0O1xuICAgIHByb3RvLnN0YXJ0T2YgPSBzdGFydE9mO1xuICAgIHByb3RvLnN1YnRyYWN0ID0gc3VidHJhY3Q7XG4gICAgcHJvdG8udG9BcnJheSA9IHRvQXJyYXk7XG4gICAgcHJvdG8udG9PYmplY3QgPSB0b09iamVjdDtcbiAgICBwcm90by50b0RhdGUgPSB0b0RhdGU7XG4gICAgcHJvdG8udG9JU09TdHJpbmcgPSB0b0lTT1N0cmluZztcbiAgICBwcm90by5pbnNwZWN0ID0gaW5zcGVjdDtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLmZvciAhPSBudWxsKSB7XG4gICAgICAgIHByb3RvW1N5bWJvbC5mb3IoJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJyldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdNb21lbnQ8JyArIHRoaXMuZm9ybWF0KCkgKyAnPic7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RvLnRvSlNPTiA9IHRvSlNPTjtcbiAgICBwcm90by50b1N0cmluZyA9IHRvU3RyaW5nO1xuICAgIHByb3RvLnVuaXggPSB1bml4O1xuICAgIHByb3RvLnZhbHVlT2YgPSB2YWx1ZU9mO1xuICAgIHByb3RvLmNyZWF0aW9uRGF0YSA9IGNyZWF0aW9uRGF0YTtcbiAgICBwcm90by5lcmFOYW1lID0gZ2V0RXJhTmFtZTtcbiAgICBwcm90by5lcmFOYXJyb3cgPSBnZXRFcmFOYXJyb3c7XG4gICAgcHJvdG8uZXJhQWJiciA9IGdldEVyYUFiYnI7XG4gICAgcHJvdG8uZXJhWWVhciA9IGdldEVyYVllYXI7XG4gICAgcHJvdG8ueWVhciA9IGdldFNldFllYXI7XG4gICAgcHJvdG8uaXNMZWFwWWVhciA9IGdldElzTGVhcFllYXI7XG4gICAgcHJvdG8ud2Vla1llYXIgPSBnZXRTZXRXZWVrWWVhcjtcbiAgICBwcm90by5pc29XZWVrWWVhciA9IGdldFNldElTT1dlZWtZZWFyO1xuICAgIHByb3RvLnF1YXJ0ZXIgPSBwcm90by5xdWFydGVycyA9IGdldFNldFF1YXJ0ZXI7XG4gICAgcHJvdG8ubW9udGggPSBnZXRTZXRNb250aDtcbiAgICBwcm90by5kYXlzSW5Nb250aCA9IGdldERheXNJbk1vbnRoO1xuICAgIHByb3RvLndlZWsgPSBwcm90by53ZWVrcyA9IGdldFNldFdlZWs7XG4gICAgcHJvdG8uaXNvV2VlayA9IHByb3RvLmlzb1dlZWtzID0gZ2V0U2V0SVNPV2VlaztcbiAgICBwcm90by53ZWVrc0luWWVhciA9IGdldFdlZWtzSW5ZZWFyO1xuICAgIHByb3RvLndlZWtzSW5XZWVrWWVhciA9IGdldFdlZWtzSW5XZWVrWWVhcjtcbiAgICBwcm90by5pc29XZWVrc0luWWVhciA9IGdldElTT1dlZWtzSW5ZZWFyO1xuICAgIHByb3RvLmlzb1dlZWtzSW5JU09XZWVrWWVhciA9IGdldElTT1dlZWtzSW5JU09XZWVrWWVhcjtcbiAgICBwcm90by5kYXRlID0gZ2V0U2V0RGF5T2ZNb250aDtcbiAgICBwcm90by5kYXkgPSBwcm90by5kYXlzID0gZ2V0U2V0RGF5T2ZXZWVrO1xuICAgIHByb3RvLndlZWtkYXkgPSBnZXRTZXRMb2NhbGVEYXlPZldlZWs7XG4gICAgcHJvdG8uaXNvV2Vla2RheSA9IGdldFNldElTT0RheU9mV2VlaztcbiAgICBwcm90by5kYXlPZlllYXIgPSBnZXRTZXREYXlPZlllYXI7XG4gICAgcHJvdG8uaG91ciA9IHByb3RvLmhvdXJzID0gZ2V0U2V0SG91cjtcbiAgICBwcm90by5taW51dGUgPSBwcm90by5taW51dGVzID0gZ2V0U2V0TWludXRlO1xuICAgIHByb3RvLnNlY29uZCA9IHByb3RvLnNlY29uZHMgPSBnZXRTZXRTZWNvbmQ7XG4gICAgcHJvdG8ubWlsbGlzZWNvbmQgPSBwcm90by5taWxsaXNlY29uZHMgPSBnZXRTZXRNaWxsaXNlY29uZDtcbiAgICBwcm90by51dGNPZmZzZXQgPSBnZXRTZXRPZmZzZXQ7XG4gICAgcHJvdG8udXRjID0gc2V0T2Zmc2V0VG9VVEM7XG4gICAgcHJvdG8ubG9jYWwgPSBzZXRPZmZzZXRUb0xvY2FsO1xuICAgIHByb3RvLnBhcnNlWm9uZSA9IHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0O1xuICAgIHByb3RvLmhhc0FsaWduZWRIb3VyT2Zmc2V0ID0gaGFzQWxpZ25lZEhvdXJPZmZzZXQ7XG4gICAgcHJvdG8uaXNEU1QgPSBpc0RheWxpZ2h0U2F2aW5nVGltZTtcbiAgICBwcm90by5pc0xvY2FsID0gaXNMb2NhbDtcbiAgICBwcm90by5pc1V0Y09mZnNldCA9IGlzVXRjT2Zmc2V0O1xuICAgIHByb3RvLmlzVXRjID0gaXNVdGM7XG4gICAgcHJvdG8uaXNVVEMgPSBpc1V0YztcbiAgICBwcm90by56b25lQWJiciA9IGdldFpvbmVBYmJyO1xuICAgIHByb3RvLnpvbmVOYW1lID0gZ2V0Wm9uZU5hbWU7XG4gICAgcHJvdG8uZGF0ZXMgPSBkZXByZWNhdGUoXG4gICAgICAgICdkYXRlcyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgZGF0ZSBpbnN0ZWFkLicsXG4gICAgICAgIGdldFNldERheU9mTW9udGhcbiAgICApO1xuICAgIHByb3RvLm1vbnRocyA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ21vbnRocyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgbW9udGggaW5zdGVhZCcsXG4gICAgICAgIGdldFNldE1vbnRoXG4gICAgKTtcbiAgICBwcm90by55ZWFycyA9IGRlcHJlY2F0ZShcbiAgICAgICAgJ3llYXJzIGFjY2Vzc29yIGlzIGRlcHJlY2F0ZWQuIFVzZSB5ZWFyIGluc3RlYWQnLFxuICAgICAgICBnZXRTZXRZZWFyXG4gICAgKTtcbiAgICBwcm90by56b25lID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9tZW50KCkuem9uZSBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50KCkudXRjT2Zmc2V0IGluc3RlYWQuIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3Mvem9uZS8nLFxuICAgICAgICBnZXRTZXRab25lXG4gICAgKTtcbiAgICBwcm90by5pc0RTVFNoaWZ0ZWQgPSBkZXByZWNhdGUoXG4gICAgICAgICdpc0RTVFNoaWZ0ZWQgaXMgZGVwcmVjYXRlZC4gU2VlIGh0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvZHN0LXNoaWZ0ZWQvIGZvciBtb3JlIGluZm9ybWF0aW9uJyxcbiAgICAgICAgaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVuaXgoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUxvY2FsKGlucHV0ICogMTAwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW5ab25lKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlTG9jYWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5wYXJzZVpvbmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVQYXJzZVBvc3RGb3JtYXQoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvJDEgPSBMb2NhbGUucHJvdG90eXBlO1xuXG4gICAgcHJvdG8kMS5jYWxlbmRhciA9IGNhbGVuZGFyO1xuICAgIHByb3RvJDEubG9uZ0RhdGVGb3JtYXQgPSBsb25nRGF0ZUZvcm1hdDtcbiAgICBwcm90byQxLmludmFsaWREYXRlID0gaW52YWxpZERhdGU7XG4gICAgcHJvdG8kMS5vcmRpbmFsID0gb3JkaW5hbDtcbiAgICBwcm90byQxLnByZXBhcnNlID0gcHJlUGFyc2VQb3N0Rm9ybWF0O1xuICAgIHByb3RvJDEucG9zdGZvcm1hdCA9IHByZVBhcnNlUG9zdEZvcm1hdDtcbiAgICBwcm90byQxLnJlbGF0aXZlVGltZSA9IHJlbGF0aXZlVGltZTtcbiAgICBwcm90byQxLnBhc3RGdXR1cmUgPSBwYXN0RnV0dXJlO1xuICAgIHByb3RvJDEuc2V0ID0gc2V0O1xuICAgIHByb3RvJDEuZXJhcyA9IGxvY2FsZUVyYXM7XG4gICAgcHJvdG8kMS5lcmFzUGFyc2UgPSBsb2NhbGVFcmFzUGFyc2U7XG4gICAgcHJvdG8kMS5lcmFzQ29udmVydFllYXIgPSBsb2NhbGVFcmFzQ29udmVydFllYXI7XG4gICAgcHJvdG8kMS5lcmFzQWJiclJlZ2V4ID0gZXJhc0FiYnJSZWdleDtcbiAgICBwcm90byQxLmVyYXNOYW1lUmVnZXggPSBlcmFzTmFtZVJlZ2V4O1xuICAgIHByb3RvJDEuZXJhc05hcnJvd1JlZ2V4ID0gZXJhc05hcnJvd1JlZ2V4O1xuXG4gICAgcHJvdG8kMS5tb250aHMgPSBsb2NhbGVNb250aHM7XG4gICAgcHJvdG8kMS5tb250aHNTaG9ydCA9IGxvY2FsZU1vbnRoc1Nob3J0O1xuICAgIHByb3RvJDEubW9udGhzUGFyc2UgPSBsb2NhbGVNb250aHNQYXJzZTtcbiAgICBwcm90byQxLm1vbnRoc1JlZ2V4ID0gbW9udGhzUmVnZXg7XG4gICAgcHJvdG8kMS5tb250aHNTaG9ydFJlZ2V4ID0gbW9udGhzU2hvcnRSZWdleDtcbiAgICBwcm90byQxLndlZWsgPSBsb2NhbGVXZWVrO1xuICAgIHByb3RvJDEuZmlyc3REYXlPZlllYXIgPSBsb2NhbGVGaXJzdERheU9mWWVhcjtcbiAgICBwcm90byQxLmZpcnN0RGF5T2ZXZWVrID0gbG9jYWxlRmlyc3REYXlPZldlZWs7XG5cbiAgICBwcm90byQxLndlZWtkYXlzID0gbG9jYWxlV2Vla2RheXM7XG4gICAgcHJvdG8kMS53ZWVrZGF5c01pbiA9IGxvY2FsZVdlZWtkYXlzTWluO1xuICAgIHByb3RvJDEud2Vla2RheXNTaG9ydCA9IGxvY2FsZVdlZWtkYXlzU2hvcnQ7XG4gICAgcHJvdG8kMS53ZWVrZGF5c1BhcnNlID0gbG9jYWxlV2Vla2RheXNQYXJzZTtcblxuICAgIHByb3RvJDEud2Vla2RheXNSZWdleCA9IHdlZWtkYXlzUmVnZXg7XG4gICAgcHJvdG8kMS53ZWVrZGF5c1Nob3J0UmVnZXggPSB3ZWVrZGF5c1Nob3J0UmVnZXg7XG4gICAgcHJvdG8kMS53ZWVrZGF5c01pblJlZ2V4ID0gd2Vla2RheXNNaW5SZWdleDtcblxuICAgIHByb3RvJDEuaXNQTSA9IGxvY2FsZUlzUE07XG4gICAgcHJvdG8kMS5tZXJpZGllbSA9IGxvY2FsZU1lcmlkaWVtO1xuXG4gICAgZnVuY3Rpb24gZ2V0JDEoZm9ybWF0LCBpbmRleCwgZmllbGQsIHNldHRlcikge1xuICAgICAgICB2YXIgbG9jYWxlID0gZ2V0TG9jYWxlKCksXG4gICAgICAgICAgICB1dGMgPSBjcmVhdGVVVEMoKS5zZXQoc2V0dGVyLCBpbmRleCk7XG4gICAgICAgIHJldHVybiBsb2NhbGVbZmllbGRdKHV0YywgZm9ybWF0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCBmaWVsZCkge1xuICAgICAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICBmb3JtYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXQkMShmb3JtYXQsIGluZGV4LCBmaWVsZCwgJ21vbnRoJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIG91dCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgb3V0W2ldID0gZ2V0JDEoZm9ybWF0LCBpLCBmaWVsZCwgJ21vbnRoJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICAvLyAoKVxuICAgIC8vICg1KVxuICAgIC8vIChmbXQsIDUpXG4gICAgLy8gKGZtdClcbiAgICAvLyAodHJ1ZSlcbiAgICAvLyAodHJ1ZSwgNSlcbiAgICAvLyAodHJ1ZSwgZm10LCA1KVxuICAgIC8vICh0cnVlLCBmbXQpXG4gICAgZnVuY3Rpb24gbGlzdFdlZWtkYXlzSW1wbChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbG9jYWxlU29ydGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGlmIChpc051bWJlcihmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBsb2NhbGVTb3J0ZWQ7XG4gICAgICAgICAgICBpbmRleCA9IGZvcm1hdDtcbiAgICAgICAgICAgIGxvY2FsZVNvcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoaXNOdW1iZXIoZm9ybWF0KSkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gZm9ybWF0O1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvY2FsZSA9IGdldExvY2FsZSgpLFxuICAgICAgICAgICAgc2hpZnQgPSBsb2NhbGVTb3J0ZWQgPyBsb2NhbGUuX3dlZWsuZG93IDogMCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBvdXQgPSBbXTtcblxuICAgICAgICBpZiAoaW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldCQxKGZvcm1hdCwgKGluZGV4ICsgc2hpZnQpICUgNywgZmllbGQsICdkYXknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIG91dFtpXSA9IGdldCQxKGZvcm1hdCwgKGkgKyBzaGlmdCkgJSA3LCBmaWVsZCwgJ2RheScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdE1vbnRocyhmb3JtYXQsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBsaXN0TW9udGhzSW1wbChmb3JtYXQsIGluZGV4LCAnbW9udGhzJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdE1vbnRoc1Nob3J0KGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RNb250aHNJbXBsKGZvcm1hdCwgaW5kZXgsICdtb250aHNTaG9ydCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RXZWVrZGF5cyhsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0V2Vla2RheXNTaG9ydChsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXNTaG9ydCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RXZWVrZGF5c01pbihsb2NhbGVTb3J0ZWQsIGZvcm1hdCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RXZWVrZGF5c0ltcGwobG9jYWxlU29ydGVkLCBmb3JtYXQsIGluZGV4LCAnd2Vla2RheXNNaW4nKTtcbiAgICB9XG5cbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUoJ2VuJywge1xuICAgICAgICBlcmFzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2luY2U6ICcwMDAxLTAxLTAxJyxcbiAgICAgICAgICAgICAgICB1bnRpbDogK0luZmluaXR5LFxuICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQW5ubyBEb21pbmknLFxuICAgICAgICAgICAgICAgIG5hcnJvdzogJ0FEJyxcbiAgICAgICAgICAgICAgICBhYmJyOiAnQUQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaW5jZTogJzAwMDAtMTItMzEnLFxuICAgICAgICAgICAgICAgIHVudGlsOiAtSW5maW5pdHksXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdCZWZvcmUgQ2hyaXN0JyxcbiAgICAgICAgICAgICAgICBuYXJyb3c6ICdCQycsXG4gICAgICAgICAgICAgICAgYWJicjogJ0JDJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSh0aHxzdHxuZHxyZCkvLFxuICAgICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwLFxuICAgICAgICAgICAgICAgIG91dHB1dCA9XG4gICAgICAgICAgICAgICAgICAgIHRvSW50KChudW1iZXIgJSAxMDApIC8gMTApID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0aCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYiA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGIgPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ25kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBiID09PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdyZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RoJztcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyBvdXRwdXQ7XG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBTaWRlIGVmZmVjdCBpbXBvcnRzXG5cbiAgICBob29rcy5sYW5nID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9tZW50LmxhbmcgaXMgZGVwcmVjYXRlZC4gVXNlIG1vbWVudC5sb2NhbGUgaW5zdGVhZC4nLFxuICAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGVcbiAgICApO1xuICAgIGhvb2tzLmxhbmdEYXRhID0gZGVwcmVjYXRlKFxuICAgICAgICAnbW9tZW50LmxhbmdEYXRhIGlzIGRlcHJlY2F0ZWQuIFVzZSBtb21lbnQubG9jYWxlRGF0YSBpbnN0ZWFkLicsXG4gICAgICAgIGdldExvY2FsZVxuICAgICk7XG5cbiAgICB2YXIgbWF0aEFicyA9IE1hdGguYWJzO1xuXG4gICAgZnVuY3Rpb24gYWJzKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cbiAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gbWF0aEFicyh0aGlzLl9taWxsaXNlY29uZHMpO1xuICAgICAgICB0aGlzLl9kYXlzID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcbiAgICAgICAgdGhpcy5fbW9udGhzID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xuXG4gICAgICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWF0aEFicyhkYXRhLm1pbGxpc2Vjb25kcyk7XG4gICAgICAgIGRhdGEuc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5zZWNvbmRzKTtcbiAgICAgICAgZGF0YS5taW51dGVzID0gbWF0aEFicyhkYXRhLm1pbnV0ZXMpO1xuICAgICAgICBkYXRhLmhvdXJzID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcbiAgICAgICAgZGF0YS5tb250aHMgPSBtYXRoQWJzKGRhdGEubW9udGhzKTtcbiAgICAgICAgZGF0YS55ZWFycyA9IG1hdGhBYnMoZGF0YS55ZWFycyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU3VidHJhY3QkMShkdXJhdGlvbiwgaW5wdXQsIHZhbHVlLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIG90aGVyID0gY3JlYXRlRHVyYXRpb24oaW5wdXQsIHZhbHVlKTtcblxuICAgICAgICBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9taWxsaXNlY29uZHM7XG4gICAgICAgIGR1cmF0aW9uLl9kYXlzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9kYXlzO1xuICAgICAgICBkdXJhdGlvbi5fbW9udGhzICs9IGRpcmVjdGlvbiAqIG90aGVyLl9tb250aHM7XG5cbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uLl9idWJibGUoKTtcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0cyBvbmx5IDIuMC1zdHlsZSBhZGQoMSwgJ3MnKSBvciBhZGQoZHVyYXRpb24pXG4gICAgZnVuY3Rpb24gYWRkJDEoaW5wdXQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhZGRTdWJ0cmFjdCQxKHRoaXMsIGlucHV0LCB2YWx1ZSwgMSk7XG4gICAgfVxuXG4gICAgLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgc3VidHJhY3QoMSwgJ3MnKSBvciBzdWJ0cmFjdChkdXJhdGlvbilcbiAgICBmdW5jdGlvbiBzdWJ0cmFjdCQxKGlucHV0LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gYWRkU3VidHJhY3QkMSh0aGlzLCBpbnB1dCwgdmFsdWUsIC0xKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhYnNDZWlsKG51bWJlcikge1xuICAgICAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1YmJsZSgpIHtcbiAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgIGRheXMgPSB0aGlzLl9kYXlzLFxuICAgICAgICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzLFxuICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RhdGEsXG4gICAgICAgICAgICBzZWNvbmRzLFxuICAgICAgICAgICAgbWludXRlcyxcbiAgICAgICAgICAgIGhvdXJzLFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBtb250aHNGcm9tRGF5cztcblxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XG4gICAgICAgIC8vIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjE2NlxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgIChtaWxsaXNlY29uZHMgPj0gMCAmJiBkYXlzID49IDAgJiYgbW9udGhzID49IDApIHx8XG4gICAgICAgICAgICAgICAgKG1pbGxpc2Vjb25kcyA8PSAwICYmIGRheXMgPD0gMCAmJiBtb250aHMgPD0gMClcbiAgICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBtaWxsaXNlY29uZHMgKz0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzKSArIGRheXMpICogODY0ZTU7XG4gICAgICAgICAgICBkYXlzID0gMDtcbiAgICAgICAgICAgIG1vbnRocyA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYnViYmxlcyB1cCB2YWx1ZXMsIHNlZSB0aGUgdGVzdHMgZm9yXG4gICAgICAgIC8vIGV4YW1wbGVzIG9mIHdoYXQgdGhhdCBtZWFucy5cbiAgICAgICAgZGF0YS5taWxsaXNlY29uZHMgPSBtaWxsaXNlY29uZHMgJSAxMDAwO1xuXG4gICAgICAgIHNlY29uZHMgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICAgICAgZGF0YS5zZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gICAgICAgIG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xuICAgICAgICBkYXRhLm1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgICAgICAgaG91cnMgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICAgICAgICBkYXRhLmhvdXJzID0gaG91cnMgJSAyNDtcblxuICAgICAgICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xuXG4gICAgICAgIC8vIGNvbnZlcnQgZGF5cyB0byBtb250aHNcbiAgICAgICAgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xuICAgICAgICBtb250aHMgKz0gbW9udGhzRnJvbURheXM7XG4gICAgICAgIGRheXMgLT0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzRnJvbURheXMpKTtcblxuICAgICAgICAvLyAxMiBtb250aHMgLT4gMSB5ZWFyXG4gICAgICAgIHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xuICAgICAgICBtb250aHMgJT0gMTI7XG5cbiAgICAgICAgZGF0YS5kYXlzID0gZGF5cztcbiAgICAgICAgZGF0YS5tb250aHMgPSBtb250aHM7XG4gICAgICAgIGRhdGEueWVhcnMgPSB5ZWFycztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlzVG9Nb250aHMoZGF5cykge1xuICAgICAgICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXG4gICAgICAgIC8vIDQwMCB5ZWFycyBoYXZlIDEyIG1vbnRocyA9PT0gNDgwMFxuICAgICAgICByZXR1cm4gKGRheXMgKiA0ODAwKSAvIDE0NjA5NztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb250aHNUb0RheXMobW9udGhzKSB7XG4gICAgICAgIC8vIHRoZSByZXZlcnNlIG9mIGRheXNUb01vbnRoc1xuICAgICAgICByZXR1cm4gKG1vbnRocyAqIDE0NjA5NykgLyA0ODAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFzKHVuaXRzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRheXMsXG4gICAgICAgICAgICBtb250aHMsXG4gICAgICAgICAgICBtaWxsaXNlY29uZHMgPSB0aGlzLl9taWxsaXNlY29uZHM7XG5cbiAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG5cbiAgICAgICAgaWYgKHVuaXRzID09PSAnbW9udGgnIHx8IHVuaXRzID09PSAncXVhcnRlcicgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xuICAgICAgICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgICAgIG1vbnRocyA9IHRoaXMuX21vbnRocyArIGRheXNUb01vbnRocyhkYXlzKTtcbiAgICAgICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aHM7XG4gICAgICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aHMgLyAzO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhzIC8gMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgbWlsbGlzZWNvbmRzIHNlcGFyYXRlbHkgYmVjYXVzZSBvZiBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAoaXNzdWUgIzE4NjcpXG4gICAgICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyArIE1hdGgucm91bmQobW9udGhzVG9EYXlzKHRoaXMuX21vbnRocykpO1xuICAgICAgICAgICAgc3dpdGNoICh1bml0cykge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF5cyAvIDcgKyBtaWxsaXNlY29uZHMgLyA2MDQ4ZTU7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcbiAgICAgICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiAyNCArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRheXMgKiAxNDQwICsgbWlsbGlzZWNvbmRzIC8gNmU0O1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXlzICogODY0MDAgKyBtaWxsaXNlY29uZHMgLyAxMDAwO1xuICAgICAgICAgICAgICAgIC8vIE1hdGguZmxvb3IgcHJldmVudHMgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgaGVyZVxuICAgICAgICAgICAgICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gdW5pdCAnICsgdW5pdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVE9ETzogVXNlIHRoaXMuYXMoJ21zJyk/XG4gICAgZnVuY3Rpb24gdmFsdWVPZiQxKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLl9taWxsaXNlY29uZHMgK1xuICAgICAgICAgICAgdGhpcy5fZGF5cyAqIDg2NGU1ICtcbiAgICAgICAgICAgICh0aGlzLl9tb250aHMgJSAxMikgKiAyNTkyZTYgK1xuICAgICAgICAgICAgdG9JbnQodGhpcy5fbW9udGhzIC8gMTIpICogMzE1MzZlNlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VBcyhhbGlhcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXMoYWxpYXMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBhc01pbGxpc2Vjb25kcyA9IG1ha2VBcygnbXMnKSxcbiAgICAgICAgYXNTZWNvbmRzID0gbWFrZUFzKCdzJyksXG4gICAgICAgIGFzTWludXRlcyA9IG1ha2VBcygnbScpLFxuICAgICAgICBhc0hvdXJzID0gbWFrZUFzKCdoJyksXG4gICAgICAgIGFzRGF5cyA9IG1ha2VBcygnZCcpLFxuICAgICAgICBhc1dlZWtzID0gbWFrZUFzKCd3JyksXG4gICAgICAgIGFzTW9udGhzID0gbWFrZUFzKCdNJyksXG4gICAgICAgIGFzUXVhcnRlcnMgPSBtYWtlQXMoJ1EnKSxcbiAgICAgICAgYXNZZWFycyA9IG1ha2VBcygneScpO1xuXG4gICAgZnVuY3Rpb24gY2xvbmUkMSgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldCQyKHVuaXRzKSB7XG4gICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzW3VuaXRzICsgJ3MnXSgpIDogTmFOO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VHZXR0ZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5fZGF0YVtuYW1lXSA6IE5hTjtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gbWFrZUdldHRlcignbWlsbGlzZWNvbmRzJyksXG4gICAgICAgIHNlY29uZHMgPSBtYWtlR2V0dGVyKCdzZWNvbmRzJyksXG4gICAgICAgIG1pbnV0ZXMgPSBtYWtlR2V0dGVyKCdtaW51dGVzJyksXG4gICAgICAgIGhvdXJzID0gbWFrZUdldHRlcignaG91cnMnKSxcbiAgICAgICAgZGF5cyA9IG1ha2VHZXR0ZXIoJ2RheXMnKSxcbiAgICAgICAgbW9udGhzID0gbWFrZUdldHRlcignbW9udGhzJyksXG4gICAgICAgIHllYXJzID0gbWFrZUdldHRlcigneWVhcnMnKTtcblxuICAgIGZ1bmN0aW9uIHdlZWtzKCkge1xuICAgICAgICByZXR1cm4gYWJzRmxvb3IodGhpcy5kYXlzKCkgLyA3KTtcbiAgICB9XG5cbiAgICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kLFxuICAgICAgICB0aHJlc2hvbGRzID0ge1xuICAgICAgICAgICAgc3M6IDQ0LCAvLyBhIGZldyBzZWNvbmRzIHRvIHNlY29uZHNcbiAgICAgICAgICAgIHM6IDQ1LCAvLyBzZWNvbmRzIHRvIG1pbnV0ZVxuICAgICAgICAgICAgbTogNDUsIC8vIG1pbnV0ZXMgdG8gaG91clxuICAgICAgICAgICAgaDogMjIsIC8vIGhvdXJzIHRvIGRheVxuICAgICAgICAgICAgZDogMjYsIC8vIGRheXMgdG8gbW9udGgvd2Vla1xuICAgICAgICAgICAgdzogbnVsbCwgLy8gd2Vla3MgdG8gbW9udGhcbiAgICAgICAgICAgIE06IDExLCAvLyBtb250aHMgdG8geWVhclxuICAgICAgICB9O1xuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbiAgICBmdW5jdGlvbiBzdWJzdGl0dXRlVGltZUFnbyhzdHJpbmcsIG51bWJlciwgd2l0aG91dFN1ZmZpeCwgaXNGdXR1cmUsIGxvY2FsZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLnJlbGF0aXZlVGltZShudW1iZXIgfHwgMSwgISF3aXRob3V0U3VmZml4LCBzdHJpbmcsIGlzRnV0dXJlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWxhdGl2ZVRpbWUkMShwb3NOZWdEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeCwgdGhyZXNob2xkcywgbG9jYWxlKSB7XG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uKHBvc05lZ0R1cmF0aW9uKS5hYnMoKSxcbiAgICAgICAgICAgIHNlY29uZHMgPSByb3VuZChkdXJhdGlvbi5hcygncycpKSxcbiAgICAgICAgICAgIG1pbnV0ZXMgPSByb3VuZChkdXJhdGlvbi5hcygnbScpKSxcbiAgICAgICAgICAgIGhvdXJzID0gcm91bmQoZHVyYXRpb24uYXMoJ2gnKSksXG4gICAgICAgICAgICBkYXlzID0gcm91bmQoZHVyYXRpb24uYXMoJ2QnKSksXG4gICAgICAgICAgICBtb250aHMgPSByb3VuZChkdXJhdGlvbi5hcygnTScpKSxcbiAgICAgICAgICAgIHdlZWtzID0gcm91bmQoZHVyYXRpb24uYXMoJ3cnKSksXG4gICAgICAgICAgICB5ZWFycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpLFxuICAgICAgICAgICAgYSA9XG4gICAgICAgICAgICAgICAgKHNlY29uZHMgPD0gdGhyZXNob2xkcy5zcyAmJiBbJ3MnLCBzZWNvbmRzXSkgfHxcbiAgICAgICAgICAgICAgICAoc2Vjb25kcyA8IHRocmVzaG9sZHMucyAmJiBbJ3NzJywgc2Vjb25kc10pIHx8XG4gICAgICAgICAgICAgICAgKG1pbnV0ZXMgPD0gMSAmJiBbJ20nXSkgfHxcbiAgICAgICAgICAgICAgICAobWludXRlcyA8IHRocmVzaG9sZHMubSAmJiBbJ21tJywgbWludXRlc10pIHx8XG4gICAgICAgICAgICAgICAgKGhvdXJzIDw9IDEgJiYgWydoJ10pIHx8XG4gICAgICAgICAgICAgICAgKGhvdXJzIDwgdGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10pIHx8XG4gICAgICAgICAgICAgICAgKGRheXMgPD0gMSAmJiBbJ2QnXSkgfHxcbiAgICAgICAgICAgICAgICAoZGF5cyA8IHRocmVzaG9sZHMuZCAmJiBbJ2RkJywgZGF5c10pO1xuXG4gICAgICAgIGlmICh0aHJlc2hvbGRzLncgIT0gbnVsbCkge1xuICAgICAgICAgICAgYSA9XG4gICAgICAgICAgICAgICAgYSB8fFxuICAgICAgICAgICAgICAgICh3ZWVrcyA8PSAxICYmIFsndyddKSB8fFxuICAgICAgICAgICAgICAgICh3ZWVrcyA8IHRocmVzaG9sZHMudyAmJiBbJ3d3Jywgd2Vla3NdKTtcbiAgICAgICAgfVxuICAgICAgICBhID0gYSB8fFxuICAgICAgICAgICAgKG1vbnRocyA8PSAxICYmIFsnTSddKSB8fFxuICAgICAgICAgICAgKG1vbnRocyA8IHRocmVzaG9sZHMuTSAmJiBbJ01NJywgbW9udGhzXSkgfHxcbiAgICAgICAgICAgICh5ZWFycyA8PSAxICYmIFsneSddKSB8fCBbJ3l5JywgeWVhcnNdO1xuXG4gICAgICAgIGFbMl0gPSB3aXRob3V0U3VmZml4O1xuICAgICAgICBhWzNdID0gK3Bvc05lZ0R1cmF0aW9uID4gMDtcbiAgICAgICAgYVs0XSA9IGxvY2FsZTtcbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGVUaW1lQWdvLmFwcGx5KG51bGwsIGEpO1xuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHlvdSB0byBzZXQgdGhlIHJvdW5kaW5nIGZ1bmN0aW9uIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbiAgICBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyhyb3VuZGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByb3VuZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJvdW5kaW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJvdW5kID0gcm91bmRpbmdGdW5jdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcbiAgICBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQodGhyZXNob2xkLCBsaW1pdCkge1xuICAgICAgICBpZiAodGhyZXNob2xkc1t0aHJlc2hvbGRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJlc2hvbGRzW3RocmVzaG9sZF0gPSBsaW1pdDtcbiAgICAgICAgaWYgKHRocmVzaG9sZCA9PT0gJ3MnKSB7XG4gICAgICAgICAgICB0aHJlc2hvbGRzLnNzID0gbGltaXQgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGh1bWFuaXplKGFyZ1dpdGhTdWZmaXgsIGFyZ1RocmVzaG9sZHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd2l0aFN1ZmZpeCA9IGZhbHNlLFxuICAgICAgICAgICAgdGggPSB0aHJlc2hvbGRzLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgYXJnV2l0aFN1ZmZpeCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGFyZ1RocmVzaG9sZHMgPSBhcmdXaXRoU3VmZml4O1xuICAgICAgICAgICAgYXJnV2l0aFN1ZmZpeCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYXJnV2l0aFN1ZmZpeCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB3aXRoU3VmZml4ID0gYXJnV2l0aFN1ZmZpeDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGFyZ1RocmVzaG9sZHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aCA9IE9iamVjdC5hc3NpZ24oe30sIHRocmVzaG9sZHMsIGFyZ1RocmVzaG9sZHMpO1xuICAgICAgICAgICAgaWYgKGFyZ1RocmVzaG9sZHMucyAhPSBudWxsICYmIGFyZ1RocmVzaG9sZHMuc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoLnNzID0gYXJnVGhyZXNob2xkcy5zIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xuICAgICAgICBvdXRwdXQgPSByZWxhdGl2ZVRpbWUkMSh0aGlzLCAhd2l0aFN1ZmZpeCwgdGgsIGxvY2FsZSk7XG5cbiAgICAgICAgaWYgKHdpdGhTdWZmaXgpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IGxvY2FsZS5wYXN0RnV0dXJlKCt0aGlzLCBvdXRwdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XG4gICAgfVxuXG4gICAgdmFyIGFicyQxID0gTWF0aC5hYnM7XG5cbiAgICBmdW5jdGlvbiBzaWduKHgpIHtcbiAgICAgICAgcmV0dXJuICh4ID4gMCkgLSAoeCA8IDApIHx8ICt4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvSVNPU3RyaW5nJDEoKSB7XG4gICAgICAgIC8vIGZvciBJU08gc3RyaW5ncyB3ZSBkbyBub3QgdXNlIHRoZSBub3JtYWwgYnViYmxpbmcgcnVsZXM6XG4gICAgICAgIC8vICAqIG1pbGxpc2Vjb25kcyBidWJibGUgdXAgdW50aWwgdGhleSBiZWNvbWUgaG91cnNcbiAgICAgICAgLy8gICogZGF5cyBkbyBub3QgYnViYmxlIGF0IGFsbFxuICAgICAgICAvLyAgKiBtb250aHMgYnViYmxlIHVwIHVudGlsIHRoZXkgYmVjb21lIHllYXJzXG4gICAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB0aGVyZSBpcyBubyBjb250ZXh0LWZyZWUgY29udmVyc2lvbiBiZXR3ZWVuIGhvdXJzIGFuZCBkYXlzXG4gICAgICAgIC8vICh0aGluayBvZiBjbG9jayBjaGFuZ2VzKVxuICAgICAgICAvLyBhbmQgYWxzbyBub3QgYmV0d2VlbiBkYXlzIGFuZCBtb250aHMgKDI4LTMxIGRheXMgcGVyIG1vbnRoKVxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWNvbmRzID0gYWJzJDEodGhpcy5fbWlsbGlzZWNvbmRzKSAvIDEwMDAsXG4gICAgICAgICAgICBkYXlzID0gYWJzJDEodGhpcy5fZGF5cyksXG4gICAgICAgICAgICBtb250aHMgPSBhYnMkMSh0aGlzLl9tb250aHMpLFxuICAgICAgICAgICAgbWludXRlcyxcbiAgICAgICAgICAgIGhvdXJzLFxuICAgICAgICAgICAgeWVhcnMsXG4gICAgICAgICAgICBzLFxuICAgICAgICAgICAgdG90YWwgPSB0aGlzLmFzU2Vjb25kcygpLFxuICAgICAgICAgICAgdG90YWxTaWduLFxuICAgICAgICAgICAgeW1TaWduLFxuICAgICAgICAgICAgZGF5c1NpZ24sXG4gICAgICAgICAgICBobXNTaWduO1xuXG4gICAgICAgIGlmICghdG90YWwpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIHNhbWUgYXMgQyMncyAoTm9kYSkgYW5kIHB5dGhvbiAoaXNvZGF0ZSkuLi5cbiAgICAgICAgICAgIC8vIGJ1dCBub3Qgb3RoZXIgSlMgKGdvb2cuZGF0ZSlcbiAgICAgICAgICAgIHJldHVybiAnUDBEJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDM2MDAgc2Vjb25kcyAtPiA2MCBtaW51dGVzIC0+IDEgaG91clxuICAgICAgICBtaW51dGVzID0gYWJzRmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICAgICAgaG91cnMgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xuICAgICAgICBzZWNvbmRzICU9IDYwO1xuICAgICAgICBtaW51dGVzICU9IDYwO1xuXG4gICAgICAgIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcbiAgICAgICAgeWVhcnMgPSBhYnNGbG9vcihtb250aHMgLyAxMik7XG4gICAgICAgIG1vbnRocyAlPSAxMjtcblxuICAgICAgICAvLyBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZG9yZGlsbGUvbW9tZW50LWlzb2R1cmF0aW9uL2Jsb2IvbWFzdGVyL21vbWVudC5pc29kdXJhdGlvbi5qc1xuICAgICAgICBzID0gc2Vjb25kcyA/IHNlY29uZHMudG9GaXhlZCgzKS5yZXBsYWNlKC9cXC4/MCskLywgJycpIDogJyc7XG5cbiAgICAgICAgdG90YWxTaWduID0gdG90YWwgPCAwID8gJy0nIDogJyc7XG4gICAgICAgIHltU2lnbiA9IHNpZ24odGhpcy5fbW9udGhzKSAhPT0gc2lnbih0b3RhbCkgPyAnLScgOiAnJztcbiAgICAgICAgZGF5c1NpZ24gPSBzaWduKHRoaXMuX2RheXMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuICAgICAgICBobXNTaWduID0gc2lnbih0aGlzLl9taWxsaXNlY29uZHMpICE9PSBzaWduKHRvdGFsKSA/ICctJyA6ICcnO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0b3RhbFNpZ24gK1xuICAgICAgICAgICAgJ1AnICtcbiAgICAgICAgICAgICh5ZWFycyA/IHltU2lnbiArIHllYXJzICsgJ1knIDogJycpICtcbiAgICAgICAgICAgIChtb250aHMgPyB5bVNpZ24gKyBtb250aHMgKyAnTScgOiAnJykgK1xuICAgICAgICAgICAgKGRheXMgPyBkYXlzU2lnbiArIGRheXMgKyAnRCcgOiAnJykgK1xuICAgICAgICAgICAgKGhvdXJzIHx8IG1pbnV0ZXMgfHwgc2Vjb25kcyA/ICdUJyA6ICcnKSArXG4gICAgICAgICAgICAoaG91cnMgPyBobXNTaWduICsgaG91cnMgKyAnSCcgOiAnJykgK1xuICAgICAgICAgICAgKG1pbnV0ZXMgPyBobXNTaWduICsgbWludXRlcyArICdNJyA6ICcnKSArXG4gICAgICAgICAgICAoc2Vjb25kcyA/IGhtc1NpZ24gKyBzICsgJ1MnIDogJycpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvJDIgPSBEdXJhdGlvbi5wcm90b3R5cGU7XG5cbiAgICBwcm90byQyLmlzVmFsaWQgPSBpc1ZhbGlkJDE7XG4gICAgcHJvdG8kMi5hYnMgPSBhYnM7XG4gICAgcHJvdG8kMi5hZGQgPSBhZGQkMTtcbiAgICBwcm90byQyLnN1YnRyYWN0ID0gc3VidHJhY3QkMTtcbiAgICBwcm90byQyLmFzID0gYXM7XG4gICAgcHJvdG8kMi5hc01pbGxpc2Vjb25kcyA9IGFzTWlsbGlzZWNvbmRzO1xuICAgIHByb3RvJDIuYXNTZWNvbmRzID0gYXNTZWNvbmRzO1xuICAgIHByb3RvJDIuYXNNaW51dGVzID0gYXNNaW51dGVzO1xuICAgIHByb3RvJDIuYXNIb3VycyA9IGFzSG91cnM7XG4gICAgcHJvdG8kMi5hc0RheXMgPSBhc0RheXM7XG4gICAgcHJvdG8kMi5hc1dlZWtzID0gYXNXZWVrcztcbiAgICBwcm90byQyLmFzTW9udGhzID0gYXNNb250aHM7XG4gICAgcHJvdG8kMi5hc1F1YXJ0ZXJzID0gYXNRdWFydGVycztcbiAgICBwcm90byQyLmFzWWVhcnMgPSBhc1llYXJzO1xuICAgIHByb3RvJDIudmFsdWVPZiA9IHZhbHVlT2YkMTtcbiAgICBwcm90byQyLl9idWJibGUgPSBidWJibGU7XG4gICAgcHJvdG8kMi5jbG9uZSA9IGNsb25lJDE7XG4gICAgcHJvdG8kMi5nZXQgPSBnZXQkMjtcbiAgICBwcm90byQyLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcztcbiAgICBwcm90byQyLnNlY29uZHMgPSBzZWNvbmRzO1xuICAgIHByb3RvJDIubWludXRlcyA9IG1pbnV0ZXM7XG4gICAgcHJvdG8kMi5ob3VycyA9IGhvdXJzO1xuICAgIHByb3RvJDIuZGF5cyA9IGRheXM7XG4gICAgcHJvdG8kMi53ZWVrcyA9IHdlZWtzO1xuICAgIHByb3RvJDIubW9udGhzID0gbW9udGhzO1xuICAgIHByb3RvJDIueWVhcnMgPSB5ZWFycztcbiAgICBwcm90byQyLmh1bWFuaXplID0gaHVtYW5pemU7XG4gICAgcHJvdG8kMi50b0lTT1N0cmluZyA9IHRvSVNPU3RyaW5nJDE7XG4gICAgcHJvdG8kMi50b1N0cmluZyA9IHRvSVNPU3RyaW5nJDE7XG4gICAgcHJvdG8kMi50b0pTT04gPSB0b0lTT1N0cmluZyQxO1xuICAgIHByb3RvJDIubG9jYWxlID0gbG9jYWxlO1xuICAgIHByb3RvJDIubG9jYWxlRGF0YSA9IGxvY2FsZURhdGE7XG5cbiAgICBwcm90byQyLnRvSXNvU3RyaW5nID0gZGVwcmVjYXRlKFxuICAgICAgICAndG9Jc29TdHJpbmcoKSBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHRvSVNPU3RyaW5nKCkgaW5zdGVhZCAobm90aWNlIHRoZSBjYXBpdGFscyknLFxuICAgICAgICB0b0lTT1N0cmluZyQxXG4gICAgKTtcbiAgICBwcm90byQyLmxhbmcgPSBsYW5nO1xuXG4gICAgLy8gRk9STUFUVElOR1xuXG4gICAgYWRkRm9ybWF0VG9rZW4oJ1gnLCAwLCAwLCAndW5peCcpO1xuICAgIGFkZEZvcm1hdFRva2VuKCd4JywgMCwgMCwgJ3ZhbHVlT2YnKTtcblxuICAgIC8vIFBBUlNJTkdcblxuICAgIGFkZFJlZ2V4VG9rZW4oJ3gnLCBtYXRjaFNpZ25lZCk7XG4gICAgYWRkUmVnZXhUb2tlbignWCcsIG1hdGNoVGltZXN0YW1wKTtcbiAgICBhZGRQYXJzZVRva2VuKCdYJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHBhcnNlRmxvYXQoaW5wdXQpICogMTAwMCk7XG4gICAgfSk7XG4gICAgYWRkUGFyc2VUb2tlbigneCcsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xuICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSh0b0ludChpbnB1dCkpO1xuICAgIH0pO1xuXG4gICAgLy8hIG1vbWVudC5qc1xuXG4gICAgaG9va3MudmVyc2lvbiA9ICcyLjI5LjQnO1xuXG4gICAgc2V0SG9va0NhbGxiYWNrKGNyZWF0ZUxvY2FsKTtcblxuICAgIGhvb2tzLmZuID0gcHJvdG87XG4gICAgaG9va3MubWluID0gbWluO1xuICAgIGhvb2tzLm1heCA9IG1heDtcbiAgICBob29rcy5ub3cgPSBub3c7XG4gICAgaG9va3MudXRjID0gY3JlYXRlVVRDO1xuICAgIGhvb2tzLnVuaXggPSBjcmVhdGVVbml4O1xuICAgIGhvb2tzLm1vbnRocyA9IGxpc3RNb250aHM7XG4gICAgaG9va3MuaXNEYXRlID0gaXNEYXRlO1xuICAgIGhvb2tzLmxvY2FsZSA9IGdldFNldEdsb2JhbExvY2FsZTtcbiAgICBob29rcy5pbnZhbGlkID0gY3JlYXRlSW52YWxpZDtcbiAgICBob29rcy5kdXJhdGlvbiA9IGNyZWF0ZUR1cmF0aW9uO1xuICAgIGhvb2tzLmlzTW9tZW50ID0gaXNNb21lbnQ7XG4gICAgaG9va3Mud2Vla2RheXMgPSBsaXN0V2Vla2RheXM7XG4gICAgaG9va3MucGFyc2Vab25lID0gY3JlYXRlSW5ab25lO1xuICAgIGhvb2tzLmxvY2FsZURhdGEgPSBnZXRMb2NhbGU7XG4gICAgaG9va3MuaXNEdXJhdGlvbiA9IGlzRHVyYXRpb247XG4gICAgaG9va3MubW9udGhzU2hvcnQgPSBsaXN0TW9udGhzU2hvcnQ7XG4gICAgaG9va3Mud2Vla2RheXNNaW4gPSBsaXN0V2Vla2RheXNNaW47XG4gICAgaG9va3MuZGVmaW5lTG9jYWxlID0gZGVmaW5lTG9jYWxlO1xuICAgIGhvb2tzLnVwZGF0ZUxvY2FsZSA9IHVwZGF0ZUxvY2FsZTtcbiAgICBob29rcy5sb2NhbGVzID0gbGlzdExvY2FsZXM7XG4gICAgaG9va3Mud2Vla2RheXNTaG9ydCA9IGxpc3RXZWVrZGF5c1Nob3J0O1xuICAgIGhvb2tzLm5vcm1hbGl6ZVVuaXRzID0gbm9ybWFsaXplVW5pdHM7XG4gICAgaG9va3MucmVsYXRpdmVUaW1lUm91bmRpbmcgPSBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZztcbiAgICBob29rcy5yZWxhdGl2ZVRpbWVUaHJlc2hvbGQgPSBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQ7XG4gICAgaG9va3MuY2FsZW5kYXJGb3JtYXQgPSBnZXRDYWxlbmRhckZvcm1hdDtcbiAgICBob29rcy5wcm90b3R5cGUgPSBwcm90bztcblxuICAgIC8vIGN1cnJlbnRseSBIVE1MNSBpbnB1dCB0eXBlIG9ubHkgc3VwcG9ydHMgMjQtaG91ciBmb3JtYXRzXG4gICAgaG9va3MuSFRNTDVfRk1UID0ge1xuICAgICAgICBEQVRFVElNRV9MT0NBTDogJ1lZWVktTU0tRERUSEg6bW0nLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgLz5cbiAgICAgICAgREFURVRJTUVfTE9DQUxfU0VDT05EUzogJ1lZWVktTU0tRERUSEg6bW06c3MnLCAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCIgc3RlcD1cIjFcIiAvPlxuICAgICAgICBEQVRFVElNRV9MT0NBTF9NUzogJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTJywgLy8gPGlucHV0IHR5cGU9XCJkYXRldGltZS1sb2NhbFwiIHN0ZXA9XCIwLjAwMVwiIC8+XG4gICAgICAgIERBVEU6ICdZWVlZLU1NLUREJywgLy8gPGlucHV0IHR5cGU9XCJkYXRlXCIgLz5cbiAgICAgICAgVElNRTogJ0hIOm1tJywgLy8gPGlucHV0IHR5cGU9XCJ0aW1lXCIgLz5cbiAgICAgICAgVElNRV9TRUNPTkRTOiAnSEg6bW06c3MnLCAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiBzdGVwPVwiMVwiIC8+XG4gICAgICAgIFRJTUVfTVM6ICdISDptbTpzcy5TU1MnLCAvLyA8aW5wdXQgdHlwZT1cInRpbWVcIiBzdGVwPVwiMC4wMDFcIiAvPlxuICAgICAgICBXRUVLOiAnR0dHRy1bV11XVycsIC8vIDxpbnB1dCB0eXBlPVwid2Vla1wiIC8+XG4gICAgICAgIE1PTlRIOiAnWVlZWS1NTScsIC8vIDxpbnB1dCB0eXBlPVwibW9udGhcIiAvPlxuICAgIH07XG5cbiAgICByZXR1cm4gaG9va3M7XG5cbn0pKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnYWRtaW5qcycgXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IERhdGVGaWVsZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBuZXcgRGF0ZShwcm9wcy5yZWNvcmQucGFyYW1zLnRhbmdnYWxfbGFoaXIpLnRvTG9jYWxlRGF0ZVN0cmluZygpXHJcbiAgICByZXR1cm4gPEJveD57bW9tZW50KHZhbHVlKS5mb3JtYXQoJ0QgTU1NTSBZWVlZJyl9PC9Cb3g+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlRmllbGQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveD5NeSBjdXN0b20gZGFzaGJvYXJkPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZCIsImltcG9ydCB7IExhYmVsLCBGb3JtR3JvdXAsIEJveCwgVGFibGUsIFRhYmxlSGVhZCwgVGFibGVCb2R5LCBUYWJsZVJvdywgVGFibGVDZWxsIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHBrZyBmcm9tICdhZG1pbmpzJ1xyXG5jb25zdCB7IGZsYXQgfSA9IHBrZ1xyXG5jb25zdCBMaXN0S2FyeWF3YW4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IGZsYXQudW5mbGF0dGVuKHByb3BzLnJlY29yZC5wYXJhbXMpXHJcblxyXG4gICAgcmV0dXJuIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgPExhYmVsPkxpc3QgS2FyeWF3YW48L0xhYmVsPlxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk5JSzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk5hbWE8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5FbWFpbDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlN0YXR1czwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFwYXJhbXMua2FyeWF3YW4ubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs0fSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpZGFrIGFkYSBrYXJ5YXdhbiBwYWRhIGRpdmlzaSBpbmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAge3BhcmFtcy5rYXJ5YXdhbi5sZW5ndGggPiAwICYmIHBhcmFtcy5rYXJ5YXdhbi5tYXAoKHtwcm9maWx9LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9maWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Byb2ZpbC5uaWt9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwcm9maWwubmFtYX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Byb2ZpbC5lbWFpbH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Byb2ZpbC5zdGF0dXMgPT0gMCA/IFwiSW5hY3RpdmVcIiA6IFwiQWN0aXZlXCJ9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICA8L0Zvcm1Hcm91cD47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RLYXJ5YXdhbjsiLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBEYXRlRmllbGQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRGF0ZUZpZWxkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5EYXRlRmllbGQgPSBEYXRlRmllbGRcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5EYXNoYm9hcmQgPSBEYXNoYm9hcmRcbmltcG9ydCBMaXN0S2FyeWF3YW4gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTGlzdEthcnlhd2FuJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5MaXN0S2FyeWF3YW4gPSBMaXN0S2FyeWF3YW4iXSwibmFtZXMiOlsidGhpcyIsInJlcXVpcmUiLCJEYXRlRmllbGQiLCJwcm9wcyIsInZhbHVlIiwiRGF0ZSIsInJlY29yZCIsInBhcmFtcyIsInRhbmdnYWxfbGFoaXIiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJCb3giLCJtb21lbnQiLCJmb3JtYXQiLCJEYXNoYm9hcmQiLCJmbGF0IiwicGtnIiwiTGlzdEthcnlhd2FuIiwidW5mbGF0dGVuIiwiRm9ybUdyb3VwIiwiTGFiZWwiLCJUYWJsZSIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiVGFibGVCb2R5Iiwia2FyeWF3YW4iLCJsZW5ndGgiLCJjb2xTcGFuIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJfcmVmIiwiaW5kZXgiLCJwcm9maWwiLCJjb25zb2xlIiwibG9nIiwia2V5IiwibmlrIiwibmFtYSIsImVtYWlsIiwic3RhdHVzIiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztDQU1DLENBQUMsVUFBVSxNQUFNLEVBQUUsT0FBTyxFQUFFO01BQ3NDLE1BQWlCLENBQUEsT0FBQSxHQUFBLE9BQU8sRUFBRSxFQUVoRTtDQUM3QixFQUFDLENBQUNBLGNBQUksR0FBRyxZQUFZLENBQ3JCO01BQ0ksSUFBSSxZQUFZLENBQUM7QUFDckI7TUFDSSxTQUFTLEtBQUssR0FBRztVQUNiLE9BQU8sWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7T0FDOUM7QUFDTDtDQUNBO0NBQ0E7Q0FDQSxLQUFJLFNBQVMsZUFBZSxDQUFDLFFBQVEsRUFBRTtVQUMvQixZQUFZLEdBQUcsUUFBUSxDQUFDO09BQzNCO0FBQ0w7Q0FDQSxLQUFJLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRTtVQUNwQjtjQUNJLEtBQUssWUFB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S0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztDQUNwRCxLQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7Q0FDbEQsU0FBUSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7Q0FDdkMsTUFBSyxDQUFDLENBQUM7Q0FDUCxLQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7Q0FDbkQsU0FBUSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUM7Q0FDeEMsTUFBSyxDQUFDLENBQUM7Q0FDUCxLQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7Q0FDcEQsU0FBUSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUM7Q0FDekMsTUFBSyxDQUFDLENBQUM7Q0FDUCxLQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7Q0FDckQsU0FBUSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUM7Q0FDMUMsTUFBSyxDQUFDLENBQUM7Q0FDUCxLQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7Q0FDdEQsU0FBUSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUM7Q0FDM0MsTUFBSyxDQUFDLENBQUM7Q0FDUCxLQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFlBQVk7Q0FDdkQsU0FBUSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUM7Q0FDNUMsTUFBSyxDQUFDLENBQUM7QUFDUDtDQUNBO0FBQ0E7Q0FDQSxLQUFJLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEM7Q0FDQTtBQUNBO0NBQ0EsS0FBSSxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZDO0NBQ0E7QUFDQTtNQUNJLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO01BQ3RDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO01BQ3ZDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVDO0NBQ0EsS0FBSSxJQUFJLEtBQUssRUFBRSxpQkFBaUIsQ0FBQztDQUNqQyxLQUFJLEtBQUssS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksR0FBRyxFQUFFO0NBQzFELFNBQVEsYUFBYSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztPQUN2QztBQUNMO0NBQ0EsS0FBSSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0NBQ25DLFNBQVEsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUM7T0FDckQ7QUFDTDtDQUNBLEtBQUksS0FBSyxLQUFLLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEVBQUU7Q0FDdkQsU0FBUSxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2pDO0FBQ0w7TUFDSSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzFEO0NBQ0E7QUFDQTtNQUNJLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztNQUN0QyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDM0M7Q0FDQTtBQUNBO01BQ0ksU0FBUyxXQUFXLEdBQUc7VUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7T0FDbkM7QUFDTDtNQUNJLFNBQVMsV0FBVyxHQUFHO1VBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyw0QkFBNEIsR0FBRyxFQUFFLENBQUM7T0FDMUQ7QUFDTDtDQUNBLEtBQUksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNqQztDQUNBLEtBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Q0FDcEIsS0FBSSxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztDQUNoQyxLQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0NBQ3hCLEtBQUksS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDdEIsS0FBSSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUN4QixLQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0NBQzFCLEtBQUksS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDdEIsS0FBSSxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUM1QixLQUFJLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0NBQ2xCLEtBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDeEIsS0FBSSxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztDQUMxQixLQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0NBQ2hDLEtBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDNUIsS0FBSSxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztDQUM5QixLQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0NBQ2hDLEtBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDMUIsS0FBSSxLQUFLLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztDQUN4QyxLQUFJLEtBQUssQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0NBQzFDLEtBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7Q0FDOUIsS0FBSSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUN0QixLQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0NBQzFCLEtBQUksS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDbEMsS0FBSSxLQUFLLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztDQUM3QixLQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDO0NBQzdCLEtBQUksS0FBSyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7Q0FDdEMsS0FBSSxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztDQUMxQixLQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQzVCLEtBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Q0FDOUIsS0FBSSxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUM1QixLQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0NBQzlCLEtBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDMUIsS0FBSSxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztDQUNwQyxLQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO01BQ3hCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO1VBQ3JELEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsR0FBRyxZQUFZO2NBQzFELE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7Q0FDbkQsVUFBUyxDQUFDO09BQ0w7Q0FDTCxLQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0NBQzFCLEtBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Q0FDOUIsS0FBSSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUN0QixLQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQzVCLEtBQUksS0FBSyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7Q0FDdEMsS0FBSSxLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztDQUMvQixLQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0NBQ25DLEtBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7Q0FDL0IsS0FBSSxLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztDQUMvQixLQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0NBQzVCLEtBQUksS0FBSyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7Q0FDckMsS0FBSSxLQUFLLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztDQUNwQyxLQUFJLEtBQUssQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUM7TUFDdEMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztDQUNuRCxLQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO0NBQzlCLEtBQUksS0FBSyxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7TUFDbkMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztNQUN0QyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO0NBQ25ELEtBQUksS0FBSyxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7Q0FDdkMsS0FBSSxLQUFLLENBQUMsZUFBZSxHQUFHLGtCQUFrQixDQUFDO0NBQy9DLEtBQUksS0FBSyxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztDQUM3QyxLQUFJLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyx3QkFBd0IsQ0FBQztDQUMzRCxLQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7TUFDOUIsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztDQUM3QyxLQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7Q0FDMUMsS0FBSSxLQUFLLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO0NBQzFDLEtBQUksS0FBSyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7TUFDbEMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztNQUN0QyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO01BQzVDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7TUFDNUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDO0NBQy9ELEtBQUksS0FBSyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7Q0FDbkMsS0FBSSxLQUFLLENBQUMsR0FBRyxHQUFHLGNBQWMsQ0FBQztDQUMvQixLQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7Q0FDbkMsS0FBSSxLQUFLLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO0NBQzlDLEtBQUksS0FBSyxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO0NBQ3RELEtBQUksS0FBSyxDQUFDLEtBQUssR0FBRyxvQkFBb0IsQ0FBQztDQUN2QyxLQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQzVCLEtBQUksS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Q0FDcEMsS0FBSSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUN4QixLQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0NBQ3hCLEtBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7Q0FDakMsS0FBSSxLQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztDQUNqQyxLQUFJLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUztDQUMzQixTQUFRLGlEQUFpRDtDQUN6RCxTQUFRLGdCQUFnQjtDQUN4QixNQUFLLENBQUM7Q0FDTixLQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUztDQUM1QixTQUFRLGtEQUFrRDtDQUMxRCxTQUFRLFdBQVc7Q0FDbkIsTUFBSyxDQUFDO0NBQ04sS0FBSSxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVM7Q0FDM0IsU0FBUSxnREFBZ0Q7Q0FDeEQsU0FBUSxVQUFVO0NBQ2xCLE1BQUssQ0FBQztDQUNOLEtBQUksS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTO0NBQzFCLFNBQVEsMEdBQTBHO0NBQ2xILFNBQVEsVUFBVTtDQUNsQixNQUFLLENBQUM7Q0FDTixLQUFJLEtBQUssQ0FBQyxZQUFZLEdBQUcsU0FBUztDQUNsQyxTQUFRLHlHQUF5RztDQUNqSCxTQUFRLDJCQUEyQjtDQUNuQyxNQUFLLENBQUM7QUFDTjtDQUNBLEtBQUksU0FBUyxVQUFVLENBQUMsS0FBSyxFQUFFO0NBQy9CLFNBQVEsT0FBTyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO09BQ3BDO0FBQ0w7TUFDSSxTQUFTLFlBQVksR0FBRztDQUM1QixTQUFRLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7T0FDekQ7QUFDTDtDQUNBLEtBQUksU0FBUyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7VUFDaEMsT0FBTyxNQUFNLENBQUM7T0FDakI7QUFDTDtDQUNBLEtBQUksSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQztDQUNBLEtBQUksT0FBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Q0FDaEMsS0FBSSxPQUFPLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztDQUM1QyxLQUFJLE9BQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0NBQ3RDLEtBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Q0FDOUIsS0FBSSxPQUFPLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO0NBQzFDLEtBQUksT0FBTyxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztDQUM1QyxLQUFJLE9BQU8sQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0NBQ3hDLEtBQUksT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDcEMsS0FBSSxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztDQUN0QixLQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0NBQzlCLEtBQUksT0FBTyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7Q0FDeEMsS0FBSSxPQUFPLENBQUMsZUFBZSxHQUFHLHFCQUFxQixDQUFDO0NBQ3BELEtBQUksT0FBTyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Q0FDMUMsS0FBSSxPQUFPLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztDQUMxQyxLQUFJLE9BQU8sQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQzlDO0NBQ0EsS0FBSSxPQUFPLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztDQUNsQyxLQUFJLE9BQU8sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUM7Q0FDNUMsS0FBSSxPQUFPLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDO0NBQzVDLEtBQUksT0FBTyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Q0FDdEMsS0FBSSxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7Q0FDaEQsS0FBSSxPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztDQUM5QixLQUFJLE9BQU8sQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUM7Q0FDbEQsS0FBSSxPQUFPLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0FBQ2xEO0NBQ0EsS0FBSSxPQUFPLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztDQUN0QyxLQUFJLE9BQU8sQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUM7Q0FDNUMsS0FBSSxPQUFPLENBQUMsYUFBYSxHQUFHLG1CQUFtQixDQUFDO0NBQ2hELEtBQUksT0FBTyxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQztBQUNoRDtDQUNBLEtBQUksT0FBTyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Q0FDMUMsS0FBSSxPQUFPLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7Q0FDcEQsS0FBSSxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDaEQ7Q0FDQSxLQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0NBQzlCLEtBQUksT0FBTyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7QUFDdEM7TUFDSSxTQUFTLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7Q0FDakQsU0FBUSxJQUFJLE1BQU0sR0FBRyxTQUFTLEVBQUU7Y0FDcEIsR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7VUFDekMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQ3JDO0FBQ0w7TUFDSSxTQUFTLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtDQUNsRCxTQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2NBQ2xCLEtBQUssR0FBRyxNQUFNLENBQUM7Y0FDZixNQUFNLEdBQUcsU0FBUyxDQUFDO1dBQ3RCO0FBQ1Q7Q0FDQSxTQUFRLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzlCO0NBQ0EsU0FBUSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Y0FDZixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztXQUMvQztBQUNUO0NBQ0EsU0FBUSxJQUFJLENBQUM7Y0FDRCxHQUFHLEdBQUcsRUFBRSxDQUFDO1VBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Q0FDakMsYUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1dBQzdDO1VBQ0QsT0FBTyxHQUFHLENBQUM7T0FDZDtBQUNMO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtNQUNJLFNBQVMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0NBQ2xFLFNBQVEsSUFBSSxPQUFPLFlBQVksS0FBSyxTQUFTLEVBQUU7Q0FDL0MsYUFBWSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtrQkFDbEIsS0FBSyxHQUFHLE1BQU0sQ0FBQztrQkFDZixNQUFNLEdBQUcsU0FBUyxDQUFDO2VBQ3RCO0FBQ2I7Q0FDQSxhQUFZLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0NBQ2xDLFVBQVMsTUFBTTtjQUNILE1BQU0sR0FBRyxZQUFZLENBQUM7Y0FDdEIsS0FBSyxHQUFHLE1BQU0sQ0FBQztjQUNmLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDakM7Q0FDQSxhQUFZLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2tCQUNsQixLQUFLLEdBQUcsTUFBTSxDQUFDO2tCQUNmLE1BQU0sR0FBRyxTQUFTLENBQUM7ZUFDdEI7QUFDYjtDQUNBLGFBQVksTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7V0FDekI7QUFDVDtDQUNBLFNBQVEsSUFBSSxNQUFNLEdBQUcsU0FBUyxFQUFFO2NBQ3BCLEtBQUssR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUN2RCxhQUFZLENBQUM7Y0FDRCxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3JCO0NBQ0EsU0FBUSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7Q0FDM0IsYUFBWSxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7V0FDM0Q7QUFDVDtVQUNRLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2NBQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1dBQ3pEO1VBQ0QsT0FBTyxHQUFHLENBQUM7T0FDZDtBQUNMO0NBQ0EsS0FBSSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO1VBQy9CLE9BQU8sY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7T0FDbEQ7QUFDTDtDQUNBLEtBQUksU0FBUyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtVQUNwQyxPQUFPLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO09BQ3ZEO0FBQ0w7TUFDSSxTQUFTLFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtVQUMvQyxPQUFPLGdCQUFnQixDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO09BQ3BFO0FBQ0w7TUFDSSxTQUFTLGlCQUFpQixDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1VBQ3BELE9BQU8sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7T0FDekU7QUFDTDtNQUNJLFNBQVMsZUFBZSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1VBQ2xELE9BQU8sZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7T0FDdkU7QUFDTDtNQUNJLGtCQUFrQixDQUFDLElBQUksRUFBRTtDQUM3QixTQUFRLElBQUksRUFBRTtjQUNGO2tCQUNJLEtBQUssRUFBRSxZQUFZO2tCQUNuQixLQUFLLEVBQUUsQ0FBQyxRQUFRO2tCQUNoQixNQUFNLEVBQUUsQ0FBQztrQkFDVCxJQUFJLEVBQUUsYUFBYTtrQkFDbkIsTUFBTSxFQUFFLElBQUk7a0JBQ1osSUFBSSxFQUFFLElBQUk7ZUFDYjtjQUNEO2tCQUNJLEtBQUssRUFBRSxZQUFZO2tCQUNuQixLQUFLLEVBQUUsQ0FBQyxRQUFRO2tCQUNoQixNQUFNLEVBQUUsQ0FBQztrQkFDVCxJQUFJLEVBQUUsZUFBZTtrQkFDckIsTUFBTSxFQUFFLElBQUk7a0JBQ1osSUFBSSxFQUFFLElBQUk7ZUFDYjtXQUNKO1VBQ0Qsc0JBQXNCLEVBQUUsc0JBQXNCO0NBQ3RELFNBQVEsT0FBTyxFQUFFLFVBQVUsTUFBTSxFQUFFO0NBQ25DLGFBQVksSUFBSSxDQUFDLEdBQUcsTUFBTSxHQUFHLEVBQUU7Q0FDL0IsaUJBQWdCLE1BQU07c0JBQ0YsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO0NBQ3BELDJCQUEwQixJQUFJOzRCQUNKLENBQUMsS0FBSyxDQUFDO0NBQ2pDLDJCQUEwQixJQUFJOzRCQUNKLENBQUMsS0FBSyxDQUFDO0NBQ2pDLDJCQUEwQixJQUFJOzRCQUNKLENBQUMsS0FBSyxDQUFDO0NBQ2pDLDJCQUEwQixJQUFJO0NBQzlCLDJCQUEwQixJQUFJLENBQUM7Q0FDL0IsYUFBWSxPQUFPLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDMUI7Q0FDVCxNQUFLLENBQUMsQ0FBQztBQUNQO0NBQ0E7QUFDQTtDQUNBLEtBQUksS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTO0NBQzFCLFNBQVEsdURBQXVEO0NBQy9ELFNBQVEsa0JBQWtCO0NBQzFCLE1BQUssQ0FBQztDQUNOLEtBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTO0NBQzlCLFNBQVEsK0RBQStEO0NBQ3ZFLFNBQVEsU0FBUztDQUNqQixNQUFLLENBQUM7QUFDTjtDQUNBLEtBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUMzQjtNQUNJLFNBQVMsR0FBRyxHQUFHO0NBQ25CLFNBQVEsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUM5QjtVQUNRLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztVQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7VUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDO1VBQ1EsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1VBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztVQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7VUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztVQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekM7VUFDUSxPQUFPLElBQUksQ0FBQztPQUNmO0FBQ0w7TUFDSSxTQUFTLGFBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7VUFDdEQsSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNqRDtVQUNRLFFBQVEsQ0FBQyxhQUFhLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7VUFDMUQsUUFBUSxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztVQUMxQyxRQUFRLENBQUMsT0FBTyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ3REO0NBQ0EsU0FBUSxPQUFPLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztPQUM3QjtBQUNMO0NBQ0E7Q0FDQSxLQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7VUFDekIsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7T0FDL0M7QUFDTDtDQUNBO0NBQ0EsS0FBSSxTQUFTLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0NBQ3RDLFNBQVEsT0FBTyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNoRDtBQUNMO0NBQ0EsS0FBSSxTQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Q0FDN0IsU0FBUSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7Q0FDeEIsYUFBWSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDdEMsVUFBUyxNQUFNO0NBQ2YsYUFBWSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDNUI7T0FDSjtBQUNMO01BQ0ksU0FBUyxNQUFNLEdBQUc7Q0FDdEIsU0FBUSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtDQUM3QyxhQUFZLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSztDQUM3QixhQUFZLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTztDQUNqQyxhQUFZLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSztDQUM3QixhQUFZLE9BQU87Q0FDbkIsYUFBWSxPQUFPO0NBQ25CLGFBQVksS0FBSztDQUNqQixhQUFZLEtBQUs7Q0FDakIsYUFBWSxjQUFjLENBQUM7QUFDM0I7Q0FDQTtDQUNBO1VBQ1E7Y0FDSTtrQkFDSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQzttQkFDN0MsWUFBWSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUM7ZUFDbEQ7WUFDSDtDQUNWLGFBQVksWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2NBQzdELElBQUksR0FBRyxDQUFDLENBQUM7Y0FDVCxNQUFNLEdBQUcsQ0FBQyxDQUFDO1dBQ2Q7QUFDVDtDQUNBO0NBQ0E7Q0FDQSxTQUFRLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQztBQUNoRDtVQUNRLE9BQU8sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO0NBQ2hELFNBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ3BDO1VBQ1EsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7Q0FDekMsU0FBUSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDcEM7VUFDUSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztDQUN2QyxTQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQztVQUNRLElBQUksSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDO0NBQ0E7VUFDUSxjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1VBQzlDLE1BQU0sSUFBSSxjQUFjLENBQUM7VUFDekIsSUFBSSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUN0RDtDQUNBO1VBQ1EsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7VUFDOUIsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNyQjtDQUNBLFNBQVEsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDekIsU0FBUSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztDQUM3QixTQUFRLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzNCO1VBQ1EsT0FBTyxJQUFJLENBQUM7T0FDZjtBQUNMO0NBQ0EsS0FBSSxTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUU7Q0FDaEM7Q0FDQTtDQUNBLFNBQVEsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDO09BQ2pDO0FBQ0w7Q0FDQSxLQUFJLFNBQVMsWUFBWSxDQUFDLE1BQU0sRUFBRTtDQUNsQztDQUNBLFNBQVEsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDO09BQ25DO0FBQ0w7Q0FDQSxLQUFJLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRTtDQUN2QixTQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7Y0FDakIsT0FBTyxHQUFHLENBQUM7V0FDZDtDQUNULFNBQVEsSUFBSSxJQUFJO0NBQ2hCLGFBQVksTUFBTTtDQUNsQixhQUFZLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQzlDO0NBQ0EsU0FBUSxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDO0NBQ0EsU0FBUSxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssTUFBTSxFQUFFO2NBQzlELElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUM7Y0FDekMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ3ZELGFBQVksUUFBUSxLQUFLO0NBQ3pCLGlCQUFnQixLQUFLLE9BQU87c0JBQ1IsT0FBTyxNQUFNLENBQUM7Q0FDbEMsaUJBQWdCLEtBQUssU0FBUztDQUM5QixxQkFBb0IsT0FBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0NBQ3RDLGlCQUFnQixLQUFLLE1BQU07Q0FDM0IscUJBQW9CLE9BQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztlQUMxQjtDQUNiLFVBQVMsTUFBTTtDQUNmO0NBQ0EsYUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztDQUN2RSxhQUFZLFFBQVEsS0FBSztDQUN6QixpQkFBZ0IsS0FBSyxNQUFNO3NCQUNQLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDO0NBQzVELGlCQUFnQixLQUFLLEtBQUs7Q0FDMUIscUJBQW9CLE9BQU8sSUFBSSxHQUFHLFlBQVksR0FBRyxLQUFLLENBQUM7Q0FDdkQsaUJBQWdCLEtBQUssTUFBTTtzQkFDUCxPQUFPLElBQUksR0FBRyxFQUFFLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQztDQUMzRCxpQkFBZ0IsS0FBSyxRQUFRO3NCQUNULE9BQU8sSUFBSSxHQUFHLElBQUksR0FBRyxZQUFZLEdBQUcsR0FBRyxDQUFDO0NBQzVELGlCQUFnQixLQUFLLFFBQVE7c0JBQ1QsT0FBTyxJQUFJLEdBQUcsS0FBSyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUM7Q0FDOUQ7Q0FDQSxpQkFBZ0IsS0FBSyxhQUFhO3NCQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDO2tCQUNuRDtzQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQztlQUNoRDtXQUNKO09BQ0o7QUFDTDtDQUNBO01BQ0ksU0FBUyxTQUFTLEdBQUc7Q0FDekIsU0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO2NBQ2pCLE9BQU8sR0FBRyxDQUFDO1dBQ2Q7VUFDRDtjQUNJLElBQUksQ0FBQyxhQUFhO0NBQzlCLGFBQVksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO0NBQzlCLGFBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxNQUFNO2NBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE9BQU87WUFDcEM7T0FDTDtBQUNMO0NBQ0EsS0FBSSxTQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Q0FDM0IsU0FBUSxPQUFPLFlBQVk7Q0FDM0IsYUFBWSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDbEMsVUFBUyxDQUFDO09BQ0w7QUFDTDtDQUNBLEtBQUksSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztDQUNyQyxTQUFRLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0NBQy9CLFNBQVEsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDL0IsU0FBUSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUM3QixTQUFRLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0NBQzVCLFNBQVEsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDN0IsU0FBUSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUM5QixTQUFRLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO0NBQ2hDLFNBQVEsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QjtNQUNJLFNBQVMsT0FBTyxHQUFHO0NBQ3ZCLFNBQVEsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDL0I7QUFDTDtDQUNBLEtBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFO0NBQzFCLFNBQVEsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN0QyxTQUFRLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7T0FDckQ7QUFDTDtDQUNBLEtBQUksU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0NBQzlCLFNBQVEsT0FBTyxZQUFZO0NBQzNCLGFBQVksT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDM0QsVUFBUyxDQUFDO09BQ0w7QUFDTDtDQUNBLEtBQUksSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQztDQUNqRCxTQUFRLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0NBQ3ZDLFNBQVEsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7Q0FDdkMsU0FBUSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztDQUNuQyxTQUFRLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO0NBQ2pDLFNBQVEsTUFBTSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7Q0FDckMsU0FBUSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDO01BQ0ksU0FBUyxLQUFLLEdBQUc7VUFDYixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7T0FDcEM7QUFDTDtDQUNBLEtBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7Q0FDMUIsU0FBUSxVQUFVLEdBQUc7Y0FDVCxFQUFFLEVBQUUsRUFBRTtjQUNOLENBQUMsRUFBRSxFQUFFO2NBQ0wsQ0FBQyxFQUFFLEVBQUU7Y0FDTCxDQUFDLEVBQUUsRUFBRTtjQUNMLENBQUMsRUFBRSxFQUFFO2NBQ0wsQ0FBQyxFQUFFLElBQUk7Y0FDUCxDQUFDLEVBQUUsRUFBRTtDQUNqQixVQUFTLENBQUM7QUFDVjtDQUNBO0NBQ0EsS0FBSSxTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Q0FDaEYsU0FBUSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztPQUM5RTtBQUNMO01BQ0ksU0FBUyxjQUFjLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO1VBQ3ZFLElBQUksUUFBUSxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUU7Y0FDL0MsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQ2pDLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztjQUNqQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Y0FDL0IsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQzlCLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztjQUNoQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Y0FDL0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQzNDLGFBQVksQ0FBQztrQkFDRyxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQzttQkFDMUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDM0Qsa0JBQWlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzttQkFDdEIsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Q0FDM0Qsa0JBQWlCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzttQkFDcEIsS0FBSyxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Q0FDdkQsa0JBQWlCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQyxrQkFBaUIsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN0RDtDQUNBLFNBQVEsSUFBSSxVQUFVLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtDQUNsQyxhQUFZLENBQUM7Q0FDYixpQkFBZ0IsQ0FBQztDQUNqQixrQkFBaUIsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ3JDLGtCQUFpQixLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1VBQ0QsQ0FBQyxHQUFHLENBQUM7Q0FDYixjQUFhLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUNyQixNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztDQUNyRCxjQUFhLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ25EO0NBQ0EsU0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDO1VBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Q0FDbkMsU0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1VBQ2QsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO09BQzNDO0FBQ0w7Q0FDQTtDQUNBLEtBQUksU0FBUywwQkFBMEIsQ0FBQyxnQkFBZ0IsRUFBRTtDQUMxRCxTQUFRLElBQUksZ0JBQWdCLEtBQUssU0FBUyxFQUFFO2NBQ2hDLE9BQU8sS0FBSyxDQUFDO1dBQ2hCO0NBQ1QsU0FBUSxJQUFJLE9BQU8sZ0JBQWdCLEtBQUssVUFBVSxFQUFFO2NBQ3hDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztjQUN6QixPQUFPLElBQUksQ0FBQztXQUNmO1VBQ0QsT0FBTyxLQUFLLENBQUM7T0FDaEI7QUFDTDtDQUNBO0NBQ0EsS0FBSSxTQUFTLDJCQUEyQixDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUU7Q0FDM0QsU0FBUSxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLEVBQUU7Y0FDckMsT0FBTyxLQUFLLENBQUM7V0FDaEI7Q0FDVCxTQUFRLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtDQUNqQyxhQUFZLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1dBQ2hDO0NBQ1QsU0FBUSxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQ3RDLFNBQVEsSUFBSSxTQUFTLEtBQUssR0FBRyxFQUFFO0NBQy9CLGFBQVksVUFBVSxDQUFDLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1dBQzdCO1VBQ0QsT0FBTyxJQUFJLENBQUM7T0FDZjtBQUNMO0NBQ0EsS0FBSSxTQUFTLFFBQVEsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFO0NBQ3BELFNBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtjQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztXQUMxQztBQUNUO1VBQ1EsSUFBSSxVQUFVLEdBQUcsS0FBSztjQUNsQixFQUFFLEdBQUcsVUFBVTtDQUMzQixhQUFZLE1BQU07Q0FDbEIsYUFBWSxNQUFNLENBQUM7QUFDbkI7Q0FDQSxTQUFRLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO2NBQ25DLGFBQWEsR0FBRyxhQUFhLENBQUM7Y0FDOUIsYUFBYSxHQUFHLEtBQUssQ0FBQztXQUN6QjtDQUNULFNBQVEsSUFBSSxPQUFPLGFBQWEsS0FBSyxTQUFTLEVBQUU7Y0FDcEMsVUFBVSxHQUFHLGFBQWEsQ0FBQztXQUM5QjtDQUNULFNBQVEsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLEVBQUU7Q0FDL0MsYUFBWSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0NBQzlELGFBQVksSUFBSSxhQUFhLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxhQUFhLENBQUMsRUFBRSxJQUFJLElBQUksRUFBRTtrQkFDckQsRUFBRSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUMvQjtXQUNKO0FBQ1Q7Q0FDQSxTQUFRLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Q0FDbkMsU0FBUSxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0Q7VUFDUSxJQUFJLFVBQVUsRUFBRTtjQUNaLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1dBQzdDO0FBQ1Q7Q0FDQSxTQUFRLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUNwQztBQUNMO0NBQ0EsS0FBSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3pCO0NBQ0EsS0FBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUU7Q0FDckIsU0FBUSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7T0FDbEM7QUFDTDtNQUNJLFNBQVMsYUFBYSxHQUFHO0NBQzdCO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0EsU0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1dBQzFDO0FBQ1Q7VUFDUSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLElBQUk7Q0FDdEQsYUFBWSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Q0FDcEMsYUFBWSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Q0FDeEMsYUFBWSxPQUFPO0NBQ25CLGFBQVksS0FBSztDQUNqQixhQUFZLEtBQUs7Q0FDakIsYUFBWSxDQUFDO0NBQ2IsYUFBWSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtDQUNwQyxhQUFZLFNBQVM7Q0FDckIsYUFBWSxNQUFNO0NBQ2xCLGFBQVksUUFBUTtDQUNwQixhQUFZLE9BQU8sQ0FBQztBQUNwQjtVQUNRLElBQUksQ0FBQyxLQUFLLEVBQUU7Q0FDcEI7Q0FDQTtjQUNZLE9BQU8sS0FBSyxDQUFDO1dBQ2hCO0FBQ1Q7Q0FDQTtVQUNRLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1VBQ2pDLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1VBQy9CLE9BQU8sSUFBSSxFQUFFLENBQUM7VUFDZCxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ3RCO0NBQ0E7VUFDUSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztVQUM5QixNQUFNLElBQUksRUFBRSxDQUFDO0FBQ3JCO0NBQ0E7Q0FDQSxTQUFRLENBQUMsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNwRTtVQUNRLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7Q0FDekMsU0FBUSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztDQUMvRCxTQUFRLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0NBQy9ELFNBQVEsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDdEU7VUFDUTtDQUNSLGFBQVksU0FBUztDQUNyQixhQUFZLEdBQUc7ZUFDRixLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO2VBQ2xDLE1BQU0sR0FBRyxNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7ZUFDcEMsSUFBSSxHQUFHLFFBQVEsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztlQUNsQyxLQUFLLElBQUksT0FBTyxJQUFJLE9BQU8sR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO2VBQ3ZDLEtBQUssR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7ZUFDbkMsT0FBTyxHQUFHLE9BQU8sR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztlQUN2QyxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ3BDO09BQ0w7QUFDTDtDQUNBLEtBQUksSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUNyQztDQUNBLEtBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7Q0FDaEMsS0FBSSxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztDQUN0QixLQUFJLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0NBQ3hCLEtBQUksT0FBTyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7Q0FDbEMsS0FBSSxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztDQUNwQixLQUFJLE9BQU8sQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0NBQzVDLEtBQUksT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Q0FDbEMsS0FBSSxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztDQUNsQyxLQUFJLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQzlCLEtBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDNUIsS0FBSSxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUM5QixLQUFJLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0NBQ2hDLEtBQUksT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDcEMsS0FBSSxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUM5QixLQUFJLE9BQU8sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0NBQ2hDLEtBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Q0FDN0IsS0FBSSxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztDQUM1QixLQUFJLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0NBQ3hCLEtBQUksT0FBTyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7Q0FDeEMsS0FBSSxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztDQUM5QixLQUFJLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQzlCLEtBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Q0FDMUIsS0FBSSxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUN4QixLQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0NBQzFCLEtBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDNUIsS0FBSSxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztDQUMxQixLQUFJLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0NBQ2hDLEtBQUksT0FBTyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7Q0FDeEMsS0FBSSxPQUFPLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztDQUNyQyxLQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO0NBQ25DLEtBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDNUIsS0FBSSxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUNwQztDQUNBLEtBQUksT0FBTyxDQUFDLFdBQVcsR0FBRyxTQUFTO0NBQ25DLFNBQVEscUZBQXFGO0NBQzdGLFNBQVEsYUFBYTtDQUNyQixNQUFLLENBQUM7Q0FDTixLQUFJLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3hCO0NBQ0E7QUFDQTtNQUNJLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztNQUNsQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDekM7Q0FDQTtBQUNBO0NBQ0EsS0FBSSxhQUFhLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0NBQ3BDLEtBQUksYUFBYSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztNQUNuQyxhQUFhLENBQUMsR0FBRyxFQUFFLFVBQVUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7Q0FDdkQsU0FBUSxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztDQUN2RCxNQUFLLENBQUMsQ0FBQztNQUNILGFBQWEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtDQUN2RCxTQUFRLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDM0MsTUFBSyxDQUFDLENBQUM7QUFDUDtDQUNBO0FBQ0E7Q0FDQSxLQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQzdCO0NBQ0EsS0FBSSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakM7Q0FDQSxLQUFJLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0NBQ3JCLEtBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7Q0FDcEIsS0FBSSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztDQUNwQixLQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0NBQ3BCLEtBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7Q0FDMUIsS0FBSSxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztDQUM1QixLQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0NBQzlCLEtBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDMUIsS0FBSSxLQUFLLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDO0NBQ3RDLEtBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7Q0FDbEMsS0FBSSxLQUFLLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztDQUNwQyxLQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0NBQzlCLEtBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7Q0FDbEMsS0FBSSxLQUFLLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztDQUNuQyxLQUFJLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0NBQ2pDLEtBQUksS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FDbEMsS0FBSSxLQUFLLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztDQUN4QyxLQUFJLEtBQUssQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO0NBQ3hDLEtBQUksS0FBSyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7Q0FDdEMsS0FBSSxLQUFLLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztDQUN0QyxLQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO0NBQ2hDLEtBQUksS0FBSyxDQUFDLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQztDQUM1QyxLQUFJLEtBQUssQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0NBQzFDLEtBQUksS0FBSyxDQUFDLG9CQUFvQixHQUFHLDBCQUEwQixDQUFDO0NBQzVELEtBQUksS0FBSyxDQUFDLHFCQUFxQixHQUFHLDJCQUEyQixDQUFDO0NBQzlELEtBQUksS0FBSyxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztDQUM3QyxLQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzVCO0NBQ0E7TUFDSSxLQUFLLENBQUMsU0FBUyxHQUFHO1VBQ2QsY0FBYyxFQUFFLGtCQUFrQjtVQUNsQyxzQkFBc0IsRUFBRSxxQkFBcUI7VUFDN0MsaUJBQWlCLEVBQUUseUJBQXlCO1VBQzVDLElBQUksRUFBRSxZQUFZO1VBQ2xCLElBQUksRUFBRSxPQUFPO1VBQ2IsWUFBWSxFQUFFLFVBQVU7VUFDeEIsT0FBTyxFQUFFLGNBQWM7VUFDdkIsSUFBSSxFQUFFLFlBQVk7VUFDbEIsS0FBSyxFQUFFLFNBQVM7Q0FDeEIsTUFBSyxDQUFDO0FBQ047TUFDSSxPQUFPLEtBQUssQ0FBQztBQUNqQjtDQUNBLEVBQUMsRUFBRSxFQUFBOzs7OztDQy9pTEgsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLEtBQUssRUFBSztDQUN6QixFQUFBLElBQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxNQUFNLENBQUNDLGFBQWEsQ0FBQyxDQUFDQyxrQkFBa0IsRUFBRSxDQUFBO0NBQzlFLEVBQUEsb0JBQU9DLHlCQUFBLENBQUFDLGFBQUEsQ0FBQ0MsZ0JBQUcsRUFBRUMsSUFBQUEsRUFBQUEsTUFBTSxDQUFDVCxLQUFLLENBQUMsQ0FBQ1UsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFPLENBQUE7Q0FDM0QsQ0FBQzs7Q0NMRCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBSVosS0FBSyxFQUFLO0NBQ3pCLEVBQUEsb0JBQ0lPLHlCQUFBLENBQUFDLGFBQUEsQ0FBQ0MsZ0JBQUcsRUFBQSxJQUFBLEVBQUMscUJBQW1CLENBQU0sQ0FBQTtDQUV0QyxDQUFDOztDQ0xELElBQVFJLElBQUksR0FBS0MsdUJBQUcsQ0FBWkQsSUFBSSxDQUFBO0NBQ1osSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlmLEtBQUssRUFBSztHQUM1QixJQUFNSSxNQUFNLEdBQUdTLElBQUksQ0FBQ0csU0FBUyxDQUFDaEIsS0FBSyxDQUFDRyxNQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFBO0dBRWxELG9CQUFPRyxLQUFBLENBQUFDLGFBQUEsQ0FBQ1Msc0JBQVMsRUFDYlYsSUFBQUEsZUFBQUEsS0FBQSxDQUFBQyxhQUFBLENBQUNVLGtCQUFLLFFBQUMsZUFBYSxDQUFRLGVBQzVCWCxLQUFBLENBQUFDLGFBQUEsQ0FBQ0MsZ0JBQUcsRUFDQUYsSUFBQUEsZUFBQUEsS0FBQSxDQUFBQyxhQUFBLENBQUNXLGtCQUFLLEVBQUEsSUFBQSxlQUNGWixLQUFBLENBQUFDLGFBQUEsQ0FBQ1ksc0JBQVMsRUFBQSxJQUFBLGVBQ05iLEtBQUEsQ0FBQUMsYUFBQSxDQUFDYSxxQkFBUSxFQUNMZCxJQUFBQSxlQUFBQSxLQUFBLENBQUFDLGFBQUEsQ0FBQ2Msc0JBQVMsRUFBQyxJQUFBLEVBQUEsS0FBRyxDQUFZLGVBQzFCZixLQUFBLENBQUFDLGFBQUEsQ0FBQ2Msc0JBQVMsUUFBQyxNQUFJLENBQVksZUFDM0JmLEtBQUEsQ0FBQUMsYUFBQSxDQUFDYyxzQkFBUyxFQUFBLElBQUEsRUFBQyxPQUFLLENBQVksZUFDNUJmLEtBQUEsQ0FBQUMsYUFBQSxDQUFDYyxzQkFBUyxFQUFBLElBQUEsRUFBQyxRQUFNLENBQVksQ0FDdEIsQ0FDSCxlQUNaZixLQUFBLENBQUFDLGFBQUEsQ0FBQ2Usc0JBQVMsUUFDTCxDQUFDbkIsTUFBTSxDQUFDb0IsUUFBUSxDQUFDQyxNQUFNLGlCQUNwQmxCLEtBQUEsQ0FBQUMsYUFBQSxDQUFDYSxxQkFBUSxxQkFDTGQsS0FBQSxDQUFBQyxhQUFBLENBQUNjLHNCQUFTLEVBQUE7Q0FBQ0ksSUFBQUEsT0FBTyxFQUFFLENBQUU7Q0FBQ0MsSUFBQUEsS0FBSyxFQUFFO0NBQUVDLE1BQUFBLFNBQVMsRUFBRSxRQUFBO0NBQVMsS0FBQTtJQUFHLEVBQUEsb0NBRXZELENBQVksQ0FFbkIsRUFDQXhCLE1BQU0sQ0FBQ29CLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsSUFBSXJCLE1BQU0sQ0FBQ29CLFFBQVEsQ0FBQ0ssR0FBRyxDQUFDLFVBQUFDLElBQUEsRUFBV0MsS0FBSyxFQUFLO0NBQUEsSUFBQSxJQUFuQkMsTUFBTSxHQUFBRixJQUFBLENBQU5FLE1BQU0sQ0FBQTtDQUN2REMsSUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFBO0NBQ25CLElBQUEsb0JBQ0F6QixLQUFBLENBQUFDLGFBQUEsQ0FBQ2EscUJBQVEsRUFBQTtDQUFDYyxNQUFBQSxHQUFHLEVBQUVKLEtBQUFBO01BQ1h4QixlQUFBQSxLQUFBLENBQUFDLGFBQUEsQ0FBQ2Msc0JBQVMsRUFBRVUsSUFBQUEsRUFBQUEsTUFBTSxDQUFDSSxHQUFHLENBQWEsZUFDbkM3QixLQUFBLENBQUFDLGFBQUEsQ0FBQ2Msc0JBQVMsRUFBQSxJQUFBLEVBQUVVLE1BQU0sQ0FBQ0ssSUFBSSxDQUFhLGVBQ3BDOUIsS0FBQSxDQUFBQyxhQUFBLENBQUNjLHNCQUFTLFFBQUVVLE1BQU0sQ0FBQ00sS0FBSyxDQUFhLGVBQ3JDL0IsS0FBQSxDQUFBQyxhQUFBLENBQUNjLHNCQUFTLEVBQUVVLElBQUFBLEVBQUFBLE1BQU0sQ0FBQ08sTUFBTSxJQUFJLENBQUMsR0FBRyxVQUFVLEdBQUcsUUFBUSxDQUFhLENBQzVELENBQUE7Q0FFZixHQUFDLENBQUMsQ0FDTSxDQUNSLENBQ04sQ0FDRSxDQUFBO0NBQ2hCLENBQUM7O0NDekNEQyxPQUFPLENBQUNDLGNBQWMsR0FBRyxFQUFFLENBQUE7Q0FFM0JELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDMUMsU0FBUyxHQUFHQSxTQUFTLENBQUE7Q0FFNUN5QyxPQUFPLENBQUNDLGNBQWMsQ0FBQzdCLFNBQVMsR0FBR0EsU0FBUyxDQUFBO0NBRTVDNEIsT0FBTyxDQUFDQyxjQUFjLENBQUMxQixZQUFZLEdBQUdBLFlBQVk7Ozs7OzsifQ==
