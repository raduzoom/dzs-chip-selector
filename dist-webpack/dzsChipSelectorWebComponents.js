(()=>{"use strict";var e={91:(e,t,i)=>{i.d(t,{o:()=>O});var o,r="dzs-chip-selector",n="is-selected",s="dzs-chip-selector--autocompletelist--items--item",l="dzs-chip-selector--overflow-tooltip";function c(e){if(e&&e.firstChild)for(;e.firstChild;)e.removeChild(e.firstChild)}function p(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";e.insertAdjacentHTML(i,t)}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"min-width",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e){var o=window.getComputedStyle(e,null).getPropertyValue(t);return i?parseFloat(o):o}return""}function u(e,t){for(var i=null;e&&e!==this&&e&&e.matches;){if(e.matches(t)){i=e;break}e=e.parentNode}return i}!function(e){e.CHECKED="checked",e.UNCHECKED="unchecked"}(o||(o={}));var d="dzs-chip-selector--autocompletelist--is-placeholder-visible",h={placeholderNoItemsFound:"No items found",inputPlaceholderText:"Filter results...",middlewareFilterResults:null,viewSkin:"default",viewIsWrapping:!0};function m(e){var t,i;function r(t){var i=e.$inputNewElement_;if("keyup"===t.type){if(e.inputForm_currentQueryString===i.value)return;e.inputForm_currentQueryString=i.value,e.autoCompleteFilterResults(e.inputForm_currentQueryString)}"focus"===t.type&&e.onInputAreaFocus(),"blur"===t.type&&e.onInputAreaFocus(!1)}e.$inputNewElement_.addEventListener("focus",r),e.$inputNewElement_.addEventListener("blur",r),e.$inputNewElement_.addEventListener("keyup",r),e.$autoCompleteList.addEventListener("click",(function(t){if("click"===t.type){var i=u(t.target,"."+s),r=null,l=String(null==i?void 0:i.getAttribute("data-value")),c=O.getOptionFromValue(e.autoCompleteOptions,l),p=O.getOptionFromValue(e.persistentOptions,l);void 0===p&&(p={htmlContent:null==i?void 0:i.innerHTML,value:null==i?void 0:i.getAttribute("data-value"),currentStatus:o.UNCHECKED},e.persistentOptions.push(p)),null!=i&&i.classList.contains(n)?(c.currentStatus=o.UNCHECKED,p.currentStatus=o.UNCHECKED):((r=e.persistentOptions.findIndex((function(e){return e.value===p.value})))<e.persistentOptions.length-1&&e.persistentOptions.push(e.persistentOptions.splice(r,1)[0]),c.currentStatus=o.CHECKED,p.currentStatus=o.CHECKED),e.updateListFromOptions(),e.updateFormFromOptions(),e.updateChipsFromOptions(),e.$inputNewElement_.value="",e.$inputNewElement_.dispatchEvent(new Event("keyup")),e.$inputNewElement_.dispatchEvent(new Event("change"))}})),null===(t=e.$elem_)||void 0===t||null===(i=t.querySelector(".dzs-chip-selector--chip-list-wrapper"))||void 0===i||i.addEventListener("click",(function(t){if("click"===t.type){var i=u(t.target,".dzs-chip-selector--item--remove");if(i){var r=i.parentNode,n=String(r.getAttribute("data-value")),s=O.getOptionFromValue(e.autoCompleteOptions,n),l=O.getOptionFromValue(e.persistentOptions,n);s.currentStatus=o.UNCHECKED,l.currentStatus=o.UNCHECKED,e.updateListFromOptions(),e.updateChipsFromOptions(),e.updateFormFromOptions()}}})),e.chipSelectorOptions.viewIsWrapping||new ResizeObserver((function(t){e.viewCheckIfNeedsWrapping(e),console.log("Size changed",t)})).observe(e.$elem_)}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){w(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,z(o.key),o)}}function w(e,t,i){return(t=z(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function z(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}var O=function(){function e(t,i){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];y(this,e),w(this,"styleIsSkinSet",!1),w(this,"feedSource","form"),w(this,"autoCompleteOptions",[]),w(this,"persistentOptions",[]),w(this,"inputForm_currentQueryString",""),t&&(this.chipSelectorOptions=Object.assign(b({},h),i),this.$elem_=t,t.selfInstance=this,this.placeholderNoItemsFound=String(this.chipSelectorOptions.placeholderNoItemsFound),t.isDzsChipsInited||o&&this.initClass())}var t,i,u;return t=e,i=[{key:"initClass",value:function(){var e;(e=this).styleIsSkinSet=!1,e.$elem_.isDzsChipsInited=!0,function(e){for(var t,i=/dzs-chip-selector--skin-(.*?)( |$)/g,o=[];null!==(t=i.exec(e));)o.push(t);return o}(e.$elem_.className).length&&(e.styleIsSkinSet=!0),e.$elem_.classList.add(r+"--is-inited"),e.chipSelectorOptions.viewIsWrapping||e.$elem_.classList.add(r+"--view-one-line"),e.styleIsSkinSet||e.$elem_.classList.add(r+"--skin-".concat(e.chipSelectorOptions.viewSkin)),function(e){if(!e.$elem_.querySelector(".dzs-chip-selector--container")){var t='<div class="dzs-chip-selector--overflow-placeholder"><span>...</span>\n  <span class="'.concat(l,'">This is the tooltip text</span></div>'),i='<label class="dzs-chip-selector--input-new-element--label">\n              <input placeholder="'.concat(e.chipSelectorOptions.inputPlaceholderText,'" class="dzs-chip-selector--input-new-element"\n                     autocomplete="off"\n                     role="combobox" aria-autocomplete="list" aria-expanded="false"\n                     aria-haspopup="listbox"\n                     aria-owns="mat-autocomplete-1">\n            </label>');p(e.$elem_,'<div class="dzs-chip-selector--container">\n          <div class="dzs-chip-selector--form-field">\n            '.concat('<div class="dzs-chip-selector--chip-list">\n              <ul class="dzs-chip-selector--chip-list-wrapper">\n\n              </ul>\n            </div>',"\n            ").concat(e.chipSelectorOptions.viewIsWrapping?"":t,"\n            ").concat(i,"\n          </div>\n        </div>"))}e.$elem_.querySelector(".dzs-chip-selector--autocompletelist")||p(e.$elem_,'<div class="dzs-chip-selector--autocompletelist">\n          <div class="dzs-chip-selector--autocompletelist--inner">\n            <div class="dzs-chip-selector--autocompletelist--placeholder">No items found</div>\n            <ul class="dzs-chip-selector--autocompletelist--items">\n            </ul>\n          </div>\n        </div>')}(this),this.initAfterStructure()}},{key:"reinit",value:function(){var e=this.$elem_.querySelector(".dzs-chip-selector--form");e?(this.feedSource="form",this.chipSelectorOptions.persistentOptions=null,this.getOptionsFromForm(e)):this.$elem_.getAttribute("data-persistentOptions")&&this.readAttrForPersistentOptions(),this.chipSelectorOptions.persistentOptions&&(this.feedSource="options",this.persistentOptions=this.chipSelectorOptions.persistentOptions,this.autoCompleteOptions=this.chipSelectorOptions.persistentOptions),this.createListFromOptions(),this.updateChipsFromOptions()}},{key:"readAttrForPersistentOptions",value:function(){var e=this.$elem_.getAttribute("data-persistentOptions");this.chipSelectorOptions.persistentOptions=JSON.parse(String(e))}},{key:"getOptionsFromForm",value:function(e){var t=this;e.childNodes.forEach((function(e){if(e.nodeName.toLowerCase()==="LABEL".toLowerCase()){var i=e.querySelector("input"),r={htmlContent:e.innerHTML.replace(/<input.*?>/g,""),value:String(null==i?void 0:i.value),currentStatus:null!=i&&i.checked?o.CHECKED:o.UNCHECKED};t.persistentOptions.push(r),t.autoCompleteOptions.push(r)}}))}},{key:"initAfterStructure",value:function(){var e=this;e.$inputNewElement_=this.$elem_.querySelector(".dzs-chip-selector--input-new-element"),e.$autoCompleteList=this.$elem_.querySelector(".dzs-chip-selector--autocompletelist"),e.$form=this.$elem_.querySelector(".dzs-chip-selector--form"),m(this),this.reinit()}},{key:"onInputAreaFocus",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.$inputNewElement_.getBoundingClientRect().x-this.$elem_.getBoundingClientRect().x;e?(this.$autoCompleteList.style.left=t+"px",this.$elem_.classList.add(r+"--is-new-element-focused")):this.$elem_.classList.remove(r+"--is-new-element-focused")}},{key:"updateListFromOptions",value:function(){var t=this,i=this.$autoCompleteList.querySelector(".dzs-chip-selector--autocompletelist--items");null==i||i.childNodes.forEach((function(i){var r=String(i.getAttribute("data-value")),s=e.getOptionFromValue(t.persistentOptions,r);void 0!==s&&(s.currentStatus===o.UNCHECKED&&i.classList.remove(n),s.currentStatus===o.CHECKED&&i.classList.add(n))}))}},{key:"updateFormFromOptions",value:function(){var e=this;"form"===this.feedSource&&c(e.$form),this.$elem_.webComponent&&this.$elem_.webComponent.onUpdate&&(this.chipSelectorOptions.onUpdateFunction=this.$elem_.webComponent.onUpdate),this.chipSelectorOptions.onUpdateFunction&&this.chipSelectorOptions.onUpdateFunction(this.persistentOptions),"form"===this.feedSource&&this.persistentOptions.forEach((function(t){p(e.$form,'<label><input type="checkbox" '.concat(t.currentStatus===o.CHECKED?o.CHECKED:"",' name="subject[]" value="').concat(t.value,'">').concat(t.htmlContent,"</label>"))}))}},{key:"updateChipsFromOptions",value:function(){var e=this,t=e.$elem_.querySelector(".dzs-chip-selector--chip-list-wrapper");c(t);var i="";this.persistentOptions.forEach((function(r){r.currentStatus===o.CHECKED&&(p(t,function(e){return'<li data-value="'.concat(e.value,'" class="dzs-chip-selector--item">\n<div class="dzs-chip-selector--item--content">').concat(e.htmlContent,'</div>\n<button _ngcontent-mua-c151="" matchipremove="" class="dzs-chip-selector--item--remove"  type="button">\n  <figure>x</figure>\n</button>\n</li>')}(r)),e.chipSelectorOptions.viewIsWrapping||(i&&(i+=", "),i+=r.htmlContent))})),e.chipSelectorOptions.viewIsWrapping||(this.viewCheckIfNeedsWrapping(this),e.$elem_.querySelector("."+l).innerHTML=i)}},{key:"viewCheckIfNeedsWrapping",value:function(e){var t=!1,i=0,o=a(e.$elem_.querySelector(".dzs-chip-selector--input-new-element--label"),"min-width",!0),r=a(e.$elem_.querySelector(".dzs-chip-selector--container"),"width",!0),n=0;e.chipSelectorOptions.viewIsWrapping||(i=Number(a(e.$elem_.querySelector(".dzs-chip-selector--overflow-placeholder"),"width",!0))+Number(a(e.$elem_.querySelector(".dzs-chip-selector--overflow-placeholder"),"margin-left",!0))),e.$elem_.querySelector(".dzs-chip-selector--chip-list-wrapper").childNodes.forEach((function(e){var s=e;s.style.display="",(n+=a(s,"width",!0)+3)>r-o-i?(s.style.display="none",t=!0):s.style.display=""})),t?e.$elem_.classList.add("dzs-chip-selector--is-overflowing"):e.$elem_.classList.remove("dzs-chip-selector--is-overflowing")}},{key:"createListFromOptions",value:function(){var e=this.$autoCompleteList.querySelector(".dzs-chip-selector--autocompletelist--items");c(e),this.autoCompleteOptions.forEach((function(t){p(e,'<li class="dzs-chip-selector--autocompletelist--items--item '.concat(t.currentStatus===o.CHECKED?n:"",'" data-value="').concat(t.value,'">').concat(t.htmlContent,"</li>"))}))}},{key:"getAutocompleteItemDomFromValue",value:function(e){this.$autoCompleteList.querySelectorAll("."+s).forEach((function(t){if(t.getAttribute("data-value")===e)return t}))}},{key:"autoCompleteFilterResults",value:function(e){var t=this;function i(t){t.autoCompleteOptions.forEach((function(e){}));var i=t.$autoCompleteList.querySelectorAll("."+s);e=e.toLowerCase();var o=0;i.forEach((function(i){""===t.inputForm_currentQueryString||(i.textContent||"").toLowerCase().indexOf(e)>-1?(i.classList.remove("is-hidden"),o++):i.classList.add("is-hidden")})),0===o?t.$autoCompleteList.classList.add(d):t.$autoCompleteList.classList.remove(d)}e==this.inputForm_currentQueryString&&(this.chipSelectorOptions.middlewareFilterResults?this.chipSelectorOptions.middlewareFilterResults(this,e).then((function(){i(t)})).catch((function(e){console.log("error - ",e)})):i(this))}}],u=[{key:"getOptionFromValue",value:function(e,t){return e.filter((function(e){return e.value===t}))[0]}}],i&&g(t.prototype,i),u&&g(t,u),Object.defineProperty(t,"prototype",{writable:!1}),e}();(window||globalThis).dzs_initDzsChipSelector=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};new O(e,t)}}},t={};function i(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=i(91);function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,n=function(e,i){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,"string");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===t(n)?n:String(n)),r)}var n}function r(e,i){if(i&&("object"===t(i)||"function"==typeof i))return i;if(void 0!==i)throw new TypeError("Derived constructors may only return object or undefined");return n(e)}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){var t="function"==typeof Map?new Map:void 0;return s=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return l(e,arguments,a(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),p(o,e)},s(e)}function l(e,t,i){return l=c()?Reflect.construct.bind():function(e,t,i){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return i&&p(r,i.prototype),r},l.apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}var u=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(h,t);var i,s,l,u,d=(i=h,s=c(),function(){var e,t=a(i);if(s){var o=a(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return r(this,e)});function h(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(e=d.call(this)).shadow=e.attachShadow({mode:"open"}),e.wrapper=document.createElement("div"),e.wrapper.setAttribute("class","dzs-chip-selector-wrapper"),e.wrapper.innerHTML='<div class="dzs-chip-selector" >\n      </div>',console.log(n(e));var t=null,i=null,o=null;e.childNodes.forEach((function(e){"STYLE"===e.tagName&&(t=e),"LINK"===e.tagName&&(i=e)}));var r=document.createElement("style");return r.type="text/css",r.appendChild(document.createTextNode('.dzs-chip-selector{position:relative}.dzs-chip-selector .dzs-chip-selector--container{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%;background-color:rgba(0,0,0,.0392156863);border-radius:5px;padding:10px}.dzs-chip-selector .dzs-chip-selector--container .dzs-chip-selector--form-field{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}.dzs-chip-selector .dzs-chip-selector--container .dzs-chip-selector--form-field .dzs-chip-selector--chip-list{flex-shrink:0;max-width:100%}.dzs-chip-selector .dzs-chip-selector--container .dzs-chip-selector--form-field .dzs-chip-selector--chip-list ul.dzs-chip-selector--chip-list-wrapper{margin:0;padding:0;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center}.dzs-chip-selector .dzs-chip-selector--container .dzs-chip-selector--form-field .dzs-chip-selector--chip-list ul.dzs-chip-selector--chip-list-wrapper .dzs-chip-selector--item{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;padding:7px 12px;border-radius:5px;align-items:center;cursor:default;position:relative;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);border:none;-webkit-appearance:none;padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px;background-color:#e0e0e0;color:rgba(0,0,0,.8705882353);display:inline-block;vertical-align:middle;white-space:nowrap}.dzs-chip-selector .dzs-chip-selector--container .dzs-chip-selector--form-field .dzs-chip-selector--chip-list ul.dzs-chip-selector--chip-list-wrapper .dzs-chip-selector--item .dzs-chip-selector--item--content{display:inline-block;vertical-align:middle}.dzs-chip-selector .dzs-chip-selector--container .dzs-chip-selector--form-field .dzs-chip-selector--item--remove{order:none;appearance:none;display:inline-block;vertical-align:middle;border:0;-moz-appearance:none;padding:0;background:none;margin-left:8px;margin-right:0;color:rgba(0,0,0,.8705882353);opacity:.4;width:18px;height:18px;cursor:pointer;position:relative}.dzs-chip-selector .dzs-chip-selector--container .dzs-chip-selector--form-field .dzs-chip-selector--item--remove>figure{position:absolute;top:50%;left:50%;margin:0;transform:translate3d(-50%, -50%, 0)}.dzs-chip-selector.dzs-chip-selector--view-one-line:not(.a):not(.a):not(.a) .dzs-chip-selector--form-field{width:100%;text-overflow:ellipsis;flex-wrap:nowrap}.dzs-chip-selector.dzs-chip-selector--view-one-line:not(.a):not(.a):not(.a) .dzs-chip-selector--chip-list-wrapper{flex-wrap:nowrap}.dzs-chip-selector.dzs-chip-selector--view-one-line:not(.a):not(.a):not(.a) .dzs-chip-selector--overflow-placeholder{display:none;width:15px;margin-left:5px;cursor:pointer}.dzs-chip-selector.dzs-chip-selector--view-one-line:not(.a):not(.a):not(.a).dzs-chip-selector--is-overflowing .dzs-chip-selector--overflow-placeholder{display:inline-block;position:relative}.dzs-chip-selector.dzs-chip-selector--view-one-line:not(.a):not(.a):not(.a).dzs-chip-selector--is-overflowing .dzs-chip-selector--overflow-placeholder .dzs-chip-selector--overflow-tooltip{width:120px;background-color:#555;color:#fff;text-align:center;padding:5px 0;border-radius:3px;position:absolute;z-index:1;bottom:150%;left:50%;margin-left:-60px;opacity:0;visibility:hidden;font-size:13px;transition:opacity .3s;text-transform:uppercase;font-size:11px;font-weight:bold}.dzs-chip-selector.dzs-chip-selector--view-one-line:not(.a):not(.a):not(.a).dzs-chip-selector--is-overflowing .dzs-chip-selector--overflow-placeholder .dzs-chip-selector--overflow-tooltip:after{content:"";position:absolute;left:50%;top:100%;width:0;height:0;margin-left:-2.5px;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid #555}.dzs-chip-selector.dzs-chip-selector--view-one-line:not(.a):not(.a):not(.a).dzs-chip-selector--is-overflowing .dzs-chip-selector--overflow-placeholder:hover .dzs-chip-selector--overflow-tooltip{visibility:visible;opacity:1}.dzs-chip-selector--input-new-element--label{margin-left:4px;margin-bottom:0;max-width:50%;flex:1 2 100px;min-width:100px}.dzs-chip-selector--input-new-element{font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box;appearance:none;margin:4px}.dzs-chip-selector.dzs-chip-selector--is-new-element-focused .dzs-chip-selector--autocompletelist{opacity:1;visibility:visible}.dzs-chip-selector--autocompletelist{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:block;max-width:100%;max-height:100%;opacity:0;visibility:hidden;transition-property:visibility,opacity;transition-duration:.1s;transition-timing-function:ease-out}.dzs-chip-selector--autocompletelist--inner{padding:5px;border-radius:5px;padding:10px;background-color:#dadada;top:11px;position:relative}.dzs-chip-selector--autocompletelist .dzs-chip-selector--autocompletelist--placeholder{display:none}.dzs-chip-selector--autocompletelist.dzs-chip-selector--autocompletelist--is-placeholder-visible .dzs-chip-selector--autocompletelist--placeholder{display:block}.dzs-chip-selector--autocompletelist.dzs-chip-selector--autocompletelist--is-placeholder-visible ul.dzs-chip-selector--autocompletelist--items{display:none}.dzs-chip-selector--autocompletelist ul.dzs-chip-selector--autocompletelist--items{margin:0;padding:0;min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px;list-style:none;list-style:none}.dzs-chip-selector--autocompletelist ul.dzs-chip-selector--autocompletelist--items .dzs-chip-selector--autocompletelist--items--item{width:100%;border-bottom:1px solid rgba(0,0,0,.1);cursor:pointer;padding:5px;transition-property:background-color;transition-duration:.3s;transition-timing-function:ease-out}.dzs-chip-selector--autocompletelist ul.dzs-chip-selector--autocompletelist--items .dzs-chip-selector--autocompletelist--items--item.is-hidden{display:none}.dzs-chip-selector--autocompletelist ul.dzs-chip-selector--autocompletelist--items .dzs-chip-selector--autocompletelist--items--item:last-child{border-bottom:0}.dzs-chip-selector{opacity:1}.dzs-chip-selector .dzs-chip-selector--autocompletelist--inner{opacity:1;transition-property:opacity;transition-duration:.3s;transition-timing-function:ease-out}.dzs-chip-selector.dzs-chip-selector--is-autocomplete-list-loading .dzs-chip-selector--autocompletelist--inner{opacity:.7;visibility:visible}')),t&&((o=document.createElement("style")).type="text/css",o.appendChild(t)),e.shadow.appendChild(e.wrapper),e.shadow.appendChild(r),o&&e.shadow.appendChild(o),i&&(i.setAttribute("href",String(i.getAttribute("data-lazy-href"))),e.shadow.appendChild(i)),e}return l=h,(u=[{key:"renderComponent",value:function(){console.log("rendered component");var t=this.wrapper.querySelector(".dzs-chip-selector");if(t.webComponent=this,t){var i={},o=this.getAttribute("data-persistentOptions");i.persistentOptions=JSON.parse(String(o)),i.onUpdateFunction=function(e){var t=e.filter((function(e){return"checked"===e.currentStatus}));console.log({selectedOptions:t})},new e.o(this.wrapper.querySelector(".dzs-chip-selector"),i)}}},{key:"connectedCallback",value:function(){console.log("connectedCallback()"),this.renderComponent()}}])&&o(l.prototype,u),Object.defineProperty(l,"prototype",{writable:!1}),h}(s(HTMLElement));customElements.define("dzs-chip-selector",u)})()})();
//# sourceMappingURL=dzsChipSelectorWebComponents.js.map