// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'inputToolConverter'
// - Resolved require(352793) to 'input-tool-converter'
// - Renamed variable 'r' to 'aiPptTemplateStore_1'
// - Resolved require(698449) to 'ai-ppt-template-store_1'
// - Renamed variable 'l' to 'aiSlidesMessageSender'
// - Resolved require(833134) to 'ai-slides-message-sender'
// - Updated imported property 'zm' to 'aiPptTemplateStore' (module 698449)
// - Updated imported property 'Z6' to 'extractText' (module 352793)
// - Updated imported property 'E7' to 'buildTemplateReferenceBlock' (module 833134)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine-submit.e2260d4f.js
         * chunkId: 2122
         * moduleId: 889796
         */
module.exports = function (module, exports, require) {
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var aiPptTemplateStore_1 = require("ai-ppt-template-store_1") /*id: 698449*/;
  var aiSlidesMessageSender = require("ai-slides-message-sender") /*id: 833134*/;
  let a = {
    id: "biz-ai-ppt:input-submit-workflow",
    submitNodes: [{
      id: "ai-ppt-generation:input-skill-node",
      execute: e => {
        let {
          selectTemplateItem: i
        } = aiPptTemplateStore_1.aiPptTemplateStore.getState();
        let a = e.content.editorValue ?? {
          data: []
        };
        let o = inputToolConverter.extractText(a.data);
        e.content.text = o;
        let u = aiSlidesMessageSender.buildTemplateReferenceBlock(a);
        if (u) {
          let t = {
            type: "ppt_template",
            ppt_template: u.content.reference_block.ppt_template
          };
          e.content.refContents = [t, ...(e.content.refContents || [])];
        }
        i(undefined);
        return Promise.resolve(e);
      }
    }],
    afterSubmitNodes: []
  };
  require.r(exports);
  require.d(exports, {
    InputSubmitPipeline: function () {
      return a;
    }
  });
}