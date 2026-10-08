// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'TopBarActionItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 543961
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var tooltipWrapperComponent = require("tooltip-wrapper-component") /*id: 379673*/;
  var l = {
    container: "container-v6Tm7I",
    "new-icon": "new-icon-XDQchi",
    newIcon: "new-icon-XDQchi",
    "color-black": "color-black-krbj3D",
    colorBlack: "color-black-krbj3D",
    "color-grey": "color-grey-Q0J9Ec",
    colorGrey: "color-grey-Q0J9Ec",
    "color-deep-grey": "color-deep-grey-Ltcmve",
    colorDeepGrey: "color-deep-grey-Ltcmve",
    "color-purple": "color-purple-gN9Dqq",
    colorPurple: "color-purple-gN9Dqq",
    "size-mini": "size-mini-q0Ai9y",
    sizeMini: "size-mini-q0Ai9y",
    "size-tiny": "size-tiny-f8DW5S",
    sizeTiny: "size-tiny-f8DW5S",
    "size-small": "size-small-kL0B9o",
    sizeSmall: "size-small-kL0B9o",
    "size-middle": "size-middle-s7iOX2",
    sizeMiddle: "size-middle-s7iOX2",
    "size-large": "size-large-DZGsdY",
    sizeLarge: "size-large-DZGsdY",
    "size-larger-icon": "size-larger-icon-w_Tsei",
    sizeLargerIcon: "size-larger-icon-w_Tsei",
    "size-larger": "size-larger-AzoTDh",
    sizeLarger: "size-larger-AzoTDh",
    "size-huge": "size-huge-NvUeBV",
    sizeHuge: "size-huge-NvUeBV",
    "type-hoverable": "type-hoverable-U4Plu9",
    typeHoverable: "type-hoverable-U4Plu9",
    bordered: "bordered-dvJZGU",
    hoverable: "hoverable-nPJ4S7",
    "type-lite": "type-lite-J10ni6",
    typeLite: "type-lite-J10ni6",
    title: "title-L1_q68",
    disabled: "disabled-_CLFbh",
    checked: "checked-rjjlEL"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: i,
      style: n,
      disabled: a = false,
      checked: c = false,
      bordered: d = false,
      hoverable: u,
      tooltip: p,
      onClick: _,
      children: m,
      title: h,
      type: f = "hoverable",
      size: v = "middle",
      color: g = "black",
      newIcon: y = false,
      ...b
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent.TooltipWrapper, {
      content: a ? undefined : p,
      children: reactJsxRuntimeCoreReexport.jsxs("div", {
        "data-testid": "top_control_bar_action_item",
        ref: t,
        className: r(l.container, i, l[`size-${v}`], l[`color-${g}`], l[`type-${f}`], {
          [l.disabled]: a,
          [l.checked]: c,
          [l.bordered]: d,
          [l.hoverable]: !c && (u ?? !!_),
          [l["new-icon"]]: y
        }, "top-control-bar-icon-wrapper"),
        style: {
          ...n,
          "--icon-color": l[`color-${g}`] ? undefined : g
        },
        onClick: a ? undefined : _,
        ...b,
        children: [m, h && reactJsxRuntimeCoreReexport.jsx("div", {
          className: l.title,
          children: h
        })]
      })
    });
  });
  require.d(exports, {
    TopBarActionItem: function () {
      return c;
    }
  });
}