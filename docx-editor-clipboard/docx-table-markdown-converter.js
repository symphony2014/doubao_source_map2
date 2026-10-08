// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LN' to 'validateCellBlocks'
// - Renamed export 'Qz' to 'convertCellsToMarkdown'
// - Renamed export 'Sn' to 'convertTableToMarkdown'
// - Renamed export 'VE' to 'repeatString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7245.ed228716.js
         * chunkId: 7245
         * moduleId: 325871
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTableLayoutUtils = require("docx-table-layout-utils") /*id: 163702*/;
  function a(e, o = " ") {
    if (e < 1) {
      return "";
    } else {
      return Array(e + 1).join(o);
    }
  }
  function l(e) {
    e.splice(1, 0, []);
    e[0].forEach(o => {
      e[1].push("---");
    });
    return e.map(e => {
      let o = e.map(e => e.replace(/\n/g, " "));
      return `| ${o.join(" | ")} |
`;
    }).join("");
  }
  function s(e, o, r) {
    let n = [];
    let {
      rows_id: i,
      columns_id: a,
      cell_set: s
    } = e.snapshot;
    i.forEach((e, i) => {
      a.forEach((a, l) => {
        n[i] ||= [];
        let {
          block_id: c
        } = s[`${e}${a}`];
        let d = o.getBlockModelsByRecordId(c)[0];
        let u = [];
        for (let e of d.children) {
          u.push(r(e.id));
        }
        let p = u.join("\n");
        n[i][l] = p;
      });
    });
    return l(n);
  }
  function c(e, o) {
    return !!e.length && !e.find(e => {
      let r = o.getBlockModelByBlockIdNotCheck(e.id);
      return !r || r.type !== docBlockTypeConstants.blockTypeConstants.CELL;
    });
  }
  function d(e, o, r) {
    let a = o.getBlockModelByBlockIdNotCheck(e[0].id)?.parent;
    if (!a) {
      return "";
    }
    let s = e.map(e => e.id);
    let c = a.snapshot;
    let d = new Map();
    for (let [r, {
      block_id: n
    }] of Object.entries(c.cell_set)) {
      if (d.size === e.length) {
        break;
      }
      if (o.getBlockIdsByRecordId(n).find(e => s.includes(e))) {
        d.set(n, r);
      }
    }
    let u = [];
    let p = 0;
    let h = 0;
    e.forEach((e, n) => {
      let a = o.getBlockModelByBlockIdNotCheck(e.id);
      if (!a) {
        return;
      }
      let l = d.get(a.recordId);
      if (!l) {
        return;
      }
      let [s, g] = docxTableLayoutUtils.getCellPosition(l, c);
      if (n === 0) {
        p = s;
        h = g;
      }
      u[s - p] ||= [];
      let m = [];
      for (let e of a.children) {
        m.push(r(e.id));
      }
      let f = m.join("\n");
      u[s - p][g - h] = f;
    });
    return l(u);
  }
  require.d(exports, {
    validateCellBlocks: function () {
      return c;
    },
    convertCellsToMarkdown: function () {
      return d;
    },
    convertTableToMarkdown: function () {
      return s;
    },
    repeatString: function () {
      return a;
    }
  });
}