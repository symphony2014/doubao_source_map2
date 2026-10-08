// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Typography'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 73234
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var o = propTypesFactoryWrapper;
  var typographyConstants = require("typography-constants") /*id: 518279*/;
  var typographyComponent = require("typography-component") /*id: 543669*/;
  class s extends reactCoreLibraryReexport.PureComponent {
    render() {
      return reactCoreLibraryReexport.createElement(typographyComponent.Typography, Object.assign({
        component: "span"
      }, this.props));
    }
  }
  s.propTypes = {
    copyable: o.oneOfType([o.object, o.bool]),
    delete: o.bool,
    disabled: o.bool,
    icon: o.oneOfType([o.node, o.string]),
    ellipsis: o.oneOfType([o.object, o.bool]),
    mark: o.bool,
    underline: o.bool,
    link: o.oneOfType([o.object, o.bool]),
    strong: o.bool,
    type: o.oneOf(typographyConstants.typographyConstants.TYPE),
    size: o.oneOf(typographyConstants.typographyConstants.SIZE),
    style: o.object,
    className: o.string,
    code: o.bool,
    component: o.string
  };
  s.defaultProps = {
    copyable: false,
    delete: false,
    disabled: false,
    icon: "",
    ellipsis: false,
    mark: false,
    underline: false,
    strong: false,
    link: false,
    type: "primary",
    style: {},
    size: "normal",
    className: ""
  };
  require.d(exports, {
    Typography: function () {
      return s;
    }
  });
}