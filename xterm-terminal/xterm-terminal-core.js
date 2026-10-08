// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9282.3785a645.js
         * chunkId: 9282
         * moduleId: 948613
         */
module.exports = function (module, exports, require) {
  var r;
  var s;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  s = () => (() => {
    "use strict";

    var e = {
      4567: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.AccessibilityManager = undefined;
        let n = i(9042);
        let o = i(9924);
        let a = i(844);
        let h = i(4725);
        let l = i(2585);
        let c = i(3656);
        let d = t.AccessibilityManager = class extends a.Disposable {
          _handleTab(e) {
            for (let t = 0; t < e; t++) {
              this._handleChar(" ");
            }
          }
          _handleChar(e) {
            if (this._liveRegionLineCount < 21) {
              if (this._charsToConsume.length > 0) {
                if (this._charsToConsume.shift() !== e) {
                  this._charsToAnnounce += e;
                }
              } else {
                this._charsToAnnounce += e;
              }
              if (e === "\n") {
                this._liveRegionLineCount++;
                if (this._liveRegionLineCount === 21) {
                  this._liveRegion.textContent += n.tooMuchOutput;
                }
              }
            }
          }
          _clearLiveRegion() {
            this._liveRegion.textContent = "";
            this._liveRegionLineCount = 0;
          }
          _handleKey(e) {
            this._clearLiveRegion();
            if (!/\p{Control}/u.test(e)) {
              this._charsToConsume.push(e);
            }
          }
          _refreshRows(e, t) {
            this._liveRegionDebouncer.refresh(e, t, this._terminal.rows);
          }
          _renderRows(e, t) {
            let i = this._terminal.buffer;
            let r = i.lines.length.toString();
            for (let s = e; s <= t; s++) {
              let e = i.lines.get(i.ydisp + s);
              let t = [];
              let n = (e == null ? undefined : e.translateToString(true, undefined, undefined, t)) || "";
              let o = (i.ydisp + s + 1).toString();
              let a = this._rowElements[s];
              if (a) {
                if (n.length === 0) {
                  a.innerText = "\xA0";
                  this._rowColumns.set(a, [0, 1]);
                } else {
                  a.textContent = n;
                  this._rowColumns.set(a, t);
                }
                a.setAttribute("aria-posinset", o);
                a.setAttribute("aria-setsize", r);
              }
            }
            this._announceCharacters();
          }
          _announceCharacters() {
            if (this._charsToAnnounce.length !== 0) {
              this._liveRegion.textContent += this._charsToAnnounce;
              this._charsToAnnounce = "";
            }
          }
          _handleBoundaryFocus(e, t) {
            let i;
            let r;
            let s = e.target;
            let n = this._rowElements[t === 0 ? 1 : this._rowElements.length - 2];
            if (s.getAttribute("aria-posinset") !== (t === 0 ? "1" : `${this._terminal.buffer.lines.length}`) && e.relatedTarget === n) {
              if (t === 0) {
                i = s;
                r = this._rowElements.pop();
                this._rowContainer.removeChild(r);
              } else {
                i = this._rowElements.shift();
                r = s;
                this._rowContainer.removeChild(i);
              }
              i.removeEventListener("focus", this._topBoundaryFocusListener);
              r.removeEventListener("focus", this._bottomBoundaryFocusListener);
              if (t === 0) {
                let e = this._createAccessibilityTreeNode();
                this._rowElements.unshift(e);
                this._rowContainer.insertAdjacentElement("afterbegin", e);
              } else {
                let e = this._createAccessibilityTreeNode();
                this._rowElements.push(e);
                this._rowContainer.appendChild(e);
              }
              this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener);
              this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener);
              this._terminal.scrollLines(t === 0 ? -1 : 1);
              this._rowElements[t === 0 ? 1 : this._rowElements.length - 2].focus();
              e.preventDefault();
              e.stopImmediatePropagation();
            }
          }
          _handleSelectionChange() {
            if (this._rowElements.length === 0) {
              return;
            }
            let i = document.getSelection();
            if (!i) {
              return;
            }
            if (i.isCollapsed) {
              if (this._rowContainer.contains(i.anchorNode)) {
                this._terminal.clearSelection();
              }
              return;
            }
            if (!i.anchorNode || !i.focusNode) {
              return;
            }
            let r = {
              node: i.anchorNode,
              offset: i.anchorOffset
            };
            let s = {
              node: i.focusNode,
              offset: i.focusOffset
            };
            if (r.node.compareDocumentPosition(s.node) & Node.DOCUMENT_POSITION_PRECEDING || r.node === s.node && r.offset > s.offset) {
              [r, s] = [s, r];
            }
            if (r.node.compareDocumentPosition(this._rowElements[0]) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING)) {
              r = {
                node: this._rowElements[0].childNodes[0],
                offset: 0
              };
            }
            if (!this._rowContainer.contains(r.node)) {
              return;
            }
            let n = this._rowElements.slice(-1)[0];
            if (s.node.compareDocumentPosition(n) & (Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_PRECEDING)) {
              s = {
                node: n,
                offset: n.textContent?.length ?? 0
              };
            }
            if (!this._rowContainer.contains(s.node)) {
              return;
            }
            let o = e => {
              let {
                node: t,
                offset: i
              } = e;
              let r = t instanceof Text ? t.parentNode : t;
              let s = parseInt(r == null ? undefined : r.getAttribute("aria-posinset"), 10) - 1;
              if (isNaN(s)) {
                return null;
              }
              let n = this._rowColumns.get(r);
              if (!n) {
                return null;
              }
              let o = i < n.length ? n[i] : n.slice(-1)[0] + 1;
              if (o >= this._terminal.cols) {
                ++s;
                o = 0;
              }
              return {
                row: s,
                column: o
              };
            };
            let a = o(r);
            let h = o(s);
            if (a && h) {
              if (a.row > h.row || a.row === h.row && a.column >= h.column) {
                throw Error("invalid range");
              }
              this._terminal.select(a.column, a.row, (h.row - a.row) * this._terminal.cols - a.column + h.column);
            }
          }
          _handleResize(e) {
            this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
            for (let e = this._rowContainer.children.length; e < this._terminal.rows; e++) {
              this._rowElements[e] = this._createAccessibilityTreeNode();
              this._rowContainer.appendChild(this._rowElements[e]);
            }
            while (this._rowElements.length > e) {
              this._rowContainer.removeChild(this._rowElements.pop());
            }
            this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener);
            this._refreshRowsDimensions();
          }
          _createAccessibilityTreeNode() {
            let e = this._coreBrowserService.mainDocument.createElement("div");
            e.setAttribute("role", "listitem");
            e.tabIndex = -1;
            this._refreshRowDimensions(e);
            return e;
          }
          _refreshRowsDimensions() {
            if (this._renderService.dimensions.css.cell.height) {
              this._accessibilityContainer.style.width = `${this._renderService.dimensions.css.canvas.width}px`;
              if (this._rowElements.length !== this._terminal.rows) {
                this._handleResize(this._terminal.rows);
              }
              for (let e = 0; e < this._terminal.rows; e++) {
                this._refreshRowDimensions(this._rowElements[e]);
              }
            }
          }
          _refreshRowDimensions(e) {
            e.style.height = `${this._renderService.dimensions.css.cell.height}px`;
          }
          constructor(e, t, i, r) {
            super();
            this._terminal = e;
            this._coreBrowserService = i;
            this._renderService = r;
            this._rowColumns = new WeakMap();
            this._liveRegionLineCount = 0;
            this._charsToConsume = [];
            this._charsToAnnounce = "";
            this._accessibilityContainer = this._coreBrowserService.mainDocument.createElement("div");
            this._accessibilityContainer.classList.add("xterm-accessibility");
            this._rowContainer = this._coreBrowserService.mainDocument.createElement("div");
            this._rowContainer.setAttribute("role", "list");
            this._rowContainer.classList.add("xterm-accessibility-tree");
            this._rowElements = [];
            for (let e = 0; e < this._terminal.rows; e++) {
              this._rowElements[e] = this._createAccessibilityTreeNode();
              this._rowContainer.appendChild(this._rowElements[e]);
            }
            this._topBoundaryFocusListener = e => this._handleBoundaryFocus(e, 0);
            this._bottomBoundaryFocusListener = e => this._handleBoundaryFocus(e, 1);
            this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener);
            this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener);
            this._refreshRowsDimensions();
            this._accessibilityContainer.appendChild(this._rowContainer);
            this._liveRegion = this._coreBrowserService.mainDocument.createElement("div");
            this._liveRegion.classList.add("live-region");
            this._liveRegion.setAttribute("aria-live", "assertive");
            this._accessibilityContainer.appendChild(this._liveRegion);
            this._liveRegionDebouncer = this.register(new o.TimeBasedDebouncer(this._renderRows.bind(this)));
            if (!this._terminal.element) {
              throw Error("Cannot enable accessibility before Terminal.open");
            }
            this._terminal.element.insertAdjacentElement("afterbegin", this._accessibilityContainer);
            this.register(this._terminal.onResize(e => this._handleResize(e.rows)));
            this.register(this._terminal.onRender(e => this._refreshRows(e.start, e.end)));
            this.register(this._terminal.onScroll(() => this._refreshRows()));
            this.register(this._terminal.onA11yChar(e => this._handleChar(e)));
            this.register(this._terminal.onLineFeed(() => this._handleChar("\n")));
            this.register(this._terminal.onA11yTab(e => this._handleTab(e)));
            this.register(this._terminal.onKey(e => this._handleKey(e.key)));
            this.register(this._terminal.onBlur(() => this._clearLiveRegion()));
            this.register(this._renderService.onDimensionsChange(() => this._refreshRowsDimensions()));
            this.register(c.addDisposableDomListener(document, "selectionchange", () => this._handleSelectionChange()));
            this.register(this._coreBrowserService.onDprChange(() => this._refreshRowsDimensions()));
            this._refreshRows();
            this.register(a.toDisposable(() => {
              this._accessibilityContainer.remove();
              this._rowElements.length = 0;
            }));
          }
        };
        t.AccessibilityManager = r([s(1, l.IInstantiationService), s(2, h.ICoreBrowserService), s(3, h.IRenderService)], d);
      },
      3614: (e, t) => {
        function i(e) {
          return e.replace(/\r?\n/g, "\r");
        }
        function r(e, t) {
          if (t) {
            return "[200~" + e + "[201~";
          } else {
            return e;
          }
        }
        function s(e, t, s, n) {
          e = r(e = i(e), s.decPrivateModes.bracketedPasteMode && n.rawOptions.ignoreBracketedPasteMode !== true);
          s.triggerDataEvent(e, true);
          t.value = "";
        }
        function n(e, t, i) {
          let r = i.getBoundingClientRect();
          let s = e.clientX - r.left - 10;
          let n = e.clientY - r.top - 10;
          t.style.width = "20px";
          t.style.height = "20px";
          t.style.left = `${s}px`;
          t.style.top = `${n}px`;
          t.style.zIndex = "1000";
          t.focus();
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.rightClickHandler = t.moveTextAreaUnderMouseCursor = t.paste = t.handlePasteEvent = t.copyHandler = t.bracketTextForPaste = t.prepareTextForTerminal = undefined;
        t.prepareTextForTerminal = i;
        t.bracketTextForPaste = r;
        t.copyHandler = function (e, t) {
          if (e.clipboardData) {
            e.clipboardData.setData("text/plain", t.selectionText);
          }
          e.preventDefault();
        };
        t.handlePasteEvent = function (e, t, i, r) {
          e.stopPropagation();
          if (e.clipboardData) {
            s(e.clipboardData.getData("text/plain"), t, i, r);
          }
        };
        t.paste = s;
        t.moveTextAreaUnderMouseCursor = n;
        t.rightClickHandler = function (e, t, i, r, s) {
          n(e, t, i);
          if (s) {
            r.rightClickSelect(e);
          }
          t.value = r.selectionText;
          t.select();
        };
      },
      7239: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.ColorContrastCache = undefined;
        let r = i(1505);
        t.ColorContrastCache = class {
          setCss(e, t, i) {
            this._css.set(e, t, i);
          }
          getCss(e, t) {
            return this._css.get(e, t);
          }
          setColor(e, t, i) {
            this._color.set(e, t, i);
          }
          getColor(e, t) {
            return this._color.get(e, t);
          }
          clear() {
            this._color.clear();
            this._css.clear();
          }
          constructor() {
            this._color = new r.TwoKeyMap();
            this._css = new r.TwoKeyMap();
          }
        };
      },
      3656: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.addDisposableDomListener = undefined;
        t.addDisposableDomListener = function (e, t, i, r) {
          e.addEventListener(t, i, r);
          let s = false;
          return {
            dispose: () => {
              if (!s) {
                s = true;
                e.removeEventListener(t, i, r);
              }
            }
          };
        };
      },
      3551: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.Linkifier = undefined;
        let n = i(3656);
        let o = i(8460);
        let a = i(844);
        let h = i(2585);
        let l = i(4725);
        let c = t.Linkifier = class extends a.Disposable {
          get currentLink() {
            return this._currentLink;
          }
          _handleMouseMove(e) {
            this._lastMouseEvent = e;
            let t = this._positionFromMouseEvent(e, this._element, this._mouseService);
            if (!t) {
              return;
            }
            this._isMouseOut = false;
            let i = e.composedPath();
            for (let e = 0; e < i.length; e++) {
              let t = i[e];
              if (t.classList.contains("xterm")) {
                break;
              }
              if (t.classList.contains("xterm-hover")) {
                return;
              }
            }
            if (!this._lastBufferCell || t.x !== this._lastBufferCell.x || t.y !== this._lastBufferCell.y) {
              this._handleHover(t);
              this._lastBufferCell = t;
            }
          }
          _handleHover(e) {
            if (this._activeLine !== e.y || this._wasResized) {
              this._clearCurrentLink();
              this._askForLink(e, false);
              this._wasResized = false;
              return;
            }
            if (!this._currentLink || !this._linkAtPosition(this._currentLink.link, e)) {
              this._clearCurrentLink();
              this._askForLink(e, true);
            }
          }
          _askForLink(e, t) {
            var i;
            var r;
            if (!this._activeProviderReplies || !t) {
              if ((i = this._activeProviderReplies) !== null && i !== undefined) {
                i.forEach(e => {
                  if (e != null) {
                    e.forEach(e => {
                      if (e.link.dispose) {
                        e.link.dispose();
                      }
                    });
                  }
                });
              }
              this._activeProviderReplies = new Map();
              this._activeLine = e.y;
            }
            let s = false;
            for (let [i, n] of this._linkProviderService.linkProviders.entries()) {
              if (t) {
                if ((r = this._activeProviderReplies) === null || r === undefined ? undefined : r.get(i)) {
                  s = this._checkLinkProviderResult(i, e, s);
                }
              } else {
                n.provideLinks(e.y, t => {
                  var r;
                  if (this._isMouseOut) {
                    return;
                  }
                  let o = t == null ? undefined : t.map(e => ({
                    link: e
                  }));
                  if ((r = this._activeProviderReplies) !== null && r !== undefined) {
                    r.set(i, o);
                  }
                  s = this._checkLinkProviderResult(i, e, s);
                  if (this._activeProviderReplies?.size === this._linkProviderService.linkProviders.length) {
                    this._removeIntersectingLinks(e.y, this._activeProviderReplies);
                  }
                });
              }
            }
          }
          _removeIntersectingLinks(e, t) {
            let i = new Set();
            for (let r = 0; r < t.size; r++) {
              let s = t.get(r);
              if (s) {
                for (let t = 0; t < s.length; t++) {
                  let r = s[t];
                  let n = r.link.range.start.y < e ? 0 : r.link.range.start.x;
                  let o = r.link.range.end.y > e ? this._bufferService.cols : r.link.range.end.x;
                  for (let e = n; e <= o; e++) {
                    if (i.has(e)) {
                      s.splice(t--, 1);
                      break;
                    }
                    i.add(e);
                  }
                }
              }
            }
          }
          _checkLinkProviderResult(e, t, i) {
            if (!this._activeProviderReplies) {
              return i;
            }
            let r = this._activeProviderReplies.get(e);
            let s = false;
            for (let t = 0; t < e; t++) {
              if (!this._activeProviderReplies.has(t) || !!this._activeProviderReplies.get(t)) {
                s = true;
              }
            }
            if (!s && r) {
              let e = r.find(e => this._linkAtPosition(e.link, t));
              if (e) {
                i = true;
                this._handleNewLink(e);
              }
            }
            if (this._activeProviderReplies.size === this._linkProviderService.linkProviders.length && !i) {
              for (let e = 0; e < this._activeProviderReplies.size; e++) {
                var n;
                let r = (n = this._activeProviderReplies.get(e)) === null || n === undefined ? undefined : n.find(e => this._linkAtPosition(e.link, t));
                if (r) {
                  i = true;
                  this._handleNewLink(r);
                  break;
                }
              }
            }
            return i;
          }
          _handleMouseDown() {
            this._mouseDownLink = this._currentLink;
          }
          _handleMouseUp(e) {
            if (!this._currentLink) {
              return;
            }
            let t = this._positionFromMouseEvent(e, this._element, this._mouseService);
            if (t && this._mouseDownLink === this._currentLink && this._linkAtPosition(this._currentLink.link, t)) {
              this._currentLink.link.activate(e, this._currentLink.link.text);
            }
          }
          _clearCurrentLink(e, t) {
            if (this._currentLink && this._lastMouseEvent && (!e || !t || this._currentLink.link.range.start.y >= e && this._currentLink.link.range.end.y <= t)) {
              this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent);
              this._currentLink = undefined;
              a.disposeArray(this._linkCacheDisposables);
            }
          }
          _handleNewLink(e) {
            if (!this._lastMouseEvent) {
              return;
            }
            let t = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
            if (t && this._linkAtPosition(e.link, t)) {
              this._currentLink = e;
              this._currentLink.state = {
                decorations: {
                  underline: e.link.decorations === undefined || e.link.decorations.underline,
                  pointerCursor: e.link.decorations === undefined || e.link.decorations.pointerCursor
                },
                isHovered: true
              };
              this._linkHover(this._element, e.link, this._lastMouseEvent);
              e.link.decorations = {};
              Object.defineProperties(e.link.decorations, {
                pointerCursor: {
                  get: () => {
                    var e;
                    var t;
                    if ((t = this._currentLink) === null || t === undefined) {
                      return undefined;
                    } else if ((e = t.state) === null || e === undefined) {
                      return undefined;
                    } else {
                      return e.decorations.pointerCursor;
                    }
                  },
                  set: e => {
                    if (this._currentLink?.state && this._currentLink.state.decorations.pointerCursor !== e) {
                      this._currentLink.state.decorations.pointerCursor = e;
                      if (this._currentLink.state.isHovered) {
                        this._element.classList.toggle("xterm-cursor-pointer", e);
                      }
                    }
                  }
                },
                underline: {
                  get: () => {
                    var e;
                    var t;
                    if ((t = this._currentLink) === null || t === undefined) {
                      return undefined;
                    } else if ((e = t.state) === null || e === undefined) {
                      return undefined;
                    } else {
                      return e.decorations.underline;
                    }
                  },
                  set: t => {
                    var r;
                    var s;
                    if (this._currentLink?.state && ((s = this._currentLink) === null || s === undefined ? undefined : (r = s.state) === null || r === undefined ? undefined : r.decorations.underline) !== t) {
                      this._currentLink.state.decorations.underline = t;
                      if (this._currentLink.state.isHovered) {
                        this._fireUnderlineEvent(e.link, t);
                      }
                    }
                  }
                }
              });
              this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange(e => {
                if (!this._currentLink) {
                  return;
                }
                let t = e.start === 0 ? 0 : e.start + 1 + this._bufferService.buffer.ydisp;
                let i = this._bufferService.buffer.ydisp + 1 + e.end;
                if (this._currentLink.link.range.start.y >= t && this._currentLink.link.range.end.y <= i && (this._clearCurrentLink(t, i), this._lastMouseEvent)) {
                  let e = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                  if (e) {
                    this._askForLink(e, false);
                  }
                }
              }));
            }
          }
          _linkHover(e, t, i) {
            if (this._currentLink?.state) {
              this._currentLink.state.isHovered = true;
              if (this._currentLink.state.decorations.underline) {
                this._fireUnderlineEvent(t, true);
              }
              if (this._currentLink.state.decorations.pointerCursor) {
                e.classList.add("xterm-cursor-pointer");
              }
            }
            if (t.hover) {
              t.hover(i, t.text);
            }
          }
          _fireUnderlineEvent(e, t) {
            let i = e.range;
            let r = this._bufferService.buffer.ydisp;
            let s = this._createLinkUnderlineEvent(i.start.x - 1, i.start.y - r - 1, i.end.x, i.end.y - r - 1, undefined);
            (t ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(s);
          }
          _linkLeave(e, t, i) {
            if (this._currentLink?.state) {
              this._currentLink.state.isHovered = false;
              if (this._currentLink.state.decorations.underline) {
                this._fireUnderlineEvent(t, false);
              }
              if (this._currentLink.state.decorations.pointerCursor) {
                e.classList.remove("xterm-cursor-pointer");
              }
            }
            if (t.leave) {
              t.leave(i, t.text);
            }
          }
          _linkAtPosition(e, t) {
            let i = e.range.start.y * this._bufferService.cols + e.range.start.x;
            let r = e.range.end.y * this._bufferService.cols + e.range.end.x;
            let s = t.y * this._bufferService.cols + t.x;
            return i <= s && s <= r;
          }
          _positionFromMouseEvent(e, t, i) {
            let r = i.getCoords(e, t, this._bufferService.cols, this._bufferService.rows);
            if (r) {
              return {
                x: r[0],
                y: r[1] + this._bufferService.buffer.ydisp
              };
            }
          }
          _createLinkUnderlineEvent(e, t, i, r, s) {
            return {
              x1: e,
              y1: t,
              x2: i,
              y2: r,
              cols: this._bufferService.cols,
              fg: s
            };
          }
          constructor(e, t, i, r, s) {
            super();
            this._element = e;
            this._mouseService = t;
            this._renderService = i;
            this._bufferService = r;
            this._linkProviderService = s;
            this._linkCacheDisposables = [];
            this._isMouseOut = true;
            this._wasResized = false;
            this._activeLine = -1;
            this._onShowLinkUnderline = this.register(new o.EventEmitter());
            this.onShowLinkUnderline = this._onShowLinkUnderline.event;
            this._onHideLinkUnderline = this.register(new o.EventEmitter());
            this.onHideLinkUnderline = this._onHideLinkUnderline.event;
            this.register(a.getDisposeArrayDisposable(this._linkCacheDisposables));
            this.register(a.toDisposable(() => {
              var e;
              this._lastMouseEvent = undefined;
              if ((e = this._activeProviderReplies) !== null && e !== undefined) {
                e.clear();
              }
            }));
            this.register(this._bufferService.onResize(() => {
              this._clearCurrentLink();
              this._wasResized = true;
            }));
            this.register(n.addDisposableDomListener(this._element, "mouseleave", () => {
              this._isMouseOut = true;
              this._clearCurrentLink();
            }));
            this.register(n.addDisposableDomListener(this._element, "mousemove", this._handleMouseMove.bind(this)));
            this.register(n.addDisposableDomListener(this._element, "mousedown", this._handleMouseDown.bind(this)));
            this.register(n.addDisposableDomListener(this._element, "mouseup", this._handleMouseUp.bind(this)));
          }
        };
        t.Linkifier = r([s(1, l.IMouseService), s(2, l.IRenderService), s(3, h.IBufferService), s(4, l.ILinkProviderService)], c);
      },
      9042: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.tooMuchOutput = t.promptLabel = undefined;
        t.promptLabel = "Terminal input";
        t.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
      },
      3730: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.OscLinkProvider = undefined;
        let n = i(511);
        let o = i(2585);
        let a = t.OscLinkProvider = class {
          provideLinks(e, t) {
            let i = this._bufferService.buffer.lines.get(e - 1);
            if (!i) {
              t(undefined);
              return;
            }
            let r = [];
            let s = this._optionsService.rawOptions.linkHandler;
            let o = new n.CellData();
            let a = i.getTrimmedLength();
            let h = -1;
            let l = -1;
            let c = false;
            for (let t = 0; t < a; t++) {
              if (l !== -1 || i.hasContent(t)) {
                i.loadCell(t, o);
                if (o.hasExtendedAttrs() && o.extended.urlId) {
                  if (l === -1) {
                    l = t;
                    h = o.extended.urlId;
                    continue;
                  }
                  c = o.extended.urlId !== h;
                } else if (l !== -1) {
                  c = true;
                }
                if (c || l !== -1 && t === a - 1) {
                  let i = this._oscLinkService.getLinkData(h)?.uri;
                  if (i) {
                    let n = {
                      start: {
                        x: l + 1,
                        y: e
                      },
                      end: {
                        x: t + (c || t !== a - 1 ? 0 : 1),
                        y: e
                      }
                    };
                    let o = false;
                    if (!(s == null ? undefined : s.allowNonHttpProtocols)) {
                      try {
                        let e = new URL(i);
                        if (!["http:", "https:"].includes(e.protocol)) {
                          o = true;
                        }
                      } catch (e) {
                        o = true;
                      }
                    }
                    if (!o) {
                      r.push({
                        text: i,
                        range: n,
                        activate: (e, t) => s ? s.activate(e, t, n) : function (e, t) {
                          if (confirm(`Do you want to navigate to ${t}?

WARNING: This link could potentially be dangerous`)) {
                            let e = window.open();
                            if (e) {
                              try {
                                e.opener = null;
                              } catch {}
                              e.location.href = t;
                            }
                          }
                        }(0, t),
                        hover: (e, t) => {
                          var i;
                          if (s == null) {
                            return undefined;
                          } else if ((i = s.hover) === null || i === undefined) {
                            return undefined;
                          } else {
                            return i.call(s, e, t, n);
                          }
                        },
                        leave: (e, t) => {
                          var i;
                          if (s == null) {
                            return undefined;
                          } else if ((i = s.leave) === null || i === undefined) {
                            return undefined;
                          } else {
                            return i.call(s, e, t, n);
                          }
                        }
                      });
                    }
                  }
                  c = false;
                  if (o.hasExtendedAttrs() && o.extended.urlId) {
                    l = t;
                    h = o.extended.urlId;
                  } else {
                    l = -1;
                    h = -1;
                  }
                }
              }
            }
            t(r);
          }
          constructor(e, t, i) {
            this._bufferService = e;
            this._optionsService = t;
            this._oscLinkService = i;
          }
        };
        t.OscLinkProvider = r([s(0, o.IBufferService), s(1, o.IOptionsService), s(2, o.IOscLinkService)], a);
      },
      6193: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.RenderDebouncer = undefined;
        t.RenderDebouncer = class {
          dispose() {
            if (this._animationFrame) {
              this._coreBrowserService.window.cancelAnimationFrame(this._animationFrame);
              this._animationFrame = undefined;
            }
          }
          addRefreshCallback(e) {
            this._refreshCallbacks.push(e);
            this._animationFrame ||= this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh());
            return this._animationFrame;
          }
          refresh(e, t, i) {
            this._rowCount = i;
            e = e !== undefined ? e : 0;
            t = t !== undefined ? t : this._rowCount - 1;
            this._rowStart = this._rowStart !== undefined ? Math.min(this._rowStart, e) : e;
            this._rowEnd = this._rowEnd !== undefined ? Math.max(this._rowEnd, t) : t;
            this._animationFrame ||= this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh());
          }
          _innerRefresh() {
            this._animationFrame = undefined;
            if (this._rowStart === undefined || this._rowEnd === undefined || this._rowCount === undefined) {
              this._runRefreshCallbacks();
              return;
            }
            let e = Math.max(this._rowStart, 0);
            let t = Math.min(this._rowEnd, this._rowCount - 1);
            this._rowStart = undefined;
            this._rowEnd = undefined;
            this._renderCallback(e, t);
            this._runRefreshCallbacks();
          }
          _runRefreshCallbacks() {
            for (let e of this._refreshCallbacks) {
              e(0);
            }
            this._refreshCallbacks = [];
          }
          constructor(e, t) {
            this._renderCallback = e;
            this._coreBrowserService = t;
            this._refreshCallbacks = [];
          }
        };
      },
      3236: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.Terminal = undefined;
        let r = i(3614);
        let s = i(3656);
        let n = i(3551);
        let o = i(9042);
        let a = i(3730);
        let h = i(1680);
        let l = i(3107);
        let c = i(5744);
        let d = i(2950);
        let _ = i(1296);
        let u = i(428);
        let f = i(4269);
        let v = i(5114);
        let p = i(8934);
        let g = i(3230);
        let m = i(9312);
        let S = i(4725);
        let C = i(6731);
        let b = i(8055);
        let w = i(8969);
        let y = i(8460);
        let E = i(844);
        let x = i(6114);
        let k = i(8437);
        let L = i(2584);
        let D = i(7399);
        let R = i(5941);
        let A = i(9074);
        let B = i(2585);
        let T = i(5435);
        let M = i(4567);
        let O = i(779);
        class P extends w.CoreTerminal {
          get onFocus() {
            return this._onFocus.event;
          }
          get onBlur() {
            return this._onBlur.event;
          }
          get onA11yChar() {
            return this._onA11yCharEmitter.event;
          }
          get onA11yTab() {
            return this._onA11yTabEmitter.event;
          }
          get onWillOpen() {
            return this._onWillOpen.event;
          }
          _handleColorEvent(e) {
            if (this._themeService) {
              for (let t of e) {
                let e;
                let i = "";
                switch (t.index) {
                  case 256:
                    e = "foreground";
                    i = "10";
                    break;
                  case 257:
                    e = "background";
                    i = "11";
                    break;
                  case 258:
                    e = "cursor";
                    i = "12";
                    break;
                  default:
                    e = "ansi";
                    i = "4;" + t.index;
                }
                switch (t.type) {
                  case 0:
                    let r = b.color.toColorRGB(e === "ansi" ? this._themeService.colors.ansi[t.index] : this._themeService.colors[e]);
                    this.coreService.triggerDataEvent(`${L.C0.ESC}]${i};${R.toRgbString(r)}${L.C1_ESCAPED.ST}`);
                    break;
                  case 1:
                    if (e === "ansi") {
                      this._themeService.modifyColors(e => e.ansi[t.index] = b.channels.toColor(...t.color));
                    } else {
                      let i = e;
                      this._themeService.modifyColors(e => e[i] = b.channels.toColor(...t.color));
                    }
                    break;
                  case 2:
                    this._themeService.restoreColor(t.index);
                }
              }
            }
          }
          _setup() {
            super._setup();
            this._customKeyEventHandler = undefined;
          }
          get buffer() {
            return this.buffers.active;
          }
          focus() {
            if (this.textarea) {
              this.textarea.focus({
                preventScroll: true
              });
            }
          }
          _handleScreenReaderModeOptionChange(e) {
            if (e) {
              if (!this._accessibilityManager.value && this._renderService) {
                this._accessibilityManager.value = this._instantiationService.createInstance(M.AccessibilityManager, this);
              }
            } else {
              this._accessibilityManager.clear();
            }
          }
          _handleTextAreaFocus(e) {
            if (this.coreService.decPrivateModes.sendFocus) {
              this.coreService.triggerDataEvent(L.C0.ESC + "[I");
            }
            this.element.classList.add("focus");
            this._showCursor();
            this._onFocus.fire();
          }
          blur() {
            var e;
            if ((e = this.textarea) === null || e === undefined) {
              return undefined;
            } else {
              return e.blur();
            }
          }
          _handleTextAreaBlur() {
            this.textarea.value = "";
            this.refresh(this.buffer.y, this.buffer.y);
            if (this.coreService.decPrivateModes.sendFocus) {
              this.coreService.triggerDataEvent(L.C0.ESC + "[O");
            }
            this.element.classList.remove("focus");
            this._onBlur.fire();
          }
          _syncTextArea() {
            if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper.isComposing || !this._renderService) {
              return;
            }
            let e = this.buffer.ybase + this.buffer.y;
            let t = this.buffer.lines.get(e);
            if (!t) {
              return;
            }
            let i = Math.min(this.buffer.x, this.cols - 1);
            let r = this._renderService.dimensions.css.cell.height;
            let s = t.getWidth(i);
            let n = this._renderService.dimensions.css.cell.width * s;
            let o = this.buffer.y * this._renderService.dimensions.css.cell.height;
            let a = i * this._renderService.dimensions.css.cell.width;
            this.textarea.style.left = a + "px";
            this.textarea.style.top = o + "px";
            this.textarea.style.width = n + "px";
            this.textarea.style.height = r + "px";
            this.textarea.style.lineHeight = r + "px";
            this.textarea.style.zIndex = "-5";
          }
          _initGlobal() {
            this._bindKeys();
            this.register(s.addDisposableDomListener(this.element, "copy", e => {
              if (this.hasSelection()) {
                r.copyHandler(e, this._selectionService);
              }
            }));
            let e = e => r.handlePasteEvent(e, this.textarea, this.coreService, this.optionsService);
            this.register(s.addDisposableDomListener(this.textarea, "paste", e));
            this.register(s.addDisposableDomListener(this.element, "paste", e));
            if (x.isFirefox) {
              this.register(s.addDisposableDomListener(this.element, "mousedown", e => {
                if (e.button === 2) {
                  r.rightClickHandler(e, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
                }
              }));
            } else {
              this.register(s.addDisposableDomListener(this.element, "contextmenu", e => {
                r.rightClickHandler(e, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
              }));
            }
            if (x.isLinux) {
              this.register(s.addDisposableDomListener(this.element, "auxclick", e => {
                if (e.button === 1) {
                  r.moveTextAreaUnderMouseCursor(e, this.textarea, this.screenElement);
                }
              }));
            }
          }
          _bindKeys() {
            this.register(s.addDisposableDomListener(this.textarea, "keyup", e => this._keyUp(e), true));
            this.register(s.addDisposableDomListener(this.textarea, "keydown", e => this._keyDown(e), true));
            this.register(s.addDisposableDomListener(this.textarea, "keypress", e => this._keyPress(e), true));
            this.register(s.addDisposableDomListener(this.textarea, "compositionstart", () => this._compositionHelper.compositionstart()));
            this.register(s.addDisposableDomListener(this.textarea, "compositionupdate", e => this._compositionHelper.compositionupdate(e)));
            this.register(s.addDisposableDomListener(this.textarea, "compositionend", () => this._compositionHelper.compositionend()));
            this.register(s.addDisposableDomListener(this.textarea, "input", e => this._inputEvent(e), true));
            this.register(this.onRender(() => this._compositionHelper.updateCompositionElements()));
          }
          open(e) {
            var t;
            if (!e) {
              throw Error("Terminal requires a parent element.");
            }
            if (!e.isConnected) {
              this._logService.debug("Terminal.open was called on an element that was not attached to the DOM");
            }
            if (((t = this.element) === null || t === undefined ? undefined : t.ownerDocument.defaultView) && this._coreBrowserService) {
              if (this.element.ownerDocument.defaultView !== this._coreBrowserService.window) {
                this._coreBrowserService.window = this.element.ownerDocument.defaultView;
              }
              return;
            }
            this._document = e.ownerDocument;
            if (this.options.documentOverride && this.options.documentOverride instanceof Document) {
              this._document = this.optionsService.rawOptions.documentOverride;
            }
            this.element = this._document.createElement("div");
            this.element.dir = "ltr";
            this.element.classList.add("terminal");
            this.element.classList.add("xterm");
            e.appendChild(this.element);
            let a = this._document.createDocumentFragment();
            this._viewportElement = this._document.createElement("div");
            this._viewportElement.classList.add("xterm-viewport");
            a.appendChild(this._viewportElement);
            this._viewportScrollArea = this._document.createElement("div");
            this._viewportScrollArea.classList.add("xterm-scroll-area");
            this._viewportElement.appendChild(this._viewportScrollArea);
            this.screenElement = this._document.createElement("div");
            this.screenElement.classList.add("xterm-screen");
            this.register(s.addDisposableDomListener(this.screenElement, "mousemove", e => this.updateCursorStyle(e)));
            this._helperContainer = this._document.createElement("div");
            this._helperContainer.classList.add("xterm-helpers");
            this.screenElement.appendChild(this._helperContainer);
            a.appendChild(this.screenElement);
            this.textarea = this._document.createElement("textarea");
            this.textarea.classList.add("xterm-helper-textarea");
            this.textarea.setAttribute("aria-label", o.promptLabel);
            if (!x.isChromeOS) {
              this.textarea.setAttribute("aria-multiline", "false");
            }
            this.textarea.setAttribute("autocorrect", "off");
            this.textarea.setAttribute("autocapitalize", "off");
            this.textarea.setAttribute("spellcheck", "false");
            this.textarea.tabIndex = 0;
            this._coreBrowserService = this.register(this._instantiationService.createInstance(v.CoreBrowserService, this.textarea, e.ownerDocument.defaultView ?? window, this._document ?? typeof window != "undefined" ? window.document : null));
            this._instantiationService.setService(S.ICoreBrowserService, this._coreBrowserService);
            this.register(s.addDisposableDomListener(this.textarea, "focus", e => this._handleTextAreaFocus(e)));
            this.register(s.addDisposableDomListener(this.textarea, "blur", () => this._handleTextAreaBlur()));
            this._helperContainer.appendChild(this.textarea);
            this._charSizeService = this._instantiationService.createInstance(u.CharSizeService, this._document, this._helperContainer);
            this._instantiationService.setService(S.ICharSizeService, this._charSizeService);
            this._themeService = this._instantiationService.createInstance(C.ThemeService);
            this._instantiationService.setService(S.IThemeService, this._themeService);
            this._characterJoinerService = this._instantiationService.createInstance(f.CharacterJoinerService);
            this._instantiationService.setService(S.ICharacterJoinerService, this._characterJoinerService);
            this._renderService = this.register(this._instantiationService.createInstance(g.RenderService, this.rows, this.screenElement));
            this._instantiationService.setService(S.IRenderService, this._renderService);
            this.register(this._renderService.onRenderedViewportChange(e => this._onRender.fire(e)));
            this.onResize(e => this._renderService.resize(e.cols, e.rows));
            this._compositionView = this._document.createElement("div");
            this._compositionView.classList.add("composition-view");
            this._compositionHelper = this._instantiationService.createInstance(d.CompositionHelper, this.textarea, this._compositionView);
            this._helperContainer.appendChild(this._compositionView);
            this._mouseService = this._instantiationService.createInstance(p.MouseService);
            this._instantiationService.setService(S.IMouseService, this._mouseService);
            this.linkifier = this.register(this._instantiationService.createInstance(n.Linkifier, this.screenElement));
            this.element.appendChild(a);
            try {
              this._onWillOpen.fire(this.element);
            } catch {}
            if (!this._renderService.hasRenderer()) {
              this._renderService.setRenderer(this._createRenderer());
            }
            this.viewport = this._instantiationService.createInstance(h.Viewport, this._viewportElement, this._viewportScrollArea);
            this.viewport.onRequestScrollLines(e => this.scrollLines(e.amount, e.suppressScrollEvent, 1));
            this.register(this._inputHandler.onRequestSyncScrollBar(() => this.viewport.syncScrollArea()));
            this.register(this.viewport);
            this.register(this.onCursorMove(() => {
              this._renderService.handleCursorMove();
              this._syncTextArea();
            }));
            this.register(this.onResize(() => this._renderService.handleResize(this.cols, this.rows)));
            this.register(this.onBlur(() => this._renderService.handleBlur()));
            this.register(this.onFocus(() => this._renderService.handleFocus()));
            this.register(this._renderService.onDimensionsChange(() => this.viewport.syncScrollArea()));
            this._selectionService = this.register(this._instantiationService.createInstance(m.SelectionService, this.element, this.screenElement, this.linkifier));
            this._instantiationService.setService(S.ISelectionService, this._selectionService);
            this.register(this._selectionService.onRequestScrollLines(e => this.scrollLines(e.amount, e.suppressScrollEvent)));
            this.register(this._selectionService.onSelectionChange(() => this._onSelectionChange.fire()));
            this.register(this._selectionService.onRequestRedraw(e => this._renderService.handleSelectionChanged(e.start, e.end, e.columnSelectMode)));
            this.register(this._selectionService.onLinuxMouseSelection(e => {
              this.textarea.value = e;
              this.textarea.focus();
              this.textarea.select();
            }));
            this.register(this._onScroll.event(e => {
              this.viewport.syncScrollArea();
              this._selectionService.refresh();
            }));
            this.register(s.addDisposableDomListener(this._viewportElement, "scroll", () => this._selectionService.refresh()));
            this.register(this._instantiationService.createInstance(l.BufferDecorationRenderer, this.screenElement));
            this.register(s.addDisposableDomListener(this.element, "mousedown", e => this._selectionService.handleMouseDown(e)));
            if (this.coreMouseService.areMouseEventsActive) {
              this._selectionService.disable();
              this.element.classList.add("enable-mouse-events");
            } else {
              this._selectionService.enable();
            }
            if (this.options.screenReaderMode) {
              this._accessibilityManager.value = this._instantiationService.createInstance(M.AccessibilityManager, this);
            }
            this.register(this.optionsService.onSpecificOptionChange("screenReaderMode", e => this._handleScreenReaderModeOptionChange(e)));
            if (this.options.overviewRulerWidth) {
              this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(c.OverviewRulerRenderer, this._viewportElement, this.screenElement));
            }
            this.optionsService.onSpecificOptionChange("overviewRulerWidth", e => {
              if (!this._overviewRulerRenderer && e && this._viewportElement && this.screenElement) {
                this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(c.OverviewRulerRenderer, this._viewportElement, this.screenElement));
              }
            });
            this._charSizeService.measure();
            this.refresh(0, this.rows - 1);
            this._initGlobal();
            this.bindMouse();
          }
          _createRenderer() {
            return this._instantiationService.createInstance(_.DomRenderer, this, this._document, this.element, this.screenElement, this._viewportElement, this._helperContainer, this.linkifier);
          }
          bindMouse() {
            let e = this;
            let t = this.element;
            function i(t) {
              let i;
              let r;
              let s = e._mouseService.getMouseReportCoords(t, e.screenElement);
              if (!s) {
                return false;
              }
              switch (t.overrideType || t.type) {
                case "mousemove":
                  r = 32;
                  if (t.buttons === undefined) {
                    i = 3;
                    if (t.button !== undefined) {
                      i = t.button < 3 ? t.button : 3;
                    }
                  } else {
                    i = t.buttons & 1 ? 0 : t.buttons & 4 ? 1 : t.buttons & 2 ? 2 : 3;
                  }
                  break;
                case "mouseup":
                  r = 0;
                  i = t.button < 3 ? t.button : 3;
                  break;
                case "mousedown":
                  r = 1;
                  i = t.button < 3 ? t.button : 3;
                  break;
                case "wheel":
                  if (e._customWheelEventHandler && e._customWheelEventHandler(t) === false || e.viewport.getLinesScrolled(t) === 0) {
                    return false;
                  }
                  r = t.deltaY < 0 ? 0 : 1;
                  i = 4;
                  break;
                default:
                  return false;
              }
              return r !== undefined && i !== undefined && !(i > 4) && e.coreMouseService.triggerMouseEvent({
                col: s.col,
                row: s.row,
                x: s.x,
                y: s.y,
                button: i,
                action: r,
                ctrl: t.ctrlKey,
                alt: t.altKey,
                shift: t.shiftKey
              });
            }
            let r = {
              mouseup: null,
              wheel: null,
              mousedrag: null,
              mousemove: null
            };
            let n = {
              mouseup: e => {
                i(e);
                if (!e.buttons) {
                  this._document.removeEventListener("mouseup", r.mouseup);
                  if (r.mousedrag) {
                    this._document.removeEventListener("mousemove", r.mousedrag);
                  }
                }
                return this.cancel(e);
              },
              wheel: e => {
                i(e);
                return this.cancel(e, true);
              },
              mousedrag: e => {
                if (e.buttons) {
                  i(e);
                }
              },
              mousemove: e => {
                if (!e.buttons) {
                  i(e);
                }
              }
            };
            this.register(this.coreMouseService.onProtocolChange(e => {
              if (e) {
                if (this.optionsService.rawOptions.logLevel === "debug") {
                  this._logService.debug("Binding to mouse events:", this.coreMouseService.explainEvents(e));
                }
                this.element.classList.add("enable-mouse-events");
                this._selectionService.disable();
              } else {
                this._logService.debug("Unbinding from mouse events.");
                this.element.classList.remove("enable-mouse-events");
                this._selectionService.enable();
              }
              if (e & 8) {
                if (!r.mousemove) {
                  t.addEventListener("mousemove", n.mousemove);
                  r.mousemove = n.mousemove;
                }
              } else {
                t.removeEventListener("mousemove", r.mousemove);
                r.mousemove = null;
              }
              if (e & 16) {
                if (!r.wheel) {
                  t.addEventListener("wheel", n.wheel, {
                    passive: false
                  });
                  r.wheel = n.wheel;
                }
              } else {
                t.removeEventListener("wheel", r.wheel);
                r.wheel = null;
              }
              if (e & 2) {
                r.mouseup ||= n.mouseup;
              } else {
                this._document.removeEventListener("mouseup", r.mouseup);
                r.mouseup = null;
              }
              if (e & 4) {
                r.mousedrag ||= n.mousedrag;
              } else {
                this._document.removeEventListener("mousemove", r.mousedrag);
                r.mousedrag = null;
              }
            }));
            this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol;
            this.register(s.addDisposableDomListener(t, "mousedown", e => {
              e.preventDefault();
              this.focus();
              if (this.coreMouseService.areMouseEventsActive && !this._selectionService.shouldForceSelection(e)) {
                i(e);
                if (r.mouseup) {
                  this._document.addEventListener("mouseup", r.mouseup);
                }
                if (r.mousedrag) {
                  this._document.addEventListener("mousemove", r.mousedrag);
                }
                return this.cancel(e);
              }
            }));
            this.register(s.addDisposableDomListener(t, "wheel", e => {
              if (!r.wheel) {
                if (this._customWheelEventHandler && this._customWheelEventHandler(e) === false) {
                  return false;
                }
                if (!this.buffer.hasScrollback) {
                  let t = this.viewport.getLinesScrolled(e);
                  if (t === 0) {
                    return;
                  }
                  let i = L.C0.ESC + (this.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (e.deltaY < 0 ? "A" : "B");
                  let r = "";
                  for (let e = 0; e < Math.abs(t); e++) {
                    r += i;
                  }
                  this.coreService.triggerDataEvent(r, true);
                  return this.cancel(e, true);
                }
                if (this.viewport.handleWheel(e)) {
                  return this.cancel(e);
                } else {
                  return undefined;
                }
              }
            }, {
              passive: false
            }));
            this.register(s.addDisposableDomListener(t, "touchstart", e => {
              if (!this.coreMouseService.areMouseEventsActive) {
                this.viewport.handleTouchStart(e);
                return this.cancel(e);
              }
            }, {
              passive: true
            }));
            this.register(s.addDisposableDomListener(t, "touchmove", e => {
              if (!this.coreMouseService.areMouseEventsActive) {
                if (this.viewport.handleTouchMove(e)) {
                  return undefined;
                } else {
                  return this.cancel(e);
                }
              }
            }, {
              passive: false
            }));
          }
          refresh(e, t) {
            var i;
            if ((i = this._renderService) !== null && i !== undefined) {
              i.refreshRows(e, t);
            }
          }
          updateCursorStyle(e) {
            var t;
            if ((t = this._selectionService) === null || t === undefined ? undefined : t.shouldColumnSelect(e)) {
              this.element.classList.add("column-select");
            } else {
              this.element.classList.remove("column-select");
            }
          }
          _showCursor() {
            if (!this.coreService.isCursorInitialized) {
              this.coreService.isCursorInitialized = true;
              this.refresh(this.buffer.y, this.buffer.y);
            }
          }
          scrollLines(e, t) {
            var i;
            let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            if (r === 1) {
              super.scrollLines(e, t, r);
              this.refresh(0, this.rows - 1);
            } else if ((i = this.viewport) !== null && i !== undefined) {
              i.scrollLines(e);
            }
          }
          paste(e) {
            r.paste(e, this.textarea, this.coreService, this.optionsService);
          }
          attachCustomKeyEventHandler(e) {
            this._customKeyEventHandler = e;
          }
          attachCustomWheelEventHandler(e) {
            this._customWheelEventHandler = e;
          }
          registerLinkProvider(e) {
            return this._linkProviderService.registerLinkProvider(e);
          }
          registerCharacterJoiner(e) {
            if (!this._characterJoinerService) {
              throw Error("Terminal must be opened first");
            }
            let t = this._characterJoinerService.register(e);
            this.refresh(0, this.rows - 1);
            return t;
          }
          deregisterCharacterJoiner(e) {
            if (!this._characterJoinerService) {
              throw Error("Terminal must be opened first");
            }
            if (this._characterJoinerService.deregister(e)) {
              this.refresh(0, this.rows - 1);
            }
          }
          get markers() {
            return this.buffer.markers;
          }
          registerMarker(e) {
            return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e);
          }
          registerDecoration(e) {
            return this._decorationService.registerDecoration(e);
          }
          hasSelection() {
            return !!this._selectionService && this._selectionService.hasSelection;
          }
          select(e, t, i) {
            this._selectionService.setSelection(e, t, i);
          }
          getSelection() {
            if (this._selectionService) {
              return this._selectionService.selectionText;
            } else {
              return "";
            }
          }
          getSelectionPosition() {
            if (this._selectionService && this._selectionService.hasSelection) {
              return {
                start: {
                  x: this._selectionService.selectionStart[0],
                  y: this._selectionService.selectionStart[1]
                },
                end: {
                  x: this._selectionService.selectionEnd[0],
                  y: this._selectionService.selectionEnd[1]
                }
              };
            }
          }
          clearSelection() {
            var e;
            if ((e = this._selectionService) !== null && e !== undefined) {
              e.clearSelection();
            }
          }
          selectAll() {
            var e;
            if ((e = this._selectionService) !== null && e !== undefined) {
              e.selectAll();
            }
          }
          selectLines(e, t) {
            var i;
            if ((i = this._selectionService) !== null && i !== undefined) {
              i.selectLines(e, t);
            }
          }
          _keyDown(e) {
            this._keyDownHandled = false;
            this._keyDownSeen = true;
            if (this._customKeyEventHandler && this._customKeyEventHandler(e) === false) {
              return false;
            }
            let t = this.browser.isMac && this.options.macOptionIsMeta && e.altKey;
            if (!t && !this._compositionHelper.keydown(e)) {
              if (this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp) {
                this.scrollToBottom();
              }
              return false;
            }
            if (!t && (e.key === "Dead" || e.key === "AltGraph")) {
              this._unprocessedDeadKey = true;
            }
            let i = D.evaluateKeyboardEvent(e, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
            this.updateCursorStyle(e);
            if (i.type === 3 || i.type === 2) {
              let t = this.rows - 1;
              this.scrollLines(i.type === 2 ? -t : t);
              return this.cancel(e, true);
            }
            if (i.type === 1) {
              this.selectAll();
            }
            return !!this._isThirdLevelShift(this.browser, e) || (i.cancel && this.cancel(e, true), !i.key || !!e.key && !e.ctrlKey && !e.altKey && !e.metaKey && e.key.length === 1 && !!(e.key.charCodeAt(0) >= 65) && !!(e.key.charCodeAt(0) <= 90) || (this._unprocessedDeadKey ? (this._unprocessedDeadKey = false, true) : (i.key !== L.C0.ETX && i.key !== L.C0.CR || (this.textarea.value = ""), this._onKey.fire({
              key: i.key,
              domEvent: e
            }), this._showCursor(), this.coreService.triggerDataEvent(i.key, true), !this.optionsService.rawOptions.screenReaderMode || e.altKey || e.ctrlKey ? this.cancel(e, true) : void (this._keyDownHandled = true))));
          }
          _isThirdLevelShift(e, t) {
            let i = e.isMac && !this.options.macOptionIsMeta && t.altKey && !t.ctrlKey && !t.metaKey || e.isWindows && t.altKey && t.ctrlKey && !t.metaKey || e.isWindows && t.getModifierState("AltGraph");
            if (t.type === "keypress") {
              return i;
            } else {
              return i && (!t.keyCode || t.keyCode > 47);
            }
          }
          _keyUp(e) {
            this._keyDownSeen = false;
            if (!this._customKeyEventHandler || this._customKeyEventHandler(e) !== false) {
              if (e.keyCode !== 16 && e.keyCode !== 17 && e.keyCode !== 18) {
                this.focus();
              }
              this.updateCursorStyle(e);
              this._keyPressHandled = false;
            }
          }
          _keyPress(e) {
            let t;
            this._keyPressHandled = false;
            if (this._keyDownHandled || this._customKeyEventHandler && this._customKeyEventHandler(e) === false) {
              return false;
            }
            this.cancel(e);
            if (e.charCode) {
              t = e.charCode;
            } else if (e.which === null || e.which === undefined) {
              t = e.keyCode;
            } else {
              if (e.which === 0 || e.charCode === 0) {
                return false;
              }
              t = e.which;
            }
            return !!t && (!e.altKey && !e.ctrlKey && !e.metaKey || !!this._isThirdLevelShift(this.browser, e)) && !(t = String.fromCharCode(t), this._onKey.fire({
              key: t,
              domEvent: e
            }), this._showCursor(), this.coreService.triggerDataEvent(t, true), this._keyPressHandled = true, this._unprocessedDeadKey = false, 0);
          }
          _inputEvent(e) {
            if (e.data && e.inputType === "insertText" && (!e.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
              if (this._keyPressHandled) {
                return false;
              }
              this._unprocessedDeadKey = false;
              let t = e.data;
              this.coreService.triggerDataEvent(t, true);
              this.cancel(e);
              return true;
            }
            return false;
          }
          resize(e, t) {
            if (e !== this.cols || t !== this.rows) {
              super.resize(e, t);
            } else if (this._charSizeService && !this._charSizeService.hasValidSize) {
              this._charSizeService.measure();
            }
          }
          _afterResize(e, t) {
            var i;
            var r;
            if ((i = this._charSizeService) !== null && i !== undefined) {
              i.measure();
            }
            if ((r = this.viewport) !== null && r !== undefined) {
              r.syncScrollArea(true);
            }
          }
          clear() {
            if (this.buffer.ybase !== 0 || this.buffer.y !== 0) {
              var e;
              this.buffer.clearAllMarkers();
              this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y));
              this.buffer.lines.length = 1;
              this.buffer.ydisp = 0;
              this.buffer.ybase = 0;
              this.buffer.y = 0;
              for (let e = 1; e < this.rows; e++) {
                this.buffer.lines.push(this.buffer.getBlankLine(k.DEFAULT_ATTR_DATA));
              }
              this._onScroll.fire({
                position: this.buffer.ydisp,
                source: 0
              });
              if ((e = this.viewport) !== null && e !== undefined) {
                e.reset();
              }
              this.refresh(0, this.rows - 1);
            }
          }
          reset() {
            var e;
            var t;
            this.options.rows = this.rows;
            this.options.cols = this.cols;
            let i = this._customKeyEventHandler;
            this._setup();
            super.reset();
            if ((e = this._selectionService) !== null && e !== undefined) {
              e.reset();
            }
            this._decorationService.reset();
            if ((t = this.viewport) !== null && t !== undefined) {
              t.reset();
            }
            this._customKeyEventHandler = i;
            this.refresh(0, this.rows - 1);
          }
          clearTextureAtlas() {
            var e;
            if ((e = this._renderService) !== null && e !== undefined) {
              e.clearTextureAtlas();
            }
          }
          _reportFocus() {
            var e;
            if ((e = this.element) === null || e === undefined ? undefined : e.classList.contains("focus")) {
              this.coreService.triggerDataEvent(L.C0.ESC + "[I");
            } else {
              this.coreService.triggerDataEvent(L.C0.ESC + "[O");
            }
          }
          _reportWindowsOptions(e) {
            if (this._renderService) {
              switch (e) {
                case T.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                  let t = this._renderService.dimensions.css.canvas.width.toFixed(0);
                  let i = this._renderService.dimensions.css.canvas.height.toFixed(0);
                  this.coreService.triggerDataEvent(`${L.C0.ESC}[4;${i};${t}t`);
                  break;
                case T.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                  let r = this._renderService.dimensions.css.cell.width.toFixed(0);
                  let s = this._renderService.dimensions.css.cell.height.toFixed(0);
                  this.coreService.triggerDataEvent(`${L.C0.ESC}[6;${s};${r}t`);
              }
            }
          }
          cancel(e, t) {
            if (this.options.cancelEvents || t) {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }
          }
          constructor(e = {}) {
            super(e);
            this.browser = x;
            this._keyDownHandled = false;
            this._keyDownSeen = false;
            this._keyPressHandled = false;
            this._unprocessedDeadKey = false;
            this._accessibilityManager = this.register(new E.MutableDisposable());
            this._onCursorMove = this.register(new y.EventEmitter());
            this.onCursorMove = this._onCursorMove.event;
            this._onKey = this.register(new y.EventEmitter());
            this.onKey = this._onKey.event;
            this._onRender = this.register(new y.EventEmitter());
            this.onRender = this._onRender.event;
            this._onSelectionChange = this.register(new y.EventEmitter());
            this.onSelectionChange = this._onSelectionChange.event;
            this._onTitleChange = this.register(new y.EventEmitter());
            this.onTitleChange = this._onTitleChange.event;
            this._onBell = this.register(new y.EventEmitter());
            this.onBell = this._onBell.event;
            this._onFocus = this.register(new y.EventEmitter());
            this._onBlur = this.register(new y.EventEmitter());
            this._onA11yCharEmitter = this.register(new y.EventEmitter());
            this._onA11yTabEmitter = this.register(new y.EventEmitter());
            this._onWillOpen = this.register(new y.EventEmitter());
            this._setup();
            this._decorationService = this._instantiationService.createInstance(A.DecorationService);
            this._instantiationService.setService(B.IDecorationService, this._decorationService);
            this._linkProviderService = this._instantiationService.createInstance(O.LinkProviderService);
            this._instantiationService.setService(S.ILinkProviderService, this._linkProviderService);
            this._linkProviderService.registerLinkProvider(this._instantiationService.createInstance(a.OscLinkProvider));
            this.register(this._inputHandler.onRequestBell(() => this._onBell.fire()));
            this.register(this._inputHandler.onRequestRefreshRows((e, t) => this.refresh(e, t)));
            this.register(this._inputHandler.onRequestSendFocus(() => this._reportFocus()));
            this.register(this._inputHandler.onRequestReset(() => this.reset()));
            this.register(this._inputHandler.onRequestWindowsOptionsReport(e => this._reportWindowsOptions(e)));
            this.register(this._inputHandler.onColor(e => this._handleColorEvent(e)));
            this.register(y.forwardEvent(this._inputHandler.onCursorMove, this._onCursorMove));
            this.register(y.forwardEvent(this._inputHandler.onTitleChange, this._onTitleChange));
            this.register(y.forwardEvent(this._inputHandler.onA11yChar, this._onA11yCharEmitter));
            this.register(y.forwardEvent(this._inputHandler.onA11yTab, this._onA11yTabEmitter));
            this.register(this._bufferService.onResize(e => this._afterResize(e.cols, e.rows)));
            this.register(E.toDisposable(() => {
              var e;
              var t;
              this._customKeyEventHandler = undefined;
              if ((t = this.element) !== null && t !== undefined && (e = t.parentNode) !== null && e !== undefined) {
                e.removeChild(this.element);
              }
            }));
          }
        }
        t.Terminal = P;
      },
      9924: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.TimeBasedDebouncer = undefined;
        t.TimeBasedDebouncer = class {
          dispose() {
            if (this._refreshTimeoutID) {
              clearTimeout(this._refreshTimeoutID);
            }
          }
          refresh(e, t, i) {
            this._rowCount = i;
            e = e !== undefined ? e : 0;
            t = t !== undefined ? t : this._rowCount - 1;
            this._rowStart = this._rowStart !== undefined ? Math.min(this._rowStart, e) : e;
            this._rowEnd = this._rowEnd !== undefined ? Math.max(this._rowEnd, t) : t;
            let r = Date.now();
            if (r - this._lastRefreshMs >= this._debounceThresholdMS) {
              this._lastRefreshMs = r;
              this._innerRefresh();
            } else if (!this._additionalRefreshRequested) {
              let e = r - this._lastRefreshMs;
              let t = this._debounceThresholdMS - e;
              this._additionalRefreshRequested = true;
              this._refreshTimeoutID = window.setTimeout(() => {
                this._lastRefreshMs = Date.now();
                this._innerRefresh();
                this._additionalRefreshRequested = false;
                this._refreshTimeoutID = undefined;
              }, t);
            }
          }
          _innerRefresh() {
            if (this._rowStart === undefined || this._rowEnd === undefined || this._rowCount === undefined) {
              return;
            }
            let e = Math.max(this._rowStart, 0);
            let t = Math.min(this._rowEnd, this._rowCount - 1);
            this._rowStart = undefined;
            this._rowEnd = undefined;
            this._renderCallback(e, t);
          }
          constructor(e, t = 1000) {
            this._renderCallback = e;
            this._debounceThresholdMS = t;
            this._lastRefreshMs = 0;
            this._additionalRefreshRequested = false;
          }
        };
      },
      1680: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.Viewport = undefined;
        let n = i(3656);
        let o = i(4725);
        let a = i(8460);
        let h = i(844);
        let l = i(2585);
        let c = t.Viewport = class extends h.Disposable {
          _handleThemeChange(e) {
            this._viewportElement.style.backgroundColor = e.background.css;
          }
          reset() {
            this._currentRowHeight = 0;
            this._currentDeviceCellHeight = 0;
            this._lastRecordedBufferLength = 0;
            this._lastRecordedViewportHeight = 0;
            this._lastRecordedBufferHeight = 0;
            this._lastTouchY = 0;
            this._lastScrollTop = 0;
            this._coreBrowserService.window.requestAnimationFrame(() => this.syncScrollArea());
          }
          _refresh(e) {
            if (e) {
              this._innerRefresh();
              if (this._refreshAnimationFrame !== null) {
                this._coreBrowserService.window.cancelAnimationFrame(this._refreshAnimationFrame);
              }
              return;
            }
            if (this._refreshAnimationFrame === null) {
              this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh());
            }
          }
          _innerRefresh() {
            if (this._charSizeService.height > 0) {
              this._currentRowHeight = this._renderDimensions.device.cell.height / this._coreBrowserService.dpr;
              this._currentDeviceCellHeight = this._renderDimensions.device.cell.height;
              this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
              let e = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderDimensions.css.canvas.height);
              if (this._lastRecordedBufferHeight !== e) {
                this._lastRecordedBufferHeight = e;
                this._scrollArea.style.height = this._lastRecordedBufferHeight + "px";
              }
            }
            let e = this._bufferService.buffer.ydisp * this._currentRowHeight;
            if (this._viewportElement.scrollTop !== e) {
              this._ignoreNextScrollEvent = true;
              this._viewportElement.scrollTop = e;
            }
            this._refreshAnimationFrame = null;
          }
          syncScrollArea(e = false) {
            if (this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length) {
              this._lastRecordedBufferLength = this._bufferService.buffer.lines.length;
              this._refresh(e);
              return;
            }
            if (this._lastRecordedViewportHeight !== this._renderService.dimensions.css.canvas.height || this._lastScrollTop !== this._activeBuffer.ydisp * this._currentRowHeight || this._renderDimensions.device.cell.height !== this._currentDeviceCellHeight) {
              this._refresh(e);
            }
          }
          _handleScroll(e) {
            this._lastScrollTop = this._viewportElement.scrollTop;
            if (!this._viewportElement.offsetParent) {
              return;
            }
            if (this._ignoreNextScrollEvent) {
              this._ignoreNextScrollEvent = false;
              this._onRequestScrollLines.fire({
                amount: 0,
                suppressScrollEvent: true
              });
              return;
            }
            let t = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
            this._onRequestScrollLines.fire({
              amount: t,
              suppressScrollEvent: true
            });
          }
          _smoothScroll() {
            if (this._isDisposed || this._smoothScrollState.origin === -1 || this._smoothScrollState.target === -1) {
              return;
            }
            let e = this._smoothScrollPercent();
            this._viewportElement.scrollTop = this._smoothScrollState.origin + Math.round(e * (this._smoothScrollState.target - this._smoothScrollState.origin));
            if (e < 1) {
              this._coreBrowserService.window.requestAnimationFrame(() => this._smoothScroll());
            } else {
              this._clearSmoothScrollState();
            }
          }
          _smoothScrollPercent() {
            if (this._optionsService.rawOptions.smoothScrollDuration && this._smoothScrollState.startTime) {
              return Math.max(Math.min((Date.now() - this._smoothScrollState.startTime) / this._optionsService.rawOptions.smoothScrollDuration, 1), 0);
            } else {
              return 1;
            }
          }
          _clearSmoothScrollState() {
            this._smoothScrollState.startTime = 0;
            this._smoothScrollState.origin = -1;
            this._smoothScrollState.target = -1;
          }
          _bubbleScroll(e, t) {
            let i = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
            return (!(t < 0) || this._viewportElement.scrollTop === 0) && (!(t > 0) || !(i < this._lastRecordedBufferHeight)) || (e.cancelable && e.preventDefault(), false);
          }
          handleWheel(e) {
            let t = this._getPixelsScrolled(e);
            return t !== 0 && (this._optionsService.rawOptions.smoothScrollDuration ? (this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, this._smoothScrollState.target === -1 ? this._smoothScrollState.target = this._viewportElement.scrollTop + t : this._smoothScrollState.target += t, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState()) : this._viewportElement.scrollTop += t, this._bubbleScroll(e, t));
          }
          scrollLines(e) {
            if (e !== 0) {
              if (this._optionsService.rawOptions.smoothScrollDuration) {
                let t = e * this._currentRowHeight;
                this._smoothScrollState.startTime = Date.now();
                if (this._smoothScrollPercent() < 1) {
                  this._smoothScrollState.origin = this._viewportElement.scrollTop;
                  this._smoothScrollState.target = this._smoothScrollState.origin + t;
                  this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0);
                  this._smoothScroll();
                } else {
                  this._clearSmoothScrollState();
                }
              } else {
                this._onRequestScrollLines.fire({
                  amount: e,
                  suppressScrollEvent: false
                });
              }
            }
          }
          _getPixelsScrolled(e) {
            if (e.deltaY === 0 || e.shiftKey) {
              return 0;
            }
            let t = this._applyScrollModifier(e.deltaY, e);
            if (e.deltaMode === WheelEvent.DOM_DELTA_LINE) {
              t *= this._currentRowHeight;
            } else if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
              t *= this._currentRowHeight * this._bufferService.rows;
            }
            return t;
          }
          getBufferElements(e, t) {
            let i;
            let r = "";
            let s = [];
            let n = t ?? this._bufferService.buffer.lines.length;
            let o = this._bufferService.buffer.lines;
            for (let t = e; t < n; t++) {
              let e = o.get(t);
              if (!e) {
                continue;
              }
              let n = o.get(t + 1)?.isWrapped;
              r += e.translateToString(!n);
              if (!n || t === o.length - 1) {
                let e = document.createElement("div");
                e.textContent = r;
                s.push(e);
                if (r.length > 0) {
                  i = e;
                }
                r = "";
              }
            }
            return {
              bufferElements: s,
              cursorElement: i
            };
          }
          getLinesScrolled(e) {
            if (e.deltaY === 0 || e.shiftKey) {
              return 0;
            }
            let t = this._applyScrollModifier(e.deltaY, e);
            if (e.deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
              t /= this._currentRowHeight + 0;
              this._wheelPartialScroll += t;
              t = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1);
              this._wheelPartialScroll %= 1;
            } else if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
              t *= this._bufferService.rows;
            }
            return t;
          }
          _applyScrollModifier(e, t) {
            let i = this._optionsService.rawOptions.fastScrollModifier;
            if (i === "alt" && t.altKey || i === "ctrl" && t.ctrlKey || i === "shift" && t.shiftKey) {
              return e * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity;
            } else {
              return e * this._optionsService.rawOptions.scrollSensitivity;
            }
          }
          handleTouchStart(e) {
            this._lastTouchY = e.touches[0].pageY;
          }
          handleTouchMove(e) {
            let t = this._lastTouchY - e.touches[0].pageY;
            this._lastTouchY = e.touches[0].pageY;
            return t !== 0 && (this._viewportElement.scrollTop += t, this._bubbleScroll(e, t));
          }
          constructor(e, t, i, r, s, o, h, l) {
            super();
            this._viewportElement = e;
            this._scrollArea = t;
            this._bufferService = i;
            this._optionsService = r;
            this._charSizeService = s;
            this._renderService = o;
            this._coreBrowserService = h;
            this.scrollBarWidth = 0;
            this._currentRowHeight = 0;
            this._currentDeviceCellHeight = 0;
            this._lastRecordedBufferLength = 0;
            this._lastRecordedViewportHeight = 0;
            this._lastRecordedBufferHeight = 0;
            this._lastTouchY = 0;
            this._lastScrollTop = 0;
            this._wheelPartialScroll = 0;
            this._refreshAnimationFrame = null;
            this._ignoreNextScrollEvent = false;
            this._smoothScrollState = {
              startTime: 0,
              origin: -1,
              target: -1
            };
            this._onRequestScrollLines = this.register(new a.EventEmitter());
            this.onRequestScrollLines = this._onRequestScrollLines.event;
            this.scrollBarWidth = this._viewportElement.offsetWidth - this._scrollArea.offsetWidth || 15;
            this.register(n.addDisposableDomListener(this._viewportElement, "scroll", this._handleScroll.bind(this)));
            this._activeBuffer = this._bufferService.buffer;
            this.register(this._bufferService.buffers.onBufferActivate(e => this._activeBuffer = e.activeBuffer));
            this._renderDimensions = this._renderService.dimensions;
            this.register(this._renderService.onDimensionsChange(e => this._renderDimensions = e));
            this._handleThemeChange(l.colors);
            this.register(l.onChangeColors(e => this._handleThemeChange(e)));
            this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.syncScrollArea()));
            setTimeout(() => this.syncScrollArea());
          }
        };
        t.Viewport = r([s(2, l.IBufferService), s(3, l.IOptionsService), s(4, o.ICharSizeService), s(5, o.IRenderService), s(6, o.ICoreBrowserService), s(7, o.IThemeService)], c);
      },
      3107: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.BufferDecorationRenderer = undefined;
        let n = i(4725);
        let o = i(844);
        let a = i(2585);
        let h = t.BufferDecorationRenderer = class extends o.Disposable {
          _queueRefresh() {
            if (this._animationFrame === undefined) {
              this._animationFrame = this._renderService.addRefreshCallback(() => {
                this._doRefreshDecorations();
                this._animationFrame = undefined;
              });
            }
          }
          _doRefreshDecorations() {
            for (let e of this._decorationService.decorations) {
              this._renderDecoration(e);
            }
            this._dimensionsChanged = false;
          }
          _renderDecoration(e) {
            this._refreshStyle(e);
            if (this._dimensionsChanged) {
              this._refreshXPosition(e);
            }
          }
          _createElement(e) {
            let r = this._coreBrowserService.mainDocument.createElement("div");
            r.classList.add("xterm-decoration");
            r.classList.toggle("xterm-decoration-top-layer", (e == null ? undefined : e.options?.layer) === "top");
            r.style.width = `${Math.round((e.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`;
            r.style.height = (e.options.height || 1) * this._renderService.dimensions.css.cell.height + "px";
            r.style.top = (e.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height + "px";
            r.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
            let s = e.options.x ?? 0;
            if (s && s > this._bufferService.cols) {
              r.style.display = "none";
            }
            this._refreshXPosition(e, r);
            return r;
          }
          _refreshStyle(e) {
            let t = e.marker.line - this._bufferService.buffers.active.ydisp;
            if (t < 0 || t >= this._bufferService.rows) {
              if (e.element) {
                e.element.style.display = "none";
                e.onRenderEmitter.fire(e.element);
              }
            } else {
              let i = this._decorationElements.get(e);
              if (!i) {
                i = this._createElement(e);
                e.element = i;
                this._decorationElements.set(e, i);
                this._container.appendChild(i);
                e.onDispose(() => {
                  this._decorationElements.delete(e);
                  i.remove();
                });
              }
              i.style.top = t * this._renderService.dimensions.css.cell.height + "px";
              i.style.display = this._altBufferIsActive ? "none" : "block";
              e.onRenderEmitter.fire(i);
            }
          }
          _refreshXPosition(e) {
            let i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.element;
            if (!i) {
              return;
            }
            let r = e.options.x ?? 0;
            if ((e.options.anchor || "left") === "right") {
              i.style.right = r ? r * this._renderService.dimensions.css.cell.width + "px" : "";
            } else {
              i.style.left = r ? r * this._renderService.dimensions.css.cell.width + "px" : "";
            }
          }
          _removeDecoration(e) {
            var t;
            if ((t = this._decorationElements.get(e)) !== null && t !== undefined) {
              t.remove();
            }
            this._decorationElements.delete(e);
            e.dispose();
          }
          constructor(e, t, i, r, s) {
            super();
            this._screenElement = e;
            this._bufferService = t;
            this._coreBrowserService = i;
            this._decorationService = r;
            this._renderService = s;
            this._decorationElements = new Map();
            this._altBufferIsActive = false;
            this._dimensionsChanged = false;
            this._container = document.createElement("div");
            this._container.classList.add("xterm-decoration-container");
            this._screenElement.appendChild(this._container);
            this.register(this._renderService.onRenderedViewportChange(() => this._doRefreshDecorations()));
            this.register(this._renderService.onDimensionsChange(() => {
              this._dimensionsChanged = true;
              this._queueRefresh();
            }));
            this.register(this._coreBrowserService.onDprChange(() => this._queueRefresh()));
            this.register(this._bufferService.buffers.onBufferActivate(() => {
              this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
            }));
            this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh()));
            this.register(this._decorationService.onDecorationRemoved(e => this._removeDecoration(e)));
            this.register(o.toDisposable(() => {
              this._container.remove();
              this._decorationElements.clear();
            }));
          }
        };
        t.BufferDecorationRenderer = r([s(1, a.IBufferService), s(2, n.ICoreBrowserService), s(3, a.IDecorationService), s(4, n.IRenderService)], h);
      },
      5871: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.ColorZoneStore = undefined;
        t.ColorZoneStore = class {
          get zones() {
            this._zonePool.length = Math.min(this._zonePool.length, this._zones.length);
            return this._zones;
          }
          clear() {
            this._zones.length = 0;
            this._zonePoolIndex = 0;
          }
          addDecoration(e) {
            if (e.options.overviewRulerOptions) {
              for (let t of this._zones) {
                if (t.color === e.options.overviewRulerOptions.color && t.position === e.options.overviewRulerOptions.position) {
                  if (this._lineIntersectsZone(t, e.marker.line)) {
                    return;
                  }
                  if (this._lineAdjacentToZone(t, e.marker.line, e.options.overviewRulerOptions.position)) {
                    this._addLineToZone(t, e.marker.line);
                    return;
                  }
                }
              }
              if (this._zonePoolIndex < this._zonePool.length) {
                this._zonePool[this._zonePoolIndex].color = e.options.overviewRulerOptions.color;
                this._zonePool[this._zonePoolIndex].position = e.options.overviewRulerOptions.position;
                this._zonePool[this._zonePoolIndex].startBufferLine = e.marker.line;
                this._zonePool[this._zonePoolIndex].endBufferLine = e.marker.line;
                this._zones.push(this._zonePool[this._zonePoolIndex++]);
                return;
              }
              this._zones.push({
                color: e.options.overviewRulerOptions.color,
                position: e.options.overviewRulerOptions.position,
                startBufferLine: e.marker.line,
                endBufferLine: e.marker.line
              });
              this._zonePool.push(this._zones[this._zones.length - 1]);
              this._zonePoolIndex++;
            }
          }
          setPadding(e) {
            this._linePadding = e;
          }
          _lineIntersectsZone(e, t) {
            return t >= e.startBufferLine && t <= e.endBufferLine;
          }
          _lineAdjacentToZone(e, t, i) {
            return t >= e.startBufferLine - this._linePadding[i || "full"] && t <= e.endBufferLine + this._linePadding[i || "full"];
          }
          _addLineToZone(e, t) {
            e.startBufferLine = Math.min(e.startBufferLine, t);
            e.endBufferLine = Math.max(e.endBufferLine, t);
          }
          constructor() {
            this._zones = [];
            this._zonePool = [];
            this._zonePoolIndex = 0;
            this._linePadding = {
              full: 0,
              left: 0,
              center: 0,
              right: 0
            };
          }
        };
      },
      5744: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.OverviewRulerRenderer = undefined;
        let n = i(5871);
        let o = i(4725);
        let a = i(844);
        let h = i(2585);
        let l = {
          full: 0,
          left: 0,
          center: 0,
          right: 0
        };
        let c = {
          full: 0,
          left: 0,
          center: 0,
          right: 0
        };
        let d = {
          full: 0,
          left: 0,
          center: 0,
          right: 0
        };
        let _ = t.OverviewRulerRenderer = class extends a.Disposable {
          get _width() {
            return this._optionsService.options.overviewRulerWidth || 0;
          }
          _registerDecorationListeners() {
            this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh(undefined, true)));
            this.register(this._decorationService.onDecorationRemoved(() => this._queueRefresh(undefined, true)));
          }
          _registerBufferChangeListeners() {
            this.register(this._renderService.onRenderedViewportChange(() => this._queueRefresh()));
            this.register(this._bufferService.buffers.onBufferActivate(() => {
              this._canvas.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block";
            }));
            this.register(this._bufferService.onScroll(() => {
              if (this._lastKnownBufferLength !== this._bufferService.buffers.normal.lines.length) {
                this._refreshDrawHeightConstants();
                this._refreshColorZonePadding();
              }
            }));
          }
          _registerDimensionChangeListeners() {
            this.register(this._renderService.onRender(() => {
              if (!this._containerHeight || this._containerHeight !== this._screenElement.clientHeight) {
                this._queueRefresh(true);
                this._containerHeight = this._screenElement.clientHeight;
              }
            }));
            this.register(this._optionsService.onSpecificOptionChange("overviewRulerWidth", () => this._queueRefresh(true)));
            this.register(this._coreBrowserService.onDprChange(() => this._queueRefresh(true)));
            this._queueRefresh(true);
          }
          _refreshDrawConstants() {
            let e = Math.floor(this._canvas.width / 3);
            let t = Math.ceil(this._canvas.width / 3);
            c.full = this._canvas.width;
            c.left = e;
            c.center = t;
            c.right = e;
            this._refreshDrawHeightConstants();
            d.full = 0;
            d.left = 0;
            d.center = c.left;
            d.right = c.left + c.center;
          }
          _refreshDrawHeightConstants() {
            l.full = Math.round(this._coreBrowserService.dpr * 2);
            let e = Math.round(Math.max(Math.min(this._canvas.height / this._bufferService.buffer.lines.length, 12), 6) * this._coreBrowserService.dpr);
            l.left = e;
            l.center = e;
            l.right = e;
          }
          _refreshColorZonePadding() {
            this._colorZoneStore.setPadding({
              full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.full),
              left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.left),
              center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.center),
              right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.right)
            });
            this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
          }
          _refreshCanvasDimensions() {
            this._canvas.style.width = `${this._width}px`;
            this._canvas.width = Math.round(this._width * this._coreBrowserService.dpr);
            this._canvas.style.height = `${this._screenElement.clientHeight}px`;
            this._canvas.height = Math.round(this._screenElement.clientHeight * this._coreBrowserService.dpr);
            this._refreshDrawConstants();
            this._refreshColorZonePadding();
          }
          _refreshDecorations() {
            if (this._shouldUpdateDimensions) {
              this._refreshCanvasDimensions();
            }
            this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
            this._colorZoneStore.clear();
            for (let e of this._decorationService.decorations) {
              this._colorZoneStore.addDecoration(e);
            }
            this._ctx.lineWidth = 1;
            let e = this._colorZoneStore.zones;
            for (let t of e) {
              if (t.position !== "full") {
                this._renderColorZone(t);
              }
            }
            for (let t of e) {
              if (t.position === "full") {
                this._renderColorZone(t);
              }
            }
            this._shouldUpdateDimensions = false;
            this._shouldUpdateAnchor = false;
          }
          _renderColorZone(e) {
            this._ctx.fillStyle = e.color;
            this._ctx.fillRect(d[e.position || "full"], Math.round((this._canvas.height - 1) * (e.startBufferLine / this._bufferService.buffers.active.lines.length) - l[e.position || "full"] / 2), c[e.position || "full"], Math.round((this._canvas.height - 1) * ((e.endBufferLine - e.startBufferLine) / this._bufferService.buffers.active.lines.length) + l[e.position || "full"]));
          }
          _queueRefresh(e, t) {
            this._shouldUpdateDimensions = e || this._shouldUpdateDimensions;
            this._shouldUpdateAnchor = t || this._shouldUpdateAnchor;
            if (this._animationFrame === undefined) {
              this._animationFrame = this._coreBrowserService.window.requestAnimationFrame(() => {
                this._refreshDecorations();
                this._animationFrame = undefined;
              });
            }
          }
          constructor(e, t, i, r, s, o, h) {
            var l;
            super();
            this._viewportElement = e;
            this._screenElement = t;
            this._bufferService = i;
            this._decorationService = r;
            this._renderService = s;
            this._optionsService = o;
            this._coreBrowserService = h;
            this._colorZoneStore = new n.ColorZoneStore();
            this._shouldUpdateDimensions = true;
            this._shouldUpdateAnchor = true;
            this._lastKnownBufferLength = 0;
            this._canvas = this._coreBrowserService.mainDocument.createElement("canvas");
            this._canvas.classList.add("xterm-decoration-overview-ruler");
            this._refreshCanvasDimensions();
            if ((l = this._viewportElement.parentElement) !== null && l !== undefined) {
              l.insertBefore(this._canvas, this._viewportElement);
            }
            let c = this._canvas.getContext("2d");
            if (!c) {
              throw Error("Ctx cannot be null");
            }
            this._ctx = c;
            this._registerDecorationListeners();
            this._registerBufferChangeListeners();
            this._registerDimensionChangeListeners();
            this.register(a.toDisposable(() => {
              var e;
              if ((e = this._canvas) !== null && e !== undefined) {
                e.remove();
              }
            }));
          }
        };
        t.OverviewRulerRenderer = r([s(2, h.IBufferService), s(3, h.IDecorationService), s(4, o.IRenderService), s(5, h.IOptionsService), s(6, o.ICoreBrowserService)], _);
      },
      2950: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.CompositionHelper = undefined;
        let n = i(4725);
        let o = i(2585);
        let a = i(2584);
        let h = t.CompositionHelper = class {
          get isComposing() {
            return this._isComposing;
          }
          compositionstart() {
            this._isComposing = true;
            this._compositionPosition.start = this._textarea.value.length;
            this._compositionView.textContent = "";
            this._dataAlreadySent = "";
            this._compositionView.classList.add("active");
          }
          compositionupdate(e) {
            this._compositionView.textContent = e.data;
            this.updateCompositionElements();
            setTimeout(() => {
              this._compositionPosition.end = this._textarea.value.length;
            }, 0);
          }
          compositionend() {
            this._finalizeComposition(true);
          }
          keydown(e) {
            if (this._isComposing || this._isSendingComposition) {
              if (e.keyCode === 229 || e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18) {
                return false;
              }
              this._finalizeComposition(false);
            }
            return e.keyCode !== 229 || (this._handleAnyTextareaChanges(), false);
          }
          _finalizeComposition(e) {
            this._compositionView.classList.remove("active");
            this._isComposing = false;
            if (e) {
              let e = {
                start: this._compositionPosition.start,
                end: this._compositionPosition.end
              };
              this._isSendingComposition = true;
              setTimeout(() => {
                if (this._isSendingComposition) {
                  let t;
                  this._isSendingComposition = false;
                  e.start += this._dataAlreadySent.length;
                  if ((t = this._isComposing ? this._textarea.value.substring(e.start, e.end) : this._textarea.value.substring(e.start)).length > 0) {
                    this._coreService.triggerDataEvent(t, true);
                  }
                }
              }, 0);
            } else {
              this._isSendingComposition = false;
              let e = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
              this._coreService.triggerDataEvent(e, true);
            }
          }
          _handleAnyTextareaChanges() {
            let e = this._textarea.value;
            setTimeout(() => {
              if (!this._isComposing) {
                let t = this._textarea.value;
                let i = t.replace(e, "");
                this._dataAlreadySent = i;
                if (t.length > e.length) {
                  this._coreService.triggerDataEvent(i, true);
                } else if (t.length < e.length) {
                  this._coreService.triggerDataEvent(`${a.C0.DEL}`, true);
                } else if (t.length === e.length && t !== e) {
                  this._coreService.triggerDataEvent(t, true);
                }
              }
            }, 0);
          }
          updateCompositionElements(e) {
            if (this._isComposing) {
              if (this._bufferService.buffer.isCursorInViewport) {
                let e = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1);
                let t = this._renderService.dimensions.css.cell.height;
                let i = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height;
                let r = e * this._renderService.dimensions.css.cell.width;
                this._compositionView.style.left = r + "px";
                this._compositionView.style.top = i + "px";
                this._compositionView.style.height = t + "px";
                this._compositionView.style.lineHeight = t + "px";
                this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily;
                this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
                let s = this._compositionView.getBoundingClientRect();
                this._textarea.style.left = r + "px";
                this._textarea.style.top = i + "px";
                this._textarea.style.width = Math.max(s.width, 1) + "px";
                this._textarea.style.height = Math.max(s.height, 1) + "px";
                this._textarea.style.lineHeight = s.height + "px";
              }
              if (!e) {
                setTimeout(() => this.updateCompositionElements(true), 0);
              }
            }
          }
          constructor(e, t, i, r, s, n) {
            this._textarea = e;
            this._compositionView = t;
            this._bufferService = i;
            this._optionsService = r;
            this._coreService = s;
            this._renderService = n;
            this._isComposing = false;
            this._isSendingComposition = false;
            this._compositionPosition = {
              start: 0,
              end: 0
            };
            this._dataAlreadySent = "";
          }
        };
        t.CompositionHelper = r([s(2, o.IBufferService), s(3, o.IOptionsService), s(4, o.ICoreService), s(5, n.IRenderService)], h);
      },
      9806: (e, t) => {
        function i(e, t, i) {
          let r = i.getBoundingClientRect();
          let s = e.getComputedStyle(i);
          let n = parseInt(s.getPropertyValue("padding-left"));
          let o = parseInt(s.getPropertyValue("padding-top"));
          return [t.clientX - r.left - n, t.clientY - r.top - o];
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.getCoords = t.getCoordsRelativeToElement = undefined;
        t.getCoordsRelativeToElement = i;
        t.getCoords = function (e, t, r, s, n, o, a, h, l) {
          if (!o) {
            return;
          }
          let c = i(e, t, r);
          if (c) {
            c[0] = Math.ceil((c[0] + (l ? a / 2 : 0)) / a);
            c[1] = Math.ceil(c[1] / h);
            c[0] = Math.min(Math.max(c[0], 1), s + +!!l);
            c[1] = Math.min(Math.max(c[1], 1), n);
            return c;
          } else {
            return undefined;
          }
        };
      },
      9504: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.moveToCellSequence = undefined;
        let r = i(2584);
        function s(e, t, i, r) {
          return h(Math.abs(e - n(e, i) - (t - n(t, i))) - function (e, t, i) {
            let r = 0;
            let s = e - n(e, i);
            let o = t - n(t, i);
            for (let n = 0; n < Math.abs(s - o); n++) {
              let o = (e > t ? "A" : "B") == "A" ? -1 : 1;
              let a = i.buffer.lines.get(s + o * n);
              if (a == null ? undefined : a.isWrapped) {
                r++;
              }
            }
            return r;
          }(e, t, i), a(e > t ? "A" : "B", r));
        }
        function n(e, t) {
          let i = 0;
          let r = t.buffer.lines.get(e);
          let s = r == null ? undefined : r.isWrapped;
          while (s && e >= 0 && e < t.rows) {
            i++;
            s = (r = t.buffer.lines.get(--e)) == null ? undefined : r.isWrapped;
          }
          return i;
        }
        function o(e, t, i, r, s, n) {
          let o = e;
          let a = t;
          let h = "";
          while (o !== i || a !== r) {
            o += s ? 1 : -1;
            if (s && o > n.cols - 1) {
              h += n.buffer.translateBufferLineToString(a, false, e, o);
              o = 0;
              e = 0;
              a++;
            } else if (!s && o < 0) {
              h += n.buffer.translateBufferLineToString(a, false, 0, e + 1);
              e = o = n.cols - 1;
              a--;
            }
          }
          return h + n.buffer.translateBufferLineToString(a, false, e, o);
        }
        function a(e, t) {
          return r.C0.ESC + (t ? "O" : "[") + e;
        }
        function h(e, t) {
          e = Math.floor(e);
          let i = "";
          for (let r = 0; r < e; r++) {
            i += t;
          }
          return i;
        }
        t.moveToCellSequence = function (e, t, i, r) {
          var l;
          let c;
          let d = i.buffer.x;
          let _ = i.buffer.y;
          if (!i.buffer.hasScrollback) {
            return (s(_, t, i, r).length === 0 ? "" : h(o(d, _, d, _ - n(_, i), false, i).length, a("D", r))) + s(_, t, i, r) + function (e, t, i, r, l, c) {
              let d;
              let _;
              d = s(t, r, l, c).length > 0 ? r - n(r, l) : t;
              _ = s(i, r, l, c).length > 0 ? r - n(r, l) : t;
              let u = e < i && _ <= r || e >= i && _ < r ? "C" : "D";
              return h(o(e, d, i, r, u === "C", l).length, a(u, c));
            }(d, _, e, t, i, r);
          }
          if (_ === t) {
            c = d > e ? "D" : "C";
            return h(Math.abs(d - e), a(c, r));
          }
          c = _ > t ? "D" : "C";
          let u = Math.abs(_ - t);
          return h((l = _ > t ? e : d, i.cols - l + (u - 1) * i.cols + 1 + ((_ > t ? d : e) - 1)), a(c, r));
        };
      },
      1296: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.DomRenderer = undefined;
        let n = i(3787);
        let o = i(2550);
        let a = i(2223);
        let h = i(6171);
        let l = i(6052);
        let c = i(4725);
        let d = i(8055);
        let _ = i(8460);
        let u = i(844);
        let f = i(2585);
        let v = "xterm-dom-renderer-owner-";
        let p = "xterm-rows";
        let g = "xterm-fg-";
        let m = "xterm-bg-";
        let S = "xterm-focus";
        let C = "xterm-selection";
        let b = 1;
        let w = t.DomRenderer = class extends u.Disposable {
          _updateDimensions() {
            let e = this._coreBrowserService.dpr;
            this.dimensions.device.char.width = this._charSizeService.width * e;
            this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * e);
            this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing);
            this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight);
            this.dimensions.device.char.left = 0;
            this.dimensions.device.char.top = 0;
            this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols;
            this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows;
            this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / e);
            this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / e);
            this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols;
            this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;
            for (let t of this._rowElements) {
              t.style.width = `${this.dimensions.css.canvas.width}px`;
              t.style.height = `${this.dimensions.css.cell.height}px`;
              t.style.lineHeight = `${this.dimensions.css.cell.height}px`;
              t.style.overflow = "hidden";
            }
            if (!this._dimensionsStyleElement) {
              this._dimensionsStyleElement = this._document.createElement("style");
              this._screenElement.appendChild(this._dimensionsStyleElement);
            }
            let t = `${this._terminalSelector} .${p} span { display: inline-block; height: 100%; vertical-align: top;}`;
            this._dimensionsStyleElement.textContent = t;
            this._selectionContainer.style.height = this._viewportElement.style.height;
            this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`;
            this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
          }
          _injectCss(e) {
            if (!this._themeStyleElement) {
              this._themeStyleElement = this._document.createElement("style");
              this._screenElement.appendChild(this._themeStyleElement);
            }
            let t = `${this._terminalSelector} .${p} { color: ${e.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px; font-kerning: none; white-space: pre}`;
            t += `${this._terminalSelector} .${p} .xterm-dim { color: ${d.color.multiplyOpacity(e.foreground, 0.5).css};}${this._terminalSelector} span:not(.xterm-bold) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.xterm-bold { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.xterm-italic { font-style: italic;}`;
            let i = `blink_underline_${this._terminalClass}`;
            let r = `blink_bar_${this._terminalClass}`;
            let s = `blink_block_${this._terminalClass}`;
            t += `@keyframes ${i} { 50% {  border-bottom-style: hidden; }}@keyframes ${r} { 50% {  box-shadow: none; }}@keyframes ${s} { 0% {  background-color: ${e.cursor.css};  color: ${e.cursorAccent.css}; } 50% {  background-color: inherit;  color: ${e.cursor.css}; }}${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-underline { animation: ${i} 1s step-end infinite;}${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-bar { animation: ${r} 1s step-end infinite;}${this._terminalSelector} .${p}.${S} .xterm-cursor.xterm-cursor-blink.xterm-cursor-block { animation: ${s} 1s step-end infinite;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-block { background-color: ${e.cursor.css}; color: ${e.cursorAccent.css};}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-block:not(.xterm-cursor-blink) { background-color: ${e.cursor.css} !important; color: ${e.cursorAccent.css} !important;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-outline { outline: 1px solid ${e.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-bar { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${e.cursor.css} inset;}${this._terminalSelector} .${p} .xterm-cursor.xterm-cursor-underline { border-bottom: 1px ${e.cursor.css}; border-bottom-style: solid; height: calc(100% - 1px);}${this._terminalSelector} .${C} { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .${C} div { position: absolute; background-color: ${e.selectionBackgroundOpaque.css};}${this._terminalSelector} .${C} div { position: absolute; background-color: ${e.selectionInactiveBackgroundOpaque.css};}`;
            for (let [n, o] of e.ansi.entries()) {
              t += `${this._terminalSelector} .${g}${n} { color: ${o.css}; }${this._terminalSelector} .${g}${n}.xterm-dim { color: ${d.color.multiplyOpacity(o, 0.5).css}; }${this._terminalSelector} .${m}${n} { background-color: ${o.css}; }`;
            }
            t += `${this._terminalSelector} .${g}${a.INVERTED_DEFAULT_COLOR} { color: ${d.color.opaque(e.background).css}; }${this._terminalSelector} .${g}${a.INVERTED_DEFAULT_COLOR}.xterm-dim { color: ${d.color.multiplyOpacity(d.color.opaque(e.background), 0.5).css}; }${this._terminalSelector} .${m}${a.INVERTED_DEFAULT_COLOR} { background-color: ${e.foreground.css}; }`;
            this._themeStyleElement.textContent = t;
          }
          _setDefaultSpacing() {
            let e = this.dimensions.css.cell.width - this._widthCache.get("W", false, false);
            this._rowContainer.style.letterSpacing = `${e}px`;
            this._rowFactory.defaultSpacing = e;
          }
          handleDevicePixelRatioChange() {
            this._updateDimensions();
            this._widthCache.clear();
            this._setDefaultSpacing();
          }
          _refreshRowElements(e, t) {
            for (let e = this._rowElements.length; e <= t; e++) {
              let e = this._document.createElement("div");
              this._rowContainer.appendChild(e);
              this._rowElements.push(e);
            }
            while (this._rowElements.length > t) {
              this._rowContainer.removeChild(this._rowElements.pop());
            }
          }
          handleResize(e, t) {
            this._refreshRowElements(e, t);
            this._updateDimensions();
            this.handleSelectionChanged(this._selectionRenderModel.selectionStart, this._selectionRenderModel.selectionEnd, this._selectionRenderModel.columnSelectMode);
          }
          handleCharSizeChanged() {
            this._updateDimensions();
            this._widthCache.clear();
            this._setDefaultSpacing();
          }
          handleBlur() {
            this._rowContainer.classList.remove(S);
            this.renderRows(0, this._bufferService.rows - 1);
          }
          handleFocus() {
            this._rowContainer.classList.add(S);
            this.renderRows(this._bufferService.buffer.y, this._bufferService.buffer.y);
          }
          handleSelectionChanged(e, t, i) {
            this._selectionContainer.replaceChildren();
            this._rowFactory.handleSelectionChanged(e, t, i);
            this.renderRows(0, this._bufferService.rows - 1);
            if (!e || !t) {
              return;
            }
            this._selectionRenderModel.update(this._terminal, e, t, i);
            let r = this._selectionRenderModel.viewportStartRow;
            let s = this._selectionRenderModel.viewportEndRow;
            let n = this._selectionRenderModel.viewportCappedStartRow;
            let o = this._selectionRenderModel.viewportCappedEndRow;
            if (n >= this._bufferService.rows || o < 0) {
              return;
            }
            let a = this._document.createDocumentFragment();
            if (i) {
              let i = e[0] > t[0];
              a.appendChild(this._createSelectionElement(n, i ? t[0] : e[0], i ? e[0] : t[0], o - n + 1));
            } else {
              let i = r === n ? e[0] : 0;
              let h = n === s ? t[0] : this._bufferService.cols;
              a.appendChild(this._createSelectionElement(n, i, h));
              a.appendChild(this._createSelectionElement(n + 1, 0, this._bufferService.cols, o - n - 1));
              if (n !== o) {
                let e = s === o ? t[0] : this._bufferService.cols;
                a.appendChild(this._createSelectionElement(o, 0, e));
              }
            }
            this._selectionContainer.appendChild(a);
          }
          _createSelectionElement(e, t, i, r = 1) {
            let s = this._document.createElement("div");
            let n = t * this.dimensions.css.cell.width;
            let o = this.dimensions.css.cell.width * (i - t);
            if (n + o > this.dimensions.css.canvas.width) {
              o = this.dimensions.css.canvas.width - n;
            }
            s.style.height = r * this.dimensions.css.cell.height + "px";
            s.style.top = e * this.dimensions.css.cell.height + "px";
            s.style.left = `${n}px`;
            s.style.width = `${o}px`;
            return s;
          }
          handleCursorMove() {}
          _handleOptionsChanged() {
            this._updateDimensions();
            this._injectCss(this._themeService.colors);
            this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold);
            this._setDefaultSpacing();
          }
          clear() {
            for (let e of this._rowElements) {
              e.replaceChildren();
            }
          }
          renderRows(e, t) {
            let i = this._bufferService.buffer;
            let r = i.ybase + i.y;
            let s = Math.min(i.x, this._bufferService.cols - 1);
            let n = this._optionsService.rawOptions.cursorBlink;
            let o = this._optionsService.rawOptions.cursorStyle;
            let a = this._optionsService.rawOptions.cursorInactiveStyle;
            for (let h = e; h <= t; h++) {
              let e = h + i.ydisp;
              let t = this._rowElements[h];
              let l = i.lines.get(e);
              if (!t || !l) {
                break;
              }
              t.replaceChildren(...this._rowFactory.createRow(l, e, e === r, o, a, s, n, this.dimensions.css.cell.width, this._widthCache, -1, -1));
            }
          }
          get _terminalSelector() {
            return `.${v}${this._terminalClass}`;
          }
          _handleLinkHover(e) {
            this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, true);
          }
          _handleLinkLeave(e) {
            this._setCellUnderline(e.x1, e.x2, e.y1, e.y2, e.cols, false);
          }
          _setCellUnderline(e, t, i, r, s, n) {
            if (i < 0) {
              e = 0;
            }
            if (r < 0) {
              t = 0;
            }
            let o = this._bufferService.rows - 1;
            i = Math.max(Math.min(i, o), 0);
            r = Math.max(Math.min(r, o), 0);
            s = Math.min(s, this._bufferService.cols);
            let a = this._bufferService.buffer;
            let h = a.ybase + a.y;
            let l = Math.min(a.x, s - 1);
            let c = this._optionsService.rawOptions.cursorBlink;
            let d = this._optionsService.rawOptions.cursorStyle;
            let _ = this._optionsService.rawOptions.cursorInactiveStyle;
            for (let o = i; o <= r; ++o) {
              let u = o + a.ydisp;
              let f = this._rowElements[o];
              let v = a.lines.get(u);
              if (!f || !v) {
                break;
              }
              f.replaceChildren(...this._rowFactory.createRow(v, u, u === h, d, _, l, c, this.dimensions.css.cell.width, this._widthCache, n ? o === i ? e : 0 : -1, n ? (o === r ? t : s) - 1 : -1));
            }
          }
          constructor(e, t, i, r, s, a, c, d, f, g, m, S, w) {
            super();
            this._terminal = e;
            this._document = t;
            this._element = i;
            this._screenElement = r;
            this._viewportElement = s;
            this._helperContainer = a;
            this._linkifier2 = c;
            this._charSizeService = f;
            this._optionsService = g;
            this._bufferService = m;
            this._coreBrowserService = S;
            this._themeService = w;
            this._terminalClass = b++;
            this._rowElements = [];
            this._selectionRenderModel = l.createSelectionRenderModel();
            this.onRequestRedraw = this.register(new _.EventEmitter()).event;
            this._rowContainer = this._document.createElement("div");
            this._rowContainer.classList.add(p);
            this._rowContainer.style.lineHeight = "normal";
            this._rowContainer.setAttribute("aria-hidden", "true");
            this._refreshRowElements(this._bufferService.cols, this._bufferService.rows);
            this._selectionContainer = this._document.createElement("div");
            this._selectionContainer.classList.add(C);
            this._selectionContainer.setAttribute("aria-hidden", "true");
            this.dimensions = h.createRenderDimensions();
            this._updateDimensions();
            this.register(this._optionsService.onOptionChange(() => this._handleOptionsChanged()));
            this.register(this._themeService.onChangeColors(e => this._injectCss(e)));
            this._injectCss(this._themeService.colors);
            this._rowFactory = d.createInstance(n.DomRendererRowFactory, document);
            this._element.classList.add(v + this._terminalClass);
            this._screenElement.appendChild(this._rowContainer);
            this._screenElement.appendChild(this._selectionContainer);
            this.register(this._linkifier2.onShowLinkUnderline(e => this._handleLinkHover(e)));
            this.register(this._linkifier2.onHideLinkUnderline(e => this._handleLinkLeave(e)));
            this.register(u.toDisposable(() => {
              this._element.classList.remove(v + this._terminalClass);
              this._rowContainer.remove();
              this._selectionContainer.remove();
              this._widthCache.dispose();
              this._themeStyleElement.remove();
              this._dimensionsStyleElement.remove();
            }));
            this._widthCache = new o.WidthCache(this._document, this._helperContainer);
            this._widthCache.setFont(this._optionsService.rawOptions.fontFamily, this._optionsService.rawOptions.fontSize, this._optionsService.rawOptions.fontWeight, this._optionsService.rawOptions.fontWeightBold);
            this._setDefaultSpacing();
          }
        };
        t.DomRenderer = r([s(7, f.IInstantiationService), s(8, c.ICharSizeService), s(9, f.IOptionsService), s(10, f.IBufferService), s(11, c.ICoreBrowserService), s(12, c.IThemeService)], w);
      },
      3787: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.DomRendererRowFactory = undefined;
        let n = i(2223);
        let o = i(643);
        let a = i(511);
        let h = i(2585);
        let l = i(8055);
        let c = i(4725);
        let d = i(4269);
        let _ = i(6171);
        let u = i(3734);
        let f = t.DomRendererRowFactory = class {
          handleSelectionChanged(e, t, i) {
            this._selectionStart = e;
            this._selectionEnd = t;
            this._columnSelectMode = i;
          }
          createRow(e, t, i, r, s, a, h, c, _, f, p) {
            let g = [];
            let m = this._characterJoinerService.getJoinedCharacters(t);
            let S = this._themeService.colors;
            let C;
            let b = e.getNoBgTrimmedLength();
            if (i && b < a + 1) {
              b = a + 1;
            }
            let w = 0;
            let y = "";
            let E = 0;
            let x = 0;
            let k = 0;
            let L = false;
            let D = 0;
            let R = false;
            let A = 0;
            let B = [];
            let T = f !== -1 && p !== -1;
            for (let M = 0; M < b; M++) {
              e.loadCell(M, this._workCell);
              let b = this._workCell.getWidth();
              if (b === 0) {
                continue;
              }
              let O = false;
              let P = M;
              let I = this._workCell;
              if (m.length > 0 && M === m[0][0]) {
                O = true;
                let t = m.shift();
                I = new d.JoinedCellData(this._workCell, e.translateToString(true, t[0], t[1]), t[1] - t[0]);
                P = t[1] - 1;
                b = I.getWidth();
              }
              let H = this._isCellInSelection(M, t);
              let F = i && M === a;
              let W = T && M >= f && M <= p;
              let U = false;
              this._decorationService.forEachDecorationAtCell(M, t, undefined, e => {
                U = true;
              });
              let N = I.getChars() || o.WHITESPACE_CELL_CHAR;
              if (N === " " && (I.isUnderline() || I.isOverline())) {
                N = "\xA0";
              }
              A = b * c - _.get(N, I.isBold(), I.isItalic());
              if (C) {
                if (w && (H && R || !H && !R && I.bg === E) && (H && R && S.selectionForeground || I.fg === x) && I.extended.ext === k && W === L && A === D && !F && !O && !U) {
                  if (I.isInvisible()) {
                    y += o.WHITESPACE_CELL_CHAR;
                  } else {
                    y += N;
                  }
                  w++;
                  continue;
                }
                if (w) {
                  C.textContent = y;
                }
                C = this._document.createElement("span");
                w = 0;
                y = "";
              } else {
                C = this._document.createElement("span");
              }
              E = I.bg;
              x = I.fg;
              k = I.extended.ext;
              L = W;
              D = A;
              R = H;
              if (O && a >= M && a <= P) {
                a = M;
              }
              if (!this._coreService.isCursorHidden && F && this._coreService.isCursorInitialized) {
                B.push("xterm-cursor");
                if (this._coreBrowserService.isFocused) {
                  if (h) {
                    B.push("xterm-cursor-blink");
                  }
                  B.push(r === "bar" ? "xterm-cursor-bar" : r === "underline" ? "xterm-cursor-underline" : "xterm-cursor-block");
                } else if (s) {
                  switch (s) {
                    case "outline":
                      B.push("xterm-cursor-outline");
                      break;
                    case "block":
                      B.push("xterm-cursor-block");
                      break;
                    case "bar":
                      B.push("xterm-cursor-bar");
                      break;
                    case "underline":
                      B.push("xterm-cursor-underline");
                  }
                }
              }
              if (I.isBold()) {
                B.push("xterm-bold");
              }
              if (I.isItalic()) {
                B.push("xterm-italic");
              }
              if (I.isDim()) {
                B.push("xterm-dim");
              }
              y = I.isInvisible() ? o.WHITESPACE_CELL_CHAR : I.getChars() || o.WHITESPACE_CELL_CHAR;
              if (I.isUnderline() && (B.push(`xterm-underline-${I.extended.underlineStyle}`), y === " " && (y = "\xA0"), !I.isUnderlineColorDefault())) {
                if (I.isUnderlineColorRGB()) {
                  C.style.textDecorationColor = `rgb(${u.AttributeData.toColorRGB(I.getUnderlineColor()).join(",")})`;
                } else {
                  let e = I.getUnderlineColor();
                  if (this._optionsService.rawOptions.drawBoldTextInBrightColors && I.isBold() && e < 8) {
                    e += 8;
                  }
                  C.style.textDecorationColor = S.ansi[e].css;
                }
              }
              if (I.isOverline()) {
                B.push("xterm-overline");
                if (y === " ") {
                  y = "\xA0";
                }
              }
              if (I.isStrikethrough()) {
                B.push("xterm-strikethrough");
              }
              if (W) {
                C.style.textDecoration = "underline";
              }
              let $ = I.getFgColor();
              let j = I.getFgColorMode();
              let z = I.getBgColor();
              let K = I.getBgColorMode();
              let q = !!I.isInverse();
              if (q) {
                let e = $;
                $ = z;
                z = e;
                let t = j;
                j = K;
                K = t;
              }
              let V;
              let G;
              let X;
              let J = false;
              this._decorationService.forEachDecorationAtCell(M, t, undefined, e => {
                if (e.options.layer === "top" || !J) {
                  if (e.backgroundColorRGB) {
                    K = 50331648;
                    z = e.backgroundColorRGB.rgba >> 8 & 16777215;
                    V = e.backgroundColorRGB;
                  }
                  if (e.foregroundColorRGB) {
                    j = 50331648;
                    $ = e.foregroundColorRGB.rgba >> 8 & 16777215;
                    G = e.foregroundColorRGB;
                  }
                  J = e.options.layer === "top";
                }
              });
              if (!J && H) {
                z = (V = this._coreBrowserService.isFocused ? S.selectionBackgroundOpaque : S.selectionInactiveBackgroundOpaque).rgba >> 8 & 16777215;
                K = 50331648;
                J = true;
                if (S.selectionForeground) {
                  j = 50331648;
                  $ = S.selectionForeground.rgba >> 8 & 16777215;
                  G = S.selectionForeground;
                }
              }
              if (J) {
                B.push("xterm-decoration-top");
              }
              switch (K) {
                case 16777216:
                case 33554432:
                  X = S.ansi[z];
                  B.push(`xterm-bg-${z}`);
                  break;
                case 50331648:
                  X = l.channels.toColor(z >> 16, z >> 8 & 255, z & 255);
                  this._addStyle(C, `background-color:#${v((z >>> 0).toString(16), "0", 6)}`);
                  break;
                default:
                  if (q) {
                    X = S.foreground;
                    B.push(`xterm-bg-${n.INVERTED_DEFAULT_COLOR}`);
                  } else {
                    X = S.background;
                  }
              }
              if (!V) {
                if (I.isDim()) {
                  V = l.color.multiplyOpacity(X, 0.5);
                }
              }
              switch (j) {
                case 16777216:
                case 33554432:
                  if (I.isBold() && $ < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors) {
                    $ += 8;
                  }
                  if (!this._applyMinimumContrast(C, X, S.ansi[$], I, V, undefined)) {
                    B.push(`xterm-fg-${$}`);
                  }
                  break;
                case 50331648:
                  let Y = l.channels.toColor($ >> 16 & 255, $ >> 8 & 255, $ & 255);
                  if (!this._applyMinimumContrast(C, X, Y, I, V, G)) {
                    this._addStyle(C, `color:#${v($.toString(16), "0", 6)}`);
                  }
                  break;
                default:
                  if (!this._applyMinimumContrast(C, X, S.foreground, I, V, G)) {
                    if (q) {
                      B.push(`xterm-fg-${n.INVERTED_DEFAULT_COLOR}`);
                    }
                  }
              }
              if (B.length) {
                C.className = B.join(" ");
                B.length = 0;
              }
              if (F || O || U) {
                C.textContent = y;
              } else {
                w++;
              }
              if (A !== this.defaultSpacing) {
                C.style.letterSpacing = `${A}px`;
              }
              g.push(C);
              M = P;
            }
            if (C && w) {
              C.textContent = y;
            }
            return g;
          }
          _applyMinimumContrast(e, t, i, r, s, n) {
            let o;
            if (this._optionsService.rawOptions.minimumContrastRatio === 1 || _.treatGlyphAsBackgroundColor(r.getCode())) {
              return false;
            }
            let a = this._getContrastCache(r);
            if (!s && !n) {
              o = a.getColor(t.rgba, i.rgba);
            }
            if (o === undefined) {
              let e = this._optionsService.rawOptions.minimumContrastRatio / (r.isDim() ? 2 : 1);
              o = l.color.ensureContrastRatio(s || t, n || i, e);
              a.setColor((s || t).rgba, (n || i).rgba, o ?? null);
            }
            return !!o && (this._addStyle(e, `color:${o.css}`), true);
          }
          _getContrastCache(e) {
            if (e.isDim()) {
              return this._themeService.colors.halfContrastCache;
            } else {
              return this._themeService.colors.contrastCache;
            }
          }
          _addStyle(e, t) {
            e.setAttribute("style", `${e.getAttribute("style") || ""}${t};`);
          }
          _isCellInSelection(e, t) {
            let i = this._selectionStart;
            let r = this._selectionEnd;
            return !!i && !!r && (this._columnSelectMode ? i[0] <= r[0] ? e >= i[0] && t >= i[1] && e < r[0] && t <= r[1] : e < i[0] && t >= i[1] && e >= r[0] && t <= r[1] : t > i[1] && t < r[1] || i[1] === r[1] && t === i[1] && e >= i[0] && e < r[0] || i[1] < r[1] && t === r[1] && e < r[0] || i[1] < r[1] && t === i[1] && e >= i[0]);
          }
          constructor(e, t, i, r, s, n, o) {
            this._document = e;
            this._characterJoinerService = t;
            this._optionsService = i;
            this._coreBrowserService = r;
            this._coreService = s;
            this._decorationService = n;
            this._themeService = o;
            this._workCell = new a.CellData();
            this._columnSelectMode = false;
            this.defaultSpacing = 0;
          }
        };
        function v(e, t, i) {
          while (e.length < i) {
            e = t + e;
          }
          return e;
        }
        t.DomRendererRowFactory = r([s(1, c.ICharacterJoinerService), s(2, h.IOptionsService), s(3, c.ICoreBrowserService), s(4, h.ICoreService), s(5, h.IDecorationService), s(6, c.IThemeService)], f);
      },
      2550: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.WidthCache = undefined;
        t.WidthCache = class {
          dispose() {
            this._container.remove();
            this._measureElements.length = 0;
            this._holey = undefined;
          }
          clear() {
            this._flat.fill(-9999);
            this._holey = new Map();
          }
          setFont(e, t, i, r) {
            if (e !== this._font || t !== this._fontSize || i !== this._weight || r !== this._weightBold) {
              this._font = e;
              this._fontSize = t;
              this._weight = i;
              this._weightBold = r;
              this._container.style.fontFamily = this._font;
              this._container.style.fontSize = `${this._fontSize}px`;
              this._measureElements[0].style.fontWeight = `${i}`;
              this._measureElements[1].style.fontWeight = `${r}`;
              this._measureElements[2].style.fontWeight = `${i}`;
              this._measureElements[3].style.fontWeight = `${r}`;
              this.clear();
            }
          }
          get(e, t, i) {
            let r = 0;
            if (!t && !i && e.length === 1 && (r = e.charCodeAt(0)) < 256) {
              if (this._flat[r] !== -9999) {
                return this._flat[r];
              }
              let t = this._measure(e, 0);
              if (t > 0) {
                this._flat[r] = t;
              }
              return t;
            }
            let s = e;
            if (t) {
              s += "B";
            }
            if (i) {
              s += "I";
            }
            let n = this._holey.get(s);
            if (n === undefined) {
              let r = 0;
              if (t) {
                r |= 1;
              }
              if (i) {
                r |= 2;
              }
              if ((n = this._measure(e, r)) > 0) {
                this._holey.set(s, n);
              }
            }
            return n;
          }
          _measure(e, t) {
            let i = this._measureElements[t];
            i.textContent = e.repeat(32);
            return i.offsetWidth / 32;
          }
          constructor(e, t) {
            this._flat = new Float32Array(256);
            this._font = "";
            this._fontSize = 0;
            this._weight = "normal";
            this._weightBold = "bold";
            this._measureElements = [];
            this._container = e.createElement("div");
            this._container.classList.add("xterm-width-cache-measure-container");
            this._container.setAttribute("aria-hidden", "true");
            this._container.style.whiteSpace = "pre";
            this._container.style.fontKerning = "none";
            let i = e.createElement("span");
            i.classList.add("xterm-char-measure-element");
            let r = e.createElement("span");
            r.classList.add("xterm-char-measure-element");
            r.style.fontWeight = "bold";
            let s = e.createElement("span");
            s.classList.add("xterm-char-measure-element");
            s.style.fontStyle = "italic";
            let n = e.createElement("span");
            n.classList.add("xterm-char-measure-element");
            n.style.fontWeight = "bold";
            n.style.fontStyle = "italic";
            this._measureElements = [i, r, s, n];
            this._container.appendChild(i);
            this._container.appendChild(r);
            this._container.appendChild(s);
            this._container.appendChild(n);
            t.appendChild(this._container);
            this.clear();
          }
        };
      },
      2223: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.TEXT_BASELINE = t.DIM_OPACITY = t.INVERTED_DEFAULT_COLOR = undefined;
        let r = i(6114);
        t.INVERTED_DEFAULT_COLOR = 257;
        t.DIM_OPACITY = 0.5;
        t.TEXT_BASELINE = r.isFirefox || r.isLegacyEdge ? "bottom" : "ideographic";
      },
      6171: (e, t) => {
        function i(e) {
          return e >= 57508 && e <= 57558;
        }
        function r(e) {
          return e >= 128512 && e <= 128591 || e >= 127744 && e <= 128511 || e >= 128640 && e <= 128767 || e >= 9728 && e <= 9983 || e >= 9984 && e <= 10175 || e >= 65024 && e <= 65039 || e >= 129280 && e <= 129535 || e >= 127462 && e <= 127487;
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.computeNextVariantOffset = t.createRenderDimensions = t.treatGlyphAsBackgroundColor = t.allowRescaling = t.isEmoji = t.isRestrictedPowerlineGlyph = t.isPowerlineGlyph = t.throwIfFalsy = undefined;
        t.throwIfFalsy = function (e) {
          if (!e) {
            throw Error("value must not be falsy");
          }
          return e;
        };
        t.isPowerlineGlyph = i;
        t.isRestrictedPowerlineGlyph = function (e) {
          return e >= 57520 && e <= 57527;
        };
        t.isEmoji = r;
        t.allowRescaling = function (e, t, s, n) {
          return t === 1 && s > Math.ceil(n * 1.5) && e !== undefined && e > 255 && !r(e) && !i(e) && (!(e >= 57344) || !(e <= 63743));
        };
        t.treatGlyphAsBackgroundColor = function (e) {
          return i(e) || e >= 9472 && e <= 9631;
        };
        t.createRenderDimensions = function () {
          return {
            css: {
              canvas: {
                width: 0,
                height: 0
              },
              cell: {
                width: 0,
                height: 0
              }
            },
            device: {
              canvas: {
                width: 0,
                height: 0
              },
              cell: {
                width: 0,
                height: 0
              },
              char: {
                width: 0,
                height: 0,
                left: 0,
                top: 0
              }
            }
          };
        };
        t.computeNextVariantOffset = function (e, t, i = 0) {
          return (e - (Math.round(t) * 2 - i)) % (Math.round(t) * 2);
        };
      },
      6052: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.createSelectionRenderModel = undefined;
        class i {
          clear() {
            this.hasSelection = false;
            this.columnSelectMode = false;
            this.viewportStartRow = 0;
            this.viewportEndRow = 0;
            this.viewportCappedStartRow = 0;
            this.viewportCappedEndRow = 0;
            this.startCol = 0;
            this.endCol = 0;
            this.selectionStart = undefined;
            this.selectionEnd = undefined;
          }
          update(e, t, i, r = false) {
            this.selectionStart = t;
            this.selectionEnd = i;
            if (!t || !i || t[0] === i[0] && t[1] === i[1]) {
              this.clear();
              return;
            }
            let s = e.buffers.active.ydisp;
            let n = t[1] - s;
            let o = i[1] - s;
            let a = Math.max(n, 0);
            let h = Math.min(o, e.rows - 1);
            if (a >= e.rows || h < 0) {
              this.clear();
            } else {
              this.hasSelection = true;
              this.columnSelectMode = r;
              this.viewportStartRow = n;
              this.viewportEndRow = o;
              this.viewportCappedStartRow = a;
              this.viewportCappedEndRow = h;
              this.startCol = t[0];
              this.endCol = i[0];
            }
          }
          isCellSelected(e, t, i) {
            return !!this.hasSelection && (i -= e.buffer.active.viewportY, this.columnSelectMode ? this.startCol <= this.endCol ? t >= this.startCol && i >= this.viewportCappedStartRow && t < this.endCol && i <= this.viewportCappedEndRow : t < this.startCol && i >= this.viewportCappedStartRow && t >= this.endCol && i <= this.viewportCappedEndRow : i > this.viewportStartRow && i < this.viewportEndRow || this.viewportStartRow === this.viewportEndRow && i === this.viewportStartRow && t >= this.startCol && t < this.endCol || this.viewportStartRow < this.viewportEndRow && i === this.viewportEndRow && t < this.endCol || this.viewportStartRow < this.viewportEndRow && i === this.viewportStartRow && t >= this.startCol);
          }
          constructor() {
            this.clear();
          }
        }
        t.createSelectionRenderModel = function () {
          return new i();
        };
      },
      456: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.SelectionModel = undefined;
        t.SelectionModel = class {
          clearSelection() {
            this.selectionStart = undefined;
            this.selectionEnd = undefined;
            this.isSelectAllActive = false;
            this.selectionStartLength = 0;
          }
          get finalSelectionStart() {
            if (this.isSelectAllActive) {
              return [0, 0];
            } else if (this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed()) {
              return this.selectionEnd;
            } else {
              return this.selectionStart;
            }
          }
          get finalSelectionEnd() {
            if (this.isSelectAllActive) {
              return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
            }
            if (this.selectionStart) {
              if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                let e = this.selectionStart[0] + this.selectionStartLength;
                if (e > this._bufferService.cols) {
                  if (e % this._bufferService.cols == 0) {
                    return [this._bufferService.cols, this.selectionStart[1] + Math.floor(e / this._bufferService.cols) - 1];
                  } else {
                    return [e % this._bufferService.cols, this.selectionStart[1] + Math.floor(e / this._bufferService.cols)];
                  }
                } else {
                  return [e, this.selectionStart[1]];
                }
              }
              if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
                let e = this.selectionStart[0] + this.selectionStartLength;
                if (e > this._bufferService.cols) {
                  return [e % this._bufferService.cols, this.selectionStart[1] + Math.floor(e / this._bufferService.cols)];
                } else {
                  return [Math.max(e, this.selectionEnd[0]), this.selectionEnd[1]];
                }
              }
              return this.selectionEnd;
            }
          }
          areSelectionValuesReversed() {
            let e = this.selectionStart;
            let t = this.selectionEnd;
            return !!e && !!t && (e[1] > t[1] || e[1] === t[1] && e[0] > t[0]);
          }
          handleTrim(e) {
            if (this.selectionStart) {
              this.selectionStart[1] -= e;
            }
            if (this.selectionEnd) {
              this.selectionEnd[1] -= e;
            }
            if (this.selectionEnd && this.selectionEnd[1] < 0) {
              this.clearSelection();
              return true;
            } else {
              if (this.selectionStart && this.selectionStart[1] < 0) {
                this.selectionStart[1] = 0;
              }
              return false;
            }
          }
          constructor(e) {
            this._bufferService = e;
            this.isSelectAllActive = false;
            this.selectionStartLength = 0;
          }
        };
      },
      428: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.CharSizeService = undefined;
        let n = i(2585);
        let o = i(8460);
        let a = i(844);
        let h = t.CharSizeService = class extends a.Disposable {
          get hasValidSize() {
            return this.width > 0 && this.height > 0;
          }
          measure() {
            let e = this._measureStrategy.measure();
            if (e.width !== this.width || e.height !== this.height) {
              this.width = e.width;
              this.height = e.height;
              this._onCharSizeChange.fire();
            }
          }
          constructor(e, t, i) {
            super();
            this._optionsService = i;
            this.width = 0;
            this.height = 0;
            this._onCharSizeChange = this.register(new o.EventEmitter());
            this.onCharSizeChange = this._onCharSizeChange.event;
            try {
              this._measureStrategy = this.register(new d(this._optionsService));
            } catch {
              this._measureStrategy = this.register(new c(e, t, this._optionsService));
            }
            this.register(this._optionsService.onMultipleOptionChange(["fontFamily", "fontSize"], () => this.measure()));
          }
        };
        t.CharSizeService = h = r([s(2, n.IOptionsService)], h);
        class l extends a.Disposable {
          _validateAndSet(e, t) {
            if (e !== undefined && e > 0 && t !== undefined && t > 0) {
              this._result.width = e;
              this._result.height = t;
            }
          }
          constructor() {
            super(...arguments);
            this._result = {
              width: 0,
              height: 0
            };
          }
        }
        class c extends l {
          measure() {
            this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily;
            this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`;
            this._validateAndSet(Number(this._measureElement.offsetWidth) / 32, Number(this._measureElement.offsetHeight));
            return this._result;
          }
          constructor(e, t, i) {
            super();
            this._document = e;
            this._parentElement = t;
            this._optionsService = i;
            this._measureElement = this._document.createElement("span");
            this._measureElement.classList.add("xterm-char-measure-element");
            this._measureElement.textContent = "W".repeat(32);
            this._measureElement.setAttribute("aria-hidden", "true");
            this._measureElement.style.whiteSpace = "pre";
            this._measureElement.style.fontKerning = "none";
            this._parentElement.appendChild(this._measureElement);
          }
        }
        class d extends l {
          measure() {
            this._ctx.font = `${this._optionsService.rawOptions.fontSize}px ${this._optionsService.rawOptions.fontFamily}`;
            let e = this._ctx.measureText("W");
            this._validateAndSet(e.width, e.fontBoundingBoxAscent + e.fontBoundingBoxDescent);
            return this._result;
          }
          constructor(e) {
            super();
            this._optionsService = e;
            this._canvas = new OffscreenCanvas(100, 100);
            this._ctx = this._canvas.getContext("2d");
            let t = this._ctx.measureText("W");
            if (!("width" in t) || !("fontBoundingBoxAscent" in t) || !("fontBoundingBoxDescent" in t)) {
              throw Error("Required font metrics not supported");
            }
          }
        }
      },
      4269: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.CharacterJoinerService = t.JoinedCellData = undefined;
        let n = i(3734);
        let o = i(643);
        let a = i(511);
        let h = i(2585);
        class l extends n.AttributeData {
          isCombined() {
            return 2097152;
          }
          getWidth() {
            return this._width;
          }
          getChars() {
            return this.combinedData;
          }
          getCode() {
            return 2097151;
          }
          setFromCharData(e) {
            throw Error("not implemented");
          }
          getAsCharData() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
          }
          constructor(e, t, i) {
            super();
            this.content = 0;
            this.combinedData = "";
            this.fg = e.fg;
            this.bg = e.bg;
            this.combinedData = t;
            this._width = i;
          }
        }
        t.JoinedCellData = l;
        let c = t.CharacterJoinerService = class e {
          register(e) {
            let t = {
              id: this._nextCharacterJoinerId++,
              handler: e
            };
            this._characterJoiners.push(t);
            return t.id;
          }
          deregister(e) {
            for (let t = 0; t < this._characterJoiners.length; t++) {
              if (this._characterJoiners[t].id === e) {
                this._characterJoiners.splice(t, 1);
                return true;
              }
            }
            return false;
          }
          getJoinedCharacters(e) {
            if (this._characterJoiners.length === 0) {
              return [];
            }
            let t = this._bufferService.buffer.lines.get(e);
            if (!t || t.length === 0) {
              return [];
            }
            let i = [];
            let r = t.translateToString(true);
            let s = 0;
            let n = 0;
            let a = 0;
            let h = t.getFg(0);
            let l = t.getBg(0);
            for (let e = 0; e < t.getTrimmedLength(); e++) {
              t.loadCell(e, this._workCell);
              if (this._workCell.getWidth() !== 0) {
                if (this._workCell.fg !== h || this._workCell.bg !== l) {
                  if (e - s > 1) {
                    let e = this._getJoinedRanges(r, a, n, t, s);
                    for (let t = 0; t < e.length; t++) {
                      i.push(e[t]);
                    }
                  }
                  s = e;
                  a = n;
                  h = this._workCell.fg;
                  l = this._workCell.bg;
                }
                n += this._workCell.getChars().length || o.WHITESPACE_CELL_CHAR.length;
              }
            }
            if (this._bufferService.cols - s > 1) {
              let e = this._getJoinedRanges(r, a, n, t, s);
              for (let t = 0; t < e.length; t++) {
                i.push(e[t]);
              }
            }
            return i;
          }
          _getJoinedRanges(t, i, r, s, n) {
            let o = t.substring(i, r);
            let a = [];
            try {
              a = this._characterJoiners[0].handler(o);
            } catch (e) {}
            for (let t = 1; t < this._characterJoiners.length; t++) {
              try {
                let i = this._characterJoiners[t].handler(o);
                for (let t = 0; t < i.length; t++) {
                  e._mergeRanges(a, i[t]);
                }
              } catch (e) {}
            }
            this._stringRangesToCellRanges(a, s, n);
            return a;
          }
          _stringRangesToCellRanges(e, t, i) {
            let r = 0;
            let s = false;
            let n = 0;
            let a = e[0];
            if (a) {
              for (let h = i; h < this._bufferService.cols; h++) {
                let i = t.getWidth(h);
                let l = t.getString(h).length || o.WHITESPACE_CELL_CHAR.length;
                if (i !== 0) {
                  if (!s && a[0] <= n) {
                    a[0] = h;
                    s = true;
                  }
                  if (a[1] <= n) {
                    a[1] = h;
                    if (!(a = e[++r])) {
                      break;
                    }
                    if (a[0] <= n) {
                      a[0] = h;
                      s = true;
                    } else {
                      s = false;
                    }
                  }
                  n += l;
                }
              }
              if (a) {
                a[1] = this._bufferService.cols;
              }
            }
          }
          static _mergeRanges(e, t) {
            let i = false;
            for (let r = 0; r < e.length; r++) {
              let s = e[r];
              if (i) {
                if (t[1] <= s[0]) {
                  e[r - 1][1] = t[1];
                  return e;
                }
                if (t[1] <= s[1]) {
                  e[r - 1][1] = Math.max(t[1], s[1]);
                  e.splice(r, 1);
                  return e;
                }
                e.splice(r, 1);
                r--;
              } else {
                if (t[1] <= s[0]) {
                  e.splice(r, 0, t);
                  return e;
                }
                if (t[1] <= s[1]) {
                  s[0] = Math.min(t[0], s[0]);
                  return e;
                }
                if (t[0] < s[1]) {
                  s[0] = Math.min(t[0], s[0]);
                  i = true;
                }
              }
            }
            if (i) {
              e[e.length - 1][1] = t[1];
            } else {
              e.push(t);
            }
            return e;
          }
          constructor(e) {
            this._bufferService = e;
            this._characterJoiners = [];
            this._nextCharacterJoinerId = 0;
            this._workCell = new a.CellData();
          }
        };
        t.CharacterJoinerService = r([s(0, h.IBufferService)], c);
      },
      5114: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.CoreBrowserService = undefined;
        let r = i(844);
        let s = i(8460);
        let n = i(3656);
        class o extends r.Disposable {
          get window() {
            return this._window;
          }
          set window(e) {
            if (this._window !== e) {
              this._window = e;
              this._onWindowChange.fire(this._window);
            }
          }
          get dpr() {
            return this.window.devicePixelRatio;
          }
          get isFocused() {
            if (this._cachedIsFocused === undefined) {
              this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus();
              queueMicrotask(() => this._cachedIsFocused = undefined);
            }
            return this._cachedIsFocused;
          }
          constructor(e, t, i) {
            super();
            this._textarea = e;
            this._window = t;
            this.mainDocument = i;
            this._isFocused = false;
            this._cachedIsFocused = undefined;
            this._screenDprMonitor = new a(this._window);
            this._onDprChange = this.register(new s.EventEmitter());
            this.onDprChange = this._onDprChange.event;
            this._onWindowChange = this.register(new s.EventEmitter());
            this.onWindowChange = this._onWindowChange.event;
            this.register(this.onWindowChange(e => this._screenDprMonitor.setWindow(e)));
            this.register(s.forwardEvent(this._screenDprMonitor.onDprChange, this._onDprChange));
            this._textarea.addEventListener("focus", () => this._isFocused = true);
            this._textarea.addEventListener("blur", () => this._isFocused = false);
          }
        }
        t.CoreBrowserService = o;
        class a extends r.Disposable {
          setWindow(e) {
            this._parentWindow = e;
            this._setWindowResizeListener();
            this._setDprAndFireIfDiffers();
          }
          _setWindowResizeListener() {
            this._windowResizeListener.value = n.addDisposableDomListener(this._parentWindow, "resize", () => this._setDprAndFireIfDiffers());
          }
          _setDprAndFireIfDiffers() {
            if (this._parentWindow.devicePixelRatio !== this._currentDevicePixelRatio) {
              this._onDprChange.fire(this._parentWindow.devicePixelRatio);
            }
            this._updateDpr();
          }
          _updateDpr() {
            var e;
            if (this._outerListener) {
              if ((e = this._resolutionMediaMatchList) !== null && e !== undefined) {
                e.removeListener(this._outerListener);
              }
              this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio;
              this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`);
              this._resolutionMediaMatchList.addListener(this._outerListener);
            }
          }
          clearListener() {
            if (this._resolutionMediaMatchList && this._outerListener) {
              this._resolutionMediaMatchList.removeListener(this._outerListener);
              this._resolutionMediaMatchList = undefined;
              this._outerListener = undefined;
            }
          }
          constructor(e) {
            super();
            this._parentWindow = e;
            this._windowResizeListener = this.register(new r.MutableDisposable());
            this._onDprChange = this.register(new s.EventEmitter());
            this.onDprChange = this._onDprChange.event;
            this._outerListener = () => this._setDprAndFireIfDiffers();
            this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio;
            this._updateDpr();
            this._setWindowResizeListener();
            this.register(r.toDisposable(() => this.clearListener()));
          }
        }
      },
      779: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.LinkProviderService = undefined;
        let r = i(844);
        class s extends r.Disposable {
          registerLinkProvider(e) {
            this.linkProviders.push(e);
            return {
              dispose: () => {
                let t = this.linkProviders.indexOf(e);
                if (t !== -1) {
                  this.linkProviders.splice(t, 1);
                }
              }
            };
          }
          constructor() {
            super();
            this.linkProviders = [];
            this.register(r.toDisposable(() => this.linkProviders.length = 0));
          }
        }
        t.LinkProviderService = s;
      },
      8934: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.MouseService = undefined;
        let n = i(4725);
        let o = i(9806);
        let a = t.MouseService = class {
          getCoords(e, t, i, r, s) {
            return o.getCoords(window, e, t, i, r, this._charSizeService.hasValidSize, this._renderService.dimensions.css.cell.width, this._renderService.dimensions.css.cell.height, s);
          }
          getMouseReportCoords(e, t) {
            let i = o.getCoordsRelativeToElement(window, e, t);
            if (this._charSizeService.hasValidSize) {
              i[0] = Math.min(Math.max(i[0], 0), this._renderService.dimensions.css.canvas.width - 1);
              i[1] = Math.min(Math.max(i[1], 0), this._renderService.dimensions.css.canvas.height - 1);
              return {
                col: Math.floor(i[0] / this._renderService.dimensions.css.cell.width),
                row: Math.floor(i[1] / this._renderService.dimensions.css.cell.height),
                x: Math.floor(i[0]),
                y: Math.floor(i[1])
              };
            }
          }
          constructor(e, t) {
            this._renderService = e;
            this._charSizeService = t;
          }
        };
        t.MouseService = r([s(0, n.IRenderService), s(1, n.ICharSizeService)], a);
      },
      3230: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.RenderService = undefined;
        let n = i(6193);
        let o = i(4725);
        let a = i(8460);
        let h = i(844);
        let l = i(7226);
        let c = i(2585);
        let d = t.RenderService = class extends h.Disposable {
          get dimensions() {
            return this._renderer.value.dimensions;
          }
          _registerIntersectionObserver(e, t) {
            if ("IntersectionObserver" in e) {
              let i = new e.IntersectionObserver(e => this._handleIntersectionChange(e[e.length - 1]), {
                threshold: 0
              });
              i.observe(t);
              this._observerDisposable.value = h.toDisposable(() => i.disconnect());
            }
          }
          _handleIntersectionChange(e) {
            this._isPaused = e.isIntersecting === undefined ? e.intersectionRatio === 0 : !e.isIntersecting;
            if (!this._isPaused && !this._charSizeService.hasValidSize) {
              this._charSizeService.measure();
            }
            if (!this._isPaused && this._needsFullRefresh) {
              this._pausedResizeTask.flush();
              this.refreshRows(0, this._rowCount - 1);
              this._needsFullRefresh = false;
            }
          }
          refreshRows(e, t, i = false) {
            if (this._isPaused) {
              this._needsFullRefresh = true;
            } else {
              if (!i) {
                this._isNextRenderRedrawOnly = false;
              }
              this._renderDebouncer.refresh(e, t, this._rowCount);
            }
          }
          _renderRows(e, t) {
            if (this._renderer.value) {
              e = Math.min(e, this._rowCount - 1);
              t = Math.min(t, this._rowCount - 1);
              this._renderer.value.renderRows(e, t);
              if (this._needsSelectionRefresh) {
                this._renderer.value.handleSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode);
                this._needsSelectionRefresh = false;
              }
              if (!this._isNextRenderRedrawOnly) {
                this._onRenderedViewportChange.fire({
                  start: e,
                  end: t
                });
              }
              this._onRender.fire({
                start: e,
                end: t
              });
              this._isNextRenderRedrawOnly = true;
            }
          }
          resize(e, t) {
            this._rowCount = t;
            this._fireOnCanvasResize();
          }
          _handleOptionsChanged() {
            if (this._renderer.value) {
              this.refreshRows(0, this._rowCount - 1);
              this._fireOnCanvasResize();
            }
          }
          _fireOnCanvasResize() {
            if (this._renderer.value) {
              if (this._renderer.value.dimensions.css.canvas.width !== this._canvasWidth || this._renderer.value.dimensions.css.canvas.height !== this._canvasHeight) {
                this._onDimensionsChange.fire(this._renderer.value.dimensions);
              }
            }
          }
          hasRenderer() {
            return !!this._renderer.value;
          }
          setRenderer(e) {
            this._renderer.value = e;
            if (this._renderer.value) {
              this._renderer.value.onRequestRedraw(e => this.refreshRows(e.start, e.end, true));
              this._needsSelectionRefresh = true;
              this._fullRefresh();
            }
          }
          addRefreshCallback(e) {
            return this._renderDebouncer.addRefreshCallback(e);
          }
          _fullRefresh() {
            if (this._isPaused) {
              this._needsFullRefresh = true;
            } else {
              this.refreshRows(0, this._rowCount - 1);
            }
          }
          clearTextureAtlas() {
            var e;
            var t;
            if (this._renderer.value) {
              if ((e = (t = this._renderer.value).clearTextureAtlas) !== null && e !== undefined) {
                e.call(t);
              }
              this._fullRefresh();
            }
          }
          handleDevicePixelRatioChange() {
            this._charSizeService.measure();
            if (this._renderer.value) {
              this._renderer.value.handleDevicePixelRatioChange();
              this.refreshRows(0, this._rowCount - 1);
            }
          }
          handleResize(e, t) {
            if (this._renderer.value) {
              if (this._isPaused) {
                this._pausedResizeTask.set(() => {
                  var i;
                  if ((i = this._renderer.value) === null || i === undefined) {
                    return undefined;
                  } else {
                    return i.handleResize(e, t);
                  }
                });
              } else {
                this._renderer.value.handleResize(e, t);
              }
              this._fullRefresh();
            }
          }
          handleCharSizeChanged() {
            var e;
            if ((e = this._renderer.value) !== null && e !== undefined) {
              e.handleCharSizeChanged();
            }
          }
          handleBlur() {
            var e;
            if ((e = this._renderer.value) !== null && e !== undefined) {
              e.handleBlur();
            }
          }
          handleFocus() {
            var e;
            if ((e = this._renderer.value) !== null && e !== undefined) {
              e.handleFocus();
            }
          }
          handleSelectionChanged(e, t, i) {
            var r;
            this._selectionState.start = e;
            this._selectionState.end = t;
            this._selectionState.columnSelectMode = i;
            if ((r = this._renderer.value) !== null && r !== undefined) {
              r.handleSelectionChanged(e, t, i);
            }
          }
          handleCursorMove() {
            var e;
            if ((e = this._renderer.value) !== null && e !== undefined) {
              e.handleCursorMove();
            }
          }
          clear() {
            var e;
            if ((e = this._renderer.value) !== null && e !== undefined) {
              e.clear();
            }
          }
          constructor(e, t, i, r, s, o, c, d) {
            super();
            this._rowCount = e;
            this._charSizeService = r;
            this._renderer = this.register(new h.MutableDisposable());
            this._pausedResizeTask = new l.DebouncedIdleTask();
            this._observerDisposable = this.register(new h.MutableDisposable());
            this._isPaused = false;
            this._needsFullRefresh = false;
            this._isNextRenderRedrawOnly = true;
            this._needsSelectionRefresh = false;
            this._canvasWidth = 0;
            this._canvasHeight = 0;
            this._selectionState = {
              start: undefined,
              end: undefined,
              columnSelectMode: false
            };
            this._onDimensionsChange = this.register(new a.EventEmitter());
            this.onDimensionsChange = this._onDimensionsChange.event;
            this._onRenderedViewportChange = this.register(new a.EventEmitter());
            this.onRenderedViewportChange = this._onRenderedViewportChange.event;
            this._onRender = this.register(new a.EventEmitter());
            this.onRender = this._onRender.event;
            this._onRefreshRequest = this.register(new a.EventEmitter());
            this.onRefreshRequest = this._onRefreshRequest.event;
            this._renderDebouncer = new n.RenderDebouncer((e, t) => this._renderRows(e, t), c);
            this.register(this._renderDebouncer);
            this.register(c.onDprChange(() => this.handleDevicePixelRatioChange()));
            this.register(o.onResize(() => this._fullRefresh()));
            this.register(o.buffers.onBufferActivate(() => {
              var e;
              if ((e = this._renderer.value) === null || e === undefined) {
                return undefined;
              } else {
                return e.clear();
              }
            }));
            this.register(i.onOptionChange(() => this._handleOptionsChanged()));
            this.register(this._charSizeService.onCharSizeChange(() => this.handleCharSizeChanged()));
            this.register(s.onDecorationRegistered(() => this._fullRefresh()));
            this.register(s.onDecorationRemoved(() => this._fullRefresh()));
            this.register(i.onMultipleOptionChange(["customGlyphs", "drawBoldTextInBrightColors", "letterSpacing", "lineHeight", "fontFamily", "fontSize", "fontWeight", "fontWeightBold", "minimumContrastRatio", "rescaleOverlappingGlyphs"], () => {
              this.clear();
              this.handleResize(o.cols, o.rows);
              this._fullRefresh();
            }));
            this.register(i.onMultipleOptionChange(["cursorBlink", "cursorStyle"], () => this.refreshRows(o.buffer.y, o.buffer.y, true)));
            this.register(d.onChangeColors(() => this._fullRefresh()));
            this._registerIntersectionObserver(c.window, t);
            this.register(c.onWindowChange(e => this._registerIntersectionObserver(e, t)));
          }
        };
        t.RenderService = r([s(2, c.IOptionsService), s(3, o.ICharSizeService), s(4, c.IDecorationService), s(5, c.IBufferService), s(6, o.ICoreBrowserService), s(7, o.IThemeService)], d);
      },
      9312: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.SelectionService = undefined;
        let n = i(9806);
        let o = i(9504);
        let a = i(456);
        let h = i(4725);
        let l = i(8460);
        let c = i(844);
        let d = i(6114);
        let _ = i(4841);
        let u = i(511);
        let f = i(2585);
        let v = RegExp(String.fromCharCode(160), "g");
        let p = t.SelectionService = class extends c.Disposable {
          reset() {
            this.clearSelection();
          }
          disable() {
            this.clearSelection();
            this._enabled = false;
          }
          enable() {
            this._enabled = true;
          }
          get selectionStart() {
            return this._model.finalSelectionStart;
          }
          get selectionEnd() {
            return this._model.finalSelectionEnd;
          }
          get hasSelection() {
            let e = this._model.finalSelectionStart;
            let t = this._model.finalSelectionEnd;
            return !!e && !!t && (e[0] !== t[0] || e[1] !== t[1]);
          }
          get selectionText() {
            let e = this._model.finalSelectionStart;
            let t = this._model.finalSelectionEnd;
            if (!e || !t) {
              return "";
            }
            let i = this._bufferService.buffer;
            let r = [];
            if (this._activeSelectionMode === 3) {
              if (e[0] === t[0]) {
                return "";
              }
              let s = e[0] < t[0] ? e[0] : t[0];
              let n = e[0] < t[0] ? t[0] : e[0];
              for (let o = e[1]; o <= t[1]; o++) {
                let e = i.translateBufferLineToString(o, true, s, n);
                r.push(e);
              }
            } else {
              let s = e[1] === t[1] ? t[0] : undefined;
              r.push(i.translateBufferLineToString(e[1], true, e[0], s));
              for (let s = e[1] + 1; s <= t[1] - 1; s++) {
                let e = i.lines.get(s);
                let t = i.translateBufferLineToString(s, true);
                if (e == null ? undefined : e.isWrapped) {
                  r[r.length - 1] += t;
                } else {
                  r.push(t);
                }
              }
              if (e[1] !== t[1]) {
                let e = i.lines.get(t[1]);
                let s = i.translateBufferLineToString(t[1], true, 0, t[0]);
                if (e && e.isWrapped) {
                  r[r.length - 1] += s;
                } else {
                  r.push(s);
                }
              }
            }
            return r.map(e => e.replace(v, " ")).join(d.isWindows ? "\r\n" : "\n");
          }
          clearSelection() {
            this._model.clearSelection();
            this._removeMouseDownListeners();
            this.refresh();
            this._onSelectionChange.fire();
          }
          refresh(e) {
            this._refreshAnimationFrame ||= this._coreBrowserService.window.requestAnimationFrame(() => this._refresh());
            if (d.isLinux && e && this.selectionText.length) {
              this._onLinuxMouseSelection.fire(this.selectionText);
            }
          }
          _refresh() {
            this._refreshAnimationFrame = undefined;
            this._onRedrawRequest.fire({
              start: this._model.finalSelectionStart,
              end: this._model.finalSelectionEnd,
              columnSelectMode: this._activeSelectionMode === 3
            });
          }
          _isClickInSelection(e) {
            let t = this._getMouseBufferCoords(e);
            let i = this._model.finalSelectionStart;
            let r = this._model.finalSelectionEnd;
            return !!i && !!r && !!t && this._areCoordsInSelection(t, i, r);
          }
          isCellInSelection(e, t) {
            let i = this._model.finalSelectionStart;
            let r = this._model.finalSelectionEnd;
            return !!i && !!r && this._areCoordsInSelection([e, t], i, r);
          }
          _areCoordsInSelection(e, t, i) {
            return e[1] > t[1] && e[1] < i[1] || t[1] === i[1] && e[1] === t[1] && e[0] >= t[0] && e[0] < i[0] || t[1] < i[1] && e[1] === i[1] && e[0] < i[0] || t[1] < i[1] && e[1] === t[1] && e[0] >= t[0];
          }
          _selectWordAtCursor(e, t) {
            var r;
            let s = (r = this._linkifier.currentLink) === null || r === undefined ? undefined : r.link?.range;
            if (s) {
              this._model.selectionStart = [s.start.x - 1, s.start.y - 1];
              this._model.selectionStartLength = _.getRangeLength(s, this._bufferService.cols);
              this._model.selectionEnd = undefined;
              return true;
            }
            let n = this._getMouseBufferCoords(e);
            return !!n && (this._selectWordAt(n, t), this._model.selectionEnd = undefined, true);
          }
          selectAll() {
            this._model.isSelectAllActive = true;
            this.refresh();
            this._onSelectionChange.fire();
          }
          selectLines(e, t) {
            this._model.clearSelection();
            e = Math.max(e, 0);
            t = Math.min(t, this._bufferService.buffer.lines.length - 1);
            this._model.selectionStart = [0, e];
            this._model.selectionEnd = [this._bufferService.cols, t];
            this.refresh();
            this._onSelectionChange.fire();
          }
          _handleTrim(e) {
            if (this._model.handleTrim(e)) {
              this.refresh();
            }
          }
          _getMouseBufferCoords(e) {
            let t = this._mouseService.getCoords(e, this._screenElement, this._bufferService.cols, this._bufferService.rows, true);
            if (t) {
              t[0]--;
              t[1]--;
              t[1] += this._bufferService.buffer.ydisp;
              return t;
            }
          }
          _getMouseEventScrollAmount(e) {
            let t = n.getCoordsRelativeToElement(this._coreBrowserService.window, e, this._screenElement)[1];
            let i = this._renderService.dimensions.css.canvas.height;
            if (t >= 0 && t <= i) {
              return 0;
            } else {
              if (t > i) {
                t -= i;
              }
              return (t = Math.min(Math.max(t, -50), 50) / 50) / Math.abs(t) + Math.round(t * 14);
            }
          }
          shouldForceSelection(e) {
            if (d.isMac) {
              return e.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection;
            } else {
              return e.shiftKey;
            }
          }
          handleMouseDown(e) {
            this._mouseDownTimeStamp = e.timeStamp;
            if ((e.button !== 2 || !this.hasSelection) && e.button === 0) {
              if (!this._enabled) {
                if (!this.shouldForceSelection(e)) {
                  return;
                }
                e.stopPropagation();
              }
              e.preventDefault();
              this._dragScrollAmount = 0;
              if (this._enabled && e.shiftKey) {
                this._handleIncrementalClick(e);
              } else if (e.detail === 1) {
                this._handleSingleClick(e);
              } else if (e.detail === 2) {
                this._handleDoubleClick(e);
              } else if (e.detail === 3) {
                this._handleTripleClick(e);
              }
              this._addMouseDownListeners();
              this.refresh(true);
            }
          }
          _addMouseDownListeners() {
            if (this._screenElement.ownerDocument) {
              this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener);
              this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener);
            }
            this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(() => this._dragScroll(), 50);
          }
          _removeMouseDownListeners() {
            if (this._screenElement.ownerDocument) {
              this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener);
              this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener);
            }
            this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer);
            this._dragScrollIntervalTimer = undefined;
          }
          _handleIncrementalClick(e) {
            if (this._model.selectionStart) {
              this._model.selectionEnd = this._getMouseBufferCoords(e);
            }
          }
          _handleSingleClick(e) {
            this._model.selectionStartLength = 0;
            this._model.isSelectAllActive = false;
            this._activeSelectionMode = !!this.shouldColumnSelect(e) * 3;
            this._model.selectionStart = this._getMouseBufferCoords(e);
            if (!this._model.selectionStart) {
              return;
            }
            this._model.selectionEnd = undefined;
            let t = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
            if (t && t.length !== this._model.selectionStart[0] && t.hasWidth(this._model.selectionStart[0]) === 0) {
              this._model.selectionStart[0]++;
            }
          }
          _handleDoubleClick(e) {
            if (this._selectWordAtCursor(e, true)) {
              this._activeSelectionMode = 1;
            }
          }
          _handleTripleClick(e) {
            let t = this._getMouseBufferCoords(e);
            if (t) {
              this._activeSelectionMode = 2;
              this._selectLineAt(t[1]);
            }
          }
          shouldColumnSelect(e) {
            return e.altKey && (!d.isMac || !this._optionsService.rawOptions.macOptionClickForcesSelection);
          }
          _handleMouseMove(e) {
            e.stopImmediatePropagation();
            if (!this._model.selectionStart) {
              return;
            }
            let t = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
            this._model.selectionEnd = this._getMouseBufferCoords(e);
            if (!this._model.selectionEnd) {
              this.refresh(true);
              return;
            }
            if (this._activeSelectionMode === 2) {
              if (this._model.selectionEnd[1] < this._model.selectionStart[1]) {
                this._model.selectionEnd[0] = 0;
              } else {
                this._model.selectionEnd[0] = this._bufferService.cols;
              }
            } else if (this._activeSelectionMode === 1) {
              this._selectToWordAt(this._model.selectionEnd);
            }
            this._dragScrollAmount = this._getMouseEventScrollAmount(e);
            if (this._activeSelectionMode !== 3) {
              if (this._dragScrollAmount > 0) {
                this._model.selectionEnd[0] = this._bufferService.cols;
              } else if (this._dragScrollAmount < 0) {
                this._model.selectionEnd[0] = 0;
              }
            }
            let i = this._bufferService.buffer;
            if (this._model.selectionEnd[1] < i.lines.length) {
              let e = i.lines.get(this._model.selectionEnd[1]);
              if (e && e.hasWidth(this._model.selectionEnd[0]) === 0 && this._model.selectionEnd[0] < this._bufferService.cols) {
                this._model.selectionEnd[0]++;
              }
            }
            if (!t || t[0] !== this._model.selectionEnd[0] || t[1] !== this._model.selectionEnd[1]) {
              this.refresh(true);
            }
          }
          _dragScroll() {
            if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
              this._onRequestScrollLines.fire({
                amount: this._dragScrollAmount,
                suppressScrollEvent: false
              });
              let e = this._bufferService.buffer;
              if (this._dragScrollAmount > 0) {
                if (this._activeSelectionMode !== 3) {
                  this._model.selectionEnd[0] = this._bufferService.cols;
                }
                this._model.selectionEnd[1] = Math.min(e.ydisp + this._bufferService.rows, e.lines.length - 1);
              } else {
                if (this._activeSelectionMode !== 3) {
                  this._model.selectionEnd[0] = 0;
                }
                this._model.selectionEnd[1] = e.ydisp;
              }
              this.refresh();
            }
          }
          _handleMouseUp(e) {
            let t = e.timeStamp - this._mouseDownTimeStamp;
            this._removeMouseDownListeners();
            if (this.selectionText.length <= 1 && t < 500 && e.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
              if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                let t = this._mouseService.getCoords(e, this._element, this._bufferService.cols, this._bufferService.rows, false);
                if (t && t[0] !== undefined && t[1] !== undefined) {
                  let e = o.moveToCellSequence(t[0] - 1, t[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                  this._coreService.triggerDataEvent(e, true);
                }
              }
            } else {
              this._fireEventIfSelectionChanged();
            }
          }
          _fireEventIfSelectionChanged() {
            let e = this._model.finalSelectionStart;
            let t = this._model.finalSelectionEnd;
            let i = !!e && !!t && (e[0] !== t[0] || e[1] !== t[1]);
            if (i) {
              if (e && t) {
                if (!this._oldSelectionStart || !this._oldSelectionEnd || e[0] !== this._oldSelectionStart[0] || e[1] !== this._oldSelectionStart[1] || t[0] !== this._oldSelectionEnd[0] || t[1] !== this._oldSelectionEnd[1]) {
                  this._fireOnSelectionChange(e, t, i);
                }
              }
            } else if (this._oldHasSelection) {
              this._fireOnSelectionChange(e, t, i);
            }
          }
          _fireOnSelectionChange(e, t, i) {
            this._oldSelectionStart = e;
            this._oldSelectionEnd = t;
            this._oldHasSelection = i;
            this._onSelectionChange.fire();
          }
          _handleBufferActivate(e) {
            this.clearSelection();
            this._trimListener.dispose();
            this._trimListener = e.activeBuffer.lines.onTrim(e => this._handleTrim(e));
          }
          _convertViewportColToCharacterIndex(e, t) {
            let i = t;
            for (let r = 0; t >= r; r++) {
              let s = e.loadCell(r, this._workCell).getChars().length;
              if (this._workCell.getWidth() === 0) {
                i--;
              } else if (s > 1 && t !== r) {
                i += s - 1;
              }
            }
            return i;
          }
          setSelection(e, t, i) {
            this._model.clearSelection();
            this._removeMouseDownListeners();
            this._model.selectionStart = [e, t];
            this._model.selectionStartLength = i;
            this.refresh();
            this._fireEventIfSelectionChanged();
          }
          rightClickSelect(e) {
            if (!this._isClickInSelection(e)) {
              if (this._selectWordAtCursor(e, false)) {
                this.refresh(true);
              }
              this._fireEventIfSelectionChanged();
            }
          }
          _getWordAt(e, t) {
            let i = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
            let r = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
            if (e[0] >= this._bufferService.cols) {
              return;
            }
            let s = this._bufferService.buffer;
            let n = s.lines.get(e[1]);
            if (!n) {
              return;
            }
            let o = s.translateBufferLineToString(e[1], false);
            let a = this._convertViewportColToCharacterIndex(n, e[0]);
            let h = a;
            let l = e[0] - a;
            let c = 0;
            let d = 0;
            let _ = 0;
            let u = 0;
            if (o.charAt(a) === " ") {
              while (a > 0 && o.charAt(a - 1) === " ") {
                a--;
              }
              while (h < o.length && o.charAt(h + 1) === " ") {
                h++;
              }
            } else {
              let t = e[0];
              let i = e[0];
              if (n.getWidth(t) === 0) {
                c++;
                t--;
              }
              if (n.getWidth(i) === 2) {
                d++;
                i++;
              }
              let r = n.getString(i).length;
              for (r > 1 && (u += r - 1, h += r - 1); t > 0 && a > 0 && !this._isCharWordSeparator(n.loadCell(t - 1, this._workCell));) {
                n.loadCell(t - 1, this._workCell);
                let e = this._workCell.getChars().length;
                if (this._workCell.getWidth() === 0) {
                  c++;
                  t--;
                } else if (e > 1) {
                  _ += e - 1;
                  a -= e - 1;
                }
                a--;
                t--;
              }
              while (i < n.length && h + 1 < o.length && !this._isCharWordSeparator(n.loadCell(i + 1, this._workCell))) {
                n.loadCell(i + 1, this._workCell);
                let e = this._workCell.getChars().length;
                if (this._workCell.getWidth() === 2) {
                  d++;
                  i++;
                } else if (e > 1) {
                  u += e - 1;
                  h += e - 1;
                }
                h++;
                i++;
              }
            }
            h++;
            let f = a + l - c + _;
            let v = Math.min(this._bufferService.cols, h - a + c + d - _ - u);
            if (t || o.slice(a, h).trim() !== "") {
              if (i && f === 0 && n.getCodePoint(0) !== 32) {
                let t = s.lines.get(e[1] - 1);
                if (t && n.isWrapped && t.getCodePoint(this._bufferService.cols - 1) !== 32) {
                  let t = this._getWordAt([this._bufferService.cols - 1, e[1] - 1], false, true, false);
                  if (t) {
                    let e = this._bufferService.cols - t.start;
                    f -= e;
                    v += e;
                  }
                }
              }
              if (r && f + v === this._bufferService.cols && n.getCodePoint(this._bufferService.cols - 1) !== 32) {
                let t = s.lines.get(e[1] + 1);
                if ((t == null ? undefined : t.isWrapped) && t.getCodePoint(0) !== 32) {
                  let t = this._getWordAt([0, e[1] + 1], false, false, true);
                  if (t) {
                    v += t.length;
                  }
                }
              }
              return {
                start: f,
                length: v
              };
            }
          }
          _selectWordAt(e, t) {
            let i = this._getWordAt(e, t);
            if (i) {
              while (i.start < 0) {
                i.start += this._bufferService.cols;
                e[1]--;
              }
              this._model.selectionStart = [i.start, e[1]];
              this._model.selectionStartLength = i.length;
            }
          }
          _selectToWordAt(e) {
            let t = this._getWordAt(e, true);
            if (t) {
              let i = e[1];
              while (t.start < 0) {
                t.start += this._bufferService.cols;
                i--;
              }
              if (!this._model.areSelectionValuesReversed()) {
                while (t.start + t.length > this._bufferService.cols) {
                  t.length -= this._bufferService.cols;
                  i++;
                }
              }
              this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t.start : t.start + t.length, i];
            }
          }
          _isCharWordSeparator(e) {
            return e.getWidth() !== 0 && this._optionsService.rawOptions.wordSeparator.indexOf(e.getChars()) >= 0;
          }
          _selectLineAt(e) {
            let t = this._bufferService.buffer.getWrappedRangeForLine(e);
            let i = {
              start: {
                x: 0,
                y: t.first
              },
              end: {
                x: this._bufferService.cols - 1,
                y: t.last
              }
            };
            this._model.selectionStart = [0, t.first];
            this._model.selectionEnd = undefined;
            this._model.selectionStartLength = _.getRangeLength(i, this._bufferService.cols);
          }
          constructor(e, t, i, r, s, n, o, h, d) {
            super();
            this._element = e;
            this._screenElement = t;
            this._linkifier = i;
            this._bufferService = r;
            this._coreService = s;
            this._mouseService = n;
            this._optionsService = o;
            this._renderService = h;
            this._coreBrowserService = d;
            this._dragScrollAmount = 0;
            this._enabled = true;
            this._workCell = new u.CellData();
            this._mouseDownTimeStamp = 0;
            this._oldHasSelection = false;
            this._oldSelectionStart = undefined;
            this._oldSelectionEnd = undefined;
            this._onLinuxMouseSelection = this.register(new l.EventEmitter());
            this.onLinuxMouseSelection = this._onLinuxMouseSelection.event;
            this._onRedrawRequest = this.register(new l.EventEmitter());
            this.onRequestRedraw = this._onRedrawRequest.event;
            this._onSelectionChange = this.register(new l.EventEmitter());
            this.onSelectionChange = this._onSelectionChange.event;
            this._onRequestScrollLines = this.register(new l.EventEmitter());
            this.onRequestScrollLines = this._onRequestScrollLines.event;
            this._mouseMoveListener = e => this._handleMouseMove(e);
            this._mouseUpListener = e => this._handleMouseUp(e);
            this._coreService.onUserInput(() => {
              if (this.hasSelection) {
                this.clearSelection();
              }
            });
            this._trimListener = this._bufferService.buffer.lines.onTrim(e => this._handleTrim(e));
            this.register(this._bufferService.buffers.onBufferActivate(e => this._handleBufferActivate(e)));
            this.enable();
            this._model = new a.SelectionModel(this._bufferService);
            this._activeSelectionMode = 0;
            this.register(c.toDisposable(() => {
              this._removeMouseDownListeners();
            }));
          }
        };
        t.SelectionService = r([s(3, f.IBufferService), s(4, f.ICoreService), s(5, h.IMouseService), s(6, f.IOptionsService), s(7, h.IRenderService), s(8, h.ICoreBrowserService)], p);
      },
      4725: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.ILinkProviderService = t.IThemeService = t.ICharacterJoinerService = t.ISelectionService = t.IRenderService = t.IMouseService = t.ICoreBrowserService = t.ICharSizeService = undefined;
        let r = i(8343);
        t.ICharSizeService = r.createDecorator("CharSizeService");
        t.ICoreBrowserService = r.createDecorator("CoreBrowserService");
        t.IMouseService = r.createDecorator("MouseService");
        t.IRenderService = r.createDecorator("RenderService");
        t.ISelectionService = r.createDecorator("SelectionService");
        t.ICharacterJoinerService = r.createDecorator("CharacterJoinerService");
        t.IThemeService = r.createDecorator("ThemeService");
        t.ILinkProviderService = r.createDecorator("LinkProviderService");
      },
      6731: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.ThemeService = t.DEFAULT_ANSI_COLORS = undefined;
        let n = i(7239);
        let o = i(8055);
        let a = i(8460);
        let h = i(844);
        let l = i(2585);
        let c = o.css.toColor("#ffffff");
        let d = o.css.toColor("#000000");
        let _ = o.css.toColor("#ffffff");
        let u = o.css.toColor("#000000");
        let f = {
          css: "rgba(255, 255, 255, 0.3)",
          rgba: 4294967117
        };
        t.DEFAULT_ANSI_COLORS = Object.freeze((() => {
          let e = [o.css.toColor("#2e3436"), o.css.toColor("#cc0000"), o.css.toColor("#4e9a06"), o.css.toColor("#c4a000"), o.css.toColor("#3465a4"), o.css.toColor("#75507b"), o.css.toColor("#06989a"), o.css.toColor("#d3d7cf"), o.css.toColor("#555753"), o.css.toColor("#ef2929"), o.css.toColor("#8ae234"), o.css.toColor("#fce94f"), o.css.toColor("#729fcf"), o.css.toColor("#ad7fa8"), o.css.toColor("#34e2e2"), o.css.toColor("#eeeeec")];
          let t = [0, 95, 135, 175, 215, 255];
          for (let i = 0; i < 216; i++) {
            let r = t[i / 36 % 6 | 0];
            let s = t[i / 6 % 6 | 0];
            let n = t[i % 6];
            e.push({
              css: o.channels.toCss(r, s, n),
              rgba: o.channels.toRgba(r, s, n)
            });
          }
          for (let t = 0; t < 24; t++) {
            let i = 8 + t * 10;
            e.push({
              css: o.channels.toCss(i, i, i),
              rgba: o.channels.toRgba(i, i, i)
            });
          }
          return e;
        })());
        let v = t.ThemeService = class extends h.Disposable {
          get colors() {
            return this._colors;
          }
          _setTheme(e = {}) {
            let i = this._colors;
            i.foreground = p(e.foreground, c);
            i.background = p(e.background, d);
            i.cursor = p(e.cursor, _);
            i.cursorAccent = p(e.cursorAccent, u);
            i.selectionBackgroundTransparent = p(e.selectionBackground, f);
            i.selectionBackgroundOpaque = o.color.blend(i.background, i.selectionBackgroundTransparent);
            i.selectionInactiveBackgroundTransparent = p(e.selectionInactiveBackground, i.selectionBackgroundTransparent);
            i.selectionInactiveBackgroundOpaque = o.color.blend(i.background, i.selectionInactiveBackgroundTransparent);
            i.selectionForeground = e.selectionForeground ? p(e.selectionForeground, o.NULL_COLOR) : undefined;
            if (i.selectionForeground === o.NULL_COLOR) {
              i.selectionForeground = undefined;
            }
            if (o.color.isOpaque(i.selectionBackgroundTransparent)) {
              i.selectionBackgroundTransparent = o.color.opacity(i.selectionBackgroundTransparent, 0.3);
            }
            if (o.color.isOpaque(i.selectionInactiveBackgroundTransparent)) {
              i.selectionInactiveBackgroundTransparent = o.color.opacity(i.selectionInactiveBackgroundTransparent, 0.3);
            }
            i.ansi = t.DEFAULT_ANSI_COLORS.slice();
            i.ansi[0] = p(e.black, t.DEFAULT_ANSI_COLORS[0]);
            i.ansi[1] = p(e.red, t.DEFAULT_ANSI_COLORS[1]);
            i.ansi[2] = p(e.green, t.DEFAULT_ANSI_COLORS[2]);
            i.ansi[3] = p(e.yellow, t.DEFAULT_ANSI_COLORS[3]);
            i.ansi[4] = p(e.blue, t.DEFAULT_ANSI_COLORS[4]);
            i.ansi[5] = p(e.magenta, t.DEFAULT_ANSI_COLORS[5]);
            i.ansi[6] = p(e.cyan, t.DEFAULT_ANSI_COLORS[6]);
            i.ansi[7] = p(e.white, t.DEFAULT_ANSI_COLORS[7]);
            i.ansi[8] = p(e.brightBlack, t.DEFAULT_ANSI_COLORS[8]);
            i.ansi[9] = p(e.brightRed, t.DEFAULT_ANSI_COLORS[9]);
            i.ansi[10] = p(e.brightGreen, t.DEFAULT_ANSI_COLORS[10]);
            i.ansi[11] = p(e.brightYellow, t.DEFAULT_ANSI_COLORS[11]);
            i.ansi[12] = p(e.brightBlue, t.DEFAULT_ANSI_COLORS[12]);
            i.ansi[13] = p(e.brightMagenta, t.DEFAULT_ANSI_COLORS[13]);
            i.ansi[14] = p(e.brightCyan, t.DEFAULT_ANSI_COLORS[14]);
            i.ansi[15] = p(e.brightWhite, t.DEFAULT_ANSI_COLORS[15]);
            if (e.extendedAnsi) {
              let r = Math.min(i.ansi.length - 16, e.extendedAnsi.length);
              for (let s = 0; s < r; s++) {
                i.ansi[s + 16] = p(e.extendedAnsi[s], t.DEFAULT_ANSI_COLORS[s + 16]);
              }
            }
            this._contrastCache.clear();
            this._halfContrastCache.clear();
            this._updateRestoreColors();
            this._onChangeColors.fire(this.colors);
          }
          restoreColor(e) {
            this._restoreColor(e);
            this._onChangeColors.fire(this.colors);
          }
          _restoreColor(e) {
            if (e !== undefined) {
              switch (e) {
                case 256:
                  this._colors.foreground = this._restoreColors.foreground;
                  break;
                case 257:
                  this._colors.background = this._restoreColors.background;
                  break;
                case 258:
                  this._colors.cursor = this._restoreColors.cursor;
                  break;
                default:
                  this._colors.ansi[e] = this._restoreColors.ansi[e];
              }
            } else {
              for (let e = 0; e < this._restoreColors.ansi.length; ++e) {
                this._colors.ansi[e] = this._restoreColors.ansi[e];
              }
            }
          }
          modifyColors(e) {
            e(this._colors);
            this._onChangeColors.fire(this.colors);
          }
          _updateRestoreColors() {
            this._restoreColors = {
              foreground: this._colors.foreground,
              background: this._colors.background,
              cursor: this._colors.cursor,
              ansi: this._colors.ansi.slice()
            };
          }
          constructor(e) {
            super();
            this._optionsService = e;
            this._contrastCache = new n.ColorContrastCache();
            this._halfContrastCache = new n.ColorContrastCache();
            this._onChangeColors = this.register(new a.EventEmitter());
            this.onChangeColors = this._onChangeColors.event;
            this._colors = {
              foreground: c,
              background: d,
              cursor: _,
              cursorAccent: u,
              selectionForeground: undefined,
              selectionBackgroundTransparent: f,
              selectionBackgroundOpaque: o.color.blend(d, f),
              selectionInactiveBackgroundTransparent: f,
              selectionInactiveBackgroundOpaque: o.color.blend(d, f),
              ansi: t.DEFAULT_ANSI_COLORS.slice(),
              contrastCache: this._contrastCache,
              halfContrastCache: this._halfContrastCache
            };
            this._updateRestoreColors();
            this._setTheme(this._optionsService.rawOptions.theme);
            this.register(this._optionsService.onSpecificOptionChange("minimumContrastRatio", () => this._contrastCache.clear()));
            this.register(this._optionsService.onSpecificOptionChange("theme", () => this._setTheme(this._optionsService.rawOptions.theme)));
          }
        };
        function p(e, t) {
          if (e !== undefined) {
            try {
              return o.css.toColor(e);
            } catch {}
          }
          return t;
        }
        t.ThemeService = r([s(0, l.IOptionsService)], v);
      },
      6349: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.CircularList = undefined;
        let r = i(8460);
        let s = i(844);
        class n extends s.Disposable {
          get maxLength() {
            return this._maxLength;
          }
          set maxLength(e) {
            if (this._maxLength === e) {
              return;
            }
            let t = Array(e);
            for (let i = 0; i < Math.min(e, this.length); i++) {
              t[i] = this._array[this._getCyclicIndex(i)];
            }
            this._array = t;
            this._maxLength = e;
            this._startIndex = 0;
          }
          get length() {
            return this._length;
          }
          set length(e) {
            if (e > this._length) {
              for (let t = this._length; t < e; t++) {
                this._array[t] = undefined;
              }
            }
            this._length = e;
          }
          get(e) {
            return this._array[this._getCyclicIndex(e)];
          }
          set(e, t) {
            this._array[this._getCyclicIndex(e)] = t;
          }
          push(e) {
            this._array[this._getCyclicIndex(this._length)] = e;
            if (this._length === this._maxLength) {
              this._startIndex = ++this._startIndex % this._maxLength;
              this.onTrimEmitter.fire(1);
            } else {
              this._length++;
            }
          }
          recycle() {
            if (this._length !== this._maxLength) {
              throw Error("Can only recycle when the buffer is full");
            }
            this._startIndex = ++this._startIndex % this._maxLength;
            this.onTrimEmitter.fire(1);
            return this._array[this._getCyclicIndex(this._length - 1)];
          }
          get isFull() {
            return this._length === this._maxLength;
          }
          pop() {
            return this._array[this._getCyclicIndex(this._length-- - 1)];
          }
          splice(e, t) {
            var i = arguments.length;
            var r = Array(i > 2 ? i - 2 : 0);
            var s = 2;
            for (; s < i; s++) {
              r[s - 2] = arguments[s];
            }
            if (t) {
              for (let i = e; i < this._length - t; i++) {
                this._array[this._getCyclicIndex(i)] = this._array[this._getCyclicIndex(i + t)];
              }
              this._length -= t;
              this.onDeleteEmitter.fire({
                index: e,
                amount: t
              });
            }
            for (let t = this._length - 1; t >= e; t--) {
              this._array[this._getCyclicIndex(t + r.length)] = this._array[this._getCyclicIndex(t)];
            }
            for (let t = 0; t < r.length; t++) {
              this._array[this._getCyclicIndex(e + t)] = r[t];
            }
            if (r.length) {
              this.onInsertEmitter.fire({
                index: e,
                amount: r.length
              });
            }
            if (this._length + r.length > this._maxLength) {
              let e = this._length + r.length - this._maxLength;
              this._startIndex += e;
              this._length = this._maxLength;
              this.onTrimEmitter.fire(e);
            } else {
              this._length += r.length;
            }
          }
          trimStart(e) {
            if (e > this._length) {
              e = this._length;
            }
            this._startIndex += e;
            this._length -= e;
            this.onTrimEmitter.fire(e);
          }
          shiftElements(e, t, i) {
            if (!(t <= 0)) {
              if (e < 0 || e >= this._length) {
                throw Error("start argument out of range");
              }
              if (e + i < 0) {
                throw Error("Cannot shift elements in list beyond index 0");
              }
              if (i > 0) {
                for (let r = t - 1; r >= 0; r--) {
                  this.set(e + r + i, this.get(e + r));
                }
                let r = e + t + i - this._length;
                if (r > 0) {
                  for (this._length += r; this._length > this._maxLength;) {
                    this._length--;
                    this._startIndex++;
                    this.onTrimEmitter.fire(1);
                  }
                }
              } else {
                for (let r = 0; r < t; r++) {
                  this.set(e + r + i, this.get(e + r));
                }
              }
            }
          }
          _getCyclicIndex(e) {
            return (this._startIndex + e) % this._maxLength;
          }
          constructor(e) {
            super();
            this._maxLength = e;
            this.onDeleteEmitter = this.register(new r.EventEmitter());
            this.onDelete = this.onDeleteEmitter.event;
            this.onInsertEmitter = this.register(new r.EventEmitter());
            this.onInsert = this.onInsertEmitter.event;
            this.onTrimEmitter = this.register(new r.EventEmitter());
            this.onTrim = this.onTrimEmitter.event;
            this._array = Array(this._maxLength);
            this._startIndex = 0;
            this._length = 0;
          }
        }
        t.CircularList = n;
      },
      1439: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.clone = undefined;
        t.clone = function e(t, i = 5) {
          if (typeof t != "object") {
            return t;
          }
          let r = Array.isArray(t) ? [] : {};
          for (let s in t) {
            r[s] = i <= 1 ? t[s] : t[s] && e(t[s], i - 1);
          }
          return r;
        };
      },
      8055: (e, t) => {
        var i;
        var r;
        var s;
        var n;
        var o;
        var a;
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.contrastRatio = t.toPaddedHex = t.rgba = t.rgb = t.css = t.color = t.channels = t.NULL_COLOR = undefined;
        let h = 0;
        let l = 0;
        let c = 0;
        let d = 0;
        function _(e) {
          let t = e.toString(16);
          if (t.length < 2) {
            return "0" + t;
          } else {
            return t;
          }
        }
        function u(e, t) {
          if (e < t) {
            return (t + 0.05) / (e + 0.05);
          } else {
            return (e + 0.05) / (t + 0.05);
          }
        }
        t.NULL_COLOR = {
          css: "#00000000",
          rgba: 0
        };
        (a = i || (t.channels = i = {})).toCss = function (e, t, i, r) {
          if (r !== undefined) {
            return `#${_(e)}${_(t)}${_(i)}${_(r)}`;
          } else {
            return `#${_(e)}${_(t)}${_(i)}`;
          }
        };
        a.toRgba = function (e, t, i, r = 255) {
          return (e << 24 | t << 16 | i << 8 | r) >>> 0;
        };
        a.toColor = function (e, t, i, r) {
          return {
            css: a.toCss(e, t, i, r),
            rgba: a.toRgba(e, t, i, r)
          };
        };
        (function (e) {
          function t(e, t) {
            d = Math.round(t * 255);
            [h, l, c] = o.toChannels(e.rgba);
            return {
              css: i.toCss(h, l, c, d),
              rgba: i.toRgba(h, l, c, d)
            };
          }
          e.blend = function (e, t) {
            if ((d = (t.rgba & 255) / 255) == 1) {
              return {
                css: t.css,
                rgba: t.rgba
              };
            }
            let r = t.rgba >> 24 & 255;
            let s = t.rgba >> 16 & 255;
            let n = t.rgba >> 8 & 255;
            let o = e.rgba >> 24 & 255;
            let a = e.rgba >> 16 & 255;
            let _ = e.rgba >> 8 & 255;
            h = o + Math.round((r - o) * d);
            l = a + Math.round((s - a) * d);
            c = _ + Math.round((n - _) * d);
            return {
              css: i.toCss(h, l, c),
              rgba: i.toRgba(h, l, c)
            };
          };
          e.isOpaque = function (e) {
            return (e.rgba & 255) == 255;
          };
          e.ensureContrastRatio = function (e, t, r) {
            let s = o.ensureContrastRatio(e.rgba, t.rgba, r);
            if (s) {
              return i.toColor(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255);
            }
          };
          e.opaque = function (e) {
            let t = (e.rgba | 255) >>> 0;
            [h, l, c] = o.toChannels(t);
            return {
              css: i.toCss(h, l, c),
              rgba: t
            };
          };
          e.opacity = t;
          e.multiplyOpacity = function (e, i) {
            d = e.rgba & 255;
            return t(e, d * i / 255);
          };
          e.toColorRGB = function (e) {
            return [e.rgba >> 24 & 255, e.rgba >> 16 & 255, e.rgba >> 8 & 255];
          };
        })(r || (t.color = r = {}));
        (function (e) {
          let t;
          let r;
          try {
            let e = document.createElement("canvas");
            e.width = 1;
            e.height = 1;
            let i = e.getContext("2d", {
              willReadFrequently: true
            });
            if (i) {
              (t = i).globalCompositeOperation = "copy";
              r = t.createLinearGradient(0, 0, 1, 1);
            }
          } catch {}
          e.toColor = function (e) {
            if (e.match(/#[\da-f]{3,8}/i)) {
              switch (e.length) {
                case 4:
                  h = parseInt(e.slice(1, 2).repeat(2), 16);
                  l = parseInt(e.slice(2, 3).repeat(2), 16);
                  c = parseInt(e.slice(3, 4).repeat(2), 16);
                  return i.toColor(h, l, c);
                case 5:
                  h = parseInt(e.slice(1, 2).repeat(2), 16);
                  l = parseInt(e.slice(2, 3).repeat(2), 16);
                  c = parseInt(e.slice(3, 4).repeat(2), 16);
                  d = parseInt(e.slice(4, 5).repeat(2), 16);
                  return i.toColor(h, l, c, d);
                case 7:
                  return {
                    css: e,
                    rgba: (parseInt(e.slice(1), 16) << 8 | 255) >>> 0
                  };
                case 9:
                  return {
                    css: e,
                    rgba: parseInt(e.slice(1), 16) >>> 0
                  };
              }
            }
            let s = e.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
            if (s) {
              h = parseInt(s[1]);
              l = parseInt(s[2]);
              c = parseInt(s[3]);
              d = Math.round((s[5] === undefined ? 1 : parseFloat(s[5])) * 255);
              return i.toColor(h, l, c, d);
            }
            if (!t || !r || (t.fillStyle = r, t.fillStyle = e, typeof t.fillStyle != "string") || (t.fillRect(0, 0, 1, 1), [h, l, c, d] = t.getImageData(0, 0, 1, 1).data, d !== 255)) {
              throw Error("css.toColor: Unsupported css format");
            }
            return {
              rgba: i.toRgba(h, l, c, d),
              css: e
            };
          };
        })(s || (t.css = s = {}));
        (function (e) {
          function t(e, t, i) {
            let r = e / 255;
            let s = t / 255;
            let n = i / 255;
            return (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)) * 0.2126 + (s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)) * 0.7152 + (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)) * 0.0722;
          }
          e.relativeLuminance = function (e) {
            return t(e >> 16 & 255, e >> 8 & 255, e & 255);
          };
          e.relativeLuminance2 = t;
        })(n || (t.rgb = n = {}));
        (function (e) {
          function t(e, t, i) {
            let r = e >> 24 & 255;
            let s = e >> 16 & 255;
            let o = e >> 8 & 255;
            let a = t >> 24 & 255;
            let h = t >> 16 & 255;
            let l = t >> 8 & 255;
            let c = u(n.relativeLuminance2(a, h, l), n.relativeLuminance2(r, s, o));
            while (c < i && (a > 0 || h > 0 || l > 0)) {
              a -= Math.max(0, Math.ceil(a * 0.1));
              h -= Math.max(0, Math.ceil(h * 0.1));
              l -= Math.max(0, Math.ceil(l * 0.1));
              c = u(n.relativeLuminance2(a, h, l), n.relativeLuminance2(r, s, o));
            }
            return (a << 24 | h << 16 | l << 8 | 255) >>> 0;
          }
          function r(e, t, i) {
            let r = e >> 24 & 255;
            let s = e >> 16 & 255;
            let o = e >> 8 & 255;
            let a = t >> 24 & 255;
            let h = t >> 16 & 255;
            let l = t >> 8 & 255;
            let c = u(n.relativeLuminance2(a, h, l), n.relativeLuminance2(r, s, o));
            while (c < i && (a < 255 || h < 255 || l < 255)) {
              a = Math.min(255, a + Math.ceil((255 - a) * 0.1));
              h = Math.min(255, h + Math.ceil((255 - h) * 0.1));
              l = Math.min(255, l + Math.ceil((255 - l) * 0.1));
              c = u(n.relativeLuminance2(a, h, l), n.relativeLuminance2(r, s, o));
            }
            return (a << 24 | h << 16 | l << 8 | 255) >>> 0;
          }
          e.blend = function (e, t) {
            if ((d = (t & 255) / 255) == 1) {
              return t;
            }
            let r = e >> 24 & 255;
            let s = e >> 16 & 255;
            let n = e >> 8 & 255;
            h = r + Math.round(((t >> 24 & 255) - r) * d);
            l = s + Math.round(((t >> 16 & 255) - s) * d);
            c = n + Math.round(((t >> 8 & 255) - n) * d);
            return i.toRgba(h, l, c);
          };
          e.ensureContrastRatio = function (e, i, s) {
            let o = n.relativeLuminance(e >> 8);
            let a = n.relativeLuminance(i >> 8);
            if (u(o, a) < s) {
              if (a < o) {
                let a = t(e, i, s);
                let h = u(o, n.relativeLuminance(a >> 8));
                if (h < s) {
                  let t = r(e, i, s);
                  if (h > u(o, n.relativeLuminance(t >> 8))) {
                    return a;
                  } else {
                    return t;
                  }
                }
                return a;
              }
              let h = r(e, i, s);
              let l = u(o, n.relativeLuminance(h >> 8));
              if (l < s) {
                let r = t(e, i, s);
                if (l > u(o, n.relativeLuminance(r >> 8))) {
                  return h;
                } else {
                  return r;
                }
              }
              return h;
            }
          };
          e.reduceLuminance = t;
          e.increaseLuminance = r;
          e.toChannels = function (e) {
            return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
          };
        })(o || (t.rgba = o = {}));
        t.toPaddedHex = _;
        t.contrastRatio = u;
      },
      8969: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.CoreTerminal = undefined;
        let r = i(844);
        let s = i(2585);
        let n = i(4348);
        let o = i(7866);
        let a = i(744);
        let h = i(7302);
        let l = i(6975);
        let c = i(8460);
        let d = i(1753);
        let _ = i(1480);
        let u = i(7994);
        let f = i(9282);
        let v = i(5435);
        let p = i(5981);
        let g = i(2660);
        let m = false;
        class S extends r.Disposable {
          get onScroll() {
            if (!this._onScrollApi) {
              this._onScrollApi = this.register(new c.EventEmitter());
              this._onScroll.event(e => {
                var t;
                if ((t = this._onScrollApi) !== null && t !== undefined) {
                  t.fire(e.position);
                }
              });
            }
            return this._onScrollApi.event;
          }
          get cols() {
            return this._bufferService.cols;
          }
          get rows() {
            return this._bufferService.rows;
          }
          get buffers() {
            return this._bufferService.buffers;
          }
          get options() {
            return this.optionsService.options;
          }
          set options(e) {
            for (let t in e) {
              this.optionsService.options[t] = e[t];
            }
          }
          write(e, t) {
            this._writeBuffer.write(e, t);
          }
          writeSync(e, t) {
            if (this._logService.logLevel <= s.LogLevelEnum.WARN && !m) {
              this._logService.warn("writeSync is unreliable and will be removed soon.");
              m = true;
            }
            this._writeBuffer.writeSync(e, t);
          }
          input(e) {
            let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
            this.coreService.triggerDataEvent(e, t);
          }
          resize(e, t) {
            if (!isNaN(e) && !isNaN(t)) {
              e = Math.max(e, a.MINIMUM_COLS);
              t = Math.max(t, a.MINIMUM_ROWS);
              this._bufferService.resize(e, t);
            }
          }
          scroll(e, t = false) {
            this._bufferService.scroll(e, t);
          }
          scrollLines(e, t, i) {
            this._bufferService.scrollLines(e, t, i);
          }
          scrollPages(e) {
            this.scrollLines(e * (this.rows - 1));
          }
          scrollToTop() {
            this.scrollLines(-this._bufferService.buffer.ydisp);
          }
          scrollToBottom() {
            this.scrollLines(this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
          }
          scrollToLine(e) {
            let t = e - this._bufferService.buffer.ydisp;
            if (t !== 0) {
              this.scrollLines(t);
            }
          }
          registerEscHandler(e, t) {
            return this._inputHandler.registerEscHandler(e, t);
          }
          registerDcsHandler(e, t) {
            return this._inputHandler.registerDcsHandler(e, t);
          }
          registerCsiHandler(e, t) {
            return this._inputHandler.registerCsiHandler(e, t);
          }
          registerOscHandler(e, t) {
            return this._inputHandler.registerOscHandler(e, t);
          }
          _setup() {
            this._handleWindowsPtyOptionChange();
          }
          reset() {
            this._inputHandler.reset();
            this._bufferService.reset();
            this._charsetService.reset();
            this.coreService.reset();
            this.coreMouseService.reset();
          }
          _handleWindowsPtyOptionChange() {
            let e = false;
            let t = this.optionsService.rawOptions.windowsPty;
            if (t && t.buildNumber !== undefined && t.buildNumber !== undefined) {
              e = t.backend === "conpty" && !!(t.buildNumber < 21376);
            } else if (this.optionsService.rawOptions.windowsMode) {
              e = true;
            }
            if (e) {
              this._enableWindowsWrappingHeuristics();
            } else {
              this._windowsWrappingHeuristics.clear();
            }
          }
          _enableWindowsWrappingHeuristics() {
            if (!this._windowsWrappingHeuristics.value) {
              let e = [];
              e.push(this.onLineFeed(f.updateWindowsModeWrappedState.bind(null, this._bufferService)));
              e.push(this.registerCsiHandler({
                final: "H"
              }, () => {
                f.updateWindowsModeWrappedState(this._bufferService);
                return false;
              }));
              this._windowsWrappingHeuristics.value = r.toDisposable(() => {
                for (let t of e) {
                  t.dispose();
                }
              });
            }
          }
          constructor(e) {
            super();
            this._windowsWrappingHeuristics = this.register(new r.MutableDisposable());
            this._onBinary = this.register(new c.EventEmitter());
            this.onBinary = this._onBinary.event;
            this._onData = this.register(new c.EventEmitter());
            this.onData = this._onData.event;
            this._onLineFeed = this.register(new c.EventEmitter());
            this.onLineFeed = this._onLineFeed.event;
            this._onResize = this.register(new c.EventEmitter());
            this.onResize = this._onResize.event;
            this._onWriteParsed = this.register(new c.EventEmitter());
            this.onWriteParsed = this._onWriteParsed.event;
            this._onScroll = this.register(new c.EventEmitter());
            this._instantiationService = new n.InstantiationService();
            this.optionsService = this.register(new h.OptionsService(e));
            this._instantiationService.setService(s.IOptionsService, this.optionsService);
            this._bufferService = this.register(this._instantiationService.createInstance(a.BufferService));
            this._instantiationService.setService(s.IBufferService, this._bufferService);
            this._logService = this.register(this._instantiationService.createInstance(o.LogService));
            this._instantiationService.setService(s.ILogService, this._logService);
            this.coreService = this.register(this._instantiationService.createInstance(l.CoreService));
            this._instantiationService.setService(s.ICoreService, this.coreService);
            this.coreMouseService = this.register(this._instantiationService.createInstance(d.CoreMouseService));
            this._instantiationService.setService(s.ICoreMouseService, this.coreMouseService);
            this.unicodeService = this.register(this._instantiationService.createInstance(_.UnicodeService));
            this._instantiationService.setService(s.IUnicodeService, this.unicodeService);
            this._charsetService = this._instantiationService.createInstance(u.CharsetService);
            this._instantiationService.setService(s.ICharsetService, this._charsetService);
            this._oscLinkService = this._instantiationService.createInstance(g.OscLinkService);
            this._instantiationService.setService(s.IOscLinkService, this._oscLinkService);
            this._inputHandler = this.register(new v.InputHandler(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService));
            this.register(c.forwardEvent(this._inputHandler.onLineFeed, this._onLineFeed));
            this.register(this._inputHandler);
            this.register(c.forwardEvent(this._bufferService.onResize, this._onResize));
            this.register(c.forwardEvent(this.coreService.onData, this._onData));
            this.register(c.forwardEvent(this.coreService.onBinary, this._onBinary));
            this.register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom()));
            this.register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput()));
            this.register(this.optionsService.onMultipleOptionChange(["windowsMode", "windowsPty"], () => this._handleWindowsPtyOptionChange()));
            this.register(this._bufferService.onScroll(e => {
              this._onScroll.fire({
                position: this._bufferService.buffer.ydisp,
                source: 0
              });
              this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
            }));
            this.register(this._inputHandler.onScroll(e => {
              this._onScroll.fire({
                position: this._bufferService.buffer.ydisp,
                source: 0
              });
              this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
            }));
            this._writeBuffer = this.register(new p.WriteBuffer((e, t) => this._inputHandler.parse(e, t)));
            this.register(c.forwardEvent(this._writeBuffer.onWriteParsed, this._onWriteParsed));
          }
        }
        t.CoreTerminal = S;
      },
      8460: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.runAndSubscribe = t.forwardEvent = t.EventEmitter = undefined;
        t.EventEmitter = class {
          get event() {
            this._event ||= e => {
              this._listeners.push(e);
              return {
                dispose: () => {
                  if (!this._disposed) {
                    for (let t = 0; t < this._listeners.length; t++) {
                      if (this._listeners[t] === e) {
                        this._listeners.splice(t, 1);
                        return;
                      }
                    }
                  }
                }
              };
            };
            return this._event;
          }
          fire(e, t) {
            let i = [];
            for (let e = 0; e < this._listeners.length; e++) {
              i.push(this._listeners[e]);
            }
            for (let r = 0; r < i.length; r++) {
              i[r].call(undefined, e, t);
            }
          }
          dispose() {
            this.clearListeners();
            this._disposed = true;
          }
          clearListeners() {
            if (this._listeners) {
              this._listeners.length = 0;
            }
          }
          constructor() {
            this._listeners = [];
            this._disposed = false;
          }
        };
        t.forwardEvent = function (e, t) {
          return e(e => t.fire(e));
        };
        t.runAndSubscribe = function (e, t) {
          t(undefined);
          return e(e => t(e));
        };
      },
      5435: function (e, t, i) {
        var r;
        var s;
        var n = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var o = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.InputHandler = t.WindowsOptionsReportType = undefined;
        let a = i(2584);
        let h = i(7116);
        let l = i(2015);
        let c = i(844);
        let d = i(482);
        let _ = i(8437);
        let u = i(8460);
        let f = i(643);
        let v = i(511);
        let p = i(3734);
        let g = i(2585);
        let m = i(1480);
        let S = i(6242);
        let C = i(6351);
        let b = i(5941);
        let w = {
          "(": 0,
          ")": 1,
          "*": 2,
          "+": 3,
          "-": 1,
          ".": 2
        };
        function y(e, t) {
          if (e > 24) {
            return t.setWinLines || false;
          }
          switch (e) {
            case 1:
              return !!t.restoreWin;
            case 2:
              return !!t.minimizeWin;
            case 3:
              return !!t.setWinPosition;
            case 4:
              return !!t.setWinSizePixels;
            case 5:
              return !!t.raiseWin;
            case 6:
              return !!t.lowerWin;
            case 7:
              return !!t.refreshWin;
            case 8:
              return !!t.setWinSizeChars;
            case 9:
              return !!t.maximizeWin;
            case 10:
              return !!t.fullscreenWin;
            case 11:
              return !!t.getWinState;
            case 13:
              return !!t.getWinPosition;
            case 14:
              return !!t.getWinSizePixels;
            case 15:
              return !!t.getScreenSizePixels;
            case 16:
              return !!t.getCellSizePixels;
            case 18:
              return !!t.getWinSizeChars;
            case 19:
              return !!t.getScreenSizeChars;
            case 20:
              return !!t.getIconTitle;
            case 21:
              return !!t.getWinTitle;
            case 22:
              return !!t.pushTitle;
            case 23:
              return !!t.popTitle;
            case 24:
              return !!t.setWinLines;
          }
          return false;
        }
        (r = s || (t.WindowsOptionsReportType = s = {}))[r.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS";
        r[r.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
        let E = 0;
        class x extends c.Disposable {
          getAttrData() {
            return this._curAttrData;
          }
          _preserveStack(e, t, i, r) {
            this._parseStack.paused = true;
            this._parseStack.cursorStartX = e;
            this._parseStack.cursorStartY = t;
            this._parseStack.decodedLength = i;
            this._parseStack.position = r;
          }
          _logSlowResolvingAsync(e) {
            if (this._logService.logLevel <= g.LogLevelEnum.WARN) {
              Promise.race([e, new Promise((e, t) => setTimeout(() => t("#SLOW_TIMEOUT"), 5000))]).catch(e => {
                if (e !== "#SLOW_TIMEOUT") {
                  throw e;
                }
              });
            }
          }
          _getCurrentLinkId() {
            return this._curAttrData.extended.urlId;
          }
          parse(e, t) {
            let i;
            let r = this._activeBuffer.x;
            let s = this._activeBuffer.y;
            let n = 0;
            let o = this._parseStack.paused;
            if (o) {
              if (i = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t)) {
                this._logSlowResolvingAsync(i);
                return i;
              }
              r = this._parseStack.cursorStartX;
              s = this._parseStack.cursorStartY;
              this._parseStack.paused = false;
              if (e.length > 131072) {
                n = this._parseStack.position + 131072;
              }
            }
            if (this._logService.logLevel <= g.LogLevelEnum.DEBUG) {
              this._logService.debug("parsing data" + (typeof e == "string" ? ` "${e}"` : ` "${Array.prototype.map.call(e, e => String.fromCharCode(e)).join("")}"`), typeof e == "string" ? e.split("").map(e => e.charCodeAt(0)) : e);
            }
            if (this._parseBuffer.length < e.length && this._parseBuffer.length < 131072) {
              this._parseBuffer = new Uint32Array(Math.min(e.length, 131072));
            }
            if (!o) {
              this._dirtyRowTracker.clearRange();
            }
            if (e.length > 131072) {
              for (let t = n; t < e.length; t += 131072) {
                let n = t + 131072 < e.length ? t + 131072 : e.length;
                let o = typeof e == "string" ? this._stringDecoder.decode(e.substring(t, n), this._parseBuffer) : this._utf8Decoder.decode(e.subarray(t, n), this._parseBuffer);
                if (i = this._parser.parse(this._parseBuffer, o)) {
                  this._preserveStack(r, s, o, t);
                  this._logSlowResolvingAsync(i);
                  return i;
                }
              }
            } else if (!o) {
              let t = typeof e == "string" ? this._stringDecoder.decode(e, this._parseBuffer) : this._utf8Decoder.decode(e, this._parseBuffer);
              if (i = this._parser.parse(this._parseBuffer, t)) {
                this._preserveStack(r, s, t, 0);
                this._logSlowResolvingAsync(i);
                return i;
              }
            }
            if (this._activeBuffer.x !== r || this._activeBuffer.y !== s) {
              this._onCursorMove.fire();
            }
            let a = this._dirtyRowTracker.end + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
            let h = this._dirtyRowTracker.start + (this._bufferService.buffer.ybase - this._bufferService.buffer.ydisp);
            if (h < this._bufferService.rows) {
              this._onRequestRefreshRows.fire(Math.min(h, this._bufferService.rows - 1), Math.min(a, this._bufferService.rows - 1));
            }
          }
          print(e, t, i) {
            let r;
            let s;
            let n = this._charsetService.charset;
            let o = this._optionsService.rawOptions.screenReaderMode;
            let a = this._bufferService.cols;
            let h = this._coreService.decPrivateModes.wraparound;
            let l = this._coreService.modes.insertMode;
            let c = this._curAttrData;
            let u = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            if (this._activeBuffer.x && i - t > 0 && u.getWidth(this._activeBuffer.x - 1) === 2) {
              u.setCellFromCodepoint(this._activeBuffer.x - 1, 0, 1, c);
            }
            let v = this._parser.precedingJoinState;
            for (let p = t; p < i; ++p) {
              if ((r = e[p]) < 127 && n) {
                let e = n[String.fromCharCode(r)];
                if (e) {
                  r = e.charCodeAt(0);
                }
              }
              let t = this._unicodeService.charProperties(r, v);
              s = m.UnicodeService.extractWidth(t);
              let i = m.UnicodeService.extractShouldJoin(t);
              let g = i ? m.UnicodeService.extractWidth(v) : 0;
              v = t;
              if (o) {
                this._onA11yChar.fire(d.stringFromCodePoint(r));
              }
              if (this._getCurrentLinkId()) {
                this._oscLinkService.addLineToLink(this._getCurrentLinkId(), this._activeBuffer.ybase + this._activeBuffer.y);
              }
              if (this._activeBuffer.x + s - g > a) {
                if (h) {
                  let e = u;
                  let t = this._activeBuffer.x - g;
                  this._activeBuffer.x = g;
                  this._activeBuffer.y++;
                  if (this._activeBuffer.y === this._activeBuffer.scrollBottom + 1) {
                    this._activeBuffer.y--;
                    this._bufferService.scroll(this._eraseAttrData(), true);
                  } else {
                    if (this._activeBuffer.y >= this._bufferService.rows) {
                      this._activeBuffer.y = this._bufferService.rows - 1;
                    }
                    this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = true;
                  }
                  u = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                  if (g > 0 && u instanceof _.BufferLine) {
                    u.copyCellsFrom(e, t, 0, g, false);
                  }
                  while (t < a) {
                    e.setCellFromCodepoint(t++, 0, 1, c);
                  }
                } else {
                  this._activeBuffer.x = a - 1;
                  if (s === 2) {
                    continue;
                  }
                }
              }
              if (i && this._activeBuffer.x) {
                let e = u.getWidth(this._activeBuffer.x - 1) ? 1 : 2;
                u.addCodepointToCell(this._activeBuffer.x - e, r, s);
                for (let e = s - g; --e >= 0;) {
                  u.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, c);
                }
              } else {
                if (l) {
                  u.insertCells(this._activeBuffer.x, s - g, this._activeBuffer.getNullCell(c));
                  if (u.getWidth(a - 1) === 2) {
                    u.setCellFromCodepoint(a - 1, f.NULL_CELL_CODE, f.NULL_CELL_WIDTH, c);
                  }
                }
                u.setCellFromCodepoint(this._activeBuffer.x++, r, s, c);
                if (s > 0) {
                  while (--s) {
                    u.setCellFromCodepoint(this._activeBuffer.x++, 0, 0, c);
                  }
                }
              }
            }
            this._parser.precedingJoinState = v;
            if (this._activeBuffer.x < a && i - t > 0 && u.getWidth(this._activeBuffer.x) === 0 && !u.hasContent(this._activeBuffer.x)) {
              u.setCellFromCodepoint(this._activeBuffer.x, 0, 1, c);
            }
            this._dirtyRowTracker.markDirty(this._activeBuffer.y);
          }
          registerCsiHandler(e, t) {
            if (e.final !== "t" || e.prefix || e.intermediates) {
              return this._parser.registerCsiHandler(e, t);
            } else {
              return this._parser.registerCsiHandler(e, e => !y(e.params[0], this._optionsService.rawOptions.windowOptions) || t(e));
            }
          }
          registerDcsHandler(e, t) {
            return this._parser.registerDcsHandler(e, new C.DcsHandler(t));
          }
          registerEscHandler(e, t) {
            return this._parser.registerEscHandler(e, t);
          }
          registerOscHandler(e, t) {
            return this._parser.registerOscHandler(e, new S.OscHandler(t));
          }
          bell() {
            this._onRequestBell.fire();
            return true;
          }
          lineFeed() {
            this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            if (this._optionsService.rawOptions.convertEol) {
              this._activeBuffer.x = 0;
            }
            this._activeBuffer.y++;
            if (this._activeBuffer.y === this._activeBuffer.scrollBottom + 1) {
              this._activeBuffer.y--;
              this._bufferService.scroll(this._eraseAttrData());
            } else if (this._activeBuffer.y >= this._bufferService.rows) {
              this._activeBuffer.y = this._bufferService.rows - 1;
            } else {
              this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false;
            }
            if (this._activeBuffer.x >= this._bufferService.cols) {
              this._activeBuffer.x--;
            }
            this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            this._onLineFeed.fire();
            return true;
          }
          carriageReturn() {
            this._activeBuffer.x = 0;
            return true;
          }
          backspace() {
            if (!this._coreService.decPrivateModes.reverseWraparound) {
              this._restrictCursor();
              if (this._activeBuffer.x > 0) {
                this._activeBuffer.x--;
              }
              return true;
            }
            this._restrictCursor(this._bufferService.cols);
            if (this._activeBuffer.x > 0) {
              this._activeBuffer.x--;
            } else if (this._activeBuffer.x === 0 && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)?.isWrapped) {
              this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false;
              this._activeBuffer.y--;
              this._activeBuffer.x = this._bufferService.cols - 1;
              let e = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
              if (e.hasWidth(this._activeBuffer.x) && !e.hasContent(this._activeBuffer.x)) {
                this._activeBuffer.x--;
              }
            }
            this._restrictCursor();
            return true;
          }
          tab() {
            if (this._activeBuffer.x >= this._bufferService.cols) {
              return true;
            }
            let e = this._activeBuffer.x;
            this._activeBuffer.x = this._activeBuffer.nextStop();
            if (this._optionsService.rawOptions.screenReaderMode) {
              this._onA11yTab.fire(this._activeBuffer.x - e);
            }
            return true;
          }
          shiftOut() {
            this._charsetService.setgLevel(1);
            return true;
          }
          shiftIn() {
            this._charsetService.setgLevel(0);
            return true;
          }
          _restrictCursor(e = this._bufferService.cols - 1) {
            this._activeBuffer.x = Math.min(e, Math.max(0, this._activeBuffer.x));
            this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y));
            this._dirtyRowTracker.markDirty(this._activeBuffer.y);
          }
          _setCursor(e, t) {
            this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            if (this._coreService.decPrivateModes.origin) {
              this._activeBuffer.x = e;
              this._activeBuffer.y = this._activeBuffer.scrollTop + t;
            } else {
              this._activeBuffer.x = e;
              this._activeBuffer.y = t;
            }
            this._restrictCursor();
            this._dirtyRowTracker.markDirty(this._activeBuffer.y);
          }
          _moveCursor(e, t) {
            this._restrictCursor();
            this._setCursor(this._activeBuffer.x + e, this._activeBuffer.y + t);
          }
          cursorUp(e) {
            let t = this._activeBuffer.y - this._activeBuffer.scrollTop;
            if (t >= 0) {
              this._moveCursor(0, -Math.min(t, e.params[0] || 1));
            } else {
              this._moveCursor(0, -(e.params[0] || 1));
            }
            return true;
          }
          cursorDown(e) {
            let t = this._activeBuffer.scrollBottom - this._activeBuffer.y;
            if (t >= 0) {
              this._moveCursor(0, Math.min(t, e.params[0] || 1));
            } else {
              this._moveCursor(0, e.params[0] || 1);
            }
            return true;
          }
          cursorForward(e) {
            this._moveCursor(e.params[0] || 1, 0);
            return true;
          }
          cursorBackward(e) {
            this._moveCursor(-(e.params[0] || 1), 0);
            return true;
          }
          cursorNextLine(e) {
            this.cursorDown(e);
            this._activeBuffer.x = 0;
            return true;
          }
          cursorPrecedingLine(e) {
            this.cursorUp(e);
            this._activeBuffer.x = 0;
            return true;
          }
          cursorCharAbsolute(e) {
            this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y);
            return true;
          }
          cursorPosition(e) {
            this._setCursor(e.length >= 2 ? (e.params[1] || 1) - 1 : 0, (e.params[0] || 1) - 1);
            return true;
          }
          charPosAbsolute(e) {
            this._setCursor((e.params[0] || 1) - 1, this._activeBuffer.y);
            return true;
          }
          hPositionRelative(e) {
            this._moveCursor(e.params[0] || 1, 0);
            return true;
          }
          linePosAbsolute(e) {
            this._setCursor(this._activeBuffer.x, (e.params[0] || 1) - 1);
            return true;
          }
          vPositionRelative(e) {
            this._moveCursor(0, e.params[0] || 1);
            return true;
          }
          hVPosition(e) {
            this.cursorPosition(e);
            return true;
          }
          tabClear(e) {
            let t = e.params[0];
            if (t === 0) {
              delete this._activeBuffer.tabs[this._activeBuffer.x];
            } else if (t === 3) {
              this._activeBuffer.tabs = {};
            }
            return true;
          }
          cursorForwardTab(e) {
            if (this._activeBuffer.x >= this._bufferService.cols) {
              return true;
            }
            let t = e.params[0] || 1;
            while (t--) {
              this._activeBuffer.x = this._activeBuffer.nextStop();
            }
            return true;
          }
          cursorBackwardTab(e) {
            if (this._activeBuffer.x >= this._bufferService.cols) {
              return true;
            }
            let t = e.params[0] || 1;
            while (t--) {
              this._activeBuffer.x = this._activeBuffer.prevStop();
            }
            return true;
          }
          selectProtected(e) {
            let t = e.params[0];
            if (t === 1) {
              this._curAttrData.bg |= 536870912;
            }
            if (t === 2 || t === 0) {
              this._curAttrData.bg &= -536870913;
            }
            return true;
          }
          _eraseInBufferLine(e, t, i, r = false, s = false) {
            let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
            n.replaceCells(t, i, this._activeBuffer.getNullCell(this._eraseAttrData()), s);
            if (r) {
              n.isWrapped = false;
            }
          }
          _resetBufferLine(e, t = false) {
            let i = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
            if (i) {
              i.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), t);
              this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e);
              i.isWrapped = false;
            }
          }
          eraseInDisplay(e) {
            let t;
            let i = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
            this._restrictCursor(this._bufferService.cols);
            switch (e.params[0]) {
              case 0:
                t = this._activeBuffer.y;
                this._dirtyRowTracker.markDirty(t);
                this._eraseInBufferLine(t++, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, i);
                for (; t < this._bufferService.rows; t++) {
                  this._resetBufferLine(t, i);
                }
                this._dirtyRowTracker.markDirty(t);
                break;
              case 1:
                t = this._activeBuffer.y;
                this._dirtyRowTracker.markDirty(t);
                this._eraseInBufferLine(t, 0, this._activeBuffer.x + 1, true, i);
                if (this._activeBuffer.x + 1 >= this._bufferService.cols) {
                  this._activeBuffer.lines.get(t + 1).isWrapped = false;
                }
                while (t--) {
                  this._resetBufferLine(t, i);
                }
                this._dirtyRowTracker.markDirty(0);
                break;
              case 2:
                t = this._bufferService.rows;
                this._dirtyRowTracker.markDirty(t - 1);
                while (t--) {
                  this._resetBufferLine(t, i);
                }
                this._dirtyRowTracker.markDirty(0);
                break;
              case 3:
                let r = this._activeBuffer.lines.length - this._bufferService.rows;
                if (r > 0) {
                  this._activeBuffer.lines.trimStart(r);
                  this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - r, 0);
                  this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - r, 0);
                  this._onScroll.fire(0);
                }
            }
            return true;
          }
          eraseInLine(e, t = false) {
            this._restrictCursor(this._bufferService.cols);
            switch (e.params[0]) {
              case 0:
                this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, this._activeBuffer.x === 0, t);
                break;
              case 1:
                this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, false, t);
                break;
              case 2:
                this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, true, t);
            }
            this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            return true;
          }
          insertLines(e) {
            this._restrictCursor();
            let t = e.params[0] || 1;
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) {
              return true;
            }
            let i = this._activeBuffer.ybase + this._activeBuffer.y;
            let r = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom;
            let s = this._bufferService.rows - 1 + this._activeBuffer.ybase - r + 1;
            while (t--) {
              this._activeBuffer.lines.splice(s - 1, 1);
              this._activeBuffer.lines.splice(i, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
            }
            this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom);
            this._activeBuffer.x = 0;
            return true;
          }
          deleteLines(e) {
            let t;
            this._restrictCursor();
            let i = e.params[0] || 1;
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) {
              return true;
            }
            let r = this._activeBuffer.ybase + this._activeBuffer.y;
            t = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom;
            t = this._bufferService.rows - 1 + this._activeBuffer.ybase - t;
            while (i--) {
              this._activeBuffer.lines.splice(r, 1);
              this._activeBuffer.lines.splice(t, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
            }
            this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom);
            this._activeBuffer.x = 0;
            return true;
          }
          insertChars(e) {
            this._restrictCursor();
            let t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            if (t) {
              t.insertCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()));
              this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            }
            return true;
          }
          deleteChars(e) {
            this._restrictCursor();
            let t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            if (t) {
              t.deleteCells(this._activeBuffer.x, e.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()));
              this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            }
            return true;
          }
          scrollUp(e) {
            let t = e.params[0] || 1;
            while (t--) {
              this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1);
              this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
            }
            this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
            return true;
          }
          scrollDown(e) {
            let t = e.params[0] || 1;
            while (t--) {
              this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1);
              this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(_.DEFAULT_ATTR_DATA));
            }
            this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
            return true;
          }
          scrollLeft(e) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) {
              return true;
            }
            let t = e.params[0] || 1;
            for (let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e) {
              let i = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
              i.deleteCells(0, t, this._activeBuffer.getNullCell(this._eraseAttrData()));
              i.isWrapped = false;
            }
            this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
            return true;
          }
          scrollRight(e) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) {
              return true;
            }
            let t = e.params[0] || 1;
            for (let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e) {
              let i = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
              i.insertCells(0, t, this._activeBuffer.getNullCell(this._eraseAttrData()));
              i.isWrapped = false;
            }
            this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
            return true;
          }
          insertColumns(e) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) {
              return true;
            }
            let t = e.params[0] || 1;
            for (let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e) {
              let i = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
              i.insertCells(this._activeBuffer.x, t, this._activeBuffer.getNullCell(this._eraseAttrData()));
              i.isWrapped = false;
            }
            this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
            return true;
          }
          deleteColumns(e) {
            if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop) {
              return true;
            }
            let t = e.params[0] || 1;
            for (let e = this._activeBuffer.scrollTop; e <= this._activeBuffer.scrollBottom; ++e) {
              let i = this._activeBuffer.lines.get(this._activeBuffer.ybase + e);
              i.deleteCells(this._activeBuffer.x, t, this._activeBuffer.getNullCell(this._eraseAttrData()));
              i.isWrapped = false;
            }
            this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
            return true;
          }
          eraseChars(e) {
            this._restrictCursor();
            let t = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
            if (t) {
              t.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData()));
              this._dirtyRowTracker.markDirty(this._activeBuffer.y);
            }
            return true;
          }
          repeatPrecedingCharacter(e) {
            let t = this._parser.precedingJoinState;
            if (!t) {
              return true;
            }
            let i = e.params[0] || 1;
            let r = m.UnicodeService.extractWidth(t);
            let s = this._activeBuffer.x - r;
            let n = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).getString(s);
            let o = new Uint32Array(n.length * i);
            let a = 0;
            for (let e = 0; e < n.length;) {
              let t = n.codePointAt(e) || 0;
              o[a++] = t;
              e += t > 65535 ? 2 : 1;
            }
            let h = a;
            for (let e = 1; e < i; ++e) {
              o.copyWithin(h, 0, a);
              h += a;
            }
            this.print(o, 0, h);
            return true;
          }
          sendDeviceAttributesPrimary(e) {
            if (!(e.params[0] > 0)) {
              if (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen")) {
                this._coreService.triggerDataEvent(a.C0.ESC + "[?1;2c");
              } else if (this._is("linux")) {
                this._coreService.triggerDataEvent(a.C0.ESC + "[?6c");
              }
            }
            return true;
          }
          sendDeviceAttributesSecondary(e) {
            if (!(e.params[0] > 0)) {
              if (this._is("xterm")) {
                this._coreService.triggerDataEvent(a.C0.ESC + "[>0;276;0c");
              } else if (this._is("rxvt-unicode")) {
                this._coreService.triggerDataEvent(a.C0.ESC + "[>85;95;0c");
              } else if (this._is("linux")) {
                this._coreService.triggerDataEvent(e.params[0] + "c");
              } else if (this._is("screen")) {
                this._coreService.triggerDataEvent(a.C0.ESC + "[>83;40003;0c");
              }
            }
            return true;
          }
          _is(e) {
            return (this._optionsService.rawOptions.termName + "").indexOf(e) === 0;
          }
          setMode(e) {
            for (let t = 0; t < e.length; t++) {
              switch (e.params[t]) {
                case 4:
                  this._coreService.modes.insertMode = true;
                  break;
                case 20:
                  this._optionsService.options.convertEol = true;
              }
            }
            return true;
          }
          setModePrivate(e) {
            for (let t = 0; t < e.length; t++) {
              switch (e.params[t]) {
                case 1:
                  this._coreService.decPrivateModes.applicationCursorKeys = true;
                  break;
                case 2:
                  this._charsetService.setgCharset(0, h.DEFAULT_CHARSET);
                  this._charsetService.setgCharset(1, h.DEFAULT_CHARSET);
                  this._charsetService.setgCharset(2, h.DEFAULT_CHARSET);
                  this._charsetService.setgCharset(3, h.DEFAULT_CHARSET);
                  break;
                case 3:
                  if (this._optionsService.rawOptions.windowOptions.setWinLines) {
                    this._bufferService.resize(132, this._bufferService.rows);
                    this._onRequestReset.fire();
                  }
                  break;
                case 6:
                  this._coreService.decPrivateModes.origin = true;
                  this._setCursor(0, 0);
                  break;
                case 7:
                  this._coreService.decPrivateModes.wraparound = true;
                  break;
                case 12:
                  this._optionsService.options.cursorBlink = true;
                  break;
                case 45:
                  this._coreService.decPrivateModes.reverseWraparound = true;
                  break;
                case 66:
                  this._logService.debug("Serial port requested application keypad.");
                  this._coreService.decPrivateModes.applicationKeypad = true;
                  this._onRequestSyncScrollBar.fire();
                  break;
                case 9:
                  this._coreMouseService.activeProtocol = "X10";
                  break;
                case 1000:
                  this._coreMouseService.activeProtocol = "VT200";
                  break;
                case 1002:
                  this._coreMouseService.activeProtocol = "DRAG";
                  break;
                case 1003:
                  this._coreMouseService.activeProtocol = "ANY";
                  break;
                case 1004:
                  this._coreService.decPrivateModes.sendFocus = true;
                  this._onRequestSendFocus.fire();
                  break;
                case 1005:
                  this._logService.debug("DECSET 1005 not supported (see #2507)");
                  break;
                case 1006:
                  this._coreMouseService.activeEncoding = "SGR";
                  break;
                case 1015:
                  this._logService.debug("DECSET 1015 not supported (see #2507)");
                  break;
                case 1016:
                  this._coreMouseService.activeEncoding = "SGR_PIXELS";
                  break;
                case 25:
                  this._coreService.isCursorHidden = false;
                  break;
                case 1048:
                  this.saveCursor();
                  break;
                case 1049:
                  this.saveCursor();
                case 47:
                case 1047:
                  this._bufferService.buffers.activateAltBuffer(this._eraseAttrData());
                  this._coreService.isCursorInitialized = true;
                  this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1);
                  this._onRequestSyncScrollBar.fire();
                  break;
                case 2004:
                  this._coreService.decPrivateModes.bracketedPasteMode = true;
              }
            }
            return true;
          }
          resetMode(e) {
            for (let t = 0; t < e.length; t++) {
              switch (e.params[t]) {
                case 4:
                  this._coreService.modes.insertMode = false;
                  break;
                case 20:
                  this._optionsService.options.convertEol = false;
              }
            }
            return true;
          }
          resetModePrivate(e) {
            for (let t = 0; t < e.length; t++) {
              switch (e.params[t]) {
                case 1:
                  this._coreService.decPrivateModes.applicationCursorKeys = false;
                  break;
                case 3:
                  if (this._optionsService.rawOptions.windowOptions.setWinLines) {
                    this._bufferService.resize(80, this._bufferService.rows);
                    this._onRequestReset.fire();
                  }
                  break;
                case 6:
                  this._coreService.decPrivateModes.origin = false;
                  this._setCursor(0, 0);
                  break;
                case 7:
                  this._coreService.decPrivateModes.wraparound = false;
                  break;
                case 12:
                  this._optionsService.options.cursorBlink = false;
                  break;
                case 45:
                  this._coreService.decPrivateModes.reverseWraparound = false;
                  break;
                case 66:
                  this._logService.debug("Switching back to normal keypad.");
                  this._coreService.decPrivateModes.applicationKeypad = false;
                  this._onRequestSyncScrollBar.fire();
                  break;
                case 9:
                case 1000:
                case 1002:
                case 1003:
                  this._coreMouseService.activeProtocol = "NONE";
                  break;
                case 1004:
                  this._coreService.decPrivateModes.sendFocus = false;
                  break;
                case 1005:
                  this._logService.debug("DECRST 1005 not supported (see #2507)");
                  break;
                case 1006:
                case 1016:
                  this._coreMouseService.activeEncoding = "DEFAULT";
                  break;
                case 1015:
                  this._logService.debug("DECRST 1015 not supported (see #2507)");
                  break;
                case 25:
                  this._coreService.isCursorHidden = true;
                  break;
                case 1048:
                  this.restoreCursor();
                  break;
                case 1049:
                case 47:
                case 1047:
                  this._bufferService.buffers.activateNormalBuffer();
                  if (e.params[t] === 1049) {
                    this.restoreCursor();
                  }
                  this._coreService.isCursorInitialized = true;
                  this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1);
                  this._onRequestSyncScrollBar.fire();
                  break;
                case 2004:
                  this._coreService.decPrivateModes.bracketedPasteMode = false;
              }
            }
            return true;
          }
          requestMode(e, t) {
            var i;
            let r = this._coreService.decPrivateModes;
            let {
              activeProtocol: s,
              activeEncoding: n
            } = this._coreMouseService;
            let o = this._coreService;
            let {
              buffers: h,
              cols: l
            } = this._bufferService;
            let {
              active: c,
              alt: d
            } = h;
            let _ = this._optionsService.rawOptions;
            let u = e => e ? 1 : 2;
            let f = e.params[0];
            i = t ? f === 2 ? 4 : f === 4 ? u(o.modes.insertMode) : f === 12 ? 3 : f === 20 ? u(_.convertEol) : 0 : f === 1 ? u(r.applicationCursorKeys) : f === 3 ? _.windowOptions.setWinLines ? l === 80 ? 2 : +(l === 132) : 0 : f === 6 ? u(r.origin) : f === 7 ? u(r.wraparound) : f === 8 ? 3 : f === 9 ? u(s === "X10") : f === 12 ? u(_.cursorBlink) : f === 25 ? u(!o.isCursorHidden) : f === 45 ? u(r.reverseWraparound) : f === 66 ? u(r.applicationKeypad) : f === 67 ? 4 : f === 1000 ? u(s === "VT200") : f === 1002 ? u(s === "DRAG") : f === 1003 ? u(s === "ANY") : f === 1004 ? u(r.sendFocus) : f === 1005 ? 4 : f === 1006 ? u(n === "SGR") : f === 1015 ? 4 : f === 1016 ? u(n === "SGR_PIXELS") : f === 1048 ? 1 : f === 47 || f === 1047 || f === 1049 ? u(c === d) : f === 2004 ? u(r.bracketedPasteMode) : 0;
            o.triggerDataEvent(`${a.C0.ESC}[${t ? "" : "?"}${f};${i}$y`);
            return true;
          }
          _updateAttrColor(e, t, i, r, s) {
            if (t === 2) {
              e |= 50331648;
              e &= -16777216;
              e |= p.AttributeData.fromColorRGB([i, r, s]);
            } else if (t === 5) {
              e &= -50331904;
              e |= i & 255 | 33554432;
            }
            return e;
          }
          _extractColor(e, t, i) {
            let r = [0, 0, -1, 0, 0, 0];
            let s = 0;
            let n = 0;
            do {
              r[n + s] = e.params[t + n];
              if (e.hasSubParams(t + n)) {
                let i = e.getSubParams(t + n);
                let o = 0;
                do {
                  if (r[1] === 5) {
                    s = 1;
                  }
                  r[n + o + 1 + s] = i[o];
                } while (++o < i.length && o + n + 1 + s < r.length);
                break;
              }
              if (r[1] === 5 && n + s >= 2 || r[1] === 2 && n + s >= 5) {
                break;
              }
              if (r[1]) {
                s = 1;
              }
            } while (++n + t < e.length && n + s < r.length);
            for (let e = 2; e < r.length; ++e) {
              if (r[e] === -1) {
                r[e] = 0;
              }
            }
            switch (r[0]) {
              case 38:
                i.fg = this._updateAttrColor(i.fg, r[1], r[3], r[4], r[5]);
                break;
              case 48:
                i.bg = this._updateAttrColor(i.bg, r[1], r[3], r[4], r[5]);
                break;
              case 58:
                i.extended = i.extended.clone();
                i.extended.underlineColor = this._updateAttrColor(i.extended.underlineColor, r[1], r[3], r[4], r[5]);
            }
            return n;
          }
          _processUnderline(e, t) {
            t.extended = t.extended.clone();
            if (!~e || e > 5) {
              e = 1;
            }
            t.extended.underlineStyle = e;
            t.fg |= 268435456;
            if (e === 0) {
              t.fg &= -268435457;
            }
            t.updateExtended();
          }
          _processSGR0(e) {
            e.fg = _.DEFAULT_ATTR_DATA.fg;
            e.bg = _.DEFAULT_ATTR_DATA.bg;
            e.extended = e.extended.clone();
            e.extended.underlineStyle = 0;
            e.extended.underlineColor &= -67108864;
            e.updateExtended();
          }
          charAttributes(e) {
            let t;
            if (e.length === 1 && e.params[0] === 0) {
              this._processSGR0(this._curAttrData);
              return true;
            }
            let i = e.length;
            let r = this._curAttrData;
            for (let s = 0; s < i; s++) {
              if ((t = e.params[s]) >= 30 && t <= 37) {
                r.fg &= -50331904;
                r.fg |= t - 30 | 16777216;
              } else if (t >= 40 && t <= 47) {
                r.bg &= -50331904;
                r.bg |= t - 40 | 16777216;
              } else if (t >= 90 && t <= 97) {
                r.fg &= -50331904;
                r.fg |= t - 90 | 16777224;
              } else if (t >= 100 && t <= 107) {
                r.bg &= -50331904;
                r.bg |= t - 100 | 16777224;
              } else if (t === 0) {
                this._processSGR0(r);
              } else if (t === 1) {
                r.fg |= 134217728;
              } else if (t === 3) {
                r.bg |= 67108864;
              } else if (t === 4) {
                r.fg |= 268435456;
                this._processUnderline(e.hasSubParams(s) ? e.getSubParams(s)[0] : 1, r);
              } else if (t === 5) {
                r.fg |= 536870912;
              } else if (t === 7) {
                r.fg |= 67108864;
              } else if (t === 8) {
                r.fg |= 1073741824;
              } else if (t === 9) {
                r.fg |= 2147483648;
              } else if (t === 2) {
                r.bg |= 134217728;
              } else if (t === 21) {
                this._processUnderline(2, r);
              } else if (t === 22) {
                r.fg &= -134217729;
                r.bg &= -134217729;
              } else if (t === 23) {
                r.bg &= -67108865;
              } else if (t === 24) {
                r.fg &= -268435457;
                this._processUnderline(0, r);
              } else if (t === 25) {
                r.fg &= -536870913;
              } else if (t === 27) {
                r.fg &= -67108865;
              } else if (t === 28) {
                r.fg &= -1073741825;
              } else if (t === 29) {
                r.fg &= 2147483647;
              } else if (t === 39) {
                r.fg &= -67108864;
                r.fg |= _.DEFAULT_ATTR_DATA.fg & 16777215;
              } else if (t === 49) {
                r.bg &= -67108864;
                r.bg |= _.DEFAULT_ATTR_DATA.bg & 16777215;
              } else if (t === 38 || t === 48 || t === 58) {
                s += this._extractColor(e, s, r);
              } else if (t === 53) {
                r.bg |= 1073741824;
              } else if (t === 55) {
                r.bg &= -1073741825;
              } else if (t === 59) {
                r.extended = r.extended.clone();
                r.extended.underlineColor = -1;
                r.updateExtended();
              } else if (t === 100) {
                r.fg &= -67108864;
                r.fg |= _.DEFAULT_ATTR_DATA.fg & 16777215;
                r.bg &= -67108864;
                r.bg |= _.DEFAULT_ATTR_DATA.bg & 16777215;
              } else {
                this._logService.debug("Unknown SGR attribute: %d.", t);
              }
            }
            return true;
          }
          deviceStatus(e) {
            switch (e.params[0]) {
              case 5:
                this._coreService.triggerDataEvent(`${a.C0.ESC}[0n`);
                break;
              case 6:
                let t = this._activeBuffer.y + 1;
                let i = this._activeBuffer.x + 1;
                this._coreService.triggerDataEvent(`${a.C0.ESC}[${t};${i}R`);
            }
            return true;
          }
          deviceStatusPrivate(e) {
            if (e.params[0] === 6) {
              let e = this._activeBuffer.y + 1;
              let t = this._activeBuffer.x + 1;
              this._coreService.triggerDataEvent(`${a.C0.ESC}[?${e};${t}R`);
            }
            return true;
          }
          softReset(e) {
            this._coreService.isCursorHidden = false;
            this._onRequestSyncScrollBar.fire();
            this._activeBuffer.scrollTop = 0;
            this._activeBuffer.scrollBottom = this._bufferService.rows - 1;
            this._curAttrData = _.DEFAULT_ATTR_DATA.clone();
            this._coreService.reset();
            this._charsetService.reset();
            this._activeBuffer.savedX = 0;
            this._activeBuffer.savedY = this._activeBuffer.ybase;
            this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg;
            this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg;
            this._activeBuffer.savedCharset = this._charsetService.charset;
            this._coreService.decPrivateModes.origin = false;
            return true;
          }
          setCursorStyle(e) {
            let t = e.params[0] || 1;
            switch (t) {
              case 1:
              case 2:
                this._optionsService.options.cursorStyle = "block";
                break;
              case 3:
              case 4:
                this._optionsService.options.cursorStyle = "underline";
                break;
              case 5:
              case 6:
                this._optionsService.options.cursorStyle = "bar";
            }
            this._optionsService.options.cursorBlink = t % 2 == 1;
            return true;
          }
          setScrollRegion(e) {
            let t;
            let i = e.params[0] || 1;
            if (e.length < 2 || (t = e.params[1]) > this._bufferService.rows || t === 0) {
              t = this._bufferService.rows;
            }
            if (t > i) {
              this._activeBuffer.scrollTop = i - 1;
              this._activeBuffer.scrollBottom = t - 1;
              this._setCursor(0, 0);
            }
            return true;
          }
          windowOptions(e) {
            if (!y(e.params[0], this._optionsService.rawOptions.windowOptions)) {
              return true;
            }
            let t = e.length > 1 ? e.params[1] : 0;
            switch (e.params[0]) {
              case 14:
                if (t !== 2) {
                  this._onRequestWindowsOptionsReport.fire(s.GET_WIN_SIZE_PIXELS);
                }
                break;
              case 16:
                this._onRequestWindowsOptionsReport.fire(s.GET_CELL_SIZE_PIXELS);
                break;
              case 18:
                if (this._bufferService) {
                  this._coreService.triggerDataEvent(`${a.C0.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);
                }
                break;
              case 22:
                if (t === 0 || t === 2) {
                  this._windowTitleStack.push(this._windowTitle);
                  if (this._windowTitleStack.length > 10) {
                    this._windowTitleStack.shift();
                  }
                }
                if (t === 0 || t === 1) {
                  this._iconNameStack.push(this._iconName);
                  if (this._iconNameStack.length > 10) {
                    this._iconNameStack.shift();
                  }
                }
                break;
              case 23:
                if (t === 0 || t === 2) {
                  if (this._windowTitleStack.length) {
                    this.setTitle(this._windowTitleStack.pop());
                  }
                }
                if (t === 0 || t === 1) {
                  if (this._iconNameStack.length) {
                    this.setIconName(this._iconNameStack.pop());
                  }
                }
            }
            return true;
          }
          saveCursor(e) {
            this._activeBuffer.savedX = this._activeBuffer.x;
            this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y;
            this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg;
            this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg;
            this._activeBuffer.savedCharset = this._charsetService.charset;
            return true;
          }
          restoreCursor(e) {
            this._activeBuffer.x = this._activeBuffer.savedX || 0;
            this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0);
            this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg;
            this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg;
            this._charsetService.charset = this._savedCharset;
            if (this._activeBuffer.savedCharset) {
              this._charsetService.charset = this._activeBuffer.savedCharset;
            }
            this._restrictCursor();
            return true;
          }
          setTitle(e) {
            this._windowTitle = e;
            this._onTitleChange.fire(e);
            return true;
          }
          setIconName(e) {
            this._iconName = e;
            return true;
          }
          setOrReportIndexedColor(e) {
            let t = [];
            let i = e.split(";");
            while (i.length > 1) {
              let e = i.shift();
              let r = i.shift();
              if (/^\d+$/.exec(e)) {
                let i = parseInt(e);
                if (L(i)) {
                  if (r === "?") {
                    t.push({
                      type: 0,
                      index: i
                    });
                  } else {
                    let e = b.parseColor(r);
                    if (e) {
                      t.push({
                        type: 1,
                        index: i,
                        color: e
                      });
                    }
                  }
                }
              }
            }
            if (t.length) {
              this._onColor.fire(t);
            }
            return true;
          }
          setHyperlink(e) {
            let t = e.split(";");
            return !(t.length < 2) && (t[1] ? this._createHyperlink(t[0], t[1]) : !t[0] && this._finishHyperlink());
          }
          _createHyperlink(e, t) {
            let i;
            if (this._getCurrentLinkId()) {
              this._finishHyperlink();
            }
            let r = e.split(":");
            let s = r.findIndex(e => e.startsWith("id="));
            if (s !== -1) {
              i = r[s].slice(3) || undefined;
            }
            this._curAttrData.extended = this._curAttrData.extended.clone();
            this._curAttrData.extended.urlId = this._oscLinkService.registerLink({
              id: i,
              uri: t
            });
            this._curAttrData.updateExtended();
            return true;
          }
          _finishHyperlink() {
            this._curAttrData.extended = this._curAttrData.extended.clone();
            this._curAttrData.extended.urlId = 0;
            this._curAttrData.updateExtended();
            return true;
          }
          _setOrReportSpecialColor(e, t) {
            let i = e.split(";");
            for (let e = 0; e < i.length && !(t >= this._specialColors.length); ++e, ++t) {
              if (i[e] === "?") {
                this._onColor.fire([{
                  type: 0,
                  index: this._specialColors[t]
                }]);
              } else {
                let r = b.parseColor(i[e]);
                if (r) {
                  this._onColor.fire([{
                    type: 1,
                    index: this._specialColors[t],
                    color: r
                  }]);
                }
              }
            }
            return true;
          }
          setOrReportFgColor(e) {
            return this._setOrReportSpecialColor(e, 0);
          }
          setOrReportBgColor(e) {
            return this._setOrReportSpecialColor(e, 1);
          }
          setOrReportCursorColor(e) {
            return this._setOrReportSpecialColor(e, 2);
          }
          restoreIndexedColor(e) {
            if (!e) {
              this._onColor.fire([{
                type: 2
              }]);
              return true;
            }
            let t = [];
            let i = e.split(";");
            for (let e = 0; e < i.length; ++e) {
              if (/^\d+$/.exec(i[e])) {
                let r = parseInt(i[e]);
                if (L(r)) {
                  t.push({
                    type: 2,
                    index: r
                  });
                }
              }
            }
            if (t.length) {
              this._onColor.fire(t);
            }
            return true;
          }
          restoreFgColor(e) {
            this._onColor.fire([{
              type: 2,
              index: 256
            }]);
            return true;
          }
          restoreBgColor(e) {
            this._onColor.fire([{
              type: 2,
              index: 257
            }]);
            return true;
          }
          restoreCursorColor(e) {
            this._onColor.fire([{
              type: 2,
              index: 258
            }]);
            return true;
          }
          nextLine() {
            this._activeBuffer.x = 0;
            this.index();
            return true;
          }
          keypadApplicationMode() {
            this._logService.debug("Serial port requested application keypad.");
            this._coreService.decPrivateModes.applicationKeypad = true;
            this._onRequestSyncScrollBar.fire();
            return true;
          }
          keypadNumericMode() {
            this._logService.debug("Switching back to normal keypad.");
            this._coreService.decPrivateModes.applicationKeypad = false;
            this._onRequestSyncScrollBar.fire();
            return true;
          }
          selectDefaultCharset() {
            this._charsetService.setgLevel(0);
            this._charsetService.setgCharset(0, h.DEFAULT_CHARSET);
            return true;
          }
          selectCharset(e) {
            if (e.length !== 2) {
              this.selectDefaultCharset();
            } else if (e[0] !== "/") {
              this._charsetService.setgCharset(w[e[0]], h.CHARSETS[e[1]] || h.DEFAULT_CHARSET);
            }
            return true;
          }
          index() {
            this._restrictCursor();
            this._activeBuffer.y++;
            if (this._activeBuffer.y === this._activeBuffer.scrollBottom + 1) {
              this._activeBuffer.y--;
              this._bufferService.scroll(this._eraseAttrData());
            } else if (this._activeBuffer.y >= this._bufferService.rows) {
              this._activeBuffer.y = this._bufferService.rows - 1;
            }
            this._restrictCursor();
            return true;
          }
          tabSet() {
            this._activeBuffer.tabs[this._activeBuffer.x] = true;
            return true;
          }
          reverseIndex() {
            this._restrictCursor();
            if (this._activeBuffer.y === this._activeBuffer.scrollTop) {
              let e = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
              this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e, 1);
              this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData()));
              this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
            } else {
              this._activeBuffer.y--;
              this._restrictCursor();
            }
            return true;
          }
          fullReset() {
            this._parser.reset();
            this._onRequestReset.fire();
            return true;
          }
          reset() {
            this._curAttrData = _.DEFAULT_ATTR_DATA.clone();
            this._eraseAttrDataInternal = _.DEFAULT_ATTR_DATA.clone();
          }
          _eraseAttrData() {
            this._eraseAttrDataInternal.bg &= -67108864;
            this._eraseAttrDataInternal.bg |= this._curAttrData.bg & 67108863;
            return this._eraseAttrDataInternal;
          }
          setgLevel(e) {
            this._charsetService.setgLevel(e);
            return true;
          }
          screenAlignmentPattern() {
            let e = new v.CellData();
            e.content = 4194373;
            e.fg = this._curAttrData.fg;
            e.bg = this._curAttrData.bg;
            this._setCursor(0, 0);
            for (let t = 0; t < this._bufferService.rows; ++t) {
              let i = this._activeBuffer.ybase + this._activeBuffer.y + t;
              let r = this._activeBuffer.lines.get(i);
              if (r) {
                r.fill(e);
                r.isWrapped = false;
              }
            }
            this._dirtyRowTracker.markAllDirty();
            this._setCursor(0, 0);
            return true;
          }
          requestStatusString(e, t) {
            let i;
            let r = this._bufferService.buffer;
            let s = this._optionsService.rawOptions;
            i = e === "\"q" ? `P1$r${+!!this._curAttrData.isProtected()}"q` : e === "\"p" ? "P1$r61;1\"p" : e === "r" ? `P1$r${r.scrollTop + 1};${r.scrollBottom + 1}r` : e === "m" ? "P1$r0m" : e === " q" ? `P1$r${{
              block: 2,
              underline: 4,
              bar: 6
            }[s.cursorStyle] - +!!s.cursorBlink} q` : "P0$r";
            this._coreService.triggerDataEvent(`${a.C0.ESC}${i}${a.C0.ESC}\\`);
            return true;
          }
          markRangeDirty(e, t) {
            this._dirtyRowTracker.markRangeDirty(e, t);
          }
          constructor(e, t, i, r, s, n, o, c, f = new l.EscapeSequenceParser()) {
            super();
            this._bufferService = e;
            this._charsetService = t;
            this._coreService = i;
            this._logService = r;
            this._optionsService = s;
            this._oscLinkService = n;
            this._coreMouseService = o;
            this._unicodeService = c;
            this._parser = f;
            this._parseBuffer = new Uint32Array(4096);
            this._stringDecoder = new d.StringToUtf32();
            this._utf8Decoder = new d.Utf8ToUtf32();
            this._workCell = new v.CellData();
            this._windowTitle = "";
            this._iconName = "";
            this._windowTitleStack = [];
            this._iconNameStack = [];
            this._curAttrData = _.DEFAULT_ATTR_DATA.clone();
            this._eraseAttrDataInternal = _.DEFAULT_ATTR_DATA.clone();
            this._onRequestBell = this.register(new u.EventEmitter());
            this.onRequestBell = this._onRequestBell.event;
            this._onRequestRefreshRows = this.register(new u.EventEmitter());
            this.onRequestRefreshRows = this._onRequestRefreshRows.event;
            this._onRequestReset = this.register(new u.EventEmitter());
            this.onRequestReset = this._onRequestReset.event;
            this._onRequestSendFocus = this.register(new u.EventEmitter());
            this.onRequestSendFocus = this._onRequestSendFocus.event;
            this._onRequestSyncScrollBar = this.register(new u.EventEmitter());
            this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event;
            this._onRequestWindowsOptionsReport = this.register(new u.EventEmitter());
            this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event;
            this._onA11yChar = this.register(new u.EventEmitter());
            this.onA11yChar = this._onA11yChar.event;
            this._onA11yTab = this.register(new u.EventEmitter());
            this.onA11yTab = this._onA11yTab.event;
            this._onCursorMove = this.register(new u.EventEmitter());
            this.onCursorMove = this._onCursorMove.event;
            this._onLineFeed = this.register(new u.EventEmitter());
            this.onLineFeed = this._onLineFeed.event;
            this._onScroll = this.register(new u.EventEmitter());
            this.onScroll = this._onScroll.event;
            this._onTitleChange = this.register(new u.EventEmitter());
            this.onTitleChange = this._onTitleChange.event;
            this._onColor = this.register(new u.EventEmitter());
            this.onColor = this._onColor.event;
            this._parseStack = {
              paused: false,
              cursorStartX: 0,
              cursorStartY: 0,
              decodedLength: 0,
              position: 0
            };
            this._specialColors = [256, 257, 258];
            this.register(this._parser);
            this._dirtyRowTracker = new k(this._bufferService);
            this._activeBuffer = this._bufferService.buffer;
            this.register(this._bufferService.buffers.onBufferActivate(e => this._activeBuffer = e.activeBuffer));
            this._parser.setCsiHandlerFallback((e, t) => {
              this._logService.debug("Unknown CSI code: ", {
                identifier: this._parser.identToString(e),
                params: t.toArray()
              });
            });
            this._parser.setEscHandlerFallback(e => {
              this._logService.debug("Unknown ESC code: ", {
                identifier: this._parser.identToString(e)
              });
            });
            this._parser.setExecuteHandlerFallback(e => {
              this._logService.debug("Unknown EXECUTE code: ", {
                code: e
              });
            });
            this._parser.setOscHandlerFallback((e, t, i) => {
              this._logService.debug("Unknown OSC code: ", {
                identifier: e,
                action: t,
                data: i
              });
            });
            this._parser.setDcsHandlerFallback((e, t, i) => {
              if (t === "HOOK") {
                i = i.toArray();
              }
              this._logService.debug("Unknown DCS code: ", {
                identifier: this._parser.identToString(e),
                action: t,
                payload: i
              });
            });
            this._parser.setPrintHandler((e, t, i) => this.print(e, t, i));
            this._parser.registerCsiHandler({
              final: "@"
            }, e => this.insertChars(e));
            this._parser.registerCsiHandler({
              intermediates: " ",
              final: "@"
            }, e => this.scrollLeft(e));
            this._parser.registerCsiHandler({
              final: "A"
            }, e => this.cursorUp(e));
            this._parser.registerCsiHandler({
              intermediates: " ",
              final: "A"
            }, e => this.scrollRight(e));
            this._parser.registerCsiHandler({
              final: "B"
            }, e => this.cursorDown(e));
            this._parser.registerCsiHandler({
              final: "C"
            }, e => this.cursorForward(e));
            this._parser.registerCsiHandler({
              final: "D"
            }, e => this.cursorBackward(e));
            this._parser.registerCsiHandler({
              final: "E"
            }, e => this.cursorNextLine(e));
            this._parser.registerCsiHandler({
              final: "F"
            }, e => this.cursorPrecedingLine(e));
            this._parser.registerCsiHandler({
              final: "G"
            }, e => this.cursorCharAbsolute(e));
            this._parser.registerCsiHandler({
              final: "H"
            }, e => this.cursorPosition(e));
            this._parser.registerCsiHandler({
              final: "I"
            }, e => this.cursorForwardTab(e));
            this._parser.registerCsiHandler({
              final: "J"
            }, e => this.eraseInDisplay(e, false));
            this._parser.registerCsiHandler({
              prefix: "?",
              final: "J"
            }, e => this.eraseInDisplay(e, true));
            this._parser.registerCsiHandler({
              final: "K"
            }, e => this.eraseInLine(e, false));
            this._parser.registerCsiHandler({
              prefix: "?",
              final: "K"
            }, e => this.eraseInLine(e, true));
            this._parser.registerCsiHandler({
              final: "L"
            }, e => this.insertLines(e));
            this._parser.registerCsiHandler({
              final: "M"
            }, e => this.deleteLines(e));
            this._parser.registerCsiHandler({
              final: "P"
            }, e => this.deleteChars(e));
            this._parser.registerCsiHandler({
              final: "S"
            }, e => this.scrollUp(e));
            this._parser.registerCsiHandler({
              final: "T"
            }, e => this.scrollDown(e));
            this._parser.registerCsiHandler({
              final: "X"
            }, e => this.eraseChars(e));
            this._parser.registerCsiHandler({
              final: "Z"
            }, e => this.cursorBackwardTab(e));
            this._parser.registerCsiHandler({
              final: "`"
            }, e => this.charPosAbsolute(e));
            this._parser.registerCsiHandler({
              final: "a"
            }, e => this.hPositionRelative(e));
            this._parser.registerCsiHandler({
              final: "b"
            }, e => this.repeatPrecedingCharacter(e));
            this._parser.registerCsiHandler({
              final: "c"
            }, e => this.sendDeviceAttributesPrimary(e));
            this._parser.registerCsiHandler({
              prefix: ">",
              final: "c"
            }, e => this.sendDeviceAttributesSecondary(e));
            this._parser.registerCsiHandler({
              final: "d"
            }, e => this.linePosAbsolute(e));
            this._parser.registerCsiHandler({
              final: "e"
            }, e => this.vPositionRelative(e));
            this._parser.registerCsiHandler({
              final: "f"
            }, e => this.hVPosition(e));
            this._parser.registerCsiHandler({
              final: "g"
            }, e => this.tabClear(e));
            this._parser.registerCsiHandler({
              final: "h"
            }, e => this.setMode(e));
            this._parser.registerCsiHandler({
              prefix: "?",
              final: "h"
            }, e => this.setModePrivate(e));
            this._parser.registerCsiHandler({
              final: "l"
            }, e => this.resetMode(e));
            this._parser.registerCsiHandler({
              prefix: "?",
              final: "l"
            }, e => this.resetModePrivate(e));
            this._parser.registerCsiHandler({
              final: "m"
            }, e => this.charAttributes(e));
            this._parser.registerCsiHandler({
              final: "n"
            }, e => this.deviceStatus(e));
            this._parser.registerCsiHandler({
              prefix: "?",
              final: "n"
            }, e => this.deviceStatusPrivate(e));
            this._parser.registerCsiHandler({
              intermediates: "!",
              final: "p"
            }, e => this.softReset(e));
            this._parser.registerCsiHandler({
              intermediates: " ",
              final: "q"
            }, e => this.setCursorStyle(e));
            this._parser.registerCsiHandler({
              final: "r"
            }, e => this.setScrollRegion(e));
            this._parser.registerCsiHandler({
              final: "s"
            }, e => this.saveCursor(e));
            this._parser.registerCsiHandler({
              final: "t"
            }, e => this.windowOptions(e));
            this._parser.registerCsiHandler({
              final: "u"
            }, e => this.restoreCursor(e));
            this._parser.registerCsiHandler({
              intermediates: "'",
              final: "}"
            }, e => this.insertColumns(e));
            this._parser.registerCsiHandler({
              intermediates: "'",
              final: "~"
            }, e => this.deleteColumns(e));
            this._parser.registerCsiHandler({
              intermediates: "\"",
              final: "q"
            }, e => this.selectProtected(e));
            this._parser.registerCsiHandler({
              intermediates: "$",
              final: "p"
            }, e => this.requestMode(e, true));
            this._parser.registerCsiHandler({
              prefix: "?",
              intermediates: "$",
              final: "p"
            }, e => this.requestMode(e, false));
            this._parser.setExecuteHandler(a.C0.BEL, () => this.bell());
            this._parser.setExecuteHandler(a.C0.LF, () => this.lineFeed());
            this._parser.setExecuteHandler(a.C0.VT, () => this.lineFeed());
            this._parser.setExecuteHandler(a.C0.FF, () => this.lineFeed());
            this._parser.setExecuteHandler(a.C0.CR, () => this.carriageReturn());
            this._parser.setExecuteHandler(a.C0.BS, () => this.backspace());
            this._parser.setExecuteHandler(a.C0.HT, () => this.tab());
            this._parser.setExecuteHandler(a.C0.SO, () => this.shiftOut());
            this._parser.setExecuteHandler(a.C0.SI, () => this.shiftIn());
            this._parser.setExecuteHandler(a.C1.IND, () => this.index());
            this._parser.setExecuteHandler(a.C1.NEL, () => this.nextLine());
            this._parser.setExecuteHandler(a.C1.HTS, () => this.tabSet());
            this._parser.registerOscHandler(0, new S.OscHandler(e => {
              this.setTitle(e);
              this.setIconName(e);
              return true;
            }));
            this._parser.registerOscHandler(1, new S.OscHandler(e => this.setIconName(e)));
            this._parser.registerOscHandler(2, new S.OscHandler(e => this.setTitle(e)));
            this._parser.registerOscHandler(4, new S.OscHandler(e => this.setOrReportIndexedColor(e)));
            this._parser.registerOscHandler(8, new S.OscHandler(e => this.setHyperlink(e)));
            this._parser.registerOscHandler(10, new S.OscHandler(e => this.setOrReportFgColor(e)));
            this._parser.registerOscHandler(11, new S.OscHandler(e => this.setOrReportBgColor(e)));
            this._parser.registerOscHandler(12, new S.OscHandler(e => this.setOrReportCursorColor(e)));
            this._parser.registerOscHandler(104, new S.OscHandler(e => this.restoreIndexedColor(e)));
            this._parser.registerOscHandler(110, new S.OscHandler(e => this.restoreFgColor(e)));
            this._parser.registerOscHandler(111, new S.OscHandler(e => this.restoreBgColor(e)));
            this._parser.registerOscHandler(112, new S.OscHandler(e => this.restoreCursorColor(e)));
            this._parser.registerEscHandler({
              final: "7"
            }, () => this.saveCursor());
            this._parser.registerEscHandler({
              final: "8"
            }, () => this.restoreCursor());
            this._parser.registerEscHandler({
              final: "D"
            }, () => this.index());
            this._parser.registerEscHandler({
              final: "E"
            }, () => this.nextLine());
            this._parser.registerEscHandler({
              final: "H"
            }, () => this.tabSet());
            this._parser.registerEscHandler({
              final: "M"
            }, () => this.reverseIndex());
            this._parser.registerEscHandler({
              final: "="
            }, () => this.keypadApplicationMode());
            this._parser.registerEscHandler({
              final: ">"
            }, () => this.keypadNumericMode());
            this._parser.registerEscHandler({
              final: "c"
            }, () => this.fullReset());
            this._parser.registerEscHandler({
              final: "n"
            }, () => this.setgLevel(2));
            this._parser.registerEscHandler({
              final: "o"
            }, () => this.setgLevel(3));
            this._parser.registerEscHandler({
              final: "|"
            }, () => this.setgLevel(3));
            this._parser.registerEscHandler({
              final: "}"
            }, () => this.setgLevel(2));
            this._parser.registerEscHandler({
              final: "~"
            }, () => this.setgLevel(1));
            this._parser.registerEscHandler({
              intermediates: "%",
              final: "@"
            }, () => this.selectDefaultCharset());
            this._parser.registerEscHandler({
              intermediates: "%",
              final: "G"
            }, () => this.selectDefaultCharset());
            for (let l in h.CHARSETS) {
              this._parser.registerEscHandler({
                intermediates: "(",
                final: l
              }, () => this.selectCharset("(" + l));
              this._parser.registerEscHandler({
                intermediates: ")",
                final: l
              }, () => this.selectCharset(")" + l));
              this._parser.registerEscHandler({
                intermediates: "*",
                final: l
              }, () => this.selectCharset("*" + l));
              this._parser.registerEscHandler({
                intermediates: "+",
                final: l
              }, () => this.selectCharset("+" + l));
              this._parser.registerEscHandler({
                intermediates: "-",
                final: l
              }, () => this.selectCharset("-" + l));
              this._parser.registerEscHandler({
                intermediates: ".",
                final: l
              }, () => this.selectCharset("." + l));
              this._parser.registerEscHandler({
                intermediates: "/",
                final: l
              }, () => this.selectCharset("/" + l));
            }
            this._parser.registerEscHandler({
              intermediates: "#",
              final: "8"
            }, () => this.screenAlignmentPattern());
            this._parser.setErrorHandler(e => {
              this._logService.error("Parsing error: ", e);
              return e;
            });
            this._parser.registerDcsHandler({
              intermediates: "$",
              final: "q"
            }, new C.DcsHandler((e, t) => this.requestStatusString(e, t)));
          }
        }
        t.InputHandler = x;
        let k = class {
          clearRange() {
            this.start = this._bufferService.buffer.y;
            this.end = this._bufferService.buffer.y;
          }
          markDirty(e) {
            if (e < this.start) {
              this.start = e;
            } else if (e > this.end) {
              this.end = e;
            }
          }
          markRangeDirty(e, t) {
            if (e > t) {
              E = e;
              e = t;
              t = E;
            }
            if (e < this.start) {
              this.start = e;
            }
            if (t > this.end) {
              this.end = t;
            }
          }
          markAllDirty() {
            this.markRangeDirty(0, this._bufferService.rows - 1);
          }
          constructor(e) {
            this._bufferService = e;
            this.clearRange();
          }
        };
        function L(e) {
          return e >= 0 && e < 256;
        }
        k = n([o(0, g.IBufferService)], k);
      },
      844: (e, t) => {
        function i(e) {
          for (let t of e) {
            t.dispose();
          }
          e.length = 0;
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.getDisposeArrayDisposable = t.disposeArray = t.toDisposable = t.MutableDisposable = t.Disposable = undefined;
        t.Disposable = class {
          dispose() {
            this._isDisposed = true;
            for (let e of this._disposables) {
              e.dispose();
            }
            this._disposables.length = 0;
          }
          register(e) {
            this._disposables.push(e);
            return e;
          }
          unregister(e) {
            let t = this._disposables.indexOf(e);
            if (t !== -1) {
              this._disposables.splice(t, 1);
            }
          }
          constructor() {
            this._disposables = [];
            this._isDisposed = false;
          }
        };
        t.MutableDisposable = class {
          get value() {
            if (this._isDisposed) {
              return undefined;
            } else {
              return this._value;
            }
          }
          set value(e) {
            var t;
            if (!this._isDisposed && e !== this._value) {
              if ((t = this._value) !== null && t !== undefined) {
                t.dispose();
              }
              this._value = e;
            }
          }
          clear() {
            this.value = undefined;
          }
          dispose() {
            var e;
            this._isDisposed = true;
            if ((e = this._value) !== null && e !== undefined) {
              e.dispose();
            }
            this._value = undefined;
          }
          constructor() {
            this._isDisposed = false;
          }
        };
        t.toDisposable = function (e) {
          return {
            dispose: e
          };
        };
        t.disposeArray = i;
        t.getDisposeArrayDisposable = function (e) {
          return {
            dispose: () => i(e)
          };
        };
      },
      1505: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.FourKeyMap = t.TwoKeyMap = undefined;
        class i {
          set(e, t, i) {
            this._data[e] ||= {};
            this._data[e][t] = i;
          }
          get(e, t) {
            if (this._data[e]) {
              return this._data[e][t];
            } else {
              return undefined;
            }
          }
          clear() {
            this._data = {};
          }
          constructor() {
            this._data = {};
          }
        }
        t.TwoKeyMap = i;
        t.FourKeyMap = class {
          set(e, t, r, s, n) {
            if (!this._data.get(e, t)) {
              this._data.set(e, t, new i());
            }
            this._data.get(e, t).set(r, s, n);
          }
          get(e, t, i, r) {
            var s;
            if ((s = this._data.get(e, t)) === null || s === undefined) {
              return undefined;
            } else {
              return s.get(i, r);
            }
          }
          clear() {
            this._data.clear();
          }
          constructor() {
            this._data = new i();
          }
        };
      },
      6114: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.isChromeOS = t.isLinux = t.isWindows = t.isIphone = t.isIpad = t.isMac = t.getSafariVersion = t.isSafari = t.isLegacyEdge = t.isFirefox = t.isNode = undefined;
        t.isNode = processBrowserShim !== undefined && "title" in processBrowserShim;
        let i = t.isNode ? "node" : navigator.userAgent;
        let r = t.isNode ? "node" : navigator.platform;
        t.isFirefox = i.includes("Firefox");
        t.isLegacyEdge = i.includes("Edge");
        t.isSafari = /^((?!chrome|android).)*safari/i.test(i);
        t.getSafariVersion = function () {
          if (!t.isSafari) {
            return 0;
          }
          let e = i.match(/Version\/(\d+)/);
          if (e === null || e.length < 2) {
            return 0;
          } else {
            return parseInt(e[1]);
          }
        };
        t.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(r);
        t.isIpad = r === "iPad";
        t.isIphone = r === "iPhone";
        t.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(r);
        t.isLinux = r.indexOf("Linux") >= 0;
        t.isChromeOS = /\bCrOS\b/.test(i);
      },
      6106: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.SortedList = undefined;
        let i = 0;
        t.SortedList = class {
          clear() {
            this._array.length = 0;
          }
          insert(e) {
            if (this._array.length !== 0) {
              i = this._search(this._getKey(e));
              this._array.splice(i, 0, e);
            } else {
              this._array.push(e);
            }
          }
          delete(e) {
            if (this._array.length === 0) {
              return false;
            }
            let t = this._getKey(e);
            if (t === undefined || (i = this._search(t)) === -1 || this._getKey(this._array[i]) !== t) {
              return false;
            }
            do {
              if (this._array[i] === e) {
                this._array.splice(i, 1);
                return true;
              }
            } while (++i < this._array.length && this._getKey(this._array[i]) === t);
            return false;
          }
          *getKeyIterator(e) {
            if (this._array.length !== 0 && !((i = this._search(e)) < 0) && !(i >= this._array.length) && this._getKey(this._array[i]) === e) {
              do {
                yield this._array[i];
              } while (++i < this._array.length && this._getKey(this._array[i]) === e);
            }
          }
          forEachByKey(e, t) {
            if (this._array.length !== 0 && !((i = this._search(e)) < 0) && !(i >= this._array.length) && this._getKey(this._array[i]) === e) {
              do {
                t(this._array[i]);
              } while (++i < this._array.length && this._getKey(this._array[i]) === e);
            }
          }
          values() {
            return [...this._array].values();
          }
          _search(e) {
            let t = 0;
            let i = this._array.length - 1;
            while (i >= t) {
              let r = t + i >> 1;
              let s = this._getKey(this._array[r]);
              if (s > e) {
                i = r - 1;
              } else {
                if (!(s < e)) {
                  while (r > 0 && this._getKey(this._array[r - 1]) === e) {
                    r--;
                  }
                  return r;
                }
                t = r + 1;
              }
            }
            return t;
          }
          constructor(e) {
            this._getKey = e;
            this._array = [];
          }
        };
      },
      7226: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.DebouncedIdleTask = t.IdleTaskQueue = t.PriorityTaskQueue = undefined;
        let r = i(6114);
        class s {
          enqueue(e) {
            this._tasks.push(e);
            this._start();
          }
          flush() {
            while (this._i < this._tasks.length) {
              if (!this._tasks[this._i]()) {
                this._i++;
              }
            }
            this.clear();
          }
          clear() {
            if (this._idleCallback) {
              this._cancelCallback(this._idleCallback);
              this._idleCallback = undefined;
            }
            this._i = 0;
            this._tasks.length = 0;
          }
          _start() {
            this._idleCallback ||= this._requestCallback(this._process.bind(this));
          }
          _process(e) {
            this._idleCallback = undefined;
            let t = 0;
            let i = 0;
            e.timeRemaining();
            let r = 0;
            while (this._i < this._tasks.length) {
              t = Date.now();
              if (!this._tasks[this._i]()) {
                this._i++;
              }
              if ((i = Math.max(t = Math.max(1, Date.now() - t), i)) * 1.5 > e.timeRemaining()) {
                this._start();
                return;
              }
            }
            this.clear();
          }
          constructor() {
            this._tasks = [];
            this._i = 0;
          }
        }
        class n extends s {
          _requestCallback(e) {
            return setTimeout(() => e(this._createDeadline(16)));
          }
          _cancelCallback(e) {
            clearTimeout(e);
          }
          _createDeadline(e) {
            let t = Date.now() + e;
            return {
              timeRemaining: () => Math.max(0, t - Date.now())
            };
          }
        }
        t.PriorityTaskQueue = n;
        t.IdleTaskQueue = !r.isNode && "requestIdleCallback" in window ? class extends s {
          _requestCallback(e) {
            return requestIdleCallback(e);
          }
          _cancelCallback(e) {
            cancelIdleCallback(e);
          }
        } : n;
        t.DebouncedIdleTask = class {
          set(e) {
            this._queue.clear();
            this._queue.enqueue(e);
          }
          flush() {
            this._queue.flush();
          }
          constructor() {
            this._queue = new t.IdleTaskQueue();
          }
        };
      },
      9282: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.updateWindowsModeWrappedState = undefined;
        let r = i(643);
        t.updateWindowsModeWrappedState = function (e) {
          let t = e.buffer.lines.get(e.buffer.ybase + e.buffer.y - 1);
          let i = t == null ? undefined : t.get(e.cols - 1);
          let s = e.buffer.lines.get(e.buffer.ybase + e.buffer.y);
          if (s && i) {
            s.isWrapped = i[r.CHAR_DATA_CODE_INDEX] !== r.NULL_CELL_CODE && i[r.CHAR_DATA_CODE_INDEX] !== r.WHITESPACE_CELL_CODE;
          }
        };
      },
      3734: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.ExtendedAttrs = t.AttributeData = undefined;
        class i {
          static toColorRGB(e) {
            return [e >>> 16 & 255, e >>> 8 & 255, e & 255];
          }
          static fromColorRGB(e) {
            return (e[0] & 255) << 16 | (e[1] & 255) << 8 | e[2] & 255;
          }
          clone() {
            let e = new i();
            e.fg = this.fg;
            e.bg = this.bg;
            e.extended = this.extended.clone();
            return e;
          }
          isInverse() {
            return this.fg & 67108864;
          }
          isBold() {
            return this.fg & 134217728;
          }
          isUnderline() {
            if (this.hasExtendedAttrs() && this.extended.underlineStyle !== 0) {
              return 1;
            } else {
              return this.fg & 268435456;
            }
          }
          isBlink() {
            return this.fg & 536870912;
          }
          isInvisible() {
            return this.fg & 1073741824;
          }
          isItalic() {
            return this.bg & 67108864;
          }
          isDim() {
            return this.bg & 134217728;
          }
          isStrikethrough() {
            return this.fg & -2147483648;
          }
          isProtected() {
            return this.bg & 536870912;
          }
          isOverline() {
            return this.bg & 1073741824;
          }
          getFgColorMode() {
            return this.fg & 50331648;
          }
          getBgColorMode() {
            return this.bg & 50331648;
          }
          isFgRGB() {
            return (this.fg & 50331648) == 50331648;
          }
          isBgRGB() {
            return (this.bg & 50331648) == 50331648;
          }
          isFgPalette() {
            return (this.fg & 50331648) == 16777216 || (this.fg & 50331648) == 33554432;
          }
          isBgPalette() {
            return (this.bg & 50331648) == 16777216 || (this.bg & 50331648) == 33554432;
          }
          isFgDefault() {
            return (this.fg & 50331648) == 0;
          }
          isBgDefault() {
            return (this.bg & 50331648) == 0;
          }
          isAttributeDefault() {
            return this.fg === 0 && this.bg === 0;
          }
          getFgColor() {
            switch (this.fg & 50331648) {
              case 16777216:
              case 33554432:
                return this.fg & 255;
              case 50331648:
                return this.fg & 16777215;
              default:
                return -1;
            }
          }
          getBgColor() {
            switch (this.bg & 50331648) {
              case 16777216:
              case 33554432:
                return this.bg & 255;
              case 50331648:
                return this.bg & 16777215;
              default:
                return -1;
            }
          }
          hasExtendedAttrs() {
            return this.bg & 268435456;
          }
          updateExtended() {
            if (this.extended.isEmpty()) {
              this.bg &= -268435457;
            } else {
              this.bg |= 268435456;
            }
          }
          getUnderlineColor() {
            if (this.bg & 268435456 && ~this.extended.underlineColor) {
              switch (this.extended.underlineColor & 50331648) {
                case 16777216:
                case 33554432:
                  return this.extended.underlineColor & 255;
                case 50331648:
                  return this.extended.underlineColor & 16777215;
              }
            }
            return this.getFgColor();
          }
          getUnderlineColorMode() {
            if (this.bg & 268435456 && ~this.extended.underlineColor) {
              return this.extended.underlineColor & 50331648;
            } else {
              return this.getFgColorMode();
            }
          }
          isUnderlineColorRGB() {
            if (this.bg & 268435456 && ~this.extended.underlineColor) {
              return (this.extended.underlineColor & 50331648) == 50331648;
            } else {
              return this.isFgRGB();
            }
          }
          isUnderlineColorPalette() {
            if (this.bg & 268435456 && ~this.extended.underlineColor) {
              return (this.extended.underlineColor & 50331648) == 16777216 || (this.extended.underlineColor & 50331648) == 33554432;
            } else {
              return this.isFgPalette();
            }
          }
          isUnderlineColorDefault() {
            if (this.bg & 268435456 && ~this.extended.underlineColor) {
              return (this.extended.underlineColor & 50331648) == 0;
            } else {
              return this.isFgDefault();
            }
          }
          getUnderlineStyle() {
            if (this.fg & 268435456) {
              if (this.bg & 268435456) {
                return this.extended.underlineStyle;
              } else {
                return 1;
              }
            } else {
              return 0;
            }
          }
          getUnderlineVariantOffset() {
            return this.extended.underlineVariantOffset;
          }
          constructor() {
            this.fg = 0;
            this.bg = 0;
            this.extended = new r();
          }
        }
        t.AttributeData = i;
        class r {
          get ext() {
            if (this._urlId) {
              return this._ext & -469762049 | this.underlineStyle << 26;
            } else {
              return this._ext;
            }
          }
          set ext(e) {
            this._ext = e;
          }
          get underlineStyle() {
            if (this._urlId) {
              return 5;
            } else {
              return (this._ext & 469762048) >> 26;
            }
          }
          set underlineStyle(e) {
            this._ext &= -469762049;
            this._ext |= e << 26 & 469762048;
          }
          get underlineColor() {
            return this._ext & 67108863;
          }
          set underlineColor(e) {
            this._ext &= -67108864;
            this._ext |= e & 67108863;
          }
          get urlId() {
            return this._urlId;
          }
          set urlId(e) {
            this._urlId = e;
          }
          get underlineVariantOffset() {
            let e = (this._ext & -536870912) >> 29;
            if (e < 0) {
              return e ^ -8;
            } else {
              return e;
            }
          }
          set underlineVariantOffset(e) {
            this._ext &= 536870911;
            this._ext |= e << 29 & -536870912;
          }
          clone() {
            return new r(this._ext, this._urlId);
          }
          isEmpty() {
            return this.underlineStyle === 0 && this._urlId === 0;
          }
          constructor(e = 0, t = 0) {
            this._ext = 0;
            this._urlId = 0;
            this._ext = e;
            this._urlId = t;
          }
        }
        t.ExtendedAttrs = r;
      },
      9092: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.Buffer = t.MAX_BUFFER_SIZE = undefined;
        let r = i(6349);
        let s = i(7226);
        let n = i(3734);
        let o = i(8437);
        let a = i(4634);
        let h = i(511);
        let l = i(643);
        let c = i(4863);
        let d = i(7116);
        t.MAX_BUFFER_SIZE = 4294967295;
        t.Buffer = class {
          getNullCell(e) {
            if (e) {
              this._nullCell.fg = e.fg;
              this._nullCell.bg = e.bg;
              this._nullCell.extended = e.extended;
            } else {
              this._nullCell.fg = 0;
              this._nullCell.bg = 0;
              this._nullCell.extended = new n.ExtendedAttrs();
            }
            return this._nullCell;
          }
          getWhitespaceCell(e) {
            if (e) {
              this._whitespaceCell.fg = e.fg;
              this._whitespaceCell.bg = e.bg;
              this._whitespaceCell.extended = e.extended;
            } else {
              this._whitespaceCell.fg = 0;
              this._whitespaceCell.bg = 0;
              this._whitespaceCell.extended = new n.ExtendedAttrs();
            }
            return this._whitespaceCell;
          }
          getBlankLine(e, t) {
            return new o.BufferLine(this._bufferService.cols, this.getNullCell(e), t);
          }
          get hasScrollback() {
            return this._hasScrollback && this.lines.maxLength > this._rows;
          }
          get isCursorInViewport() {
            let e = this.ybase + this.y - this.ydisp;
            return e >= 0 && e < this._rows;
          }
          _getCorrectBufferLength(e) {
            if (!this._hasScrollback) {
              return e;
            }
            let i = e + this._optionsService.rawOptions.scrollback;
            if (i > t.MAX_BUFFER_SIZE) {
              return t.MAX_BUFFER_SIZE;
            } else {
              return i;
            }
          }
          fillViewportRows(e) {
            if (this.lines.length === 0) {
              if (e === undefined) {
                e = o.DEFAULT_ATTR_DATA;
              }
              let t = this._rows;
              while (t--) {
                this.lines.push(this.getBlankLine(e));
              }
            }
          }
          clear() {
            this.ydisp = 0;
            this.ybase = 0;
            this.y = 0;
            this.x = 0;
            this.lines = new r.CircularList(this._getCorrectBufferLength(this._rows));
            this.scrollTop = 0;
            this.scrollBottom = this._rows - 1;
            this.setupTabStops();
          }
          resize(e, t) {
            let i = this.getNullCell(o.DEFAULT_ATTR_DATA);
            let r = 0;
            let s = this._getCorrectBufferLength(t);
            if (s > this.lines.maxLength) {
              this.lines.maxLength = s;
            }
            if (this.lines.length > 0) {
              if (this._cols < e) {
                for (let t = 0; t < this.lines.length; t++) {
                  r += +this.lines.get(t).resize(e, i);
                }
              }
              let n = 0;
              if (this._rows < t) {
                for (let r = this._rows; r < t; r++) {
                  if (this.lines.length < t + this.ybase) {
                    if (this._optionsService.rawOptions.windowsMode || this._optionsService.rawOptions.windowsPty.backend !== undefined || this._optionsService.rawOptions.windowsPty.buildNumber !== undefined) {
                      this.lines.push(new o.BufferLine(e, i));
                    } else if (this.ybase > 0 && this.lines.length <= this.ybase + this.y + n + 1) {
                      this.ybase--;
                      n++;
                      if (this.ydisp > 0) {
                        this.ydisp--;
                      }
                    } else {
                      this.lines.push(new o.BufferLine(e, i));
                    }
                  }
                }
              } else {
                for (let e = this._rows; e > t; e--) {
                  if (this.lines.length > t + this.ybase) {
                    if (this.lines.length > this.ybase + this.y + 1) {
                      this.lines.pop();
                    } else {
                      this.ybase++;
                      this.ydisp++;
                    }
                  }
                }
              }
              if (s < this.lines.maxLength) {
                let e = this.lines.length - s;
                if (e > 0) {
                  this.lines.trimStart(e);
                  this.ybase = Math.max(this.ybase - e, 0);
                  this.ydisp = Math.max(this.ydisp - e, 0);
                  this.savedY = Math.max(this.savedY - e, 0);
                }
                this.lines.maxLength = s;
              }
              this.x = Math.min(this.x, e - 1);
              this.y = Math.min(this.y, t - 1);
              if (n) {
                this.y += n;
              }
              this.savedX = Math.min(this.savedX, e - 1);
              this.scrollTop = 0;
            }
            this.scrollBottom = t - 1;
            if (this._isReflowEnabled && (this._reflow(e, t), this._cols > e)) {
              for (let t = 0; t < this.lines.length; t++) {
                r += +this.lines.get(t).resize(e, i);
              }
            }
            this._cols = e;
            this._rows = t;
            this._memoryCleanupQueue.clear();
            if (r > this.lines.length * 0.1) {
              this._memoryCleanupPosition = 0;
              this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup());
            }
          }
          _batchedMemoryCleanup() {
            let e = true;
            if (this._memoryCleanupPosition >= this.lines.length) {
              this._memoryCleanupPosition = 0;
              e = false;
            }
            let t = 0;
            while (this._memoryCleanupPosition < this.lines.length) {
              if ((t += this.lines.get(this._memoryCleanupPosition++).cleanupMemory()) > 100) {
                return true;
              }
            }
            return e;
          }
          get _isReflowEnabled() {
            let e = this._optionsService.rawOptions.windowsPty;
            if (e && e.buildNumber) {
              return this._hasScrollback && e.backend === "conpty" && e.buildNumber >= 21376;
            } else {
              return this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
            }
          }
          _reflow(e, t) {
            if (this._cols !== e) {
              if (e > this._cols) {
                this._reflowLarger(e, t);
              } else {
                this._reflowSmaller(e, t);
              }
            }
          }
          _reflowLarger(e, t) {
            let i = a.reflowLargerGetLinesToRemove(this.lines, this._cols, e, this.ybase + this.y, this.getNullCell(o.DEFAULT_ATTR_DATA));
            if (i.length > 0) {
              let r = a.reflowLargerCreateNewLayout(this.lines, i);
              a.reflowLargerApplyNewLayout(this.lines, r.layout);
              this._reflowLargerAdjustViewport(e, t, r.countRemoved);
            }
          }
          _reflowLargerAdjustViewport(e, t, i) {
            let r = this.getNullCell(o.DEFAULT_ATTR_DATA);
            let s = i;
            while (s-- > 0) {
              if (this.ybase === 0) {
                if (this.y > 0) {
                  this.y--;
                }
                if (this.lines.length < t) {
                  this.lines.push(new o.BufferLine(e, r));
                }
              } else {
                if (this.ydisp === this.ybase) {
                  this.ydisp--;
                }
                this.ybase--;
              }
            }
            this.savedY = Math.max(this.savedY - i, 0);
          }
          _reflowSmaller(e, t) {
            let i = this.getNullCell(o.DEFAULT_ATTR_DATA);
            let r = [];
            let s = 0;
            for (let n = this.lines.length - 1; n >= 0; n--) {
              let h;
              let l = this.lines.get(n);
              if (!l || !l.isWrapped && l.getTrimmedLength() <= e) {
                continue;
              }
              let c = [l];
              while (l.isWrapped && n > 0) {
                l = this.lines.get(--n);
                c.unshift(l);
              }
              let d = this.ybase + this.y;
              if (d >= n && d < n + c.length) {
                continue;
              }
              let _ = c[c.length - 1].getTrimmedLength();
              let u = a.reflowSmallerGetNewLineLengths(c, this._cols, e);
              let f = u.length - c.length;
              h = this.ybase === 0 && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + f) : Math.max(0, this.lines.length - this.lines.maxLength + f);
              let v = [];
              for (let e = 0; e < f; e++) {
                let e = this.getBlankLine(o.DEFAULT_ATTR_DATA, true);
                v.push(e);
              }
              if (v.length > 0) {
                r.push({
                  start: n + c.length + s,
                  newLines: v
                });
                s += v.length;
              }
              c.push(...v);
              let p = u.length - 1;
              let g = u[p];
              if (g === 0) {
                g = u[--p];
              }
              let m = c.length - f - 1;
              let S = _;
              while (m >= 0) {
                let e = Math.min(S, g);
                if (c[p] === undefined) {
                  break;
                }
                c[p].copyCellsFrom(c[m], S - e, g - e, e, true);
                if ((g -= e) == 0) {
                  g = u[--p];
                }
                if ((S -= e) == 0) {
                  let e = Math.max(--m, 0);
                  S = a.getWrappedLineTrimmedLength(c, e, this._cols);
                }
              }
              for (let t = 0; t < c.length; t++) {
                if (u[t] < e) {
                  c[t].setCell(u[t], i);
                }
              }
              let C = f - h;
              while (C-- > 0) {
                if (this.ybase === 0) {
                  if (this.y < t - 1) {
                    this.y++;
                    this.lines.pop();
                  } else {
                    this.ybase++;
                    this.ydisp++;
                  }
                } else if (this.ybase < Math.min(this.lines.maxLength, this.lines.length + s) - t) {
                  if (this.ybase === this.ydisp) {
                    this.ydisp++;
                  }
                  this.ybase++;
                }
              }
              this.savedY = Math.min(this.savedY + f, this.ybase + t - 1);
            }
            if (r.length > 0) {
              let e = [];
              let t = [];
              for (let e = 0; e < this.lines.length; e++) {
                t.push(this.lines.get(e));
              }
              let i = this.lines.length;
              let n = i - 1;
              let o = 0;
              let a = r[0];
              this.lines.length = Math.min(this.lines.maxLength, this.lines.length + s);
              let h = 0;
              for (let l = Math.min(this.lines.maxLength - 1, i + s - 1); l >= 0; l--) {
                if (a && a.start > n + h) {
                  for (let e = a.newLines.length - 1; e >= 0; e--) {
                    this.lines.set(l--, a.newLines[e]);
                  }
                  l++;
                  e.push({
                    index: n + 1,
                    amount: a.newLines.length
                  });
                  h += a.newLines.length;
                  a = r[++o];
                } else {
                  this.lines.set(l, t[n--]);
                }
              }
              let l = 0;
              for (let t = e.length - 1; t >= 0; t--) {
                e[t].index += l;
                this.lines.onInsertEmitter.fire(e[t]);
                l += e[t].amount;
              }
              let c = Math.max(0, i + s - this.lines.maxLength);
              if (c > 0) {
                this.lines.onTrimEmitter.fire(c);
              }
            }
          }
          translateBufferLineToString(e, t, i = 0, r) {
            let s = this.lines.get(e);
            if (s) {
              return s.translateToString(t, i, r);
            } else {
              return "";
            }
          }
          getWrappedRangeForLine(e) {
            let t = e;
            let i = e;
            while (t > 0 && this.lines.get(t).isWrapped) {
              t--;
            }
            while (i + 1 < this.lines.length && this.lines.get(i + 1).isWrapped) {
              i++;
            }
            return {
              first: t,
              last: i
            };
          }
          setupTabStops(e) {
            for (e != null ? this.tabs[e] || (e = this.prevStop(e)) : (this.tabs = {}, e = 0); e < this._cols; e += this._optionsService.rawOptions.tabStopWidth) {
              this.tabs[e] = true;
            }
          }
          prevStop(e) {
            for (e == null && (e = this.x); !this.tabs[--e] && e > 0;);
            if (e >= this._cols) {
              return this._cols - 1;
            } else if (e < 0) {
              return 0;
            } else {
              return e;
            }
          }
          nextStop(e) {
            for (e == null && (e = this.x); !this.tabs[++e] && e < this._cols;);
            if (e >= this._cols) {
              return this._cols - 1;
            } else if (e < 0) {
              return 0;
            } else {
              return e;
            }
          }
          clearMarkers(e) {
            this._isClearing = true;
            for (let t = 0; t < this.markers.length; t++) {
              if (this.markers[t].line === e) {
                this.markers[t].dispose();
                this.markers.splice(t--, 1);
              }
            }
            this._isClearing = false;
          }
          clearAllMarkers() {
            this._isClearing = true;
            for (let e = 0; e < this.markers.length; e++) {
              this.markers[e].dispose();
              this.markers.splice(e--, 1);
            }
            this._isClearing = false;
          }
          addMarker(e) {
            let t = new c.Marker(e);
            this.markers.push(t);
            t.register(this.lines.onTrim(e => {
              t.line -= e;
              if (t.line < 0) {
                t.dispose();
              }
            }));
            t.register(this.lines.onInsert(e => {
              if (t.line >= e.index) {
                t.line += e.amount;
              }
            }));
            t.register(this.lines.onDelete(e => {
              if (t.line >= e.index && t.line < e.index + e.amount) {
                t.dispose();
              }
              if (t.line > e.index) {
                t.line -= e.amount;
              }
            }));
            t.register(t.onDispose(() => this._removeMarker(t)));
            return t;
          }
          _removeMarker(e) {
            if (!this._isClearing) {
              this.markers.splice(this.markers.indexOf(e), 1);
            }
          }
          constructor(e, t, i) {
            this._hasScrollback = e;
            this._optionsService = t;
            this._bufferService = i;
            this.ydisp = 0;
            this.ybase = 0;
            this.y = 0;
            this.x = 0;
            this.tabs = {};
            this.savedY = 0;
            this.savedX = 0;
            this.savedCurAttrData = o.DEFAULT_ATTR_DATA.clone();
            this.savedCharset = d.DEFAULT_CHARSET;
            this.markers = [];
            this._nullCell = h.CellData.fromCharData([0, l.NULL_CELL_CHAR, l.NULL_CELL_WIDTH, l.NULL_CELL_CODE]);
            this._whitespaceCell = h.CellData.fromCharData([0, l.WHITESPACE_CELL_CHAR, l.WHITESPACE_CELL_WIDTH, l.WHITESPACE_CELL_CODE]);
            this._isClearing = false;
            this._memoryCleanupQueue = new s.IdleTaskQueue();
            this._memoryCleanupPosition = 0;
            this._cols = this._bufferService.cols;
            this._rows = this._bufferService.rows;
            this.lines = new r.CircularList(this._getCorrectBufferLength(this._rows));
            this.scrollTop = 0;
            this.scrollBottom = this._rows - 1;
            this.setupTabStops();
          }
        };
      },
      8437: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.BufferLine = t.DEFAULT_ATTR_DATA = undefined;
        let r = i(3734);
        let s = i(511);
        let n = i(643);
        let o = i(482);
        t.DEFAULT_ATTR_DATA = Object.freeze(new r.AttributeData());
        let a = 0;
        class h {
          get(e) {
            let t = this._data[e * 3 + 0];
            let i = t & 2097151;
            return [this._data[e * 3 + 1], t & 2097152 ? this._combined[e] : i ? o.stringFromCodePoint(i) : "", t >> 22, t & 2097152 ? this._combined[e].charCodeAt(this._combined[e].length - 1) : i];
          }
          set(e, t) {
            this._data[e * 3 + 1] = t[n.CHAR_DATA_ATTR_INDEX];
            if (t[n.CHAR_DATA_CHAR_INDEX].length > 1) {
              this._combined[e] = t[1];
              this._data[e * 3 + 0] = e | 2097152 | t[n.CHAR_DATA_WIDTH_INDEX] << 22;
            } else {
              this._data[e * 3 + 0] = t[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t[n.CHAR_DATA_WIDTH_INDEX] << 22;
            }
          }
          getWidth(e) {
            return this._data[e * 3 + 0] >> 22;
          }
          hasWidth(e) {
            return this._data[e * 3 + 0] & 12582912;
          }
          getFg(e) {
            return this._data[e * 3 + 1];
          }
          getBg(e) {
            return this._data[e * 3 + 2];
          }
          hasContent(e) {
            return this._data[e * 3 + 0] & 4194303;
          }
          getCodePoint(e) {
            let t = this._data[e * 3 + 0];
            if (t & 2097152) {
              return this._combined[e].charCodeAt(this._combined[e].length - 1);
            } else {
              return t & 2097151;
            }
          }
          isCombined(e) {
            return this._data[e * 3 + 0] & 2097152;
          }
          getString(e) {
            let t = this._data[e * 3 + 0];
            if (t & 2097152) {
              return this._combined[e];
            } else if (t & 2097151) {
              return o.stringFromCodePoint(t & 2097151);
            } else {
              return "";
            }
          }
          isProtected(e) {
            return this._data[e * 3 + 2] & 536870912;
          }
          loadCell(e, t) {
            a = e * 3;
            t.content = this._data[a + 0];
            t.fg = this._data[a + 1];
            t.bg = this._data[a + 2];
            if (t.content & 2097152) {
              t.combinedData = this._combined[e];
            }
            if (t.bg & 268435456) {
              t.extended = this._extendedAttrs[e];
            }
            return t;
          }
          setCell(e, t) {
            if (t.content & 2097152) {
              this._combined[e] = t.combinedData;
            }
            if (t.bg & 268435456) {
              this._extendedAttrs[e] = t.extended;
            }
            this._data[e * 3 + 0] = t.content;
            this._data[e * 3 + 1] = t.fg;
            this._data[e * 3 + 2] = t.bg;
          }
          setCellFromCodepoint(e, t, i, r) {
            if (r.bg & 268435456) {
              this._extendedAttrs[e] = r.extended;
            }
            this._data[e * 3 + 0] = t | i << 22;
            this._data[e * 3 + 1] = r.fg;
            this._data[e * 3 + 2] = r.bg;
          }
          addCodepointToCell(e, t, i) {
            let r = this._data[e * 3 + 0];
            if (r & 2097152) {
              this._combined[e] += o.stringFromCodePoint(t);
            } else if (r & 2097151) {
              this._combined[e] = o.stringFromCodePoint(r & 2097151) + o.stringFromCodePoint(t);
              r &= -2097152;
              r |= 2097152;
            } else {
              r = t | 4194304;
            }
            if (i) {
              r &= -12582913;
              r |= i << 22;
            }
            this._data[e * 3 + 0] = r;
          }
          insertCells(e, t, i) {
            if ((e %= this.length) && this.getWidth(e - 1) === 2) {
              this.setCellFromCodepoint(e - 1, 0, 1, i);
            }
            if (t < this.length - e) {
              let r = new s.CellData();
              for (let i = this.length - e - t - 1; i >= 0; --i) {
                this.setCell(e + t + i, this.loadCell(e + i, r));
              }
              for (let r = 0; r < t; ++r) {
                this.setCell(e + r, i);
              }
            } else {
              for (let t = e; t < this.length; ++t) {
                this.setCell(t, i);
              }
            }
            if (this.getWidth(this.length - 1) === 2) {
              this.setCellFromCodepoint(this.length - 1, 0, 1, i);
            }
          }
          deleteCells(e, t, i) {
            e %= this.length;
            if (t < this.length - e) {
              let r = new s.CellData();
              for (let i = 0; i < this.length - e - t; ++i) {
                this.setCell(e + i, this.loadCell(e + t + i, r));
              }
              for (let e = this.length - t; e < this.length; ++e) {
                this.setCell(e, i);
              }
            } else {
              for (let t = e; t < this.length; ++t) {
                this.setCell(t, i);
              }
            }
            if (e && this.getWidth(e - 1) === 2) {
              this.setCellFromCodepoint(e - 1, 0, 1, i);
            }
            if (this.getWidth(e) === 0 && !this.hasContent(e)) {
              this.setCellFromCodepoint(e, 0, 1, i);
            }
          }
          replaceCells(e, t, i, r = false) {
            if (r) {
              if (e && this.getWidth(e - 1) === 2 && !this.isProtected(e - 1)) {
                this.setCellFromCodepoint(e - 1, 0, 1, i);
              }
              if (t < this.length && this.getWidth(t - 1) === 2 && !this.isProtected(t)) {
                this.setCellFromCodepoint(t, 0, 1, i);
              }
              while (e < t && e < this.length) {
                if (!this.isProtected(e)) {
                  this.setCell(e, i);
                }
                e++;
              }
            } else {
              if (e && this.getWidth(e - 1) === 2) {
                this.setCellFromCodepoint(e - 1, 0, 1, i);
              }
              if (t < this.length && this.getWidth(t - 1) === 2) {
                this.setCellFromCodepoint(t, 0, 1, i);
              }
              while (e < t && e < this.length) {
                this.setCell(e++, i);
              }
            }
          }
          resize(e, t) {
            if (e === this.length) {
              return this._data.length * 4 * 2 < this._data.buffer.byteLength;
            }
            let i = e * 3;
            if (e > this.length) {
              if (this._data.buffer.byteLength >= i * 4) {
                this._data = new Uint32Array(this._data.buffer, 0, i);
              } else {
                let e = new Uint32Array(i);
                e.set(this._data);
                this._data = e;
              }
              for (let i = this.length; i < e; ++i) {
                this.setCell(i, t);
              }
            } else {
              this._data = this._data.subarray(0, i);
              let t = Object.keys(this._combined);
              for (let i = 0; i < t.length; i++) {
                let r = parseInt(t[i], 10);
                if (r >= e) {
                  delete this._combined[r];
                }
              }
              let r = Object.keys(this._extendedAttrs);
              for (let t = 0; t < r.length; t++) {
                let i = parseInt(r[t], 10);
                if (i >= e) {
                  delete this._extendedAttrs[i];
                }
              }
            }
            this.length = e;
            return i * 4 * 2 < this._data.buffer.byteLength;
          }
          cleanupMemory() {
            if (this._data.length * 4 * 2 < this._data.buffer.byteLength) {
              let e = new Uint32Array(this._data.length);
              e.set(this._data);
              this._data = e;
              return 1;
            }
            return 0;
          }
          fill(e, t = false) {
            if (t) {
              for (let t = 0; t < this.length; ++t) {
                if (!this.isProtected(t)) {
                  this.setCell(t, e);
                }
              }
            } else {
              this._combined = {};
              this._extendedAttrs = {};
              for (let t = 0; t < this.length; ++t) {
                this.setCell(t, e);
              }
            }
          }
          copyFrom(e) {
            if (this.length !== e.length) {
              this._data = new Uint32Array(e._data);
            } else {
              this._data.set(e._data);
            }
            this.length = e.length;
            this._combined = {};
            for (let t in e._combined) {
              this._combined[t] = e._combined[t];
            }
            this._extendedAttrs = {};
            for (let t in e._extendedAttrs) {
              this._extendedAttrs[t] = e._extendedAttrs[t];
            }
            this.isWrapped = e.isWrapped;
          }
          clone() {
            let e = new h(0);
            e._data = new Uint32Array(this._data);
            e.length = this.length;
            for (let t in this._combined) {
              e._combined[t] = this._combined[t];
            }
            for (let t in this._extendedAttrs) {
              e._extendedAttrs[t] = this._extendedAttrs[t];
            }
            e.isWrapped = this.isWrapped;
            return e;
          }
          getTrimmedLength() {
            for (let e = this.length - 1; e >= 0; --e) {
              if (this._data[e * 3 + 0] & 4194303) {
                return e + (this._data[e * 3 + 0] >> 22);
              }
            }
            return 0;
          }
          getNoBgTrimmedLength() {
            for (let e = this.length - 1; e >= 0; --e) {
              if (this._data[e * 3 + 0] & 4194303 || this._data[e * 3 + 2] & 50331648) {
                return e + (this._data[e * 3 + 0] >> 22);
              }
            }
            return 0;
          }
          copyCellsFrom(e, t, i, r, s) {
            let n = e._data;
            if (s) {
              for (let s = r - 1; s >= 0; s--) {
                for (let e = 0; e < 3; e++) {
                  this._data[(i + s) * 3 + e] = n[(t + s) * 3 + e];
                }
                if (n[(t + s) * 3 + 2] & 268435456) {
                  this._extendedAttrs[i + s] = e._extendedAttrs[t + s];
                }
              }
            } else {
              for (let s = 0; s < r; s++) {
                for (let e = 0; e < 3; e++) {
                  this._data[(i + s) * 3 + e] = n[(t + s) * 3 + e];
                }
                if (n[(t + s) * 3 + 2] & 268435456) {
                  this._extendedAttrs[i + s] = e._extendedAttrs[t + s];
                }
              }
            }
            let o = Object.keys(e._combined);
            for (let r = 0; r < o.length; r++) {
              let s = parseInt(o[r], 10);
              if (s >= t) {
                this._combined[s - t + i] = e._combined[s];
              }
            }
          }
          translateToString(e, t, i, r) {
            t = t ?? 0;
            i = i ?? this.length;
            if (e) {
              i = Math.min(i, this.getTrimmedLength());
            }
            if (r) {
              r.length = 0;
            }
            let s = "";
            while (t < i) {
              let e = this._data[t * 3 + 0];
              let i = e & 2097151;
              let a = e & 2097152 ? this._combined[t] : i ? o.stringFromCodePoint(i) : n.WHITESPACE_CELL_CHAR;
              s += a;
              if (r) {
                for (let e = 0; e < a.length; ++e) {
                  r.push(t);
                }
              }
              t += e >> 22 || 1;
            }
            if (r) {
              r.push(t);
            }
            return s;
          }
          constructor(e, t, i = false) {
            this.isWrapped = i;
            this._combined = {};
            this._extendedAttrs = {};
            this._data = new Uint32Array(e * 3);
            let r = t || s.CellData.fromCharData([0, n.NULL_CELL_CHAR, n.NULL_CELL_WIDTH, n.NULL_CELL_CODE]);
            for (let t = 0; t < e; ++t) {
              this.setCell(t, r);
            }
            this.length = e;
          }
        }
        t.BufferLine = h;
      },
      4841: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.getRangeLength = undefined;
        t.getRangeLength = function (e, t) {
          if (e.start.y > e.end.y) {
            throw Error(`Buffer range end (${e.end.x}, ${e.end.y}) cannot be before start (${e.start.x}, ${e.start.y})`);
          }
          return t * (e.end.y - e.start.y) + (e.end.x - e.start.x + 1);
        };
      },
      4634: (e, t) => {
        function i(e, t, i) {
          if (t === e.length - 1) {
            return e[t].getTrimmedLength();
          }
          let r = !e[t].hasContent(i - 1) && e[t].getWidth(i - 1) === 1;
          let s = e[t + 1].getWidth(0) === 2;
          if (r && s) {
            return i - 1;
          } else {
            return i;
          }
        }
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.getWrappedLineTrimmedLength = t.reflowSmallerGetNewLineLengths = t.reflowLargerApplyNewLayout = t.reflowLargerCreateNewLayout = t.reflowLargerGetLinesToRemove = undefined;
        t.reflowLargerGetLinesToRemove = function (e, t, r, s, n) {
          let o = [];
          for (let a = 0; a < e.length - 1; a++) {
            let h = a;
            let l = e.get(++h);
            if (!l.isWrapped) {
              continue;
            }
            let c = [e.get(a)];
            while (h < e.length && l.isWrapped) {
              c.push(l);
              l = e.get(++h);
            }
            if (s >= a && s < h) {
              a += c.length - 1;
              continue;
            }
            let d = 0;
            let _ = i(c, 0, t);
            let u = 1;
            let f = 0;
            while (u < c.length) {
              let e = i(c, u, t);
              let s = Math.min(e - f, r - _);
              c[d].copyCellsFrom(c[u], f, _, s, false);
              if ((_ += s) === r) {
                d++;
                _ = 0;
              }
              if ((f += s) === e) {
                u++;
                f = 0;
              }
              if (_ === 0 && d !== 0 && c[d - 1].getWidth(r - 1) === 2) {
                c[d].copyCellsFrom(c[d - 1], r - 1, _++, 1, false);
                c[d - 1].setCell(r - 1, n);
              }
            }
            c[d].replaceCells(_, r, n);
            let v = 0;
            for (let e = c.length - 1; e > 0 && (e > d || c[e].getTrimmedLength() === 0); e--) {
              v++;
            }
            if (v > 0) {
              o.push(a + c.length - v);
              o.push(v);
            }
            a += c.length - 1;
          }
          return o;
        };
        t.reflowLargerCreateNewLayout = function (e, t) {
          let i = [];
          let r = 0;
          let s = t[0];
          let n = 0;
          for (let o = 0; o < e.length; o++) {
            if (s === o) {
              let i = t[++r];
              e.onDeleteEmitter.fire({
                index: o - n,
                amount: i
              });
              o += i - 1;
              n += i;
              s = t[++r];
            } else {
              i.push(o);
            }
          }
          return {
            layout: i,
            countRemoved: n
          };
        };
        t.reflowLargerApplyNewLayout = function (e, t) {
          let i = [];
          for (let r = 0; r < t.length; r++) {
            i.push(e.get(t[r]));
          }
          for (let t = 0; t < i.length; t++) {
            e.set(t, i[t]);
          }
          e.length = t.length;
        };
        t.reflowSmallerGetNewLineLengths = function (e, t, r) {
          let s = [];
          let n = e.map((r, s) => i(e, s, t)).reduce((e, t) => e + t);
          let o = 0;
          let a = 0;
          let h = 0;
          while (h < n) {
            if (n - h < r) {
              s.push(n - h);
              break;
            }
            o += r;
            let l = i(e, a, t);
            if (o > l) {
              o -= l;
              a++;
            }
            let c = e[a].getWidth(o - 1) === 2;
            if (c) {
              o--;
            }
            let d = c ? r - 1 : r;
            s.push(d);
            h += d;
          }
          return s;
        };
        t.getWrappedLineTrimmedLength = i;
      },
      5295: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.BufferSet = undefined;
        let r = i(8460);
        let s = i(844);
        let n = i(9092);
        class o extends s.Disposable {
          reset() {
            this._normal = new n.Buffer(true, this._optionsService, this._bufferService);
            this._normal.fillViewportRows();
            this._alt = new n.Buffer(false, this._optionsService, this._bufferService);
            this._activeBuffer = this._normal;
            this._onBufferActivate.fire({
              activeBuffer: this._normal,
              inactiveBuffer: this._alt
            });
            this.setupTabStops();
          }
          get alt() {
            return this._alt;
          }
          get active() {
            return this._activeBuffer;
          }
          get normal() {
            return this._normal;
          }
          activateNormalBuffer() {
            if (this._activeBuffer !== this._normal) {
              this._normal.x = this._alt.x;
              this._normal.y = this._alt.y;
              this._alt.clearAllMarkers();
              this._alt.clear();
              this._activeBuffer = this._normal;
              this._onBufferActivate.fire({
                activeBuffer: this._normal,
                inactiveBuffer: this._alt
              });
            }
          }
          activateAltBuffer(e) {
            if (this._activeBuffer !== this._alt) {
              this._alt.fillViewportRows(e);
              this._alt.x = this._normal.x;
              this._alt.y = this._normal.y;
              this._activeBuffer = this._alt;
              this._onBufferActivate.fire({
                activeBuffer: this._alt,
                inactiveBuffer: this._normal
              });
            }
          }
          resize(e, t) {
            this._normal.resize(e, t);
            this._alt.resize(e, t);
            this.setupTabStops(e);
          }
          setupTabStops(e) {
            this._normal.setupTabStops(e);
            this._alt.setupTabStops(e);
          }
          constructor(e, t) {
            super();
            this._optionsService = e;
            this._bufferService = t;
            this._onBufferActivate = this.register(new r.EventEmitter());
            this.onBufferActivate = this._onBufferActivate.event;
            this.reset();
            this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.resize(this._bufferService.cols, this._bufferService.rows)));
            this.register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops()));
          }
        }
        t.BufferSet = o;
      },
      511: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.CellData = undefined;
        let r = i(482);
        let s = i(643);
        let n = i(3734);
        class o extends n.AttributeData {
          static fromCharData(e) {
            let t = new o();
            t.setFromCharData(e);
            return t;
          }
          isCombined() {
            return this.content & 2097152;
          }
          getWidth() {
            return this.content >> 22;
          }
          getChars() {
            if (this.content & 2097152) {
              return this.combinedData;
            } else if (this.content & 2097151) {
              return r.stringFromCodePoint(this.content & 2097151);
            } else {
              return "";
            }
          }
          getCode() {
            if (this.isCombined()) {
              return this.combinedData.charCodeAt(this.combinedData.length - 1);
            } else {
              return this.content & 2097151;
            }
          }
          setFromCharData(e) {
            this.fg = e[s.CHAR_DATA_ATTR_INDEX];
            this.bg = 0;
            let t = false;
            if (e[s.CHAR_DATA_CHAR_INDEX].length > 2) {
              t = true;
            } else if (e[s.CHAR_DATA_CHAR_INDEX].length === 2) {
              let i = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
              if (i >= 55296 && i <= 56319) {
                let r = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                if (r >= 56320 && r <= 57343) {
                  this.content = (i - 55296) * 1024 + r - 56320 + 65536 | e[s.CHAR_DATA_WIDTH_INDEX] << 22;
                } else {
                  t = true;
                }
              } else {
                t = true;
              }
            } else {
              this.content = e[s.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e[s.CHAR_DATA_WIDTH_INDEX] << 22;
            }
            if (t) {
              this.combinedData = e[s.CHAR_DATA_CHAR_INDEX];
              this.content = e[s.CHAR_DATA_WIDTH_INDEX] << 22 | 2097152;
            }
          }
          getAsCharData() {
            return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
          }
          constructor() {
            super(...arguments);
            this.content = 0;
            this.fg = 0;
            this.bg = 0;
            this.extended = new n.ExtendedAttrs();
            this.combinedData = "";
          }
        }
        t.CellData = o;
      },
      643: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.WHITESPACE_CELL_CODE = t.WHITESPACE_CELL_WIDTH = t.WHITESPACE_CELL_CHAR = t.NULL_CELL_CODE = t.NULL_CELL_WIDTH = t.NULL_CELL_CHAR = t.CHAR_DATA_CODE_INDEX = t.CHAR_DATA_WIDTH_INDEX = t.CHAR_DATA_CHAR_INDEX = t.CHAR_DATA_ATTR_INDEX = t.DEFAULT_EXT = t.DEFAULT_ATTR = t.DEFAULT_COLOR = undefined;
        t.DEFAULT_COLOR = 0;
        t.DEFAULT_ATTR = t.DEFAULT_COLOR << 9 | 256;
        t.DEFAULT_EXT = 0;
        t.CHAR_DATA_ATTR_INDEX = 0;
        t.CHAR_DATA_CHAR_INDEX = 1;
        t.CHAR_DATA_WIDTH_INDEX = 2;
        t.CHAR_DATA_CODE_INDEX = 3;
        t.NULL_CELL_CHAR = "";
        t.NULL_CELL_WIDTH = 1;
        t.NULL_CELL_CODE = 0;
        t.WHITESPACE_CELL_CHAR = " ";
        t.WHITESPACE_CELL_WIDTH = 1;
        t.WHITESPACE_CELL_CODE = 32;
      },
      4863: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.Marker = undefined;
        let r = i(8460);
        let s = i(844);
        class n {
          get id() {
            return this._id;
          }
          dispose() {
            if (!this.isDisposed) {
              this.isDisposed = true;
              this.line = -1;
              this._onDispose.fire();
              s.disposeArray(this._disposables);
              this._disposables.length = 0;
            }
          }
          register(e) {
            this._disposables.push(e);
            return e;
          }
          constructor(e) {
            this.line = e;
            this.isDisposed = false;
            this._disposables = [];
            this._id = n._nextId++;
            this._onDispose = this.register(new r.EventEmitter());
            this.onDispose = this._onDispose.event;
          }
        }
        t.Marker = n;
        n._nextId = 1;
      },
      7116: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.DEFAULT_CHARSET = t.CHARSETS = undefined;
        t.CHARSETS = {};
        t.DEFAULT_CHARSET = t.CHARSETS.B;
        t.CHARSETS[0] = {
          "`": "◆",
          a: "▒",
          b: "␉",
          c: "␌",
          d: "␍",
          e: "␊",
          f: "°",
          g: "±",
          h: "␤",
          i: "␋",
          j: "┘",
          k: "┐",
          l: "┌",
          m: "└",
          n: "┼",
          o: "⎺",
          p: "⎻",
          q: "─",
          r: "⎼",
          s: "⎽",
          t: "├",
          u: "┤",
          v: "┴",
          w: "┬",
          x: "│",
          y: "≤",
          z: "≥",
          "{": "π",
          "|": "≠",
          "}": "£",
          "~": "·"
        };
        t.CHARSETS.A = {
          "#": "£"
        };
        t.CHARSETS.B = undefined;
        t.CHARSETS[4] = {
          "#": "£",
          "@": "¾",
          "[": "ij",
          "\\": "½",
          "]": "|",
          "{": "¨",
          "|": "f",
          "}": "¼",
          "~": "´"
        };
        t.CHARSETS.C = t.CHARSETS[5] = {
          "[": "Ä",
          "\\": "Ö",
          "]": "Å",
          "^": "Ü",
          "`": "é",
          "{": "ä",
          "|": "ö",
          "}": "å",
          "~": "ü"
        };
        t.CHARSETS.R = {
          "#": "£",
          "@": "à",
          "[": "°",
          "\\": "ç",
          "]": "§",
          "{": "é",
          "|": "ù",
          "}": "è",
          "~": "¨"
        };
        t.CHARSETS.Q = {
          "@": "à",
          "[": "â",
          "\\": "ç",
          "]": "ê",
          "^": "î",
          "`": "ô",
          "{": "é",
          "|": "ù",
          "}": "è",
          "~": "û"
        };
        t.CHARSETS.K = {
          "@": "§",
          "[": "Ä",
          "\\": "Ö",
          "]": "Ü",
          "{": "ä",
          "|": "ö",
          "}": "ü",
          "~": "ß"
        };
        t.CHARSETS.Y = {
          "#": "£",
          "@": "§",
          "[": "°",
          "\\": "ç",
          "]": "é",
          "`": "ù",
          "{": "à",
          "|": "ò",
          "}": "è",
          "~": "ì"
        };
        t.CHARSETS.E = t.CHARSETS[6] = {
          "@": "Ä",
          "[": "Æ",
          "\\": "Ø",
          "]": "Å",
          "^": "Ü",
          "`": "ä",
          "{": "æ",
          "|": "ø",
          "}": "å",
          "~": "ü"
        };
        t.CHARSETS.Z = {
          "#": "£",
          "@": "§",
          "[": "¡",
          "\\": "Ñ",
          "]": "¿",
          "{": "°",
          "|": "ñ",
          "}": "ç"
        };
        t.CHARSETS.H = t.CHARSETS[7] = {
          "@": "É",
          "[": "Ä",
          "\\": "Ö",
          "]": "Å",
          "^": "Ü",
          "`": "é",
          "{": "ä",
          "|": "ö",
          "}": "å",
          "~": "ü"
        };
        t.CHARSETS["="] = {
          "#": "ù",
          "@": "à",
          "[": "é",
          "\\": "ç",
          "]": "ê",
          "^": "î",
          _: "è",
          "`": "ô",
          "{": "ä",
          "|": "ö",
          "}": "ü",
          "~": "û"
        };
      },
      2584: (e, t) => {
        var i;
        var r;
        var s;
        var n;
        var o;
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.C1_ESCAPED = t.C1 = t.C0 = undefined;
        (n = i || (t.C0 = i = {})).NUL = "\0";
        n.SOH = "";
        n.STX = "";
        n.ETX = "";
        n.EOT = "";
        n.ENQ = "";
        n.ACK = "";
        n.BEL = "";
        n.BS = "\b";
        n.HT = "\t";
        n.LF = "\n";
        n.VT = "";
        n.FF = "\f";
        n.CR = "\r";
        n.SO = "";
        n.SI = "";
        n.DLE = "";
        n.DC1 = "";
        n.DC2 = "";
        n.DC3 = "";
        n.DC4 = "";
        n.NAK = "";
        n.SYN = "";
        n.ETB = "";
        n.CAN = "";
        n.EM = "";
        n.SUB = "";
        n.ESC = "";
        n.FS = "";
        n.GS = "";
        n.RS = "";
        n.US = "";
        n.SP = " ";
        n.DEL = "";
        (o = r || (t.C1 = r = {})).PAD = "";
        o.HOP = "";
        o.BPH = "";
        o.NBH = "";
        o.IND = "";
        o.NEL = "";
        o.SSA = "";
        o.ESA = "";
        o.HTS = "";
        o.HTJ = "";
        o.VTS = "";
        o.PLD = "";
        o.PLU = "";
        o.RI = "";
        o.SS2 = "";
        o.SS3 = "";
        o.DCS = "";
        o.PU1 = "";
        o.PU2 = "";
        o.STS = "";
        o.CCH = "";
        o.MW = "";
        o.SPA = "";
        o.EPA = "";
        o.SOS = "";
        o.SGCI = "";
        o.SCI = "";
        o.CSI = "";
        o.ST = "";
        o.OSC = "";
        o.PM = "";
        o.APC = "";
        (s || (t.C1_ESCAPED = s = {})).ST = `${i.ESC}\\`;
      },
      7399: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.evaluateKeyboardEvent = undefined;
        let r = i(2584);
        let s = {
          48: ["0", ")"],
          49: ["1", "!"],
          50: ["2", "@"],
          51: ["3", "#"],
          52: ["4", "$"],
          53: ["5", "%"],
          54: ["6", "^"],
          55: ["7", "&"],
          56: ["8", "*"],
          57: ["9", "("],
          186: [";", ":"],
          187: ["=", "+"],
          188: [",", "<"],
          189: ["-", "_"],
          190: [".", ">"],
          191: ["/", "?"],
          192: ["`", "~"],
          219: ["[", "{"],
          220: ["\\", "|"],
          221: ["]", "}"],
          222: ["'", "\""]
        };
        t.evaluateKeyboardEvent = function (e, t, i, n) {
          let o = {
            type: 0,
            cancel: false,
            key: undefined
          };
          let a = +!!e.shiftKey | !!e.altKey * 2 | !!e.ctrlKey * 4 | !!e.metaKey * 8;
          switch (e.keyCode) {
            case 0:
              if (e.key === "UIKeyInputUpArrow") {
                o.key = t ? r.C0.ESC + "OA" : r.C0.ESC + "[A";
              } else if (e.key === "UIKeyInputLeftArrow") {
                o.key = t ? r.C0.ESC + "OD" : r.C0.ESC + "[D";
              } else if (e.key === "UIKeyInputRightArrow") {
                o.key = t ? r.C0.ESC + "OC" : r.C0.ESC + "[C";
              } else if (e.key === "UIKeyInputDownArrow") {
                o.key = t ? r.C0.ESC + "OB" : r.C0.ESC + "[B";
              }
              break;
            case 8:
              o.key = e.ctrlKey ? "\b" : r.C0.DEL;
              if (e.altKey) {
                o.key = r.C0.ESC + o.key;
              }
              break;
            case 9:
              if (e.shiftKey) {
                o.key = r.C0.ESC + "[Z";
                break;
              }
              o.key = r.C0.HT;
              o.cancel = true;
              break;
            case 13:
              o.key = e.altKey ? r.C0.ESC + r.C0.CR : r.C0.CR;
              o.cancel = true;
              break;
            case 27:
              o.key = r.C0.ESC;
              if (e.altKey) {
                o.key = r.C0.ESC + r.C0.ESC;
              }
              o.cancel = true;
              break;
            case 37:
              if (e.metaKey) {
                break;
              }
              if (a) {
                o.key = r.C0.ESC + "[1;" + (a + 1) + "D";
                if (o.key === r.C0.ESC + "[1;3D") {
                  o.key = r.C0.ESC + (i ? "b" : "[1;5D");
                }
              } else {
                o.key = t ? r.C0.ESC + "OD" : r.C0.ESC + "[D";
              }
              break;
            case 39:
              if (e.metaKey) {
                break;
              }
              if (a) {
                o.key = r.C0.ESC + "[1;" + (a + 1) + "C";
                if (o.key === r.C0.ESC + "[1;3C") {
                  o.key = r.C0.ESC + (i ? "f" : "[1;5C");
                }
              } else {
                o.key = t ? r.C0.ESC + "OC" : r.C0.ESC + "[C";
              }
              break;
            case 38:
              if (e.metaKey) {
                break;
              }
              if (a) {
                o.key = r.C0.ESC + "[1;" + (a + 1) + "A";
                if (!i && o.key === r.C0.ESC + "[1;3A") {
                  o.key = r.C0.ESC + "[1;5A";
                }
              } else {
                o.key = t ? r.C0.ESC + "OA" : r.C0.ESC + "[A";
              }
              break;
            case 40:
              if (e.metaKey) {
                break;
              }
              if (a) {
                o.key = r.C0.ESC + "[1;" + (a + 1) + "B";
                if (!i && o.key === r.C0.ESC + "[1;3B") {
                  o.key = r.C0.ESC + "[1;5B";
                }
              } else {
                o.key = t ? r.C0.ESC + "OB" : r.C0.ESC + "[B";
              }
              break;
            case 45:
              if (!e.shiftKey && !e.ctrlKey) {
                o.key = r.C0.ESC + "[2~";
              }
              break;
            case 46:
              o.key = a ? r.C0.ESC + "[3;" + (a + 1) + "~" : r.C0.ESC + "[3~";
              break;
            case 36:
              o.key = a ? r.C0.ESC + "[1;" + (a + 1) + "H" : t ? r.C0.ESC + "OH" : r.C0.ESC + "[H";
              break;
            case 35:
              o.key = a ? r.C0.ESC + "[1;" + (a + 1) + "F" : t ? r.C0.ESC + "OF" : r.C0.ESC + "[F";
              break;
            case 33:
              if (e.shiftKey) {
                o.type = 2;
              } else if (e.ctrlKey) {
                o.key = r.C0.ESC + "[5;" + (a + 1) + "~";
              } else {
                o.key = r.C0.ESC + "[5~";
              }
              break;
            case 34:
              if (e.shiftKey) {
                o.type = 3;
              } else if (e.ctrlKey) {
                o.key = r.C0.ESC + "[6;" + (a + 1) + "~";
              } else {
                o.key = r.C0.ESC + "[6~";
              }
              break;
            case 112:
              o.key = a ? r.C0.ESC + "[1;" + (a + 1) + "P" : r.C0.ESC + "OP";
              break;
            case 113:
              o.key = a ? r.C0.ESC + "[1;" + (a + 1) + "Q" : r.C0.ESC + "OQ";
              break;
            case 114:
              o.key = a ? r.C0.ESC + "[1;" + (a + 1) + "R" : r.C0.ESC + "OR";
              break;
            case 115:
              o.key = a ? r.C0.ESC + "[1;" + (a + 1) + "S" : r.C0.ESC + "OS";
              break;
            case 116:
              o.key = a ? r.C0.ESC + "[15;" + (a + 1) + "~" : r.C0.ESC + "[15~";
              break;
            case 117:
              o.key = a ? r.C0.ESC + "[17;" + (a + 1) + "~" : r.C0.ESC + "[17~";
              break;
            case 118:
              o.key = a ? r.C0.ESC + "[18;" + (a + 1) + "~" : r.C0.ESC + "[18~";
              break;
            case 119:
              o.key = a ? r.C0.ESC + "[19;" + (a + 1) + "~" : r.C0.ESC + "[19~";
              break;
            case 120:
              o.key = a ? r.C0.ESC + "[20;" + (a + 1) + "~" : r.C0.ESC + "[20~";
              break;
            case 121:
              o.key = a ? r.C0.ESC + "[21;" + (a + 1) + "~" : r.C0.ESC + "[21~";
              break;
            case 122:
              o.key = a ? r.C0.ESC + "[23;" + (a + 1) + "~" : r.C0.ESC + "[23~";
              break;
            case 123:
              o.key = a ? r.C0.ESC + "[24;" + (a + 1) + "~" : r.C0.ESC + "[24~";
              break;
            default:
              if (!e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
                if (i && !n || !e.altKey || e.metaKey) {
                  if (!i || e.altKey || e.ctrlKey || e.shiftKey || !e.metaKey) {
                    if (!e.key || e.ctrlKey || e.altKey || e.metaKey || !(e.keyCode >= 48) || e.key.length !== 1) {
                      if (e.key && e.ctrlKey) {
                        if (e.key === "_") {
                          o.key = r.C0.US;
                        }
                        if (e.key === "@") {
                          o.key = r.C0.NUL;
                        }
                      }
                    } else {
                      o.key = e.key;
                    }
                  } else if (e.keyCode === 65) {
                    o.type = 1;
                  }
                } else {
                  let t = s[e.keyCode];
                  let i = t == null ? undefined : t[+!!e.shiftKey];
                  if (i) {
                    o.key = r.C0.ESC + i;
                  } else if (e.keyCode >= 65 && e.keyCode <= 90) {
                    let t = String.fromCharCode(e.ctrlKey ? e.keyCode - 64 : e.keyCode + 32);
                    if (e.shiftKey) {
                      t = t.toUpperCase();
                    }
                    o.key = r.C0.ESC + t;
                  } else if (e.keyCode === 32) {
                    o.key = r.C0.ESC + (e.ctrlKey ? r.C0.NUL : " ");
                  } else if (e.key === "Dead" && e.code.startsWith("Key")) {
                    let t = e.code.slice(3, 4);
                    if (!e.shiftKey) {
                      t = t.toLowerCase();
                    }
                    o.key = r.C0.ESC + t;
                    o.cancel = true;
                  }
                }
              } else if (e.keyCode >= 65 && e.keyCode <= 90) {
                o.key = String.fromCharCode(e.keyCode - 64);
              } else if (e.keyCode === 32) {
                o.key = r.C0.NUL;
              } else if (e.keyCode >= 51 && e.keyCode <= 55) {
                o.key = String.fromCharCode(e.keyCode - 51 + 27);
              } else if (e.keyCode === 56) {
                o.key = r.C0.DEL;
              } else if (e.keyCode === 219) {
                o.key = r.C0.ESC;
              } else if (e.keyCode === 220) {
                o.key = r.C0.FS;
              } else if (e.keyCode === 221) {
                o.key = r.C0.GS;
              }
          }
          return o;
        };
      },
      482: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.Utf8ToUtf32 = t.StringToUtf32 = t.utf32ToString = t.stringFromCodePoint = undefined;
        t.stringFromCodePoint = function (e) {
          if (e > 65535) {
            return String.fromCharCode(55296 + ((e -= 65536) >> 10)) + String.fromCharCode(e % 1024 + 56320);
          } else {
            return String.fromCharCode(e);
          }
        };
        t.utf32ToString = function (e, t = 0, i = e.length) {
          let r = "";
          for (let s = t; s < i; ++s) {
            let t = e[s];
            if (t > 65535) {
              t -= 65536;
              r += String.fromCharCode(55296 + (t >> 10)) + String.fromCharCode(t % 1024 + 56320);
            } else {
              r += String.fromCharCode(t);
            }
          }
          return r;
        };
        t.StringToUtf32 = class {
          clear() {
            this._interim = 0;
          }
          decode(e, t) {
            let i = e.length;
            if (!i) {
              return 0;
            }
            let r = 0;
            let s = 0;
            if (this._interim) {
              let i = e.charCodeAt(s++);
              if (i >= 56320 && i <= 57343) {
                t[r++] = (this._interim - 55296) * 1024 + i - 56320 + 65536;
              } else {
                t[r++] = this._interim;
                t[r++] = i;
              }
              this._interim = 0;
            }
            for (let n = s; n < i; ++n) {
              let s = e.charCodeAt(n);
              if (s >= 55296 && s <= 56319) {
                if (++n >= i) {
                  this._interim = s;
                  return r;
                }
                let o = e.charCodeAt(n);
                if (o >= 56320 && o <= 57343) {
                  t[r++] = (s - 55296) * 1024 + o - 56320 + 65536;
                } else {
                  t[r++] = s;
                  t[r++] = o;
                }
              } else if (s !== 65279) {
                t[r++] = s;
              }
            }
            return r;
          }
          constructor() {
            this._interim = 0;
          }
        };
        t.Utf8ToUtf32 = class {
          clear() {
            this.interim.fill(0);
          }
          decode(e, t) {
            let i = e.length;
            if (!i) {
              return 0;
            }
            let r;
            let s;
            let n;
            let o;
            let a = 0;
            let h = 0;
            let l = 0;
            if (this.interim[0]) {
              let r = false;
              let s = this.interim[0];
              s &= (s & 224) == 192 ? 31 : (s & 240) == 224 ? 15 : 7;
              let n;
              let o = 0;
              while ((n = this.interim[++o] & 63) && o < 4) {
                s <<= 6;
                s |= n;
              }
              let h = (this.interim[0] & 224) == 192 ? 2 : (this.interim[0] & 240) == 224 ? 3 : 4;
              let c = h - o;
              while (l < c) {
                if (l >= i) {
                  return 0;
                }
                if (((n = e[l++]) & 192) != 128) {
                  l--;
                  r = true;
                  break;
                }
                this.interim[o++] = n;
                s <<= 6;
                s |= n & 63;
              }
              if (!r) {
                if (h === 2) {
                  if (s < 128) {
                    l--;
                  } else {
                    t[a++] = s;
                  }
                } else if (h === 3) {
                  if (!(s < 2048) && (!(s >= 55296) || !(s <= 57343)) && s !== 65279) {
                    t[a++] = s;
                  }
                } else if (!(s < 65536) && !(s > 1114111)) {
                  t[a++] = s;
                }
              }
              this.interim.fill(0);
            }
            let c = i - 4;
            let d = l;
            while (d < i) {
              while (!!(d < c) && !((r = e[d]) & 128) && !((s = e[d + 1]) & 128) && !((n = e[d + 2]) & 128) && !((o = e[d + 3]) & 128)) {
                t[a++] = r;
                t[a++] = s;
                t[a++] = n;
                t[a++] = o;
                d += 4;
              }
              if ((r = e[d++]) < 128) {
                t[a++] = r;
              } else if ((r & 224) == 192) {
                if (d >= i) {
                  this.interim[0] = r;
                  return a;
                }
                if (((s = e[d++]) & 192) != 128 || (h = (r & 31) << 6 | s & 63) < 128) {
                  d--;
                  continue;
                }
                t[a++] = h;
              } else if ((r & 240) == 224) {
                if (d >= i) {
                  this.interim[0] = r;
                  return a;
                }
                if (((s = e[d++]) & 192) != 128) {
                  d--;
                  continue;
                }
                if (d >= i) {
                  this.interim[0] = r;
                  this.interim[1] = s;
                  return a;
                }
                if (((n = e[d++]) & 192) != 128) {
                  d--;
                  continue;
                }
                if ((h = (r & 15) << 12 | (s & 63) << 6 | n & 63) < 2048 || h >= 55296 && h <= 57343 || h === 65279) {
                  continue;
                }
                t[a++] = h;
              } else if ((r & 248) == 240) {
                if (d >= i) {
                  this.interim[0] = r;
                  return a;
                }
                if (((s = e[d++]) & 192) != 128) {
                  d--;
                  continue;
                }
                if (d >= i) {
                  this.interim[0] = r;
                  this.interim[1] = s;
                  return a;
                }
                if (((n = e[d++]) & 192) != 128) {
                  d--;
                  continue;
                }
                if (d >= i) {
                  this.interim[0] = r;
                  this.interim[1] = s;
                  this.interim[2] = n;
                  return a;
                }
                if (((o = e[d++]) & 192) != 128) {
                  d--;
                  continue;
                }
                if ((h = (r & 7) << 18 | (s & 63) << 12 | (n & 63) << 6 | o & 63) < 65536 || h > 1114111) {
                  continue;
                }
                t[a++] = h;
              }
            }
            return a;
          }
          constructor() {
            this.interim = new Uint8Array(3);
          }
        };
      },
      225: (e, t, i) => {
        let r;
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.UnicodeV6 = undefined;
        let s = i(1480);
        let n = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]];
        let o = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]];
        t.UnicodeV6 = class {
          wcwidth(e) {
            if (e < 32) {
              return 0;
            } else if (e < 127) {
              return 1;
            } else if (e < 65536) {
              return r[e];
            } else if (!function (e, t) {
              let i;
              let r = 0;
              let s = t.length - 1;
              if (e < t[0][0] || e > t[s][1]) {
                return false;
              }
              while (s >= r) {
                if (e > t[i = r + s >> 1][1]) {
                  r = i + 1;
                } else {
                  if (!(e < t[i][0])) {
                    return true;
                  }
                  s = i - 1;
                }
              }
              return false;
            }(e, o)) {
              if (e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141) {
                return 2;
              } else {
                return 1;
              }
            } else {
              return 0;
            }
          }
          charProperties(e, t) {
            let i = this.wcwidth(e);
            let r = i === 0 && t !== 0;
            if (r) {
              let e = s.UnicodeService.extractWidth(t);
              if (e === 0) {
                r = false;
              } else if (e > i) {
                i = e;
              }
            }
            return s.UnicodeService.createPropertyValue(0, i, r);
          }
          constructor() {
            this.version = "6";
            if (!r) {
              (r = new Uint8Array(65536)).fill(1);
              r[0] = 0;
              r.fill(0, 1, 32);
              r.fill(0, 127, 160);
              r.fill(2, 4352, 4448);
              r[9001] = 2;
              r[9002] = 2;
              r.fill(2, 11904, 42192);
              r[12351] = 1;
              r.fill(2, 44032, 55204);
              r.fill(2, 63744, 64256);
              r.fill(2, 65040, 65050);
              r.fill(2, 65072, 65136);
              r.fill(2, 65280, 65377);
              r.fill(2, 65504, 65511);
              for (let e = 0; e < n.length; ++e) {
                r.fill(0, n[e][0], n[e][1] + 1);
              }
            }
          }
        };
      },
      5981: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.WriteBuffer = undefined;
        let r = i(8460);
        let s = i(844);
        class n extends s.Disposable {
          handleUserInput() {
            this._didUserInput = true;
          }
          writeSync(e, t) {
            let i;
            if (t !== undefined && this._syncCalls > t) {
              this._syncCalls = 0;
              return;
            }
            this._pendingData += e.length;
            this._writeBuffer.push(e);
            this._callbacks.push(undefined);
            this._syncCalls++;
            if (!this._isSyncWriting) {
              for (this._isSyncWriting = true; i = this._writeBuffer.shift();) {
                this._action(i);
                let e = this._callbacks.shift();
                if (e) {
                  e();
                }
              }
              this._pendingData = 0;
              this._bufferOffset = 2147483647;
              this._isSyncWriting = false;
              this._syncCalls = 0;
            }
          }
          write(e, t) {
            if (this._pendingData > 50000000) {
              throw Error("write data discarded, use flow control to avoid losing data");
            }
            if (!this._writeBuffer.length) {
              this._bufferOffset = 0;
              if (this._didUserInput) {
                this._didUserInput = false;
                this._pendingData += e.length;
                this._writeBuffer.push(e);
                this._callbacks.push(t);
                this._innerWrite();
                return;
              }
              setTimeout(() => this._innerWrite());
            }
            this._pendingData += e.length;
            this._writeBuffer.push(e);
            this._callbacks.push(t);
          }
          _innerWrite(e = 0) {
            let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
            let i = e || Date.now();
            while (this._writeBuffer.length > this._bufferOffset) {
              let e = this._writeBuffer[this._bufferOffset];
              let r = this._action(e, t);
              if (r) {
                let e = e => Date.now() - i >= 12 ? setTimeout(() => this._innerWrite(0, e)) : this._innerWrite(i, e);
                r.catch(e => {
                  queueMicrotask(() => {
                    throw e;
                  });
                  return Promise.resolve(false);
                }).then(e);
                return;
              }
              let s = this._callbacks[this._bufferOffset];
              if (s) {
                s();
              }
              this._bufferOffset++;
              this._pendingData -= e.length;
              if (Date.now() - i >= 12) {
                break;
              }
            }
            if (this._writeBuffer.length > this._bufferOffset) {
              if (this._bufferOffset > 50) {
                this._writeBuffer = this._writeBuffer.slice(this._bufferOffset);
                this._callbacks = this._callbacks.slice(this._bufferOffset);
                this._bufferOffset = 0;
              }
              setTimeout(() => this._innerWrite());
            } else {
              this._writeBuffer.length = 0;
              this._callbacks.length = 0;
              this._pendingData = 0;
              this._bufferOffset = 0;
            }
            this._onWriteParsed.fire();
          }
          constructor(e) {
            super();
            this._action = e;
            this._writeBuffer = [];
            this._callbacks = [];
            this._pendingData = 0;
            this._bufferOffset = 0;
            this._isSyncWriting = false;
            this._syncCalls = 0;
            this._didUserInput = false;
            this._onWriteParsed = this.register(new r.EventEmitter());
            this.onWriteParsed = this._onWriteParsed.event;
          }
        }
        t.WriteBuffer = n;
      },
      5941: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.toRgbString = t.parseColor = undefined;
        let i = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/;
        let r = /^[\da-f]+$/;
        function s(e, t) {
          let i = e.toString(16);
          let r = i.length < 2 ? "0" + i : i;
          switch (t) {
            case 4:
              return i[0];
            case 8:
              return r;
            case 12:
              return (r + r).slice(0, 3);
            default:
              return r + r;
          }
        }
        t.parseColor = function (e) {
          if (!e) {
            return;
          }
          let t = e.toLowerCase();
          if (t.indexOf("rgb:") === 0) {
            t = t.slice(4);
            let e = i.exec(t);
            if (e) {
              let t = e[1] ? 15 : e[4] ? 255 : e[7] ? 4095 : 65535;
              return [Math.round(parseInt(e[1] || e[4] || e[7] || e[10], 16) / t * 255), Math.round(parseInt(e[2] || e[5] || e[8] || e[11], 16) / t * 255), Math.round(parseInt(e[3] || e[6] || e[9] || e[12], 16) / t * 255)];
            }
          } else if (t.indexOf("#") === 0 && (t = t.slice(1), r.exec(t) && [3, 6, 9, 12].includes(t.length))) {
            let e = t.length / 3;
            let i = [0, 0, 0];
            for (let r = 0; r < 3; ++r) {
              let s = parseInt(t.slice(e * r, e * r + e), 16);
              i[r] = e === 1 ? s << 4 : e === 2 ? s : e === 3 ? s >> 4 : s >> 8;
            }
            return i;
          }
        };
        t.toRgbString = function (e, t = 16) {
          let [i, r, n] = e;
          return `rgb:${s(i, t)}/${s(r, t)}/${s(n, t)}`;
        };
      },
      5770: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.PAYLOAD_LIMIT = undefined;
        t.PAYLOAD_LIMIT = 10000000;
      },
      6351: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.DcsHandler = t.DcsParser = undefined;
        let r = i(482);
        let s = i(8742);
        let n = i(5770);
        let o = [];
        t.DcsParser = class {
          dispose() {
            this._handlers = Object.create(null);
            this._handlerFb = () => {};
            this._active = o;
          }
          registerHandler(e, t) {
            if (this._handlers[e] === undefined) {
              this._handlers[e] = [];
            }
            let i = this._handlers[e];
            i.push(t);
            return {
              dispose: () => {
                let e = i.indexOf(t);
                if (e !== -1) {
                  i.splice(e, 1);
                }
              }
            };
          }
          clearHandler(e) {
            if (this._handlers[e]) {
              delete this._handlers[e];
            }
          }
          setHandlerFallback(e) {
            this._handlerFb = e;
          }
          reset() {
            if (this._active.length) {
              for (let e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e) {
                this._active[e].unhook(false);
              }
            }
            this._stack.paused = false;
            this._active = o;
            this._ident = 0;
          }
          hook(e, t) {
            this.reset();
            this._ident = e;
            this._active = this._handlers[e] || o;
            if (this._active.length) {
              for (let e = this._active.length - 1; e >= 0; e--) {
                this._active[e].hook(t);
              }
            } else {
              this._handlerFb(this._ident, "HOOK", t);
            }
          }
          put(e, t, i) {
            if (this._active.length) {
              for (let r = this._active.length - 1; r >= 0; r--) {
                this._active[r].put(e, t, i);
              }
            } else {
              this._handlerFb(this._ident, "PUT", r.utf32ToString(e, t, i));
            }
          }
          unhook(e) {
            let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
            if (this._active.length) {
              let i = false;
              let r = this._active.length - 1;
              let s = false;
              if (this._stack.paused) {
                r = this._stack.loopPosition - 1;
                i = t;
                s = this._stack.fallThrough;
                this._stack.paused = false;
              }
              if (!s && i === false) {
                for (; r >= 0 && (i = this._active[r].unhook(e)) !== true; r--) {
                  if (i instanceof Promise) {
                    this._stack.paused = true;
                    this._stack.loopPosition = r;
                    this._stack.fallThrough = false;
                    return i;
                  }
                }
                r--;
              }
              for (; r >= 0; r--) {
                if ((i = this._active[r].unhook(false)) instanceof Promise) {
                  this._stack.paused = true;
                  this._stack.loopPosition = r;
                  this._stack.fallThrough = true;
                  return i;
                }
              }
            } else {
              this._handlerFb(this._ident, "UNHOOK", e);
            }
            this._active = o;
            this._ident = 0;
          }
          constructor() {
            this._handlers = Object.create(null);
            this._active = o;
            this._ident = 0;
            this._handlerFb = () => {};
            this._stack = {
              paused: false,
              loopPosition: 0,
              fallThrough: false
            };
          }
        };
        let a = new s.Params();
        a.addParam(0);
        t.DcsHandler = class {
          hook(e) {
            this._params = e.length > 1 || e.params[0] ? e.clone() : a;
            this._data = "";
            this._hitLimit = false;
          }
          put(e, t, i) {
            if (!this._hitLimit) {
              this._data += r.utf32ToString(e, t, i);
              if (this._data.length > n.PAYLOAD_LIMIT) {
                this._data = "";
                this._hitLimit = true;
              }
            }
          }
          unhook(e) {
            let t = false;
            if (this._hitLimit) {
              t = false;
            } else if (e && (t = this._handler(this._data, this._params)) instanceof Promise) {
              return t.then(e => {
                this._params = a;
                this._data = "";
                this._hitLimit = false;
                return e;
              });
            }
            this._params = a;
            this._data = "";
            this._hitLimit = false;
            return t;
          }
          constructor(e) {
            this._handler = e;
            this._data = "";
            this._params = a;
            this._hitLimit = false;
          }
        };
      },
      2015: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.EscapeSequenceParser = t.VT500_TRANSITION_TABLE = t.TransitionTable = undefined;
        let r = i(844);
        let s = i(8742);
        let n = i(6242);
        let o = i(6351);
        class a {
          setDefault(e, t) {
            this.table.fill(e << 4 | t);
          }
          add(e, t, i, r) {
            this.table[t << 8 | e] = i << 4 | r;
          }
          addMany(e, t, i, r) {
            for (let s = 0; s < e.length; s++) {
              this.table[t << 8 | e[s]] = i << 4 | r;
            }
          }
          constructor(e) {
            this.table = new Uint8Array(e);
          }
        }
        t.TransitionTable = a;
        t.VT500_TRANSITION_TABLE = function () {
          let e;
          let t = new a(4095);
          let i = Array.apply(null, Array(256)).map((e, t) => t);
          let r = (e, t) => i.slice(e, t);
          let s = r(32, 127);
          let n = r(0, 24);
          n.push(25);
          n.push.apply(n, r(28, 32));
          let o = r(0, 14);
          t.setDefault(1, 0);
          t.addMany(s, 0, 2, 0);
          for (e in o) {
            t.addMany([24, 26, 153, 154], e, 3, 0);
            t.addMany(r(128, 144), e, 3, 0);
            t.addMany(r(144, 152), e, 3, 0);
            t.add(156, e, 0, 0);
            t.add(27, e, 11, 1);
            t.add(157, e, 4, 8);
            t.addMany([152, 158, 159], e, 0, 7);
            t.add(155, e, 11, 3);
            t.add(144, e, 11, 9);
          }
          t.addMany(n, 0, 3, 0);
          t.addMany(n, 1, 3, 1);
          t.add(127, 1, 0, 1);
          t.addMany(n, 8, 0, 8);
          t.addMany(n, 3, 3, 3);
          t.add(127, 3, 0, 3);
          t.addMany(n, 4, 3, 4);
          t.add(127, 4, 0, 4);
          t.addMany(n, 6, 3, 6);
          t.addMany(n, 5, 3, 5);
          t.add(127, 5, 0, 5);
          t.addMany(n, 2, 3, 2);
          t.add(127, 2, 0, 2);
          t.add(93, 1, 4, 8);
          t.addMany(s, 8, 5, 8);
          t.add(127, 8, 5, 8);
          t.addMany([156, 27, 24, 26, 7], 8, 6, 0);
          t.addMany(r(28, 32), 8, 0, 8);
          t.addMany([88, 94, 95], 1, 0, 7);
          t.addMany(s, 7, 0, 7);
          t.addMany(n, 7, 0, 7);
          t.add(156, 7, 0, 0);
          t.add(127, 7, 0, 7);
          t.add(91, 1, 11, 3);
          t.addMany(r(64, 127), 3, 7, 0);
          t.addMany(r(48, 60), 3, 8, 4);
          t.addMany([60, 61, 62, 63], 3, 9, 4);
          t.addMany(r(48, 60), 4, 8, 4);
          t.addMany(r(64, 127), 4, 7, 0);
          t.addMany([60, 61, 62, 63], 4, 0, 6);
          t.addMany(r(32, 64), 6, 0, 6);
          t.add(127, 6, 0, 6);
          t.addMany(r(64, 127), 6, 0, 0);
          t.addMany(r(32, 48), 3, 9, 5);
          t.addMany(r(32, 48), 5, 9, 5);
          t.addMany(r(48, 64), 5, 0, 6);
          t.addMany(r(64, 127), 5, 7, 0);
          t.addMany(r(32, 48), 4, 9, 5);
          t.addMany(r(32, 48), 1, 9, 2);
          t.addMany(r(32, 48), 2, 9, 2);
          t.addMany(r(48, 127), 2, 10, 0);
          t.addMany(r(48, 80), 1, 10, 0);
          t.addMany(r(81, 88), 1, 10, 0);
          t.addMany([89, 90, 92], 1, 10, 0);
          t.addMany(r(96, 127), 1, 10, 0);
          t.add(80, 1, 11, 9);
          t.addMany(n, 9, 0, 9);
          t.add(127, 9, 0, 9);
          t.addMany(r(28, 32), 9, 0, 9);
          t.addMany(r(32, 48), 9, 9, 12);
          t.addMany(r(48, 60), 9, 8, 10);
          t.addMany([60, 61, 62, 63], 9, 9, 10);
          t.addMany(n, 11, 0, 11);
          t.addMany(r(32, 128), 11, 0, 11);
          t.addMany(r(28, 32), 11, 0, 11);
          t.addMany(n, 10, 0, 10);
          t.add(127, 10, 0, 10);
          t.addMany(r(28, 32), 10, 0, 10);
          t.addMany(r(48, 60), 10, 8, 10);
          t.addMany([60, 61, 62, 63], 10, 0, 11);
          t.addMany(r(32, 48), 10, 9, 12);
          t.addMany(n, 12, 0, 12);
          t.add(127, 12, 0, 12);
          t.addMany(r(28, 32), 12, 0, 12);
          t.addMany(r(32, 48), 12, 9, 12);
          t.addMany(r(48, 64), 12, 0, 11);
          t.addMany(r(64, 127), 12, 12, 13);
          t.addMany(r(64, 127), 10, 12, 13);
          t.addMany(r(64, 127), 9, 12, 13);
          t.addMany(n, 13, 13, 13);
          t.addMany(s, 13, 13, 13);
          t.add(127, 13, 0, 13);
          t.addMany([27, 156, 24, 26], 13, 14, 0);
          t.add(160, 0, 2, 0);
          t.add(160, 8, 5, 8);
          t.add(160, 6, 0, 6);
          t.add(160, 11, 0, 11);
          t.add(160, 13, 13, 13);
          return t;
        }();
        class h extends r.Disposable {
          _identifier(e, t = [64, 126]) {
            let i = 0;
            if (e.prefix) {
              if (e.prefix.length > 1) {
                throw Error("only one byte as prefix supported");
              }
              if ((i = e.prefix.charCodeAt(0)) && i < 60 || i > 63) {
                throw Error("prefix must be in range 0x3c .. 0x3f");
              }
            }
            if (e.intermediates) {
              if (e.intermediates.length > 2) {
                throw Error("only two bytes as intermediates are supported");
              }
              for (let t = 0; t < e.intermediates.length; ++t) {
                let r = e.intermediates.charCodeAt(t);
                if (r < 32 || r > 47) {
                  throw Error("intermediate must be in range 0x20 .. 0x2f");
                }
                i <<= 8;
                i |= r;
              }
            }
            if (e.final.length !== 1) {
              throw Error("final must be a single byte");
            }
            let r = e.final.charCodeAt(0);
            if (t[0] > r || r > t[1]) {
              throw Error(`final must be in range ${t[0]} .. ${t[1]}`);
            }
            i <<= 8;
            return i |= r;
          }
          identToString(e) {
            let t = [];
            while (e) {
              t.push(String.fromCharCode(e & 255));
              e >>= 8;
            }
            return t.reverse().join("");
          }
          setPrintHandler(e) {
            this._printHandler = e;
          }
          clearPrintHandler() {
            this._printHandler = this._printHandlerFb;
          }
          registerEscHandler(e, t) {
            let i = this._identifier(e, [48, 126]);
            if (this._escHandlers[i] === undefined) {
              this._escHandlers[i] = [];
            }
            let r = this._escHandlers[i];
            r.push(t);
            return {
              dispose: () => {
                let e = r.indexOf(t);
                if (e !== -1) {
                  r.splice(e, 1);
                }
              }
            };
          }
          clearEscHandler(e) {
            if (this._escHandlers[this._identifier(e, [48, 126])]) {
              delete this._escHandlers[this._identifier(e, [48, 126])];
            }
          }
          setEscHandlerFallback(e) {
            this._escHandlerFb = e;
          }
          setExecuteHandler(e, t) {
            this._executeHandlers[e.charCodeAt(0)] = t;
          }
          clearExecuteHandler(e) {
            if (this._executeHandlers[e.charCodeAt(0)]) {
              delete this._executeHandlers[e.charCodeAt(0)];
            }
          }
          setExecuteHandlerFallback(e) {
            this._executeHandlerFb = e;
          }
          registerCsiHandler(e, t) {
            let i = this._identifier(e);
            if (this._csiHandlers[i] === undefined) {
              this._csiHandlers[i] = [];
            }
            let r = this._csiHandlers[i];
            r.push(t);
            return {
              dispose: () => {
                let e = r.indexOf(t);
                if (e !== -1) {
                  r.splice(e, 1);
                }
              }
            };
          }
          clearCsiHandler(e) {
            if (this._csiHandlers[this._identifier(e)]) {
              delete this._csiHandlers[this._identifier(e)];
            }
          }
          setCsiHandlerFallback(e) {
            this._csiHandlerFb = e;
          }
          registerDcsHandler(e, t) {
            return this._dcsParser.registerHandler(this._identifier(e), t);
          }
          clearDcsHandler(e) {
            this._dcsParser.clearHandler(this._identifier(e));
          }
          setDcsHandlerFallback(e) {
            this._dcsParser.setHandlerFallback(e);
          }
          registerOscHandler(e, t) {
            return this._oscParser.registerHandler(e, t);
          }
          clearOscHandler(e) {
            this._oscParser.clearHandler(e);
          }
          setOscHandlerFallback(e) {
            this._oscParser.setHandlerFallback(e);
          }
          setErrorHandler(e) {
            this._errorHandler = e;
          }
          clearErrorHandler() {
            this._errorHandler = this._errorHandlerFb;
          }
          reset() {
            this.currentState = this.initialState;
            this._oscParser.reset();
            this._dcsParser.reset();
            this._params.reset();
            this._params.addParam(0);
            this._collect = 0;
            this.precedingJoinState = 0;
            if (this._parseStack.state !== 0) {
              this._parseStack.state = 2;
              this._parseStack.handlers = [];
            }
          }
          _preserveStack(e, t, i, r, s) {
            this._parseStack.state = e;
            this._parseStack.handlers = t;
            this._parseStack.handlerPos = i;
            this._parseStack.transition = r;
            this._parseStack.chunkPos = s;
          }
          parse(e, t, i) {
            let r;
            let s = 0;
            let n = 0;
            let o = 0;
            if (this._parseStack.state) {
              if (this._parseStack.state === 2) {
                this._parseStack.state = 0;
                o = this._parseStack.chunkPos + 1;
              } else {
                if (i === undefined || this._parseStack.state === 1) {
                  this._parseStack.state = 1;
                  throw Error("improper continuation due to previous async handler, giving up parsing");
                }
                let t = this._parseStack.handlers;
                let n = this._parseStack.handlerPos - 1;
                switch (this._parseStack.state) {
                  case 3:
                    if (i === false && n > -1) {
                      for (; n >= 0 && (r = t[n](this._params)) !== true; n--) {
                        if (r instanceof Promise) {
                          this._parseStack.handlerPos = n;
                          return r;
                        }
                      }
                    }
                    this._parseStack.handlers = [];
                    break;
                  case 4:
                    if (i === false && n > -1) {
                      for (; n >= 0 && (r = t[n]()) !== true; n--) {
                        if (r instanceof Promise) {
                          this._parseStack.handlerPos = n;
                          return r;
                        }
                      }
                    }
                    this._parseStack.handlers = [];
                    break;
                  case 6:
                    s = e[this._parseStack.chunkPos];
                    if (r = this._dcsParser.unhook(s !== 24 && s !== 26, i)) {
                      return r;
                    }
                    if (s === 27) {
                      this._parseStack.transition |= 1;
                    }
                    this._params.reset();
                    this._params.addParam(0);
                    this._collect = 0;
                    break;
                  case 5:
                    s = e[this._parseStack.chunkPos];
                    if (r = this._oscParser.end(s !== 24 && s !== 26, i)) {
                      return r;
                    }
                    if (s === 27) {
                      this._parseStack.transition |= 1;
                    }
                    this._params.reset();
                    this._params.addParam(0);
                    this._collect = 0;
                }
                this._parseStack.state = 0;
                o = this._parseStack.chunkPos + 1;
                this.precedingJoinState = 0;
                this.currentState = this._parseStack.transition & 15;
              }
            }
            for (let i = o; i < t; ++i) {
              s = e[i];
              switch ((n = this._transitions.table[this.currentState << 8 | (s < 160 ? s : 160)]) >> 4) {
                case 2:
                  for (let r = i + 1;; ++r) {
                    if (r >= t || (s = e[r]) < 32 || s > 126 && s < 160 || ++r >= t || (s = e[r]) < 32 || s > 126 && s < 160 || ++r >= t || (s = e[r]) < 32 || s > 126 && s < 160 || ++r >= t || (s = e[r]) < 32 || s > 126 && s < 160) {
                      this._printHandler(e, i, r);
                      i = r - 1;
                      break;
                    }
                  }
                  break;
                case 3:
                  if (this._executeHandlers[s]) {
                    this._executeHandlers[s]();
                  } else {
                    this._executeHandlerFb(s);
                  }
                  this.precedingJoinState = 0;
                  break;
                case 0:
                  break;
                case 1:
                  if (this._errorHandler({
                    position: i,
                    code: s,
                    currentState: this.currentState,
                    collect: this._collect,
                    params: this._params,
                    abort: false
                  }).abort) {
                    return;
                  }
                  break;
                case 7:
                  let o = this._csiHandlers[this._collect << 8 | s];
                  let a = o ? o.length - 1 : -1;
                  for (; a >= 0 && (r = o[a](this._params)) !== true; a--) {
                    if (r instanceof Promise) {
                      this._preserveStack(3, o, a, n, i);
                      return r;
                    }
                  }
                  if (a < 0) {
                    this._csiHandlerFb(this._collect << 8 | s, this._params);
                  }
                  this.precedingJoinState = 0;
                  break;
                case 8:
                  do {
                    switch (s) {
                      case 59:
                        this._params.addParam(0);
                        break;
                      case 58:
                        this._params.addSubParam(-1);
                        break;
                      default:
                        this._params.addDigit(s - 48);
                    }
                  } while (++i < t && (s = e[i]) > 47 && s < 60);
                  i--;
                  break;
                case 9:
                  this._collect <<= 8;
                  this._collect |= s;
                  break;
                case 10:
                  let h = this._escHandlers[this._collect << 8 | s];
                  let l = h ? h.length - 1 : -1;
                  for (; l >= 0 && (r = h[l]()) !== true; l--) {
                    if (r instanceof Promise) {
                      this._preserveStack(4, h, l, n, i);
                      return r;
                    }
                  }
                  if (l < 0) {
                    this._escHandlerFb(this._collect << 8 | s);
                  }
                  this.precedingJoinState = 0;
                  break;
                case 11:
                  this._params.reset();
                  this._params.addParam(0);
                  this._collect = 0;
                  break;
                case 12:
                  this._dcsParser.hook(this._collect << 8 | s, this._params);
                  break;
                case 13:
                  for (let r = i + 1;; ++r) {
                    if (r >= t || (s = e[r]) === 24 || s === 26 || s === 27 || s > 127 && s < 160) {
                      this._dcsParser.put(e, i, r);
                      i = r - 1;
                      break;
                    }
                  }
                  break;
                case 14:
                  if (r = this._dcsParser.unhook(s !== 24 && s !== 26)) {
                    this._preserveStack(6, [], 0, n, i);
                    return r;
                  }
                  if (s === 27) {
                    n |= 1;
                  }
                  this._params.reset();
                  this._params.addParam(0);
                  this._collect = 0;
                  this.precedingJoinState = 0;
                  break;
                case 4:
                  this._oscParser.start();
                  break;
                case 5:
                  for (let r = i + 1;; r++) {
                    if (r >= t || (s = e[r]) < 32 || s > 127 && s < 160) {
                      this._oscParser.put(e, i, r);
                      i = r - 1;
                      break;
                    }
                  }
                  break;
                case 6:
                  if (r = this._oscParser.end(s !== 24 && s !== 26)) {
                    this._preserveStack(5, [], 0, n, i);
                    return r;
                  }
                  if (s === 27) {
                    n |= 1;
                  }
                  this._params.reset();
                  this._params.addParam(0);
                  this._collect = 0;
                  this.precedingJoinState = 0;
              }
              this.currentState = n & 15;
            }
          }
          constructor(e = t.VT500_TRANSITION_TABLE) {
            super();
            this._transitions = e;
            this._parseStack = {
              state: 0,
              handlers: [],
              handlerPos: 0,
              transition: 0,
              chunkPos: 0
            };
            this.initialState = 0;
            this.currentState = this.initialState;
            this._params = new s.Params();
            this._params.addParam(0);
            this._collect = 0;
            this.precedingJoinState = 0;
            this._printHandlerFb = (e, t, i) => {};
            this._executeHandlerFb = e => {};
            this._csiHandlerFb = (e, t) => {};
            this._escHandlerFb = e => {};
            this._errorHandlerFb = e => e;
            this._printHandler = this._printHandlerFb;
            this._executeHandlers = Object.create(null);
            this._csiHandlers = Object.create(null);
            this._escHandlers = Object.create(null);
            this.register(r.toDisposable(() => {
              this._csiHandlers = Object.create(null);
              this._executeHandlers = Object.create(null);
              this._escHandlers = Object.create(null);
            }));
            this._oscParser = this.register(new n.OscParser());
            this._dcsParser = this.register(new o.DcsParser());
            this._errorHandler = this._errorHandlerFb;
            this.registerEscHandler({
              final: "\\"
            }, () => true);
          }
        }
        t.EscapeSequenceParser = h;
      },
      6242: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.OscHandler = t.OscParser = undefined;
        let r = i(5770);
        let s = i(482);
        let n = [];
        t.OscParser = class {
          registerHandler(e, t) {
            if (this._handlers[e] === undefined) {
              this._handlers[e] = [];
            }
            let i = this._handlers[e];
            i.push(t);
            return {
              dispose: () => {
                let e = i.indexOf(t);
                if (e !== -1) {
                  i.splice(e, 1);
                }
              }
            };
          }
          clearHandler(e) {
            if (this._handlers[e]) {
              delete this._handlers[e];
            }
          }
          setHandlerFallback(e) {
            this._handlerFb = e;
          }
          dispose() {
            this._handlers = Object.create(null);
            this._handlerFb = () => {};
            this._active = n;
          }
          reset() {
            if (this._state === 2) {
              for (let e = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e >= 0; --e) {
                this._active[e].end(false);
              }
            }
            this._stack.paused = false;
            this._active = n;
            this._id = -1;
            this._state = 0;
          }
          _start() {
            this._active = this._handlers[this._id] || n;
            if (this._active.length) {
              for (let e = this._active.length - 1; e >= 0; e--) {
                this._active[e].start();
              }
            } else {
              this._handlerFb(this._id, "START");
            }
          }
          _put(e, t, i) {
            if (this._active.length) {
              for (let r = this._active.length - 1; r >= 0; r--) {
                this._active[r].put(e, t, i);
              }
            } else {
              this._handlerFb(this._id, "PUT", s.utf32ToString(e, t, i));
            }
          }
          start() {
            this.reset();
            this._state = 1;
          }
          put(e, t, i) {
            if (this._state !== 3) {
              if (this._state === 1) {
                while (t < i) {
                  let i = e[t++];
                  if (i === 59) {
                    this._state = 2;
                    this._start();
                    break;
                  }
                  if (i < 48 || i > 57) {
                    this._state = 3;
                    return;
                  }
                  if (this._id === -1) {
                    this._id = 0;
                  }
                  this._id = this._id * 10 + i - 48;
                }
              }
              if (this._state === 2 && i - t > 0) {
                this._put(e, t, i);
              }
            }
          }
          end(e) {
            let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
            if (this._state !== 0) {
              if (this._state !== 3) {
                if (this._state === 1) {
                  this._start();
                }
                if (this._active.length) {
                  let i = false;
                  let r = this._active.length - 1;
                  let s = false;
                  if (this._stack.paused) {
                    r = this._stack.loopPosition - 1;
                    i = t;
                    s = this._stack.fallThrough;
                    this._stack.paused = false;
                  }
                  if (!s && i === false) {
                    for (; r >= 0 && (i = this._active[r].end(e)) !== true; r--) {
                      if (i instanceof Promise) {
                        this._stack.paused = true;
                        this._stack.loopPosition = r;
                        this._stack.fallThrough = false;
                        return i;
                      }
                    }
                    r--;
                  }
                  for (; r >= 0; r--) {
                    if ((i = this._active[r].end(false)) instanceof Promise) {
                      this._stack.paused = true;
                      this._stack.loopPosition = r;
                      this._stack.fallThrough = true;
                      return i;
                    }
                  }
                } else {
                  this._handlerFb(this._id, "END", e);
                }
              }
              this._active = n;
              this._id = -1;
              this._state = 0;
            }
          }
          constructor() {
            this._state = 0;
            this._active = n;
            this._id = -1;
            this._handlers = Object.create(null);
            this._handlerFb = () => {};
            this._stack = {
              paused: false,
              loopPosition: 0,
              fallThrough: false
            };
          }
        };
        t.OscHandler = class {
          start() {
            this._data = "";
            this._hitLimit = false;
          }
          put(e, t, i) {
            if (!this._hitLimit) {
              this._data += s.utf32ToString(e, t, i);
              if (this._data.length > r.PAYLOAD_LIMIT) {
                this._data = "";
                this._hitLimit = true;
              }
            }
          }
          end(e) {
            let t = false;
            if (this._hitLimit) {
              t = false;
            } else if (e && (t = this._handler(this._data)) instanceof Promise) {
              return t.then(e => {
                this._data = "";
                this._hitLimit = false;
                return e;
              });
            }
            this._data = "";
            this._hitLimit = false;
            return t;
          }
          constructor(e) {
            this._handler = e;
            this._data = "";
            this._hitLimit = false;
          }
        };
      },
      8742: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.Params = undefined;
        class i {
          static fromArray(e) {
            let t = new i();
            if (!e.length) {
              return t;
            }
            for (let i = +!!Array.isArray(e[0]); i < e.length; ++i) {
              let r = e[i];
              if (Array.isArray(r)) {
                for (let e = 0; e < r.length; ++e) {
                  t.addSubParam(r[e]);
                }
              } else {
                t.addParam(r);
              }
            }
            return t;
          }
          clone() {
            let e = new i(this.maxLength, this.maxSubParamsLength);
            e.params.set(this.params);
            e.length = this.length;
            e._subParams.set(this._subParams);
            e._subParamsLength = this._subParamsLength;
            e._subParamsIdx.set(this._subParamsIdx);
            e._rejectDigits = this._rejectDigits;
            e._rejectSubDigits = this._rejectSubDigits;
            e._digitIsSub = this._digitIsSub;
            return e;
          }
          toArray() {
            let e = [];
            for (let t = 0; t < this.length; ++t) {
              e.push(this.params[t]);
              let i = this._subParamsIdx[t] >> 8;
              let r = this._subParamsIdx[t] & 255;
              if (r - i > 0) {
                e.push(Array.prototype.slice.call(this._subParams, i, r));
              }
            }
            return e;
          }
          reset() {
            this.length = 0;
            this._subParamsLength = 0;
            this._rejectDigits = false;
            this._rejectSubDigits = false;
            this._digitIsSub = false;
          }
          addParam(e) {
            this._digitIsSub = false;
            if (this.length >= this.maxLength) {
              this._rejectDigits = true;
            } else {
              if (e < -1) {
                throw Error("values lesser than -1 are not allowed");
              }
              this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength;
              this.params[this.length++] = e > 2147483647 ? 2147483647 : e;
            }
          }
          addSubParam(e) {
            this._digitIsSub = true;
            if (this.length) {
              if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength) {
                this._rejectSubDigits = true;
              } else {
                if (e < -1) {
                  throw Error("values lesser than -1 are not allowed");
                }
                this._subParams[this._subParamsLength++] = e > 2147483647 ? 2147483647 : e;
                this._subParamsIdx[this.length - 1]++;
              }
            }
          }
          hasSubParams(e) {
            return (this._subParamsIdx[e] & 255) - (this._subParamsIdx[e] >> 8) > 0;
          }
          getSubParams(e) {
            let t = this._subParamsIdx[e] >> 8;
            let i = this._subParamsIdx[e] & 255;
            if (i - t > 0) {
              return this._subParams.subarray(t, i);
            } else {
              return null;
            }
          }
          getSubParamsAll() {
            let e = {};
            for (let t = 0; t < this.length; ++t) {
              let i = this._subParamsIdx[t] >> 8;
              let r = this._subParamsIdx[t] & 255;
              if (r - i > 0) {
                e[t] = this._subParams.slice(i, r);
              }
            }
            return e;
          }
          addDigit(e) {
            let t;
            if (this._rejectDigits || !(t = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits) {
              return;
            }
            let i = this._digitIsSub ? this._subParams : this.params;
            let r = i[t - 1];
            i[t - 1] = ~r ? Math.min(r * 10 + e, 2147483647) : e;
          }
          constructor(e = 32, t = 32) {
            this.maxLength = e;
            this.maxSubParamsLength = t;
            if (t > 256) {
              throw Error("maxSubParamsLength must not be greater than 256");
            }
            this.params = new Int32Array(e);
            this.length = 0;
            this._subParams = new Int32Array(t);
            this._subParamsLength = 0;
            this._subParamsIdx = new Uint16Array(e);
            this._rejectDigits = false;
            this._rejectSubDigits = false;
            this._digitIsSub = false;
          }
        }
        t.Params = i;
      },
      5741: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.AddonManager = undefined;
        t.AddonManager = class {
          dispose() {
            for (let e = this._addons.length - 1; e >= 0; e--) {
              this._addons[e].instance.dispose();
            }
          }
          loadAddon(e, t) {
            let i = {
              instance: t,
              dispose: t.dispose,
              isDisposed: false
            };
            this._addons.push(i);
            t.dispose = () => this._wrappedAddonDispose(i);
            t.activate(e);
          }
          _wrappedAddonDispose(e) {
            if (e.isDisposed) {
              return;
            }
            let t = -1;
            for (let i = 0; i < this._addons.length; i++) {
              if (this._addons[i] === e) {
                t = i;
                break;
              }
            }
            if (t === -1) {
              throw Error("Could not dispose an addon that has not been loaded");
            }
            e.isDisposed = true;
            e.dispose.apply(e.instance);
            this._addons.splice(t, 1);
          }
          constructor() {
            this._addons = [];
          }
        };
      },
      8771: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.BufferApiView = undefined;
        let r = i(3785);
        let s = i(511);
        t.BufferApiView = class {
          init(e) {
            this._buffer = e;
            return this;
          }
          get cursorY() {
            return this._buffer.y;
          }
          get cursorX() {
            return this._buffer.x;
          }
          get viewportY() {
            return this._buffer.ydisp;
          }
          get baseY() {
            return this._buffer.ybase;
          }
          get length() {
            return this._buffer.lines.length;
          }
          getLine(e) {
            let t = this._buffer.lines.get(e);
            if (t) {
              return new r.BufferLineApiView(t);
            }
          }
          getNullCell() {
            return new s.CellData();
          }
          constructor(e, t) {
            this._buffer = e;
            this.type = t;
          }
        };
      },
      3785: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.BufferLineApiView = undefined;
        let r = i(511);
        t.BufferLineApiView = class {
          get isWrapped() {
            return this._line.isWrapped;
          }
          get length() {
            return this._line.length;
          }
          getCell(e, t) {
            if (!(e < 0) && !(e >= this._line.length)) {
              if (t) {
                this._line.loadCell(e, t);
                return t;
              } else {
                return this._line.loadCell(e, new r.CellData());
              }
            }
          }
          translateToString(e, t, i) {
            return this._line.translateToString(e, t, i);
          }
          constructor(e) {
            this._line = e;
          }
        };
      },
      8285: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.BufferNamespaceApi = undefined;
        let r = i(8771);
        let s = i(8460);
        let n = i(844);
        class o extends n.Disposable {
          get active() {
            if (this._core.buffers.active === this._core.buffers.normal) {
              return this.normal;
            }
            if (this._core.buffers.active === this._core.buffers.alt) {
              return this.alternate;
            }
            throw Error("Active buffer is neither normal nor alternate");
          }
          get normal() {
            return this._normal.init(this._core.buffers.normal);
          }
          get alternate() {
            return this._alternate.init(this._core.buffers.alt);
          }
          constructor(e) {
            super();
            this._core = e;
            this._onBufferChange = this.register(new s.EventEmitter());
            this.onBufferChange = this._onBufferChange.event;
            this._normal = new r.BufferApiView(this._core.buffers.normal, "normal");
            this._alternate = new r.BufferApiView(this._core.buffers.alt, "alternate");
            this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active));
          }
        }
        t.BufferNamespaceApi = o;
      },
      7975: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.ParserApi = undefined;
        t.ParserApi = class {
          registerCsiHandler(e, t) {
            return this._core.registerCsiHandler(e, e => t(e.toArray()));
          }
          addCsiHandler(e, t) {
            return this.registerCsiHandler(e, t);
          }
          registerDcsHandler(e, t) {
            return this._core.registerDcsHandler(e, (e, i) => t(e, i.toArray()));
          }
          addDcsHandler(e, t) {
            return this.registerDcsHandler(e, t);
          }
          registerEscHandler(e, t) {
            return this._core.registerEscHandler(e, t);
          }
          addEscHandler(e, t) {
            return this.registerEscHandler(e, t);
          }
          registerOscHandler(e, t) {
            return this._core.registerOscHandler(e, t);
          }
          addOscHandler(e, t) {
            return this.registerOscHandler(e, t);
          }
          constructor(e) {
            this._core = e;
          }
        };
      },
      7090: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.UnicodeApi = undefined;
        t.UnicodeApi = class {
          register(e) {
            this._core.unicodeService.register(e);
          }
          get versions() {
            return this._core.unicodeService.versions;
          }
          get activeVersion() {
            return this._core.unicodeService.activeVersion;
          }
          set activeVersion(e) {
            this._core.unicodeService.activeVersion = e;
          }
          constructor(e) {
            this._core = e;
          }
        };
      },
      744: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.BufferService = t.MINIMUM_ROWS = t.MINIMUM_COLS = undefined;
        let n = i(8460);
        let o = i(844);
        let a = i(5295);
        let h = i(2585);
        t.MINIMUM_COLS = 2;
        t.MINIMUM_ROWS = 1;
        let l = t.BufferService = class extends o.Disposable {
          get buffer() {
            return this.buffers.active;
          }
          resize(e, t) {
            this.cols = e;
            this.rows = t;
            this.buffers.resize(e, t);
            this._onResize.fire({
              cols: e,
              rows: t
            });
          }
          reset() {
            this.buffers.reset();
            this.isUserScrolling = false;
          }
          scroll(e) {
            let t;
            let i = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
            let r = this.buffer;
            if (!(t = this._cachedBlankLine) || t.length !== this.cols || t.getFg(0) !== e.fg || t.getBg(0) !== e.bg) {
              t = r.getBlankLine(e, i);
              this._cachedBlankLine = t;
            }
            t.isWrapped = i;
            let s = r.ybase + r.scrollTop;
            let n = r.ybase + r.scrollBottom;
            if (r.scrollTop === 0) {
              let e = r.lines.isFull;
              if (n === r.lines.length - 1) {
                if (e) {
                  r.lines.recycle().copyFrom(t);
                } else {
                  r.lines.push(t.clone());
                }
              } else {
                r.lines.splice(n + 1, 0, t.clone());
              }
              if (e) {
                if (this.isUserScrolling) {
                  r.ydisp = Math.max(r.ydisp - 1, 0);
                }
              } else {
                r.ybase++;
                if (!this.isUserScrolling) {
                  r.ydisp++;
                }
              }
            } else {
              let e = n - s + 1;
              r.lines.shiftElements(s + 1, e - 1, -1);
              r.lines.set(n, t.clone());
            }
            if (!this.isUserScrolling) {
              r.ydisp = r.ybase;
            }
            this._onScroll.fire(r.ydisp);
          }
          scrollLines(e, t, i) {
            let r = this.buffer;
            if (e < 0) {
              if (r.ydisp === 0) {
                return;
              }
              this.isUserScrolling = true;
            } else if (e + r.ydisp >= r.ybase) {
              this.isUserScrolling = false;
            }
            let s = r.ydisp;
            r.ydisp = Math.max(Math.min(r.ydisp + e, r.ybase), 0);
            if (s !== r.ydisp) {
              if (!t) {
                this._onScroll.fire(r.ydisp);
              }
            }
          }
          constructor(e) {
            super();
            this.isUserScrolling = false;
            this._onResize = this.register(new n.EventEmitter());
            this.onResize = this._onResize.event;
            this._onScroll = this.register(new n.EventEmitter());
            this.onScroll = this._onScroll.event;
            this.cols = Math.max(e.rawOptions.cols || 0, t.MINIMUM_COLS);
            this.rows = Math.max(e.rawOptions.rows || 0, t.MINIMUM_ROWS);
            this.buffers = this.register(new a.BufferSet(e, this));
          }
        };
        t.BufferService = r([s(0, h.IOptionsService)], l);
      },
      7994: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.CharsetService = undefined;
        t.CharsetService = class {
          reset() {
            this.charset = undefined;
            this._charsets = [];
            this.glevel = 0;
          }
          setgLevel(e) {
            this.glevel = e;
            this.charset = this._charsets[e];
          }
          setgCharset(e, t) {
            this._charsets[e] = t;
            if (this.glevel === e) {
              this.charset = t;
            }
          }
          constructor() {
            this.glevel = 0;
            this._charsets = [];
          }
        };
      },
      1753: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.CoreMouseService = undefined;
        let n = i(2585);
        let o = i(8460);
        let a = i(844);
        let h = {
          NONE: {
            events: 0,
            restrict: () => false
          },
          X10: {
            events: 1,
            restrict: e => e.button !== 4 && e.action === 1 && (e.ctrl = false, e.alt = false, e.shift = false, true)
          },
          VT200: {
            events: 19,
            restrict: e => e.action !== 32
          },
          DRAG: {
            events: 23,
            restrict: e => e.action !== 32 || e.button !== 3
          },
          ANY: {
            events: 31,
            restrict: e => true
          }
        };
        function l(e, t) {
          let i = !!e.ctrl * 16 | !!e.shift * 4 | !!e.alt * 8;
          if (e.button === 4) {
            i |= 64;
            i |= e.action;
          } else {
            i |= e.button & 3;
            if (e.button & 4) {
              i |= 64;
            }
            if (e.button & 8) {
              i |= 128;
            }
            if (e.action === 32) {
              i |= 32;
            } else if (e.action === 0 && !t) {
              i |= 3;
            }
          }
          return i;
        }
        let c = String.fromCharCode;
        let d = {
          DEFAULT: e => {
            let t = [l(e, false) + 32, e.col + 32, e.row + 32];
            if (t[0] > 255 || t[1] > 255 || t[2] > 255) {
              return "";
            } else {
              return `[M${c(t[0])}${c(t[1])}${c(t[2])}`;
            }
          },
          SGR: e => {
            let t = e.action === 0 && e.button !== 4 ? "m" : "M";
            return `[<${l(e, true)};${e.col};${e.row}${t}`;
          },
          SGR_PIXELS: e => {
            let t = e.action === 0 && e.button !== 4 ? "m" : "M";
            return `[<${l(e, true)};${e.x};${e.y}${t}`;
          }
        };
        let _ = t.CoreMouseService = class extends a.Disposable {
          addProtocol(e, t) {
            this._protocols[e] = t;
          }
          addEncoding(e, t) {
            this._encodings[e] = t;
          }
          get activeProtocol() {
            return this._activeProtocol;
          }
          get areMouseEventsActive() {
            return this._protocols[this._activeProtocol].events !== 0;
          }
          set activeProtocol(e) {
            if (!this._protocols[e]) {
              throw Error(`unknown protocol "${e}"`);
            }
            this._activeProtocol = e;
            this._onProtocolChange.fire(this._protocols[e].events);
          }
          get activeEncoding() {
            return this._activeEncoding;
          }
          set activeEncoding(e) {
            if (!this._encodings[e]) {
              throw Error(`unknown encoding "${e}"`);
            }
            this._activeEncoding = e;
          }
          reset() {
            this.activeProtocol = "NONE";
            this.activeEncoding = "DEFAULT";
            this._lastEvent = null;
          }
          triggerMouseEvent(e) {
            if (e.col < 0 || e.col >= this._bufferService.cols || e.row < 0 || e.row >= this._bufferService.rows || e.button === 4 && e.action === 32 || e.button === 3 && e.action !== 32 || e.button !== 4 && (e.action === 2 || e.action === 3) || (e.col++, e.row++, e.action === 32 && this._lastEvent && this._equalEvents(this._lastEvent, e, this._activeEncoding === "SGR_PIXELS")) || !this._protocols[this._activeProtocol].restrict(e)) {
              return false;
            }
            let t = this._encodings[this._activeEncoding](e);
            if (t) {
              if (this._activeEncoding === "DEFAULT") {
                this._coreService.triggerBinaryEvent(t);
              } else {
                this._coreService.triggerDataEvent(t, true);
              }
            }
            this._lastEvent = e;
            return true;
          }
          explainEvents(e) {
            return {
              down: !!(e & 1),
              up: !!(e & 2),
              drag: !!(e & 4),
              move: !!(e & 8),
              wheel: !!(e & 16)
            };
          }
          _equalEvents(e, t, i) {
            if (i) {
              if (e.x !== t.x || e.y !== t.y) {
                return false;
              }
            } else if (e.col !== t.col || e.row !== t.row) {
              return false;
            }
            return e.button === t.button && e.action === t.action && e.ctrl === t.ctrl && e.alt === t.alt && e.shift === t.shift;
          }
          constructor(e, t) {
            super();
            this._bufferService = e;
            this._coreService = t;
            this._protocols = {};
            this._encodings = {};
            this._activeProtocol = "";
            this._activeEncoding = "";
            this._lastEvent = null;
            this._onProtocolChange = this.register(new o.EventEmitter());
            this.onProtocolChange = this._onProtocolChange.event;
            for (let i of Object.keys(h)) {
              this.addProtocol(i, h[i]);
            }
            for (let e of Object.keys(d)) {
              this.addEncoding(e, d[e]);
            }
            this.reset();
          }
        };
        t.CoreMouseService = r([s(0, n.IBufferService), s(1, n.ICoreService)], _);
      },
      6975: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.CoreService = undefined;
        let n = i(1439);
        let o = i(8460);
        let a = i(844);
        let h = i(2585);
        let l = Object.freeze({
          insertMode: false
        });
        let c = Object.freeze({
          applicationCursorKeys: false,
          applicationKeypad: false,
          bracketedPasteMode: false,
          origin: false,
          reverseWraparound: false,
          sendFocus: false,
          wraparound: true
        });
        let d = t.CoreService = class extends a.Disposable {
          reset() {
            this.modes = n.clone(l);
            this.decPrivateModes = n.clone(c);
          }
          triggerDataEvent(e, t = false) {
            if (this._optionsService.rawOptions.disableStdin) {
              return;
            }
            let i = this._bufferService.buffer;
            if (t && this._optionsService.rawOptions.scrollOnUserInput && i.ybase !== i.ydisp) {
              this._onRequestScrollToBottom.fire();
            }
            if (t) {
              this._onUserInput.fire();
            }
            this._logService.debug(`sending data "${e}"`, () => e.split("").map(e => e.charCodeAt(0)));
            this._onData.fire(e);
          }
          triggerBinaryEvent(e) {
            if (!this._optionsService.rawOptions.disableStdin) {
              this._logService.debug(`sending binary "${e}"`, () => e.split("").map(e => e.charCodeAt(0)));
              this._onBinary.fire(e);
            }
          }
          constructor(e, t, i) {
            super();
            this._bufferService = e;
            this._logService = t;
            this._optionsService = i;
            this.isCursorInitialized = false;
            this.isCursorHidden = false;
            this._onData = this.register(new o.EventEmitter());
            this.onData = this._onData.event;
            this._onUserInput = this.register(new o.EventEmitter());
            this.onUserInput = this._onUserInput.event;
            this._onBinary = this.register(new o.EventEmitter());
            this.onBinary = this._onBinary.event;
            this._onRequestScrollToBottom = this.register(new o.EventEmitter());
            this.onRequestScrollToBottom = this._onRequestScrollToBottom.event;
            this.modes = n.clone(l);
            this.decPrivateModes = n.clone(c);
          }
        };
        t.CoreService = r([s(0, h.IBufferService), s(1, h.ILogService), s(2, h.IOptionsService)], d);
      },
      9074: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.DecorationService = undefined;
        let r = i(8055);
        let s = i(8460);
        let n = i(844);
        let o = i(6106);
        let a = 0;
        let h = 0;
        class l extends n.Disposable {
          get decorations() {
            return this._decorations.values();
          }
          registerDecoration(e) {
            if (e.marker.isDisposed) {
              return;
            }
            let t = new c(e);
            if (t) {
              let e = t.marker.onDispose(() => t.dispose());
              t.onDispose(() => {
                if (t) {
                  if (this._decorations.delete(t)) {
                    this._onDecorationRemoved.fire(t);
                  }
                  e.dispose();
                }
              });
              this._decorations.insert(t);
              this._onDecorationRegistered.fire(t);
            }
            return t;
          }
          reset() {
            for (let e of this._decorations.values()) {
              e.dispose();
            }
            this._decorations.clear();
          }
          *getDecorationsAtCell(e, t, i) {
            let o = 0;
            let a = 0;
            for (let h of this._decorations.getKeyIterator(t)) {
              a = (o = h.options.x ?? 0) + (h.options.width ?? 1);
              if (e >= o && e < a && (!i || (h.options.layer ?? "bottom") === i)) {
                yield h;
              }
            }
          }
          forEachDecorationAtCell(e, t, i, r) {
            this._decorations.forEachByKey(t, t => {
              h = (a = t.options.x ?? 0) + (t.options.width ?? 1);
              if (e >= a && e < h && (!i || (t.options.layer ?? "bottom") === i)) {
                r(t);
              }
            });
          }
          constructor() {
            super();
            this._decorations = new o.SortedList(e => e == null ? undefined : e.marker.line);
            this._onDecorationRegistered = this.register(new s.EventEmitter());
            this.onDecorationRegistered = this._onDecorationRegistered.event;
            this._onDecorationRemoved = this.register(new s.EventEmitter());
            this.onDecorationRemoved = this._onDecorationRemoved.event;
            this.register(n.toDisposable(() => this.reset()));
          }
        }
        t.DecorationService = l;
        class c extends n.Disposable {
          get isDisposed() {
            return this._isDisposed;
          }
          get backgroundColorRGB() {
            if (this._cachedBg === null) {
              if (this.options.backgroundColor) {
                this._cachedBg = r.css.toColor(this.options.backgroundColor);
              } else {
                this._cachedBg = undefined;
              }
            }
            return this._cachedBg;
          }
          get foregroundColorRGB() {
            if (this._cachedFg === null) {
              if (this.options.foregroundColor) {
                this._cachedFg = r.css.toColor(this.options.foregroundColor);
              } else {
                this._cachedFg = undefined;
              }
            }
            return this._cachedFg;
          }
          dispose() {
            this._onDispose.fire();
            super.dispose();
          }
          constructor(e) {
            super();
            this.options = e;
            this.onRenderEmitter = this.register(new s.EventEmitter());
            this.onRender = this.onRenderEmitter.event;
            this._onDispose = this.register(new s.EventEmitter());
            this.onDispose = this._onDispose.event;
            this._cachedBg = null;
            this._cachedFg = null;
            this.marker = e.marker;
            if (this.options.overviewRulerOptions && !this.options.overviewRulerOptions.position) {
              this.options.overviewRulerOptions.position = "full";
            }
          }
        }
      },
      4348: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.InstantiationService = t.ServiceCollection = undefined;
        let r = i(2585);
        let s = i(8343);
        class n {
          set(e, t) {
            let i = this._entries.get(e);
            this._entries.set(e, t);
            return i;
          }
          forEach(e) {
            for (let [t, i] of this._entries.entries()) {
              e(t, i);
            }
          }
          has(e) {
            return this._entries.has(e);
          }
          get(e) {
            return this._entries.get(e);
          }
          constructor(...e) {
            this._entries = new Map();
            for (let [t, i] of e) {
              this.set(t, i);
            }
          }
        }
        t.ServiceCollection = n;
        t.InstantiationService = class {
          setService(e, t) {
            this._services.set(e, t);
          }
          getService(e) {
            return this._services.get(e);
          }
          createInstance(e) {
            var t = arguments.length;
            var i = Array(t > 1 ? t - 1 : 0);
            var r = 1;
            for (; r < t; r++) {
              i[r - 1] = arguments[r];
            }
            let n = s.getServiceDependencies(e).sort((e, t) => e.index - t.index);
            let o = [];
            for (let t of n) {
              let i = this._services.get(t.id);
              if (!i) {
                throw Error(`[createInstance] ${e.name} depends on UNKNOWN service ${t.id}.`);
              }
              o.push(i);
            }
            let a = n.length > 0 ? n[0].index : i.length;
            if (i.length !== a) {
              throw Error(`[createInstance] First service dependency of ${e.name} at position ${a + 1} conflicts with ${i.length} static arguments`);
            }
            return new e(...[...i, ...o]);
          }
          constructor() {
            this._services = new n();
            this._services.set(r.IInstantiationService, this);
          }
        };
      },
      7866: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.traceCall = t.setTraceLogger = t.LogService = undefined;
        let n = i(844);
        let o = i(2585);
        let a = {
          trace: o.LogLevelEnum.TRACE,
          debug: o.LogLevelEnum.DEBUG,
          info: o.LogLevelEnum.INFO,
          warn: o.LogLevelEnum.WARN,
          error: o.LogLevelEnum.ERROR,
          off: o.LogLevelEnum.OFF
        };
        let h;
        let l = t.LogService = class extends n.Disposable {
          get logLevel() {
            return this._logLevel;
          }
          _updateLogLevel() {
            this._logLevel = a[this._optionsService.rawOptions.logLevel];
          }
          _evalLazyOptionalParams(e) {
            for (let t = 0; t < e.length; t++) {
              if (typeof e[t] == "function") {
                e[t] = e[t]();
              }
            }
          }
          _log(e, t, i) {
            this._evalLazyOptionalParams(i);
            e.call(console, (this._optionsService.options.logger ? "" : "xterm.js: ") + t, ...i);
          }
          trace(e) {
            var t;
            var r = arguments.length;
            var s = Array(r > 1 ? r - 1 : 0);
            var n = 1;
            for (; n < r; n++) {
              s[n - 1] = arguments[n];
            }
            if (this._logLevel <= o.LogLevelEnum.TRACE) {
              this._log(((t = this._optionsService.options.logger) === null || t === undefined ? undefined : t.trace.bind(this._optionsService.options.logger)) ?? console.log, e, s);
            }
          }
          debug(e) {
            var t;
            var r = arguments.length;
            var s = Array(r > 1 ? r - 1 : 0);
            var n = 1;
            for (; n < r; n++) {
              s[n - 1] = arguments[n];
            }
            if (this._logLevel <= o.LogLevelEnum.DEBUG) {
              this._log(((t = this._optionsService.options.logger) === null || t === undefined ? undefined : t.debug.bind(this._optionsService.options.logger)) ?? console.log, e, s);
            }
          }
          info(e) {
            var t;
            var r = arguments.length;
            var s = Array(r > 1 ? r - 1 : 0);
            var n = 1;
            for (; n < r; n++) {
              s[n - 1] = arguments[n];
            }
            if (this._logLevel <= o.LogLevelEnum.INFO) {
              this._log(((t = this._optionsService.options.logger) === null || t === undefined ? undefined : t.info.bind(this._optionsService.options.logger)) ?? console.info, e, s);
            }
          }
          warn(e) {
            var t;
            var r = arguments.length;
            var s = Array(r > 1 ? r - 1 : 0);
            var n = 1;
            for (; n < r; n++) {
              s[n - 1] = arguments[n];
            }
            if (this._logLevel <= o.LogLevelEnum.WARN) {
              this._log(((t = this._optionsService.options.logger) === null || t === undefined ? undefined : t.warn.bind(this._optionsService.options.logger)) ?? console.warn, e, s);
            }
          }
          error(e) {
            var t;
            var r = arguments.length;
            var s = Array(r > 1 ? r - 1 : 0);
            var n = 1;
            for (; n < r; n++) {
              s[n - 1] = arguments[n];
            }
            if (this._logLevel <= o.LogLevelEnum.ERROR) {
              this._log(((t = this._optionsService.options.logger) === null || t === undefined ? undefined : t.error.bind(this._optionsService.options.logger)) ?? console.error, e, s);
            }
          }
          constructor(e) {
            super();
            this._optionsService = e;
            this._logLevel = o.LogLevelEnum.OFF;
            this._updateLogLevel();
            this.register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel()));
            h = this;
          }
        };
        t.LogService = l = r([s(0, o.IOptionsService)], l);
        t.setTraceLogger = function (e) {
          h = e;
        };
        t.traceCall = function (e, t, i) {
          if (typeof i.value != "function") {
            throw Error("not supported");
          }
          let r = i.value;
          i.value = function () {
            var e = arguments.length;
            var t = Array(e);
            var i = 0;
            for (; i < e; i++) {
              t[i] = arguments[i];
            }
            if (h.logLevel !== o.LogLevelEnum.TRACE) {
              return r.apply(this, t);
            }
            h.trace(`GlyphRenderer#${r.name}(${t.map(e => JSON.stringify(e)).join(", ")})`);
            let s = r.apply(this, t);
            h.trace(`GlyphRenderer#${r.name} return`, s);
            return s;
          };
        };
      },
      7302: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.OptionsService = t.DEFAULT_OPTIONS = undefined;
        let r = i(8460);
        let s = i(844);
        let n = i(6114);
        t.DEFAULT_OPTIONS = {
          cols: 80,
          rows: 24,
          cursorBlink: false,
          cursorStyle: "block",
          cursorWidth: 1,
          cursorInactiveStyle: "outline",
          customGlyphs: true,
          drawBoldTextInBrightColors: true,
          documentOverride: null,
          fastScrollModifier: "alt",
          fastScrollSensitivity: 5,
          fontFamily: "courier-new, courier, monospace",
          fontSize: 15,
          fontWeight: "normal",
          fontWeightBold: "bold",
          ignoreBracketedPasteMode: false,
          lineHeight: 1,
          letterSpacing: 0,
          linkHandler: null,
          logLevel: "info",
          logger: null,
          scrollback: 1000,
          scrollOnUserInput: true,
          scrollSensitivity: 1,
          screenReaderMode: false,
          smoothScrollDuration: 0,
          macOptionIsMeta: false,
          macOptionClickForcesSelection: false,
          minimumContrastRatio: 1,
          disableStdin: false,
          allowProposedApi: false,
          allowTransparency: false,
          tabStopWidth: 8,
          theme: {},
          rescaleOverlappingGlyphs: false,
          rightClickSelectsWord: n.isMac,
          windowOptions: {},
          windowsMode: false,
          windowsPty: {},
          wordSeparator: " ()[]{}',\"`",
          altClickMovesCursor: true,
          convertEol: false,
          termName: "xterm",
          cancelEvents: false,
          overviewRulerWidth: 0
        };
        let o = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
        class a extends s.Disposable {
          onSpecificOptionChange(e, t) {
            return this.onOptionChange(i => {
              if (i === e) {
                t(this.rawOptions[e]);
              }
            });
          }
          onMultipleOptionChange(e, t) {
            return this.onOptionChange(i => {
              if (e.indexOf(i) !== -1) {
                t();
              }
            });
          }
          _setupOptions() {
            let e = e => {
              if (!(e in t.DEFAULT_OPTIONS)) {
                throw Error(`No option with key "${e}"`);
              }
              return this.rawOptions[e];
            };
            let i = (e, i) => {
              if (!(e in t.DEFAULT_OPTIONS)) {
                throw Error(`No option with key "${e}"`);
              }
              i = this._sanitizeAndValidateOption(e, i);
              if (this.rawOptions[e] !== i) {
                this.rawOptions[e] = i;
                this._onOptionChange.fire(e);
              }
            };
            for (let t in this.rawOptions) {
              let r = {
                get: e.bind(this, t),
                set: i.bind(this, t)
              };
              Object.defineProperty(this.options, t, r);
            }
          }
          _sanitizeAndValidateOption(e, i) {
            switch (e) {
              case "cursorStyle":
                var r;
                i ||= t.DEFAULT_OPTIONS[e];
                if ((r = i) !== "block" && r !== "underline" && r !== "bar") {
                  throw Error(`"${i}" is not a valid value for ${e}`);
                }
                break;
              case "wordSeparator":
                i ||= t.DEFAULT_OPTIONS[e];
                break;
              case "fontWeight":
              case "fontWeightBold":
                if (typeof i == "number" && i >= 1 && i <= 1000) {
                  break;
                }
                i = o.includes(i) ? i : t.DEFAULT_OPTIONS[e];
                break;
              case "cursorWidth":
                i = Math.floor(i);
              case "lineHeight":
              case "tabStopWidth":
                if (i < 1) {
                  throw Error(`${e} cannot be less than 1, value: ${i}`);
                }
                break;
              case "minimumContrastRatio":
                i = Math.max(1, Math.min(21, Math.round(i * 10) / 10));
                break;
              case "scrollback":
                if ((i = Math.min(i, 4294967295)) < 0) {
                  throw Error(`${e} cannot be less than 0, value: ${i}`);
                }
                break;
              case "fastScrollSensitivity":
              case "scrollSensitivity":
                if (i <= 0) {
                  throw Error(`${e} cannot be less than or equal to 0, value: ${i}`);
                }
                break;
              case "rows":
              case "cols":
                if (!i && i !== 0) {
                  throw Error(`${e} must be numeric, value: ${i}`);
                }
                break;
              case "windowsPty":
                i = i ?? {};
            }
            return i;
          }
          constructor(e) {
            super();
            this._onOptionChange = this.register(new r.EventEmitter());
            this.onOptionChange = this._onOptionChange.event;
            let i = {
              ...t.DEFAULT_OPTIONS
            };
            for (let t in e) {
              if (t in i) {
                try {
                  let r = e[t];
                  i[t] = this._sanitizeAndValidateOption(t, r);
                } catch (e) {}
              }
            }
            this.rawOptions = i;
            this.options = {
              ...i
            };
            this._setupOptions();
            this.register(s.toDisposable(() => {
              this.rawOptions.linkHandler = null;
              this.rawOptions.documentOverride = null;
            }));
          }
        }
        t.OptionsService = a;
      },
      2660: function (e, t, i) {
        var r = this && this.__decorate || function (e, t, i, r) {
          var s;
          var n = arguments.length;
          var o = n < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, i) : r;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
            o = Reflect.decorate(e, t, i, r);
          } else {
            for (var a = e.length - 1; a >= 0; a--) {
              if (s = e[a]) {
                o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o;
              }
            }
          }
          if (n > 3 && o) {
            Object.defineProperty(t, i, o);
          }
          return o;
        };
        var s = this && this.__param || function (e, t) {
          return function (i, r) {
            t(i, r, e);
          };
        };
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.OscLinkService = undefined;
        let n = i(2585);
        let o = t.OscLinkService = class {
          registerLink(e) {
            let t = this._bufferService.buffer;
            if (e.id === undefined) {
              let i = t.addMarker(t.ybase + t.y);
              let r = {
                data: e,
                id: this._nextId++,
                lines: [i]
              };
              i.onDispose(() => this._removeMarkerFromLink(r, i));
              this._dataByLinkId.set(r.id, r);
              return r.id;
            }
            let i = this._getEntryIdKey(e);
            let r = this._entriesWithId.get(i);
            if (r) {
              this.addLineToLink(r.id, t.ybase + t.y);
              return r.id;
            }
            let s = t.addMarker(t.ybase + t.y);
            let n = {
              id: this._nextId++,
              key: this._getEntryIdKey(e),
              data: e,
              lines: [s]
            };
            s.onDispose(() => this._removeMarkerFromLink(n, s));
            this._entriesWithId.set(n.key, n);
            this._dataByLinkId.set(n.id, n);
            return n.id;
          }
          addLineToLink(e, t) {
            let i = this._dataByLinkId.get(e);
            if (i && i.lines.every(e => e.line !== t)) {
              let e = this._bufferService.buffer.addMarker(t);
              i.lines.push(e);
              e.onDispose(() => this._removeMarkerFromLink(i, e));
            }
          }
          getLinkData(e) {
            return this._dataByLinkId.get(e)?.data;
          }
          _getEntryIdKey(e) {
            return `${e.id};;${e.uri}`;
          }
          _removeMarkerFromLink(e, t) {
            let i = e.lines.indexOf(t);
            if (i !== -1) {
              e.lines.splice(i, 1);
              if (e.lines.length === 0) {
                if (e.data.id !== undefined) {
                  this._entriesWithId.delete(e.key);
                }
                this._dataByLinkId.delete(e.id);
              }
            }
          }
          constructor(e) {
            this._bufferService = e;
            this._nextId = 1;
            this._entriesWithId = new Map();
            this._dataByLinkId = new Map();
          }
        };
        t.OscLinkService = r([s(0, n.IBufferService)], o);
      },
      8343: (e, t) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.createDecorator = t.getServiceDependencies = t.serviceRegistry = undefined;
        let i = "di$target";
        let r = "di$dependencies";
        t.serviceRegistry = new Map();
        t.getServiceDependencies = function (e) {
          return e[r] || [];
        };
        t.createDecorator = function (e) {
          if (t.serviceRegistry.has(e)) {
            return t.serviceRegistry.get(e);
          }
          let s = function (e, t, n) {
            if (arguments.length != 3) {
              throw Error("@IServiceName-decorator can only be used to decorate a parameter");
            }
            if (e[i] === e) {
              e[r].push({
                id: s,
                index: n
              });
            } else {
              e[r] = [{
                id: s,
                index: n
              }];
              e[i] = e;
            }
          };
          s.toString = () => e;
          t.serviceRegistry.set(e, s);
          return s;
        };
      },
      2585: (e, t, i) => {
        var r;
        var s;
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.IDecorationService = t.IUnicodeService = t.IOscLinkService = t.IOptionsService = t.ILogService = t.LogLevelEnum = t.IInstantiationService = t.ICharsetService = t.ICoreService = t.ICoreMouseService = t.IBufferService = undefined;
        let n = i(8343);
        t.IBufferService = n.createDecorator("BufferService");
        t.ICoreMouseService = n.createDecorator("CoreMouseService");
        t.ICoreService = n.createDecorator("CoreService");
        t.ICharsetService = n.createDecorator("CharsetService");
        t.IInstantiationService = n.createDecorator("InstantiationService");
        (s = r || (t.LogLevelEnum = r = {}))[s.TRACE = 0] = "TRACE";
        s[s.DEBUG = 1] = "DEBUG";
        s[s.INFO = 2] = "INFO";
        s[s.WARN = 3] = "WARN";
        s[s.ERROR = 4] = "ERROR";
        s[s.OFF = 5] = "OFF";
        t.ILogService = n.createDecorator("LogService");
        t.IOptionsService = n.createDecorator("OptionsService");
        t.IOscLinkService = n.createDecorator("OscLinkService");
        t.IUnicodeService = n.createDecorator("UnicodeService");
        t.IDecorationService = n.createDecorator("DecorationService");
      },
      1480: (e, t, i) => {
        Object.defineProperty(t, "__esModule", {
          value: true
        });
        t.UnicodeService = undefined;
        let r = i(8460);
        let s = i(225);
        class n {
          static extractShouldJoin(e) {
            return (e & 1) != 0;
          }
          static extractWidth(e) {
            return e >> 1 & 3;
          }
          static extractCharKind(e) {
            return e >> 3;
          }
          static createPropertyValue(e, t, i = false) {
            return (e & 16777215) << 3 | (t & 3) << 1 | +!!i;
          }
          dispose() {
            this._onChange.dispose();
          }
          get versions() {
            return Object.keys(this._providers);
          }
          get activeVersion() {
            return this._active;
          }
          set activeVersion(e) {
            if (!this._providers[e]) {
              throw Error(`unknown Unicode version "${e}"`);
            }
            this._active = e;
            this._activeProvider = this._providers[e];
            this._onChange.fire(e);
          }
          register(e) {
            this._providers[e.version] = e;
          }
          wcwidth(e) {
            return this._activeProvider.wcwidth(e);
          }
          getStringCellWidth(e) {
            let t = 0;
            let i = 0;
            let r = e.length;
            for (let s = 0; s < r; ++s) {
              let o = e.charCodeAt(s);
              if (o >= 55296 && o <= 56319) {
                if (++s >= r) {
                  return t + this.wcwidth(o);
                }
                let i = e.charCodeAt(s);
                if (i >= 56320 && i <= 57343) {
                  o = (o - 55296) * 1024 + i - 56320 + 65536;
                } else {
                  t += this.wcwidth(i);
                }
              }
              let a = this.charProperties(o, i);
              let h = n.extractWidth(a);
              if (n.extractShouldJoin(a)) {
                h -= n.extractWidth(i);
              }
              t += h;
              i = a;
            }
            return t;
          }
          charProperties(e, t) {
            return this._activeProvider.charProperties(e, t);
          }
          constructor() {
            this._providers = Object.create(null);
            this._active = "";
            this._onChange = new r.EventEmitter();
            this.onChange = this._onChange.event;
            let e = new s.UnicodeV6();
            this.register(e);
            this._active = e.version;
            this._activeProvider = e;
          }
        }
        t.UnicodeService = n;
      }
    };
    var t = {};
    function i(r) {
      var s = t[r];
      if (s !== undefined) {
        return s.exports;
      }
      var n = t[r] = {
        exports: {}
      };
      e[r].call(n.exports, n, n.exports, i);
      return n.exports;
    }
    var r = {};
    (() => {
      Object.defineProperty(r, "__esModule", {
        value: true
      });
      r.Terminal = undefined;
      let e = i(9042);
      let t = i(3236);
      let s = i(844);
      let n = i(5741);
      let o = i(8285);
      let a = i(7975);
      let h = i(7090);
      let l = ["cols", "rows"];
      class c extends s.Disposable {
        _checkReadonlyOptions(e) {
          if (l.includes(e)) {
            throw Error(`Option "${e}" can only be set in the constructor`);
          }
        }
        _checkProposedApi() {
          if (!this._core.optionsService.rawOptions.allowProposedApi) {
            throw Error("You must set the allowProposedApi option to true to use proposed API");
          }
        }
        get onBell() {
          return this._core.onBell;
        }
        get onBinary() {
          return this._core.onBinary;
        }
        get onCursorMove() {
          return this._core.onCursorMove;
        }
        get onData() {
          return this._core.onData;
        }
        get onKey() {
          return this._core.onKey;
        }
        get onLineFeed() {
          return this._core.onLineFeed;
        }
        get onRender() {
          return this._core.onRender;
        }
        get onResize() {
          return this._core.onResize;
        }
        get onScroll() {
          return this._core.onScroll;
        }
        get onSelectionChange() {
          return this._core.onSelectionChange;
        }
        get onTitleChange() {
          return this._core.onTitleChange;
        }
        get onWriteParsed() {
          return this._core.onWriteParsed;
        }
        get element() {
          return this._core.element;
        }
        get parser() {
          this._parser ||= new a.ParserApi(this._core);
          return this._parser;
        }
        get unicode() {
          this._checkProposedApi();
          return new h.UnicodeApi(this._core);
        }
        get textarea() {
          return this._core.textarea;
        }
        get rows() {
          return this._core.rows;
        }
        get cols() {
          return this._core.cols;
        }
        get buffer() {
          this._buffer ||= this.register(new o.BufferNamespaceApi(this._core));
          return this._buffer;
        }
        get markers() {
          this._checkProposedApi();
          return this._core.markers;
        }
        get modes() {
          let e = this._core.coreService.decPrivateModes;
          let t = "none";
          switch (this._core.coreMouseService.activeProtocol) {
            case "X10":
              t = "x10";
              break;
            case "VT200":
              t = "vt200";
              break;
            case "DRAG":
              t = "drag";
              break;
            case "ANY":
              t = "any";
          }
          return {
            applicationCursorKeysMode: e.applicationCursorKeys,
            applicationKeypadMode: e.applicationKeypad,
            bracketedPasteMode: e.bracketedPasteMode,
            insertMode: this._core.coreService.modes.insertMode,
            mouseTrackingMode: t,
            originMode: e.origin,
            reverseWraparoundMode: e.reverseWraparound,
            sendFocusMode: e.sendFocus,
            wraparoundMode: e.wraparound
          };
        }
        get options() {
          return this._publicOptions;
        }
        set options(e) {
          for (let t in e) {
            this._publicOptions[t] = e[t];
          }
        }
        blur() {
          this._core.blur();
        }
        focus() {
          this._core.focus();
        }
        input(e) {
          let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
          this._core.input(e, t);
        }
        resize(e, t) {
          this._verifyIntegers(e, t);
          this._core.resize(e, t);
        }
        open(e) {
          this._core.open(e);
        }
        attachCustomKeyEventHandler(e) {
          this._core.attachCustomKeyEventHandler(e);
        }
        attachCustomWheelEventHandler(e) {
          this._core.attachCustomWheelEventHandler(e);
        }
        registerLinkProvider(e) {
          return this._core.registerLinkProvider(e);
        }
        registerCharacterJoiner(e) {
          this._checkProposedApi();
          return this._core.registerCharacterJoiner(e);
        }
        deregisterCharacterJoiner(e) {
          this._checkProposedApi();
          this._core.deregisterCharacterJoiner(e);
        }
        registerMarker(e = 0) {
          this._verifyIntegers(e);
          return this._core.registerMarker(e);
        }
        registerDecoration(e) {
          this._checkProposedApi();
          this._verifyPositiveIntegers(e.x ?? 0, e.width ?? 0, e.height ?? 0);
          return this._core.registerDecoration(e);
        }
        hasSelection() {
          return this._core.hasSelection();
        }
        select(e, t, i) {
          this._verifyIntegers(e, t, i);
          this._core.select(e, t, i);
        }
        getSelection() {
          return this._core.getSelection();
        }
        getSelectionPosition() {
          return this._core.getSelectionPosition();
        }
        clearSelection() {
          this._core.clearSelection();
        }
        selectAll() {
          this._core.selectAll();
        }
        selectLines(e, t) {
          this._verifyIntegers(e, t);
          this._core.selectLines(e, t);
        }
        dispose() {
          super.dispose();
        }
        scrollLines(e) {
          this._verifyIntegers(e);
          this._core.scrollLines(e);
        }
        scrollPages(e) {
          this._verifyIntegers(e);
          this._core.scrollPages(e);
        }
        scrollToTop() {
          this._core.scrollToTop();
        }
        scrollToBottom() {
          this._core.scrollToBottom();
        }
        scrollToLine(e) {
          this._verifyIntegers(e);
          this._core.scrollToLine(e);
        }
        clear() {
          this._core.clear();
        }
        write(e, t) {
          this._core.write(e, t);
        }
        writeln(e, t) {
          this._core.write(e);
          this._core.write("\r\n", t);
        }
        paste(e) {
          this._core.paste(e);
        }
        refresh(e, t) {
          this._verifyIntegers(e, t);
          this._core.refresh(e, t);
        }
        reset() {
          this._core.reset();
        }
        clearTextureAtlas() {
          this._core.clearTextureAtlas();
        }
        loadAddon(e) {
          this._addonManager.loadAddon(this, e);
        }
        static get strings() {
          return e;
        }
        _verifyIntegers() {
          var e = arguments.length;
          var t = Array(e);
          var i = 0;
          for (; i < e; i++) {
            t[i] = arguments[i];
          }
          for (let e of t) {
            if (e === Infinity || isNaN(e) || e % 1 != 0) {
              throw Error("This API only accepts integers");
            }
          }
        }
        _verifyPositiveIntegers() {
          var e = arguments.length;
          var t = Array(e);
          var i = 0;
          for (; i < e; i++) {
            t[i] = arguments[i];
          }
          for (let e of t) {
            if (e && (e === Infinity || isNaN(e) || e % 1 != 0 || e < 0)) {
              throw Error("This API only accepts positive integers");
            }
          }
        }
        constructor(e) {
          super();
          this._core = this.register(new t.Terminal(e));
          this._addonManager = this.register(new n.AddonManager());
          this._publicOptions = {
            ...this._core.options
          };
          let i = e => this._core.options[e];
          let r = (e, t) => {
            this._checkReadonlyOptions(e);
            this._core.options[e] = t;
          };
          for (let e in this._core.options) {
            let t = {
              get: i.bind(this, e),
              set: r.bind(this, e)
            };
            Object.defineProperty(this._publicOptions, e, t);
          }
        }
      }
      r.Terminal = c;
    })();
    return r;
  })();
  module.exports = s();
}