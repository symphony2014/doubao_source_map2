// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'docxEditorCore'
// - Resolved require(135760) to 'docx-editor-core'
// - Renamed variable 'o' to 'dependencyInjectionContainer'
// - Resolved require(555385) to 'dependency-injection-container'
// - Renamed variable 'a' to 'blockElementDeserializer'
// - Resolved require(120234) to 'block-element-deserializer'
// - Renamed variable 'l' to 'textNodeDeserializer'
// - Resolved require(232530) to 'text-node-deserializer'
// - Renamed variable 's' to 'resizableDraggableBtnLoader'
// - Resolved require(622599) to 'resizable-draggable-btn-loader'
// - Renamed variable 'c' to 'docxTaskSchedulerUtilities'
// - Resolved require(572734) to 'docx-task-scheduler-utilities'
// - Renamed variable 'd' to 'docxEditorKitProviders'
// - Resolved require(519830) to 'docx-editor-kit-providers'
// - Renamed variable 'u' to 'imageCropControllerToken_1'
// - Resolved require(673650) to 'image-crop-controller-token_1'
// - Renamed variable 'h' to 'docxImageBlockModel'
// - Resolved require(608725) to 'docx-image-block-model'
// - Resolved require.e(63099) to 'image_crop'
// - Resolved require.bind(338731) to 'image-crop-controller-implementation'
// - Updated imported property 'w' to 'loadResizableBtn' (module 622599)
// - Updated imported property 'XO' to 'registerProviders' (module 135760)
// - Updated imported property 'nc' to 'onInitHook' (module 135760)
// - Updated imported property 'i' to 'imageCropCtrlToken' (module 673650)
// - Updated imported property 'nf' to 'scheduleTaskWithConfig' (module 572734)
// - Updated imported property 'Qy' to 'delayToFirstScreenMarker' (module 572734)
// - Updated imported property 'f3' to 'get' (module 555385)
// - Updated imported property 'QO' to 'textualDepProvider' (module 519830)
// - Updated imported property 'mb' to 'textualDepTypes' (module 519830)
// - Updated imported property 'u' to 'BlockDeserializer' (module 120234)
// - Updated imported property 'r' to 'TextNodeDeserializer' (module 232530)
// - Updated imported property 'Z' to 'ImageBlockModel' (module 608725)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 812585
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  var blockElementDeserializer = require("block-element-deserializer") /*id: 120234*/;
  var textNodeDeserializer = require("text-node-deserializer") /*id: 232530*/;
  var resizableDraggableBtnLoader = require("resizable-draggable-btn-loader") /*id: 622599*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var docxEditorKitProviders = require("docx-editor-kit-providers") /*id: 519830*/;
  var imageCropControllerToken_1 = require("image-crop-controller-token_1") /*id: 673650*/;
  var docxImageBlockModel = require("docx-image-block-model") /*id: 608725*/;
  function p() {
    resizableDraggableBtnLoader.loadResizableBtn();
    docxEditorCore.registerProviders([{
      provide: imageCropControllerToken_1.imageCropCtrlToken,
      useAsync: async () => {
        let {
          ImageCropControllerImpl: e
        } = await docxTaskSchedulerUtilities.scheduleTaskWithConfig({
          action: () => require.e("image_crop") /*id: 63099*/.then(require.bind(require, "image-crop-controller-implementation") /*id: 338731*/),
          name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
        });
        return e;
      }
    }]);
    docxEditorCore.onInitHook(() => {
      let e = dependencyInjectionContainer.get(docxEditorKitProviders.textualDepProvider);
      let r = [[blockElementDeserializer.BlockDeserializer], [textNodeDeserializer.TextNodeDeserializer]];
      e.setPlugins(`${docxEditorKitProviders.textualDepTypes.CAPTION}:${docxImageBlockModel.ImageBlockModel.type}`, r);
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return p;
    }
  });
}