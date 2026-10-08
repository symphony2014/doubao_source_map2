// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'EditorComponent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 614300
         */
module.exports = function (module, exports, require) {
  var classInheritanceHelper = require("class-inheritance-helper") /*id: 897927*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var editorReactComponent = require("editor-react-component") /*id: 704772*/;
  var reactEditorContext = require("react-editor-context") /*id: 955597*/;
  var editorZoneRenderer = require("editor-zone-renderer") /*id: 566183*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var domElementPositionUtils = require("dom-element-position-utils") /*id: 685116*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  var f = function (e) {
    function n() {
      return e !== null && e.apply(this, arguments) || this;
    }
    classInheritanceHelper.inherits(n, e);
    n.prototype.render = function () {
      var e = this.editor;
      var n = this.props;
      var i = n.style;
      var r = n.editable;
      var a = n.ignoreContainerEditable;
      var f = n.className;
      var h = n.scroller;
      var p = n.scrollerOptions;
      var m = n.children;
      var v = n.contextList;
      var g = n.customizedProviderConstructorList;
      var b = n.plugins;
      var y = n.modules;
      if (b) {
        e.pluginManager._registerV2(b);
      }
      if (y) {
        e._registerModules(y);
      }
      if (!!r && !a && !e.inputModel) {
        e.error({
          message: "InputModel is required when editable is set to true",
          level: errorHandlerUtil.ErrorLevel.FATAL
        });
      }
      return reactCoreLibraryReexport.createElement(reactEditorContext.editorContext.Provider, {
        value: e
      }, reactCoreLibraryReexport.createElement(editorZoneRenderer.ZoneRenderer, {
        root: true,
        ignoreContainerEditable: a,
        zoneId: "0",
        editor: e,
        style: i || {},
        className: editorConstantsKeycodes.editorKitContainer + " " + domElementPositionUtils.getPlatformClasses() + " " + (f === undefined ? "" : f) + " " + (m ? editorConstantsKeycodes.outerControlledZone : ""),
        editable: r,
        scroller: h,
        scrollerOptions: p,
        onMount: this.onMount,
        contextList: v,
        customizedProviderConstructorList: g
      }, m));
    };
    return n;
  }(editorReactComponent.EditorComponent);
  require.d(exports, {
    EditorComponent: function () {
      return f;
    }
  });
}