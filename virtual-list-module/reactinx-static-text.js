// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'StaticText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 594747
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var a = function (e) {
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    typescriptRuntimeHelpers_1.extends(t, e);
    t.prototype.render = function () {
      var e = this.props;
      e.editor;
      var t = e.wrapperCls;
      var e = typescriptRuntimeHelpers_1.rest(e, ["editor", "wrapperCls"]);
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, typescriptRuntimeHelpers_1.assign({
        className: t
      }, e, ((e = {})[editorConstantsKeycodes.dataVoid] = true, e), {
        contentEditable: false,
        style: {
          userSelect: "none"
        }
      }), this.props.children);
    };
    t.__ignore = true;
    return t;
  }(reactinxDomContextExports.ReactInXExports.Component);
  require.d(exports, {
    StaticText: function () {
      return a;
    }
  });
}