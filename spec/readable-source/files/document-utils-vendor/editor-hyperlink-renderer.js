// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'HyperLinksRenderer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 623453
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var editorEventConstants = require("editor-event-constants") /*id: 520265*/;
  var treeNodeTypes = require("tree-node-types") /*id: 676821*/;
  var editorClipboardManager = require("editor-clipboard-manager") /*id: 797119*/;
  var reactinxDomContextExports = require("reactinx-dom-context-exports") /*id: 327577*/;
  var reactinxDomReconciler = require("reactinx-dom-reconciler") /*id: 454385*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var urlLinkValidator = require("url-link-validator") /*id: 542431*/;
  require("user-agent-parser_1") /*id: 757289*/;
  require("string-match-all-polyfill-wrapper") /*id: 859731*/;
  var boundMethodDecorator = require("bound-method-decorator") /*id: 369553*/;
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var quillDeltaUrlLinkProcessor = require("quill-delta-url-link-processor") /*id: 375105*/;
  var hyperlinkConstants = require("hyperlink-constants") /*id: 80361*/;
  var p = function (e) {
    function t(t) {
      var r = e.call(this) || this;
      r.name = "HyperLinks";
      r.inlineWrapperCache = null;
      r.customProtocols = [];
      r.realHref = "";
      r.autoUrlDidApply = false;
      r.handleMouseEnter = function (e) {
        if (r.props.onMouseEnter) {
          r.props.onMouseEnter(e, r.editor);
        }
      };
      r.handleMouseLeave = function (e) {
        if (r.props.onMouseLeave) {
          r.props.onMouseLeave(e, r.editor);
        }
      };
      r.handleKeydown = function () {
        var e = r.editor.selection.getSelection();
        var t = r.editor.getContentState().getActiveZone();
        if ((e.start.offset === 0 || e.start.offset === t.getLine(e.start.line).getLineMarker()) && e.isCollapsed()) {
          r.editor.toggleAttribute(r.getAttributeKey(), "");
        }
      };
      r.handleValidLink = function (e) {
        return urlLinkValidator.urlLinkValidator.isValidLink(e.trim(), r.props?.customLinkRegexp);
      };
      r.handleClick = function (e) {
        if (r.props.onClick) {
          r.props.onClick(e, r.realHref);
        } else {
          e.preventDefault();
          var t = e.currentTarget.getAttribute("href");
          if (!t) {
            return;
          }
          window.open(r.completeURLProtocolWithCustom(t), r.props.linkDefaultTarget || "_blank", "noopener,noreferrer");
        }
      };
      r.genHyperLinkAttribFromURL = function (e) {
        var t = randomStringGenerator.createRandomString(10);
        return {
          href: r.completeURLProtocolWithCustom(e),
          linkId: t,
          removeLink: ""
        };
      };
      r.handleAutoUrl = function (e) {
        var t = e.changes;
        var i = e.options.extra || {};
        if (!i.fromHyperlink && !r.autoUrlDidApply) {
          var o = r.editor.getContentState();
          var a = o.getActiveZone();
          var s = a.getZoneId();
          if (t[s]) {
            var l = t[s][0];
            var u = l.inserts;
            var d = l.start;
            var f = r.getCustomLinkRegexp(urlLinkValidator.urlLinkValidator.LINK_REG);
            var g = new contentStructureDelta.ContentDelta({
              zoneId: a.getZoneId()
            });
            var p = d;
            for (; p < d + u.length; p++) {
              (function (e) {
                var t = a.getLine(e);
                if (t) {
                  var n = new contentStructureDelta.ContentDelta({
                    zoneId: t.getZoneId()
                  });
                  var i = t.getEntities([[quillDeltaUrlLinkProcessor.clientSideAutoUrlKey]]);
                  if (i.length > 0) {
                    var o = 0;
                    i.forEach(function (e) {
                      var t;
                      var r = e.start;
                      var i = e.end;
                      var s = a.pointToOffset(r);
                      var l = a.pointToOffset(i);
                      if (s !== null && l !== null) {
                        n.retain(s - o).retain(l - s, ((t = {})[quillDeltaUrlLinkProcessor.clientSideAutoUrlKey] = "", t));
                        o = l;
                      }
                    });
                  }
                  var s = new contentStructureDelta.ContentDelta({
                    zoneId: t.getZoneId()
                  });
                  var l = t.getOffset();
                  s.retain(l.start);
                  quillDeltaUrlLinkProcessor.processDeltaForLinks(t, s, f, r.getAttributeKey());
                  var u = n.compose(s, false);
                  g = g.compose(u);
                }
              })(p);
            }
            if (g.ops.length) {
              try {
                r.autoUrlDidApply = true;
                o.apply(g, {
                  extra: typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, i), {
                    fromHyperlink: true
                  }),
                  nonundoable: true
                });
                r.autoUrlDidApply = false;
              } catch (e) {
                r.autoUrlDidApply = false;
              }
            }
          }
        }
      };
      r.editor = t.editor;
      r.props = t;
      if (t.customProtocols) {
        r.customProtocols = t.customProtocols;
      }
      urlLinkValidator.urlLinkValidator.addExtraProtocols(r.customProtocols);
      r.bindEditorEvents();
      return r;
    }
    typescriptHelpers_1.inherits(t, e);
    var r = t.prototype;
    r.match = function (e) {
      return e === this.getAttributeKey() || e === quillDeltaUrlLinkProcessor.clientSideAutoUrlKey || e === hyperlinkConstants.linkBackground;
    };
    r.editorWillApplyChange = function (e) {
      var r = this;
      var i = e.deltaSet;
      var o = e.options;
      if ((o == null ? undefined : o.extra)?.needFormatToEditor !== false) {
        i.forEach(function (e) {
          e.forEach(function (e) {
            if (e.attributes?.href) {
              e.attributes = typescriptHelpers_1.assign(typescriptHelpers_1.assign({}, e.attributes), r.formatAttributesToEditor({
                href: e.attributes.href,
                linkId: e.attributes?.linkId
              }));
            }
          });
        });
      }
      return i;
    };
    r.handleContentChange = function (e) {
      this._handleContentChange(e);
    };
    r._handleContentChange = function (e) {
      this.handleAutoUrl(e);
    };
    r.completeURLProtocolWithCustom = function (e) {
      return urlLinkValidator.urlLinkValidator.completeURLProtocol(e, this.customProtocols);
    };
    r.renderInlineWrapper = function (e) {
      var r = e.index;
      var n = e.attributes;
      var i = e.lineState;
      var o = this.getAttributeKey();
      if (!n[o] && !n[quillDeltaUrlLinkProcessor.clientSideAutoUrlKey]) {
        return null;
      }
      var a = r - 1;
      if (n[quillDeltaUrlLinkProcessor.clientSideAutoUrlKey]) {
        var s = null;
        if (a >= 0) {
          var l = i.getOps()[a];
          if (l.attributes && l.attributes[quillDeltaUrlLinkProcessor.clientSideAutoUrlKey]) {
            s = quillDeltaUrlLinkProcessor.clientSideAutoUrlKey;
          }
        }
        if (this.inlineWrapperCache && s) {
          return this.inlineWrapperCache;
        }
        var u = this.renderText({
          className: "outer-u-container demo-outer-link-container"
        });
        this.inlineWrapperCache = u;
        return u;
      }
      if (n[o]) {
        var s = null;
        if (a >= 0) {
          var l = i.getOps()[a];
          if (l.attributes && l.attributes[o]) {
            var c = this.formatAttributesFromEditor(l);
            s = (c == null ? undefined : c.linkId) ?? null;
          }
        }
        if (!i.getOps()[r]) {
          return null;
        }
        var h = i.getOps()[r];
        var d = this.formatAttributesFromEditor(h);
        var f = d == null ? undefined : d.linkId;
        if (this.inlineWrapperCache && f === s) {
          return this.inlineWrapperCache;
        }
        var u = this.renderText({
          className: "outer-u-container demo-outer-link-container"
        });
        this.inlineWrapperCache = u;
        return u;
      }
      return null;
    };
    r.render = function (e) {
      var r = e.op;
      var n = e.attributes;
      var i = this.formatAttributesFromEditor(r);
      var o = e.children;
      var a = n[quillDeltaUrlLinkProcessor.clientSideAutoUrlKey];
      if (n[hyperlinkConstants.linkBackground]) {
        o = this.renderText({
          className: "lb",
          children: o
        });
      }
      if (i || a) {
        var s = "";
        var l = "";
        if (i) {
          s = i.href;
          l = (i == null ? undefined : i.linkId) || "";
        } else {
          s = a;
        }
        if (!urlLinkValidator.urlLinkValidator.getRegex(this.customProtocols).test(s)) {
          s = "";
        }
        var u = this.completeURLProtocolWithCustom(s);
        var c = !a && !urlLinkValidator.urlLinkValidator.isValidLink(u.trim(), this.props?.customLinkRegexp);
        this.realHref = u;
        if (c) {
          try {
            this.realHref = decodeURIComponent(u);
          } catch (e) {}
        }
        var d = this.props.customClassName || "";
        return this.renderAnchor({
          "data-id": l || quillDeltaUrlLinkProcessor.clientSideAutoUrlKey,
          "data-href": s,
          href: this.realHref,
          rel: "noopener noreferrer",
          target: this.props.linkDefaultTarget || "_blank",
          style: {
            cursor: "pointer"
          },
          className: "url hyperlink-href:" + s + " hyperlink-linkId:" + (l || quillDeltaUrlLinkProcessor.clientSideAutoUrlKey) + " " + d,
          children: o
        }, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onClick: this.handleClick
        });
      }
      return o;
    };
    r.bindEditorEvents = function () {
      this.editor.on(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeydown);
      this.editor.on(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
    };
    r.unBindEditorEvents = function () {
      this.editor.off(editorEventConstants.editorEventTypes.KEYDOWN, this.handleKeydown);
      this.editor.off(editorEventConstants.editorEventTypes.CONTENT_CHANGE, this.handleContentChange);
    };
    r.destroy = function () {
      this.unBindEditorEvents();
      this.inlineWrapperCache = null;
    };
    r.getCustomLinkRegexp = function (e) {
      if (this.props.customLinkRegexp) {
        return this.props.customLinkRegexp;
      } else {
        return e;
      }
    };
    r.serialize = function (e) {
      var r = e.type;
      var n = e.node;
      var i = e.op;
      if (!i) {
        return e;
      }
      var o = "";
      var s = this.formatAttributesFromEditor(i);
      if (s == null ? undefined : s.href) {
        o = s.href;
      }
      if (!(s == null ? undefined : s.href) && (i == null ? undefined : i.attributes)?.[quillDeltaUrlLinkProcessor.clientSideAutoUrlKey]) {
        o = i.attributes[quillDeltaUrlLinkProcessor.clientSideAutoUrlKey];
      }
      if (r === treeNodeTypes.nodeTypes.LEAF && o) {
        var l = document.createElement("a");
        l.setAttribute("href", o);
        if (s == null ? undefined : s.linkId) {
          l.setAttribute("linkId", s.linkId);
        }
        l.setAttribute("target", "_blank");
        l.setAttribute("rel", "noopener noreferrer");
        l.appendChild(n);
        return Object.assign(e, {
          node: l
        });
      }
      return e;
    };
    r.deserialize = function (e) {
      var t;
      var r = e.node;
      var n = e.deltaSet;
      var i = e.zoneId;
      var o = n;
      if (!(r instanceof HTMLElement) || r.tagName.toLowerCase() !== "a") {
        return o;
      }
      var a = r.getAttribute("href") || ((t = r.closest(".url")) === null || t === undefined ? undefined : t.getAttribute("data-href"));
      if (!a) {
        return o;
      }
      var l = this.genHyperLinkAttribFromURL(a);
      return editorClipboardManager.addAttrsToDelta(o, i, l);
    };
    r.renderText = function (e, t = {}) {
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.TextSymbol, typescriptHelpers_1.assign({}, e, t));
    };
    r.renderAnchor = function (e, t = {}) {
      return reactinxDomContextExports.ReactInXExports.createElement(reactinxDomReconciler.AnchorSymbol, typescriptHelpers_1.assign({}, e, t));
    };
    t.KEY = hyperlinkConstants.hyperlink;
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "editorWillApplyChange", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "handleContentChange", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "completeURLProtocolWithCustom", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "renderInlineWrapper", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "bindEditorEvents", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "unBindEditorEvents", null);
    typescriptHelpers_1.decorate([boundMethodDecorator.boundMethodDecorator], t.prototype, "getCustomLinkRegexp", null);
    return t;
  }(baseRendererClass.BaseRenderer);
  require.d(exports, {
    HyperLinksRenderer: function () {
      return p;
    }
  });
}