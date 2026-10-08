// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'e' to 'BusinessInputSelect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 61460
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var semiSelectComponent = require("semi-select-component") /*id: 981226*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      theme: t = "samantha",
      mode: n = "ellipsis",
      className: i,
      dropdownClassName: l,
      ...s
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(semiSelectComponent.Select, {
      ...s,
      className: r({
        "flow-upaltW": t === "samantha",
        "wrap-oa3nIq": n === "wrap"
      }, i),
      dropdownClassName: r({
        "flow-dropdown-rHTmHY": t === "samantha"
      }, l),
      children: e.children
    });
  };
  l.Option = semiSelectComponent.Select.Option;
  l.OptGroup = semiSelectComponent.Select.OptGroup;
  require.d(exports, {
    BusinessInputSelect: function () {
      return l;
    }
  });
}