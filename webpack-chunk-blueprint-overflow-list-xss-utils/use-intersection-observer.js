// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useIntersection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 774639
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  require("intersection-observer-polyfill") /*id: 326147*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var browserDomValueUnwrap = require("browser-dom-value-unwrap") /*id: 999608*/;
  var useResourceEffectHook_1 = require("use-resource-effect-hook_1") /*id: 404507*/;
  exports.useIntersection = function (e, t) {
    var n = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState(), 2);
    var s = n[0];
    var u = n[1];
    var c = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState(), 2);
    var l = c[0];
    var f = c[1];
    useResourceEffectHook_1.useResourceEffect(function () {
      var n = browserDomValueUnwrap.unwrapBrowserValue(e);
      if (n) {
        var i = new IntersectionObserver(function (e) {
          var t;
          var n;
          try {
            var i = typescriptRuntimeHelpers.iteratorValues(e);
            var o = i.next();
            for (; !o.done; o = i.next()) {
              var a = o.value;
              f(a.intersectionRatio);
              u(a.isIntersecting);
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              if (o && !o.done && (n = i.return)) {
                n.call(i);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
        }, typescriptRuntimeHelpers.objectAssign(typescriptRuntimeHelpers.objectAssign({}, t), {
          root: browserDomValueUnwrap.unwrapBrowserValue(t == null ? undefined : t.root)
        }));
        i.observe(n);
        return function () {
          i.disconnect();
        };
      }
    }, [t == null ? undefined : t.rootMargin, t == null ? undefined : t.threshold], e);
    return [s, l];
  };
}