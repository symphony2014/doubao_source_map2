// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'XQ' to 'getDeltaText'
// - Renamed export 'nb' to 'getPrevDeltaText'
// - Renamed export 'bA' to 'getNextDeltaText'
// - Renamed export 'NY' to 'getRangeText'
// - Renamed export 'Sm' to 'getAllText'
// - Renamed export 'Xp' to 'getDeltaLength'
// - Renamed export 'GB' to 'isDeltaEmpty'
// - Renamed export 'Yl' to 'formatDeltaText'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 728515
         */
module.exports = function (module, exports, require) {
  var arraySumByMatcher = require("array-sum-by-matcher") /*id: 746667*/;
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var docInlineComponentUtils = require("doc-inline-component-utils") /*id: 595942*/;
  var editorTextBlockUtilities = require("editor-text-block-utilities") /*id: 469443*/;
  var docxPreviewConstants = require("docx-preview-constants") /*id: 296825*/;
  let c = {
    [docxPreviewConstants.messageLinkTypes.default]: "[UrlPreviewBlock]",
    [docxPreviewConstants.messageLinkTypes.message]: `[${t("LarkCCM_Docx_IM_MessageLink_Message_Text")}]`
  };
  var d = new class {
    setTitle(e, n) {
      this.recordTitleMap.set(e.id, n);
    }
    getTitle(e) {
      return this.recordTitleMap.get(e.id) || c[e.snapshot.url_type] || c.default;
    }
    clear() {
      this.recordTitleMap.clear();
    }
    constructor() {
      var e;
      var n;
      var r;
      e = "recordTitleMap";
      n = new Map();
      if ((e = typeof (r = function (e, n) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, n || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (n === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? r : r + "") in this) {
        Object.defineProperty(this, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = n;
      }
    }
  }();
  var docxEquationBlockRenderer = require("docx-equation-block-renderer") /*id: 541234*/;
  var dateTimeReminderUtils = require("date-time-reminder-utils") /*id: 20927*/;
  var driveDocInlineComponentUtils = require("drive-doc-inline-component-utils") /*id: 759062*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var displayTypeConstants = require("display-type-constants") /*id: 897087*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxUserDetailManager = require("docx-user-detail-manager") /*id: 794466*/;
  function y(e) {
    let n = e.snapshot;
    switch (n.type) {
      case docBlockTypeConstants.blockTypeConstants.FILE:
        return n.file.name;
      case docBlockTypeConstants.blockTypeConstants.URL_PREVIEW:
        return d.getTitle(e);
      default:
        return "";
    }
  }
  function E(e, n, r, i, o = {
    useEquation: true
  }) {
    let {
      useEquation: s = true,
      useEquationI18n: u,
      useLink: a
    } = o;
    let c = e.attributes || {};
    if (c[inlineComponentConstants.componentType]) {
      return function (e, n, r, i) {
        let o = docInlineComponentUtils.getComponentType(e);
        if (!o) {
          return "";
        }
        let {
          type: s,
          data: u
        } = o;
        if (s === inlineComponentConstants.mentionTypes.USER) {
          let {
            uid: e
          } = u;
          let r = docxUserDetailManager.UserDetailManager.getUserShowName(e);
          if (r) {
            if (n) {
              return `@${r} `;
            } else {
              return r;
            }
          }
        } else if (s === inlineComponentConstants.mentionTypes.REMINDER) {
          let {
            expire_time: e,
            is_whole_day: n
          } = u;
          return dateTimeReminderUtils.formatTimestamp(e, n);
        } else if (s === inlineComponentConstants.mentionTypes.DOC) {
          let {
            token: e,
            file_type: n,
            title: o,
            raw_url: s
          } = u;
          if (i == null ? undefined : i.useLink) {
            return `[${driveDocInlineComponentUtils.getDefaultTitleByType(e, n, o)}](${s})`;
          } else if (r) {
            return s;
          } else {
            return driveDocInlineComponentUtils.getDefaultTitleByType(e, n, o);
          }
        } else if (s === inlineComponentConstants.mentionTypes.FILE) {
          return u.name;
        } else if (s === inlineComponentConstants.mentionTypes.URL) {
          let {
            raw_url: e,
            title: n,
            url_type: i
          } = u;
          if (r) {
            return e;
          } else {
            return n;
          }
        } else if (s === inlineComponentConstants.mentionTypes.BUTTON) {
          let {
            text: e
          } = u;
          return e;
        }
        return "";
      }(e, r, i, o);
    }
    if (c[displayTypeConstants.displayInlineBlock]) {
      let e = c[displayTypeConstants.displayInlineBlock];
      if (n.hasRecordByRecordId(e)) {
        return y(n.getRecordByRecordId(e));
      } else {
        return "";
      }
    }
    if (c[docxEquationBlockRenderer.EquationRenderer.KEY]) {
      let e = c[docxEquationBlockRenderer.EquationRenderer.KEY];
      let n = e.endsWith("\n") ? e.slice(0, -1) : e;
      if (u) {
        return `[${t("CreationDoc_Docs_Equation.title")}]`;
      } else if (s) {
        return `$$${n}$$`;
      } else {
        return n;
      }
    }
    if (a && c.link) {
      let n = e.insert;
      let r = decodeURIComponent(c.link);
      if (n === r) {
        return r;
      } else {
        return `[${n}](${r})`;
      }
    }
    return "";
  }
  function b(e, n, r) {
    return E(e, n, r) || e.insert;
  }
  function I(e, n, r = [0, Infinity], i = {}) {
    let [o, l] = r;
    let {
      useAt: u = true,
      useUrl: a,
      useMarkdown: c,
      transformInlineText: d
    } = i;
    let f = 0;
    return e.ops.map(e => {
      if (!deltaSetCore.isInsertString(e)) {
        return "";
      }
      let r = e.insert.length;
      let i = f;
      f += r;
      if (i < o && f <= o || i >= l) {
        return "";
      }
      let h = E(e, n, u, a, c);
      if (h) {
        if (d) {
          return d(e, h);
        } else {
          return h;
        }
      }
      let p = e.insert.slice(o - i >= 0 ? o - i : 0, l - i);
      if ((c == null ? undefined : c.useBIUS) && e.attributes) {
        var v;
        var g;
        v = p;
        g = e.attributes;
        v = v.trim();
        if (g[docBlockTypeConstants.textFormatConstants.INLINE_CODE]) {
          v = `\`${v}\``;
        }
        if (g[docBlockTypeConstants.textFormatConstants.BOLD]) {
          v = `**${v}**`;
        }
        if (g[docBlockTypeConstants.textFormatConstants.ITALIC]) {
          v = `*${v}*`;
        }
        if (g[docBlockTypeConstants.textFormatConstants.STRIKETHROUGH]) {
          v = `~~${v}~~`;
        }
        p = v;
      }
      return p;
    }).join("");
  }
  function T(e, n, r = [0, Infinity], i) {
    let s = e.text;
    return I(deltaSetChangesetConverter_1.attributedTextToDeltaSet(s.initialAttributedTexts, s.apool).get("0"), n, r, i);
  }
  let k = e => arraySumByMatcher.sumByMatcher(e.ops, deltaSetCore.getOpLength);
  function S(e, n, r = [0, Infinity], i = {}) {
    let {
      processDelta: o
    } = i;
    let s = e.zoneState.getContent();
    let l = o ? o(s) : s;
    let u = k(l);
    let a = Math.min(r[1], u);
    r[1] = a;
    return I(l, n, r, i);
  }
  function j() {
    var e = arguments.length;
    var n = Array(e);
    var r = 0;
    for (; r < e; r++) {
      n[r] = arguments[r];
    }
    let [i, o, s, l] = n;
    let a = i;
    let c = "";
    while (a && a.id !== i.root.id) {
      let e = function (e, n, r = [0, Infinity], i) {
        let o = e.previous;
        if (!o || !editorTextBlockUtilities.isTextBlock(o) || o.id === e.root.id) {
          return "";
        }
        let s = o.zoneState.getModelText().length - 1;
        let l = Math.min(r[1], s);
        r[1] = l;
        return S(o, n, r, i);
      }(a, o, s, l);
      if (e) {
        c = e;
        break;
      }
      a = a.previous;
    }
    return c;
  }
  function P() {
    var e = arguments.length;
    var n = Array(e);
    var r = 0;
    for (; r < e; r++) {
      n[r] = arguments[r];
    }
    let [i, o, s, l] = n;
    let a = i;
    let c = "";
    while (a && a.id !== i.root.id) {
      let e = function (e, n, r = [0, Infinity], i) {
        let o = e.next;
        if (!o || !editorTextBlockUtilities.isTextBlock(o)) {
          return "";
        }
        let s = o.zoneState.getModelText().length - 1;
        let l = Math.min(r[1], s);
        r[1] = l;
        return S(o, n, r, i);
      }(a, o, s, l);
      if (e) {
        c = e;
        break;
      }
      a = a.next;
    }
    return c;
  }
  require.d(exports, {
    getDeltaText: function () {
      return T;
    },
    getPrevDeltaText: function () {
      return j;
    },
    getNextDeltaText: function () {
      return S;
    },
    getRangeText: function () {
      return y;
    },
    getAllText: function () {
      return P;
    },
    getDeltaLength: function () {
      return b;
    },
    isDeltaEmpty: function () {
      return E;
    },
    formatDeltaText: function () {
      return I;
    }
  });
}