// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'markdownDeltaConvert'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 689610
         */
module.exports = function (module, exports, require) {
  var katexCoreRenderer = require("katex-core-renderer") /*id: 811377*/;
  var markdownAutofixPlugins = require("markdown-autofix-plugins") /*id: 172658*/;
  var markdownParserSerializer = require("markdown-parser-serializer") /*id: 512638*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var contentStructureDelta = require("content-structure-delta") /*id: 768480*/;
  var deltaSetCore = require("delta-set-core") /*id: 47229*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  var editorZoneDeltaUtils = require("editor-zone-delta-utils") /*id: 893015*/;
  let c = (e, t) => e.endsWith(t) ? e : `${e}${t}`;
  let m = (e, t) => {
    for (let r of e) {
      if (t(r)) {
        return r;
      }
      if (markdownParserSerializer.hasNodeChildren(r)) {
        let e = m(r.children, t);
        if (e) {
          return e;
        }
      }
    }
  };
  let h = (e, t) => deepEqualityCheck_1.deepEqual(e.type, "root") ? new contentStructureDelta.ContentDelta().insertLineMarker().concat(editorZoneDeltaUtils.getDeltaTarget(t).insertEnter()) : editorZoneDeltaUtils.getDeltaTarget(t).insertEnter();
  let f = function (e, t = []) {
    if (!(t == null ? undefined : t.length) || !e) {
      return e;
    }
    let r = [...t].sort((e, t) => e.start - t.start);
    let n = e;
    let i = 0;
    for (let t of r) {
      let {
        start: r,
        end: l,
        insert: o
      } = t;
      if (r < 0 || l > e.length || r > l) {
        continue;
      }
      let a = r + i;
      let s = l + i;
      n = n.slice(0, a) + o + n.slice(s);
      i += o.length - (l - r);
    }
    return n;
  };
  var docReferenceHtmlEntities = require("doc-reference-html-entities") /*id: 958118*/;
  let y = e => {
    let t = e.match(/type=&#x22;(\w+)&#x22;/);
    let r = e.match(/id=(\d+)/);
    return {
      type: t ? t[1] : null,
      id: r ? parseInt(r[1], 10) : null
    };
  };
  let x = {
    name: "html",
    match: e => {
      var t;
      return (e == null ? undefined : e.type) === "html" && (e == null ? undefined : (t = e.value) === null || t === undefined ? undefined : t.startsWith(`${docReferenceHtmlEntities.htmlEntityMap["<"]}reference`));
    },
    converter(e) {
      let {
        content: t
      } = e;
      let {
        type: r,
        id: n
      } = y(t.value);
      if (r && n) {
        return {
          target: new contentStructureDelta.ContentDelta().insert("*", {
            [docReferenceHtmlEntities.docReference]: `${n}`,
            type: r
          }),
          deltaSet: new deltaSetCore.DeltaSet()
        };
      } else {
        return {
          target: new contentStructureDelta.ContentDelta(),
          deltaSet: new deltaSetCore.DeltaSet()
        };
      }
    }
  };
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  let g = {
    name: "code",
    match: e => e.lang === "mermaid",
    converter(e) {
      let {
        content: t
      } = e;
      return {
        target: new contentStructureDelta.ContentDelta().insert(" ", {
          mermaid: t.value,
          id: randomStringGenerator.createRandomString(8)
        }).insertEnter(),
        deltaSet: new deltaSetCore.DeltaSet()
      };
    }
  };
  let $ = {
    name: "code",
    match: e => e.lang === "mindmap",
    converter(e) {
      let {
        content: t
      } = e;
      return {
        target: new contentStructureDelta.ContentDelta().insertLineMarker().insert(" ", {
          mindmap: t.value,
          id: randomStringGenerator.createRandomString(8)
        }).insertEnter(),
        deltaSet: new deltaSetCore.DeltaSet()
      };
    }
  };
  let b = {
    name: "code",
    converter(e) {
      let {
        content: r
      } = e;
      let n = randomStringGenerator.createRandomString();
      return {
        target: new contentStructureDelta.ContentDelta().insertLineMarker().insert(" ", {
          type: "codeblock",
          language: r.lang ?? "plaintext",
          zoneId: n,
          wrap: "true"
        }).insertEnter(),
        deltaSet: new deltaSetCore.DeltaSet().compose(new contentStructureDelta.ContentDelta({
          zoneId: n,
          ops: [{
            attributes: {},
            insert: c(r.value, "\n")
          }]
        }))
      };
    }
  };
  let w = {
    name: "inlineCode",
    converter(e) {
      let {
        content: t
      } = e;
      return {
        target: new contentStructureDelta.ContentDelta().insert(t.value, {
          inlineCode: "true"
        }),
        deltaSet: new deltaSetCore.DeltaSet()
      };
    }
  };
  let k = {
    name: "heading",
    converter(e) {
      let {
        content: t,
        getConvert: r
      } = e;
      let n = r(t.children);
      return {
        target: new contentStructureDelta.ContentDelta().insertLineMarker({
          heading: `h${t.depth}`
        }).concat(editorZoneDeltaUtils.getDeltaTarget(n)).insertEnter(),
        deltaSet: editorZoneDeltaUtils.getDeltaSet(n)
      };
    }
  };
  let S = {
    name: "paragraph",
    converter(e) {
      let {
        content: t,
        getConvert: r,
        parent: n
      } = e;
      let i = r(t.children);
      return {
        target: h(n, i),
        deltaSet: editorZoneDeltaUtils.getDeltaSet(i)
      };
    }
  };
  var zoneDeltaClasses = require("zone-delta-classes") /*id: 240236*/;
  var editorDeltaSetUtils = require("editor-delta-set-utils") /*id: 201746*/;
  let W = e => {
    let {
      content: t,
      rowId: r,
      colId: n,
      getConvert: i
    } = e;
    let l = `x${r}x${n}`;
    let o = new contentStructureDelta.ContentDelta({
      zoneId: l
    });
    if (!t) {
      return {
        target: new contentStructureDelta.ContentDelta(),
        deltaSet: new deltaSetCore.DeltaSet({
          [l]: o.insertEnter()
        })
      };
    }
    {
      let e = i(t.children);
      return {
        target: new contentStructureDelta.ContentDelta({
          zoneId: l
        }).concat(editorZoneDeltaUtils.getDeltaTarget(e)).insertEnter(),
        deltaSet: editorZoneDeltaUtils.getDeltaSet(e)
      };
    }
  };
  let E = {
    name: "table",
    converter(e) {
      var t;
      let {
        root: n,
        content: i,
        getConvert: l
      } = e;
      let o = editorDeltaSetUtils.generateRandomId();
      let d = editorDeltaSetUtils.generateRandomId();
      let c = new deltaSetCore.DeltaSet();
      let m = i.children.reduce((e, t, r) => e.insert(`${o.toLowerCase()}r${r}`), new zoneDeltaClasses.RowDelta({
        zoneId: o
      }));
      let h = ((t = i.children[0]) === null || t === undefined ? undefined : t.children.reduce((e, t, r) => e.insert(`${d.toLowerCase()}c${r}`, {
        colWidth: "200"
      }), new zoneDeltaClasses.ColumnDelta({
        zoneId: d
      }))) ?? [];
      c = c.compose(m).compose(h);
      let f = Math.max(...i.children.map(e => e.children.length));
      i.children.forEach((e, t) => {
        let a = m.ops[t].insert?.id;
        for (let t = 0; t < f; t++) {
          let r = e.children.at(t);
          let s = h.ops[t];
          if (!s) {
            return;
          }
          let d = s.insert?.id;
          let m = W({
            root: n,
            content: r ?? null,
            rowId: a ?? "",
            colId: d ?? "",
            parent: i,
            getConvert: l
          });
          c = c.compose(editorZoneDeltaUtils.getDeltaSet(m)).compose(editorZoneDeltaUtils.getDeltaTarget(m));
        }
      });
      return {
        target: new contentStructureDelta.ContentDelta().insertLineMarker().insert("*", {
          aceTable: `${o} ${d}`
        }).insertEnter(),
        deltaSet: c
      };
    }
  };
  let _ = {
    name: "text",
    converter(e) {
      let {
        content: t
      } = e;
      return {
        target: new contentStructureDelta.ContentDelta().insert(t.value),
        deltaSet: new deltaSetCore.DeltaSet()
      };
    }
  };
  let F = {
    name: "emphasis",
    converter(e) {
      let {
        content: t,
        getConvert: r
      } = e;
      let n = r(t.children);
      let i = editorZoneDeltaUtils.getDeltaTarget(n);
      return {
        target: i.compose(new contentStructureDelta.ContentDelta().retain(i.length(), {
          italic: "true"
        })),
        deltaSet: editorZoneDeltaUtils.getDeltaSet(n)
      };
    }
  };
  let Z = {
    name: "strong",
    converter(e) {
      let {
        content: t,
        getConvert: r
      } = e;
      let n = r(t.children);
      let i = editorZoneDeltaUtils.getDeltaTarget(n);
      return {
        target: i.compose(new contentStructureDelta.ContentDelta().retain(i.length(), {
          bold: "true"
        })),
        deltaSet: editorZoneDeltaUtils.getDeltaSet(n)
      };
    }
  };
  let j = {
    name: "delete",
    converter(e) {
      let {
        content: t,
        getConvert: r
      } = e;
      let n = r(t.children);
      let i = editorZoneDeltaUtils.getDeltaTarget(n);
      return {
        target: i.compose(new contentStructureDelta.ContentDelta().retain(i.length(), {
          strikethrough: "true"
        })),
        deltaSet: editorZoneDeltaUtils.getDeltaSet(n)
      };
    }
  };
  let M = {
    name: "break",
    converter: () => ({
      target: new contentStructureDelta.ContentDelta().insert("\n"),
      deltaSet: new deltaSetCore.DeltaSet()
    })
  };
  var assertErrorHelper = require("assert-error-helper") /*id: 85083*/;
  let N = {
    name: "list",
    converter(e) {
      let {
        content: t,
        getConvert: r
      } = e;
      let n = t.children.map((e, r) => ({
        item: e,
        start: (t.start || 1) + r,
        level: 1,
        isOrdered: !!t.ordered
      })).reverse();
      let i = new deltaSetCore.DeltaSet();
      let l = new contentStructureDelta.ContentDelta();
      while (n.length) {
        let e = n.pop();
        assertErrorHelper.assertThrow(e);
        let {
          item: t,
          start: o,
          level: a,
          isOrdered: s
        } = e;
        let {
          checked: d
        } = t;
        if (d !== null) {
          l.insertLineMarker({
            list: `${d ? "check" : "done"}${a}`,
            "ol-id": randomStringGenerator.createRandomString(8),
            start: "3"
          });
        } else if (s) {
          l.insertLineMarker({
            list: `number${a}`,
            "ol-id": randomStringGenerator.createRandomString(8),
            start: String(o),
            "origin-start": String(o)
          });
        } else {
          l.insertLineMarker({
            list: `bullet${a}`
          });
        }
        let c = [];
        for (let e of t.children) {
          if (e.type === "list") {
            c.unshift(...e.children.map((t, r) => ({
              item: t,
              start: (e.start || 1) + r,
              level: a + 1,
              isOrdered: !!e.ordered
            })).reverse());
          } else {
            let t = r([e]);
            i = i.compose(editorZoneDeltaUtils.getDeltaSet(t));
            l = l.concat(editorZoneDeltaUtils.getDeltaTarget(t));
          }
        }
        n.push(...c);
      }
      return {
        target: l,
        deltaSet: i
      };
    }
  };
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  let C = {
    name: "link",
    converter(e) {
      let {
        content: t,
        getConvert: r
      } = e;
      let n = r(t.children);
      let i = editorZoneDeltaUtils.getDeltaTarget(n);
      return {
        target: i.compose(new contentStructureDelta.ContentDelta().retain(i.length(), {
          hyperlink: JSON.stringify({
            href: xssContentSanitizer.sanitizeUrl(t.url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMllsZEdl$0$5$W5aa01q%jBaRWM0ZEZwSFZuTmtSMFo2$2xo%mRtTkhlREZhTW14M$kzaz$jMkZ-TlhKTWJsSjZX$mhL-m1SW$R%MD0"
            }),
            linkId: randomStringGenerator.createRandomString(10)
          })
        })),
        deltaSet: editorZoneDeltaUtils.getDeltaSet(n)
      };
    }
  };
  let P = {
    name: "linkReference",
    converter(e) {
      let {
        root: t,
        content: r,
        getConvert: n
      } = e;
      let i = n(r.children);
      let l = editorZoneDeltaUtils.getDeltaTarget(i);
      let o = m(t.children, e => e.type === "definition" && e.identifier === r.identifier);
      return {
        target: o ? l.compose(new contentStructureDelta.ContentDelta().retain(l.length(), {
          hyperlink: JSON.stringify({
            href: xssContentSanitizer.sanitizeUrl(o.url, null, {
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
              filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMllsZEdl$0$5$W5aa01q%jBaRWM0ZEZwSFZuTmtSMFo2$2xo%mRtTkhlREZhTW14M$kzaz$jMkZ-TlhKW%0wcHNXbTFXZ$ZwWE5Xc*F$el$3WXpKR2$Wb3pWbm89"
            }),
            linkId: randomStringGenerator.createRandomString(10)
          })
        })) : l,
        deltaSet: editorZoneDeltaUtils.getDeltaSet(i)
      };
    }
  };
  let z = {
    name: "definition",
    converter: () => ({
      target: new contentStructureDelta.ContentDelta(),
      deltaSet: new deltaSetCore.DeltaSet()
    })
  };
  let J = {
    name: "image",
    converter(e) {
      let {
        content: t
      } = e;
      let {
        alt: r,
        url: n
      } = t;
      return {
        target: new contentStructureDelta.ContentDelta().insertLineMarker().insert(" ", {
          alt: r ?? "",
          image: "true",
          src: xssContentSanitizer.sanitizeUrl(n, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMllsZEdl$0$5$W5aa01q%jBaRWM0ZEZwSFZuTmtSMFo2$2xo%mRtTkhlREZhTW14M$kzaz$jR0p-%m01-$$6$XdZekpHZ$ZvelZubz0"
          }),
          uuid: randomStringGenerator.createRandomString(8)
        }),
        deltaSet: new deltaSetCore.DeltaSet()
      };
    }
  };
  let L = {
    name: "imageReference",
    converter(e) {
      let {
        root: t,
        content: r
      } = e;
      let {
        alt: n
      } = r;
      let i = m(t.children, e => e.type === "definition" && e.identifier === r.identifier);
      return {
        target: i ? new contentStructureDelta.ContentDelta().insertLineMarker().insert(" ", {
          alt: n ?? "",
          image: "true",
          src: xssContentSanitizer.sanitizeUrl(i.url, null, {
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRPWHBo%jBaN$dsZFJkb$F6%25Ca1Ix$jBaRmRyZ*1NelNtcE1NMlI1W$Zo%2JFd3lXbk5pTTJOMFdr-z$ha3h-$m10aFd*SjJZMms1T$dSS*JITmpl$*xxWWpJM%1scFlTakJh$0$sMllsZEdl$0$5$W5aa01q%jBaRWM0ZEZwSFZuTmtSMFo2$2xo%mRtTkhlREZhTW14M$kzaz$jR0p-%m01-$ZqbD$Xb*Rh-kdOdFZu$lpNbF-xWk$oT2FHTnRaREZqZHowOQ"
          }),
          uuid: randomStringGenerator.createRandomString(8)
        }) : new contentStructureDelta.ContentDelta().insert(n ?? ""),
        deltaSet: new deltaSetCore.DeltaSet()
      };
    }
  };
  let H = {
    name: "blockquote",
    converter(e) {
      let {
        content: t,
        getConvert: r
      } = e;
      let n = r(t.children);
      return {
        target: new contentStructureDelta.ContentDelta().insertLineMarker({
          blockquote: "true"
        }).concat(editorZoneDeltaUtils.getDeltaTarget(n)).insertEnter(),
        deltaSet: editorZoneDeltaUtils.getDeltaSet(n)
      };
    }
  };
  var htmlEntityCodec = require("html-entity-codec") /*id: 384132*/;
  var D = htmlEntityCodec;
  let X = e => {
    try {
      let t = e.querySelector("[data-type=inline-math],[data-type=block-math]");
      if (!t) {
        return;
      }
      let r = t.dataset.value;
      let n = t.dataset.type;
      if (!r) {
        return;
      }
      return {
        tex: window.atob(r),
        isInline: n === "inline-math"
      };
    } catch (e) {
      return;
    }
  };
  let U = e => {
    let t = e.querySelector("img");
    let r = t == null ? undefined : t.getAttribute("src");
    if (t && r) {
      let e = {
        src: r
      };
      let n = r => {
        let n = t.getAttribute(r);
        if (n) {
          e[r] = n;
        }
      };
      n("width");
      n("height");
      n("alt");
      return e;
    }
  };
  let V = {
    name: "html",
    converter(e) {
      let {
        content: t
      } = e;
      let r = null;
      try {
        r = new DOMParser().parseFromString(D.decode(t.value), "text/html");
        let e = X(r);
        if (e) {
          let {
            tex: t,
            isInline: r
          } = e;
          return {
            target: r ? new contentStructureDelta.ContentDelta().insert(" ", {
              equation: t
            }) : new contentStructureDelta.ContentDelta().insertLineMarker().insert(" ", {
              equation: t
            }).insertEnter(),
            deltaSet: new deltaSetCore.DeltaSet()
          };
        }
        let n = U(r);
        if (n) {
          return {
            target: new contentStructureDelta.ContentDelta().insertLineMarker().insert(" ", {
              image: "true",
              ...n
            }),
            deltaSet: new deltaSetCore.DeltaSet()
          };
        }
      } catch (e) {}
      return {
        target: new contentStructureDelta.ContentDelta(),
        deltaSet: new deltaSetCore.DeltaSet()
      };
    }
  };
  let q = {
    name: "thematicBreak",
    converter: () => ({
      target: new contentStructureDelta.ContentDelta().insertLineMarker().insert("*", {
        "horizontal-line": "true"
      }).insertEnter(),
      deltaSet: new deltaSetCore.DeltaSet()
    })
  };
  let A = {
    name: "inlineMath",
    converter(e) {
      let {
        content: t
      } = e;
      return {
        target: new contentStructureDelta.ContentDelta().insert(" ", {
          equation: t.value
        }),
        deltaSet: new deltaSetCore.DeltaSet()
      };
    }
  };
  let G = {
    name: "math",
    converter(e) {
      let {
        content: t
      } = e;
      return {
        target: new contentStructureDelta.ContentDelta().insertLineMarker().insert(" ", {
          equation: t.value
        }).insertEnter(),
        deltaSet: new deltaSetCore.DeltaSet()
      };
    }
  };
  var markdownAstPluginEngine = require("markdown-ast-plugin-engine") /*id: 66280*/;
  function Q(e, t, r) {
    var n;
    if ((t = typeof (n = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? n : n + "") in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  class Y extends markdownAstPluginEngine.AstPlugin {
    constructor(...e) {
      super(...e);
      Q(this, "name", "transform_invalid_reference_quote");
      Q(this, "config", {
        priority: 2
      });
      Q(this, "modifier", (e, t) => {
        var r;
        let {
          insertAfter: n,
          skip: i,
          parent: o
        } = t;
        if (["root", "blockquote"].includes(o == null ? undefined : o.type) && markdownParserSerializer.isNodeType(e, "html") && ((r = e.value) === null || r === undefined ? undefined : r.startsWith(`${docReferenceHtmlEntities.htmlEntityMap["<"]}reference`))) {
          i();
          n([], true);
        }
      });
    }
  }
  let ee = e => {
    let {
      root: t,
      content: r,
      plugins: n,
      parent: i,
      getConvert: l
    } = e;
    let o = n.find(e => {
      var t;
      return ((t = e.match) === null || t === undefined ? undefined : t.call(e, r)) ?? e.name === r.type;
    });
    if (o) {
      return o.converter({
        root: t,
        parent: i,
        content: r,
        getConvert: l
      });
    } else {
      return {
        target: new contentStructureDelta.ContentDelta(),
        deltaSet: new deltaSetCore.DeltaSet()
      };
    }
  };
  let et = e => {
    let {
      plugins: t,
      root: r,
      contents: n,
      parent: i
    } = e;
    let l = new contentStructureDelta.ContentDelta();
    let o = new deltaSetCore.DeltaSet();
    if (!n.length) {
      return {
        target: l,
        deltaSet: o
      };
    }
    for (let e of n) {
      let n = ee({
        content: e,
        plugins: t,
        root: r,
        parent: i,
        getConvert: n => et({
          plugins: t,
          root: r,
          contents: n,
          parent: e
        })
      });
      l = l.concat(editorZoneDeltaUtils.getDeltaTarget(n));
      o = o.compose(editorZoneDeltaUtils.getDeltaSet(n));
    }
    return {
      target: l,
      deltaSet: o
    };
  };
  let er = e => {
    let t = et({
      plugins: [g, $, b, w, k, S, E, _, F, Z, j, M, N, C, P, z, J, L, H, x, V, q, A, G],
      root: e,
      contents: e.children,
      parent: e
    });
    return new deltaSetCore.DeltaSet().compose(new contentStructureDelta.ContentDelta({
      zoneId: zeroConstantModule_1.versionValue
    }).concat(editorZoneDeltaUtils.getDeltaTarget(t))).compose(editorZoneDeltaUtils.getDeltaSet(t));
  };
  let en = function (e, t = {}) {
    let {
      indentedCode: r
    } = t;
    let o = t.referenceData;
    e = f(e, editorDeltaSetUtils.formatReferences(o));
    let {
      ast: a
    } = markdownAutofixPlugins.processMarkdown({
      ...t,
      katex: katexCoreRenderer.default,
      source: e,
      astPlugins: [new Y()]
    });
    return er(a ?? markdownParserSerializer.parseMarkdown(e, {
      enableIndentedCode: r
    }));
  };
  require.d(exports, {
    markdownDeltaConvert: function () {
      return en;
    }
  });
}