// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E' to 'ImagePlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 424832
         */
module.exports = function (module, exports, require) {
  var i;
  var o;
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var reactDomContextDecorator = require("react-dom-context-decorator") /*id: 955275*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var boundMethodDecorator = require("bound-method-decorator") /*id: 369553*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var userAgentDetect = require("user-agent-detect") /*id: 68901*/;
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var m = ["tl", "tr", "br", "bl"];
  (i = o ||= {}).WRAPPER = "image-wrapper";
  i.CONTAINER = "image-container";
  var y = ["image/jpeg", "image/bmp", "image/png", "image/gif", "image/x-icon"];
  function b(e) {
    return e / Math.abs(e);
  }
  function S(e) {
    return "image-resize-rect-style-" + e;
  }
  function E(e) {
    return ".image-wrapper img[data-uuid=\"" + e + "\"]";
  }
  var C = randomStringGenerator.createRandomString(6);
  function R() {
    return randomStringGenerator.createRandomString(8);
  }
  function w(e) {
    e.forEach(function (e) {
      if (e instanceof contentStructureDelta.ContentDelta) {
        e.forEach(function (e) {
          if (e.attributes?.image) {
            e.attributes.uuid = R();
          }
        });
      }
    });
  }
  function z(e, t) {
    var n = e.start;
    var i = e.end;
    var o = n.zoneId;
    var r = t.getContentState().getZoneState(o);
    if (!r) {
      return {
        start: false,
        end: false
      };
    }
    var a = r.getLine(n.line);
    var l = r.getLine(i.line);
    if (a && l) {
      return {
        start: I(a),
        end: I(l)
      };
    } else {
      return {
        start: false,
        end: false
      };
    }
  }
  function I(e) {
    return e.getOps().some(function (e) {
      return e.attributes?.image;
    });
  }
  var syntheticEventUtilities = require("synthetic-event-utilities") /*id: 97252*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var T = function () {
    function e(e) {
      var t = this;
      this.editor = e;
      this.canDrag = false;
      this.pointX = 0;
      this.pointY = 0;
      this.pageX = 0;
      this.pageY = 0;
      this.diffX = 0;
      this.diffY = 0;
      this.body = document.body;
      this.isMoved = false;
      this.oriScrollTop = 0;
      this.events = new Map();
      this.bind = function () {
        document.addEventListener("mousemove", t.handleMouseMove);
        document.addEventListener("mousedown", t.handleMouseDown);
        document.addEventListener("mouseup", t.handleMouseUp);
        t.editor.once(editorEventConstants.editorEventTypes.PAINT, t.bindScrollEvent);
      };
      this.bindScrollEvent = function () {
        var e = t.editor.getScrollContainer();
        if (e) {
          e.addEventListener("scroll", t.handleScroll);
        }
      };
      this.isSameInstance = function (e) {
        return t.editor.getContainer().contains(e);
      };
      this.handleMouseDown = function (e) {
        if (e.target instanceof HTMLElement && !!t.editor.isEditable() && !!t.isSameInstance(e.target) && !!((o = e.target) === null || o === undefined ? undefined : o.classList.contains("point"))) {
          var n;
          var i;
          var o;
          var a;
          var s = t.editor.getScrollContainer();
          var u = (a = e.target.closest(".image-wrapper")) === null || a === undefined ? undefined : a.querySelector("img");
          if (u) {
            t.image = u;
            if (!t.image.closest(".unresize")) {
              var d = t.image.closest(".ace-line");
              t.oriScrollTop = (s == null ? undefined : s.scrollTop) ?? 0;
              t.resizeImageLineKey = null;
              t.direction = e.target.getAttribute("data-direction");
              t.imageWidth = t.image.clientWidth;
              t.imageHeight = t.image.clientHeight;
              t.imageMaxWidth = d.clientWidth;
              t.imageMaxWidth = t.imageMaxWidth && t.imageMaxWidth - 4;
              t.uuid = t.image.getAttribute("data-uuid");
              t.canDrag = true;
              t.pointX = e.pageX;
              t.pointY = e.pageY;
              t.alignment = "left";
              try {
                var c = typescriptHelpers_1.getValues([["align-left", "left"], ["align-center", "center"], ["align-right", "right"]]);
                var h = c.next();
                for (; !h.done; h = c.next()) {
                  var f = typescriptHelpers_1.readIterator(h.value, 2);
                  var p = f[0];
                  var v = f[1];
                  if (d.classList.contains(p)) {
                    t.alignment = v;
                  }
                }
              } catch (e) {
                n = {
                  error: e
                };
              } finally {
                try {
                  if (h && !h.done && (i = c.return)) {
                    i.call(c);
                  }
                } finally {
                  if (n) {
                    throw n.error;
                  }
                }
              }
              if (t.direction && ["tl", "br"].includes(t.direction)) {
                t.body.classList.add("keep-nwse-cursor");
              } else if (t.direction && ["tr", "bl"].includes(t.direction)) {
                t.body.classList.add("keep-nesw-cursor");
              }
              e.preventDefault();
              return false;
            }
          }
        }
      };
      this.applyDynamicResize = function (e) {
        var n = e.pageX;
        var i = e.pageY;
        var o = e.target;
        var a = e.scrollTop;
        if (t.direction && t.imageWidth && t.uuid && t.alignment && t.imageHeight && t.imageMaxWidth) {
          var l = a - t.oriScrollTop;
          t.diffX = n - t.pointX;
          t.diffY = i - t.pointY + l;
          t.isMoved = true;
          var s = {
            width: t.imageWidth,
            height: t.imageHeight
          };
          var u = {
            x: t.diffX,
            y: t.diffY
          };
          (function (e) {
            var t;
            var n;
            var i;
            var o;
            var a;
            var l;
            var s = e.direction;
            var u = e.alignment;
            var d = e.imageSize;
            var c = e.moveVector;
            var h = e.imageMaxWidth;
            var f = e.uuid;
            var p = function (e) {
              var t;
              var n;
              var i;
              var o;
              var a = e.direction;
              var l = e.alignment;
              var s = e.imageSize;
              var u = e.moveVector;
              var d = e.imageMaxWidth;
              t = a[0] === "t" ? -1 : 1;
              n = a[1] === "l" ? -1 : 1;
              var c = {
                width: s.width * n,
                height: s.height * t
              };
              var h = [b(c.width), b(c.height)];
              var f = u.x;
              var p = u.y;
              var v = l === "center" ? 2 : 1;
              var g = s.width / v;
              var m = s.height;
              var y = c.width / v;
              var S = c.height;
              var E = d / v;
              var C = y * S < 0 ? -1 : 1;
              var R = p * y * C < S * f * C;
              try {
                var w = typescriptHelpers_1.getValues([["left", "tr", "top"], ["center", "tl", "top"], ["center", "tr", "top"], ["right", "tl", "top"], ["left", "bl", "side"], ["right", "br", "side"]]);
                var z = w.next();
                for (; !z.done; z = w.next()) {
                  var I = z.value;
                  if (I[0] === l && I[1] === a) {
                    R = I[2] === "top";
                  }
                }
              } catch (e) {
                i = {
                  error: e
                };
              } finally {
                try {
                  if (z && !z.done && (o = w.return)) {
                    o.call(w);
                  }
                } finally {
                  if (i) {
                    throw i.error;
                  }
                }
              }
              var M = typescriptHelpers_1.readIterator((R ? [y + f, S * (y + f) / y] : [y * (S + p) / S, S + p]).map(function (e, t) {
                return e * h[t];
              }), 2);
              var k = M[0];
              var T = M[1];
              var x = [g < m ? 20 / v : g * 20 / m, g < m ? 20 / v * m / g : 20];
              var L = [E, E * m / g];
              var D = typescriptHelpers_1.readIterator([Math.round(Math.min(L[0], Math.max(x[0], k))), Math.round(Math.min(L[1], Math.max(x[1], T)))], 2);
              return {
                width: D[0] * v,
                height: D[1]
              };
            }({
              direction: s,
              alignment: u,
              imageSize: d,
              moveVector: c,
              imageMaxWidth: h
            });
            var v = p.width;
            var g = p.height;
            if (v !== d.width || g !== d.height) {
              t = v;
              n = 0;
              a = S(i = f);
              if ((o = (l = document.querySelector("#" + a)) == null ? undefined : l.parentNode) !== null && o !== undefined) {
                o.removeChild(l);
              }
              (l = document.createElement("style")).setAttribute("id", a);
              l.textContent = E(i) + "{\n        width: " + t + "px!important;\n    }";
              document.body.appendChild(l);
            }
          })({
            direction: t.direction,
            alignment: t.alignment,
            imageSize: s,
            moveVector: u,
            imageMaxWidth: t.imageMaxWidth,
            uuid: t.uuid
          });
          var d = o;
          if (!t.resizeImageLineKey) {
            while (d && d !== document.body && (!d.id || !/magicdomid/.test(d.id))) {
              d = d.parentElement;
            }
            t.resizeImageLineKey = o && o.id;
          }
        }
      };
      this.handleScroll = debounceUtilWrapper.createDebounce(function (e) {
        var i = e.target;
        if (i && t.canDrag && t.pageX && t.pageY && t.isSameInstance(i)) {
          var o = t.editor.getScrollContainer();
          t.applyDynamicResize({
            pageX: t.pageX,
            pageY: t.pageY,
            target: i,
            scrollTop: (o == null ? undefined : o.scrollTop) ?? 0
          });
        }
      }, 16);
      this.handleMouseMove = debounceUtilWrapper.createDebounce(function (e) {
        var i = e.target;
        if (i && t.canDrag && t.isSameInstance(i)) {
          var o = t.editor.getScrollContainer();
          t.pageX = e.pageX;
          t.pageY = e.pageY;
          t.applyDynamicResize({
            pageX: t.pageX,
            pageY: t.pageY,
            target: i,
            scrollTop: (o == null ? undefined : o.scrollTop) ?? 0
          });
        }
      }, 16);
      this.handleMouseUp = function () {
        t.resizeImageLineKey = null;
        t.canDrag = false;
        if (t.isMoved && t.uuid) {
          t.body.classList.remove("keep-nwse-cursor");
          t.body.classList.remove("keep-nesw-cursor");
          t.handleResize();
        }
        t.isMoved = false;
      };
      this.clearTempStyle = function () {
        if (t.uuid) {
          var e;
          var n = document.querySelector("#" + S(t.uuid));
          if ((e = n == null ? undefined : n.parentNode) !== null && e !== undefined) {
            e.removeChild(n);
          }
        }
      };
    }
    var t = e.prototype;
    t.unbind = function () {
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mousedown", this.handleMouseDown);
      document.removeEventListener("mouseup", this.handleMouseUp);
      var e = this.editor.getScrollContainer();
      if (e) {
        e.removeEventListener("scroll", this.handleScroll);
      }
      this.events.clear();
    };
    t.handleResize = function () {
      if (!this.uuid) {
        return;
      }
      var e;
      var t;
      var n = this.editor.getContainer().querySelector(E(this.uuid));
      if (!n) {
        return;
      }
      var i = syntheticEventUtilities.createSelectionRange(n, this.editor);
      if (i) {
        var o = n.clientWidth;
        var a = i.start.zoneId;
        var s = this.editor.getContentState().getZoneState(a);
        if (s) {
          var u = s.getEntities(i);
          if (u.length) {
            var d = this.events.get("resize");
            if (d == null ? undefined : d.length) {
              try {
                var c = typescriptHelpers_1.getValues(d);
                var h = c.next();
                for (; !h.done; h = c.next()) {
                  h.value(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, u[0]), {
                    attributes: typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, u[0].attributes), {
                      width: o
                    })
                  }));
                }
              } catch (t) {
                e = {
                  error: t
                };
              } finally {
                try {
                  if (h && !h.done && (t = c.return)) {
                    t.call(c);
                  }
                } finally {
                  if (e) {
                    throw e.error;
                  }
                }
              }
            }
            this.editor.once(editorEventConstants.editorEventTypes.PAINT, this.clearTempStyle);
          }
        }
      }
    };
    t.onResize = function (e) {
      var t = this.events.get("resize") || [];
      t.push(e);
      this.events.set("resize", t);
    };
    return e;
  }();
  var editorLeafTextComponent = require("editor-leaf-text-component") /*id: 374368*/;
  var L = function (e) {
    function t() {
      var t = e !== null && e.apply(this, arguments) || this;
      t.state = {
        selected: false
      };
      t.handleSelect = function () {
        t.setState({
          selected: true
        });
      };
      t.handleDeSelect = function () {
        t.setState({
          selected: false
        });
      };
      return t;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.componentDidUpdate = function () {
      var e;
      var t;
      var n = this.props;
      var i = n.editor;
      var o = n.lineState;
      if (i && o) {
        var r = o.getZoneId();
        var a = (e = i.virtualListManager) === null || e === undefined ? undefined : e.getVirtualListModuleOfZone(r);
        if (a == null ? undefined : a.isEnabled) {
          var l = (t = o.getNode()) === null || t === undefined ? undefined : t.querySelector("img");
          if (l && !l.complete) {
            l.addEventListener("load", function () {
              a.notifyInnerNodeLayoutUpdate(o);
            }, {
              once: true
            });
          }
        }
      }
    };
    n.render = function () {
      var e = this.props;
      var t = e.uuid;
      var n = e.src;
      var i = e.alt;
      var r = e.width;
      var a = e.height;
      var l = e.resizeable === false ? "unresize" : "";
      return reactCoreLibraryReexport.createElement(editorLeafTextComponent.LeafTextWithContext, {
        key: t,
        onSelect: this.handleSelect,
        onDeselect: this.handleDeSelect,
        className: o.CONTAINER + " " + l,
        disableDefaultSelected: true
      }, reactCoreLibraryReexport.createElement("span", {
        className: o.WRAPPER + " " + (this.state.selected ? "selected" : "")
      }, m.map(function (e) {
        return reactCoreLibraryReexport.createElement("span", {
          key: e,
          className: "point " + e + " n-icon-dragable",
          "data-direction": e
        });
      }), reactCoreLibraryReexport.createElement("img", {
        style: {
          width: r ? r + "px" : "100%",
          height: a ? a + "px" : "100%"
        },
        src: (n || "").replace(/"/g, "&quot;"),
        "data-uuid": t,
        "data-resizeable": l,
        alt: i
      })));
    };
    return t;
  }(reactCoreLibraryReexport.Component);
  var D = function (e) {
    function t(n) {
      var i = e.call(this) || this;
      i.name = "Image";
      i.uploadInput = function () {
        var e;
        var t;
        var n = document.createElement("input");
        try {
          var i = typescriptHelpers_1.getValues(Object.entries({
            type: "file",
            id: C,
            multiple: "true",
            style: "display: none;",
            accept: "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
          }));
          var o = i.next();
          for (; !o.done; o = i.next()) {
            var a = typescriptHelpers_1.readIterator(o.value, 2);
            var l = a[0];
            var s = a[1];
            n.setAttribute(l, s);
          }
        } catch (t) {
          e = {
            error: t
          };
        } finally {
          try {
            if (o && !o.done && (t = i.return)) {
              t.call(i);
            }
          } finally {
            if (e) {
              throw e.error;
            }
          }
        }
        document.body.appendChild(n);
        return n;
      }();
      i.canResetSelection = true;
      i.handleUploadImage = function () {
        i.uploadInput.click();
      };
      i.handleInputChange = function (e) {
        if (e.target) {
          var t = e.target;
          var n = t.files;
          if (!n || function (e) {
            var t;
            var n;
            try {
              var i = typescriptHelpers_1.getValues(Array.from(e));
              var o = i.next();
              for (; !o.done; o = i.next()) {
                var a = o.value;
                if (!a || !y.includes(a.type)) {
                  return false;
                }
              }
            } catch (e) {
              t = {
                error: e
              };
            } finally {
              try {
                if (o && !o.done && (n = i.return)) {
                  n.call(i);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
            return !!e.length;
          }(n)) {
            if (n) {
              var o = i.editor.selection.getSelection().toPosition();
              i.insertImage(o, n);
            }
            t.value = "";
          }
        }
      };
      i.handleKeyDown = function (e) {
        if (browserDetectUtils.platformInfo.mobile && e.key === "Backspace") {
          var t = i.editor;
          var n = t.selection.getSelection();
          if (n.isCollapsed()) {
            var o = n.start.line - 1;
            var r = i.editor.getContentState().getActiveZone().getLine(o);
            if (r && I(r) && n.start.offset === 0) {
              var l = r.getOffset();
              var s = l.start;
              var u = l.end;
              var d = new contentStructureDelta.ContentDelta({
                zoneId: r.getZoneId()
              }).retain(s).delete(u - s);
              t.getContentState().apply(d);
              e.preventDefault();
              e.preventEvent();
              e.stopEvent();
            }
          }
        }
      };
      i.handleSelectionChange = function (e) {
        if (i.canResetSelection) {
          var t = e.current;
          var n = t.start;
          var o = t.end;
          if (n.line !== o.line) {
            var r = z(t, i.editor);
            var a = r.start;
            var l = r.end;
            if (!a && !l) {
              return;
            }
            i.fixSelectionOnImageLine(r, t, i.editor);
          }
        }
      };
      i.fixSelectionOnImageLine = function (e, t, n) {
        if (i.canResetSelection) {
          i.canResetSelection = false;
          var o = t.start;
          var r = t.end;
          var a = t.isBackward;
          var l = o.zoneId;
          var s = e.start;
          var u = e.end;
          var d = n.getContentState().getZoneState(l);
          var c = d.getLine(o.line);
          var h = d.getLine(r.line);
          var f = o;
          var p = r;
          var v = false;
          if (c && s) {
            f = {
              line: o.line,
              offset: 0,
              zoneId: l
            };
            v = true;
          }
          if (h && u) {
            p = {
              line: r.line,
              offset: h.length() - 1,
              zoneId: l
            };
            v = true;
          }
          if (v) {
            n.selection.setSelection({
              start: f,
              end: p,
              isBackward: a
            });
            n.selection.updateBrowserSelection(true);
            i.canResetSelection = true;
          }
        }
      };
      i.updateImageAttributes = function (e) {
        var n;
        var o;
        var a = e.start;
        var l = e.end;
        var s = i.editor.getContentState();
        var u = s.getZoneState(a.zoneId);
        if (u) {
          var d = u.pointToOffset(a);
          var c = u.pointToOffset(l);
          if (d !== null && c !== null) {
            var f = typescriptHelpers_1.assign(typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, i.oldDataToNewData(e.attributes)), e.attributes), ((n = {})[t.KEY] = "true", n));
            var p = Object.keys(f).reduce(function (e, t) {
              e[t] = f[t].toString();
              return e;
            }, {});
            var v = new contentStructureDelta.ContentDelta({
              zoneId: a.zoneId
            }).retain(d).retain(c - d, typescriptHelpers_1.assign(((o = {})[t.KEY] = "true", o), p));
            s.apply(v);
          }
        }
      };
      i.deserialize = function (e) {
        var n;
        var i;
        var o = e.node;
        var r = e.deltaSet;
        var a = e.zoneId;
        if (((i = o == null ? undefined : o.tagName) === null || i === undefined ? undefined : i.toUpperCase()) === "IMG") {
          return r.concat(new contentStructureDelta.ContentDelta({
            zoneId: a
          }).insert(" ", ((n = {
            alt: o.getAttribute("alt") || ""
          })[t.KEY] = "true", n.src = o.getAttribute("src") || "", n.uuid = R(), n.width = o.getAttribute("width") || "", n)));
        } else {
          return r;
        }
      };
      i.options = n;
      var o = n.editor;
      i.editor = o;
      i.event = new T(i.editor);
      i.event.bind();
      i.uploadInput.addEventListener("change", i.handleInputChange);
      i.event.onResize(i.updateImageAttributes);
      o.registerCommand(t.KEY, i.handleUploadImage);
      o.on(editorEventConstants.editorEventTypes.PASTE, i.handlePaste);
      o.on(editorEventConstants.editorEventTypes.KEYDOWN, i.handleKeyDown);
      o.on(editorEventConstants.editorEventTypes.SELECTION_CHANGE, i.handleSelectionChange);
      return i;
    }
    typescriptHelpers_1.inherits(t, e);
    var n = t.prototype;
    n.match = function (e) {
      return e === t.KEY;
    };
    n.handlePaste = function (e) {
      if (function (e) {
        var t = e.clipboardData;
        if (!t) {
          return false;
        }
        var n = t.types;
        var i = t.items;
        var o = JSON.stringify(n);
        var r = n.length === 1 && n[0] === "Files";
        var a = n.length === 2 && /("text\/plain","Files"|"Files","text\/plain")/.test(o);
        var l = n.length === 2 && /"text\/html","Files"|"Files","text\/html"/.test(o);
        var s = userAgentDetect.userAgentInfo.isSafari && /"Files","text\/uri-list"/.test(o);
        if (r || a || l || s) {
          var u = Array.prototype.slice.call(i === undefined ? [] : i).filter(function (e) {
            return e.kind === "file";
          });
          var d = u.filter(function (e) {
            return e.type.indexOf("image/") === 0;
          });
          return d.length === u.length && d.map(function (e) {
            return e.getAsFile();
          }).filter(function (e) {
            return !!e;
          }).length > 0;
        }
        return false;
      }(e.nativeEvent)) {
        var n = e.nativeEvent.clipboardData?.files;
        if (n == null ? undefined : n.length) {
          var i = this.editor.selection.getSelection().toPosition();
          this.insertImage(i, n);
        }
      }
    };
    n.insertImage = function (e, n) {
      if (this.options.onInsertImage) {
        this.options.onInsertImage(e, n);
        return;
      }
      var i;
      var o;
      var a = this.editor.getContentState();
      var l = e.zoneId;
      var s = e.len;
      var u = e.start;
      var d = e.toRange().start.line;
      var c = a.getActiveZone().getLine(d);
      if (c) {
        var f = d !== 0 && c.isEmpty();
        var p = new contentStructureDelta.ContentDelta({
          zoneId: l
        }).retain(u).delete(s);
        if (!f) {
          p.insertEnter();
        }
        try {
          var v = typescriptHelpers_1.getValues(Array.from(n));
          var g = v.next();
          for (; !g.done; g = v.next()) {
            var m = g.value;
            (function (e) {
              var n;
              var i = {
                uuid: R(),
                src: window.URL.createObjectURL(e)
              };
              var o = Object.keys(i).reduce(function (e, t) {
                e[t] = i[t].toString();
                return e;
              }, {});
              p.insert(" ", typescriptHelpers_1.assign(((n = {})[t.KEY] = "true", n), o)).insertEnter();
            })(m);
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            if (g && !g.done && (o = v.return)) {
              o.call(v);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        a.apply(p);
      }
    };
    n.editorWillCopy = function (e) {
      w(e.deltaSet);
    };
    n.editorWillPaste = function (e) {
      var n = e.deltaSet;
      var i = e.zoneId;
      w(n);
      var o = n.deltas;
      var r = o[0].ops[o[0].ops.length - 1];
      if ((r == null ? undefined : r.attributes)?.image) {
        var a = new contentStructureDelta.ContentDelta({
          zoneId: i
        }).insertEnter();
        e.deltaSet = n.concat(a);
      }
    };
    n.serialize = function (e) {
      var n;
      var i;
      var o = e.node;
      var a = e.op;
      var l = e.type;
      if (!(a == null ? undefined : a.attributes)) {
        return e;
      }
      var u = this.oldDataToNewData(a.attributes);
      if ((u == null ? undefined : u[t.KEY]) && l === treeNodeTypes.nodeTypes.LEAF) {
        var d = new DOMParser().parseFromString("<img>", "text/html").querySelector("img");
        d.setAttribute("src", u.src);
        try {
          var c = typescriptHelpers_1.getValues(Object.entries(u));
          var h = c.next();
          for (; !h.done; h = c.next()) {
            var f = typescriptHelpers_1.readIterator(h.value, 2);
            var p = f[0];
            var v = f[1];
            d.setAttribute(p, String(v));
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            if (h && !h.done && (i = c.return)) {
              i.call(c);
            }
          } finally {
            if (n) {
              throw n.error;
            }
          }
        }
        d.appendChild(o);
        return Object.assign(e, {
          node: d
        });
      }
      return e;
    };
    n.oldDataToNewData = function (e) {
      var n;
      if (!e[t.KEY] || e[t.KEY] === "true") {
        return e;
      }
      try {
        var i = JSON.parse(e[t.KEY]);
        e = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, i.attributes), ((n = {})[t.KEY] = "true", n.src = i.src, n.uuid = R(), n));
      } catch (e) {}
      return e;
    };
    n.lineDidMount = function (e) {
      var n;
      var i = e.lineState;
      if (i.getAttributes().toMap()[t.KEY]) {
        var o = i.getZoneId();
        var r = (n = this.editor.virtualListManager) === null || n === undefined ? undefined : n.getVirtualListModuleOfZone(o);
        if (r == null ? undefined : r.isEnabled) {
          var a = i.getNode();
          if (a) {
            var l = a.querySelector("img");
            if (l) {
              l.addEventListener("load", function () {
                r.notifyInnerNodeLayoutUpdate(i);
              }, {
                once: true
              });
            } else {
              setTimeout(function () {
                var e = a.querySelector("img");
                if (e != null) {
                  e.addEventListener("load", function () {
                    r.notifyInnerNodeLayoutUpdate(i);
                  }, {
                    once: true
                  });
                }
              });
            }
          }
        }
      }
    };
    n.render = function (e) {
      var t = this.oldDataToNewData(e.attributes);
      e.key = t.uuid;
      return reactCoreLibraryReexport.createElement(L, typescriptHelpers_1.assign({}, t, {
        resizeable: this.options.resizeable,
        src: t.src,
        editor: this.editor,
        lineState: e.lineState
      }));
    };
    n.destroy = function () {
      var e;
      this.event.unbind();
      this.uploadInput.removeEventListener("change", this.handleInputChange);
      this.editor.off(editorEventConstants.editorEventTypes.PASTE, this.handlePaste);
      this.editor.off(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeyDown);
      this.editor.off(editorEventConstants.editorEventTypes.SELECTION_CHANGE, this.handleSelectionChange);
      e = this.uploadInput;
      document.body.removeChild(e);
    };
    t.KEY = "image";
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handlePaste", null);
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(999)], t.prototype, "serialize", null);
    typescriptHelpers_1.decorate([editorPluginManager.createPriority(999), reactDomContextDecorator.withContextConsumer()], t.prototype, "render", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    ImagePlugin: function () {
      return D;
    }
  });
}