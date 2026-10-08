// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'SamanthaTagSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 848347
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arrayFirstElement = require("array-first-element") /*id: 255519*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var reactDeepMemoHook = require("react-deep-memo-hook") /*id: 196129*/;
  var skillStateHook = require("skill-state-hook") /*id: 377944*/;
  var asyncSkillDeepChangeCb = require("async-skill-deep-change-cb") /*id: 29951*/;
  var reactSamanthaTag = require("react-samantha-tag") /*id: 79739*/;
  var f = {
    container: "container-HDLcY4",
    default: "default-qKdXbS",
    small: "small-mmpOJP",
    underline: "underline-WZEhVQ"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function v(e) {
    let {
      size: t = "large",
      theme: n = "default",
      className: o,
      itemClassName: v,
      style: p,
      items: g = [],
      allowEmpty: _ = false,
      mutiple: x = false,
      defaultValue: b,
      value: w,
      onChange: y,
      ...S
    } = e;
    let C = arrayFirstElement.getFirstElement(g);
    let N = reactCoreLibraryReexport.useMemo(() => b ?? (C ? [C.key] : []), [b, C]);
    let j = reactDeepMemoHook.useDeepMemo(() => w, [w]);
    let [M, k] = skillStateHook.useSkillState({
      defaultValue: N,
      value: j,
      isEqual: deepEqualUtil_1.deepEqual,
      onChange: y
    });
    let T = e => {
      k(e);
    };
    reactCoreLibraryReexport.useEffect(() => {
      if (!_ && !M.length) {
        T(N);
      }
    }, [_, M]);
    asyncSkillDeepChangeCb.createDeepChangeCallback(() => {
      let e = M.filter(e => !isUndefinedCheck.isUndefined(g.find(t => t.key === e)));
      T(e.length ? e : N);
    }, [g]);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s(f.container, f[t], f[n], o),
      style: p,
      ...S,
      children: g.map(e => {
        let {
          key: r,
          label: i,
          disabled: o
        } = e;
        let d = !isUndefinedCheck.isUndefined(M.find(e => deepEqualUtil_1.deepEqual(e, r)));
        return reactJsxRuntimeCoreReexport.jsx(reactSamanthaTag.SamanthaTag, {
          size: t,
          theme: n,
          className: s(f.item, {
            [f.selected]: d
          }, v),
          isSelected: d,
          onClick: () => {
            if (!o) {
              if (d) {
                let e = M.filter(e => !deepEqualUtil_1.deepEqual(e, r));
                if (_ || e.length) {
                  T(e);
                }
              } else {
                T(x ? [...M, r] : [r]);
              }
            }
          },
          "data-testid": "tag-item",
          "data-value": r,
          label: i,
          disabled: o
        }, r);
      })
    });
  }
  require.d(exports, {
    SamanthaTagSelector: function () {
      return v;
    }
  });
}