// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'f' to 'HistoryDiffHighlight'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24105.f3de81f0.js
         * chunkId: 24105
         * moduleId: 349705
         */
module.exports = function (module, exports, require) {
  var o;
  var n;
  var l;
  var s;
  var a;
  var c;
  var d;
  var u;
  var editorPluginManager = require("editor-plugin-manager") /*id: 903878*/;
  var baseRendererClass = require("base-renderer-class") /*id: 999785*/;
  var priorityConstants = require("priority-constants") /*id: 219839*/;
  var docBlockConstants_1 = require("doc-block-constants_1") /*id: 329056*/;
  var docxEditorEventConstantsAndManager_1 = require("docx-editor-event-constants-and-manager_1") /*id: 851701*/;
  var userColorConfigManager = require("user-color-config-manager") /*id: 155242*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var docxEquationBlockRenderer = require("docx-equation-block-renderer") /*id: 541234*/;
  function k(e, r, i) {
    var o;
    if ((r = typeof (o = function (e, r) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var i = e[Symbol.toPrimitive];
      if (i !== undefined) {
        var o = i.call(e, r || "default");
        if (typeof o != "object") {
          return o;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (r === "string" ? String : Number)(e);
    }(r, "string")) == "symbol" ? o : o + "") in e) {
      Object.defineProperty(e, r, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[r] = i;
    }
    return e;
  }
  let C = `${editorModuleConstantsConfig.clientsidePrefix}focus`;
  let x = `${editorModuleConstantsConfig.clientsidePrefix}focus-first`;
  d = editorPluginManager.createPriority(priorityConstants.priorityConstants.AFTER_DEFAULT);
  u = class e extends baseRendererClass.BaseRenderer {
    match(e) {
      return !!Object.values(docBlockConstants_1.editTypeConstants).includes(e);
    }
    _render(e) {
      let i = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      let {
        children: o,
        attributes: n,
        lineState: l,
        op: s,
        insert: a
      } = e;
      let c = n[docBlockConstants_1.editTypeConstants.add] ? docBlockConstants_1.editTypeConstants.add : n[docBlockConstants_1.editTypeConstants.del] ? docBlockConstants_1.editTypeConstants.del : n[docBlockConstants_1.editTypeConstants.change] ? docBlockConstants_1.editTypeConstants.change : null;
      if (!c) {
        return o;
      }
      let d = {};
      if (i && c === docBlockConstants_1.editTypeConstants.change && (s == null ? undefined : s.attributes?.folded) === "true") {
        d.forceUseLineStartRange = true;
        d.additionalOffset = docBlockConstants_1.blockLimitValue;
      } else if (i) {
        return o;
      }
      let u = ` history-diff-mark history-diff-text-highlight history-diff-text-highlight-${c}`;
      e.class += u;
      let h = n.author || "";
      if (h) {
        let {
          backgroundColor: r,
          textColor: i
        } = userColorConfigManager.userConfigManager.getUserInfoById(h);
        e.style.color = i;
        e.style.backgroundColor = r;
        e.style.borderBottom = `2px solid ${i}`;
        if (n[docxEquationBlockRenderer.EquationRenderer.KEY]) {
          if (e.class.includes("equation-display-block")) {
            e.style.display = "block";
          } else {
            e.style.display = "inline-block";
            e.style.maxWidth = "calc(100% - 1px)";
          }
        }
      }
      let f = n.change_id;
      if (f) {
        e.domAttributes["data-history-change-id"] = f;
        e.domAttributes["data-history-author-id"] = h;
      }
      if (n[C]) {
        e.class += " focus";
      }
      if (n[x]) {
        e.class += " focus-first";
      }
      this.renderHistoryHighlightPopover({
        insert: a,
        op: s,
        lineState: l,
        lineIndex: e.index,
        editType: c,
        authorId: h,
        changeId: f,
        extra: d
      });
      return o;
    }
    render(e) {
      return this._render(e);
    }
    renderLinefeed(e) {
      return this._render(e, true);
    }
    renderLine(e) {
      let {
        children: i,
        style: o,
        lineState: n
      } = e;
      let l = n.getOps();
      let s = l[l.length - 1] || {};
      let a = (s == null ? undefined : s.attributes?.author) || "";
      if (a) {
        let {
          backgroundColor: e,
          textColor: r
        } = userColorConfigManager.userConfigManager.getUserInfoById(a);
        o["--history-block-background-color"] = e;
        o["--history-block-text-color"] = r;
      }
      return i;
    }
    renderHistoryHighlightPopover(r) {
      if (e.renderedChangeIds.has(r.changeId)) {
        return;
      }
      e.renderedChangeIds.add(r.changeId);
      let {
        insert: i,
        op: o,
        lineState: n,
        lineIndex: l,
        editType: s,
        changeId: a,
        authorId: c,
        extra: d
      } = r;
      let u = n.getOps().indexOf(o);
      if (u === -1) {
        u = n.getOps().length - 1;
      }
      let h = 0;
      for (let e = 0; e < u; e++) {
        h += n.getOps()[e].insert.length;
      }
      let f = n.getZoneId();
      let g = {
        zoneId: f,
        line: l,
        offset: h
      };
      let m = {
        zoneId: f,
        line: l,
        offset: h + i.length
      };
      let y = {
        start: g,
        end: m
      };
      if (d == null ? undefined : d.forceUseLineStartRange) {
        g.offset = 0;
      }
      this.editor.once("paint", () => {
        var e = this;
        let r = {
          detail: {
            changeId: a,
            authorId: c,
            blockId: contentDeltaUtilityFunctions.toNumber(f),
            editType: s,
            setFocus: function (r, i = false) {
              if (r) {
                e.editor.getContentState().setAttributes(y, {
                  [C]: "true",
                  [x]: i ? "true" : ""
                });
              } else {
                e.editor.getContentState().setAttributes(y, {
                  [C]: "",
                  [x]: ""
                });
              }
            },
            start: g,
            end: m,
            editor: this.editor,
            extra: d
          }
        };
        docxEditorEventConstantsAndManager_1.globalEventEmitter.emit(docxEditorEventConstantsAndManager_1.historyDiffTextHighlightEvent, r);
      });
    }
    destroy() {
      e.renderedChangeIds.clear();
    }
    constructor({
      editor: e
    }) {
      super();
      k(this, "editor", undefined);
      this.editor = e;
    }
  };
  k(u, "KEY", "textHighlight");
  k(u, "renderedChangeIds", new Set());
  o = u.prototype;
  n = "render";
  l = [d];
  s = Object.getOwnPropertyDescriptor(u.prototype, "render");
  a = u.prototype;
  c = {};
  Object.keys(s).forEach(function (e) {
    c[e] = s[e];
  });
  c.enumerable = !!c.enumerable;
  c.configurable = !!c.configurable;
  if ("value" in c || c.initializer) {
    c.writable = true;
  }
  c = l.slice().reverse().reduce(function (e, r) {
    return r(o, n, e) || e;
  }, c);
  if (a && c.initializer !== undefined) {
    c.value = c.initializer ? c.initializer.call(a) : undefined;
    c.initializer = undefined;
  }
  if (c.initializer === undefined) {
    Object.defineProperty(o, n, c);
  }
  let I = u;
  require.d(exports, {
    HistoryDiffHighlight: function () {
      return I;
    }
  });
}