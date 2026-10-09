// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'BotScrollView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75546.100e73a4.js
         * chunkId: 75546
         * moduleId: 262272
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var scrollViewComponent = require("scroll-view-component") /*id: 683125*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var responsiveScreenHooks = require("responsive-screen-hooks") /*id: 221846*/;
  var chatMaxWidthLayout = require("chat-max-width-layout") /*id: 871367*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      safeMargin: r = "15",
      className: n = ""
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: s("load-more-wrapper-JkmJWo", n),
      style: {
        marginBottom: `${r}px`
      },
      ref: t,
      children: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        size: "middle"
      })
    });
  });
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var g = e => {
    let {
      useNewBotListPage: t = false,
      showAddBtn: r
    } = e;
    let n = reactJsxRuntimeCoreReexport.jsxs("div", {
      className: s("flex-row-between px-16 py-12 pointer-events-none h-fit w-full mb-20 rounded-16 cursor-pointer hover:animate-hover active:animate-click", "bg-[var(--s-color-bg-trans,rgba(0,0,0,0.02))]"),
      children: [reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex-row-start",
        style: {
          width: "100%"
        },
        children: [reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Avatar, {
          className: "h-54 w-54 mr-16 bg-neutral-transparent-1"
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "w-full flex-1",
          children: [reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
            className: "w-full max-w-120 h-22 mb-8 bg-neutral-transparent-1"
          }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
            className: "w-full max-w-390 h-14 bg-neutral-transparent-1"
          })]
        })]
      }), r && reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Avatar, {
        className: "ml-20 flex-none h-24 w-24 bg-neutral-transparent-1"
      })]
    });
    let l = reactJsxRuntimeCoreReexport.jsx("div", {
      className: s(" h-104 bg-[#F5F5F5] min-w-280 rounded-16 cursor-pointer hover:animate-hover active:animate-click flex-row-between px-16 py-12 pointer-events-none"),
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex-row-start w-full",
        children: [reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Avatar, {
          className: "h-72 w-72 mr-16 rounded-12 bg-neutral-transparent-1"
        }), reactJsxRuntimeCoreReexport.jsxs("div", {
          className: "w-full flex-1",
          children: [reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
            className: "w-full max-w-120 h-22 mb-8 bg-neutral-transparent-1"
          }), reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
            className: "w-full max-w-390 h-14 bg-neutral-transparent-1"
          })]
        })]
      })
    });
    return reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton, {
      placeholder: t ? l : n,
      active: false,
      className: "w-full"
    });
  };
  var m = {
    "bot-scroll-view": "bot-scroll-view-rhlC6n",
    scrollContentWrapper: "scrollContentWrapper-vgGXSO",
    "scrollContentWrapper-webkit": "scrollContentWrapper-webkit-feVpOH",
    scrollContent: "scrollContent-fWg0Bc",
    skeletonContainer: "skeletonContainer-pdTvCV",
    newDiscoveryPageContent: "newDiscoveryPageContent-MGp2s8",
    newDiscoveryContentWithChatList: "newDiscoveryContentWithChatList-z6GMre"
  };
  let b = e => {
    let {
      useNewBotListPage: t = false,
      showAddBtn: r,
      className: n
    } = e;
    if (t) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: numericRangeUtil.createRange(0, 20).map((e, n) => reactJsxRuntimeCoreReexport.jsx(g, {
          useNewBotListPage: t,
          showAddBtn: r
        }, n))
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx("div", {
        className: s(m.skeletonContainer, n),
        children: numericRangeUtil.createRange(0, 5).map((e, n) => reactJsxRuntimeCoreReexport.jsx(g, {
          useNewBotListPage: t,
          showAddBtn: r
        }, n))
      });
    }
  };
  var w = reactCoreLibraryReexport.forwardRef((e, t) => {
    let {
      showSkeleton: r,
      skelectonShowAddBtn: l = true,
      hasMore: o,
      loading: h,
      useNewBotListPage: v = false,
      onReachBottom: g,
      topContent: w = null,
      children: y,
      onScroll: _,
      safeMargin: x,
      headerHeight: S,
      className: C,
      skeletonClassName: j,
      isFromSeo: E,
      enableRecommendSetting: Z,
      customLayoutStyle: O,
      ...P
    } = e;
    let R = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useImperativeHandle(t, () => {
      return R.current ?? undefined;
    }, []);
    let N = responsiveScreenHooks.useIsNarrowScreen();
    let T = reactCoreLibraryReexport.useMemo(() => {
      let e = isUndefinedCheck.isUndefined(S) ? {
        seo: {
          recommendSetting: {
            enable: 205,
            disable: 145
          }
        },
        default: {
          recommendSetting: {
            enable: 180,
            disable: 120
          }
        }
      }[E ? "seo" : "default"].recommendSetting[Z ? "enable" : "disable"] : S;
      let t = {};
      Object.assign(t, {
        "--header-height": `${e}px`
      });
      return t;
    }, [E, Z, S]);
    return reactJsxRuntimeCoreReexport.jsx(scrollViewComponent.ScrollView, {
      onReachBottom: g,
      reachBottomThreshold: 30,
      ref: R,
      className: s(C, m["bot-scroll-view"]),
      style: T,
      onScroll: _,
      showScrollbar: true,
      children: reactJsxRuntimeCoreReexport.jsxs(chatMaxWidthLayout.chatLayout.MaxWidthLayout, {
        customStyle: O,
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          className: s(m.scrollContentWrapper, !v && "flex flex-col items-center", {
            [m["scrollContentWrapper-webkit"]]: userAgentDeviceDetector.isIOS()
          }),
          ...P,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: v ? N ? m.newDiscoveryPageContent : m.newDiscoveryContentWithChatList : m.scrollContent,
            children: [w, r ? reactJsxRuntimeCoreReexport.jsx(b, {
              useNewBotListPage: v,
              showAddBtn: l,
              className: j
            }) : reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
              children: [y, " "]
            })]
          })
        }), o && h && !r && reactJsxRuntimeCoreReexport.jsx(p, {
          safeMargin: x
        })]
      })
    });
  });
  require.d(exports, {
    BotScrollView: function () {
      return w;
    }
  });
}