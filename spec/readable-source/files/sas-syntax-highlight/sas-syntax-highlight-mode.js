// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43353.f79044ff.js
         * chunkId: 43353
         * moduleId: 771508
         */
module.exports = function (module, exports, require) {
  var r = {};
  var s = {
    eq: "operator",
    lt: "operator",
    le: "operator",
    gt: "operator",
    ge: "operator",
    in: "operator",
    ne: "operator",
    or: "operator"
  };
  var o = /(<=|>=|!=|<>)/;
  var a = /[=\(:\),{}.*<>+\-\/^\[\]]/;
  function i(e, t, n) {
    if (n) {
      var s = t.split(" ");
      var o = 0;
      for (; o < s.length; o++) {
        r[s[o]] = {
          style: e,
          state: n
        };
      }
    }
  }
  i("def", "stack pgm view source debug nesting nolist", ["inDataStep"]);
  i("def", "if while until for do do; end end; then else cancel", ["inDataStep"]);
  i("def", "label format _n_ _error_", ["inDataStep"]);
  i("def", "ALTER BUFNO BUFSIZE CNTLLEV COMPRESS DLDMGACTION ENCRYPT ENCRYPTKEY EXTENDOBSCOUNTER GENMAX GENNUM INDEX LABEL OBSBUF OUTREP PW PWREQ READ REPEMPTY REPLACE REUSE ROLE SORTEDBY SPILL TOBSNO TYPE WRITE FILECLOSE FIRSTOBS IN OBS POINTOBS WHERE WHEREUP IDXNAME IDXWHERE DROP KEEP RENAME", ["inDataStep"]);
  i("def", "filevar finfo finv fipname fipnamel fipstate first firstobs floor", ["inDataStep"]);
  i("def", "varfmt varinfmt varlabel varlen varname varnum varray varrayx vartype verify vformat vformatd vformatdx vformatn vformatnx vformatw vformatwx vformatx vinarray vinarrayx vinformat vinformatd vinformatdx vinformatn vinformatnx vinformatw vinformatwx vinformatx vlabel vlabelx vlength vlengthx vname vnamex vnferr vtype vtypex weekday", ["inDataStep"]);
  i("def", "zipfips zipname zipnamel zipstate", ["inDataStep"]);
  i("def", "put putc putn", ["inDataStep"]);
  i("builtin", "data run", ["inDataStep"]);
  i("def", "data", ["inProc"]);
  i("def", "%if %end %end; %else %else; %do %do; %then", ["inMacro"]);
  i("builtin", "proc run; quit; libname filename %macro %mend option options", ["ALL"]);
  i("def", "footnote title libname ods", ["ALL"]);
  i("def", "%let %put %global %sysfunc %eval ", ["ALL"]);
  i("variable", "&sysbuffr &syscc &syscharwidth &syscmd &sysdate &sysdate9 &sysday &sysdevic &sysdmg &sysdsn &sysencoding &sysenv &syserr &syserrortext &sysfilrc &syshostname &sysindex &sysinfo &sysjobid &syslast &syslckrc &syslibrc &syslogapplname &sysmacroname &sysmenv &sysmsg &sysncpu &sysodspath &sysparm &syspbuff &sysprocessid &sysprocessname &sysprocname &sysrc &sysscp &sysscpl &sysscpl &syssite &sysstartid &sysstartname &systcpiphostname &systime &sysuserid &sysver &sysvlong &sysvlong4 &syswarningtext", ["ALL"]);
  i("def", "source2 nosource2 page pageno pagesize", ["ALL"]);
  i("def", "_all_ _character_ _cmd_ _freq_ _i_ _infile_ _last_ _msg_ _null_ _numeric_ _temporary_ _type_ abort abs addr adjrsq airy alpha alter altlog altprint and arcos array arsin as atan attrc attrib attrn authserver autoexec awscontrol awsdef awsmenu awsmenumerge awstitle backward band base betainv between blocksize blshift bnot bor brshift bufno bufsize bxor by byerr byline byte calculated call cards cards4 catcache cbufno cdf ceil center cexist change chisq cinv class cleanup close cnonct cntllev coalesce codegen col collate collin column comamid comaux1 comaux2 comdef compbl compound compress config continue convert cos cosh cpuid create cross crosstab css curobs cv daccdb daccdbsl daccsl daccsyd dacctab dairy datalines datalines4 datejul datepart datetime day dbcslang dbcstype dclose ddfm ddm delete delimiter depdb depdbsl depsl depsyd deptab dequote descending descript design= device dflang dhms dif digamma dim dinfo display distinct dkricond dkrocond dlm dnum do dopen doptname doptnum dread drop dropnote dsname dsnferr echo else emaildlg emailid emailpw emailserver emailsys encrypt end endsas engine eof eov erf erfc error errorcheck errors exist exp fappend fclose fcol fdelete feedback fetch fetchobs fexist fget file fileclose fileexist filefmt filename fileref  fmterr fmtsearch fnonct fnote font fontalias  fopen foptname foptnum force formatted formchar formdelim formdlim forward fpoint fpos fput fread frewind frlen from fsep fuzz fwrite gaminv gamma getoption getvarc getvarn go goto group gwindow hbar hbound helpenv helploc hms honorappearance hosthelp hostprint hour hpct html hvar ibessel ibr id if index indexc indexw initcmd initstmt inner input inputc inputn inr insert int intck intnx into intrr invaliddata irr is jbessel join juldate keep kentb kurtosis label lag last lbound leave left length levels lgamma lib  library libref line linesize link list log log10 log2 logpdf logpmf logsdf lostcard lowcase lrecl ls macro macrogen maps mautosource max maxdec maxr mdy mean measures median memtype merge merror min minute missing missover mlogic mod mode model modify month mopen mort mprint mrecall msglevel msymtabmax mvarsize myy n nest netpv new news nmiss no nobatch nobs nocaps nocardimage nocenter nocharcode nocmdmac nocol nocum nodate nodbcs nodetails nodmr nodms nodmsbatch nodup nodupkey noduplicates noechoauto noequals noerrorabend noexitwindows nofullstimer noicon noimplmac noint nolist noloadlist nomiss nomlogic nomprint nomrecall nomsgcase nomstored nomultenvappl nonotes nonumber noobs noovp nopad nopercent noprint noprintinit normal norow norsasuser nosetinit  nosplash nosymbolgen note notes notitle notitles notsorted noverbose noxsync noxwait npv null number numkeys nummousekeys nway obs  on open     order ordinal otherwise out outer outp= output over ovp p(1 5 10 25 50 75 90 95 99) pad pad2  paired parm parmcards path pathdll pathname pdf peek peekc pfkey pmf point poisson poke position printer probbeta probbnml probchi probf probgam probhypr probit probnegb probnorm probsig probt procleave prt ps  pw pwreq qtr quote r ranbin rancau random ranexp rangam range ranks rannor ranpoi rantbl rantri ranuni rcorr read recfm register regr remote remove rename repeat repeated replace resolve retain return reuse reverse rewind right round rsquare rtf rtrace rtraceloc s s2 samploc sasautos sascontrol sasfrscr sasmsg sasmstore sasscript sasuser saving scan sdf second select selection separated seq serror set setcomm setot sign simple sin sinh siteinfo skewness skip sle sls sortedby sortpgm sortseq sortsize soundex  spedis splashlocation split spool sqrt start std stderr stdin stfips stimer stname stnamel stop stopover sub subgroup subpopn substr sum sumwgt symbol symbolgen symget symput sysget sysin sysleave sysmsg sysparm sysprint sysprintfont sysprod sysrc system t table tables tan tanh tapeclose tbufsize terminal test then timepart tinv  tnonct to today tol tooldef totper transformout translate trantab tranwrd trigamma trim trimn trunc truncover type unformatted uniform union until upcase update user usericon uss validate value var  weight when where while wincharset window work workinit workterm write wsum xsync xwait yearcutoff yes yyq  min max", ["inDataStep", "inProc"]);
  i("operator", "and not ", ["inDataStep", "inProc"]);
  let l = {
    name: "sas",
    startState: function () {
      return {
        inDataStep: false,
        inProc: false,
        inMacro: false,
        nextword: false,
        continueString: null,
        continueComment: false
      };
    },
    token: function (e, t) {
      if (e.eatSpace()) {
        return null;
      } else {
        return function (e, t) {
          var n;
          var i = e.next();
          if (i === "/" && e.eat("*")) {
            t.continueComment = true;
            return "comment";
          }
          if (t.continueComment === true) {
            if (i === "*" && e.peek() === "/") {
              e.next();
              t.continueComment = false;
            } else if (e.skipTo("*")) {
              e.skipTo("*");
              e.next();
              if (e.eat("/")) {
                t.continueComment = false;
              }
            } else {
              e.skipToEnd();
            }
            return "comment";
          }
          if (i == "*" && e.column() == e.indentation()) {
            e.skipToEnd();
            return "comment";
          }
          var l = i + e.peek();
          if ((i === "\"" || i === "'") && !t.continueString) {
            t.continueString = i;
            return "string";
          }
          if (t.continueString) {
            if (t.continueString == i) {
              t.continueString = null;
            } else if (e.skipTo(t.continueString)) {
              e.next();
              t.continueString = null;
            } else {
              e.skipToEnd();
            }
            return "string";
          }
          if (t.continueString !== null && e.eol()) {
            if (!e.skipTo(t.continueString)) {
              e.skipToEnd();
            }
            return "string";
          }
          if (/[\d\.]/.test(i)) {
            if (i === ".") {
              e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/);
            } else if (i === "0") {
              if (!e.match(/^[xX][0-9a-fA-F]+/)) {
                e.match(/^0[0-7]+/);
              }
            } else {
              e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/);
            }
            return "number";
          }
          if (o.test(i + e.peek())) {
            e.next();
            return "operator";
          } else if (s.hasOwnProperty(l)) {
            e.next();
            if (e.peek() === " ") {
              return s[l.toLowerCase()];
            }
          } else if (a.test(i)) {
            return "operator";
          }
          if (e.match(/[%&;\w]+/, false) != null) {
            n = i + e.match(/[%&;\w]+/, true);
            if (/&/.test(n)) {
              return "variable";
            }
          } else {
            n = i;
          }
          if (t.nextword) {
            e.match(/[\w]+/);
            if (e.peek() === ".") {
              e.skipTo(" ");
            }
            t.nextword = false;
            return "variableName.special";
          }
          n = n.toLowerCase();
          if (t.inDataStep) {
            if (n === "run;" || e.match(/run\s;/)) {
              t.inDataStep = false;
              return "builtin";
            }
            if (n && e.next() === ".") {
              if (/\w/.test(e.peek())) {
                return "variableName.special";
              } else {
                return "variable";
              }
            }
            if (n && r.hasOwnProperty(n) && (r[n].state.indexOf("inDataStep") !== -1 || r[n].state.indexOf("ALL") !== -1)) {
              if (e.start < e.pos) {
                e.backUp(e.pos - e.start);
              }
              for (var c = 0; c < n.length; ++c) {
                e.next();
              }
              return r[n].style;
            }
          }
          if (t.inProc) {
            if (n === "run;" || n === "quit;") {
              t.inProc = false;
              return "builtin";
            }
            if (n && r.hasOwnProperty(n) && (r[n].state.indexOf("inProc") !== -1 || r[n].state.indexOf("ALL") !== -1)) {
              e.match(/[\w]+/);
              return r[n].style;
            }
          }
          if (t.inMacro) {
            if (n === "%mend") {
              if (e.peek() === ";") {
                e.next();
              }
              t.inMacro = false;
              return "builtin";
            } else if (n && r.hasOwnProperty(n) && (r[n].state.indexOf("inMacro") !== -1 || r[n].state.indexOf("ALL") !== -1)) {
              e.match(/[\w]+/);
              return r[n].style;
            } else {
              return "atom";
            }
          }
          if (n && r.hasOwnProperty(n)) {
            e.backUp(1);
            e.match(/[\w]+/);
            if (n === "data" && /=/.test(e.peek()) === false) {
              t.inDataStep = true;
              t.nextword = true;
              return "builtin";
            }
            if (n === "proc") {
              t.inProc = true;
              t.nextword = true;
              return "builtin";
            }
            if (n === "%macro") {
              t.inMacro = true;
              t.nextword = true;
              return "builtin";
            }
            if (/title[1-9]/.test(n)) {
              return "def";
            }
            if (n === "footnote") {
              e.eat(/[1-9]/);
              return "def";
            }
            if (t.inDataStep === true && r[n].state.indexOf("inDataStep") !== -1 || t.inProc === true && r[n].state.indexOf("inProc") !== -1 || t.inMacro === true && r[n].state.indexOf("inMacro") !== -1 || r[n].state.indexOf("ALL") !== -1) {
              return r[n].style;
            }
          }
          return null;
        }(e, t);
      }
    },
    languageData: {
      commentTokens: {
        block: {
          open: "/*",
          close: "*/"
        }
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    sas: function () {
      return l;
    }
  });
}