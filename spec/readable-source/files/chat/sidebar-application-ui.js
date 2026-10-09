// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'SidebarApplicationUI'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 795197
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var chatViewConstants = require("chat-view-constants") /*id: 528191*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var rtlChatCheckIconComponent = require("rtl-chat-check-icon-component") /*id: 690527*/;
  var tooltipComponentExports = require("tooltip-component-exports") /*id: 341865*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      renderIcon: n,
      text: o,
      className: h,
      forceActive: m,
      titleClassName: g,
      state: f,
      onClick: p,
      onShow: _,
      "data-testid": v,
      isOverflowPopover: b,
      isDragging: S,
      isDragOverlay: P,
      isAbstract: C,
      renderText: y,
      renderHint: E,
      renderAfterTitle: x,
      disableTooltip: T,
      ...k
    } = e;
    let R = reactCoreLibraryReexport.useRef(null);
    let [w] = useIntersectionObserver.useIntersection(R, {
      threshold: 0.5
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (w) {
        if (_ != null) {
          _();
        }
      }
    }, [w]);
    let I = throttledOmitPathStringify.omitPathStringify(k, ["NavLink", "url", "target", "isOverflow", "recommendType", "isOver", "hasDragging", "activeId", "popoverTitle", "renderAfterTitle", "disableDrag", "isContainer"]);
    let M = e => {
      var t;
      let n = (t = m ?? e) !== null && t !== undefined && t;
      let i = typeof h == "function" ? h(n) : h;
      return a("group/sidebar_nav_item", "rounded-dbx-lg h-36 px-10 flex  items-center group text-dbx-text-primary cursor-pointer", "relative before:content-[\"\"] before:absolute before:inset-x-0 before:inset-y-0 before:rounded-[inherit] hover:before:bg-dbx-fill-trans-20-hover", {
        "rounded-dbx-sm": b,
        "before:bg-dbx-fill-trans-20": n || P,
        "opacity-60": S && !P
      }, i);
    };
    let A = e => {
      var t;
      let i = (t = m ?? e) !== null && t !== undefined && t;
      let r = reactJsxRuntimeCoreReexport.jsxs("div", {
        className: M(e),
        children: [n({
          isActive: i,
          className: "size-18 shrink-0"
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: a("flex items-center justify-between w-full opacity-0 transition duration-300", {
            "opacity-100": !C,
            "max-dbx-xs:!flex": !b
          }),
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            className: a(g, "truncate ml-[8px] flex-1 min-w-0 flex items-center !text-14 leading-22 text-dbx-text-primary"),
            children: [y ? y({
              inTooltip: false
            }) : o, E ? reactJsxRuntimeCoreReexport.jsx("div", {
              className: a("grow-1 flex justify-end items-center text-dbx-text-disable", "group-hover/sidebar_nav_item:opacity-100"),
              children: E({
                inTooltip: false,
                isActive: i
              })
            }) : null]
          }), i && b && reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
            className: "text-16 text-s-color-brand-primary-default"
          })]
        })]
      });
      return reactJsxRuntimeCoreReexport.jsx(tooltipComponentExports.DbxTooltip, {
        trigger: "hover",
        position: "right",
        getPopupContainer: () => document.body,
        className: a("z-101", {
          hidden: !C || T
        }),
        content: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex items-center gap-6",
          children: [y ? y({
            inTooltip: true
          }) : o, E ? E({
            inTooltip: true
          }) : null]
        }),
        children: r
      });
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: e => {
        R.current = e;
        if (typeof t == "function") {
          t(e);
        } else if (t) {
          t.current = e;
        }
      },
      "data-testid": v,
      ...I,
      children: "NavLink" in k ? reactJsxRuntimeCoreReexport.jsx(k.NavLink, {
        to: k.url,
        state: {
          from: chatViewConstants.chatViewConstants.SIDEBAR,
          ...f
        },
        draggable: false,
        target: k.target,
        onClick: p,
        children: e => {
          let {
            isActive: t
          } = e;
          return A(t);
        }
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        onClick: p,
        children: A()
      })
    });
  });
  var m = {
    "nav-link": "nav-link-IkIer0",
    "drag-overlay": "drag-overlay-lqA0T3",
    dragging: "dragging-BJxtLp",
    "overflow-popover": "overflow-popover-LkFMRl"
  };
  let g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      renderIcon: n,
      text: o,
      popoverTitle: c,
      className: h,
      forceActive: g,
      titleClassName: f,
      state: p,
      renderAfterTitle: _,
      onClick: v,
      onShow: b,
      "data-testid": S,
      isOverflowPopover: P,
      isDragging: C,
      isDragOverlay: y,
      ...E
    } = e;
    let x = reactCoreLibraryReexport.useRef(null);
    let [T] = useIntersectionObserver.useIntersection(x, {
      threshold: 0.5
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (T) {
        if (b != null) {
          b();
        }
      }
    }, [T]);
    let k = throttledOmitPathStringify.omitPathStringify(E, ["NavLink", "url", "target", "isOverflow", "recommendType", "isOver", "hasDragging", "renderHint"]);
    let R = e => {
      var t;
      let n = (t = g ?? e) !== null && t !== undefined && t;
      let i = typeof h == "function" ? h(n) : h;
      return a("group/sidebar_nav_item", "cursor-pointer flex items-center px-8 rounded-dbx-lg h-36 text-dbx-text-primary", "hover:bg-dbx-fill-trans-10-hover", n && "!bg-dbx-bg-float shadow-[var(--dbx-drop-shadow-sm)]", m["nav-link"], C && !y && m.dragging, y && m["drag-overlay"], P && m["overflow-popover"], i);
    };
    let w = e => {
      var t;
      let i = (t = g ?? e) !== null && t !== undefined && t;
      return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [n({
          isActive: i,
          className: "size-18 block box-content p-2 flex-shrink-0"
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "flex w-full items-center justify-between",
          children: [reactJsxRuntimeCoreReexport.jsxs("div", {
            title: c ?? (typeof o == "string" ? o : ""),
            className: a("truncate ml-[8px] flex-1 min-w-0 s-font-small flex items-center", f),
            children: [o, _ ? _({
              isActive: i
            }) : null]
          }), i && P && reactJsxRuntimeCoreReexport.jsx(rtlChatCheckIconComponent.RtlChatCheckIcon, {
            className: "text-16 text-s-color-brand-primary-default"
          })]
        })]
      });
    };
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: e => {
        x.current = e;
        if (typeof t == "function") {
          t(e);
        } else if (t) {
          t.current = e;
        }
      },
      "data-testid": S,
      ...k,
      children: "NavLink" in E ? reactJsxRuntimeCoreReexport.jsx(E.NavLink, {
        to: E.url,
        state: {
          from: chatViewConstants.chatViewConstants.SIDEBAR,
          ...p
        },
        draggable: false,
        className: e => {
          let {
            isActive: t
          } = e;
          return R(t);
        },
        target: E.target,
        onClick: v,
        children: e => {
          let {
            isActive: t
          } = e;
          return w(t);
        }
      }) : reactJsxRuntimeCoreReexport.jsx("div", {
        className: R(),
        onClick: v,
        children: w()
      })
    });
  });
  let f = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      v2: n,
      ...i
    } = e;
    if (n) {
      return reactJsxRuntimeCoreReexport.jsx(h, {
        ...i,
        ref: t
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(g, {
        ...i,
        ref: t
      });
    }
  });
  f.displayName = "SidebarApplicationUI";
  require.d(exports, {
    SidebarApplicationUI: function () {
      return f;
    }
  });
}