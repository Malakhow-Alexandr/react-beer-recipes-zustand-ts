"use strict";(self.webpackChunkreact_beer_recipes_zustand_ts=self.webpackChunkreact_beer_recipes_zustand_ts||[]).push([[211],{3068:function(e,r,n){n.d(r,{Z:function(){return o}});var t,i=n(9128),c=n(168),u=n(1087),a=(0,n(5867).ZP)(u.rU)(t||(t=(0,c.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),s=n(184),o=function(e){var r=e.to,n=e.children;return(0,s.jsxs)(a,{to:r,children:[(0,s.jsx)(i.jTe,{size:"24"}),n]})}},8211:function(e,r,n){n.r(r);var t=n(4165),i=n(5861),c=n(2791),u=n(7689),a=n(4917),s=n(5053),o=n(3068),p=n(184);r.default=function(){var e,r,n=(0,a.Z)((function(e){return e.beerRecipe})),f=(0,a.Z)((function(e){return e.setBeerRecipe})),d=(0,u.UO)().recipeId,v=Number(d),l=(0,u.TH)(),h=(0,c.useRef)(null!==(e=null===(r=l.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.f)(r);case 3:n=e.sent,f(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();e(v)}),[v,f]),(0,p.jsxs)("div",{children:[(0,p.jsx)(o.Z,{to:h.current,children:"Back"}),n.map((function(e){return(0,p.jsx)("div",{children:(0,p.jsx)("p",{children:e.name})},e.id)}))]})}},5053:function(e,r,n){n.d(r,{f:function(){return s},y:function(){return a}});var t=n(4165),i=n(5861),c=n(1243),u="https://api.punkapi.com/v2/beers/",a=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(r){var n,i,a,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={page:r,per_page:15},e.next=3,c.Z.get(u,{params:n});case 3:return i=e.sent,a=i.data,s=i.config.params.page,e.abrupt("return",{data:a,currentPage:s});case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),s=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get(u+r);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},4917:function(e,r,n){var t=n(5847),i=n(7416),c=n(768),u=(0,t.Ue)()((0,c.mW)((0,c.tJ)((0,i.n)((function(e){return{beerRecipes:[],favoriteBeerRecipes:[],beerRecipe:[],currentPage:1,isLoading:!1,errors:[],setBeerRecipes:function(r){return e({beerRecipes:r})},setBeerRecipe:function(r){return e({beerRecipe:r})},addFavoriteBeerRecipes:function(r){return e((function(e){e.favoriteBeerRecipes.push(r)}))},removeFavoriteBeerRecipes:function(r){return e({favoriteBeerRecipes:r})},setCurrentPage:function(r){return e({currentPage:r})},setLoading:function(r){return e({isLoading:r})},setErrors:function(r){return e({errors:r})}}})),{name:"Favorite-Beer-Recipes",partialize:function(e){return{favoriteBeerRecipes:e.favoriteBeerRecipes}}})));r.Z=u}}]);
//# sourceMappingURL=211.040fb5ad.chunk.js.map