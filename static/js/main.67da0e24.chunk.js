(this["webpackJsonpreact-ts-tutorial-episode-picker"]=this["webpackJsonpreact-ts-tutorial-episode-picker"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),i=(a(15),a(4)),o=a.n(i),u=a(8),l={episodes:[],favorites:[],list:"episodes"},p=Object(n.createContext)(l);function d(e){var t=e.count?r.a.createElement("span",{onClick:e.clickHandler},"- (",e.count,") <toggle>"):null;return r.a.createElement("header",null,r.a.createElement("h1",null,"Breaking Bad"),r.a.createElement("h6",null,"Pick Your Favorite Episodes ",t))}var f=function(){return r.a.createElement("p",null,"Loading ...")},E=(a(17),Object(n.lazy)((function(){return a.e(3).then(a.bind(null,19))})));var v=function(){var e=Object(n.useContext)(p),t=e.state,a=e.dispatch;Object(n.useEffect)((function(){0===t.episodes.length&&c()}));var c=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tvmaze.com/singlesearch/shows?q=breaking-bad&embed=episodes");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",a({type:"FETCH_EPISODES",payload:n._embedded.episodes}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{count:t.favorites.length,clickHandler:function(){return a({type:"CHANGE_LIST_TYPE"})}}),r.a.createElement("section",null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(f,null)},r.a.createElement(E,{episodes:t[t.list],favorites:t.favorites,toggleFav:function(e){var n=t.favorites.includes(e)?"REMOVE_FAVORITE":"ADD_FAVORITE";return a({type:n,payload:e})}}))))},b=a(9),O=a(5),m=a(1);var h=function(e,t){var a=[],n=[],r="";switch(t.type){case"FETCH_EPISODES":return a=t.payload,Object(m.a)(Object(m.a)({},e),{},{episodes:a});case"ADD_FAVORITE":return n=[].concat(Object(O.a)(e.favorites),[t.payload]),Object(m.a)(Object(m.a)({},e),{},{favorites:n});case"REMOVE_FAVORITE":return n=Object(O.a)(e.favorites.filter((function(e){return e.id!==t.payload.id}))),Object(m.a)(Object(m.a)({},e),{},{favorites:n});case"CHANGE_LIST_TYPE":return r="episodes"===e.list?"favorites":"episodes",Object(m.a)(Object(m.a)({},e),{},{list:r});default:return e}};function j(e){var t=Object(n.useReducer)(h,l),a=Object(b.a)(t,2),c=a[0],s=a[1];return r.a.createElement(p.Provider,{value:{state:c,dispatch:s}},e.children)}s.a.render(r.a.createElement(j,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.67da0e24.chunk.js.map