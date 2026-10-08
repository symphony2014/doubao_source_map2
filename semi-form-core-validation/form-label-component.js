// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FormLabel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 455464
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var formUxConstants = require("form-ux-constants") /*id: 740990*/;
  var aiCreationLocaleWrapper = require("ai-creation-locale-wrapper") /*id: 67026*/;
  let d = formUxConstants.formPrefixConfig.PREFIX;
  class u extends reactCoreLibraryReexport.PureComponent {
    render() {
      let {
        children: e,
        required: t,
        text: n,
        disabled: o,
        name: a,
        width: s,
        align: l,
        style: u,
        className: p,
        extra: f,
        id: h,
        optional: m
      } = this.props;
      let v = i(p, {
        [`${d}-field-label`]: true,
        [`${d}-field-label-left`]: l === "left",
        [`${d}-field-label-right`]: l === "right",
        [`${d}-field-label-required`]: t,
        [`${d}-field-label-disabled`]: o,
        [`${d}-field-label-with-extra`]: f
      });
      let g = u || {};
      if (s) {
        g.width = s;
      }
      let b = reactCoreLibraryReexport.createElement(aiCreationLocaleWrapper.AiCreationLocale, {
        componentName: "Form"
      }, e => reactCoreLibraryReexport.createElement("span", {
        className: `${d}-field-label-optional-text`
      }, e.optional));
      let y = reactCoreLibraryReexport.createElement("div", {
        className: `${d}-field-label-text`,
        "x-semi-prop": "label"
      }, n !== undefined ? n : e, m ? b : null);
      let _ = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, y, reactCoreLibraryReexport.createElement("div", {
        className: `${d}-field-label-extra`
      }, f));
      return reactCoreLibraryReexport.createElement("label", {
        className: v,
        htmlFor: a,
        style: g,
        id: h
      }, f ? _ : y);
    }
  }
  u.defaultProps = {
    required: false,
    name: "",
    align: "left",
    className: "",
    optional: false
  };
  u.propTypes = {
    id: s.string,
    children: s.node,
    required: s.bool,
    text: s.node,
    disabled: s.bool,
    name: s.string,
    align: s.string,
    width: s.oneOfType([s.number, s.string]),
    style: s.object,
    className: s.string,
    extra: s.node,
    optional: s.bool
  };
  require.d(exports, {
    FormLabel: function () {
      return u;
    }
  });
}