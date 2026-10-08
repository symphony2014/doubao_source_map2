// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'renderLatex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 452.57f081b0.js
         * chunkId: 452
         * moduleId: 700206
         */
module.exports = function (module, exports, require) {
  var xregexpModuleRegistry = require("xregexp-module-registry") /*id: 5593*/;
  var a = xregexpModuleRegistry;
  var mathjaxSvgOutputJax = require("mathjax-svg-output-jax") /*id: 264785*/;
  var mathjaxInstanceConfig = require("mathjax-instance-config") /*id: 680159*/;
  var mathjaxAllPackagesConfig = require("mathjax-all-packages-config") /*id: 657436*/;
  var texInputJax = require("tex-input-jax") /*id: 110289*/;
  var mathjaxHtmlHandlerRegister = require("mathjax-html-handler-register") /*id: 355457*/;
  var liteDomAdaptor = require("lite-dom-adaptor") /*id: 638280*/;
  var katexSafeRenderer = require("katex-safe-renderer") /*id: 851686*/;
  let m = liteDomAdaptor.liteAdaptor();
  mathjaxHtmlHandlerRegister.RegisterHTMLHandler(m);
  let f = new texInputJax.TeX({
    packages: [...mathjaxAllPackagesConfig.AllPackages.sort().join(", ").split(/\s*,\s*/), "physics", "mhchem"],
    macros: {
      equalparallel: "{\\lower{2.6pt}{\\arrowvert\\hspace{-4.2pt}\\arrowvert}\\above{-2pt}\\raise{7.5pt}{=}}",
      number: ["{#1}", 1],
      unit: ["{#1}", 1],
      div: "{÷}"
    }
  });
  let x = new mathjaxSvgOutputJax.SVG({
    fontCache: "none"
  });
  let h = mathjaxInstanceConfig.mathjax.document("", {
    InputJax: f,
    OutputJax: x
  });
  let p = t => {
    let r = a.replace(t, a(String.raw`[^\P{C}\n\t]+`, "ug"), "");
    try {
      let t = h.convert(r, {
        display: true,
        em: 16,
        ex: 8,
        containerWidth: 1280
      });
      return m.outerHTML(t == null ? undefined : t.children?.[0]);
    } catch (e) {
      return katexSafeRenderer.renderLatexSafe(t) ?? t;
    }
  };
  require.d(exports, {
    renderLatex: function () {
      return p;
    }
  });
}