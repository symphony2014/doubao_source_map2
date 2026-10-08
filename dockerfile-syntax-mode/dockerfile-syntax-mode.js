// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'simpleModeFactory'
// - Resolved require(294821) to 'simple-mode-factory'
// - Updated imported property 'Q' to 'createSimpleMode' (module 294821)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59896.ef0ddec8.js
         * chunkId: 59896
         * moduleId: 658440
         */
module.exports = function (module, exports, require) {
  var simpleModeFactory = require("simple-mode-factory") /*id: 294821*/;
  var o = "from";
  var a = RegExp("^(\\s*)\\b(" + o + ")\\b", "i");
  var s = ["run", "cmd", "entrypoint", "shell"];
  var l = RegExp("^(\\s*)(" + s.join("|") + ")(\\s+\\[)", "i");
  var i = "expose";
  var u = RegExp("^(\\s*)(" + i + ")(\\s+)", "i");
  var g = "(" + [o, i].concat(s).concat(["arg", "from", "maintainer", "label", "env", "add", "copy", "volume", "user", "workdir", "onbuild", "stopsignal", "healthcheck", "shell"]).join("|") + ")";
  var d = RegExp("^(\\s*)" + g + "(\\s*)(#.*)?$", "i");
  var x = RegExp("^(\\s*)" + g + "(\\s+)", "i");
  let k = simpleModeFactory.createSimpleMode({
    start: [{
      regex: /^\s*#.*$/,
      sol: true,
      token: "comment"
    }, {
      regex: a,
      token: [null, "keyword"],
      sol: true,
      next: "from"
    }, {
      regex: d,
      token: [null, "keyword", null, "error"],
      sol: true
    }, {
      regex: l,
      token: [null, "keyword", null],
      sol: true,
      next: "array"
    }, {
      regex: u,
      token: [null, "keyword", null],
      sol: true,
      next: "expose"
    }, {
      regex: x,
      token: [null, "keyword", null],
      sol: true,
      next: "arguments"
    }, {
      regex: /./,
      token: null
    }],
    from: [{
      regex: /\s*$/,
      token: null,
      next: "start"
    }, {
      regex: /(\s*)(#.*)$/,
      token: [null, "error"],
      next: "start"
    }, {
      regex: /(\s*\S+\s+)(as)/i,
      token: [null, "keyword"],
      next: "start"
    }, {
      token: null,
      next: "start"
    }],
    single: [{
      regex: /(?:[^\\']|\\.)/,
      token: "string"
    }, {
      regex: /'/,
      token: "string",
      pop: true
    }],
    double: [{
      regex: /(?:[^\\"]|\\.)/,
      token: "string"
    }, {
      regex: /"/,
      token: "string",
      pop: true
    }],
    array: [{
      regex: /\]/,
      token: null,
      next: "start"
    }, {
      regex: /"(?:[^\\"]|\\.)*"?/,
      token: "string"
    }],
    expose: [{
      regex: /\d+$/,
      token: "number",
      next: "start"
    }, {
      regex: /[^\d]+$/,
      token: null,
      next: "start"
    }, {
      regex: /\d+/,
      token: "number"
    }, {
      regex: /[^\d]+/,
      token: null
    }, {
      token: null,
      next: "start"
    }],
    arguments: [{
      regex: /^\s*#.*$/,
      sol: true,
      token: "comment"
    }, {
      regex: /"(?:[^\\"]|\\.)*"?$/,
      token: "string",
      next: "start"
    }, {
      regex: /"/,
      token: "string",
      push: "double"
    }, {
      regex: /'(?:[^\\']|\\.)*'?$/,
      token: "string",
      next: "start"
    }, {
      regex: /'/,
      token: "string",
      push: "single"
    }, {
      regex: /[^#"']+[\\`]$/,
      token: null
    }, {
      regex: /[^#"']+$/,
      token: null,
      next: "start"
    }, {
      regex: /[^#"']+/,
      token: null
    }, {
      token: null,
      next: "start"
    }],
    languageData: {
      commentTokens: {
        line: "#"
      }
    }
  });
  require.r(exports);
  require.d(exports, {
    dockerFile: function () {
      return k;
    }
  });
}