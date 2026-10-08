// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qx' to 'verifyWritingInput'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 44291.514b9aaa.js
         * chunkId: 44291
         * moduleId: 102812
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var collectionMapMatcher = require("collection-map-matcher") /*id: 300366*/;
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var writingChatInputController_1 = require("writing-chat-input-controller_1") /*id: 659572*/;
  var conversationMessageUtilsHelper = require("conversation-message-utils-helper") /*id: 218543*/;
  let h = (e, t) => {
    let n = e => h(e, t);
    if (isObjectOrFunction_1_1.isObjectOrFunction(e)) {
      if (arrayIsArrayUtil.isArray(e)) {
        return collectionMapMatcher.mapWithMatcher(e, n);
      } else {
        return safeObjectPropertyMap.safeObjectMap(objectExcludeFilterUtil.filterObjectExclude(e, t), n);
      }
    } else {
      return e;
    }
  };
  let f = (e, t) => !!deepEqualUtil_1.deepEqual(h(e, isUndefinedCheck.isUndefined), h(t, isUndefinedCheck.isUndefined)) || inputToolConverter.extractText(e.data) === inputToolConverter.extractText(t.data);
  let m = async e => {
    let {
      value: t,
      checkTimeout: n = 10000
    } = e;
    return new Promise(e => {
      let i = false;
      let r = n => {
        if (!i && f(n, t)) {
          i = true;
          writingChatInputController_1.writingChatInput.off("contentChange", r);
          e(true);
        }
      };
      let o = writingChatInputController_1.writingChatInput.getWritingEditorValue();
      if (o && f(o, t)) {
        return e(true);
      }
      writingChatInputController_1.writingChatInput.on("contentChange", r);
      writingChatInputController_1.writingChatInput.updateWritingEditorValue(t);
      writingChatInputController_1.writingChatInput.focusOnWritingEditor({
        toIndex: conversationMessageUtilsHelper.countMessageContentLength(t)
      });
      setTimeout(() => {
        if (!i) {
          writingChatInputController_1.writingChatInput.off("contentChange", r);
          e(false);
        }
      }, n);
    });
  };
  require.d(exports, {
    verifyWritingInput: function () {
      return m;
    }
  });
}