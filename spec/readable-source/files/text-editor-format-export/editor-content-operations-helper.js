// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fp' to 'copySelectionOrAll'
// - Renamed export 'I4' to 'applyAttributesToSelection'
// - Renamed export 'UA' to 'removeLineMarkersFromSelection'
// - Renamed export 'mz' to 'getHeadingAnchorsBeforeSelection'
// - Renamed export 's2' to 'insertOrUpdateImage'
// - Renamed export 'wg' to 'getActiveBlockTypes'
// - Renamed export 'xu' to 'hasAttributesInSelection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 676428
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var numericRangeUtil = require("numeric-range-util") /*id: 685991*/;
  var dataProcessor = require("data-processor") /*id: 395538*/;
  var safeArrayReverse = require("safe-array-reverse") /*id: 953816*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var editorRangeZoneClass = require("editor-range-zone-class") /*id: 731872*/;
  var editorContentOperations = require("editor-content-operations") /*id: 444792*/;
  var aiEditorConstants = require("ai-editor-constants") /*id: 383014*/;
  let v = (e, t) => deepEqualUtil_1.deepEqual(throttledDeepCloneUtil.throttledDeepClone({
    ...e
  }, t), e);
  let g = e => {
    let {
      editor: t,
      attributes: r,
      selection: n,
      removeWhen: l = "every",
      allowLmkr: s = false,
      allowEndline: d = false,
      skipWhen: u,
      ...c
    } = e;
    let m = n ?? t.selection.getSelection();
    if (!editorContentOperations.hasValidSelection({
      editor: t,
      selection: m
    }) || deepEqualUtil_1.deepEqual(m.start, m.end)) {
      return;
    }
    let h = t.getContentState();
    let p = h.rangeToPosition(m);
    if (!p) {
      throw Error("Cannot find position of selection");
    }
    let {
      zoneId: x
    } = m.start;
    let g = h.getEntities(m).filter(e => (!!s || e.attributes.lmkr !== "1") && (!!d || e.text !== "\n") && (!u || (isFunctionUtil_1.isFunction(u) ? !u(e) : !v(e.attributes, u))));
    let $ = new contentStructureDelta.ContentDelta({
      zoneId: x
    });
    if (l === "every" && g.every(e => v(e.attributes, r)) || l === "any" && g.some(e => v(e.attributes, r)) || l === "always" || isFunctionUtil_1.isFunction(l) && l(g)) {
      $ = $.retain(p.start).retain(p.len, safeObjectPropertyMap.safeObjectMap(r, () => ""));
    } else {
      for (let e of g) {
        let t = h.rangePointToOffset(e.start);
        if (t !== null) {
          $ = $.compose(new contentStructureDelta.ContentDelta({
            zoneId: x
          }).retain(t).retain(e.text.length, r));
        }
      }
    }
    h.apply($, c);
  };
  let $ = e => {
    let {
      editor: t
    } = e;
    let r = t.selection.getSelection();
    let n = t.getContentState();
    let i = n.rangeToPosition(r);
    if (!i) {
      throw Error("Cannot find position of selection");
    }
    let {
      zoneId: l
    } = r.start;
    let o = n.getZoneState(l);
    if (!o) {
      throw Error(`Cannot find zone state of zoneId: ${l}`);
    }
    let u = n.getAttributes(r.start, r.end).toMap();
    let c = new contentStructureDelta.ContentDelta({
      zoneId: l
    }).retain(i.start).retain(i.len, safeObjectPropertyMap.safeObjectMap(throttledOmitPathStringify.omitPathStringify(u, "lmkr"), () => ""));
    for (let e of numericRangeUtil.createRange(r.start.line, r.end.line + 1)) {
      let t = o.getLine(e);
      if (!t) {
        continue;
      }
      let r = t.getLineAttributes().toMap();
      if (t.hasLineMarker()) {
        c = c.compose(new contentStructureDelta.ContentDelta({
          zoneId: l
        }).retain(t.getOffset().start).retain(1, safeObjectPropertyMap.safeObjectMap(throttledOmitPathStringify.omitPathStringify(r, "lmkr"), () => "")));
      }
    }
    n.apply(c);
  };
  let b = e => {
    let {
      editor: t,
      type: r = "auto"
    } = e;
    let n = t.selection.getSelection();
    let l = t.getContentState();
    let o = deepEqualUtil_1.deepEqual(n.start, n.end);
    if (r === "all" || o && r === "auto") {
      let e = l.getZoneState(zeroConstantModule_1.versionValue);
      if (!e) {
        throw Error("Cannot get ZoneState of DEFAULT_ZONE");
      }
      let r = new editorRangeZoneClass.EditorRangeZone({
        start: {
          line: 0,
          offset: 0,
          zoneId: zeroConstantModule_1.versionValue
        },
        end: {
          ...e.offsetToPoint(e.getContent().length()),
          zoneId: zeroConstantModule_1.versionValue
        },
        editor: t
      });
      t.clipboard.copyRange(r);
    }
    if (r === "selection" || !o && r === "auto") {
      t.clipboard.copyRange(n);
    }
  };
  let w = (e, t) => {
    if (!e) {
      return {
        alt: "",
        image: "true",
        src: xssContentSanitizer.sanitizeUrl("", null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: false,
          bid: "flow_web",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: true,
          escapeRule: "escape-report",
          reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
          scmBranch: "release_train_samantha_2026-03-09_1120843696898",
          scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
          scmVersion: "1.0.4.168",
          webpackPluginVersion: "3.4.5",
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xvWk$o%2$XRlhTakZr%jFaNlRHN$Nlb*xZ%201a1dFMDk"
        }),
        uuid: randomStringGenerator.createRandomString(8),
        ...(t || {})
      };
    }
    let {
      src: r,
      source: i,
      width: l,
      height: o
    } = e;
    let a = {
      ...(t || {}),
      image: "true",
      uuid: randomStringGenerator.createRandomString(8),
      src: r
    };
    a.source = String(i);
    if (l) {
      a.width = String(l);
    }
    if (o) {
      a.height = String(o);
    }
    return a;
  };
  let k = (e, t) => {
    let n = e.getContentState().getEntities(t);
    return n.length === 1 && n[0].attributes?.image === "true";
  };
  let S = e => {
    let {
      editor: t,
      image: r,
      attribute: n
    } = e;
    let i = t.selection.getSelection();
    let {
      zoneId: l
    } = i.start;
    if (l !== zeroConstantModule_1.versionValue) {
      return;
    }
    let o = t.getContentState();
    let a = o.rangeToPosition(i);
    if (!a) {
      throw Error("Cannot find position of selection");
    }
    if (r && k(t, i)) {
      o.apply(new contentStructureDelta.ContentDelta({
        zoneId: l
      }).retain(a.start).retain(a.len, w(r)));
    } else {
      o.apply(new contentStructureDelta.ContentDelta({
        zoneId: l
      }).retain(a.start).insert(" ", w(r, n)));
    }
  };
  let R = e => {
    let {
      editor: t,
      selection: r,
      line: n
    } = e;
    let {
      start: i,
      end: l
    } = r;
    if (i.zoneId !== l.zoneId) {
      return;
    }
    let o = t.getContentState().getZoneState(i.zoneId);
    if (!o) {
      return;
    }
    let a = o.getLine(n);
    if (!a) {
      return;
    }
    let s = n === i.line ? i.offset : 0;
    let d = n === l.line ? l.offset : a.getModelText().length;
    return a.getEntities({
      start: s,
      end: d
    });
  };
  let T = e => {
    let {
      editor: t
    } = e;
    let r = t.selection.getSelection();
    let {
      start: n,
      end: i
    } = r;
    if (n.zoneId !== i.zoneId) {
      return [];
    }
    let l = t.getContentState();
    let o = [];
    for (let e of numericRangeUtil.createRange(n.line, i.line + 1)) {
      var a;
      var s;
      var c;
      let i = l.getLineAttributes(n.zoneId, e).toMap();
      let d = R({
        editor: t,
        selection: r,
        line: e
      });
      if (i.blockquote === "true") {
        o.push(aiEditorConstants.blockTypes.Blockquote);
      }
      if (i.heading === "h1") {
        o.push(aiEditorConstants.blockTypes.Heading1);
      }
      if (i.heading === "h2") {
        o.push(aiEditorConstants.blockTypes.Heading2);
      }
      if (i.heading === "h3") {
        o.push(aiEditorConstants.blockTypes.Heading3);
      }
      if (i.heading === "h4") {
        o.push(aiEditorConstants.blockTypes.Heading4);
      }
      if ((a = i.list) === null || a === undefined ? undefined : a.startsWith("number")) {
        o.push(aiEditorConstants.blockTypes.OrderedList);
      }
      if ((s = i.list) === null || s === undefined ? undefined : s.startsWith("bullet")) {
        o.push(aiEditorConstants.blockTypes.UnorderedList);
      }
      if ((c = i.list) === null || c === undefined ? undefined : c.startsWith("check")) {
        o.push(aiEditorConstants.blockTypes.Check);
      }
      if (d == null ? undefined : d.length) {
        if (d.every(e => v(e.attributes, {
          type: "codeblock"
        }))) {
          o.push(aiEditorConstants.blockTypes.CodeBlock);
        }
        if (d.every(e => v(e.attributes, {
          bold: "true"
        }))) {
          o.push(aiEditorConstants.blockTypes.Bold);
        }
        if (d.every(e => v(e.attributes, {
          italic: "true"
        }))) {
          o.push(aiEditorConstants.blockTypes.Italic);
        }
        if (d.every(e => v(e.attributes, {
          underline: "true"
        }))) {
          o.push(aiEditorConstants.blockTypes.Underline);
        }
        if (d.every(e => v(e.attributes, {
          strikethrough: "true"
        }))) {
          o.push(aiEditorConstants.blockTypes.StrikeThrough);
        }
        if (d.every(e => v(e.attributes, {
          inlineCode: "true"
        }))) {
          o.push(aiEditorConstants.blockTypes.InlineCode);
        }
        if (d.length === 1 && v(d[0].attributes, {
          image: "true"
        })) {
          o.push(aiEditorConstants.blockTypes.Image);
        }
      }
    }
    return dataProcessor.processData(o);
  };
  let W = e => {
    let {
      editor: t,
      attributes: r
    } = e;
    return t.getContentState().getEntities(t.selection.getSelection()).every(e => v(e.attributes, r));
  };
  let E = e => {
    let {
      editor: t,
      selection: r
    } = e;
    let n = [];
    let {
      start: i
    } = r;
    let {
      zoneId: l
    } = i;
    let o = t.getContentState();
    let a = o.getZoneState(l);
    if (!a) {
      throw Error(`Cannot find selection start zoneId of ${l}`);
    }
    let s = o.getEntities({
      start: {
        zoneId: l,
        line: 0,
        offset: 0
      },
      end: i
    });
    let d = Infinity;
    for (let e of safeArrayReverse.reverseArray(s)) {
      let {
        heading: t
      } = e.attributes ?? {};
      if (t) {
        let r = Number(t.match(/h([0-9]+)/)?.[1]);
        let i = a.getLine(e.start.line);
        if (i && r < d) {
          d = r;
          n.unshift({
            level: r,
            value: i.getText().trim()
          });
        }
      }
    }
    return n;
  };
  require.d(exports, {
    copySelectionOrAll: function () {
      return b;
    },
    applyAttributesToSelection: function () {
      return g;
    },
    removeLineMarkersFromSelection: function () {
      return $;
    },
    getHeadingAnchorsBeforeSelection: function () {
      return E;
    },
    insertOrUpdateImage: function () {
      return S;
    },
    getActiveBlockTypes: function () {
      return T;
    },
    hasAttributesInSelection: function () {
      return W;
    }
  });
}