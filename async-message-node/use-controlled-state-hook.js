// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'useControlledState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-panel.03616ed7.js
         * chunkId: 16287
         * moduleId: 263107
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var asyncSkillDeepChangeCb = require("async-skill-deep-change-cb") /*id: 29951*/;
  let o = e => {
    let {
      defaultValue: t,
      initialValue: n = t,
      value: o,
      onChange: s,
      isEqual: l = Object.is,
      allowUndefined: u = false
    } = e;
    let [c, d] = reactCoreLibraryReexport.useState(o ?? n);
    let f = (e, t, n) => isUndefinedCheck.isUndefined(t) ? !isUndefinedCheck.isUndefined(e) && (!!n || u) : isUndefinedCheck.isUndefined(e) ? isUndefinedCheck.isUndefined(t) : !l(e, t);
    asyncSkillDeepChangeCb.createDeepChangeCallback(() => {
      if (f(c, o, false)) {
        d(o ?? t);
      }
    }, [o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (f(c, o, true)) {
        if (s != null) {
          s(c);
        }
      }
    }, [c]);
    return [c, d];
  };
  require.d(exports, {
    useControlledState: function () {
      return o;
    }
  });
}