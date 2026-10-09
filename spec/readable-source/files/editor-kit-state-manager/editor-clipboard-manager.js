// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'nodeWrapSerializer'
// - Renamed export 'i' to 'wrapLineAttributes'
// - Renamed export 'g' to 'startsWithString'
// - Renamed export 'f' to 'endsWithString'
// - Renamed export 'e' to 'transformDeltaAttrs'
// - Renamed export 'r' to 'transformAttrKeys'
// - Renamed export 'd' to 'addAttrsToDelta'
// - Renamed export 'm' to 'sliceLineContent'
// - Renamed export 'a' to 'ClipboardManager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 79909.d674ef0d.js
         * chunkId: 79909
         * moduleId: 797119
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var errorHandlerUtil = require("error-handler-util") /*id: 161088*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var autoBindMethodDescriptor = require("auto-bind-method-descriptor") /*id: 969612*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var diffOperationValidators = require("diff-operation-validators") /*id: 735530*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var editorKitConstants = require("editor-kit-constants") /*id: 71435*/;
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  var h = function () {
    function t() {}
    var e = t.prototype;
    e.getData = function (t, e) {
      return t.getData(e);
    };
    e.setData = function (t, e, n) {
      return t.setData(e, n);
    };
    e.getTypes = function (t) {
      return t.types;
    };
    return t;
  }();
  var p = function () {
    function t(t = new h()) {
      this.proxyClipboard = t;
    }
    var e = t.prototype;
    e.getTypes = function (t) {
      return this.proxyClipboard.getTypes(t);
    };
    e.getData = function (t, e = "text/html") {
      if (browserDetectUtils.platformInfo.modernIE) {
        return this.proxyClipboard.getData(t, "text");
      } else {
        return this.proxyClipboard.getData(t, e);
      }
    };
    e.setData = function (t, e) {
      var n = e.text;
      var r = e.html;
      if (n || r) {
        e = (e = (e = (e = window.lark) === null || e === undefined ? undefined : e.biz) === null || e === undefined ? undefined : e.clipboard) === null || e === undefined ? undefined : e.setContent;
        if (browserDetectUtils.platformInfo.modernIE) {
          this.proxyClipboard.setData(t, "text", r);
        } else if (this.proxyClipboard instanceof h && e && (browserDetectUtils.isIOSBelow12() || browserDetectUtils.platformInfo.isBytedanceApp && browserDetectUtils.platformInfo.isIPad || browserDetectUtils.platformInfo.isAndroid && r.length && !n.length)) {
          window.lark.biz.clipboard.setContent({
            text: n,
            html: r
          });
        } else {
          this.proxyClipboard.setData(t, "text/html", r);
          this.proxyClipboard.setData(t, "text/plain", n);
        }
      }
    };
    e.setDataWithoutEvent = function (t) {
      var e = this;
      function n(r) {
        r.preventDefault();
        if (r.stopImmediatePropagation) {
          r.stopImmediatePropagation();
        }
        var i = t.html;
        var o = t.text;
        document.createElement("div").innerHTML = i;
        r = r.clipboardData || window.clipboardData;
        if (browserDetectUtils.platformInfo.modernIE) {
          e.proxyClipboard.setData(r, "text", i);
        } else {
          e.proxyClipboard.setData(r, "text/html", i);
          e.proxyClipboard.setData(r, "text/plain", o);
        }
        if (t.customCopyDatas) {
          e.setCustomData(r, t.customCopyDatas);
        }
        document.removeEventListener("copy", n);
      }
      var r = document.createElement("textarea");
      document.body.appendChild(r);
      document.addEventListener("copy", n);
      r.style.opacity = "0";
      r.value = " ";
      if (browserDetectUtils.platformInfo.mobile) {
        r.readOnly = true;
      }
      var i = window.scrollX;
      var o = window.scrollY;
      r.focus({
        preventScroll: true
      });
      r.select();
      if (browserDetectUtils.platformInfo.isAndroid) {
        window.scrollTo(i, o);
      }
      if (browserDetectUtils.platformInfo.lark && browserDetectUtils.platformInfo.isIOS) {
        window.lark.biz.navigation.handleCopyMenuClick();
      } else {
        document.execCommand("copy");
      }
      document.body.removeChild(r);
    };
    e.setCustomData = function (t, e) {
      var n;
      var r;
      var i = this;
      if (t && t.setData) {
        if (browserDetectUtils.platformInfo.isAndroid) {
          n = this.proxyClipboard.getData(t, "text/html");
          r = "";
          e.forEach(function (t) {
            var e = t.key;
            var t = t.data;
            r += "<span id=\"custom-clipboard-data-" + e + "\" data-custom-clipboard=\"" + encodeURIComponent(t) + "\"></span>";
          });
          this.proxyClipboard.setData(t, "text/html", n + r);
        } else {
          e.forEach(function (e) {
            i.proxyClipboard.setData(t, e.key, e.data);
          });
        }
      }
    };
    e.getCustomData = function (t, e) {
      if (!t || !t.setData) {
        return "";
      }
      if (browserDetectUtils.platformInfo.isAndroid) {
        var n = this.proxyClipboard.getData(t, "text/html");
        var n = new DOMParser().parseFromString(n, "text/html").getElementById("custom-clipboard-data-" + e);
        return decodeURIComponent((n == null ? undefined : n.getAttribute("data-custom-clipboard")) || "");
      }
      return this.proxyClipboard.getData(t, e);
    };
    return t;
  }();
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var clipboardKeyboardEvent = require("clipboard-keyboard-event") /*id: 923328*/;
  require("editor-kit-dom-patch") /*id: 218425*/;
  var arrayFlatIteratorUtil = require("array-flat-iterator-util") /*id: 125982*/;
  if (!Array.prototype.flat) {
    arrayFlatIteratorUtil.flattenArray;
  }
  var editorModuleConstants = require("editor-module-constants") /*id: 21060*/;
  var editorLineModel = require("editor-line-model") /*id: 136973*/;
  var b = function () {
    function t(t) {
      this.pasteTimes = 0;
      this.Rn = "";
      this.s = t;
    }
    var e = t.prototype;
    t.isBlob = function (t) {
      var e = t.types;
      var n = t.files;
      var r = e.length === 1 && n && n.length;
      var t = e.length === 2 && e.includes("text/plain") && e.includes("Files");
      var n = e.length === 2 && e.includes("text/html") && e.includes("Files");
      var e = browserDetectUtils.platformInfo.safari && e.includes("Files") && e.includes("text/uri-list");
      return r || t || n || e;
    };
    e.Nn = function (t, e, n) {
      var i = false;
      if ((n = n === undefined ? {} : n).canPrevent) {
        e.preventDefault = function () {
          i = true;
        };
      }
      if (n.pickKey) {
        o = function (t, e) {
          if (e) {
            t[n.pickKey] = e;
          }
          return t;
        };
      }
      var o = this.s.pluginManager.call(t, e, {
        cb: o
      });
      return typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, o), {
        defaultPrevented: i
      });
    };
    e.onPaste = function (e) {
      var n = e.clipboardData;
      if (n) {
        var o = this.s;
        var a = new clipboardKeyboardEvent.ClipboardKeyEvent(e, e.target);
        var l = null;
        var u = this.s.clipboard.dataHelper;
        var c = u.getCustomData(n, editorKitConstants.mimeFragmentType);
        this.Rn = u.getCustomData(n, editorKitConstants.mimeBusinessKey);
        var d;
        var h = /data-editor-unique-id="([0-9a-zA-Z]+)"/;
        if (c) {
          if (l = function (t) {
            try {
              return JSON.parse(t);
            } catch (t) {}
          }(c)) {
            d = l.editorUniqueId;
          }
        } else if (u.getTypes(n).includes("text/html") && h.test(u.getData(n, "text/html"))) {
          d = h.exec(u.getData(n, "text/html"))[1];
        }
        if (!(h = this.Rn && this.Rn === o.businessKey)) {
          o.log("[Paste][onPaste] Copy from different business \"" + this.Rn + "\"");
        }
        if (!(h = h || o.clipboard.canInternalPasteWhitelist.includes(this.Rn))) {
          this.Rn;
        }
        this.xn(d);
        try {
          this.s.triggerEditorEvent(editorEventConstants.editorEventTypes.PASTE, a);
        } catch (t) {
          o.error({
            e: t,
            message: "[Paste][onPaste][Warning] call paste event failed.",
            level: errorHandlerUtil.ErrorLevel.ERROR
          });
        }
        if (!a.isDefaultPrevented()) {
          n = {
            text: u.getData(n, "text/plain"),
            types: u.getTypes(n),
            files: t.isBlob(n) ? n.files : undefined,
            fromBusinessKey: this.Rn
          };
          if (l && h) {
            var p = l.deltas;
            return this.zn(e, new deltaSetCore.DeltaSet(p), typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), {
              isInternalPaste: true
            }));
          }
          l = (h = this.Un(e)).node;
          p = h.defaultPrevented;
          h = h.clipboardHasElement;
          if (!p) {
            h = this.deserialize(typescriptRuntimeHelpers_1.assign({
              node: l
            }, n), h);
            o.log("[Paste][onPaste] paste node is:", l);
            this.zn(e, h, typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), {
              isInternalPaste: false
            }));
          }
        }
      }
    };
    e.xn = function (t) {
      if (t === this.s.editorUniqueId) {
        this.pasteTimes++;
      } else {
        this.s.clipboard.from = null;
        this.pasteTimes = 0;
      }
    };
    e.getPasteInfo = function () {
      return {
        pasteFrom: this.s.clipboard.from,
        pasteTimes: this.pasteTimes
      };
    };
    e.Un = function (t) {
      var e = t.clipboardData;
      var n = e.types;
      var r = e.files;
      var i = this.s.clipboard.dataHelper;
      var o = i.getData(t.clipboardData, "text/html");
      var a = i.getData(t.clipboardData, "text/plain");
      var e = P(o);
      var i = new DOMParser().parseFromString(e, "text/html").body;
      var o = !!i.firstElementChild;
      D(i);
      r = {
        UNSAFE_HTML: e,
        node: i,
        text: a,
        files: r
      };
      t = this.Nn("UNSAFE_editorNormalizePasteNode", {
        types: n,
        data: r,
        event: t
      }, {
        canPrevent: true
      });
      return {
        node: r.node,
        defaultPrevented: t.defaultPrevented,
        clipboardHasElement: o
      };
    };
    e.zn = function (t, e, n) {
      t.stopImmediatePropagation();
      t.preventDefault();
      var a = this.s;
      var u = a.selection.getSelection();
      var c = u.start;
      var f = c.zoneId;
      var d = c.line;
      var c = (g = a.getContentState().getZoneState(f)) === null || g === undefined ? undefined : g.getLine(d);
      if (c) {
        var h;
        var p;
        var y;
        var g = Object.keys(e.deltas);
        if (g[0] !== zeroConstantModule_1.versionValue && g.length === 1) {
          y = e.get(g[0]);
          e = e.replace(g[0], y.create(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, y), {
            zoneId: zeroConstantModule_1.versionValue
          })));
        }
        if (!e.get(zeroConstantModule_1.versionValue)) {
          p = null;
          Object.keys((h = e).deltas).forEach(function (t) {
            var e;
            var t = h.get(t);
            if (t instanceof contentStructureDelta.ContentDelta && !p) {
              e = false;
              t.forEach(function (t) {
                if (((t = t.attributes) === null || t === undefined ? undefined : t.zoneId) && !p) {
                  e = true;
                }
              });
              if (e) {
                p = t.zoneId;
              }
            }
          });
          if (y = p) {
            m = e.get(y);
            e = e.replace(y, m.create(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, m), {
              zoneId: zeroConstantModule_1.versionValue
            })));
          }
        }
        var m = e.get(zeroConstantModule_1.versionValue);
        if (f !== zeroConstantModule_1.versionValue && m) {
          e.replace(zeroConstantModule_1.versionValue, new contentStructureDelta.ContentDelta({
            zoneId: f,
            ops: m.ops
          }));
        }
        var E = e.get(f);
        if (A(E, "\n")) {
          m = E.reduce(function (t, e, n) {
            if (n === E.ops.length - 1 && e.insert) {
              return t.insert(e.insert.slice(0, -1), e.attributes);
            } else {
              return t.push(e);
            }
          }, new contentStructureDelta.ContentDelta({
            zoneId: f
          }));
          e.replace(f, m);
        }
        t = {
          deltaSet: e,
          zoneId: f,
          lineState: c,
          event: t,
          isInternalPaste: n.isInternalPaste
        };
        if (!this.Nn("editorWillPaste", t, {
          canPrevent: true,
          pickKey: "deltaSet"
        }).defaultPrevented) {
          t = function (t, e, n) {
            var i = t.toPosition();
            var o = i.start;
            var a = i.len;
            var u = i.zoneId;
            if (!e.hasLineMarker()) {
              return new deltaSetCore.DeltaSet().concat(new contentStructureDelta.ContentDelta({
                zoneId: u
              }).retain(o).delete(a)).concat(n);
            }
            var i = (c = (i = (c = n.get(u)) === null || c === undefined ? undefined : c.ops[0]) === null || i === undefined ? undefined : i.attributes) !== null && c !== undefined && !!c.lmkr;
            var c = e.hasLineMarker() && t.start.offset === 1;
            if (i && c) {
              var f = new contentStructureDelta.ContentDelta({
                zoneId: u
              });
              var c = e.slice(0, t.start.offset);
              var d = c._getOps().slice(1);
              var t = n.reduce(function (t, n) {
                if (n.zoneId !== u || !(n instanceof contentStructureDelta.ContentDelta)) {
                  return t.concat(n);
                }
                var i = e._getOps()[0].attributes;
                f.insertLineMarker(typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, i), n.ops[0].attributes));
                d.forEach(function (t) {
                  return f.push(t);
                });
                n.ops.slice(1).forEach(function (t) {
                  return f.push(t);
                });
                return t.concat(f);
              }, new deltaSetCore.DeltaSet());
              var c = new contentStructureDelta.ContentDelta({
                zoneId: u
              }).retain(o - c.length()).delete(a + c.length());
              return new deltaSetCore.DeltaSet().concat(c).concat(t);
            }
            return new deltaSetCore.DeltaSet().concat(new contentStructureDelta.ContentDelta({
              zoneId: u
            }).retain(o).delete(a)).concat(n);
          }(u, c, t.deltaSet);
          a.log("[Paste][applyPaste] paste apply delta:", t);
          a.getContentState().apply(t, {
            type: "applyPaste"
          });
          try {
            a.call(editorEventConstants.editorEventTypes.DID_PASTE, {
              deltaSet: t,
              UNSAFE_text: n.text,
              isInternalPaste: n.isInternalPaste
            });
          } catch (t) {
            a.error({
              e: t,
              level: errorHandlerUtil.ErrorLevel.ERROR,
              message: "[Paste][applyPaste] " + t.message
            });
          }
        }
      } else {
        a.error({
          message: "[Paste][applyPaste][Warning] can't get lineState! zone: " + f + " line: " + d,
          level: errorHandlerUtil.ErrorLevel.ERROR
        });
      }
    };
    e.deserialize = function (t, e) {
      var n = t.node;
      var r = t.html;
      var i = t.text;
      if ("files" in t && t.files) {
        return this.Bn(t.files, t.types);
      } else if (n && (n.hasChildNodes() || e)) {
        return this.Hn(n);
      } else if ((r = (r = r && P(r)) ? new DOMParser().parseFromString(r, "text/html") : null) != null && r.body && r.body.hasChildNodes()) {
        D(r.body);
        return this.Hn(r.body);
      } else if (i) {
        return this.Zn(i);
      } else {
        return new deltaSetCore.DeltaSet().concat(new contentStructureDelta.ContentDelta());
      }
    };
    e.Hn = function (t) {
      var e;
      var n = this;
      var r = t.childNodes;
      if (r.length === 0) {
        e = new deltaSetCore.DeltaSet().concat(new contentStructureDelta.ContentDelta());
      } else if (r.length === 1) {
        e = this.Hn(t.childNodes[0]);
      } else if (r.length > 1) {
        e = Array.from(t.childNodes).reduce(function (t, e) {
          var r = n.Hn(e);
          r.forEach(function (e) {
            try {
              var o = e.zoneId;
              var a = t.get(o);
              if (a) {
                if (e.ops.length > 0) {
                  e.ops.forEach(function (t) {
                    if (!deltaSetCore.isDeleteOp(t) && !deltaSetCore.isRetainOp(t)) {
                      a.ops.push(t);
                    }
                  });
                }
              } else {
                t.add(e.create(e));
              }
            } catch (e) {
              n.s.error({
                err: e,
                message: "[Paste][traverse][Warning] deserialize traverse failed.",
                level: errorHandlerUtil.ErrorLevel.ERROR
              });
              r.compose(t, true, false);
            }
          });
          return t;
        }, new deltaSetCore.DeltaSet());
      }
      return this.Nn("deserialize", {
        node: t,
        zoneId: zeroConstantModule_1.versionValue,
        deltaSet: e,
        types: ["text/html"],
        fromBusinessKey: this.Rn
      }, {
        pickKey: "deltaSet"
      }).deltaSet;
    };
    e.Zn = function (t) {
      var e = new deltaSetCore.DeltaSet().compose(new contentStructureDelta.ContentDelta());
      return this.Nn("deserialize", {
        text: t,
        zoneId: zeroConstantModule_1.versionValue,
        deltaSet: e,
        types: ["text/plain"],
        fromBusinessKey: this.Rn
      }, {
        pickKey: "deltaSet"
      }).deltaSet;
    };
    e.Bn = function (t, e) {
      var n = new deltaSetCore.DeltaSet().compose(new contentStructureDelta.ContentDelta());
      return this.Nn("deserialize", {
        files: t,
        zoneId: zeroConstantModule_1.versionValue,
        deltaSet: n,
        types: e,
        fromBusinessKey: this.Rn
      }, {
        pickKey: "deltaSet"
      }).deltaSet;
    };
    return t;
  }();
  var x = function () {
    function t(t) {
      this.s = t;
    }
    var e = t.prototype;
    e.onCopy = function (t, e) {
      var n = this.s;
      if (n.copyable) {
        return this.Fn(t, e);
      } else {
        n.call(editorKitConstants.permissionCopyType);
        t.preventDefault();
        t.stopImmediatePropagation();
        return;
      }
    };
    e.onCut = function (t, e) {
      var n = this.s;
      if (n.copyable) {
        if (n.isEditable()) {
          return this.Fn(t, e, true);
        } else {
          return undefined;
        }
      } else {
        n.call(editorKitConstants.permissionCopyType);
        t.preventDefault();
        t.stopImmediatePropagation();
        return;
      }
    };
    e.slice = function (t) {
      var e = this.s;
      var n = t.start;
      var r = t.end;
      var t = e.getContentState().getZoneState(n.zoneId);
      var e = new deltaSetCore.DeltaSet();
      if (t && t && n.zoneId === r.zoneId) {
        r = new contentStructureDelta.ContentDelta({
          zoneId: n.zoneId,
          ops: R(t, n, r)
        });
        e.add(n.zoneId, r);
      }
      return e;
    };
    e.Wn = function (t) {
      if (t.isCollapsed()) {
        return t;
      }
      var e = t.start;
      var n = e.zoneId;
      var r = e.line;
      var e = e.offset;
      var n = this.s.getContentState().getZoneState(n);
      var r = (r = n == null ? undefined : n.getLine(r)) === null || r === undefined ? undefined : r.getLineMarker();
      if (r && e === r) {
        t.start.offset -= r;
      }
      return t;
    };
    e.Fn = function (t, e, n = false) {
      var i;
      var o;
      var a = this.s;
      e = e || this.Wn(a.selection.getSelection());
      var l;
      var u;
      var c;
      var h;
      var p;
      var g = [];
      this.s.pluginManager.call("shouldPreventCopy", {
        e: t,
        html: ""
      }, {
        cb: function (t, e) {
          g.push(e);
          return t;
        }
      });
      if (!g.includes(true)) {
        if (browserDetectUtils.platformInfo.isAndroid && a.isEditable()) {
          a.selection.updateBrowserSelection();
        }
        p = new clipboardKeyboardEvent.ClipboardKeyEvent(t, t.target);
        a.triggerEditorEvent(t.type, p);
        if (!p.isDefaultPrevented()) {
          t.preventDefault();
          t.stopImmediatePropagation();
          l = {
            deltaSet: h = this.slice(e),
            range: e,
            customCopyDatas: []
          };
          this.Kn(l);
          u = {
            zoneId: (e = l.range).start.zoneId,
            deltaSet: h = l.deltaSet,
            node: null,
            customCopyDatas: l.customCopyDatas
          };
          a.clipboard.from = n ? editorEventConstants.editorEventTypes.CUT : editorEventConstants.editorEventTypes.COPY;
          a.clipboard.resetPasteTimes();
          this.serialize(u);
          c = Array.from(u.node.childNodes).reduce(function (t, e) {
            return t + function t(e) {
              if (e instanceof Text) {
                return e.textContent;
              }
              if (!(e instanceof Element)) {
                return "";
              }
              var n = "";
              e.childNodes.forEach(function (e) {
                n += t(e);
              });
              if (e.getAttribute(editorKitConstants.dataLineAttr)) {
                n += "\n";
              }
              return n;
            }(e);
          }, "").slice(0, -1);
          if (browserDetectUtils.platformInfo.windows) {
            c = c.replace(/\n/g, "\r\n");
          }
          p = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, u), {
            text: c
          });
          this.Yn(p);
          l = p.node;
          u = p.customCopyDatas;
          c = p.text;
          h = p.deltaSet;
          p = t.clipboardData || window.clipboardData;
          t = a.clipboard.dataHelper;
          if (l && l.childElementCount > 0) {
            t.setData(p, {
              text: c,
              html: (i = l, (o = document.createElement("div")).appendChild(i), o.innerHTML).replace(/<(?:img|iframe)[^>]*(data-no-request-)src=[^>]*>/g, function (t, e) {
                return t.replace(e, "");
              })
            });
          }
          if (u.length !== 0) {
            t.setCustomData(p, u);
          }
          if (!deltaSetCore.isDeltaSetEmpty(h)) {
            t.setCustomData(p, [{
              key: editorKitConstants.mimeFragmentType,
              data: JSON.stringify({
                deltas: h.deltas,
                editorUniqueId: this.s.editorUniqueId
              })
            }]);
            t.setCustomData(p, [{
              key: editorKitConstants.mimeBusinessKey,
              data: a.businessKey
            }]);
          }
          if (n === true) {
            if (!a.triggerEditorEvent(editorEventConstants.editorEventTypes.WILL_DELETE_FROM_CUT).shouldPrevent) {
              e = (n = e || a.selection.getSelection()).start;
              n = n.end;
              a.getContentState().deleteText({
                start: e,
                end: n
              }, {
                type: "handleCut"
              });
            }
          }
        }
      }
    };
    e.serialize = function (t) {
      var e = this;
      var n = t.deltaSet;
      var r = t.zoneId;
      var i = n.get(r);
      if (!i) {
        return t;
      }
      var o = document.createDocumentFragment();
      i.eachLine(function (n, a, l) {
        var d = document.createDocumentFragment();
        var h = e.s.modulesContainer.get(editorModuleConstants.editorModuleConsts.ZoneState);
        var p = e.s.getContentState();
        var p = p.getZoneState(r) || new h(r, n, p.schema);
        var p = {
          lineState: new editorLineModel.EditorLine(n, p),
          index: l,
          callHookFrom: "serialize"
        };
        e.s.callAll("_editorLineStateWillRender", p);
        p.lineState.getOps().forEach(function (r) {
          var i;
          if (deltaSetCore.isInsertString(r) && !diffOperationValidators.isWildcardInsert(r)) {
            i = r.insert.replace(/\n/g, "") || "";
            i = document.createTextNode(i);
            r = e.$n(Object.assign(t, {
              type: treeNodeTypes.nodeTypes.LEAF,
              node: i,
              op: r,
              lineDelta: n
            }));
            d.appendChild(r.node);
          }
        });
        (p = document.createElement("div")).style.whiteSpace = "pre-wrap";
        a = e.$n(Object.assign(t, {
          type: treeNodeTypes.nodeTypes.LINE,
          node: d,
          lineNode: p,
          lineAttributes: a,
          lineDelta: n
        }));
        p.appendChild(a.node);
        p.dataset.zoneId = i.zoneId;
        p.dataset.lineIndex = String(l);
        p.setAttribute(editorKitConstants.dataLineAttr, "true");
        o.appendChild(p);
      });
      n = this.$n(w(Object.assign(t, {
        type: treeNodeTypes.nodeTypes.ROOT,
        node: o
      }), {
        tagAttribute: ""
      }));
      return Object.assign(t, {
        node: n.node
      });
    };
    e.$n = function (t) {
      this.s.pluginManager.call("serialize", t, {
        cb: function (e) {
          return t = e;
        }
      });
      return t;
    };
    e.Kn = function (t) {
      return this.s.pluginManager.call("editorWillCopy", t);
    };
    e.Yn = function (t) {
      return this.s.pluginManager.call("editorWillSetClipboard", t);
    };
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "onCopy", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "onCut", null);
    typescriptRuntimeHelpers_1.decorate([autoBindMethodDescriptor.autoBindMethod], t.prototype, "slice", null);
    return t;
  }();
  var I = errorHandlerUtil.createErrorWrapper(function (t) {
    this.editor.error(t);
  })(errorHandlerUtil.ErrorLevel.ERROR);
  var T = function () {
    function t(t, e) {
      this.from = null;
      this.canInternalPasteWhitelist = [];
      this.s = t;
      this.dataHelper = new p(e);
      this.Gn = new b(t);
      this.Vn = new x(t);
    }
    var e = t.prototype;
    e.deserialize = function (t, e) {
      return this.Gn.deserialize(t, e);
    };
    e.serialize = function (t) {
      return this.Vn.serialize(t);
    };
    e.onCopy = function (t) {
      return this.Vn.onCopy(t);
    };
    e.onPaste = function (t) {
      this.Gn.onPaste(t);
    };
    e.slice = function (t) {
      return this.Vn.slice(t);
    };
    e.onCut = function (t) {
      return this.Vn.onCut(t);
    };
    e.resetPasteTimes = function () {
      this.Gn.pasteTimes = 0;
    };
    e.getPasteInfo = function () {
      return this.Gn.getPasteInfo();
    };
    e.setCanInternalPasteWhitelist = function (t) {
      this.canInternalPasteWhitelist = t;
    };
    e.setDataToClipboard = function (t) {
      var e = t.data;
      var n = t.type;
      if (e && e.html) {
        t = typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), {
          type: n
        });
        this.s.callAll("beforeSetDataToClipboard", t);
        this.from = n;
        this.resetPasteTimes();
        this.dataHelper.setDataWithoutEvent(Object.assign({}, e, {
          html: this.Jn(t.html)
        }));
      }
    };
    e.copyRange = function (t) {
      this.Qn(t, "copy");
    };
    e.cutRange = function (t) {
      this.Qn(t, "cut");
    };
    e.Qn = function (t, e) {
      function n(n) {
        if (r.s) {
          n.stopPropagation();
          n.stopImmediatePropagation();
          switch (e) {
            case "copy":
              r.Vn.onCopy(n, t);
              break;
            case "cut":
              r.Vn.onCut(n, t);
          }
          n.preventDefault();
        }
      }
      var r = this;
      var i = this.s;
      var o = document.createElement("textarea");
      var i = browserDetectUtils.platformInfo.isIPad ? i.getOuterContainer() : document.body;
      i.appendChild(o);
      o.addEventListener(e, n);
      o.style.position = "fixed";
      o.style.left = "-10000000px";
      o.value = " ";
      o.focus();
      o.select();
      document.execCommand(e);
      o.removeEventListener(e, n);
      i.removeChild(o);
    };
    e.Jn = function (t) {
      if (t) {
        (t = $(new DOMParser().parseFromString(t, "text/html").body)).children().first().attr("data-editor-unique-id", this.s.editorUniqueId);
        return t.html();
      } else {
        return t;
      }
    };
    typescriptRuntimeHelpers_1.decorate([I], t.prototype, "deserialize", null);
    typescriptRuntimeHelpers_1.decorate([I], t.prototype, "serialize", null);
    typescriptRuntimeHelpers_1.decorate([I], t.prototype, "onCopy", null);
    typescriptRuntimeHelpers_1.decorate([I], t.prototype, "onPaste", null);
    typescriptRuntimeHelpers_1.decorate([I], t.prototype, "onCut", null);
    typescriptRuntimeHelpers_1.decorate([I], t.prototype, "setDataToClipboard", null);
    typescriptRuntimeHelpers_1.decorate([I], t.prototype, "copyRange", null);
    typescriptRuntimeHelpers_1.decorate([I], t.prototype, "cutRange", null);
    return t;
  }();
  function _(t, e, n, i = true) {
    var o = new deltaSetCore.DeltaSet();
    t.forEach(function (t, a) {
      o = a === e ? (a = t.create({
        zoneId: a
      }), a = t.reduce(function (t, e) {
        if (!e.insert || (o = e.attributes) !== null && o !== undefined && o.lmkr) {
          return t.push(e);
        }
        var o;
        var a = i ? typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e.attributes), n) : typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), e.attributes);
        if (typeof e.insert != "string") {
          t.insert(e.insert.id, a);
        } else {
          for (var s = e.insert; s.length > 0;) {
            var l = s.includes("\n");
            var u = s.split("\n", 1)[0];
            var c = s.substring(u.length + 1);
            t.insert(s = u, a);
            s = c;
            if (l) {
              t.insertEnter(e.attributes);
            }
          }
        }
        return t;
      }, a), o.concat(a)) : o.concat(t);
    });
    return o;
  }
  function S(t, e, n, i = true) {
    var o = new deltaSetCore.DeltaSet();
    t.forEach(function (t, a) {
      var u;
      o = a === e && t instanceof contentStructureDelta.ContentDelta ? (u = new contentStructureDelta.ContentDelta({
        zoneId: a
      }), t.eachLine(function (t) {
        t.ops.forEach(function (t, e) {
          if (e === 0) {
            e = (e = t.attributes) !== null && e !== undefined ? e : {};
            if (deltaSetCore.isWildcardOp(t)) {
              u.insert("*", i ? typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, e), n) : typescriptRuntimeHelpers_1.assign(typescriptRuntimeHelpers_1.assign({}, n), e));
            } else {
              u.insertLineMarker(n).push(t);
            }
          } else {
            u.push(t);
          }
        });
      }), o.concat(u)) : o.concat(t);
    });
    return o;
  }
  function A(t, e) {
    var n = "";
    var r = t.ops.length - 1;
    for (; r >= 0 && n.length < e.length; --r) {
      var i = t.ops[r];
      if (typeof i.insert != "string") {
        break;
      }
      n = i.insert + n;
    }
    return n.slice(e.length * -1) === e;
  }
  function C(t, e) {
    var n = "";
    var r = 0;
    for (; r < t.ops.length && n.length < e.length; r++) {
      var i = t.ops[r];
      if (typeof i.insert != "string") {
        break;
      }
      n += i.insert;
    }
    return n.slice(0, e.length) === e;
  }
  function N(t, e, n) {
    return t.reduce(function (t, r) {
      var i = r.attributes;
      if (!i || !r.insert) {
        return t.push(r);
      }
      var o = Object.keys(i).reduce(function (t, r) {
        var o;
        var a;
        var s = i[r];
        if (e({
          key: r,
          value: s
        })) {
          o = (a = n({
            key: r,
            value: s
          })).key;
          a = a.value;
          t[o] = a;
        } else {
          t[r] = s;
        }
        return t;
      }, {});
      t.insert(r.insert, o);
      return t;
    }, t.create({
      zoneId: t.zoneId,
      zoneType: t.zoneType
    }));
  }
  function L(t, e) {
    var n = t.type;
    var r = t.node;
    var i = t.op;
    var o = e.tagAttribute;
    if (n === treeNodeTypes.nodeTypes.LEAF && i && i.attributes && i.attributes[o]) {
      o = e.wrapTag || editorKitConstants.formatMarkMap[o];
      (o = document.createElement(o)).appendChild(r);
      return Object.assign(t, {
        node: o
      });
    } else {
      return t;
    }
  }
  function O(t) {
    var e = [];
    try {
      e = JSON.parse(t.getAttribute(editorKitConstants.dataLineWrapAttr) || "[]");
    } catch (t) {
      e = [];
    }
    return e;
  }
  function w(t, e) {
    var n;
    var i;
    var o = t.type;
    var a = t.node;
    var s = t.lineAttributes;
    var l = e.tagAttribute;
    var u = e.wrapNodesInfo;
    var s = s && s[l];
    var l = e.wrapTag || editorKitConstants.formatMarkMap[l] || s;
    if (o === treeNodeTypes.nodeTypes.LINE && s) {
      if (!(a instanceof Element)) {
        (s = document.createElement("div")).appendChild(a);
        a = s;
      }
      if (l && !u) {
        u = [{
          tag: l
        }];
      }
      a.setAttribute(editorKitConstants.dataLineWrapAttr, JSON.stringify(typescriptRuntimeHelpers_1.spread(u, O(a))));
    }
    if (o === treeNodeTypes.nodeTypes.ROOT) {
      var d = [];
      var o = Array.from(a.querySelectorAll("[" + editorKitConstants.dataLineAttr + "]"));
      try {
        var h = typescriptRuntimeHelpers_1.values(o);
        var p = h.next();
        for (; !p.done; p = h.next()) {
          (function (t) {
            var e = t.querySelectorAll("[" + editorKitConstants.dataLineWrapAttr + "]")[0];
            if (!e) {
              return d = [];
            }
            var n = O(e);
            if (n.length) {
              e.removeAttribute(editorKitConstants.dataLineWrapAttr);
              var i = [];
              var o = document.createElement(n[0].tag);
              n.reduce(function (t, a, s) {
                var l;
                var u;
                var c;
                var f = a.tag;
                var h = a.style;
                var p = a.attributes;
                var a = a.split;
                var v = document.createElement(f);
                if (h) {
                  try {
                    l = undefined;
                    var y = typescriptRuntimeHelpers_1.values(Object.entries(h));
                    var g = y.next();
                    for (; !g.done; g = y.next()) {
                      var m = typescriptRuntimeHelpers_1.readIterable(g.value, 2);
                      var E = m[0];
                      var b = m[1];
                      v.style[E] = b;
                    }
                  } catch (t) {
                    l = {
                      error: t
                    };
                  } finally {
                    try {
                      if (g && !g.done && (u = y.return)) {
                        u.call(y);
                      }
                    } finally {
                      if (l) {
                        throw l.error;
                      }
                    }
                  }
                }
                if (p) {
                  try {
                    _ = undefined;
                    var x = typescriptRuntimeHelpers_1.values(Object.entries(p));
                    var I = x.next();
                    for (; !I.done; I = x.next()) {
                      var T = typescriptRuntimeHelpers_1.readIterable(I.value, 2);
                      var E = T[0];
                      var b = T[1];
                      v.setAttribute(E, b);
                    }
                  } catch (t) {
                    _ = {
                      error: t
                    };
                  } finally {
                    try {
                      if (I && !I.done && (c = x.return)) {
                        c.call(x);
                      }
                    } finally {
                      if (_) {
                        throw _.error;
                      }
                    }
                  }
                }
                var _ = d[s];
                if (!a && _ && _.tagName.toLowerCase() === f.toLowerCase()) {
                  if (!(v = _).getAttribute("start") && p != null && p.start) {
                    v.setAttribute("start", p.start);
                  }
                } else {
                  d = [];
                }
                i.push(v);
                if (s === 0) {
                  o = v;
                } else {
                  t.appendChild(v);
                }
                if (s === n.length - 1) {
                  v.appendChild(e);
                }
                return v;
              }, o);
              d = i;
              t.parentNode.insertBefore(o, t);
              if (!t.hasChildNodes()) {
                t.parentNode.removeChild(t);
              }
            }
          })(p.value);
        }
      } catch (t) {
        n = {
          error: t
        };
      } finally {
        try {
          if (p && !p.done && (i = h.return)) {
            i.call(h);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
    }
    return Object.assign(t, {
      node: a
    });
  }
  function D(t) {
    try {
      Array.from(t.querySelectorAll("style")).forEach(function (e) {
        var n;
        var r;
        if (e.textContent && /\}?(\S+)\s*{[\s\S]*?white-space\s*:\s*pre[\s\S]*?}/.test(e.textContent)) {
          if (n = /\}?(\S+)\s*{[\s\S]*?white-space\s*:\s*pre[\s\S]*?}/.exec(e.textContent.replace(/<!--[\s\S]*?-->/, ""))) {
            if (e = /white-space\s*:\s*pre.*?(?=;| |})/.exec(n[0])) {
              r = e[0].split(":")[1];
              Array.from(t.querySelectorAll(n[1])).forEach(function (t) {
                if (t instanceof HTMLElement) {
                  t.style.whiteSpace = r.trim();
                }
              });
            }
          }
        }
      });
    } catch (t) {}
    var e = ["." + editorKitConstants.ignoreCollectFlag, ".ignore-dom", "style", "script"];
    Array.from(t.querySelectorAll(e.join(","))).forEach(function (t) {
      t.innerHTML = "";
    });
    Array.from(t.childNodes).forEach(function (t) {
      var e;
      if (t.nodeType !== Node.TEXT_NODE && t.nodeType !== Node.ELEMENT_NODE && (e = t.parentNode) !== null && e !== undefined) {
        e.removeChild(t);
      }
    });
  }
  function P(t) {
    var e = "<([^\\/][^>]+|[^>\\/]+)>";
    var n = "<\\/([^>]+)>";
    var r = RegExp(e + "\\n+\\s*?" + e, "g");
    var i = RegExp(e + "\\n+\\s*?" + n, "g");
    var e = RegExp(n + "\\n+\\s*?" + e, "g");
    var n = RegExp(n + "\\n+\\s*?" + n, "g");
    return t.replace(/\r\n/g, "\n").replace(/\n+$/g, "").replace(/(\x3C!--[\s\S]*?-->)\n+\s*/g, "$1").replace(i, function (t, e, n) {
      if (e.split(" ")[0] !== n.split(" ")[0]) {
        return "<" + e + "></" + n + ">";
      } else {
        return t;
      }
    }).replace(e, "</$1><$2>").replace(r, "<$1><$2>").replace(n, "</$1></$2>").replace(r, "<$1><$2>").replace(n, "</$1></$2>");
  }
  function k(t, e, n) {
    var i = [];
    var o = 0;
    t.getOps().forEach(function (t) {
      var a;
      var l;
      var u;
      if (t != null && t.insert && typeof t.insert == "string") {
        a = deltaSetCore.getOpLength(t);
        if (o <= n && e <= o + a && (l = Math.max(0, e - o)) < (u = Math.min(a, n - o))) {
          i.push({
            insert: t.insert.slice(l, u),
            attributes: typescriptRuntimeHelpers_1.assign({}, t.attributes)
          });
        }
        o += a;
      }
    });
    return i;
  }
  function R(t, e, n) {
    var i = [];
    var o = Math.max(0, e.line);
    var a = Math.min(n.line, t.length() - 1);
    var s = o;
    for (; s <= a; s++) {
      var l = t.getLine(s);
      if (e.line === a) {
        i.push.apply(i, typescriptRuntimeHelpers_1.spread(k(l, e.offset, n.offset)));
      } else if (s === o) {
        i.push.apply(i, typescriptRuntimeHelpers_1.spread(k(l, e.offset, l.length())));
      } else if (s === a) {
        i.push.apply(i, typescriptRuntimeHelpers_1.spread(k(l, 0, n.offset)));
      } else {
        i.push.apply(i, typescriptRuntimeHelpers_1.spread(k(l, 0, l.length())));
      }
    }
    return i;
  }
  require.d(exports, {
    nodeWrapSerializer: function () {
      return L;
    },
    wrapLineAttributes: function () {
      return w;
    },
    startsWithString: function () {
      return C;
    },
    endsWithString: function () {
      return A;
    },
    transformDeltaAttrs: function () {
      return S;
    },
    transformAttrKeys: function () {
      return N;
    },
    addAttrsToDelta: function () {
      return _;
    },
    sliceLineContent: function () {
      return R;
    },
    ClipboardManager: function () {
      return T;
    }
  });
}