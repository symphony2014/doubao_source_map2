// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'SkillMessageCard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 522867
         */
module.exports = function (module, exports, require) {
  var rtlSkillMessageIcon = require("rtl-skill-message-icon") /*id: 696859*/;
  var cardWithSpinAndChevron = require("card-with-spin-and-chevron") /*id: 22941*/;
  var threadIconConfig = require("thread-icon-config") /*id: 928349*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      contentBlock: n
    } = e;
    let {
      is_finish: a
    } = n ?? {};
    let {
      summary: s = ""
    } = (n == null ? undefined : n.content_obj) ?? {};
    if (!s) {
      return null;
    }
    let [c] = s.split("“%s”");
    return reactJsxRuntimeCoreReexport.jsx(cardWithSpinAndChevron.CardComponent, {
      title: c,
      prefixIcon: reactJsxRuntimeCoreReexport.jsx(rtlSkillMessageIcon.SkillMessageIcon, {
        className: threadIconConfig.iconConfig.icon
      }),
      isLoading: !a,
      showSuffixIcon: false
    });
  };
  require.d(exports, {
    SkillMessageCard: function () {
      return a;
    }
  });
}