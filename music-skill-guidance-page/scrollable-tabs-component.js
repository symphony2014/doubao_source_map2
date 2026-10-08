// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'ScrollableTabs'
// - Renamed export 'J' to 'TabPane'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: music-skill-guidance-page.fa791232.js
         * chunkId: 16408
         * moduleId: 608549
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var tabsComponentAdapter = require("tabs-component-adapter") /*id: 826897*/;
  var reactCarouselComponent = require("react-carousel-component") /*id: 464116*/;
  var tabPaneComponent = require("tab-pane-component") /*id: 772025*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      children: t,
      className: r,
      ...n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(tabsComponentAdapter.TabsComponent, {
      ...n,
      className: l("scroll-tabs-W1gCqL", r),
      renderTabBar: (e, t) => reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "flex justify-between",
        children: [reactJsxRuntimeCoreReexport.jsx(reactCarouselComponent.Carousel, {
          enableArrowBorder: false,
          carouselRowClassName: "px-20 !bg-[#f7f7f7]",
          children: reactJsxRuntimeCoreReexport.jsx(t, {
            ...e,
            tabBarExtraContent: null
          })
        }), e.tabBarExtraContent]
      }),
      children: t
    });
  };
  require.d(exports, {
    ScrollableTabs: function () {
      return u;
    },
    TabPane: function () {
      return tabPaneComponent.TabPane;
    }
  });
}