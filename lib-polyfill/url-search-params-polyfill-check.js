// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'o' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'i' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'a' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 677599
         */
module.exports = function (module, exports, require) {
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var u = coreJsWksAccess("iterator");
  module.exports = !tryCatchFunctionWrapper(function () {
    var t = new URL("b?a=1&b=2&c=3", "https://a");
    var r = t.searchParams;
    var e = new URLSearchParams("a=1&a=2&b=3");
    var n = "";
    t.pathname = "c%20d";
    r.forEach(function (t, e) {
      r.delete("b");
      n += e + t;
    });
    e.delete("a", 2);
    e.delete("b", undefined);
    return libPolyfillCheck && (!t.toJSON || !e.has("a", 1) || e.has("a", 2) || !e.has("a", undefined) || e.has("b")) || !r.size && (libPolyfillCheck || !es5PropertyDescriptorCheck) || !r.sort || t.href !== "https://a/c%20d?a=1&c=3" || r.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !r[u] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://тест").host !== "xn--e1aybc" || new URL("https://a#б").hash !== "#%D0%B1" || n !== "a1c3" || new URL("https://x", undefined).host !== "x";
  });
}