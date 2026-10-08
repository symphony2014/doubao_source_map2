// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'SuggestMessageList'
// - Renamed export 'u' to 'SuggestMessageItem'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 447868
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var textDirectionSpan = require("text-direction-span") /*id: 201892*/;
  var dotFlashingLoader = require("dot-flashing-loader") /*id: 887785*/;
  var arrowRightIconSvg = require("arrow-right-icon-svg") /*id: 623696*/;
  var c = {
    "suggest-message-list-wrapper": "suggest-message-list-wrapper-QLdGFg",
    "suggest-message": "suggest-message-oSXMsU",
    icon: "icon-LP9ZXy",
    title: "title-sm8Wop",
    "no-hover": "no-hover-HjF8DX",
    "no-padding-left": "no-padding-left-O2S_Ib",
    fadeIn: "fadeIn-iLjDIM"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let u = e => {
    let {
      className: t,
      onClick: n,
      children: l
    } = e;
    let a = reactCoreLibraryReexport.useRef(true);
    let u = a.current;
    a.current &&= false;
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: r("suggest-list-item", c["suggest-message"], u ? c.fadeIn : undefined, t),
      onClick: n,
      "data-testid": "suggest_message_item",
      children: [reactJsxRuntimeCoreReexport.jsx(textDirectionSpan.TextDirectionSpan, {
        className: r(c.title, "suggest-list-item-title"),
        children: l
      }), reactJsxRuntimeCoreReexport.jsx(arrowRightIconSvg.ArrowRightIcon, {
        className: c.icon,
        autoFitRTL: true
      })]
    });
  };
  let p = e => {
    let {
      loading: t,
      suggests: n,
      message: i,
      onClick: l,
      className: o
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: r(c["suggest-message-list-wrapper"], o),
      "data-testid": "suggest_message_list",
      children: t ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: r(c["suggest-message"], c["no-hover"], c["no-padding-left"]),
        children: reactJsxRuntimeCoreReexport.jsx(dotFlashingLoader.DotFlashing, {})
      }) : n.map((e, t) => {
        let {
          value: n,
          label: r
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(u, {
          onClick: () => {
            l(n, t);
          },
          children: r
        }, `${i == null ? undefined : i.reply_id}_${t}`);
      })
    }, i == null ? undefined : i.reply_id);
  };
  require.d(exports, {
    SuggestMessageList: function () {
      return p;
    },
    SuggestMessageItem: function () {
      return u;
    }
  });
}