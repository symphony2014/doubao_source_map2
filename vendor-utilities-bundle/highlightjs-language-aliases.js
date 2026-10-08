// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N1' to 'languageNames'
// - Renamed export 'QA' to 'displayNames'
// - Renamed export 'TD' to 'languageAliases'
// - Renamed export 'qf' to 'shellAliases'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 22007.b9e6c706.js
         * chunkId: 22007
         * moduleId: 807150
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers = require("typescript-helpers") /*id: 45459*/;
  var i = [["ABAP", ["ABAP"]], ["Ada", ["Ada"]], ["Apache", ["Apache", "ApacheConf"]], ["Apex", ["Apex"]], ["Assembly language", ["ASM"]], ["TypeScript", ["TS", "TSX", "TypeScript"]], ["Bash", ["ASH", "BASH", "CSH", "SH", "TCSH", "ZSH"]], ["C", ["C", "H"]], ["CMake", ["cmake", "cmake.in"]], ["COBOL", ["COBOL"]], ["CoffeeScript", ["CoffeeScript", "Coffee", "Cson", "Iced"]], ["C++", ["C++", "CC", "HH", "CPP"]], ["C#", ["CS", "CSharp"]], ["CSS", ["CSS"]], ["D", ["D"]], ["Diff", ["diff", "patch"]], ["Dart", ["Dart"]], ["Delphi", ["Delphi", "DFM", "DPR", "PAS", "Pascal"]], ["Dockerfile", ["Docker", "Dockerfile"]], ["Erlang", ["Erl", "Erlang"]], ["Fortran", ["F90", "F95", "Fortran"]], ["Go", ["Go", "GoLang"]], ["Django", ["Django", "JinJa"]], ["GraphQL", ["graphql"]], ["Groovy", ["Groovy"]], ["Haskell", ["Haskell", "HS"]], ["HTML", ["HTML"]], ["HTMLBars", ["HTMLBars"]], ["HTTP", ["HTTP", "HTTPS"]], ["Java", ["Java"]], ["JavaScript", ["JavaScript"]], ["JavaScript", ["JS"]], ["JavaScript", ["JSX"]], ["JSON", ["JSON"]], ["Java", ["JSP"]], ["Julia", ["Julia"]], ["Kotlin", ["Kotlin", "KT"]], ["LaTeX", ["Math", "LaTeX", "TeX"]], ["Lisp", ["Lisp"]], ["Lua", ["Lua"]], ["Makefile", ["MAK", "Makefile", "MK"]], ["Markdown", ["Markdown", "MD"]], ["MATLAB", ["MATLAB"]], ["Nginx", ["Nginx"]], ["Objective-C", ["OC", "OBJC", "ObjectiveC", "MM"]], [require("code-block-highlightjs-constants") /*id: 433332*/.plainTextLabel, ["PlainText", "Plain", "Text", "Txt"]], ["Perl", ["Perl", "PL", "PM"]], ["PHP", ["PHP"]], ["Prolog", ["Prolog"]], ["Properties", ["properties", "Properties"]], ["ProtoBuf", ["Proto", "ProtoBuf"]], ["Python", ["Py", "Python"]], ["R", ["R"]], ["Ruby", ["RB", "Ruby"]], ["Rust", ["RS", "Rust"]], ["SAS", ["SAS"]], ["Scala", ["Scala"]], ["Scheme", ["Scheme"]], ["SCSS", ["SCSS"]], ["Shell", ["Shell"]], ["Solidity", ["solidity", "sol"]], ["SQL", ["SQL"]], ["Swift", ["Swift"]], ["TOML", ["ini", "toml"]], ["Thrift", ["Thrift"]], ["VBScript", ["VBS", "VBScript"]], ["Verilog", ["verilog", "v"]], ["VHDL", ["vhdl"]], ["Visual Basic", ["VisualBasic"]], ["XML", ["XML", "SVG"]], ["YAML", ["YAML", "YML"]], ["PowerShell", ["PowerShell", "PS"]], ["OpenGL Shading Language", ["glsl"]], ["Gherkin", ["gherkin"]]];
  var r = {
    Plaintext: "Plain Text",
    HTML: "HTML"
  };
  var a = Array.from(new Set(new (Array.bind.apply(Array, typescriptHelpers.spreadArguments([undefined], i)))().sort().reduce(function (e, t, n) {
    if (n === 0) {
      e.unshift(r.Plaintext);
    }
    if (t[0] === r.Plaintext) {
      return e;
    } else {
      return e.concat(t[0]);
    }
  }, [])));
  var l = [["shell", "bash"]];
  require.d(exports, {
    languageNames: function () {
      return a;
    },
    displayNames: function () {
      return r;
    },
    languageAliases: function () {
      return i;
    },
    shellAliases: function () {
      return l;
    }
  });
}