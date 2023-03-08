/*! For license information please see 1920.js.LICENSE.txt */
(self.webpackChunknpwd_nui=self.webpackChunknpwd_nui||[]).push([[1920],{92703:function(t,n,e){"use strict";var r=e(50414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,n,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},45697:function(t,n,e){t.exports=e(92703)()},50414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},61920:function(t,n,e){"use strict";function r(t,n){return r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},r(t,n)}function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n)}e.r(n),e.d(n,{BrowserRouter:function(){return et},HashRouter:function(){return rt},Link:function(){return st},MemoryRouter:function(){return k},NavLink:function(){return ft},Prompt:function(){return T},Redirect:function(){return M},Route:function(){return $},Router:function(){return O},StaticRouter:function(){return V},Switch:function(){return q},generatePath:function(){return U},matchPath:function(){return B},useHistory:function(){return J},useLocation:function(){return z},useParams:function(){return X},useRouteMatch:function(){return Y},withRouter:function(){return K}});var i=e(92950),a=e.n(i),c=e(68389);function u(t,n){return u=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},u(t,n)}function s(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,u(t,n)}var p=e(45697),l=e.n(p),f=1073741823,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function m(t){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter((function(n){return n!==t}))},get:function(){return t},set:function(e,r){t=e,n.forEach((function(n){return n(t,r)}))}}}var v=a().createContext||function(t,n){var e,r,o,a="__create-react-context-"+((h[o="__global_unique_id__"]=(h[o]||0)+1)+"__"),c=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).emitter=m(n.props.value),n}s(e,t);var r=e.prototype;return r.getChildContext=function(){var t;return(t={})[a]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof n?n(r,o):f,0!=(e|=0)&&this.emitter.set(t.value,e))}var i,a},r.render=function(){return this.props.children},e}(i.Component);c.childContextTypes=((e={})[a]=l().object.isRequired,e);var u=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}s(e,n);var r=e.prototype;return r.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?f:n},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?f:t},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(i.Component);return u.contextTypes=((r={})[a]=l().object,r),{Provider:c,Consumer:u}},y=v,d=e(2177);function g(){return g=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},g.apply(this,arguments)}var b=e(39658),x=e.n(b);function E(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e(50663);var C=e(8679),_=e.n(C),R=function(t){var n=y();return n.displayName=t,n},w=R("Router-History"),S=R("Router"),O=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}o(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return a().createElement(S.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a().createElement(w.Provider,{children:this.props.children||null,value:this.props.history}))},n}(a().Component),k=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=(0,c.PP)(n.props),n}return o(n,t),n.prototype.render=function(){return a().createElement(O,{history:this.history,children:this.props.children})},n}(a().Component),P=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(a().Component);function T(t){var n=t.message,e=t.when,r=void 0===e||e;return a().createElement(S.Consumer,null,(function(t){if(t||(0,d.Z)(!1),!r||t.staticContext)return null;var e=t.history.block;return a().createElement(P,{onMount:function(t){t.release=e(n)},onUpdate:function(t,r){r.message!==n&&(t.release(),t.release=e(n))},onUnmount:function(t){t.release()},message:n})}))}var j={},A=0;function U(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(j[t])return j[t];var n=x().compile(t);return A<1e4&&(j[t]=n,A++),n}(t)(n,{pretty:!0})}function M(t){var n=t.computedMatch,e=t.to,r=t.push,o=void 0!==r&&r;return a().createElement(S.Consumer,null,(function(t){t||(0,d.Z)(!1);var r=t.history,i=t.staticContext,u=o?r.push:r.replace,s=(0,c.ob)(n?"string"==typeof e?U(e,n.params):g({},e,{pathname:U(e.pathname,n.params)}):e);return i?(u(s),null):a().createElement(P,{onMount:function(){u(s)},onUpdate:function(t,n){var e=(0,c.ob)(n.to);(0,c.Hp)(e,g({},s,{key:e.key}))||u(s)},to:e})}))}var L={},N=0;function B(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=L[e]||(L[e]={});if(r[t])return r[t];var o=[],i={regexp:x()(t,o,n),keys:o};return N<1e4&&(r[t]=i,N++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var p=u[0],l=u.slice(1),f=t===p;return i&&!f?null:{path:e,url:"/"===e&&""===p?"/":p,isExact:f,params:a.reduce((function(t,n,e){return t[n.name]=l[e],t}),{})}}),null)}var $=function(t){function n(){return t.apply(this,arguments)||this}return o(n,t),n.prototype.render=function(){var t=this;return a().createElement(S.Consumer,null,(function(n){n||(0,d.Z)(!1);var e=t.props.location||n.location,r=g({},n,{location:e,match:t.props.computedMatch?t.props.computedMatch:t.props.path?B(e.pathname,t.props):n.match}),o=t.props,i=o.children,c=o.component,u=o.render;return Array.isArray(i)&&function(t){return 0===a().Children.count(t)}(i)&&(i=null),a().createElement(S.Provider,{value:r},r.match?i?"function"==typeof i?i(r):i:c?a().createElement(c,r):u?u(r):null:"function"==typeof i?i(r):null)}))},n}(a().Component);function W(t){return"/"===t.charAt(0)?t:"/"+t}function D(t,n){if(!t)return n;var e=W(t);return 0!==n.pathname.indexOf(e)?n:g({},n,{pathname:n.pathname.substr(e.length)})}function H(t){return"string"==typeof t?t:(0,c.Ep)(t)}function Z(t){return function(){(0,d.Z)(!1)}}function I(){}var V=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return n.navigateTo(t,"PUSH")},n.handleReplace=function(t){return n.navigateTo(t,"REPLACE")},n.handleListen=function(){return I},n.handleBlock=function(){return I},n}o(n,t);var e=n.prototype;return e.navigateTo=function(t,n){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,a=void 0===i?{}:i;a.action=n,a.location=function(t,n){return t?g({},n,{pathname:W(t)+n.pathname}):n}(o,(0,c.ob)(t)),a.url=H(a.location)},e.render=function(){var t=this.props,n=t.basename,e=void 0===n?"":n,r=t.context,o=void 0===r?{}:r,i=t.location,u=void 0===i?"/":i,s=E(t,["basename","context","location"]),p={createHref:function(t){return W(e+H(t))},action:"POP",location:D(e,(0,c.ob)(u)),push:this.handlePush,replace:this.handleReplace,go:Z(),goBack:Z(),goForward:Z(),listen:this.handleListen,block:this.handleBlock};return a().createElement(O,g({},s,{history:p,staticContext:o}))},n}(a().Component),q=function(t){function n(){return t.apply(this,arguments)||this}return o(n,t),n.prototype.render=function(){var t=this;return a().createElement(S.Consumer,null,(function(n){n||(0,d.Z)(!1);var e,r,o=t.props.location||n.location;return a().Children.forEach(t.props.children,(function(t){if(null==r&&a().isValidElement(t)){e=t;var i=t.props.path||t.props.from;r=i?B(o.pathname,g({},t.props,{path:i})):n.match}})),r?a().cloneElement(e,{location:o,computedMatch:r}):null}))},n}(a().Component);function K(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,r=E(n,["wrappedComponentRef"]);return a().createElement(S.Consumer,null,(function(n){return n||(0,d.Z)(!1),a().createElement(t,g({},r,n,{ref:e}))}))};return e.displayName=n,e.WrappedComponent=t,_()(e,t)}var F=a().useContext;function J(){return F(w)}function z(){return F(S).location}function X(){var t=F(S).match;return t?t.params:{}}function Y(t){var n=z(),e=F(S).match;return t?B(n.pathname,t):e}function G(t,n){return G=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},G(t,n)}function Q(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,G(t,n)}function tt(){return tt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},tt.apply(this,arguments)}function nt(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}var et=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=(0,c.lX)(n.props),n}return Q(n,t),n.prototype.render=function(){return a().createElement(O,{history:this.history,children:this.props.children})},n}(a().Component),rt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=(0,c.q_)(n.props),n}return Q(n,t),n.prototype.render=function(){return a().createElement(O,{history:this.history,children:this.props.children})},n}(a().Component),ot=function(t,n){return"function"==typeof t?t(n):t},it=function(t,n){return"string"==typeof t?(0,c.ob)(t,null,null,n):t},at=function(t){return t},ct=a().forwardRef;void 0===ct&&(ct=at);var ut=ct((function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,i=nt(t,["innerRef","navigate","onClick"]),c=i.target,u=tt({},i,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return u.ref=at!==ct&&n||e,a().createElement("a",u)})),st=ct((function(t,n){var e=t.component,r=void 0===e?ut:e,o=t.replace,i=t.to,u=t.innerRef,s=nt(t,["component","replace","to","innerRef"]);return a().createElement(S.Consumer,null,(function(t){t||(0,d.Z)(!1);var e=t.history,p=it(ot(i,t.location),t.location),l=p?e.createHref(p):"",f=tt({},s,{href:l,navigate:function(){var n=ot(i,t.location),r=(0,c.Ep)(t.location)===(0,c.Ep)(it(n));(o||r?e.replace:e.push)(n)}});return at!==ct?f.ref=n||u:f.innerRef=u,a().createElement(r,f)}))})),pt=function(t){return t},lt=a().forwardRef;void 0===lt&&(lt=pt);var ft=lt((function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,o=t.activeClassName,i=void 0===o?"active":o,c=t.activeStyle,u=t.className,s=t.exact,p=t.isActive,l=t.location,f=t.sensitive,h=t.strict,m=t.style,v=t.to,y=t.innerRef,g=nt(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(S.Consumer,null,(function(t){t||(0,d.Z)(!1);var e=l||t.location,o=it(ot(v,e),e),b=o.pathname,x=b&&b.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),E=x?B(e.pathname,{path:x,exact:s,sensitive:f,strict:h}):null,C=!!(p?p(E,e):E),_="function"==typeof u?u(C):u,R="function"==typeof m?m(C):m;C&&(_=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(_,i),R=tt({},R,c));var w=tt({"aria-current":C&&r||null,className:_,style:R,to:o},g);return pt!==lt?w.ref=n||y:w.innerRef=y,a().createElement(st,w)}))}))},76585:function(t){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},39658:function(t,n,e){var r=e(76585);t.exports=function t(n,e,o){return r(e)||(o=e||o,e=[]),o=o||{},n instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(t,n)}(n,e):r(n)?function(n,e,r){for(var o=[],i=0;i<n.length;i++)o.push(t(n[i],e,r).source);return p(new RegExp("(?:"+o.join("|")+")",l(r)),e)}(n,e,o):function(t,n,e){return f(i(t,e),n,e)}(n,e,o)},t.exports.parse=i,t.exports.compile=function(t,n){return c(i(t,n),n)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=f;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,n){for(var e,r=[],i=0,a=0,c="",p=n&&n.delimiter||"/";null!=(e=o.exec(t));){var l=e[0],f=e[1],h=e.index;if(c+=t.slice(a,h),a=h+l.length,f)c+=f[1];else{var m=t[a],v=e[2],y=e[3],d=e[4],g=e[5],b=e[6],x=e[7];c&&(r.push(c),c="");var E=null!=v&&null!=m&&m!==v,C="+"===b||"*"===b,_="?"===b||"*"===b,R=e[2]||p,w=d||g;r.push({name:y||i++,prefix:v||"",delimiter:R,optional:_,repeat:C,partial:E,asterisk:!!x,pattern:w?s(w):x?".*":"[^"+u(R)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,n){for(var e=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$",l(n)));return function(n,o){for(var i="",c=n||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var p=t[s];if("string"!=typeof p){var l,f=c[p.name];if(null==f){if(p.optional){p.partial&&(i+=p.prefix);continue}throw new TypeError('Expected "'+p.name+'" to be defined')}if(r(f)){if(!p.repeat)throw new TypeError('Expected "'+p.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(p.optional)continue;throw new TypeError('Expected "'+p.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(l=u(f[h]),!e[s].test(l))throw new TypeError('Expected all "'+p.name+'" to match "'+p.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===h?p.prefix:p.delimiter)+l}}else{if(l=p.asterisk?encodeURI(f).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(f),!e[s].test(l))throw new TypeError('Expected "'+p.name+'" to match "'+p.pattern+'", but received "'+l+'"');i+=p.prefix+l}}else i+=p}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function p(t,n){return t.keys=n,t}function l(t){return t&&t.sensitive?"":"i"}function f(t,n,e){r(n)||(e=n||e,n=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var f=u(s.prefix),h="(?:"+s.pattern+")";n.push(s),s.repeat&&(h+="(?:"+f+h+")*"),a+=h=s.optional?s.partial?f+"("+h+")?":"(?:"+f+"("+h+"))?":f+"("+h+")"}}var m=u(e.delimiter||"/"),v=a.slice(-m.length)===m;return o||(a=(v?a.slice(0,-m.length):a)+"(?:"+m+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+m+"|$)",p(new RegExp("^"+a,l(e)),n)}},30086:function(t,n){"use strict";var e="function"==typeof Symbol&&Symbol.for;e&&Symbol.for("react.element"),e&&Symbol.for("react.portal"),e&&Symbol.for("react.fragment"),e&&Symbol.for("react.strict_mode"),e&&Symbol.for("react.profiler"),e&&Symbol.for("react.provider"),e&&Symbol.for("react.context"),e&&Symbol.for("react.async_mode"),e&&Symbol.for("react.concurrent_mode"),e&&Symbol.for("react.forward_ref"),e&&Symbol.for("react.suspense"),e&&Symbol.for("react.suspense_list"),e&&Symbol.for("react.memo"),e&&Symbol.for("react.lazy"),e&&Symbol.for("react.block"),e&&Symbol.for("react.fundamental"),e&&Symbol.for("react.responder"),e&&Symbol.for("react.scope")},50663:function(t,n,e){"use strict";e(30086)}}]);