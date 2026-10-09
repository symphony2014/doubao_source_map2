// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'c' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'f' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 's' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'l' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'v' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'p' to 'documentElementPolyfill'
// - Resolved require(571739) to 'document-element-polyfill'
// - Renamed variable 'h' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// - Renamed variable 'd' to 'createElementPolyfill'
// - Resolved require(962506) to 'create-element-polyfill'
// - Renamed variable 'y' to 'argumentLengthValidator_1'
// - Resolved require(798037) to 'argument-length-validator_1'
// - Renamed variable 'g' to 'iosDeviceDetector'
// - Resolved require(739236) to 'ios-device-detector'
// - Renamed variable 'b' to 'nodeEnvironmentCheck'
// - Resolved require(705753) to 'node-environment-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 264051
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var a;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var documentElementPolyfill = require("document-element-polyfill") /*id: 571739*/;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var createElementPolyfill = require("create-element-polyfill") /*id: 962506*/;
  var argumentLengthValidator_1 = require("argument-length-validator_1") /*id: 798037*/;
  var iosDeviceDetector = require("ios-device-detector") /*id: 739236*/;
  var nodeEnvironmentCheck = require("node-environment-check") /*id: 705753*/;
  var w = globalObjectPolyfill.setImmediate;
  var m = globalObjectPolyfill.clearImmediate;
  var x = globalObjectPolyfill.process;
  var A = globalObjectPolyfill.Dispatch;
  var E = globalObjectPolyfill.Function;
  var S = globalObjectPolyfill.MessageChannel;
  var O = globalObjectPolyfill.String;
  var R = 0;
  var I = {};
  var T = "onreadystatechange";
  tryCatchFunctionWrapper(function () {
    n = globalObjectPolyfill.location;
  });
  function k(t) {
    if (objectHasOwnPolyfill_1(I, t)) {
      var r = I[t];
      delete I[t];
      r();
    }
  }
  function M(t) {
    return function () {
      k(t);
    };
  }
  function j(t) {
    k(t.data);
  }
  function D(t) {
    globalObjectPolyfill.postMessage(O(t), n.protocol + "//" + n.host);
  }
  if (!w || !m) {
    w = function (t) {
      argumentLengthValidator_1(arguments.length, 1);
      var r = isFunctionPolyfill(t) ? t : E(t);
      var e = arraySlicePolyfill_2(arguments, 1);
      I[++R] = function () {
        reflectApplyPolyfill_1(r, undefined, e);
      };
      o(R);
      return R;
    };
    m = function (t) {
      delete I[t];
    };
    if (nodeEnvironmentCheck) {
      o = function (t) {
        x.nextTick(M(t));
      };
    } else if (A && A.now) {
      o = function (t) {
        A.now(M(t));
      };
    } else if (S && !iosDeviceDetector) {
      a = (i = new S()).port2;
      i.port1.onmessage = j;
      o = safeFunctionBind(a.postMessage, a);
    } else if (globalObjectPolyfill.addEventListener && isFunctionPolyfill(globalObjectPolyfill.postMessage) && !globalObjectPolyfill.importScripts && n && n.protocol !== "file:" && !tryCatchFunctionWrapper(D)) {
      o = D;
      globalObjectPolyfill.addEventListener("message", j, false);
    } else {
      o = T in createElementPolyfill("script") ? function (t) {
        documentElementPolyfill.appendChild(createElementPolyfill("script"))[T] = function () {
          documentElementPolyfill.removeChild(this);
          k(t);
        };
      } : function (t) {
        setTimeout(M(t), 0);
      };
    }
  }
  module.exports = {
    set: w,
    clear: m
  };
}