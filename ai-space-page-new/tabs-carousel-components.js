// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'QI' to 'TabsWrapper'
// - Renamed export 'hU' to 'TabCarousel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 642528
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactTabsComponents = require("react-tabs-components") /*id: 342330*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactTabsComponents.Tabs, {
      "data-slot": "tabs",
      className: classNamesMergeUtil.mergeClassNames("flex flex-col gap-dbx-2", n),
      ref: t,
      ...i
    });
  });
  let s = reactCoreLibraryReexport.createContext({
    type: "primary",
    size: "md"
  });
  let c = s.Provider;
  let u = () => reactCoreLibraryReexport.useContext(s);
  let d = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      ...i
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactTabsComponents.TabsTrigger, {
      "data-slot": "tabs-trigger",
      className: classNamesMergeUtil.mergeClassNames(n),
      ref: t,
      ...i
    });
  });
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var wheelGesturesPlugin = require("wheel-gestures-plugin") /*id: 346928*/;
  var reactCarouselHook = require("react-carousel-hook") /*id: 313344*/;
  var classVariantBuilderUtil = require("class-variant-builder-util") /*id: 885479*/;
  var buttonComponent_1 = require("button-component_1") /*id: 893534*/;
  var userAgentDeviceDetector_1 = require("user-agent-device-detector_1") /*id: 720848*/;
  var chevronRightIcon_1 = require("chevron-right-icon_1") /*id: 839336*/;
  var rightOutlinedIcon = require("right-outlined-icon") /*id: 831095*/;
  let y = reactCoreLibraryReexport.createContext(null);
  function w() {
    let e = reactCoreLibraryReexport.useContext(y);
    if (!e) {
      throw Error("useCarousel must be used within a <Carousel />");
    }
    return e;
  }
  function x(e) {
    let {
      opts: t,
      setApi: n,
      plugins: r = [],
      showMask: l = true,
      variant: s = "DbxButton",
      maskWidth: c,
      variantLengths: u = true,
      className: d,
      children: p,
      ...m
    } = e;
    let [g, v] = reactCarouselHook.useCarousel({
      ...t,
      axis: "x"
    }, [wheelGesturesPlugin.wheelGesturesPlugin(), ...r]);
    let [_, b] = reactCoreLibraryReexport.useState(false);
    let [w, x] = reactCoreLibraryReexport.useState(false);
    let [C, k] = reactCoreLibraryReexport.useState(true);
    let S = reactCoreLibraryReexport.useCallback(e => {
      if (e) {
        b(e.canScrollPrev());
        x(e.canScrollNext());
      }
    }, []);
    let E = reactCoreLibraryReexport.useCallback(e => {
      if (e) {
        k(true);
      }
    }, []);
    let T = reactCoreLibraryReexport.useCallback(e => {
      if (e) {
        k(false);
      }
    }, []);
    let j = reactCoreLibraryReexport.useCallback(() => {
      if (v != null) {
        v.scrollPrev();
      }
    }, [v]);
    let P = reactCoreLibraryReexport.useCallback(() => {
      if (v != null) {
        v.scrollNext();
      }
    }, [v]);
    let N = reactCoreLibraryReexport.useCallback(e => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        j();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        P();
      }
    }, [j, P]);
    reactCoreLibraryReexport.useEffect(() => {
      if (v && n) {
        n(v);
      }
    }, [v, n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (v) {
        S(v);
        v.on("reInit", S);
        v.on("select", S);
        v.on("settle", E);
        v.on("scroll", T);
        return () => {
          v.off("select", S);
          v.off("settle", E);
          v.off("scroll", T);
        };
      }
    }, [v, S]);
    return reactJsxRuntimeCoreReexport.jsx(y.Provider, {
      value: {
        carouselRef: g,
        api: v,
        opts: t,
        variant: s,
        showMask: l,
        maskWidth: c,
        scrollPrev: j,
        scrollNext: P,
        canScrollPrev: _,
        canScrollNext: w,
        carouselSettled: C,
        variantLengths: u
      },
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        onKeyDownCapture: N,
        className: classNamesMergeUtil.mergeClassNames("group/carousel relative", d),
        role: "region",
        "aria-roledescription": "carousel",
        "data-slot": "carousel",
        ...m,
        children: p
      })
    });
  }
  let C = function (e, t, n, i = 64, r = 64) {
    if (n) {
      if (e && t) {
        return {
          WebkitMaskImage: `linear-gradient(to right, transparent 0px, black ${i}px, black calc(100% - ${r}px), transparent 100%)`,
          maskImage: `linear-gradient(to right, transparent 0px, black ${i}px, black calc(100% - ${r}px), transparent 100%)`
        };
      } else if (e) {
        return {
          WebkitMaskImage: `linear-gradient(to right, transparent 0px, black ${i}px, black 100%)`,
          maskImage: `linear-gradient(to right, transparent 0px, black ${i}px, black 100%)`
        };
      } else if (t) {
        return {
          WebkitMaskImage: `linear-gradient(to right, black 0px, black calc(100% - ${r}px), transparent 100%)`,
          maskImage: `linear-gradient(to right, black 0px, black calc(100% - ${r}px), transparent 100%)`
        };
      } else {
        return {};
      }
    } else {
      return {};
    }
  };
  function k(e) {
    let {
      className: t,
      wrapperClassName: n,
      ...i
    } = e;
    let {
      carouselRef: r,
      showMask: l,
      maskWidth: s,
      canScrollPrev: c,
      canScrollNext: u,
      variant: d
    } = w();
    let p = C(c, u, !userAgentDeviceDetector_1.isMobileDevice() && l != null && l, s ?? d === "DbxButton" ? 64 : 40);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      style: p,
      ref: r,
      className: classNamesMergeUtil.mergeClassNames("overflow-hidden", n),
      "data-slot": "carousel-content",
      children: reactJsxRuntimeCoreReexport.jsx("div", {
        className: classNamesMergeUtil.mergeClassNames("flex", "-ml-dbx-3", t),
        ...i
      })
    });
  }
  let S = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      ...i
    } = e;
    let {
      variantLengths: r
    } = w();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: t,
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: classNamesMergeUtil.mergeClassNames("min-w-0 shrink-0 grow-0", {
        "basis-full": !r
      }, "pl-dbx-3", n),
      ...i
    });
  });
  let E = classVariantBuilderUtil.createVariantClassNames(`
    absolute transition-opacity
    group-hover/carousel:opacity-100
    disabled:pointer-events-none disabled:opacity-0
    group-hover/carousel:data-[disabled=true]:opacity-0
  `, {
    variants: {
      variant: {
        DbxButton: "h-dbx-8 w-dbx-8 opacity-0",
        icon: `
          h-full !bg-transparent p-0 text-dbx-text-secondary
          hover:text-dbx-text-primary
          [&_svg:not([class*="size-"])]:size-[14px]
        `
      },
      direction: {
        left: "left-dbx-0",
        right: "right-dbx-0"
      },
      orientation: {
        vertical: "",
        horizontal: `
          top-1/2
          [transform:translateY(-50%)]
        `
      }
    },
    defaultVariants: {
      variant: "DbxButton"
    },
    compoundVariants: [{
      variant: "icon",
      direction: "left",
      className: "h-full pr-dbx-2 pl-0"
    }, {
      variant: "icon",
      direction: "right",
      className: "h-full pr-0 pl-dbx-2"
    }]
  });
  function T(e) {
    let {
      className: t,
      ...n
    } = e;
    let {
      variant: i,
      scrollPrev: r,
      canScrollPrev: l,
      carouselSettled: s
    } = w();
    if (userAgentDeviceDetector_1.isMobileDevice()) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(buttonComponent_1.Button, {
        "data-slot": "carousel-previous",
        variant: i === "DbxButton" ? "float" : "text",
        color: "grey-outline",
        size: "sm",
        className: classNamesMergeUtil.mergeClassNames(E({
          variant: i,
          direction: "left",
          orientation: "horizontal"
        }), !l && "!opacity-0", t),
        disabled: !l && s,
        onClick: r,
        ...n,
        children: [reactJsxRuntimeCoreReexport.jsx(chevronRightIcon_1.ChevronRightIcon, {}), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "sr-only",
          children: "Previous slide"
        })]
      });
    }
  }
  function j(e) {
    let {
      className: t,
      ...n
    } = e;
    let {
      variant: i,
      scrollNext: r,
      canScrollNext: l,
      carouselSettled: s
    } = w();
    if (userAgentDeviceDetector_1.isMobileDevice()) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsxs(buttonComponent_1.Button, {
        "data-slot": "carousel-next",
        variant: i === "DbxButton" ? "float" : "text",
        size: "sm",
        color: "grey-outline",
        className: classNamesMergeUtil.mergeClassNames(E({
          variant: i,
          direction: "right",
          orientation: "horizontal"
        }), !l && "!opacity-0", t),
        disabled: !l && s,
        onClick: r,
        ...n,
        children: [reactJsxRuntimeCoreReexport.jsx(rightOutlinedIcon.RightOutlinedIcon, {}), reactJsxRuntimeCoreReexport.jsx("span", {
          className: "sr-only",
          children: "Next slide"
        })]
      });
    }
  }
  let P = function (e = {}) {
    let t = reactCoreLibraryReexport.useRef(null);
    let [n, r] = reactCoreLibraryReexport.useState({
      isOverflowingX: false,
      isOverflowingY: false,
      isOverflowing: false
    });
    let {
      observeResize: a = true
    } = e;
    let o = () => {
      if (!t.current) {
        return;
      }
      let e = t.current;
      let n = e.scrollWidth > e.clientWidth;
      let i = e.scrollHeight > e.clientHeight;
      r({
        isOverflowingX: n,
        isOverflowingY: i,
        isOverflowing: n || i
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      o();
      if (a && t.current) {
        let e = new ResizeObserver(() => {
          o();
        });
        e.observe(t.current);
        return () => {
          if (t.current) {
            e.unobserve(t.current);
          }
        };
      }
    }, [t.current, a]);
    return {
      ref: t,
      overflowStatus: n
    };
  };
  let N = classVariantBuilderUtil.createVariantClassNames(`
    max-w-224 cursor-pointer truncate
    [font-weight:400]
    data-disabled:cursor-not-allowed data-disabled:text-dbx-text-disable
    data-[state=active]:[font-weight:500]
    data-[state=active]:text-dbx-text-primary
    [&:not([data-disabled])]:hover:text-dbx-text-primary
  `, {
    variants: {
      type: {
        primary: "pl-0! text-dbx-text-tertiary",
        secondary: "bg-dbx-fill-trans-20 text-dbx-text-secondary",
        view: `
          text-dbx-text-secondary
          data-[state=active]:bg-dbx-bg-body-overlay-web
        `
      },
      size: {
        sm: "[font-size:12px]",
        md: "[font-size:14px]",
        lg: "[font-size:16px]"
      }
    },
    compoundVariants: [{
      type: "primary",
      size: "sm",
      className: "h-28 py-5"
    }, {
      type: "primary",
      size: "md",
      className: "h-34 py-6"
    }, {
      type: "primary",
      size: "lg",
      className: `
          h-40 py-8
          hover:[font-weight:500]
        `
    }, {
      type: "secondary",
      size: "sm",
      className: "h-28 rounded-8 px-8 py-5"
    }, {
      type: "secondary",
      size: "md",
      className: "h-32 rounded-8 px-10 py-5"
    }, {
      type: "secondary",
      size: "lg",
      className: "h-38 rounded-10 px-12 py-7"
    }, {
      type: "view",
      size: "sm",
      className: "h-22 rounded-6 px-12 py-2"
    }, {
      type: "view",
      size: "md",
      className: "h-28 rounded-6 px-14 py-3"
    }, {
      type: "view",
      size: "lg",
      className: "h-32 rounded-8 px-16 py-4"
    }],
    defaultVariants: {
      size: "md",
      type: "primary"
    }
  });
  let R = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      type: {
        primary: "",
        secondary: "",
        view: "flex items-center"
      },
      size: {
        sm: "",
        md: "",
        lg: ""
      }
    },
    compoundVariants: [{
      type: "primary",
      size: "sm",
      className: "pl-20!"
    }, {
      type: "primary",
      size: ["md", "lg"],
      className: "pl-24!"
    }, {
      type: "secondary",
      size: "sm",
      className: "pl-8!"
    }, {
      type: "secondary",
      size: "md",
      className: "pl-12!"
    }, {
      type: "secondary",
      size: "lg",
      className: "pl-16!"
    }, {
      type: "view",
      size: "sm",
      className: "pl-2!"
    }, {
      type: "view",
      size: "md",
      className: "pl-2!"
    }, {
      type: "view",
      size: "lg",
      className: "pl-2!"
    }],
    defaultVariants: {
      type: "primary",
      size: "md"
    }
  });
  let I = e => {
    let {
      className: t,
      children: n,
      carouselItemProps: r,
      getPopupContainerTooltip: l,
      ...s
    } = e;
    let {
      className: c
    } = r || {};
    let {
      size: h,
      type: f
    } = u();
    let {
      ref: m,
      overflowStatus: g
    } = P();
    let {
      isOverflowing: v
    } = g;
    let _ = v ? tooltipComponentExports.DbxTooltip : reactCoreLibraryReexport.Fragment;
    let b = v ? {
      getPopupContainer: l || (() => document.body),
      content: n
    } : {};
    return reactJsxRuntimeCoreReexport.jsx(_, {
      ...b,
      children: reactJsxRuntimeCoreReexport.jsx(S, {
        className: classNamesMergeUtil.mergeClassNames(R({
          size: h,
          type: f
        }), c),
        ...r,
        children: reactJsxRuntimeCoreReexport.jsx(d, {
          ...s,
          className: classNamesMergeUtil.mergeClassNames(N({
            size: h,
            type: f
          }), t),
          ref: m,
          children: n
        })
      })
    });
  };
  let O = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactJsxRuntimeCoreReexport.jsx(reactTabsComponents.TabsList, {
      ...e,
      ref: t,
      "data-slot": "tabs-list"
    });
  });
  let M = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      size: {
        sm: "",
        md: "",
        lg: ""
      },
      type: {
        primary: "",
        secondary: "",
        view: "rounded-8 bg-dbx-fill-trans-20 p-2"
      }
    },
    defaultVariants: {
      size: "md",
      type: "primary"
    }
  });
  let D = classVariantBuilderUtil.createVariantClassNames("", {
    variants: {
      size: {
        sm: "",
        md: "",
        lg: ""
      },
      type: {
        primary: "",
        secondary: "",
        view: ""
      }
    },
    compoundVariants: [{
      size: "sm",
      type: "primary",
      className: "!-ml-20"
    }, {
      size: ["md", "lg"],
      type: "primary",
      className: "!-ml-24"
    }, {
      size: "sm",
      type: "secondary",
      className: "!-ml-8"
    }, {
      size: "md",
      type: "secondary",
      className: "!-ml-12"
    }, {
      size: "lg",
      type: "secondary",
      className: "!-ml-16"
    }, {
      size: "sm",
      type: "view",
      className: "!-ml-2"
    }, {
      size: "md",
      type: "view",
      className: "!-ml-2"
    }, {
      size: "lg",
      type: "view",
      className: "!-ml-2"
    }],
    defaultVariants: {
      size: "md",
      type: "primary"
    }
  });
  let A = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      carouselProps: i,
      carouselContentProps: r,
      carouselPreviousProps: l,
      carouselNextProps: s,
      children: c,
      ...d
    } = e;
    let {
      className: p,
      ...h
    } = r || {};
    let {
      size: f,
      type: m
    } = u();
    return reactJsxRuntimeCoreReexport.jsx(O, {
      ...d,
      ref: t,
      "data-slot": "tabs-list",
      className: classNamesMergeUtil.mergeClassNames(n),
      children: reactJsxRuntimeCoreReexport.jsxs(x, {
        showMask: true,
        variant: "icon",
        opts: {
          dragFree: true,
          slidesToScroll: "auto",
          align: "start",
          watchDrag: e => e.canScrollNext() || e.canScrollPrev()
        },
        ...i,
        children: [reactJsxRuntimeCoreReexport.jsx(k, {
          className: classNamesMergeUtil.mergeClassNames(D({
            size: f,
            type: m
          }), p),
          wrapperClassName: M({
            size: f,
            type: m
          }),
          ...h,
          children: c
        }), reactJsxRuntimeCoreReexport.jsx(T, {
          ...l
        }), reactJsxRuntimeCoreReexport.jsx(j, {
          ...s
        })]
      })
    });
  });
  let $ = e => {
    let {
      type: t = "primary",
      size: n = "md",
      tabData: r,
      listProps: a,
      triggerProps: l
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(c, {
      value: {
        type: t,
        size: n
      },
      children: reactJsxRuntimeCoreReexport.jsx(A, {
        ...a,
        children: r.map(e => {
          let {
            disabled: t,
            value: n,
            label: r,
            ...a
          } = e;
          return reactCoreLibraryReexport.createElement(I, {
            ...l,
            ...a,
            disabled: t,
            key: n,
            value: n,
            children: r
          });
        })
      })
    });
  };
  require.d(exports, {
    TabsWrapper: function () {
      return l;
    },
    TabCarousel: function () {
      return $;
    }
  });
}