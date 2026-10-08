// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerZeroSpaceProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 865694
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var zeroSpaceProviderName = require("zero-space-provider-name") /*id: 715309*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var editorContextFacade = require("editor-context-facade") /*id: 788056*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = () => browserEnvironmentDetectionUtils.browserDetector.isIOS || browserEnvironmentDetectionUtils.browserDetector.isH5 || browserEnvironmentDetectionUtils.browserDetector.isIPad && browserEnvironmentDetectionUtils.browserDetector.isSafari ? reactJsxRuntimeCoreReexport.jsxs("div", {
    className: "selection-locator",
    contentEditable: !browserEnvironmentDetectionUtils.browserDetector.isAndroid && undefined,
    suppressContentEditableWarning: true,
    children: ["​", " ", "​"]
  }) : null;
  let h = reactJsxRuntimeCoreReexport.jsx("div", {
    className: "docx-block-zero-space",
    children: reactJsxRuntimeCoreReexport.jsx("span", {
      "data-zero-space": true,
      children: "​"
    })
  });
  function u(e) {
    return i => {
      let {
        displaymode: n
      } = i;
      if (n === docBlockTypeConstants.blockDisplayConstants.INLINE) {
        return null;
      } else {
        return e;
      }
    };
  }
  class m extends editorContextFacade.EditorContextFacade {
    getBeforeSlot() {
      return u(reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [h, reactJsxRuntimeCoreReexport.jsx(d, {})]
      }));
    }
    getAfterSlot() {
      return u(reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
        children: [reactJsxRuntimeCoreReexport.jsx(d, {}), h]
      }));
    }
  }
  function v() {
    docxEditorCore.registerViewExt(zeroSpaceProviderName.zeroSpaceProviderName, m);
  }
  require.d(exports, {
    registerZeroSpaceProvider: function () {
      return v;
    }
  });
}