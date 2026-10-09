// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DV' to 'isValidTextNode'
// - Renamed export 'Q1' to 'extractLeadingNumber'
// - Renamed export 'WL' to 'isAsciiString'
// - Renamed export 'Ww' to 'buildNestedTree'
// - Renamed export 'lK' to 'findCodeChild'
// - Renamed export 'vK' to 'expandTableRows'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 40695
         */
module.exports = function (module, exports, require) {
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  let i = ["AREA", "BASE", "COL", "COMMAND", "EMBED", "TITLE", "SVG", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR", "STYLE", "SCRIPT", "#COMMENT"];
  let a = e => {
    var o;
    let r = e.nodeName.toUpperCase();
    let n = (o = e.parentElement) === null || o === undefined ? undefined : o.nodeName.toUpperCase();
    return !i.includes(r) && (!!n || e.nodeType !== 3 || e.textContent && !/^\n*$/.test(e.textContent));
  };
  function l(e, o) {
    let r = e.match(/^(\d+)/);
    if (r) {
      return Number(r[0]);
    } else {
      return o;
    }
  }
  function s(e, o, r) {
    return e.reduce((n, i, a) => {
      let l = n.length;
      let s = n[l - 1];
      let c = e[a + 1];
      if (r != null) {
        r(i, c);
      }
      if (l > 0 && s.context[o] && i.context[o]) {
        let e = n;
        let r = n[l - 1];
        let {
          [o]: a
        } = i.context;
        while (r) {
          if (a <= r.context[o]) {
            e.push(i);
            break;
          }
          if (r.children.length === 0) {
            r.children.push(i);
            break;
          }
          let n = r.children[r.children.length - 1];
          if (a <= n.context[o]) {
            r.children.push(i);
            break;
          }
          e = (r = n).children;
        }
      } else {
        n.push(i);
      }
      return n;
    }, []);
  }
  function c(e) {
    let {
      cell_set: o,
      rows_id: r,
      columns_id: i
    } = e;
    let a = {};
    let l = 0;
    for (let e = 0; e < i.length; e++) {
      let n = i[e];
      let s = 0;
      for (let e = 0; e < r.length;) {
        let i = r[e];
        let a = o[`${i}${n}`].merge_info.row_span;
        s += a;
        e += a;
      }
      a[n] = s;
      l = Math.max(s, l);
    }
    if (l <= r.length) {
      return;
    }
    let s = r.length;
    for (let e = s; e < l; e++) {
      r.push(docxTableLayoutUtils.generateRowId());
    }
    i.forEach(e => {
      for (let n = s; n < l; n++) {
        o[`${r[n]}${e}`] = {
          children: [],
          merge_info: {
            row_span: 1,
            col_span: 1
          }
        };
      }
    });
  }
  let d = e => e && /^[\x00-\x7F]+$/.test(e);
  let u = e => {
    if (e.children.length) {
      for (let o of e.children) {
        if (o.nodeName === "CODE") {
          return o;
        }
      }
    }
  };
  require.d(exports, {
    isValidTextNode: function () {
      return a;
    },
    extractLeadingNumber: function () {
      return l;
    },
    isAsciiString: function () {
      return d;
    },
    buildNestedTree: function () {
      return s;
    },
    findCodeChild: function () {
      return u;
    },
    expandTableRows: function () {
      return c;
    }
  });
}