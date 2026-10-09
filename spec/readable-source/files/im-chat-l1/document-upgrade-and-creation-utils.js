// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l4' to 'upgradeDocumentAndGetId'
// - Renamed export 'Lx' to 'createDocumentFromMarkdown'
// - Renamed export 'Vx' to 'createNewPageByLegacyDoc'
// - Renamed export 'jg' to 'insertTemplateContent'
// - Renamed export 'J8' to 'upgradeDocument'
// - Renamed export 'TH' to 'checkPageUpgradeStatus'
// - Renamed export 'qr' to 'duplicateDocument'
// - Renamed export 'tX' to 'createEmptyDocumentAndArtifact'
// - Renamed export 'Wf' to 'createBlankDocument'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 24188
         */
module.exports = function (module, exports, require) {
  var n;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  (n = {})[n.Unknown = 0] = "Unknown";
  n[n.Markdown = 1] = "Markdown";
  n[n.ClientVars = 2] = "ClientVars";
  n[n.Xml = 3] = "Xml";
  n[n.PureMarkdown = 4] = "PureMarkdown";
  n[n.HTML = 5] = "HTML";
  let o = n;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var documentNavigationAndCreationUtils = require("document-navigation-and-creation-utils") /*id: 491592*/;
  var chatMessageBlockUtils = require("chat-message-block-utils") /*id: 292414*/;
  var chatSkillInputConstants = require("chat-skill-input-constants") /*id: 697792*/;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var threadContentTypes = require("thread-content-types") /*id: 878038*/;
  let g = async e => {
    let {
      docId: t,
      conversationId: i,
      safe: n = false
    } = e;
    try {
      let {
        data: e
      } = await asyncRetryUtils.asyncRetry(() => apiServicesCollection.SamanthaApiService.CheckPageUpgradeStatus({
        pages_id: t,
        conversation_id: i
      }), 3, 0);
      let n = e == null ? undefined : e.status;
      if (isUndefinedCheck.isUndefined(n)) {
        throw Error("Invalid check upgrade response");
      }
      return n;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "check_upgrade_failed",
        error: e
      });
      if (n) {
        return null;
      }
      throw e;
    }
  };
  let p = async () => {
    try {
      return await writeConfigManager.WriteConfigManager.isNewDoc();
    } catch {
      return null;
    }
  };
  let f = async e => {
    let {
      docId: t,
      conversationId: i
    } = e;
    let n = {
      docId: t,
      conversationId: i,
      isNewDoc: await p()
    };
    try {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "doc_upgrade_start",
        meta: n
      });
      if (!t) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "doc_upgrade_failed",
          meta: {
            ...n,
            reason: "invalid_doc_id"
          },
          error: Error()
        });
        return {
          status: chatSkillInputConstants.PageUpgradeStatus.NotUpgrade
        };
      }
      let {
        data: e
      } = await asyncRetryUtils.pollUntilSuccess({
        value: () => apiServicesCollection.SamanthaApiService.ExecPageUpgrade({
          pages_id: t,
          conversation_id: i
        }),
        interval: 1000,
        count: 3,
        ifRetry: e => {
          let {
            data: t
          } = e;
          return (t == null ? undefined : t.status) === chatSkillInputConstants.PageUpgradeStatus.Upgrading;
        }
      });
      let {
        status: r = chatSkillInputConstants.PageUpgradeStatus.UpgradeFailed,
        page_token: o,
        artifact_version_id: c
      } = e ?? {};
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "doc_upgrade_success",
        meta: {
          ...n,
          status: r,
          newDocId: o
        }
      });
      return {
        status: r,
        newDocId: o,
        artifactVersionId: c
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "doc_upgrade_failed",
        meta: {
          ...n,
          reason: "request_failed"
        },
        error: e
      });
      return {
        status: chatSkillInputConstants.PageUpgradeStatus.UpgradeFailed
      };
    }
  };
  let w = async function (e, t = "") {
    if (documentNavigationAndCreationUtils.isFusionDocResource({
      key: e
    })) {
      return e;
    }
    let {
      status: i,
      newDocId: n
    } = await asyncRetryUtils.pollUntilSuccess({
      value: () => f({
        docId: e,
        conversationId: t
      }),
      count: 5,
      ifRetry: e => e.status === chatSkillInputConstants.PageUpgradeStatus.Upgrading
    });
    if (i === chatSkillInputConstants.PageUpgradeStatus.Upgraded && n) {
      return n;
    } else {
      return null;
    }
  };
  let v = async e => {
    let {
      docId: t,
      parentNodeId: i
    } = e;
    try {
      let {
        data: e = {}
      } = await apiServicesCollection.SamanthaApiService.GetPages({
        pages_id: t
      });
      let {
        title: n = "",
        source_content: r = ""
      } = e;
      let {
        token: l
      } = await y({
        content: r,
        title: chatMessageBlockUtils.getDocumentTitle(n),
        scene: threadContentTypes.ThreadTypes.Markdown,
        format: o.Markdown,
        parentNodeId: i
      });
      return l;
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "create_new_page_by_legacy_doc_error",
        error: e,
        meta: {
          doc_id: t
        }
      });
      throw e;
    }
  };
  async function _(e) {
    let {
      parentNodeId: t
    } = e;
    return y({
      scene: threadContentTypes.ThreadTypes.Blank,
      parentNodeId: t
    });
  }
  async function b(e) {
    let {
      pageToken: t,
      title: i,
      parentNodeId: n
    } = e;
    return x({
      pageToken: t,
      title: chatMessageBlockUtils.getDocumentTitle(i),
      scene: threadContentTypes.ThreadTypes.Duplicate,
      parentNodeId: n
    });
  }
  async function y(e) {
    let {
      content: t,
      title: i,
      format: n,
      scene: r,
      parentNodeId: o
    } = e;
    try {
      let e = await apiServicesCollection.OtterDocApiService.AGWCreatePage({
        content: t,
        title: i,
        format: n,
        source: 0,
        sub_type: 0,
        parent_node_id: o
      });
      if (e.code === 0 && e.data) {
        return e.data;
      }
      throw Error(`[resp_error]: ${JSON.stringify(e)}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "create_docx_error",
        error: e,
        meta: {
          scene: r
        }
      });
      throw e;
    }
  }
  async function x(e) {
    let {
      pageToken: t,
      title: i,
      scene: n,
      parentNodeId: r
    } = e;
    try {
      let e = await apiServicesCollection.OtterDocApiService.AGWCopyPage({
        page_token: t,
        source: 0,
        subtype: 0,
        title: i,
        parent_node_id: r
      });
      if (e.code === 0 && e.data) {
        return e.data;
      }
      throw Error(`[resp_error]: ${JSON.stringify(e)}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "create_docx_error",
        error: e,
        meta: {
          scene: n
        }
      });
      throw e;
    }
  }
  async function k() {
    try {
      let e = await apiServicesCollection.SamanthaApiService.CreatePageArtifact({});
      if (e.code === 0 && e.data) {
        return e.data;
      }
      throw Error(`[resp_error]: ${JSON.stringify(e)}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "create_empty_doc_and_artifact_error",
        error: e
      });
      throw e;
    }
  }
  async function $(e, t, i) {
    return y({
      content: e,
      title: t,
      format: o.Markdown,
      scene: threadContentTypes.ThreadTypes.Markdown,
      parentNodeId: i
    });
  }
  async function R(e, t, i = 1) {
    try {
      let n = await apiServicesCollection.OtterDocApiService.AGWInsertTemplateContent({
        page_token: e,
        template_token: t,
        base_ver: i
      });
      if (n.code === 0) {
        return n;
      }
      throw Error(`[resp_error]: ${JSON.stringify(n)}`);
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "insert_template_conten_error",
        error: e
      });
      throw e;
    }
  }
  require.d(exports, {
    upgradeDocumentAndGetId: function () {
      return w;
    },
    createDocumentFromMarkdown: function () {
      return $;
    },
    createNewPageByLegacyDoc: function () {
      return _;
    },
    insertTemplateContent: function () {
      return R;
    },
    upgradeDocument: function () {
      return f;
    },
    checkPageUpgradeStatus: function () {
      return v;
    },
    duplicateDocument: function () {
      return b;
    },
    createEmptyDocumentAndArtifact: function () {
      return k;
    },
    createBlankDocument: function () {
      return g;
    }
  });
}