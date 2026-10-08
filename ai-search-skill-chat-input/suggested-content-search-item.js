// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'SuggestedSearchItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: deep-search-skill-chat-input.cf9a238f.js
         * chunkId: 20853
         * moduleId: 708810
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useIntersectionObserver = require("use-intersection-observer") /*id: 774639*/;
  var skeletonComponent = require("skeleton-component") /*id: 619442*/;
  var searchIconComponent_2 = require("search-icon-component_2") /*id: 773676*/;
  var arrowDownIcon = require("arrow-down-icon") /*id: 158729*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let h = {
    width: "calc(100% + 8px)",
    margin: "0px -4px"
  };
  let f = e => {
    let {
      title: t,
      value: n,
      className: a,
      trackParams: f,
      isInLoading: v = false,
      onClick: m
    } = e;
    let g = reactCoreLibraryReexport.useRef(null);
    let [x] = useIntersectionObserver.useIntersection(g, {
      threshold: 1
    });
    let _ = e => {
      teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
        ...f,
        content_detail: t,
        genre: null,
        show_scene: "bottom_bar"
      });
      m(e);
    };
    let S = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
        ...f,
        content_detail: t,
        genre: null,
        show_scene: "bottom_bar"
      });
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (x) {
        S();
      }
    }, [x]);
    return reactJsxRuntimeCoreReexport.jsxs("button", {
      ref: g,
      style: h,
      className: l("text-s-color-text-secondary s-font-small flex w-full block border-none items-center gap-8 px-8 py-10 bg-transparent hover:bg-s-color-bg-trans cursor-pointer rounded-s-radius-s justify-start", a),
      "data-testid": "skill-page-search-item",
      onClick: () => _(n),
      children: [reactJsxRuntimeCoreReexport.jsx(searchIconComponent_2.SearchIcon, {
        className: "text-16"
      }), v ? reactJsxRuntimeCoreReexport.jsx(skeletonComponent.Skeleton.Title, {
        className: "h-20 w-full rounded-8 bg-neutral-transparent-1"
      }) : reactJsxRuntimeCoreReexport.jsx("span", {
        className: "flex-1 truncate text-left !leading-20",
        "data-testid": "skill-page-search-item-title",
        children: t
      }), reactJsxRuntimeCoreReexport.jsx(arrowDownIcon.ArrowDownIcon, {
        className: "text-16 text-s-color-text-tertiary"
      })]
    });
  };
  require.d(exports, {
    SuggestedSearchItem: function () {
      return f;
    }
  });
}