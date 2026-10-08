// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'SemiButtonWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 654274
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var semiButtonReactComponent = require("semi-button-react-component") /*id: 652199*/;
  var semiIconButton = require("semi-icon-button") /*id: 845645*/;
  var commonFrontendUtils = require("common-frontend-utils") /*id: 264233*/;
  class l extends reactCoreLibraryReexport.PureComponent {
    constructor(e = {}) {
      super(e);
    }
    render() {
      let e = Object.assign({}, this.props);
      let t = !!e.icon;
      let n = !!e.loading;
      let s = !!e.disabled;
      if (t || n && !s) {
        return reactCoreLibraryReexport.createElement(semiIconButton.SemiIconButton, Object.assign({}, e));
      } else {
        return reactCoreLibraryReexport.createElement(semiButtonReactComponent.SemiButton, Object.assign({}, e));
      }
    }
  }
  l.__SemiComponentName__ = "Button";
  l.propTypes = Object.assign(Object.assign({}, semiButtonReactComponent.SemiButton.propTypes), semiIconButton.SemiIconButton.propTypes);
  l.defaultProps = commonFrontendUtils.configProxyHandler(l.__SemiComponentName__);
  l.elementType = "Button";
  exports.SemiButtonWrapper = l;
}