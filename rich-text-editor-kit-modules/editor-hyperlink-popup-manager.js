// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'HyperlinkPopupManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 594133
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var r;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var syntheticEventUtilities = require("synthetic-event-utilities") /*id: 97252*/;
  var editorRangeZoneClass = require("editor-range-zone-class") /*id: 731872*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var boundMethodDecorator = require("bound-method-decorator") /*id: 369553*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  (i = o ||= {})[i.TYPE_HOVER = 0] = "TYPE_HOVER";
  i[i.TYPE_MODIFY_LINK = 1] = "TYPE_MODIFY_LINK";
  i[i.TYPE_MODIFY_ALL = 2] = "TYPE_MODIFY_ALL";
  i[i.TYPE_CREATE = 3] = "TYPE_CREATE";
  var f = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement("div", {
      ref: t,
      className: "link-modify-popup layout-row"
    }, reactCoreLibraryReexport.createElement("div", {
      className: "link-popup__input-group"
    }, reactCoreLibraryReexport.createElement("div", {
      className: "link-row"
    }, reactCoreLibraryReexport.createElement("span", {
      className: "link-modify-text"
    }, e.link), e.editable && reactCoreLibraryReexport.createElement("button", {
      onClick: e.onClickModify,
      className: "link-modify-submit"
    }, reactCoreLibraryReexport.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, reactCoreLibraryReexport.createElement("path", {
      d: "m17.57 7.244-.006-.006.37-.37a1 1 0 0 0 .001-1.412l-3.434-3.453-.002-.002a1 1 0 0 0-1.414 0l-.705.706.01.01L2 13.186V17a1 1 0 0 0 1 1h3.814L17.57 7.244Zm-3.273.389-2.015-2.015 1.487-1.515 2.023 2.034-1.495 1.496Zm-3.415-.587 2.002 2.002-6.913 6.92h-.004l-1.934-1.935v-.003l6.849-6.984ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z",
      fill: "#2B2F36"
    }))), e.editable && reactCoreLibraryReexport.createElement("button", {
      onClick: e.onDeleteLink,
      className: "link-modify-delete"
    }, reactCoreLibraryReexport.createElement("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, reactCoreLibraryReexport.createElement("path", {
      d: "m10.652 19.131 1.815-2.42 1.429 1.428-1.644 2.192a5.037 5.037 0 1 1-7.963-6.168l1.43-1.788a1 1 0 0 1 1.562 1.25l-1.43 1.787a3.037 3.037 0 1 0 4.8 3.719Zm4.455-2.61-1.45-1.45-1.161-1.16c0-.001 0 0 0 0L8.073 9.486 2.707 4.121a1 1 0 1 1 1.414-1.414l16.97 16.97a1 1 0 1 1-1.414 1.415l-4.57-4.57ZM13.348 4.869 11.532 7.29l-1.428-1.429 1.644-2.192a5.037 5.037 0 1 1 7.962 6.168l-1.43 1.788a1 1 0 1 1-1.561-1.25l1.43-1.787a3.037 3.037 0 1 0-4.801-3.719Z",
      fill: "#2B2F36"
    }))))));
  });
  var p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    var r = e.i18n;
    var l = e.type;
    var s = e.data;
    var u = !!e.data.entity?.attributes?.image;
    var d = r["hyperlink.text"];
    var c = r["hyperlink.link"];
    var f = r["hyperlink.determine"];
    var p = r["hyperlink.add-link"];
    var v = r["hyperlink.enter-text"];
    var g = !u && (l === o.TYPE_MODIFY_ALL || l === o.TYPE_CREATE);
    var m = reactCoreLibraryReexport.useRef(null);
    var y = reactCoreLibraryReexport.useRef(null);
    reactCoreLibraryReexport.useEffect(function () {
      var e = requestAnimationFrame(function () {
        var e;
        var t;
        if (l === o.TYPE_CREATE) {
          if ((e = m.current) !== null && e !== undefined) {
            e.focus();
          }
        } else if (l === o.TYPE_MODIFY_LINK || l === o.TYPE_MODIFY_ALL) {
          if ((t = y.current) !== null && t !== undefined) {
            t.focus();
          }
        }
      });
      return function () {
        cancelAnimationFrame(e);
      };
    }, []);
    var b = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(s.text), 2);
    var S = b[0];
    var E = b[1];
    var C = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState(s.link), 2);
    var R = C[0];
    var w = C[1];
    function z(t) {
      if (t.keyCode === 13) {
        t.preventDefault();
        t.stopPropagation();
        if (e.onValidLink(R)) {
          e.onSubmit({
            text: S,
            link: R
          });
        }
      } else if (t.keyCode === 27) {
        t.preventDefault();
        t.stopPropagation();
        e.onEsc();
      }
    }
    return reactCoreLibraryReexport.createElement("div", {
      ref: t,
      className: "link-popup layout-row"
    }, reactCoreLibraryReexport.createElement("svg", {
      className: "link-popup__triangle",
      width: "20px",
      height: "20px",
      viewBox: "271 193 224 132",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }), reactCoreLibraryReexport.createElement("div", {
      className: "link-popup__input-group"
    }, g && reactCoreLibraryReexport.createElement("div", {
      className: "link-row"
    }, reactCoreLibraryReexport.createElement("span", {
      className: "link-row-text"
    }, d), reactCoreLibraryReexport.createElement("input", {
      ref: m,
      type: "text",
      spellCheck: false,
      placeholder: v,
      value: S,
      onKeyDown: z,
      onChange: function (e) {
        E(e.target.value);
      },
      className: "link-row-input text-input"
    })), reactCoreLibraryReexport.createElement("div", {
      className: "link-row"
    }, reactCoreLibraryReexport.createElement("span", {
      className: "link-row-text"
    }, c), reactCoreLibraryReexport.createElement("input", {
      ref: y,
      onKeyDown: z,
      type: "text",
      spellCheck: false,
      className: "link-row-input link-input",
      value: R,
      onChange: function (e) {
        w(e.target.value);
      },
      placeholder: p
    }), reactCoreLibraryReexport.createElement("button", {
      onClick: function () {
        return e.onSubmit({
          text: S,
          link: R
        });
      },
      className: "link-submit",
      disabled: !e.onValidLink(R)
    }, f))));
  });
  var v = function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      n.hoverUIRef = reactCoreLibraryReexport.createRef();
      n.modifyUIRef = reactCoreLibraryReexport.createRef();
      n.handleClickModify = function () {
        n.setState({
          type: o.TYPE_MODIFY_ALL
        }, function () {
          n.props.getTargetRect(n.modifyUIRef);
        });
        if (n.props.onClickModify) {
          n.props.onClickModify(n.props.data);
        }
      };
      n.handleDelete = function () {
        n.props.onClickDelete(n.props.data);
      };
      n.renderHoverUI = function () {
        var e = n.props;
        var t = e.editable;
        var i = e.data.link;
        return reactCoreLibraryReexport.createElement(f, {
          ref: n.hoverUIRef,
          link: i,
          editable: t,
          onClickModify: n.handleClickModify,
          onDeleteLink: n.handleDelete
        });
      };
      n.renderModfiyUI = function () {
        var e = n.props;
        var t = e.i18n;
        var i = e.data;
        var o = e.onSubmit;
        var r = e.onValidLink;
        var a = e.onEsc;
        var l = n.state.type;
        return reactCoreLibraryReexport.createElement(p, {
          ref: n.modifyUIRef,
          i18n: t,
          data: i,
          type: l,
          onSubmit: o,
          onValidLink: r,
          onEsc: a
        });
      };
      var i = t.data;
      var r = t.type;
      var a = i.text;
      var l = i.link;
      n.state = {
        type: r,
        text: a,
        link: l
      };
      return n;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.componentDidMount = function () {
      if (this.props.type === o.TYPE_HOVER) {
        this.props.getTargetRect(this.hoverUIRef);
      } else {
        this.props.getTargetRect(this.modifyUIRef);
      }
    };
    n.render = function () {
      var e = this.state.type;
      return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, e === o.TYPE_HOVER && this.renderHoverUI(), e !== o.TYPE_HOVER && this.renderModfiyUI());
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  (r ||= {}).BC = "BC";
  function g(e) {
    var t = e.children;
    var n = e.targetRect;
    var i = e.anchorRect;
    var o = {
      left: -1000,
      top: 0
    };
    var l = typescriptHelpers_1.readIterator(reactCoreLibraryReexport.useState({
      left: -1000,
      top: 0
    }), 2);
    var s = l[0];
    var u = l[1];
    var d = reactCoreLibraryReexport.useRef(null);
    function c() {
      var a;
      var l;
      var s;
      var u;
      var c;
      var h;
      var f;
      var p;
      var v;
      var g;
      var m;
      var y;
      var b;
      var S;
      var E;
      var C;
      var R;
      var w;
      var z;
      var I;
      var M;
      var k;
      var T;
      var x;
      var L;
      var D;
      var A;
      var _;
      var N;
      var P;
      var O;
      var H;
      var W;
      var Z;
      if (!n) {
        return o;
      }
      l = {
        boxRect: n,
        relativeRect: ((a = d.current?.parentElement?.parentElement) === null || a === undefined ? undefined : a.getBoundingClientRect()) || document.body.getBoundingClientRect(),
        anchorRect: i
      };
      s = r.BC;
      u = l.boxRect;
      c = l.relativeRect;
      h = l.anchorRect;
      f = c.left;
      p = c.top;
      v = c.height;
      g = c.width;
      m = h.top;
      y = h.left;
      b = h.right;
      S = h.bottom;
      R = {
        top: m - p,
        left: y - f,
        right: b - f,
        bottom: S - p,
        width: E = h.width,
        height: C = h.height
      };
      w = {
        top: Math.min(m, R.top),
        left: Math.min(y, R.left),
        right: g - R.left - E,
        bottom: v - R.top - C,
        width: E,
        height: C
      };
      if (s === r.BC) {
        M = (z = {
          absRect: R,
          boxRect: u,
          anchorRect: h,
          remainRect: w
        }).absRect;
        k = z.boxRect;
        T = z.anchorRect;
        x = z.remainRect;
        L = M.left;
        D = M.top;
        A = k.width;
        _ = k.height;
        N = T.width;
        P = T.height;
        O = x.right;
        H = x.left;
        W = x.bottom;
        Z = x.top;
        I = H + N / 2 >= A / 2 && O + N / 2 >= A / 2 ? {
          left: L + N / 2 - A / 2,
          top: 0
        } : O + N / 2 >= A ? {
          left: L,
          top: 0
        } : H + N / 2 >= A ? {
          left: Math.min(L + N + O - A, L),
          top: 0
        } : {
          left: 0,
          top: D + P
        };
        if (W >= _) {
          I.top = D + P;
        } else if (Z >= _) {
          I.top = D - _;
        } else {
          I.top = D - _ * Math.abs(Z) / (Math.abs(W) + Math.abs(Z));
        }
        return I;
      } else {
        return {
          top: 0,
          left: 0
        };
      }
    }
    function f() {
      try {
        u(c());
      } catch (e) {}
    }
    reactCoreLibraryReexport.useEffect(function () {
      f();
    }, [n, i]);
    return reactCoreLibraryReexport.createElement("div", {
      ref: d,
      style: typescriptHelpers_1.assign({
        position: "absolute",
        zIndex: 999
      }, s)
    }, t);
  }
  var m = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.state = {
        target: null
      };
      t.getTargetRect = function (e) {
        var n;
        t.setState({
          target: (n = e.current) === null || n === undefined ? undefined : n.getBoundingClientRect()
        });
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    t.prototype.render = function () {
      var e = this.props;
      var t = e.i18n;
      var n = e.data;
      var i = e.type;
      var o = e.editable;
      var r = e.anchorRect;
      var a = e.onSubmit;
      var l = e.onValidLink;
      var s = e.onEsc;
      var u = e.onClickModify;
      var d = e.onClickDelete;
      return reactCoreLibraryReexport.createElement(g, {
        anchorRect: r,
        targetRect: this.state.target
      }, reactCoreLibraryReexport.createElement(v, {
        i18n: t,
        data: n,
        type: i,
        editable: o,
        onSubmit: a,
        onValidLink: l,
        onEsc: s,
        onClickModify: u,
        onClickDelete: d,
        getTargetRect: this.getTargetRect
      }));
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var quillDeltaUrlLinkProcessor = require("quill-delta-url-link-processor") /*id: 375105*/;
  var hyperlinkConstants = require("hyperlink-constants") /*id: 80361*/;
  var editorHyperlinkRenderer = require("editor-hyperlink-renderer") /*id: 623453*/;
  var C = hyperlinkConstants.clientsidePrefix + "link_mark";
  var R = "hyperlink";
  var w = function (e) {
    function t(n) {
      var i = e.call(this, n) || this;
      i.show = false;
      i.popupMountNode = null;
      i.preventNextClick = false;
      i.closePopupTimer = 0;
      i.mouseEnterTimer = 0;
      i.linkOperations = [];
      i.currentSelection = null;
      i.handleMouseUp = function (e) {
        var t;
        var n = e.target;
        if ((t = i.popupMountNode) === null || t === undefined ? undefined : t.contains(n)) {
          i.preventNextClick = true;
        }
      };
      i.handleMouseLeave = function () {
        if (i.mouseEnterTimer) {
          clearTimeout(i.mouseEnterTimer);
        }
        if (i.popupType === o.TYPE_HOVER) {
          i.closePopupTimer = setTimeout(function () {
            i.closePopup();
          }, t.closeDuration);
        }
      };
      i.handleMouseEnter = function (e) {
        var t = i.editor;
        var n = e.target;
        var r = n && n.closest(".outer-u-container");
        if (r) {
          n = r;
        }
        if (i.closePopupTimer) {
          clearTimeout(i.closePopupTimer);
        }
        i.mouseEnterTimer = window.setTimeout(function () {
          var e;
          var r = n && syntheticEventUtilities.createSelectionRange(n, i.editor);
          if (r) {
            var a = t.getContentState().getEntities(r);
            if (a.length > 1) {
              a = [{
                start: a[0].start,
                end: a[a.length - 1].end,
                text: a.map(function (e) {
                  return e.text;
                }).join(""),
                attributes: a[0].attributes
              }];
            }
            var s = a[0];
            var u = "";
            var d = "";
            if (s.attributes[i.getAttributeKey()]) {
              var c = i.formatAttributesFromEditor({
                insert: s.text,
                attributes: s.attributes
              });
              if (!c) {
                return;
              }
              u = s.text;
              d = c.href;
            } else {
              var h = r.start;
              var f = r.end;
              var p = (e = t.getContentState().getZoneState(h.zoneId)) === null || e === undefined ? undefined : e.getLine(h.line);
              if (!p) {
                return;
              }
              d = u = p.getModelText().slice(h.offset, f.offset);
            }
            i.currentSelection = {
              range: r,
              position: r.toPosition()
            };
            var v = t.rectModule.getRangeRect({
              start: s.start,
              end: s.end
            });
            var g = i.relativeRectToScreen(v);
            i.unmountPopup();
            i.openPopup({
              range: r,
              anchorRect: g,
              data: {
                text: u,
                link: i.completeURLProtocolWithCustom(d),
                entity: s
              },
              type: o.TYPE_HOVER
            });
          }
        }, 500);
      };
      i.handleClick = function (e) {
        if (i.show && i.popupType !== o.TYPE_HOVER) {
          e.preventDefault();
          return;
        }
        var t = e.currentTarget.getAttribute("href");
        if (i.subProps.onClick) {
          if (!t) {
            return;
          }
          i.subProps.onClick(e, t);
        } else {
          e.preventDefault();
          if (!t) {
            return;
          }
          window.open(i.completeURLProtocolWithCustom(t), i.props.linkDefaultTarget || "_blank", "noopener,noreferrer");
        }
      };
      i.doInsertLink = function (e, t) {
        var n;
        var o;
        var r;
        var l;
        var u;
        var d = i.editor;
        var c = i.selection;
        var h = c.start;
        var f = c.end;
        var p = i.genHyperLinkAttribFromURL(e);
        var v = d.getContentState();
        var g = v.getZoneState(h.zoneId);
        if (g) {
          var m = i.selection.isCollapsed();
          var y = g.getEntities({
            start: h,
            end: f
          }, function (e) {
            return e === i.getAttributeKey();
          });
          var b = "";
          if (!m) {
            try {
              var S = typescriptHelpers_1.getValues(y);
              var E = S.next();
              for (; !E.done; E = S.next()) {
                var C = E.value;
                b += C.text;
                var w = g.getEntities([[i.getAttributeKey(), C.attributes[i.getAttributeKey()]]]);
                try {
                  r = undefined;
                  var z = typescriptHelpers_1.getValues(w);
                  var I = z.next();
                  for (; !I.done; I = z.next()) {
                    var M = I.value;
                    i.linkOperations.push(v.setAttributes(M, ((u = {})[i.getAttributeKey()] = "", u), {
                      type: R
                    }));
                  }
                } catch (e) {
                  r = {
                    error: e
                  };
                } finally {
                  try {
                    if (I && !I.done && (l = z.return)) {
                      l.call(z);
                    }
                  } finally {
                    if (r) {
                      throw r.error;
                    }
                  }
                }
              }
            } catch (e) {
              n = {
                error: e
              };
            } finally {
              try {
                if (E && !E.done && (o = S.return)) {
                  o.call(S);
                }
              } finally {
                if (n) {
                  throw n.error;
                }
              }
            }
          }
          if (!t && editorRangeZoneClass.EditorRangeZone.isPointEqual(h, f)) {
            t = e;
          }
          if (t && t !== b) {
            var k = v.replaceText({
              start: h,
              end: f
            }, t, p, {
              type: R
            });
            i.linkOperations.push(k);
          } else {
            var k = v.setAttributes({
              start: h,
              end: f
            }, p, {
              type: R
            });
            i.linkOperations.push(k);
          }
          if (f) {
            i.editor.once("paint", function () {
              var e = i.editor.getScrollContainer();
              if (t) {
                var n = v.getZoneState(h.zoneId);
                if (!n) {
                  return;
                }
                var o = n.pointToOffset(h);
                if (o !== null) {
                  var r = n.offsetToPoint(o + t.length);
                  var a = r.line;
                  var l = r.offset;
                  f.line = a;
                  f.offset = l;
                }
              }
              var s = (e == null ? undefined : e.scrollTop) || 0;
              d.scrollTo({
                top: s
              });
              d.focus();
              d.selection.setSelection({
                start: f,
                end: f
              }, true);
            });
          }
        }
      };
      i.handleDocumentClick = function (e) {
        var t;
        var n = e.target;
        if (!!document.body.contains(n) && !((t = i.popupMountNode) === null || t === undefined ? undefined : t.contains(n)) && !n.closest("[adit-key=\"hyperlink\"]") && !n.closest("[plugin-key=\"hyperlink\"]") && !i.preventNextClick) {
          i.closePopup();
        }
        i.preventNextClick = false;
      };
      i.handlePopUpMouseEnter = function () {
        if (i.closePopupTimer) {
          clearTimeout(i.closePopupTimer);
        }
      };
      i.subProps = n;
      i.register();
      return i;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    Object.defineProperty(n, "selection", {
      get: function () {
        if (this.currentSelection) {
          return this.currentSelection.range;
        } else {
          return this.editor.selection.getSelection();
        }
      },
      enumerable: false,
      configurable: true
    });
    n.getAttributeKey = function () {
      return hyperlinkConstants.hyperlink;
    };
    n.formatAttributesToEditor = function (e) {
      var t;
      (t = {
        href: "",
        linkId: ""
      })[this.getAttributeKey()] = JSON.stringify({
        href: e.href,
        linkId: e.linkId || ""
      });
      return t;
    };
    n.formatAttributesFromEditor = function (e) {
      try {
        var t = e.attributes;
        if (t && t[this.getAttributeKey()]) {
          var n = JSON.parse(t[this.getAttributeKey()]);
          return typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, t), {
            href: n.href,
            linkId: n.linkId
          });
        }
        return null;
      } catch (e) {
        return null;
      }
    };
    n.editorDidMount = function () {
      this.handelPopupMount();
    };
    n.destroy = function () {
      var t;
      this.closePopup();
      document.removeEventListener("click", this.handleDocumentClick);
      document.removeEventListener("mouseup", this.handleMouseUp);
      if (this.popupMountNode) {
        this.popupMountNode.removeEventListener("mouseenter", this.handlePopUpMouseEnter);
      }
      if (this.mouseEnterTimer) {
        clearTimeout(this.mouseEnterTimer);
      }
      if ((t = this.popupMountNode?.parentElement) !== null && t !== undefined) {
        t.removeChild(this.popupMountNode);
      }
      this.popupMountNode = null;
      this.inlineWrapperCache = null;
      this.unBindEditorEvents();
    };
    n.handelPopupMount = function () {
      var e;
      this.popupMountNode = document.createElement("div");
      this.popupMountNode.setAttribute("id", "@editor-kit-hyperlink-container-" + Math.random());
      this.popupMountNode.classList.add("adit-popup-container");
      this.popupMountNode.style.position = "relative";
      this.popupMountNode.style.top = "0px";
      this.popupMountNode.style.left = "0px";
      if ((e = this.subProps.getPopupContainer ? this.subProps.getPopupContainer() : document.body) == null ? undefined : e.firstChild) {
        e.insertBefore(this.popupMountNode, e.firstChild);
      } else {
        e.append(this.popupMountNode);
      }
      document.addEventListener("click", this.handleDocumentClick);
      document.addEventListener("mouseup", this.handleMouseUp);
      this.popupMountNode.addEventListener("mouseenter", this.handlePopUpMouseEnter);
    };
    n.handleClickModify = function (e) {
      this.popupType = o.TYPE_MODIFY_ALL;
      var t = e.entity.attributes;
      var n = this.editor.getContentState().getEntities([[this.getAttributeKey(), t[this.getAttributeKey()]]]).find(function (e) {
        return e.attributes === t;
      });
      if (n) {
        this.addLocalIdToRange(n);
      }
      this.addLinkBackColor();
    };
    n.handleClickDelete = function (e) {
      var t;
      var n = this.editor;
      var i = e.entity.attributes;
      var o = typescriptHelpers_1.readIterator(n.getContentState().getEntities([[this.getAttributeKey(), i[this.getAttributeKey()]]]), 1)[0];
      if (o) {
        this.addLocalIdToRange(o);
      }
      n.getContentState().setAttributes(this.selection, ((t = {})[this.getAttributeKey()] = "", t.removeLink = "true", t), {
        type: R,
        extra: {
          shouldAutoUrlHandle: true
        }
      });
      this.closePopup();
    };
    n.handleSave = function (e) {
      var t = e || {};
      var n = t.text;
      var i = t.link;
      var o = i == null ? undefined : i.trim();
      if (quillDeltaUrlLinkProcessor.isDataUrl(o)) {
        o = "";
      }
      if (o) {
        this.doInsertLink(o, n);
      }
      this.closePopup();
    };
    n.unmountPopup = function () {
      if (this.popupMountNode) {
        reactDomEntryWrapper.unmountComponentAtNode(this.popupMountNode);
      }
    };
    n.mountPopup = function (e) {
      if (this.popupMountNode) {
        reactDomEntryWrapper.render(e, this.popupMountNode);
      }
    };
    n.openPopup = function (e) {
      var t = this;
      var n = e.anchorRect;
      var i = e.data;
      var o = e.type;
      this.show = true;
      this.popupType = o;
      if (this.subProps.getEditLinkPopup) {
        var r = {
          i18n: this.subProps.i18n,
          data: i,
          type: o,
          anchorRect: n,
          onClickDelete: this.handleClickDelete,
          onClickModify: this.handleClickModify,
          onSubmit: this.handleSave,
          onValidLink: this.handleValidLink,
          onEsc: function () {
            return t.closePopup();
          },
          editable: this.editor.isEditable()
        };
        var a = this.subProps.getEditLinkPopup(r);
        this.mountPopup(a);
      }
    };
    n.closePopup = function () {
      var e = this;
      if (this.show) {
        this.removeLinkBackColor();
        this.unmountPopup();
      }
      this.show = false;
      this.currentSelection = null;
      this.removeLocalIdToRange();
      var t = this.linkOperations.filter(Boolean);
      this.linkOperations = [];
      if (t.length > 1) {
        var n = t.pop();
        t.reduceRight(function (t, n) {
          e.editor.undoModule.mergeRecords(n, t);
          return n;
        }, n);
      }
    };
    n.register = function () {
      var e = this;
      var t = this.editor;
      t.registerCommand(editorHyperlinkRenderer.HyperLinksRenderer.KEY, function () {
        var n = t.selection.getSelection();
        if (n) {
          e.currentSelection = {
            range: n,
            position: n.toPosition()
          };
          if (n.isCollapsed()) {
            e.handleHyperLinkCommand(n);
          } else {
            t.once(editorEventConstants.editorEventTypes.PAINT, function () {
              e.handleHyperLinkCommand(n);
            });
          }
          e.addLocalIdToRange(n);
        }
      });
    };
    n._handleContentChange = function (e) {
      var n = e.options;
      if (n.type !== R || n.type === R && (n == null ? undefined : n.extra)?.shouldAutoUrlHandle) {
        this.handleAutoUrl(e);
      }
      if (this.currentSelection) {
        var i = this.currentSelection.range.start.zoneId;
        var o = e.deltaSet.get(i);
        if (!o) {
          return;
        }
        var r = this.currentSelection.position;
        var a = this.editor.transformPosition(o, r);
        if (a !== r) {
          this.currentSelection = {
            range: a.toRange(),
            position: a
          };
        }
      }
    };
    n.handleHyperLinkCommand = function (e) {
      var t = this;
      var n = this.editor;
      if (this.show) {
        this.removeLinkBackColor();
        this.closePopup();
      } else {
        var i = e.isCollapsed();
        var r = n.rectModule.getCaretRect(e.start);
        this.openPopup({
          anchorRect: this.relativeRectToScreen(r),
          data: {
            text: "",
            link: ""
          },
          range: e,
          type: i ? o.TYPE_CREATE : o.TYPE_MODIFY_LINK
        });
        if (!i) {
          requestAnimationFrame(function () {
            t.addLinkBackColor();
          });
        }
      }
    };
    n.addLinkBackColor = function () {
      this.setLinkBackColor(true);
    };
    n.removeLinkBackColor = function () {
      this.setLinkBackColor(false);
    };
    n.setLinkBackColor = function (e) {
      var t;
      var n = this.editor.getContentState().getAttributes(this.selection.start, this.selection.end).toMap();
      if (e || n[hyperlinkConstants.linkBackground]) {
        var i = this.editor.getContentState().setAttributes(this.selection, ((t = {})[hyperlinkConstants.linkBackground] = e ? "true" : "", t), {
          type: R,
          extra: {
            needFormatToEditor: false
          }
        });
        this.linkOperations.push(i);
      }
    };
    n.addLocalIdToRange = function (e) {
      var t;
      var n = this.editor.getContentState().setAttributes(e, ((t = {})[C] = "true", t), {
        type: R,
        extra: {
          needFormatToEditor: false
        }
      });
      this.linkOperations.push(n);
    };
    n.removeLocalIdToRange = function () {
      var e;
      var t;
      var n;
      var i = this.editor.getContentState().getEntities([[C, "true"]]);
      if (i.length) {
        try {
          var o = typescriptHelpers_1.getValues(i);
          var r = o.next();
          for (; !r.done; r = o.next()) {
            var l = r.value;
            var s = this.editor.getContentState().setAttributes(l, ((n = {})[C] = "", n), {
              type: R,
              extra: {
                needFormatToEditor: false
              },
              nonundoable: true
            });
            this.linkOperations.push(s);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (r && !r.done && (t = o.return)) {
              t.call(o);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
      }
    };
    n.relativeRectToScreen = function (e) {
      var t = this.editor.getRect("0");
      var n = e.left;
      var i = e.top;
      var o = e.bottom;
      var r = e.right;
      var a = e.width;
      var l = e.height;
      return {
        left: t.left + n,
        top: Math.max(t.top + i, 40),
        right: t.left + r,
        bottom: t.top + o,
        width: a,
        height: l
      };
    };
    n.editorWillPaste = function (e) {
      var t = this;
      var n = e.deltaSet;
      if (n) {
        n.forEach(function (e) {
          if (e.zoneType === documentOperationConstants.structureTypes.Content) {
            e.forEach(function (e) {
              var i = e.attributes?.[t.getAttributeKey()];
              if (i) {
                var o = JSON.parse(i).href;
                if (o) {
                  var r = t.genHyperLinkAttribFromURL(o);
                  e.attributes = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, e.attributes), r);
                }
              }
            });
          }
        });
      }
    };
    t.closeDuration = 600;
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handelPopupMount", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleClickModify", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleClickDelete", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleSave", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "unmountPopup", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "mountPopup", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "openPopup", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "closePopup", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "register", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "_handleContentChange", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleHyperLinkCommand", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "addLinkBackColor", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "removeLinkBackColor", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "setLinkBackColor", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "addLocalIdToRange", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "removeLocalIdToRange", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "relativeRectToScreen", null);
    return t;
  }(editorHyperlinkRenderer.HyperLinksRenderer);
  function z(e) {
    return reactCoreLibraryReexport.createElement(m, typescriptHelpers_1.assign({}, e));
  }
  var I = function (e) {
    function t(t) {
      var n = this;
      var i = typescriptHelpers_1.assign({
        getEditLinkPopup: z,
        onContentChangeFlag: "false"
      }, t);
      return e.call(this, i) || this;
    }
    typescriptHelpers_1.inherits(t, e);
    return t;
  }(w);
  require.d(exports, {
    HyperlinkPopupManager: function () {
      return I;
    }
  });
}