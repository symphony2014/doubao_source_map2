// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'useChatInputPopover'
// - Renamed export 'x' to 'createPopoverController'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 493792
         */
module.exports = function (module, exports, require) {
  var reactTransitionComponent = require("react-transition-component") /*id: 888866*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var chatInputExpandBtn = require("chat-input-expand-btn") /*id: 573547*/;
  var useClickOutsideHook = require("use-click-outside-hook") /*id: 649182*/;
  var c = {
    popover: "popover-HfBicE",
    "transition-entering": "transition-entering-a9ZBoq",
    transitionEntering: "transition-entering-a9ZBoq",
    "transition-entered": "transition-entered-l_34sM",
    transitionEntered: "transition-entered-l_34sM",
    "transition-exiting": "transition-exiting-B9Tx1i",
    transitionExiting: "transition-exiting-B9Tx1i",
    "transition-exited": "transition-exited-fBqlH3",
    transitionExited: "transition-exited-fBqlH3"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      containerRef: t,
      popoverContent: n,
      popoverVisible: i,
      defaultOpenPopover: r,
      onPopoverVisibleChange: l,
      className: c,
      keepDOMWhenPopoverHide: p = true
    } = e;
    let [h, f] = reactCoreLibraryReexport.useState(r ? chatInputExpandBtn.ExpandStatus.Expand : chatInputExpandBtn.ExpandStatus.Collapse);
    let _ = reactCoreLibraryReexport.useRef(r);
    let v = e => {
      _.current = e;
    };
    useClickOutsideHook.useClickOutside(t.current, () => {
      f(chatInputExpandBtn.ExpandStatus.Collapse);
    }, "mousedown", true);
    let g = isUndefinedCheck.isUndefined(i) ? h === chatInputExpandBtn.ExpandStatus.Expand : i;
    reactCoreLibraryReexport.useEffect(() => {
      if (l != null) {
        l(g);
      }
    }, [g]);
    return {
      containerRef: t,
      expandBtnStatus: h,
      showPopover: (e, t) => {
        let {
          canExpandByFocus: n
        } = t || {};
        if (!isUndefinedCheck.isUndefined(n)) {
          v(n);
        }
        if (!e || _.current) {
          f(chatInputExpandBtn.ExpandStatus.Expand);
        }
      },
      hidePopover: e => {
        let {
          canExpandByFocus: t
        } = e || {};
        if (!isUndefinedCheck.isUndefined(t)) {
          v(t);
        }
        f(chatInputExpandBtn.ExpandStatus.Collapse);
      },
      onClickCollapseBtn: () => {
        f(chatInputExpandBtn.ExpandStatus.Collapse);
        v(false);
      },
      onClickExpandBtn: () => {
        f(chatInputExpandBtn.ExpandStatus.Expand);
        v(true);
      },
      onFocus: () => {
        if (_.current) {
          f(chatInputExpandBtn.ExpandStatus.Expand);
        }
      },
      element: reactCoreLibraryReexport.useMemo(() => reactJsxRuntimeCoreReexport.jsx(m, {
        showPopover: g,
        keepDOMWhenPopoverHide: p,
        popoverContent: n,
        className: c
      }), [g, n, p])
    };
  };
  let h = e => {
    let t = reactCoreLibraryReexport.useRef(null);
    return p({
      ...e,
      containerRef: t
    });
  };
  let m = e => {
    let {
      showPopover: t,
      keepDOMWhenPopoverHide: n,
      popoverContent: o,
      className: r
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactTransitionComponent.Transition, {
      in: t,
      timeout: 250,
      appear: true,
      mountOnEnter: !n,
      unmountOnExit: !n,
      children: e => reactJsxRuntimeCoreReexport.jsx("div", {
        className: l(c.popover, r, {
          [c[`transition-${e}`]]: e
        }),
        children: reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
          fallback: reactJsxRuntimeCoreReexport.jsx("div", {
            className: "h-10 w-10"
          }),
          children: o
        })
      })
    });
  };
  require.d(exports, {
    useChatInputPopover: function () {
      return h;
    },
    createPopoverController: function () {
      return p;
    }
  });
}