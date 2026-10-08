// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createResourceHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 784182
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useOnUnmountHook = require("use-on-unmount-hook") /*id: 297204*/;
  var arrayEqualsUtil_1 = require("array-equals-util_1") /*id: 788205*/;
  var browserDomValueUnwrap = require("browser-dom-value-unwrap") /*id: 999608*/;
  exports.createResourceHook = function (e) {
    return function (t, n, s) {
      var u = reactCoreLibraryReexport.useRef(false);
      var c = reactCoreLibraryReexport.useRef([]);
      var l = reactCoreLibraryReexport.useRef([]);
      var f = reactCoreLibraryReexport.useRef();
      e(function () {
        var e;
        var r = (Array.isArray(s) ? s : [s]).map(function (e) {
          return browserDomValueUnwrap.unwrapBrowserValue(e);
        });
        if (!u.current) {
          u.current = true;
          c.current = r;
          l.current = n;
          f.current = t();
          return;
        }
        if (r.length !== c.current.length || !arrayEqualsUtil_1.areArraysEqual(r, c.current) || !arrayEqualsUtil_1.areArraysEqual(n, l.current)) {
          if ((e = f.current) !== null && e !== undefined) {
            e.call(f);
          }
          c.current = r;
          l.current = n;
          f.current = t();
        }
      });
      useOnUnmountHook.useOnUnmount(function () {
        var e;
        if ((e = f.current) !== null && e !== undefined) {
          e.call(f);
        }
        u.current = false;
      });
    };
  };
}