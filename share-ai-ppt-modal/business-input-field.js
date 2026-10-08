// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'BusinessInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 324730
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classVariantBuilderUtil = require("class-variant-builder-util") /*id: 885479*/;
  var closeIconButton = require("close-icon-button") /*id: 195712*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = classVariantBuilderUtil.createVariantClassNames(`
    group flex w-full items-center
    [border-width:1px]
    border-solid border-dbx-line-10 bg-dbx-bg-float
    data-[disabled=true]:cursor-not-allowed
    data-[disabled=true]:bg-dbx-fill-trans-10-disable
    [&:not([data-disabled=true]):not([data-status=error])]:focus-within:border-dbx-line-15
    [&:not([data-disabled=true]):not([data-status=error])]:hover:border-dbx-line-15
  `, {
    variants: {
      size: {
        "": "",
        sm: "h-28 rounded-dbx-md px-[9.5px]",
        md2: "h-32 rounded-dbx-md px-[9.5px]",
        md: "h-38 rounded-dbx-lg px-[11.5px]",
        lg: "h-44 rounded-dbx-xl px-[15.5px]"
      },
      status: {
        error: "border-dbx-function-danger",
        "": ""
      }
    },
    compoundVariants: [{
      size: "sm",
      status: "error",
      class: "px-[9px]"
    }, {
      size: "md2",
      status: "error",
      class: "px-[9px]"
    }, {
      size: "md",
      status: "error",
      class: "px-[11px]"
    }, {
      size: "lg",
      status: "error",
      class: "px-[15px]"
    }],
    defaultVariants: {
      size: "md",
      status: ""
    }
  });
  let d = classVariantBuilderUtil.createVariantClassNames(`
    h-full min-w-0 flex-1
    [font-weight:400]
    text-dbx-text-primary
    [font-style:normal]
    placeholder-[color:var(--dbx-text-tertiary)]
    outline-0
    data-[disabled=true]:cursor-not-allowed
    data-[disabled=true]:text-dbx-text-disable
    data-[disabled=true]:placeholder-[color:var(--color-dbx-text-disable)]
  `, {
    variants: {
      size: {
        "": "",
        sm: `
          [font-size:12px]
          leading-[18px]
        `,
        md2: `
          [font-size:14px]
          leading-[22px]
        `,
        md: `
          [font-size:14px]
          leading-[22px]
        `,
        lg: `
          [font-size:16px]
          leading-[24px]
        `
      }
    },
    defaultVariants: {
      size: "md"
    }
  });
  let c = classVariantBuilderUtil.createVariantClassNames("group-data-[disabled=true]:[&_svg]:text-dbx-text-disable", {
    variants: {
      size: {
        "": "",
        sm: "mr-6",
        md2: "mr-8",
        md: "mr-8",
        lg: "mr-10"
      }
    },
    defaultVariants: {
      size: "md"
    }
  });
  let u = classVariantBuilderUtil.createVariantClassNames("flex h-full items-center justify-center", {
    variants: {
      size: {
        "": "",
        sm: "ml-6",
        md2: "ml-8",
        md: "ml-8",
        lg: "ml-10"
      }
    },
    defaultVariants: {
      size: "md"
    }
  });
  let h = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      classNames: a,
      size: n = "md",
      status: h,
      placeholder: p,
      disabled: f,
      onEnterPress: g,
      onKeyDown: m,
      prefix: x,
      suffix: v,
      showClear: b,
      clearIcon: C,
      onClear: w,
      suffixPosition: _ = "right",
      ...y
    } = e;
    let [N, j] = function (e) {
      let {
        value: t,
        defaultValue: a,
        onChange: n
      } = e;
      let i = t !== undefined;
      let [, s] = reactCoreLibraryReexport.useState({});
      let o = reactCoreLibraryReexport.useRef(i ? t : a);
      if (i) {
        o.current = t;
      }
      return [o.current, (e, t) => {
        let a = typeof e == "function" ? e(o.current) : e;
        if (a !== o.current) {
          o.current = a;
          s({});
          if (n != null) {
            n(a, t);
          }
        }
      }];
    }({
      value: e.value,
      defaultValue: e.defaultValue,
      onChange: e.onChange
    });
    let L = () => {
      if (w != null) {
        w();
      }
      j("", {
        target: {
          value: N
        }
      });
    };
    let z = () => {
      let e = N === undefined || !String(N);
      let t = C || reactJsxRuntimeCoreReexport.jsx(closeIconButton.CloseIconButton, {
        className: "size-[14px]"
      });
      if (b && t && !f) {
        return reactJsxRuntimeCoreReexport.jsx("div", {
          className: classNamesMergeUtil.mergeClassNames(u({
            size: n
          }), e ? "invisible" : "", a == null ? undefined : a.clear),
          onClick: L,
          children: t
        });
      }
    };
    let k = () => v;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: classNamesMergeUtil.mergeClassNames(l({
        size: n,
        status: h
      }), a == null ? undefined : a.wrapper),
      "data-disabled": !!f,
      "data-status": h,
      "data-size": n,
      children: [x ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames(c({
          size: n
        }), a == null ? undefined : a.prefixWrapper),
        children: x
      }) : null, reactJsxRuntimeCoreReexport.jsx("input", {
        ...y,
        value: N,
        "data-disabled": !!f,
        disabled: f,
        ref: t,
        placeholder: p,
        className: classNamesMergeUtil.mergeClassNames(d({
          size: n
        }), a == null ? undefined : a.input),
        onChange: e => {
          j(e.target.value, e);
        },
        onKeyDown: e => {
          if (m != null) {
            m(e);
          }
          if (e.key === "Enter") {
            if (g != null) {
              g(e);
            }
          }
        }
      }), (() => {
        let e = k();
        let t = z();
        if (_ === "left") {
          return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [e, t]
          });
        } else {
          return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
            children: [t, e]
          });
        }
      })()]
    });
  });
  require.d(exports, {
    BusinessInput: function () {
      return h;
    }
  });
}