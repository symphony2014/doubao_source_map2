// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'TJ' to 'IndentErrorTypes'
// - Renamed export 'bb' to 'IndentSourceTypes'
// - Renamed export 'RJ' to 'validateIndentOperation'
// - Renamed export 'pY' to 'checkListBlockAbove'
// - Renamed export 'Rm' to 'getIndentResult'
// - Renamed export 'yz' to 'showIndentTips'
// - Renamed export 'uL' to 'isTextIndentEnabled'
// - Renamed export 'oj' to 'isBlockIndentable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 434696
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var docxEditorConstantsConfig = require("docx-editor-constants-config") /*id: 302915*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docxShortcutFeatureDetection = require("docx-shortcut-feature-detection") /*id: 407607*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockTypeLabels = require("doc-block-type-labels") /*id: 159823*/;
  var docBlockDepthUtil = require("doc-block-depth-util") /*id: 511268*/;
  var docxBlockValidatorUtils_1 = require("docx-block-validator-utils_1") /*id: 869432*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var editorTypeConstants = require("editor-type-constants") /*id: 719873*/;
  var compatBrowserSelectionService_1 = require("compat-browser-selection-service_1") /*id: 22128*/;
  var blockTipsConstants = require("block-tips-constants") /*id: 574715*/;
  var blockFlashEnhancementManager = require("block-flash-enhancement-manager") /*id: 710621*/;
  var translationSuffixCheck = require("translation-suffix-check") /*id: 175813*/;
  var blockStateManager = require("block-state-manager") /*id: 9156*/;
  var localStorageUtils = require("local-storage-utils") /*id: 378345*/;
  let O = "docx_show_indent_tips";
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  (o = {}).INNER_TAB = "inner_tab";
  o.NO_PREV_SIBLING = "no_prev_sibling";
  o.MAX_LEVEL = "max_level";
  o.CAN_NOT_INDENT = "can_not_indent";
  o.BLOCK_INDENT = "block_indent";
  o.TEXT_INDENT = "text_indent";
  o.PREV_SIBLING_IS_NOT_NESTABLE = "prev_sibling_is_not_nestable";
  o.NEED_SHOW_SETTING_TIP = "need_show_setting_tip";
  o.PAGE_BLOCK = "page_block";
  let A = o;
  (i = {}).web_text_bubble_toolbar = "web_text_bubble_toolbar";
  i.web_menu_panel = "web_menu_panel";
  i.above_block = "above_block";
  let L = i;
  function N(e) {
    let {
      parent: n
    } = e;
    if ((n == null ? undefined : n.type) === docBlockTypeConstants.blockTypeConstants.VIEW) {
      return n;
    } else {
      return e;
    }
  }
  function B(e) {
    let {
      blockManager: n,
      id: r
    } = e;
    let o = N(n.getBlockModelByBlockId(r));
    return !!(o == null ? undefined : o.previousSibling) && !translationSuffixCheck.isTranslationMatch(n, o.previousSibling.recordId);
  }
  function D(e) {
    let {
      blockManager: n,
      id: r
    } = e;
    let {
      previousSibling: o
    } = N(n.getBlockModelByBlockId(r));
    if (!o) {
      return false;
    }
    let i = n.getBlockModelByBlockId(o.id);
    let l = Array.isArray(i.record.snapshot.children);
    return docBlockTypeConstants.getAllowedBlockTypes().includes(i.type) && l;
  }
  function w(e) {
    let {
      blockManager: n,
      struct: r
    } = e;
    let o = n.getBlockMaxLevelInContainer(r);
    if (docBlockTypeConstants.gridTableOkTypes.includes(r.type)) {
      return r.depth - 1 < docxEditorConstantsConfig.fontSizeSmall && o + 1 < docxEditorConstantsConfig.defaultTimeout;
    } else {
      return o < docxEditorConstantsConfig.fontSizeSmall;
    }
  }
  function M(e) {
    return e.model.snapshot.text_indent === 1;
  }
  function P(e, n) {
    let r = blockStateManager.isAvailable();
    let o = !r || r && K();
    return docxShortcutFeatureDetection.isShortcutEnabled() && o && function (e) {
      let {
        blockManager: n,
        id: r
      } = e;
      return n.getBlockModelByBlockId(r).type === docBlockTypeConstants.blockTypeConstants.TEXT;
    }(e) && !docxBlockUtils_1.hasParentOfBlockType(e.id, e.blockManager, docBlockTypeConstants.blockTypeConstants.TABLE) && F(n) && x(e) && !M(e);
  }
  function F(e) {
    return !(e == null ? undefined : e.mouse);
  }
  function x(e) {
    let n = e.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).getSelection();
    if (n.length === 1) {
      let {
        selection: e,
        type: r
      } = n[0];
      return r === editorTypeConstants.blockTypes.TEXT && (e == null ? undefined : e.start) === 0;
    }
    return false;
  }
  function U(e, n) {
    let r = function (e) {
      if (!blockStateManager.isAvailable()) {
        return false;
      }
      let [n] = e.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).getSelection();
      if (!n) {
        return false;
      }
      let r = K();
      let {
        id: o,
        selection: i,
        type: l
      } = n;
      let u = e.model.root.children[0];
      if (!u) {
        return false;
      }
      let a = u.id === o;
      let s = l === editorTypeConstants.blockTypes.TEXT && (i == null ? undefined : i.start) === 0 && (i == null ? undefined : i.end) === 0;
      let {
        userId: d
      } = userEnvironmentUtils.getUserInfo();
      let h = function (e) {
        let n = platformDocUtils.p5T(e);
        let r = localStorageUtils.getStorageObject(O);
        return Array.isArray(r) && r.indexOf(n) > -1;
      }(d);
      return a && s && !h && !r;
    }(e);
    let o = !P(e, n) && B(e) && D(e) && w(e);
    let i = P(e, n);
    let l = function (e, n) {
      let {
        blockManager: r,
        id: o
      } = e;
      let i = r.getBlockModelByBlockId(o);
      let [l] = e.editorAPI.getService(compatBrowserSelectionService_1.selectionServiceKey).getSelection();
      return l && l.type === editorTypeConstants.blockTypes.TEXT && docBlockTypeConstants.codeOnlyTypes.includes(i.type) && F(n);
    }(e, n);
    if (e.model.type === "page") {
      return A.PAGE_BLOCK;
    } else if (e.model.type === docBlockTypeConstants.blockTypeConstants.AGENDA) {
      return A.MAX_LEVEL;
    } else if (r) {
      return A.NEED_SHOW_SETTING_TIP;
    } else if (l) {
      return A.INNER_TAB;
    } else if (i) {
      return A.TEXT_INDENT;
    } else if (o) {
      return A.BLOCK_INDENT;
    } else if (B(e)) {
      if (w(e)) {
        if (D(e)) {
          return A.CAN_NOT_INDENT;
        } else {
          return A.PREV_SIBLING_IS_NOT_NESTABLE;
        }
      } else {
        return A.MAX_LEVEL;
      }
    } else {
      return A.NO_PREV_SIBLING;
    }
  }
  function G(e, n, r) {
    if (r === L.web_menu_panel) {
      return false;
    }
    let {
      parent: o
    } = e.getBlockModelByBlockId(n);
    if (!o) {
      return false;
    }
    let i = o.children.findIndex(e => e.id === n);
    if (i <= 0) {
      return false;
    }
    let l = 0;
    while (l <= 3) {
      let e = o.children[i - 1 - l++];
      if (!e) {
        break;
      }
      if (docxBlockValidatorUtils_1.isListBlockType(e.type)) {
        return true;
      }
    }
    return false;
  }
  function H(e) {
    let {
      blockManager: n,
      indentResult: r,
      blockId: o,
      source: i,
      needShowBlockTips: a,
      withAnimation: v = false,
      needAutoReport: T = false
    } = e;
    let L = false;
    let {
      tips: N,
      showTips: B,
      hasListBlockUpper: D,
      prevBrotherBlockIds: w,
      collectorParams: M,
      animationCallback: P
    } = function (e, n, r, o, i) {
      let a;
      let v = "";
      let T = true;
      let C = false;
      let L = [];
      let N = {
        view_show_position: o,
        object_block_data: docxEditorBlockMetadataUtils.getBlockModelInfo(n, r)
      };
      switch (e) {
        case A.BLOCK_INDENT:
        case A.TEXT_INDENT:
        case A.INNER_TAB:
        case A.PAGE_BLOCK:
          v = "";
          T = false;
          break;
        case A.MAX_LEVEL:
          v = t("CreationDoc_Docs_Indent_MaxOneLevel");
          T = true;
          break;
        case A.NEED_SHOW_SETTING_TIP:
          v = reactJsxRuntimeCoreReexport.jsxs("span", {
            children: [t("CreationDoc_Docs_LinktoEnableIndent"), reactJsxRuntimeCoreReexport.jsx("span", {
              className: "block-tips-link",
              onClick: () => {
                if (browserEnvironmentDetectionUtils.browserDetector.isLarkFeed) {
                  window.open(xssContentSanitizer.sanitizeUrl(`${window.location.href.split(/[?#]/)[0]}?open_text_indent_setting=true`, null, {
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
                    filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1rNTJZb*N4Z*1KcE9XOWFWM2gz$2xoS2$rd3liSFZh%jFaM$pFTXhiMXB-Z%hk-$dFbDJZ$mMx-TFwW$oz$mtTRTQw$1ZoS2Jt%ll%$DA9"
                  }), "_blank", "noopener=yes,noreferrer=yes");
                } else {
                  window.dispatchEvent(docxShortcutFeatureDetection.createCustomEvent("ModalManagerOpenModal", {
                    detail: {
                      modalName: "GLOBAL_SETTINGS",
                      modalProps: {
                        source: "homepage",
                        highlightAnimatedKey: "enable_text_indent"
                      }
                    }
                  }));
                }
                n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_toast_click", {
                  target: "space_personal_info_setting_view",
                  toast_reason: "un_support_first_line_indent_toast",
                  view_show_position: "above_block"
                });
              },
              children: t("CreationDoc_Docs_LinktoEnableIndent_Button")
            })]
          });
          N.toast_reason = "un_support_first_line_indent_toast";
          let {
            userId: B
          } = userEnvironmentUtils.getUserInfo();
          (function (e) {
            let n = platformDocUtils.p5T(e);
            let r = new Set();
            r.add(n);
            let o = localStorageUtils.getStorageObject(O);
            if (Array.isArray(o) && o.length < 20) {
              o.forEach(e => r.add(e));
            }
            localStorageUtils.setStorageItem(O, JSON.stringify(Array.from(r)));
          })(B);
          break;
        case A.NO_PREV_SIBLING:
        case A.PREV_SIBLING_IS_NOT_NESTABLE:
        case A.CAN_NOT_INDENT:
          {
            let e = n.getBlockModelByBlockId(r);
            let {
              parent: l
            } = e;
            let d = docBlockDepthUtil.getBlockDepth(e);
            if (!l) {
              N.toast_reason = "un_support_tab_can_not_tab_brother_toast";
              v = t("CreationDoc_Docs_Indent_Unable");
              break;
            }
            let f = l.children.findIndex(e => e.id === r);
            if (f <= 0 || translationSuffixCheck.isTranslationMatch(n, e.previousSibling?.recordId || "")) {
              N.toast_reason = d === 1 ? "un_support_tab_can_not_tab_brother_toast" : "un_support_muilt_tab_toast";
              v = d === 1 ? t("CreationDoc_Docs_Indent_Unable") : t("CreationDoc_Docs_Indent_MaxOneLevel");
              break;
            }
            let h = docxBlockUtils_1.getBlockTypeDisplayName(l.children[f - 1]?.type);
            let _ = [];
            let T = platformDocUtils.HiA.getLanguage();
            let y = ", ";
            if (T.startsWith("zh")) {
              y = "、";
            }
            let O = "";
            let S = 0;
            while (S <= 3) {
              let c = f - 1 - S++;
              let s = l.children[c];
              if (!s) {
                break;
              }
              if (docxBlockValidatorUtils_1.isListBlockType(s.type)) {
                if (o === "web_menu_panel") {
                  v = t("CreationDoc_Docs_Toolbar_IndentNotSupported", undefined, undefined, O, dataProcessor.processData(_).join(y));
                } else {
                  v = t("CreationDoc_Docs_IndentNotSupported_PressTabAgain", undefined, undefined, dataProcessor.processData(_).join(y));
                  blockStateManager.blockStateStore().set({
                    prevBrotherBlockIds: L,
                    blockId: r,
                    showingTips: true
                  });
                }
                if (i) {
                  a = () => {
                    let e = L.reduce((e, r) => {
                      let o = n.getBlockViewByBlockIdNotCheck(r);
                      if (o) {
                        e.push(o);
                      }
                      return e;
                    }, []);
                    blockFlashEnhancementManager.flashBlocks(e);
                  };
                }
                N.toast_reason = "un_support_tab_can_tab_brother_toast";
                N.up_brother_block_type = _.join(",");
                C = true;
                break;
              }
              let d = function (e, n) {
                let r = n.getBlockModelByBlockIdNotCheck(e);
                let o = e;
                if ((r == null ? undefined : r.type) === docBlockTypeConstants.blockTypeConstants.VIEW) {
                  o = r.children[0]?.id;
                }
                let l = o ? n.getBlockModelByBlockIdNotCheck(o) : null;
                if (!l) {
                  return "";
                }
                let {
                  type: c
                } = l;
                if (c === docBlockTypeConstants.blockTypeConstants.ISV) {
                  return l.getText().replace(/(\[|\])/g, "") || t("doc.isv.common_title");
                } else {
                  return docBlockTypeLabels.blockTypeLabels[c];
                }
              }(s.id, n);
              if (d) {
                L.push(s.id);
                _.push(d);
                O ||= d;
              } else {
                n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
                  action: "no_find_previous_block_name_in_indent_tips",
                  info: JSON.stringify({
                    curBlock: {
                      id: r,
                      position: f,
                      type: e.type
                    },
                    preBlock: {
                      id: s.id,
                      position: c,
                      type: s.type
                    }
                  })
                });
              }
            }
            if (!C) {
              N.toast_reason = "un_support_tab_can_not_tab_brother_toast";
              v = t("CreationDoc_Docs_Indent_UnableUnderneath", undefined, undefined, h);
            }
            break;
          }
        default:
          v = "";
          T = false;
      }
      return {
        tips: v,
        showTips: T,
        animationCallback: a,
        hasListBlockUpper: C,
        prevBrotherBlockIds: L,
        collectorParams: N
      };
    }(r, n, o, i, v);
    if (N && v) {
      try {
        let e;
        let r = n.getBlockViewByBlockId(o).hostElement.firstElementChild;
        if (r == null ? undefined : r.classList.contains("docx-block-zero-space")) {
          r = r.nextElementSibling;
        }
        if (r == null ? undefined : r.classList.contains("author-host")) {
          (e = r).classList.add("is-in-indent-animation");
          r = r.nextElementSibling;
        }
        if (r == null ? undefined : r.querySelector(".author-line-extend")) {
          if (r != null) {
            r.classList.add("animation-indent--author--line--extend");
          }
        }
        if (r && !r.classList.contains("animation-indent--right")) {
          r.classList.add("animation-indent--right");
          L = true;
          let i = () => {
            r.classList.remove("animation-indent--right");
            r.classList.remove("animation-indent--author--line--extend");
            if (e != null) {
              e.classList.remove("is-in-indent-animation");
            }
            r.removeEventListener("animationend", l);
            n.removeListener(blockTipsConstants.blockTipsClosed, c);
          };
          let l = () => {
            i();
            n.dispatch(blockTipsConstants.showBlockTips, [o, N]);
            if (P != null) {
              P();
            }
          };
          let c = e => {
            if (e === o) {
              i();
            }
          };
          n.addListener(blockTipsConstants.blockTipsClosed, c);
          r.addEventListener("animationend", l);
        }
      } catch (e) {}
    }
    if (T && M.toast_reason) {
      n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_toast_view", M);
    }
    if (a && N && !L) {
      n.dispatch(blockTipsConstants.showBlockTips, [o, N]);
    }
    return {
      tips: N,
      showTips: B,
      collectorParams: M,
      prevBrotherBlockIds: w,
      hasListBlockUpper: D
    };
  }
  function K() {
    return localStorage.getItem("text_indent_enable") !== "close";
  }
  require.d(exports, {
    IndentErrorTypes: function () {
      return A;
    },
    IndentSourceTypes: function () {
      return x;
    },
    validateIndentOperation: function () {
      return U;
    },
    checkListBlockAbove: function () {
      return L;
    },
    getIndentResult: function () {
      return N;
    },
    showIndentTips: function () {
      return G;
    },
    isTextIndentEnabled: function () {
      return H;
    },
    isBlockIndentable: function () {
      return M;
    }
  });
}