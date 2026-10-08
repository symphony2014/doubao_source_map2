// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q7' to 'openDocumentByConversationAndPage'
// - Renamed export 'Jw' to 'getDocumentUrl'
// - Renamed export 'lE' to 'buildCanvasOpenUrl'
// - Renamed export 'X1' to 'isDocumentResource'
// - Renamed export 'y_' to 'openDocumentByResourceType'
// - Renamed export 'qy' to 'openDocumentByToken'
// - Renamed export 'gk' to 'navigateToChat'
// - Renamed export 'UY' to 'getDocBasePath'
// - Renamed export 'ZV' to 'isValidDocumentKey'
// - Renamed export 'of' to 'createDocumentWithToast'
// - Renamed export 'XU' to 'isFusionDocResource'
// - Renamed export 'AQ' to 'createDocument'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28074.36f432f6.js
         * chunkId: 28074
         * moduleId: 491592
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var queryStringUtils_2_1 = require("query-string-utils_2_1") /*id: 698435*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var pageVisitTrackContext = require("page-visit-track-context") /*id: 857541*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var apiErrorChecker = require("api-error-checker") /*id: 429379*/;
  var chatErrorCodes = require("chat-error-codes") /*id: 679391*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var secureLinkOpener = require("secure-link-opener") /*id: 357305*/;
  var semiSpinComponent = require("semi-spin-component") /*id: 714437*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var doubaoConfigConstants_1 = require("doubao-config-constants_1") /*id: 234080*/;
  var dbxSonnerToasterWrapper = require("dbx-sonner-toaster-wrapper") /*id: 682910*/;
  var writeConfigManager = require("write-config-manager") /*id: 336456*/;
  var feishuDocService = require("feishu-doc-service") /*id: 724566*/;
  var legacyDocQueryBuilder = require("legacy-doc-query-builder") /*id: 471669*/;
  var artifactResourceLayout = require("artifact-resource-layout") /*id: 774071*/;
  var chatSkillInputConstants = require("chat-skill-input-constants") /*id: 697792*/;
  var threadContentTypes = require("thread-content-types") /*id: 878038*/;
  var driveDocsUpgradeToast = require("drive-docs-upgrade-toast") /*id: 847503*/;
  var documentUpgradeAndCreationUtils = require("document-upgrade-and-creation-utils") /*id: 24188*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let N = e => {
    let t = doubaoConfigConstants_1.httpsBaseUrl;
    let i = location.host.endsWith(doubaoConfigConstants_1.domainName) ? location.origin : t;
    return `${i}${e.startsWith("/") ? "" : "/"}${e}`;
  };
  let W = (e, t) => `/chat/${t}?action=${encodeURIComponent(JSON.stringify({
    pluginId: "AISpace_DocCanvasOpen",
    payload: {
      pages_id: e
    }
  }))}`;
  let j = (e, t, i) => e ? B({
    key: e
  }) ? `${z(!i)}/${e}` : t ? W(e, t) : undefined : undefined;
  let E = e => {
    let {
      conversationId: t,
      pagesId: i,
      redirect: r = false,
      navigate: a
    } = e;
    let o = W(i, t);
    let l = N(o);
    if (r) {
      location.href = xssContentSanitizer.sanitizeUrl(l, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3elZqQmhWM2g2$ERK%2RsbD$O$EJqTTJob1kyMWtN$04z%FQwPQ"
      });
      return;
    }
    if (a) {
      a(o, {
        replace: true
      });
      return;
    }
    secureLinkOpener.openSecureLink(l);
  };
  let C = e => {
    let {
      pageToken: t,
      layoutMode: i,
      templateId: a,
      navigate: o,
      enterFrom: s,
      isDocPlayground: c = false,
      showImportOnboarding: d,
      isRedirect: u,
      isD2dFusionDoc: m = false
    } = e;
    let g = window.location.pathname.startsWith("/doc");
    let p = o && (g || c);
    let f = `${c ? "/doc-playground/" : m ? "/docx/" : "/doc/"}${t}`;
    let w = p ? t : f;
    let v = Object.fromEntries(Object.entries({
      layout_mode: i,
      template_id: a,
      enter_from: s,
      show_import_onboarding: d
    }).filter(e => {
      let [t, i] = e;
      return i != null && i !== "";
    }));
    let _ = queryStringUtils_2_1.queryStringUtils.stringify(v);
    if (_) {
      w += `?${_}&prev_page=${pageVisitTrackContext.getCurrentPage()}`;
    } else {
      w += `?prev_page=${pageVisitTrackContext.getCurrentPage()}`;
    }
    if (u) {
      location.href = xssContentSanitizer.sanitizeUrl(location.origin + w, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3elZqQmhWM2g2$ERK%2RsbD$O$EJqTTJob1kyMWtN$04z%FQwPQ"
      });
      return;
    }
    if (p) {
      o(w);
      return;
    }
    let b = N(w);
    secureLinkOpener.openSecureLink(b);
  };
  let T = async e => {
    let {
      type: t,
      docId: i,
      conversationId: n,
      source: r,
      navigate: o
    } = e;
    if (!i || !n) {
      return;
    }
    let l = () => {
      E({
        conversationId: n,
        pagesId: i,
        navigate: o
      });
    };
    if (collectionIncludesUtil.includes([artifactResourceLayout.ArtifactResource.CanvasPages, artifactResourceLayout.ArtifactResource.DocxPage, artifactResourceLayout.ArtifactResource.StepWritingOtterPage, artifactResourceLayout.ArtifactResource.StepDocxPage], t)) {
      C({
        pageToken: i,
        enterFrom: r,
        navigate: o
      });
      return;
    }
    if (collectionIncludesUtil.includes([artifactResourceLayout.ArtifactResource.Pages, artifactResourceLayout.ArtifactResource.StepWritingPages], t)) {
      if (!(await writeConfigManager.WriteConfigManager.isNewDoc())) {
        l();
        return;
      }
      let {
        status: e,
        newDocId: t
      } = await documentUpgradeAndCreationUtils.upgradeDocument({
        docId: i,
        conversationId: n
      });
      if (e === chatSkillInputConstants.PageUpgradeStatus.NotUpgrade) {
        l();
        return;
      }
      if (e === chatSkillInputConstants.PageUpgradeStatus.Upgraded && t) {
        C({
          pageToken: t,
          navigate: o
        });
        return;
      }
      let r = N(`/doc/${i}?${legacyDocQueryBuilder.buildLegacyDocQuery({
        conversationId: n
      })}`);
      secureLinkOpener.openSecureLink(r);
    }
  };
  let Z = async e => {
    let {
      createAction: t,
      onSuccess: i
    } = e;
    let n = samanthaToastFactory.toastInstance.info({
      icon: reactJsxRuntimeCoreReexport.jsx(semiSpinComponent.Spin, {
        wrapperClassName: "loading-spin-C5kl6A"
      }),
      duration: 0,
      content: i18nTranslationUtils.i18nextTranslate("write_guidance_creating_doc")
    });
    try {
      let {
        token: e
      } = await t();
      samanthaToastFactory.toastInstance.close(n);
      samanthaToastFactory.toastInstance.success(i18nTranslationUtils.i18nextTranslate("write_guidance_create_doc_success"));
      i(e);
    } catch (e) {
      if (apiErrorChecker.isApiError(e) && [chatErrorCodes.chatErrorCodes.UPGRADED_FUSION_DOC, chatErrorCodes.chatErrorCodes.UPGRADING_FUSION_DOC].includes(Number(e == null ? undefined : e.errorOption?.code))) {
        dbxSonnerToasterWrapper.dbxToastAPI.info(reactJsxRuntimeCoreReexport.jsx(driveDocsUpgradeToast.DocsUpgradeToast, {}), {
          duration: 3000
        });
      } else {
        samanthaToastFactory.toastInstance.error(i18nTranslationUtils.i18nextTranslate("doc_create_failed"));
      }
    } finally {
      samanthaToastFactory.toastInstance.close(n);
    }
  };
  let M = async e => {
    let {
      navigate: t,
      parentNodeId: i,
      onSuccess: n,
      isDocPlayground: r,
      enterFrom: a,
      layoutMode: o,
      syncCreateFeishuDoc: l
    } = e;
    let s = await writeConfigManager.WriteConfigManager.isFusionDoc();
    let c = s ? () => feishuDocService.createFeishuDoc({
      parent_token: i,
      use_sync: l
    }) : () => documentUpgradeAndCreationUtils.createNewPageByLegacyDoc({
      parentNodeId: i
    });
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "create_docx",
      meta: {
        scene: threadContentTypes.ThreadTypes.Blank,
        url_path: location.pathname
      }
    });
    return Z({
      createAction: c,
      onSuccess: e => {
        if (n != null) {
          n(e);
        }
        C({
          pageToken: e,
          navigate: t,
          enterFrom: a,
          layoutMode: o,
          isDocPlayground: r,
          isD2dFusionDoc: s
        });
      }
    });
  };
  let B = e => {
    let {
      key: t
    } = e;
    return isUndefinedCheck.isUndefined(infraUtilFunctions.parseNumber(t));
  };
  let F = e => {
    if (e == null) {
      return false;
    }
    let t = [artifactResourceLayout.ArtifactResource.CanvasPages, artifactResourceLayout.ArtifactResource.DocxPage, artifactResourceLayout.ArtifactResource.StepWritingOtterPage, artifactResourceLayout.ArtifactResource.StepDocxPage];
    return collectionIncludesUtil.includes(t, e);
  };
  let P = e => {
    if (e == null) {
      return false;
    }
    let t = [artifactResourceLayout.ArtifactResource.Pages, artifactResourceLayout.ArtifactResource.StepWritingPages, artifactResourceLayout.ArtifactResource.CanvasPages, artifactResourceLayout.ArtifactResource.DocxPage, artifactResourceLayout.ArtifactResource.StepWritingOtterPage, artifactResourceLayout.ArtifactResource.StepDocxPage];
    return collectionIncludesUtil.includes(t, e);
  };
  let D = () => {
    location.assign(xssContentSanitizer.sanitizeUrl(`${location.origin}/chat/`, null, {
      logType: "js.window.location",
      reportOnly: "false",
      blackConfig: "{}",
      configMode: "merge",
      isCloseSSRReport: false,
      bid: "flow_web",
      region: "cn",
      urlLimit: "-1",
      htmlLimit: "-1",
      isSaveValidUrl: false,
      isRuntimeLog: false,
      isDOMParser: true,
      escapeRule: "escape-report",
      reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
      scmBranch: "release_train_samantha_2026-03-09_1120843696898",
      scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
      scmVersion: "1.0.4.168",
      webpackPluginVersion: "3.4.5",
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jJZek5L-Wt3elZqQmhWM2g2$ERK%2RsbD$O$EJqTTJob1kyMWtN$04z%FQwPQ"
    }));
  };
  let z = e => e ? "/doc" : "/docx";
  require.d(exports, {
    openDocumentByConversationAndPage: function () {
      return E;
    },
    getDocumentUrl: function () {
      return j;
    },
    buildCanvasOpenUrl: function () {
      return W;
    },
    isDocumentResource: function () {
      return P;
    },
    openDocumentByResourceType: function () {
      return T;
    },
    openDocumentByToken: function () {
      return C;
    },
    navigateToChat: function () {
      return D;
    },
    getDocBasePath: function () {
      return z;
    },
    isValidDocumentKey: function () {
      return N;
    },
    createDocumentWithToast: function () {
      return M;
    },
    isFusionDocResource: function () {
      return B;
    },
    createDocument: function () {
      return F;
    }
  });
}