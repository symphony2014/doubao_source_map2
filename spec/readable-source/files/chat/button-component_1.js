// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Button'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 893534
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactSlotUtils = require("react-slot-utils") /*id: 293688*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var chevronDownIcon_1 = require("chevron-down-icon_1") /*id: 24405*/;
  var chevronDownIcon_1_1 = require("chevron-down-icon_1_1") /*id: 452133*/;
  var spinnerLoadingComponent = require("spinner-loading-component") /*id: 596349*/;
  var useMediaQuery = require("use-media-query") /*id: 797741*/;
  var breakpointConstants = require("breakpoint-constants") /*id: 488875*/;
  let d = e => {
    let {
      size: t,
      variant: n
    } = e;
    if (useMediaQuery.useMediaQuery(`(width < ${breakpointConstants.breakpointConstants["dbx-breakpoint-xs"].valueInPx}px)`)) {
      if (n === "text" || n === "icon") {
        if (t === "sm") {
          return "md";
        } else if (t === "md" || t === "md2") {
          return "lg";
        } else {
          return t;
        }
      } else if (n === "rectangle") {
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
  let m = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: "",
        float: ""
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
    }, {
      variant: "float",
      size: "lg",
      className: "[&_svg:not([class*=\"size-\"])]:size-[18px]"
    }, {
      variant: "float",
      size: ["md", "md2"],
      className: "[&_svg:not([class*=\"size-\"])]:size-[17px]"
    }, {
      variant: "float",
      size: "sm",
      className: "[&_svg:not([class*=\"size-\"])]:size-[16px]"
    }],
    defaultVariants: {
      variant: "rectangle",
      size: "md"
    }
  });
  let g = classVariantBuilderUtil.createVariantClassNames("", {
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
      className: "[&_svg[data-dbx-name=button-caret]:not([class*=\"size-\"])]:size-[16px]"
    }, {
      variant: "rectangle",
      size: ["md", "md2"],
      className: "[&_svg[data-dbx-name=button-caret]:not([class*=\"size-\"])]:size-[12px]"
    }, {
      variant: "rectangle",
      size: "sm",
      className: "[&_svg[data-dbx-name=button-caret]:not([class*=\"size-\"])]:size-[10px]"
    }, {
      variant: ["text", "icon"],
      size: "lg",
      className: "[&_svg[data-dbx-name=button-caret]:not([class*=\"size-\"])]:size-[12px]"
    }, {
      variant: ["text", "icon"],
      size: ["md", "md2"],
      className: "[&_svg[data-dbx-name=button-caret]:not([class*=\"size-\"])]:size-[10px]"
    }, {
      variant: ["text", "icon"],
      size: "sm",
      className: "[&_svg[data-dbx-name=button-caret]:not([class*=\"size-\"])]:size-[8px]"
    }],
    defaultVariants: {
      variant: "rectangle",
      size: "md"
    }
  });
  let f = classVariantBuilderUtil.createVariantClassNames("transition-colors duration-150 ease-out", {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: "",
        float: ""
      },
      color: {
        "brand-filled": "",
        "brand-outline": "",
        "grey-filled": "",
        "grey-outline": "",
        "danger-filled": "",
        "danger-outline": "",
        "neutral-filled": "",
        "neutral-outline": ""
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
      className: "text-dbx-text-disable"
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
        `
    }, {
      variant: "text",
      disabled: true,
      className: "text-dbx-text-disable"
    }, {
      variant: "float",
      color: ["grey-filled", "grey-outline"],
      className: "bg-dbx-bg-float text-dbx-text-primary"
    }, {
      variant: "float",
      color: ["danger-filled", "danger-outline"],
      className: "bg-dbx-bg-float text-dbx-function-danger"
    }, {
      variant: "float",
      color: ["brand-filled", "brand-outline"],
      className: "bg-dbx-bg-float text-dbx-text-highlight"
    }, {
      variant: "float",
      className: `
          after:absolute after:inset-0 after:rounded-full after:bg-transparent
          after:transition-colors after:duration-150 after:ease-out
          after:content-[""]
        `
    }, {
      variant: "float",
      disabled: false,
      className: `
          hover:after:bg-dbx-fill-trans-10-hover
          [&:is(:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])),:where(:is([aria-haspopup="dialog"],[aria-haspopup="menu"])[data-state="open"]:not([data-slot="alert-dialog-trigger"])_*))]:after:bg-dbx-fill-trans-10-hover
        `
    }, {
      variant: "float",
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
        `
    }, {
      variant: "icon",
      disabled: true,
      className: "text-dbx-text-disable"
    }, {
      variant: "rectangle",
      color: "neutral-filled",
      className: "bg-dbx-neutral-1000 text-dbx-text-n00-primary"
    }, {
      variant: "rectangle",
      color: "neutral-filled",
      disabled: false,
      className: `
          hover:bg-dbx-neutral-800
          [&:where([data-state="open"]_*):not(:where([data-radix-popper-content-wrapper]_*))]:bg-dbx-neutral-800
        `
    }, {
      variant: "rectangle",
      color: "neutral-filled",
      disabled: true,
      className: ""
    }, {
      variant: "rectangle",
      color: "neutral-outline",
      className: "bg-transparent text-dbx-text-primary"
    }, {
      variant: "rectangle",
      color: "neutral-outline",
      disabled: false,
      className: `
          hover:bg-dbx-fill-trans-10-hover
          [&:where([data-state="open"]_*):not(:where([data-radix-popper-content-wrapper]_*))]:bg-dbx-fill-trans-10-hover
        `
    }, {
      variant: "rectangle",
      color: "neutral-outline",
      disabled: true,
      className: "text-dbx-text-disable"
    }]
  });
  let p = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: "",
        float: ""
      },
      color: {
        "brand-filled": "",
        "brand-outline": "",
        "grey-filled": "",
        "grey-outline": "",
        "danger-filled": "",
        "danger-outline": "",
        "neutral-filled": "",
        "neutral-outline": ""
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
      color: ["grey-filled", "grey-outline"],
      className: "outline-transparent outline-none"
    }, {
      variant: "text",
      color: ["danger-filled", "danger-outline"],
      className: "outline-transparent outline-none"
    }, {
      variant: "text",
      color: ["brand-filled", "brand-outline"],
      className: "outline-transparent outline-none"
    }, {
      variant: "float",
      color: ["grey-filled", "grey-outline"],
      className: "outline-[1px] outline-offset-[-1px] outline-dbx-line-10"
    }, {
      variant: "float",
      color: ["danger-filled", "danger-outline"],
      className: "outline-[1px] outline-offset-[-1px] outline-dbx-line-10"
    }, {
      variant: "float",
      color: ["brand-filled", "brand-outline"],
      className: "outline-[1px] outline-offset-[-1px] outline-dbx-line-10"
    }, {
      variant: "icon",
      color: ["grey-filled", "grey-outline"],
      className: "outline-transparent outline-none"
    }, {
      variant: "icon",
      color: ["danger-filled", "danger-outline"],
      className: "outline-transparent outline-none"
    }, {
      variant: "icon",
      color: ["brand-filled", "brand-outline"],
      className: "outline-transparent outline-none"
    }, {
      variant: "rectangle",
      color: "neutral-filled",
      className: "outline-transparent outline-none"
    }, {
      variant: "rectangle",
      color: "neutral-outline",
      className: "outline-[1px] outline-offset-[-1px] outline-dbx-line-10 outline-solid"
    }]
  });
  let _ = classVariantBuilderUtil.createVariantClassNames(`
    flex shrink-0 items-center justify-center font-[400] whitespace-nowrap
    transition-all duration-150 select-none
    [&_svg]:shrink-0
  `, {
    variants: {
      variant: {
        rectangle: "",
        text: "",
        icon: "",
        float: ""
      },
      color: {
        "brand-filled": "",
        "brand-outline": "",
        "grey-filled": "",
        "grey-outline": "",
        "danger-filled": "",
        "danger-outline": "",
        "neutral-filled": "",
        "neutral-outline": ""
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
    }, {
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
      size: "lg",
      className: "gap-[4px]"
    }, {
      variant: "icon",
      size: ["md", "md2"],
      className: "gap-[4px]"
    }, {
      variant: "icon",
      size: "sm",
      className: "gap-[2px]"
    }, {
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
      variant: "float",
      className: "rounded-full"
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
    }, {
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
      className: "p-[4px]"
    }, {
      variant: "icon",
      size: ["md", "md2"],
      className: "p-[4px]"
    }, {
      variant: "icon",
      size: "sm",
      className: "p-[4px]"
    }, {
      variant: "float",
      size: "lg",
      className: "p-[13px]"
    }, {
      variant: "float",
      size: ["md", "md2"],
      className: "p-[10px]"
    }, {
      variant: "float",
      size: "sm",
      className: "p-[8px]"
    }, {
      variant: "text",
      size: "lg",
      className: "px-[4px] py-[2px]"
    }, {
      variant: "text",
      size: ["md", "md2"],
      className: "px-[4px] py-[1px]"
    }, {
      variant: "text",
      size: "sm",
      className: "px-[4px] py-[1px]"
    }],
    defaultVariants: {
      variant: "rectangle",
      color: "grey-filled",
      size: "md"
    }
  });
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let b = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: i,
      loading: u = false,
      disabled: c = false,
      variant: h = "rectangle",
      color: b = "grey-filled",
      size: S = "md",
      asChild: P = false,
      withTrailingCaret: C = false,
      leadingIcon: y = null,
      children: E = null,
      classNames: x = {},
      ...T
    } = e;
    let k = P ? reactSlotUtils.Slot : "button";
    let R = d({
      size: S ?? "md",
      variant: h ?? "rectangle"
    });
    let w = h !== "icon" && h !== "float";
    let I = h !== "float";
    let M = h === "text" || h === "icon";
    let A = m({
      variant: h,
      size: R
    }).match(/\bsize-\[(\d+)px\]/)?.[1];
    let D = h === "text" || h === "icon";
    let N = reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [w && y && !u && y, w && y && u && reactJsxRuntimeCoreReexport.jsx(spinnerLoadingComponent.Spinner, {
        size: Number(A)
      }), (!!w || !u) && reactJsxRuntimeCoreReexport.jsx("div", {
        className: "min-w-0 truncate",
        children: E
      }), !w && u && reactJsxRuntimeCoreReexport.jsx(spinnerLoadingComponent.Spinner, {
        size: Number(A)
      }), I && C && M && reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1.ChevronDownIcon, {
        "data-dbx-name": "button-caret",
        className: classNamesMergeUtil.mergeClassNames("h-fit shrink-0", x == null ? undefined : x.trailingCaret)
      }), I && C && !M && reactJsxRuntimeCoreReexport.jsx(chevronDownIcon_1_1.ChevronDownIcon, {
        "data-dbx-name": "button-caret",
        className: classNamesMergeUtil.mergeClassNames("h-fit shrink-0", x == null ? undefined : x.trailingCaret)
      })]
    });
    return reactJsxRuntimeCoreReexport.jsxs(k, {
      ref: t,
      className: classNamesMergeUtil.mergeClassNames(_({
        variant: h,
        color: b,
        size: R,
        disabled: c || u
      }), f({
        variant: h,
        color: b,
        disabled: c || u
      }), p({
        variant: h,
        color: b
      }), m({
        variant: h,
        size: R
      }), h !== "float" && g({
        variant: h,
        size: R
      }), "relative h-fit cursor-pointer", u && "cursor-default", c && "cursor-not-allowed", i),
      disabled: c || u,
      "data-disabled": c,
      "data-loading": u,
      "data-dbx-name": "button",
      ...T,
      children: [N, D && reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames("absolute inset-[-6px] opacity-0")
      })]
    });
  });
  require.d(exports, {
    Button: function () {
      return b;
    }
  });
}