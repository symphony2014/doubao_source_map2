// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'createLinkValidator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 12358.f77a465e.js
         * chunkId: 12358
         * moduleId: 392039
         */
module.exports = function (module, exports, require) {
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var linkSniffApiService = require("link-sniff-api-service") /*id: 377680*/;
  var chatToastFactoryHook = require("chat-toast-factory-hook") /*id: 219785*/;
  let r = () => {
    let e = chatToastFactoryHook.useToastFactory();
    let t = i18nTranslationUtils.useTranslationWithFallback();
    return async function (n) {
      let c = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
      let d = await linkSniffApiService.sniffLinkMetadata(n);
      let u = d == null ? undefined : d.repository?.not_support_reason;
      let p = "";
      let f = d.repository?.is_repo === true;
      if (!f) {
        p = t("cici_web_ai_coding_repo_limit");
      }
      if ((d == null ? undefined : d.code) === 672000131) {
        p = t("cici_web_ai_coding_zip_size_limit");
      }
      if (u === chatAiConstants.githubValidationReason.NotPublicRepository || u === chatAiConstants.githubValidationReason.NotGitHubLink) {
        p = t("cici_web_ai_coding_repo_limit");
      }
      if (u === chatAiConstants.githubValidationReason.SizeOverLimit) {
        let e = Number((d == null ? undefined : d.repository?.size_limit_kb) ?? 40960) / 1024;
        p = t("cici_web_ai_coding_zip_size_limit_2", {
          postProcess: "sprintf",
          sprintf: [`${e.toFixed()} MB`]
        });
      }
      if (p && c) {
        e.error(p);
      }
      let _ = d == null ? undefined : d.repository;
      return {
        valid: !!f,
        errorMessage: p,
        metaInfo: {
          ..._,
          original_url: n,
          analysis_url: _ == null ? undefined : _.link
        }
      };
    };
  };
  require.d(exports, {
    createLinkValidator: function () {
      return r;
    }
  });
}