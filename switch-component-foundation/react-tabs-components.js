// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'aV' to 'TabsList'
// - Renamed export 'fC' to 'Tabs'
// - Renamed export 'xz' to 'TabsTrigger'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 342330
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var rovingFocusGroup = require("roving-focus-group") /*id: 477483*/;
  var reactPresenceComponent = require("react-presence-component") /*id: 292112*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var useTextDirectionHook = require("use-text-direction-hook") /*id: 833962*/;
  var useControllableState = require("use-controllable-state") /*id: 584147*/;
  var useIdHook = require("use-id-hook") /*id: 845738*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var h = "Tabs";
  var [f, m] = reactContextUtils.createContextScope(h, [rovingFocusGroup.rovingFocusGroupScope]);
  var g = rovingFocusGroup.rovingFocusGroupScope();
  var [v, _] = f(h);
  var b = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeTabs: n,
      value: i,
      onValueChange: r,
      defaultValue: a,
      orientation: o = "horizontal",
      dir: l,
      activationMode: f = "automatic",
      ...m
    } = e;
    let g = useTextDirectionHook.useTextDirection(l);
    let [_, b] = useControllableState.useControllableState({
      prop: i,
      onChange: r,
      defaultProp: a ?? "",
      caller: h
    });
    return reactJsxRuntimeCoreReexport.jsx(v, {
      scope: n,
      baseId: useIdHook.useId(),
      value: _,
      onValueChange: b,
      orientation: o,
      dir: g,
      activationMode: f,
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
        dir: g,
        "data-orientation": o,
        ...m,
        ref: t
      })
    });
  });
  b.displayName = h;
  var y = "TabsList";
  var w = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeTabs: n,
      loop: i = true,
      ...r
    } = e;
    let a = _(y, n);
    let l = g(n);
    return reactJsxRuntimeCoreReexport.jsx(rovingFocusGroup.RovingFocusGroup, {
      asChild: true,
      ...l,
      orientation: a.orientation,
      dir: a.dir,
      loop: i,
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
        role: "tablist",
        "aria-orientation": a.orientation,
        ...r,
        ref: t
      })
    });
  });
  w.displayName = y;
  var x = "TabsTrigger";
  var C = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeTabs: n,
      value: i,
      disabled: a = false,
      ...l
    } = e;
    let c = _(x, n);
    let u = g(n);
    let d = S(c.baseId, i);
    let h = E(c.baseId, i);
    let f = i === c.value;
    return reactJsxRuntimeCoreReexport.jsx(rovingFocusGroup.RovingFocusGroupItem, {
      asChild: true,
      ...u,
      focusable: !a,
      active: f,
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.button, {
        type: "button",
        role: "tab",
        "aria-selected": f,
        "aria-controls": h,
        "data-state": f ? "active" : "inactive",
        "data-disabled": a ? "" : undefined,
        disabled: a,
        id: d,
        ...l,
        ref: t,
        onMouseDown: composeHandlers.composeHandlers(e.onMouseDown, e => {
          if (a || e.button !== 0 || e.ctrlKey !== false) {
            e.preventDefault();
          } else {
            c.onValueChange(i);
          }
        }),
        onKeyDown: composeHandlers.composeHandlers(e.onKeyDown, e => {
          if ([" ", "Enter"].includes(e.key)) {
            c.onValueChange(i);
          }
        }),
        onFocus: composeHandlers.composeHandlers(e.onFocus, () => {
          let e = c.activationMode !== "manual";
          if (!f && !a && !!e) {
            c.onValueChange(i);
          }
        })
      })
    });
  });
  C.displayName = x;
  var k = "TabsContent";
  function S(e, t) {
    return `${e}-trigger-${t}`;
  }
  function E(e, t) {
    return `${e}-content-${t}`;
  }
  reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeTabs: n,
      value: r,
      forceMount: a,
      children: o,
      ...c
    } = e;
    let u = _(k, n);
    let d = S(u.baseId, r);
    let h = E(u.baseId, r);
    let f = r === u.value;
    let m = reactCoreLibraryReexport.useRef(f);
    reactCoreLibraryReexport.useEffect(() => {
      let e = requestAnimationFrame(() => m.current = false);
      return () => cancelAnimationFrame(e);
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
      present: a || f,
      children: n => {
        let {
          present: i
        } = n;
        return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.div, {
          "data-state": f ? "active" : "inactive",
          "data-orientation": u.orientation,
          role: "tabpanel",
          "aria-labelledby": d,
          hidden: !i,
          id: h,
          tabIndex: 0,
          ...c,
          ref: t,
          style: {
            ...e.style,
            animationDuration: m.current ? "0s" : undefined
          },
          children: i && o
        });
      }
    });
  }).displayName = k;
  var T = b;
  var j = w;
  var P = C;
  require.d(exports, {
    TabsList: function () {
      return j;
    },
    Tabs: function () {
      return T;
    },
    TabsTrigger: function () {
      return P;
    }
  });
}