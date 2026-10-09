// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'getDocumentPdfKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-engine-submit.303ad9f1.js
         * chunkId: 12958
         * moduleId: 523108
         */
module.exports = function (module, exports, require) {
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  let a = async e => {
    let t = eventReportingService.createEventReporter({
      eventName: "get_doc_pdf_key"
    });
    try {
      var n;
      var a;
      let r = await apiServicesCollection.SamanthaApiService.GetDocumentInfo({
        uris: [e]
      });
      let s = (a = r.data) === null || a === undefined ? undefined : (n = a.infos) === null || n === undefined ? undefined : n[e].redirect_pdf;
      if ((s == null ? undefined : s.can_redirect) && (s == null ? undefined : s.pdf?.key)) {
        t.addDurationPoint("success");
        t.success();
        if (s == null) {
          return undefined;
        } else {
          return s.pdf?.key;
        }
      }
      t.error({
        reason: "get_doc_pdf_key_empty"
      });
    } catch (e) {
      t.error({
        error: e instanceof Error ? e : Error(String(e)),
        reason: "get_doc_pdf_key_failed"
      });
    }
  };
  require.d(exports, {
    getDocumentPdfKey: function () {
      return a;
    }
  });
}