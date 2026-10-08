// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'diffEditorZones'
// - Renamed export 'O' to 'getZoneContentDiff'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 212178
         */
module.exports = function (module, exports, require) {
  var n;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var diffMatchPatch = require("diff-match-patch") /*id: 183089*/;
  var a = diffMatchPatch;
  var assertErrorHelper = require("assert-error-helper") /*id: 85083*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var documentOperationConstants = require("document-operation-constants") /*id: 134823*/;
  var editorZoneState = require("editor-zone-state") /*id: 962363*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  (n = {}).TEXT = "text";
  n.LINE_MAKER = "line_maker";
  n.CODE_BLOCK = "code_block";
  n.TABLE = "table";
  n.IMAGE = "image";
  n.LINK = "link";
  n.MINDMAP = "mindmap";
  n.MERMAID = "mermaid";
  let v = n;
  let g = e => {
    if (!e[documentOperationConstants.operationTypes.INSERT]) {
      throw Error("Not an insert ZoneDeltaOp");
    }
    if (e.attributes?.type === "codeblock") {
      return v.CODE_BLOCK;
    } else if (e.attributes?.aceTable) {
      return v.TABLE;
    } else if (e.attributes?.lmkr === "1") {
      return v.LINE_MAKER;
    } else if (e.attributes?.image === "true") {
      return v.IMAGE;
    } else if (e.attributes?.hyperlink) {
      return v.LINK;
    } else if (e.attributes?.mindmap) {
      return v.MINDMAP;
    } else if (e.attributes?.mermaid) {
      return v.MERMAID;
    } else {
      return v.TEXT;
    }
  };
  let $ = e => {
    let {
      from: t,
      to: r,
      omitAttributes: n = []
    } = e;
    let i = isEmptyUtil.isEmpty(t) || isNullishCheck.isNil(t);
    let l = isEmptyUtil.isEmpty(r) || isNullishCheck.isNil(r);
    if (deepEqualUtil_1.deepEqual(throttledOmitPathStringify.omitPathStringify(t, ...n), throttledOmitPathStringify.omitPathStringify(r, ...n)) || i && l) {
      return undefined;
    } else {
      return {
        ...safeObjectPropertyMap.safeObjectMap(t, () => ""),
        ...r
      };
    }
  };
  let b = e => isNullishCheck.isNil(e) || isEmptyUtil.isEmpty(e) ? undefined : e;
  let w = {
    name: "text",
    is: e => g(e) === v.TEXT,
    diff(e) {
      let {
        fromItem: t,
        toItem: r,
        text: n
      } = e;
      return new contentStructureDelta.ContentDelta().retain(n.length, $({
        from: t.attributes,
        to: r.attributes
      }));
    }
  };
  let k = {
    name: "list",
    is: e => g(e) === v.LINE_MAKER,
    diff(e) {
      let {
        fromItem: t,
        toItem: r,
        text: n
      } = e;
      return new contentStructureDelta.ContentDelta().retain(n.length, $({
        from: t.attributes,
        to: r.attributes,
        omitAttributes: ["ol-id"]
      }));
    }
  };
  var editorZoneDeltaUtils = require("editor-zone-delta-utils") /*id: 893015*/;
  var editorDeltaSetUtils = require("editor-delta-set-utils") /*id: 201746*/;
  let T = {
    name: "code_block",
    is: e => g(e) === v.CODE_BLOCK,
    diff(e) {
      let {
        from: n,
        to: i,
        fromItem: l,
        toItem: o,
        text: a,
        getDiff: s
      } = e;
      let c = l.attributes?.zoneId;
      let m = o.attributes?.zoneId;
      if (!c || !m) {
        throw Error("invalid code block insert op");
      }
      let h = editorZoneDeltaUtils.getDeltaByKey(n, c);
      let f = editorZoneDeltaUtils.getDeltaByKey(i, m);
      if (!h || !f || !editorDeltaSetUtils.isContentDelta(h) || !editorDeltaSetUtils.isContentDelta(f)) {
        throw Error("invalid code block zone delta");
      }
      let p = s(h, f);
      let y = editorZoneDeltaUtils.getDeltaTarget(p);
      let x = editorZoneDeltaUtils.getDeltaSet(p);
      y.zoneId = c;
      return {
        target: new contentStructureDelta.ContentDelta().retain(a.length),
        deltaSet: new deltaSetCore.DeltaSet().add(c, y).compose(x)
      };
    },
    getRelatedIds(e) {
      let r = e.attributes?.zoneId;
      if (!r) {
        throw Error("invalid insert op of code block");
      }
      return [r];
    }
  };
  var arrayTransposeUtil = require("array-transpose-util") /*id: 591611*/;
  var zoneDeltaClasses = require("zone-delta-classes") /*id: 240236*/;
  let _ = {
    name: "table",
    is: e => g(e) === v.TABLE,
    diff(e) {
      let {
        from: f,
        to: p,
        fromItem: y,
        toItem: x,
        text: v,
        getDiff: g
      } = e;
      let w = new deltaSetCore.DeltaSet();
      let k = y.attributes?.aceTable;
      let R = x.attributes?.aceTable;
      let [T, _] = (k == null ? undefined : k.split(" ")) ?? [];
      let [F, Z] = (R == null ? undefined : R.split(" ")) ?? [];
      if (!T || !_ || !F || !Z) {
        throw Error("invalid table insert op");
      }
      let j = editorZoneDeltaUtils.getDeltaByKey(f, T);
      let M = editorZoneDeltaUtils.getDeltaByKey(f, _);
      let I = editorZoneDeltaUtils.getDeltaByKey(p, F);
      let N = editorZoneDeltaUtils.getDeltaByKey(p, Z);
      if (!j || !M || !I || !N) {
        throw Error("invalid table zone delta");
      }
      let B = new zoneDeltaClasses.RowDelta({
        zoneId: T
      });
      let C = new zoneDeltaClasses.ColumnDelta({
        zoneId: _
      });
      let P = [];
      let z = [];
      let J = [];
      let L = [];
      for (let e = 0; e < Math.max(j.ops.length, I.ops.length); e++) {
        if (e < Math.min(j.ops.length, I.ops.length)) {
          B = B.retain(1, $({
            from: j.ops[e].attributes,
            to: I.ops[e].attributes
          }));
          P.push(j.ops[e].insert?.id || "");
          J.push(I.ops[e].insert?.id || "");
        } else if (j.ops.length < I.ops.length) {
          let t = `r${e}`;
          B = B.insert(t, b(I.ops[e].attributes));
          P.push(t);
          J.push(I.ops[e].insert?.id || "");
        } else {
          B = B.delete(1);
        }
      }
      for (let e = 0; e < Math.max(M.ops.length, N.ops.length); e++) {
        if (e < Math.min(M.ops.length, N.ops.length)) {
          C = C.retain(1, $({
            from: M.ops[e].attributes,
            to: N.ops[e].attributes
          }));
          z.push(M.ops[e].insert?.id || "");
          L.push(N.ops[e].insert?.id || "");
        } else if (M.ops.length < N.ops.length) {
          let t = `c${e}`;
          C = C.insert(t, b(N.ops[e].attributes));
          z.push(t);
          L.push(N.ops[e].insert?.id || "");
        } else {
          C = C.delete(1);
        }
      }
      w = (w = w.add(T, B)).add(_, C);
      for (let [e, t] of arrayTransposeUtil.transposeArrays(P, J)) {
        assertErrorHelper.assertThrow(e && t, "fromRowIdList and toRowIdList length not equal");
        for (let [r, n] of arrayTransposeUtil.transposeArrays(z, L)) {
          assertErrorHelper.assertThrow(r && n, "fromColIdList and toColIdList length not equal");
          let i = `x${e}x${r}`;
          let l = `x${t}x${n}`;
          let o = editorZoneDeltaUtils.getDeltaByKey(f, i);
          let a = editorZoneDeltaUtils.getDeltaByKey(p, l);
          assertErrorHelper.assertThrow(a, "to cell zone delta can must be found");
          let u = g(o ? {
            deltaSet: editorZoneDeltaUtils.getDeltaSet(f),
            target: o
          } : new contentStructureDelta.ContentDelta(), {
            deltaSet: editorZoneDeltaUtils.getDeltaSet(p),
            target: a
          });
          let c = editorZoneDeltaUtils.getDeltaTarget(u);
          let m = editorZoneDeltaUtils.getDeltaSet(u);
          c.zoneId = i;
          w = (w = w.add(i, c)).compose(m);
        }
      }
      return {
        target: new contentStructureDelta.ContentDelta().retain(v.length),
        deltaSet: w
      };
    },
    getRelatedIds(e, t) {
      var r;
      let [l, o] = ((r = e.attributes) === null || r === undefined ? undefined : r.aceTable.split(" ")) || [];
      let a = [];
      if (!l || !o) {
        throw Error("invalid insert op of table");
      }
      a.push(l, o);
      let s = t.get(l);
      let d = t.get(o);
      let u = [];
      let c = [];
      for (let e of s.ops) {
        let t = e.insert?.id;
        if (!t) {
          throw Error("invalid insert op of table row");
        }
        u.push(t);
      }
      for (let e of d.ops) {
        let t = e.insert?.id;
        if (!t) {
          throw Error("invalid insert op of table col");
        }
        c.push(t);
      }
      for (let e of u) {
        for (let t of c) {
          a.push(`x${e}x${t}`);
        }
      }
      return a;
    }
  };
  let F = {
    name: "image",
    is: e => g(e) === v.IMAGE,
    diff(e) {
      let {
        fromItem: n,
        toItem: i,
        text: l
      } = e;
      let o = {
        ...i.attributes
      };
      let a = n.attributes?.uuid ?? "";
      if (a) {
        o.uuid = a;
      }
      return new contentStructureDelta.ContentDelta().retain(l.length, $({
        from: n.attributes,
        to: o
      }));
    }
  };
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  let j = {
    name: "link",
    is: e => g(e) === v.LINK,
    diff(e) {
      let {
        fromItem: n,
        toItem: i,
        text: l
      } = e;
      let o = {
        ...i.attributes
      };
      let a = safeJsonUtils.safeParse(n.attributes?.hyperlink, {});
      let s = safeJsonUtils.safeParse(i.attributes?.hyperlink, {});
      let u = a == null ? undefined : a.linkId;
      if (u) {
        o.hyperlink = JSON.stringify({
          ...s,
          linkId: u
        });
      }
      return new contentStructureDelta.ContentDelta().retain(l.length, $({
        from: n.attributes,
        to: o
      }));
    }
  };
  let M = {
    name: "mindmap",
    is: e => g(e) === v.MINDMAP,
    diff(e) {
      let {
        fromItem: n,
        toItem: i,
        text: l
      } = e;
      let o = {
        ...i.attributes
      };
      let a = n.attributes?.id ?? "";
      if (a) {
        o.id = a;
      }
      return new contentStructureDelta.ContentDelta().retain(l.length, $({
        from: n.attributes,
        to: o
      }));
    }
  };
  let I = {
    name: "mermaid",
    is: e => g(e) === v.MERMAID,
    diff(e) {
      let {
        fromItem: n,
        toItem: i,
        text: l
      } = e;
      let o = {
        ...i.attributes
      };
      let a = n.attributes?.id ?? "";
      if (a) {
        o.id = a;
      }
      return new contentStructureDelta.ContentDelta().retain(l.length, $({
        from: n.attributes,
        to: o
      }));
    }
  };
  let N = (e, t) => e.find(e => e.is(t));
  let B = e => {
    let {
      plugins: t,
      from: r,
      to: n
    } = e;
    let o = editorZoneDeltaUtils.getDeltaTarget(r);
    let a = editorZoneDeltaUtils.getDeltaTarget(n);
    if (editorZoneDeltaUtils.getZoneModelText(r) !== editorZoneDeltaUtils.getZoneModelText(n)) {
      throw Error("text not equal between fromClosure and toClosure");
    }
    let m = deepCloneWrapper_1.deepClone(o.ops);
    let h = deepCloneWrapper_1.deepClone(a.ops);
    let f = 0;
    let p = 0;
    let y = 0;
    let x = 0;
    let v = new contentStructureDelta.ContentDelta();
    let g = new deltaSetCore.DeltaSet();
    while (f < m.length && p < h.length) {
      var $;
      var w;
      let e = m[f];
      let i = h[p];
      let o = ($ = e[documentOperationConstants.operationTypes.INSERT]) === null || $ === undefined ? undefined : $.slice(y);
      let a = (w = i[documentOperationConstants.operationTypes.INSERT]) === null || w === undefined ? undefined : w.slice(x);
      if (!isStringTypeCheck.isString(o) || !isStringTypeCheck.isString(a)) {
        throw Error("ZoneDeltaEqualDiff only allow insert");
      }
      let d = Math.min(o.length, a.length);
      assertErrorHelper.assertThrow(o.slice(0, d) === a.slice(0, d), "zone delta prefix must equal");
      let u = N(t, e);
      let k = N(t, i);
      if (!u) {
        throw Error("No matching plugin for from op item");
      }
      if (!k) {
        throw Error("No matching plugin for to op item");
      }
      if (u.name !== k.name) {
        v = v.delete(d).insert(a.slice(0, d), b(i.attributes));
      } else {
        let l = u.diff({
          from: r,
          to: n,
          fromItem: e,
          toItem: i,
          text: o.slice(0, d),
          getDiff: (e, r) => z({
            plugins: t,
            from: e,
            to: r
          })
        });
        v = v.concat(editorZoneDeltaUtils.getDeltaTarget(l));
        g = g.compose(editorZoneDeltaUtils.getDeltaSet(l));
      }
      if (o.length < a.length) {
        y = 0;
        f += 1;
        x += d;
      } else if (o.length > a.length) {
        x = 0;
        p += 1;
        y += d;
      } else {
        y = 0;
        x = 0;
        f += 1;
        p += 1;
      }
    }
    return {
      deltaSet: g,
      target: v = v.concat(new contentStructureDelta.ContentDelta({
        ops: o.ops.slice(f)
      })).concat(new contentStructureDelta.ContentDelta({
        ops: a.ops.slice(p)
      }))
    };
  };
  let C = (e, t) => e.endsWith("\n") && t.endsWith("\n") ? [...a(e.slice(0, -1), t.slice(0, -1)), [a.EQUAL, "\n"]] : a(e, t);
  let P = (e, t) => {
    let r = editorZoneDeltaUtils.getDeltaTarget(t);
    let n = editorZoneDeltaUtils.getDeltaSet(t);
    let i = [];
    for (let t of r.ops) {
      var l;
      let r = N(e, t);
      assertErrorHelper.assertThrow(r, "No matching plugin when getRelatedDeltaSet of op item");
      let a = ((l = r.getRelatedIds) === null || l === undefined ? undefined : l.call(r, t, n)) ?? [];
      i.push(...a);
    }
    let a = new deltaSetCore.DeltaSet();
    for (let e of i) {
      let r = editorZoneDeltaUtils.getDeltaByKey(t, e);
      assertErrorHelper.assertThrow(r, "related zone can must be found in target closure");
      a = a.add(e, r);
    }
    return a;
  };
  let z = e => {
    let {
      plugins: t,
      from: r,
      to: n
    } = e;
    let i = editorZoneDeltaUtils.getDeltaTarget(r);
    let l = editorZoneDeltaUtils.getDeltaTarget(n);
    if (!editorDeltaSetUtils.isContentDelta(i)) {
      throw Error("fromClosure is not zone delta");
    }
    if (!editorDeltaSetUtils.isContentDelta(l)) {
      throw Error("toClosure is not zone delta");
    }
    let o = new editorZoneState.EditorZoneState("from", i);
    let s = new editorZoneState.EditorZoneState("to", l);
    let c = C(o.getModelText(), s.getModelText());
    let h = new contentStructureDelta.ContentDelta();
    let f = new deltaSetCore.DeltaSet();
    let p = 0;
    let y = 0;
    for (let [e, i] of c) {
      if (e === a.INSERT) {
        let e = editorZoneDeltaUtils.getZoneContentRange(n, y, y + i.length);
        h = h.concat(editorZoneDeltaUtils.getDeltaTarget(e));
        f = f.compose(P(t, e));
        y += i.length;
      } else if (e === a.DELETE) {
        h = h.delete(i.length);
        p += i.length;
      } else if (e === a.EQUAL) {
        if (i === "\n") {
          h = h.retain(1);
        } else {
          let e = B({
            plugins: t,
            from: editorZoneDeltaUtils.getZoneContentRange(r, p, p + i.length),
            to: editorZoneDeltaUtils.getZoneContentRange(n, y, y + i.length)
          });
          let l = editorZoneDeltaUtils.getDeltaTarget(e);
          let o = editorZoneDeltaUtils.getDeltaSet(e);
          h = h.concat(l);
          f = f.concat(o);
        }
        p += i.length;
        y += i.length;
      }
    }
    return {
      deltaSet: f,
      target: h
    };
  };
  let J = (e, t) => {
    let r = z({
      plugins: [w, k, T, _, F, j, M, I],
      from: editorZoneDeltaUtils.getZoneDeltaInfo(e),
      to: editorZoneDeltaUtils.getZoneDeltaInfo(t)
    });
    return editorZoneDeltaUtils.addDeltaVersion(r);
  };
  let L = (e, t) => editorDeltaSetUtils.isReadOnlyDelta(J(e, t));
  require.d(exports, {
    diffEditorZones: function () {
      return J;
    },
    getZoneContentDiff: function () {
      return L;
    }
  });
}