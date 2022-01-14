(this["webpackJsonppancake-frontend"] = this["webpackJsonppancake-frontend"] || []).push([
    [0],
    {
        101: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract IBEP20","name":"_syrup","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        116: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return b;
            });
            var a,
                i,
                r,
                s = n(18),
                u = n(0),
                o = n.n(u),
                p = n(8),
                c = n(5),
                d = p.e.div(
                    a || (a = Object(s.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.size;
                    }
                ),
                l = function (e) {
                    var t,
                        n = e.size,
                        a = void 0 === n ? "md" : n,
                        i = Object(u.useContext)(p.a).spacing;
                    switch (a) {
                        case "lg":
                            t = i[6];
                            break;
                        case "sm":
                            t = i[2];
                            break;
                        case "md":
                        default:
                            t = i[4];
                    }
                    return Object(c.jsx)(d, { size: t });
                },
                y = p.e.div(
                    i || (i = Object(s.a)(["\n  align-items: center;\n  background-color: ", "00;\n  display: flex;\n  margin: 0;\n  padding: ", "px 0;\n"])),
                    function (e) {
                        return e.theme.colors.primaryDark;
                    },
                    function (e) {
                        return e.theme.spacing[4];
                    }
                ),
                m = p.e.div(r || (r = Object(s.a)(["\n  flex: 1;\n"]))),
                b = function (e) {
                    var t = e.children,
                        n = o.a.Children.toArray(t).length;
                    return Object(c.jsx)(y, {
                        children: o.a.Children.map(t, function (e, t) {
                            return Object(c.jsxs)(c.Fragment, { children: [Object(c.jsx)(m, { children: e }), t < n - 1 && Object(c.jsx)(l, {})] });
                        }),
                    });
                };
        },
        124: function (e, t, n) {
            "use strict";
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(0),
                u = n(27),
                o = n(45),
                p = n(178),
                c = n(179);
            t.a = function () {
                var e = Object(u.c)(),
                    t = e.activate,
                    n = e.deactivate,
                    a = Object(o.n)().toastError;
                return {
                    login: Object(s.useCallback)(function (e) {
                        var n = p.a[e];
                        n
                            ? t(
                                  n,
                                  (function () {
                                      var e = Object(r.a)(
                                          i.a.mark(function e(r) {
                                              return i.a.wrap(function (e) {
                                                  for (;;)
                                                      switch ((e.prev = e.next)) {
                                                          case 0:
                                                              if (!(r instanceof u.a)) {
                                                                  e.next = 7;
                                                                  break;
                                                              }
                                                              return (e.next = 3), Object(c.b)();
                                                          case 3:
                                                              e.sent && t(n), (e.next = 8);
                                                              break;
                                                          case 7:
                                                              a(r.name, r.message);
                                                          case 8:
                                                          case "end":
                                                              return e.stop();
                                                      }
                                              }, e);
                                          })
                                      );
                                      return function (t) {
                                          return e.apply(this, arguments);
                                      };
                                  })()
                              )
                            : a("Can't find connector", "The connector config is wrong");
                    }, []),
                    logout: n,
                };
            };
        },
        125: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return r;
            });
            var a = n(412),
                i = n.n(a),
                r = ["https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed.binance.org"];
            t.a = function () {
                var e = i()(0, r.length - 1);
                return r[e];
            };
        },
        143: function (e, t, n) {
            "use strict";
            n.d(t, "c", function () {
                return A;
            }),
                n.d(t, "b", function () {
                    return C;
                });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(15),
                u = n(61),
                o = n(52),
                p = n(75),
                c = n(22),
                d = n(13),
                l = n.n(d),
                y = n(88),
                m = n(92),
                b = n(58),
                f = n(24),
                T = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e() {
                            var t;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.next = 2),
                                                Promise.all(
                                                    p.a.map(
                                                        (function () {
                                                            var e = Object(r.a)(
                                                                i.a.mark(function e(t) {
                                                                    var n, a, r, u, o, p, d, T, h, j, v, O, g, w, x, k, M, A, C, I;
                                                                    return i.a.wrap(function (e) {
                                                                        for (;;)
                                                                            switch ((e.prev = e.next)) {
                                                                                case 0:
                                                                                    return (
                                                                                        (n = Object(f.a)(t.lpAddresses)),
                                                                                        (a = [
                                                                                            { address: Object(f.a)(t.tokenAddresses), name: "balanceOf", params: [n] },
                                                                                            { address: Object(f.a)(t.quoteTokenAdresses), name: "balanceOf", params: [n] },
                                                                                            { address: n, name: "balanceOf", params: [Object(f.h)()] },
                                                                                            { address: n, name: "totalSupply" },
                                                                                            { address: Object(f.a)(t.tokenAddresses), name: "decimals" },
                                                                                            { address: Object(f.a)(t.quoteTokenAdresses), name: "decimals" },
                                                                                        ]),
                                                                                        (e.next = 4),
                                                                                        Object(b.a)(y, a)
                                                                                    );
                                                                                case 4:
                                                                                    return (
                                                                                        (r = e.sent),
                                                                                        (u = Object(c.a)(r, 6)),
                                                                                        (o = u[0]),
                                                                                        (p = u[1]),
                                                                                        (d = u[2]),
                                                                                        (T = u[3]),
                                                                                        (h = u[4]),
                                                                                        (j = u[5]),
                                                                                        (v = new l.a(d).div(new l.a(T))),
                                                                                        (O = new l.a(p).div(new l.a(10).pow(18)).times(new l.a(2)).times(v)),
                                                                                        (g = new l.a(o).div(new l.a(10).pow(h)).times(v)),
                                                                                        (w = new l.a(p).div(new l.a(10).pow(j)).times(v)),
                                                                                        (e.next = 18),
                                                                                        Object(b.a)(m, [
                                                                                            { address: Object(f.h)(), name: "poolInfo", params: [t.pid] },
                                                                                            { address: Object(f.h)(), name: "totalAllocPoint" },
                                                                                        ])
                                                                                    );
                                                                                case 18:
                                                                                    return (
                                                                                        (x = e.sent),
                                                                                        (k = Object(c.a)(x, 2)),
                                                                                        (M = k[0]),
                                                                                        (A = k[1]),
                                                                                        (C = new l.a(M.allocPoint._hex)),
                                                                                        (I = C.div(new l.a(A))),
                                                                                        e.abrupt(
                                                                                            "return",
                                                                                            Object(s.a)(
                                                                                                Object(s.a)({}, t),
                                                                                                {},
                                                                                                {
                                                                                                    tokenAmount: g.toJSON(),
                                                                                                    quoteTokenAmount: w.toJSON(),
                                                                                                    lpTotalInQuoteToken: O.toJSON(),
                                                                                                    tokenPriceVsQuote: w.div(g).toJSON(),
                                                                                                    poolWeight: I.toJSON(),
                                                                                                    multiplier: "".concat(C.div(100).toString(), "X"),
                                                                                                }
                                                                                            )
                                                                                        )
                                                                                    );
                                                                                case 25:
                                                                                case "end":
                                                                                    return e.stop();
                                                                            }
                                                                    }, e);
                                                                })
                                                            );
                                                            return function (t) {
                                                                return e.apply(this, arguments);
                                                            };
                                                        })()
                                                    )
                                                )
                                            );
                                        case 2:
                                            return (t = e.sent), e.abrupt("return", t);
                                        case 4:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })(),
                h = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n, a, r, s;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = Object(f.h)()),
                                                (a = p.a.map(function (e) {
                                                    return { address: Object(f.a)(e.lpAddresses), name: "allowance", params: [t, n] };
                                                })),
                                                (e.next = 4),
                                                Object(b.a)(y, a)
                                            );
                                        case 4:
                                            return (
                                                (r = e.sent),
                                                (s = r.map(function (e) {
                                                    return new l.a(e).toJSON();
                                                })),
                                                e.abrupt("return", s)
                                            );
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                j = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n, a, r;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = p.a.map(function (e) {
                                                    return { address: Object(f.a)(e.lpAddresses), name: "balanceOf", params: [t] };
                                                })),
                                                (e.next = 3),
                                                Object(b.a)(y, n)
                                            );
                                        case 3:
                                            return (
                                                (a = e.sent),
                                                (r = a.map(function (e) {
                                                    return new l.a(e).toJSON();
                                                })),
                                                e.abrupt("return", r)
                                            );
                                        case 6:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                v = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n, a, r, s;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = Object(f.h)()),
                                                (a = p.a.map(function (e) {
                                                    return { address: n, name: "userInfo", params: [e.pid, t] };
                                                })),
                                                (e.next = 4),
                                                Object(b.a)(m, a)
                                            );
                                        case 4:
                                            return (
                                                (r = e.sent),
                                                (s = r.map(function (e) {
                                                    return new l.a(e[0]._hex).toJSON();
                                                })),
                                                e.abrupt("return", s)
                                            );
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                O = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n, a, r, s;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = Object(f.h)()),
                                                (a = p.a.map(function (e) {
                                                    return { address: n, name: "pendingCake", params: [e.pid, t] };
                                                })),
                                                (e.next = 4),
                                                Object(b.a)(m, a)
                                            );
                                        case 4:
                                            return (
                                                (r = e.sent),
                                                (s = r.map(function (e) {
                                                    return new l.a(e).toJSON();
                                                })),
                                                e.abrupt("return", s)
                                            );
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                g = { data: Object(u.a)(p.a) },
                w = Object(o.c)({
                    name: "Farms",
                    initialState: g,
                    reducers: {
                        setFarmsPublicData: function (e, t) {
                            var n = t.payload;
                            e.data = e.data.map(function (e) {
                                var t = n.find(function (t) {
                                    return t.pid === e.pid;
                                });
                                return Object(s.a)(Object(s.a)({}, e), t);
                            });
                        },
                        setFarmUserData: function (e, t) {
                            t.payload.arrayOfUserDataObjects.forEach(function (t) {
                                var n = t.index;
                                e.data[n] = Object(s.a)(Object(s.a)({}, e.data[n]), {}, { userData: t });
                            });
                        },
                    },
                }),
                x = w.actions,
                k = x.setFarmsPublicData,
                M = x.setFarmUserData,
                A = function () {
                    return (function () {
                        var e = Object(r.a)(
                            i.a.mark(function e(t) {
                                var n;
                                return i.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), T();
                                            case 2:
                                                (n = e.sent), t(k(n));
                                            case 4:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                C = function (e) {
                    return (function () {
                        var t = Object(r.a)(
                            i.a.mark(function t(n) {
                                var a, r, s, u, o;
                                return i.a.wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (t.next = 2), h(e);
                                            case 2:
                                                return (a = t.sent), (t.next = 5), j(e);
                                            case 5:
                                                return (r = t.sent), (t.next = 8), v(e);
                                            case 8:
                                                return (s = t.sent), (t.next = 11), O(e);
                                            case 11:
                                                (u = t.sent),
                                                    (o = a.map(function (e, t) {
                                                        return { index: t, allowance: a[t], tokenBalance: r[t], stakedBalance: s[t], earnings: u[t] };
                                                    })),
                                                    n(M({ arrayOfUserDataObjects: o }));
                                            case 14:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        );
                        return function (e) {
                            return t.apply(this, arguments);
                        };
                    })();
                };
            t.a = w.reducer;
        },
        147: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return m;
            }),
                n.d(t, "b", function () {
                    return b;
                });
            var a = n(30),
                i = n(15),
                r = n(2),
                s = n.n(r),
                u = n(11),
                o = n(237),
                p = n.n(o),
                c = n(148),
                d = n(41),
                l = n(176),
                y = Object(d.l)(),
                m = (function () {
                    var e = Object(u.a)(
                        s.a.mark(function e(t) {
                            var n, a, i, r, u, o;
                            return s.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.prev = 0), (e.next = 3), y.methods.getTeamProfile(t).call();
                                            case 3:
                                                return (
                                                    (n = e.sent),
                                                    (a = n[0]),
                                                    (i = n[2]),
                                                    (r = n[3]),
                                                    (u = n[4]),
                                                    (o = c.a.find(function (e) {
                                                        return e.id === t;
                                                    })),
                                                    e.abrupt("return", p()({}, o, { isJoinable: u, name: a, users: i, points: r }))
                                                );
                                            case 12:
                                                return (e.prev = 12), (e.t0 = e.catch(0)), e.abrupt("return", null);
                                            case 15:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[0, 12]]
                            );
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                b = (function () {
                    var e = Object(u.a)(
                        s.a.mark(function e() {
                            var t, n, r, u, o, d;
                            return s.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.prev = 0),
                                                    (t = c.a.reduce(function (e, t) {
                                                        return Object(i.a)(Object(i.a)({}, e), {}, Object(a.a)({}, t.id, t));
                                                    }, {})),
                                                    (e.next = 4),
                                                    y.methods.numberTeams().call()
                                                );
                                            case 4:
                                                for (n = e.sent, r = [], u = 1; u <= n; u++) r.push(y.methods.getTeamProfile(u).call);
                                                return (e.next = 9), Object(l.a)(r);
                                            case 9:
                                                return (
                                                    (o = e.sent),
                                                    (d = o.reduce(function (e, t, n) {
                                                        var r = t[0],
                                                            s = t[2],
                                                            u = t[3],
                                                            o = t[4];
                                                        return Object(i.a)(Object(i.a)({}, e), {}, Object(a.a)({}, n + 1, { name: r, users: Number(s), points: Number(u), isJoinable: o }));
                                                    }, {})),
                                                    e.abrupt("return", p()({}, t, d))
                                                );
                                            case 14:
                                                return (e.prev = 14), (e.t0 = e.catch(0)), e.abrupt("return", null);
                                            case 17:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[0, 14]]
                            );
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })();
        },
        148: function (e, t, n) {
            "use strict";
            t.a = [
                {
                    id: 1,
                    name: "Syrup Storm",
                    description: "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!",
                    images: {
                        lg: "syrup-storm-lg.png",
                        md: "syrup-storm-md.png",
                        sm: "syrup-storm-sm.png",
                        alt: "syrup-storm-alt.png",
                        ipfs: "https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/syrup-storm.png",
                    },
                    background: "syrup-storm-bg.svg",
                    textColor: "#feffff",
                    users: 0,
                    points: 0,
                },
                {
                    id: 2,
                    name: "Fearsome Flippers",
                    description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped too!",
                    images: {
                        lg: "fearsome-flippers-lg.png",
                        md: "fearsome-flippers-md.png",
                        sm: "fearsome-flippers-sm.png",
                        alt: "fearsome-flippers-alt.png",
                        ipfs: "https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/fearsome-flippers.png",
                    },
                    background: "fearsome-flippers-bg.svg",
                    textColor: "#FFFFFF",
                    users: 0,
                    points: 0,
                },
                {
                    id: 3,
                    name: "Chaotic Cakers",
                    description: "Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!",
                    images: {
                        lg: "chaotic-cakers-lg.png",
                        md: "chaotic-cakers-md.png",
                        sm: "chaotic-cakers-sm.png",
                        alt: "chaotic-cakers-alt.png",
                        ipfs: "https://gateway.pinata.cloud/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/chaotic-cakers.png",
                    },
                    background: "chaotic-cakers-bg.svg",
                    textColor: "#feffff",
                    users: 0,
                    points: 0,
                },
            ];
        },
        149: function (e, t, n) {
            "use strict";
            t.a = [
                {
                    name: "Bullish",
                    description: "Happy Niu Year! This bunny\u2019s excited for the year of the bull (market!)",
                    images: { lg: "bullish-lg.png", md: "bullish-md.png", sm: "bullish-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.png" },
                    video: { webm: "https://gateway.pinata.cloud/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.webm", mp4: "https://gateway.pinata.cloud/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.mp4" },
                    sortOrder: 999,
                    bunnyId: 11,
                },
                {
                    name: "Hiccup",
                    description: "Oopsie daisy! Hiccup's had a bit of an accident. Poor little fella.",
                    images: { lg: "hiccup-lg.png", md: "hiccup-md.png", sm: "hiccup-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmQ6EE6gkVzAQUdQLLM7CyrnME6LZHCoy92ZERW8HXmyjw/hiccup.png" },
                    sortOrder: 999,
                    bunnyId: 10,
                },
                {
                    name: "Sleepy",
                    description: "Aww, looks like eating pancakes all day is tough work. Sweet dreams!",
                    images: { lg: "sleepy-lg.png", md: "sleepy-md.png", sm: "sleepy-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sleepy.png", blur: "sleepy-blur.png" },
                    sortOrder: 999,
                    bunnyId: 5,
                },
                {
                    name: "Sunny",
                    description: "Sunny is always cheerful when there are pancakes around. Smile!",
                    images: { lg: "sunny-lg.png", md: "sunny-md.png", sm: "sunny-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sunny.png", blur: "sunny-blur.png" },
                    sortOrder: 999,
                    bunnyId: 9,
                },
                {
                    name: "Churro",
                    description: "Don't let that dopey smile deceive you... Churro's a master CAKE chef!",
                    images: { lg: "churro-lg.png", md: "churro-md.png", sm: "churro-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/churro.png", blur: "churro-blur.png" },
                    sortOrder: 999,
                    bunnyId: 8,
                },
                {
                    name: "Dollop",
                    description: "Nommm... Oh hi, I'm just meditating on the meaning of CAKE.",
                    images: { lg: "dollop-lg.png", md: "dollop-md.png", sm: "dollop-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/dollop.png", blur: "dollop-blur.png" },
                    sortOrder: 999,
                    bunnyId: 6,
                },
                {
                    name: "Twinkle",
                    description: "Three guesses what's put that twinkle in those eyes! (Hint: it's CAKE)",
                    images: { lg: "twinkle-lg.png", md: "twinkle-md.png", sm: "twinkle-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/twinkle.png", blur: "twinkle-blur.png" },
                    sortOrder: 999,
                    bunnyId: 7,
                },
                {
                    name: "Swapsies",
                    description: "These bunnies love nothing more than swapping pancakes. Especially on BSC.",
                    images: { lg: "swapsies-lg.png", md: "swapsies-md.png", sm: "swapsies-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png", blur: "swapsies-blur.png" },
                    sortOrder: 999,
                    bunnyId: 0,
                },
                {
                    name: "Drizzle",
                    description: "It's raining syrup on this bunny, but he doesn't seem to mind. Can you blame him?",
                    images: { lg: "drizzle-lg.png", md: "drizzle-md.png", sm: "drizzle-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png", blur: "drizzle-blur.png" },
                    sortOrder: 999,
                    bunnyId: 1,
                },
                {
                    name: "Blueberries",
                    description: "These bunnies like their pancakes with blueberries. What's your favorite topping?",
                    images: {
                        lg: "blueberries-lg.png",
                        md: "blueberries-md.png",
                        sm: "blueberries-sm.png",
                        ipfs: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png",
                        blur: "blueberries-blur.png",
                    },
                    sortOrder: 999,
                    bunnyId: 2,
                },
                {
                    name: "Circular",
                    description: "Love makes the world go 'round... but so do pancakes. And these bunnies know it.",
                    images: { lg: "circular-lg.png", md: "circular-md.png", sm: "circular-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/circular.png", blur: "circular-blur.png" },
                    sortOrder: 999,
                    bunnyId: 3,
                },
                {
                    name: "Sparkle",
                    description: "It\u2019s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.",
                    images: { lg: "sparkle-lg.png", md: "sparkle-md.png", sm: "sparkle-sm.png", ipfs: "https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png", blur: "sparkle-blur.png" },
                    sortOrder: 999,
                    bunnyId: 4,
                },
            ];
        },
        150: function (e, t, n) {
            "use strict";
            n.d(t, "d", function () {
                return i;
            }),
                n.d(t, "c", function () {
                    return r;
                }),
                n.d(t, "e", function () {
                    return s;
                }),
                n.d(t, "b", function () {
                    return u;
                }),
                n.d(t, "a", function () {
                    return p;
                }),
                n.d(t, "f", function () {
                    return c;
                }),
                n.d(t, "g", function () {
                    return d;
                });
            var a = n(184);
            a.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 });
            var i = new a.a(5),
                r = new a.a(10512e3),
                s = 1,
                u = "https://warriorswap.finance",
                o = "https://dex.warriorswap.finance",
                p = "".concat(o, "/#/add"),
                c = ("".concat(o, "/#/pool"), 50),
                d = 1;
        },
        151: function (e, t, n) {
            "use strict";
            var a = n(0),
                i = n(173);
            t.a = function () {
                var e = Object(a.useContext)(i.a);
                return { fastRefresh: e.fast, slowRefresh: e.slow };
            };
        },
        169: function (e, t, n) {
            "use strict";
            t.a = [
                {
                    id: "belt",
                    address: "0xc9FBedC033a1c479a6AD451ffE463025E92a1d38",
                    isActive: !0,
                    name: "Belt (BELT)",
                    subTitle: "AMM protocol incorporating multi-strategy yield optimization",
                    description:
                        "Belt.fi is a protocol that allows users to retain the stability of their asset positions and get maximum yields with minimal risk, including automated vault compounding and yield optimization strategies. BELT is the governance and incentivization token of Belt Finance. BELT will be distributed to all types of pools.",
                    launchDate: "Mar. 10",
                    launchTime: "5PM SGT",
                    saleAmount: "150,000 BELT",
                    raiseAmount: "$3,000,000",
                    cakeToBurn: "$1,500,000",
                    projectSiteUrl: "https://beta.belt.fi/",
                    currency: "CAKE-BNB LP",
                    currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
                    tokenDecimals: 18,
                    tokenSymbol: "BELT",
                    releaseBlockNumber: 5493919,
                    campaignId: "511080000",
                },
                {
                    id: "watch",
                    address: "0x55344b55C71Ad8834C397E6e08dF5195cF84fe6d",
                    isActive: !1,
                    name: "Yieldwatch (WATCH)",
                    subTitle: "A smart yield farming dashboard on BSC",
                    description:
                        "Yieldwatch is a smart yield farming dashboard on Binance Smart Chain that lets you monitor your liquidity pools, yield farming and token staking performance with fast and casual UI. The $WATCH token is a membership token, which is required to access advanced PRO features.",
                    launchDate: "Mar. 4",
                    launchTime: "5PM SGT",
                    saleAmount: "8,000,000 WATCH",
                    raiseAmount: "$800,000",
                    cakeToBurn: "$400,000",
                    projectSiteUrl: "https://yieldwatch.net/",
                    currency: "CAKE-BNB LP",
                    currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
                    tokenDecimals: 18,
                    tokenSymbol: "WATCH",
                    releaseBlockNumber: 5294924,
                    campaignId: "511070000",
                },
                {
                    id: "berry",
                    address: "0x5d028cE3435B2bB9AceBfaC599EEbA1ccD63d7dd",
                    isActive: !1,
                    name: "Berry (BRY)",
                    subTitle: "A decentralized oracle network on BSC",
                    description:
                        "Berry Data is a transparent community-veri\ufb01ed price oracle on BSC. Berry Data provides a trustless and decentralized alternative for off-chain data. As the governance token for Berry Data, BRY allows holders to pay for Berry Data feeds, vote on governance issues, validate data through staking, and build the Berry ecosystem.",
                    launchDate: "Feb. 16",
                    launchTime: "5PM SGT",
                    saleAmount: "2,000,000 BRY",
                    raiseAmount: "$1,000,000",
                    cakeToBurn: "$500,000",
                    projectSiteUrl: "https://berrydata.co/",
                    currency: "CAKE-BNB LP",
                    currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
                    tokenDecimals: 18,
                    tokenSymbol: "BRY",
                    releaseBlockNumber: 4750968,
                    campaignId: "511060000",
                },
                {
                    id: "soteria",
                    address: "0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e",
                    isActive: !1,
                    name: "Soteria (wSOTE)",
                    subTitle: "A blockchain based mutual to share the risk of DeFi on Binance Smart Chain",
                    description:
                        "Soteria allows users to buy insurance cover to greatly diminish or reduce the financial risk of hacks. It replaces the idea of a traditional insurance company, because it is wholly owned by the members. The model encourages engagement as members receive economic incentives for participating in Risk Assessment, Claims Assessment and Governance.",
                    launchDate: "Jan. 21",
                    launchTime: "4PM SGT",
                    saleAmount: "1,500,000 wSOTE",
                    raiseAmount: "$525,000",
                    cakeToBurn: "$262,500",
                    projectSiteUrl: "https://soteria.finance/#/",
                    currency: "CAKE-BNB LP",
                    currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
                    tokenDecimals: 18,
                    tokenSymbol: "wSOTE",
                    releaseBlockNumber: 4086064,
                    campaignId: "511050000",
                },
                {
                    id: "helmet",
                    address: "0xa32509d760ee47Eb2Be96D338b5d69B5FBa4eFEB",
                    isActive: !1,
                    name: "Helmet.insure (Helmet)",
                    subTitle: "Crypto-assets insurance trading platform",
                    description:
                        "Helmet is a peer-to-peer insurance protocol written with options trading logic, which allows anyone to create any insurance policy easily in the market. Helmet aims to enable DeFi users to be protected against the risk of price fluctuations by providing price-shield insurance for BSC assets. They provide suppliers with a range of insurance types to sell, giving a variety of hedging strategies to the market.",
                    launchDate: "Jan. 13",
                    launchTime: "5PM SGT",
                    saleAmount: "10,000,000 Helmet",
                    raiseAmount: "$1,000,000",
                    cakeToBurn: "$500,000",
                    projectSiteUrl: "https://www.helmet.insure/",
                    currency: "CAKE-BNB LP",
                    currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
                    tokenDecimals: 18,
                    tokenSymbol: "Helmet",
                    releaseBlockNumber: 3771926,
                    campaignId: "511040000",
                },
                {
                    id: "tenet",
                    address: "0xB922aA19A2603A07C6C9ED6c236618C9bac51f06",
                    isActive: !1,
                    name: "Tenet (TEN)",
                    subTitle: "Cross-chain Automated Market Maker",
                    description:
                        "Tenet is a cross-chain Automated Market Maker (AMM) connector that provides a decentralized Liquidity Tap for various tokens. The Liquidity Tap is the powerhouse of the Liquidity Pool, employing a dynamic algorithm to give the Liquidity Provider fairer, more efficient, and richer incentives. Tenet aims to build a cross-chain and cross-platform toolkit protocol that allows the demand side to customize the parameters of the liquidity tap, allowing them to reach out to more liquidity participants effectively and with relative ease.",
                    launchDate: "Jan. 5",
                    launchTime: "3PM SGT",
                    saleAmount: "1,000,000 TEN",
                    raiseAmount: "$1,000,000",
                    cakeToBurn: "$500,000",
                    projectSiteUrl: "https://www.tenet.farm/",
                    currency: "CAKE-BNB LP",
                    currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
                    tokenDecimals: 18,
                    tokenSymbol: "TEN",
                    releaseBlockNumber: 3483883,
                    campaignId: "511030000",
                },
                {
                    id: "ditto",
                    address: "0x570c9eB19553526Fb35895a531928E19C7D20788",
                    isActive: !1,
                    name: "Ditto (DITTO)",
                    subTitle: "Next-gen elastic supply token",
                    description:
                        "Ditto is the first elastic supply token on the Binance Smart Chain. Its goal is to maintain a stable price of $1, where its supply will adapt to changes in demand. All supply changes will apply equally to every wallet holding Ditto, and holders should always have the same % of the total supply",
                    launchDate: "Dec. 23",
                    launchTime: "3PM SGT",
                    saleAmount: "700,000 DITTO",
                    raiseAmount: "$630,000",
                    cakeToBurn: "$315,000",
                    projectSiteUrl: "https://ditto.money/",
                    currency: "CAKE-BNB LP",
                    currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
                    tokenDecimals: 9,
                    tokenSymbol: "DITTO",
                    releaseBlockNumber: 3279767,
                    campaignId: "511020000",
                },
                {
                    id: "blink",
                    address: "0x44a9Cc8463EC00937242b660BF65B10365d99baD",
                    isActive: !1,
                    name: "BLINk (BLK)",
                    subTitle: "Online games on BSC",
                    description: "BLINk enables BNB holders to enjoy gaming experiences that WINk users on Tron have been enjoying for over two years.",
                    launchDate: "Nov. 20",
                    launchTime: "9PM SGT",
                    saleAmount: "100,000,000 BLINK",
                    raiseAmount: "$1,000,000",
                    cakeToBurn: "$500,000",
                    projectSiteUrl: "https://blink.wink.org",
                    currency: "CAKE-BNB LP",
                    currencyAddress: "0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6",
                    tokenDecimals: 6,
                    tokenSymbol: "blink",
                    releaseBlockNumber: 3279767,
                    campaignId: "511010000",
                },
            ];
        },
        170: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return r;
            });
            var a = n(52),
                i = Object(a.c)({
                    name: "Block",
                    initialState: { blockNumber: 0 },
                    reducers: {
                        setBlock: function (e, t) {
                            return { blockNumber: t.payload };
                        },
                    },
                }),
                r = i.actions.setBlock;
            t.a = i.reducer;
        },
        171: function (e, t, n) {
            "use strict";
            n.d(t, "c", function () {
                return s;
            }),
                n.d(t, "b", function () {
                    return u;
                }),
                n.d(t, "a", function () {
                    return o;
                }),
                n.d(t, "d", function () {
                    return p;
                });
            var a = n(15),
                i = (n(0), n(12)),
                r = n(5),
                s = function (e) {
                    return Object(r.jsx)(i.K, Object(a.a)(Object(a.a)({ variant: "secondary", outline: !0, startIcon: Object(r.jsx)(i.Q, {}) }, e), {}, { children: "Core" }));
                },
                u = function (e) {
                    return Object(r.jsx)(i.K, Object(a.a)(Object(a.a)({ variant: "textSubtle", outline: !0, startIcon: Object(r.jsx)(i.q, {}) }, e), {}, { children: "Community" }));
                },
                o = function (e) {
                    return Object(r.jsx)(i.K, Object(a.a)(Object(a.a)({ variant: "binance", outline: !0, startIcon: Object(r.jsx)(i.e, {}) }, e), {}, { children: "Binance" }));
                },
                p = function (e) {
                    return Object(r.jsx)(i.K, Object(a.a)(Object(a.a)({ variant: "textSubtle", outline: !0 }, e), {}, { children: "Dual" }));
                };
        },
        173: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return c;
            }),
                n.d(t, "b", function () {
                    return d;
                });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(22),
                u = n(0),
                o = n.n(u),
                p = n(5),
                c = o.a.createContext({ slow: 0, fast: 0 }),
                d = function (e) {
                    var t = e.children,
                        n = Object(u.useState)(0),
                        a = Object(s.a)(n, 2),
                        o = a[0],
                        d = a[1],
                        l = Object(u.useState)(0),
                        y = Object(s.a)(l, 2),
                        m = y[0],
                        b = y[1];
                    return (
                        Object(u.useEffect)(function () {
                            var e = setInterval(
                                Object(r.a)(
                                    i.a.mark(function e() {
                                        return i.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        b(function (e) {
                                                            return e + 1;
                                                        });
                                                    case 1:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                ),
                                1e4
                            );
                            return function () {
                                return clearInterval(e);
                            };
                        }, []),
                        Object(u.useEffect)(function () {
                            var e = setInterval(
                                Object(r.a)(
                                    i.a.mark(function e() {
                                        return i.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        d(function (e) {
                                                            return e + 1;
                                                        });
                                                    case 1:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                ),
                                6e4
                            );
                            return function () {
                                return clearInterval(e);
                            };
                        }, []),
                        Object(p.jsx)(c.Provider, { value: { slow: o, fast: m }, children: t })
                    );
                };
        },
        175: function (e) {
            e.exports = JSON.parse(
                '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        176: function (e, t, n) {
            "use strict";
            var a = n(69);
            t.a = function (e) {
                try {
                    var t = new (Object(a.b)().BatchRequest)(),
                        n = e.map(function (e) {
                            return new Promise(function (n, a) {
                                t.add(
                                    e.request({}, function (e, t) {
                                        e ? a(e) : n(t);
                                    })
                                );
                            });
                        });
                    return t.execute(), Promise.all(n);
                } catch (i) {
                    return null;
                }
            };
        },
        177: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return p;
            });
            var a = n(2),
                i = n.n(a),
                r = n(30),
                s = n(15),
                u = n(11),
                o = n(52),
                p = Object(o.b)(
                    "prices/fetch",
                    Object(u.a)(
                        i.a.mark(function e() {
                            var t, n;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), fetch("https://api.pancakeswap.com/api/v1/price");
                                        case 2:
                                            return (t = e.sent), (e.next = 5), t.json();
                                        case 5:
                                            return (
                                                (n = e.sent),
                                                e.abrupt("return", {
                                                    update_at: n.update_at,
                                                    prices: Object.keys(n.prices).reduce(function (e, t) {
                                                        return Object(s.a)(Object(s.a)({}, e), {}, Object(r.a)({}, t.toLowerCase(), n.prices[t]));
                                                    }, {}),
                                                })
                                            );
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )
                ),
                c = Object(o.c)({
                    name: "prices",
                    initialState: { isLoading: !1, lastUpdated: null, data: null },
                    reducers: {},
                    extraReducers: function (e) {
                        e.addCase(p.pending, function (e) {
                            e.isLoading = !0;
                        }),
                            e.addCase(p.fulfilled, function (e, t) {
                                (e.isLoading = !1), (e.lastUpdated = t.payload.update_at), (e.data = t.payload.prices);
                            });
                    },
                });
            t.a = c.reducer;
        },
        178: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return b;
            }),
                n.d(t, "b", function () {
                    return f;
                });
            var a,
                i = n(30),
                r = n(423),
                s = n(424),
                u = n(425),
                o = n(12),
                p = n(125),
                c = Object(p.a)(),
                d = parseInt("56", 10),
                l = new r.a({ supportedChainIds: [d] }),
                y = new s.a({ rpc: Object(i.a)({}, d, c), bridge: "https://pancakeswap.bridge.walletconnect.org", qrcode: !0, pollingInterval: 12e3 }),
                m = new u.BscConnector({ supportedChainIds: [d] }),
                b = ((a = {}), Object(i.a)(a, o.r.Injected, l), Object(i.a)(a, o.r.WalletConnect, y), Object(i.a)(a, o.r.BSC, m), a),
                f = function (e) {
                    return e;
                };
        },
        179: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return u;
            }),
                n.d(t, "a", function () {
                    return o;
                });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(125),
                u = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e() {
                            var t, n;
                            return i.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                if (!(t = window.ethereum)) {
                                                    e.next = 15;
                                                    break;
                                                }
                                                return (
                                                    (n = parseInt("56", 10)),
                                                    (e.prev = 3),
                                                    (e.next = 6),
                                                    t.request({
                                                        method: "wallet_addEthereumChain",
                                                        params: [
                                                            {
                                                                chainId: "0x".concat(n.toString(16)),
                                                                chainName: "Binance Smart Chain Mainnet",
                                                                nativeCurrency: { name: "BNB", symbol: "bnb", decimals: 18 },
                                                                rpcUrls: s.b,
                                                                blockExplorerUrls: ["https://bscscan.com/"],
                                                            },
                                                        ],
                                                    })
                                                );
                                            case 6:
                                                return e.abrupt("return", !0);
                                            case 9:
                                                return (e.prev = 9), (e.t0 = e.catch(3)), console.error(e.t0), e.abrupt("return", !1);
                                            case 13:
                                                e.next = 17;
                                                break;
                                            case 15:
                                                return console.error("Can't setup the BSC network on metamask because window.ethereum is undefined"), e.abrupt("return", !1);
                                            case 17:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[3, 9]]
                            );
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })(),
                o = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n, a, r) {
                            var s;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), window.ethereum.request({ method: "wallet_watchAsset", params: { type: "ERC20", options: { address: t, symbol: n, decimals: a, image: r } } });
                                        case 2:
                                            return (s = e.sent), e.abrupt("return", s);
                                        case 4:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n, a, i) {
                        return e.apply(this, arguments);
                    };
                })();
        },
        180: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return r;
            });
            var a = n(0),
                i = { translations: [], setTranslations: function () {} },
                r = Object(a.createContext)(i);
        },
        182: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return w;
            });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(12),
                u = n(52),
                o = n(80),
                p = n(97),
                c = n(61),
                d = n(18),
                l = n(238),
                y = [
                    { id: "511080000", type: "ifo", title: "Belt", badge: "ifo-belt.svg" },
                    { id: "511070000", type: "ifo", title: "Yieldwatch", badge: "ifo-watch.svg" },
                    { id: "511060000", type: "ifo", title: "Berry", badge: "ifo-bry.svg" },
                    { id: "511050000", type: "ifo", title: "Soteria", badge: "ifo-wsote.svg" },
                    { id: "511040000", type: "ifo", title: "Helmet", badge: "ifo-helmet.svg" },
                    { id: "511030000", type: "ifo", title: "Tenet", badge: "ifo-ten.svg" },
                    { id: "511020000", type: "ifo", title: "Ditto", badge: "ifo-ditto.svg" },
                    { id: "511010000", type: "ifo", title: "Blink", badge: "ifo-blk.svg" },
                ],
                m = new Map();
            y.forEach(function (e) {
                m.set(e.id, e);
            });
            n(41), n(169), n(176);
            var b,
                f = function (e) {
                    switch (e.type) {
                        case "ifo":
                            return { id: 999, fallback: "IFO Shopper: ".concat(e.title), data: { name: e.title } };
                        default:
                            return e.title;
                    }
                },
                T = function (e) {
                    switch (e.type) {
                        case "ifo":
                            return { id: 999, fallback: "Committed more than $5 worth of LP in the ".concat(e.title, " IFO"), data: { name: e.title } };
                        default:
                            return e.description;
                    }
                },
                h = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n;
                            return i.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (e.prev = 0),
                                                    (e.next = 3),
                                                    Object(l.request)(
                                                        "https://api.thegraph.com/subgraphs/name/pancakeswap/profile",
                                                        Object(l.gql)(
                                                            b ||
                                                                (b = Object(d.a)([
                                                                    '\n        {\n          user(id: "',
                                                                    '") {\n            points {\n              id\n              campaignId\n              points\n            }\n          }\n        }\n      ',
                                                                ])),
                                                            t.toLowerCase()
                                                        )
                                                    )
                                                );
                                            case 3:
                                                return (n = e.sent), e.abrupt("return", n.user.points);
                                            case 7:
                                                return (e.prev = 7), (e.t0 = e.catch(0)), e.abrupt("return", null);
                                            case 10:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[0, 7]]
                            );
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                j = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (e.next = 2), h(t);
                                        case 2:
                                            if ((n = e.sent)) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return", []);
                                        case 5:
                                            return e.abrupt(
                                                "return",
                                                n.reduce(function (e, t) {
                                                    var n = m.get(t.campaignId);
                                                    return [].concat(Object(c.a)(e), [{ id: t.campaignId, type: n.type, address: t.id, title: f(n), description: T(n), badge: n.badge, points: Number(t.points) }]);
                                                }, [])
                                            );
                                        case 6:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                v = Object(u.c)({
                    name: "achievements",
                    initialState: { data: [] },
                    reducers: {
                        addAchievement: function (e, t) {
                            e.data.push(t.payload);
                        },
                        addAchievements: function (e, t) {
                            e.data.concat(t.payload);
                        },
                        setAchievements: function (e, t) {
                            e.data = t.payload;
                        },
                        clearAchievements: function (e) {
                            e.data = [];
                        },
                    },
                }),
                O = v.actions,
                g = (O.addAchievement, O.addAchievements, O.setAchievements),
                w =
                    (O.clearAchievements,
                    function (e) {
                        return (function () {
                            var t = Object(r.a)(
                                i.a.mark(function t(n) {
                                    var a, r;
                                    return i.a.wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (t.prev = 0), (t.next = 3), j(e);
                                                    case 3:
                                                        (a = t.sent), n(g(a)), (t.next = 12);
                                                        break;
                                                    case 7:
                                                        (t.prev = 7), (t.t0 = t.catch(0)), console.error(t.t0), (r = "Error fetching achievements"), n(Object(p.c)({ id: Object(o.kebabCase)(r), type: s.V.DANGER, title: r }));
                                                    case 12:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        null,
                                        [[0, 7]]
                                    );
                                })
                            );
                            return function (e) {
                                return t.apply(this, arguments);
                            };
                        })();
                    });
            t.a = v.reducer;
        },
        24: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return i;
            }),
                n.d(t, "d", function () {
                    return r;
                }),
                n.d(t, "h", function () {
                    return s;
                }),
                n.d(t, "i", function () {
                    return u;
                }),
                n.d(t, "m", function () {
                    return o;
                }),
                n.d(t, "f", function () {
                    return p;
                }),
                n.d(t, "g", function () {
                    return c;
                }),
                n.d(t, "j", function () {
                    return d;
                }),
                n.d(t, "k", function () {
                    return l;
                }),
                n.d(t, "b", function () {
                    return y;
                }),
                n.d(t, "e", function () {
                    return m;
                }),
                n.d(t, "l", function () {
                    return b;
                }),
                n.d(t, "c", function () {
                    return f;
                });
            var a = n(62),
                i = function (e) {
                    return e[56], e[56];
                },
                r = function () {
                    return i(a.a.cake);
                },
                s = function () {
                    return i(a.a.masterChef);
                },
                u = function () {
                    return i(a.a.mulltiCall);
                },
                o = function () {
                    return i(a.a.wbnb);
                },
                p = function () {
                    return i(a.a.lottery);
                },
                c = function () {
                    return i(a.a.lotteryNFT);
                },
                d = function () {
                    return i(a.a.pancakeProfile);
                },
                l = function () {
                    return i(a.a.pancakeRabbits);
                },
                y = function () {
                    return i(a.a.bunnyFactory);
                },
                m = function () {
                    return i(a.a.claimRefund);
                },
                b = function () {
                    return i(a.a.pointCenterIfo);
                },
                f = function () {
                    return i(a.a.bunnySpecial);
                };
        },
        242: function (e, t, n) {
            "use strict";
            var a = n(15),
                i = (n(0), n(12)),
                r = n(124),
                s = n(54),
                u = n(5);
            t.a = function (e) {
                var t = Object(s.a)(),
                    n = Object(r.a)(),
                    o = n.login,
                    p = n.logout,
                    c = Object(i.Z)(o, p).onPresentConnectModal;
                return Object(u.jsx)(i.g, Object(a.a)(Object(a.a)({ onClick: c }, e), {}, { children: t(292, "Unlock Wallet") }));
            };
        },
        245: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return r;
            });
            var a = n(75);
            n.d(t, "b", function () {
                return a.a;
            });
            var i = n(64);
            n.d(t, "c", function () {
                return i.a;
            });
            n(169);
            var r = a.a
                .filter(function (e) {
                    return e.isCommunity;
                })
                .map(function (e) {
                    return e.tokenSymbol;
                });
        },
        246: function (e, t, n) {
            "use strict";
            var a,
                i = n(18),
                r = n(8),
                s = n(399),
                u = Object(r.e)(s.a)(
                    a ||
                        (a = Object(i.a)([
                            "\n  min-height: calc(100vh - 64px);\n  padding-top: 16px;\n  padding-bottom: 16px;\n\n  ",
                            " {\n    padding-top: 24px;\n    padding-bottom: 24px;\n  }\n\n  ",
                            " {\n    padding-top: 32px;\n    padding-bottom: 32px;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    },
                    function (e) {
                        return e.theme.mediaQueries.lg;
                    }
                );
            t.a = u;
        },
        248: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return l;
            }),
                n.d(t, "c", function () {
                    return y;
                }),
                n.d(t, "b", function () {
                    return m;
                });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(0),
                u = n(27),
                o = (n(181), n(25)),
                p = n(40),
                c = n(51),
                d = n(49),
                l = function (e) {
                    var t = Object(o.b)(),
                        n = Object(u.c)().account,
                        a = Object(d.e)();
                    return {
                        onApprove: Object(s.useCallback)(
                            Object(r.a)(
                                i.a.mark(function r() {
                                    var s;
                                    return i.a.wrap(
                                        function (i) {
                                            for (;;)
                                                switch ((i.prev = i.next)) {
                                                    case 0:
                                                        return (i.prev = 0), (i.next = 3), Object(c.a)(e, a, n);
                                                    case 3:
                                                        return (s = i.sent), t(Object(p.b)(n)), i.abrupt("return", s);
                                                    case 8:
                                                        return (i.prev = 8), (i.t0 = i.catch(0)), i.abrupt("return", !1);
                                                    case 11:
                                                    case "end":
                                                        return i.stop();
                                                }
                                        },
                                        r,
                                        null,
                                        [[0, 8]]
                                    );
                                })
                            ),
                            [n, t, e, a]
                        ),
                    };
                },
                y = function (e, t) {
                    var n = Object(o.b)(),
                        a = Object(u.c)().account,
                        l = Object(d.f)(t);
                    return {
                        onApprove: Object(s.useCallback)(
                            Object(r.a)(
                                i.a.mark(function r() {
                                    var s;
                                    return i.a.wrap(
                                        function (i) {
                                            for (;;)
                                                switch ((i.prev = i.next)) {
                                                    case 0:
                                                        return (i.prev = 0), (i.next = 3), Object(c.a)(e, l, a);
                                                    case 3:
                                                        return (s = i.sent), n(Object(p.i)(t, a)), i.abrupt("return", s);
                                                    case 8:
                                                        return (i.prev = 8), (i.t0 = i.catch(0)), i.abrupt("return", !1);
                                                    case 11:
                                                    case "end":
                                                        return i.stop();
                                                }
                                        },
                                        r,
                                        null,
                                        [[0, 8]]
                                    );
                                })
                            ),
                            [a, n, e, l, t]
                        ),
                    };
                },
                m = function () {
                    var e = Object(u.c)().account,
                        t = Object(d.a)(),
                        n = Object(d.c)();
                    return {
                        onApprove: Object(s.useCallback)(
                            Object(r.a)(
                                i.a.mark(function a() {
                                    var r;
                                    return i.a.wrap(
                                        function (a) {
                                            for (;;)
                                                switch ((a.prev = a.next)) {
                                                    case 0:
                                                        return (a.prev = 0), (a.next = 3), Object(c.a)(t, n, e);
                                                    case 3:
                                                        return (r = a.sent), a.abrupt("return", r);
                                                    case 7:
                                                        return (a.prev = 7), (a.t0 = a.catch(0)), a.abrupt("return", !1);
                                                    case 10:
                                                    case "end":
                                                        return a.stop();
                                                }
                                        },
                                        a,
                                        null,
                                        [[0, 7]]
                                    );
                                })
                            ),
                            [e, t, n]
                        ),
                    };
                };
        },
        249: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return y;
            }),
                n.d(t, "a", function () {
                    return m;
                }),
                n.d(t, "c", function () {
                    return b;
                });
            var a = n(61),
                i = n(2),
                r = n.n(i),
                s = n(11),
                u = n(0),
                o = n(27),
                p = n(25),
                c = n(40),
                d = n(51),
                l = n(49),
                y = function (e) {
                    var t = Object(p.b)(),
                        n = Object(o.c)().account,
                        a = Object(l.e)();
                    return {
                        onReward: Object(u.useCallback)(
                            Object(s.a)(
                                r.a.mark(function i() {
                                    var s;
                                    return r.a.wrap(function (i) {
                                        for (;;)
                                            switch ((i.prev = i.next)) {
                                                case 0:
                                                    return (i.next = 2), Object(d.b)(a, e, n);
                                                case 2:
                                                    return (s = i.sent), t(Object(c.b)(n)), i.abrupt("return", s);
                                                case 5:
                                                case "end":
                                                    return i.stop();
                                            }
                                    }, i);
                                })
                            ),
                            [n, t, e, a]
                        ),
                    };
                },
                m = function (e) {
                    var t = Object(o.c)().account,
                        n = Object(l.e)();
                    return {
                        onReward: Object(u.useCallback)(
                            Object(s.a)(
                                r.a.mark(function i() {
                                    var s;
                                    return r.a.wrap(function (i) {
                                        for (;;)
                                            switch ((i.prev = i.next)) {
                                                case 0:
                                                    return (
                                                        (s = e.reduce(function (e, i) {
                                                            return [].concat(Object(a.a)(e), [Object(d.b)(n, i, t)]);
                                                        }, [])),
                                                        i.abrupt("return", Promise.all(s))
                                                    );
                                                case 2:
                                                case "end":
                                                    return i.stop();
                                            }
                                    }, i);
                                })
                            ),
                            [t, e, n]
                        ),
                    };
                },
                b = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Object(p.b)(),
                        a = Object(o.c)(),
                        i = a.account,
                        y = Object(l.f)(e),
                        m = Object(l.e)(),
                        b = Object(u.useCallback)(
                            Object(s.a)(
                                r.a.mark(function a() {
                                    return r.a.wrap(function (a) {
                                        for (;;)
                                            switch ((a.prev = a.next)) {
                                                case 0:
                                                    if (0 !== e) {
                                                        a.next = 5;
                                                        break;
                                                    }
                                                    return (a.next = 3), Object(d.b)(m, 0, i);
                                                case 3:
                                                    a.next = 12;
                                                    break;
                                                case 5:
                                                    if (!t) {
                                                        a.next = 10;
                                                        break;
                                                    }
                                                    return (a.next = 8), Object(d.h)(y, i);
                                                case 8:
                                                    a.next = 12;
                                                    break;
                                                case 10:
                                                    return (a.next = 12), Object(d.g)(y, i);
                                                case 12:
                                                    n(Object(c.k)(e, i)), n(Object(c.j)(e, i));
                                                case 14:
                                                case "end":
                                                    return a.stop();
                                            }
                                    }, a);
                                })
                            ),
                            [i, n, t, m, y, e]
                        );
                    return { onReward: b };
                };
        },
        255: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return l;
            });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(0),
                u = n(27),
                o = n(25),
                p = n(40),
                c = n(51),
                d = n(49),
                l = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = Object(o.b)(),
                        a = Object(u.c)(),
                        l = a.account,
                        y = Object(d.e)(),
                        m = Object(d.f)(e),
                        b = Object(s.useCallback)(
                            (function () {
                                var a = Object(r.a)(
                                    i.a.mark(function a(r, s) {
                                        return i.a.wrap(function (a) {
                                            for (;;)
                                                switch ((a.prev = a.next)) {
                                                    case 0:
                                                        if (0 !== e) {
                                                            a.next = 5;
                                                            break;
                                                        }
                                                        return (a.next = 3), Object(c.i)(y, 0, r, l);
                                                    case 3:
                                                        a.next = 12;
                                                        break;
                                                    case 5:
                                                        if (!t) {
                                                            a.next = 10;
                                                            break;
                                                        }
                                                        return (a.next = 8), Object(c.e)(m, r, l);
                                                    case 8:
                                                        a.next = 12;
                                                        break;
                                                    case 10:
                                                        return (a.next = 12), Object(c.d)(m, r, s, l);
                                                    case 12:
                                                        n(Object(p.l)(e, l)), n(Object(p.j)(e, l));
                                                    case 14:
                                                    case "end":
                                                        return a.stop();
                                                }
                                        }, a);
                                    })
                                );
                                return function (e, t) {
                                    return a.apply(this, arguments);
                                };
                            })(),
                            [l, n, t, y, m, e]
                        );
                    return { onStake: b };
                };
            t.a = function (e) {
                var t = Object(o.b)(),
                    n = Object(u.c)().account,
                    a = Object(d.e)();
                return {
                    onStake: Object(s.useCallback)(
                        (function () {
                            var s = Object(r.a)(
                                i.a.mark(function r(s) {
                                    var u;
                                    return i.a.wrap(function (i) {
                                        for (;;)
                                            switch ((i.prev = i.next)) {
                                                case 0:
                                                    return (i.next = 2), Object(c.i)(a, e, s, n);
                                                case 2:
                                                    (u = i.sent), t(Object(p.b)(n)), console.info(u);
                                                case 5:
                                                case "end":
                                                    return i.stop();
                                            }
                                    }, r);
                                })
                            );
                            return function (e) {
                                return s.apply(this, arguments);
                            };
                        })(),
                        [n, t, a, e]
                    ),
                };
            };
        },
        256: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return y;
            });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(0),
                u = n(27),
                o = n(25),
                p = n(40),
                c = n(51),
                d = n(49),
                l = [5, 6, 3, 1, 22, 23],
                y = function (e) {
                    var t = Object(o.b)(),
                        n = Object(u.c)().account,
                        a = Object(d.e)(),
                        y = Object(d.f)(e),
                        m = l.includes(e);
                    return {
                        onUnstake: Object(s.useCallback)(
                            (function () {
                                var s = Object(r.a)(
                                    i.a.mark(function r(s, u) {
                                        var o, d, l;
                                        return i.a.wrap(function (i) {
                                            for (;;)
                                                switch ((i.prev = i.next)) {
                                                    case 0:
                                                        if (0 !== e) {
                                                            i.next = 7;
                                                            break;
                                                        }
                                                        return (i.next = 3), Object(c.j)(a, 0, s, n);
                                                    case 3:
                                                        (o = i.sent), console.info(o), (i.next = 18);
                                                        break;
                                                    case 7:
                                                        if (!m) {
                                                            i.next = 14;
                                                            break;
                                                        }
                                                        return (i.next = 10), Object(c.c)(y, s, n);
                                                    case 10:
                                                        (d = i.sent), console.info(d), (i.next = 18);
                                                        break;
                                                    case 14:
                                                        return (i.next = 16), Object(c.f)(y, s, u, n);
                                                    case 16:
                                                        (l = i.sent), console.info(l);
                                                    case 18:
                                                        t(Object(p.l)(e, n)), t(Object(p.j)(e, n)), t(Object(p.k)(e, n));
                                                    case 21:
                                                    case "end":
                                                        return i.stop();
                                                }
                                        }, r);
                                    })
                                );
                                return function (e, t) {
                                    return s.apply(this, arguments);
                                };
                            })(),
                            [n, t, m, a, y, e]
                        ),
                    };
                };
            t.a = function (e) {
                var t = Object(o.b)(),
                    n = Object(u.c)().account,
                    a = Object(d.e)();
                return {
                    onUnstake: Object(s.useCallback)(
                        (function () {
                            var s = Object(r.a)(
                                i.a.mark(function r(s) {
                                    var u;
                                    return i.a.wrap(function (i) {
                                        for (;;)
                                            switch ((i.prev = i.next)) {
                                                case 0:
                                                    return (i.next = 2), Object(c.j)(a, e, s, n);
                                                case 2:
                                                    (u = i.sent), t(Object(p.b)(n)), console.info(u);
                                                case 5:
                                                case "end":
                                                    return i.stop();
                                            }
                                    }, r);
                                })
                            );
                            return function (e) {
                                return s.apply(this, arguments);
                            };
                        })(),
                        [n, t, a, e]
                    ),
                };
            };
        },
        346: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        347: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DevWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"},{"indexed":false,"internalType":"uint8[4]","name":"winningNumbers","type":"uint8[4]"}],"name":"Drawing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MultiClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"issueIndex","type":"uint256"}],"name":"Reset","type":"event"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"adminWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allocation","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4]","name":"_numbers","type":"uint8[4]"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_externalRandomNumber","type":"uint256"}],"name":"drawing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"drawingPhase","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"enterDrawingPhase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8[4]","name":"number","type":"uint8[4]"}],"name":"generateNumberIndexKey","outputs":[{"internalType":"uint64[11]","name":"","type":"uint64[11]"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"},{"internalType":"uint256","name":"_matchingNumber","type":"uint256"}],"name":"getMatchingRewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getRewardView","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"getTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"historyNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_cake","type":"address"},{"internalType":"contract LotteryNFT","name":"_lottery","type":"address"},{"internalType":"uint256","name":"_minPrice","type":"uint256"},{"internalType":"uint8","name":"_maxNumber","type":"uint8"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lotteryNFT","outputs":[{"internalType":"contract LotteryNFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNumber","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint8[4][]","name":"_numbers","type":"uint8[4][]"}],"name":"multiBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tickets","type":"uint256[]"}],"name":"multiClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_allcation1","type":"uint8"},{"internalType":"uint8","name":"_allcation2","type":"uint8"},{"internalType":"uint8","name":"_allcation3","type":"uint8"},{"internalType":"uint8","name":"_allcation4","type":"uint8"}],"name":"setAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_maxNumber","type":"uint8"}],"name":"setMaxNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setMinPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAddresses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint64","name":"","type":"uint64"}],"name":"userBuyAmountSum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winningNumbers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]'
            );
        },
        348: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"claimInfo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"issueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"lotteryInfo","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint8[4]","name":"_lotteryNumbers","type":"uint8[4]"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_issueIndex","type":"uint256"}],"name":"newLotteryItem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryNumbers","outputs":[{"internalType":"uint8[4]","name":"","type":"uint8[4]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLotteryIssueIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"multiClaimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true}]'
            );
        },
        398: function (e, t, n) {
            "use strict";
            var a,
                i = n(18),
                r = n(8).e.div(
                    a ||
                        (a = Object(i.a)([
                            "\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n",
                        ]))
                );
            t.a = r;
        },
        399: function (e, t, n) {
            "use strict";
            var a,
                i = n(18),
                r = n(8).e.div(
                    a || (a = Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n"])),
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    }
                );
            t.a = r;
        },
        40: function (e, t, n) {
            "use strict";
            var a = n(143);
            n.d(t, "c", function () {
                return a.c;
            }),
                n.d(t, "b", function () {
                    return a.b;
                });
            var i = n(97);
            n.d(t, "a", function () {
                return i.a;
            }),
                n.d(t, "g", function () {
                    return i.d;
                }),
                n.d(t, "f", function () {
                    return i.c;
                });
            var r = n(91);
            n.d(t, "d", function () {
                return r.b;
            }),
                n.d(t, "e", function () {
                    return r.c;
                }),
                n.d(t, "i", function () {
                    return r.d;
                }),
                n.d(t, "j", function () {
                    return r.e;
                }),
                n.d(t, "k", function () {
                    return r.f;
                }),
                n.d(t, "l", function () {
                    return r.g;
                });
            n(98), n(86);
            var s = n(170);
            n.d(t, "h", function () {
                return s.b;
            });
        },
        41: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return g;
            }),
                n.d(t, "f", function () {
                    return w;
                }),
                n.d(t, "m", function () {
                    return x;
                }),
                n.d(t, "k", function () {
                    return k;
                }),
                n.d(t, "d", function () {
                    return M;
                }),
                n.d(t, "l", function () {
                    return A;
                }),
                n.d(t, "j", function () {
                    return C;
                }),
                n.d(t, "b", function () {
                    return I;
                }),
                n.d(t, "c", function () {
                    return _;
                }),
                n.d(t, "g", function () {
                    return S;
                }),
                n.d(t, "h", function () {
                    return B;
                }),
                n.d(t, "i", function () {
                    return P;
                }),
                n.d(t, "e", function () {
                    return E;
                });
            var a = n(69),
                i = n(245),
                r = n(46),
                s = n(24),
                u = n(415),
                o = n(416),
                p = n(417),
                c = n(418),
                d = n(88),
                l = n(175),
                y = n(419),
                m = n(420),
                b = n(347),
                f = n(348),
                T = n(92),
                h = n(101),
                j = n(421),
                v = n(422),
                O = function (e, t, n) {
                    return new (null !== n && void 0 !== n ? n : a.a).eth.Contract(e, t);
                },
                g = function (e, t) {
                    return O(d, e, t);
                },
                w = function (e, t) {
                    return O(y, e, t);
                },
                x = function (e, t) {
                    var n = i.c.find(function (t) {
                            return t.sousId === e;
                        }),
                        a = n.poolCategory === r.a.BINANCE ? j : h;
                    return O(a, Object(s.a)(n.contractAddress), t);
                },
                k = function (e) {
                    return O(m, Object(s.l)(), e);
                },
                M = function (e) {
                    return O(l, Object(s.d)(), e);
                },
                A = function (e) {
                    return O(u, Object(s.j)(), e);
                },
                C = function (e) {
                    return O(o, Object(s.k)(), e);
                },
                I = function (e) {
                    return O(p, Object(s.b)(), e);
                },
                _ = function (e) {
                    return O(c, Object(s.c)(), e);
                },
                S = function (e) {
                    return O(b, Object(s.f)(), e);
                },
                B = function (e) {
                    return O(f, Object(s.g)(), e);
                },
                P = function (e) {
                    return O(T, Object(s.h)(), e);
                },
                E = function (e) {
                    return O(v, Object(s.e)(), e);
                };
        },
        413: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
            );
        },
        415: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_numberCakeToReactivate","type":"uint256"},{"internalType":"uint256","name":"_numberCakeToRegister","type":"uint256"},{"internalType":"uint256","name":"_numberCakeToUpdate","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"string","name":"teamName","type":"string"}],"name":"TeamAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"TeamPointIncrease","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"oldTeamId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTeamId","type":"uint256"}],"name":"UserChangeTeam","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserNew","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"}],"name":"UserPause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"UserPointIncrease","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"userAddresses","type":"address[]"},{"indexed":false,"internalType":"uint256","name":"numberPoints","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"campaignId","type":"uint256"}],"name":"UserPointIncreaseMultiple","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"teamId","type":"uint256"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserReactivate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UserUpdate","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POINT_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SPECIAL_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"}],"name":"addNftAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_teamName","type":"string"},{"internalType":"string","name":"_teamDescription","type":"string"}],"name":"addTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_newTeamId","type":"uint256"}],"name":"changeTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"createProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"getTeamProfile","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getUserProfile","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseTeamPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseUserPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_userAddresses","type":"address[]"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"},{"internalType":"uint256","name":"_campaignId","type":"uint256"}],"name":"increaseUserPointsMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"makeTeamJoinable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"}],"name":"makeTeamNotJoinable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberActiveProfiles","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToReactivate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToRegister","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCakeToUpdate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberTeams","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pauseProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"reactivateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeTeamPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeUserPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_userAddresses","type":"address[]"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"removeUserPointsMultiple","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_teamId","type":"uint256"},{"internalType":"string","name":"_teamName","type":"string"},{"internalType":"string","name":"_teamDescription","type":"string"}],"name":"renameTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newNumberCakeToReactivate","type":"uint256"},{"internalType":"uint256","name":"_newNumberCakeToRegister","type":"uint256"},{"internalType":"uint256","name":"_newNumberCakeToUpdate","type":"uint256"}],"name":"updateNumberCake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"updateProfile","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        416: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyBurnCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyId","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"getBunnyName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBunnyNameOfTokenId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_name","type":"string"}],"name":"setBunnyName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        417: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract BunnyFactoryV2","name":"_bunnyFactoryV2","type":"address"},{"internalType":"contract BunnyMintingStation","name":"_bunnyMintingStation","type":"address"},{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"},{"internalType":"string","name":"_ipfsHash","type":"string"},{"internalType":"uint256","name":"_startBlockNumber","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"bunnyFactoryV2","outputs":[{"internalType":"contract BunnyFactoryV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"canMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_bunnyId5Json","type":"string"},{"internalType":"string","name":"_bunnyId6Json","type":"string"},{"internalType":"string","name":"_bunnyId7Json","type":"string"},{"internalType":"string","name":"_bunnyId8Json","type":"string"},{"internalType":"string","name":"_bunnyId9Json","type":"string"}],"name":"setBunnyJson","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newStartBlockNumber","type":"uint256"}],"name":"setStartBlockNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newTokenPrice","type":"uint256"}],"name":"updateTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        418: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract BunnyMintingStation","name":"_bunnyMintingStation","type":"address"},{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"contract IPancakeProfile","name":"_pancakeProfile","type":"address"},{"internalType":"uint256","name":"_maxViewLength","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"costCake","type":"uint256"}],"name":"BunnyAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"costCake","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isActive","type":"bool"}],"name":"BunnyChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":true,"internalType":"uint8","name":"bunnyId","type":"uint8"}],"name":"BunnyMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"string","name":"_tokenURI","type":"string"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"},{"internalType":"uint256","name":"_cakeCost","type":"uint256"}],"name":"addBunny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"","type":"uint8"}],"name":"bunnyCharacteristics","outputs":[{"internalType":"string","name":"tokenURI","type":"string"},{"internalType":"uint256","name":"thresholdUser","type":"uint256"},{"internalType":"uint256","name":"cakeCost","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isCreated","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bunnyMintingStation","outputs":[{"internalType":"contract BunnyMintingStation","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"c__0xf318aee2","type":"bytes32"}],"name":"c_0xf318aee2","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint8[]","name":"_bunnyIds","type":"uint8[]"}],"name":"canClaimMultiple","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"canClaimSingle","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxViewLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"}],"name":"mintNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberDifferentBunnies","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pancakeProfile","outputs":[{"internalType":"contract IPancakeProfile","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_bunnyId","type":"uint8"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"},{"internalType":"uint256","name":"_cakeCost","type":"uint256"},{"internalType":"bool","name":"_isActive","type":"bool"}],"name":"updateBunny","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxViewLength","type":"uint256"}],"name":"updateMaxViewLength","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        419: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"contract IBEP20","name":"_offeringToken","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"uint256","name":"_offeringAmount","type":"uint256"},{"internalType":"uint256","name":"_raisingAmount","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"offeringAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"excessAmount","type":"uint256"}],"name":"Harvest","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lpAmount","type":"uint256"},{"internalType":"uint256","name":"_offerAmount","type":"uint256"}],"name":"finalWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getOfferingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefundingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"hasHarvest","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"offeringToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"raisingAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"}]'
            );
        },
        420: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"address","name":"_pancakeProfileAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"},{"internalType":"uint256","name":"_campaignId","type":"uint256"},{"internalType":"uint256","name":"_thresholdToClaim","type":"uint256"},{"internalType":"uint256","name":"_numberPoints","type":"uint256"}],"name":"addIFOAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"checkClaimStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"address[]","name":"_contractAddresses","type":"address[]"}],"name":"checkClaimStatuses","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"getPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ifos","outputs":[{"internalType":"uint256","name":"thresholdToClaim","type":"uint256"},{"internalType":"uint256","name":"campaignId","type":"uint256"},{"internalType":"uint256","name":"numberPoints","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        421: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract IBEP20","name":"_lp","type":"address"},{"internalType":"contract IBEP20","name":"_rewardToken","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"},{"internalType":"address","name":"_adminAddress","type":"address"},{"internalType":"address","name":"_wbnb","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"WBNB","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyRewardWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"removeBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_adminAddress","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_blacklistAddress","type":"address"}],"name":"setBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"setLimitAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"bool","name":"inBlackList","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
            );
        },
        422: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract IBEP20","name":"_cakeToken","type":"address"},{"internalType":"address","name":"_pancakeProfileAddress","type":"address"},{"internalType":"uint256","name":"_numberCake","type":"uint256"},{"internalType":"uint256","name":"_thresholdUser","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"cakeToken","outputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCakeBack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"thresholdUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        45: function (e, t, n) {
            "use strict";
            n.d(t, "g", function () {
                return O;
            }),
                n.d(t, "d", function () {
                    return g;
                }),
                n.d(t, "b", function () {
                    return x;
                }),
                n.d(t, "c", function () {
                    return k;
                }),
                n.d(t, "i", function () {
                    return M;
                }),
                n.d(t, "j", function () {
                    return A;
                }),
                n.d(t, "k", function () {
                    return C;
                }),
                n.d(t, "l", function () {
                    return I;
                }),
                n.d(t, "n", function () {
                    return _;
                }),
                n.d(t, "f", function () {
                    return S;
                }),
                n.d(t, "m", function () {
                    return B;
                }),
                n.d(t, "e", function () {
                    return P;
                }),
                n.d(t, "h", function () {
                    return E;
                }),
                n.d(t, "a", function () {
                    return D;
                });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(0),
                u = n(13),
                o = n.n(u),
                p = n(80),
                c = n(27),
                d = n(12),
                l = n(25),
                y = n(69),
                m = n(151),
                b = n(40),
                f = n(98),
                T = (n(86), n(182), n(177)),
                h = n(22),
                j = function () {
                    var e = Object(s.useState)(null),
                        t = Object(h.a)(e, 2),
                        n = t[0],
                        a = t[1];
                    return (
                        Object(s.useEffect)(
                            function () {
                                (function () {
                                    var e = Object(r.a)(
                                        i.a.mark(function e() {
                                            var t, n;
                                            return i.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.prev = 0), (e.next = 3), fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd");
                                                            case 3:
                                                                return (t = e.sent), (e.next = 6), t.json();
                                                            case 6:
                                                                (n = e.sent), a(n.binancecoin.usd), (e.next = 13);
                                                                break;
                                                            case 10:
                                                                (e.prev = 10), (e.t0 = e.catch(0)), console.error("Unable to fetch price data:", e.t0);
                                                            case 13:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null,
                                                [[0, 10]]
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })()();
                            },
                            [a]
                        ),
                        n
                    );
                },
                v = new o.a(0),
                O = function () {
                    var e = Object(l.b)(),
                        t = Object(m.a)().slowRefresh;
                    Object(s.useEffect)(
                        function () {
                            e(Object(b.c)()), e(Object(b.d)());
                        },
                        [e, t]
                    ),
                        Object(s.useEffect)(
                            function () {
                                var t = Object(y.b)(),
                                    n = setInterval(
                                        Object(r.a)(
                                            i.a.mark(function n() {
                                                var a;
                                                return i.a.wrap(function (n) {
                                                    for (;;)
                                                        switch ((n.prev = n.next)) {
                                                            case 0:
                                                                return (n.next = 2), t.eth.getBlockNumber();
                                                            case 2:
                                                                (a = n.sent), e(Object(b.h)(a));
                                                            case 4:
                                                            case "end":
                                                                return n.stop();
                                                        }
                                                }, n);
                                            })
                                        ),
                                        6e3
                                    );
                                return function () {
                                    return clearInterval(n);
                                };
                            },
                            [e]
                        );
                },
                g = function () {
                    return Object(l.c)(function (e) {
                        return e.farms.data;
                    });
                },
                w = function (e) {
                    return Object(l.c)(function (t) {
                        return t.farms.data.find(function (t) {
                            return t.pid === e;
                        });
                    });
                },
                x = function (e) {
                    return Object(l.c)(function (t) {
                        return t.farms.data.find(function (t) {
                            return t.lpSymbol === e;
                        });
                    });
                },
                k = function (e) {
                    var t = w(e);
                    return {
                        allowance: t.userData ? new o.a(t.userData.allowance) : new o.a(0),
                        tokenBalance: t.userData ? new o.a(t.userData.tokenBalance) : new o.a(0),
                        stakedBalance: t.userData ? new o.a(t.userData.stakedBalance) : new o.a(0),
                        earnings: t.userData ? new o.a(t.userData.earnings) : new o.a(0),
                    };
                },
                M = function (e) {
                    var t = Object(m.a)().fastRefresh,
                        n = Object(l.b)();
                    return (
                        Object(s.useEffect)(
                            function () {
                                e && n(Object(b.e)(e));
                            },
                            [e, n, t]
                        ),
                        Object(l.c)(function (e) {
                            return e.pools.data;
                        })
                    );
                },
                A = function () {
                    var e = j();
                    return new o.a(e);
                },
                C = function () {
                    var e = j();
                    e = new o.a(e);
                    var t = w(1);
                    return t.tokenPriceVsQuote ? e.times(t.tokenPriceVsQuote) : v;
                },
                I = function () {
                    var e = A(),
                        t = w(0);
                    return t.tokenPriceVsQuote ? e.times(t.tokenPriceVsQuote) : v;
                },
                _ = function () {
                    var e = Object(l.b)();
                    return Object(s.useMemo)(
                        function () {
                            var t = function (t) {
                                return e(Object(b.f)(t));
                            };
                            return {
                                toastError: function (e, n) {
                                    return t({ id: Object(p.kebabCase)(e), type: d.V.DANGER, title: e, description: n });
                                },
                                toastInfo: function (e, n) {
                                    return t({ id: Object(p.kebabCase)(e), type: d.V.INFO, title: e, description: n });
                                },
                                toastSuccess: function (e, n) {
                                    return t({ id: Object(p.kebabCase)(e), type: d.V.SUCCESS, title: e, description: n });
                                },
                                toastWarning: function (e, n) {
                                    return t({ id: Object(p.kebabCase)(e), type: d.V.WARNING, title: e, description: n });
                                },
                                push: t,
                                remove: function (t) {
                                    return e(Object(b.g)(t));
                                },
                                clear: function () {
                                    return e(Object(b.a)());
                                },
                            };
                        },
                        [e]
                    );
                },
                S = function () {
                    var e = Object(c.c)().account,
                        t = Object(l.b)();
                    Object(s.useEffect)(
                        function () {
                            t(Object(f.b)(e));
                        },
                        [e, t]
                    );
                },
                B = function () {
                    var e = Object(l.c)(function (e) {
                            return e.profile;
                        }),
                        t = e.isInitialized,
                        n = e.isLoading,
                        a = e.data,
                        i = e.hasRegistered;
                    return { profile: a, hasProfile: t && i, isInitialized: t, isLoading: n };
                },
                P = function () {
                    var e = Object(m.a)().slowRefresh,
                        t = Object(l.b)();
                    Object(s.useEffect)(
                        function () {
                            t(Object(T.b)());
                        },
                        [t, e]
                    );
                },
                E = function (e) {
                    var t = Object(l.c)(function (e) {
                        return e.prices.data;
                    });
                    return t ? t[e.toLowerCase()] : null;
                },
                D = function () {
                    return Object(l.c)(function (e) {
                        return e.block;
                    });
                };
        },
        46: function (e, t, n) {
            "use strict";
            var a, i;
            n.d(t, "b", function () {
                return a;
            }),
                n.d(t, "a", function () {
                    return i;
                }),
                (function (e) {
                    (e.BNB = "BNB"), (e.CAKE = "VICTORY"), (e.SYRUP = "SYRUP"), (e.BUSD = "BUSD"), (e.TWT = "TWT"), (e.UST = "UST"), (e.ETH = "ETH"), (e.COMP = "COMP"), (e.SUSHI = "SUSHI"), (e.TPT = "TPT");
                })(a || (a = {})),
                (function (e) {
                    (e.COMMUNITY = "Community"), (e.CORE = "Core"), (e.BINANCE = "Binance");
                })(i || (i = {}));
        },
        49: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return s;
            }),
                n.d(t, "a", function () {
                    return u;
                }),
                n.d(t, "c", function () {
                    return o;
                }),
                n.d(t, "d", function () {
                    return p;
                }),
                n.d(t, "e", function () {
                    return c;
                }),
                n.d(t, "f", function () {
                    return d;
                });
            var a = n(0),
                i = n(65),
                r = n(41),
                s = function (e) {
                    var t = Object(i.a)();
                    return Object(a.useMemo)(
                        function () {
                            return Object(r.a)(e, t);
                        },
                        [e, t]
                    );
                },
                u = function () {
                    var e = Object(i.a)();
                    return Object(a.useMemo)(
                        function () {
                            return Object(r.d)(e);
                        },
                        [e]
                    );
                },
                o = function () {
                    var e = Object(i.a)();
                    return Object(a.useMemo)(
                        function () {
                            return Object(r.g)(e);
                        },
                        [e]
                    );
                },
                p = function () {
                    var e = Object(i.a)();
                    return Object(a.useMemo)(
                        function () {
                            return Object(r.h)(e);
                        },
                        [e]
                    );
                },
                c = function () {
                    var e = Object(i.a)();
                    return Object(a.useMemo)(
                        function () {
                            return Object(r.i)(e);
                        },
                        [e]
                    );
                },
                d = function (e) {
                    var t = Object(i.a)();
                    return Object(a.useMemo)(
                        function () {
                            return Object(r.m)(e, t);
                        },
                        [e, t]
                    );
                };
        },
        496: function (e, t) {},
        51: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return p;
            }),
                n.d(t, "i", function () {
                    return c;
                }),
                n.d(t, "d", function () {
                    return d;
                }),
                n.d(t, "e", function () {
                    return l;
                }),
                n.d(t, "j", function () {
                    return y;
                }),
                n.d(t, "f", function () {
                    return m;
                }),
                n.d(t, "c", function () {
                    return b;
                }),
                n.d(t, "b", function () {
                    return f;
                }),
                n.d(t, "g", function () {
                    return T;
                }),
                n.d(t, "h", function () {
                    return h;
                });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(13),
                u = n.n(s),
                o = n(181),
                p = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n, a) {
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return e.abrupt("return", t.methods.approve(n.options.address, o.a.constants.MaxUint256).send({ from: a }));
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n, a) {
                        return e.apply(this, arguments);
                    };
                })(),
                c = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n, a, r) {
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (0 !== n) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .enterStaking(new u.a(a).times(new u.a(10).pow(18)).toString())
                                                    .send({ from: r, gas: 2e5 })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 2:
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .deposit(n, new u.a(a).times(new u.a(10).pow(18)).toString())
                                                    .send({ from: r, gas: 2e5 })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n, a, i) {
                        return e.apply(this, arguments);
                    };
                })(),
                d = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n) {
                            var a,
                                r,
                                s = arguments;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (a = s.length > 2 && void 0 !== s[2] ? s[2] : 18),
                                                (r = s.length > 3 ? s[3] : void 0),
                                                e.abrupt(
                                                    "return",
                                                    t.methods
                                                        .deposit(new u.a(n).times(new u.a(10).pow(a)).toString())
                                                        .send({ from: r, gas: 2e5 })
                                                        .on("transactionHash", function (e) {
                                                            return e.transactionHash;
                                                        })
                                                )
                                            );
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n) {
                        return e.apply(this, arguments);
                    };
                })(),
                l = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n, a) {
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .deposit()
                                                    .send({ from: a, gas: 2e5, value: new u.a(n).times(new u.a(10).pow(18)).toString() })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n, a) {
                        return e.apply(this, arguments);
                    };
                })(),
                y = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n, a, r) {
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (0 !== n) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .leaveStaking(new u.a(a).times(new u.a(10).pow(18)).toString())
                                                    .send({ from: r, gas: 2e5 })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 2:
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .withdraw(n, new u.a(a).times(new u.a(10).pow(18)).toString())
                                                    .send({ from: r, gas: 2e5 })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n, a, i) {
                        return e.apply(this, arguments);
                    };
                })(),
                m = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n) {
                            var a,
                                r,
                                s = arguments;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (((a = s.length > 2 && void 0 !== s[2] ? s[2] : 18), (r = s.length > 3 ? s[3] : void 0), "0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC" !== t.options.address)) {
                                                e.next = 4;
                                                break;
                                            }
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .emergencyWithdraw()
                                                    .send({ from: r })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 4:
                                            if ("0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831" !== t.options.address) {
                                                e.next = 6;
                                                break;
                                            }
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .emergencyWithdraw()
                                                    .send({ from: r })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 6:
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .withdraw(new u.a(n).times(new u.a(10).pow(a)).toString())
                                                    .send({ from: r, gas: 2e5 })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 7:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n) {
                        return e.apply(this, arguments);
                    };
                })(),
                b = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n, a) {
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .emergencyWithdraw()
                                                    .send({ from: a })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n, a) {
                        return e.apply(this, arguments);
                    };
                })(),
                f = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n, a) {
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (0 !== n) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .leaveStaking("0")
                                                    .send({ from: a, gas: 2e5 })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 2:
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .deposit(n, "0")
                                                    .send({ from: a, gas: 2e5 })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 3:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n, a) {
                        return e.apply(this, arguments);
                    };
                })(),
                T = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n) {
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .deposit("0")
                                                    .send({ from: n, gas: 2e5 })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n) {
                        return e.apply(this, arguments);
                    };
                })(),
                h = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n) {
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return e.abrupt(
                                                "return",
                                                t.methods
                                                    .deposit()
                                                    .send({ from: n, gas: 2e5, value: new u.a(0) })
                                                    .on("transactionHash", function (e) {
                                                        return e.transactionHash;
                                                    })
                                            );
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n) {
                        return e.apply(this, arguments);
                    };
                })();
        },
        520: function (e, t) {},
        522: function (e, t) {},
        54: function (e, t, n) {
            "use strict";
            var a = n(0),
                i = n(80),
                r = n(180);
            t.a = function () {
                var e = Object(a.useContext)(r.a).translations;
                return function (t, n) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (0 === e.length) return n;
                    var r = e.find(function (e) {
                        return e.data.stringId === t;
                    });
                    if (r) {
                        var s = r.data.text,
                            u = s.includes("%");
                        if (u) {
                            var o = s;
                            return Object(i.isEmpty)(a)
                                ? n
                                : (Object.keys(a).forEach(function (e) {
                                      var t = new RegExp("%".concat(e, "%"), "g");
                                      o = o.replace(t, a[e]);
                                  }),
                                  o);
                        }
                        return s;
                    }
                    return n;
                };
            };
        },
        58: function (e, t, n) {
            "use strict";
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(848),
                u = n(69),
                o = n(346),
                p = n(24),
                c = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t, n) {
                            var a, r, c, d, l, y, m;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (a = Object(u.b)()),
                                                (r = new a.eth.Contract(o, Object(p.i)())),
                                                (c = new s.b(t)),
                                                (d = n.map(function (e) {
                                                    return [e.address.toLowerCase(), c.encodeFunctionData(e.name, e.params)];
                                                })),
                                                (e.next = 6),
                                                r.methods.aggregate(d).call()
                                            );
                                        case 6:
                                            return (
                                                (l = e.sent),
                                                (y = l.returnData),
                                                (m = y.map(function (e, t) {
                                                    return c.decodeFunctionResult(n[t].name, e);
                                                })),
                                                e.abrupt("return", m)
                                            );
                                        case 10:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t, n) {
                        return e.apply(this, arguments);
                    };
                })();
            t.a = c;
        },
        597: function (e, t) {},
        599: function (e, t) {},
        62: function (e, t, n) {
            "use strict";
            t.a = {
                cake: { 97: "", 56: "0xb024cb772a92acdda5da5be6048f98f16be34863" },
                syrup: { 97: "", 56: "0x3bb76ea919d13dd1e0db6f600f3685a8628aaba9" },
                masterChef: { 97: "", 56: "0x478dD70428B1667f6fca1284066D0561e8142917" },
                sousChef: { 97: "", 56: "0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95" },
                wbnb: { 97: "", 56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" },
                lottery: { 97: "", 56: "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91" },
                lotteryNFT: { 97: "", 56: "0x5e74094Cd416f55179DBd0E45b1a8ED030e396A1" },
                mulltiCall: { 56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb", 97: "" },
                busd: { 56: "0xe9e7cea3dedca5984780bafc599bd69add087d56", 97: "" },
                ust: { 56: "0x23396cF899Ca06c4472205fC903bDB4de249D6fC", 97: "" },
                pancakeProfile: { 56: "0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a", 97: "" },
                pancakeRabbits: { 56: "0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07", 97: "" },
                bunnyFactory: { 56: "0xfa249Caa1D16f75fa159F7DFBAc0cC5EaB48CeFf", 97: "" },
                eth: { 56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8", 97: "" },
                claimRefund: { 56: "0xE7e53A7e9E3Cf6b840f167eF69519175c497e149", 97: "" },
                pointCenterIfo: { 56: "0x3C6919b132462C1FEc572c6300E83191f4F0012a", 97: "" },
                bunnySpecial: { 56: "0xFee8A195570a18461146F401d6033f5ab3380849", 97: "" },
            };
        },
        631: function (e, t) {},
        636: function (e, t) {},
        638: function (e, t) {},
        64: function (e, t, n) {
            "use strict";
            var a = n(46),
                i = [
                    {
                        sousId: 0,
                        tokenName: "VICTORY",
                        tokenAddress: "0xb024cb772a92acdda5da5be6048f98f16be34863",
                        stakingTokenName: a.b.CAKE,
                        stakingTokenAddress: "0xb024cb772a92acdda5da5be6048f98f16be34863",
                        contractAddress: { 97: "", 56: "0x478dD70428B1667f6fca1284066D0561e8142917" },
                        poolCategory: a.a.CORE,
                        projectLink: "/",
                        harvest: !0,
                        tokenPerBlock: "10",
                        sortOrder: 1,
                        isFinished: !1,
                        tokenDecimals: 18,
                    },
                ];
            t.a = i;
        },
        645: function (e, t) {},
        65: function (e, t, n) {
            "use strict";
            var a = n(22),
                i = n(0),
                r = n(126),
                s = n.n(r),
                u = n(27),
                o = n(69);
            t.a = function () {
                var e = Object(u.c)().library,
                    t = Object(i.useRef)(e),
                    n = Object(i.useState)(e ? new s.a(e) : Object(o.b)()),
                    r = Object(a.a)(n, 2),
                    p = r[0],
                    c = r[1];
                return (
                    Object(i.useEffect)(
                        function () {
                            e !== t.current && (c(e ? new s.a(e) : Object(o.b)()), (t.current = e));
                        },
                        [e]
                    ),
                    p
                );
            };
        },
        658: function (e, t) {},
        69: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return p;
            });
            var a = n(126),
                i = n.n(a),
                r = n(125),
                s = Object(r.a)(),
                u = new i.a.providers.HttpProvider(s, { timeout: 1e4 }),
                o = new i.a(u),
                p = function () {
                    return o;
                };
            t.a = o;
        },
        72: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return r;
            }),
                n.d(t, "b", function () {
                    return s;
                });
            var a = n(13),
                i = n.n(a),
                r = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                        n = new i.a(e).dividedBy(new i.a(10).pow(t));
                    return n.toNumber();
                },
                s = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
                    return e.dividedBy(new i.a(10).pow(t)).toFixed();
                };
        },
        75: function (e, t, n) {
            "use strict";
            var a = n(62),
                i = n(46),
                r = [
                    {
                        pid: 0,
                        lpSymbol: "VICTORY",
                        lpAddresses: { 97: "", 56: "0xb024cb772a92acdda5da5be6048f98f16be34863" },
                        tokenSymbol: "SYRUP",
                        tokenAddresses: { 97: "", 56: "0xb024cb772a92acdda5da5be6048f98f16be34863" },
                        quoteTokenSymbol: i.b.BNB,
                        quoteTokenAdresses: a.a.wbnb,
                    },
                    {
                        pid: 1,
                        lpSymbol: "VICTORY-BNB LP",
                        lpAddresses: { 97: "", 56: "0x5B23113754958caf2382496987098454051B0A5a" },
                        tokenSymbol: "VICTORY",
                        tokenAddresses: { 97: "", 56: "0xb024cb772a92acdda5da5be6048f98f16be34863" },
                        quoteTokenSymbol: i.b.BNB,
                        quoteTokenAdresses: a.a.wbnb,
                    },
                    {
                        pid: 2,
                        lpSymbol: "VICTORY-BUSD LP",
                        lpAddresses: { 97: "", 56: "0xcC197c99f52ae7E9f9C6F456eE6b7e8CEda6bA11" },
                        tokenSymbol: "VICTORY",
                        tokenAddresses: { 97: "", 56: "0xb024cb772a92acdda5da5be6048f98f16be34863" },
                        quoteTokenSymbol: i.b.BNB,
                        quoteTokenAdresses: a.a.wbnb,
                    },
                ];
            t.a = r;
        },
        846: function (e, t, n) {
            "use strict";
            n.r(t);
            var a,
                i,
                r,
                s = n(0),
                u = n.n(s),
                o = n(99),
                p = n.n(o),
                c = n(44),
                d = n(12),
                l = n(13),
                y = n.n(l),
                m = n(124),
                b = function () {
                    var e = Object(m.a)().login;
                    Object(s.useEffect)(
                        function () {
                            var t = window.localStorage.getItem(d.S);
                            t && t !== d.r.BSC && e(t);
                        },
                        [e]
                    );
                },
                f = n(45),
                T = function () {
                    Object(f.k)();
                    Object(s.useEffect)(function () {
                        console.log("title");
                    });
                },
                h = n(18),
                j = n(8),
                v = Object(j.c)(a || (a = Object(h.a)(["\n\n  * {\n    font-family: 'Kanit', sans-serif;\n  }\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"])), function (e) {
                    return e.theme.colors.background;
                }),
                O = n(15),
                g = n(27),
                w = { code: "en", language: "English" },
                x = [
                    w,
                    { code: "en", language: "..." },
                ],
                k = n(22),
                M = n(426),
                A = n(180),
                C = n(5),
                I = "pancakeSwapLanguage",
                _ = u.a.createContext({ selectedLanguage: w, setSelectedLanguage: function () {}, translatedLanguage: w, setTranslatedLanguage: function () {} }),
                S = parseInt(
                    Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_CHAIN_ID: "56",
                        REACT_APP_GTAG: "GTM-TLF66T4",
                        REACT_APP_NODE_1: "https://bsc-dataseed1.ninicoin.io",
                        REACT_APP_NODE_2: "https://bsc-dataseed1.defibit.io",
                        REACT_APP_NODE_3: "https://bsc-dataseed.binance.org",
                        REACT_APP_SUBGRAPH_PROFILE: "https://api.thegraph.com/subgraphs/name/pancakeswap/profile",
                        REACT_APP_API_PROFILE: "https://profile.pancakeswap.com",
                    }).REACT_APP_CROWDIN_PROJECTID
                ),
                B = new M.StringTranslations({
                    token: Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_CHAIN_ID: "56",
                        REACT_APP_GTAG: "GTM-TLF66T4",
                        REACT_APP_NODE_1: "https://bsc-dataseed1.ninicoin.io",
                        REACT_APP_NODE_2: "https://bsc-dataseed1.defibit.io",
                        REACT_APP_NODE_3: "https://bsc-dataseed.binance.org",
                        REACT_APP_SUBGRAPH_PROFILE: "https://api.thegraph.com/subgraphs/name/pancakeswap/profile",
                        REACT_APP_API_PROFILE: "https://profile.pancakeswap.com",
                    }).REACT_APP_CROWDIN_APIKEY,
                }),
                P = function (e) {
                    var t = e.children,
                        n = Object(s.useState)(w),
                        a = Object(k.a)(n, 2),
                        i = a[0],
                        r = a[1],
                        u = Object(s.useState)(w),
                        o = Object(k.a)(u, 2),
                        p = o[0],
                        c = o[1],
                        d = Object(s.useState)([]),
                        l = Object(k.a)(d, 2),
                        y = l[0],
                        m = l[1];
                    Object(s.useEffect)(function () {
                        var e = localStorage.getItem(I);
                        if (e) {
                            var t = (function (e) {
                                return x.filter(function (t) {
                                    return t.code === e;
                                })[0];
                            })(e);
                            r(t);
                        } else r(w);
                    }, []),
                        Object(s.useEffect)(
                            function () {
                                i &&
                                    (function (e) {
                                        return B.listLanguageTranslations(S, e.code, void 0, 8, 200);
                                    })(i)
                                        .then(function (e) {
                                            e.data.length < 1 ? m([]) : m(e.data);
                                        })
                                        .then(function () {
                                            return c(i);
                                        })
                                        .catch(function (e) {
                                            m([]), console.error("Error while loading translations", e);
                                        });
                            },
                            [i, m]
                        );
                    return Object(C.jsx)(_.Provider, {
                        value: {
                            selectedLanguage: i,
                            setSelectedLanguage: function (e) {
                                r(e), localStorage.setItem(I, e.code);
                            },
                            translatedLanguage: p,
                            setTranslatedLanguage: c,
                        },
                        children: Object(C.jsx)(A.a.Provider, { value: { translations: y, setTranslations: m }, children: t }),
                    });
                },
                E = "IS_DARK",
                D = u.a.createContext({
                    isDark: null,
                    toggleTheme: function () {
                        return null;
                    },
                }),
                N = function (e) {
                    var t = e.children,
                        n = Object(s.useState)(function () {
                            var e = localStorage.getItem(E);
                            return !!e && JSON.parse(e);
                        }),
                        a = Object(k.a)(n, 2),
                        i = a[0],
                        r = a[1];
                    return Object(C.jsx)(D.Provider, {
                        value: {
                            isDark: i,
                            toggleTheme: function () {
                                r(function (e) {
                                    return localStorage.setItem(E, JSON.stringify(!e)), !e;
                                });
                            },
                        },
                        children: Object(C.jsx)(j.b, { theme: i ? d.T : d.U, children: t }),
                    });
                },
                F = function () {
                    var e = Object(s.useContext)(D);
                    return { isDark: e.isDark, toggleTheme: e.toggleTheme, theme: Object(s.useContext)(j.a) };
                },
                R = [
                    { label: "Home", icon: "HomeIcon", href: "/" },
                    {
                        label: "Trade",
                        icon: "TradeIcon",
                        items: [
                            { label: "Exchange", href: "https://dex.warriorswap.finance/" },
                            { label: "Liquidity", href: "https://dex.warriorswap.finance/#/pool" },
                        ],
                    },
                    { label: "Farms", icon: "FarmIcon", href: "/farms" },
                    { label: "Pools", icon: "PoolIcon", href: "/pools" },
                ],
                L = function (e) {
                    var t = Object(g.c)().account,
                        n = Object(m.a)(),
                        a = n.login,
                        i = n.logout,
                        r = Object(s.useContext)(_),
                        u = r.selectedLanguage,
                        o = r.setSelectedLanguage,
                        p = F(),
                        c = p.isDark,
                        l = p.toggleTheme,
                        y = Object(f.k)();
                    Object(f.m)().profile;
                    return Object(C.jsx)(d.B, Object(O.a)({ account: t, login: a, logout: i, isDark: c, toggleTheme: l, currentLang: u && u.code, langs: x, setLang: o, cakePriceUsd: y.toNumber(), links: R }, e));
                },
                U = n(6),
                z = n(7),
                H = n(10),
                J = n(9),
                W = (function (e) {
                    Object(H.a)(n, e);
                    var t = Object(J.a)(n);
                    function n(e) {
                        var a;
                        return Object(U.a)(this, n), ((a = t.call(this, e)).state = { hasError: !1 }), a;
                    }
                    return (
                        Object(z.a)(
                            n,
                            [
                                {
                                    key: "componentDidCatch",
                                    value: function (e) {
                                        var t,
                                            n = "ChunkLoadError" === e.name,
                                            a = "CSS_CHUNK_LOAD_FAILED" === e.code,
                                            i = n || a,
                                            r = !!(null === (t = window.history.state) || void 0 === t ? void 0 : t.isRecoveringFromChunkError);
                                        if (i && !r) {
                                            var s = Object(O.a)(Object(O.a)({}, window.history.state), {}, { isRecoveringFromChunkError: !0 });
                                            return window.history.replaceState(s, ""), void window.location.reload();
                                        }
                                        throw e;
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.state.hasError,
                                            t = this.props.fallback;
                                        return e ? t : Object(C.jsx)(s.Suspense, Object(O.a)({}, this.props));
                                    },
                                },
                            ],
                            [
                                {
                                    key: "getDerivedStateFromError",
                                    value: function () {
                                        return { hasError: !0 };
                                    },
                                },
                            ]
                        ),
                        n
                    );
                })(u.a.Component),
                Q = n(25),
                q = function () {
                    var e = Object(Q.c)(function (e) {
                            return e.toasts.data;
                        }),
                        t = Object(f.n)().remove;
                    return Object(C.jsx)(d.O, {
                        toasts: e,
                        onRemove: function (e) {
                            return t(e);
                        },
                    });
                },
                G = n(183),
                V = n.n(G),
                K = n(427),
                Y = n.n(K),
                Z = n(54),
                X = n(398),
                $ = n(246),
                ee = n(2),
                te = n.n(ee),
                ne = n(11),
                ae = n(242),
                ie = j.e.div(i || (i = Object(h.a)(["\n  color: ", ";\n  font-size: 14px;\n"])), function (e) {
                    var t = e.isFinished;
                    return e.theme.colors[t ? "textDisabled" : "primary"];
                }),
                re = function (e) {
                    var t = e.text,
                        n = e.isFinished,
                        a = void 0 !== n && n;
                    return Object(C.jsx)(ie, { isFinished: a, children: t });
                },
                se = n(49),
                ue = n(248),
                oe = n(255),
                pe = n(256),
                ce = n(72),
                de = n(150),
                le = n(249),
                ye = n(257),
                me = n.n(ye),
                be = Object(j.e)(d.L)(r || (r = Object(h.a)(["\n  color: ", ";\n"])), function (e) {
                    var t = e.isDisabled,
                        n = e.color,
                        a = e.theme;
                    return t ? a.colors.textDisabled : n;
                }),
                fe = function (e) {
                    var t = e.value,
                        n = e.fontSize,
                        a = e.color,
                        i = e.decimals,
                        r = e.isDisabled,
                        u = e.unit,
                        o = Object(s.useRef)(0);
                    return (
                        Object(s.useEffect)(
                            function () {
                                o.current = t;
                            },
                            [t]
                        ),
                        Object(C.jsxs)(be, {
                            bold: !0,
                            color: a,
                            fontSize: n,
                            isDisabled: r,
                            children: [Object(C.jsx)(me.a, { start: o.current, end: t, decimals: i, duration: 1, separator: "," }), t && u && Object(C.jsx)("span", { children: u })],
                        })
                    );
                };
            fe.defaultProps = { fontSize: "32px", isDisabled: !1, color: "text", decimals: 3 };
            var Te,
                he,
                je,
                ve,
                Oe,
                ge,
                we,
                xe,
                ke,
                Me,
                Ae,
                Ce,
                Ie,
                _e,
                Se,
                Be,
                Pe,
                Ee,
                De,
                Ne,
                Fe,
                Re,
                Le,
                Ue,
                ze = fe,
                He = n(46),
                Je = n(116),
                We = function (e) {
                    var t = e.max,
                        n = e.symbol,
                        a = e.onChange,
                        i = e.onSelectMax,
                        r = e.value,
                        s = Object(Z.a)();
                    return Object(C.jsxs)(d.f, {
                        children: [
                            Object(C.jsx)(d.s, {
                                justifyContent: "flex-end",
                                minHeight: "21px",
                                mb: "8px",
                                children: Object(C.jsxs)(d.L, { color: "primary", fontSize: "14px", children: [t.toLocaleString(), " ", n, " ", s(526, "Available")] }),
                            }),
                            Object(C.jsxs)(d.s, {
                                alignItems: "center",
                                children: [
                                    Object(C.jsx)(d.x, { onChange: a, placeholder: "0", value: r }),
                                    Object(C.jsxs)(d.s, {
                                        alignItems: "center",
                                        children: [
                                            Object(C.jsx)(d.L, { bold: !0, color: "primary", textTransform: "uppercase", mx: "8px", children: n }),
                                            Object(C.jsx)("div", { children: Object(C.jsx)(d.g, { scale: "sm", onClick: i, children: s(452, "Max") }) }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                Qe = function (e) {
                    var t = e.max,
                        n = e.onConfirm,
                        a = e.onDismiss,
                        i = e.tokenName,
                        r = void 0 === i ? "" : i,
                        u = e.stakingTokenDecimals,
                        o = void 0 === u ? 18 : u,
                        p = Object(s.useState)(""),
                        c = Object(k.a)(p, 2),
                        l = c[0],
                        y = c[1],
                        m = Object(s.useState)(!1),
                        b = Object(k.a)(m, 2),
                        f = b[0],
                        T = b[1],
                        h = Object(Z.a)(),
                        j = Object(s.useMemo)(
                            function () {
                                return Object(ce.b)(t, o);
                            },
                            [t, o]
                        ),
                        v = Object(s.useCallback)(
                            function (e) {
                                y(e.currentTarget.value);
                            },
                            [y]
                        ),
                        O = Object(s.useCallback)(
                            function () {
                                y(j);
                            },
                            [j, y]
                        );
                    return Object(C.jsxs)(d.E, {
                        title: "".concat(h(316, "Deposit"), " ").concat(r, " Tokens"),
                        onDismiss: a,
                        children: [
                            Object(C.jsx)(We, { value: l, onSelectMax: O, onChange: v, max: j, symbol: r }),
                            Object(C.jsxs)(Je.a, {
                                children: [
                                    Object(C.jsx)(d.g, { width: "100%", variant: "secondary", onClick: a, children: h(462, "Cancel") }),
                                    Object(C.jsx)(d.g, {
                                        width: "100%",
                                        disabled: f,
                                        onClick: Object(ne.a)(
                                            te.a.mark(function e() {
                                                return te.a.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return T(!0), (e.next = 3), n(l, o);
                                                            case 3:
                                                                T(!1), a();
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        ),
                                        children: f ? h(488, "Pending Confirmation") : h(464, "Confirm"),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                qe = function (e) {
                    var t = e.onConfirm,
                        n = e.onDismiss,
                        a = e.max,
                        i = e.tokenName,
                        r = void 0 === i ? "" : i,
                        u = e.stakingTokenDecimals,
                        o = void 0 === u ? 18 : u,
                        p = Object(s.useState)(""),
                        c = Object(k.a)(p, 2),
                        l = c[0],
                        y = c[1],
                        m = Object(s.useState)(!1),
                        b = Object(k.a)(m, 2),
                        f = b[0],
                        T = b[1],
                        h = Object(Z.a)(),
                        j = Object(s.useMemo)(
                            function () {
                                return Object(ce.b)(a, o);
                            },
                            [a, o]
                        ),
                        v = Object(s.useCallback)(
                            function (e) {
                                y(e.currentTarget.value);
                            },
                            [y]
                        ),
                        O = Object(s.useCallback)(
                            function () {
                                y(j);
                            },
                            [j, y]
                        );
                    return Object(C.jsxs)(d.E, {
                        title: "Withdraw ".concat(r),
                        onDismiss: n,
                        children: [
                            Object(C.jsx)(We, { onSelectMax: O, onChange: v, value: l, max: j, symbol: r }),
                            Object(C.jsxs)(Je.a, {
                                children: [
                                    Object(C.jsx)(d.g, { variant: "secondary", onClick: n, children: h(462, "Cancel") }),
                                    Object(C.jsx)(d.g, {
                                        disabled: f,
                                        onClick: Object(ne.a)(
                                            te.a.mark(function e() {
                                                return te.a.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return T(!0), (e.next = 3), t(l, o);
                                                            case 3:
                                                                T(!1), n();
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        ),
                                        children: f ? h(488, "Pending Confirmation") : h(464, "Confirm"),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                Ge = function (e) {
                    var t = e.earnings,
                        n = e.onConfirm,
                        a = e.onDismiss,
                        i = e.tokenName,
                        r = void 0 === i ? "" : i,
                        u = e.stakingTokenDecimals,
                        o = void 0 === u ? 18 : u,
                        p = Object(s.useState)(!1),
                        c = Object(k.a)(p, 2),
                        l = c[0],
                        y = c[1],
                        m = Object(Z.a)(),
                        b = Object(s.useMemo)(
                            function () {
                                return Object(ce.b)(t, o);
                            },
                            [t, o]
                        );
                    return Object(C.jsxs)(d.E, {
                        title: "".concat(m(704, "Compound"), " ").concat(m(330, "".concat(r, " Earned"))),
                        onDismiss: a,
                        children: [
                            Object(C.jsx)(Ve, { children: Object(C.jsx)(ze, { value: Number(b) }) }),
                            Object(C.jsxs)(Je.a, {
                                children: [
                                    Object(C.jsx)(d.g, { width: "100%", variant: "secondary", onClick: a, children: m(462, "Cancel") }),
                                    Object(C.jsx)(d.g, {
                                        id: "compound-cake",
                                        width: "100%",
                                        disabled: l,
                                        onClick: Object(ne.a)(
                                            te.a.mark(function e() {
                                                return te.a.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return y(!0), (e.next = 3), n(b, o);
                                                            case 3:
                                                                y(!1), a();
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        ),
                                        children: l ? m(488, "Pending Confirmation") : m(464, "Confirm"),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                Ve = j.e.div(Te || (Te = Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]))),
                Ke = j.e.div(he || (he = Object(h.a)(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"])), function (e) {
                    var t = e.isFinished;
                    return e.theme.colors[t ? "textDisabled" : "text"];
                }),
                Ye = j.e.div(
                    je ||
                        (je = Object(h.a)([
                            "\n  background: ",
                            ";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ",
                            ";\n  box-shadow: ",
                            ";\n  flex-direction: column;\n  position: relative;\n",
                        ])),
                    function (e) {
                        return e.theme.card.background;
                    },
                    function (e) {
                        var t = e.isFinished;
                        return e.theme.colors[t ? "textDisabled" : "secondary"];
                    },
                    function (e) {
                        return e.isActive ? "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);" : "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)";
                    }
                ),
                Ze = j.e.div(ve || (ve = Object(h.a)(["\n  color: #ed4b9e;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]))),
                Xe = j.e.a(Oe || (Oe = Object(h.a)(["\n  color: #ed4b9e;\n  font-size: 14px;\n"]))),
                $e = function (e) {
                    var t = e.hasBalance;
                    return void 0 !== t && t
                        ? Object(C.jsxs)("div", {
                              children: [
                                  Object(C.jsx)(Ze, { children: "Action Required" }),
                                  Object(C.jsx)(Xe, { href: " https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541", target: "_blank", children: "What do I need to do?" }),
                              ],
                          })
                        : Object(C.jsx)("div", { children: Object(C.jsx)(Ke, { isFinished: !0, children: "FINISHED" }) });
                },
                et = n(85),
                tt = j.e.button(
                    ge ||
                        (ge = Object(h.a)([
                            "\n  align-items: center;\n  background: ",
                            ";\n  border: 0;\n  border-radius: 12px;\n  color: ",
                            ";\n  cursor: pointer;\n  display: flex;\n  font-size: ",
                            "px;\n  font-weight: 700;\n  height: ",
                            "px;\n  justify-content: center;\n  outline: none;\n  padding-left: ",
                            "px;\n  padding-right: ",
                            "px;\n  pointer-events: ",
                            ";\n  width: 100%;\n  border: 2px solid ",
                            ";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n",
                        ])),
                    function (e) {
                        return e.disabled ? "#ddd" : e.theme.card.background;
                    },
                    function (e) {
                        return e.disabled ? "#acaaaf" : "#32cad7";
                    },
                    function (e) {
                        return e.fontSize;
                    },
                    function (e) {
                        return e.size;
                    },
                    function (e) {
                        return e.padding;
                    },
                    function (e) {
                        return e.padding;
                    },
                    function (e) {
                        return e.disabled ? "none" : void 0;
                    },
                    function (e) {
                        return e.disabled ? "#eee" : "#33cbd7";
                    }
                ),
                nt = Object(j.e)(et.a)(
                    we || (we = Object(h.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"])),
                    function (e) {
                        return -e.theme.spacing[4];
                    },
                    function (e) {
                        return e.theme.spacing[4];
                    }
                ),
                at = j.e.a(
                    xe || (xe = Object(h.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ", "px;\n  padding: 0 ", "px;\n  text-decoration: none;\n"])),
                    function (e) {
                        return -e.theme.spacing[4];
                    },
                    function (e) {
                        return e.theme.spacing[4];
                    }
                ),
                it = function (e) {
                    var t,
                        n,
                        a,
                        i = e.children,
                        r = e.disabled,
                        u = e.href,
                        o = e.onClick,
                        p = e.size,
                        c = e.text,
                        d = e.to,
                        l = Object(s.useContext)(j.a),
                        y = l.colors,
                        m = l.spacing,
                        b = y.background;
                    switch (p) {
                        case "sm":
                            (n = m[3]), (t = 36), (a = 14);
                            break;
                        case "lg":
                            (n = m[4]), (t = 72), (a = 16);
                            break;
                        case "md":
                        default:
                            (n = m[4]), (t = 56), (a = 16);
                    }
                    var f = Object(s.useMemo)(
                        function () {
                            return d ? Object(C.jsx)(nt, { to: d, children: c }) : u ? Object(C.jsx)(at, { href: u, target: "__blank", children: c }) : c;
                        },
                        [u, c, d]
                    );
                    return Object(C.jsxs)(tt, { boxShadow: undefined, color: b, disabled: r, fontSize: a, onClick: o, padding: n, size: t, children: [i, f] });
                },
                rt = n(30),
                st = n(853),
                ut = n(854),
                ot = n(171),
                pt = n(179),
                ct = ((ke = {}), Object(rt.a)(ke, He.a.BINANCE, ot.a), Object(rt.a)(ke, He.a.CORE, ot.c), Object(rt.a)(ke, He.a.COMMUNITY, ot.b), ke),
                dt = j.e.div(
                    Me || (Me = Object(h.a)(["\n  border-top: 1px solid ", ";\n  color: ", ";\n  padding: 24px;\n"])),
                    function (e) {
                        return e.theme.isDark ? "#524B63" : "#E9EAEB";
                    },
                    function (e) {
                        var t = e.isFinished;
                        return e.theme.colors[t ? "textDisabled2" : "primary2"];
                    }
                ),
                lt = j.e.button(
                    Ae ||
                        (Ae = Object(h.a)([
                            "\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ",
                            ";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.primary;
                    }
                ),
                yt = j.e.div(Ce || (Ce = Object(h.a)(["\n  margin-top: 24px;\n"]))),
                mt = Object(j.e)(d.s)(Ie || (Ie = Object(h.a)(["\n  align-items: center;\n"]))),
                bt = j.e.div(_e || (_e = Object(h.a)(["\n  flex: 1;\n"]))),
                ft = j.e.div(Se || (Se = Object(h.a)(["\n  font-size: 14px;\n"]))),
                Tt = j.e.a(Be || (Be = Object(h.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: ", ";\n  cursor: pointer;\n"])), function (e) {
                    return e.theme.colors.primary;
                }),
                ht = function (e) {
                    var t = e.projectLink,
                        n = e.decimals,
                        a = e.tokenAddress,
                        i = e.totalStaked,
                        r = e.tokenName,
                        u = e.tokenDecimals,
                        o = e.isFinished,
                        p = e.startBlock,
                        c = e.endBlock,
                        l = e.poolCategory,
                        y = Object(f.a)().blockNumber,
                        m = Object(s.useState)(!1),
                        b = Object(k.a)(m, 2),
                        T = b[0],
                        h = b[1],
                        j = Object(Z.a)(),
                        v = T ? st.a : ut.a,
                        O = ct[l],
                        g = Math.max(p - y, 0),
                        w = Math.max(c - y, 0),
                        x = "".concat(de.b, "/images/tokens/").concat(r.toLowerCase(), ".png");
                    return Object(C.jsxs)(dt, {
                        isFinished: o,
                        children: [
                            Object(C.jsxs)(mt, {
                                children: [
                                    Object(C.jsx)(bt, { children: Object(C.jsx)(O, {}) }),
                                    Object(C.jsxs)(lt, {
                                        onClick: function () {
                                            return h(!T);
                                        },
                                        children: [T ? j(1066, "Hide") : j(658, "Details"), " ", Object(C.jsx)(v, {})],
                                    }),
                                ],
                            }),
                            T &&
                                Object(C.jsxs)(yt, {
                                    children: [
                                        Object(C.jsxs)(mt, {
                                            mb: "4px",
                                            children: [Object(C.jsx)(bt, { children: Object(C.jsx)(ft, { children: j(408, "Total") }) }), Object(C.jsx)(ze, { fontSize: "14px", isDisabled: o, value: Object(ce.a)(i, n) })],
                                        }),
                                        g > 0 &&
                                            Object(C.jsxs)(mt, {
                                                mb: "4px",
                                                children: [Object(C.jsx)(bt, { children: Object(C.jsxs)(ft, { children: [j(410, "Start"), ":"] }) }), Object(C.jsx)(ze, { fontSize: "14px", isDisabled: o, value: g, decimals: 0 })],
                                            }),
                                        0 === g &&
                                            w > 0 &&
                                            Object(C.jsxs)(mt, {
                                                mb: "4px",
                                                children: [Object(C.jsx)(bt, { children: Object(C.jsxs)(ft, { children: [j(410, "End"), ":"] }) }), Object(C.jsx)(ze, { fontSize: "14px", isDisabled: o, value: w, decimals: 0 })],
                                            }),
                                        Object(C.jsxs)(d.s, {
                                            mb: "4px",
                                            children: [
                                                Object(C.jsxs)(Tt, {
                                                    onClick: function () {
                                                        return Object(pt.a)(a, r, u, x);
                                                    },
                                                    children: ["Add ", r, " to Metamask"],
                                                }),
                                                Object(C.jsx)(d.C, { height: 15, width: 15, ml: "4px" }),
                                            ],
                                        }),
                                        Object(C.jsx)(Tt, { href: t, target: "_blank", children: j(412, "View project site") }),
                                    ],
                                }),
                        ],
                    });
                },
                jt = u.a.memo(ht),
                vt = j.e.div(
                    Pe ||
                        (Pe = Object(h.a)([
                            "\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n",
                        ]))
                ),
                Ot = j.e.div(Ee || (Ee = Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"]))),
                gt = j.e.div(De || (De = Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]))),
                wt = j.e.div(
                    Ne || (Ne = Object(h.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
                    function (e) {
                        return e.theme.spacing[4];
                    },
                    function (e) {
                        return e.theme.spacing[4];
                    }
                ),
                xt = j.e.div(Fe || (Fe = Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 14px;\n"]))),
                kt = function (e) {
                    var t = e.pool,
                        n = t.sousId,
                        a = t.tokenName,
                        i = t.tokenAddress,
                        r = t.stakingTokenName,
                        u = t.stakingTokenAddress,
                        o = t.stakingTokenDecimals,
                        p = t.projectLink,
                        c = t.harvest,
                        l = t.tokenDecimals,
                        m = t.poolCategory,
                        b = t.totalStaked,
                        T = t.startBlock,
                        h = t.endBlock,
                        j = t.isFinished,
                        v = t.userData,
                        O = t.stakingLimit,
                        w = m === He.a.BINANCE,
                        x = Object(Z.a)(),
                        M = Object(se.b)(u),
                        A = Object(g.c)().account,
                        I = Object(ue.c)(M, n).onApprove,
                        _ = Object(oe.b)(n, w).onStake,
                        S = Object(pe.b)(n).onUnstake,
                        B = Object(le.c)(n, w).onReward,
                        P = Object(f.h)(a),
                        E =
                            ((function (e, t, n, a) {
                                var i = new y.a(t).times(a).times(de.c),
                                    r = new y.a(e).times(n),
                                    s = i.div(r).times(100);
                                s.isNaN() || !s.isFinite() || s.toNumber();
                            })(Object(f.h)(r), P, Object(ce.a)(t.totalStaked, o), parseFloat(t.tokenPerBlock)),
                            Object(s.useState)(!1)),
                        D = Object(k.a)(E, 2),
                        N = D[0],
                        F = D[1],
                        R = Object(s.useState)(!1),
                        L = Object(k.a)(R, 2),
                        U = L[0],
                        z = L[1],
                        H = new y.a((null === v || void 0 === v ? void 0 : v.allowance) || 0),
                        J = new y.a((null === v || void 0 === v ? void 0 : v.stakingTokenBalance) || 0),
                        W = new y.a((null === v || void 0 === v ? void 0 : v.stakedBalance) || 0),
                        Q = new y.a((null === v || void 0 === v ? void 0 : v.pendingReward) || 0),
                        q = r === He.b.SYRUP,
                        G = (null === W || void 0 === W ? void 0 : W.toNumber()) > 0,
                        V = !G && !H.toNumber() && !w,
                        K = j && G,
                        Y = new y.a(O).multipliedBy(new y.a(10).pow(l)),
                        X = Object(d.X)(Object(C.jsx)(Qe, { max: O && J.isGreaterThan(Y) ? Y : J, onConfirm: _, tokenName: O ? "".concat(r, " (").concat(O, " max)") : r, stakingTokenDecimals: o })),
                        $ = Object(k.a)(X, 1)[0],
                        ee = Object(d.X)(Object(C.jsx)(Ge, { earnings: Q, onConfirm: _, tokenName: r })),
                        ie = Object(k.a)(ee, 1)[0],
                        ye = "".concat(t.tokenName, "-").concat(t.stakingTokenName, ".svg").toLocaleLowerCase(),
                        me = Object(d.X)(Object(C.jsx)(qe, { max: W, onConfirm: S, tokenName: r, stakingTokenDecimals: o })),
                        be = Object(k.a)(me, 1)[0],
                        fe = Object(s.useCallback)(
                            Object(ne.a)(
                                te.a.mark(function e() {
                                    return te.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.prev = 0), F(!0), (e.next = 4), I();
                                                    case 4:
                                                        e.sent || F(!1), (e.next = 11);
                                                        break;
                                                    case 8:
                                                        (e.prev = 8), (e.t0 = e.catch(0)), console.error(e.t0);
                                                    case 11:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[0, 8]]
                                    );
                                })
                            ),
                            [I, F]
                        );
                    return Object(C.jsxs)(Ye, {
                        isActive: K,
                        isFinished: j && 0 !== n,
                        children: [
                            j && 0 !== n && Object(C.jsx)(vt, {}),
                            Object(C.jsxs)("div", {
                                style: { padding: "24px" },
                                children: [
                                    Object(C.jsxs)(Ke, { isFinished: j && 0 !== n, children: [q && "[OLD]", " ", a, " ", x(348, "Pool")] }),
                                    Object(C.jsxs)("div", {
                                        style: { marginBottom: "8px", display: "flex", alignItems: "center" },
                                        children: [
                                            Object(C.jsx)("div", { style: { flex: 1 }, children: Object(C.jsx)(d.w, { src: "/images/pools/".concat(ye), alt: a, width: 64, height: 64 }) }),
                                            A &&
                                                c &&
                                                !q &&
                                                Object(C.jsx)(it, {
                                                    disabled: !Q.toNumber() || U,
                                                    text: U ? "Collecting" : "Harvest",
                                                    onClick: Object(ne.a)(
                                                        te.a.mark(function e() {
                                                            return te.a.wrap(function (e) {
                                                                for (;;)
                                                                    switch ((e.prev = e.next)) {
                                                                        case 0:
                                                                            return z(!0), (e.next = 3), B();
                                                                        case 3:
                                                                            z(!1);
                                                                        case 4:
                                                                        case "end":
                                                                            return e.stop();
                                                                    }
                                                            }, e);
                                                        })
                                                    ),
                                                }),
                                        ],
                                    }),
                                    q
                                        ? Object(C.jsx)($e, { hasBalance: G })
                                        : Object(C.jsxs)(gt, {
                                              children: [
                                                  Object(C.jsx)(ze, { value: Object(ce.a)(Q, l), isDisabled: j }),
                                                  0 === n && A && c && Object(C.jsx)(it, { disabled: !Q.toNumber() || U, text: U ? x(999, "Compounding") : x(704, "Compound"), onClick: ie }),
                                              ],
                                          }),
                                    Object(C.jsx)(re, { isFinished: j && 0 !== n, text: x(330, "".concat(a, " earned")) }),
                                    Object(C.jsxs)(Ot, {
                                        children: [
                                            !A && Object(C.jsx)(ae.a, {}),
                                            A &&
                                                (V && !q
                                                    ? Object(C.jsx)("div", { style: { flex: 1 }, children: Object(C.jsx)(d.g, { disabled: j || N, onClick: fe, width: "100%", children: "Approve ".concat(r) }) })
                                                    : Object(C.jsxs)(C.Fragment, {
                                                          children: [
                                                              Object(C.jsx)(d.g, {
                                                                  disabled: W.eq(new y.a(0)) || U,
                                                                  onClick: q
                                                                      ? Object(ne.a)(
                                                                            te.a.mark(function e() {
                                                                                return te.a.wrap(function (e) {
                                                                                    for (;;)
                                                                                        switch ((e.prev = e.next)) {
                                                                                            case 0:
                                                                                                return z(!0), (e.next = 3), S("0", o);
                                                                                            case 3:
                                                                                                z(!1);
                                                                                            case 4:
                                                                                            case "end":
                                                                                                return e.stop();
                                                                                        }
                                                                                }, e);
                                                                            })
                                                                        )
                                                                      : be,
                                                                  children: "Unstake ".concat(r),
                                                              }),
                                                              Object(C.jsx)(wt, {}),
                                                              !q && Object(C.jsx)(d.v, { disabled: j && 0 !== n, onClick: $, children: Object(C.jsx)(d.a, { color: "white" }) }),
                                                          ],
                                                      })),
                                        ],
                                    }),
                                    Object(C.jsxs)(xt, { children: [Object(C.jsxs)("div", { children: [x(384, "Your Stake"), ":"] }), Object(C.jsx)(ze, { fontSize: "14px", isDisabled: j, value: Object(ce.a)(W, o) })] }),
                                ],
                            }),
                            Object(C.jsx)(jt, { projectLink: p, decimals: o, totalStaked: b, startBlock: T, endBlock: h, isFinished: j, poolCategory: m, tokenName: a, tokenAddress: i, tokenDecimals: l }),
                        ],
                    });
                },
                Mt = j.e.div(Re || (Re = Object(h.a)(["\n  background-color: ", ";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])), function (e) {
                    return e.theme.colors.textSubtle;
                }),
                At = j.e.div(
                    Le ||
                        (Le = Object(h.a)([
                            "\n  align-items: center;\n  color: ",
                            ";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  padding: 48px 0;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n",
                        ])),
                    function (e) {
                        return e.theme.colors.primary;
                    }
                ),
                Ct = function () {
                    var e = Object(c.h)().path,
                        t = Object(Z.a)(),
                        n = Object(g.c)().account,
                        a = Object(f.i)(n),
                        i = Object(f.a)().blockNumber,
                        r = Object(s.useState)(!1),
                        u = Object(k.a)(r, 2),
                        o = u[0],
                        p =
                            (u[1],
                            Object(s.useMemo)(
                                function () {
                                    return Y()(a, function (e) {
                                        return e.isFinished || i > e.endBlock;
                                    });
                                },
                                [i, a]
                            )),
                        l = Object(k.a)(p, 2),
                        m = l[0],
                        b = l[1],
                        T = Object(s.useMemo)(
                            function () {
                                return b.filter(function (e) {
                                    return e.userData && new y.a(e.userData.stakedBalance).isGreaterThan(0);
                                });
                            },
                            [b]
                        );
                    return Object(C.jsxs)($.a, {
                        children: [
                            Object(C.jsxs)(At, {
                                children: [
                                    Object(C.jsxs)("div", {
                                        children: [
                                            Object(C.jsx)(d.t, { as: "h1", size: "xxl", mb: "16px", children: t(738, "Syrup Pool on VICTORY") }),
                                            Object(C.jsxs)("ul", {
                                                children: [
                                                    Object(C.jsx)("li", { children: t(580, "Stake VICTORY to earn new tokens.") }),
                                                    Object(C.jsx)("li", { children: t(486, "You can unstake at any time.") }),
                                                    Object(C.jsx)("li", { children: t(406, "Rewards are calculated per block.") }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    Object(C.jsx)("img", { src: "/images/syrup.png", alt: "SYRUP POOL icon", width: 410, height: 191 }),
                                ],
                            }),
                            Object(C.jsx)(Mt, {}),
                            Object(C.jsxs)(X.a, {
                                children: [
                                    Object(C.jsx)(c.b, {
                                        exact: !0,
                                        path: "".concat(e),
                                        children: Object(C.jsx)(C.Fragment, {
                                            children: o
                                                ? V()(T, ["sortOrder"]).map(function (e) {
                                                      return Object(C.jsx)(kt, { pool: e }, e.sousId);
                                                  })
                                                : V()(b, ["sortOrder"]).map(function (e) {
                                                      return Object(C.jsx)(kt, { pool: e }, e.sousId);
                                                  }),
                                        }),
                                    }),
                                    Object(C.jsx)(c.b, {
                                        path: "".concat(e, "/history"),
                                        children: V()(m, ["sortOrder"]).map(function (e) {
                                            return Object(C.jsx)(kt, { pool: e }, e.sousId);
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                It = n(41),
                _t = Object(It.c)(),
                St = function () {
                    var e,
                        t = Object(s.useState)(!1),
                        n = Object(k.a)(t, 2),
                        a = n[0],
                        i = n[1],
                        r = Object(s.useState)(((e = {}), Object(rt.a)(e, 11, !1), Object(rt.a)(e, 10, !1), e)),
                        u = Object(k.a)(r, 2),
                        o = u[0],
                        p = u[1],
                        c = Object(g.c)().account;
                    return (
                        Object(s.useEffect)(
                            function () {
                                c &&
                                    (function () {
                                        var e = Object(ne.a)(
                                            te.a.mark(function e() {
                                                var t, n, a, r, s;
                                                return te.a.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.next = 2), _t.methods.canClaimMultiple(c, [11, 10]).call();
                                                            case 2:
                                                                (n = e.sent), (a = Object(k.a)(n, 2)), (r = a[0]), (s = a[1]), p(((t = {}), Object(rt.a)(t, 11, r), Object(rt.a)(t, 10, s), t)), i(!0);
                                                            case 8:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        );
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()();
                            },
                            [c, p, i]
                        ),
                        {
                            isSomeClaimable: Object.values(o).some(function (e) {
                                return !0 === e;
                            }),
                            isBullClaimable: o[11],
                            isHiccupClaimable: o[10],
                            hasChecked: a,
                        }
                    );
                },
                Bt = n(66),
                Pt = Object(Bt.a)(),
                Et = n(80),
                Dt = n(429),
                Nt = n(149),
                Ft = Nt.a.find(function (e) {
                    return 11 === e.bunnyId;
                }),
                Rt = Nt.a.find(function (e) {
                    return 10 === e.bunnyId;
                }),
                Lt = j.e.img(Ue || (Ue = Object(h.a)(["\n  border-radius: 50%;\n  margin-bottom: 24px;\n"]))),
                Ut = function () {
                    Object(Dt.a)({ resize: !0, particleCount: 200, startVelocity: 30, gravity: 0.5, spread: 350, origin: { x: 0.5, y: 0.3 } });
                },
                zt = function (e, t) {
                    return e && t
                        ? Object(C.jsx)("img", { src: "/images/bull-hiccup.png", height: "128px", width: "128px", alt: "nft", style: { marginBottom: "24px" } })
                        : e
                        ? Object(C.jsx)(Lt, { src: "/images/nfts/".concat(Ft.images.md), height: "128px", width: "128px", alt: "nft" })
                        : Object(C.jsx)(Lt, { src: "/images/nfts/".concat(Rt.images.md), height: "128px", width: "128px", alt: "nft" });
                },
                Ht = function (e) {
                    var t = e.isBullClaimable,
                        n = e.isHiccupClaimable,
                        a = e.onDismiss,
                        i = Object(Z.a)(),
                        r = i(999, t && n ? "You won two Collectibles!" : "You won a collectible!");
                    return (
                        Object(s.useEffect)(function () {
                            Object(Et.delay)(Ut, 100);
                        }, []),
                        Object(C.jsx)(d.E, {
                            title: i(999, "Congratulations!"),
                            onDismiss: a,
                            children: Object(C.jsxs)(d.s, {
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                children: [
                                    zt(t, n),
                                    Object(C.jsx)(d.L, { bold: !0, color: "secondary", fontSize: "24px", mb: "24px", children: r }),
                                    Object(C.jsx)(d.g, {
                                        onClick: function () {
                                            a(), Pt.push("/collectibles");
                                        },
                                        children: i(999, "Claim now"),
                                    }),
                                ],
                            }),
                        })
                    );
                },
                Jt = function () {
                    var e = Object(s.useRef)(!1),
                        t = St(),
                        n = t.isSomeClaimable,
                        a = t.isBullClaimable,
                        i = t.isHiccupClaimable,
                        r = Object(d.X)(Object(C.jsx)(Ht, { isBullClaimable: a, isHiccupClaimable: i })),
                        u = Object(k.a)(r, 1)[0],
                        o = Object(g.c)().account,
                        p = Object(c.g)().pathname;
                    return (
                        Object(s.useEffect)(
                            function () {
                                p.includes("/collectibles") || !n || e.current || (u(), (e.current = !0));
                            },
                            [p, n, e, u]
                        ),
                        Object(s.useEffect)(
                            function () {
                                e.current = !1;
                            },
                            [o, e]
                        ),
                        null
                    );
                },
                Wt = Object(s.lazy)(function () {
                    return n.e(7).then(n.bind(null, 1074));
                }),
                Qt = Object(s.lazy)(function () {
                    return n.e(6).then(n.bind(null, 1073));
                }),
                qt = Object(s.lazy)(function () {
                    return n.e(5).then(n.bind(null, 1072));
                }),
                Gt = Object(s.lazy)(function () {
                    return n.e(9).then(n.bind(null, 1070));
                });
            y.a.config({ EXPONENTIAL_AT: 1e3, DECIMAL_PLACES: 80 });
            var Vt = function () {
                    return (
                        Object(s.useEffect)(function () {
                            console.warn = function () {
                                return null;
                            };
                        }, []),
                        b(),
                        Object(f.g)(),
                        Object(f.f)(),
                        Object(f.e)(),
                        T(),
                        Object(C.jsxs)(c.c, {
                            history: Pt,
                            children: [
                                Object(C.jsx)(d.I, {}),
                                Object(C.jsx)(v, {}),
                                Object(C.jsx)(L, {
                                    children: Object(C.jsx)(W, {
                                        fallback: Object(C.jsx)(C.Fragment, { children: " " }),
                                        children: Object(C.jsxs)(c.d, {
                                            children: [
                                                Object(C.jsx)(c.b, { path: "/", exact: !0, children: Object(C.jsx)(Wt, {}) }),
                                                Object(C.jsx)(c.b, { path: "/farms", children: Object(C.jsx)(Qt, {}) }),
                                                Object(C.jsx)(c.b, { path: "/pools", children: Object(C.jsx)(Ct, {}) }),
                                                Object(C.jsx)(c.b, { path: "/lottery", children: Object(C.jsx)(qt, {}) }),
                                                Object(C.jsx)(c.b, { path: "/staking", children: Object(C.jsx)(c.a, { to: "/pools" }) }),
                                                Object(C.jsx)(c.b, { path: "/syrup", children: Object(C.jsx)(c.a, { to: "/pools" }) }),
                                                Object(C.jsx)(c.b, { component: Gt }),
                                            ],
                                        }),
                                    }),
                                }),
                                Object(C.jsx)(q, {}),
                                Object(C.jsx)(Jt, {}),
                            ],
                        })
                    );
                },
                Kt = u.a.memo(Vt),
                Yt = n(178),
                Zt = n(173),
                Xt = n(52),
                $t = n(143),
                en = n(97),
                tn = n(91),
                nn = n(177),
                an = n(98),
                rn = n(86),
                sn = n(182),
                un = n(170),
                on = Object(Xt.a)({ devTools: !1, reducer: { farms: $t.a, toasts: en.b, pools: tn.a, prices: nn.a, profile: an.a, teams: rn.a, achievements: sn.a, block: un.a } }),
                pn = function (e) {
                    var t = e.children;
                    return Object(C.jsx)(g.b, {
                        getLibrary: Yt.b,
                        children: Object(C.jsx)(Q.a, { store: on, children: Object(C.jsx)(N, { children: Object(C.jsx)(P, { children: Object(C.jsx)(Zt.b, { children: Object(C.jsx)(d.F, { children: t }) }) }) }) }),
                    });
                };
            p.a.render(Object(C.jsx)(u.a.StrictMode, { children: Object(C.jsx)(pn, { children: Object(C.jsx)(Kt, {}) }) }), document.getElementById("root"));
        },
        86: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return h;
            }),
                n.d(t, "c", function () {
                    return j;
                });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(30),
                u = n(15),
                o = n(52),
                p = n(148),
                c = n(147),
                d = {
                    isInitialized: !1,
                    isLoading: !0,
                    data: p.a.reduce(function (e, t) {
                        return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.id, t));
                    }, {}),
                },
                l = Object(o.c)({
                    name: "teams",
                    initialState: d,
                    reducers: {
                        fetchStart: function (e) {
                            e.isLoading = !0;
                        },
                        fetchFailed: function (e) {
                            (e.isLoading = !1), (e.isInitialized = !0);
                        },
                        teamFetchSucceeded: function (e, t) {
                            (e.isInitialized = !0), (e.isLoading = !1), (e.data[t.payload.id] = t.payload);
                        },
                        teamsFetchSucceeded: function (e, t) {
                            (e.isInitialized = !0), (e.isLoading = !1), (e.data = t.payload);
                        },
                    },
                }),
                y = l.actions,
                m = y.fetchStart,
                b = y.teamFetchSucceeded,
                f = y.fetchFailed,
                T = y.teamsFetchSucceeded,
                h = function (e) {
                    return (function () {
                        var t = Object(r.a)(
                            i.a.mark(function t(n) {
                                var a;
                                return i.a.wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return (t.prev = 0), n(m()), (t.next = 4), Object(c.a)(e);
                                                case 4:
                                                    (a = t.sent), n(b(a)), (t.next = 11);
                                                    break;
                                                case 8:
                                                    (t.prev = 8), (t.t0 = t.catch(0)), n(f());
                                                case 11:
                                                case "end":
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    null,
                                    [[0, 8]]
                                );
                            })
                        );
                        return function (e) {
                            return t.apply(this, arguments);
                        };
                    })();
                },
                j = function () {
                    return (function () {
                        var e = Object(r.a)(
                            i.a.mark(function e(t) {
                                var n;
                                return i.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (e.prev = 0), t(m()), (e.next = 4), Object(c.b)();
                                                case 4:
                                                    (n = e.sent), t(T(n)), (e.next = 11);
                                                    break;
                                                case 8:
                                                    (e.prev = 8), (e.t0 = e.catch(0)), t(f());
                                                case 11:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null,
                                    [[0, 8]]
                                );
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })();
                };
            t.a = l.reducer;
        },
        88: function (e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
            );
        },
        91: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return L;
            }),
                n.d(t, "c", function () {
                    return U;
                }),
                n.d(t, "d", function () {
                    return z;
                }),
                n.d(t, "e", function () {
                    return H;
                }),
                n.d(t, "g", function () {
                    return J;
                }),
                n.d(t, "f", function () {
                    return W;
                });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(30),
                u = n(15),
                o = n(61),
                p = n(52),
                c = n(64),
                d = n(101),
                l = n(175),
                y = n(413),
                m = n(46),
                b = n(58),
                f = n(24),
                T = n(13),
                h = n.n(T),
                j = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e() {
                            var t, n, a, r, s;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (t = c.a.filter(function (e) {
                                                    return 0 !== e.sousId;
                                                })),
                                                (n = t.map(function (e) {
                                                    return { address: Object(f.a)(e.contractAddress), name: "startBlock" };
                                                })),
                                                (a = t.map(function (e) {
                                                    return { address: Object(f.a)(e.contractAddress), name: "bonusEndBlock" };
                                                })),
                                                (e.next = 5),
                                                Object(b.a)(d, n)
                                            );
                                        case 5:
                                            return (r = e.sent), (e.next = 8), Object(b.a)(d, a);
                                        case 8:
                                            return (
                                                (s = e.sent),
                                                e.abrupt(
                                                    "return",
                                                    t.map(function (e, t) {
                                                        var n = r[t],
                                                            a = s[t];
                                                        return { sousId: e.sousId, startBlock: new h.a(n).toJSON(), endBlock: new h.a(a).toJSON() };
                                                    })
                                                )
                                            );
                                        case 10:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })(),
                v = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e() {
                            var t, n, a, r, s, u;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (t = c.a.filter(function (e) {
                                                    return e.stakingTokenName !== m.b.BNB;
                                                })),
                                                (n = c.a.filter(function (e) {
                                                    return e.stakingTokenName === m.b.BNB;
                                                })),
                                                (a = t.map(function (e) {
                                                    return { address: e.stakingTokenAddress, name: "balanceOf", params: [Object(f.a)(e.contractAddress)] };
                                                })),
                                                (r = n.map(function (e) {
                                                    return { address: Object(f.m)(), name: "balanceOf", params: [Object(f.a)(e.contractAddress)] };
                                                })),
                                                (e.next = 6),
                                                Object(b.a)(l, a)
                                            );
                                        case 6:
                                            return (s = e.sent), (e.next = 9), Object(b.a)(y, r);
                                        case 9:
                                            return (
                                                (u = e.sent),
                                                e.abrupt(
                                                    "return",
                                                    [].concat(
                                                        Object(o.a)(
                                                            t.map(function (e, t) {
                                                                return { sousId: e.sousId, totalStaked: new h.a(s[t]).toJSON() };
                                                            })
                                                        ),
                                                        Object(o.a)(
                                                            n.map(function (e, t) {
                                                                return { sousId: e.sousId, totalStaked: new h.a(u[t]).toJSON() };
                                                            })
                                                        )
                                                    )
                                                )
                                            );
                                        case 11:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })(),
                O = n(92),
                g = n(88),
                w = n(69),
                x = c.a.filter(function (e) {
                    return e.stakingTokenName !== m.b.BNB;
                }),
                k = c.a.filter(function (e) {
                    return e.stakingTokenName === m.b.BNB;
                }),
                M = c.a.filter(function (e) {
                    return 0 !== e.sousId;
                }),
                A = Object(w.b)(),
                C = new A.eth.Contract(O, Object(f.h)()),
                I = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n, a;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = x.map(function (e) {
                                                    return { address: e.stakingTokenAddress, name: "allowance", params: [t, Object(f.a)(e.contractAddress)] };
                                                })),
                                                (e.next = 3),
                                                Object(b.a)(g, n)
                                            );
                                        case 3:
                                            return (
                                                (a = e.sent),
                                                e.abrupt(
                                                    "return",
                                                    x.reduce(function (e, t, n) {
                                                        return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.sousId, new h.a(a[n]).toJSON()));
                                                    }, {})
                                                )
                                            );
                                        case 5:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                _ = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n, a, r, o, p;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = x.map(function (e) {
                                                    return { address: e.stakingTokenAddress, name: "balanceOf", params: [t] };
                                                })),
                                                (e.next = 3),
                                                Object(b.a)(g, n)
                                            );
                                        case 3:
                                            return (
                                                (a = e.sent),
                                                (r = x.reduce(function (e, t, n) {
                                                    return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.sousId, new h.a(a[n]).toJSON()));
                                                }, {})),
                                                (e.next = 7),
                                                A.eth.getBalance(t)
                                            );
                                        case 7:
                                            return (
                                                (o = e.sent),
                                                (p = k.reduce(function (e, t) {
                                                    return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.sousId, new h.a(o).toJSON()));
                                                }, {})),
                                                e.abrupt("return", Object(u.a)(Object(u.a)({}, r), p))
                                            );
                                        case 10:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                S = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n, a, r, o, p;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = M.map(function (e) {
                                                    return { address: Object(f.a)(e.contractAddress), name: "userInfo", params: [t] };
                                                })),
                                                (e.next = 3),
                                                Object(b.a)(d, n)
                                            );
                                        case 3:
                                            return (
                                                (a = e.sent),
                                                (r = M.reduce(function (e, t, n) {
                                                    return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.sousId, new h.a(a[n].amount._hex).toJSON()));
                                                }, {})),
                                                (e.next = 7),
                                                C.methods.userInfo("0", t).call()
                                            );
                                        case 7:
                                            return (o = e.sent), (p = o.amount), e.abrupt("return", Object(u.a)(Object(u.a)({}, r), {}, { 0: new h.a(p).toJSON() }));
                                        case 10:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                B = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n, a, r, o;
                            return i.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (n = M.map(function (e) {
                                                    return { address: Object(f.a)(e.contractAddress), name: "pendingReward", params: [t] };
                                                })),
                                                (e.next = 3),
                                                Object(b.a)(d, n)
                                            );
                                        case 3:
                                            return (
                                                (a = e.sent),
                                                (r = M.reduce(function (e, t, n) {
                                                    return Object(u.a)(Object(u.a)({}, e), {}, Object(s.a)({}, t.sousId, new h.a(a[n]).toJSON()));
                                                }, {})),
                                                (e.next = 7),
                                                C.methods.pendingCake("0", t).call()
                                            );
                                        case 7:
                                            return (o = e.sent), e.abrupt("return", Object(u.a)(Object(u.a)({}, r), {}, { 0: new h.a(o).toJSON() }));
                                        case 9:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                P = { data: Object(o.a)(c.a) },
                E = Object(p.c)({
                    name: "Pools",
                    initialState: P,
                    reducers: {
                        setPoolsPublicData: function (e, t) {
                            var n = t.payload;
                            e.data = e.data.map(function (e) {
                                var t = n.find(function (t) {
                                    return t.sousId === e.sousId;
                                });
                                return Object(u.a)(Object(u.a)({}, e), t);
                            });
                        },
                        setPoolsUserData: function (e, t) {
                            var n = t.payload;
                            e.data = e.data.map(function (e) {
                                var t = n.find(function (t) {
                                    return t.sousId === e.sousId;
                                });
                                return Object(u.a)(Object(u.a)({}, e), {}, { userData: t });
                            });
                        },
                        updatePoolsUserData: function (e, t) {
                            var n = t.payload,
                                a = n.field,
                                i = n.value,
                                r = n.sousId,
                                o = e.data.findIndex(function (e) {
                                    return e.sousId === r;
                                });
                            e.data[o] = Object(u.a)(Object(u.a)({}, e.data[o]), {}, { userData: Object(u.a)(Object(u.a)({}, e.data[o].userData), {}, Object(s.a)({}, a, i)) });
                        },
                    },
                }),
                D = E.actions,
                N = D.setPoolsPublicData,
                F = D.setPoolsUserData,
                R = D.updatePoolsUserData,
                L = function () {
                    return (function () {
                        var e = Object(r.a)(
                            i.a.mark(function e(t) {
                                var n, a, r;
                                return i.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.next = 2), j();
                                            case 2:
                                                return (n = e.sent), (e.next = 5), v();
                                            case 5:
                                                (a = e.sent),
                                                    (r = c.a.map(function (e) {
                                                        var t = n.find(function (t) {
                                                                return t.sousId === e.sousId;
                                                            }),
                                                            i = a.find(function (t) {
                                                                return t.sousId === e.sousId;
                                                            });
                                                        return Object(u.a)(Object(u.a)({}, t), i);
                                                    })),
                                                    t(N(r));
                                            case 8:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    })();
                },
                U = function (e) {
                    return (function () {
                        var t = Object(r.a)(
                            i.a.mark(function t(n) {
                                var a, r, s, u, o;
                                return i.a.wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (t.next = 2), I(e);
                                            case 2:
                                                return (a = t.sent), (t.next = 5), _(e);
                                            case 5:
                                                return (r = t.sent), (t.next = 8), S(e);
                                            case 8:
                                                return (s = t.sent), (t.next = 11), B(e);
                                            case 11:
                                                (u = t.sent),
                                                    (o = c.a.map(function (e) {
                                                        return { sousId: e.sousId, allowance: a[e.sousId], stakingTokenBalance: r[e.sousId], stakedBalance: s[e.sousId], pendingReward: u[e.sousId] };
                                                    })),
                                                    n(F(o));
                                            case 14:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        );
                        return function (e) {
                            return t.apply(this, arguments);
                        };
                    })();
                },
                z = function (e, t) {
                    return (function () {
                        var n = Object(r.a)(
                            i.a.mark(function n(a) {
                                var r;
                                return i.a.wrap(function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (n.next = 2), I(t);
                                            case 2:
                                                (r = n.sent), a(R({ sousId: e, field: "allowance", value: r[e] }));
                                            case 4:
                                            case "end":
                                                return n.stop();
                                        }
                                }, n);
                            })
                        );
                        return function (e) {
                            return n.apply(this, arguments);
                        };
                    })();
                },
                H = function (e, t) {
                    return (function () {
                        var n = Object(r.a)(
                            i.a.mark(function n(a) {
                                var r;
                                return i.a.wrap(function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (n.next = 2), _(t);
                                            case 2:
                                                (r = n.sent), a(R({ sousId: e, field: "stakingTokenBalance", value: r[e] }));
                                            case 4:
                                            case "end":
                                                return n.stop();
                                        }
                                }, n);
                            })
                        );
                        return function (e) {
                            return n.apply(this, arguments);
                        };
                    })();
                },
                J = function (e, t) {
                    return (function () {
                        var n = Object(r.a)(
                            i.a.mark(function n(a) {
                                var r;
                                return i.a.wrap(function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (n.next = 2), S(t);
                                            case 2:
                                                (r = n.sent), a(R({ sousId: e, field: "stakedBalance", value: r[e] }));
                                            case 4:
                                            case "end":
                                                return n.stop();
                                        }
                                }, n);
                            })
                        );
                        return function (e) {
                            return n.apply(this, arguments);
                        };
                    })();
                },
                W = function (e, t) {
                    return (function () {
                        var n = Object(r.a)(
                            i.a.mark(function n(a) {
                                var r;
                                return i.a.wrap(function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                return (n.next = 2), B(t);
                                            case 2:
                                                (r = n.sent), a(R({ sousId: e, field: "pendingReward", value: r[e] }));
                                            case 4:
                                            case "end":
                                                return n.stop();
                                        }
                                }, n);
                            })
                        );
                        return function (e) {
                            return n.apply(this, arguments);
                        };
                    })();
                };
            t.a = E.reducer;
        },
        92: function (e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract ZeeSwap","name":"_cake","type":"address"},{"internalType":"contract SyrupBar","name":"_syrup","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_cakePerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract CakeToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enterStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"migrator","outputs":[{"internalType":"contract IMigratorChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IMigratorChef","name":"_migrator","type":"address"}],"name":"setMigrator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syrup","outputs":[{"internalType":"contract SyrupBar","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
            );
        },
        97: function (e, t, n) {
            "use strict";
            n.d(t, "a", function () {
                return s;
            }),
                n.d(t, "d", function () {
                    return u;
                }),
                n.d(t, "c", function () {
                    return o;
                });
            var a = n(52),
                i = Object(a.c)({
                    name: "toasts",
                    initialState: { data: [] },
                    reducers: {
                        push: function (e, t) {
                            var n = t.payload,
                                a = e.data.findIndex(function (e) {
                                    return e.id === t.payload.id;
                                });
                            a >= 0 && e.data.splice(a, 1), e.data.unshift(n);
                        },
                        remove: function (e, t) {
                            var n = e.data.findIndex(function (e) {
                                return e.id === t.payload;
                            });
                            n >= 0 && e.data.splice(n, 1);
                        },
                        clear: function (e) {
                            e.data = [];
                        },
                    },
                }),
                r = i.actions,
                s = r.clear,
                u = r.remove,
                o = r.push;
            t.b = i.reducer;
        },
        98: function (e, t, n) {
            "use strict";
            n.d(t, "b", function () {
                return g;
            });
            var a = n(2),
                i = n.n(a),
                r = n(11),
                s = n(52),
                u = n(414),
                o = n.n(u),
                p = n(41),
                c = n(147),
                d = n(149),
                l = function (e) {
                    var t = e[0],
                        n = e[1],
                        a = e[2],
                        i = e[3],
                        r = e[4],
                        s = e[5];
                    return { userId: Number(t), points: Number(n), teamId: Number(a), tokenId: Number(r), nftAddress: i, isActive: s };
                },
                y = Object(p.l)(),
                m = Object(p.j)(),
                b = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n, a, r, s;
                            return i.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.prev = 0), (e.next = 3), fetch("".concat("https://profile.pancakeswap.com", "/api/users/").concat(t));
                                            case 3:
                                                if ((n = e.sent).ok) {
                                                    e.next = 6;
                                                    break;
                                                }
                                                return e.abrupt("return", "");
                                            case 6:
                                                return (e.next = 8), n.json();
                                            case 8:
                                                return (a = e.sent), (r = a.username), (s = void 0 === r ? "" : r), e.abrupt("return", s);
                                            case 14:
                                                return (e.prev = 14), (e.t0 = e.catch(0)), e.abrupt("return", "");
                                            case 17:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[0, 14]]
                            );
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                f = (function () {
                    var e = Object(r.a)(
                        i.a.mark(function e(t) {
                            var n, a, r, s, u, p, f, T, h, j, v, O, g, w;
                            return i.a.wrap(
                                function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (e.prev = 0), (e.next = 3), y.methods.hasRegistered(t).call();
                                            case 3:
                                                if ((n = e.sent)) {
                                                    e.next = 6;
                                                    break;
                                                }
                                                return e.abrupt("return", { hasRegistered: n, profile: null });
                                            case 6:
                                                return (e.next = 8), y.methods.getUserProfile(t).call();
                                            case 8:
                                                return (a = e.sent), (r = l(a)), (s = r.userId), (u = r.points), (p = r.teamId), (f = r.tokenId), (T = r.nftAddress), (h = r.isActive), (e.next = 12), Object(c.a)(p);
                                            case 12:
                                                return (j = e.sent), (e.next = 15), b(t);
                                            case 15:
                                                if (((v = e.sent), !h)) {
                                                    e.next = 22;
                                                    break;
                                                }
                                                return (e.next = 19), m.methods.getBunnyId(f).call();
                                            case 19:
                                                (g = e.sent),
                                                    (O = d.a.find(function (e) {
                                                        return e.bunnyId === Number(g);
                                                    })),
                                                    o.a.set("profile_".concat(t), { username: v, avatar: "https://pancakeswap.finance/images/nfts/".concat(O.images.sm) }, { domain: "pancakeswap.finance", secure: !0, expires: 30 });
                                            case 22:
                                                return (w = { userId: s, points: u, teamId: p, tokenId: f, username: v, nftAddress: T, isActive: h, nft: O, team: j }), e.abrupt("return", { hasRegistered: n, profile: w });
                                            case 26:
                                                return (e.prev = 26), (e.t0 = e.catch(0)), e.abrupt("return", null);
                                            case 29:
                                            case "end":
                                                return e.stop();
                                        }
                                },
                                e,
                                null,
                                [[0, 26]]
                            );
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                T = Object(s.c)({
                    name: "profile",
                    initialState: { isInitialized: !1, isLoading: !0, hasRegistered: !1, data: null },
                    reducers: {
                        profileFetchStart: function (e) {
                            e.isLoading = !0;
                        },
                        profileFetchSucceeded: function (e, t) {
                            var n = t.payload,
                                a = n.profile;
                            return { isInitialized: !0, isLoading: !1, hasRegistered: n.hasRegistered, data: a };
                        },
                        profileFetchFailed: function (e) {
                            (e.isLoading = !1), (e.isInitialized = !0);
                        },
                        addPoints: function (e, t) {
                            e.data.points += t.payload;
                        },
                    },
                }),
                h = T.actions,
                j = h.profileFetchStart,
                v = h.profileFetchSucceeded,
                O = h.profileFetchFailed,
                g =
                    (h.addPoints,
                    function (e) {
                        return (function () {
                            var t = Object(r.a)(
                                i.a.mark(function t(n) {
                                    var a;
                                    return i.a.wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (t.prev = 0), n(j()), (t.next = 4), f(e);
                                                    case 4:
                                                        (a = t.sent), n(v(a)), (t.next = 11);
                                                        break;
                                                    case 8:
                                                        (t.prev = 8), (t.t0 = t.catch(0)), n(O());
                                                    case 11:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        null,
                                        [[0, 8]]
                                    );
                                })
                            );
                            return function (e) {
                                return t.apply(this, arguments);
                            };
                        })();
                    });
            t.a = T.reducer;
        },
    },
    [[846, 1, 2]],
]);
//# sourceMappingURL=main.b28c5c68.chunk.js.map
