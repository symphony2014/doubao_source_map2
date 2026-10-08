// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'n' to 'checkIconComponent'
// - Resolved require(414617) to 'check-icon-component'
// - Renamed variable 'i' to 'reactCircleIcon'
// - Resolved require(833550) to 'react-circle-icon'
// - Renamed variable 's' to 'radixDropdownMenuComponents'
// - Resolved require(86240) to 'radix-dropdown-menu-components'
// - Renamed variable 'o' to 'classNamesMergeUtil'
// - Resolved require(67381) to 'class-names-merge-util'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'u' to 'userAgentDeviceDetector_1'
// - Resolved require(720848) to 'user-agent-device-detector_1'
// - Renamed variable 'f' to 'svgCheckIcon'
// - Resolved require(362340) to 'svg-check-icon'
// - Renamed variable 'm' to 'classVariantBuilderUtil'
// - Resolved require(885479) to 'class-variant-builder-util'
// - Updated imported property 'KX' to 'isMobileOrIos' (module 720848)
// - Updated imported property 'fC' to 'DropdownMenu' (module 86240)
// - Updated imported property '__' to 'DropdownMenuLabel' (module 86240)
// - Updated imported property 'ck' to 'DropdownMenuItem' (module 86240)
// - Updated imported property 'Z0' to 'DropdownMenuSeparator' (module 86240)
// - Updated imported property 'VY' to 'DropdownMenuContent' (module 86240)
// - Updated imported property 'Uv' to 'DropdownMenuPortal' (module 86240)
// - Updated imported property 'tu' to 'DropdownMenuSubContent' (module 86240)
// - Updated imported property 'fF' to 'DropdownMenuSubTrigger' (module 86240)
// - Updated imported property 'xz' to 'DropdownMenuTrigger' (module 86240)
// - Updated imported property 'ZA' to 'DropdownMenuGroup' (module 86240)
// - Updated imported property 'oC' to 'DropdownMenuCheckboxItem' (module 86240)
// - Updated imported property 'wU' to 'DropdownMenuItemIndicator' (module 86240)
// - Updated imported property 'Ee' to 'DropdownMenuRadioGroup' (module 86240)
// - Updated imported property 'Rk' to 'DropdownMenuRadioItem' (module 86240)
// - Updated imported property 'Tr' to 'DropdownMenuSub' (module 86240)
// - Updated imported property 'Eh' to 'DropdownMenuArrow' (module 86240)
// - Updated imported property 'cn' to 'mergeClassNames' (module 67381)
// - Updated imported property 'j' to 'createVariantClassNames' (module 885479)
// - Updated imported property 's' to 'CheckIcon' (module 362340)
// - Updated imported property 'Z' to 'CheckIcon' (module 414617)
// - Updated imported property 'Z' to 'CircleIcon' (module 833550)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10991.1ee21c16.js
         * chunkId: 10991
         * moduleId: 491728
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var checkIconComponent = require("check-icon-component") /*id: 414617*/;
  var reactCircleIcon = require("react-circle-icon") /*id: 833550*/;
  var radixDropdownMenuComponents = require("radix-dropdown-menu-components") /*id: 86240*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = reactCoreLibraryReexport.createContext({
    open: false,
    setOpen: () => {},
    isHoveringMenuContentRef: reactCoreLibraryReexport.createRef(),
    updateIsHoveringMenuContent: () => {}
  });
  let c = () => reactCoreLibraryReexport.useContext(d);
  var userAgentDeviceDetector_1 = require("user-agent-device-detector_1") /*id: 720848*/;
  function h(e) {
    let {
      ...t
    } = e;
    let a = userAgentDeviceDetector_1.isMobileOrIos();
    let {
      modal: n,
      ...i
    } = t;
    let {
      trigger: o = "click"
    } = t;
    if (a) {
      o = "click";
    }
    let [c, h] = reactCoreLibraryReexport.useState(false);
    let p = reactCoreLibraryReexport.useRef(false);
    let f = ["contextMenu", "hover"].includes(o);
    let g = f ? {
      onOpenChange: e => {
        h(e);
      },
      open: c
    } : {};
    let m = o !== "hover" && n;
    reactCoreLibraryReexport.useEffect(() => {
      if (f) {
        var e;
        if (t != null && (e = t.onOpenChange) !== null && e !== undefined) {
          e.call(t, c);
        }
      }
    }, [c]);
    return reactJsxRuntimeCoreReexport.jsx(d.Provider, {
      value: {
        open: c,
        setOpen: h,
        isHoveringMenuContentRef: p,
        updateIsHoveringMenuContent: e => {
          p.current = e;
        },
        trigger: o
      },
      children: reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenu, {
        "data-slot": "dropdown-menu",
        modal: m,
        ...i,
        ...g
      })
    });
  }
  function p(e) {
    let {
      className: t,
      ...a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuLabel, {
      "data-slot": "dropdown-menu-label",
      className: classNamesMergeUtil.mergeClassNames(`
          h-30 truncate px-10 pt-8 pb-4
          [font-size:12px]
          leading-18
          [font-weight:500]
          text-dbx-text-tertiary
        `, t),
      ...a
    });
  }
  var svgCheckIcon = require("svg-check-icon") /*id: 362340*/;
  let g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuItem, {
      "data-slot": "dropdown-menu-item",
      "data-selected": r == null ? undefined : r.active,
      className: classNamesMergeUtil.mergeClassNames(`
          h-38 w-full items-center truncate rounded-dbx-sm px-10 py-4
          [font-size:14px]
          leading-30
          [font-weight:400]
          text-dbx-text-primary
          focus:bg-dbx-fill-trans-10-hover focus:outline-none
          data-[disabled]:cursor-not-allowed
          [&:not([data-disabled])]:hover:cursor-pointer
          [&:not([data-disabled])]:hover:bg-dbx-fill-trans-10-hover
        `, a),
      ref: t,
      ...r
    });
  });
  var classVariantBuilderUtil = require("class-variant-builder-util") /*id: 885479*/;
  let x = classVariantBuilderUtil.createVariantClassNames("flex", {
    variants: {
      direction: {
        horizontal: "",
        vertical: "h-auto py-8"
      }
    },
    defaultVariants: {
      direction: "horizontal"
    }
  });
  let v = classVariantBuilderUtil.createVariantClassNames("mr-8 flex size-16 flex-shrink-0 text-dbx-text-primary", {
    variants: {
      direction: {
        horizontal: "",
        vertical: "mt-2 self-start"
      },
      themeType: {
        danger: "text-dbx-function-danger",
        disabled: "text-dbx-text-disable",
        default: ""
      }
    },
    defaultVariants: {
      direction: "horizontal",
      themeType: "default"
    }
  });
  let b = classVariantBuilderUtil.createVariantClassNames("flex flex-1 truncate leading-22", {
    variants: {
      direction: {
        horizontal: "justify-between",
        vertical: "flex-col"
      },
      themeType: {
        danger: "text-dbx-function-danger",
        disabled: "text-dbx-text-disable",
        default: ""
      }
    },
    defaultVariants: {
      direction: "horizontal",
      themeType: "default"
    }
  });
  let C = classVariantBuilderUtil.createVariantClassNames("truncate", {
    variants: {
      direction: {
        horizontal: "h-22 leading-22",
        vertical: "mb-2 h-20 leading-20"
      }
    },
    defaultVariants: {
      direction: "horizontal"
    }
  });
  let w = classVariantBuilderUtil.createVariantClassNames(`
    truncate
    [font-weight:400]
  `, {
    variants: {
      direction: {
        horizontal: `
          ml-8 max-w-140 min-w-28 items-center text-right
          [font-size:14px]
          leading-22
        `,
        vertical: `
          flex flex-col
          [font-size:12px]
          leading-18 whitespace-normal
        `
      },
      themeType: {
        danger: "text-dbx-function-danger",
        disabled: "text-dbx-text-disable",
        default: "text-dbx-text-tertiary"
      }
    },
    defaultVariants: {
      direction: "horizontal",
      themeType: "default"
    }
  });
  let _ = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      direction: {
        horizontal: "",
        vertical: "flex h-20 items-center self-start"
      }
    },
    defaultVariants: {
      direction: "horizontal"
    }
  });
  let y = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      direction: {
        horizontal: "size-14",
        vertical: "size-16"
      },
      themeType: {
        danger: "text-dbx-function-danger",
        disabled: "text-dbx-text-disable",
        default: ""
      }
    },
    defaultVariants: {
      direction: "horizontal",
      themeType: "default"
    }
  });
  let N = e => {
    let {
      icon: t,
      className: a,
      children: n,
      showTick: i = true,
      extraInfo: s,
      classNames: d,
      extraInfoDirection: c = "horizontal",
      rightNode: u,
      themeType: h = "default",
      ...p
    } = e;
    let {
      active: m,
      disabled: N
    } = e;
    let j = h;
    if (N) {
      j = "disabled";
    }
    let L = reactCoreLibraryReexport.useMemo(() => u || i, [u, i]);
    return reactJsxRuntimeCoreReexport.jsxs(g, {
      className: classNamesMergeUtil.mergeClassNames(x({
        direction: c
      }), a, d == null ? undefined : d.wrapper),
      ...p,
      children: [t ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames(v({
          direction: c,
          themeType: j
        }), d == null ? undefined : d.iconWrapper),
        children: reactCoreLibraryReexport.isValidElement(t) ? reactCoreLibraryReexport.cloneElement(t, {
          width: 16,
          height: 16
        }) : t
      }) : null, reactJsxRuntimeCoreReexport.jsxs("div", {
        className: classNamesMergeUtil.mergeClassNames(b({
          direction: c,
          themeType: j
        }), d == null ? undefined : d.middleWrapper),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: classNamesMergeUtil.mergeClassNames(C({
            direction: c
          }), d == null ? undefined : d.content),
          children: n
        }), s ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: classNamesMergeUtil.mergeClassNames(w({
            direction: c,
            themeType: j
          }), d == null ? undefined : d.extraInfo),
          children: s
        }) : null]
      }), L ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames(_({
          direction: c
        }), s && c !== "vertical" ? "ml-4" : "ml-8", d == null ? undefined : d.rightNodeWrapper),
        children: u || (i && m ? reactJsxRuntimeCoreReexport.jsx(svgCheckIcon.CheckIcon, {
          className: classNamesMergeUtil.mergeClassNames(y({
            direction: c,
            themeType: j
          }))
        }) : null)
      }) : null]
    });
  };
  function j(e) {
    let {
      className: t,
      ...a
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuSeparator, {
      "data-slot": "dropdown-menu-separator",
      className: classNamesMergeUtil.mergeClassNames("mx-8 my-4 h-[0.5px] bg-dbx-line-10", t),
      ...a
    });
  }
  let L = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      sideOffset: r = 4,
      align: n = "start",
      side: i = "bottom",
      collisionPadding: d = {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      },
      onCloseAutoFocus: u = e => {
        e.preventDefault();
      },
      ...h
    } = e;
    let {
      trigger: p,
      updateIsHoveringMenuContent: f,
      setOpen: g
    } = c();
    let m = p === "hover" ? {
      onMouseLeave: e => {
        var t;
        if (h != null && (t = h.onMouseLeave) !== null && t !== undefined) {
          t.call(h, e);
        }
        f(false);
        g(false);
      },
      onMouseEnter: e => {
        var t;
        if (h != null && (t = h.onMouseEnter) !== null && t !== undefined) {
          t.call(h, e);
        }
        f(true);
      }
    } : {};
    return reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuContent, {
      "data-slot": "dropdown-menu-content",
      onCloseAutoFocus: u,
      align: n,
      side: i,
      sideOffset: r,
      collisionPadding: d,
      className: classNamesMergeUtil.mergeClassNames(`
          [max-height:min(var(--radix-popper-available-height),480px)]
          max-w-420 min-w-140 overflow-x-hidden overflow-y-auto rounded-dbx-lg
          [border-width:0.5px]
          border-solid border-dbx-line-10 bg-dbx-bg-float p-[3.5px]
          shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02),0px_4px_10px_0px_rgba(0,0,0,0.03),0px_4px_16px_0px_rgba(0,0,0,0.03)]
          data-[side=bottom]:slide-in-from-top-2
          data-[side=left]:slide-in-from-right-2
          data-[side=right]:slide-in-from-left-2
          data-[side=top]:slide-in-from-bottom-2
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=closed]:zoom-out-95
          data-[state=open]:animate-in data-[state=open]:fade-in-0
          data-[state=open]:zoom-in-95
        `, "custom-scrollbar-style", a),
      ref: t,
      ...h,
      ...m
    });
  });
  function z(e) {
    let {
      ...t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuPortal, {
      "data-slot": "dropdown-menu-portal",
      ...t
    });
  }
  function k(e) {
    let {
      className: t,
      sideOffset: a = 4,
      style: r,
      alignOffset: n = -4,
      collisionPadding: i = {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      },
      ...d
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuSubContent, {
      collisionPadding: i,
      alignOffset: n,
      sideOffset: a,
      "data-slot": "dropdown-menu-sub-content",
      style: {
        ...r,
        "--tw-animation-duration": "300ms"
      },
      className: classNamesMergeUtil.mergeClassNames(`
          [max-height:min(var(--radix-popper-available-height),480px)]
          max-w-420 min-w-140 overflow-x-hidden overflow-y-auto rounded-dbx-lg
          [border-width:0.5px]
          border-solid border-dbx-line-10 bg-dbx-bg-float p-[3.5px]
          shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02),0px_4px_10px_0px_rgba(0,0,0,0.03),0px_4px_16px_0px_rgba(0,0,0,0.03)]
          data-[side=bottom]:slide-in-from-top-2
          data-[side=left]:slide-in-from-right-2
          data-[side=right]:slide-in-from-left-2
          data-[side=top]:slide-in-from-bottom-2
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=closed]:zoom-out-95
          data-[state=open]:animate-in data-[state=open]:fade-in-0
          data-[state=open]:zoom-in-95
        `, "custom-scrollbar-style", t),
      ...d
    });
  }
  let E = e => reactJsxRuntimeCoreReexport.jsx("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: reactJsxRuntimeCoreReexport.jsx("path", {
      d: "M8.29288 4.70703C7.90235 4.31651 7.90235 3.68349 8.29288 3.29297C8.6834 2.90244 9.31642 2.90244 9.70694 3.29297L16.8583 10.4443C17.7175 11.3035 17.7175 12.6965 16.8583 13.5557L9.70694 20.707C9.31642 21.0976 8.6834 21.0976 8.29288 20.707C7.90235 20.3165 7.90235 19.6835 8.29288 19.293L15.4442 12.1416C15.5223 12.0635 15.5224 11.9365 15.4442 11.8584L8.29288 4.70703Z",
      fill: "currentColor"
    })
  });
  function T(e) {
    let {
      className: t,
      children: a,
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(radixDropdownMenuComponents.DropdownMenuSubTrigger, {
      "data-slot": "dropdown-menu-sub-trigger",
      className: classNamesMergeUtil.mergeClassNames(`
          flex h-38 w-full items-center truncate rounded-dbx-sm px-10 py-4
          [font-size:14px]
          [font-weight:400]
          text-dbx-text-primary
          hover:cursor-pointer
          focus:bg-dbx-fill-trans-10-hover focus:outline-none
          data-[disabled]:cursor-not-allowed
          data-[state=open]:bg-dbx-fill-trans-10-hover
          [&:not([data-disabled])]:hover:bg-dbx-fill-trans-10-hover
        `, t),
      ...r,
      children: [a, reactJsxRuntimeCoreReexport.jsx(E, {
        className: "ml-auto size-12 text-dbx-text-tertiary"
      })]
    });
  }
  let M = classVariantBuilderUtil.createVariantClassNames("flex", {
    variants: {
      direction: {
        horizontal: "",
        vertical: "h-auto py-8"
      }
    },
    defaultVariants: {
      direction: "horizontal"
    }
  });
  let D = classVariantBuilderUtil.createVariantClassNames("mr-8 size-16 flex-shrink-0 text-dbx-text-primary", {
    variants: {
      direction: {
        horizontal: "",
        vertical: "mt-2 self-start"
      },
      themeType: {
        danger: "text-dbx-function-danger",
        disabled: "text-dbx-text-disable",
        default: ""
      }
    },
    defaultVariants: {
      direction: "horizontal",
      themeType: "default"
    }
  });
  let P = classVariantBuilderUtil.createVariantClassNames("flex flex-1 truncate leading-22", {
    variants: {
      direction: {
        horizontal: "justify-between",
        vertical: "flex-col"
      },
      themeType: {
        danger: "text-dbx-function-danger",
        disabled: "text-dbx-text-disable",
        default: ""
      }
    },
    defaultVariants: {
      direction: "horizontal",
      themeType: "default"
    }
  });
  let R = classVariantBuilderUtil.createVariantClassNames("truncate", {
    variants: {
      direction: {
        horizontal: "h-22 leading-22",
        vertical: "mb-2 h-20 leading-20"
      }
    },
    defaultVariants: {
      direction: "horizontal"
    }
  });
  let S = classVariantBuilderUtil.createVariantClassNames(`
    truncate
    [font-weight:400]
  `, {
    variants: {
      direction: {
        horizontal: `
          ml-8 max-w-140 min-w-28 items-center text-right
          [font-size:14px]
          leading-22
        `,
        vertical: `
          flex flex-col
          [font-size:12px]
          leading-18 whitespace-normal
        `
      },
      themeType: {
        danger: "text-dbx-function-danger",
        disabled: "text-dbx-text-disable",
        default: "text-dbx-text-tertiary"
      }
    },
    defaultVariants: {
      direction: "horizontal",
      themeType: "default"
    }
  });
  let A = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      direction: {
        horizontal: "",
        vertical: "flex h-20 items-center self-start"
      }
    },
    defaultVariants: {
      direction: "horizontal"
    }
  });
  let $ = classVariantBuilderUtil.createVariantClassNames("size-12 text-dbx-text-tertiary", {
    variants: {
      direction: {
        horizontal: "",
        vertical: ""
      },
      themeType: {
        danger: "text-dbx-function-danger",
        disabled: "text-dbx-text-disable",
        default: ""
      }
    },
    defaultVariants: {
      direction: "horizontal",
      themeType: "default"
    }
  });
  let B = e => {
    let {
      icon: t,
      className: a,
      children: n,
      extraInfo: i,
      classNames: d,
      extraInfoDirection: c = "horizontal",
      themeType: u = "default",
      ...h
    } = e;
    let {
      disabled: p
    } = e;
    let f = u;
    if (p) {
      f = "disabled";
    }
    return reactJsxRuntimeCoreReexport.jsxs(radixDropdownMenuComponents.DropdownMenuSubTrigger, {
      "data-slot": "dropdown-menu-sub-trigger",
      className: classNamesMergeUtil.mergeClassNames(`
          flex h-38 w-full items-center truncate rounded-dbx-sm px-10 py-4
          [font-size:14px]
          [font-weight:400]
          text-dbx-text-primary
          hover:cursor-pointer
          focus:bg-dbx-fill-trans-10-hover focus:outline-none
          data-[disabled]:cursor-not-allowed
          data-[state=open]:bg-dbx-fill-trans-10-hover
          [&:not([data-disabled])]:hover:bg-dbx-fill-trans-10-hover
        `, M({
        direction: c
      }), a, d == null ? undefined : d.wrapper),
      ...h,
      children: [t ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames(D({
          direction: c,
          themeType: f
        }), d == null ? undefined : d.iconWrapper),
        children: reactCoreLibraryReexport.isValidElement(t) ? reactCoreLibraryReexport.cloneElement(t, {
          width: 16,
          height: 16
        }) : t
      }) : null, reactJsxRuntimeCoreReexport.jsxs("div", {
        className: classNamesMergeUtil.mergeClassNames(P({
          direction: c,
          themeType: f
        }), d == null ? undefined : d.middleWrapper),
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: classNamesMergeUtil.mergeClassNames(R({
            direction: c
          }), d == null ? undefined : d.content),
          children: n
        }), i ? reactJsxRuntimeCoreReexport.jsx("div", {
          className: classNamesMergeUtil.mergeClassNames(S({
            direction: c,
            themeType: f
          }), d == null ? undefined : d.extraInfo),
          children: i
        }) : null]
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames(A({
          direction: c
        }), i && c !== "vertical" ? "ml-4" : "ml-8", d == null ? undefined : d.rightNodeWrapper),
        children: reactJsxRuntimeCoreReexport.jsx(E, {
          className: classNamesMergeUtil.mergeClassNames($({
            direction: c,
            themeType: f
          }))
        })
      })]
    });
  };
  let O = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      setOpen: a,
      trigger: r,
      isHoveringMenuContentRef: n
    } = c();
    let i = r === "hover" ? {
      onMouseEnter: t => {
        var r;
        if (e != null && (r = e.onMouseEnter) !== null && r !== undefined) {
          r.call(e, t);
        }
        a(true);
      },
      onMouseLeave: t => {
        var r;
        if (e != null && (r = e.onMouseLeave) !== null && r !== undefined) {
          r.call(e, t);
        }
        setTimeout(() => {
          if (!n.current) {
            a(false);
          }
        }, 100);
      }
    } : r === "contextMenu" ? {
      onContextMenu: e => {
        e.preventDefault();
        a(true);
      }
    } : {};
    return reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuTrigger, {
      "data-slot": "dropdown-menu-trigger",
      ref: t,
      ...e,
      ...i
    });
  });
  let F = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuGroup, {
      "data-slot": "dropdown-menu-group",
      ref: t,
      ...e
    });
  });
  let I = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      children: r,
      checked: i,
      ...d
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(radixDropdownMenuComponents.DropdownMenuCheckboxItem, {
      "data-slot": "dropdown-menu-checkbox-item",
      className: classNamesMergeUtil.mergeClassNames(`
          relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2
          pl-8 text-sm outline-hidden select-none
          data-[disabled]:pointer-events-none data-[disabled]:opacity-50
          [&_svg]:pointer-events-none [&_svg]:shrink-0
          [&_svg:not([class*='size-'])]:size-4
        `, a),
      checked: i,
      ref: t,
      ...d,
      children: [reactJsxRuntimeCoreReexport.jsx("span", {
        className: `
          pointer-events-none absolute left-2 flex size-3.5 items-center
          justify-center
        `,
        children: reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuItemIndicator, {
          children: reactJsxRuntimeCoreReexport.jsx(checkIconComponent.CheckIcon, {
            className: "size-4"
          })
        })
      }), r]
    });
  });
  let Z = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuRadioGroup, {
      "data-slot": "dropdown-menu-radio-group",
      ref: t,
      ...e
    });
  });
  let H = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      children: r,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsxs(radixDropdownMenuComponents.DropdownMenuRadioItem, {
      "data-slot": "dropdown-menu-radio-item",
      className: classNamesMergeUtil.mergeClassNames(`
          relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2
          pl-8 text-sm outline-hidden select-none
          data-[disabled]:pointer-events-none data-[disabled]:opacity-50
          [&_svg]:pointer-events-none [&_svg]:shrink-0
          [&_svg:not([class*='size-'])]:size-4
        `, a),
      ref: t,
      ...n,
      children: [reactJsxRuntimeCoreReexport.jsx("span", {
        className: `
          pointer-events-none absolute left-2 flex size-3.5 items-center
          justify-center
        `,
        children: reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuItemIndicator, {
          children: reactJsxRuntimeCoreReexport.jsx(reactCircleIcon.CircleIcon, {
            className: "size-2 fill-current"
          })
        })
      }), r]
    });
  });
  let W = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: a,
      ...r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("span", {
      "data-slot": "dropdown-menu-shortcut",
      className: classNamesMergeUtil.mergeClassNames("ml-auto text-xs tracking-widest", a),
      ref: t,
      ...r
    });
  });
  function V(e) {
    let {
      ...t
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(radixDropdownMenuComponents.DropdownMenuSub, {
      "data-slot": "dropdown-menu-sub",
      ...t
    });
  }
  let U = radixDropdownMenuComponents.DropdownMenuArrow;
  require.r(exports);
  require.d(exports, {
    DbxDropdownMenuSeparator: function () {
      return j;
    },
    DbxDropdownMenuItem: function () {
      return g;
    },
    DbxDropdownMenuCheckboxItem: function () {
      return I;
    },
    DbxDropdownMenuTrigger: function () {
      return O;
    },
    DbxDropdownMenuSubContent: function () {
      return k;
    },
    DbxDropdownMenuLabel: function () {
      return p;
    },
    DbxDropdownMenuPortal: function () {
      return z;
    },
    DropdownMenuSubTriggerWithVariants: function () {
      return B;
    },
    DbxDropdownMenuGroup: function () {
      return F;
    },
    DbxDropdownMenuContent: function () {
      return L;
    },
    DbxDropdownMenu: function () {
      return h;
    },
    DbxDropdownMenuSub: function () {
      return V;
    },
    DbxDropdownMenuRadioItem: function () {
      return H;
    },
    DbxDropdownMenuArrow: function () {
      return U;
    },
    DbxDropdownMenuRadioGroup: function () {
      return Z;
    },
    DbxDropdownMenuShortcut: function () {
      return W;
    },
    DbxDropdownMenuSubTrigger: function () {
      return T;
    },
    DbxDropdownMenuItemWithVariants: function () {
      return N;
    }
  });
}