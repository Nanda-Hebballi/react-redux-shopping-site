(this["webpackJsonpmy-reactapp"]=this["webpackJsonpmy-reactapp"]||[]).push([[0],{45:function(t,e,c){},46:function(t,e,c){},75:function(t,e,c){},76:function(t,e,c){},77:function(t,e,c){},78:function(t,e,c){"use strict";c.r(e);var s=c(0),r=c.n(s),n=c(16),a=c.n(n),i=(c(45),c(46),c(39)),j=c(14),o="SET_PRODUCTS",l="SET_PRODUCT",d="REMOVE_PRODUCT",b="REMOVE_PRODUCTS",O="ADD_TO_CART",h="SET_QUANTITY_PRODUCT",u="REMOVE_CART_PRODUCT",x={products:[]},p={cartProducts:[],total:0},m=c(22),f=Object(m.a)({allProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0,c=e.type,s=e.payload;switch(c){case o:return Object(j.a)(Object(j.a)({},t),{},{products:s});case b:return[];default:return t}},product:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,c=e.type,s=e.payload;switch(c){case l:return Object(j.a)(Object(j.a)({},t),s);case d:return{};default:return t}},carts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0,c=e.type,s=e.payload;switch(c){case O:var r=t.cartProducts.find((function(t){return t.id===s.id}));if(r){var n=0;return t.cartProducts.find((function(t){t.id===s.id&&(n+=1,t.quantity+=1)})),Object(j.a)(Object(j.a)({},t),{},{total:t.total+r.price*n})}var a=1,o=t.total+s.price;return s.quantity=a,Object(j.a)(Object(j.a)({},t),{},{cartProducts:[].concat(Object(i.a)(t.cartProducts),[s]),total:o});case h:var l=s.product;t.cartProducts.find((function(t){t.id===l.id&&(t.quantity=s.quantity)}));var d=0;return t.cartProducts.forEach((function(t){var e;e=t.quantity*t.price,d+=e})),d=parseInt(d),console.log(d),Object(j.a)(Object(j.a)({},t),{},{total:d});case u:var b=[];t.cartProducts.find((function(e){if(e&&e.id===s.id){var c=t.cartProducts.indexOf(s);console.log(c),c>=0&&(t.cartProducts.splice(c,1),console.log(t.cartProducts),b=t.cartProducts)}}));var x=0;return t.cartProducts.forEach((function(t){var e;e=t.quantity*t.price,x+=e})),x=parseInt(x),console.log(x),Object(j.a)(Object(j.a)({},t),{},{total:x,cartProducts:b});default:return t}}}),g=Object(m.b)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),y=c(9),v=c(7),N=c(6),P=c(20),T=c.n(P),w=function(t){return{type:O,payload:t}},E=c(88),_=c(80),C=c(87),I=c(81),S=c(1);var D=function(t){var e=Object(y.c)((function(t){return t.allProducts.products})),c=Object(y.b)();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(E.a,{children:t.type?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(E.a.Item,{children:Object(S.jsx)(v.b,{to:"/products",children:"Products"})}),Object(S.jsx)(E.a.Item,{active:!0,children:t.type})]}):Object(S.jsx)(E.a.Item,{active:!0,children:Object(S.jsx)(v.b,{to:"/products",children:"Products"})})}),t.type?Object(S.jsxs)("h4",{className:"heading",children:["Showing ",t.type," List"]}):Object(S.jsx)("h4",{className:"heading",children:"Showing Products List"}),Object(S.jsx)("div",{class:"row",children:0===Object.keys(e).length?Object(S.jsxs)("div",{children:[Object(S.jsx)(_.a,{animation:"border",role:"status",children:Object(S.jsx)("span",{className:""})}),Object(S.jsx)("h4",{children:"Loading"})]}):e.map((function(e,s){return Object(S.jsx)("div",{className:"col-4 col-md-4 col-sm-12",children:t.type?Object(S.jsxs)(C.a,{style:{width:"30rem"},children:[Object(S.jsx)(v.b,{to:"".concat([t.type],"/").concat(e.id),children:Object(S.jsx)(C.a.Img,{variant:"top",src:e.image})}),Object(S.jsxs)(C.a.Body,{children:[Object(S.jsx)(C.a.Title,{children:e.title}),Object(S.jsxs)(C.a.Text,{children:["$ ",e.price]}),Object(S.jsx)(C.a.Text,{children:Object(S.jsx)(I.a,{onClick:function(){return c(w(e))},children:"Add to Cart"})})]})]}):Object(S.jsxs)(C.a,{style:{width:"30rem"},children:[Object(S.jsx)(v.b,{to:"products/category/".concat(e.category,"/").concat(e.id),children:Object(S.jsx)(C.a.Img,{variant:"top",src:e.image})}),Object(S.jsxs)(C.a.Body,{children:[Object(S.jsx)(C.a.Title,{children:e.title}),Object(S.jsxs)(C.a.Text,{children:["$ ",e.price]}),Object(S.jsx)(C.a.Text,{children:Object(S.jsx)(I.a,{onClick:function(){return c(w(e))},children:"Add to Cart"})})]})]})},s)}))})]})};var R=function(){var t=Object(y.c)((function(t){return t.allProducts.products})),e=Object(y.b)(),c=Object(N.g)().type,r={electronics:"electronics",jewelery:"jewelery",mens:"men's%20clothing",womens:"women's%20clothing"};Object(s.useEffect)((function(){n()}),[c]),console.log(t);var n=function(){var t="";t=c?"https://fakestoreapi.com/products/category/".concat(r[c]):"https://fakestoreapi.com/products",T.a.get(t).then((function(t){e(function(t){return{type:o,payload:t}}(t.data)),console.log(t.data)})).catch((function(t){console.log(t)}))};return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(D,{type:c})})},k=c(86);var F=function(){var t=Object(N.g)().id,e=Object(N.g)().type,c=Object(y.c)((function(t){return t.product})),r=Object(y.b)();Object(s.useEffect)((function(){return n(),function(){r({type:d})}}),[]),console.log(c);var n=function(){T.a.get("https://fakestoreapi.com/products/".concat(t)).then((function(t){var e;r((e=t.data,{type:l,payload:e})),console.log(t.data)})).catch((function(t){console.log(t)}))};return Object(S.jsxs)("div",{children:[0===Object.keys(c).length?null:Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(E.a,{children:Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(E.a.Item,{children:Object(S.jsx)(v.b,{to:"/products",children:"Products"})}),Object(S.jsx)(E.a.Item,{children:Object(S.jsx)(v.b,{to:"/products/category/".concat(e),children:e})}),Object(S.jsx)(E.a.Item,{active:!0,children:c.title})]})})}),Object(S.jsx)("div",{className:"col-2 col-md-2 col-sm-12"}),Object(S.jsx)("div",{className:"col-8 col-md-8 col-sm-12",children:0===Object.keys(c).length?Object(S.jsxs)("div",{children:[Object(S.jsx)(_.a,{animation:"border",role:"status",children:Object(S.jsx)("span",{className:""})}),Object(S.jsx)("h4",{children:"Loading"})]}):Object(S.jsxs)(k.a,{children:[Object(S.jsx)(k.a.Image,{width:500,height:800,src:c.image}),Object(S.jsx)(k.a.Caption,{children:c.title}),Object(S.jsx)("h5",{children:c.description}),Object(S.jsxs)("h5",{children:["$ ",c.price]})]})}),Object(S.jsx)("div",{className:"col-2 col-md-2 col-sm-12"})]})},U=c(85);var q=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(U.a,{bg:"light",children:Object(S.jsx)(U.a.Brand,{href:"#home",className:"mx-4 pt-3 px-3",children:"Shopping Site"})})})};c(75);var A=function(){return Object(S.jsx)("div",{children:Object(S.jsxs)("ul",{className:"sidenavUl",children:[Object(S.jsx)(v.b,{to:"/products",children:Object(S.jsxs)("li",{children:[Object(S.jsx)("i",{className:"fa fa-server"}),"All Products"]})}),Object(S.jsx)(v.b,{to:"/products/category/electronics",children:Object(S.jsxs)("li",{children:[Object(S.jsx)("i",{className:"fa fa-laptop","aria-hidden":"true"}),"Electronics"]})}),Object(S.jsx)(v.b,{to:"/products/category/jewelery",children:Object(S.jsxs)("li",{children:[Object(S.jsx)("i",{className:"fas fa-gem"}),"Jewelery"]})}),Object(S.jsx)(v.b,{to:"/products/category/mens",children:Object(S.jsxs)("li",{children:[Object(S.jsx)("i",{className:"fas fa-tshirt"}),"Men's clothing"]})}),Object(S.jsx)(v.b,{to:"/products/category/womens",children:Object(S.jsxs)("li",{children:[Object(S.jsx)("i",{className:"fas fa-female"}),"Women's clothing"]})})]})})},L=(c(76),c(84)),$=c(82),B=c(83);c(77);var M=function(){var t=Object(y.c)((function(t){return t.carts.cartProducts})),e=Object(y.c)((function(t){return t.carts.total})),c=Object(y.b)();function s(t,e){var s,r;c((s=t,r=parseInt(e.target.value),{type:h,payload:{product:s,quantity:r}}))}function r(t){c({type:u,payload:t})}return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)($.a,{className:"cart-row",children:0===Object.keys(t).length?Object(S.jsx)("div",{children:Object(S.jsx)("h4",{children:"No Items Added to cart"})}):t.map((function(t,e){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(B.a,{md:6,className:"mb-1",children:Object(S.jsxs)(B.a,{md:12,className:"cart-col m-1",children:[Object(S.jsx)(B.a,{md:4,children:Object(S.jsx)("img",{src:t.image})}),Object(S.jsx)(B.a,{md:4,children:Object(S.jsxs)("div",{className:"p-3",children:[Object(S.jsx)("h5",{children:t.title}),Object(S.jsxs)("p",{children:["$ ",t.price]})]})}),Object(S.jsxs)(B.a,{md:4,children:[Object(S.jsx)("div",{className:"p-3",children:Object(S.jsxs)("h5",{children:["Price $",t.price," "]})}),Object(S.jsxs)("div",{children:["quantity  ",Object(S.jsx)("input",{type:"number",name:"firstName",value:t.quantity,onChange:function(e){return s(t,e)}})]}),Object(S.jsx)("i",{class:"fa fa-times remove-icon",onClick:function(){return r(t)},"aria-hidden":"true"})]})]})})})}))}),Object(S.jsx)($.a,{className:"mb-2",children:Object(S.jsx)(B.a,{md:12,children:Object(S.jsxs)("h3",{children:[" Total Price : $ ",e]})})})]})};var V=function(){return Object(S.jsx)(y.a,{store:g,children:Object(S.jsx)(L.a,{fluid:!0,className:"p-0",children:Object(S.jsxs)(v.a,{children:[Object(S.jsx)($.a,{className:"p-0 m-0",children:Object(S.jsx)(B.a,{className:"p-0",children:Object(S.jsx)(q,{})})}),Object(S.jsxs)($.a,{className:"p-0 m-0",children:[Object(S.jsx)(B.a,{xs:12,md:2,className:"sidenavClass",children:Object(S.jsx)(A,{})}),Object(S.jsxs)(B.a,{xs:12,md:10,className:"mainContentClass pt-2 mt-2",children:[Object(S.jsxs)(N.d,{children:[Object(S.jsx)(N.b,{exact:!0,path:"/products",children:Object(S.jsx)(R,{})}),Object(S.jsx)(N.b,{exact:!0,path:"/",children:Object(S.jsx)(N.a,{to:"/products"})}),Object(S.jsx)(N.b,{exact:!0,path:"/products/category/:type/:id",children:Object(S.jsx)(F,{})}),Object(S.jsx)(N.b,{exact:!0,path:"/products/category/:type",children:Object(S.jsx)(R,{})}),Object(S.jsx)(N.b,{exact:!0,path:"/cart",children:Object(S.jsx)(M,{})})]}),Object(S.jsx)(v.b,{to:"/cart",children:Object(S.jsx)("i",{className:"fas fa-shopping-cart cart-topnav"})})]})]})]})})})},X=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,89)).then((function(e){var c=e.getCLS,s=e.getFID,r=e.getFCP,n=e.getLCP,a=e.getTTFB;c(t),s(t),r(t),n(t),a(t)}))};a.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(V,{})}),document.getElementById("root")),X()}},[[78,1,2]]]);
//# sourceMappingURL=main.a639e8e3.chunk.js.map