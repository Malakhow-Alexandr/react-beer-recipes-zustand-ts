"use strict";(self.webpackChunkreact_beer_recipes_zustand_ts=self.webpackChunkreact_beer_recipes_zustand_ts||[]).push([[211],{211:function(e,r,n){n.r(r);var t=n(165),u=n(861),c=n(791),a=n(917),i=n(53),s=n(184);r.default=function(){var e=(0,a.Z)((function(e){return e.beerRecipe})),r=(0,a.Z)((function(e){return e.setBeerRecipe}));return(0,c.useEffect)((function(){var e=function(){var e=(0,u.Z)((0,t.Z)().mark((function e(n){var u;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.f)(n);case 3:u=e.sent,r(u),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();e(5)}),[r]),console.log(e),(0,s.jsx)("div",{children:e.map((function(e){return(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:e.name})},e.id)}))})}},53:function(e,r,n){n.d(r,{f:function(){return s},y:function(){return i}});var t=n(165),u=n(861),c=n(243),a="https://api.punkapi.com/v2/beers/",i=function(){var e=(0,u.Z)((0,t.Z)().mark((function e(r){var n,u,i,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={page:r,per_page:15},e.next=3,c.Z.get(a,{params:n});case 3:return u=e.sent,i=u.data,s=u.config.params.page,e.abrupt("return",{data:i,currentPage:s});case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),s=function(){var e=(0,u.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(a+r);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},917:function(e,r,n){var t=n(847),u=n(416),c=n(768),a=(0,t.Ue)()((0,c.mW)((0,u.n)((function(e){return{beerRecipes:[],favoriteBeerRecipes:[],beerRecipe:[],currentPage:1,isLoading:!1,errors:[],setBeerRecipes:function(r){return e({beerRecipes:r})},setBeerRecipe:function(r){return e({beerRecipe:r})},setCurrentPage:function(r){return e({currentPage:r})},setLoading:function(r){return e({isLoading:r})},setErrors:function(r){return e({errors:r})}}}))));r.Z=a}}]);
//# sourceMappingURL=211.4508b027.chunk.js.map