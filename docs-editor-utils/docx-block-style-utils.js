// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rd' to 'SelectionHandler'
// - Renamed export 'sc' to 'isFirstSibling'
// - Renamed export 'QI' to 'getBlockRect'
// - Renamed export 'A6' to 'isAgendaInQuote'
// - Renamed export 'Ip' to 'resetBlockStyle'
// - Renamed export 'sN' to 'preventDefault'
// - Renamed export 'hF' to 'formatSelectors'
// - Renamed export 'uh' to 'isPointInRect'
// - Renamed export 'Xw' to 'getFoldedTarget'
// - Renamed export 'q0' to 'getHostElementRect'
// - Renamed export 'l4' to 'checkAllBlocks'
// - Renamed export 'eL' to 'clearBlockState'
// - Renamed export 'a5' to 'findBlockContainer'
// - Renamed export 'IV' to 'removeClassName'
// - Renamed export 'cn' to 'addClassName'
// - Renamed export 'gD' to 'getElementRect'
// - Renamed export 'cM' to 'updateBlockState'
// - Renamed export 'A_' to 'assignStyles'
// - Renamed export 'm2' to 'getEffectiveRect'
// - Renamed export 'cp' to 'calculateScale'
// - Renamed export 'qK' to 'getCaretPosition'
// - Renamed export '_M' to 'validatePoint'
// - Renamed export 'sm' to 'cloneNode'
// - Renamed export 'jn' to 'getContentRect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 669427
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxWidthModeConfig = require("docx-width-mode-config") /*id: 106194*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  var docxBlockValidatorUtils = require("docx-block-validator-utils") /*id: 713166*/;
  var aiBlockTypeUtils = require("ai-block-type-utils") /*id: 173943*/;
  var chatCardErrorConstants = require("chat-card-error-constants") /*id: 663540*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docBlockZoomUtils = require("doc-block-zoom-utils") /*id: 735944*/;
  var docxSyncedBlockUtils = require("docx-synced-block-utils") /*id: 791402*/;
  require("grid-column-layout-utils") /*id: 139275*/;
  require("doc-block-cell-utils") /*id: 48515*/;
  var docQuoteContainerOps = require("doc-quote-container-ops") /*id: 780546*/;
  var iframeLayoutConfig = require("iframe-layout-config") /*id: 587832*/;
  require("bool-default-getter-util") /*id: 855627*/;
  var docxBlockTypeConstants_2 = require("docx-block-type-constants_2") /*id: 886147*/;
  var syncedBlockFeatureFlags = require("synced-block-feature-flags") /*id: 711756*/;
  var syncedBlockReferenceUtils = require("synced-block-reference-utils") /*id: 279191*/;
  var flowHeadingFoldUtils = require("flow-heading-fold-utils") /*id: 451530*/;
  var docxOverlayPositionSync = require("docx-overlay-position-sync") /*id: 662835*/;
  var docxDragDropConstants = require("docx-drag-drop-constants") /*id: 253882*/;
  function I(e, n, r) {
    var o;
    if ((n = typeof (o = function (e, n) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var o = r.call(e, n || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (n === "string" ? String : Number)(e);
    }(n, "string")) == "symbol" ? o : o + "") in e) {
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
  require("layout-node-constants") /*id: 307129*/;
  let R = e => Array.isArray(e) ? e : [e];
  let y = e => R(e).map(e => `.${e}`);
  function O(e, n) {
    Object.assign(e.style, n);
  }
  let S = e => {
    e.preventDefault();
  };
  let A = (e, n, r) => e.left <= n && n <= e.right && e.top <= r && r <= e.bottom;
  let L = (e, n) => {
    let r = e.className;
    if (!r.includes(n)) {
      e.className = `${r} ${n}`;
    }
  };
  let N = (e, n) => {
    let r = e.className;
    if (r.includes(n)) {
      e.className = r.replace(n, "");
    }
  };
  let B = e => !e.previousSibling;
  function D(e, n) {
    if (n <= 78 || e <= 78) {
      return 1;
    }
    let [r, o] = [n, e].sort((e, n) => e - n);
    return Math.min(1, Math.max(365 / o, 78 / r));
  }
  function w(e) {
    let {
      width: n,
      height: r,
      top: o,
      left: i
    } = P(e);
    let l = 0;
    if (e && e[0] && e[0].className && e[0].className.includes("table-block")) {
      let {
        width: n
      } = P([e[0].querySelector("table")]);
      l = n;
    }
    if (e && e[0] && e.length === 1 && e[0].classList && e[0].classList.contains("docx-file-block") && e[0].classList.contains("is-in-video-v2")) {
      let {
        width: n
      } = P([e[0].querySelector(".resizable-wrapper")]);
      l = n;
    }
    return {
      width: l || n,
      height: r,
      top: o,
      left: i
    };
  }
  let M = (e, n) => e.classList.contains(chatCardErrorConstants.chatCardInnerClass) ? chatCardErrorConstants.chatCardTimeout : n;
  function P(e) {
    let [n, r, o, i] = e.reduce((e, n, r) => {
      let [o, i, l, c] = e;
      let u = n;
      if (n.classList.contains("docx-ai-block")) {
        let e = n.getAttribute("data-record-id");
        u = document.querySelector(`[data-record-id="${e}"]`) || n;
      }
      let {
        width: a,
        top: s,
        bottom: d,
        left: f
      } = u.getBoundingClientRect();
      let h = M(u, a);
      if (h <= 0) {
        let e = parseInt(u.style.width, 10) || 0;
        let n = parseInt(u.style.height, 10) || 0;
        if (e > o) {
          o = e + 2;
        }
        i += n;
      } else {
        if (h > o) {
          o = h;
        }
        i += d - s;
      }
      if (r === 0) {
        l = s;
        c = f;
      }
      return [o, i, l, c];
    }, [0, 0, 0, 0]);
    return {
      width: n,
      height: r,
      top: o,
      left: i
    };
  }
  function F(e, n) {
    let {
      x: r,
      y: o
    } = n;
    if (r && o) {
      if (e.left === 0) {
        e.top;
      }
      return {
        x: 0,
        y: 0
      };
    } else {
      return null;
    }
  }
  let x = (e, n) => {
    let r = n.getBoundingClientRect();
    let o = e.getOverflowableContainer();
    let i = docxOverlayPositionSync.calcElementRect(e.contentElement);
    if (!o) {
      return r;
    }
    let l = docxOverlayPositionSync.calcElementRect(o);
    let c = Math.min(i.right, l.right);
    let {
      left: u
    } = i;
    let a = new DOMRect(u, r.top, c - u, r.height);
    return new DOMRect(a.left, r.top, a.width, r.height);
  };
  let U = function (e, n, r, o = 1) {
    let l = r.getBoundingClientRect();
    let c = docxDragDropConstants.tableSheetBlocks.includes(e.type) ? x(e, n) : n.getBoundingClientRect();
    let u = docxViewStateUtil.hasViewState(reduxStoreInitializer.reduxStore.getState());
    let s = u ? docBlockZoomUtils.calculateElementZoom(r) : 1;
    let d = u ? docBlockZoomUtils.calculateElementZoom(n) : 1;
    let f = (c.top * d - l.top * s) / o + r.scrollTop;
    let h = (c.left * d - l.left * s) / o + r.scrollLeft;
    let p = (h + c.width) / o;
    let g = (f + c.height) / o;
    return {
      top: f,
      bottom: g,
      left: h,
      right: p,
      height: c.height / o,
      width: c.width / o
    };
  };
  let G = (e, n) => e.hostElement ? U(e, e.hostElement, n) : null;
  let H = function (e, n, r, o = 1) {
    if (!e.hasBlockModelByBlockId(n)) {
      return null;
    }
    if (!e.hasBlockViewByBlockId(n)) {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: 0,
        width: 0
      };
    }
    let i = e.getBlockViewByBlockId(n);
    if (i.hostElement) {
      return U(i, i.hostElement, r, o);
    } else {
      return null;
    }
  };
  function K(e, n, r, o = 1) {
    if (!e.hasBlockViewByBlockId(n)) {
      return null;
    }
    let i = e.getBlockViewByBlockId(n);
    if (i.contentElement) {
      return U(i, i.contentElement, r, o);
    } else {
      return null;
    }
  }
  let Z = debounceUtil_1_1.debounce(function (e, n, r, o) {
    let i = o.getBlockViewByBlockId(e).hostElement;
    if (!r.origin || !r.origin.includes(e) || n) {
      (function () {
        let e = document.querySelectorAll(".drop-down-motion");
        document.querySelectorAll(".drop-up-motion").forEach(e => {
          e.classList.remove("drop-up-motion");
        });
        e.forEach(e => {
          e.classList.add("drop-up-motion");
          e.classList.remove("drop-down-motion");
        });
        Z.cancel();
      })();
      i.classList.add("drop-down-motion");
    }
  }, 34);
  function $(e, n) {
    let r;
    let o;
    let i = null;
    if (document.caretPositionFromPoint) {
      if (i = document.caretPositionFromPoint(e, n)) {
        r = i.offsetNode;
        ({
          offset: o
        } = i);
      }
    } else if (document.caretRangeFromPoint && (i = document.caretRangeFromPoint(e, n))) {
      r = i.startContainer;
      o = i.startOffset;
    }
    return {
      range: i,
      textNode: r,
      offset: o
    };
  }
  class j {
    destroy() {
      this.setEvents(false);
    }
    setEvents() {
      let e = !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
      let n = e ? "addEventListener" : "removeEventListener";
      this.e[n]("mousedown", this.handleMouseDown);
      this.e[n]("mouseup", this.handleMouseUp);
    }
    debounceCancel(e) {
      clearTimeout(this.cancelTimer);
      this.cancelTimer = window.setTimeout(() => {
        this.cancelTimer = 0;
        this.allowResetSelection = false;
      }, e);
    }
    constructor(e) {
      this.e = e;
      I(this, "allowResetSelection", false);
      I(this, "cancelTimer", 0);
      I(this, "mousedownTarget", null);
      I(this, "handleMouseDown", e => {
        this.mousedownTarget = e.target;
        this.allowResetSelection = true;
        this.debounceCancel(j.MOUSEDOWN_TO_MOUSEUP_MS);
      });
      I(this, "handleMouseUp", e => {
        if (this.mousedownTarget && e.target !== this.mousedownTarget) {
          this.allowResetSelection = false;
          this.mousedownTarget = null;
          return;
        }
        if (this.allowResetSelection) {
          this.debounceCancel(j.MOUSEUP_TO_CLICK_MS);
        }
      });
      this.setEvents(true);
    }
  }
  function V(e, n) {
    return e.every(e => {
      if (!n(e)) {
        return false;
      }
      let r = false;
      if (e.children.length) {
        r = !!e.struct.findDescendant(e => {
          let r = docxEditorCore.getBlockModel(e);
          return !!r && !n(r);
        });
      }
      return !r;
    });
  }
  function W(e) {
    let {
      model: n,
      fold: r
    } = e;
    let o = r.findClosestFoldsByBlock(n.id);
    if (o.length > 0) {
      return n;
    }
    let i = function (e) {
      let {
        model: n,
        fold: r
      } = e;
      if (!docxBlockValidatorUtils.isHeadingBlock(n.type) || !r.isFoldedOrFoldedBy(n.id)) {
        return null;
      }
      let o = null;
      let i = null;
      let l = n.nextSibling;
      let c = flowHeadingFoldUtils.parseHeadingLevel(n.type);
      while (l) {
        let e = flowHeadingFoldUtils.parseHeadingLevel(l.type);
        if (docxBlockValidatorUtils.isHeadingBlock(l.type) && c && e && e <= c) {
          break;
        }
        if (docxBlockValidatorUtils.isHeadingBlock(l.type)) {
          i = l;
        }
        if (r.isShow(l.id)) {
          o = docxBlockValidatorUtils.isHeadingBlock(l.type) ? i : l;
          break;
        }
        l = l.nextSibling;
      }
      return o;
    }(e);
    if (o.length !== 0 || i) {
      return i || (n == null ? undefined : n.nextSibling);
    } else {
      return null;
    }
  }
  function X(e, n, r) {
    let o = e.map(e => r.getBlockModelByBlockId(e));
    let i = !docQuoteContainerOps.isInsideQuote(n, r);
    let l = e.every(e => docQuoteContainerOps.isInsideQuote(e, r));
    return o.find(e => docBlockTypeConstants.agendaTaskTypes.includes(e.type) && e.type !== docBlockTypeConstants.blockTypeConstants.CODE) && l && i;
  }
  function Y(e) {
    return e.cloneNode(true);
  }
  function z(e, n) {
    let {
      CODE: r,
      CHAT_CARD: o,
      ISV: i,
      VIEW: l,
      TABLE: c
    } = docBlockTypeConstants.blockTypeConstants;
    if ([r, o, i, l].includes(e)) {
      n.style.border = "none";
    }
    if (e === c) {
      n.classList.add("docx-table-block");
      let e = n.querySelector(".table-selected");
      if (e != null) {
        e.classList.remove("table-selected");
      }
    }
  }
  I(j, "MOUSEDOWN_TO_MOUSEUP_MS", 200);
  I(j, "MOUSEUP_TO_CLICK_MS", 200);
  let q = e => {
    if (!syncedBlockFeatureFlags.isSyncedBlockBorderUiEnabled() || !e.querySelector(docxBlockTypeConstants_2.syncedBlockContainerClass)) {
      e.classList.remove("selected");
      e.classList.remove("hovered");
    }
  };
  let J = (e, n) => {
    q(e);
    let r = e.querySelector(".docx-ai-block");
    if (n.length === 1) {
      e.classList.add("is-dragging-one-snapshot");
      if (r && !e.querySelector(".copilot-chat-box__container-wrapper")) {
        e.classList.add("normal-ai-block");
      }
    }
    if (!browserEnvironmentDetectionUtils.browserDetector.isMobile && docxWidthModeConfig.isNotMobile()) {
      e.classList.add("docx-width-mode");
    }
    let o = syncedBlockReferenceUtils.getSyncedBorderUi();
    let i = syncedBlockReferenceUtils.getSyncedOverflowUi();
    if (e.querySelector(docxBlockTypeConstants_2.syncedBlockContainerClass)) {
      if (o !== "") {
        e.classList.add(o);
      }
      if (i !== "") {
        e.classList.add(i);
      }
    }
    if (r) {
      e.classList.add("wrapper-have-ai-block");
    }
  };
  let Q = e => {
    if (aiBlockTypeUtils.isAiBlock(e)) {
      return aiBlockTypeUtils.findAiBlockContainer(e);
    }
    if (docxSyncedBlockUtils.isSyncedBlockType(e)) {
      return docxSyncedBlockUtils.getSyncedContainer(e);
    }
    if ((e == null ? undefined : e.type) === docBlockTypeConstants.blockTypeConstants.IFRAME) {
      if ((e == null ? undefined : e.hostElement) && e.type === docBlockTypeConstants.blockTypeConstants.IFRAME) {
        return e.hostElement.querySelector(`.${iframeLayoutConfig.iframeContainer}`);
      } else {
        return null;
      }
    }
    return null;
  };
  require.d(exports, {
    SelectionHandler: function () {
      return j;
    },
    isFirstSibling: function () {
      return B;
    },
    getBlockRect: function () {
      return H;
    },
    isAgendaInQuote: function () {
      return X;
    },
    resetBlockStyle: function () {
      return z;
    },
    preventDefault: function () {
      return S;
    },
    formatSelectors: function () {
      return y;
    },
    isPointInRect: function () {
      return A;
    },
    getFoldedTarget: function () {
      return W;
    },
    getHostElementRect: function () {
      return G;
    },
    checkAllBlocks: function () {
      return V;
    },
    clearBlockState: function () {
      return q;
    },
    findBlockContainer: function () {
      return Q;
    },
    removeClassName: function () {
      return N;
    },
    addClassName: function () {
      return L;
    },
    getElementRect: function () {
      return U;
    },
    updateBlockState: function () {
      return J;
    },
    assignStyles: function () {
      return O;
    },
    getEffectiveRect: function () {
      return w;
    },
    calculateScale: function () {
      return D;
    },
    getCaretPosition: function () {
      return $;
    },
    validatePoint: function () {
      return F;
    },
    cloneNode: function () {
      return Y;
    },
    getContentRect: function () {
      return K;
    }
  });
}