// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'Checkbox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-page-new.29989e25.js
         * chunkId: 32580
         * moduleId: 569376
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classVariantBuilderUtil = require("class-variant-builder-util") /*id: 885479*/;
  var reactMergeRefs = require("react-merge-refs") /*id: 496270*/;
  var reactContextUtils = require("react-context-utils") /*id: 187414*/;
  var composeHandlers = require("compose-handlers") /*id: 999993*/;
  var useControllableState = require("use-controllable-state") /*id: 584147*/;
  var reactUsePreviousHook = require("react-use-previous-hook") /*id: 199025*/;
  var useElementSizeHook = require("use-element-size-hook") /*id: 956289*/;
  var reactPresenceComponent = require("react-presence-component") /*id: 292112*/;
  var reactPrimitiveComponents = require("react-primitive-components") /*id: 301296*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var h = "Checkbox";
  var [f, v] = reactContextUtils.createContextScope(h);
  var [_, g] = f(h);
  function x(e) {
    let {
      __scopeCheckbox: t,
      checked: n,
      children: a,
      defaultChecked: r,
      disabled: o,
      form: l,
      name: d,
      onCheckedChange: c,
      required: u,
      value: p = "on",
      internal_do_not_use_render: f
    } = e;
    let [v, g] = useControllableState.useControllableState({
      prop: n,
      defaultProp: r != null && r,
      onChange: c,
      caller: h
    });
    let [x, w] = reactCoreLibraryReexport.useState(null);
    let [b, C] = reactCoreLibraryReexport.useState(null);
    let y = reactCoreLibraryReexport.useRef(false);
    let k = !x || !!l || !!x.closest("form");
    let S = {
      checked: v,
      disabled: o,
      setChecked: g,
      control: x,
      setControl: w,
      name: d,
      form: l,
      value: p,
      hasConsumerStoppedPropagationRef: y,
      required: u,
      defaultChecked: !j(r) && r,
      isFormControl: k,
      bubbleInput: b,
      setBubbleInput: C
    };
    return reactJsxRuntimeCoreReexport.jsx(_, {
      scope: t,
      ...S,
      children: typeof f == "function" ? f(S) : a
    });
  }
  var w = "CheckboxTrigger";
  var b = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeCheckbox: n,
      onKeyDown: a,
      onClick: o,
      ...s
    } = e;
    let {
      control: d,
      value: c,
      disabled: u,
      checked: h,
      required: f,
      setControl: v,
      setChecked: _,
      hasConsumerStoppedPropagationRef: x,
      isFormControl: b,
      bubbleInput: C
    } = g(w, n);
    let y = reactMergeRefs.useMergeRefs(t, v);
    let k = reactCoreLibraryReexport.useRef(h);
    reactCoreLibraryReexport.useEffect(() => {
      let e = d == null ? undefined : d.form;
      if (e) {
        let t = () => _(k.current);
        e.addEventListener("reset", t);
        return () => e.removeEventListener("reset", t);
      }
    }, [d, _]);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.button, {
      type: "button",
      role: "checkbox",
      "aria-checked": j(h) ? "mixed" : h,
      "aria-required": f,
      "data-state": I(h),
      "data-disabled": u ? "" : undefined,
      disabled: u,
      value: c,
      ...s,
      ref: y,
      onKeyDown: composeHandlers.composeHandlers(a, e => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }),
      onClick: composeHandlers.composeHandlers(o, e => {
        _(e => !!j(e) || !e);
        if (C && b) {
          x.current = e.isPropagationStopped();
          if (!x.current) {
            e.stopPropagation();
          }
        }
      })
    });
  });
  b.displayName = w;
  var C = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeCheckbox: n,
      name: i,
      checked: a,
      defaultChecked: r,
      required: o,
      disabled: l,
      value: s,
      onCheckedChange: d,
      form: c,
      ...u
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(x, {
      __scopeCheckbox: n,
      checked: a,
      defaultChecked: r,
      disabled: l,
      required: o,
      onCheckedChange: d,
      name: i,
      form: c,
      value: s,
      internal_do_not_use_render: e => {
        let {
          isFormControl: i
        } = e;
        return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [reactJsxRuntimeCoreReexport.jsx(b, {
            ...u,
            ref: t,
            __scopeCheckbox: n
          }), i && reactJsxRuntimeCoreReexport.jsx(N, {
            __scopeCheckbox: n
          })]
        });
      }
    });
  });
  C.displayName = h;
  var y = "CheckboxIndicator";
  var k = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeCheckbox: n,
      forceMount: i,
      ...a
    } = e;
    let r = g(y, n);
    return reactJsxRuntimeCoreReexport.jsx(reactPresenceComponent.Presence, {
      present: i || j(r.checked) || r.checked === true,
      children: reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.span, {
        "data-state": I(r.checked),
        "data-disabled": r.disabled ? "" : undefined,
        ...a,
        ref: t,
        style: {
          pointerEvents: "none",
          ...e.style
        }
      })
    });
  });
  k.displayName = y;
  var S = "CheckboxBubbleInput";
  var N = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      __scopeCheckbox: n,
      ...a
    } = e;
    let {
      control: o,
      hasConsumerStoppedPropagationRef: l,
      checked: s,
      defaultChecked: u,
      required: h,
      disabled: f,
      name: v,
      value: _,
      form: x,
      bubbleInput: w,
      setBubbleInput: b
    } = g(S, n);
    let C = reactMergeRefs.useMergeRefs(t, b);
    let y = reactUsePreviousHook.usePrevious(s);
    let k = useElementSizeHook.useElementSize(o);
    reactCoreLibraryReexport.useEffect(() => {
      if (!w) {
        return;
      }
      let e = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set;
      let t = !l.current;
      if (y !== s && e) {
        let n = new Event("click", {
          bubbles: t
        });
        w.indeterminate = j(s);
        e.call(w, !j(s) && s);
        w.dispatchEvent(n);
      }
    }, [w, y, s, l]);
    let N = reactCoreLibraryReexport.useRef(!j(s) && s);
    return reactJsxRuntimeCoreReexport.jsx(reactPrimitiveComponents.primitiveComponents.input, {
      type: "checkbox",
      "aria-hidden": true,
      defaultChecked: u ?? N.current,
      required: h,
      disabled: f,
      name: v,
      value: _,
      form: x,
      ...a,
      tabIndex: -1,
      ref: C,
      style: {
        ...a.style,
        ...k,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
        transform: "translateX(-100%)"
      }
    });
  });
  function j(e) {
    return e === "indeterminate";
  }
  function I(e) {
    if (j(e)) {
      return "indeterminate";
    } else if (e) {
      return "checked";
    } else {
      return "unchecked";
    }
  }
  N.displayName = S;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  let E = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M18.8857 5.58594C19.6667 4.80492 20.9328 4.80498 21.7139 5.58594C22.4949 6.36698 22.4949 7.63301 21.7139 8.41406L11.8389 18.29C10.8235 19.3054 9.17648 19.3054 8.16112 18.29L2.58592 12.7139C1.80497 11.9328 1.8049 10.6668 2.58592 9.88574C3.36694 9.10483 4.63302 9.10483 5.41405 9.88574L9.99998 14.4717L18.8857 5.58594Z",
      fill: "currentColor"
    })
  });
  let M = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M3 12C3 10.8954 3.89543 10 5 10H19C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14H5C3.89543 14 3 13.1046 3 12Z",
      fill: "currentColor"
    })
  });
  let R = classVariantBuilderUtil.createVariantClassNames(`
    block size-[16px] shrink-0 cursor-pointer rounded-dbx-sm border-[1px]
    transition-colors outline-none
  `, {
    variants: {
      checked: {
        true: "",
        false: "",
        indeterminate: ""
      },
      disabled: {
        true: "cursor-not-allowed text-dbx-static-white-70",
        false: "text-dbx-static-white"
      }
    },
    defaultVariants: {
      checked: false,
      disabled: false
    },
    compoundVariants: [{
      disabled: false,
      checked: [true, "indeterminate"],
      className: "border-transparent bg-dbx-text-highlight"
    }, {
      disabled: false,
      checked: [true, "indeterminate"],
      className: "hover:bg-dbx-fill-highlight-hover"
    }, {
      disabled: false,
      checked: false,
      className: `
          border-dbx-neutral-1000-35
          hover:border-dbx-text-highlight
        `
    }, {
      disabled: true,
      checked: false,
      className: "border-dbx-neutral-1000-10 bg-dbx-neutral-1000-5"
    }, {
      disabled: true,
      checked: [true, "indeterminate"],
      className: "border-transparent bg-dbx-neutral-1000-15"
    }]
  });
  classVariantBuilderUtil.createVariantClassNames("");
  let $ = e => {
    var t;
    let {
      className: a,
      onCheckedChange: r,
      ...o
    } = e;
    let [l, s] = reactCoreLibraryReexport.useState((t = o.defaultChecked) !== null && t !== undefined && t);
    let d = o.checked ?? l;
    return reactJsxRuntimeCoreReexport.jsxs(C, {
      "data-slot": "checkbox",
      onCheckedChange: function () {
        var e = arguments.length;
        var t = Array(e);
        var n = 0;
        for (; n < e; n++) {
          t[n] = arguments[n];
        }
        s(t[0]);
        if (r != null) {
          r(...t);
        }
      },
      className: classNamesMergeUtil.mergeClassNames(R({
        checked: d,
        disabled: o.disabled
      }), "relative", a),
      ...o,
      children: [reactJsxRuntimeCoreReexport.jsxs(k, {
        "data-slot": "checkbox-indicator",
        className: "flex items-center justify-center transition-none",
        children: [d === true && reactJsxRuntimeCoreReexport.jsx(E, {
          className: "size-[10px]"
        }), d === "indeterminate" && reactJsxRuntimeCoreReexport.jsx(M, {
          className: "size-[10px]"
        })]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "absolute inset-[-8px] block"
      })]
    });
  };
  require.d(exports, {
    Checkbox: function () {
      return $;
    }
  });
}