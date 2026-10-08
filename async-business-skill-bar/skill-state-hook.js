// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'useSkillState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 377944
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var useStateRefHook = require("use-state-ref-hook") /*id: 739141*/;
  var reactUsePreviousRef = require("react-use-previous-ref") /*id: 744719*/;
  var skillPinModalCallback = require("skill-pin-modal-callback") /*id: 381053*/;
  let c = e => {
    let {
      defaultValue: n,
      initialValue: c = n,
      value: d,
      onChange: u,
      isEqual: h = Object.is,
      allowUndefined: f = false
    } = e;
    let [p, m, v] = useStateRefHook.useStateRef(d ?? c);
    let g = reactCoreLibraryReexport.useRef(f ? d : d ?? p);
    let _ = (e, t) => isUndefinedCheck.isUndefined(e) || isUndefinedCheck.isUndefined(t) ? e === t : h(e, t);
    let b = reactUsePreviousRef.usePreviousRef({
      value: d,
      isEqual: _
    });
    let y = reactUsePreviousRef.usePreviousRef({
      value: p,
      isEqual: _
    });
    let w = skillPinModalCallback.useSkillPinCallback((e, t, n) => isUndefinedCheck.isUndefined(t) ? !isUndefinedCheck.isUndefined(e) && (!!n || f) : isUndefinedCheck.isUndefined(e) ? isUndefinedCheck.isUndefined(t) : !_(e, t));
    if (isUndefinedCheck.isUndefined(b.current) || _(b.current, d)) {
      if (!isUndefinedCheck.isUndefined(y.current) && !_(y.current, p)) {
        g.current = p;
      }
    } else {
      g.current = d;
    }
    let S = skillPinModalCallback.useSkillPinCallback(e => {
      let t = v();
      let n = isFunctionUtil_1.isFunction(e) ? e(t) : e;
      if (w(n, d, true)) {
        if (u != null) {
          u(n);
        }
      }
      m(n);
    });
    return [g.current ?? n, S];
  };
  require.d(exports, {
    useSkillState: function () {
      return c;
    }
  });
}