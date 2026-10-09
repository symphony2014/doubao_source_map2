// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'u' to 'waitForContentMatch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 60734.035973bf.js
         * chunkId: 60734
         * moduleId: 194278
         */
module.exports = function (module, exports, require) {
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var asyncSkillChatInput_3 = require("async-skill-chat-input_3") /*id: 362884*/;
  let a = async e => {
    let {
      value: t,
      checkTimeout: n = 10000
    } = e;
    return new Promise(e => {
      let a = false;
      let l = n => {
        if (!a && deepEqualUtil_1.deepEqual(inputToolConverter.extractText(n.data), inputToolConverter.extractText(t.data))) {
          a = true;
          asyncSkillChatInput_3.imageEditorManager.off("contentChange", l);
          e(true);
        }
      };
      let s = asyncSkillChatInput_3.imageEditorManager.getImageEditorValue();
      if (s && deepEqualUtil_1.deepEqual(inputToolConverter.extractText(s.data), inputToolConverter.extractText(t.data))) {
        return e(true);
      }
      asyncSkillChatInput_3.imageEditorManager.on("contentChange", l);
      setTimeout(() => {
        if (!a) {
          asyncSkillChatInput_3.imageEditorManager.off("contentChange", l);
          e(false);
        }
      }, n);
    });
  };
  require.d(exports, {
    waitForContentMatch: function () {
      return a;
    }
  });
}