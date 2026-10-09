// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactMarkdownProcessor'
// - Resolved require(620402) to 'react-markdown-processor'
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'l' to 'markdownGfmExtensions'
// - Resolved require(775055) to 'markdown-gfm-extensions'
// - Renamed variable 'o' to 'micromarkMatterExtension'
// - Resolved require(306788) to 'micromark-matter-extension'
// - Renamed variable 's' to 'emojiEmoticonReplacer'
// - Resolved require(656896) to 'emoji-emoticon-replacer'
// - Renamed variable 'a' to 'headingSlugGenerator'
// - Resolved require(398219) to 'heading-slug-generator'
// - Renamed variable 'd' to 'htmlContentFilter'
// - Resolved require(172223) to 'html-content-filter'
// - Renamed variable 'p' to 'hastRawHtmlParser'
// - Resolved require(979965) to 'hast-raw-html-parser'
// - Renamed variable 'c' to 'syntaxHighlightProcessor'
// - Resolved require(945784) to 'syntax-highlight-processor'
// - Resolved require(351134) to 'empty-module-export_3'
// - Renamed variable 'u' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'UG' to 'reactMarkdown' (module 620402)
// - Updated imported property 'Z' to 'initGfmExtensions' (module 775055)
// - Updated imported property 'Z' to 'createEmojiReplacer' (module 656896)
// - Updated imported property 'Z' to 'matterExtension' (module 306788)
// - Updated imported property 'Z' to 'parseRawHtml' (module 979965)
// - Updated imported property 'Z' to 'headingIdGenerator' (module 398219)
// - Updated imported property 'Z' to 'createHighlighter' (module 945784)
// - Updated imported property 'Z' to 'filterHtmlContent' (module 172223)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-markdown-previewer.17ba5168.js
         * chunkId: 69431
         * moduleId: 767945
         */
module.exports = function (module, exports, require) {
  var reactMarkdownProcessor = require("react-markdown-processor") /*id: 620402*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var markdownGfmExtensions = require("markdown-gfm-extensions") /*id: 775055*/;
  var micromarkMatterExtension = require("micromark-matter-extension") /*id: 306788*/;
  var emojiEmoticonReplacer = require("emoji-emoticon-replacer") /*id: 656896*/;
  var headingSlugGenerator = require("heading-slug-generator") /*id: 398219*/;
  var htmlContentFilter = require("html-content-filter") /*id: 172223*/;
  var hastRawHtmlParser = require("hast-raw-html-parser") /*id: 979965*/;
  var syntaxHighlightProcessor = require("syntax-highlight-processor") /*id: 945784*/;
  require("empty-module-export_3") /*id: 351134*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => e.replace(/https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/([^)"]+\.(?:png|jpg|jpeg|gif|bmp|webp|svg))/gi, (e, n, t, i, r) => `https://raw.githubusercontent.com/${n}/${t}/${i}/${r}`);
  let h = {
    "[!NOTE]": "note",
    "[!TIP]": "tip",
    "[!WARNING]": "warning",
    "[!IMPORTANT]": "important",
    "[!CAUTION]": "caution"
  };
  let w = e => {
    let {
      repoTitle: n = "",
      onClickMdUrl: t,
      value: w,
      enableGithubRelatedExts: g = false,
      theme: f = "light"
    } = e;
    return reactJsxRuntimeCoreReexport.jsx("div", {
      className: `
        markdown-body
        markdown-previewer-W3z_8O
      `,
      "data-theme": f,
      children: reactJsxRuntimeCoreReexport.jsx(reactMarkdownProcessor.reactMarkdown, {
        remarkPlugins: g ? [markdownGfmExtensions.initGfmExtensions, emojiEmoticonReplacer.createEmojiReplacer, micromarkMatterExtension.matterExtension] : [emojiEmoticonReplacer.createEmojiReplacer, micromarkMatterExtension.matterExtension],
        rehypePlugins: [hastRawHtmlParser.parseRawHtml, headingSlugGenerator.headingIdGenerator, syntaxHighlightProcessor.createHighlighter, htmlContentFilter.filterHtmlContent],
        components: {
          a(e) {
            let {
              href: n = "",
              children: i
            } = e;
            if (n.startsWith("#")) {
              return reactJsxRuntimeCoreReexport.jsx("a", {
                href: n,
                onClick: e => {
                  e.preventDefault();
                  let t = document.getElementById(`${n.slice(1)}`);
                  if (t != null) {
                    t.scrollIntoView({
                      behavior: "smooth"
                    });
                  }
                },
                children: i
              });
            } else if (n.startsWith("http") || /\.(png|jpe?g|gif|bmp|webp|svg)$/i.test(n)) {
              return reactJsxRuntimeCoreReexport.jsx("a", {
                onClick: () => window.open(n, "_blank", "noopener,noreferrer"),
                children: i
              });
            } else {
              return reactJsxRuntimeCoreReexport.jsx("a", {
                href: n,
                onClick: e => {
                  e.preventDefault();
                  if (t != null) {
                    t(n);
                  }
                },
                children: i
              });
            }
          },
          blockquote(e) {
            let {
              children: n
            } = e;
            if (!g) {
              return reactJsxRuntimeCoreReexport.jsx("blockquote", {
                children: n
              });
            }
            try {
              let e = reactCoreLibraryReexport.Children.toArray(n);
              if (e.length > 1 && reactCoreLibraryReexport.isValidElement(e == null ? undefined : e[1]) && e[1]?.type === "p") {
                let n = e[1];
                let t = (n == null ? undefined : n.props) && typeof n.props == "object" && "children" in n.props ? n == null ? undefined : n.props?.children : null;
                if (typeof t == "string") {
                  let e = Object.keys(h).find(e => t.replace(/\s+/g, "").toUpperCase().startsWith(e));
                  if (e) {
                    let n = t.slice(e.length).trim();
                    let i = h[e];
                    return reactJsxRuntimeCoreReexport.jsxs("div", {
                      className: `
                          markdown-alert
                          markdown-alert-${i}
                        `,
                      children: [reactJsxRuntimeCoreReexport.jsx("p", {
                        className: "markdown-alert-title",
                        children: i.charAt(0).toUpperCase() + i.slice(1)
                      }), reactJsxRuntimeCoreReexport.jsx("p", {
                        children: n
                      })]
                    });
                  }
                }
              }
            } catch (e) {}
            return reactJsxRuntimeCoreReexport.jsx("blockquote", {
              children: n
            });
          }
        },
        urlTransform: e => {
          if (e.startsWith("http") || !g) {
            return e;
          }
          let [t, i] = e.split("?");
          if (/\.(png|jpe?g|gif|bmp|webp|svg)$/i.test(t)) {
            return `https://raw.githubusercontent.com/${n}/master/${t}${i ? `?${i}` : ""}`;
          } else {
            return _(e);
          }
        },
        children: w
      })
    });
  };
  require.d(exports, {
    MarkdownPreviewer: function () {
      return w;
    }
  });
}