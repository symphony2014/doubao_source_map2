// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dj' to 'dropdownWrapper'
// - Renamed export 'ck' to 'popoverWrapper'
// - Renamed export '_K' to 'tooltipWrapper'
// - Renamed export 'f0' to 'convertPosition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page.fab06bed.js
         * chunkId: 21179
         * moduleId: 711067
         */
module.exports = function (module, exports, require) {
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var reactTooltipComponent = require("react-tooltip-component") /*id: 228812*/;
  var businessLayoutContext_1 = require("business-layout-context_1") /*id: 47935*/;
  var samanthaPopoverWrapperComponent = require("samantha-popover-wrapper-component") /*id: 137563*/;
  var samanthaDropdownWrapper = require("samantha-dropdown-wrapper") /*id: 686264*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = {
    topLeft: "topRight",
    topRight: "topLeft",
    left: "right",
    right: "left",
    leftTop: "rightTop",
    leftBottom: "rightBottom",
    bottomLeft: "bottomRight",
    bottomRight: "bottomLeft",
    leftTopOver: "rightTopOver",
    rightTopOver: "leftTopOver",
    leftBottomOver: "rightBottomOver",
    rightBottomOver: "leftBottomOver"
  };
  let u = e => businessLayoutContext_1.defaultLayoutFn() && e ? c[e] : e;
  let h = e => {
    let {
      position: t,
      children: n,
      ...r
    } = e;
    let i = u(t);
    return reactJsxRuntimeCoreReexport.jsx(samanthaPopoverWrapperComponent.SamanthaPopover, {
      position: i,
      ...r,
      children: n
    });
  };
  let f = e => {
    let {
      position: t,
      children: n,
      ...r
    } = e;
    let i = u(t);
    return reactJsxRuntimeCoreReexport.jsx(reactTooltipComponent.TooltipComponent, {
      position: i,
      ...r,
      children: n
    });
  };
  let m = e => {
    let {
      position: t,
      children: n,
      className: r,
      ...a
    } = e;
    let l = u(t);
    return reactJsxRuntimeCoreReexport.jsx(samanthaDropdownWrapper.SamanthaDropdown, {
      position: l,
      ...a,
      className: i("dropdown-wrapper-eiDl5v", r),
      children: n
    });
  };
  require.d(exports, {
    dropdownWrapper: function () {
      return m;
    },
    popoverWrapper: function () {
      return h;
    },
    tooltipWrapper: function () {
      return f;
    },
    convertPosition: function () {
      return u;
    }
  });
}