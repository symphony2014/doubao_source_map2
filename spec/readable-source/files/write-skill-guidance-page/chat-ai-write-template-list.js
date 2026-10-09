// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'WriteTemplateList'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42241.852052e1.js
         * chunkId: 42241
         * moduleId: 587322
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var l = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var storageFeatureGateParser = require("storage-feature-gate-parser") /*id: 696334*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var resizeObserverHooks = require("resize-observer-hooks") /*id: 246619*/;
  var f = require.p + "static/image/long_write_small_bg_dm.5300c522.png";
  var m = require.p + "static/image/long_write_small_bg.a2ca6f25.png";
  var skillPageWriteTemplateItem = require("skill-page-write-template-item") /*id: 561161*/;
  var writingSkillConfigHooks = require("writing-skill-config-hooks") /*id: 276565*/;
  var g = {
    long_article_card: "long_article_card-X8zi6j",
    small_first_card: "small_first_card-t2drL1",
    small_card: "small_card-ZfRtKv",
    container: "container-tlWYpD"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var C = e => {
    let {
      templates: t = [],
      handleClickTemplate: n,
      trackParams: s,
      currentTemplate: C,
      handleClickLongArticle: b,
      showLongArticle: _,
      currentTabIndex: E,
      className: y,
      showTag: R = true,
      small: k,
      cardClassName: S
    } = e;
    let T = i18nTranslationUtils.useTranslationWithFallback();
    let N = writingSkillConfigHooks.useWritingTemplateList();
    let x = reactCoreLibraryReexport.useRef(null);
    let {
      width: j = 0
    } = resizeObserverHooks.useResizeObserverEx({
      ref: x
    });
    let F = chatFgStoreHooks.getSourceKeySync(storageFeatureGateParser.featureGateKeys.forceDarkMode, {
      source: chatStorageKeys.chatStorageKeys.debugStorage
    });
    let M = reactCoreLibraryReexport.useMemo(() => j >= 657 ? 4 : j >= 517 ? 3 : 2, [j]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: l(g.container, y),
      style: {
        gridTemplateColumns: `repeat(${M}, 1fr)`
      },
      ref: x,
      "data-testid": "write_template_list",
      children: [reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: E === 0 && N && _ && reactJsxRuntimeCoreReexport.jsx(skillPageWriteTemplateItem.writeTemplateItem, {
          small: k,
          show_name: N == null ? undefined : N.show_name,
          checked: deepEqualUtil_1.deepEqual(C, N),
          value: N == null ? undefined : N.value,
          onClick: e => b == null ? undefined : b(N ?? {}, e),
          trackParams: s,
          description: N == null ? undefined : N.description,
          background_url: F ? f : m,
          containerClassName: l(g.long_article_card, S, {
            [g.small_first_card]: k
          })
        }, "long_article_writing_config")
      }), t.map((e, t) => {
        let {
          background_url: r,
          show_name: a,
          value: o,
          type: c,
          genre: u
        } = e;
        return reactJsxRuntimeCoreReexport.jsx(skillPageWriteTemplateItem.writeTemplateItem, {
          small: k,
          background_url: r,
          show_name: a,
          checked: deepEqualUtil_1.deepEqual(C, e),
          value: o,
          genre: u,
          onClick: t => n(e, t),
          tag: R && c === chatAiConstants.serviceLevel.Professional ? T("skill_writing_template_bySteps_tag") : undefined,
          trackParams: s,
          icon_url: e.icon_url,
          description: e.description,
          containerClassName: l(S, {
            [g.small_card]: k
          })
        }, `${t}_${u}`);
      })]
    });
  };
  require.d(exports, {
    WriteTemplateList: function () {
      return C;
    }
  });
}