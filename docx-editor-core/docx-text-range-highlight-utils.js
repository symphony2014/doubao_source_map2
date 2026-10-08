// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZB' to 'calculateTextRangeHighlight'
// - Renamed export 'dy' to 'prepareFlashData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 663042
         */
module.exports = function (module, exports, require) {
  var escapeRegexpUtil = require("escape-regexp-util") /*id: 711152*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var flowDocPreviewCheck = require("flow-doc-preview-check") /*id: 794698*/;
  var preciseMathRoundUtil = require("precise-math-round-util") /*id: 94886*/;
  var isNullCheck = require("is-null-check") /*id: 36126*/;
  var docLoggerSymbol = require("doc-logger-symbol") /*id: 192564*/;
  var diContainerInstance = require("di-container-instance") /*id: 167867*/;
  var docxImageViewerUtils = require("docx-image-viewer-utils") /*id: 200311*/;
  var anchorConstantsConfig = require("anchor-constants-config") /*id: 302634*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var codeBlockConstants = require("code-block-constants") /*id: 48094*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  function m(e) {
    let n;
    let {
      blockId: i,
      block: l,
      options: a
    } = e;
    let {
      blockManager: s
    } = a;
    let {
      selected_text: c
    } = l;
    if (!c) {
      return null;
    }
    let u = s.getBlockModelByBlockId(i);
    let g = s.getBlockViewByBlockIdNotCheck(i);
    if (!u) {
      return;
    }
    let {
      src_start_idx: p,
      src_end_idx: m,
      src_data: b
    } = c;
    if (!b || p && m && (g == null ? undefined : g.type) === docBlockTypeConstants.blockTypeConstants.CODE && (g == null ? undefined : g.isNewUI)) {
      return v(i, [p, m], a);
    }
    try {
      n = JSON.parse(b).text.initialAttributedTexts.text[0];
    } catch {
      return null;
    }
    let _ = docxImageViewerUtils.getDocxImageUrl(u);
    if (!n || !_) {
      return null;
    }
    if (n === _) {
      return v(i, [p, m], a);
    }
    {
      let e = n.slice(Math.max(0, p), m);
      if (e === anchorConstantsConfig.spaceChar) {
        return null;
      }
      let l = _.match(escapeRegexpUtil.escapeRegExp(e));
      if (e && l && !isUndefinedCheck.isUndefined(l.index)) {
        return v(i, [l.index, l.index + e.length], a);
      } else {
        return null;
      }
    }
  }
  function v(e, n, i) {
    let {
      blockManager: r,
      rect: s,
      useSplitHighlight: d
    } = i;
    let h = r.getBlockViewByBlockId(e);
    let {
      hostElement: m,
      type: v
    } = h;
    if (!m) {
      return null;
    }
    let _ = m.querySelector(".text-editor");
    if (!_) {
      return null;
    }
    let y = function (e) {
      let n = getComputedStyle(e);
      let i = n.lineHeight;
      if (i) {
        return Number(i.split("px")[0]);
      }
      let r = document.createElement(e.tagName);
      r.style.cssText = n.cssText;
      r.style.visibility = "hidden";
      r.style.position = "absolute";
      r.style.height = "auto";
      r.style.whiteSpace = "nowrap";
      r.innerText = "M";
      document.body.appendChild(r);
      let o = r.offsetHeight;
      r.remove();
      return o;
    }(_);
    if (!y) {
      diContainerInstance.diContainer.get(docLoggerSymbol.docLoggerSymbol).persist.info({
        eventName: "FlowDocx_calculateTextLineRange_no_lineHeight",
        meta: {
          blockId: e
        }
      });
      return null;
    }
    let E = _.getBoundingClientRect();
    let S = m.getBoundingClientRect();
    let I = Math.max(E.left - S.left, 2);
    let k = S.right - E.right;
    if (v === docBlockTypeConstants.blockTypeConstants.CODE && h.isNewUI) {
      I = codeBlockConstants.codeBlockMinWidth;
      k = h.snapshot.wrap ? codeBlockConstants.codeBlockIndent : 1;
    }
    if (flowDocPreviewCheck.validateNonNumber(y) || isUndefinedCheck.isUndefined(I) || isUndefinedCheck.isUndefined(k)) {
      return null;
    }
    let [C, T] = n;
    let M = s.getActualCaretRect(e, C, e, true);
    let R = s.getActualCaretRect(e, T, e, false);
    let N = M.left;
    let {
      height: w
    } = M;
    let O = R.left;
    let A = M.top;
    let D = R.bottom;
    if (isUndefinedCheck.isUndefined(N) || isUndefinedCheck.isUndefined(A) || isUndefinedCheck.isUndefined(O) || isUndefinedCheck.isUndefined(D)) {
      return null;
    }
    if (e === r.rootBlockId) {
      let e = E.top - S.top;
      A -= e;
      D -= e;
    }
    let L = m.clientWidth || _.clientWidth;
    if (N < 0 || O > L) {
      return null;
    }
    let P = browserEnvironmentDetectionUtils.browserDetector.isIOS ? 4 : 6;
    let B = y - (d ? P : 0);
    let x = preciseMathRoundUtil.preciseMathRound((D - A) / y);
    let U = A - (B - w) / 2;
    let z = U + y;
    let H = b({
      height: B,
      left: N,
      top: U,
      width: x === 1 ? O - N : undefined,
      right: x === 1 ? undefined : k
    });
    let F = [];
    let $ = z;
    if (x > 2) {
      for (let e = 0; e < x - 2; e++) {
        F.push(b({
          height: B,
          left: I,
          top: z + e * y,
          right: k
        }));
      }
      $ = z + y * (x - 2);
    }
    let Z = null;
    if (x >= 2) {
      Z = b({
        height: B,
        left: I,
        top: $,
        width: O - I
      });
    }
    if (Z) {
      return [H, ...F].concat(Z);
    } else {
      return [H, ...F];
    }
  }
  function b(e) {
    let {
      left: n,
      top: i,
      width: r,
      height: o,
      right: l
    } = e;
    let s = {
      height: `${o}px`,
      left: `${preciseMathRoundUtil.preciseMathRound(n)}px`,
      top: `${i}px`,
      position: "absolute",
      pointerEvents: "none",
      zIndex: 1
    };
    if (l !== undefined) {
      s.right = `${preciseMathRoundUtil.preciseMathRound(l)}px`;
    } else if (r !== undefined) {
      s.width = `${r}px`;
    }
    let c = document.createElement("div");
    c.classList.add("text-range-flash-mask");
    Object.assign(c.style, s);
    return c;
  }
  function _(e, n) {
    if (!n) {
      return false;
    }
    let {
      blockManager: i,
      rect: r
    } = n;
    if (!i || !r) {
      return false;
    }
    let o = [];
    let l = new Map();
    let a = new Map();
    e.forEach(e => {
      let {
        block_id: n,
        selected_text: c
      } = e;
      let u = i.getBlockIdsByRecordId(n)[0];
      if (!u) {
        return;
      }
      let d = i.getBlockViewByBlockIdNotCheck(u);
      if (!d) {
        return;
      }
      let h = d.model.parent;
      if (h) {
        let {
          recordId: e,
          type: i
        } = h;
        if (isNullCheck.isNull(a.get(e)) && i !== "page") {
          a.set(n, c);
          return;
        }
      }
      l.set(n, {
        blockId: u,
        block: e,
        options: {
          blockManager: i,
          rect: r,
          noBorderRadius: d.type === docBlockTypeConstants.blockTypeConstants.CELL
        }
      });
      o.push(d);
      a.set(n, c);
    });
    return {
      flashBlocks: o,
      flashStyles: l
    };
  }
  require.d(exports, {
    calculateTextRangeHighlight: function () {
      return m;
    },
    prepareFlashData: function () {
      return _;
    }
  });
}