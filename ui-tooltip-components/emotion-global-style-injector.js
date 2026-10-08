// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'useGlobalStyle'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 526096
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var emotionStylesheetFactory = require("emotion-stylesheet-factory") /*id: 992521*/;
  var emotionStylesheetManager = require("emotion-stylesheet-manager") /*id: 399882*/;
  var stringHashMurmur3 = require("string-hash-murmur3") /*id: 138302*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  var l = {};
  var s = emotionStylesheetFactory.createEmotionSheet({
    key: "universe-design"
  });
  function f(e, t = {}) {
    var n = t.disabled;
    var i = n !== undefined && n;
    var f = t.atLeastOne;
    var d = f !== undefined && f;
    var p = reactCoreLibraryReexport.useMemo(function () {
      if (i) {
        return {
          name: "",
          styles: ""
        };
      } else {
        return {
          name: stringHashMurmur3.murmurHash32(e),
          styles: e
        };
      }
    }, [e, i]);
    var v = reactCoreLibraryReexport.useCallback(function () {
      if (!i) {
        var e = `${s.key}-global`;
        if (!l[p.name]) {
          var t = new emotionStylesheetManager.StyleSheetManager({
            key: e,
            nonce: s.sheet.nonce,
            container: s.sheet.container,
            speedy: s.sheet.isSpeedy
          });
          l[p.name] = {
            injectedCount: 0,
            sheet: t
          };
          if (s.sheet.tags.length) {
            var n = iterableToArrayUtil_1_1.iterableToArray(s.sheet.tags, 1);
            t.before = n[0];
          }
          s.insert("", p, t, false);
        }
      }
    }, [i, p]);
    v();
    reactRefEffectUtils.useLayoutEffect(function () {
      if (!i) {
        v();
        var e = l[p.name];
        var t = e.sheet;
        e.injectedCount += 1;
        return function () {
          e.injectedCount -= 1;
          if (e.injectedCount === 0 && !d) {
            t.flush();
            delete l[p.name];
          }
        };
      }
    }, [d, i, v, p.name]);
  }
  require.d(exports, {
    useGlobalStyle: function () {
      return f;
    }
  });
}