// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MI' to 'renderDeltaBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 552713
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var isNumberUtil = require("is-number-util") /*id: 897814*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var infraUtilFunctions = require("infra-util-functions") /*id: 385226*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var blockTypeEnum = require("block-type-enum") /*id: 678364*/;
  var editorDeltaSetUtils = require("editor-delta-set-utils") /*id: 201746*/;
  let c = e => {
    let {
      ops: t,
      index: r,
      restStartIndex: n,
      consumeLength: i
    } = e;
    let l = infraUtilFunctions.getProperty(t, r);
    if (!l) {
      throw Error(`Invalid index when consume ops :${r}`);
    }
    let o = deltaSetCore.getOpLength(l);
    if (n >= o) {
      throw Error(`Invalid restStartIndex when consume ops :${r}`);
    }
    let d = n ? editorDeltaSetUtils.sliceInsertOp(l, 0, n) : infraUtilFunctions.getProperty(t, r - 1);
    let c = n === o ? r + 1 : r;
    let m = n === o ? 0 : n;
    let h = i;
    let f = [];
    while (c < t.length) {
      let e = t[c];
      let r = deltaSetCore.getOpLength(e) - m;
      if (h >= r) {
        f.push(editorDeltaSetUtils.sliceInsertOp(e, m));
        h -= r;
        c += 1;
        m = 0;
      } else {
        if (!h) {
          break;
        }
        f.push(editorDeltaSetUtils.sliceInsertOp(e, m, m + h));
        m += h;
        h = 0;
        break;
      }
    }
    let p = infraUtilFunctions.getProperty(t, c);
    let y = p && editorDeltaSetUtils.sliceInsertOp(p, m);
    return {
      nextIndex: c,
      nextRestStartIndex: m,
      prevOp: d,
      matchedOps: f,
      nextOp: y
    };
  };
  let m = async e => {
    let t;
    let {
      docEditor: r,
      deltaSet: h,
      zone: f,
      plugins: p,
      titleBlock: y,
      addChildToBlock: x,
      referenceQuoteManager: v
    } = e;
    let g = isStringTypeCheck.isString(f) ? h.get(f) : f;
    if (!g || !editorDeltaSetUtils.isContentDelta(g)) {
      throw Error("zone is not exist in deltaSet");
    }
    let $ = [];
    if (y) {
      $.push(y);
    }
    let {
      ops: b
    } = g;
    let w = 0;
    let k = 0;
    let S = [];
    let R = [];
    let T = () => {
      $.push(...R);
      R = [];
    };
    for (let e of p) {
      e.__setConfig({
        docEditor: r,
        referenceQuoteManager: v
      });
    }
    while (w < b.length) {
      let e = b[w];
      let n = deltaSetCore.getOpLength(e);
      let f = infraUtilFunctions.findMapResult(p, t => !S.includes(t) && t.match({
        prevOp: k ? editorDeltaSetUtils.sliceInsertOp(e, 0, k) : b[w - 1],
        nextOp: b[w + 1],
        curOp: editorDeltaSetUtils.sliceInsertOp(e, k),
        index: w,
        deltaSet: h,
        zone: g
      }));
      if (!f) {
        k = 0;
        w += 1;
        S = [];
        continue;
      }
      let [y, W] = f;
      let {
        prevOp: E,
        matchedOps: _,
        nextOp: F,
        nextIndex: Z,
        nextRestStartIndex: j
      } = c({
        ops: b,
        index: w,
        restStartIndex: k,
        consumeLength: isNumberUtil.isNumber(W) ? Math.max(W, 0) : n
      });
      let M = {
        prevOp: E,
        matchedOps: _,
        nextOp: F,
        index: w,
        deltaSet: h,
        zone: g,
        convertToBlocks: e => {
          let {
            zone: t
          } = e;
          return m({
            docEditor: r,
            deltaSet: h,
            zone: t,
            plugins: p,
            addChildToBlock: x,
            referenceQuoteManager: v
          });
        }
      };
      if (y.type !== blockTypeEnum.BlockTypes.ContainerBlock) {
        T();
      }
      if (y.type === blockTypeEnum.BlockTypes.ContainerBlock) {
        let e = await y.render(M);
        if (e) {
          R = infraUtilFunctions.ensureArray(e);
        }
      } else if (y.type === blockTypeEnum.BlockTypes.EmbedBlock) {
        let e = await y.render(M);
        $.push(...infraUtilFunctions.ensureArray(e));
      } else if (y.type === blockTypeEnum.BlockTypes.Inline) {
        let e = await y.render(M);
        let r = lastElementHelper.getLastElement($);
        let n = (t == null ? undefined : t.type) === blockTypeEnum.BlockTypes.EmbedBlock;
        if (e && r && !n) {
          if (arrayIsArrayUtil.isArray(e)) {
            for (let t of e) {
              x(r, t);
            }
          } else {
            x(r, e);
          }
        }
      }
      t = y;
      if (W === 0) {
        S.push(y);
        continue;
      }
      if (W === -1) {
        S.push(...p.filter(e => e.type === y.type));
        continue;
      }
      w = Z;
      k = j;
      S = [];
    }
    T();
    return $;
  };
  require.d(exports, {
    renderDeltaBlocks: function () {
      return m;
    }
  });
}