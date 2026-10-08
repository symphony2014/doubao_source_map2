// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'HighlightSearchTextComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 236025
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var l = propTypesFactoryWrapper;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let c = {
    PREFIX: `${semiIdentifier.semiIdentifier}-highlight`
  };
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  let d = c.PREFIX;
  class p extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        searchWords: e,
        sourceString: t,
        component: n,
        highlightClassName: i,
        highlightStyle: r,
        caseSensitive: o,
        autoEscape: l
      } = this.props;
      let s = a({
        [`${d}-tag`]: true
      }, i);
      return commonFrontendUtils.highlightSearchText({
        sourceString: t,
        searchWords: e,
        option: {
          highlightTag: n,
          highlightClassName: s,
          highlightStyle: r,
          caseSensitive: o,
          autoEscape: l
        }
      });
    }
  }
  p.propTypes = {
    style: l.object,
    className: l.string,
    autoEscape: l.bool,
    caseSensitive: l.bool,
    sourceString: l.string,
    searchWords: l.arrayOf(l.string),
    highlightStyle: l.object,
    highlightClassName: l.string,
    component: l.string
  };
  p.defaultProps = {
    component: "mark",
    autoEscape: true,
    caseSensitive: false,
    sourceString: ""
  };
  var h = p;
  require.d(exports, {
    HighlightSearchTextComponent: function () {
      return h;
    }
  });
}