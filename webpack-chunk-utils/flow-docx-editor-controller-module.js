// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'IF' to 'openBlockMenu'
// - Renamed export 'eH' to 'toggleCommentPanel'
// - Renamed export 'B5' to 'selectEditing'
// - Renamed export 'vN' to 'FlowDocXEditorController'
// - Renamed export 'BL' to 'hideBlockMenu'
// - Renamed export 'Tu' to 'FlowDocXEditorProvider'
// - Renamed export 'UE' to 'SuiteErrorCodes'
// - Renamed export 'v9' to 'FlowDocXPreviewComponent'
// - Renamed export 'TJ' to 'DocWidthModeSelector'
// - Renamed export '_V' to 'composingService'
// - Renamed export 'z1' to 'checkSingleEmptyTextBlock'
// - Renamed export 'VB' to 'toNumber'
// - Renamed export 'fU' to 'useFlowDocXEditorController'
// - Renamed export 'ov' to 'CopilotShareModes'
// - Renamed export 's6' to 'useDocWidthModeSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 544579
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var a;
  var u;
  var c;
  var _;
  var l;
  var E;
  var T;
  var p;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var platformEventDefinitions = require("platform-event-definitions") /*id: 460729*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var findReplaceActions = require("find-replace-actions") /*id: 877832*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var docLoggerSymbol = require("doc-logger-symbol") /*id: 192564*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docUiServiceSymbols = require("doc-ui-service-symbols") /*id: 452862*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  var contentCommentTypes = require("content-comment-types") /*id: 900376*/;
  var docxFlowCommentStore = require("docx-flow-comment-store") /*id: 822624*/;
  var flowCommentServiceToken = require("flow-comment-service-token") /*id: 397738*/;
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var clipboardServiceProviderExport = require("clipboard-service-provider-export") /*id: 555989*/;
  var docMetaSelectors = require("doc-meta-selectors") /*id: 359612*/;
  var panelToggleActions = require("panel-toggle-actions") /*id: 310864*/;
  var docxSignalSubjectRegistry = require("docx-signal-subject-registry") /*id: 272418*/;
  var bearWebSignalService = require("bear-web-signal-service") /*id: 32433*/;
  function U(e, n, r) {
    var i;
    if ((n = typeof (i = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var i = r.call(e, n || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[n] = r;
    }
    return e;
  }
  class k {
    get blockManager() {
      return this._blockManager;
    }
    get signalService() {
      var e;
      if ((e = this.blockManager) === null || e === undefined) {
        return undefined;
      } else {
        return e.editorAPI.getService(docxSignalSubjectRegistry.docxSignalService, {
          optional: true
        });
      }
    }
    get dataCollab() {
      var n;
      if ((n = this.blockManager) === null || n === undefined) {
        return undefined;
      } else {
        return n.config.get("dataHelper")?.dataCollab;
      }
    }
    init(e) {
      let {
        blockManager: n
      } = e;
      this._blockManager = n;
      this.initPromiseHandler.resolve();
      this.eventEmitter.emit("init", n);
      this.bindEvents();
    }
    bindEvents() {
      platformDocUtils.vpe.on(platformEventDefinitions.eventConstants.PC.DOCS.SYNC_NOTE_META, this.handleSyncNoteMeta);
    }
    unbindEvents() {
      this.subs.forEach(e => e.unsubscribe());
      platformDocUtils.vpe.off(platformEventDefinitions.eventConstants.PC.DOCS.SYNC_NOTE_META, this.handleSyncNoteMeta);
    }
    async toggleFindReplaceBox(e) {
      await this.initPromise;
      if (e) {
        reduxStoreInitializer.reduxStore.dispatch(findReplaceActions.openFindReplaceBox({
          showOnlyFindRow: !this.blockManager?.editable
        }));
      } else {
        reduxStoreInitializer.reduxStore.dispatch(findReplaceActions.closeFindReplaceBox());
      }
    }
    async toggleHistoryBox() {
      var e;
      await this.initPromise;
      if (!this.blockManager) {
        diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol).persist.error({
          message: "FlowDocXEditorController_editorNotFound",
          error: Error("FlowDocXEditorController_editorNotFound")
        });
        return;
      }
      let n = (e = this.blockManager) === null || e === undefined ? undefined : e.editorAPI.getService(bearWebSignalService.bearSignalService, {
        optional: true
      });
      if (n != null) {
        n.historyToggleSignal.next([{}]);
      }
    }
    async toggleHistoryCommentBox(e) {
      await this.initPromise;
      docxFlowCommentStore.setShowHistoryList(e);
    }
    async reopenHistoryComment(e) {
      var n;
      await this.initPromise;
      let r = (n = this.blockManager) === null || n === undefined ? undefined : n.editorAPI.getService(flowCommentServiceToken.commentServiceToken, {
        optional: true
      });
      if (r) {
        r.handleUpdateDocCommentStatus({
          type: contentCommentTypes.CommentType.ContentComment,
          commentId: e,
          status: contentCommentTypes.CommentStatus.normal
        });
        r.activateComment(e);
        r.scrollToBlockByCommentId(e);
        diContainerInstance.diContainer.get(docUiServiceSymbols.DocToastService).success({
          content: window.t("doc_comment_reopen_success_toast")
        });
      }
    }
    async deleteHistoryComment(e) {
      var n;
      await this.initPromise;
      let r = (n = this.blockManager) === null || n === undefined ? undefined : n.editorAPI.getService(flowCommentServiceToken.commentServiceToken, {
        optional: true
      });
      if (r != null) {
        r.handleDeleteDocCommentReply({
          type: contentCommentTypes.CommentType.ContentComment,
          commentId: e
        });
      }
    }
    async updateWidthMode(e) {
      await this.initPromise;
      platformDocUtils.vpe.emit(platformEventDefinitions.eventConstants.PC.DOCS.UPDATE_DOC_CONFIG, {
        [docxWidthModeConstants.attrNames.WIDTH_MODE]: e,
        token: docTokenManager.getDocToken()
      });
    }
    async copyDoc() {
      var e;
      let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let {
        withRoot: r = true,
        eraseRevision: i
      } = n;
      await this.initPromise;
      if ((e = this.blockManager) !== null && e !== undefined) {
        e.editorAPI.getService(clipboardServiceProviderExport.clipboardServiceId).instance.copyAllDoc({
          withRoot: r,
          eraseRevision: i
        });
      }
    }
    async togglePrintBox(e) {
      await this.initPromise;
      reduxStoreInitializer.reduxStore.dispatch(platformDocUtils.Nwg.suite.setShouldPrint(e));
    }
    async toggleHelpPanel(e) {
      await this.initPromise;
      reduxStoreInitializer.reduxStore.dispatch(panelToggleActions.toggleHelpPanel(e));
    }
    async getPageMeta() {
      var n;
      var r;
      await this.initPromise;
      let i = this.blockManager.getRecord(this.blockManager.rootRecordId);
      let o = editorDataManagerClass.EditorDataManager.serialize(i.snapshot.text).alltext;
      let a = !!i.snapshot.full_width;
      let u = docTokenManager.getDocToken();
      return {
        title: o,
        fullWidth: a,
        ownerId: (r = docMetaSelectors.getDocMeta(reduxStoreInitializer.reduxStore.getState())) === null || r === undefined ? undefined : (n = r.docMetaMap) === null || n === undefined ? undefined : n[u]?.owner_id
      };
    }
    destroy() {
      this.unbindEvents();
      this._blockManager = null;
    }
    constructor() {
      U(this, "initPromiseHandler", {
        resolve: () => {},
        reject: () => {}
      });
      U(this, "_blockManager", null);
      U(this, "initPromise", undefined);
      U(this, "eventEmitter", new eventEmitterWrapper_1.getEventEmitter());
      U(this, "subs", []);
      U(this, "handleSyncNoteMeta", e => {
        this.eventEmitter.emit("syncNoteMeta", e);
      });
      this.initPromise = new Promise((e, n) => {
        this.initPromiseHandler = {
          resolve: e,
          reject: n
        };
      });
    }
  }
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var isEqualUtil_1 = require("is-equal-util_1") /*id: 999658*/;
  let G = {
    isFromSuperApp: () => false
  };
  let W = () => {};
  var i18nInitializationUtils = require("i18n-initialization-utils") /*id: 379142*/;
  let x = async e => {
    Z();
    reduxStoreInitializer.registerStoreModule("docx", e);
    window.document.body.classList.add("layout-column");
    let n = typeof navigator != "undefined" && navigator.userAgent || "";
    if (/windows/i.test(n)) {
      window.document.body.classList.add("windows");
    }
    if (typeof window != "undefined") {
      Promise.all([Promise.all([require.e("moment-locales-bundle") /*id: 85547*/, require.e("theme-config-utilities") /*id: 15236*/, require.e("locale-chunk-mapping") /*id: 54817*/]).then(require.bind(require, "drive-utils-module") /*id: 880733*/), require.e("theme-manager") /*id: 29660*/.then(require.bind(require, "theme-management-and-context-provider") /*id: 829817*/)]).then(e => {
        let [{
          getThemeConfig: n
        }, {
          initTheme: i,
          isSupportTheme: o
        }] = e;
        i(n());
        W();
        let a = /disableTheme=true/.test(location.search || "");
        if ((G.isPcWeb || G.isFromSuperApp()) && !G.isOpendoc && !a) {
          try {
            require.e("storage-wrapper") /*id: 47421*/.then(require.bind(require, "lib-storage-core") /*id: 586806*/).then(e => {
              let {
                default: n,
                Driver: r
              } = e;
              n.createInstance({
                driver: r.LOCALSTORAGESYNC
              }).setItem("view_mode", {
                user: window.User.id,
                setting: window.__theme__,
                fg: o() ? "1" : ""
              });
            });
          } catch (e) {}
        }
      });
    }
    await i18nInitializationUtils.initTranslation();
  };
  let Z = () => {
    if (typeof window == "undefined") {
      return;
    }
    let r = new URL(location.href);
    window.globalConfig = {
      overload_static_domain: ["sf3-scmcdn2-cn.feishucdn.com", "sf1-scmcdn2-cn.feishucdn.com", "sf3-ccm1-cn.feishucdn.com", "sf6-scmcdn2-cn.feishucdn.com"],
      ext: {
        helpcenter_article: {
          incompatible_extension: 360037376033
        },
        pathname: {
          mina: "/config/get"
        },
        domain: {
          helpcenter: "www.feishu.cn",
          lark_file: "internal-api-lark-file.feishu.cn",
          "internal-api": "internal-api.feishu.cn",
          passport: "login.feishu.cn",
          lark_api: "internal-api-lark-api.feishu.cn",
          official: "www.feishu.cn",
          helpdesk: "helpdesk.feishu.cn",
          mina: "open.feishu.cn"
        }
      },
      paramsConfig: {
        storageNullSecretKey: "4f5a6965f9988e8fe757bc68ba7ad3a7",
        updatePreviewTplSeed: 1,
        fileSecureMode: false,
        create_api: ["internal-api-pre.feishu.cn/space/api/explorer/create", "internal-api-pre.larksuite.com/space/api/explorer/create"],
        fileURLPrefix: "https://www.feishu.cn",
        unitID: "cn",
        fileWebOfficeDomain: "weboffice.feishu-3rd-party-services.com"
      },
      image: ["p3-space-ee.byteimg.com", "p1-space-ee.byteimg.com"],
      static: ["s3.pstatp.com", "s1.pstatp.com"],
      urlMapper: {
        downloadLark: "https://www.feishu.cn/download",
        loginDocs: "https://login.feishu.cn/docs/passport/page/login",
        singleDocsHome: "https://docs.feishu.cn/welcome",
        loginLark: "https://login.feishu.cn/suite/passport/page/login",
        docHome: "https://www.feishu.cn/drive/home/",
        larkHome: "https://www.feishu.cn/",
        wikiHome: "https://www.feishu.cn/wiki/"
      },
      im_gateway: ["lark-frontier-hl.snssdk.com", "lark-frontier.snssdk.com"],
      nearby_drive_api: ["internal-api-drive-stream.feishu.cn"],
      drive_api: ["internal-api-drive-stream.feishu.cn", "api3-eeft-drive.feishu.cn"],
      space_api: ["internal-api-space.feishu.cn", "api3-eeft-docs.feishu.cn"],
      common: {
        abTest: {
          ab_channel_domain: "https://abtestvm.bytedance.com"
        },
        secLink: {
          open: true
        },
        domain: {
          applink: "applink.feishu.cn",
          open_platform: "internal-api.feishu.cn",
          passport: "login.feishu.cn",
          official: "www.feishu.cn",
          helpcenter: "www.feishu.cn",
          helpdesk: "helpdesk.feishu.cn",
          passport_agw_lark: "passport.larksuite.com",
          passport_agw_feishu: "login.feishu.cn",
          setting: "internal-api-lark-api.feishu.cn",
          lark_file: "internal-api-lark-file.feishu.cn",
          lark_api: "internal-api-lark-api.feishu.cn",
          okr_api: "okr.feishu.cn",
          security: "internal-api.feishu.cn",
          pano: "oa.feishu.cn"
        },
        mina: {
          domain: "open.feishu.cn",
          version: "online-1.0",
          pathName: "/config/get"
        },
        brand: {
          app_name: "APP_NAME_FEISHU"
        },
        domainPool: ["doubao.com"],
        sentry: {
          mobile: {
            projectSlug: {
              doc: "bear_mobile"
            },
            open: true,
            domain: "ee-sentry" + a7r51826g2d0u693s("$EcxS05X%khWbXRN-lRsN$dqSkdl$m96$m5vPQ"),
            organizationSlug: "bytedance-ee",
            raven: {
              projectId: 267,
              ignoreUrls: ["bear-test\\.bytedance\\.net", "docs-test\\.bytedance\\.net"],
              logger: "docs-mobile",
              dsnDomain: "b2b4fd03e1c94c17bdfee04f4001d617@internal-api-sentry.feishu.cn/normal"
            }
          },
          raven: {
            projectId: {
              doc: 65
            },
            ignoreUrls: ["bear-test\\.bytedance\\.net"],
            bid: {
              docs_pc: "docs_pc"
            },
            logger: {
              doc: "docs-fe"
            },
            dsnDomain: "f60ebb5d980b4795ad10d8ca7259dc0e@internal-api-sentry.feishu.cn/normal"
          },
          domain: "ee-sentry" + a7r51826g2d0u693s("$EcxS05X%khWbXRN-lRsN$dqSkdl$m96$m5vPQ"),
          organizationSlug: "bytedance-ee",
          projectSlug: {
            doc: "bear_fe"
          },
          open: true
        },
        env: "online",
        metrics: {
          domain: "api.zjurl.cn",
          open: true
        },
        product: "feishu",
        tea: {
          domain: "data" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ") + "/tea",
          api: {
            report: "/v1/list"
          },
          productId: {
            doc: 40
          },
          report_default_domain: "mcs-bd.feishu.cn",
          open: true,
          config: {
            appId: {},
            channel_domain: "https://mcs-bd.feishu.cn"
          }
        },
        frontier: {
          appKey: "5a4d135f57bfbf0461ad10cc7f1d3658",
          fpid: 54
        },
        rosetta: {
          domain: "rosetta.feishu.cn",
          path: "/rosetta/api/v1/products/29/cdn"
        },
        slardar: {
          region: "cn",
          config: {
            bid: {
              docs_pc: "docs_pc"
            },
            ignoreAjax: ["mcs\\.snssdk\\.com", "mcs-bd\\.feishu\\.cn", "mon-va\\.byteoversea\\.com", "api\\.zjurl\\.cn", ".*api\\/sheet\\/sht.*"]
          },
          open: true,
          logDomain: "slardar-bd.feishu.cn",
          mobile: {
            domain: "slardar" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ"),
            sdkAddr: "https://lf3-cdn-tos.bytegoofy.com/goofy/slardar/fe/sdk/browser.cn.js",
            logDomain: "slardar-bd.feishu.cn",
            region: "cn",
            config: {
              pid: "index",
              bid: "docs_mobile",
              ignoreAjax: ["mcs\\.snssdk\\.com", "mcs-bd\\.feishu\\.cn"]
            },
            open: true
          },
          domain: "slardar" + a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ"),
          sdkAddr: "https://lf3-cdn-tos.bytegoofy.com/goofy/slardar/fe/sdk/browser.cn.js"
        },
        helpcenter_article: {
          space_single_container: 361321970830,
          storage_help: 360049067797,
          importing_help: 360026428074,
          authorized_help: 360025093793,
          shimo_importing_help: "049570101480",
          supported_browser: 360038713913,
          stickup_help: 360044875193,
          incompatible_extension: 360037376033,
          confluence_importing_help: 612602911143,
          app_share_help: 360049067873
        },
        channel: "saas",
        garrMina: {
          domain: "open.feishu.cn",
          version: "1.0.0",
          pathName: "/config/get"
        },
        slardarWeb: {
          bid: "docs_pc",
          sdkAddr: "https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/browser.cn.js",
          ignoreUrls: ["mcs\\.snssdk\\.com", "mcs-bd\\.feishu\\.cn", "mcs-bd\\.larksuite\\.com", "mon-va\\.byteoversea\\.com", "api\\.zjurl\\.cn", ".*api\\/sheet\\/sht.*"],
          open: true
        },
        mainDomain: "feishu.cn",
        i18nCdnApi: {
          domain: "starling.snssdk.com",
          path: "/get_cdn/2102/"
        }
      },
      frontier: ["ccm-frontier.feishu.cn", "ccm-frontier-hl.feishu.cn"]
    };
    window.User = {
      id: window.User?.id || "mock_user_id_expected_error",
      sz: "",
      host: "",
      wsServer: "",
      language: "en-US",
      userAgent: "",
      suid: window.User?.id || "mock_user_id_expected_error",
      tenantId: "1",
      departmentId: "",
      wsTicket: "",
      appConfig: {
        ccm_sheet_performance_limit_config: {
          cell_count: 1000000,
          storage: 52428800,
          memory: 2147483648
        },
        virtualRenderConfig: {
          docx_virutal_tracker_store_size: -1,
          docx_virtual_idle_fast_max_interval: 100,
          docx_virtual_idle_fast_scroll_distance_factor: 3,
          docx_virtual_check_viewport_visibility_enable: true,
          docx_virtual_visibility_auto_fixed_mode: 1,
          docx_virutal_idle_normal_render_distance: 5000,
          docx_virtual_idle_worker_enable: true,
          docx_virtual_tracker_store_size: -1,
          docx_virtual_idle_fast_render_distance: 15000,
          docx_virutal_enable_record_document_structs: true,
          docx_virtual_idle_normal_min_interval: 300,
          docx_virtual_idle_fast_render_duration: 5000,
          docx_virtual_idle_normal_render_distance: 5000,
          docx_virtual_scroll_dirty_range: 8000,
          docx_virutal_idle_fast_max_interval: 100,
          docx_virtual_enable_record_document_structs: true,
          docx_virutal_idle_fast_render_distance: 15000,
          docx_virutal_idle_fast_render_duration: 5000,
          docx_virutal_idle_fast_scroll_distance_factor: 3,
          docx_virutal_did_change_node_record_store_size: 10,
          docx_virutal_idle_normal_min_interval: 300,
          docx_virutal_visibility_auto_fixed_mode: 1,
          docx_virtual_render_enable: true,
          docx_virtual_viewport_threshold: 90,
          docx_virtual_did_change_node_record_store_size: 10,
          docx_virtual_slice_mount_threshold: 20
        },
        sheet_client_vars_serialize_time_ms: 604800000,
        docx_lazy_consumer_config: {
          force_apply_block_count: 200,
          idle_limit_time: 50,
          idle_force_apply: true,
          idle_max_remain_time: 500
        },
        mobile_docx_pre_update_clientvar: {
          heartbeatThrottle: 1800,
          lruLen: 100,
          versionOverLimit: 3000,
          versionNeedUpdate: 800
        },
        unsupportedAttrs: {
          "zoneType-codeBlock": "spacekit.mobile.code_block_v2_enabled",
          "zoneType-calloutBlock": "spacekit.mobile.callout_block_enabled"
        },
        scs_data: ["internal-api-security.feishu.cn"],
        screenShotConfig: {
          timeout: 35000
        },
        blockMenuConfig: {
          notFixedBody: true
        },
        slide_font_list: [{
          size: [16229, 16412, 16983],
          subOptions: ["Light", "Normal", "Bold"],
          value: "思源黑体",
          name: "Noto Sans CJK",
          md5: ["09a97038e9e237fc190b56fc65dbc256", "cca5efc0e02fb1bf62349bd68ef30fc1", "e3f19cbf93383af71ea78e490097f6dd"],
          urls: ["NotoSansCJK-Light-3.otf", "NotoSansCJK-Regular-1.otf", "NotoSansCJK-Bold-6.otf"]
        }, {
          size: [11257],
          value: "思源宋体",
          name: "Source Han Serif CN",
          md5: ["473303fb0196740a378e53b4fa4fac85"],
          urls: ["SourceHanSerifCN-Regular-1.otf"]
        }, {
          size: [1915],
          value: "庞门正道标题体",
          name: "Pang Men Zheng Dao Biao Ti Ti",
          md5: ["e6033c0b29d4000778a9dc82f21c1fda"],
          urls: ["PangMenZhengDaoBiaoTiTi-1.ttf"]
        }, {
          name: "Arial",
          value: "Arial"
        }, {
          size: [158, 163],
          subOptions: ["Normal", "Bold"],
          value: "Roboto",
          name: "Roboto",
          md5: ["5673da52c98bb6cb33ada5aaf649703e", "36b5bab58a18b9c924861a4ccbf1a790"],
          urls: ["Roboto-Regular.ttf", "Roboto-Bold-3.ttf"]
        }, {
          size: [709, 311],
          subOptions: ["Normal", "Bold"],
          value: "Courier New",
          name: "Courier New",
          md5: ["5bc234e37ee12adc26918eb88e5e4ec4", "7d94f95bf383769b51379d095139f2d7"],
          urls: ["courier.ttf", "Courier_New_Bold.ttf"]
        }, {
          size: [135],
          subOptions: ["Bold"],
          value: "Impact",
          name: "Impact",
          md5: ["9f55a26d868843e465aeeb10dd59d64c"],
          urls: ["impact.ttf"]
        }, {
          size: [409, 398],
          subOptions: ["Normal", "Bold"],
          value: "Times New Roman",
          name: "Times New Roman",
          md5: ["7b58b97fe9788e2dbd80b4422f70632a", "d3ab9493f38ee4c1215fdba7882e3b05"],
          urls: ["Times-New-Roman.ttf", "Times-New-Roman-Bold.ttf"]
        }, {
          size: [127, 123],
          subOptions: ["Normal", "Bold"],
          value: "Trebuchet MS",
          name: "Trebuchet MS",
          md5: ["70e7be8567bc05f771b59abd9d696407", "6cbec14f7ae96def20259b23fb722619"],
          urls: ["TrebuchetMS.ttf", "Trebuchet-MS-Bold.ttf"]
        }, {
          size: [150, 138],
          subOptions: ["Normal", "Bold"],
          value: "Verdana",
          name: "Verdana",
          md5: ["7652f550f74d065c79f44da613344338", "daedaf09cc827df4b0f600758a637215"],
          urls: ["Verdana.ttf", "verdanab-bold.ttf"]
        }],
        operation_id: "cn",
        ccm_sheet_ios_clientvar_limit: {
          ios_rows_columns_limit: 50000
        },
        htmlCacheConfig: {
          fastTime: 1200,
          slowTime: 1500,
          minLineNum: 99999
        },
        lazyBlockRender: {
          blockFiberRender: true,
          fiber: true,
          lazyBlockRender: true,
          otherBlockAsyncEnable: false,
          atUserAsyncEnable: true,
          inlineBlockAsyncRender: true
        },
        slideFontVersion: 4,
        useBlockRender: {
          buffer: 100,
          screenNumber: 2,
          open: true,
          renderSeparation: true,
          enable_custom_selection: true,
          autoRender: {
            renderNumber: 100,
            increase: true,
            intervalTime: 2000
          },
          skipAboveRender: {
            renderCount: 300
          },
          unmount: true,
          fiber: true,
          firstScreenBuffer: 50
        },
        clientvarFetchSliceConfig: {
          preFetch: true,
          noWorker: true,
          concurrency: 3
        },
        iframe_config: `{"says":{"resizeType":2,"patterns":["^https://getsays.cn/share/([0-9a-zA-Z]{32}.*)$"],"template":"https://getsays.cn/embed/\${matched[1]}","copyable":true},"ad":{"resizeType":1,"patterns":["^https://(ad|mpdc|(compass(-)?(sg|i18n|va|cockpit)?))\\\\.bytedance\\\\.net/(kompaso|compass|platform|)/(page|report|visualization(-center)?)/(.+)","^https://mpdc\\\\.bytedance\\\\.net/viz-design-center/configuration/visualization/shared/component/(.*)","^https://mpdc\\\\.bytedance\\\\.net/compass-cockpit/platform/visualization/shared/component/(.*)"],"template":"\${matched.input}"},"autonavi":{"resizeType":1,"patterns":["^https://amap.com/(.+)","^https://((surl)|(ditu)|(www)).amap.com/(.+)","^https://gaode.com/(.+)"],"template":"\${matched.input}","lazyload":true,"renderLinkInMobile":true},"baidumap":{"resizeType":1,"patterns":["^http(s)?://(j.)?map(s)?.baidu.com/(.+)$","^http(s)?://ditu.baidu.com/(.+)$"],"template":"\${matched.input}","lazyload":true,"renderLinkInMobile":true},"bilibili":{"resizeType":2,"patterns":["^https://www.bilibili.com/video/av([a-zA-Z0-9]+)$","^https://www.bilibili.com/video/av([a-zA-Z0-9]+)/$","^https://player.bilibili.com/player.html[?]"],"template":"https://player.bilibili.com/player.html","border":true},"bilibili-bv":{"resizeType":2,"patterns":["^https://www.bilibili.com/video/bv([a-zA-Z0-9]+)/?$","^https://www.bilibili.com/video/BV([a-zA-Z0-9]+)/?$","^https://player.bilibili.com/player.html[?]bvid=([a-zA-Z0-9]+)$"],"template":"https://player.bilibili.com/player.html?bvid=\${matched[1]}","border":true},"bilibilip":{"resizeType":2,"patterns":["^https://www.bilibili.com/video/av([a-zA-Z0-9]+)[?](.+)?","^https://player.bilibili.com/player.html[?]"],"template":"https://player.bilibili.com/player.html","border":true},"bilibili_bp":{"resizeType":2,"patterns":["^https://www.bilibili.com/video/bv([a-zA-Z0-9]+)/?[?](.+)?","^https://www.bilibili.com/video/BV([a-zA-Z0-9]+)/?[?](.+)?","^https://player.bilibili.com/player.html[?]bvid=([a-zA-Z0-9]+)&(.+)?"],"template":"https://player.bilibili.com/player.html?bvid=\${matched[1]}&\${matched[2]}","border":true},"tiktok":{"resizeType":2,"patterns":["^http(s)?://vm\\\\.tiktok\\\\.com/(.+)$","^http(s)?://vt\\\\.tiktok\\\\.com/(.+)$","^http(s)?://t\\\\.tiktok\\\\.com/i18n/share/video/(.+)$","^http(s)?://www\\\\.tiktok\\\\.com/embed/(.+)$","^https://www\\\\.tiktok\\\\.com/@.+/video/(.+)$"],"template":"\${matched.input}","defaultWidth":325,"defaultHeight":780,"renderLinkInIOS":true,"maxResizeWidth":325,"maxResizeHeight":780},"tiktok_direct":{"resizeType":1,"patterns":["^https://grafana-i18n${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/d/R5ICbF6nk/horus(.*)$"],"template":"\${matched.input}","defaultWidth":325,"defaultHeight":780,"renderLinkInIOS":true},"xigua":{"resizeType":2,"patterns":["^http(s)?://www.ixigua.com/(.+)","^http(s)?://www.365yg.com/(.+)"],"template":"\${matched.input}","renderLinkInIOS":true,"border":true},"modao":{"resizeType":1,"patterns":["^https://modao.cc/app/([0-9a-zA-Z]+).*","^https://[a-zA-Z0-9]+[.]modao.cc/app/([0-9a-zA-Z]+).*"],"template":"https://modao.cc/app/\${matched[1]}/embed/v2","border":true,"renderLinkInMobile":true},"canva":{"resizeType":1,"patterns":["^https://www.canva.(cn|com)/design/([0-9a-zA-Z_-]{11})/.*"],"template":"https://www.canva.\${matched[1]}/design/\${matched[2]}/view?embed","border":true,"renderLinkInIOS":true},"codepen":{"resizeType":1,"patterns":["^https://codepen.io/([0-9a-zA-Z_-]+)/(pen|embed)/([0-9a-zA-Z]+.*)"],"template":"https://codepen.io/\${matched[1]}/embed/\${matched[3]}","border":true},"jinshuju":{"resizeType":1,"patterns":["^(https://jinshuju.net/f/[0-9a-zA-Z]{6}).*"],"template":"\${matched[1]}?background=white&banner=show&embedded=true&inner_redirect=false","border":true,"renderLinkInIOS":true},"tea_bulletin":{"resizeType":1,"patterns":["^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/tea/app/[0-9]+/dashboard/[0-9]+","^https://tea-va${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/tea/app/[0-9]+/dashboard/[0-9]+"],"template":"\${matched.input}?hideAppHeader&hideDashLeft","border":true,"renderLinkInMobile":true},"tea_bulletin_suffix":{"resizeType":1,"patterns":["^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/tea/app/[0-9]+/dashboard/[0-9]+.+","^https://tea-va${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/tea/app/[0-9]+/dashboard/[0-9]+.+"],"template":"\${matched.input}&hideAppHeader&hideDashLeft","border":true,"renderLinkInMobile":true},"tea_cross_business":{"resizeType":1,"patterns":["^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/tea/dashboard/[0-9]+"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"tea_report":{"resizeType":1,"patterns":["^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/tea/app/[0-9]+/share-link/report[?]dashboardId=.+reportId=.+","^https://tea-va${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/tea/app/[0-9]+/share-link/report[?]dashboardId=.+reportId=.+"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"slardar":{"resizeType":1,"patterns":["^https://slardar([^?#:]+)?${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/(.+)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"aeolus":{"resizeType":1,"patterns":["^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/aeolus/?([?]from=[a-zA-Z_]+)?#(/external)?/dashboard/[0-9]+(/[0-9]+)?[?]","^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/aeolus-open/?([?]from=[a-zA-Z_]+)?#(/external)?/dashboard/[0-9]+(/[0-9]+)?[?]","^https://aeolus-(va|sg|sglark)${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/([?]from=[a-zA-Z_]+)?(aeolus/)?(aeolus)?#(/external)?/dashboard/[0-9]+(/[0-9]+)?[?]"],"template":"\${matched.input}","border":true,"renderLinkInIOS":true},"kunlun":{"resizeType":1,"patterns":["^https://biz.bytedance.(com|net)/embed(.html|_doc)[?]businessName=(.*)","^https://([^/?#:]+)feishuapp.cn/(.*)/ui/apps/(.*)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"modaoCode":{"resizeType":1,"patterns":["^<iframe .*src=.https://modao.cc/app/([0-9a-zA-Z]{40})[^>]+></iframe>$","^<iframe .*src=.https://org.modao.cc/app/([0-9a-zA-Z]+)[^>]+></iframe>$"],"template":"https://modao.cc/app/\${matched[1]}/embed/v2","border":true,"code":true,"renderLinkInMobile":true},"codepenCode":{"resizeType":1,"patterns":["^<iframe .*src=.https://codepen.io/([0-9a-zA-Z]+)/embed/([0-9a-zA-Z]+)[^>]+>[.]*"],"template":"https://codepen.io/\${matched[1]}/embed/\${matched[2]}","border":true,"code":true},"jinshujuCode":{"resizeType":1,"patterns":["^<iframe .*src=.(https://jinshuju.net/f/[0-9a-zA-Z]{6})[^>]+></iframe>$"],"template":"\${matched[1]}?background=white&banner=show&embedded=true&inner_redirect=false","border":true,"code":true,"renderLinkInIOS":true},"youtube":{"resizeType":2,"patterns":["^https://www.youtube.com/watch[?]v=([a-zA-Z0-9-_]+)$","^https://youtu.be/([a-zA-Z0-9-_]+)$","^https://www.youtube.com/watch[?].*v=([a-zA-Z0-9-_]+).*","^https://www.youtube.com/embed/([a-zA-Z0-9-_]+)$"],"template":"https://www.youtube.com/embed/\${matched[1]}","border":true},"survey":{"resizeType":1,"patterns":["^https://kariya-stage${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/m[?].*t=([0-9a-zA-Z-]+).*$","^https://kariya-stage${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/m/cfm[?].*t=([0-9a-zA-Z-]+).*$"],"template":"https://kariya-stage${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/m/cfm?t=\${matched[1]}","border":true,"defaultHeight":500},"feishu_survey":{"resizeType":1,"patterns":["^https://wenjuan.feishu.cn/m[?].*","^https://wenjuan.feishu.cn/m/cfm[?].*"],"template":"\${matched.input}","border":true,"defaultHeight":500,"renderLinkInMobile":true},"lark_survey":{"resizeType":1,"patterns":["^https://survey.larksuite.com/m/[?].*"],"template":"\${matched.input}","border":true,"defaultHeight":500,"renderLinkInMobile":true},"vika":{"resizeType":1,"patterns":["^https://vika.cn/share/.+"],"template":"\${matched.input}","border":true},"libra":{"resizeType":1,"patterns":["^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/libra/flight/[0-9]+/report/external[?].*","^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/libra/(.*)","^https://libra-[sv][ga]${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/libra/(.*)"],"template":"\${matched.input}","border":true},"pugna":{"resizeType":1,"patterns":["^https://(data|pugna-sg|pugna-va)${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/pugna/.*","^https://datareport${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/.*","^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/life/.*","^https://(data|insight-va)${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/life_report/.*"],"template":"\${matched.input}","border":true},"js_design":{"resizeType":1,"patterns":["^https://js.design/.*","^https://js.design/([0-9a-zA-Z_-]{6})[?]p=([0-9a-zA-Z_-]{8})","^https://js.design/v[?]i=([0-9a-zA-Z_-]{6})&p=([0-9a-zA-Z_-]{8})&s=(default|fit|fill|width)&f=([0-9a-zA-Z_-]{32})"],"template":"\${matched.input}&iframe=true","border":true},"wonder":{"resizeType":1,"patterns":["https://wonder${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/dashboard/preview[?]id=([0-9a-zA-Z_-]+)","https://wonder-boe${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/dashboard/preview[?]id=([0-9a-zA-Z_-]+)"],"template":"\${matched.input}&iframe=true","border":true},"growth_design":{"resizeType":1,"patterns":["^https://growth-material${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/material/page[?]url=.*","^https://u${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/docs/.*"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"data_power":{"resizeType":1,"patterns":["^https://datapower${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/.*","^https://datapower.bytedance.com/.*","^https://datapower.jiyunhudong.com/.*","^https://datapower-va${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/.*","^https://datapower-va.bytelemon.com/.*"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"mmm":{"resizeType":1,"patterns":["^https://mmm${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/apps/(bi|bi-va)/(mobile/)?[a-zA-Z0-9]+/view[?]v=.+"],"template":"\${matched.input}","border":true},"powerbi":{"resizeType":1,"patterns":["^https://app.powerbi.cn/reportEmbed[?]reportId=.+","^https://app.powerbi.com/.*"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"sandbox":{"resizeType":1,"patterns":["^https://webide${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/s/.+-(.+)","^https://webide${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/s/(.+)","^https://webide${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/embed/(.+)"],"template":"https://webide${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/embed/\${matched[1]}","border":true},"data_wind":{"resizeType":1,"patterns":["^https://volcengine.yqsl.xyz/bi(.+)","^https://console.volcengine.com/(datafinder|bi[#])/(.+)","^https://datawind.(shalltry|nio(int)?).com/bi(.+)","^https://(dev|upgrade).datarangers-onpremise.volces.com/bi#/(.+)","^https://sparkbi.bg.(huohua|allschool).(cn|com)(.*)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"mock":{"resizeType":1,"patterns":["^https://app.mockplus.cn/(.+)"],"template":"\${matched.input}","border":true},"tableau":{"resizeType":1,"patterns":["^https://mycompany/views/Superstore/Shipping(.+)","^https://prod-apnortheast-a.online.tableau.com/(.+)","^https://public.tableau.com/views/(.+)","^http://pulse.nevext.com/t/PD/views/(.+)","^http://mktbi.anker-in.com/views/(.+)","^https://applet.anker-in.com/tableau/\u{2063}","^https://ddi.anker-in.com/.*"],"template":"\${matched.input}","border":true},"googleDrive":{"resizeType":1,"patterns":["[1]{-1}"],"template":"\${matched.input}","border":true},"gaia":{"resizeType":1,"patterns":["https://[a-zA-Z0-9_-]+.dash${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/(.*)"],"template":"\${matched.input}","border":true},"minverva":{"resizeType":1,"patterns":["https://t.zijieimg.com/(.*)","https://netarch.${function (e) {
          let n = [];
          if (e) {
            n.push("byt");
            n.push("ed.");
            n.push("org");
          }
          return n.join("");
        }(true)}/(.*)"],"template":"\${matched.input}","border":true},"dataleap":{"resizeType":1,"patterns":["https://(data|dataleap-va)${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/fort/(.*)","https://(data|dataleap-va)${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/alert/(.*)"],"template":"\${matched.input}","border":true},"ankeTableau":{"resizeType":1,"defaultWidth":840,"defaultHeight":800,"patterns":["^http(s)?://applet.anker-in.com/tableau/?$"],"template":"\${matched.input}","renderLink":false},"bigfunnel":{"resizeType":1,"defaultWidth":1200,"defaultHeight":660,"patterns":["^https://c360.bytedance.com/c360-h5/block/*","^https://seal-api${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/fe/fallback/check[?]href=https%3A%2F%2Fbigfunnel${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}%2Fblock%2F(.+)","^https://seal-api${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/fe/fallback/check[?]href=https%3A%2F%2Fbigfunnel-pre-release${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}%2Fblock%2F(.+)"],"template":"\${matched.input}","border":true},"wumei_damll":{"resizeType":1,"patterns":["^https://qa-rtsales.wumart.com/(.+)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"bytedance_gtl":{"resizeType":1,"patterns":["^https://gtl.bytedance.com/fragment/(.+)","^https://gtl-boe-n${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/fragment/(.+)"],"template":"\${matched.input}","border":true},"eip_cmitrl":{"resizeType":1,"patterns":["^https://eip.cmitry.com/(.+)","^https://edc.cmitry.com/(.+)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"tezign":{"resizeType":1,"patterns":["^https://[a-zA-Z0-9_-]+.tezign.com/dam_enterprise/preview/(.+)"],"template":"\${matched.input}","border":true},"ratio":{"resizeType":1,"patterns":["^https://ratio.boe${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/(.*)","^https://ratio.bytedance.local/(.*)","^https://ratio${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/(.*)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"insight":{"resizeType":2,"patterns":["^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/insight/api/file/[?](.+)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"prism":{"resizeType":1,"patterns":["^https://data${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/prism/analysis[?](.+)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"coolcollege":{"resizeType":2,"defaultWidth":1366,"defaultHeight":768,"patterns":["^https://pro.coolcollege.cn(.*)","^https://gsdn.coolcollege.cn/assets/external-link/([0-9a-zA-Z]+)/index.html"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"bytedance_solar":{"resizeType":1,"defaultWidth":730,"defaultHeight":820,"patterns":["^https://solar(|-gray|-doc.maat)${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/(.*)"],"template":"\${matched.input}","border":true},"data_idg":{"resizeType":1,"patterns":["^http://data.idgcapital.com/.*"],"template":"\${matched.input}","border":true},"ecarx_group":{"resizeType":1,"patterns":["^https://bi.ecarxgroup.com/(Management|Home|Account)/(.+)*"],"template":"\${matched.input}","border":true},"jcode":{"resizeType":1,"defaultWidth":730,"defaultHeight":430,"patterns":["^https://code.juejin.cn/pen/(.+)"],"template":"\${matched.input}","border":true},"data_pontus":{"resizeType":1,"patterns":["^https://(dataleap-va|data)${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/pontus/overview/(.+)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"reali_box":{"resizeType":2,"patterns":["^https://hub.realibox.com/(share|viewer|public)/(.+)"],"template":"\${matched.input}","border":true},"spread_sound":{"resizeType":2,"patterns":["^https://datawind.shalltry.com/bi#/external/dashboard/(.+)"],"template":"\${matched.input}","border":true},"yuntucad":{"resizeType":2,"patterns":["^https://www.yuntucad.com/model/(.+)"],"template":"\${matched.input}","border":true},"jinweihaowu":{"resizeType":2,"patterns":["^https://op-test.jinweihaowu.com/(.+)","^https://caiwu.hzsjrk.com/(.+)","^https://bi.hzsjrk.com/(.+)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true,"renderLinkInIOS":true},"pcp_xuanjia":{"resizeType":2,"patterns":["^https://pcp(-xuanjia(-[a-zA-Z0-9]{1,})?)?.agilines.(com|cn)/(.*)"],"template":"\${matched.input}","border":true},"byte_dashboard":{"resizeType":1,"patterns":["^https://[a-zA-Z0-9-_]+.(cn|sg|us)?.feishu.cn/share/base/(.+)$"],"defaultHeight":460,"defaultWidth":730,"template":"\${matched.input}?iframeFrom=docx","renderLinkInMobile":true,"border":true},"zetareview":{"resizeType":2,"patterns":["^https://www.zixel.cn/zetareview/index.html#/(.+)","^https://zetareview.zixel.cn/(.+)"],"template":"\${matched.input}","renderLinkInMobile":true,"border":true},"byte_babus":{"resizeType":1,"patterns":["^https://raven${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/raven/(.+)"],"template":"\${matched.input}","renderLinkInMobile":true,"border":true},"byte_rmc":{"resizeType":2,"patterns":["^https://rmc${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/data-center(.*)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true},"yucekj":{"resizeType":2,"patterns":["^https://cube.yucekj.com/embed/index.html[?]id=([a-zA-Z0-9]+)$"],"template":"\${matched.input}","border":true},"byte_guidera":{"resizeType":2,"patterns":["^https://guidera.(bytedance|feishu).(net|cn)/guide/embed/(.*)"],"template":"\${matched.input}","renderLinkInMobile":true,"renderLinkInIOS":true},"approval_pac":{"resizeType":1,"patterns":["^https://www.feishu(-pre)?.cn/approval/admin/(.*)"],"template":"\${matched.input}","border":false,"defaultWidth":730,"defaultHeight":410},"douyin_embed_video":{"resizeType":1,"patterns":["^https://(www|m).douyin.com/(share/)?video/([a-zA-Z0-9]+)$","^https://(www).douyin.com/(.*)?modal_id=([a-zA-Z0-9&=]+)"],"template":"https://open.douyin.com/player/video?vid=\${matched[3]}","border":true,"renderLinkInMobile":true,"defaultWidth":960,"defaultHeight":575},"any_cross":{"resizeType":1,"patterns":["^https://anycross.feishu.cn/(.+)"],"template":"\${matched.input}","border":true,"renderLinkInMobile":true,"defaultWidth":1240,"defaultHeight":520},"weilai_skyeye":{"resizeType":2,"patterns":["https://skyeye.nio.com/dashboard/.*"],"template":"\${matched.input}","border":true},"byte_dcd":{"resizeType":1,"patterns":["^https://dcd${a7r51826g2d0u693s("$EcxS05X%khWbXRa$npWc$dsTTFk$nBZ$W1oamJX%XhZM2M5%FE9PQ")}/data/.*"],"template":"\${matched.input}?hidemenu=1","border":true,"renderLinkInMobile":true}}`,
        docx_clientvar_fetch_slice_config: {
          preFetch: true,
          noWorker: true,
          concurrency: 3
        },
        mobile_bitable_load_config: {
          preloadRecordsCount: 20,
          initialRequestRecordsCount: 20
        },
        ccm_platform_tea_config: {
          user_unit: "eu_nc",
          mg_tea_domain: "https://mcs-bd.feishu.cn",
          service_unit: "eu_nc",
          domain_brand: "feishu",
          user_brand: "feishu",
          mg_app_id: 1229
        },
        bridge_set_data_length_limit: 52428800,
        slideFontZipMD5: "46736de09688fccba7fdafc73e28bb73",
        docx_block_count_limit: {
          table_cell: 2000,
          table_column: 100,
          page: 20000
        },
        mobile_menu_v2: true,
        ccm_dashboard_chart_max_data_config: {
          dashboardChartMaxAxisLength: 3000,
          dashboardChartMaxSeriesCount: 50
        },
        slideFontZipSize: 52602
      },
      appDebugConfig: {
        isDebug: false
      },
      docComponentConfig: {
        extensions: {
          toolbar: {
            blockShare: {}
          }
        }
      },
      lang_cdns: "{{ lang_cdns }}",
      enableEtTest: false,
      isPDF: r.searchParams.get("pdf") === "1"
    };
  };
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  let V = reactCoreLibraryReexport.createContext({
    flowDocXEditorController: null
  });
  let K = V.Provider;
  function z() {
    let {
      flowDocXEditorController: e
    } = reactCoreLibraryReexport.useContext(V);
    return e;
  }
  var flowSettingSyncHooks = require("flow-setting-sync-hooks") /*id: 421458*/;
  var asyncRetryUtils_1 = require("async-retry-utils_1") /*id: 989891*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let Q = function (e, n) {
    let i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let {
      shouldForwardRef: o = true
    } = i;
    let a = o ? reactCoreLibraryReexport.forwardRef(function (r, i) {
      return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
        fallback: n && reactJsxRuntimeCoreReexport.jsx(n, {
          ...r
        }),
        children: reactJsxRuntimeCoreReexport.jsx(e, {
          ref: i,
          ...r
        })
      });
    }) : r => reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Suspense, {
      fallback: n && reactJsxRuntimeCoreReexport.jsx(n, {
        ...r
      }),
      children: reactJsxRuntimeCoreReexport.jsx(e, {
        ...r
      })
    });
    a.displayName = e.displayName ?? (n == null ? undefined : n.displayName);
    return a;
  };
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var reduxCoreApi = require("redux-core-api") /*id: 76673*/;
  var actionReducerUtils = require("action-reducer-utils") /*id: 655928*/;
  var immutableCore = require("immutable-core") /*id: 81885*/;
  (i = {})[i.OnlyInvited = 1] = "OnlyInvited";
  i[i.CompanyReadable = 2] = "CompanyReadable";
  let er = i;
  let ei = immutableCore.Immutable.fromJS({
    src_lang: "zh",
    target_lang: "",
    enable_auto_translate: false,
    shield_auto_translate_langs: [],
    global_display_type: 0,
    languages_display_type: {},
    enable_auto_translate_doc_body: true,
    enable_auto_translate_doc_comment: true,
    is_user_translate_vip: false,
    permission_type: er.CompanyReadable,
    allow_share_outside: true,
    lang_correction_perm: 1,
    enable_auto_capitalize: 1,
    smart_compose_setting: true,
    smart_compose_personalization_setting: false,
    abbreviation_installed: 0,
    abbreviation_setting: 0,
    lingo_brand_name: "",
    lingo_ai_preview_setting: 0,
    view_record_setting: 1,
    view_avatar_setting: 1,
    enable_wiki_multi_card: true
  });
  let eo = actionReducerUtils.createReducerHandler({}, ei);
  (o = {})[o.NONE = 1] = "NONE";
  o[o.ONLY_TRANSLATION = 2] = "ONLY_TRANSLATION";
  o[o.WITH_ORIGINAL = 3] = "WITH_ORIGINAL";
  let ea = o;
  (a = {})[a.ORIGINAL = 0] = "ORIGINAL";
  a[a.TRANSLATION = 1] = "TRANSLATION";
  let eu = a;
  let ec = {
    target_lang: "zh",
    src_lang: "zh",
    display_type: ea.ONLY_TRANSLATION,
    enable_auto_translate: false,
    supported_src_langs: ["en", "zh", "ja"],
    default_target_lang: "zh",
    user_main_lang: "",
    engine_model: "",
    recommended_translate_target_lang: undefined
  };
  let e_ = {
    type: eu.ORIGINAL,
    isOpenHistory: false
  };
  let el = actionReducerUtils.createReducerHandler({}, null);
  let es = actionReducerUtils.createReducerHandler({}, {
    translating: false,
    translated: false,
    error: "",
    translate_start: false,
    translate_exiting: false,
    comment_enable_translate: false,
    had_enter_translate_mode: false
  });
  let eE = actionReducerUtils.createReducerHandler({}, ec);
  let ed = actionReducerUtils.createReducerHandler({}, e_);
  let eT = reduxCoreApi.combineReducers({
    status: es,
    config: eE,
    originClientVars: el,
    view: ed
  });
  var actionTypeConstants = require("action-type-constants") /*id: 199942*/;
  let eS = actionReducerUtils.createReducerHandler({
    [actionTypeConstants.ActionTypes.SET_SHOULD_PRINT]: (e, n) => n.payload
  }, false);
  let ef = actionReducerUtils.createReducerHandler({
    [actionTypeConstants.ActionTypes.suit.SET_SUITE_CLIENTVARS_ERROR]: (e, n) => {
      let {
        token: r,
        error: i
      } = n.payload;
      return e.set(r, i);
    },
    [actionTypeConstants.ActionTypes.suit.DELETE_SUITE_CLIENTVARS_ERROR]: (e, n) => {
      let {
        token: r
      } = n.payload;
      return e.delete(r);
    }
  }, immutableCore.Map({}));
  let eA = actionReducerUtils.createReducerHandler({
    [actionTypeConstants.ActionTypes.network.SET_NETWORK_STATE]: (e, n) => {
      if (n.payload) {
        let {
          data: e
        } = n.payload;
        return e;
      }
      return e;
    }
  }, {
    connected: typeof navigator == "undefined" || navigator.onLine
  });
  var arrayUniqByMatcher = require("array-uniq-by-matcher") /*id: 898750*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  var arrayFindIndexMatcher = require("array-find-index-matcher") /*id: 489247*/;
  var genericFilterUtil = require("generic-filter-util") /*id: 159692*/;
  var userCollabUtils = require("user-collab-utils") /*id: 132196*/;
  var suiteMemberManagement = require("suite-member-management") /*id: 741110*/;
  let eC = actionReducerUtils.createReducerHandler({
    [actionTypeConstants.ActionTypes.member.ADD_SUITE_MEMBERS]: (e, n) => {
      let {
        type: r,
        token: i,
        members: o
      } = n.payload;
      let a = {
        ...e
      };
      let u = e[suiteMemberManagement.formatMemberKey(r, i)] || [];
      let c = o.map(e => userCollabUtils.normalizeUserId(e));
      let _ = arrayUniqByMatcher.uniqByMatcher(u.concat(c), "member_id");
      suiteMemberManagement.addMembers(a, {
        type: r,
        token: i,
        members: throttledOrderByUtil.throttledOrderBy(_, "create_time")
      });
      return a;
    },
    [actionTypeConstants.ActionTypes.member.UPDATE_SUITE_MEMBER]: (e, n) => {
      let {
        type: r,
        token: i,
        memberInfo: o
      } = n.payload;
      let {
        member_id: a,
        ...u
      } = o;
      let c = e[suiteMemberManagement.formatMemberKey(r, i)] || [];
      let _ = arrayFindIndexMatcher.findMatchingIndex(c, e => {
        let {
          member_id: n
        } = e;
        return n === a;
      });
      let l = {
        ...e
      };
      if (_ !== -1) {
        c[_] = {
          ...c[_],
          ...u
        };
        return l;
      }
      let s = userCollabUtils.normalizeUserId(o);
      let E = [].concat(c);
      E.push(s);
      suiteMemberManagement.addMembers(l, {
        type: r,
        token: i,
        members: throttledOrderByUtil.throttledOrderBy(E, "create_time")
      });
      return l;
    },
    [actionTypeConstants.ActionTypes.member.UPDATE_SUITE_MEMBERS]: (e, n) => {
      let {
        type: r,
        token: i,
        memberInfoList: o
      } = n.payload;
      let a = e[suiteMemberManagement.formatMemberKey(r, i)] || [];
      let u = a.reduce((e, n, r) => e.set(n.member_id, r), new Map());
      let c = {
        ...e
      };
      let _ = [...a];
      o.forEach(e => {
        let {
          member_id: n,
          ...r
        } = e;
        if (u.has(n)) {
          let e = u.get(n);
          _[e] = {
            ...a[e],
            ...r
          };
        } else {
          let n = userCollabUtils.normalizeUserId(e);
          _.push(n);
        }
      });
      suiteMemberManagement.addMembers(c, {
        type: r,
        token: i,
        members: throttledOrderByUtil.throttledOrderBy(_, "create_time")
      });
      return c;
    },
    [actionTypeConstants.ActionTypes.member.REMOVE_SUITE_MEMBERS]: (e, n) => {
      let {
        type: r,
        token: i,
        memberIds: o
      } = n.payload;
      let a = [].concat(e[suiteMemberManagement.formatMemberKey(r, i)] || []);
      o.forEach(e => {
        a = genericFilterUtil.genericFilter(a, n => n.member_id !== e);
      });
      let u = {
        ...e
      };
      suiteMemberManagement.addMembers(u, {
        type: r,
        token: i,
        members: a
      });
      return u;
    },
    [actionTypeConstants.ActionTypes.member.RESET_SUITE_MEMBERS]: (e, n) => {
      let {
        type: r,
        token: i,
        members: o,
        count: a
      } = n.payload;
      let u = {
        ...e
      };
      if (!o || !a) {
        suiteMemberManagement.removeMembers(u, {
          type: r,
          token: i
        });
        return u;
      }
      {
        let e = o.map(e => userCollabUtils.normalizeUserId(e));
        let n = arrayUniqByMatcher.uniqByMatcher(e, "member_id");
        suiteMemberManagement.addMembers(u, {
          type: r,
          token: i,
          members: throttledOrderByUtil.throttledOrderBy(n, "create_time")
        });
        return u;
      }
    }
  }, {});
  let eD = actionReducerUtils.createReducerHandler({
    [actionTypeConstants.ActionTypes.member.SET_CURRENT_MEMBER_ID]: (e, n) => String(n.payload)
  }, null);
  let eL = actionReducerUtils.createReducerHandler({
    [actionReducerUtils.createActionType(actionTypeConstants.ActionTypes.member.ADD_SUITE_MEMBERS, actionTypeConstants.ActionTypes.member.REMOVE_SUITE_MEMBERS, actionTypeConstants.ActionTypes.member.UPDATE_SUITE_MEMBERS, actionTypeConstants.ActionTypes.member.RESET_SUITE_MEMBERS)]: (e, n) => {
      let {
        token: r,
        count: i = 0
      } = n.payload;
      return {
        ...e,
        [r]: Math.max(i - 1, 0)
      };
    }
  }, {});
  var objectDefaultsUtil = require("object-defaults-util") /*id: 679337*/;
  let eg = actionReducerUtils.createReducerHandler({
    [actionTypeConstants.ActionTypes.flowSetting.UPDATE_FLOW_SETTING]: (e, n) => {
      let {
        payload: r
      } = n;
      return objectDefaultsUtil.defaults(r, e);
    }
  }, {
    readonly: false,
    commentReadonly: false,
    enableComment: true,
    historyReadonly: false,
    enableDocInline: false
  });
  var isBooleanUtil = require("is-boolean-util") /*id: 507922*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var permissionRoleTypes = require("permission-role-types") /*id: 992343*/;
  let ey = actionReducerUtils.createReducerHandler({
    [actionTypeConstants.ActionTypes.flowPermission.SET_FLOW_INIT]: (e, n) => isBooleanUtil.isBoolean(n.payload) ? {
      ...e,
      hasInit: n.payload
    } : e,
    [actionTypeConstants.ActionTypes.flowPermission.UPDATE_FLOW_ROLE]: (e, n) => isNullishCheck.isNil(n.payload) ? e : {
      ...e,
      ...n.payload
    },
    [actionTypeConstants.ActionTypes.flowPermission.UPDATE_FLOW_ACTION]: (e, n) => isNullishCheck.isNil(n.payload) ? e : {
      ...e,
      ...n.payload
    }
  }, {
    hasInit: false,
    role: permissionRoleTypes.UserRoles.None,
    actionList: []
  });
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  let eU = immutableCore.Record({
    selectedMatchIndex: 0,
    total: 0,
    canReplaceSelected: false,
    canReplaceAll: false
  });
  let ek = new (immutableCore.Record({
    isOpen: false,
    showOnlyFindRow: true,
    findText: "",
    replaceText: "",
    isFinding: false,
    isReplacingAll: false,
    result: new eU(),
    style: immutableCore.Map({})
  }))();
  let eB = actionReducerUtils.createReducerHandler({
    [actionTypeConstants.ActionTypes.findReplace.OPEN_FIND_REPLACE_BOX]: (e, n) => e.merge({
      isOpen: true,
      style: immutableCore.Map(n.payload.style || {}),
      ...throttledPathFilterStringify.throttledPathStr(n.payload, "findText", "showOnlyFindRow")
    }),
    [actionTypeConstants.ActionTypes.findReplace.CLOSE_FIND_REPLACE_BOX]: e => {
      let {
        result: n
      } = e;
      let {
        selectedMatchIndex: r
      } = n;
      return e.merge({
        isOpen: false,
        showOnlyFindRow: true,
        isFinding: false,
        result: n.clear().merge({
          selectedMatchIndex: r
        })
      });
    },
    [actionTypeConstants.ActionTypes.findReplace.START_FINDING]: (e, n) => {
      let {
        findText: r
      } = n.payload;
      return e.merge({
        isFinding: true,
        findText: r
      });
    },
    [actionTypeConstants.ActionTypes.findReplace.UPDATE_FIND_REPLACE_RESULT]: (e, n) => e.merge({
      isFinding: false,
      result: e.result.merge(n.payload)
    }),
    [actionTypeConstants.ActionTypes.findReplace.SET_REPLACE_TEXT]: (e, n) => e.merge({
      replaceText: n.payload
    }),
    [actionTypeConstants.ActionTypes.findReplace.SET_IS_REPLACING_ALL]: (e, n) => e.merge({
      isReplacingAll: n.payload
    }),
    [actionTypeConstants.ActionTypes.findReplace.FIND_REPLACE_SHOW_MORE]: e => e.merge({
      showOnlyFindRow: false
    })
  }, ek);
  let eH = {
    domain: "",
    avatar_url: "",
    avatar_key: "",
    cn_name: "",
    email: "",
    en_name: "",
    id: "",
    mobile: "",
    name: "",
    suid: "",
    tenant_id: "",
    tenant_name: "",
    user_type: "1",
    tenant_tag: "0",
    department_id: "",
    department_name: "",
    can_cross: false,
    isOverseaSpace: false,
    is_manager: false,
    is_anonymous: false,
    is_able_add_members: false,
    is_super_admin: false,
    isDesensitize: false,
    i18n_name: {
      en_us: "",
      ja_jp: "",
      zh_cn: ""
    },
    i18n_value: {
      en_us: "",
      ja_jp: "",
      zh_cn: ""
    },
    display_name: {
      value: "",
      i18n_value: {
        en_us: "",
        ja_jp: "",
        zh_cn: ""
      }
    },
    leader_id: 0
  };
  class eF extends immutableCore.Record(eH) {
    get(e) {
      return super.get(e);
    }
    constructor(e) {
      if (e) {
        super(e);
      } else {
        super();
      }
    }
  }
  let eG = actionReducerUtils.createReducerHandler({
    DELETE_CURRENT_USER: () => immutableCore.Immutable.fromJS({}),
    SET_USER_INFO: (e, n) => {
      let r = new eF(n.user);
      return e.merge(r);
    }
  }, immutableCore.Immutable.fromJS({}));
  let eW = reduxCoreApi.combineReducers({
    userSettings: eo,
    currentUser: eG,
    translate: eT,
    error: function (e = immutableCore.Immutable.Map({})) {
      return e;
    },
    findReplace: eB,
    currentMemberId: eD,
    members: eC,
    membersCount: eL,
    networkState: eA,
    shouldPrint: eS,
    flowPermission: ey,
    flowSetting: eg,
    suiteClientVarsErrorMap: ef
  });
  let e$ = actionReducerUtils.createReducerHandler({}, {});
  let ex = actionReducerUtils.createReducerHandler({}, immutableCore.Immutable.Map({}));
  let eZ = actionReducerUtils.createReducerHandler({}, immutableCore.Immutable.Map({}));
  let eX = actionReducerUtils.createReducerHandler({}, immutableCore.Immutable.fromJS({}));
  let eV = actionReducerUtils.createReducerHandler({}, true);
  let eK = actionReducerUtils.createReducerHandler({}, false);
  let ez = actionReducerUtils.createReducerHandler({}, "");
  let ej = actionReducerUtils.createReducerHandler({}, null);
  let eY = actionReducerUtils.createReducerHandler({}, immutableCore.Immutable.Map({}));
  let eJ = actionReducerUtils.createReducerHandler({}, immutableCore.Immutable.Map({}));
  let eQ = actionReducerUtils.createReducerHandler({}, immutableCore.Immutable.Map({}));
  let eq = actionReducerUtils.createReducerHandler({}, []);
  let e0 = actionReducerUtils.createReducerHandler({}, immutableCore.Immutable.Map({}));
  let e1 = actionReducerUtils.createReducerHandler({}, {});
  let e2 = actionReducerUtils.createReducerHandler({}, {});
  let e5 = actionReducerUtils.createReducerHandler({}, {});
  let e9 = actionReducerUtils.createReducerHandler({}, {
    config: {}
  });
  let e3 = reduxCoreApi.combineReducers({
    folderPermissions: eZ,
    singleContainerFolderPermissions: eX,
    permissions: ex,
    isInEditMode: eV,
    isDocLockedByPlugin: eK,
    users: e$,
    nodes: e1,
    objs: e2,
    shortcuts: e5,
    openFrom: ez,
    subscription: ej,
    bitableProPermissions: eY,
    actionManager: eJ,
    workbench: e0,
    attachments: eQ,
    benefit: e9,
    visibleSecureLabelList: eq
  });
  (u = {}).anonymous_edit_guide = "anonymous_edit_guide";
  let e6 = u;
  (c = {}).DOC = "doc";
  c.SP_DOC = "sp_doc";
  let e7 = c;
  let e8 = Object.keys(e6).reduce((e, n) => {
    e[e6[n]] = true;
    return e;
  }, {});
  let e4 = immutableCore.Map({
    profile: immutableCore.Map({
      create_guide_user: {
        create_file_num: "create_file_num",
        view_others_file_num: "view_others_file_num"
      },
      user: {
        docs_acc_create_doc_count: "docs_acc_create_doc_count",
        docs_acc_editor_redo_count: "docs_acc_editor_redo_count",
        docs_acc_editor_undo_count: "docs_acc_editor_undo_count",
        docs_acc_enter_home_count: "docs_acc_enter_home_count",
        docs_acc_open_share_count: "docs_acc_open_share_count",
        docs_first_create_file_time: "docs_first_create_file_time",
        docs_acc_comment_count: "docs_acc_comment_count",
        docs_acc_enter_lab_index_count: "docs_acc_enter_lab_index_count",
        docs_acc_play_mode_enter_count: "docs_acc_play_mode_enter_count",
        docs_acct_share_page_enter_count: "docs_acct_share_page_enter_count",
        sheet_pc_is_open: "sheet_pc_is_open",
        sheet_pc_is_create: "sheet_pc_is_create",
        dropdown_menu_is_confirm: "dropdown_menu_is_confirm"
      },
      mindnote: {
        has_create_mindnote: "has_create_mindnote"
      },
      reminder: {
        has_used_reminder: "has_used_reminder"
      }
    }).map(e => immutableCore.Map(e).map(() => -1)),
    guides: immutableCore.Map(e8).map(() => immutableCore.Map({
      is_done: true,
      context: ""
    })),
    firstlogin: immutableCore.Map(e7).map(() => 0),
    first_time_fetched: false
  });
  let te = actionReducerUtils.createReducerHandler({}, e4);
  var reducerFactoryUtil = require("reducer-factory-util") /*id: 978342*/;
  var storeActionConstants = require("store-action-constants") /*id: 119654*/;
  var tr = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.ToggleEditing]: (e, n) => {
      let {
        payload: r
      } = n;
      return {
        ...e,
        editing: r
      };
    },
    [storeActionConstants.actionTypes.ToggleEditingAndRevising]: (e, n) => {
      let {
        payload: r
      } = n;
      return {
        ...e,
        ...r
      };
    }
  }, {
    editing: false,
    revising: false
  });
  let ti = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.SwitchViewEditorsStatus]: (e, n) => ({
      ...e,
      isOpen: n.payload.isOpen
    })
  }, {
    isOpen: platformDocUtils.l8K.getPreferenceStatus() || false
  });
  let to = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.showSubscription]: e => ({
      ...e,
      isShow: true
    }),
    [storeActionConstants.actionTypes.hideSubscription]: e => ({
      ...e,
      isShow: false
    })
  }, {
    isShow: false
  });
  let ta = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.TOGGLE_SIDEBAR]: (e, n) => {
      let {
        payload: r
      } = n;
      return {
        ...e,
        ...r
      };
    }
  }, {
    opened: undefined
  });
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  let tc = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.UpdatePresentationModeType]: (e, n) => ({
      ...e,
      type: n.payload
    }),
    [storeActionConstants.actionTypes.UpdatePresentationModeStatus]: (e, n) => ({
      ...e,
      status: n.payload
    })
  }, {
    type: viewStateTypeConstants.viewTypes.NONE,
    status: viewStateTypeConstants.viewStates.DONE
  });
  let t_ = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.UpdateEmbedObjPermission]: (e, n) => {
      let {
        pageToken: r,
        embedObjectPermissions: i = []
      } = n.payload;
      let o = e.getIn([r]) || immutableCore.OrderedMap({});
      let a = Object.values(i).reduce((e, n) => {
        let {
          token: r
        } = n;
        e[r] = {
          ...n
        };
        return e;
      }, {});
      a = o.merge(a);
      return e.mergeIn([r], a);
    },
    [storeActionConstants.actionTypes.UPDATE_MEEGO_INLINE_PERMISSION]: (e, n) => {
      let r = n.payload;
      let i = e.getIn(["MEEGO"]) || immutableCore.OrderedMap({});
      let o = Object.values(r).reduce((e, n) => {
        let {
          path: r,
          readable: i
        } = n;
        e[r] = i;
        return e;
      }, {});
      o = i.merge(o);
      return e.mergeIn(["MEEGO"], o);
    }
  }, immutableCore.Map({}));
  let tl = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.UPDATE_PAYWALL_PERMISSION]: (e, n) => {
      let r = n.payload;
      return {
        ...e,
        paywallPermission: r
      };
    },
    [storeActionConstants.actionTypes.UPDATE_PAID_STATUS]: (e, n) => {
      let r = n.payload;
      return {
        ...e,
        needPaid: r
      };
    },
    [storeActionConstants.actionTypes.UPDATE_PAID_DEFAULT_BLOCK]: (e, n) => {
      let r = n.payload;
      return {
        ...e,
        defaultBlockNum: r
      };
    }
  }, {
    paywallSwitch: false,
    payActions: {
      view: 0
    },
    needPaid: false,
    defaultBlockNum: 239
  });
  let ts = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.showHistory]: (e, n) => {
      let {
        isLocal: r
      } = n.payload;
      return {
        ...e,
        isLocal: r,
        isShow: true
      };
    },
    [storeActionConstants.actionTypes.hideHistory]: e => ({
      ...e,
      isShow: false,
      isLocal: false
    }),
    [storeActionConstants.actionTypes.UPDATE_HAS_WATCHDOG_STATE]: (e, n) => {
      let {
        hasWatchdog: r
      } = n.payload;
      return {
        ...e,
        hasWatchdog: r
      };
    },
    [storeActionConstants.actionTypes.UPDATE_HAS_OFFLINE_HISTORY]: (e, n) => {
      let {
        hasOfflineHistory: r
      } = n.payload;
      return {
        ...e,
        hasOfflineHistory: r
      };
    }
  }, {
    isShow: false,
    isLocal: false,
    hasWatchdog: false,
    hasOfflineHistory: false
  });
  let tE = {
    foldStatus: new Map()
  };
  let td = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.UpdateFileUri]: (e, n) => ({
      ...n.payload,
      ...e
    })
  }, {});
  var docxEditorLayoutUtils = require("docx-editor-layout-utils") /*id: 585439*/;
  var docsModeStateStore = require("docs-mode-state-store") /*id: 566129*/;
  let tS = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.UPDATE_DOC_META_MAP]: (e, n) => {
      let {
        token: r,
        meta: i
      } = n.payload;
      return {
        ...e,
        docMetaMap: {
          ...e.docMetaMap,
          [r]: i
        }
      };
    },
    [storeActionConstants.actionTypes.UPDATE_CLIENT_VAR_ERROR_CODE]: (e, n) => {
      let r = n.payload;
      return {
        ...e,
        clientVarErrorCode: r
      };
    },
    [storeActionConstants.actionTypes.UPDATE_DOC_TITLE]: (e, n) => {
      let r = n.payload;
      return {
        ...e,
        docTitle: r
      };
    },
    [storeActionConstants.actionTypes.UPDATE_DOC_EDIT_TIME]: (e, n) => {
      let r = docTokenManager.getDocToken();
      let i = e.docMetaMap[r];
      let o = n.payload;
      return {
        ...e,
        docMetaMap: {
          ...e.docMetaMap,
          [r]: {
            ...i,
            edit_time: o
          }
        }
      };
    }
  }, {
    docMetaMap: {}
  });
  let tf = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.SetCoverInfo]: (e, n) => ({
      ...e,
      coverInfo: n.payload
    }),
    [storeActionConstants.actionTypes.UploadCoverStart]: e => ({
      ...e,
      isUploading: true
    }),
    [storeActionConstants.actionTypes.UploadCoverSuccess]: e => ({
      ...e,
      isUploading: false
    }),
    [storeActionConstants.actionTypes.UploadCoverFail]: e => ({
      ...e,
      isUploading: false
    }),
    [storeActionConstants.actionTypes.UploadCoverCancel]: e => ({
      ...e,
      isUploading: false
    }),
    [storeActionConstants.actionTypes.SetCoverList]: (e, n) => ({
      ...e,
      coverList: n.payload
    }),
    [storeActionConstants.actionTypes.SetCoverSuperStatus]: (e, n) => ({
      ...e,
      coverSuperStatus: n.payload
    }),
    [storeActionConstants.actionTypes.SetAIImageRequestState]: (e, n) => ({
      ...e,
      aiImageRequestState: n.payload
    }),
    [storeActionConstants.actionTypes.SetStopFetchCoverTaskId]: (e, n) => ({
      ...e,
      stopTaskId: n.payload
    }),
    [storeActionConstants.actionTypes.SET_DLP_STATUS]: (e, n) => ({
      ...e,
      dlpStatus: n.payload
    })
  }, {
    isUploading: false,
    coverInfo: null,
    coverList: [],
    aiImageRequestState: false,
    coverSuperStatus: false,
    stopTaskId: "",
    dlpStatus: null
  });
  let tA = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.ChangeCopilotInitiated]: (e, n) => {
      let {
        isInitiated: r
      } = n.payload;
      return {
        ...e,
        isInitiated: r
      };
    }
  }, {
    isInitiated: false
  });
  let tm = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.ChangeCopilotChatBoxShow]: (e, n) => {
      let {
        isShowCopilotChatBox: r
      } = n.payload;
      return {
        ...e,
        isShowCopilotChatBox: r
      };
    }
  }, {
    isShowCopilotChatBox: false
  });
  var boolDefaultGetterUtil = require("bool-default-getter-util") /*id: 855627*/;
  var sidebarUiIdentifiers = require("sidebar-ui-identifiers") /*id: 888542*/;
  let tR = function () {
    if (typeof window == "undefined") {
      return false;
    }
    let e = platformDocUtils.o0s.parseQuery(window.location.search);
    let {
      hash: n
    } = window.location;
    return !!e[sidebarUiIdentifiers.claritySidebarId] && !n && !["comment_id", "comment_type", "comment_anchor", "preview_comment_id", "reply_id", "edition_id"].some(n => n in e);
  }() && boolDefaultGetterUtil.getDefaultBool("ccm.doc.web.identify_difficult_understand_word_entrance_new_ui", false) && boolDefaultGetterUtil.getDefaultBool("ccm.docx.difficult_understand_word_default_open_siderbar_enable", false);
  var docCommentVisibilityFlags = require("doc-comment-visibility-flags") /*id: 956515*/;
  (_ = {}).ASIDE = "aside";
  _.FLOAT = "float";
  let tN = _;
  var docxLayoutConstants = require("docx-layout-constants") /*id: 907285*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  platformDocUtils.YFM();
  let tL = false;
  tL = browserEnvironmentDetectionUtils.browserDetector.isFeed ? !!docxLayoutConstants.isCommentPanelShownDefault() || (platformDocUtils.Q67(), false) : typeof window != "undefined" && (p = (T = window.SERVER_DATA) === null || T === undefined ? undefined : T.ccmCommonSetting?.has_unfinished_comment) !== null && p !== undefined && p && (docCommentVisibilityFlags.isCommentExpandOff() ? tL : docCommentVisibilityFlags.isDocCommentShown());
  let tb = (typeof window == "undefined" || ((E = window.SERVER_DATA) === null || E === undefined ? undefined : E.ccmCommonSetting?.reading_mode) !== "READING") && {
    getDefaultOpenSidebar: () => tR,
    setDefaultOpenSidebar: e => {
      tR = e;
    },
    clearQuery: function () {
      platformDocUtils.o0s.cleanParamFromSearch(location.href, sidebarUiIdentifiers.claritySidebarId);
    }
  }.getDefaultOpenSidebar();
  if (tb) {
    tL = false;
  }
  let tg = {
    commentPanelShown: tL,
    isCommentNumbersShow: true,
    isIpadCommentPanelShow: false,
    commentDisplayMode: tN.FLOAT,
    helpPanelShown: false,
    suggestionSidebarShown: tb,
    panelStack: tb ? [storeActionConstants.panelTypes.SuggestionSidebar] : tL ? [storeActionConstants.panelTypes.Comment] : []
  };
  let tP = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.ToggleCommentPanelShown]: (e, n) => tM(e, n.payload, storeActionConstants.panelTypes.Comment),
    [storeActionConstants.actionTypes.ToggleShowCommentNumbers]: (e, n) => ({
      ...e,
      isCommentNumbersShow: n.payload
    }),
    [storeActionConstants.actionTypes.ToggleShowIpadCommentPanel]: (e, n) => ({
      ...e,
      isIpadCommentPanelShow: n.payload
    }),
    [storeActionConstants.actionTypes.SetCommentDisplayMode]: (e, n) => ({
      ...e,
      commentDisplayMode: n.payload
    }),
    [storeActionConstants.actionTypes.ToggleHelpPanelShown]: (e, n) => tM(e, n.payload, storeActionConstants.panelTypes.HelpSiderBar),
    [storeActionConstants.actionTypes.ToggleSuggestionSidebarShown]: (e, n) => tM(e, n.payload, storeActionConstants.panelTypes.SuggestionSidebar)
  }, tg);
  function tM(e, n, r) {
    let i = [...e.panelStack];
    let o = i[i.length - 1] || null;
    if (n) {
      (i = i.filter(e => e !== r)).push(r);
      if (i.length > Object.keys(storeActionConstants.panelTypes).length) {
        i.shift();
      }
    } else if (o && o === r) {
      i.pop();
    }
    let a = !!(o = i[i.length - 1] || null) && o === storeActionConstants.panelTypes.HelpSiderBar;
    let u = !!o && o === storeActionConstants.panelTypes.Comment;
    let c = !!o && o === storeActionConstants.panelTypes.SuggestionSidebar;
    return {
      ...e,
      panelStack: i,
      commentPanelShown: u,
      helpPanelShown: a,
      suggestionSidebarShown: c
    };
  }
  function tv() {
    return {
      referenceCount: -1,
      backReferenceCount: -1,
      shouldKeepListShowing: false,
      selectedTab: null,
      visibleBySetting: null,
      refLinkList: [],
      enterpriseList: []
    };
  }
  let ty = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.SelectBidirectionalLinkListTab]: (e, n) => {
      let r = n.payload;
      if (e.selectedTab === r) {
        return e;
      } else {
        return {
          ...e,
          selectedTab: r
        };
      }
    },
    [storeActionConstants.actionTypes.UpdateBidirectionalLinkListCount]: (e, n) => ({
      ...e,
      ...n.payload
    }),
    [storeActionConstants.actionTypes.KeepBidirectionalLinkListShowing]: e => e.shouldKeepListShowing ? e : {
      ...e,
      shouldKeepListShowing: true
    },
    [storeActionConstants.actionTypes.ResetBidirectionalLinkList]: () => tv(),
    [storeActionConstants.actionTypes.UpdateBidirectionalLinkListVisibilitySetting]: (e, n) => ({
      ...e,
      visibleBySetting: n.payload
    }),
    [storeActionConstants.actionTypes.UpdateBidirectionalRefLinkList]: (e, n) => ({
      ...e,
      refLinkList: n.payload,
      referenceCount: n.payload.length
    }),
    [storeActionConstants.actionTypes.UpdateEnterpriseList]: (e, n) => ({
      ...e,
      enterpriseList: n.payload
    })
  }, tv());
  let tw = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.setSafeRightMargin]: (e, n) => ({
      ...e,
      safeRightMargin: n.payload
    })
  }, {
    safeRightMargin: 0,
    smartComposeEnabled: false
  });
  let tU = {
    pageToken: require("doc-token-helper-utils") /*id: 740758*/.resolveDocToken(),
    spaceInfo: {
      token: "",
      name: ""
    },
    spaceList: [],
    sidebarInfo: {},
    isFirstLineEmpty: false,
    ...tE
  };
  let tk = reducerFactoryUtil.createReducer({
    [storeActionConstants.actionTypes.SetSpaceInfo]: (e, n) => ({
      ...e,
      spaceList: tB(e.spaceList, n.payload),
      spaceInfo: n.payload
    }),
    [storeActionConstants.actionTypes.SetSpaceList]: (e, n) => ({
      ...e,
      spaceList: tB(n.payload, e.spaceInfo)
    }),
    [storeActionConstants.actionTypes.ClearAfterLogout]: e => ({
      ...e,
      userInfo: null,
      spaceInfo: null,
      spaceList: []
    }),
    [storeActionConstants.actionTypes.SetPageToken]: (e, n) => ({
      ...e,
      pageToken: n.payload
    }),
    [storeActionConstants.actionTypes.SetSidebar]: (e, n) => {
      let {
        token: r,
        type: i,
        content: o,
        options: a
      } = n.payload;
      return {
        ...e,
        sidebarInfo: {
          ...e.sidebarInfo,
          [r]: {
            token: r,
            type: i,
            content: o,
            options: a
          }
        }
      };
    },
    [storeActionConstants.actionTypes.ClearSidebar]: (e, n) => {
      let r = n.payload;
      let i = Object.values(e.sidebarInfo).filter(e => e.token !== r);
      return {
        ...e,
        sidebarInfo: i.reduce((e, n) => ({
          ...e,
          [n.token]: n
        }), {})
      };
    },
    [storeActionConstants.actionTypes.SetIsFirstLineEmpty]: (e, n) => {
      let r = n.payload;
      return {
        ...e,
        isFirstLineEmpty: r
      };
    }
  }, tU);
  function tB(e, n) {
    if (!n) {
      return e;
    }
    let r = false;
    let i = e.map(e => e.token === n.token ? (r = true, n) : e);
    if (!r) {
      i.push(n);
    }
    return i.filter(e => !!e.token);
  }
  var tH = reduxCoreApi.combineReducers({
    root: tk,
    editable: tr,
    comment: tP,
    cover: tf,
    history: ts,
    permissions: t_,
    subscription: to,
    viewEditors: ti,
    bidirectionalLinkList: ty,
    docsMode: docsModeStateStore.docsModeReducer,
    presentationMode: tc,
    appSettings: tw,
    documentConfig: docxEditorLayoutUtils.isCompactMode,
    sidebar: ta,
    copilotChatBoxShow: tm,
    copilotInitiated: tA,
    paywallPermission: tl,
    docMeta: tS,
    fileUri: td
  });
  let tF = "docx";
  var tG = {
    id: tF,
    reducerMap: {
      [tF]: tH,
      appState: eW,
      entities: e3,
      gpe_common_user_guide: te
    },
    initialActions: [],
    finalActions: []
  };
  var copilotShareModes = require("copilot-share-modes") /*id: 493662*/;
  let t$ = Q(reactCoreLibraryReexport.lazy(() => asyncRetryUtils_1.retryWithFallback({
    fn: async () => {
      await x(tG);
      return await require.e("flow-doc_doc-suite") /*id: 68280*/.then(require.bind(require, "suite-permission-error-handler") /*id: 306572*/);
    }
  })));
  let tx = Q(reactCoreLibraryReexport.lazy(() => asyncRetryUtils_1.retryWithFallback({
    fn: async () => {
      let {
        DocLauncher: e
      } = await Promise.all([require.e("lib-react") /*id: 43361*/, require.e("html-entity-decoder") /*id: 87517*/, require.e("module-federation-runtime") /*id: 19584*/, require.e("text-processing-utils") /*id: 45425*/, require.e("editor-core-selection") /*id: 13032*/, require.e("editor-kit-state-manager") /*id: 79909*/, require.e("ui-core-utilities") /*id: 85276*/, require.e("moment-locales-bundle") /*id: 85547*/, require.e("network-io-client") /*id: 45310*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("form-validation-utils") /*id: 80045*/, require.e("app-constants-and-enums") /*id: 86326*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("renderer-slate-core") /*id: 18653*/, require.e("core-editor-utilities") /*id: 47773*/, require.e("vendor-utilities-bundle") /*id: 40789*/, require.e("vendor-react-core") /*id: 75828*/, require.e("semi-ui-additional-components") /*id: 96229*/, require.e("chat-session-lifecycle") /*id: 55100*/, require.e("konva-external-dependencies") /*id: 30286*/, require.e("flow-auth-space-sdk") /*id: 57467*/, require.e("markdown-autofix-modifiers") /*id: 52853*/, require.e("folder-file-icons") /*id: 41522*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("chat-writing-assistant-ui") /*id: 58923*/, require.e("docx-block-management") /*id: 83252*/, require.e("ai-doc-canvas-messaging") /*id: 59341*/, require.e("chat-input-ui") /*id: 759*/, require.e("docs-editor-utils") /*id: 74354*/, require.e("docx-editor-clipboard") /*id: 7245*/, require.e("docx-editor-core") /*id: 8716*/, require.e("docx-editor-error-handling") /*id: 74277*/, require.e("docx-ssr-collab-manager") /*id: 9960*/, require.e("docx-editor-react-component") /*id: 21824*/, require.e("webpack-modules-ui-components") /*id: 32240*/, require.e("flow-comment-system") /*id: 49875*/, require.e("flow-doc_doc-launcher") /*id: 3577*/]).then(require.bind(require, "docx-launcher-module") /*id: 687842*/);
      return {
        default: e
      };
    }
  })));
  let tZ = reactCoreLibraryReexport.memo(function (e) {
    let {
      docId: n,
      onEditorMounted: r,
      readonly: i,
      enableComment: o = true,
      commentReadonly: a = false,
      enableVirtualRender: u,
      syncTabTitle: c,
      BlockWrapper: _,
      enableDocInline: l = false
    } = e;
    flowSettingSyncHooks.syncDocToken(n);
    flowSettingSyncHooks.useSyncReadonly(!!i);
    flowSettingSyncHooks.useEnableComment(!!o);
    flowSettingSyncHooks.useCommentReadonly(!!a);
    flowSettingSyncHooks.useEnableDocInline(!!l);
    let s = z();
    let E = fileNodeSelectorUtils.getNodeSelector(reduxStoreInitializer.reduxStore.getState());
    reactCoreLibraryReexport.useEffect(() => {
      docxEventCollector.wrappedCollector("flow_doc_editor_view", {});
    }, []);
    let d = reactCoreLibraryReexport.useCallback(e => {
      if (s != null) {
        s.init({
          blockManager: e.blockManager
        });
      }
      if (r != null) {
        r(e);
      }
      diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol).persist.info({
        eventName: "flow_doc_editor_mounted"
      });
    }, [s]);
    return reactJsxRuntimeCoreReexport.jsx(reactReduxCore.Provider, {
      store: reduxStoreInitializer.reduxStore,
      children: reactJsxRuntimeCoreReexport.jsx(t$, {
        currentSuiteToken: E,
        flowSuiteType: copilotShareModes.CopilotShareModes.Default,
        reportParams: {
          scene: "docx_editor"
        },
        children: e => reactJsxRuntimeCoreReexport.jsx(tx, {
          store: reduxStoreInitializer.reduxStore,
          token: n,
          workspaceProps: {},
          history: {},
          location: {},
          match: {},
          onEditorMounted: d,
          events: s == null ? undefined : s.eventEmitter,
          enableVirtualRender: u,
          syncTabTitle: c,
          BlockWrapper: _,
          ...e
        })
      })
    });
  }, isEqualUtil_1.isEqual);
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var tV = classnamesUtils;
  var syncDocTokenState = require("sync-doc-token-state") /*id: 307493*/;
  var docPreviewContainerIds = require("doc-preview-container-ids") /*id: 449485*/;
  let tj = Q(reactCoreLibraryReexport.lazy(() => asyncRetryUtils_1.retryWithFallback({
    fn: async () => {
      await x(tG);
      return await require.e("flow-doc_doc-suite") /*id: 68280*/.then(require.bind(require, "suite-permission-error-handler") /*id: 306572*/);
    }
  })));
  let tY = Q(reactCoreLibraryReexport.lazy(() => asyncRetryUtils_1.retryWithFallback({
    fn: async () => Promise.all([require.e("editor-core-selection") /*id: 13032*/, require.e("editor-kit-state-manager") /*id: 79909*/, require.e("ui-core-utilities") /*id: 85276*/, require.e("moment-locales-bundle") /*id: 85547*/, require.e("network-io-client") /*id: 45310*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("app-constants-and-enums") /*id: 86326*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("renderer-slate-core") /*id: 18653*/, require.e("core-editor-utilities") /*id: 47773*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx-block-management") /*id: 83252*/, require.e("docs-editor-utils") /*id: 74354*/, require.e("docx-editor-core") /*id: 8716*/, require.e("docx-editor-error-handling") /*id: 74277*/, require.e("flow-comment-system") /*id: 49875*/, require.e("flow-doc_preview-component") /*id: 28815*/]).then(require.bind(require, "flow-doc-preview-module-registry") /*id: 771792*/).then(e => ({
      default: e.PreviewComponent
    }))
  })));
  function tJ(e) {
    let {
      docId: n,
      docVersion: r,
      flowSuiteType: i,
      scrollerSelector: o,
      enableVirtualRender: a,
      onFetchDoc: u,
      onEditorMounted: c,
      onEditorUnmounted: _,
      getAuthToken: l,
      enableDocInline: s = false
    } = e;
    syncDocTokenState.syncDocToken(n);
    let E = n || docTokenManager.getDocToken();
    reactCoreLibraryReexport.useEffect(() => {
      docxEventCollector.wrappedCollector("flow_doc_preview_view", {});
    }, []);
    let d = z();
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: tV("container-RB_Xqp", docPreviewContainerIds.flowDocContainer),
      children: reactJsxRuntimeCoreReexport.jsx(reactReduxCore.Provider, {
        store: reduxStoreInitializer.reduxStore,
        children: reactJsxRuntimeCoreReexport.jsx(tj, {
          currentSuiteToken: E,
          flowSuiteType: i,
          reportParams: {
            scene: "docx_preview"
          },
          children: e => reactJsxRuntimeCoreReexport.jsx(tY, {
            objToken: E,
            store: reduxStoreInitializer.reduxStore,
            docVersion: r,
            onFetchDoc: u,
            scroller: o ?? docPreviewContainerIds.flowDocSelector,
            onFetchError: e.onClientVarsError,
            getAuthToken: l,
            onEditorMounted: e => {
              let {
                blockManager: n
              } = e;
              if (n) {
                if (d != null) {
                  d.init({
                    blockManager: n
                  });
                }
              }
              if (c != null) {
                c(e);
              }
            },
            enableVirtualRender: a,
            onEditorUnmounted: _,
            events: d == null ? undefined : d.eventEmitter,
            enableDocInline: s
          })
        })
      })
    });
  }
  Q(reactCoreLibraryReexport.lazy(() => asyncRetryUtils_1.retryWithFallback({
    fn: async () => {
      await x(tG);
      return Promise.all([require.e("editor-core-selection") /*id: 13032*/, require.e("editor-kit-state-manager") /*id: 79909*/, require.e("ui-core-utilities") /*id: 85276*/, require.e("moment-locales-bundle") /*id: 85547*/, require.e("network-io-client") /*id: 45310*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("app-constants-and-enums") /*id: 86326*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("renderer-slate-core") /*id: 18653*/, require.e("core-editor-utilities") /*id: 47773*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx-block-management") /*id: 83252*/, require.e("docs-editor-utils") /*id: 74354*/, require.e("docx-editor-core") /*id: 8716*/, require.e("docx-editor-error-handling") /*id: 74277*/, require.e("flow-comment-system") /*id: 49875*/, require.e("flow-doc_preview-component") /*id: 28815*/]).then(require.bind(require, "flow-doc-review-component") /*id: 949758*/).then(e => ({
        default: e.ReviewComponent
      }));
    }
  })));
  require("first-screen-event-handler-utils") /*id: 712591*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var docTeaServiceSymbol = require("doc-tea-service-symbol") /*id: 151816*/;
  var docI18nServiceToken = require("doc-i18n-service-token") /*id: 900813*/;
  var useDiContainerHook = require("use-di-container-hook") /*id: 3542*/;
  var docxWidthModeUtils = require("docx-width-mode-utils") /*id: 337143*/;
  let t5 = {
    [docxWidthModeConstants.sizeModes.STANDARD]: "wide-mode-standard",
    [docxWidthModeConstants.sizeModes.LARGE]: "wide-mode-large",
    [docxWidthModeConstants.sizeModes.FULL]: "wide-mode-full"
  };
  let t9 = {
    [docxWidthModeConstants.sizeModes.FULL]: "full_width",
    [docxWidthModeConstants.sizeModes.LARGE]: "wider_width",
    [docxWidthModeConstants.sizeModes.STANDARD]: "standard_width"
  };
  function t3(e) {
    let {
      disableFullWidth: n
    } = e;
    let r = [{
      key: docxWidthModeConstants.sizeModes.STANDARD,
      text: t("LarkCCM_DocX_WiderPage_PageWidth_Standard")
    }, {
      key: docxWidthModeConstants.sizeModes.LARGE,
      text: t("LarkCCM_DocX_WiderPage_PageWidth_Increased")
    }, {
      key: docxWidthModeConstants.sizeModes.FULL,
      text: t("LarkCCM_DocX_WiderPage_PageWidth_Full"),
      disabled: n
    }];
    let i = reactReduxCore.useSelector(docxWidthModeUtils.getDocxWidthMode);
    let o = reactCoreLibraryReexport.useRef(null);
    let a = reactCoreLibraryReexport.useRef(null);
    let [u, c] = reactCoreLibraryReexport.useState(0);
    reactCoreLibraryReexport.useEffect(() => {
      if (a.current) {
        c(a.current.clientWidth);
      }
    }, [a]);
    let _ = useDiContainerHook.useDiContainer(docI18nServiceToken.DocI18nService);
    let l = tV("wide-mode-onboarding", _.getUnreactiveLanguage());
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: o,
      className: l,
      children: [reactJsxRuntimeCoreReexport.jsx("div", {
        className: "wide-mode-tip-top",
        style: {
          maxWidth: u
        },
        children: t("LarkCCM_DocX_WiderPage_Menu_Header")
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "wide-mode-list-container",
        ref: a,
        children: r.map(e => {
          let n = () => {
            diContainerInstance.diContainer.get(docTeaServiceSymbol.docTeaServiceSymbol).trackEvent("ccm_space_docs_more_menu_click", {
              click: "set_doc_screen_width",
              screen_width_type: t9[e.key],
              target: "none"
            });
            if (e.key !== i) {
              platformDocUtils.vpe.emit(platformEventDefinitions.eventConstants.PC.DOCS.UPDATE_DOC_CONFIG, {
                [docxWidthModeConstants.attrNames.WIDTH_MODE]: e.key,
                token: docTokenManager.getDocToken()
              });
            }
          };
          let r = tV("wide-mode-item", t5[e.key], {
            "wide-mode-active": e.key === i,
            "wide-mode-disable": e.disabled === true
          });
          let o = reactJsxRuntimeCoreReexport.jsxs("div", {
            className: r,
            onClick: () => {
              if (!e.disabled) {
                n();
              }
            },
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "wide-mode-item-icon",
              children: [reactJsxRuntimeCoreReexport.jsx("div", {
                className: "wide-mode-item-icon-line"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: "wide-mode-item-icon-line"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: "wide-mode-item-icon-line"
              }), reactJsxRuntimeCoreReexport.jsx("div", {
                className: "wide-mode-item-icon-line"
              })]
            }), reactJsxRuntimeCoreReexport.jsx("div", {
              className: "wide-mode-item-text",
              children: e.text
            })]
          }, e.key);
          if (e.disabled) {
            return reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
              placement: "bottom",
              title: t("doc_tooltip_disable_sizeNSinWindow"),
              children: o
            });
          } else {
            return reactJsxRuntimeCoreReexport.jsx(reactCoreLibraryReexport.Fragment, {
              children: o
            }, e.key);
          }
        })
      })]
    });
  }
  var noticeComponent_1 = require("notice-component_1") /*id: 854613*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var htmlEscapeUtil_2 = require("html-escape-util_2") /*id: 381642*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  let ne = () => {
    return !!document.querySelector(".darkreader--fallback") && document.querySelectorAll(".darkreader")?.length > 10;
  };
  let nt = () => {
    if (document.querySelector("#hility-css")) {
      return true;
    }
    let e = document.createElement("span");
    e.className = "chrome-extension-mutihighlight chrome-extension-mutihighlight-style-0 chrome-extension-FindManyStrings chrome-extension-FindManyStrings-style-0";
    e.style.display = "none";
    document.body.appendChild(e);
    let n = window.getComputedStyle(e);
    let r = n.borderRadius !== "0px" && n.boxShadow !== "none" && (RegExp(/(0, 0, 0)/).test(n.color) || RegExp(/(255, 198, 0)/).test(n.background));
    document.body.removeChild(e);
    return r;
  };
  let nn = () => !!document.querySelector("meta[name=\"writingo-extension\"][content=\"true\"]");
  let nr = () => !!document.querySelector("deepl-input-controller");
  let ni = () => {
    return (document.querySelector("div[id^=\"extension-\"]")?.id || "").length === 15;
  };
  let no = () => document.querySelectorAll(".oza-style").length > 10;
  (l = {}).A = "A";
  l.B = "B";
  let na = l;
  let nu = "announce.unsupport_extensions_a";
  let nc = "announce.unsupport_extensions_b";
  na.A;
  na.A;
  na.A;
  na.A;
  na.B;
  na.B;
  na.B;
  na.B;
  na.A;
  na.A;
  var n_ = require("browser-env-detection-util") /*id: 355358*/.browserDetector;
  let nl = {
    primaryChrome: 69,
    edge: 15.15063,
    sougou: 0,
    qq: n_.osname === "macOS" ? 5 : 9.6,
    360: 0,
    "360Fast": 0,
    safari: 12.1
  };
  let ns = `<span class="link"><a href="https://www.feishu.cn/hc/zh-CN/articles/360037376033-%E8%A7%A3%E5%86%B3-chrome-%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F%E4%B8%8E%E6%96%87%E6%A1%A3%E7%9A%84%E5%86%B2%E7%AA%81" target="_blank">${htmlEscapeUtil_2.escapeHtml("帮助中心")}</a></span>`;
  function nE(e) {
    let n = "";
    switch (e) {
      case "UnSupportBrowser":
        n = "banner_not_supported";
        break;
      case "UnSupportVersion":
        n = "banner_low_version";
    }
    diContainerInstance.diContainer.get(docTeaServiceSymbol.docTeaServiceSymbol).trackEvent("click_help_center", {
      action: "click",
      source: n
    });
  }
  var styledComponentsCore = require("styled-components-core") /*id: 842965*/;
  var useDebouncedCallbackHook_1 = require("use-debounced-callback-hook_1") /*id: 366474*/;
  let np = styledComponentsCore.default(noticeComponent_1.NoticeComponent)`
  & div {
    overflow: hidden;
  }
`;
  reactCoreLibraryReexport.Component;
  Q(reactCoreLibraryReexport.lazy(() => asyncRetryUtils_1.retryWithFallback({
    fn: async () => {
      await x(tG);
      return Promise.all([require.e("d3-interpolation-utils") /*id: 89990*/, require.e("d3-axis-svg-geometry") /*id: 41069*/, require.e("core-utilities-config") /*id: 51747*/, require.e("video-player-xgplayer") /*id: 2348*/, require.e("editor-core-selection") /*id: 13032*/, require.e("editor-kit-state-manager") /*id: 79909*/, require.e("media-source-playback-engine") /*id: 36277*/, require.e("virtual-list-module") /*id: 11464*/, require.e("markdown-diagram-utils") /*id: 54999*/, require.e("xgplayer-media-player") /*id: 12575*/, require.e("media-player-i18n-download") /*id: 64826*/, require.e("roughjs-shape-renderer") /*id: 68615*/, require.e("ui-core-utilities") /*id: 85276*/, require.e("moment-locales-bundle") /*id: 85547*/, require.e("network-io-client") /*id: 45310*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("app-constants-and-enums") /*id: 86326*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("delta-and-changeset-operations") /*id: 46252*/, require.e("menu-component-chunk") /*id: 70389*/, require.e("renderer-slate-core") /*id: 18653*/, require.e("core-editor-utilities") /*id: 47773*/, require.e("hls-video-player") /*id: 92744*/, require.e("js-yaml-core-library") /*id: 23945*/, require.e("code-block-fold-highlight") /*id: 22007*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("editor-inline-embeds") /*id: 76856*/, require.e("docx-block-management") /*id: 83252*/, require.e("docs-editor-utils") /*id: 74354*/, require.e("docx-editor-core") /*id: 8716*/, require.e("docx-editor-error-handling") /*id: 74277*/, require.e("docx-ssr-collab-manager") /*id: 9960*/, require.e("flow-doc_shortcut") /*id: 35682*/]).then(require.bind(require, "docx-shortcut-module-bootstrap") /*id: 72310*/);
    }
  })));
  require("onboarding-doc-enum") /*id: 49559*/;
  var primitiveConverters = require("primitive-converters") /*id: 383327*/;
  require("docx-editor-toolbar-provider-selector") /*id: 932717*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var composingServiceName = require("composing-service-name") /*id: 181291*/;
  var docxEditableSelectors = require("docx-editable-selectors") /*id: 195725*/;
  var checkSingleEmptyTextBlock = require("check-single-empty-text-block") /*id: 963907*/;
  var suiteErrorHandlerComponent = require("suite-error-handler-component") /*id: 380284*/;
  require.d(exports, {
    openBlockMenu: function () {
      return docxEditorConstantsConfig.openBlockMenu;
    },
    toggleCommentPanel: function () {
      return docxFlowCommentStore.toggleCommentPanel;
    },
    selectEditing: function () {
      return docxEditableSelectors.selectEditing;
    },
    FlowDocXEditorController: function () {
      return tJ;
    },
    hideBlockMenu: function () {
      return docxEditorConstantsConfig.hideBlockMenu;
    },
    FlowDocXEditorProvider: function () {
      return K;
    },
    SuiteErrorCodes: function () {
      return suiteErrorHandlerComponent.SuiteErrorCodes;
    },
    FlowDocXPreviewComponent: function () {
      return tZ;
    },
    DocWidthModeSelector: function () {
      return t3;
    },
    composingService: function () {
      return composingServiceName.composingService;
    },
    checkSingleEmptyTextBlock: function () {
      return checkSingleEmptyTextBlock.checkSingleEmptyTextBlock;
    },
    toNumber: function () {
      return primitiveConverters.toNumber;
    },
    useFlowDocXEditorController: function () {
      return z;
    },
    CopilotShareModes: function () {
      return copilotShareModes.CopilotShareModes;
    },
    useDocWidthModeSelector: function () {
      return k;
    }
  });
}