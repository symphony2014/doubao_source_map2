// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatGenericAskSymbol'
// - Resolved require(679974) to 'chat-generic-ask-symbol'
// - Renamed variable 'l' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'r' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'o' to 'referenceHighlightRenderer'
// - Resolved require(256530) to 'reference-highlight-renderer'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'E' to 'generateReferenceHighlights' (module 256530)
// - Updated imported property 'w' to 'genericAskSymbol' (module 679974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 285611
         */
module.exports = function (module, exports, require) {
  var chatGenericAskSymbol = require("chat-generic-ask-symbol") /*id: 679974*/;
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var referenceHighlightRenderer = require("reference-highlight-renderer") /*id: 256530*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      inView: t,
      message: n,
      theme: i
    } = e;
    let s = e => {
      if (e !== "") {
        window.open(xssContentSanitizer.sanitizeUrl(e, null, {
          logType: "js.window.location",
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$R-%lNi$lpvWk$o$2$WcFRP$2xr$0%1d1ltM$dlb%41T1d4bFN*RjBX$Epv-%dSRE1Xb*hXRzkwWTIx$2JWcFlTbXhp-l%1c1RETk9l$mw1T1hka$N*Wn$Z$mMxZWt3e%1Xe*pNMD$v$2pK$mRsa3lhR2hr%Xp*N$dsZE9iR0ZZ$214T$Z6RnNZek5P-%Zve$Z-%lpi$*sw$ERKR2$tRj$NW*Ra$jJSc1RESk9kb%pZ%W5aaWJWWjFaRWhOZ*1NeWFHa*pi$l-wWk$k$05H%kRNWFJh$0%1NldWZ*tiRXh-%25abFF6$XdZek5v-%dOdFpERmpkejA5"
        }));
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
      inView: t,
      message: n,
      theme: i,
      messageBlockText: undefined,
      messageBlockTextFinish: undefined,
      messageBlockTextBroken: undefined,
      customRenderOptions: {
        useCustomReplacementElements: e => referenceHighlightRenderer.generateReferenceHighlights({
          ...e,
          onClickRef: s
        })
      }
    });
  };
  function c(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let d = e => reactJsxRuntimeCoreReexport.jsx(s, {
    ...e
  });
  class u {
    constructor() {
      c(this, "pluginIdentifier", chatGenericAskSymbol.genericAskSymbol);
      c(this, "Content", d);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveGenericAskPageTextContent: function () {
      return u;
    }
  });
}