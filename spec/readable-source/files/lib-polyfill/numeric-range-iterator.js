// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'o' to 'iteratorPrototypeFactory'
// - Resolved require(1775) to 'iterator-prototype-factory'
// - Renamed variable 'i' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'a' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'u' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'c' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'f' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 208602
         */
module.exports = function (module, exports, require) {
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var iteratorPrototypeFactory = require("iterator-prototype-factory") /*id: 1775*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var s = "Incorrect Iterator.range arguments";
  var l = "NumericRangeIterator";
  var v = objectStateManager.set;
  var p = objectStateManager.getterFor(l);
  var h = RangeError;
  var d = TypeError;
  var y = iteratorPrototypeFactory(function (t, r, e, n, o, i) {
    if (typeof t != n || r !== Infinity && r !== -Infinity && typeof r != n) {
      throw new d(s);
    }
    if (t === Infinity || t === -Infinity) {
      throw new h(s);
    }
    var c;
    var p = r > t;
    var y = false;
    if (e === undefined) {
      c = undefined;
    } else if (isObjectOrFunctionCheck(e)) {
      c = e.step;
      y = !!e.inclusive;
    } else if (typeof e == n) {
      c = e;
    } else {
      throw new d(s);
    }
    if (isNullishCheck_1(c)) {
      c = p ? i : -i;
    }
    if (typeof c != n) {
      throw new d(s);
    }
    if (c === Infinity || c === -Infinity || c === o && t !== r) {
      throw new h(s);
    }
    var g = t != t || r != r || c != c || r > t != c > o;
    v(this, {
      type: l,
      start: t,
      end: r,
      step: c,
      inclusive: y,
      hitsEnd: g,
      currentCount: o,
      zero: o
    });
    if (!es5PropertyDescriptorCheck) {
      this.start = t;
      this.end = r;
      this.step = c;
      this.inclusive = y;
    }
  }, l, function () {
    var t;
    var r = p(this);
    if (r.hitsEnd) {
      return iteratorResultFactory_1(undefined, true);
    }
    var e = r.start;
    var n = r.end;
    var o = e + r.step * r.currentCount++;
    if (o === n) {
      r.hitsEnd = true;
    }
    var a = r.inclusive;
    if (n > e ? a ? o > n : o >= n : a ? n > o : n >= o) {
      r.hitsEnd = true;
      return iteratorResultFactory_1(undefined, true);
    } else {
      return iteratorResultFactory_1(o, false);
    }
  });
  function g(t) {
    objectDefinePropertyPolyfill(y.prototype, t, {
      get: function () {
        return p(this)[t];
      },
      set: function () {},
      configurable: true,
      enumerable: false
    });
  }
  if (es5PropertyDescriptorCheck) {
    g("start");
    g("end");
    g("inclusive");
    g("step");
  }
  module.exports = y;
}