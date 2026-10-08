// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 85769.79e2053e.js
         * chunkId: 85769
         * moduleId: 705302
         */
module.exports = function (module, exports, require) {
  function t(i) {
    var l = [];
    var e = "";
    var t = {
      ".abort": "builtin",
      ".align": "builtin",
      ".altmacro": "builtin",
      ".ascii": "builtin",
      ".asciz": "builtin",
      ".balign": "builtin",
      ".balignw": "builtin",
      ".balignl": "builtin",
      ".bundle_align_mode": "builtin",
      ".bundle_lock": "builtin",
      ".bundle_unlock": "builtin",
      ".byte": "builtin",
      ".cfi_startproc": "builtin",
      ".comm": "builtin",
      ".data": "builtin",
      ".def": "builtin",
      ".desc": "builtin",
      ".dim": "builtin",
      ".double": "builtin",
      ".eject": "builtin",
      ".else": "builtin",
      ".elseif": "builtin",
      ".end": "builtin",
      ".endef": "builtin",
      ".endfunc": "builtin",
      ".endif": "builtin",
      ".equ": "builtin",
      ".equiv": "builtin",
      ".eqv": "builtin",
      ".err": "builtin",
      ".error": "builtin",
      ".exitm": "builtin",
      ".extern": "builtin",
      ".fail": "builtin",
      ".file": "builtin",
      ".fill": "builtin",
      ".float": "builtin",
      ".func": "builtin",
      ".global": "builtin",
      ".gnu_attribute": "builtin",
      ".hidden": "builtin",
      ".hword": "builtin",
      ".ident": "builtin",
      ".if": "builtin",
      ".incbin": "builtin",
      ".include": "builtin",
      ".int": "builtin",
      ".internal": "builtin",
      ".irp": "builtin",
      ".irpc": "builtin",
      ".lcomm": "builtin",
      ".lflags": "builtin",
      ".line": "builtin",
      ".linkonce": "builtin",
      ".list": "builtin",
      ".ln": "builtin",
      ".loc": "builtin",
      ".loc_mark_labels": "builtin",
      ".local": "builtin",
      ".long": "builtin",
      ".macro": "builtin",
      ".mri": "builtin",
      ".noaltmacro": "builtin",
      ".nolist": "builtin",
      ".octa": "builtin",
      ".offset": "builtin",
      ".org": "builtin",
      ".p2align": "builtin",
      ".popsection": "builtin",
      ".previous": "builtin",
      ".print": "builtin",
      ".protected": "builtin",
      ".psize": "builtin",
      ".purgem": "builtin",
      ".pushsection": "builtin",
      ".quad": "builtin",
      ".reloc": "builtin",
      ".rept": "builtin",
      ".sbttl": "builtin",
      ".scl": "builtin",
      ".section": "builtin",
      ".set": "builtin",
      ".short": "builtin",
      ".single": "builtin",
      ".size": "builtin",
      ".skip": "builtin",
      ".sleb128": "builtin",
      ".space": "builtin",
      ".stab": "builtin",
      ".string": "builtin",
      ".struct": "builtin",
      ".subsection": "builtin",
      ".symver": "builtin",
      ".tag": "builtin",
      ".text": "builtin",
      ".title": "builtin",
      ".type": "builtin",
      ".uleb128": "builtin",
      ".val": "builtin",
      ".version": "builtin",
      ".vtable_entry": "builtin",
      ".vtable_inherit": "builtin",
      ".warning": "builtin",
      ".weak": "builtin",
      ".weakref": "builtin",
      ".word": "builtin"
    };
    var a = {};
    function n(i, l) {
      var e;
      var t = false;
      while ((e = i.next()) != null) {
        if (e === "/" && t) {
          l.tokenize = null;
          break;
        }
        t = e === "*";
      }
      return "comment";
    }
    if (i === "x86") {
      e = "#";
      a.al = "variable";
      a.ah = "variable";
      a.ax = "variable";
      a.eax = "variableName.special";
      a.rax = "variableName.special";
      a.bl = "variable";
      a.bh = "variable";
      a.bx = "variable";
      a.ebx = "variableName.special";
      a.rbx = "variableName.special";
      a.cl = "variable";
      a.ch = "variable";
      a.cx = "variable";
      a.ecx = "variableName.special";
      a.rcx = "variableName.special";
      a.dl = "variable";
      a.dh = "variable";
      a.dx = "variable";
      a.edx = "variableName.special";
      a.rdx = "variableName.special";
      a.si = "variable";
      a.esi = "variableName.special";
      a.rsi = "variableName.special";
      a.di = "variable";
      a.edi = "variableName.special";
      a.rdi = "variableName.special";
      a.sp = "variable";
      a.esp = "variableName.special";
      a.rsp = "variableName.special";
      a.bp = "variable";
      a.ebp = "variableName.special";
      a.rbp = "variableName.special";
      a.ip = "variable";
      a.eip = "variableName.special";
      a.rip = "variableName.special";
      a.cs = "keyword";
      a.ds = "keyword";
      a.ss = "keyword";
      a.es = "keyword";
      a.fs = "keyword";
      a.gs = "keyword";
    } else if (i === "arm" || i === "armv6") {
      e = "@";
      t.syntax = "builtin";
      a.r0 = "variable";
      a.r1 = "variable";
      a.r2 = "variable";
      a.r3 = "variable";
      a.r4 = "variable";
      a.r5 = "variable";
      a.r6 = "variable";
      a.r7 = "variable";
      a.r8 = "variable";
      a.r9 = "variable";
      a.r10 = "variable";
      a.r11 = "variable";
      a.r12 = "variable";
      a.sp = "variableName.special";
      a.lr = "variableName.special";
      a.pc = "variableName.special";
      a.r13 = a.sp;
      a.r14 = a.lr;
      a.r15 = a.pc;
      l.push(function (i, l) {
        if (i === "#") {
          l.eatWhile(/\w/);
          return "number";
        }
      });
    }
    return {
      name: "gas",
      startState: function () {
        return {
          tokenize: null
        };
      },
      token: function (i, b) {
        if (b.tokenize) {
          return b.tokenize(i, b);
        }
        if (i.eatSpace()) {
          return null;
        }
        var r;
        var u;
        var s = i.next();
        if (s === "/" && i.eat("*")) {
          b.tokenize = n;
          return n(i, b);
        }
        if (s === e) {
          i.skipToEnd();
          return "comment";
        }
        if (s === "\"") {
          (function (i, l) {
            var e;
            var t = false;
            while ((e = i.next()) != null) {
              if (e === "\"" && !t) {
                return false;
              }
              t = !t && e === "\\";
            }
          })(i, 0);
          return "string";
        }
        if (s === ".") {
          i.eatWhile(/\w/);
          return (r = t[i.current().toLowerCase()]) || null;
        }
        if (s === "=") {
          i.eatWhile(/\w/);
          return "tag";
        }
        if (s === "{" || s === "}") {
          return "bracket";
        }
        if (/\d/.test(s)) {
          if (s === "0" && i.eat("x")) {
            i.eatWhile(/[0-9a-fA-F]/);
          } else {
            i.eatWhile(/\d/);
          }
          return "number";
        }
        if (/\w/.test(s)) {
          i.eatWhile(/\w/);
          if (i.eat(":")) {
            return "tag";
          } else {
            return (r = a[i.current().toLowerCase()]) || null;
          }
        }
        for (var c = 0; c < l.length; c++) {
          if (r = l[c](s, i, b)) {
            return r;
          }
        }
      },
      languageData: {
        commentTokens: {
          line: e,
          block: {
            open: "/*",
            close: "*/"
          }
        }
      }
    };
  }
  let a = t("x86");
  let n = t("arm");
  require.r(exports);
  require.d(exports, {
    gas: function () {
      return a;
    },
    gasArm: function () {
      return n;
    }
  });
}