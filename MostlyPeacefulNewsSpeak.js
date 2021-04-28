/*
MostlyPeacefulNewsSpeak by m1ping April 27, 2021 - based on Bullshit.js: https://mourner.github.io/bullshit.js/

save this line as a bookmark to translate into 2020 media compliant Mostly Peaceful framing:
javascript:(function(){var d=document,s=d.createElement('script');s.src='https://raw.githubusercontent.com/m1ping/MostlyPeacefulNewsSpeak/main/MostlyPeacefulNewsSpeak.js';d.body.appendChild(s);}())

gets VM836:1 Cross-Origin Read Blocking (CORB) errors when using in Chrome
*/

!(function () {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    var t = (function (e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
    })(function (t) {
        /**
         * findAndReplaceDOMText v 0.4.6
         * @author James Padolsey http://james.padolsey.com
         * @license http://unlicense.org/UNLICENSE
         *
         * Matches the text of a DOM node against a regular expression
         * and replaces each match (or node-separated portions of the match)
         * in the specified element.
         */ var n, i;
        (n = e),
            (i = function () {
                var e = "retain",
                    t = document,
                    n = {}.hasOwnProperty;
                function i() {
                    return r.apply(null, arguments) || a.apply(null, arguments);
                }
                function r(e, t, n, r, o) {
                    if (t && !t.nodeType && arguments.length <= 2) return !1;
                    var s,
                        l = "function" == typeof n;
                    l &&
                        ((s = n),
                        (n = function (e, t) {
                            return s(e.text, t.startIndex);
                        }));
                    var d = a(t, {
                        find: e,
                        wrap: l ? null : n,
                        replace: l ? n : "$" + (r || "&"),
                        prepMatch: function (e, t) {
                            if (!e[0]) throw "findAndReplaceDOMText cannot handle zero-length matches";
                            if (r > 0) {
                                var n = e[r];
                                (e.index += e[0].indexOf(n)), (e[0] = n);
                            }
                            return (e.endIndex = e.index + e[0].length), (e.startIndex = e.index), (e.index = t), e;
                        },
                        filterElements: o,
                    });
                    return (
                        (i.revert = function () {
                            return d.revert();
                        }),
                        !0
                    );
                }
                function a(e, t) {
                    return new o(e, t);
                }
                function o(t, r) {
                    var a = r.preset && i.PRESETS[r.preset];
                    if (((r.portionMode = r.portionMode || e), a)) for (var o in a) n.call(a, o) && !n.call(r, o) && (r[o] = a[o]);
                    (this.node = t), (this.options = r), (this.prepMatch = r.prepMatch || this.prepMatch), (this.reverts = []), (this.matches = this.search()), this.matches.length && this.processMatches();
                }
                return (
                    (i.NON_PROSE_ELEMENTS = { br: 1, hr: 1, script: 1, style: 1, img: 1, video: 1, audio: 1, canvas: 1, svg: 1, map: 1, object: 1, input: 1, textarea: 1, select: 1, option: 1, optgroup: 1, button: 1 }),
                    (i.NON_CONTIGUOUS_PROSE_ELEMENTS = {
                        address: 1,
                        article: 1,
                        aside: 1,
                        blockquote: 1,
                        dd: 1,
                        div: 1,
                        dl: 1,
                        fieldset: 1,
                        figcaption: 1,
                        figure: 1,
                        footer: 1,
                        form: 1,
                        h1: 1,
                        h2: 1,
                        h3: 1,
                        h4: 1,
                        h5: 1,
                        h6: 1,
                        header: 1,
                        hgroup: 1,
                        hr: 1,
                        main: 1,
                        nav: 1,
                        noscript: 1,
                        ol: 1,
                        output: 1,
                        p: 1,
                        pre: 1,
                        section: 1,
                        ul: 1,
                        br: 1,
                        li: 1,
                        summary: 1,
                        dt: 1,
                        details: 1,
                        rp: 1,
                        rt: 1,
                        rtc: 1,
                        script: 1,
                        style: 1,
                        img: 1,
                        video: 1,
                        audio: 1,
                        canvas: 1,
                        svg: 1,
                        map: 1,
                        object: 1,
                        input: 1,
                        textarea: 1,
                        select: 1,
                        option: 1,
                        optgroup: 1,
                        button: 1,
                        table: 1,
                        tbody: 1,
                        thead: 1,
                        th: 1,
                        tr: 1,
                        td: 1,
                        caption: 1,
                        col: 1,
                        tfoot: 1,
                        colgroup: 1,
                    }),
                    (i.NON_INLINE_PROSE = function (e) {
                        return n.call(i.NON_CONTIGUOUS_PROSE_ELEMENTS, e.nodeName.toLowerCase());
                    }),
                    (i.PRESETS = {
                        prose: {
                            forceContext: i.NON_INLINE_PROSE,
                            filterElements: function (e) {
                                return !n.call(i.NON_PROSE_ELEMENTS, e.nodeName.toLowerCase());
                            },
                        },
                    }),
                    (i.Finder = o),
                    (o.prototype = {
                        search: function () {
                            var e,
                                t = 0,
                                n = 0,
                                i = this.options.find,
                                r = this.getAggregateText(),
                                a = [],
                                o = this;
                            return (
                                (i = "string" == typeof i ? RegExp(String(i).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g") : i),
                                (function r(s) {
                                    for (var l = 0, d = s.length; l < d; ++l) {
                                        var c = s[l];
                                        if ("string" == typeof c) {
                                            if (i.global) for (; (e = i.exec(c)); ) a.push(o.prepMatch(e, t++, n));
                                            else (e = c.match(i)) && a.push(o.prepMatch(e, 0, n));
                                            n += c.length;
                                        } else r(c);
                                    }
                                })(r),
                                a
                            );
                        },
                        prepMatch: function (e, t, n) {
                            if (!e[0]) throw new Error("findAndReplaceDOMText cannot handle zero-length matches");
                            return (e.endIndex = n + e.index + e[0].length), (e.startIndex = n + e.index), (e.index = t), e;
                        },
                        getAggregateText: function () {
                            var e = this.options.filterElements,
                                t = this.options.forceContext;
                            return (function n(i) {
                                if (i.nodeType === Node.TEXT_NODE) return [i.data];
                                if (e && !e(i)) return [];
                                var r = [""],
                                    a = 0;
                                if ((i = i.firstChild))
                                    do {
                                        if (i.nodeType !== Node.TEXT_NODE) {
                                            var o = n(i);
                                            t && i.nodeType === Node.ELEMENT_NODE && (!0 === t || t(i)) ? ((r[++a] = o), (r[++a] = "")) : ("string" == typeof o[0] && (r[a] += o.shift()), o.length && ((r[++a] = o), (r[++a] = "")));
                                        } else r[a] += i.data;
                                    } while ((i = i.nextSibling));
                                return r;
                            })(this.node);
                        },
                        processMatches: function () {
                            var e,
                                t,
                                n,
                                i = this.matches,
                                r = this.node,
                                a = this.options.filterElements,
                                o = [],
                                s = r,
                                l = i.shift(),
                                d = 0,
                                c = 0,
                                p = [r];
                            e: for (;;) {
                                if (
                                    (s.nodeType === Node.TEXT_NODE &&
                                        (!t && s.length + d >= l.endIndex
                                            ? (t = {
                                                  node: s,
                                                  index: c++,
                                                  text: s.data.substring(l.startIndex - d, l.endIndex - d),
                                                  indexInMatch: 0 === d ? 0 : d - l.startIndex,
                                                  indexInNode: l.startIndex - d,
                                                  endIndexInNode: l.endIndex - d,
                                                  isEnd: !0,
                                              })
                                            : e && o.push({ node: s, index: c++, text: s.data, indexInMatch: d - l.startIndex, indexInNode: 0 }),
                                        !e &&
                                            s.length + d > l.startIndex &&
                                            (e = { node: s, index: c++, indexInMatch: 0, indexInNode: l.startIndex - d, endIndexInNode: l.endIndex - d, text: s.data.substring(l.startIndex - d, l.endIndex - d) }),
                                        (d += s.data.length)),
                                    (n = s.nodeType === Node.ELEMENT_NODE && a && !a(s)),
                                    e && t)
                                ) {
                                    if (((s = this.replaceMatch(l, e, o, t)), (d -= t.node.data.length - t.endIndexInNode), (e = null), (t = null), (o = []), (c = 0), !(l = i.shift()))) break;
                                } else if (!n && (s.firstChild || s.nextSibling)) {
                                    s.firstChild ? (p.push(s), (s = s.firstChild)) : (s = s.nextSibling);
                                    continue;
                                }
                                for (;;) {
                                    if (s.nextSibling) {
                                        s = s.nextSibling;
                                        break;
                                    }
                                    if ((s = p.pop()) === r) break e;
                                }
                            }
                        },
                        revert: function () {
                            for (var e = this.reverts.length; e--; ) this.reverts[e]();
                            this.reverts = [];
                        },
                        prepareReplacementString: function (e, t, n) {
                            var i = this.options.portionMode;
                            return "first" === i && t.indexInMatch > 0
                                ? ""
                                : ((e = e.replace(/\$(\d+|&|`|')/g, function (e, t) {
                                      var i;
                                      switch (t) {
                                          case "&":
                                              i = n[0];
                                              break;
                                          case "`":
                                              i = n.input.substring(0, n.startIndex);
                                              break;
                                          case "'":
                                              i = n.input.substring(n.endIndex);
                                              break;
                                          default:
                                              i = n[+t] || "";
                                      }
                                      return i;
                                  })),
                                  "first" === i ? e : t.isEnd ? e.substring(t.indexInMatch) : e.substring(t.indexInMatch, t.indexInMatch + t.text.length));
                        },
                        getPortionReplacementNode: function (e, n) {
                            var i = this.options.replace || "$&",
                                r = this.options.wrap,
                                a = this.options.wrapClass;
                            if (r && r.nodeType) {
                                var o = t.createElement("div");
                                (o.innerHTML = r.outerHTML || new XMLSerializer().serializeToString(r)), (r = o.firstChild);
                            }
                            if ("function" == typeof i) return (i = i(e, n)) && i.nodeType ? i : t.createTextNode(String(i));
                            var s = "string" == typeof r ? t.createElement(r) : r;
                            return s && a && (s.className = a), (i = t.createTextNode(this.prepareReplacementString(i, e, n))).data && s ? (s.appendChild(i), s) : i;
                        },
                        replaceMatch: function (e, n, i, r) {
                            var a,
                                o,
                                s = n.node,
                                l = r.node;
                            if (s === l) {
                                var d = s;
                                n.indexInNode > 0 && ((a = t.createTextNode(d.data.substring(0, n.indexInNode))), d.parentNode.insertBefore(a, d));
                                var c = this.getPortionReplacementNode(r, e);
                                return (
                                    d.parentNode.insertBefore(c, d),
                                    r.endIndexInNode < d.length && ((o = t.createTextNode(d.data.substring(r.endIndexInNode))), d.parentNode.insertBefore(o, d)),
                                    d.parentNode.removeChild(d),
                                    this.reverts.push(function () {
                                        a === c.previousSibling && a.parentNode.removeChild(a), o === c.nextSibling && o.parentNode.removeChild(o), c.parentNode.replaceChild(d, c);
                                    }),
                                    c
                                );
                            }
                            (a = t.createTextNode(s.data.substring(0, n.indexInNode))), (o = t.createTextNode(l.data.substring(r.endIndexInNode)));
                            for (var p = this.getPortionReplacementNode(n, e), u = [], h = 0, g = i.length; h < g; ++h) {
                                var f = i[h],
                                    m = this.getPortionReplacementNode(f, e);
                                f.node.parentNode.replaceChild(m, f.node),
                                    this.reverts.push(
                                        (function (e, t) {
                                            return function () {
                                                t.parentNode.replaceChild(e.node, t);
                                            };
                                        })(f, m)
                                    ),
                                    u.push(m);
                            }
                            var b = this.getPortionReplacementNode(r, e);
                            return (
                                s.parentNode.insertBefore(a, s),
                                s.parentNode.insertBefore(p, s),
                                s.parentNode.removeChild(s),
                                l.parentNode.insertBefore(b, l),
                                l.parentNode.insertBefore(o, l),
                                l.parentNode.removeChild(l),
                                this.reverts.push(function () {
                                    a.parentNode.removeChild(a), p.parentNode.replaceChild(s, p), o.parentNode.removeChild(o), b.parentNode.replaceChild(l, b);
                                }),
                                b
                            );
                        },
                    }),
                    i
                );
            }),
            t.exports ? (t.exports = i()) : (n.findAndReplaceDOMText = i());
    });
    var n = new RegExp(
        "\\b(" +
            [
                //list of words to replace
		"ambush",
		"ambushed",
		"ambushing",
		"assault",
		"assaulted",
		"assaulting",
		"assaults",
		"attack",
		"attacked",
		"attacking",
		"attacks",
		"battle",
		"battled",
		"battling",
		"battles",
		"bombed",
		"bombing",
		"bombings",
		"brawl",
		"brawled",
		"confrontation",
		"counterattack",
		"counterattacks",
		"fight",
		"fighting",
		"fights",
		"fire bombing",
		"invade",
		"invaded",
		"invasion",
		"invasions",
		"massacre",
		"massacred",
		"murder",
		"murdered",
		"rampage",
		"ransack",
		"ransacked",
		"raze",
		"razed",
		"riot",
		"rioter",
		"riots",
	    	"siege",
		"vandalized",
		"violent public disturbance",
		"war",
		"wars",
            ].join("|") +
            ")\\b",
        "gi"
    );
    t(document.body, {
        find: n,
        replace: function (e) {
            var t = e.text,
                n = t.charAt(0),
                i = t.length - 1,
                //r = (n === n.toUpperCase() ? "B" : "b") + "ullshit";
                r = (n === n.toUpperCase() ? "M" : "m") + "ostly peaceful protest";
            "ing" === t.substr(i - 2)
                ? (r += "ing")
                : "s" !== t.charAt(i - 1) && "s" === t.charAt(i)
                ? (r += "s")
                : "e" !== t.charAt(i - 2) && "ed" === t.substr(i - 1)
                ? (r += "ed")
                : "o" !== t.charAt(i - 2) && "or" === t.substr(i - 1) && (r += "ter");
            var a = document.createElement("abbr");
            return (a.style.color = "red"), (a.title = t), (a.innerHTML = r), a;
        },
        preset: "prose",
    });
})();
