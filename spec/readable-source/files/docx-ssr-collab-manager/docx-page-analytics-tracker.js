// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'pageAnalyticsTracker'
// - Renamed export 'Cw' to 'PageFetchStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 64203
         */
module.exports = function (module, exports, require) {
  var s;
  var n;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docsModeProviderToken = require("docs-mode-provider-token") /*id: 431030*/;
  var editorRevisingStateAccessor = require("editor-revising-state-accessor") /*id: 828858*/;
  var docAnchorCollabUtilities = require("doc-anchor-collab-utilities") /*id: 762610*/;
  var docxImageViewerUtils = require("docx-image-viewer-utils") /*id: 200311*/;
  var docxWidthModeConstants = require("docx-width-mode-constants") /*id: 194078*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var docInfoMetricUtils = require("doc-info-metric-utils") /*id: 890839*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockMetadataUtils = require("doc-block-metadata-utils") /*id: 282711*/;
  var urlLocationUtils = require("url-location-utils") /*id: 979504*/;
  var firstScreenEventHandlerUtils = require("first-screen-event-handler-utils") /*id: 712591*/;
  var runtimeEnvFlags = require("runtime-env-flags") /*id: 573139*/;
  var docxUtilityHelpers = require("docx-utility-helpers") /*id: 859002*/;
  var editorCommands = require("editor-commands") /*id: 361547*/;
  var docxEventHelper = require("docx-event-helper") /*id: 997602*/;
  var docxErrorStatusHandler = require("docx-error-status-handler") /*id: 570520*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  var historyVisibilityObserver = require("history-visibility-observer") /*id: 474806*/;
  var safeFunctionWrapper = require("safe-function-wrapper") /*id: 741051*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  let D = "sub_inline_button_cnt";
  (s = {}).FROM_START = "from_start";
  s.FROM_ANCHOR = "from_anchor";
  s.FROM_MULTI_ANCHOR = "from_multi_anchor";
  s.FROM_TEXT_CARD_RANGE_ANCHOR = "from_block_share_to_chat";
  s.FROM_LAST_READ_POSITION = "from_last_read_position";
  s.FROM_REMINDER = "from_reminder";
  s.FROM_SUBSCRIPTION = "from_subscription";
  let M = s;
  let F = "docx";
  (n = {})[n.INIT = -1] = "INIT";
  n[n.FETCH_SUCCESS = 0] = "FETCH_SUCCESS";
  n[n.FETCH_FAIL = 1] = "FETCH_FAIL";
  n[n.UNLOAD_BEFORE_LOAD = 2] = "UNLOAD_BEFORE_LOAD";
  let V = n;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var localStorageUtils = require("local-storage-utils") /*id: 378345*/;
  function x() {
    return platformDocUtils.o0s.parseQuery(location.search)[platformDocUtils.BvL.CCM_OPEN_TYPE] || (platformDocUtils.KNd() ? "from_version_link" : undefined);
  }
  function Z(e, i, r) {
    var s;
    if ((i = typeof (s = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var s = r.call(e, i || "default");
        if (typeof s != "object") {
          return s;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? s : s + "") in e) {
      Object.defineProperty(e, i, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[i] = r;
    }
    return e;
  }
  class j {
    start() {
      let e;
      if (this.curModule) {
        return;
      }
      this.stopBind = firstScreenEventHandlerUtils.executeAfterGlobalEvent(() => {
        document.addEventListener("visibilitychange", this.onVisibilityChange);
      });
      this.setCurModule(platformDocUtils.OXm().module);
      let {
        block_id: i,
        reminder_id: r,
        subscription: s
      } = platformDocUtils.o0s.parseQuery(location.href);
      let n = r && Array.isArray(r) ? r[0] : r;
      let a = i && Array.isArray(i) ? i[0] : i;
      let l = "";
      if (s) {
        e = M.FROM_SUBSCRIPTION;
      } else if (n && a) {
        e = M.FROM_REMINDER;
      } else if (this.anchorHash) {
        l = docxImageViewerUtils.openImageViewer(this.anchorHash) ?? this.anchorHash;
        l = docxUtilityHelpers.maskSensitiveData(l);
        e = docAnchorCollabUtilities.isTextCardAnchorKey(this.anchorHash) ? M.FROM_TEXT_CARD_RANGE_ANCHOR : docAnchorCollabUtilities.isRangeAnchorKey(this.anchorHash) ? M.FROM_MULTI_ANCHOR : M.FROM_ANCHOR;
      } else {
        e = M.FROM_START;
      }
      let u = n && a ? a : this.anchorHash;
      this.pageProfile = {
        env_type: runtimeEnvFlags.commonEnvConfig,
        network_status: networkStateEventCollector.collectNetworkState() ? "online" : "offline",
        url_from: platformDocUtils.PFe(location.href),
        read_position: e,
        read_position_data: {
          block_id: u,
          block_type: "",
          sub_block_type: "",
          reminder_id: n || "",
          anchor_id: l
        },
        wiki_area_id: function () {
          let {
            module: e
          } = platformDocUtils.OXm();
          if (String(e) !== String(fileTypeConstants.BasicFileType.WIKI)) {
            return "";
          }
          let i = platformDocUtils.Q7V(reduxStoreInitializer.reduxStore.getState());
          if (!i) {
            return "";
          }
          let r = objectPathGetDefault.getObjectPathDefault(i, "areaId");
          if (r) {
            return platformDocUtils.p5T(r);
          } else {
            return "";
          }
        }(),
        drive_sdk_appid: "",
        is_pin_directory: function () {
          if (browserEnvironmentDetectionUtils.browserDetector.isMobile || browserEnvironmentDetectionUtils.browserDetector.isLark || browserEnvironmentDetectionUtils.browserDetector.isIPad) {
            return "false";
          }
          let e = localStorageUtils.getStorageItem("catalogue:pin");
          if (e === "1" || e === null) {
            return "true";
          } else {
            return "false";
          }
        }(),
        is_show_part_comment: function () {
          if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
            return "false";
          }
          let e = localStorageUtils.getStorageItem("docCommentShown");
          if (e === "true" || e === null) {
            return "true";
          } else {
            return "false";
          }
        }(),
        mode: "",
        is_full_screen: "false",
        is_have_cover: "false",
        is_have_information: "false",
        display_information: {
          author: "false",
          create_time: "false",
          edit_time: "false",
          uv: "false",
          pv: "false",
          like_num: "false",
          comment_num: "false",
          author_num: 0
        },
        is_available_offline: "false",
        is_follow_update: "false",
        is_show_quote_list: "false",
        is_show_editor: "false",
        is_version: platformDocUtils.KNd() ? "true" : "false",
        clientVar_status: V.INIT,
        inline_link_cnt: 0,
        inline_mention_user_cnt: 0,
        inline_mention_doc_cnt: 0,
        inline_reminder_cnt: 0,
        inline_equation_cnt: 0,
        inline_jira_issue_cnt: 0,
        is_memory_view_type: "false",
        [D]: this.getInitSubInlineButtonCnt()
      };
      if (platformDocUtils.KNd()) {
        this.pageProfile.open_type = x();
      }
      this.sended = false;
      this.setPageBlockId("");
      docxEditorEventConstantsAndManager.globalEventBus.on(editorCommands.editorCommands.PageEditable, this.handleEditorOnMount);
      docxEditorEventConstantsAndManager.globalEventBus.on(editorCommands.editorCommands.AllDataReady, this.handleAllDataReady);
    }
    async waitUntilLastReadPosition(e) {
      return false;
    }
    setAnchorBlockType(e) {
      let i = this.pageProfile && this.pageProfile.read_position_data;
      if (i && i.block_id) {
        let r = e.block_map[i.block_id];
        if (r) {
          let {
            data: e
          } = r;
          i.block_type = e.type;
          i.sub_block_type = docBlockMetadataUtils.getBlockType({
            snapshot: e
          });
        }
      }
    }
    setHasCover(e) {
      let {
        block_map: i
      } = e;
      if (!i) {
        return;
      }
      let r = i[this.pageBlockId];
      if (!r) {
        return;
      }
      let {
        data: s
      } = r;
      this.pageProfile.is_have_cover = s && s.cover ? "true" : "false";
    }
    setHasDocInfo(e) {
      let {
        block_map: i
      } = e;
      if (!i) {
        return;
      }
      let r = i[this.pageBlockId];
      if (!r) {
        return;
      }
      let {
        data: s
      } = r;
      let n = s && s.doc_info;
      this.pageProfile.is_have_information = n ? "true" : "false";
      if (n) {
        let e = docInfoMetricUtils.getMetricVisibility(s.doc_info.options);
        this.pageProfile.display_information = {
          ...this.pageProfile.display_information,
          ...e,
          author_num: (s.doc_info.editors || []).length
        };
      }
    }
    setIsFullWidth(e) {
      let {
        block_map: i
      } = e;
      if (!i) {
        return;
      }
      let r = i[this.pageBlockId];
      if (!r) {
        return;
      }
      let {
        data: s
      } = r;
      let n = s && s.width_mode === docxWidthModeConstants.sizeModes.FULL;
      if (browserEnvironmentDetectionUtils.browserDetector.isFeed) {
        n = true;
      }
      if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
        n = false;
      }
      this.pageProfile.is_full_width = n;
    }
    getInlineComponentProps(e) {
      let i = null;
      try {
        i = JSON.parse(e);
      } catch (e) {}
      return i;
    }
    setPageBlockId(e) {
      this.pageBlockId = e;
    }
    setCurModule(e) {
      this.curModule = e;
    }
    setPinCatalogStatus(e) {
      this.start();
      this.updateViewState({
        is_pin_directory: e && e.isShowing ? "true" : "false"
      });
    }
    updateViewState(e) {
      this.pageProfile = Object.assign(this.pageProfile || {}, e);
    }
    applyClientVar(e, i = null) {
      if (!this.sended) {
        this.start();
        this.pageProfile.clientVar_status = e;
        if (e !== V.FETCH_SUCCESS || !i) {
          return this.sendPageView();
        }
        this.setPageBlockId(i.id);
        this.setAnchorBlockType(i);
        this.setHasCover(i);
        this.setHasDocInfo(i);
        this.setIsFullWidth(i);
      }
    }
    sendPageEvent(e, i) {
      if (!this.curModule) {
        return;
      }
      let r = {
        click: e
      };
      if (i) {
        r.sub_click = i;
      }
      docxEventHelper.collectEventWithTarget("ccm_docs_page_click", {
        record_id: this.pageBlockId,
        block_type: docBlockTypeConstants.blockTypeConstants.PAGE
      }, r);
    }
    sendPageView() {
      if (!this.curModule || this.isDev) {
        return;
      }
      let {
        pageProfile: e
      } = this;
      let i = e && e.clientVar_status === V.FETCH_SUCCESS ? "ccm_docs_page_view" : "ccm_docs_page_view_failed_dev";
      docxEventHelper.collectEventWithIdle(i, {
        record_id: this.pageBlockId,
        block_type: docBlockTypeConstants.blockTypeConstants.PAGE
      }, this.getEncryptPageData(), true);
      if (platformDocUtils.KNd()) {
        docxEventHelper.collectEventWithIdle("ccm_docs_version_page_view", {
          record_id: this.pageBlockId,
          block_type: docBlockTypeConstants.blockTypeConstants.PAGE
        }, {
          open_type: x()
        });
      }
      this.sended = true;
      (function () {
        let {
          [platformDocUtils.BvL.CCM_OPEN_TYPE]: e,
          ...i
        } = platformDocUtils.o0s.parseQuery(location.search);
        if (e) {
          platformDocUtils.m8M.replace({
            search: platformDocUtils.o0s.formatQuery(i)
          });
        }
      })();
    }
    getEncryptPageData() {
      if (!this.pageProfile) {
        return {};
      }
      let {
        read_position_data: e
      } = this.pageProfile;
      if (e && e.block_id) {
        return Object.assign({}, this.pageProfile, {
          read_position_data: {
            ...e,
            block_id: platformDocUtils.p5T(e.block_id)
          }
        });
      } else {
        return this.pageProfile;
      }
    }
    destroy() {
      this.setPageBlockId("");
      this.setCurModule("");
      docxEditorEventConstantsAndManager.globalEventBus.off(editorCommands.editorCommands.PageEditable, this.handleEditorOnMount);
      docxEditorEventConstantsAndManager.globalEventBus.off(editorCommands.editorCommands.AllDataReady, this.handleAllDataReady);
      if (typeof this.cancelSendPageView == "function") {
        this.cancelSendPageView();
      }
      if (docxFeatureFlags.isMobileMemoryLeakFix()) {
        this.cancelSendPageView = emptyExportFunction.emptyFunction;
      }
      if (typeof this.stopBind == "function") {
        this.stopBind();
      }
      document.removeEventListener("visibilitychange", this.onVisibilityChange);
    }
    constructor() {
      var e;
      Z(this, "pageProfile", undefined);
      Z(this, "curModule", undefined);
      Z(this, "sended", undefined);
      Z(this, "blockCountSended", undefined);
      Z(this, "pageBlockId", undefined);
      Z(this, "isDev", docxErrorStatusHandler.isDebugModeEnabled());
      Z(this, "anchorHash", ((e = urlLocationUtils.getHash()) === null || e === undefined ? undefined : e.slice(1)) || window.location.hash.slice(1) || "");
      Z(this, "cancelSendPageView", undefined);
      Z(this, "stopBind", undefined);
      Z(this, "getInitSubInlineButtonCnt", () => {
        let e = {};
        Object.keys(inlineComponentFacade.actionTypes).forEach(i => {
          if (i !== inlineComponentFacade.actionTypes.Default) {
            e[`inline_button_${i}_cnt`] = 0;
          }
        });
        return e;
      });
      Z(this, "handleEditorOnMount", safeFunctionWrapper.createSafeCall(e => {
        if (this.sended) {
          return;
        }
        let {
          blockManager: i
        } = e;
        let {
          editorAPI: {
            dataService: r
          }
        } = i;
        let s = r.getRecordMap();
        let n = {};
        for (let e of s.values()) {
          let {
            text: i,
            type: r
          } = e.get([]);
          switch (r) {
            case docBlockConstants.mentionTypes.USER:
            case docBlockConstants.mentionTypes.MENTION_DOC:
            case docBlockConstants.mentionTypes.JIRA_ISSUE:
              safeObjectSetWrapper.safeObjectSet(n, r, objectPathGetDefault.getObjectPathDefault(n, r, 0) + 1);
              break;
            default:
              if (i) {
                let {
                  apool: e
                } = i;
                let {
                  numToAttrib: r
                } = e;
                if (!r) {
                  return;
                }
                Object.values(r).forEach(e => {
                  let [i, r] = e;
                  if (i === "inline-component") {
                    let e = this.getInlineComponentProps(r);
                    if (e) {
                      let {
                        type: i,
                        data: r
                      } = e;
                      safeObjectSetWrapper.safeObjectSet(n, i, objectPathGetDefault.getObjectPathDefault(n, i, 0) + 1);
                      if (i === docBlockTypeConstants.blockTypeConstants.BUTTON) {
                        let {
                          actions: e = []
                        } = r;
                        let i = e[0].type || "";
                        let s = objectPathGetDefault.getObjectPathDefault(n, D, {});
                        let o = `inline_button_${i}_cnt`;
                        let a = objectPathGetDefault.getObjectPathDefault(s, o, 0) + 1;
                        safeObjectSetWrapper.safeObjectSet(s, o, a);
                        safeObjectSetWrapper.safeObjectSet(n, D, s);
                      }
                    }
                  }
                  if (i === docBlockConstants.mentionTypes.LINK) {
                    safeObjectSetWrapper.safeObjectSet(n, i, objectPathGetDefault.getObjectPathDefault(n, i, 0) + 1);
                  }
                  if (i === "equation") {
                    safeObjectSetWrapper.safeObjectSet(n, "equation", objectPathGetDefault.getObjectPathDefault(n, "equation", 0) + 1);
                  }
                });
              }
          }
        }
        this.updateViewState(Object.keys(n).reduce((e, i) => {
          e[i === D ? i : `inline_${i === docBlockConstants.mentionTypes.USER ? "mention_user" : i}_cnt`] = n[i];
          return e;
        }, {}));
        this.cancelSendPageView = firstScreenEventHandlerUtils.executeAfterGlobalEvent(() => {
          var i;
          this.waitUntilLastReadPosition((i = e.blockManager) === null || i === undefined ? undefined : i.config.get("locate")).then(async i => {
            if (editorRevisingStateAccessor.canShowRevising()) {
              var r;
              var s;
              let i = (r = e.editor) === null || r === undefined ? undefined : r.api.getService(docsModeProviderToken.docsModeProvider, {
                optional: true
              });
              await (i == null ? undefined : i.ready$.toPromise());
              this.updateViewState({
                is_memory_view_type: ((s = i == null ? undefined : i.isMemoryViewType) !== null && s !== undefined && s).toString()
              });
            }
            return i;
          }).then(e => {
            if (e && (!this.pageProfile.read_position || this.pageProfile.read_position === M.FROM_START)) {
              this.pageProfile.read_position = M.FROM_LAST_READ_POSITION;
            } else if (this.anchorHash) {
              if (docAnchorCollabUtilities.isTextCardAnchorKey(this.anchorHash)) {
                this.pageProfile.read_position = M.FROM_TEXT_CARD_RANGE_ANCHOR;
              } else if (docAnchorCollabUtilities.isRangeAnchorKey(this.anchorHash)) {
                this.pageProfile.read_position = M.FROM_MULTI_ANCHOR;
              } else {
                this.pageProfile.read_position = M.FROM_ANCHOR;
              }
            }
            this.sendPageView();
          }).catch(() => {
            this.sendPageView();
          });
        });
      }));
      Z(this, "handleAllDataReady", safeFunctionWrapper.createSafeCall(e => {
        if (this.blockCountSended) {
          return;
        }
        let {
          editorAPI: {
            dataService: i
          }
        } = e;
        let r = i.getRecordMap();
        let s = {};
        let n = {};
        for (let e of r.values()) {
          let i = e.get([]);
          let {
            type: r
          } = i;
          if ([docBlockTypeConstants.blockTypeConstants.CHART_EMBEDDED, docBlockTypeConstants.blockTypeConstants.CHART_REFER, docBlockTypeConstants.blockTypeConstants.CHART_REFER_HOST_PERM].includes(r)) {
            safeObjectSetWrapper.safeObjectSet(s, r, objectPathGetDefault.getObjectPathDefault(s, r, 0) + 1);
          }
          if (function (e) {
            let {
              type: i
            } = e;
            return !![docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.BITABLE, docBlockTypeConstants.blockTypeConstants.URL_PREVIEW, docBlockTypeConstants.blockTypeConstants.WHITEBOARD, docBlockTypeConstants.blockTypeConstants.MINDMAP].includes(i) && !e.token || i === docBlockTypeConstants.blockTypeConstants.URL_PREVIEW && !e.token || i === docBlockTypeConstants.blockTypeConstants.IMAGE && !e.image.token || i === docBlockTypeConstants.blockTypeConstants.FILE && !e.file.token;
          }(i)) {
            safeObjectSetWrapper.safeObjectSet(n, r, objectPathGetDefault.getObjectPathDefault(n, r, 0) + 1);
          }
        }
        let {
          chart_embedded: o = 0,
          chart_refer: a = 0,
          chart_refer_host_perm: h = 0
        } = s;
        let d = {
          all_chart_num: o + a + h,
          static_chart_num: o,
          dynamic_chart_num: a + h,
          dynamic_doc_collaborator_chart_num: h,
          dynamic_source_sheet_chart_num: a
        };
        if (d.all_chart_num > 0) {
          docxEventHelper.collectEventWithIdle("ccm_docs_block_count_view", {
            record_id: this.pageBlockId,
            block_type: docBlockTypeConstants.blockTypeConstants.PAGE
          }, {
            block_sheet_chart_cnt: d
          });
        }
        if (Object.keys(n).length > 0) {
          e.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_second_party_token", {
            action: "empty_token_block_count",
            info: JSON.stringify(n)
          });
        }
        this.blockCountSended = true;
      }));
      Z(this, "onVisibilityChange", () => {
        if (document.visibilityState === "visible") {
          this.setCurModule(platformDocUtils.OXm().module);
          if (platformDocUtils.W4L() === F) {
            this.sendPageEvent("page_visible");
            historyVisibilityObserver.historyVisibility.getObserverTrigger$().next("page_visible");
          }
        } else {
          if (platformDocUtils.W4L() !== F) {
            return;
          }
          this.sendPageEvent("close_view", "page_invisible");
          this.setCurModule("");
        }
      });
      window.addEventListener("beforeunload", () => {
        if (platformDocUtils.W4L() === F) {
          this.sendPageEvent("close_view", "page_destroy");
          this.destroy();
        }
      });
    }
  }
  var $ = new class extends j {
    constructor() {
      super();
      platformDocUtils.m8M.listen((e, i) => {
        if (i !== "REPLACE" && platformDocUtils.W4L() === F) {
          if (!this.sended) {
            this.updateViewState({
              clientVar_status: V.UNLOAD_BEFORE_LOAD
            });
            this.sendPageView();
          }
          this.sendPageEvent("close_view", "page_spa_switch");
          this.destroy();
        }
      });
    }
  }();
  require.d(exports, {
    pageAnalyticsTracker: function () {
      return $;
    },
    PageFetchStatus: function () {
      return V;
    }
  });
}