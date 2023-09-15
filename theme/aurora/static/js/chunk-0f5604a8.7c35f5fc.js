(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0f5604a8"], {
    "004a": function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
            return i
        }
        )),
        n.d(e, "b", (function() {
            return r
        }
        )),
        n.d(e, "a", (function() {
            return o
        }
        ));
        var s = n("77fe")
          , a = n("12cb")
          , i = new s["a"]({
            ALL: [0, a["a"].t("全部")],
            PERIOD: [1, a["a"].t("按周期")],
            ONE_TIME: [2, a["a"].t("按流量")]
        })
          , r = new s["a"]({
            NUMBER: [1, a["a"].t("折扣金额")],
            PERCENT: [2, a["a"].t("折扣百分比")]
        })
          , o = new s["a"]({
            UNBUY: [1, a["a"].t("未购买")],
            PERIOD: [2, a["a"].t("周期性订阅")],
            ONE_TIME: [3, a["a"].t("一次性订阅")]
        })
    },
    "1dd1": function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return i
        }
        )),
        n.d(e, "a", (function() {
            return r
        }
        )),
        n.d(e, "f", (function() {
            return o
        }
        )),
        n.d(e, "e", (function() {
            return c
        }
        )),
        n.d(e, "c", (function() {
            return u
        }
        )),
        n.d(e, "d", (function() {
            return l
        }
        ));
        var s = n("54d7")
          , a = n("8c8a");
        function i() {
            return Object(a["a"])({
                url: s["m"] + "/api/v1/user/plan/fetch",
                method: "get"
            })
        }
        function r(t) {
            return Object(a["a"])({
                url: s["m"] + "/api/v1/user/plan/fetch?id=".concat(t),
                method: "get"
            })
        }
        function o(t) {
            return Object(a["a"])({
                url: s["m"] + "/api/v1/user/coupon/check",
                method: "post",
                data: t
            })
        }
        function c(t) {
            return Object(a["a"])({
                url: s["m"] + "/api/v1/user/order/save",
                method: "post",
                params: t
            })
        }
        function u() {
            return Object(a["a"])({
                url: s["m"] + "/api/v1/user/server/fetch",
                method: "get"
            })
        }
        function l() {
            return Object(a["a"])({
                url: s["m"] + "/api/v1/user/getSubscribe",
                method: "get"
            })
        }
    },
    "417f": function(t, e, n) {},
    "77fe": function(t, e, n) {
        "use strict";
        var s = n("d4ec")
          , a = n("bee2")
          , i = (n("d3b7"),
        n("159b"),
        n("b64b"),
        n("d81d"),
        n("7db0"),
        function() {
            function t(e) {
                Object(s["a"])(this, t),
                this.defination = e,
                this.parseDefination()
            }
            return Object(a["a"])(t, [{
                key: "parseDefination",
                value: function() {
                    var t = this;
                    Object.keys(this.defination).forEach((function(e) {
                        t[e] = t.defination[e][0]
                    }
                    ))
                }
            }, {
                key: "toArray",
                value: function() {
                    var t = this
                      , e = Object.keys(this.defination).map((function(e) {
                        var n = t.defination[e];
                        return {
                            value: n[0],
                            label: n[1]
                        }
                    }
                    ));
                    return e
                }
            }, {
                key: "getLabel",
                value: function(t) {
                    var e, n;
                    return null !== (e = null === (n = this.toArray().find((function(e) {
                        return String(e.value) === String(t)
                    }
                    ))) || void 0 === n ? void 0 : n.label) && void 0 !== e ? e : ""
                }
            }]),
            t
        }());
        e["a"] = i
    },
    e78e: function(t, e, n) {
        "use strict";
        n("417f")
    },
    f252: function(t, e, n) {},
    f4e7: function(t, e, n) {
        "use strict";
        var s = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "subscribe-info",
                class: {
                    "is-reverse": t.reverse
                }
            }, [n("div", {
                staticClass: "panel-box col-1"
            }, [n("div", {
                staticClass: "panel-header"
            }, [n("span", {
                staticClass: "tit"
            }, [t._v(t._s(t.$t("我的订阅")))])]), t.comboType ? n("div", {
                staticClass: "panel-body subs-box use-shadow"
            }, [t.comboType === t.ComboEnum.PERIOD || t.comboType === t.ComboEnum.ONE_TIME ? [n("div", {
                staticClass: "subs-msg"
            }, [n("div", {
                staticClass: "t1"
            }, [t._v(t._s(t.subscribe.plan.name))]), t.comboType === t.ComboEnum.PERIOD ? [t.expiredResidue > 0 ? n("p", {
                staticClass: "t2"
            }, [t._v(" " + t._s(t.$t("于X到期，距离到期还有X天，已用流量将在X日后重置", {
                expiredDate: t.getExpiredDate(),
                expiredResidue: t.expiredResidueDuration,
                resetDay: t.subscribe.reset_day
            })) + " ")]) : n("p", {
                staticClass: "t2 re"
            }, [t._v(t._s(t.$t("已过期")))]), n("div", {
                class: {
                    blur: t.expiredResidue <= 0
                }
            }, [n("a-progress", {
                staticClass: "prog",
                attrs: {
                    "stroke-linecap": "square",
                    percent: t.percent,
                    "stroke-width": 16
                }
            }), n("p", {
                staticClass: "t3"
            }, [t._v(" " + t._s(t.$t("已用")) + " "), n("b", [t._v(t._s(t._f("flow")(t.usedFlow)))]), t._v(" / " + t._s(t.$t("总计")) + " "), n("b", [t._v(t._s(t._f("flow")(t.allFlow)))])])], 1)] : [t.leftFlow > 0 ? n("p", {
                staticClass: "t2"
            }, [t._v(t._s(t.$t("一次性订阅的流量没有时间限制")))]) : n("p", {
                staticClass: "t2"
            }, [t._v(t._s(t.$t("流量已用尽，请续费订阅")))]), n("a-progress", {
                staticClass: "prog",
                attrs: {
                    "stroke-linecap": "square",
                    percent: t.percent,
                    "stroke-width": 16
                }
            }), n("p", {
                staticClass: "t3"
            }, [t._v(" " + t._s(t.$t("已用")) + " "), n("b", [t._v(t._s(t._f("flow")(t.usedFlow)))]), t._v(" / " + t._s(t.$t("总计")) + " "), n("b", [t._v(t._s(t._f("flow")(t.allFlow)))])])]], 2), n("div", {
                staticClass: "subs-btns"
            }, [t.renewable ? n("a-tooltip", {
                attrs: {
                    title: t.$t("续费只会延长到期时间，并不会重置流量。"),
                    placement: "bottom"
                }
            }, [n("a-button", {
                staticClass: "btn-2",
                attrs: {
                    size: "large"
                },
                on: {
                    click: function(e) {
                        return t.onBuySubs()
                    }
                }
            }, [n("svg-icon", {
                attrs: {
                    name: "calendar"
                }
            }), t._v(" " + t._s(t.$t("续费订阅")) + " ")], 1)], 1) : n("a-button", {
                staticClass: "btn-2",
                attrs: {
                    size: "large"
                },
                on: {
                    click: function(e) {
                        return t.onBuySubs()
                    }
                }
            }, [n("svg-icon", {
                attrs: {
                    name: "calendar"
                }
            }), t._v(" " + t._s(t.$t("购买订阅")) + " ")], 1), n("a-tooltip", {
                attrs: {
                    title: t.$t("重置流量包只会重置流量，不会延长到期时间，也不会改变重置日期。"),
                    placement: "bottom"
                }
            }, [t.showResetButton ? n("a-button", {
                staticClass: "btn-2",
                attrs: {
                    size: "large"
                },
                on: {
                    click: function(e) {
                        return t.onBuySubs("reset")
                    }
                }
            }, [n("svg-icon", {
                attrs: {
                    name: "arrow-clockwise"
                }
            }), t._v(" " + t._s(t.$t("重置流量包")) + " ")], 1) : t._e()], 1), n("a-button", {
                staticClass: "btn-3",
                attrs: {
                    size: "large"
                },
                on: {
                    click: function(e) {
                        return t.$router.push("/stage/knowledge")
                    }
                }
            }, [n("svg-icon", {
                attrs: {
                    name: "book"
                }
            }), t._v(" " + t._s(t.$t("查看教程")) + " ")], 1)], 1)] : [n("div", {
                staticClass: "subs-msg",
                staticStyle: {
                    margin: "50px 0 30px"
                }
            }, [n("a-empty", {
                attrs: {
                    image: t.simpleImage,
                    description: t.$t("您还没有购买订阅")
                }
            })], 1), n("div", {
                staticClass: "subs-btns",
                staticStyle: {
                    "text-align": "center"
                }
            }, [n("a-button", {
                staticClass: "btn-2",
                attrs: {
                    size: "large"
                },
                on: {
                    click: function(e) {
                        return t.onBuySubs()
                    }
                }
            }, [n("svg-icon", {
                attrs: {
                    name: "calendar"
                }
            }), t._v(" " + t._s(t.$t("购买订阅")) + " ")], 1), n("a-button", {
                staticClass: "btn-3",
                attrs: {
                    size: "large"
                },
                on: {
                    click: function(e) {
                        return t.$router.push("/stage/knowledge")
                    }
                }
            }, [n("svg-icon", {
                attrs: {
                    name: "book"
                }
            }), t._v(" " + t._s(t.$t("查看教程")) + " ")], 1)], 1)]], 2) : n("div", {
                staticClass: "spin-loading"
            }, [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1)]), n("div", {
                staticStyle: {
                    width: "30px"
                }
            }), n("div", {
                staticClass: "panel-box col-2"
            }, [n("div", {
                staticClass: "panel-header"
            }, [n("span", {
                staticClass: "tit"
            }, [t._v(t._s(t.$t("快速导入")))])]), t.comboType ? n("div", {
                staticClass: "panel-body import-btns use-shadow",
                class: {
                    spec: t.clientLinks.length > 0
                }
            }, [n("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-weixin",
                on: {
                    click: function(e) {
                        return t.onImport("copy")
                    }
                }
            }, [n("svg-icon", {
                attrs: {
                    name: "clipboard-text"
                }
            }), t._v(" " + t._s(t.$t("复制")) + " ")], 1), n("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-alipay",
                on: {
                    click: function(e) {
                        return t.onImport("qrcode")
                    }
                }
            }, [n("i", {
                staticClass: "metron-qrcode"
            }), t._v(" " + t._s(t.$t("二维码")) + " ")]), n("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-clash",
                on: {
                    click: function(e) {
                        return t.onImport("clash")
                    }
                }
            }, [n("i", {
                staticClass: "metron-clash"
            }), t._v(" Clash " + t._s(t.$t("订阅")) + " ")]), n("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-surge",
                on: {
                    click: function(e) {
                        return t.onImport("surge")
                    }
                }
            }, [n("i", {
                staticClass: "metron-surge"
            }), t._v(" Surge " + t._s(t.$t("订阅")) + " ")]), n("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-shadowrocket",
                on: {
                    click: function(e) {
                        return t.onImport("shadowrocket")
                    }
                }
            }, [n("i", {
                staticClass: "metron-shadowrocket"
            }), t._v(" Shadowrocket " + t._s(t.$t("订阅")) + " ")]), n("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-surfboard",
                on: {
                    click: function(e) {
                        return t.onImport("surfboard")
                    }
                }
            }, [n("i", {
                staticClass: "metron-surfboard"
            }), t._v(" Surfboard " + t._s(t.$t("订阅")) + " ")]), n("div", {
                directives: [{
                    name: "wave",
                    rawName: "v-wave"
                }],
                staticClass: "btn btn-quantumultx",
                on: {
                    click: function(e) {
                        return t.onImport("quantumultx")
                    }
                }
            }, [n("i", {
                staticClass: "metron-quantumultx"
            }), t._v(" Quantumult X " + t._s(t.$t("订阅")) + " ")]), t.comboType === t.ComboEnum.UNBUY ? n("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.$t("未购买订阅")))]) : t.comboType === t.ComboEnum.PERIOD && t.expiredResidue <= 0 ? n("div", {
                staticClass: "tips"
            }, [t._v(t._s(t.$t("订阅已过期")))]) : t._e()]) : n("div", {
                staticClass: "spin-loading"
            }, [n("a-spin", {
                attrs: {
                    size: "large"
                }
            })], 1), t.comboType && t.clientLinks.length > 0 ? n("div", {
                staticClass: "client-links use-shadow",
                class: {
                    less: t.clientLinks.length <= 4,
                    one: 1 === t.clientLinks.length
                }
            }, t._l(t.clientLinks, (function(e) {
                return n("a", {
                    key: e.name,
                    staticClass: "link-item",
                    attrs: {
                        href: e.url,
                        target: "_blank"
                    }
                }, [n("svg-icon", {
                    staticClass: "icon",
                    attrs: {
                        name: e.icon
                    }
                }), n("span", {
                    staticClass: "tit"
                }, [t._v(t._s(e.name))])], 1)
            }
            )), 0) : t._e()]), n("a-modal", {
                attrs: {
                    title: t.$t("二维码"),
                    footer: null
                },
                model: {
                    value: t.qr.visible,
                    callback: function(e) {
                        t.$set(t.qr, "visible", e)
                    },
                    expression: "qr.visible"
                }
            }, [n("img", {
                staticStyle: {
                    display: "block",
                    margin: "0 auto"
                },
                attrs: {
                    src: t.qr.imgUrl,
                    width: "200"
                }
            })])], 1)
        }
          , a = []
          , i = n("c7eb")
          , r = n("1da1")
          , o = (n("4de4"),
        n("d3b7"),
        n("a15b"),
        n("b680"),
        n("a9e3"),
        n("14d9"),
        n("b0c0"),
        n("99af"),
        n("ac1f"),
        n("5319"),
        n("313d"),
        n("0eb6"),
        n("b7ef"),
        n("8bd4"),
        n("e9c4"),
        n("1dd1"))
          , c = n("004a")
          , u = function(t, e) {
            console.log(t),
            window.location.href = t;
            var n = setTimeout((function() {
                e && e()
            }
            ), 2e3);
            window.onblur = function() {
                clearTimeout(n)
            }
        }
          , l = n("5a0c")
          , d = n.n(l)
          , b = n("f248")
          , p = n.n(b)
          , v = n("f904")
          , f = n.n(v)
          , m = n("d055")
          , h = n.n(m)
          , w = (n("f252"),
        n("fc25"))
          , _ = n("d772")
          , g = n.n(_)
          , C = n("54d7");
        d.a.extend(g.a);
        var k = {
            name: "SubscribeInfo",
            props: {
                reverse: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    subscribe: null,
                    simpleImage: "",
                    qr: {
                        visible: !1,
                        imgUrl: ""
                    },
                    ComboEnum: c["a"]
                }
            },
            computed: {
                clientLinks: function() {
                    return [{
                        name: "iOS",
                        icon: "apple-logo",
                        url: C["f"]
                    }, {
                        name: "Android",
                        icon: "bug-droid",
                        url: C["e"]
                    }, {
                        name: "Windows",
                        icon: "windows-logo",
                        url: C["j"]
                    }, {
                        name: "macOS",
                        icon: "laptop",
                        url: C["h"]
                    }, {
                        name: "Openwrt",
                        icon: "broadcast",
                        url: C["i"]
                    }, {
                        name: "Linux",
                        icon: "linux-logo",
                        url: C["g"]
                    }].filter((function(t) {
                        var e;
                        return (null === (e = t.url) || void 0 === e ? void 0 : e.length) > 0
                    }
                    ))
                },
                comboType: function() {
                    return this.subscribe ? null === this.subscribe.plan ? c["a"].UNBUY : null === this.subscribe.expired_at ? c["a"].ONE_TIME : c["a"].PERIOD : null
                },
                expiredResidue: function() {
                    return this.expiredDate > 0 ? d.a.unix(this.expiredDate).diff(d()(), "second") : null
                },
                expiredResidueDuration: function() {
                    var t = this.expiredResidue;
                    if (null === t)
                        return 0;
                    if (t < 60)
                        return t + " " + this.$t("秒");
                    var e = d.a.duration(t, "seconds")
                      , n = e.years()
                      , s = e.months()
                      , a = e.days()
                      , i = e.hours()
                      , r = e.minutes();
                    return [n > 0 ? n + " " + this.$t("年") : "", s > 0 ? s + " " + this.$t("月") : "", a > 0 ? a + " " + this.$t("天") : "", i > 0 ? i + " " + this.$t("小时") : "", r > 0 ? r + " " + this.$t("分钟") : ""].filter((function(t) {
                        return t.length > 0
                    }
                    )).join(" ")
                },
                expiredDate: function() {
                    var t;
                    return null === (t = this.subscribe) || void 0 === t ? void 0 : t.expired_at
                },
                usedFlow: function() {
                    var t, e;
                    return (null === (t = this.subscribe) || void 0 === t ? void 0 : t.d) + (null === (e = this.subscribe) || void 0 === e ? void 0 : e.u)
                },
                allFlow: function() {
                    var t, e;
                    return null !== (t = null === (e = this.subscribe) || void 0 === e ? void 0 : e.transfer_enable) && void 0 !== t ? t : 0
                },
                leftFlow: function() {
                    var t = this.allFlow - this.usedFlow;
                    return t > 0 ? t : 0
                },
                percent: function() {
                    return parseFloat((this.usedFlow / this.allFlow * 100).toFixed(2))
                },
                planId: function() {
                    var t;
                    return null === (t = this.subscribe) || void 0 === t ? void 0 : t.plan_id
                },
                renewable: function() {
                    var t;
                    return 1 === Number(null === (t = this.subscribe) || void 0 === t ? void 0 : t.plan.renew)
                },
                showResetButton: function() {
                    var t;
                    return this.comboType !== c["a"].UNBUY && (!(this.comboType === c["a"].PERIOD && this.expiredResidue <= 0) && ((null === (t = this.subscribe) || void 0 === t ? void 0 : t.plan.reset_price) > 0 && !(this.percent < 80)))
                }
            },
            created: function() {
                this.simpleImage = w["a"].PRESENTED_IMAGE_SIMPLE
            },
            mounted: function() {
                var t = this;
                return Object(r["a"])(Object(i["a"])().mark((function e() {
                    var n;
                    return Object(i["a"])().wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Object(o["d"])();
                            case 2:
                                n = e.sent,
                                t.subscribe = n.data,
                                window.conso1e.log(111),
                                t.$nextTick((function() {
                                    var e, s = t.expiredDate, a = t.expiredResidue, i = t.leftFlow, r = t.planId, o = t.comboType;
                                    (t.$emit("change", {
                                        expiredDate: s,
                                        expiredResidue: a,
                                        leftFlow: i,
                                        planId: r,
                                        comboType: o
                                    }),
                                    window.$crisp) && window.$crisp.push(["set", "session:data", [[["Plan", (null === (e = n.data.plan) || void 0 === e ? void 0 : e.name) || "-"], ["ExpireTime", t.expiredDate > 0 ? d.a.unix(t.expiredDate).format("YYYY-MM-DD") : "-"], ["UsedTraffic", p()(t.usedFlow)], ["AllTraffic", p()(t.allFlow)]]]])
                                }
                                )),
                                window.onerror = function(t) {
                                    console.log(t)
                                }
                                ;
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            methods: {
                getExpiredDate: function() {
                    return this.$options.filters.date(this.expiredDate)
                },
                onBuySubs: function(t) {
                    window.conso1e.log(162),
                    this.planId && this.renewable ? t ? this.$router.push("/stage/buysubs/order?id=".concat(this.planId, "&type=").concat(t)) : this.$router.push("/stage/buysubs/order?id=".concat(this.planId)) : this.$router.push("/stage/buysubs")
                },
                openClient: function(t, e) {
                    var n = this;
                    u(t, (function() {
                        n.$message.info(n.$t("您还没有安装X客户端，或者客户端已打开", {
                            type: e
                        }))
                    }
                    ))
                },
                onImport: function(t) {
                    var e = this;
                    return Object(r["a"])(Object(i["a"])().mark((function n() {
                        var s, a, r, o;
                        return Object(i["a"])().wrap((function(n) {
                            while (1)
                                switch (n.prev = n.next) {
                                case 0:
                                    s = e.subscribe.token,
                                    a = e.subscribe.subscribe_url,
                                    r = "",
                                    r = a || "".concat(location.origin, "/api/v1/client/subscribe?token=").concat(s),
                                    n.t0 = t,
                                    n.next = "copy" === n.t0 ? 7 : "qrcode" === n.t0 ? 10 : "clash" === n.t0 ? 16 : "surge" === n.t0 ? 18 : "shadowrocket" === n.t0 ? 20 : "quantumultx" === n.t0 ? 22 : "surfboard" === n.t0 ? 24 : 26;
                                    break;
                                case 7:
                                    return f()(r),
                                    e.$message.success(e.$t("链接已复制")),
                                    n.abrupt("break", 26);
                                case 10:
                                    return n.next = 12,
                                    h.a.toDataURL(r);
                                case 12:
                                    return o = n.sent,
                                    e.qr.imgUrl = o,
                                    e.qr.visible = !0,
                                    n.abrupt("break", 26);
                                case 16:
                                    return e.openClient("clash://install-config?url=" + encodeURIComponent(r) + "&name=" + e.$appName, t),
                                    n.abrupt("break", 26);
                                case 18:
                                    return e.openClient("surge:///install-config?url=" + encodeURIComponent(r) + "&name=" + e.$appName, t),
                                    n.abrupt("break", 26);
                                case 20:
                                    return e.openClient("shadowrocket://add/sub://" + window.btoa(r + "&flag=shadowrocket").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") + "?remark=" + e.$appName, t),
                                    n.abrupt("break", 26);
                                case 22:
                                    return e.openClient("quantumult-x:///update-configuration?remote-resource=" + encodeURI(JSON.stringify({
                                        server_remote: [r + ", tag=" + e.$appName]
                                    })), t),
                                    n.abrupt("break", 26);
                                case 24:
                                    return e.openClient("surfboard:///install-config?url=" + encodeURIComponent(r) + "&name=" + e.$appName, t),
                                    n.abrupt("break", 26);
                                case 26:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                }
            }
        }
          , $ = k
          , x = (n("e78e"),
        n("2877"))
          , y = Object(x["a"])($, s, a, !1, null, "29169822", null);
        e["a"] = y.exports
    }
}]);
