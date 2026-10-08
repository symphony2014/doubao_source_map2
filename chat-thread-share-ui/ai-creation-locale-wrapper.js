// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'AiCreationLocale'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 67026
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var skillPinModalContext = require("skill-pin-modal-context") /*id: 659708*/;
  var createContextProvider = require("create-context-provider") /*id: 289192*/;
  var zhCnLocaleDefinition_1 = require("zh-cn-locale-definition_1") /*id: 625562*/;
  class d extends reactCoreLibraryReexport.Component {
    renderChildren(e, t) {
      let {
        componentName: n
      } = this.props;
      let r = e;
      if (!(e == null ? undefined : e.code)) {
        r = zhCnLocaleDefinition_1.zhCNLocale;
      }
      let o = objectPathGetDefault.getObjectPathDefault(zhCnLocaleDefinition_1.zhCNLocale, "dateFnsLocale");
      let s = objectPathGetDefault.getObjectPathDefault(r, "dateFnsLocale", o);
      return t(r[n], r.code, s);
    }
    render() {
      let {
        children: e
      } = this.props;
      return reactCoreLibraryReexport.createElement(createContextProvider.context.Consumer, null, t => {
        let {
          locale: n
        } = t;
        return reactCoreLibraryReexport.createElement(skillPinModalContext.skillPinModalContext.Consumer, null, t => this.renderChildren(n || t, e));
      });
    }
  }
  d.propTypes = {
    componentName: s.string.isRequired,
    children: s.any
  };
  d.defaultProps = {
    componentName: ""
  };
  require.d(exports, {
    AiCreationLocale: function () {
      return d;
    }
  });
}