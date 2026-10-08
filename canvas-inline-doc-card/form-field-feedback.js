// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'FormFieldFeedback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 446866
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var i = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var s = propTypesFactoryWrapper;
  var formUxConstants = require("form-ux-constants") /*id: 740990*/;
  var alertTriangleIcon = require("alert-triangle-icon") /*id: 704286*/;
  var alertCircleIcon = require("alert-circle-icon") /*id: 287588*/;
  let u = formUxConstants.formPrefixConfig.PREFIX;
  class p extends reactCoreLibraryReexport.PureComponent {
    generatorText(e) {
      let {
        helpTextId: t,
        errorMessageId: n
      } = this.props;
      let o = this.props.error;
      let i = n;
      if (!o) {
        i = t;
      }
      if (typeof e == "string") {
        return reactCoreLibraryReexport.createElement("span", {
          id: i
        }, e);
      }
      if (Array.isArray(e)) {
        let t = e.filter(e => e);
        if (t.length) {
          return reactCoreLibraryReexport.createElement("span", {
            id: i
          }, t.join(", "));
        } else {
          return null;
        }
      }
      if (reactCoreLibraryReexport.isValidElement(e)) {
        return e;
      } else {
        return null;
      }
    }
    render() {
      let {
        error: e,
        className: t,
        style: n,
        validateStatus: o,
        helpText: a,
        showValidateIcon: s,
        isInInputGroup: l
      } = this.props;
      let p = i({
        [u + "-field-error-message"]: !!e,
        [u + "-field-help-text"]: !!a
      }, t);
      if (!e && !a) {
        return null;
      }
      let f = {
        warning: reactCoreLibraryReexport.createElement(alertTriangleIcon.AlertTriangleIcon, null),
        error: reactCoreLibraryReexport.createElement(alertCircleIcon.AlertCircleIcon, null)
      };
      let h = e ? this.generatorText(e) : this.generatorText(a);
      let m = `${u}-field-validate-status-icon`;
      let v = null;
      if (l) {
        v = reactCoreLibraryReexport.createElement(alertCircleIcon.AlertCircleIcon, {
          className: m
        });
      } else if (f[o]) {
        v = reactCoreLibraryReexport.cloneElement(f[o], {
          className: m
        });
      }
      return reactCoreLibraryReexport.createElement("div", {
        className: p,
        style: n
      }, s && h ? v : null, h);
    }
  }
  p.propTypes = {
    error: s.oneOfType([s.bool, s.string, s.array, s.node]),
    className: s.string,
    style: s.object,
    validateStatus: s.string,
    showValidateIcon: s.bool,
    helpText: s.node,
    isInInputGroup: s.bool,
    errorMessageId: s.string,
    helpTextId: s.string
  };
  require.d(exports, {
    FormFieldFeedback: function () {
      return p;
    }
  });
}