// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'd' to 'showPasteLinkPanel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_link-transform-queue.7e909584.js
         * chunkId: 1321
         * moduleId: 633051
         */
module.exports = function (module, exports, require) {
  var o;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var r = classnamesUtils;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var objectOmitHelper_1 = require("object-omit-helper_1") /*id: 713602*/;
  var universeIconWrapper = require("universe-icon-wrapper") /*id: 19498*/;
  var h = ["prefixId"];
  function p(e) {
    e.prefixId;
    var t = objectOmitHelper_1.omitWithSymbols(e, h);
    return reactCoreLibraryReexport.createElement("svg", objectAssignUtil.objectAssign({
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t), reactCoreLibraryReexport.createElement("path", {
      d: "M10.136 1.333a.4.4 0 0 0-.4.4V3.2c0 .221.18.4.4.4h1.467a.4.4 0 0 0 .4-.4V1.733a.4.4 0 0 0-.4-.4h-1.467Zm4 0a.4.4 0 0 0-.4.4V3.2c0 .221.18.4.4.4h1.467a.4.4 0 0 0 .4-.4V1.733a.4.4 0 0 0-.4-.4h-1.467Zm3.6.401a.4.4 0 0 1 .4-.4h1.467a.4.4 0 0 1 .4.4V3.2a.4.4 0 0 1-.4.4h-1.467a.4.4 0 0 1-.4-.4V1.733Zm.4 3.599a.4.4 0 0 0-.4.4V7.2c0 .221.18.4.4.4h1.467a.4.4 0 0 0 .4-.4V5.734a.4.4 0 0 0-.4-.4h-1.467Zm-.4 4.4c0-.22.18-.4.4-.4h1.467a.4.4 0 0 1 .4.4V11.2a.4.4 0 0 1-.4.4h-1.467a.4.4 0 0 1-.4-.4V9.733Zm-2.626-4.4a.89.89 0 0 1 .89.89v14.444c0 .436-.372.79-.83.79H3.496c-.458 0-.83-.354-.83-.79V6.124c0-.437.372-.79.83-.79h11.615Zm-10.444 2v12.124H14V7.334H4.666Z",
      fill: "currentColor"
    }));
  }
  var k = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement(universeIconWrapper.UniverseIcon, objectAssignUtil.objectAssign({
      icon: p
    }, e, {
      ref: t,
      svgProps: {
        "data-icon": "CcmPasteOutlined"
      }
    }));
  });
  var f = require("down-bold-outlined-icon") /*id: 179352*/.DownBoldIcon;
  var globalMousedownManager = require("global-mousedown-manager") /*id: 564276*/;
  var docxAiMenuComponent = require("docx-ai-menu-component") /*id: 604848*/;
  var docxAiMenuConstants = require("docx-ai-menu-constants") /*id: 255694*/;
  var editorConstantsEnums = require("editor-constants-enums") /*id: 47828*/;
  var docxScrollableConstants = require("docx-scrollable-constants") /*id: 451992*/;
  var editorUiComponentConstants = require("editor-ui-component-constants") /*id: 516341*/;
  var hideBlockToolbarConsts = require("hide-block-toolbar-consts") /*id: 544027*/;
  var docEditorPanelStatusManager = require("doc-editor-panel-status-manager") /*id: 301349*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  var uiLayoutPositionEnums = require("ui-layout-position-enums") /*id: 463752*/;
  var docxOverlayPositionWrapper = require("docx-overlay-position-wrapper") /*id: 901027*/;
  var uiLayoutPositionUtils = require("ui-layout-position-utils") /*id: 274647*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function w(e, t, n) {
    var o;
    if ((t = typeof (o = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var o = n.call(e, t || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  (o = {}).Panel = "panel";
  o.Submenu = "submenu";
  let L = o;
  let M = e => e instanceof Range && e.getBoundingClientRect().x < 300;
  class P extends reactCoreLibraryReexport.Component {
    get scrollableBoundary() {
      return this.props.blockManager.editorAPI.config.get("pageMainBoundary") || this.props.boundary;
    }
    get blockHostElement() {
      return this.props.blockManager.getBlockViewByBlockIdNotCheck(this.props.blockId)?.hostElement;
    }
    componentDidMount() {
      var t;
      this.scrollableBoundary.addEventListener("scroll", this.handleScroll);
      this.props.blockManager.eventEmitter.on(docxScrollableConstants.scrollEvents.ON_SCROLL, this.handleHorizonalScroll);
      this.setPosition();
      document.addEventListener("keydown", this.handleKeyDown, true);
      globalMousedownManager.mousedownListener.addListener(this.clickOutsideHandler);
      this.rectTop = (t = this.blockHostElement) === null || t === undefined ? undefined : t.getBoundingClientRect()?.top;
      if (this.props.type === L.Submenu) {
        docEditorPanelStatusManager.editorPanelStateManager.setPanelStatus(editorUiComponentConstants.uiComponentTypes.PasteContextSubmenu, true, this.props.blockManager);
        this.props.blockManager.dispatch(hideBlockToolbarConsts.hideBlockToolbar);
      }
    }
    componentWillUnmount() {
      if (this.host.parentElement) {
        this.host.parentElement.removeChild(this.host);
      }
      this.scrollableBoundary.removeEventListener("scroll", this.handleScroll);
      this.props.blockManager.eventEmitter.off(docxScrollableConstants.scrollEvents.ON_SCROLL, this.handleHorizonalScroll);
      document.removeEventListener("keydown", this.handleKeyDown, true);
      globalMousedownManager.mousedownListener.removeListener(this.clickOutsideHandler);
      if (this.props.type === L.Submenu) {
        docEditorPanelStatusManager.editorPanelStateManager.setPanelStatus(editorUiComponentConstants.uiComponentTypes.PasteContextSubmenu, false, this.props.blockManager);
      }
    }
    render() {
      if (this.props.type === L.Panel) {
        return this.renderPanel();
      } else {
        return this.renderToggleMenu();
      }
    }
    constructor(e) {
      super(e);
      w(this, "host", undefined);
      w(this, "menuNode", undefined);
      w(this, "menuRef", undefined);
      w(this, "rectTop", undefined);
      w(this, "handleScroll", () => {
        if (this.props.type === L.Panel) {
          var t;
          if (((t = this.blockHostElement) === null || t === undefined ? undefined : t.getBoundingClientRect()?.top) !== this.rectTop) {
            this.handleClose();
          }
        }
      });
      w(this, "handleKeyDown", e => {
        if (e.keyCode === docxAiMenuConstants.keyCodes.RIGHT || e.keyCode === docxAiMenuConstants.keyCodes.LEFT) {
          this.handleClose();
          return;
        }
        if (e.keyCode === docxAiMenuConstants.keyCodes.DOWN && this.props.type === L.Submenu && !this.state.showDropdown) {
          this.setState(e => ({
            showDropdown: !e.showDropdown
          }));
          return;
        }
        if (!e.code.startsWith("Arrow") && e.code !== "Enter") {
          e.stopImmediatePropagation();
          e.preventDefault();
          this.handleClose();
        }
      });
      w(this, "setPosition", () => {
        let {
          left: e,
          top: t
        } = this.state;
        if (e !== undefined && t !== undefined) {
          return;
        }
        let n = uiLayoutPositionUtils.getSelectionRange();
        if (!n) {
          return;
        }
        let {
          x: o,
          y: i,
          height: r,
          width: l
        } = n.getBoundingClientRect();
        let a = i + r;
        let s = o + l;
        if (this.menuNode) {
          let {
            height: e,
            width: t
          } = this.menuNode.getBoundingClientRect();
          let {
            height: n,
            width: o,
            x: i,
            y: r
          } = this.props.boundary.getBoundingClientRect();
          s = Math.min(i + o - t, s);
          a = Math.min(r + n - e, a);
        }
        this.setState({
          left: s,
          top: a
        });
      });
      w(this, "handleHorizonalScroll", (e, t) => {
        if (docxTableLayoutUtils.isInTableCell(t, this.props.blockId, this.props.blockManager)) {
          this.handleClose();
        }
      });
      w(this, "handleClose", () => {
        reactDomEntryWrapper.unmountComponentAtNode(this.host);
      });
      w(this, "handleClick", e => {
        if (this.props.type === L.Submenu && !this.state.showDropdown) {
          this.handleClose();
          return;
        }
        this.props.onClick(e);
        this.setState({
          visible: false
        });
        reactDomEntryWrapper.unmountComponentAtNode(this.host);
      });
      w(this, "handleClickOutSide", () => {
        this.setState({
          visible: false
        });
        reactDomEntryWrapper.unmountComponentAtNode(this.host);
      });
      w(this, "setDomRef", e => {
        this.menuRef = e;
      });
      w(this, "clickOutsideHandler", e => {
        if (this.menuRef && !this.menuRef.contains(e.target)) {
          this.handleClickOutSide();
        }
      });
      w(this, "renderPanel", () => {
        let {
          visible: e,
          left: t,
          top: n
        } = this.state;
        let {
          menuItems: o,
          className: i = ""
        } = this.props;
        let r = `clipboard-menu-container panel ${i}`;
        if (e) {
          return reactJsxRuntimeCoreReexport.jsx("div", {
            ref: this.setDomRef,
            style: {
              position: "absolute",
              left: t,
              top: n,
              zIndex: 99,
              ...this.props.style
            },
            children: reactJsxRuntimeCoreReexport.jsx(docxAiMenuComponent.DocxAiMenu, {
              className: r,
              getRef: e => {
                this.menuNode = e;
              },
              items: o,
              onSelfClose: this.handleClose,
              style: this.props.style,
              onItemClick: this.handleClick,
              keyboard: editorConstantsEnums.LayoutDirection.horizontal,
              autoSelect: true,
              enableDefaultSelected: true
            })
          });
        } else {
          return null;
        }
      });
      w(this, "handleToggleMenuClick", e => {
        e.preventDefault();
        this.setState(e => ({
          showDropdown: !e.showDropdown
        }));
      });
      w(this, "renderToggleMenu", () => {
        let {
          visible: e
        } = this.state;
        let {
          blockManager: t,
          boundary: n,
          selectionAPI: o,
          menuItems: i,
          className: l = ""
        } = this.props;
        let a = `clipboard-menu-container ${l}`;
        let s = t.editorAPI.config.get("pageMainBoundary") || n;
        return reactJsxRuntimeCoreReexport.jsx(docxOverlayPositionWrapper.DocxOverlayWrapper, {
          visible: e,
          blockManager: t,
          mask: false,
          boundary: s,
          scrollContainer: s,
          selectionAPI: o,
          target: this.props.overlayTarget || this.blockHostElement,
          direction: uiLayoutPositionEnums.positionAlignTypes.BottomRight,
          zIndex: 10,
          className: r("paste-context-dropdown", {
            "paste-context-dropdown--show": this.state.showDropdown,
            "paste-context-dropdown-align--left": M(this.props.overlayTarget)
          }),
          offset: 0,
          animation: uiLayoutPositionEnums.animationEffectTypes.None,
          listenEditorResize: true,
          children: reactJsxRuntimeCoreReexport.jsxs("div", {
            className: "paste-context-dropdown-menu",
            ref: this.setDomRef,
            children: [reactJsxRuntimeCoreReexport.jsxs("div", {
              className: "wrapper",
              onMouseDown: this.handleToggleMenuClick,
              children: [reactJsxRuntimeCoreReexport.jsx(k, {
                className: "left"
              }), reactJsxRuntimeCoreReexport.jsx(f, {
                className: "right"
              })]
            }), reactJsxRuntimeCoreReexport.jsx(docxAiMenuComponent.DocxAiMenu, {
              className: a,
              getRef: e => {
                this.menuNode = e;
              },
              items: i,
              onSelfClose: this.handleClose,
              style: this.props.style,
              onItemClick: this.handleClick,
              keyboard: editorConstantsEnums.LayoutDirection.horizontal,
              autoSelect: true
            })]
          })
        });
      });
      this.host = e.host;
      this.state = {
        visible: e.visible,
        left: e.left,
        top: e.top,
        showDropdown: false
      };
    }
  }
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var filterNonMinutesLinkDisplayOptions = require("filter-non-minutes-link-display-options") /*id: 441051*/;
  var boundsUtils = require("bounds-utils") /*id: 94622*/;
  var linkPastePanelUtils = require("link-paste-panel-utils") /*id: 474492*/;
  var inlineComponentFacade = require("inline-component-facade") /*id: 678614*/;
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  var hookServiceDiConstants_1 = require("hook-service-di-constants_1") /*id: 439395*/;
  var linkTransformHandler = require("link-transform-handler") /*id: 294261*/;
  var linkDisplayOptionsMenuItems = require("link-display-options-menu-items") /*id: 334029*/;
  let j = document.createElement("div");
  async function z(e) {
    let {
      block: t
    } = e;
    let n = t.blockManager.editorAPI.getService(hookServiceDiConstants_1.$$).getCallBackOrCallBackList(hookServiceDiConstants_1.hookActionTypes.LINK_PASTE_PANEL, "preProcessLinkPanel");
    let o = false;
    for (let t of n) {
      let {
        callback: n
      } = t;
      if (await n({
        option: e
      })) {
        o = true;
        break;
      }
    }
    return o;
  }
  async function $(e) {
    let {
      option: t,
      menuItemParams: n
    } = e;
    let {
      block: o
    } = t;
    let i = o.blockManager.editorAPI.getService(hookServiceDiConstants_1.$$).getCallBackOrCallBackList(hookServiceDiConstants_1.hookActionTypes.LINK_PASTE_PANEL, "handleMenuItemClick");
    let r = false;
    for (let e of i) {
      let {
        callback: o
      } = e;
      if (await o({
        option: t,
        menuItemParams: n
      })) {
        r = true;
        break;
      }
    }
    return r;
  }
  async function J(e) {
    let {
      text: o = "",
      block: i,
      boundary: a,
      linkId: c,
      revision: d,
      toJiraFilter: u,
      toMeegoBlock: h,
      toSyncedBlock: p,
      toBaseBlock: k,
      isBlockSelection: f,
      menuClassName: g = "",
      afterShowPanel: m,
      inlineComponent: E,
      parsedInfo: b,
      addOnParams: I,
      extraParams: v
    } = e;
    if (!networkStateEventCollector.collectNetworkState() || browserEnvironmentDetectionUtils.browserDetector.isMobile || !f && linkPastePanelUtils.isSpecialContainer(i.id, i.blockManager) || !(await z(e))) {
      return;
    }
    let A = async () => {
      let t = function (e) {
        let {
          block: t
        } = e;
        let n = t.blockManager.editorAPI.getService(hookServiceDiConstants_1.$$).getCallBackOrCallBackList(hookServiceDiConstants_1.hookActionTypes.LINK_PASTE_PANEL, "getMenuConfig");
        let o = null;
        for (let t of n) {
          let {
            callback: n
          } = t;
          let i = n({
            option: e
          });
          if (i) {
            o = i;
            break;
          }
        }
        return o;
      }(e);
      if (t) {
        return t;
      }
      let n = i.blockManager.editorAPI.getService(hookServiceDiConstants_1.$$);
      let r = n.getCallBackOrCallBackList(hookServiceDiConstants_1.hookActionTypes.LINK_PASTE_PANEL, "preProcessLinkPanel", 10);
      let l = n.getCallBackOrCallBackList(hookServiceDiConstants_1.hookActionTypes.LINK_PASTE_PANEL, "preProcessLinkPanel", 20);
      let a = await r({
        option: e
      });
      let s = await l({
        option: e
      });
      let c = linkDisplayOptionsMenuItems.linkDisplayMenuItems.filter(e => (!!s || ![linkDisplayOptionsMenuItems.linkDisplayOptions.Title, linkDisplayOptionsMenuItems.linkDisplayOptions.Card].includes(e.name)) && (!!a || e.name !== linkDisplayOptionsMenuItems.linkDisplayOptions.Preview));
      let d = filterNonMinutesLinkDisplayOptions.filterNonMinutesLinkOptions(o, c);
      return {
        type: L.Panel,
        menuItems: d
      };
    };
    let y = i.getContentRect();
    let R = !!boundsUtils.isBelowViewport(y, 300) * 100;
    let C = (uiLayoutPositionUtils.getSelectionRange()?.endOffset || 0) >= o.length ? uiLayoutPositionUtils.getSelectionRange()?.endOffset : o.length;
    setTimeout(async () => {
      let {
        selectionAPI: n,
        blockManager: l,
        id: y
      } = i;
      let {
        selection: R
      } = n.getSelection()[0];
      if (!R && !f || !l.hasBlockViewByBlockId(y)) {
        return;
      }
      let S = uiLayoutPositionUtils.getSelectionRange();
      if (!S) {
        return;
      }
      let w = f ? i.id : n.getSelection()[0]?.id;
      let L = y !== w || y === w && C !== (S == null ? undefined : S.endOffset);
      if (!f && !h && !p && !k && L || !f && editorTextBlockUtilities.isEditorInstance(i) && !(E ? i.model.zoneState.getEntities([[inlineComponentFacade.componentType, E]]) : i.model.zoneState.getEntities([[clientsideLinkConstants_1.linkId, c]])).length) {
        return;
      }
      let M = i.getHostRect();
      let N = async t => {
        let n = [0, 0];
        if (!f && editorTextBlockUtilities.isEditorInstance(i)) {
          let {
            zoneState: e
          } = i.model;
          let t = e.getContent().ops.filter(e => {
            if (E) {
              return e.attributes?.[inlineComponentFacade.componentType] === E;
            } else {
              return e.attributes?.[clientsideLinkConstants_1.linkId] === c;
            }
          });
          if (t.length < 1 || !l.getRecordByBlockId(y)) {
            return;
          }
          n = [contentDeltaUtilityFunctions.B(e, t[0])[0], contentDeltaUtilityFunctions.B(e, t[t.length - 1])[1]];
        }
        let {
          name: r
        } = t;
        let a = {
          linkId: c,
          text: o,
          block: i,
          isBlockSelection: f,
          menuItemName: r,
          linkRange: n,
          parsedInfo: b,
          revision: d,
          menuClassName: g,
          addOnParams: I,
          extraParams: v
        };
        if (!(await $({
          option: e,
          menuItemParams: a
        }))) {
          await linkTransformHandler.handleLinkDisplay(a);
        }
      };
      let {
        left: B,
        top: O,
        overlayTarget: D
      } = linkTransformHandler.getOverlayPosition({
        isBlockSelection: !!f,
        blockManager: l,
        blockId: y,
        blockRect: M,
        range: S
      });
      let {
        type: H,
        menuItems: X
      } = await A();
      document.body.appendChild(j);
      reactDomEntryWrapper.render(reactJsxRuntimeCoreReexport.jsx(P, {
        left: B,
        top: O,
        className: r(g, {
          "block-selection": f
        }),
        type: H,
        menuItems: X,
        onClick: N,
        boundary: a,
        host: j,
        overlayTarget: D,
        blockManager: l,
        selectionAPI: n,
        blockId: y,
        visible: true
      }), j);
      let z = "";
      if (u) {
        z = "jira_filter";
      }
      if (h) {
        z = "meego";
      }
      if (p) {
        z = "synced_block";
      }
      l.editorAPI.getService(diProviderCollectEvent.collectEventName).collectPageView("ccm_doc_paste_link_panel_view", {
        record_id: i.record.id,
        block_type: i.type
      }, {
        url_type: z
      });
      if (m) {
        m();
      }
    }, R);
  }
  require.d(exports, {
    showPasteLinkPanel: function () {
      return J;
    }
  });
}