// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'createMathParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 464544
         */
module.exports = function (module, exports, require) {
  var spaceLikeHandler = require("space-like-handler") /*id: 784097*/;
  var charClassificationUtils = require("char-classification-utils") /*id: 140430*/;
  let o = {
    tokenize: function (e, t, r) {
      let o = this;
      let a = o.events[o.events.length - 1];
      let c = a && a[1].type === "linePrefix" ? a[2].sliceSerialize(a[1], true).length : 0;
      let l = 0;
      return function (t) {
        e.enter("mathFlow");
        e.enter("mathFlowFence");
        e.enter("mathFlowFenceSequence");
        return function t(i) {
          if (i === 36) {
            e.consume(i);
            l++;
            return t;
          } else if (l < 2) {
            return r(i);
          } else {
            e.exit("mathFlowFenceSequence");
            return spaceLikeHandler.createSpaceHandler(e, s, "whitespace")(i);
          }
        }(t);
      };
      function s(t) {
        if (t === null || charClassificationUtils.isInvalidChar(t)) {
          return f(t);
        } else {
          e.enter("mathFlowFenceMeta");
          e.enter("chunkString", {
            contentType: "string"
          });
          return function t(n) {
            if (n === null || charClassificationUtils.isInvalidChar(n)) {
              e.exit("chunkString");
              e.exit("mathFlowFenceMeta");
              return f(n);
            } else if (n === 36) {
              return r(n);
            } else {
              e.consume(n);
              return t;
            }
          }(t);
        }
      }
      function f(r) {
        e.exit("mathFlowFence");
        if (o.interrupt) {
          return t(r);
        } else {
          return e.attempt(u, p, g)(r);
        }
      }
      function p(t) {
        return e.attempt({
          tokenize: m,
          partial: true
        }, g, h)(t);
      }
      function h(t) {
        return (c ? spaceLikeHandler.createSpaceHandler(e, d, "linePrefix", c + 1) : d)(t);
      }
      function d(t) {
        if (t === null) {
          return g(t);
        } else if (charClassificationUtils.isInvalidChar(t)) {
          return e.attempt(u, p, g)(t);
        } else {
          e.enter("mathFlowValue");
          return function t(r) {
            if (r === null || charClassificationUtils.isInvalidChar(r)) {
              e.exit("mathFlowValue");
              return d(r);
            } else {
              e.consume(r);
              return t;
            }
          }(t);
        }
      }
      function g(r) {
        e.exit("mathFlow");
        return t(r);
      }
      function m(e, t, r) {
        let u = 0;
        return spaceLikeHandler.createSpaceHandler(e, function (t) {
          e.enter("mathFlowFence");
          e.enter("mathFlowFenceSequence");
          return function t(i) {
            if (i === 36) {
              u++;
              e.consume(i);
              return t;
            } else if (u < l) {
              return r(i);
            } else {
              e.exit("mathFlowFenceSequence");
              return spaceLikeHandler.createSpaceHandler(e, a, "whitespace")(i);
            }
          }(t);
        }, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? undefined : 4);
        function a(n) {
          if (n === null || charClassificationUtils.isInvalidChar(n)) {
            e.exit("mathFlowFence");
            return t(n);
          } else {
            return r(n);
          }
        }
      }
    },
    concrete: true,
    name: "mathFlow"
  };
  let u = {
    tokenize: function (e, t, r) {
      let n = this;
      return function (r) {
        if (r === null) {
          return t(r);
        } else {
          e.enter("lineEnding");
          e.consume(r);
          e.exit("lineEnding");
          return i;
        }
      };
      function i(e) {
        if (n.parser.lazy[n.now().line]) {
          return r(e);
        } else {
          return t(e);
        }
      }
    },
    partial: true
  };
  function a(e) {
    let t;
    let r;
    let n = e.length - 4;
    let i = 3;
    if ((e[3][1].type === "lineEnding" || e[i][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
      for (t = i; ++t < n;) {
        if (e[t][1].type === "mathTextData") {
          e[n][1].type = "mathTextPadding";
          e[i][1].type = "mathTextPadding";
          i += 2;
          n -= 2;
          break;
        }
      }
    }
    t = i - 1;
    n++;
    while (++t <= n) {
      if (r === undefined) {
        if (t !== n && e[t][1].type !== "lineEnding") {
          r = t;
        }
      } else if (t === n || e[t][1].type === "lineEnding") {
        e[r][1].type = "mathTextData";
        if (t !== r + 2) {
          e[r][1].end = e[t - 1][1].end;
          e.splice(r + 2, t - r - 2);
          n -= t - r - 2;
          t = r + 2;
        }
        r = undefined;
      }
    }
    return e;
  }
  function c(e) {
    return e !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function l(e) {
    let t;
    return {
      flow: {
        36: o
      },
      text: {
        36: ((t = (e || {}).singleDollarTextMath) == null && (t = true), {
          tokenize: function (e, r, n) {
            let o;
            let u;
            let a = 0;
            return function (r) {
              e.enter("mathText");
              e.enter("mathTextSequence");
              return function r(i) {
                if (i === 36) {
                  e.consume(i);
                  a++;
                  return r;
                } else if (a < 2 && !t) {
                  return n(i);
                } else {
                  e.exit("mathTextSequence");
                  return c(i);
                }
              }(r);
            };
            function c(t) {
              if (t === null) {
                return n(t);
              } else if (t === 36) {
                u = e.enter("mathTextSequence");
                o = 0;
                return function t(n) {
                  if (n === 36) {
                    e.consume(n);
                    o++;
                    return t;
                  } else if (o === a) {
                    e.exit("mathTextSequence");
                    e.exit("mathText");
                    return r(n);
                  } else {
                    u.type = "mathTextData";
                    return l(n);
                  }
                }(t);
              } else if (t === 32) {
                e.enter("space");
                e.consume(t);
                e.exit("space");
                return c;
              } else if (charClassificationUtils.isInvalidChar(t)) {
                e.enter("lineEnding");
                e.consume(t);
                e.exit("lineEnding");
                return c;
              } else {
                e.enter("mathTextData");
                return l(t);
              }
            }
            function l(t) {
              if (t === null || t === 32 || t === 36 || charClassificationUtils.isInvalidChar(t)) {
                e.exit("mathTextData");
                return c(t);
              } else {
                e.consume(t);
                return l;
              }
            }
          },
          resolve: a,
          previous: c,
          name: "mathText"
        })
      }
    };
  }
  require.d(exports, {
    createMathParser: function () {
      return l;
    }
  });
}