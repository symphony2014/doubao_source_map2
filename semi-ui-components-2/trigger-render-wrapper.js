// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'TriggerRenderWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5550.70936565.js
         * chunkId: 5550
         * moduleId: 921310
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var o = propTypesFactoryWrapper;
  function s(e, t) {
    var r = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        r[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; i < n.length; i++) {
        if (t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i])) {
          r[n[i]] = e[n[i]];
        }
      }
    }
    return r;
  }
  class a extends reactCoreLibraryReexport.PureComponent {
    render() {
      let e = this.props;
      let {
        triggerRender: t,
        componentName: r
      } = e;
      return t(Object.assign({}, s(e, ["triggerRender", "componentName"])));
    }
  }
  a.propTypes = {
    triggerRender: o.func.isRequired,
    componentName: o.string,
    componentProps: o.object,
    value: o.any,
    inputValue: o.string,
    placeholder: o.oneOfType([o.string, o.array]),
    className: o.string,
    style: o.object
  };
  exports.TriggerRenderWrapper = a;
}