// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'EquationRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 901840
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var cssDisplayTypes = require("css-display-types") /*id: 226292*/;
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  var renderAttributeWrapper = require("render-attribute-wrapper") /*id: 31592*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var latexMathDetector = require("latex-math-detector") /*id: 803017*/;
  var equationBlockComponent = require("equation-block-component") /*id: 327162*/;
  var equationTypeConstant = require("equation-type-constant") /*id: 787139*/;
  var h = function (t) {
    function e(e) {
      var n = e.editor;
      var i = e.getPopupContainer;
      var o = e.renderEquationContent;
      var s = t.call(this) || this;
      s.name = "Equation";
      s._editor = n;
      s._renderEquationContent = function (t) {
        return o(typescriptHelpers.assignObject(typescriptHelpers.assignObject({}, t), {
          containerEditor: s._editor
        }));
      };
      s._getPopupContainer = i;
      s._initPopupWrapperIfNotExist();
      return s;
    }
    typescriptHelpers.extendClass(e, t);
    var n = e.prototype;
    n.editorCollectText = function (t) {
      var e = t.attributes.equation;
      if (typeof e != "string") {
        return "";
      } else {
        return "$$" + e + "$$";
      }
    };
    n.serialize = function (t) {
      return t;
    };
    n.deserialize = function (t) {
      return t.deltaSet;
    };
    n.match = function (t) {
      return t === e.KEY;
    };
    n.render = function (t) {
      var n = t.attributes;
      var r = t.children;
      var i = t.index;
      var s = t.lineState;
      var a = t.op;
      var p = n.equation;
      var h = n.objectID;
      if (typeof p != "string") {
        return r;
      }
      if (!t.key) {
        if (typeof h == "string") {
          t.key = h;
        } else {
          var f = s.getOps().indexOf(a);
          t.key = "equation-line-" + i + "-op-" + f;
        }
      }
      var d = latexMathDetector.isLatexMathEnv(p) ? cssDisplayTypes.displayTypes.block : cssDisplayTypes.displayTypes.inline;
      t.class += " equation-leaf equation-display-" + d;
      return reactCoreLibraryReexport.createElement(equationBlockComponent.EquationBlock, {
        editor: this._editor,
        length: t.insert.length,
        objectID: h,
        zoneId: t.zoneId,
        lineState: t.lineState,
        defaultEquation: p,
        displayMode: d,
        popoverContainer: e.popupWrapper,
        renderEquationContent: this._renderEquationContent
      });
    };
    n._initPopupWrapperIfNotExist = function () {
      var t;
      if (!e.popupWrapper || !document.contains(e.popupWrapper)) {
        e.popupWrapper = document.createElement("div");
        e.popupWrapper.className = "editor-kit-equation-popover-wrapper";
        (((t = this._getPopupContainer) === null || t === undefined ? undefined : t.call(this)) || document.body).appendChild(e.popupWrapper);
      }
    };
    e.KEY = equationTypeConstant.equationType;
    typescriptHelpers.applyDecorators([renderAttributeWrapper.wrapRenderFunction, reactDomContextDecorator.withContextConsumer()], e.prototype, "render", null);
    return e;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    EquationRenderer: function () {
      return h;
    }
  });
}