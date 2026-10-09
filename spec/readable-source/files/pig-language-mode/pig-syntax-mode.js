// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9810.269390f0.js
         * chunkId: 9810
         * moduleId: 981231
         */
module.exports = function (module, exports, require) {
  function e(O) {
    var T = {};
    var E = O.split(" ");
    var e = 0;
    for (; e < E.length; ++e) {
      T[E[e]] = true;
    }
    return T;
  }
  var A = "ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ";
  var N = "VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP";
  var I = "BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ";
  var t = e(A);
  var R = e(N);
  var S = e(I);
  var r = /[*+\-%<>=&?:\/!|]/;
  function L(O, T, E) {
    T.tokenize = E;
    return E(O, T);
  }
  function n(O, T) {
    var E;
    var e = false;
    while (E = O.next()) {
      if (E == "/" && e) {
        T.tokenize = U;
        break;
      }
      e = E == "*";
    }
    return "comment";
  }
  function U(O, T) {
    var E = O.next();
    if (E == "\"" || E == "'") {
      return L(O, T, function (O, T) {
        var e;
        var A = false;
        var N = false;
        while ((e = O.next()) != null) {
          if (e == E && !A) {
            N = true;
            break;
          }
          A = !A && e == "\\";
        }
        if (N || !A) {
          T.tokenize = U;
        }
        return "error";
      });
    }
    if (/[\[\]{}\(\),;\.]/.test(E)) {
      return null;
    }
    if (/\d/.test(E)) {
      O.eatWhile(/[\w\.]/);
      return "number";
    }
    if (E == "/") {
      if (O.eat("*")) {
        return L(O, T, n);
      } else {
        O.eatWhile(r);
        return "operator";
      }
    }
    if (E == "-") {
      if (O.eat("-")) {
        O.skipToEnd();
        return "comment";
      } else {
        O.eatWhile(r);
        return "operator";
      }
    } else if (r.test(E)) {
      O.eatWhile(r);
      return "operator";
    } else {
      O.eatWhile(/[\w\$_]/);
      if (R && R.propertyIsEnumerable(O.current().toUpperCase()) && !O.eat(")") && !O.eat(".")) {
        return "keyword";
      } else if (t && t.propertyIsEnumerable(O.current().toUpperCase())) {
        return "builtin";
      } else if (S && S.propertyIsEnumerable(O.current().toUpperCase())) {
        return "type";
      } else {
        return "variable";
      }
    }
  }
  let D = {
    name: "pig",
    startState: function () {
      return {
        tokenize: U,
        startOfLine: true
      };
    },
    token: function (O, T) {
      if (O.eatSpace()) {
        return null;
      } else {
        return T.tokenize(O, T);
      }
    },
    languageData: {
      autocomplete: (A + I + N).split(" ")
    }
  };
  require.r(exports);
  require.d(exports, {
    pig: function () {
      return D;
    }
  });
}