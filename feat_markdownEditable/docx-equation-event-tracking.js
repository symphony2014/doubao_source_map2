// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MR' to 'trackEquationView'
// - Renamed export 'X_' to 'openEquationHelp'
// - Renamed export 'ZP' to 'trackEquationEdit'
// - Renamed export 'cY' to 'trackEquationEntry'
// - Renamed export 'eL' to 'InlineEditActions'
// - Renamed export 'ft' to 'formatClassNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_tool-box-group-items-async.de937fc5.js
         * chunkId: 36228
         * moduleId: 80663
         */
module.exports = function (module, exports, require) {
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  let i = () => {
    let e = `https://${window.location.host}/doc/public/WB7zfOrs9d5IiqcbwCpcf76anHf`;
    docUrlProcessingUtilities.openUrlSafely(e);
    docxEventCollector.wrappedCollector("ccm_doc_equation_edit_page_click", {
      click: "click_equation_help",
      target: "none"
    });
  };
  let a = e => {
    if (e) {
      docxEventCollector.wrappedCollector("ccm_doc_equation_edit_page_view", {});
    } else {
      docxEventCollector.wrappedCollector("ccm_doc_equation_edit_page_click", {
        click: "exit_equation_edit_view",
        target: "none"
      });
    }
  };
  let c = {
    ADD: "inline_add",
    DELETE: "inline_delete",
    EDIT: "inline_edit"
  };
  let u = e => {
    docxEventCollector.wrappedCollector("ccm_doc_inline_component_edit_click", {
      click: e,
      target: "none",
      inline_type: "equation",
      domain: "text"
    });
  };
  let d = () => {
    docxEventCollector.wrappedCollector("ccm_doc_content_page_click", {
      click: "click_inline_component",
      target: "ccm_doc_equation_edit_page_view",
      inline_type: "equation"
    });
  };
  let s = e => {
    if (e) {
      return e.trim().split(/\s+/).map(e => `.${e}`).join("");
    }
  };
  require.d(exports, {
    trackEquationView: function () {
      return a;
    },
    openEquationHelp: function () {
      return i;
    },
    trackEquationEdit: function () {
      return u;
    },
    trackEquationEntry: function () {
      return d;
    },
    InlineEditActions: function () {
      return c;
    },
    formatClassNames: function () {
      return s;
    }
  });
}