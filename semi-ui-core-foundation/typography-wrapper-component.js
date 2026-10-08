// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TypographyWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 156355
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var a = propTypesFactoryWrapper;
  var typographyConstants = require("typography-constants") /*id: 518279*/;
  function c(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; r < i.length; r++) {
        if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
          n[i[r]] = e[i[r]];
        }
      }
    }
    return n;
  }
  let d = typographyConstants.typographyConfig.PREFIX;
  class u extends reactCoreLibraryReexport.PureComponent {
    render() {
      let e = this.props;
      let {
        component: t,
        className: n,
        children: r,
        forwardRef: l
      } = e;
      let a = c(e, ["component", "className", "children", "forwardRef"]);
      let s = o(d, n);
      return reactCoreLibraryReexport.createElement(t, Object.assign({
        className: s,
        ref: l
      }, a), r);
    }
  }
  u.defaultProps = {
    component: "article",
    style: {},
    className: ""
  };
  u.propTypes = {
    component: a.string,
    style: a.object,
    className: a.string
  };
  var p = u;
  require.d(exports, {
    TypographyWrapper: function () {
      return p;
    }
  });
}