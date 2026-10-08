// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ks' to 'useTemplateEntryType'
// - Renamed export 'sl' to 'useCategoryName'
// - Renamed export 'oQ' to 'useEditorValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 701989
         */
module.exports = function (module, exports, require) {
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var imageSkillStoreHook = require("image-skill-store-hook") /*id: 310175*/;
  let o = function (e, t = deepEqualityUtil_1.isDeepEqual) {
    let n = function () {
      var n = arguments.length;
      var i = Array(n);
      var r = 0;
      for (; r < n; r++) {
        i[r] = arguments[r];
      }
      return imageSkillStoreHook.useImageSkillStore(t => e(t, ...i), t);
    };
    n.raw = e;
    return n;
  };
  let l = o(e => e.editorValue);
  let s = o(e => e.categoryName);
  let c = o(e => e.applyTemplateEntryType);
  o(e => inputToolConverter.extractText(e.editorValue.data).trim() === "");
  require.d(exports, {
    useTemplateEntryType: function () {
      return c;
    },
    useCategoryName: function () {
      return s;
    },
    useEditorValue: function () {
      return l;
    }
  });
}