// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'registerCalloutView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 992089
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var l;
  var s;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockModelClass = require("doc-block-model-class") /*id: 672640*/;
  class u extends docBlockModelClass.DocBlockModel {
    getText() {
      return `[${t("CreationDoc_Docs_CalloutBlock_Tab")}]`;
    }
    constructor(e) {
      super(e);
    }
  }
  o = "type";
  l = docBlockTypeConstants.blockTypeConstants.CALLOUT;
  if ((o = typeof (n = function (e, i) {
    if (typeof e != "object" || !e) {
      return e;
    }
    var r = e[Symbol.toPrimitive];
    if (r !== undefined) {
      var n = r.call(e, i || "default");
      if (typeof n != "object") {
        return n;
      }
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(e);
  }(o, "string")) == "symbol" ? n : n + "") in u) {
    Object.defineProperty(u, o, {
      value: l,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    u[o] = l;
  }
  var collaborativeEditingFlowSyncModule = require("collaborative-editing-flow-sync-module") /*id: 756448*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var g = classnamesUtils;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var documentBlockOperations = require("document-block-operations") /*id: 139630*/;
  var docContentPageClickCollector = require("doc-content-page-click-collector") /*id: 751641*/;
  var uiEventTrackingConstants = require("ui-event-tracking-constants") /*id: 28205*/;
  var docCalloutColorThemes = require("doc-callout-color-themes") /*id: 309297*/;
  var docBlockEmojiConstants = require("doc-block-emoji-constants") /*id: 664589*/;
  var calloutBlockUtils = require("callout-block-utils") /*id: 662420*/;
  var flowSyncBoundaryNodesExtractor = require("flow-sync-boundary-nodes-extractor") /*id: 502677*/;
  var blockMaskManagerBaseClass = require("block-mask-manager-base-class") /*id: 471875*/;
  var documentNodeUtils_2 = require("document-node-utils_2") /*id: 868545*/;
  var changeSourceValidators = require("change-source-validators") /*id: 568290*/;
  var tooltipWrapperComponent_1 = require("tooltip-wrapper-component_1") /*id: 943532*/;
  var driveDocInlineComponentUtils = require("drive-doc-inline-component-utils") /*id: 759062*/;
  var emojiStorageManagerSingleton = require("emoji-storage-manager-singleton") /*id: 980699*/;
  let w = new Map();
  let B = e => {
    let i = driveDocInlineComponentUtils.getRootToken(e);
    if (w.get(i)) {
      return;
    }
    let r = emojiStorageManagerSingleton.EmojiStorageManager.getInstance();
    if (!r) {
      return;
    }
    let n = e.structService.getBlockStructsByType(docBlockTypeConstants.blockTypeConstants.CALLOUT).reduce((i, n) => {
      let o = n.snapshot.emoji_value;
      let l = r.getEmojiUnified(n.id, e);
      if (l && !o) {
        i.push({
          block: n,
          unified: l
        });
      }
      return i;
    }, []);
    if (n.length) {
      e.applyTransaction("completeEmojiValue", e => {
        n.forEach(i => {
          let {
            block: r,
            unified: n
          } = i;
          e.replace(r.record.id, ["emoji_value"], n);
        });
      }, {
        undoable: false
      });
      w.set(i, true);
    }
  };
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  (s = {}).S = "S";
  s.M = "M";
  s.L = "L";
  s.XL = "XL";
  let L = s;
  let N = {
    S: 15,
    M: 17,
    L: 19,
    XL: 21
  };
  let A = () => {
    var i;
    return ((i = window) === null || i === undefined ? undefined : i.deviceInfo?.baseFontSize) || L.M;
  };
  let O = e => N[e || A()];
  let D = () => browserEnvironmentDetectionUtils.browserDetector.isMobile ? O() * 1.25 : 20;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var syncUrlBlockUtils = require("sync-url-block-utils") /*id: 299195*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let W = e => {
    let {
      update: i,
      emojiId: n,
      editable: o,
      children: l,
      source: s
    } = e;
    let a = offlineStatusSelectorsUtils.useSelectDocxOfflineDisabled();
    let [c, d] = reactCoreLibraryReexport.useState(null);
    reactCoreLibraryReexport.useEffect(() => {
      docxTaskSchedulerUtilities.scheduleTaskWithConfig({
        action: async () => {
          try {
            await Promise.all([platformDocUtils.Cwx(), platformDocUtils.Cxh()]);
            let e = await Promise.all([require.e("dropdown-menu") /*id: 99771*/, require.e("icon-emoji-picker-panel") /*id: 47996*/, require.e("docx_emoji_delay_v2") /*id: 68688*/]).then(require.bind(require, "icon-picker-popover-wrapper") /*id: 521091*/);
            d(() => {
              return e.default ?? e;
            });
          } catch (e) {}
        },
        name: "docx.calloutBlock.iconPicker"
      });
    }, []);
    let u = e => reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
      children: typeof l == "function" ? l({
        popoverVisible: e
      }) : l
    });
    if (!c || !o) {
      return u(false);
    }
    let h = docComponentFeatureFlags.isImchatSyncedBlk() && syncUrlBlockUtils.isSyncingActive();
    return reactJsxRuntimeCoreReexport.jsx(c, {
      disableSendRequest: true,
      emojiOnly: true,
      currentIcon: {
        type: 1,
        key: n,
        emojiId: n
      },
      supportRandom: true,
      supportReset: false,
      onUpdate: e => i(e),
      boundaryPadding: 20,
      locale: platformDocUtils.HiA.getLocale(),
      disabled: a,
      placement: "bottomLeft",
      autoFocus: !h,
      randomPickEmojiWhenEmpty: {
        enabled: true
      },
      source: s,
      children: e => {
        let {
          popoverVisible: i
        } = e;
        return u(i);
      }
    });
  };
  var loadingWrapperComponent = require("loading-wrapper-component") /*id: 376931*/;
  var emojiUtilsHandler = require("emoji-utils-handler") /*id: 626164*/;
  let z = (e, i) => {
    let n = i.getRecordByBlockId(e)?.snapshot;
    let o = n == null ? undefined : n.emoji_id;
    let l = n == null ? undefined : n.emoji_value;
    if (o && l) {
      return emojiUtilsHandler.getEmojiChar(l);
    } else {
      return null;
    }
  };
  function K(e) {
    let {
      blockId: i,
      blockManager: r
    } = e;
    let n = emojiStorageManagerSingleton.EmojiStorageManager.getInstance();
    n.initEmojiDataStore();
    let [o, l] = reactCoreLibraryReexport.useState(n.getEmoji(i, r));
    let s = o || z(i, r) || o;
    reactCoreLibraryReexport.useLayoutEffect(() => {
      (async () => {
        await n.initEmojiDataStore();
        let i = await n.getEmoji(e.blockId, e.blockManager);
        if (i) {
          l(i);
        }
      })();
    }, [e.emojiId, i]);
    if (s) {
      return reactJsxRuntimeCoreReexport.jsx("span", {
        className: "emoji-mart-emoji emoji-mart-emoji-native emoji-mart-new",
        children: reactJsxRuntimeCoreReexport.jsx("span", {
          style: {
            fontSize: `${e.size}px`
          },
          children: s
        })
      });
    } else {
      return reactJsxRuntimeCoreReexport.jsx(loadingWrapperComponent.LoadingWrapper, {});
    }
  }
  function X(e) {
    let i = e => {
      if (e != null) {
        e.preventDefault();
      }
      if (e != null) {
        e.stopPropagation();
      }
    };
    let {
      editable: r,
      emojiId: n,
      blockId: o,
      blockManager: l
    } = e;
    let s = !r;
    return reactJsxRuntimeCoreReexport.jsx(W, {
      emojiId: n,
      update: i => {
        if (i == null ? undefined : i.emojiId) {
          e.onEmojiSelect(i.emojiId, i.key);
        }
      },
      editable: r,
      source: "callout",
      children: r => {
        let {
          popoverVisible: a
        } = r;
        if (a) {
          B(e.blockManager);
        }
        return reactJsxRuntimeCoreReexport.jsx(tooltipWrapperComponent_1.TooltipWrapper, {
          visible: !a && undefined,
          title: docBlockEmojiConstants.changeIconToastKey,
          placement: "top",
          disabled: s,
          children: reactJsxRuntimeCoreReexport.jsx("div", {
            onClick: i,
            className: g(docBlockEmojiConstants.calloutEmojiClass, {
              disabled: s
            }),
            children: reactJsxRuntimeCoreReexport.jsx(K, {
              emojiId: n || docBlockEmojiConstants.emojiHexList["0"],
              blockId: o,
              blockManager: l,
              size: D()
            })
          })
        });
      }
    });
  }
  class G extends reactCoreLibraryReexport.PureComponent {
    render() {
      return reactJsxRuntimeCoreReexport.jsx(X, {
        ...this.props
      });
    }
  }
  function q(e, i, r) {
    var n;
    if ((i = typeof (n = function (e, i) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, i || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (i === "string" ? String : Number)(e);
    }(i, "string")) == "symbol" ? n : n + "") in e) {
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
  class J extends blockMaskManagerBaseClass.BlockMaskManagerBase {
    get isShortcut() {
      return this.props.recursionProps.isShortcut === true;
    }
    get isSSR() {
      return this.props.recursionProps.isSSR === true;
    }
    blockViewDidMount() {
      super.blockViewDidMount();
      this.struct.addChildrenListener(this.handleChildrenUpdate);
      this.sub = this.blockManager.editorAPI.dataService.interceptChange$.subscribe(this.handleTransaction);
      this.updateBlockType();
    }
    blockViewWillUnmount() {
      var e;
      super.blockViewWillUnmount();
      this.struct.removeChildrenListener(this.handleChildrenUpdate);
      if ((e = this.sub) !== null && e !== undefined) {
        e.unsubscribe();
      }
    }
    updateBlockType() {
      let i = this.struct.children[0]?.type;
      if (i && i !== this.state.firstBlockType) {
        this.setState({
          firstBlockType: i
        });
      }
    }
    onResize() {
      this.struct.children.forEach(e => {
        let i = this.blockManager.getBlockViewByBlockIdNotCheck(e.id);
        if (i != null) {
          i.onResize();
        }
      });
    }
    render() {
      let {
        syncCursorBgColor: e,
        syncCursorBorderColor: i
      } = this.props;
      let {
        border_color: r,
        background_color: n
      } = this.record.snapshot;
      return reactJsxRuntimeCoreReexport.jsxs("div", {
        className: "callout-block",
        style: {
          borderColor: i || calloutBlockUtils.getThemeColorCss(docCalloutColorThemes.colorTypeKeys.Border, r),
          backgroundColor: e || calloutBlockUtils.getThemeColorCss(docCalloutColorThemes.colorTypeKeys.BackgroundColor, n)
        },
        children: [reactJsxRuntimeCoreReexport.jsx("div", {
          contentEditable: false,
          className: g("callout-emoji-container", docBlockEmojiConstants.blockTypeClassMap[this.state.firstBlockType]),
          children: reactJsxRuntimeCoreReexport.jsx(G, {
            emojiId: this.model.record.snapshot.emoji_id,
            onEmojiSelect: this.onEmojiSelect,
            editable: this.editable,
            selectionAPI: this.selectionAPI,
            blockId: this.model.id,
            blockManager: this.blockManager,
            isShortcut: this.isShortcut,
            isSSR: this.isSSR
          })
        }), reactJsxRuntimeCoreReexport.jsx("div", {
          className: "callout-block-children",
          onClick: this.handleClick,
          children: this.renderChildren({
            className: "callout-render-unit"
          })
        })]
      });
    }
    constructor(e) {
      super(e);
      q(this, "state", undefined);
      q(this, "sub", undefined);
      q(this, "handleTransaction", e => {
        let {
          options: i,
          op: r
        } = e;
        if (!changeSourceValidators.isPasteSource(i) && !changeSourceValidators.isUndoRedoSource(i) && i.from === collaborativeEditingFlowSyncModule.kq.LOCAL && !this.snapshot.children.length) {
          let e = documentNodeUtils_2.createDocumentNode({});
          documentBlockOperations.insertNewChildren(r, this.model.recordId, 0, [e]);
        }
      });
      q(this, "handleChildrenUpdate", (e, i) => {
        this.updateBlockType();
        flowSyncBoundaryNodesExtractor.getBoundaryNodes(i.recordOps, this.struct).forEach(e => e && this.blockManager.layoutManager.didUpdateNode(e.id, true));
      });
      q(this, "onEmojiSelect", (e, i) => {
        this.model.applyTransaction("calloutBlockEmojiSelect", r => {
          r.replace(this.model.record.id, ["emoji_id"], e);
          if (i) {
            r.replace(this.model.record.id, ["emoji_value"], i);
          }
        });
        docContentPageClickCollector.collectDocContentPageClick(this.id, {
          actionType: uiEventTrackingConstants.uiClickEvents.CHANGE_ICON,
          actionValue: {
            value1: e
          }
        }, {
          blockManager: this.blockManager
        });
        calloutBlockUtils.saveCalloutConfig({
          emoji_id: e
        });
      });
      q(this, "handleClick", () => {
        if (!this.model.record.snapshot.children.length && this.config.editable) {
          calloutBlockUtils.insertCalloutText(this.model.record.id, this.blockManager);
        }
      });
      q(this, "onColorChange", (e, i) => {
        let r = {
          [e]: i
        };
        let n = e === "border_color" ? i : this.model.snapshot.border_color;
        let o = e === "background_color" ? i : this.model.snapshot.background_color;
        let l = calloutBlockUtils.hasDarkBgClass(o);
        let s = calloutBlockUtils.getCalloutBorder(n, true);
        let a = calloutBlockUtils.getCalloutBorder(n, false);
        if (l && s) {
          r.border_color = s;
        } else if (!l && a) {
          r.border_color = a;
        }
        this.setColorsAttrs(r);
      });
      q(this, "setColorsAttrs", e => {
        this.model.applyTransaction("calloutBlockSetColorsAttrs", i => {
          Object.keys(e).forEach(r => i.replace(this.model.record.id, [r], e[r]));
        });
        calloutBlockUtils.saveCalloutConfig(e);
      });
      this.state = {
        firstBlockType: this.struct.children[0]?.type || ""
      };
    }
  }
  function Y(e) {
    docxEditorCore.registerViewModel(u, {
      viewCreator: J,
      extensions: e
    });
  }
  require.d(exports, {
    registerCalloutView: function () {
      return Y;
    }
  });
}