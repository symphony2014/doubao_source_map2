// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'ExpandStatus'
// - Renamed export 'V' to 'ExpandButton'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 573547
         */
module.exports = function (module, exports, require) {
  var i;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var rtlFileDocumentIcon = require("rtl-file-document-icon") /*id: 900958*/;
  var rtlExitIcon = require("rtl-exit-icon") /*id: 569004*/;
  var l = {
    "expand-btn-wrapper": "expand-btn-wrapper-sLsgt2",
    expanded: "expanded-RjeBKT",
    "expand-btn-svg": "expand-btn-svg-YGGXHK",
    "collapse-btn-svg": "collapse-btn-svg-OzGFks",
    small: "small-L4VgD2"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  (i = {}).Collapse = "collapse";
  i.Expand = "Expand";
  i.Invisible = "Invisible";
  let c = i;
  let d = e => {
    let {
      className: t,
      status: n = c.Collapse,
      text: i,
      size: r = "default",
      onClick: d
    } = e;
    let p = {
      [c.Expand]: reactJsxRuntimeCoreReexport.jsx(rtlFileDocumentIcon.FileDocumentIcon, {
        className: l["expand-btn-svg"]
      }),
      [c.Collapse]: reactJsxRuntimeCoreReexport.jsx(rtlExitIcon.RtlExitIcon, {
        className: l["collapse-btn-svg"]
      }),
      [c.Invisible]: null
    };
    if ([c.Expand, c.Collapse].includes(n)) {
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        "data-testid": "expand_btn_wrapper",
        "data-expand": n === c.Expand,
        className: o(l["expand-btn-wrapper"], t, {
          [l.small]: r === "small",
          [l.expanded]: n === c.Expand
        }),
        onClick: e => {
          e.stopPropagation();
          if (d != null) {
            d(n);
          }
        },
        children: [p[n], reactJsxRuntimeCoreReexport.jsx("span", {
          children: i
        })]
      });
    } else {
      return null;
    }
  };
  require.d(exports, {
    ExpandStatus: function () {
      return c;
    },
    ExpandButton: function () {
      return d;
    }
  });
}