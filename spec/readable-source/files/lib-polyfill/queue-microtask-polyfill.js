// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'c' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'f' to 'safeGlobalPropertyGet'
// - Resolved require(241127) to 'safe-global-property-get'
// - Renamed variable 's' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Resolved require(264051) to 'set-immediate-polyfill'
// - Renamed variable 'v' to 'queuePolyfill'
// - Resolved require(227116) to 'queue-polyfill'
// - Renamed variable 'p' to 'iosDeviceDetector'
// - Resolved require(739236) to 'ios-device-detector'
// - Renamed variable 'h' to 'iosPebbleEnvCheck'
// - Resolved require(394493) to 'ios-pebble-env-check'
// - Renamed variable 'd' to 'isWebosPlatform'
// - Resolved require(986221) to 'is-webos-platform'
// - Renamed variable 'y' to 'nodeEnvironmentCheck'
// - Resolved require(705753) to 'node-environment-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 745385
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var a;
  var u;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var safeGlobalPropertyGet = require("safe-global-property-get") /*id: 241127*/;
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var l = require("set-immediate-polyfill") /*id: 264051*/.set;
  var queuePolyfill = require("queue-polyfill") /*id: 227116*/;
  var iosDeviceDetector = require("ios-device-detector") /*id: 739236*/;
  var iosPebbleEnvCheck = require("ios-pebble-env-check") /*id: 394493*/;
  var isWebosPlatform = require("is-webos-platform") /*id: 986221*/;
  var nodeEnvironmentCheck = require("node-environment-check") /*id: 705753*/;
  var g = globalObjectPolyfill.MutationObserver || globalObjectPolyfill.WebKitMutationObserver;
  var b = globalObjectPolyfill.document;
  var w = globalObjectPolyfill.process;
  var m = globalObjectPolyfill.Promise;
  var x = safeGlobalPropertyGet("queueMicrotask");
  if (!x) {
    var A = new queuePolyfill();
    function E() {
      var t;
      var r;
      for (nodeEnvironmentCheck && (t = w.domain) && t.exit(); r = A.get();) {
        try {
          r();
        } catch (t) {
          if (A.head) {
            n();
          }
          throw t;
        }
      }
      if (t) {
        t.enter();
      }
    }
    if (iosDeviceDetector || nodeEnvironmentCheck || isWebosPlatform || !g || !b) {
      if (!iosPebbleEnvCheck && m && m.resolve) {
        (a = m.resolve(undefined)).constructor = m;
        u = safeFunctionBind(a.then, a);
        n = function () {
          u(E);
        };
      } else if (nodeEnvironmentCheck) {
        n = function () {
          w.nextTick(E);
        };
      } else {
        l = safeFunctionBind(l, globalObjectPolyfill);
        n = function () {
          l(E);
        };
      }
    } else {
      o = true;
      i = b.createTextNode("");
      new g(E).observe(i, {
        characterData: true
      });
      n = function () {
        i.data = o = !o;
      };
    }
    x = function (t) {
      if (!A.head) {
        n();
      }
      A.add(t);
    };
  }
  module.exports = x;
}