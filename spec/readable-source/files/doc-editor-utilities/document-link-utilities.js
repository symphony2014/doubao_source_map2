// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A9' to 'isNextOpDifferent'
// - Renamed export 'CB' to 'processUrlLinking'
// - Renamed export 'CH' to 'extractLinkInfo'
// - Renamed export 'LR' to 'clearLinkSelection'
// - Renamed export 'PX' to 'collectLinkDebug'
// - Renamed export 'xh' to 'isPrevOpDifferent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 92677.dc8034b0.js
         * chunkId: 92677
         * moduleId: 61891
         */
module.exports = function (module, exports, require) {
  var syntheticEventUtilities = require("synthetic-event-utilities") /*id: 97252*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var urlRegexConstants = require("url-regex-constants") /*id: 631514*/;
  var docxEventCollector = require("docx-event-collector") /*id: 477626*/;
  var contentDeltaUtilityFunctions = require("content-delta-utility-functions") /*id: 348536*/;
  var selectionHighlightRenderer = require("selection-highlight-renderer") /*id: 527546*/;
  var clientsideLinkConstants_1 = require("clientside-link-constants_1") /*id: 306134*/;
  let d = /\.|\:/;
  let f = e => {
    let {
      zoneState: n
    } = e;
    n.getEntities([[clientsideLinkConstants_1.linkSelection, undefined], [selectionHighlightRenderer.selectionHighlight, undefined]]).forEach(n => {
      e.setAttributes(n, {
        [clientsideLinkConstants_1.linkSelection]: "",
        [selectionHighlightRenderer.selectionHighlight]: ""
      }, {
        extra: {
          shouldCollab: false
        }
      });
    });
  };
  let h = (e, n) => {
    let r = e.closest(".outer-u-container");
    if (!r) {
      return null;
    }
    let o = syntheticEventUtilities.createSelectionRange(r, n);
    if (!o) {
      return null;
    }
    let s = e.closest("[data-zone-id]");
    if (!s) {
      return null;
    }
    let l = s.getAttribute("data-zone-id");
    let a = n.getContentState().getZoneState(l);
    let d = a == null ? undefined : a.getLine(o.start.line);
    if (!d) {
      return null;
    }
    let f = o.start.offset;
    let h = o.end.offset;
    let p = d.getEntities({
      start: f,
      end: h
    });
    let v = p[0];
    let g = p.reduce((e, n) => `${e}${n.text}`, "");
    let m = e.closest(".link-wrapper");
    if (!m) {
      return null;
    }
    let _ = m == null ? undefined : m.getAttribute(clientsideLinkConstants_1.autoUrlType);
    let y = v.attributes[clientsideLinkConstants_1.linkType];
    let E = y ? clientsideLinkConstants_1.linkType : clientsideLinkConstants_1.autoUrlType;
    let b = {
      ...v,
      start: p[0].start,
      end: p[p.length - 1].end,
      text: g
    };
    let I = e.closest(".link-wrapper");
    if (!I) {
      return null;
    }
    let T = "";
    I.classList.forEach(e => {
      if (e.indexOf("link-id") > -1) {
        T = `.${e}`;
      }
    });
    return {
      key: E,
      value: decodeURIComponent(y || _ || ""),
      continuousLink: b,
      id: T,
      blockId: contentDeltaUtilityFunctions.toNumber(l)
    };
  };
  let p = (e, n, r, i) => {
    let s = n - 1;
    return s < 0 || e.getOps()[s].attributes?.[r] !== i;
  };
  let v = (e, n, r, i) => {
    let s = n + 1;
    return s + 1 > e.getOps().length || e.getOps()[s].attributes?.[r] !== i;
  };
  let g = function (e = {}) {
    return !!e.link;
  };
  let m = function (e, n) {
    let r;
    let i;
    let l = urlRegexConstants.combinedUrlRegex;
    l.lastIndex = 0;
    let u = null;
    let a = [];
    let f = false;
    let h = new Map([["(", ")"], ["[", "]"], ["{", "}"], ["<", ">"]]);
    let p = null;
    let v = () => {
      let n = 0;
      let r = [];
      for (let i of e) {
        if (i.insert && typeof i.insert == "string" && i.insert !== "\n") {
          let o = i.insert.length;
          n += o;
          if (e.getAttributes(n - o, n).find(e => {
            let [n, r] = e;
            return n.includes("mention-token");
          })) {
            r.push([n - o, n]);
          } else {
            r.push(null);
          }
        } else {
          r.push(null);
        }
      }
      return r.filter(Boolean);
    };
    let m = +!!e.hasLineMarker();
    let _ = e.getModelText();
    let y = _.slice(m, _.endsWith("\n") ? -1 : _.length);
    if (!d.test(y)) {
      return;
    }
    while (r = l.exec(y)) {
      if (!u) {
        u = [];
        a = [];
      }
      let e = r.index + m;
      let n = r[0];
      if (function (e, n) {
        let r = E([...n.keys()].concat(...n.values()));
        return RegExp(`[${r}]`).test(e);
      }(n, h)) {
        n = function (e, n) {
          let r = [];
          let i = e.length;
          let o = e;
          for (let s = 0; s < i; s++) {
            let i = e[s];
            let l = RegExp(`[${E([...n.values()])}]`).test(i);
            if (n.has(i)) {
              r.push([n.get(i), s]);
            } else if (l) {
              let n = r.pop();
              if (!n) {
                return e.slice(0, s);
              }
              if (i !== n[0]) {
                if (r[0]) {
                  return o = e.slice(0, r[0][1]);
                } else {
                  return e.slice(0, n[1]);
                }
              }
            }
          }
          if (r.length) {
            o = e.slice(0, r[0][1]);
          }
          return o;
        }(r[0], h);
      }
      p ||= v();
      let i = p.filter(r => r !== null && e < r[0] && e + n.length >= r[0]);
      if (i.length) {
        let r = i[0][0];
        n = n.slice(0, r - e);
      }
      if (!p.some(r => r !== null && e >= r[0] && e + n.length <= r[1])) {
        u.push([e, n]);
        a.push(e, e + n.length);
      }
    }
    if (!u) {
      return;
    }
    function E(e) {
      return e.map(e => `\\${e}`).join("");
    }
    let b = function (e, n) {
      let r = 0;
      let i = 0;
      if (n) {
        while (r < n.length && n[r] === 0) {
          r++;
        }
      }
      return function o(s, l) {
        if (!n || r >= n.length) {
          e(s, l);
          i += s.length;
        } else {
          let u = n[r] - i;
          let a = s.length;
          if (u >= a) {
            e(s, l);
            i += s.length;
            if (u === a) {
              r++;
            }
          } else {
            if (u > 0) {
              e(s.substring(0, u), l);
              i += u;
            }
            r++;
            o(s.substring(u), l);
          }
        }
      };
    }((i = 0, function (e, r = {}) {
      if (r.list && /code/.test(r.list)) {
        f = true;
      }
      let s = e.length;
      let a = Object.keys(r);
      let d = a.find(e => e === "link");
      let h = a.find(e => e === "unlink");
      let p = function (e, n, r, i) {
        if (!u) {
          return false;
        }
        for (let o = 0; o < u.length; o++) {
          let s = u[o];
          if (e >= s[0] && e < s[0] + s[1].length) {
            if (r) {
              u.splice(o, 1);
              o--;
            } else {
              if (!i) {
                return s[1];
              }
              l.lastIndex = 0;
              let e = l.exec(s[1].substring(n.length));
              if (e) {
                u.splice(o, 1, [s[0] + n.length, e[0]]);
              } else {
                u.splice(o, 1);
              }
              return s[1];
            }
          }
        }
        return false;
      }(i, e, d, h);
      if (!p || f || h || g(r)) {
        n.retain(s);
      } else {
        let e = clientsideLinkConstants_1.autoUrlType;
        n.retain(s, {
          [e]: docUrlProcessingUtilities.normalizeUrl(p),
          [`${e}-start`]: String(i),
          [`${e}-length`]: String(s)
        });
      }
      i += s;
    }), a);
    e.getOps().forEach(e => b(e.insert, e.attributes || {}));
  };
  function _(e, n) {
    let r = {};
    if (n && n.length > 0) {
      let e = n.length;
      r = {
        linkLength: e,
        linkStart: n.substring(0, 8),
        linkEnd: e > 16 ? n.substring(e - 8, e) : ""
      };
    }
    docxEventCollector.wrappedCollector("doc_bug_track_dev", {
      action: e,
      ...r
    });
  }
  require.d(exports, {
    isNextOpDifferent: function () {
      return v;
    },
    processUrlLinking: function () {
      return m;
    },
    extractLinkInfo: function () {
      return h;
    },
    clearLinkSelection: function () {
      return f;
    },
    collectLinkDebug: function () {
      return _;
    },
    isPrevOpDifferent: function () {
      return p;
    }
  });
}