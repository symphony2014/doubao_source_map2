// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TypographyParagraph'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 576118
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var o = propTypesFactoryWrapper;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var a = classnamesUtils;
  var typographyConstants = require("typography-constants") /*id: 518279*/;
  var typographyComponent = require("typography-component") /*id: 543669*/;
  let d = typographyConstants.typographyConfig.PREFIX;
  class u extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        className: e
      } = this.props;
      let t = a(e, `${d}-paragraph`);
      return reactCoreLibraryReexport.createElement(typographyComponent.Typography, Object.assign({
        component: "p"
      }, this.props, {
        className: t
      }));
    }
  }
  u.propTypes = {
    copyable: o.oneOfType([o.object, o.bool]),
    delete: o.bool,
    disabled: o.bool,
    ellipsis: o.oneOfType([o.object, o.bool]),
    mark: o.bool,
    link: o.oneOfType([o.object, o.bool]),
    underline: o.bool,
    strong: o.bool,
    type: o.oneOf(typographyConstants.typographyConstants.TYPE),
    size: o.oneOf(typographyConstants.typographyConstants.SIZE),
    spacing: o.oneOf(typographyConstants.typographyConstants.SPACING),
    style: o.object,
    className: o.string,
    component: o.string
  };
  u.defaultProps = {
    copyable: false,
    delete: false,
    disabled: false,
    ellipsis: false,
    mark: false,
    underline: false,
    strong: false,
    link: false,
    type: "primary",
    size: "normal",
    spacing: "normal",
    style: {},
    className: ""
  };
  require.d(exports, {
    TypographyParagraph: function () {
      return u;
    }
  });
}