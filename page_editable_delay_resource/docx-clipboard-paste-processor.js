// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N1' to 'processClipboardBlocks'
// - Renamed export 'QX' to 'getPasteConfig'
// - Renamed export 'jl' to 'shouldIgnorePaste'
// - Renamed export 'lG' to 'sanitizePasteHtml'
// - Renamed export 'rP' to 'validateCombinedUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: page_editable_delay_resource.8cd7ac06.js
         * chunkId: 68859
         * moduleId: 648064
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var dompurifyCore = require("dompurify-core") /*id: 345925*/;
  var uuidGeneratorUtil = require("uuid-generator-util") /*id: 641535*/;
  var iframeRegionConfigValidator = require("iframe-region-config-validator") /*id: 473081*/;
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var documentNodeUtils_1 = require("document-node-utils_1") /*id: 759829*/;
  var iframeSnapshotGenerator = require("iframe-snapshot-generator") /*id: 864303*/;
  var iframeLayoutConstants = require("iframe-layout-constants") /*id: 147199*/;
  var editorModuleConstantsConfig = require("editor-module-constants-config") /*id: 414567*/;
  var docxClipboardHandler = require("docx-clipboard-handler") /*id: 709733*/;
  var pasteStateManager = require("paste-state-manager") /*id: 764327*/;
  var docxClipboardUtils = require("docx-clipboard-utils") /*id: 538199*/;
  var editorDataManagerClass = require("editor-data-manager-class") /*id: 699568*/;
  var orderedBlockUtils = require("ordered-block-utils") /*id: 5008*/;
  var docxBlockTypeConstants = require("docx-block-type-constants") /*id: 49433*/;
  var editorPasteConstants = require("editor-paste-constants") /*id: 32743*/;
  function I(e) {
    let r = e.getData(docxBlockTypeConstants.fileTypes.TEXT);
    if (!docUrlProcessingUtilities.isCombinedUrl(r)) {
      return false;
    }
    let i = e.getData(docxBlockTypeConstants.fileTypes.HTML);
    let n = new DOMParser().parseFromString(i, "text/html");
    if (n.body.childElementCount === 1 && n.body.children[0] && n.body.children[0].tagName === "A") {
      return n.body.children[0].href === r;
    } else {
      return n.body.innerHTML.trim() === r;
    }
  }
  function E(e) {
    let r = e.getData(docxBlockTypeConstants.fileTypes.HTML);
    let i = new DOMParser().parseFromString(r, "text/html");
    if (i.body.childElementCount === 1 && i.body.children[0] && i.body.children[0].tagName.toLowerCase() === "docx-html-paste-ignore") {
      return true;
    }
  }
  function w(e, r, i) {
    let n = {};
    let o = editorPasteConstants.contentTypes.some(e => r.includes(e));
    let a = pasteStateManager.getPasteState();
    if (o || a.from === docBlockTypeConstants.pasteOperationTypes.innerCopyPaste || a.from === docBlockTypeConstants.pasteOperationTypes.innerCutPaste || /microsoft/i.test(e.documentElement.innerHTML)) {
      n.supportStyle = true;
    }
    if (i) {
      n.blockContext = i;
    }
    return n;
  }
  function M(e, r, i) {
    if (docxClipboardUtils.isSingleTextBlockCode(r, i)) {
      e.querySelectorAll("byte-sheet-html-origin").forEach(e => {
        let r = document.createElement("div");
        r.innerHTML = xssContentSanitizer.sanitizeHtml(dompurifyCore.DOMPurify.sanitize(e.innerHTML), null, {
          logType: "js.innerHTML",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WlpNbmh3WTBkS2RsbFlTbXRNTWxwMlkyMHhhR1JJ$Fha$FJsSk9WR%01T$dSS*JITmpl$F$3WXpKR2$Wb3pWbm89"
        });
        e.parentElement.replaceChild(r, e);
      });
      e.querySelectorAll("table").forEach(e => {
        e.querySelectorAll("tr").forEach(e => {
          let r = document.createElement("div");
          r.innerHTML = xssContentSanitizer.sanitizeHtml(dompurifyCore.DOMPurify.sanitize(e.innerHTML), null, {
            logType: "js.innerHTML",
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
            filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WlpNbmh3WTBkS2RsbFlTbXRNTWxwMlkyMHhhR1JJ$Fha$FJsSk9WR%01T$dSS*JITmpl$F$3WXpKR2$Wb3pWbm89"
          });
          e.parentElement.replaceChild(r, e);
        });
        let r = document.createElement("pre");
        r.innerHTML = xssContentSanitizer.sanitizeHtml(dompurifyCore.DOMPurify.sanitize(e.innerHTML), null, {
          logType: "js.innerHTML",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WlpNbmh3WTBkS2RsbFlTbXRNTWxwMlkyMHhhR1JJ$Fha$FJsSk9WR%01T$dSS*JITmpl$F$3WXpKR2$Wb3pWbm89"
        });
        e.parentElement.innerHTML = xssContentSanitizer.sanitizeHtml(r.outerHTML, null, {
          logType: "js.innerHTML",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkbHBZ-%RC-$dFcDFX$mQzZEdOSFJtc*hNa1p1$2xoTmRscHRlSFprZ$R*cllqSk5kb%16%21wT%1qRjJXa2hX-zFwW$R-WlpNbmh3WTBkS2RsbFlTbXRNTWxwMlkyMHhhR1JJ$Fha$FJsSk9WR%01T$dSS*JITmpl$F$3WXpKR2$Wb3pWbm89"
        });
      });
    }
  }
  require.d(exports, {
    processClipboardBlocks: function () {
      return function e(r, i, n = {}, o = {}, s) {
        let f = [];
        let k = e => docxClipboardHandler.getDocxData(e, n, o);
        for (let [g, y] of r.entries()) {
          let {
            children: M = [],
            data: x = {}
          } = y;
          let {
            payload: C,
            context: B
          } = y;
          let S = uuidGeneratorUtil.generateUuid();
          o[S] = {
            ...C
          };
          o[S].usedToBeQuote = !!y.context?.usedToBeQuote;
          o[S].isWhiteSpacePre = y.context?.isWhiteSpacePre;
          if (x.type === docBlockTypeConstants.blockTypeConstants.IFRAME && !iframeRegionConfigValidator.checkPathNodeDataIsIframe(x)) {
            x.type = docBlockTypeConstants.blockTypeConstants.TEXT;
            x.nodes = [{
              text: x == null ? undefined : x.original_text,
              type: editorModuleConstantsConfig.editorContentTypes.PLAINTEXT
            }];
          }
          if (x.reference) {
            if (n[S = x.reference.id]) {
              continue;
            }
            M = [];
          } else if (x.type === docBlockTypeConstants.blockTypeConstants.TABLE) {
            (function (r, i, n = {}, o = {}, a) {
              let {
                cell_set: l
              } = r;
              for (let r of Object.keys(l)) {
                let {
                  children: s,
                  merge_info: d
                } = l[r];
                let {
                  recordIds: u
                } = e(s, i, n, o, a);
                n[r] = {
                  id: r,
                  snapshot: {
                    children: u,
                    type: docBlockTypeConstants.blockTypeConstants.CELL
                  }
                };
                l[r] = {
                  block_id: r,
                  merge_info: d
                };
              }
            })(x, i, n, o, s);
          } else if (iframeRegionConfigValidator.checkPathNodeDataIsIframe(x)) {
            x = function (e, r) {
              let {
                original_text: i
              } = e;
              let n = iframeRegionConfigValidator.checkPathNodeDataIsIframe(e);
              let o = n === iframeLayoutConstants.IframeTypes.xigua || n === iframeLayoutConstants.IframeTypes.tiktok ? "" : undefined;
              let a = iframeSnapshotGenerator.getIframeSnapshotWithUrl(i, {
                url: o,
                type: n
              });
              if (r.scale) {
                a.iframe.height = a.iframe.original_height * r.scale;
                a.iframe.width = a.iframe.original_width * r.scale;
                a.iframe.is_modified = true;
              }
              return documentNodeUtils_1.createDocNode(a);
            }(x, C);
          } else if (Array.isArray(x.nodes)) {
            if (x.type === docBlockTypeConstants.blockTypeConstants.ORDERED || y.context?.orderedListNumber) {
              x.seq = function (e, r, i) {
                let {
                  orderedListNumber: n,
                  orderedListId: o
                } = e.context;
                let a = orderedBlockUtils.isNumericString(n) ? String(n) : "auto";
                if (o === "fake") {
                  let e = i[r - 1];
                  if ((e == null ? undefined : e.data.type) === docBlockTypeConstants.blockTypeConstants.ORDERED) {
                    a = "auto";
                  } else if (!orderedBlockUtils.isNumericString(n)) {
                    a = "1";
                  }
                } else if (i.slice(0, r).find(e => e.context.orderedListId === o)) {
                  a = "auto";
                }
                return a;
              }(y, g, r);
            }
            let e = x.nodes.map(e => {
              e.text = docxClipboardUtils.removeInvisibleCharacters(e.text.replace(/[\t]+/g, " "));
              return e;
            });
            let i = e.reduce((e, r) => e + r.text, "").replace(/\n+$/g, "").normalize();
            if (i === "\n") {
              x.text = editorDataManagerClass.EditorDataManager.deserializePlainText("");
            } else {
              x.text = editorDataManagerClass.EditorDataManager.deserialize({
                nodes: e,
                alltext: i,
                size: i.length
              });
            }
            e.forEach(e => e.inlineblock && k(e.inlineblock));
            delete x.nodes;
            if (B == null ? undefined : B.indentLevel) {
              x.text_indent = 1;
            }
            if (B == null ? undefined : B.align) {
              x.align = B.align;
            }
          }
          if (!x.type) {
            continue;
          }
          let T = x;
          if (M.length) {
            let {
              recordIds: r
            } = e(M, i, n, o, s);
            T = {
              ...T,
              children: r
            };
          }
          n[S] = {
            snapshot: T,
            id: S
          };
          f.push(S);
        }
        return {
          recordIds: f,
          recordMap: n,
          payloadMap: o,
          rootId: s,
          source: docxBlockTypeConstants.fileTypes.HTML
        };
      };
    },
    getPasteConfig: function () {
      return w;
    },
    shouldIgnorePaste: function () {
      return E;
    },
    sanitizePasteHtml: function () {
      return M;
    },
    validateCombinedUrl: function () {
      return I;
    }
  });
}