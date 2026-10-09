// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'cY' to 'SplitButtonRoot'
// - Renamed export 'n5' to 'SplitButtonTrigger'
// - Renamed export 'nj' to 'SplitButtonItem'
// - Renamed export 'hE' to 'SplitButtonLoading'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 920112
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var useMediaQuery = require("use-media-query") /*id: 797741*/;
  var breakpointConstants = require("breakpoint-constants") /*id: 488875*/;
  let o = e => {
    let {
      size: t,
      variant: a
    } = e;
    if (useMediaQuery.useMediaQuery(`(width < ${breakpointConstants.breakpointConstants["dbx-breakpoint-xs"].valueInPx}px)`)) {
      if (a === "text" || a === "icon") {
        if (t === "sm") {
          return "md";
        } else if (t === "md" || t === "md2") {
          return "lg";
        } else {
          return t;
        }
      } else if (a === "rectangle") {
        if (t === "sm") {
          return "md2";
        } else {
          return t;
        }
      } else {
        return t;
      }
    } else {
      return t;
    }
  };
  var classVariantBuilderUtil = require("class-variant-builder-util") /*id: 885479*/;
  let d = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: ""
      },
      size: {
        lg: "",
        md: "",
        md2: "",
        sm: ""
      }
    },
    defaultVariants: {
      variant: "rectangle",
      size: "md"
    },
    compoundVariants: [{
      variant: "rectangle",
      size: "lg",
      className: "[&_svg:not([class*=\"size-\"])]:size-[20px]"
    }, {
      variant: "rectangle",
      size: ["md", "md2"],
      className: "[&_svg:not([class*=\"size-\"])]:size-[16px]"
    }, {
      variant: "rectangle",
      size: "sm",
      className: "[&_svg:not([class*=\"size-\"])]:size-[14px]"
    }, {
      variant: "text",
      size: "lg",
      className: "[&_svg:not([class*=\"size-\"])]:size-[18px]"
    }, {
      variant: "text",
      size: ["md", "md2"],
      className: "[&_svg:not([class*=\"size-\"])]:size-[16px]"
    }, {
      variant: "text",
      size: "sm",
      className: "[&_svg:not([class*=\"size-\"])]:size-[14px]"
    }, {
      variant: "icon",
      size: "lg",
      className: "[&_svg:not([class*=\"size-\"])]:size-[18px]"
    }, {
      variant: "icon",
      size: ["md", "md2"],
      className: "[&_svg:not([class*=\"size-\"])]:size-[16px]"
    }, {
      variant: "icon",
      size: "sm",
      className: "[&_svg:not([class*=\"size-\"])]:size-[14px]"
    }]
  });
  let c = classVariantBuilderUtil.createVariantClassNames("transition-colors duration-150 ease-out", {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: ""
      },
      color: {
        "brand-filled": "",
        "brand-outline": "",
        "grey-filled": "",
        "grey-outline": "",
        "danger-filled": "",
        "danger-outline": ""
      },
      disabled: {
        true: "",
        false: ""
      }
    },
    defaultVariants: {
      variant: "rectangle",
      color: "grey-filled",
      disabled: false
    },
    compoundVariants: [{
      variant: "rectangle",
      color: "brand-filled",
      className: "bg-dbx-text-highlight text-dbx-text-static-white-primary"
    }, {
      variant: "rectangle",
      color: "brand-filled",
      disabled: false,
      className: `
          hover:bg-dbx-fill-highlight-hover
          [&:is(:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])),:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])_*))]:bg-dbx-fill-highlight-hover
        `
    }, {
      variant: "rectangle",
      color: "brand-filled",
      disabled: true,
      className: "bg-dbx-text-highlight-disable"
    }, {
      variant: "rectangle",
      color: "brand-outline",
      className: "bg-transparent text-dbx-text-highlight"
    }, {
      variant: "rectangle",
      color: "brand-outline",
      disabled: false,
      className: `
          hover:bg-dbx-fill-trans-10-hover
          [&:is(:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])),:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])_*))]:bg-dbx-fill-trans-10-hover
        `
    }, {
      variant: "rectangle",
      color: "brand-outline",
      disabled: true,
      className: "text-dbx-text-disable"
    }, {
      variant: "rectangle",
      color: "grey-filled",
      className: "bg-dbx-fill-trans-20 text-dbx-text-primary"
    }, {
      variant: "rectangle",
      color: "grey-filled",
      disabled: false,
      className: `
          hover:bg-dbx-fill-trans-20-hover
          [&:is(:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])),:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])_*))]:bg-dbx-fill-trans-20-hover
        `
    }, {
      variant: "rectangle",
      color: "grey-filled",
      disabled: true,
      className: "bg-dbx-fill-trans-20 text-dbx-text-disable"
    }, {
      variant: "rectangle",
      color: "grey-outline",
      className: "bg-transparent text-dbx-text-primary"
    }, {
      variant: "rectangle",
      color: "grey-outline",
      disabled: false,
      className: `
          hover:bg-dbx-fill-trans-10-hover
          [&:is(:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])),:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])_*))]:bg-dbx-fill-trans-10-hover
        `
    }, {
      variant: "rectangle",
      color: "grey-outline",
      disabled: true,
      className: "text-dbx-text-disable"
    }, {
      variant: "rectangle",
      color: "danger-filled",
      className: "bg-dbx-function-danger text-dbx-static-white"
    }, {
      variant: "rectangle",
      color: "danger-filled",
      disabled: false,
      className: `
          hover:bg-dbx-function-danger-hover
          [&:is(:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])),:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])_*))]:bg-dbx-function-danger-hover
        `
    }, {
      variant: "rectangle",
      color: "danger-filled",
      disabled: true,
      className: "bg-dbx-function-danger-disable"
    }, {
      variant: "rectangle",
      color: "danger-outline",
      className: "bg-transparent text-dbx-function-danger"
    }, {
      variant: "rectangle",
      color: "danger-outline",
      disabled: false,
      className: `
          hover:bg-dbx-fill-trans-10-hover
          [&:is(:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])),:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])_*))]:bg-dbx-fill-trans-10-hover
        `
    }, {
      variant: "rectangle",
      color: "danger-outline",
      disabled: true,
      className: "text-dbx-text-disable"
    }, {
      variant: "text",
      color: ["grey-filled", "grey-outline"],
      className: "bg-transparent text-dbx-text-primary"
    }, {
      variant: "text",
      color: ["danger-filled", "danger-outline"],
      className: "bg-transparent text-dbx-function-danger"
    }, {
      variant: "text",
      color: ["brand-filled", "brand-outline"],
      className: "bg-transparent text-dbx-text-highlight"
    }, {
      variant: "text",
      disabled: false,
      className: `
          hover:bg-dbx-fill-trans-20-hover
          [&:is(:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])),:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])_*))]:bg-dbx-fill-trans-20-hover
          [&:where([data-dbx-ui="button-root"]:hover_*:not(:hover))]:bg-dbx-fill-trans-10-hover
        `
    }, {
      variant: "text",
      disabled: true,
      className: "text-dbx-text-disable"
    }, {
      variant: "icon",
      color: ["grey-filled", "grey-outline"],
      className: "bg-transparent text-dbx-text-primary"
    }, {
      variant: "icon",
      color: ["danger-filled", "danger-outline"],
      className: "bg-transparent text-dbx-function-danger"
    }, {
      variant: "icon",
      color: ["brand-filled", "brand-outline"],
      className: "bg-transparent text-dbx-text-highlight"
    }, {
      variant: "icon",
      disabled: false,
      className: `
          hover:bg-dbx-fill-trans-20-hover
          [&:is(:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])),:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])_*))]:bg-dbx-fill-trans-20-hover
          [&:where([data-dbx-ui="button-root"]:hover_*:not(:hover))]:bg-dbx-fill-trans-10-hover
        `
    }, {
      variant: "icon",
      disabled: true,
      className: "text-dbx-text-disable"
    }]
  });
  let u = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: ""
      },
      color: {
        "brand-filled": "",
        "brand-outline": "",
        "grey-filled": "",
        "grey-outline": "",
        "danger-filled": "",
        "danger-outline": ""
      }
    },
    compoundVariants: [{
      variant: "rectangle",
      color: "brand-filled",
      className: "outline-transparent outline-none"
    }, {
      variant: "rectangle",
      color: "brand-outline",
      className: "outline-[1px] outline-offset-[-1px] outline-dbx-line-10 outline-solid"
    }, {
      variant: "rectangle",
      color: "grey-filled",
      className: "outline-transparent outline-none"
    }, {
      variant: "rectangle",
      color: "grey-outline",
      className: "outline-[1px] outline-offset-[-1px] outline-dbx-line-10 outline-solid"
    }, {
      variant: "rectangle",
      color: "danger-filled",
      className: "outline-transparent outline-none"
    }, {
      variant: "rectangle",
      color: "danger-outline",
      className: "outline-[1px] outline-offset-[-1px] outline-dbx-line-10 outline-solid"
    }, {
      variant: "text",
      className: "outline-transparent outline-none"
    }, {
      variant: "icon",
      className: "outline-transparent outline-none"
    }]
  });
  let h = classVariantBuilderUtil.createVariantClassNames(`
    flex h-fit w-fit shrink-0 grow-0 items-center justify-center font-[400]
    whitespace-nowrap transition-all duration-150 select-none
    [&_svg]:shrink-0
  `, {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: ""
      },
      color: {
        "brand-filled": "",
        "brand-outline": "",
        "grey-filled": "",
        "grey-outline": "",
        "danger-filled": "",
        "danger-outline": ""
      },
      size: {
        lg: "",
        md: "",
        md2: "",
        sm: ""
      },
      disabled: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [{
      size: "lg",
      className: "text-[16px] leading-[24px]"
    }, {
      size: ["md", "md2"],
      className: "text-[14px] leading-[22px]"
    }, {
      size: "sm",
      className: "text-[12px] leading-[18px]"
    }],
    defaultVariants: {
      variant: "rectangle",
      color: "grey-filled",
      size: "md"
    }
  });
  let p = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: ""
      },
      size: {
        lg: "",
        md: "",
        md2: "",
        sm: ""
      }
    },
    compoundVariants: [{
      variant: "rectangle",
      size: "lg",
      className: "rounded-dbx-xl"
    }, {
      variant: "rectangle",
      size: "md",
      className: "rounded-dbx-lg"
    }, {
      variant: "rectangle",
      size: "md2",
      className: "rounded-dbx-md"
    }, {
      variant: "rectangle",
      size: "sm",
      className: "rounded-dbx-md"
    }, {
      variant: "icon",
      size: "lg",
      className: "rounded-dbx-sm"
    }, {
      variant: "icon",
      size: ["md", "md2"],
      className: "rounded-dbx-sm"
    }, {
      variant: "icon",
      size: "sm",
      className: "rounded-dbx-sm"
    }, {
      variant: "text",
      size: "lg",
      className: "rounded-dbx-md"
    }, {
      variant: "text",
      size: ["md", "md2"],
      className: "rounded-dbx-sm"
    }, {
      variant: "text",
      size: "sm",
      className: "rounded-dbx-sm"
    }],
    defaultVariants: {
      variant: "rectangle",
      size: "md"
    }
  });
  let f = reactCoreLibraryReexport.createContext(null);
  let g = () => {
    let e = reactCoreLibraryReexport.useContext(f);
    if (!e) {
      throw Error("DbxSplitButton.* compound components must be used within DbxSplitButton.Root");
    }
    return e;
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let x = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      children: a,
      className: r,
      variant: i,
      color: s = "grey-filled",
      size: l = "md",
      disabled: d = false,
      loading: c = false,
      ...g
    } = e;
    let x = o({
      size: l ?? "md",
      variant: i ?? "rectangle"
    });
    return reactJsxRuntimeCoreReexport.jsx(f.Provider, {
      value: {
        variant: i ?? "rectangle",
        color: s ?? "grey-filled",
        size: x,
        disabled: d,
        loading: c
      },
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        "data-dbx-ui": "button-root",
        "data-variant": i,
        "data-color": s,
        "data-size": x,
        ref: t,
        role: "group",
        className: classNamesMergeUtil.mergeClassNames(h({
          variant: i,
          color: s,
          size: x
        }), u({
          variant: i,
          color: s
        }), p({
          variant: i,
          size: x
        }), `
            flex-row flex items-center gap-0 bg-transparent p-0
            hover:bg-transparent
          `, r),
        "data-disabled": d,
        "data-loading": c,
        ...g,
        children: a
      })
    });
  });
  var reactSlotUtils = require("react-slot-utils") /*id: 293688*/;
  var spinnerLoadingComponent = require("spinner-loading-component") /*id: 596349*/;
  let C = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: r,
      asChild: i = false,
      children: s,
      ...o
    } = e;
    let {
      loading: l,
      variant: c,
      size: u
    } = g();
    let h = d({
      variant: c,
      size: u
    }).match(/\bsize-\[(\d+)px\]/)?.[1];
    let p = i ? reactSlotUtils.Slot : "span";
    return reactJsxRuntimeCoreReexport.jsx(p, {
      ref: t,
      className: classNamesMergeUtil.mergeClassNames("shrink-0", r),
      ...o,
      "data-loading": l,
      children: l ? reactJsxRuntimeCoreReexport.jsx(spinnerLoadingComponent.Spinner, {
        size: Number(h)
      }) : s
    });
  });
  let w = classVariantBuilderUtil.createVariantClassNames("gap-[4px]", {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: ""
      },
      size: {
        lg: "",
        md: "",
        md2: "",
        sm: ""
      }
    },
    compoundVariants: [{
      variant: "rectangle",
      size: "lg",
      className: "gap-[6px]"
    }, {
      variant: "rectangle",
      size: ["md", "md2"],
      className: "gap-[4px]"
    }, {
      variant: "rectangle",
      size: "sm",
      className: "gap-[4px]"
    }, {
      variant: "text",
      size: "lg",
      className: "gap-[4px]"
    }, {
      variant: "text",
      size: ["md", "md2"],
      className: "gap-[4px]"
    }, {
      variant: "text",
      size: "sm",
      className: "gap-[2px]"
    }, {
      variant: "icon",
      className: "gap-[0px]"
    }]
  });
  let _ = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: ""
      },
      size: {
        lg: "",
        md: "",
        md2: "",
        sm: ""
      }
    },
    compoundVariants: [{
      variant: "rectangle",
      size: "lg",
      className: "px-[16px] py-[10px]"
    }, {
      variant: "rectangle",
      size: "md",
      className: "px-[12px] py-[8px]"
    }, {
      variant: "rectangle",
      size: "md2",
      className: "px-[10px] py-[5px]"
    }, {
      variant: "rectangle",
      size: "sm",
      className: "px-[8px] py-[5px]"
    }, {
      variant: "icon",
      size: "lg",
      className: "py-[4px] pr-[2px] pl-[4px]"
    }, {
      variant: "icon",
      size: ["md", "md2"],
      className: "py-[4px] pr-[2px] pl-[4px]"
    }, {
      variant: "icon",
      size: "sm",
      className: "py-[4px] pr-[2px] pl-[4px]"
    }, {
      variant: "text",
      size: "lg",
      className: "py-[2px] pr-[3px] pl-[4px]"
    }, {
      variant: "text",
      size: ["md", "md2"],
      className: "py-[1px] pr-[3px] pl-[4px]"
    }, {
      variant: "text",
      size: "sm",
      className: "py-[1px] pr-[2px] pl-[4px]"
    }]
  });
  let y = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      asChild: i = false,
      children: s,
      ...o
    } = e;
    let {
      variant: l,
      color: u,
      size: h,
      disabled: f,
      loading: x
    } = g();
    let b = i ? reactSlotUtils.Slot : "button";
    let y = l === "icon" || l === "text";
    let N = reactCoreLibraryReexport.Children.toArray(s).filter(e => e != null);
    let j = N == null ? undefined : N.find(e => reactCoreLibraryReexport.isValidElement(e) && e.type === C);
    let L = N == null ? undefined : N.filter(e => e !== j);
    return reactJsxRuntimeCoreReexport.jsxs(b, {
      ref: t,
      className: classNamesMergeUtil.mergeClassNames(w({
        variant: l,
        size: h
      }), _({
        variant: l,
        size: h
      }), c({
        variant: l,
        color: u,
        disabled: f || x
      }), p({
        variant: l,
        size: h
      }), `
          relative flex-row flex min-w-0 cursor-pointer items-center
          self-stretch rounded-r-0 outline-none
        `, x && "cursor-default", f && "cursor-not-allowed", d({
        variant: l,
        size: h
      }), a),
      disabled: f || x,
      "data-disabled": f,
      "data-loading": x,
      ...o,
      children: [j, reactJsxRuntimeCoreReexport.jsx("div", {
        className: "min-w-0 truncate",
        children: L
      }), y && reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames("absolute top-[-6px] right-0 bottom-[-6px] left-[-6px] opacity-0")
      })]
    });
  });
  var chevronDownIcon_1 = require("chevron-down-icon_1") /*id: 24405*/;
  var chevronDownIcon_1_1 = require("chevron-down-icon_1_1") /*id: 452133*/;
  let L = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      variant: {
        rectangle: "",
        icon: "",
        text: ""
      },
      size: {
        lg: "",
        md: "",
        md2: "",
        sm: ""
      }
    },
    compoundVariants: [{
      variant: "rectangle",
      size: "lg",
      className: "px-[12px]"
    }, {
      variant: "rectangle",
      size: "md",
      className: "px-[10px]"
    }, {
      variant: "rectangle",
      size: "md2",
      className: "px-[9px]"
    }, {
      variant: "rectangle",
      size: "sm",
      className: "px-[8px]"
    }, {
      variant: "icon",
      size: "lg",
      className: "pr-[4px] pl-[2px]"
    }, {
      variant: "icon",
      size: ["md", "md2"],
      className: "pr-[4px] pl-[2px]"
    }, {
      variant: "icon",
      size: "sm",
      className: "pr-[4px] pl-[1px]"
    }, {
      variant: "text",
      size: "lg",
      className: "pr-[4px] pl-[3px]"
    }, {
      variant: "text",
      size: ["md", "md2"],
      className: "pr-[4px] pl-[3px]"
    }, {
      variant: "text",
      size: "sm",
      className: "pr-[4px] pl-[2px]"
    }]
  });
  let z = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      variant: {
        rectangle: "",
        icon: "",
        text: ""
      },
      size: {
        lg: "",
        md: "",
        md2: "",
        sm: ""
      }
    },
    compoundVariants: [{
      variant: "rectangle",
      size: "lg",
      className: "[&_svg:not([class*=\"size-\"])]:size-[16px]"
    }, {
      variant: "rectangle",
      size: ["md", "md2"],
      className: "[&_svg:not([class*=\"size-\"])]:size-[12px]"
    }, {
      variant: "rectangle",
      size: "sm",
      className: "[&_svg:not([class*=\"size-\"])]:size-[10px]"
    }, {
      variant: ["icon", "text"],
      size: "lg",
      className: "[&_svg:not([class*=\"size-\"])]:size-[12px]"
    }, {
      variant: ["icon", "text"],
      size: ["md", "md2"],
      className: "[&_svg:not([class*=\"size-\"])]:size-[10px]"
    }, {
      variant: ["icon", "text"],
      size: "sm",
      className: "[&_svg:not([class*=\"size-\"])]:size-[8px]"
    }]
  });
  let k = classVariantBuilderUtil.createVariantClassNames("w-[1px]", {
    variants: {
      color: {
        "brand-filled": "",
        "brand-outline": "",
        "grey-outline": "",
        "grey-filled": "",
        "danger-filled": "",
        "danger-outline": ""
      },
      size: {
        lg: "h-[16px]",
        md: "h-[14px]",
        md2: "h-[14px]",
        sm: "h-[12px]"
      }
    },
    compoundVariants: [{
      color: ["brand-filled", "danger-filled"],
      className: "bg-dbx-static-white-40"
    }, {
      color: ["brand-outline", "danger-outline", "grey-outline", "grey-filled"],
      className: "bg-dbx-line-15"
    }]
  });
  let E = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      expanded: r = false,
      children: i,
      ...s
    } = e;
    let {
      variant: o,
      size: l,
      disabled: d,
      loading: u,
      color: h
    } = g();
    let f = o === "rectangle";
    let x = o === "icon" || o === "text";
    let v = o === "icon" || o === "text";
    return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [f && reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames(c({
          variant: o,
          color: h,
          disabled: u || d
        }), "flex items-center justify-center self-stretch outline-none"),
        children: reactJsxRuntimeCoreReexport.jsx("div", {
          className: classNamesMergeUtil.mergeClassNames(k({
            size: l,
            color: h
          }))
        })
      }), reactJsxRuntimeCoreReexport.jsxs("button", {
        ref: t,
        className: classNamesMergeUtil.mergeClassNames(c({
          variant: o,
          color: h,
          disabled: d || u
        }), p({
          variant: o,
          size: l
        }), "relative cursor-pointer self-stretch rounded-l-0 p-0 outline-none", u && "cursor-default", d && "cursor-not-allowed", L({
          variant: o,
          size: l
        }), z({
          variant: o,
          size: l
        }), a),
        disabled: d || u,
        "data-disabled": d,
        "data-loading": u,
        "aria-haspopup": "menu",
        "aria-expanded": r,
        ...s,
        children: [i ?? (v ? reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1.ChevronDownIcon, {}) : reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1_1.ChevronDownIcon, {})), x && reactJsxRuntimeCoreReexport.jsx("div", {
          className: classNamesMergeUtil.mergeClassNames("absolute top-[-6px] right-[-6px] bottom-[-6px] left-0 opacity-0")
        })]
      })]
    });
  });
  require.d(exports, {
    SplitButtonRoot: function () {
      return x;
    },
    SplitButtonTrigger: function () {
      return E;
    },
    SplitButtonItem: function () {
      return y;
    },
    SplitButtonLoading: function () {
      return C;
    }
  });
}