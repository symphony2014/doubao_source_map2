// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'organizeToolboxMenuItems'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 114844
         */
module.exports = function (module, exports, require) {
  var l;
  var n;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var asyncToolboxMenuItemsHookRegistrar = require("async-toolbox-menu-items-hook-registrar") /*id: 349217*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  var docxEditorBlockMetadataUtils = require("docx-editor-block-metadata-utils") /*id: 501598*/;
  var docxEditorMenuConstants = require("docx-editor-menu-constants") /*id: 121350*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var docComponentConfigUtils = require("doc-component-config-utils") /*id: 123085*/;
  var docxBlockTypeConstants_1 = require("docx-block-type-constants_1") /*id: 928355*/;
  var docxBlockUtils_1 = require("docx-block-utils_1") /*id: 138224*/;
  var docHostTypeChecker = require("doc-host-type-checker") /*id: 713546*/;
  var docSyncedBlockUtils = require("doc-synced-block-utils") /*id: 478237*/;
  var syncedReferenceBlockUtils = require("synced-reference-block-utils") /*id: 262712*/;
  var docxSyncHighlightFlag = require("docx-sync-highlight-flag") /*id: 537285*/;
  var docxBlockSelectionHandler_1 = require("docx-block-selection-handler_1") /*id: 801350*/;
  var docAnchorCollabUtilities = require("doc-anchor-collab-utilities") /*id: 762610*/;
  require("editor-translation-check") /*id: 518289*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  function Z(e, r, o) {
    if (!docxFeatureFlags.isWEnabled()) {
      return !!docxFeatureFlags.isAlwaysFalseX() && !e && docAnchorCollabUtilities.isCollabAvailable() && !syncedReferenceBlockUtils.isSyncedReferenceBlock(o.editorAPI) && !docComponentConfigUtils.getDocComponentConfig("extensions.toolbar.shareTextLink.disable");
    }
    return !!docxFeatureFlags.isAlwaysFalseX() && docAnchorCollabUtilities.isCollabAvailable() && function (e, r) {
      let o = true;
      let l = true;
      let n = e.length === 1 && docSyncedBlockUtils.isBlockSyncedSource(e[0].id, r) || docSyncedBlockUtils.isValidTwoBlockSelection(e, r);
      for (let n of e) {
        let e = r.getBlockViewByBlockIdNotCheck(n.id);
        if (!e) {
          continue;
        }
        let a = e.type;
        let i = n.type;
        o &&= docxBlockUtils_1.hasParentOfBlockType(n.id, r, docxBlockTypeConstants_1.emptyBlockTypes);
        l &&= docxBlockTypeConstants_1.disabledBlockTypes.some(e => a === e && i === docxBlockSelectionHandler_1.blockTypes.TEXT);
      }
      return !n && !o && !l;
    }(r, o) && !docHostTypeChecker.isSheetHost(o.config) && !docComponentConfigUtils.getDocComponentConfig("extensions.toolbar.shareTextLink.disable");
  }
  docBlockTypeConstants.blockTypeConstants.OKR;
  docBlockTypeConstants.blockTypeConstants.AGENDA;
  [...docBlockTypeConstants.quoteBlockTypes, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, docBlockTypeConstants.blockTypeConstants.IMAGE, docBlockTypeConstants.blockTypeConstants.TASK];
  docBlockTypeConstants.blockTypeConstants.CODE;
  var docBlockEventTracker = require("doc-block-event-tracker") /*id: 497225*/;
  var docEditorActionMap = require("doc-editor-action-map") /*id: 987175*/;
  var docBlockConstants = require("doc-block-constants") /*id: 159072*/;
  var docNetworkStateCollector = require("doc-network-state-collector") /*id: 193991*/;
  var docxEditorActionIcons = require("docx-editor-action-icons") /*id: 336076*/;
  var universalButtonWrapper = require("universal-button-wrapper") /*id: 299462*/;
  var modalService = require("modal-service") /*id: 192713*/;
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var fileTypeConstants = require("file-type-constants") /*id: 276005*/;
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var appConfigInitializer = require("app-config-initializer") /*id: 321601*/;
  var docTokenHelperUtils = require("doc-token-helper-utils") /*id: 740758*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var anchorConstantsConfig = require("anchor-constants-config") /*id: 302634*/;
  var i18nLocaleProvider = require("i18n-locale-provider") /*id: 692994*/;
  var docxInputComponent = require("docx-input-component") /*id: 173351*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var $ = reactLoadableComponent;
  async function W(e) {
    let {
      default: r
    } = await require.e("ud_LW_picker") /*id: 43427*/.then(require.bind(require, "lark-picker-i18n-translations") /*id: 933293*/);
    return r[e].LWPicker || r["en-US"].LWPicker || r[e] || r["en-US"];
  }
  async function K(e) {
    let {
      default: r
    } = await require.e("ud_picker_panel") /*id: 11294*/.then(require.bind(require, "picker-panel-locale-data") /*id: 55650*/);
    return r[e].PickerPanel || r["en-US"].PickerPanel || r[e] || r["en-US"];
  }
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let X = $({
    loader: () => Promise.all([require.e("ui-tooltip-components") /*id: 20536*/, require.e("auth-api-core-sdk") /*id: 72263*/, require.e("error-codes-enums") /*id: 39444*/, require.e("lark-network-protocol") /*id: 58832*/, require.e("docx_send_to_chat") /*id: 82045*/]).then(require.bind(require, "docx-send-to-chat-module") /*id: 660264*/),
    loading: () => null,
    render: (e, r) => {
      let o = e.ChatPickerWithoutLang;
      return reactJsxRuntimeCoreReexport.jsx(o, {
        ...r
      });
    }
  });
  let z = $({
    loader: () => require.e("ud_picker_panel") /*id: 11294*/.then(require.bind(require, "ud-picker-panel-components") /*id: 335750*/),
    loading: () => null,
    render: (e, r) => {
      let {
        PickerPanelDialog: o
      } = e;
      setTimeout(() => {
        let e = document.querySelector(".larkw-picker-panel__picker .ud__native-input");
        if (e != null) {
          e.focus();
        }
      }, 500);
      return reactJsxRuntimeCoreReexport.jsx(i18nLocaleProvider.I18nLocaleProvider, {
        locale: platformDocUtils.HiA.getLocale(),
        onUpdate: async e => e.locale ? {
          lang: {
            LWPicker: await W(e.locale),
            PickerPanel: await K(e.locale)
          }
        } : {},
        children: reactJsxRuntimeCoreReexport.jsx(o, {
          ...r,
          dialogClassName: "picker-panel-dialog-narrow"
        })
      });
    }
  });
  class q extends reactCoreLibraryReexport.Component {
    componentDidCatch(e, r) {
      var o;
      var l;
      if ((o = (l = this.props).errorHandle) !== null && o !== undefined) {
        o.call(l);
      }
    }
    render() {
      if (this.state.hasError) {
        return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
      } else {
        return this.props.children;
      }
    }
    constructor(e) {
      super(e);
      this.state = {
        hasError: false
      };
    }
  }
  function J(e) {
    let {
      onClose: r,
      onConfirm: o,
      errorHandle: l
    } = e.modalProps;
    let [n, a] = reactCoreLibraryReexport.useState(true);
    let [i, c] = reactCoreLibraryReexport.useState(false);
    let s = reactCoreLibraryReexport.useRef("");
    let d = async e => {
      c(true);
      await o(e, s.current);
      c(false);
    };
    let u = e => "chatType" in e;
    return reactJsxRuntimeCoreReexport.jsx(q, {
      errorHandle: l,
      children: reactJsxRuntimeCoreReexport.jsx(z, {
        className: "send-im-dialog",
        visible: n,
        title: t("LarkCCM_Docs_FwdSectionTo_Title"),
        picker: reactJsxRuntimeCoreReexport.jsx(X, {
          getDisableState: e => {
            if (u(e.entity)) {
              if (e.entity.p2pchatter?.type === 2) {
                return {
                  disable: true
                };
              }
            }
            return null;
          },
          maxSelectedCount: 10,
          externalEnable: true
        }),
        trailingSlot: reactJsxRuntimeCoreReexport.jsxs("div", {
          children: [reactJsxRuntimeCoreReexport.jsx(docxInputComponent.InputComponent, {
            placeholder: t("Bitable_ShareSingleRecord_AddNotes_Placeholder"),
            onChange: e => {
              s.current = e.target?.value || "";
            }
          }), reactJsxRuntimeCoreReexport.jsx("input", {
            autoFocus: true,
            style: {
              width: 0,
              height: 0,
              border: 0
            }
          })]
        }),
        primaryButton: {
          onClick: d,
          text: t("LarkCCM_Docx_Board_Icons_Tooltip_Send"),
          isLoading: i
        },
        onActionClose: () => {
          a(false);
          r();
        }
      })
    });
  }
  let Q = "JUMP_TO_IM_TOAST";
  let ee = "SEND_ERROR_TOAST";
  (l = et || {}).SUCCESS = "send_to_chat_success";
  l.FAIL = "send_to_chat_failed";
  var et = l;
  (n = er || {}).JUMP = "jump_to_chat";
  n.RETRY = "click_retry";
  var er = n;
  let eo = () => {
    modalService.modalService.closeModal("send-to-im-chat-picker");
  };
  let el = e => "chatType" in e;
  let en = e => {
    toastNotificationManager_1.toastManager.show({
      key: ee,
      type: "error",
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "toast-confirm",
        children: [reactJsxRuntimeCoreReexport.jsx("p", {
          className: "toast-text",
          children: t("LarkCCM_Interaction_Cmt_NotSent_Header")
        }), reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
          className: "toast-button",
          type: "text",
          color: "danger",
          onClick: () => {
            docxEventCollector.wrappedCollector("ccm_docs_toast_click", {
              click: er.RETRY,
              target: "none",
              sub_view: "send_to_chat_failed"
            });
            toastNotificationManager_1.toastManager.remove(ee);
            e();
          },
          children: t("LarkCCM_Docs_FwdSection_TryAgain_Button")
        })]
      }),
      className: "jump-to-im-toast",
      duration: 3000,
      closable: false
    });
  };
  function ea(e, r) {
    let o;
    if (e || !r) {
      o = e ? r ? "share_to_chat_success" : et.SUCCESS : et.FAIL;
      docxEventCollector.wrappedCollector("ccm_docs_toast_view", {
        sub_view: o
      });
    }
  }
  let ei = (e, r) => {
    toastNotificationManager_1.toastManager.show({
      key: Q,
      type: "success",
      content: reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "toast-confirm",
        children: [reactJsxRuntimeCoreReexport.jsx("p", {
          className: "toast-text",
          children: t("LarkCCM_Docs_FwdSection_Forwarded_Toast")
        }), reactJsxRuntimeCoreReexport.jsx(universalButtonWrapper.UniversalButton, {
          className: "toast-button",
          type: "text",
          color: "primary",
          onClick: () => {
            docxEventCollector.wrappedCollector("ccm_docs_toast_click", {
              click: er.JUMP,
              target: "none",
              sub_view: r ? "share_to_chat_success" : "send_to_chat_success"
            });
            toastNotificationManager_1.toastManager.remove(Q);
            platformDocUtils.WBr(e);
          },
          children: t("LarkCCM_Docs_FwdSection_ViewInChats_Link")
        })]
      }),
      className: "jump-to-im-toast",
      duration: 3000,
      closable: false
    });
  };
  let ec = async e => {
    let {
      blockId: r,
      blockManager: o,
      selectedBlocks: l,
      owners: n,
      imText: a,
      subtype: i = anchorConstantsConfig.anchorType.normalAnchor,
      anchor: c,
      retryAction: d,
      isTextShareLinkOpt: u
    } = e;
    let p = i === anchorConstantsConfig.anchorType.textCardAnchor;
    let h = c;
    if (!docxSyncHighlightFlag.getDocxSyncHighlight()) {
      h = syncedReferenceBlockUtils.getSyncedReferencePageId(o.editorAPI) || h;
    }
    if (!c) {
      let e = o.getBlockViewByBlockId(r);
      h = await docNetworkStateCollector.collectNetworkState.createRangeAnchor(e.record.id, false, l);
    }
    let m = "";
    let f = docTokenHelperUtils.resolveDocToken();
    let v = fileTypeConstants.BasicFileType.DOCX;
    let _ = n[0].id;
    if (syncUrlBlockUtils.isSyncingActive()) {
      f = syncUrlBlockUtils.getUrlToken();
      v = fileTypeConstants.BasicFileType.SYNCED;
    }
    let g = platformDocUtils.pEP();
    if (g) {
      f = g;
      m = platformDocUtils.o0s.formatQuery(throttledPathFilterStringify.throttledPathStr(platformDocUtils.o0s.parseQuery(window.location.search), [platformDocUtils.BvL.VERSION_PAGE]));
    }
    try {
      let e = await function (e) {
        var r;
        let {
          token: o,
          owners: l,
          fileType: n,
          lark_im_text: a,
          lark_im_rich_text_elements: i,
          query: c,
          isTextShareLinkOpt: d
        } = e;
        let u = l.map(e => {
          let {
            ownerId: r,
            ownerType: o,
            channel_id: l,
            is_thread_topic: n
          } = e;
          if (o === 3) {
            return {
              target_id: r,
              target_type: o,
              channel_id: l,
              is_thread_topic: n
            };
          } else {
            return {
              target_id: r,
              target_type: o
            };
          }
        });
        r = {
          token: o,
          obj_type: n,
          target: u,
          remark: a,
          rich_text_elements: i,
          query: c,
          is_share: d
        };
        return platformDocUtils.WY0({
          url: "/api/platform/notice/share_doc",
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          data: r
        });
      }({
        token: f,
        owners: n,
        fileType: v,
        isTextShareLinkOpt: u,
        query: `${m}#${h}`,
        ...(typeof a == "string" ? {
          lark_im_text: a
        } : {
          lark_im_rich_text_elements: a
        })
      });
      if (e.code === 0) {
        ea(true, p);
        ei(_, p);
      }
    } catch (e) {
      ea(false, p);
      en(d);
    }
  };
  async function es(e, r, o, l) {
    await appConfigInitializer.initAppConfig();
    return modalService.modalService.openModal("send-to-im-chat-picker", {
      onClose: eo,
      onConfirm: (n, a) => ec({
        blockId: e,
        blockManager: r,
        selectedBlocks: o,
        owners: n.reduce((e, r) => {
          if (el(r.entity)) {
            if (r.entity.p2pchatter) {
              e.push({
                ownerId: r.entity.p2pchatter?.id || "",
                ownerType: 1,
                id: r.entity.id
              });
            } else {
              e.push({
                ownerId: r.entity.id,
                ownerType: 2,
                id: r.entity.id
              });
            }
          } else {
            e.push({
              id: r.entity.id
            });
          }
          return e;
        }, []),
        imText: a,
        anchor: l,
        retryAction: () => es(e, r, o, l)
      })
    }, J);
  }
  var copyAnchorLinkAction = require("copy-anchor-link-action") /*id: 957321*/;
  function eu(e, r, o) {
    let {
      selectionAPI: n,
      blocks: i,
      blockManager: c
    } = e;
    let s = n.getSelection();
    let u = i[0].id || s[0]?.id;
    let p = c.getBlockViewByBlockIdNotCheck(u);
    if (p) {
      return {
        name: "sendToIm",
        key: editorConstantsEnums.BlockTypes.SendToIm,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.Comment
        },
        text: o ? t("LarkCCM_Docs_FwdSection_SendToChat_Menu") : undefined,
        closeAfterClick: true,
        icon: docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.ShareLink],
        tip: o ? undefined : t("LarkCCM_Docs_FwdSection_SendToChat_Menu"),
        action: async (e, o) => {
          var l;
          var n;
          docBlockEventTracker.handleBlockClick(docEditorActionMap.actionConstants.send_to_chat, p, c, {
            triggerType: docBlockConstants.selectionModes.HOVER_RIGHT
          });
          let a = p.record.id;
          l = r == null ? undefined : r.panelType;
          n = i.length;
          if (docAnchorCollabUtilities.isCollabAvailable() && copyAnchorLinkAction.getCopyLinkIcon(l) && (l !== editorUiComponentConstants.uiComponentTypes.BlockMenu || n !== 1)) {
            let e = docNetworkStateCollector.collectNetworkState.createRangeAnchor(p.record.id, false, s);
            a = await e;
          }
          return await es(u, c, s, a);
        }
      };
    } else {
      return null;
    }
  }
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  let em = e => e.selectionAPI.getSelection().reduce((e, r) => {
    let {
      type: o,
      selection: l
    } = r;
    if (o === docxBlockSelectionHandler_1.blockTypes.TEXT && l) {
      return e + l.end - l.start;
    } else {
      return e;
    }
  }, 0);
  var ef = (e, r) => {
    let o = [];
    docComponentFeatureFlags.isBlockShareOff();
    if (!docxFeatureFlags.isWEnabled() && Z(r == null ? undefined : r.isPageTitle, e.selectionAPI.getSelection(), e.blockManager)) {
      let l = eu(e, r, true);
      if (l) {
        o.push(l);
        o.push({
          name: "share link divider",
          type: editorConstantsEnums.MenuItemTypes.Divider,
          canSelected: false
        });
      }
    }
    if (o[o.length - 1].type === editorConstantsEnums.MenuItemTypes.Divider) {
      o.pop();
    }
    return [{
      ...docxEditorMenuConstants.moreMenuItemConfig,
      className: "panel-submenu-item",
      closeAfterClick: true,
      children: o,
      menuProps: {
        forbiddenInactiveOnMouseLeave: true,
        className: "docx-toolbar-more-menu"
      },
      onHover: l => {
        let {
          blockManager: n,
          blocks: a
        } = e;
        if (a.length > 0) {
          let i = a[0].id;
          let c = {
            is_more_menu: "true"
          };
          if ((r == null ? undefined : r.panelType) === editorUiComponentConstants.uiComponentTypes.TextualToolbar) {
            c.sub_view_type = JSON.stringify(o.map(e => e.name));
            c.underline_words = em(e);
          }
          n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageView(`ccm_doc_${l}_view`, docxEditorBlockMetadataUtils.getThrottledBlockPath(i, n), c);
        }
      }
    }];
  };
  function ev(e, r) {
    return null;
  }
  var docxSlashCommandMenuUtils = require("docx-slash-command-menu-utils") /*id: 856066*/;
  var docxToolboxItemGrouper = require("docx-toolbox-item-grouper") /*id: 942452*/;
  var styleSetOutlinedIcon = require("style-set-outlined-icon") /*id: 236586*/;
  var colorRgbUtils = require("color-rgb-utils") /*id: 194090*/;
  var uiActionConstants = require("ui-action-constants") /*id: 824909*/;
  var docCalloutThemeColors = require("doc-callout-theme-colors") /*id: 113049*/;
  var docCalloutColorThemes = require("doc-callout-color-themes") /*id: 309297*/;
  var calloutBlockUtils = require("callout-block-utils") /*id: 662420*/;
  var replaceOutlinedIcon = require("replace-outlined-icon") /*id: 351256*/;
  var themeColorManagerFacade = require("theme-color-manager-facade") /*id: 552375*/;
  var uiThemeConstants = require("ui-theme-constants") /*id: 541237*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var eB = classnamesUtils;
  var svgIconComponent_1 = require("svg-icon-component_1") /*id: 143316*/;
  var colorTooltipProvider = require("color-tooltip-provider") /*id: 32256*/;
  var eL = e => {
    let {
      type: r,
      colorType: o,
      valueColor: l,
      panelColor: n,
      onColorChange: a,
      selected: i
    } = e;
    let c = r === docCalloutColorThemes.colorTypeKeys.TextColor;
    let s = o === docCalloutColorThemes.colorNames.Default || o === docCalloutColorThemes.colorOptions.Default;
    let d = c ? {
      fill: n
    } : {
      backgroundColor: n
    };
    return reactJsxRuntimeCoreReexport.jsx(colorTooltipProvider.ColorTooltipProvider, {
      type: r,
      colorType: o,
      children: reactJsxRuntimeCoreReexport.jsx("button", {
        className: eB("callout-highlight-btn", {
          selected: i,
          text: c,
          default: s
        }),
        onClick: () => a(l, r),
        children: c ? reactJsxRuntimeCoreReexport.jsx(svgIconComponent_1.SvgIcon, {
          style: d
        }) : reactJsxRuntimeCoreReexport.jsx("div", {
          style: d,
          className: "highlight-bg"
        })
      })
    });
  };
  var eO = e => {
    let {
      onColorChange: r,
      handleReset: o,
      handleRandom: l,
      colorInfo: n
    } = e;
    let a = (e, r) => reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
      children: [reactJsxRuntimeCoreReexport.jsx("p", {
        className: "group-title",
        children: e
      }), reactJsxRuntimeCoreReexport.jsx("div", {
        className: "highlight-menu-group",
        children: r
      })]
    });
    let i = (e, r) => {
      let o = colorRgbUtils.compareColors(n[r], e) || r === "border_color" && colorRgbUtils.compareColors(n[r], calloutBlockUtils.getCalloutBorder(e));
      if (o) {
        docCalloutColorThemes.colorTypeKeys.BackgroundColor;
      }
      return o;
    };
    let c = (e, o, l) => {
      let n = [];
      e.forEach((e, a) => {
        n.push(reactJsxRuntimeCoreReexport.jsx(eL, {
          type: l,
          colorType: a,
          valueColor: e,
          panelColor: o.get(a),
          selected: i(e, l),
          onColorChange: r
        }, e));
      });
      return n;
    };
    let s = c(themeColorManagerFacade.getThemeRgbMap(docCalloutColorThemes.colorTypeKeys.TextColor), themeColorManagerFacade.getThemeColorByKey(uiThemeConstants.completeTheme.Text), docCalloutColorThemes.colorTypeKeys.TextColor);
    let d = a(t("doc.highlight_menu.text_color"), s);
    let u = c(themeColorManagerFacade.getThemeRgbMap(docCalloutColorThemes.colorTypeKeys.BackgroundColor), themeColorManagerFacade.getThemeColorByKey(uiThemeConstants.completeTheme.PanelBackground), docCalloutColorThemes.colorTypeKeys.BackgroundColor);
    let p = a(t("CreationDoc_Docs_CalloutBlock_FillColor_Title"), u);
    let h = c(themeColorManagerFacade.getThemeRgbMap(docCalloutColorThemes.colorTypeKeys.Border).light, themeColorManagerFacade.getThemeColorByKey(uiThemeConstants.completeTheme.PanelBorder), docCalloutColorThemes.colorTypeKeys.Border);
    let m = a(t("CreationDoc_Docs_CalloutBlock_BorderColor_Title"), h);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      className: "callout-highlight-panel",
      children: [d, m, p, reactJsxRuntimeCoreReexport.jsxs("div", {
        onClick: l,
        className: "random",
        children: [reactJsxRuntimeCoreReexport.jsx(replaceOutlinedIcon.ReplaceOutlined, {}), " ", t("CreationDoc_Docs_DocCover_Random_Tab")]
      }), reactJsxRuntimeCoreReexport.jsx("button", {
        className: "callout-clear-highlight",
        onClick: o,
        children: t("CreationDoc_Docs_CalloutBlock_Reset_Button")
      })]
    });
  };
  var downloadIconComponent = require("download-icon-component") /*id: 593570*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var docAttachmentDownloadHandler = require("doc-attachment-download-handler") /*id: 214182*/;
  var fileUtilsAndViewHelpers = require("file-utils-and-view-helpers") /*id: 192103*/;
  var fileBlockActionManager = require("file-block-action-manager") /*id: 715663*/;
  var eP = e => {
    let r = e.blocks[0];
    let {
      token: o
    } = r.record.snapshot.file;
    if (fileUtilsAndViewHelpers.isEmptyString(o)) {
      return null;
    }
    let l = fileBlockActionManager.getBlockActionFlags(o, e.blockManager);
    let n = docActionManager.getActionStatus(l, docActionManager.actionTypes.EXPORT);
    if (n.visible) {
      return {
        name: "download",
        key: editorConstantsEnums.BlockTypes.Download,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.CreateNoOps
        },
        tip: n.disabledTips || t("common.download_file"),
        forceShowTip: true,
        closeAfterClick: true,
        disabled: n.disabled,
        icon: reactJsxRuntimeCoreReexport.jsx(downloadIconComponent.DownloadIcon, {}),
        action: async () => {
          docAttachmentDownloadHandler.downloadDocAttachment(r.model, r.previewResultCode);
        }
      };
    } else {
      return null;
    }
  };
  var authorRenderer = require("author-renderer") /*id: 937435*/;
  var titleViewOutlinedIcon = require("title-view-outlined-icon") /*id: 213555*/;
  var viewVideoOutlinedIcon = require("view-video-outlined-icon") /*id: 934101*/;
  var previewViewOutlinedIcon = require("preview-view-outlined-icon") /*id: 943695*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  var editorZoneRangeUtils = require("editor-zone-range-utils") /*id: 53719*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var docInlineComponentUtils = require("doc-inline-component-utils") /*id: 595942*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var viewTypeConstants = require("view-type-constants") /*id: 676077*/;
  var documentViewUtils = require("document-view-utils") /*id: 83122*/;
  var docxCommentUtils = require("docx-comment-utils") /*id: 668699*/;
  var docxEditorHoverManager = require("docx-editor-hover-manager") /*id: 803365*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  var editorRevisionUtilities = require("editor-revision-utilities") /*id: 80308*/;
  let e2 = [docBlockTypeConstants.blockTypeConstants.CALLOUT];
  let e5 = [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE];
  var e4 = e => {
    var r;
    let {
      blocks: o,
      blockManager: l
    } = e;
    let [n] = o;
    let a = n.parentId && l.hasBlockViewByBlockId(n.parentId) && l.getBlockViewByBlockId(n.parentId);
    if (!a || (r = a, !editorTextBlockUtilities.isEditorInstance(r) && !e8(a.model)) || docxBlockUtils_1.hasParentOfBlockType(a.id, l, e2) || docxBlockUtils_1.hasParentOfBlockType(n.id, l, e5)) {
      return [];
    }
    let i = n.getViewTypeToolBarList && n.getViewTypeToolBarList();
    if (!(i == null ? undefined : i.length)) {
      return [];
    }
    let c = {
      block: n,
      parentBlock: a,
      blockManager: l
    };
    return i.map(e => {
      var r;
      var o;
      var l;
      switch (e) {
        case viewTypeConstants.viewTypes.Inline:
          r = c;
          return {
            name: "inline view",
            aliasName: "threeStateSwitch",
            type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
            extra: {
              behavior: editorConstantsEnums.EditorActions.InlineView
            },
            tip: t("block.editbar.inline_view"),
            active: e6(r, viewTypeConstants.viewTypes.Inline),
            closeAfterClick: true,
            icon: reactJsxRuntimeCoreReexport.jsx(titleViewOutlinedIcon.TitleViewOutlined, {}),
            action: () => function (e) {
              let {
                block: r,
                parentBlock: o,
                blockManager: l
              } = e;
              if (r.props.displaymode !== viewTypeConstants.viewTypes.Inline) {
                e.blockManager.dispatch(docxEditorHoverManager.resetHoverEvent);
                (function (e, r, o) {
                  let a = {
                    [displayTypeConstants.displayInlineBlock]: e.record.id,
                    [authorRenderer.AuthorRenderer.KEY]: userEnvironmentUtils.getUserInfo().userId || ""
                  };
                  let i = {};
                  let c = e.record.snapshot?.comments || [];
                  let s = e.record.snapshot?.revisions || [];
                  let d = editorRevisionUtilities.mapRevsToAttrs(s);
                  c.forEach(e => {
                    i[`flow-comment-id-${e}`] = "true";
                  });
                  o.applyTransaction("transformBlockToInlineBlock", l => {
                    let n = (r.model.type === docBlockTypeConstants.blockTypeConstants.VIEW ? r : e).model;
                    documentBlockOperations.removeBlockItems(l, [n]);
                    if (c.length > 0) {
                      l.replace(e.model.recordId, ["comments"], []);
                    }
                    if (s.length > 0) {
                      l.replace(e.model.recordId, ["revisions"], []);
                    }
                    let u = editorDataManagerClass.EditorDataManager.deserializePlainText(" ");
                    u = editorDataManagerClass.EditorDataManager.addMark(u, [{
                      mark: {
                        ...a,
                        ...i,
                        ...d
                      },
                      range: [0, 1]
                    }]);
                    let p = o.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT, {
                      text: u,
                      comments: c,
                      align: e.record.snapshot.align || ""
                    });
                    editorTextBlockUtilities.insertBlockWithMarks(l, n.parent.record.id, n.position, p);
                  });
                })(r, o, l);
              }
            }(r)
          };
        case viewTypeConstants.viewTypes.Card:
          o = c;
          return {
            name: "card view",
            aliasName: "threeStateSwitch",
            type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
            extra: {
              behavior: editorConstantsEnums.EditorActions.CardView
            },
            tip: t("block.editbar.card_view"),
            active: e6(o, viewTypeConstants.viewTypes.Card),
            closeAfterClick: true,
            icon: reactJsxRuntimeCoreReexport.jsx(viewVideoOutlinedIcon.ViewVideoOutlinedIcon, {}),
            action: () => e7(o, viewTypeConstants.viewTypes.Card)
          };
        case viewTypeConstants.viewTypes.Preview:
          l = c;
          return {
            name: "preview view",
            aliasName: "threeStateSwitch",
            type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
            extra: {
              behavior: editorConstantsEnums.EditorActions.PreviewView
            },
            tip: t("block.editbar.preview_view"),
            active: e6(l, viewTypeConstants.viewTypes.Preview),
            closeAfterClick: true,
            icon: reactJsxRuntimeCoreReexport.jsx(previewViewOutlinedIcon.PreviewViewOutlined, {}),
            action: () => e7(l, viewTypeConstants.viewTypes.Preview)
          };
      }
      return null;
    });
  };
  function e3(e) {
    var r;
    if (e8(e.model.parent)) {
      return e.props.viewType;
    } else {
      return e.props.displaymode || ((r = e.getViewType) === null || r === undefined ? undefined : r.call(e));
    }
  }
  function e6(e, r) {
    let {
      block: o
    } = e;
    return e3(o) === r;
  }
  function e7(e, r) {
    let {
      block: o,
      parentBlock: l,
      blockManager: n
    } = e;
    let a = e3(o);
    if (a !== r) {
      var i;
      e.blockManager.dispatch(docxEditorHoverManager.resetHoverEvent);
      if (e8(l.model)) {
        e9(l, r, n);
      } else if (a !== viewTypeConstants.viewTypes.Inline) {
        (function (e, r) {
          let {
            parent: o
          } = e;
          if (o && o.type !== docBlockTypeConstants.blockTypeConstants.VIEW && r !== viewTypeConstants.viewTypes.Inline) {
            e.dataService.applyTransaction("switchViewTypeOfBlockWithoutViewBlock", l => {
              let n = e.record.id;
              let a = o.record.id;
              l.remove(a, ["children", e.position]);
              let i = documentViewUtils.createViewNode(r);
              let c = documentBlockOperations.createSingleBlock(l, a, i);
              l.insert(a, ["children", e.position], c);
              l.insert(c, ["children", 0], n);
              l.replace(n, ["parent_id"], c);
            });
          }
        })(o.model, r);
      } else {
        i = l;
        if (editorTextBlockUtilities.isEditorInstance(i)) {
          (function (e, r) {
            let {
              block: o,
              parentBlock: l,
              blockManager: n
            } = e;
            n.applyTransaction("textBlockToViewBlock", e => {
              if ("editor" in l) {
                var i;
                let c = l.model;
                let s = c.parent;
                let {
                  zoneState: d
                } = l.model;
                let u = d.getModelText().length;
                let p = editorZoneRangeUtils.getConvertedRange(l, e => function (e, r) {
                  let l = docInlineComponentUtils.getComponentType(r);
                  return (l == null ? undefined : l.data?.source_block_id) === e || (r.mark || {})[displayTypeConstants.displayInlineBlock] === e;
                }(o.record.id, e));
                let h = d.pointToOffset(p.start) || 0;
                let m = d.pointToOffset(p.end) || 0;
                let [f, v] = d.split([h, m]);
                let _ = editorDataManagerClass.EditorDataManager.getPlainText(f.toAttributeText()).length > 0;
                let g = editorDataManagerClass.EditorDataManager.getPlainText(v.toAttributeText()).length > 0;
                let b = c.children.length > 0;
                if (_) {
                  let r = d.pointToOffset(p.start);
                  let o = d.remove([r || 0, u - 1]).toAttributeText();
                  e.replace(l.record.id, ["text"], o);
                } else {
                  documentBlockOperations.removeBlockItems(e, [c]);
                }
                let C = c.type === docBlockTypeConstants.blockTypeConstants.PAGE ? c.recordId : s.recordId;
                let x = c.type === docBlockTypeConstants.blockTypeConstants.PAGE ? 0 : _ ? c.position + 1 : c.position;
                let [w] = documentBlockOperations.insertNewChildren(e, C, x, [documentViewUtils.createViewNode(r, o.record.id)]);
                e.replace(o.record.id, ["parent_id"], w);
                let T = docxCommentUtils.getCommentIdsFromAttributes(d, p);
                let Z = docxCommentUtils.isSyncedCell(l.model.snapshot);
                let y = Array.from(new Set([...((o == null ? undefined : (i = o.record) === null || i === undefined ? undefined : i.snapshot?.comments) || []), ...T, ...Z].filter(e => !docxCommentUtils.getCommentsWithoutHighlight(e))));
                e.replace(o.record.id, ["comments"], y);
                let E = editorRevisionUtilities.getRevisionAttrs(d, p);
                e.replace(o.record.id, ["revisions"], E);
                e.replace(o.record.id, ["align"], l.record.snapshot.align || "");
                if (g) {
                  let r = d.offsetToPoint(d.totalWidth());
                  let o = d.slice(p.end, r).toAttributeText();
                  editorTextBlockUtilities.insertBlockWithMarks(e, C, x + 1, n.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT, {
                    text: o
                  }));
                }
                if (c.type !== docBlockTypeConstants.blockTypeConstants.PAGE && b) {
                  let r = c.position + 1;
                  if (_) {
                    r++;
                  }
                  if (g) {
                    r++;
                  }
                  let o = c.children.map(e => e.record.id);
                  documentBlockOperations.moveChildren(e, s.record.id, r, o);
                  e.removeChildren(c.record.id, o);
                }
              }
            });
          })(e, r);
        }
      }
    }
  }
  async function e9(e, r, o) {
    await o.applyTransaction("switchViewBlockViewType", o => {
      o.replace(e.record.id, ["view_type"], r);
      o.replace(e.record.id, ["author"], userEnvironmentUtils.getUserInfo().userId);
    });
  }
  function e8(e) {
    return e.type === viewTypeConstants.viewTypeName;
  }
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var to = ["prefixId"];
  function tl(e) {
    e.prefixId;
    var r = objectOmitHelper_1.omitWithSymbols(e, to);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, r), reactCoreLibraryReexport.createElement("path", {
      d: "M9 2a1 1 0 0 1 0 2H5.414l5.293 5.293a1 1 0 0 1-1.414 1.414L4 5.414V9a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1h6Zm6 20a1 1 0 1 1 0-2h3.586l-5.293-5.293a1 1 0 0 1 1.414-1.414L20 18.586V15a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6Z",
      fill: "currentColor"
    }));
  }
  var tn = reactCoreLibraryReexport.forwardRef(function (e, r) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: tl
    }, e, {
      ref: r,
      svgProps: {
        "data-icon": "MagnifyLeftOutlined"
      }
    }));
  });
  var docxViewConfigConstants = require("docx-view-config-constants") /*id: 725976*/;
  var docxAnchorServiceHelper = require("docx-anchor-service-helper") /*id: 574470*/;
  var tc = e => {
    let {
      blocks: l,
      blockManager: n
    } = e;
    let [a] = l;
    if (a.type !== docxViewConfigConstants.viewTypeFile || !a.shouldShowFullScreenIcon()) {
      return null;
    }
    let i = a.record.snapshot;
    let c = i == null ? undefined : i.file?.name;
    if (!fileUtilsAndViewHelpers.isSupportedFormat(c) || fileUtilsAndViewHelpers.isEmptyString(i == null ? undefined : i.file?.token)) {
      return null;
    } else {
      return {
        name: "fullscreen",
        key: editorConstantsEnums.BlockTypes.Fullscreen,
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.CreateNoOps
        },
        tip: t("viewer.toolbar.fullscreen"),
        closeAfterClick: true,
        icon: reactJsxRuntimeCoreReexport.jsx(tn, {
          style: {
            transform: "rotate(90deg)"
          }
        }),
        action: () => {
          if (docxAnchorServiceHelper.isImchatSyncedBlock()) {
            docxAnchorServiceHelper.getAndTrackAnchor(n, a);
            return;
          }
          let e = n.getBlockViewByBlockId(a.id);
          if (e) {
            e.previewFile();
          }
        }
      };
    }
  };
  function ts(e) {
    return e && e.length > 0 && e.some(e => !!e);
  }
  let td = (e, r) => {
    let o = tc(e);
    return [o, eP(e, r)].filter(e => e);
  };
  var languageOutlinedIcon = require("language-outlined-icon") /*id: 285685*/;
  var clipboardUtils = require("clipboard-utils") /*id: 411076*/;
  var th = (e, r) => {
    let {
      blocks: o,
      blockManager: l
    } = e;
    let n = o[0];
    let a = l.config.get("revising");
    let i = !!(r == null ? undefined : r.editable) && !a;
    return {
      name: "copy origin link",
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.CreateNoOps
      },
      closeAfterClick: true,
      text: i ? t("LarkCCM_Docs_InsertLink_CopyToOriginal_Menu") : undefined,
      tip: i ? undefined : t("LarkCCM_Docs_InsertLink_CopyToOriginal_Tooltip"),
      icon: reactJsxRuntimeCoreReexport.jsx(languageOutlinedIcon.LanguageOutlined, {}),
      action: () => {
        let e = n.getOriginalUrl();
        clipboardUtils.copyWithToast(e, t("LarkCCM_DocxIM_SharePart_Copied_Toast"));
        docBlockEventTracker.handleBlockClick(docEditorActionMap.actionConstants.copy_source_web_link, n, l);
      }
    };
  };
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var docxAiMenuComponent = require("docx-ai-menu-component") /*id: 604848*/;
  var docxAiMenuUtils = require("docx-ai-menu-utils") /*id: 154715*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var filterNonMinutesLinkDisplayOptions = require("filter-non-minutes-link-display-options") /*id: 441051*/;
  var promiseTimeoutWrapper = require("promise-timeout-wrapper") /*id: 612247*/;
  var tC = () => ({
    name: "divider",
    type: editorConstantsEnums.MenuItemTypes.Divider,
    canSelected: false
  });
  var docBlockViewUtils = require("doc-block-view-utils") /*id: 521101*/;
  var docUrlExtractUtils = require("doc-url-extract-utils") /*id: 846285*/;
  var linkTypeConstants = require("link-type-constants") /*id: 539813*/;
  var documentNodeFactoryWrapper_1 = require("document-node-factory-wrapper_1") /*id: 677433*/;
  var linkPastePanelUtils = require("link-paste-panel-utils") /*id: 474492*/;
  var linkPastePanelTypes = require("link-paste-panel-types") /*id: 546196*/;
  var bookmarkLinkMetadataProcessor = require("bookmark-link-metadata-processor") /*id: 249075*/;
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  var documentLinkUtilities = require("document-link-utilities") /*id: 61891*/;
  function tA(e, r, o, l = {
    retainAlign: false
  }) {
    let {
      retainAlign: n
    } = l;
    documentBlockOperations.removeBlockItems(e, [r]);
    let a = r.record.snapshot.comments || [];
    let i = r.record.snapshot.revisions || [];
    let c = {
      ...o,
      comments: a,
      revisions: i,
      ...(n ? {
        align: r.record.snapshot.align
      } : {})
    };
    let s = r.parent.recordId;
    let {
      position: d
    } = r;
    let [u] = documentBlockOperations.insertNewChildren(e, s, d, [c]);
    return u;
  }
  var documentBlockDeltaOps = require("document-block-delta-ops") /*id: 18066*/;
  function tL(e) {
    let {
      snapshot: {
        iframe: r
      }
    } = e;
    let {
      component: {
        original_text: o,
        url: l
      }
    } = r;
    return {
      url: l,
      originalUrl: decodeURIComponent(o),
      originalText: o
    };
  }
  async function tO(e, r) {
    let o;
    let {
      model: l
    } = r;
    let {
      originalUrl: n
    } = tL(l);
    await e.applyTransaction("transformIframeToNormalLink", r => {
      o = documentBlockDeltaOps.convertToTextBlock(e, r, l, n);
    });
    return o;
  }
  async function tN(e, r) {
    let o;
    let {
      model: l
    } = r;
    let {
      originalUrl: n
    } = tL(l);
    let a = await linkPastePanelUtils.fetchLinkMetadata(n, linkPastePanelTypes.linkPasteTypes.Title);
    if (!e.hasBlockModelByBlockId(l.id)) {
      return;
    }
    let i = bookmarkLinkMetadataProcessor.getBookmarkTitle(n, a);
    documentLinkUtilities.collectLinkDebug("transform_iframe_to_smartLink_hyperlink", n);
    await e.applyTransaction("transformIframeToSmartLink", r => {
      o = documentBlockDeltaOps.convertToTextBlock(e, r, l, i, {
        [clientsideLinkConstants_1.linkType]: encodeURIComponent(n)
      });
    });
    return o;
  }
  async function tR(e, r) {
    let o;
    let {
      model: l
    } = r;
    let {
      originalUrl: n
    } = tL(l);
    await e.applyTransaction("transformIframeToBookmark", e => {
      o = tA(e, l, documentNodeFactoryWrapper_1.createDocumentNodeWithDefaults({
        bookmark: {
          url: n
        }
      }), {
        retainAlign: false
      });
    });
    if (o) {
      linkPastePanelUtils.updateBookmarkInfo(e, o, n);
    }
    return o;
  }
  var tj = e => {
    let {
      block: r
    } = e;
    let {
      blockManager: o
    } = r;
    return {
      name: linkTypeConstants.linkConstants.toCard,
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.InsertBlock
      },
      closeAfterClick: true,
      text: t("LarkCCM_Docs_InsertLink_DisplayAs_Card_Menu"),
      icon: reactJsxRuntimeCoreReexport.jsx(viewVideoOutlinedIcon.ViewVideoOutlinedIcon, {}),
      active: r.type === docBlockTypeConstants.blockTypeConstants.BOOKMARK,
      action: () => {
        if (r.type === docBlockTypeConstants.blockTypeConstants.IFRAME) {
          tR(o, r);
          docBlockEventTracker.handleBlockClick(uiActionConstants.actionIdentifiers.threeStateSwitch, r, o, {
            actionValue: {
              value1: "card view"
            },
            triggerType: docBlockConstants.selectionModes.SELECT_WHOLE
          });
        }
      }
    };
  };
  var globalLinkOutlinedIcon = require("global-link-outlined-icon") /*id: 70621*/;
  var documentNodeUtils_1 = require("document-node-utils_1") /*id: 759829*/;
  var iframeLinkEmbedHandler = require("iframe-link-embed-handler") /*id: 14207*/;
  function tH(e) {
    let {
      bookmark: {
        url: r,
        title: o
      }
    } = e.snapshot;
    return {
      url: r,
      title: o
    };
  }
  async function tG(e, r) {
    let o;
    let {
      model: l
    } = r;
    let {
      url: n
    } = tH(l);
    await e.applyTransaction("transformBookmarkToNormalLink", r => {
      o = documentBlockDeltaOps.convertToTextBlock(e, r, l, n);
    });
    return o;
  }
  async function tV(e, r) {
    let o;
    let {
      model: l
    } = r;
    let {
      url: n,
      title: a
    } = tH(l);
    let i = await linkPastePanelUtils.fetchLinkMetadata(n, linkPastePanelTypes.linkPasteTypes.Title);
    if (!e.hasBlockModelByBlockId(l.id)) {
      return;
    }
    let c = bookmarkLinkMetadataProcessor.getBookmarkTitle(n, i, a);
    documentLinkUtilities.collectLinkDebug("transform_bookmark_to_smartLink_hyperlink", n);
    await e.applyTransaction("transformBookmarkToSmartLink", r => {
      o = documentBlockDeltaOps.convertToTextBlock(e, r, l, c, {
        [clientsideLinkConstants_1.linkType]: encodeURIComponent(n)
      });
    });
    return o;
  }
  async function tF(e, r) {
    let o;
    let {
      model: l
    } = r;
    let {
      url: n
    } = tH(l);
    let a = await documentNodeUtils_1.getDocNodeAsync(n, e, iframeLinkEmbedHandler.createIframeSnapshot, l.id);
    if (a) {
      await e.applyTransaction("transformBookmarkToIframe", e => {
        o = tA(e, l, a, {
          retainAlign: false
        });
      });
      return o;
    }
  }
  var tU = e => {
    let {
      block: r
    } = e;
    let {
      blockManager: o
    } = r;
    return {
      name: linkTypeConstants.linkConstants.toLink,
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.InsertBlock
      },
      closeAfterClick: true,
      text: t("LarkCCM_Docs_InsertLink_DisplayAs_Link_Menu"),
      icon: reactJsxRuntimeCoreReexport.jsx(globalLinkOutlinedIcon.GlobalLinkOutlined, {}),
      action: () => {
        if (r.type === docBlockTypeConstants.blockTypeConstants.BOOKMARK) {
          tG(o, r);
        } else {
          tO(o, r);
        }
        docBlockEventTracker.handleBlockClick(uiActionConstants.actionIdentifiers.threeStateSwitch, r, o, {
          actionValue: {
            value1: "url view"
          },
          triggerType: docBlockConstants.selectionModes.SELECT_WHOLE
        });
      }
    };
  };
  var t$ = e => {
    let {
      block: r
    } = e;
    let {
      blockManager: o
    } = r;
    return {
      name: linkTypeConstants.linkConstants.toPreview,
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.InsertBlock
      },
      closeAfterClick: true,
      text: t("LarkCCM_Docs_InsertLink_DisplayAs_Preview_Menu"),
      icon: reactJsxRuntimeCoreReexport.jsx(previewViewOutlinedIcon.PreviewViewOutlined, {}),
      active: r.type === docBlockTypeConstants.blockTypeConstants.IFRAME,
      disabled: docComponentFeatureFlags.isImchatSyncedBlk(),
      tip: docComponentFeatureFlags.isImchatSyncedBlk() && t("LarkCCM_Docs_SyncBlock_LinkPreviewNA_Tooltip"),
      forceShowTip: docComponentFeatureFlags.isImchatSyncedBlk(),
      action: () => {
        if (r.type === docBlockTypeConstants.blockTypeConstants.BOOKMARK) {
          tF(o, r);
          docBlockEventTracker.handleBlockClick(uiActionConstants.actionIdentifiers.threeStateSwitch, r, o, {
            actionValue: {
              value1: "preview view"
            },
            triggerType: docBlockConstants.selectionModes.SELECT_WHOLE
          });
        }
      }
    };
  };
  var tW = e => {
    let {
      block: r
    } = e;
    let {
      blockManager: o
    } = r;
    return {
      name: linkTypeConstants.linkConstants.toTitle,
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.InsertBlock
      },
      closeAfterClick: true,
      text: t("LarkCCM_Docs_InsertLink_DisplayAs_Title_Menu"),
      icon: reactJsxRuntimeCoreReexport.jsx(titleViewOutlinedIcon.TitleViewOutlined, {}),
      action: () => {
        if (r.type === docBlockTypeConstants.blockTypeConstants.BOOKMARK) {
          tV(o, r);
        } else {
          tN(o, r);
        }
        docBlockEventTracker.handleBlockClick(uiActionConstants.actionIdentifiers.threeStateSwitch, r, o, {
          actionValue: {
            value1: "inline view"
          },
          triggerType: docBlockConstants.selectionModes.SELECT_WHOLE
        });
      }
    };
  };
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  let tY = (e, r) => {
    var o;
    var l;
    var a;
    var i;
    var c;
    if (r) {
      let r = ((c = e.record) === null || c === undefined ? undefined : (i = c.snapshot) === null || i === undefined ? undefined : (a = i.iframe) === null || a === undefined ? undefined : a.component?.original_text) || "";
      return docUrlProcessingUtilities.decodeUrlComponent(r);
    }
    return ((l = e.record) === null || l === undefined ? undefined : (o = l.snapshot) === null || o === undefined ? undefined : o.bookmark.url) || "";
  };
  let tX = e => {
    let {
      block: r,
      isIframeBlock: o
    } = e;
    let l = tY(r, o);
    let [n, a] = reactCoreLibraryReexport.useState(o);
    let [i, c] = reactCoreLibraryReexport.useState(o);
    let s = async () => {
      if (i) {
        return;
      }
      let e = docUrlExtractUtils.checkUrlExtraction(decodeURIComponent(l));
      promiseTimeoutWrapper.withTimeout(e, {
        timeout: docUrlExtractUtils.defaultTimeout,
        onTimeout: () => {
          c(true);
        },
        onResolve: (e, r) => {
          if (e.isCanIframeExtract) {
            a(e.isCanIframeExtract);
            c(true);
          } else if (!r) {
            c(true);
          }
        }
      });
    };
    reactCoreLibraryReexport.useEffect(() => {
      s();
    }, []);
    let d = reactCoreLibraryReexport.useCallback((e, r) => {
      if (docxAiMenuUtils.hasAction(e)) {
        e.action(r, e);
      }
    }, [r.blockManager]);
    if (!i) {
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
    }
    let u = tU({
      block: r
    });
    let p = tW({
      block: r
    });
    let h = tj({
      block: r
    });
    let m = t$({
      block: r
    });
    let f = filterNonMinutesLinkDisplayOptions.filterNonMinutesLinkOptions(l, n ? [u, p, h, m] : [u, p, h]);
    return reactJsxRuntimeCoreReexport.jsx(docxAiMenuComponent.DocxAiMenu, {
      selectionAPI: r.selectionAPI,
      block: r,
      blockManager: r.blockManager,
      items: f,
      onItemClick: d,
      keyboard: false,
      vertical: false
    });
  };
  function tz(e, {
    isAppend: r
  } = {}) {
    if (!networkStateEventCollector.collectNetworkState() || !docxFeatureFlags.isMfEnabled()) {
      return [];
    }
    let {
      blocks: o
    } = e;
    let l = docBlockViewUtils.getBlockEdge(o, r);
    let n = l.type === "iframe";
    let a = n ? reactJsxRuntimeCoreReexport.jsx(previewViewOutlinedIcon.PreviewViewOutlined, {}) : reactJsxRuntimeCoreReexport.jsx(viewVideoOutlinedIcon.ViewVideoOutlinedIcon, {});
    let i = n ? t("LarkCCM_Docs_InsertLink_DisplayAs_Preview_Menu") : t("LarkCCM_Docs_InsertLink_DisplayAs_Card_Menu");
    let c = {
      name: "link convert",
      className: "panel-submenu-item menu-item-compact",
      type: editorConstantsEnums.MenuItemTypes.SubmenuItemWithComponent,
      extra: {
        behavior: editorConstantsEnums.EditorActions.DisplaySubMenu
      },
      submenuDefaultDirection: uiLayoutPositionEnums.positionAlignTypes.BottomLeft,
      notShowArrow: false,
      text: i,
      onHover: () => null,
      hotAreaOnlyArrow: false,
      icon: a,
      component: e => reactJsxRuntimeCoreReexport.jsx(tX, {
        ...e,
        block: l,
        isIframeBlock: n
      })
    };
    if (n) {
      return [tC(), c];
    } else {
      return [c];
    }
  }
  var browserMacOutlinedIcon = require("browser-mac-outlined-icon") /*id: 857143*/;
  var flowDocEventCollector = require("flow-doc-event-collector") /*id: 276732*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var driveUrlValidationUtilities = require("drive-url-validation-utilities") /*id: 262405*/;
  var t1 = e => {
    let r = e.blocks[0];
    return {
      name: "redirect",
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.CreateNoOps
      },
      tip: t("CreationDoc_Docs_WebBookmark_Open_Tooltip"),
      closeAfterClick: true,
      icon: reactJsxRuntimeCoreReexport.jsx(browserMacOutlinedIcon.BrowserMacOutlined, {}),
      action: () => {
        let e = r.getOriginalUrl();
        let o = driveUrlValidationUtilities.isValidMinutesUrl(e);
        docUrlProcessingUtilities.openUrlWithPlatform(e, "_blank", o);
        if (o && !browserEnvironmentDetectionUtils.browserDetector.isFeed) {
          flowDocEventCollector.collectEvent("link_clicked", {
            scene: "ccm_docs",
            location: "ccm_docs",
            location_from: "ai_minutes"
          });
        }
      }
    };
  };
  var refreshOutlinedIconComponent = require("refresh-outlined-icon-component") /*id: 480319*/;
  var t5 = e => {
    let r = e.blocks[0];
    return {
      name: "refresh",
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.CreateNoOps
      },
      closeAfterClick: true,
      tip: t("CreationDoc_Docs_WebBookmark_Refresh_Tooltip"),
      icon: reactJsxRuntimeCoreReexport.jsx(refreshOutlinedIconComponent.RefreshOutlinedIcon, {}),
      action: () => {
        r.refreshIframe();
      }
    };
  };
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var captionEditorConstants = require("caption-editor-constants") /*id: 287236*/;
  var t6 = e => {
    let {
      record: {
        id: r
      },
      blockManager: o,
      selectionAPI: l,
      contentElement: n,
      captionInstance: i,
      captionTooltip: c,
      captionToolbarClick: s,
      captionActionName: u
    } = e.blocks[0];
    if ((n == null ? undefined : n.getBoundingClientRect()) && i) {
      return {
        name: u || "caption",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.Caption
        },
        active: i.active,
        icon: docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.Caption],
        tip: c || "",
        forceShowTip: true,
        action: async (n, a, i) => {
          if (s != null) {
            s();
          }
          objectPathGetDefault.getObjectPathDefault(o, "eventEmitter").emit(captionEditorConstants.activateCaptionEvt, r);
          docEditorActionMap.collectBlockEvent({
            target: "none",
            selectionAPI: l,
            blocks: e.blocks,
            blockManager: o,
            source: docEditorActionMap.uiComponentTypes.web_text_bubble_toolbar,
            actionType: docEditorActionMap.actionConstants.caption
          });
        }
      };
    } else {
      return null;
    }
  };
  var docxImageUtils = require("docx-image-utils") /*id: 164286*/;
  var docxEditorAlignmentIndentMenu = require("docx-editor-alignment-indent-menu") /*id: 869372*/;
  var docxEditorConstants = require("docx-editor-constants") /*id: 708986*/;
  var imageCropControllerToken_1 = require("image-crop-controller-token_1") /*id: 673650*/;
  var imageOperationServiceProvider = require("image-operation-service-provider") /*id: 713630*/;
  var docxEditorImageCropUtils = require("docx-editor-image-crop-utils") /*id: 304247*/;
  var ro = e => {
    let {
      record: {
        id: r,
        snapshot: o
      },
      model: l,
      contentElement: n,
      hostElement: i,
      blockManager: c,
      selectionAPI: s
    } = e.blocks[0];
    let u = c.editorAPI.getService(imageOperationServiceProvider.imageOpServiceName);
    let p = u.isImageCropping(r);
    let h = n == null ? undefined : n.getBoundingClientRect();
    if (!h) {
      return null;
    }
    let m = (() => {
      if (p) {
        return false;
      }
      let {
        width: e,
        height: r
      } = h;
      let {
        width: l,
        height: n
      } = docxEditorImageCropUtils.calculateCroppedDimensions(o.image, {
        width: e,
        height: r
      });
      return [l, n, docxEditorImageCropUtils.calculateCroppedWidth(i.getBoundingClientRect().width, o.image.crop)].some(e => Number(e.toFixed(0)) < docxEditorConstants.editorMinSize);
    })();
    return {
      name: "Crop",
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.ImageCrop
      },
      active: p,
      disabled: m,
      icon: docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.ImageCrop],
      tip: m ? t("LarkCCM_Docx_Image_CropGrayed_Tooltip") : p ? t("LarkCCM_Docx_Image_Apply_Tooltip") : t("LarkCCM_Docx_Image_Cut_Tooltip"),
      forceShowTip: true,
      action: async (r, o, n) => {
        let a = null;
        try {
          a = await c.editorAPI.getService(imageCropControllerToken_1.imageCropCtrlToken, {
            async: true
          });
        } catch (e) {
          c.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("doc_bug_track_dev", {
            action: "image_crop_service_load_failed"
          });
        }
        if (a) {
          if (p) {
            a.submitCrop(true);
            return;
          }
          if (!p && u.hasImageCropping()) {
            a.submitCrop(false);
          }
          a.enterCrop(l);
          docEditorActionMap.collectBlockEvent({
            target: "ccm_doc_image_crop_view",
            selectionAPI: s,
            blocks: e.blocks,
            blockManager: c,
            source: docEditorActionMap.uiComponentTypes.web_text_bubble_toolbar,
            actionType: docEditorActionMap.actionConstants.crop
          });
        }
      }
    };
  };
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var docxEditorPaddingUtils = require("docx-editor-padding-utils") /*id: 656664*/;
  async function ra(e, r) {
    await e.applyTransaction("image:reset", e => {
      e.replace(r.record.id, ["image", "crop"], docxEditorConstants.editorPadding);
    });
  }
  var ri = e => {
    let {
      blockManager: r,
      blocks: o
    } = e;
    let {
      model: l
    } = o[0];
    let n = r.editorAPI.getService(imageOperationServiceProvider.imageOpServiceName);
    let i = n.isImageCropping(l.recordId);
    if (!i && !docxEditorPaddingUtils.isPaddingPartial(l.snapshot.image.crop) || i && deepEqualUtil_1.deepEqual(n.imageResetCroppingData$.getValue(), docxEditorConstants.editorPadding)) {
      return null;
    } else {
      return {
        name: "Reset",
        type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
        extra: {
          behavior: editorConstantsEnums.EditorActions.ImageReset
        },
        disabled: false,
        icon: docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.ImageReset],
        tip: t("LarkCCM_Docx_Image_Crop_Reset_Tooltip"),
        action: async (l, n, a) => {
          let c = await r.editorAPI.getService(imageCropControllerToken_1.imageCropCtrlToken, {
            async: true
          });
          ra(r, o[0].model);
          if (i) {
            c.exitCrop();
          }
          e.selectionAPI.setSelection([]);
        }
      };
    }
  };
  function rc(e, r = {}) {
    let {
      blocks: o,
      blockManager: l
    } = e;
    let n = docxEditorAlignmentIndentMenu.getAlignmentAndIndentMenuItems(e, r);
    let a = ro(e);
    let i = ri(e);
    let c = t6(e);
    let s = false;
    if (o.length === 1) {
      let e = o[0];
      let r = e.imageManager.canEditImageSelection(o);
      let n = fileBlockActionManager.getBlockActionFlags(e.snapshot.image.token, l);
      s = r && !!n.previewable;
    }
    let d = [s ? [a, i] : []].concat(docxImageUtils.checkIsQqEnabled() ? [[c]] : []).concat([n]).filter(e => !!e.filter(e => !!e).length);
    let u = [];
    d.forEach((e, r) => {
      u.push(...e);
      if (r < d.length - 1) {
        u.push(tC());
      }
    });
    return u;
  }
  let rs = [docBlockTypeConstants.blockTypeConstants.CALLOUT];
  let rd = [docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE];
  var ru = e => {
    let {
      blocks: r,
      blockManager: o
    } = e;
    let [l] = r;
    let n = l.parentId && o.hasBlockViewByBlockId(l.parentId) && o.getBlockViewByBlockId(l.parentId);
    if (!n || docxBlockUtils_1.hasParentOfBlockType(n.id, o, rs) || docxBlockUtils_1.hasParentOfBlockType(l.id, o, rd)) {
      return [];
    }
    let a = l.getViewTypeToolBarList && l.getViewTypeToolBarList();
    if (!(a == null ? undefined : a.length)) {
      return [];
    }
    let i = {
      block: l,
      parentBlock: n,
      blockManager: o
    };
    return a.map(e => {
      var r;
      var o;
      var l;
      switch (e) {
        case viewTypeConstants.viewTypes.Inline:
          r = i;
          return {
            name: "inline view",
            aliasName: "threeStateSwitch",
            type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
            extra: {
              behavior: editorConstantsEnums.EditorActions.InlineView
            },
            tip: t("block.editbar.inline_view"),
            active: rh(r, viewTypeConstants.viewTypes.Inline),
            closeAfterClick: true,
            icon: reactJsxRuntimeCoreReexport.jsx(titleViewOutlinedIcon.TitleViewOutlined, {}),
            action: () => function (e) {
              let {
                block: r,
                parentBlock: o,
                blockManager: l
              } = e;
              if (r.props.displaymode !== viewTypeConstants.viewTypes.Inline) {
                e.blockManager.dispatch(docxEditorHoverManager.resetHoverEvent);
                (function (e, r, o) {
                  let n = {
                    [displayTypeConstants.displayInlineBlock]: e.record.id,
                    [authorRenderer.AuthorRenderer.KEY]: userEnvironmentUtils.getUserInfo().userId || ""
                  };
                  let a = {};
                  let i = e.record.snapshot?.comments || [];
                  i.forEach(e => {
                    a[`comment-id-${e}`] = "true";
                  });
                  o.applyTransaction("transformBlockToInlineBlock", l => {
                    documentBlockOperations.removeBlockItems(l, [e.model]);
                    if (i.length > 0) {
                      l.replace(e.record.id, ["comments"], []);
                    }
                    let c = editorDataManagerClass.EditorDataManager.deserializePlainText(" ");
                    c = editorDataManagerClass.EditorDataManager.addMark(c, [{
                      mark: {
                        ...n,
                        ...a
                      },
                      range: [0, 1]
                    }]);
                    let s = o.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT, {
                      text: c,
                      comments: i,
                      align: e.record.snapshot.align || ""
                    });
                    editorTextBlockUtilities.insertBlockWithMarks(l, r.record.id, e.model.position, s);
                  });
                })(r, o, l);
              }
            }(r)
          };
        case viewTypeConstants.viewTypes.Card:
          o = i;
          return {
            name: "card view",
            aliasName: "threeStateSwitch",
            type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
            extra: {
              behavior: editorConstantsEnums.EditorActions.CardView
            },
            tip: t("block.editbar.card_view"),
            active: rh(o, viewTypeConstants.viewTypes.Card),
            closeAfterClick: true,
            icon: reactJsxRuntimeCoreReexport.jsx(viewVideoOutlinedIcon.ViewVideoOutlinedIcon, {}),
            action: () => rm(o, viewTypeConstants.viewTypes.Card)
          };
        case viewTypeConstants.viewTypes.Preview:
          l = i;
          return {
            name: "preview view",
            aliasName: "threeStateSwitch",
            type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
            extra: {
              behavior: editorConstantsEnums.EditorActions.PreviewView
            },
            tip: t("block.editbar.preview_view"),
            active: rh(l, viewTypeConstants.viewTypes.Preview),
            closeAfterClick: true,
            icon: reactJsxRuntimeCoreReexport.jsx(previewViewOutlinedIcon.PreviewViewOutlined, {}),
            action: () => rm(l, viewTypeConstants.viewTypes.Preview)
          };
      }
      return null;
    });
  };
  function rp(e) {
    var r;
    if (e.model.parent.type === viewTypeConstants.viewTypeName) {
      return e.props.viewType;
    } else {
      return e.props.displaymode || ((r = e.getViewType) === null || r === undefined ? undefined : r.call(e));
    }
  }
  function rh(e, r) {
    let {
      block: o
    } = e;
    return rp(o) === r;
  }
  function rm(e, r) {
    let {
      block: o,
      parentBlock: l
    } = e;
    let n = rp(o);
    if (n !== r) {
      var a;
      e.blockManager.dispatch(docxEditorHoverManager.resetHoverEvent);
      if (n !== viewTypeConstants.viewTypes.Inline) {
        (function (e, r) {
          e.dataService.applyTransaction("switchCardOrPreview", o => {
            o.replace(e.record.id, ["view_type"], r);
          });
        })(o.model, r);
      } else {
        a = l;
        if (editorTextBlockUtilities.isEditorInstance(a)) {
          (function (e, r) {
            let {
              block: o,
              parentBlock: l,
              blockManager: n
            } = e;
            n.applyTransaction("textBlockToViewBlock", e => {
              if ("editor" in l) {
                var i;
                let c = l.model;
                let s = c.parent;
                let {
                  zoneState: d
                } = l.model;
                let u = d.getModelText().length;
                let p = editorZoneRangeUtils.getConvertedRange(l, e => function (e, r) {
                  let o = docInlineComponentUtils.getComponentType(r);
                  return (o == null ? undefined : o.id) === e || (r.mark || {})[displayTypeConstants.displayInlineBlock] === e;
                }(o.record.id, e));
                let h = d.pointToOffset(p.start) || 0;
                let m = d.pointToOffset(p.end) || 0;
                let [f, v] = d.split([h, m]);
                let _ = editorDataManagerClass.EditorDataManager.getPlainText(f.toAttributeText()).length > 0;
                let g = editorDataManagerClass.EditorDataManager.getPlainText(v.toAttributeText()).length > 0;
                let b = c.children.length > 0;
                if (_) {
                  let r = d.pointToOffset(p.start);
                  let o = d.remove([r || 0, u - 1]).toAttributeText();
                  e.replace(l.record.id, ["text"], o);
                } else {
                  documentBlockOperations.removeBlockItems(e, [c]);
                }
                let C = c.type === docBlockTypeConstants.blockTypeConstants.PAGE ? c.recordId : s.recordId;
                let x = c.type === docBlockTypeConstants.blockTypeConstants.PAGE ? 0 : _ ? c.position + 1 : c.position;
                let w = function (e, r) {
                  if (r.start.zoneId !== e.getZoneId()) {
                    return [];
                  }
                  let o = e.getAttributes(r.start, r.end).toMap();
                  let l = new RegExp(/comment-id-(.*)/);
                  return Object.keys(o).reduce((e, r) => {
                    if (l.test(r)) {
                      let o = l.exec(r);
                      if (o && o[1]) {
                        e.push(o[1]);
                      }
                    }
                    return e;
                  }, []);
                }(d, p);
                let T = docxCommentUtils.isSyncedCell(l.model.snapshot);
                let Z = Array.from(new Set([...((o == null ? undefined : (i = o.record) === null || i === undefined ? undefined : i.snapshot?.comments) || []), ...w, ...T].filter(e => !docxCommentUtils.getCommentsWithoutHighlight(e))));
                e.replace(o.record.id, ["comments"], Z);
                e.replace(o.record.id, ["view_type"], r);
                e.replace(o.record.id, ["parent_id"], C);
                e.insertChildren(C, x, [o.record.id]);
                if (g) {
                  let r = d.offsetToPoint(d.totalWidth());
                  let o = d.slice(p.end, r).toAttributeText();
                  editorTextBlockUtilities.insertBlockWithMarks(e, C, x + 1, n.createSnapshot(docBlockTypeConstants.blockTypeConstants.TEXT, {
                    text: o
                  }));
                }
                if (c.type !== docBlockTypeConstants.blockTypeConstants.PAGE && b) {
                  let r = c.position + 1;
                  if (_) {
                    r++;
                  }
                  if (g) {
                    r++;
                  }
                  let o = c.children.map(e => e.record.id);
                  documentBlockOperations.moveChildren(e, C, r, o);
                  e.removeChildren(c.record.id, o);
                }
              }
            });
          })(e, r);
        }
      }
    }
  }
  var editorRevisingStateUtils = require("editor-revising-state-utils") /*id: 83085*/;
  var docxEditorEventConstantsAndManager = require("docx-editor-event-constants-and-manager") /*id: 267720*/;
  let r_ = new Map([[docBlockTypeConstants.blockTypeConstants.IMAGE, {
    editableBtns: [function (e, r) {
      return docxSlashCommandMenuUtils.filterValidMenuItems([rc], e, r);
    }],
    readonlyBtns: []
  }], [docBlockTypeConstants.blockTypeConstants.MERMAID, {
    editableBtns: [docxEditorAlignmentIndentMenu.getAlignmentAndIndentMenuItems],
    readonlyBtns: []
  }], [docBlockTypeConstants.blockTypeConstants.IFRAME, {
    editableBtns: [t5, t1, tz],
    editableMoreMenuVisible: docxFeatureFlags.isMfEnabled(),
    editableMoreSubmenuItems: docxFeatureFlags.isMfEnabled() ? [th] : [],
    readonlyBtns: [t5, t1].concat(docxFeatureFlags.isMfEnabled() ? [th] : [])
  }], [docBlockTypeConstants.blockTypeConstants.BOOKMARK, {
    editableBtns: [tz],
    editableMoreMenuVisible: docxFeatureFlags.isMfEnabled(),
    editableMoreSubmenuItems: docxFeatureFlags.isMfEnabled() ? [th] : [],
    readonlyBtns: docxFeatureFlags.isMfEnabled() ? [th] : []
  }], [docBlockTypeConstants.blockTypeConstants.FILE, {
    editableBtns: [(e, r) => {
      var l;
      let n = td(e, r);
      let a = e4(e);
      let i = (l = e.blocks[0]) === null || l === undefined ? undefined : l.model?.parent;
      if ((i == null ? undefined : i.type) === docBlockTypeConstants.blockTypeConstants.PAGE || (i == null ? undefined : i.type) === docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE) {
        return [...n];
      } else if (ts(n) && ts(a)) {
        return [...n, {
          name: "divider",
          type: editorConstantsEnums.MenuItemTypes.Divider,
          canSelected: false
        }, ...a];
      } else {
        return [...n, ...a];
      }
    }],
    readonlyBtns: [td]
  }], [docBlockTypeConstants.blockTypeConstants.CALLOUT, {
    editableBtns: [e => {
      let r = e.blocks[0];
      let {
        blockManager: o
      } = e;
      let {
        type: l,
        background_color: n,
        border_color: a,
        text_color: i
      } = r.snapshot;
      let c = {
        border_color: a,
        background_color: n,
        text_color: i
      };
      if (l !== docBlockTypeConstants.blockTypeConstants.CALLOUT) {
        return [];
      }
      let s = (e, r) => {
        let o = e.model.zoneState.length() - 1;
        let l = e.model.zoneState.getLine(o).length() - 1 || 0;
        let {
          zoneId: n
        } = e.model;
        e.model.toggleMark({
          textHighlight: r
        }, {
          start: {
            zoneId: n,
            line: 0,
            offset: 0
          },
          end: {
            zoneId: n,
            line: o,
            offset: l
          }
        });
      };
      let u = function (e = "") {
        calloutBlockUtils.iterateChildren(r, o, r => s(r, e));
      };
      let p = (e, l) => {
        if (c[l] === e || l === docCalloutColorThemes.colorTypeKeys.Border && colorRgbUtils.compareColors(c[l], calloutBlockUtils.getCalloutBorder(e))) {
          e = "";
        }
        docBlockEventTracker.handleBlockClick(l, r, o, {
          actionValue: {
            value1: docCalloutThemeColors.findThemeColor(l, e)
          }
        });
        r.onColorChange(l, e);
        c = {
          ...c,
          [l]: e
        };
        if (l === docCalloutColorThemes.colorTypeKeys.TextColor) {
          u(e);
        }
      };
      let h = () => {
        let e = calloutBlockUtils.getDefaultColors();
        c = e;
        r.setColorsAttrs(e);
        docBlockEventTracker.handleBlockClick(uiActionConstants.actionIdentifiers.clearColor, r, o);
        u();
      };
      let m = () => {
        let {
          border_color: e
        } = r.record.snapshot;
        let l = calloutBlockUtils.genCalloutColors({
          textColor: i,
          borderColor: e
        });
        docBlockEventTracker.handleBlockClick(uiActionConstants.actionIdentifiers.randomColor, r, o, {
          actionValue: {
            value1: docCalloutThemeColors.findThemeColor(docCalloutColorThemes.colorTypeKeys.TextColor, l.text_color),
            value2: docCalloutThemeColors.findThemeColor(docCalloutColorThemes.colorTypeKeys.Border, l.border_color),
            value3: docCalloutThemeColors.findThemeColor(docCalloutColorThemes.colorTypeKeys.BackgroundColor, l.background_color)
          }
        });
        c = l;
        r.setColorsAttrs(l);
      };
      return [{
        name: "callout-highlight",
        type: editorConstantsEnums.MenuItemTypes.SubmenuItemWithComponent,
        extra: {
          behavior: editorConstantsEnums.EditorActions.UpdateBlockHighlight
        },
        icon: reactJsxRuntimeCoreReexport.jsx(styleSetOutlinedIcon.StyleSetOutlined, {}),
        notShowArrow: true,
        className: "panel-submenu-item",
        component: () => reactJsxRuntimeCoreReexport.jsx(eO, {
          onColorChange: p,
          colorInfo: c,
          handleReset: h,
          handleRandom: m
        })
      }];
    }],
    readonlyBtns: []
  }], [docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER, {
    editableBtns: [],
    readonlyBtns: []
  }], [docBlockTypeConstants.blockTypeConstants.FOLDER_MANAGER, {
    editableBtns: [],
    readonlyBtns: []
  }], [docBlockTypeConstants.blockTypeConstants.URL_PREVIEW, {
    editableBtns: [e => ru(e)],
    readonlyBtns: []
  }]]);
  let rg = [{
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onOrganizeMenuItems,
    hookCallback: e => {
      let {
        res: r,
        context: o,
        panelType: l,
        options: n
      } = e;
      if (l === editorUiComponentConstants.uiComponentTypes.BlockToolbar) {
        r.toolboxGroups = function (e, r) {
          let {
            blocks: o,
            selectionAPI: l
          } = e;
          if (o.length === 0) {
            return [];
          }
          docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks = o.map(e => ({
            id: e.id,
            type: docxBlockSelectionHandler_1.blockTypes.BLOCK
          }));
          let {
            editableMoreMenuVisible: n = false
          } = r_.get(r.blockType) || {};
          let i = function (e, r, o) {
            let {
              editable: l,
              editPermission: n,
              revising: i
            } = r;
            let c = editorRevisingStateUtils.getBlockTypeStatus(e, !!l, !!n);
            let {
              blockManager: {
                config: s
              }
            } = o;
            let d = s.get("translated");
            let u = s.get("isUneditedTranslationMode");
            let p = i && docxEditorConstantsConfig_1.embeddableBlockTypes.includes(e);
            let h = d && docxEditorConstantsConfig_1.whiteboardBlockTypes.includes(e);
            return c && !u && !p && !h;
          }(r.blockType, r, e);
          let c = l.getSelection();
          let s = [docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER].includes(r.blockType) && r.blockType === docBlockTypeConstants.blockTypeConstants.QUOTE_CONTAINER || c.length > 1;
          let d = [];
          return docxToolboxItemGrouper.getToolboxGroups({
            context: e,
            options: {
              ...r,
              panelType: editorUiComponentConstants.uiComponentTypes.BlockToolbar
            },
            moreMenuVisible: n && i,
            useCalloutAndQuoteContainerGroupList: s,
            sort: (e, r) => (e.blockToolbarPriority || 0) - (r.blockToolbarPriority || 0),
            panelType: editorUiComponentConstants.uiComponentTypes.BlockToolbar
          });
        }(o, {
          ...n,
          panelType: l
        });
      }
    },
    options: {}
  }];
  var editOutlinedIcon = require("edit-outlined-icon") /*id: 33*/;
  var docEditorCommandConstants = require("doc-editor-command-constants") /*id: 293676*/;
  var keyboardShortcutHandlerResolver = require("keyboard-shortcut-handler-resolver") /*id: 848104*/;
  var featureConstantsTypes = require("feature-constants-types") /*id: 882886*/;
  var docsModeProviderToken = require("docs-mode-provider-token") /*id: 431030*/;
  var rk = e => {
    let r = e.blockManager.editorAPI.getService(docsModeProviderToken.docsModeProvider, {
      optional: true
    });
    return {
      name: "edit",
      type: editorConstantsEnums.MenuItemTypes.MenuItemNormal,
      extra: {
        behavior: editorConstantsEnums.EditorActions.CreateNoOps
      },
      tip: t("CreationDoc_ECM_Branch_ConvertTo", {}, "", `${t("LarkCCM_DocX_ViewMode_SwitchMode_editing")} (${keyboardShortcutHandlerResolver.formatShortcutDisplay(docEditorCommandConstants.switchToEditMode)})`),
      className: "edit-item",
      text: t("common.edit"),
      icon: reactJsxRuntimeCoreReexport.jsx(editOutlinedIcon.EditOutlinedIcon, {
        className: `${themeColorManagerFacade.menuIconClassName} color-i-500`
      }),
      action: () => {
        if (r != null) {
          r.switchToEditing(featureConstantsTypes.UiSources.TOOLBAR);
        }
      }
    };
  };
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  function ry(e, r, o) {
    let {
      editable: l,
      editPermission: n,
      revising: i
    } = r;
    let c = editorRevisingStateUtils.getBlockTypeStatus(e, !!l, !!n);
    let {
      blockManager: {
        config: s
      }
    } = o;
    let d = s.get("translated");
    let u = s.get("isUneditedTranslationMode");
    let p = i && docxEditorConstantsConfig_1.embeddableBlockTypes.includes(e);
    let h = d && docxEditorConstantsConfig_1.whiteboardBlockTypes.includes(e);
    return c && !u && !p && !h;
  }
  let rE = [{
    shouldBreak: e => {
      let {
        options: r,
        context: o
      } = e;
      if (r.panelType === editorUiComponentConstants.uiComponentTypes.TableCell) {
        let e = flowPermissionSettingSelectors.flowSelectorsHub.translate.selectTranslateStatus(reduxStoreInitializer.reduxStore.getState()).translated;
        return !!r.editable || !!e || !editorRevisingStateUtils.getBlockTypeStatus(r.blockType, !!r.editable, !!r.editPermission);
      }
      if (r.panelType === editorUiComponentConstants.uiComponentTypes.TextualToolbar || r.panelType === editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar) {
        let {
          blockManager: e
        } = o;
        let {
          config: r
        } = e;
        let l = flowPermissionSettingSelectors.flowSelectorsHub.translate.selectTranslateStatus(reduxStoreInitializer.reduxStore.getState()).translated;
        return !editorRevisingStateUtils.canShowRevising() || !!platformDocUtils.KNd() || !!l || !r.get("editPermission") || !!r.get("editable");
      }
      return false;
    },
    panelType: [editorUiComponentConstants.uiComponentTypes.TableCell, editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar],
    group: e => {
      var r;
      let {
        context: o,
        options: l
      } = e;
      return {
        key: editorUiComponentConstants.uiComponentConstants.Edit,
        groupName: "edit",
        children: (r = {
          ...l,
          category: editorUiComponentConstants.uiComponentConstants.Edit
        }, docxSlashCommandMenuUtils.filterValidMenuItems([rk], o, r))
      };
    },
    textualToolbarPriority: docxEditorConstantsConfig_1.textBlockToolbarMenuTypes.EDIT,
    tableCellToolbarPriority: docxEditorConstantsConfig_1.tablePopoverMenuTypes.EDIT
  }, {
    shouldBreak: e => {
      let {
        useCalloutAndQuoteContainerGroupList: r,
        options: o,
        moreMenuVisible: l,
        shareTextAndMoreVisible: n
      } = e;
      return true;
    },
    panelType: [editorUiComponentConstants.uiComponentTypes.TableCell, editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.BlockToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar],
    group: e => {
      let {
        context: r,
        options: o,
        shareTextAndMoreVisible: l
      } = e;
      if (o.panelType === editorUiComponentConstants.uiComponentTypes.BlockToolbar) {
        let e = [];
        let n = function (e, r) {
          let o = !docComponentFeatureFlags.isBlockShareOff();
          return docxSlashCommandMenuUtils.filterValidMenuItems([o ? copyAnchorLinkAction.createCopyAnchorLinkAction : null], e, r);
        }(r, {
          ...o,
          category: editorUiComponentConstants.uiComponentConstants.BlockShare,
          panelType: editorUiComponentConstants.uiComponentTypes.BlockToolbar,
          isSubmenu: true
        });
        e.push(...n);
        if (!docxFeatureFlags.isWEnabled() && l) {
          let l = eu(r, o, true);
          if (l) {
            e.push(l);
          }
        }
        let {
          editableMoreSubmenuItems: i = []
        } = r_.get(o.blockType) || {};
        if (ry(o.blockType, o, r) && i.length > 0) {
          let l = docxSlashCommandMenuUtils.filterValidMenuItems(i, r, {
            ...o,
            panelType: editorUiComponentConstants.uiComponentTypes.BlockToolbar,
            category: editorUiComponentConstants.uiComponentConstants.BlockToolbar
          });
          e.push(...l);
        }
        if (e.length > 0) {
          return {
            key: editorUiComponentConstants.uiComponentConstants.More,
            groupName: "more",
            children: [{
              name: "more",
              type: editorConstantsEnums.MenuItemTypes.SubmenuItemWithChildren,
              extra: {
                behavior: editorConstantsEnums.EditorActions.DisplaySubMenu
              },
              notShowArrow: true,
              className: "panel-submenu-item",
              closeAfterClick: true,
              icon: docxEditorActionIcons.editorActionIcons[docxEditorConstantsConfig_1.actionTypeConstants.TextMore],
              children: e
            }]
          };
        }
      } else {
        var n;
        return {
          key: editorUiComponentConstants.uiComponentConstants.More,
          groupName: "more",
          children: (n = {
            ...o,
            category: editorUiComponentConstants.uiComponentConstants.More
          }, docxSlashCommandMenuUtils.filterValidMenuItems([ef], r, n))
        };
      }
    },
    textualToolbarPriority: docxEditorConstantsConfig_1.textBlockToolbarMenuTypes.MORE,
    tableCellToolbarPriority: docxEditorConstantsConfig_1.tablePopoverMenuTypes.MORE,
    blockToolbarPriority: docxEditorConstantsConfig_1.blockToolbarMenuTypes.MORE
  }, {
    shouldBreak: e => {
      let {
        useCalloutAndQuoteContainerGroupList: r,
        options: o,
        context: l,
        shareTextAndMoreVisible: n
      } = e;
      return true;
    },
    panelType: [editorUiComponentConstants.uiComponentTypes.TableCell, editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar, editorUiComponentConstants.uiComponentTypes.BlockToolbar],
    group: e => {
      let {
        context: r,
        options: o
      } = e;
      return {
        key: editorUiComponentConstants.uiComponentConstants.Forward,
        groupName: "forward",
        noDivider: true,
        children: function (e, r) {
          let o = !docComponentFeatureFlags.isToolbarForwardOff();
          return docxSlashCommandMenuUtils.filterValidMenuItems([o ? eu : null], e, r);
        }(r, {
          ...o,
          category: editorUiComponentConstants.uiComponentConstants.Forward
        })
      };
    },
    textualToolbarPriority: docxEditorConstantsConfig_1.textBlockToolbarMenuTypes.FORWARD,
    tableCellToolbarPriority: docxEditorConstantsConfig_1.tablePopoverMenuTypes.FORWARD,
    blockToolbarPriority: docxEditorConstantsConfig_1.blockToolbarMenuTypes.FORWARD
  }, {
    shouldBreak: e => {
      let {
        useCalloutAndQuoteContainerGroupList: r
      } = e;
      return !!r;
    },
    panelType: [editorUiComponentConstants.uiComponentTypes.BlockToolbar],
    group: e => {
      let {
        context: r,
        options: o
      } = e;
      let l = docxSlashCommandMenuUtils.filterValidMenuItems(function (e, r, o) {
        let l = r_.get(e);
        if (l) {
          if (ry(e, r, o) && l.editableBtns) {
            return l.editableBtns;
          } else {
            return l.readonlyBtns || [];
          }
        } else {
          return [];
        }
      }(o.blockType, o, r), r, {
        ...o,
        panelType: o.panelType,
        category: editorUiComponentConstants.uiComponentConstants.BlockToolbar
      });
      return {
        key: editorUiComponentConstants.uiComponentConstants.BlockToolbar,
        groupName: "blockToolbar",
        children: l
      };
    },
    blockToolbarPriority: docxEditorConstantsConfig_1.blockToolbarMenuTypes.BLOCK_TOOLBAR
  }, {
    shouldBreak: e => {
      let {
        useCalloutAndQuoteContainerGroupList: r,
        options: o,
        context: l,
        shareTextAndMoreVisible: n
      } = e;
      if (o.panelType === editorUiComponentConstants.uiComponentTypes.BlockMenu) {
        let e = Z(o.isPageTitle, docxEditorEventConstantsAndManager.globalEditorState.selectedBlocks, l.blockManager);
        return !docxFeatureFlags.isWEnabled() || !e;
      }
      if (o.panelType === editorUiComponentConstants.uiComponentTypes.BlockToolbar) {
        return !!r || !n;
      } else {
        return (o.panelType === editorUiComponentConstants.uiComponentTypes.TableCell || o.panelType === editorUiComponentConstants.uiComponentTypes.TextualToolbar || o.panelType === editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar) && !Z(o.isPageTitle, l.selectionAPI.getSelection(), l.blockManager);
      }
    },
    panelType: [editorUiComponentConstants.uiComponentTypes.BlockMenu, editorUiComponentConstants.uiComponentTypes.TableCell, editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar, editorUiComponentConstants.uiComponentTypes.BlockToolbar],
    group: e => {
      var r;
      let {
        context: o,
        options: l
      } = e;
      return {
        key: editorUiComponentConstants.uiComponentConstants.ShareTextLink,
        groupName: editorUiComponentConstants.uiComponentConstants.ShareTextLink,
        noDivider: l.panelType !== editorUiComponentConstants.uiComponentTypes.BlockMenu,
        children: (r = {
          ...l,
          category: editorUiComponentConstants.uiComponentConstants.ShareTextLink
        }, docxSlashCommandMenuUtils.filterValidMenuItems([ev], o, r))
      };
    },
    textualToolbarPriority: docxEditorConstantsConfig_1.textBlockToolbarMenuTypes.SHARE_TEXT_LINK,
    blockMenuPriority: docxEditorConstantsConfig_1.blockOperationMenuTypes.SHARE_TEXT_LINK,
    tableCellToolbarPriority: docxEditorConstantsConfig_1.tablePopoverMenuTypes.SHARE_TEXT_LINK,
    blockToolbarPriority: docxEditorConstantsConfig_1.blockToolbarMenuTypes.SHARE_TEXT_LINK
  }];
  var docxToolboxConstants_3 = require("docx-toolbox-constants_3") /*id: 42034*/;
  var moduleSettingToken = require("module-setting-token") /*id: 907937*/;
  var editorRevisingStateAccessor = require("editor-revising-state-accessor") /*id: 828858*/;
  var docxCommentMenuItemFactory = require("docx-comment-menu-item-factory") /*id: 99934*/;
  var opendocImageViewerUtils = require("opendoc-image-viewer-utils") /*id: 356868*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  let rN = [{
    shouldBreak: e => {
      let {
        useCalloutAndQuoteContainerGroupList: r,
        context: o,
        options: l
      } = e;
      if (l.panelType === editorUiComponentConstants.uiComponentTypes.TableCell) {
        return o.blocks.length === 0 || !docxTableLayoutUtils.hasBlockContent(o.blocks) || !l.commentable;
      }
      if (l.panelType === editorUiComponentConstants.uiComponentTypes.TextualToolbar || l.panelType === editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar || l.panelType === editorUiComponentConstants.uiComponentTypes.BlockToolbar) {
        let e = l.commentable && opendocImageViewerUtils.OpendocImageViewerUtils.checkShouldRegisComment();
        return !!r || !e;
      }
      return false;
    },
    panelType: [editorUiComponentConstants.uiComponentTypes.TableCell, editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar, editorUiComponentConstants.uiComponentTypes.BlockToolbar],
    group: e => {
      let {
        context: r,
        options: o
      } = e;
      let {
        config: l
      } = r.blockManager;
      let n = false;
      if (o.panelType === editorUiComponentConstants.uiComponentTypes.TableCell) {
        n = docxFeatureFlags.isO6Enabled();
      }
      if (o.panelType === editorUiComponentConstants.uiComponentTypes.TextualToolbar) {
        let e = docxSlashCommandMenuUtils.getSavePartialTplStatus();
        let r = flowPermissionSettingSelectors.flowSelectorsHub.translate.selectTranslateStatus(reduxStoreInitializer.reduxStore.getState()).translated;
        let a = editorRevisingStateAccessor.canShowRevising() && !platformDocUtils.KNd() && !r && l.get("editPermission") && !l.get("editable");
        n = !docxFeatureFlags.isO5Enabled() && e.visible && o.editable && !o.isPageTitle && !a && !r && !userEnvironmentUtils.isAnonymousAccess() || docxFeatureFlags.isO6Enabled();
      }
      return {
        key: editorUiComponentConstants.uiComponentConstants.Comment,
        groupName: "comment",
        noDivider: n,
        children: function (e, r) {
          let o = [docxCommentMenuItemFactory.createCommentMenu];
          return docxSlashCommandMenuUtils.filterValidMenuItems(o, e, r);
        }(r, {
          ...o,
          category: editorUiComponentConstants.uiComponentConstants.Comment
        })
      };
    },
    textualToolbarPriority: docxEditorConstantsConfig_1.textBlockToolbarMenuTypes.COMMENT,
    tableCellToolbarPriority: docxEditorConstantsConfig_1.tablePopoverMenuTypes.COMMENT,
    blockToolbarPriority: docxEditorConstantsConfig_1.blockToolbarMenuTypes.COMMENT
  }];
  async function rR(e) {
    let r = e.editorAPI.getService(moduleSettingToken.moduleSettingToken, {
      optional: true
    });
    if (r != null) {
      r.add(docxToolboxConstants_3.toolboxCommands.GROUP_ITEMS, [...rE, ...rN]);
    }
  }
  let rj = [{
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onOrganizeMenuItems,
    hookCallback: e => {
      let {
        res: r,
        context: o,
        panelType: l,
        options: n
      } = e;
      if (l === editorUiComponentConstants.uiComponentTypes.TableCell) {
        r.toolboxGroups = function (e, r) {
          let {
            blocks: o
          } = e;
          if (o.length === 0) {
            return [];
          } else {
            return docxToolboxItemGrouper.getToolboxGroups({
              context: e,
              options: {
                ...r,
                panelType: editorUiComponentConstants.uiComponentTypes.TableCell
              },
              sort: (e, r) => (e.tableCellToolbarPriority || 0) - (r.tableCellToolbarPriority || 0),
              panelType: editorUiComponentConstants.uiComponentTypes.TableCell
            });
          }
        }(o, {
          ...n,
          panelType: l,
          showHn: true,
          showTooltip: true
        });
      }
    },
    options: {}
  }];
  let rS = [...rj, {
    hookName: docxEditorConstantsConfig_1.blockMenuEventConstants.onOrganizeMenuItems,
    hookCallback: e => {
      let {
        res: r,
        context: o,
        panelType: l,
        options: n
      } = e;
      if ([editorUiComponentConstants.uiComponentTypes.TextualToolbar, editorUiComponentConstants.uiComponentTypes.TextualBlockToolbar].includes(l)) {
        if (docComponentConfigUtils.getDocComponentConfig("extensions.content.toolbox.enable") === false) {
          r.toolboxGroups = [];
        } else {
          r.toolboxGroups = function (e, r) {
            let {
              blocks: o
            } = e;
            if (o.length === 0) {
              return [];
            } else {
              return docxToolboxItemGrouper.getToolboxGroups({
                context: e,
                options: {
                  ...r
                },
                sort: (e, r) => (e.textualToolbarPriority || 0) - (r.textualToolbarPriority || 0),
                panelType: editorUiComponentConstants.uiComponentTypes.TextualToolbar
              });
            }
          }(o, {
            ...n,
            panelType: l,
            showHn: true,
            showTooltip: true
          });
        }
      }
    },
    options: {}
  }, ...rg];
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  async function rP(e) {
    let r = e.editorAPI.getService(hookServiceDiConstants_1.$$);
    rS.forEach(e => {
      let {
        hookName: o,
        hookCallback: l,
        options: n
      } = e;
      if (r != null) {
        r.register(hookServiceDiConstants_1.hookActionTypes.TOOL_BOX_ORGANIZE_MENU_ITEMS_SYNC, o, l, n);
      }
    });
  }
  var docxOfflineMenuHandler = require("docx-offline-menu-handler") /*id: 22232*/;
  var blockToolboxConfigFilter = require("block-toolbox-config-filter") /*id: 169537*/;
  let rV = e => {
    var r;
    if ((r = e.editorAPI.getService(hookServiceDiConstants_1.$$).getHooks(hookServiceDiConstants_1.hookActionTypes.TOOL_BOX_ORGANIZE_MENU_ITEMS_SYNC)) === null || r === undefined || !r.size) {
      rP(e);
      rR(e);
    }
  };
  function rF(e, r, o) {
    rV(r.blockManager);
    asyncToolboxMenuItemsHookRegistrar.debouncedTriggerAsyncToolboxMenuItems(r.blockManager);
    let l = {
      toolboxGroups: [],
      menuProps: {}
    };
    let n = {
      res: l,
      context: r,
      panelType: e,
      options: o
    };
    let c = r.blockManager.editorAPI.getService(hookServiceDiConstants_1.$$);
    if (c != null) {
      c.callHook(hookServiceDiConstants_1.hookActionTypes.TOOL_BOX_ORGANIZE_MENU_ITEMS_ASYNC, docxEditorConstantsConfig_1.blockMenuEventConstants.onOrganizeMenuItems, n);
    }
    if (c != null) {
      c.callHook(hookServiceDiConstants_1.hookActionTypes.TOOL_BOX_ORGANIZE_MENU_ITEMS_SYNC, docxEditorConstantsConfig_1.blockMenuEventConstants.onOrganizeMenuItems, n);
    }
    let {
      toolboxGroups: s,
      menuProps: d
    } = l;
    let u = blockToolboxConfigFilter.filterToolboxByBlockType({
      context: r,
      options: o,
      toolboxGroups: s
    });
    docxOfflineMenuHandler.disableOfflineMenus(u);
    return [u, d];
  }
  require.d(exports, {
    organizeToolboxMenuItems: function () {
      return rF;
    }
  });
}