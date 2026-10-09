// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'o' to 'reflectApplyPolyfill'
// - Resolved require(338469) to 'reflect-apply-polyfill'
// - Renamed variable 'i' to 'functionWrapperChecker'
// - Resolved require(416484) to 'function-wrapper-checker'
// - Renamed variable 'u' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Resolved require(836432) to 'get-property-descriptor'
// - Renamed variable 's' to 'featureDetectionRegistry'
// - Resolved require(696668) to 'feature-detection-registry'
// - Renamed variable 'f' to 'emptyModuleStub_1'
// - Resolved require(245992) to 'empty-module-stub_1'
// - Renamed variable 'a' to 'functionBindHelper_1'
// - Resolved require(644734) to 'function-bind-helper_1'
// - Renamed variable 'p' to 'definePropertySafeWrapper'
// - Resolved require(336704) to 'define-property-safe-wrapper'
// - Renamed variable 'l' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Resolved require(678932) to 'core-js-shared-version'
// - Updated imported property 'f' to 'getPropertyDescriptor' (module 836432)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 760568
         */
module.exports = function (module, exports, require) {
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var reflectApplyPolyfill = require("reflect-apply-polyfill") /*id: 338469*/;
  var functionWrapperChecker = require("function-wrapper-checker") /*id: 416484*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var c = require("get-property-descriptor") /*id: 836432*/.getPropertyDescriptor;
  var featureDetectionRegistry = require("feature-detection-registry") /*id: 696668*/;
  var emptyModuleStub_1 = require("empty-module-stub_1") /*id: 245992*/;
  var functionBindHelper_1 = require("function-bind-helper_1") /*id: 644734*/;
  var definePropertySafeWrapper = require("define-property-safe-wrapper") /*id: 336704*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  require("core-js-shared-version") /*id: 678932*/;
  function v(t) {
    function r(n, e, i) {
      if (this instanceof r) {
        switch (arguments.length) {
          case 0:
            return new t();
          case 1:
            return new t(n);
          case 2:
            return new t(n, e);
        }
        return new t(n, e, i);
      }
      return reflectApplyPolyfill(t, this, arguments);
    }
    r.prototype = t.prototype;
    return r;
  }
  module.exports = function (t, r) {
    var n;
    var o;
    var y;
    var h;
    var b;
    var d;
    var g;
    var m;
    var x;
    var S = t.target;
    var O = t.global;
    var w = t.stat;
    var j = t.proto;
    var A = O ? getGlobalObject : w ? getGlobalObject[S] : getGlobalObject[S] && getGlobalObject[S].prototype;
    var P = O ? emptyModuleStub_1 : emptyModuleStub_1[S] || definePropertySafeWrapper(emptyModuleStub_1, S, {})[S];
    var E = P.prototype;
    for (h in r) {
      o = !(n = featureDetectionRegistry(O ? h : S + (w ? "." : "#") + h, t.forced)) && A && objectHasOwnPolyfill(A, h);
      d = P[h];
      if (o) {
        g = t.dontCallGetSet ? (x = c(A, h)) && x.value : A[h];
      }
      b = o && g ? g : r[h];
      if (n || j || typeof d != typeof b) {
        m = t.bind && o ? functionBindHelper_1(b, getGlobalObject) : t.wrap && o ? v(b) : j && isFunctionCheck(b) ? functionWrapperChecker(b) : b;
        if (t.sham || b && b.sham || d && d.sham) {
          definePropertySafeWrapper(m, "sham", true);
        }
        definePropertySafeWrapper(P, h, m);
        if (j) {
          if (!objectHasOwnPolyfill(emptyModuleStub_1, y = S + "Prototype")) {
            definePropertySafeWrapper(emptyModuleStub_1, y, {});
          }
          definePropertySafeWrapper(emptyModuleStub_1[y], h, b);
          if (t.real && E && (n || !E[h])) {
            definePropertySafeWrapper(E, h, b);
          }
        }
      }
    }
  };
}