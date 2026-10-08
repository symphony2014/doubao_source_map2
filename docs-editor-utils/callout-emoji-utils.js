// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZX' to 'getCalloutSettings'
// - Renamed export 'l$' to 'getDefaultCalloutColors'
// - Renamed export 'p0' to 'createCalloutNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 247313
         */
module.exports = function (module, exports, require) {
  var themeColorManagerFacade = require("theme-color-manager-facade") /*id: 552375*/;
  var docCalloutColorThemes = require("doc-callout-color-themes") /*id: 309297*/;
  var localStorageUtils = require("local-storage-utils") /*id: 378345*/;
  var documentNodeFactory_2 = require("document-node-factory_2") /*id: 557996*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockEmojiConstants = require("doc-block-emoji-constants") /*id: 664589*/;
  var emojiStorageManagerSingleton = require("emoji-storage-manager-singleton") /*id: 980699*/;
  let d = null;
  function f() {
    if (!d) {
      let n = localStorageUtils.getStorageObject(localStorageUtils.StorageKeys.CalloutSetting, {});
      d = {
        attrs: (n == null ? undefined : n.attrs) || {},
        recentEmojis: (n == null ? undefined : n.recentEmojis?.length) ? n.recentEmojis : [...docBlockEmojiConstants.defaultEmojiList]
      };
    }
    return d;
  }
  function h() {
    return {
      background_color: themeColorManagerFacade.getThemeRgbMap(docCalloutColorThemes.colorTypeKeys.BackgroundColor).get(docCalloutColorThemes.colorOptions.LightOrange),
      border_color: themeColorManagerFacade.getThemeRgbMap(docCalloutColorThemes.colorTypeKeys.Border).light.get(docCalloutColorThemes.colorNames.Orange),
      text_color: ""
    };
  }
  function _(e = {}, n = docBlockTypeConstants.blockTypeConstants.CALLOUT) {
    return documentNodeFactory_2.createDocumentNode({
      ...{
        ...function () {
          let e = docBlockEmojiConstants.emojiHexList[Math.floor(Math.random() * docBlockEmojiConstants.emojiHexList.length)];
          let n = emojiStorageManagerSingleton.EmojiStorageManager.getInstance();
          let r = n == null ? undefined : n.getUnified(e);
          return {
            ...(r ? {
              emoji_id: e,
              emoji_value: r
            } : {
              emoji_id: e
            }),
            ...h()
          };
        }(),
        ...f().attrs
      },
      type: n,
      align: docBlockTypeConstants.alignmentConstants.LEFT,
      ...e
    }, n);
  }
  require.d(exports, {
    getCalloutSettings: function () {
      return f;
    },
    getDefaultCalloutColors: function () {
      return h;
    },
    createCalloutNode: function () {
      return _;
    }
  });
}