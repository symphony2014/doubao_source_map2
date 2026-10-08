// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'M' to 'languageDefinitions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 53909.8afb4c62.js
         * chunkId: 53909
         * moduleId: 773424
         */
module.exports = function (module, exports, require) {
  var codemirrorLanguageSupport = require("codemirror-language-support") /*id: 976653*/;
  function s(t) {
    return new codemirrorLanguageSupport.Language(codemirrorLanguageSupport.StreamLanguage.define(t));
  }
  function r(t) {
    return require.e("sql-dialects") /*id: 3092*/.then(require.bind(require, "codemirror-sql-language-support") /*id: 660656*/).then(e => e.sql({
      dialect: e[t]
    }));
  }
  let o = [codemirrorLanguageSupport.LanguageDescription.of({
    name: "C",
    extensions: ["c", "h", "ino"],
    load: () => require.e("cpp-language-parser") /*id: 48239*/.then(require.bind(require, "cpp-language-definition") /*id: 843227*/).then(t => t.cpp())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "C++",
    alias: ["cpp"],
    extensions: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"],
    load: () => require.e("cpp-language-parser") /*id: 48239*/.then(require.bind(require, "cpp-language-definition") /*id: 843227*/).then(t => t.cpp())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "CQL",
    alias: ["cassandra"],
    extensions: ["cql"],
    load: () => r("Cassandra")
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "CSS",
    extensions: ["css"],
    load: () => require.e("css-parser-chunk") /*id: 80493*/.then(require.bind(require, "codemirror-css-language-support") /*id: 592288*/).then(t => t.css())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Go",
    extensions: ["go"],
    load: () => require.e("semi-video-player-related") /*id: 77401*/.then(require.bind(require, "codemirror-go-language-support") /*id: 549393*/).then(t => t.go())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "HTML",
    alias: ["xhtml"],
    extensions: ["html", "htm", "handlebars", "hbs"],
    load: () => Promise.all([require.e("css-parser-chunk") /*id: 80493*/, require.e("javascript-syntax-parser") /*id: 28565*/, require.e("html-lang-modes-codemirror") /*id: 80744*/]).then(require.bind(require, "codemirror-html-language-support") /*id: 850002*/).then(t => t.html())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Java",
    extensions: ["java"],
    load: () => require.e("java-language-parser") /*id: 23895*/.then(require.bind(require, "codemirror-java-language-support") /*id: 750995*/).then(t => t.java())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "JavaScript",
    alias: ["ecmascript", "js", "node"],
    extensions: ["js", "mjs", "cjs"],
    load: () => Promise.all([require.e("javascript-syntax-parser") /*id: 28565*/, require.e("code-parser-core") /*id: 96636*/]).then(require.bind(require, "codemirror-javascript-lang-support") /*id: 911677*/).then(t => t.javascript())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "JSON",
    alias: ["json5"],
    extensions: ["json", "map"],
    load: () => require.e("json-language") /*id: 4764*/.then(require.bind(require, "codemirror-json-language-support") /*id: 263347*/).then(t => t.json())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "JSX",
    extensions: ["jsx"],
    load: () => Promise.all([require.e("javascript-syntax-parser") /*id: 28565*/, require.e("code-parser-core") /*id: 96636*/]).then(require.bind(require, "codemirror-javascript-lang-support") /*id: 911677*/).then(t => t.javascript({
      jsx: true
    }))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "LESS",
    extensions: ["less"],
    load: () => Promise.all([require.e("css-parser-chunk") /*id: 80493*/, require.e("less-language-support") /*id: 7106*/]).then(require.bind(require, "codemirror-less-language-support") /*id: 931026*/).then(t => t.less())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Liquid",
    extensions: ["liquid"],
    load: () => Promise.all([require.e("css-parser-chunk") /*id: 80493*/, require.e("javascript-syntax-parser") /*id: 28565*/, require.e("html-language-support") /*id: 410*/]).then(require.bind(require, "codemirror-liquid-support") /*id: 662502*/).then(t => t.liquid())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "MariaDB SQL",
    load: () => r("MariaSQL")
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Markdown",
    extensions: ["md", "markdown", "mkd"],
    load: () => Promise.all([require.e("css-parser-chunk") /*id: 80493*/, require.e("javascript-syntax-parser") /*id: 28565*/, require.e("html-lang-support") /*id: 61197*/]).then(require.bind(require, "codemirror-markdown-language") /*id: 285295*/).then(t => t.markdown())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "MS SQL",
    load: () => r("MSSQL")
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "MySQL",
    load: () => r("MySQL")
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "PHP",
    extensions: ["php", "php3", "php4", "php5", "php7", "phtml"],
    load: () => Promise.all([require.e("css-parser-chunk") /*id: 80493*/, require.e("javascript-syntax-parser") /*id: 28565*/, require.e("codemirror-html-php-language") /*id: 19994*/]).then(require.bind(require, "php-language-support") /*id: 531794*/).then(t => t.php())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "PLSQL",
    extensions: ["pls"],
    load: () => r("PLSQL")
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "PostgreSQL",
    load: () => r("PostgreSQL")
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Python",
    extensions: ["BUILD", "bzl", "py", "pyw"],
    filename: /^(BUCK|BUILD)$/,
    load: () => require.e("python-language-support") /*id: 87794*/.then(require.bind(require, "codemirror-python-language-support") /*id: 405355*/).then(t => t.python())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Rust",
    extensions: ["rs"],
    load: () => require.e("rust-language-grammar") /*id: 20660*/.then(require.bind(require, "rust-language-support") /*id: 166948*/).then(t => t.rust())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Sass",
    extensions: ["sass"],
    load: () => Promise.all([require.e("css-parser-chunk") /*id: 80493*/, require.e("sass-language-parser") /*id: 57029*/]).then(require.bind(require, "codemirror-sass-language-support") /*id: 305576*/).then(t => t.sass({
      indented: true
    }))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "SCSS",
    extensions: ["scss"],
    load: () => Promise.all([require.e("css-parser-chunk") /*id: 80493*/, require.e("sass-language-parser") /*id: 57029*/]).then(require.bind(require, "codemirror-sass-language-support") /*id: 305576*/).then(t => t.sass())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "SQL",
    extensions: ["sql"],
    load: () => r("StandardSQL")
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "SQLite",
    load: () => r("SQLite")
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "TSX",
    extensions: ["tsx"],
    load: () => Promise.all([require.e("javascript-syntax-parser") /*id: 28565*/, require.e("code-parser-core") /*id: 96636*/]).then(require.bind(require, "codemirror-javascript-lang-support") /*id: 911677*/).then(t => t.javascript({
      jsx: true,
      typescript: true
    }))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "TypeScript",
    alias: ["ts"],
    extensions: ["ts", "mts", "cts"],
    load: () => Promise.all([require.e("javascript-syntax-parser") /*id: 28565*/, require.e("code-parser-core") /*id: 96636*/]).then(require.bind(require, "codemirror-javascript-lang-support") /*id: 911677*/).then(t => t.javascript({
      typescript: true
    }))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "WebAssembly",
    extensions: ["wat", "wast"],
    load: () => require.e("wast-language-parser") /*id: 21043*/.then(require.bind(require, "codemirror-wast-language-support") /*id: 970549*/).then(t => t.wast())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "XML",
    alias: ["rss", "wsdl", "xsd"],
    extensions: ["xml", "xsl", "xsd", "svg"],
    load: () => require.e("xml-language-support") /*id: 40871*/.then(require.bind(require, "xml-language-support") /*id: 856418*/).then(t => t.xml())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "YAML",
    alias: ["yml"],
    extensions: ["yaml", "yml"],
    load: () => require.e("yaml-parser") /*id: 88603*/.then(require.bind(require, "yaml-language-support") /*id: 441120*/).then(t => t.yaml())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "APL",
    extensions: ["dyalog", "apl"],
    load: () => require.e("apl-syntax-mode") /*id: 13790*/.then(require.bind(require, "codemirror-apl-mode") /*id: 52604*/).then(t => s(t.apl))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "PGP",
    alias: ["asciiarmor"],
    extensions: ["asc", "pgp", "sig"],
    load: () => require.e("ascii-armor-tokenizer") /*id: 17963*/.then(require.bind(require, "ascii-armor-mode") /*id: 287217*/).then(t => s(t.asciiArmor))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "ASN.1",
    extensions: ["asn", "asn1"],
    load: () => require.e("asn1-syntax") /*id: 62026*/.then(require.bind(require, "asn1-syntax-mode") /*id: 203418*/).then(t => s(t.asn1({})))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Asterisk",
    filename: /^extensions\.conf$/i,
    load: () => require.e("asterisk-dialplan-syntax") /*id: 60429*/.then(require.bind(require, "asterisk-language-mode") /*id: 538990*/).then(t => s(t.asterisk))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Brainfuck",
    extensions: ["b", "bf"],
    load: () => require.e("brainfuck-syntax-highlighting") /*id: 79138*/.then(require.bind(require, "brainfuck-mode") /*id: 323164*/).then(t => s(t.brainfuck))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Cobol",
    extensions: ["cob", "cpy"],
    load: () => require.e("cobol-syntax-mode") /*id: 8231*/.then(require.bind(require, "codemirror-cobol-mode") /*id: 434245*/).then(t => s(t.cobol))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "C#",
    alias: ["csharp", "cs"],
    extensions: ["cs"],
    load: () => require.e("syntax-highlighting-modes") /*id: 55234*/.then(require.bind(require, "code-editor-clike-modes") /*id: 594345*/).then(t => s(t.csharp))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Clojure",
    extensions: ["clj", "cljc", "cljx"],
    load: () => require.e("clojure-syntax-highlighting") /*id: 86656*/.then(require.bind(require, "clojure-syntax-mode") /*id: 528289*/).then(t => s(t.clojure))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "ClojureScript",
    extensions: ["cljs"],
    load: () => require.e("clojure-syntax-highlighting") /*id: 86656*/.then(require.bind(require, "clojure-syntax-mode") /*id: 528289*/).then(t => s(t.clojure))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Closure Stylesheets (GSS)",
    extensions: ["gss"],
    load: () => require.e("codemirror-css-language-support") /*id: 37721*/.then(require.bind(require, "codemirror-css-mode") /*id: 634692*/).then(t => s(t.gss))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "CMake",
    extensions: ["cmake", "cmake.in"],
    filename: /^CMakeLists\.txt$/,
    load: () => require.e("cmake-codemirror-mode") /*id: 77184*/.then(require.bind(require, "cmake-syntax-mode") /*id: 706779*/).then(t => s(t.cmake))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "CoffeeScript",
    alias: ["coffee", "coffee-script"],
    extensions: ["coffee"],
    load: () => require.e("coffeescript-syntax-mode") /*id: 46962*/.then(require.bind(require, "coffeescript-mode") /*id: 969771*/).then(t => s(t.coffeeScript))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Common Lisp",
    alias: ["lisp"],
    extensions: ["cl", "lisp", "el"],
    load: () => require.e("common-lisp-syntax-highlighter") /*id: 23252*/.then(require.bind(require, "common-lisp-mode") /*id: 170126*/).then(t => s(t.commonLisp))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Cypher",
    extensions: ["cyp", "cypher"],
    load: () => require.e("cypher-editor") /*id: 3158*/.then(require.bind(require, "cypher-syntax-mode") /*id: 831160*/).then(t => s(t.cypher))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Cython",
    extensions: ["pyx", "pxd", "pxi"],
    load: () => require.e("python-cython-lexer") /*id: 67630*/.then(require.bind(require, "python-syntax-mode") /*id: 346979*/).then(t => s(t.cython))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Crystal",
    extensions: ["cr"],
    load: () => require.e("crystal-language-mode") /*id: 54012*/.then(require.bind(require, "crystal-language-mode") /*id: 551840*/).then(t => s(t.crystal))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "D",
    extensions: ["d"],
    load: () => require.e("language-mode-d") /*id: 76537*/.then(require.bind(require, "d-language-mode") /*id: 557314*/).then(t => s(t.d))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Dart",
    extensions: ["dart"],
    load: () => require.e("syntax-highlighting-modes") /*id: 55234*/.then(require.bind(require, "code-editor-clike-modes") /*id: 594345*/).then(t => s(t.dart))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "diff",
    extensions: ["diff", "patch"],
    load: () => require.e("codemirror-diff-mode") /*id: 57946*/.then(require.bind(require, "diff-syntax-mode") /*id: 331127*/).then(t => s(t.diff))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Dockerfile",
    filename: /^Dockerfile$/,
    load: () => require.e("dockerfile-syntax-mode") /*id: 59896*/.then(require.bind(require, "dockerfile-syntax-mode") /*id: 658440*/).then(t => s(t.dockerFile))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "DTD",
    extensions: ["dtd"],
    load: () => require.e("dtd-language-mode-chunk") /*id: 75234*/.then(require.bind(require, "dtd-language-mode") /*id: 770561*/).then(t => s(t.dtd))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Dylan",
    extensions: ["dylan", "dyl", "intr"],
    load: () => require.e("dylan-lang-syntax") /*id: 85318*/.then(require.bind(require, "codemirror-dylan-mode") /*id: 256503*/).then(t => s(t.dylan))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "EBNF",
    load: () => require.e("ebnf-grammar-extension") /*id: 94379*/.then(require.bind(require, "ebnf-tokenizer-mode") /*id: 411570*/).then(t => s(t.ebnf))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "ECL",
    extensions: ["ecl"],
    load: () => require.e("codemirror-ecl-mode") /*id: 81653*/.then(require.bind(require, "ecl-language-mode") /*id: 736867*/).then(t => s(t.ecl))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "edn",
    extensions: ["edn"],
    load: () => require.e("clojure-syntax-highlighting") /*id: 86656*/.then(require.bind(require, "clojure-syntax-mode") /*id: 528289*/).then(t => s(t.clojure))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Eiffel",
    extensions: ["e"],
    load: () => require.e("eiffel-language-syntax-highlighting") /*id: 16640*/.then(require.bind(require, "eiffel-syntax-mode") /*id: 571234*/).then(t => s(t.eiffel))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Elm",
    extensions: ["elm"],
    load: () => require.e("codemirror-elm-syntax-highlighting") /*id: 77244*/.then(require.bind(require, "elm-syntax-highlight-mode") /*id: 683651*/).then(t => s(t.elm))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Erlang",
    extensions: ["erl"],
    load: () => require.e("erlang-syntax-highlighter") /*id: 61067*/.then(require.bind(require, "erlang-code-mirror-mode") /*id: 654262*/).then(t => s(t.erlang))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Esper",
    load: () => require.e("sql-grammar-mode-definitions") /*id: 70483*/.then(require.bind(require, "sql-syntax-mode-definitions") /*id: 601071*/).then(t => s(t.esper))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Factor",
    extensions: ["factor"],
    load: () => require.e("factor-syntax-highlighter") /*id: 14638*/.then(require.bind(require, "factor-syntax-mode") /*id: 651186*/).then(t => s(t.factor))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "FCL",
    load: () => require.e("fcl-syntax-mode") /*id: 93565*/.then(require.bind(require, "fcl-language-mode") /*id: 657535*/).then(t => s(t.fcl))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Forth",
    extensions: ["forth", "fth", "4th"],
    load: () => require.e("forth-language-mode") /*id: 34249*/.then(require.bind(require, "forth-mode-definition") /*id: 550462*/).then(t => s(t.forth))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Fortran",
    extensions: ["f", "for", "f77", "f90", "f95"],
    load: () => require.e("fortran-syntax-highlighter") /*id: 47634*/.then(require.bind(require, "fortran-syntax-highlight-mode") /*id: 45422*/).then(t => s(t.fortran))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "F#",
    alias: ["fsharp"],
    extensions: ["fs"],
    load: () => require.e("codemirror-fsharp-ocaml-sml-mode") /*id: 1026*/.then(require.bind(require, "ml-language-modes") /*id: 528155*/).then(t => s(t.fSharp))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Gas",
    extensions: ["s"],
    load: () => require.e("gas-assembly-syntax") /*id: 85769*/.then(require.bind(require, "gas-assembly-mode") /*id: 705302*/).then(t => s(t.gas))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Gherkin",
    extensions: ["feature"],
    load: () => require.e("gherkin-syntax-mode") /*id: 90260*/.then(require.bind(require, "gherkin-syntax-mode") /*id: 12998*/).then(t => s(t.gherkin))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Groovy",
    extensions: ["groovy", "gradle"],
    filename: /^Jenkinsfile$/,
    load: () => require.e("groovy-syntax-mode") /*id: 52116*/.then(require.bind(require, "groovy-syntax-mode") /*id: 987654*/).then(t => s(t.groovy))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Haskell",
    extensions: ["hs"],
    load: () => require.e("codemirror-haskell-mode") /*id: 1225*/.then(require.bind(require, "haskell-syntax-mode") /*id: 613231*/).then(t => s(t.haskell))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Haxe",
    extensions: ["hx"],
    load: () => require.e("haxe-lang-hxml") /*id: 73004*/.then(require.bind(require, "haxe-syntax-modes") /*id: 801192*/).then(t => s(t.haxe))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "HXML",
    extensions: ["hxml"],
    load: () => require.e("haxe-lang-hxml") /*id: 73004*/.then(require.bind(require, "haxe-syntax-modes") /*id: 801192*/).then(t => s(t.hxml))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "HTTP",
    load: () => require.e("codemirror-http-mode") /*id: 77594*/.then(require.bind(require, "http-syntax-highlight-mode") /*id: 511906*/).then(t => s(t.http))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "IDL",
    extensions: ["pro"],
    load: () => require.e("idl-language-syntax") /*id: 44773*/.then(require.bind(require, "idl-language-definition") /*id: 903439*/).then(t => s(t.idl))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "JSON-LD",
    alias: ["jsonld"],
    extensions: ["jsonld"],
    load: () => require.e("code-mirror-javascript-mode") /*id: 93937*/.then(require.bind(require, "javascript-syntax-mode") /*id: 111924*/).then(t => s(t.jsonld))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Jinja2",
    extensions: ["j2", "jinja", "jinja2"],
    load: () => require.e("jinja2-highlighter") /*id: 83900*/.then(require.bind(require, "jinja2-syntax-mode") /*id: 228783*/).then(t => s(t.jinja2))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Julia",
    extensions: ["jl"],
    load: () => require.e("julia-syntax-highlight") /*id: 54662*/.then(require.bind(require, "julia-syntax-highlighter") /*id: 256307*/).then(t => s(t.julia))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Kotlin",
    extensions: ["kt", "kts"],
    load: () => require.e("syntax-highlighting-modes") /*id: 55234*/.then(require.bind(require, "code-editor-clike-modes") /*id: 594345*/).then(t => s(t.kotlin))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "LiveScript",
    alias: ["ls"],
    extensions: ["ls"],
    load: () => require.e("livescript-syntax-highlighting") /*id: 36882*/.then(require.bind(require, "livescript-syntax-mode") /*id: 915800*/).then(t => s(t.liveScript))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Lua",
    extensions: ["lua"],
    load: () => require.e("lua-language-mode") /*id: 17553*/.then(require.bind(require, "lua-language-mode") /*id: 948318*/).then(t => s(t.lua))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "mIRC",
    extensions: ["mrc"],
    load: () => require.e("mirc-scripting-language") /*id: 74850*/.then(require.bind(require, "mirc-syntax-mode") /*id: 180093*/).then(t => s(t.mirc))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Mathematica",
    extensions: ["m", "nb", "wl", "wls"],
    load: () => require.e("mathematica-language-mode") /*id: 6146*/.then(require.bind(require, "mathematica-language-mode") /*id: 969533*/).then(t => s(t.mathematica))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Modelica",
    extensions: ["mo"],
    load: () => require.e("modelica-codemirror-mode") /*id: 43792*/.then(require.bind(require, "modelica-syntax-mode") /*id: 910727*/).then(t => s(t.modelica))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "MUMPS",
    extensions: ["mps"],
    load: () => require.e("mumps-syntax-mode") /*id: 15300*/.then(require.bind(require, "mumps-tokenizer-mode") /*id: 237003*/).then(t => s(t.mumps))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Mbox",
    extensions: ["mbox"],
    load: () => require.e("mbox-syntax-highlighter") /*id: 60899*/.then(require.bind(require, "codemirror-mbox-mode") /*id: 140212*/).then(t => s(t.mbox))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Nginx",
    filename: /nginx.*\.conf$/i,
    load: () => require.e("codemirror-nginx-syntax-highlighting") /*id: 9638*/.then(require.bind(require, "nginx-syntax-mode") /*id: 562137*/).then(t => s(t.nginx))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "NSIS",
    extensions: ["nsh", "nsi"],
    load: () => require.e("codemirror-nsis-syntax-highlighting") /*id: 9649*/.then(require.bind(require, "nsis-simple-mode") /*id: 24327*/).then(t => s(t.nsis))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "NTriples",
    extensions: ["nt", "nq"],
    load: () => require.e("ntriples-parser") /*id: 72950*/.then(require.bind(require, "codemirror-ntriples-mode") /*id: 751496*/).then(t => s(t.ntriples))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Objective-C",
    alias: ["objective-c", "objc"],
    extensions: ["m"],
    load: () => require.e("syntax-highlighting-modes") /*id: 55234*/.then(require.bind(require, "code-editor-clike-modes") /*id: 594345*/).then(t => s(t.objectiveC))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Objective-C++",
    alias: ["objective-c++", "objc++"],
    extensions: ["mm"],
    load: () => require.e("syntax-highlighting-modes") /*id: 55234*/.then(require.bind(require, "code-editor-clike-modes") /*id: 594345*/).then(t => s(t.objectiveCpp))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "OCaml",
    extensions: ["ml", "mli", "mll", "mly"],
    load: () => require.e("codemirror-fsharp-ocaml-sml-mode") /*id: 1026*/.then(require.bind(require, "ml-language-modes") /*id: 528155*/).then(t => s(t.oCaml))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Octave",
    extensions: ["m"],
    load: () => require.e("octave-syntax-highlighter") /*id: 88194*/.then(require.bind(require, "octave-syntax-mode") /*id: 570138*/).then(t => s(t.octave))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Oz",
    extensions: ["oz"],
    load: () => require.e("oz-language-mode") /*id: 4088*/.then(require.bind(require, "oz-language-mode") /*id: 605984*/).then(t => s(t.oz))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Pascal",
    extensions: ["p", "pas"],
    load: () => require.e("pascal-syntax-highlighting") /*id: 60351*/.then(require.bind(require, "codemirror-pascal-mode") /*id: 612149*/).then(t => s(t.pascal))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Perl",
    extensions: ["pl", "pm"],
    load: () => require.e("perl-language-syntax-highlighter") /*id: 96886*/.then(require.bind(require, "perl-syntax-mode") /*id: 455287*/).then(t => s(t.perl))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Pig",
    extensions: ["pig"],
    load: () => require.e("pig-language-mode") /*id: 9810*/.then(require.bind(require, "pig-syntax-mode") /*id: 981231*/).then(t => s(t.pig))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "PowerShell",
    extensions: ["ps1", "psd1", "psm1"],
    load: () => require.e("powershell-syntax-parser") /*id: 10211*/.then(require.bind(require, "powershell-syntax-lexer") /*id: 419919*/).then(t => s(t.powerShell))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Properties files",
    alias: ["ini", "properties"],
    extensions: ["properties", "ini", "in"],
    load: () => require.e("properties-language-parser") /*id: 80815*/.then(require.bind(require, "codemirror-properties-mode") /*id: 778562*/).then(t => s(t.properties))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "ProtoBuf",
    extensions: ["proto"],
    load: () => require.e("protobuf-syntax-mode") /*id: 24857*/.then(require.bind(require, "protobuf-language-definition") /*id: 620885*/).then(t => s(t.protobuf))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Pug",
    alias: ["jade"],
    extensions: ["pug", "jade"],
    load: () => require.e("code-editor-syntax-modes") /*id: 12622*/.then(require.bind(require, "pug-syntax-mode") /*id: 816375*/).then(t => s(t.pug))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Puppet",
    extensions: ["pp"],
    load: () => require.e("puppet-syntax-highlighter") /*id: 74123*/.then(require.bind(require, "puppet-syntax-mode") /*id: 778354*/).then(t => s(t.puppet))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Q",
    extensions: ["q"],
    load: () => require.e("q-language-syntax-highlighter") /*id: 96786*/.then(require.bind(require, "codemirror-q-language-mode") /*id: 445124*/).then(t => s(t.q))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "R",
    alias: ["rscript"],
    extensions: ["r", "R"],
    load: () => require.e("r-language-highlighter") /*id: 25272*/.then(require.bind(require, "r-language-mode") /*id: 311736*/).then(t => s(t.r))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "RPM Changes",
    load: () => require.e("codemirror-rpm-syntax") /*id: 27857*/.then(require.bind(require, "rpm-syntax-highlight-modes") /*id: 858739*/).then(t => s(t.rpmChanges))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "RPM Spec",
    extensions: ["spec"],
    load: () => require.e("codemirror-rpm-syntax") /*id: 27857*/.then(require.bind(require, "rpm-syntax-highlight-modes") /*id: 858739*/).then(t => s(t.rpmSpec))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Ruby",
    alias: ["jruby", "macruby", "rake", "rb", "rbx"],
    extensions: ["rb"],
    filename: /^(Gemfile|Rakefile)$/,
    load: () => require.e("ruby-syntax-highlighter") /*id: 22948*/.then(require.bind(require, "ruby-language-mode") /*id: 930353*/).then(t => s(t.ruby))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "SAS",
    extensions: ["sas"],
    load: () => require.e("sas-syntax-highlight") /*id: 43353*/.then(require.bind(require, "sas-syntax-highlight-mode") /*id: 771508*/).then(t => s(t.sas))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Scala",
    extensions: ["scala"],
    load: () => require.e("syntax-highlighting-modes") /*id: 55234*/.then(require.bind(require, "code-editor-clike-modes") /*id: 594345*/).then(t => s(t.scala))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Scheme",
    extensions: ["scm", "ss"],
    load: () => require.e("codemirror-scheme-mode") /*id: 10824*/.then(require.bind(require, "codemirror-scheme-mode") /*id: 874893*/).then(t => s(t.scheme))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Shell",
    alias: ["bash", "sh", "zsh"],
    extensions: ["sh", "ksh", "bash"],
    filename: /^PKGBUILD$/,
    load: () => require.e("shell-syntax-mode") /*id: 47307*/.then(require.bind(require, "shell-script-language-mode") /*id: 929347*/).then(t => s(t.shell))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Sieve",
    extensions: ["siv", "sieve"],
    load: () => require.e("sieve-language-mode") /*id: 40981*/.then(require.bind(require, "sieve-language-mode") /*id: 104320*/).then(t => s(t.sieve))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Smalltalk",
    extensions: ["st"],
    load: () => require.e("smalltalk-syntax-highlighter") /*id: 17349*/.then(require.bind(require, "smalltalk-mode") /*id: 133479*/).then(t => s(t.smalltalk))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Solr",
    load: () => require.e("solr-syntax-highlighter") /*id: 47459*/.then(require.bind(require, "solr-query-mode") /*id: 845029*/).then(t => s(t.solr))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "SML",
    extensions: ["sml", "sig", "fun", "smackspec"],
    load: () => require.e("codemirror-fsharp-ocaml-sml-mode") /*id: 1026*/.then(require.bind(require, "ml-language-modes") /*id: 528155*/).then(t => s(t.sml))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "SPARQL",
    alias: ["sparul"],
    extensions: ["rq", "sparql"],
    load: () => require.e("sparql-syntax-mode") /*id: 49373*/.then(require.bind(require, "codemirror-sparql-mode") /*id: 748318*/).then(t => s(t.sparql))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Spreadsheet",
    alias: ["excel", "formula"],
    load: () => require.e("spreadsheet-mode") /*id: 2787*/.then(require.bind(require, "spreadsheet-syntax-mode") /*id: 52248*/).then(t => s(t.spreadsheet))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Squirrel",
    extensions: ["nut"],
    load: () => require.e("syntax-highlighting-modes") /*id: 55234*/.then(require.bind(require, "code-editor-clike-modes") /*id: 594345*/).then(t => s(t.squirrel))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Stylus",
    extensions: ["styl"],
    load: () => require.e("stylus-language-mode") /*id: 36279*/.then(require.bind(require, "stylus-code-mirror-mode") /*id: 148319*/).then(t => s(t.stylus))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Swift",
    extensions: ["swift"],
    load: () => require.e("swift-syntax-highlight") /*id: 80083*/.then(require.bind(require, "swift-syntax-mode") /*id: 377328*/).then(t => s(t.swift))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "sTeX",
    load: () => require.e("latex-stex-syntax-mode") /*id: 48475*/.then(require.bind(require, "stex-syntax-highlight-mode") /*id: 399702*/).then(t => s(t.stex))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "LaTeX",
    alias: ["tex"],
    extensions: ["text", "ltx", "tex"],
    load: () => require.e("latex-stex-syntax-mode") /*id: 48475*/.then(require.bind(require, "stex-syntax-highlight-mode") /*id: 399702*/).then(t => s(t.stex))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "SystemVerilog",
    extensions: ["v", "sv", "svh"],
    load: () => require.e("verilog-tlv-mode-codemirror") /*id: 22059*/.then(require.bind(require, "verilog-language-mode") /*id: 37098*/).then(t => s(t.verilog))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Tcl",
    extensions: ["tcl"],
    load: () => require.e("tcl-syntax-highlighter") /*id: 68251*/.then(require.bind(require, "tcl-language-mode") /*id: 259859*/).then(t => s(t.tcl))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Textile",
    extensions: ["textile"],
    load: () => require.e("textile-syntax-highlighting") /*id: 7112*/.then(require.bind(require, "textile-syntax-mode") /*id: 94635*/).then(t => s(t.textile))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "TiddlyWiki",
    load: () => require.e("codemirror-tiddlywiki") /*id: 66568*/.then(require.bind(require, "tiddlywiki-syntax-mode") /*id: 784580*/).then(t => s(t.tiddlyWiki))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Tiki wiki",
    load: () => require.e("tiki-wiki-mode") /*id: 4177*/.then(require.bind(require, "codemirror-tiki-mode") /*id: 219393*/).then(t => s(t.tiki))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "TOML",
    extensions: ["toml"],
    load: () => require.e("code-mirror-toml-syntax-mode") /*id: 42279*/.then(require.bind(require, "toml-syntax-mode") /*id: 978282*/).then(t => s(t.toml))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Troff",
    extensions: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    load: () => require.e("code-mode-troff") /*id: 11378*/.then(require.bind(require, "troff-syntax-mode") /*id: 709163*/).then(t => s(t.troff))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "TTCN",
    extensions: ["ttcn", "ttcn3", "ttcnpp"],
    load: () => require.e("language-mode-ttcn") /*id: 18867*/.then(require.bind(require, "ttcn-language-mode") /*id: 865416*/).then(t => s(t.ttcn))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "TTCN_CFG",
    extensions: ["cfg"],
    load: () => require.e("codemirror-ttcn3-mode") /*id: 92471*/.then(require.bind(require, "ttcn-language-mode_1") /*id: 433364*/).then(t => s(t.ttcnCfg))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Turtle",
    extensions: ["ttl"],
    load: () => require.e("turtle-syntax-mode") /*id: 11425*/.then(require.bind(require, "turtle-syntax-mode") /*id: 91409*/).then(t => s(t.turtle))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Web IDL",
    extensions: ["webidl"],
    load: () => require.e("webidl-codemirror-lexer") /*id: 63962*/.then(require.bind(require, "webidl-syntax-highlight-mode") /*id: 884124*/).then(t => s(t.webIDL))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "VB.NET",
    extensions: ["vb"],
    load: () => require.e("vb-language-mode") /*id: 52433*/.then(require.bind(require, "codemirror-vb-mode") /*id: 996890*/).then(t => s(t.vb))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "VBScript",
    extensions: ["vbs"],
    load: () => require.e("vbscript-syntax-highlighting") /*id: 69676*/.then(require.bind(require, "vbscript-syntax-mode") /*id: 263272*/).then(t => s(t.vbScript))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Velocity",
    extensions: ["vtl"],
    load: () => require.e("velocity-syntax-highlighter") /*id: 27522*/.then(require.bind(require, "codemirror-velocity-mode") /*id: 3434*/).then(t => s(t.velocity))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Verilog",
    extensions: ["v"],
    load: () => require.e("verilog-tlv-mode-codemirror") /*id: 22059*/.then(require.bind(require, "verilog-language-mode") /*id: 37098*/).then(t => s(t.verilog))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "VHDL",
    extensions: ["vhd", "vhdl"],
    load: () => require.e("language-mode-vhdl") /*id: 76726*/.then(require.bind(require, "codemirror-vhdl-mode") /*id: 486228*/).then(t => s(t.vhdl))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "XQuery",
    extensions: ["xy", "xquery"],
    load: () => require.e("xquery-code-syntax-highlighter") /*id: 68812*/.then(require.bind(require, "xquery-syntax-mode") /*id: 144178*/).then(t => s(t.xQuery))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Yacas",
    extensions: ["ys"],
    load: () => require.e("yacas-language-support") /*id: 75420*/.then(require.bind(require, "yacas-syntax-mode") /*id: 4967*/).then(t => s(t.yacas))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Z80",
    extensions: ["z80"],
    load: () => require.e("z80-assembly-mode") /*id: 6336*/.then(require.bind(require, "z80-assembly-mode") /*id: 2278*/).then(t => s(t.z80))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "MscGen",
    extensions: ["mscgen", "mscin", "msc"],
    load: () => require.e("mscgen-language-syntax-highlighting") /*id: 82824*/.then(require.bind(require, "codemirror-mscgen-modes") /*id: 262974*/).then(t => s(t.mscgen))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Xù",
    extensions: ["xu"],
    load: () => require.e("mscgen-language-syntax-highlighting") /*id: 82824*/.then(require.bind(require, "codemirror-mscgen-modes") /*id: 262974*/).then(t => s(t.xu))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "MsGenny",
    extensions: ["msgenny"],
    load: () => require.e("mscgen-language-syntax-highlighting") /*id: 82824*/.then(require.bind(require, "codemirror-mscgen-modes") /*id: 262974*/).then(t => s(t.msgenny))
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Vue",
    extensions: ["vue"],
    load: () => Promise.all([require.e("css-parser-chunk") /*id: 80493*/, require.e("javascript-syntax-parser") /*id: 28565*/, require.e("codemirror-html-language-support") /*id: 37522*/]).then(require.bind(require, "react-progress-components") /*id: 461077*/).then(t => t.vue())
  }), codemirrorLanguageSupport.LanguageDescription.of({
    name: "Angular Template",
    load: () => Promise.all([require.e("css-parser-chunk") /*id: 80493*/, require.e("javascript-syntax-parser") /*id: 28565*/, require.e("angular-language-parser") /*id: 69166*/]).then(require.bind(require, "codemirror-angular-language") /*id: 539333*/).then(t => t.angular())
  })];
  require.d(exports, {
    languageDefinitions: function () {
      return o;
    }
  });
}