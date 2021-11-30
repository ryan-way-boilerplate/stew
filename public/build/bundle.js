(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}new Set;let c,i=!1;function a(t,e){t.appendChild(e)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){c=t}new Set;const p=[],m=[],b=[],g=[],y=Promise.resolve();let _=!1;function k(t){b.push(t)}let w=!1;const x=new Set;function v(){if(!w){w=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];h(e),E(e.$$)}for(h(null),p.length=0;m.length;)m.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];x.has(e)||(x.add(e),e())}b.length=0}while(p.length);for(;g.length;)g.pop()();_=!1,w=!1,x.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const S=new Set;let C;function T(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(r,l,a,d,f,$,m,b=[-1]){const g=c;h(r);const w=r.$$={fragment:null,ctx:null,props:$,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(g?g.$$.context:[])),callbacks:n(),dirty:b,skip_bound:!1,root:l.target||g.$$.root};m&&m(w.root);let x=!1;if(w.ctx=a?a(r,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return w.ctx&&f(w.ctx[t],w.ctx[t]=o)&&(!w.skip_bound&&w.bound[t]&&w.bound[t](o),x&&function(t,e){-1===t.$$.dirty[0]&&(p.push(t),_||(_=!0,y.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(r,t)),e})):[],w.update(),x=!0,o(w.before_update),w.fragment=!!d&&d(w.ctx),l.target){if(l.hydrate){i=!0;const t=(T=l.target,Array.from(T.childNodes));w.fragment&&w.fragment.l(t),t.forEach(u)}else w.fragment&&w.fragment.c();l.intro&&((E=r.$$.fragment)&&E.i&&(S.delete(E),E.i(C))),function(t,n,r,l){const{fragment:c,on_mount:i,on_destroy:a,after_update:u}=t.$$;c&&c.m(n,r),l||k((()=>{const n=i.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(k)}(r,l.target,l.anchor,l.customElement),i=!1,v()}var E,C,T;h(g)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function A(e){let n,o,s,r,l,c,i;return{c(){n=d("main"),o=d("h1"),s=f("Hello "),r=f(e[0]),l=f("!"),c=f(" "),i=d("p"),i.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',$(o,"class","svelte-1tky8bj"),$(n,"class","svelte-1tky8bj")},m(t,e){(function(t,e,n){t.insertBefore(e,n||null)})(t,n,e),a(n,o),a(o,s),a(o,r),a(o,l),a(n,c),a(n,i)},p(t,[e]){var n,o;1&e&&(n=r,o=""+(o=t[0]),n.wholeText!==o&&(n.data=o))},i:t,o:t,d(t){t&&u(n)}}}function H(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}new class extends class{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,H,A,r,{name:0})}}({target:document.body,props:{name:"world"}})})();