// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DropdownDivider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10691.328b6088.js
         * chunkId: 10691
         * moduleId: 10735
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var r = propTypesFactoryWrapper;
  let s = require("dropdown-tooltip-constants") /*id: 657784*/.dropdownClassNames.PREFIX;
  let d = function (e = {}) {
    let {
      style: t,
      className: n
    } = e;
    return reactCoreLibraryReexport.createElement("div", {
      className: a(`${s}-divider`, n),
      style: t
    });
  };
  d.propTypes = {
    style: r.object,
    className: r.string
  };
  exports.DropdownDivider = d;
}