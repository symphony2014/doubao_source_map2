// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N1' to 'languageNameList'
// - Renamed export 'QA' to 'languageLabels'
// - Renamed export 'TD' to 'languageDefinitions'
// - Renamed export 'qf' to 'languageAliases'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: highlightjs.855d37dd.js
         * chunkId: 23471
         * moduleId: 862192
         */
module.exports = function (module, exports, require) {
  var typescriptHelpers_1 = require("typescript-helpers_1") /*id: 729889*/;
  var r = [["ABAP", ["ABAP"]], ["Ada", ["Ada"]], ["Apache", ["Apache", "ApacheConf"]], ["Apex", ["Apex"]], ["Assembly language", ["ASM"]], ["TypeScript", ["TS", "TSX", "TypeScript"]], ["Bash", ["ASH", "BASH", "CSH", "SH", "TCSH", "ZSH"]], ["C", ["C", "H"]], ["CMake", ["cmake", "cmake.in"]], ["COBOL", ["COBOL"]], ["CoffeeScript", ["CoffeeScript", "Coffee", "Cson", "Iced"]], ["C++", ["C++", "CC", "HH", "CPP"]], ["C#", ["CS", "CSharp"]], ["CSS", ["CSS"]], ["D", ["D"]], ["Diff", ["diff", "patch"]], ["Dart", ["Dart"]], ["Delphi", ["Delphi", "DFM", "DPR", "PAS", "Pascal"]], ["Dockerfile", ["Docker", "Dockerfile"]], ["Erlang", ["Erl", "Erlang"]], ["Fortran", ["F90", "F95", "Fortran"]], ["Go", ["Go", "GoLang"]], ["Django", ["Django", "JinJa"]], ["GraphQL", ["graphql"]], ["Groovy", ["Groovy"]], ["Haskell", ["Haskell", "HS"]], ["HTML", ["HTML"]], ["HTMLBars", ["HTMLBars"]], ["HTTP", ["HTTP", "HTTPS"]], ["Java", ["Java"]], ["JavaScript", ["JavaScript"]], ["JavaScript", ["JS"]], ["JavaScript", ["JSX"]], ["JSON", ["JSON"]], ["Java", ["JSP"]], ["Julia", ["Julia"]], ["Kotlin", ["Kotlin", "KT"]], ["LaTeX", ["Math", "LaTeX", "TeX"]], ["Lisp", ["Lisp"]], ["Lua", ["Lua"]], ["Makefile", ["MAK", "Makefile", "MK"]], ["Markdown", ["Markdown", "MD"]], ["MATLAB", ["MATLAB"]], ["Nginx", ["Nginx"]], ["Objective-C", ["OC", "OBJC", "ObjectiveC", "MM"]], [require("code-block-constants_1") /*id: 881225*/.defaultLanguageName, ["PlainText", "Plain", "Text", "Txt"]], ["Perl", ["Perl", "PL", "PM"]], ["PHP", ["PHP"]], ["Prolog", ["Prolog"]], ["Properties", ["properties", "Properties"]], ["ProtoBuf", ["Proto", "ProtoBuf"]], ["Python", ["Py", "Python"]], ["R", ["R"]], ["Ruby", ["RB", "Ruby"]], ["Rust", ["RS", "Rust"]], ["SAS", ["SAS"]], ["Scala", ["Scala"]], ["Scheme", ["Scheme"]], ["SCSS", ["SCSS"]], ["Shell", ["Shell"]], ["Solidity", ["solidity", "sol"]], ["SQL", ["SQL"]], ["Swift", ["Swift"]], ["TOML", ["ini", "toml"]], ["Thrift", ["Thrift"]], ["VBScript", ["VBS", "VBScript"]], ["Verilog", ["verilog", "v"]], ["VHDL", ["vhdl"]], ["Visual Basic", ["VisualBasic"]], ["XML", ["XML", "SVG"]], ["YAML", ["YAML", "YML"]], ["PowerShell", ["PowerShell", "PS"]], ["OpenGL Shading Language", ["glsl"]], ["Gherkin", ["gherkin"]]];
  var i = {
    Plaintext: "Plain Text",
    HTML: "HTML"
  };
  var s = Array.from(new Set(new (Array.bind.apply(Array, typescriptHelpers_1.spreadArray([undefined], r)))().sort().reduce(function (e, n, t) {
    if (t === 0) {
      e.unshift(i.Plaintext);
    }
    if (n[0] === i.Plaintext) {
      return e;
    } else {
      return e.concat(n[0]);
    }
  }, [])));
  var o = [["shell", "bash"]];
  require.d(exports, {
    languageNameList: function () {
      return s;
    },
    languageLabels: function () {
      return i;
    },
    languageDefinitions: function () {
      return r;
    },
    languageAliases: function () {
      return o;
    }
  });
}