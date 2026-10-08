// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'resourceTypeEnum'
// - Resolved require(342261) to 'resource-type-enum'
// - Renamed variable 'l' to 'platformDocUtils'
// - Resolved require(726907) to 'platform-doc-utils'
// - Renamed variable 'a' to 'fileNodeSelectorUtils'
// - Resolved require(696977) to 'file-node-selector-utils'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'reactReduxCore'
// - Resolved require(509563) to 'react-redux-core'
// - Renamed variable 'u' to 'docxConfigManager'
// - Resolved require(981333) to 'docx-config-manager'
// - Renamed variable 'c' to 'browserEnvironmentDetectionUtils'
// - Resolved require(744607) to 'browser-environment-detection-utils'
// - Renamed variable 's' to 'docxSelectorsExport'
// - Resolved require(254026) to 'docx-selectors-export'
// - Renamed variable 'f' to 'docxEditorEventConstantsAndManager'
// - Resolved require(267720) to 'docx-editor-event-constants-and-manager'
// - Renamed variable 'm' to 'urlParseUtils_1'
// - Resolved require(152840) to 'url-parse-utils_1'
// - Renamed variable '_' to 'docxNetworkErrorHandler'
// - Resolved require(722404) to 'docx-network-error-handler'
// - Renamed variable 'd' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Z' to 'docxConfigManager' (module 981333)
// - Updated imported property 'Qh' to 'getNodeSelector' (module 696977)
// - Updated imported property 'ZP' to 'browserDetector' (module 744607)
// - Updated imported property 'sT' to 'getIsFirstLineEmpty' (module 254026)
// - Updated imported property 'mB' to 'getUrlQuery' (module 152840)
// - Updated imported property 'rz' to 'ResourceType' (module 342261)
// - Updated imported property 'BX' to 'globalEventEmitter' (module 267720)
// - Updated imported property 'q' to 'handleDocxNetworkError' (module 722404)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_dynamic_bottom_template.73de4bf9.js
         * chunkId: 82770
         * moduleId: 504196
         */
module.exports = function (module, exports, require) {
  var resourceTypeEnum = require("resource-type-enum") /*id: 342261*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var docxConfigManager = require("docx-config-manager") /*id: 981333*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxSelectorsExport = require("docx-selectors-export") /*id: 254026*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var urlParseUtils_1 = require("url-parse-utils_1") /*id: 152840*/;
  var docxNetworkErrorHandler = require("docx-network-error-handler") /*id: 722404*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var p = reactReduxCore.connect(e => ({
    currentSuiteToken: docxConfigManager.docxConfigManager.isEmbedDocx ? docxConfigManager.docxConfigManager.get("docxToken") : fileNodeSelectorUtils.getNodeSelector(e),
    isTemplateVisible: platformDocUtils.yBI(e),
    visible: !browserEnvironmentDetectionUtils.browserDetector.isLarkTemplate() && docxSelectorsExport.getIsFirstLineEmpty(e) && !function () {
      let e = urlParseUtils_1.getUrlQuery(platformDocUtils.d6y.search);
      return !!e && !!e.sub_scene;
    }()
  }), e => ({
    insertTemplate: function () {
      var r = arguments.length;
      var n = Array(r);
      var o = 0;
      for (; o < r; o++) {
        n[o] = arguments[o];
      }
      return e(platformDocUtils.QBp(...n));
    },
    toggleTemplateVisible: function () {
      var r = arguments.length;
      var n = Array(r);
      var o = 0;
      for (; o < r; o++) {
        n[o] = arguments[o];
      }
      return e(platformDocUtils.IBW(...n));
    },
    fetchTemplateRecommendations: function () {
      var r = arguments.length;
      var n = Array(r);
      var o = 0;
      for (; o < r; o++) {
        n[o] = arguments[o];
      }
      return e(platformDocUtils.dt6(...n));
    },
    callTemplateCenter: function () {
      var r = arguments.length;
      var n = Array(r);
      var o = 0;
      for (; o < r; o++) {
        n[o] = arguments[o];
      }
      return e(platformDocUtils.NGe(...n));
    }
  }))(e => reactJsxRuntimeCoreReexport.jsx(platformDocUtils.B5K, {
    name: platformDocUtils.Ix_.BottomTemplate,
    componentProps: {
      ...e,
      objType: resourceTypeEnum.ResourceType.DOCX,
      docxEventEmitter: docxEditorEventConstantsAndManager.globalEventEmitter,
      onError: docxNetworkErrorHandler.handleDocxNetworkError
    }
  }));
  require.r(exports);
  require.d(exports, {
    default: function () {
      return p;
    }
  });
}