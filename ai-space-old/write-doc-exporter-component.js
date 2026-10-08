// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'observableTypeCheck'
// - Resolved require(279182) to 'observable-type-check'
// - Renamed variable 'a' to 'docExportPopoverComponent'
// - Resolved require(782617) to 'doc-export-popover-component'
// - Renamed variable 'r' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'o' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'l' to 'chatAppEnums'
// - Resolved require(299505) to 'chat-app-enums'
// - Renamed variable 's' to 'samanthaToastFactory'
// - Resolved require(697541) to 'samantha-toast-factory'
// - Renamed variable 'c' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'd' to 'samanthaPagesApiService'
// - Resolved require(122025) to 'samantha-pages-api-service'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'D4' to 'fetchDocumentWithStatus' (module 122025)
// - Updated imported property 'Bi' to 'getImageBannerUrl' (module 122025)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'b' to 'isObservable' (module 279182)
// - Updated imported property 'pJ' to 'toastInstance' (module 697541)
// - Updated imported property 'P' to 'DocExportPopover' (module 782617)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 110398
         */
module.exports = function (module, exports, require) {
  var observableTypeCheck = require("observable-type-check") /*id: 279182*/;
  var docExportPopoverComponent = require("doc-export-popover-component") /*id: 782617*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var samanthaPagesApiService = require("samantha-pages-api-service") /*id: 122025*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      docId: t,
      onFetchDoc: i = samanthaPagesApiService.fetchDocumentWithStatus,
      message: p,
      extraEventParams: _,
      ...m
    } = e;
    let h = i18nTranslationUtils.useTranslationWithFallback();
    let f = async () => {
      let {
        title: e,
        value: a
      } = await i({
        docId: t
      });
      if (!a) {
        throw Error("Cannot get doc value when fetch doc before export");
      }
      if (observableTypeCheck.isObservable(a)) {
        samanthaToastFactory.toastInstance.info("不能导出正在生成的文档");
        return null;
      } else {
        return {
          title: e,
          value: a
        };
      }
    };
    let v = () => {
      var n;
      if ((p == null ? undefined : p.skill?.skill_type) === chatAppEnums.SkillType.DesExtSkillSuperTask) {
        return {
          super_task_id: p == null ? undefined : p.async_task?.id,
          super_task_mode: (p == null ? undefined : (n = p.verbose) === null || n === undefined ? undefined : n.super_task?.supertask_task_type) === "0" ? "search_task" : "complex_task",
          skill_id: "138",
          skill_name: "super_task",
          message_id: p == null ? undefined : p.message_id
        };
      } else {
        return {};
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(docExportPopoverComponent.DocExportPopover, {
      ...m,
      loadingText: h("doc_editor_toolbar_download_loading"),
      onFetchDoc: f,
      onExportError: e => {
        let {
          error: t,
          type: i
        } = e;
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "write_doc_exporter_export_error",
          error: t,
          meta: {
            type: i
          }
        });
      },
      onLoadImageById: samanthaPagesApiService.getImageBannerUrl,
      onBeforeExport: e => {
        let {
          type: t
        } = e;
        teaAnalyticsEventTracker.trackEvent("download", {
          content_type: "ai_doc",
          content_sec_type: t,
          click_from: "reply_message",
          ...v(),
          ..._
        });
      }
    });
  };
  require.d(exports, {
    WriteDocExporter: function () {
      return p;
    }
  });
}