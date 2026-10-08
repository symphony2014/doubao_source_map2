// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Mv' to 'reportTemplateAlgorithmData'
// - Renamed export 'j1' to 'checkDocCreateCopyAction'
// - Renamed export 'rw' to 'saveAsBlockTemplate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 267506
         */
module.exports = function (module, exports, require) {
  var i18nLanguageDetector = require("i18n-language-detector") /*id: 1451*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var apiEndpointConstants = require("api-endpoint-constants") /*id: 403286*/;
  let s = (e, n) => platformDocUtils.WY0({
    url: apiEndpointConstants.apiEndpoints.meta,
    method: "get",
    headers: {
      "Content-Type": "application/json"
    },
    params: {
      type: e,
      token: n
    }
  });
  let d = async (e, n) => {
    let r = {
      root_block_id: e,
      payload: n,
      obj_token: docTokenHelperUtils.resolveDocToken(),
      obj_type: fileTypeConstants.BasicFileType.DOCX
    };
    return platformDocUtils.WY0({
      url: apiEndpointConstants.apiEndpoints.saveAsBlockTemplate,
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      timeout: 20000,
      data: r
    });
  };
  let h = e => {
    let {
      template: n,
      objType: r,
      objToken: o,
      reportType: l
    } = e;
    let {
      id: a,
      obj_token: c
    } = n;
    let s = JSON.stringify({
      template_id: a,
      template_token: c,
      obj_type: r,
      obj_token: o
    });
    platformDocUtils.WY0.post(apiEndpointConstants.apiEndpoints.reportTemplateAlgorithmData, {
      data: s,
      report_type: l
    }, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  };
  let f = async e => {
    let {
      data: n
    } = await s(fileTypeConstants.BasicFileType.DOCX, e);
    if (!n) {
      return;
    }
    let {
      owner_id: r,
      tenant_id: i
    } = n;
    let c = docActionManager.createActionManager({
      file: {
        token: e,
        type: fileTypeConstants.BasicFileType.DOCX,
        ownerId: r,
        tenantId: i
      },
      locale: i18nLanguageDetector.getCurrentLocale(),
      source: docActionManager.fileTypes.DOC
    });
    await c.initTask;
    return await c.checkAction(docActionManager.actionConstants.DOCCREATECOPY);
  };
  require.d(exports, {
    reportTemplateAlgorithmData: function () {
      return h;
    },
    checkDocCreateCopyAction: function () {
      return f;
    },
    saveAsBlockTemplate: function () {
      return d;
    }
  });
}