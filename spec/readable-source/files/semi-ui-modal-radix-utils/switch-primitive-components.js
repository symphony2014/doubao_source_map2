// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'bU' to 'SwitchThumb'
// - Renamed export 'fC' to 'Switch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 38837.3b0d91b1.js
         * chunkId: 38837
         * moduleId: 490544
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var useControllableState = require("use-controllable-state") /*id: 584147*/;
  var reactUsePreviousHook = require("react-use-previous-hook") /*id: 199025*/;
  var useElementSizeHook = require("use-element-size-hook") /*id: 956289*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var p = "Switch";
  var [f, h] = reactContextUtils.createContextScope(p);
  var [m, g] = f(p);
  var v = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeSwitch: n,
      name: i,
      checked: l,
      defaultChecked: u,
      required: f,
      disabled: h,
      value: g = "on",
      onCheckedChange: v,
      form: y,
      ...b
    } = e;
    let [C, E] = reactCoreLibraryReexport.useState(null);
    let S = reactMergeRefs.useMergeRefs(t, e => E(e));
    let _ = reactCoreLibraryReexport.useRef(false);
    let O = !C || y || !!C.closest("form");
    let [j, P] = useControllableState.useControllableState({
      prop: l,
      defaultProp: u != null && u,
      onChange: v,
      caller: p
    });
    return reactJsxRuntimeCoreReexport.jsxs(m, {
      scope: n,
      checked: j,
      disabled: h,
      children: [reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.button, {
        type: "button",
        role: "switch",
        "aria-checked": j,
        "aria-required": f,
        "data-state": x(j),
        "data-disabled": h ? "" : undefined,
        disabled: h,
        value: g,
        ...b,
        ref: S,
        onClick: composeHandlers.composeHandlers(e.onClick, e => {
          P(e => !e);
          if (O) {
            _.current = e.isPropagationStopped();
            if (!_.current) {
              e.stopPropagation();
            }
          }
        })
      }), O && reactJsxRuntimeCoreReexport.jsx(w, {
        control: C,
        bubbles: !_.current,
        name: i,
        value: g,
        checked: j,
        required: f,
        disabled: h,
        form: y,
        style: {
          transform: "translateX(-100%)"
        }
      })]
    });
  });
  v.displayName = p;
  var y = "SwitchThumb";
  var b = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeSwitch: n,
      ...r
    } = e;
    let o = g(y, n);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.span, {
      "data-state": x(o.checked),
      "data-disabled": o.disabled ? "" : undefined,
      ...r,
      ref: t
    });
  });
  b.displayName = y;
  var w = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeSwitch: n,
      control: o,
      checked: i,
      bubbles: s = true,
      ...c
    } = e;
    let p = reactCoreLibraryReexport.useRef(null);
    let f = reactMergeRefs.useMergeRefs(p, t);
    let h = reactUsePreviousHook.usePrevious(i);
    let m = useElementSizeHook.useElementSize(o);
    reactCoreLibraryReexport.useEffect(() => {
      let e = p.current;
      if (!e) {
        return;
      }
      let t = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
      if (h !== i && t) {
        let n = new Event("click", {
          bubbles: s
        });
        t.call(e, i);
        e.dispatchEvent(n);
      }
    }, [h, i, s]);
    return reactJsxRuntimeCoreReexport.jsx("input", {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: i,
      ...c,
      tabIndex: -1,
      ref: f,
      style: {
        ...c.style,
        ...m,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    });
  });
  function x(e) {
    if (e) {
      return "checked";
    } else {
      return "unchecked";
    }
  }
  w.displayName = "SwitchBubbleInput";
  var C = v;
  var E = b;
  require.d(exports, {
    SwitchThumb: function () {
      return E;
    },
    Switch: function () {
      return C;
    }
  });
}