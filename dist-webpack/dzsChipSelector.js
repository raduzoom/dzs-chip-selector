(()=>{"use strict";var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{o:()=>C});var t,i="dzs-chip-selector",n="is-selected",o="dzs-chip-selector--autocompletelist--items--item",s="dzs-chip-selector--overflow-tooltip";function r(e){if(e&&e.firstChild)for(;e.firstChild;)e.removeChild(e.firstChild)}function l(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";e.insertAdjacentHTML(i,t)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"min-width",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e){var n=globalThis.getComputedStyle(e,null).getPropertyValue(t);return i?parseFloat(n):n}return""}function a(e,t){for(var i=null;e&&e!==this&&e&&e.matches;){if(e.matches(t)){i=e;break}e=e.parentNode}return i}!function(e){e.CHECKED="checked",e.UNCHECKED="unchecked"}(t||(t={}));var p="dzs-chip-selector--autocompletelist--is-placeholder-visible",u={placeholderNoItemsFound:"No items found",inputPlaceholderText:"Filter results...",middlewareFilterResults:null,viewSkin:"default",viewIsWrapping:!0};function h(e){var i,s;function r(t){var i=e.$inputNewElement_;if("keyup"===t.type){if(e.inputForm_currentQueryString===i.value)return;e.inputForm_currentQueryString=i.value,e.autoCompleteFilterResults(e.inputForm_currentQueryString)}"focus"===t.type&&e.onInputAreaFocus(),"blur"===t.type&&e.onInputAreaFocus(!1)}e.$inputNewElement_.addEventListener("focus",r),e.$inputNewElement_.addEventListener("blur",r),e.$inputNewElement_.addEventListener("keyup",r),e.$autoCompleteList.addEventListener("click",(function(i){if("click"===i.type){var s=a(i.target,"."+o),r=null,l=String(null==s?void 0:s.getAttribute("data-value")),c=C.getOptionFromValue(e.autoCompleteOptions,l),p=C.getOptionFromValue(e.persistentOptions,l);void 0===p&&(p={htmlContent:null==s?void 0:s.innerHTML,value:null==s?void 0:s.getAttribute("data-value"),currentStatus:t.UNCHECKED},e.persistentOptions.push(p)),null!=s&&s.classList.contains(n)?(c.currentStatus=t.UNCHECKED,p.currentStatus=t.UNCHECKED):((r=e.persistentOptions.findIndex((function(e){return e.value===p.value})))<e.persistentOptions.length-1&&e.persistentOptions.push(e.persistentOptions.splice(r,1)[0]),c.currentStatus=t.CHECKED,p.currentStatus=t.CHECKED),e.updateListFromOptions(),e.updateFormFromOptions(),e.updateChipsFromOptions(),e.$inputNewElement_.value="",e.$inputNewElement_.dispatchEvent(new Event("keyup")),e.$inputNewElement_.dispatchEvent(new Event("change"))}})),null===(i=e.$elem_)||void 0===i||null===(s=i.querySelector(".dzs-chip-selector--chip-list-wrapper"))||void 0===s||s.addEventListener("click",(function(i){if("click"===i.type){var n=a(i.target,".dzs-chip-selector--item--remove");if(n){var o=n.parentNode,s=String(o.getAttribute("data-value")),r=C.getOptionFromValue(e.autoCompleteOptions,s),l=C.getOptionFromValue(e.persistentOptions,s);r.currentStatus=t.UNCHECKED,l.currentStatus=t.UNCHECKED,e.updateListFromOptions(),e.updateChipsFromOptions(),e.updateFormFromOptions()}}})),e.chipSelectorOptions.viewIsWrapping||new ResizeObserver((function(t){e.viewCheckIfNeedsWrapping(e),console.log("Size changed",t)})).observe(e.$elem_)}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?m(Object(i),!0).forEach((function(t){O(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,S(n.key),n)}}function O(e,t,i){return(t=S(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function S(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===d(t)?t:String(t)}var C=function(){function e(t,i){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];v(this,e),O(this,"styleIsSkinSet",!1),O(this,"feedSource","form"),O(this,"autoCompleteOptions",[]),O(this,"persistentOptions",[]),O(this,"inputForm_currentQueryString",""),t&&(this.chipSelectorOptions=Object.assign(f({},u),i),this.$elem_=t,t.selfInstance=this,this.placeholderNoItemsFound=String(this.chipSelectorOptions.placeholderNoItemsFound),t.isDzsChipsInited||n&&this.initClass())}var a,d,m;return a=e,d=[{key:"initClass",value:function(){var e;(e=this).styleIsSkinSet=!1,e.$elem_.isDzsChipsInited=!0,function(e){for(var t,i=/dzs-chip-selector--skin-(.*?)( |$)/g,n=[];null!==(t=i.exec(e));)n.push(t);return n}(e.$elem_.className).length&&(e.styleIsSkinSet=!0),e.$elem_.classList.add(i+"--is-inited"),e.chipSelectorOptions.viewIsWrapping||e.$elem_.classList.add(i+"--view-one-line"),e.styleIsSkinSet||e.$elem_.classList.add(i+"--skin-".concat(e.chipSelectorOptions.viewSkin)),function(e){if(!e.$elem_.querySelector(".dzs-chip-selector--container")){var t='<div class="dzs-chip-selector--overflow-placeholder"><span>...</span>\n  <span class="'.concat(s,'">This is the tooltip text</span></div>'),i='<label class="dzs-chip-selector--input-new-element--label">\n              <input placeholder="'.concat(e.chipSelectorOptions.inputPlaceholderText,'" class="dzs-chip-selector--input-new-element"\n                     autocomplete="off"\n                     role="combobox" aria-autocomplete="list" aria-expanded="false"\n                     aria-haspopup="listbox"\n                     aria-owns="mat-autocomplete-1">\n            </label>');l(e.$elem_,'<div class="dzs-chip-selector--container">\n          <div class="dzs-chip-selector--form-field">\n            '.concat('<div class="dzs-chip-selector--chip-list">\n              <ul class="dzs-chip-selector--chip-list-wrapper">\n\n              </ul>\n            </div>',"\n            ").concat(e.chipSelectorOptions.viewIsWrapping?"":t,"\n            ").concat(i,"\n          </div>\n        </div>"))}e.$elem_.querySelector(".dzs-chip-selector--autocompletelist")||l(e.$elem_,'<div class="dzs-chip-selector--autocompletelist">\n          <div class="dzs-chip-selector--autocompletelist--inner">\n            <div class="dzs-chip-selector--autocompletelist--placeholder">No items found</div>\n            <ul class="dzs-chip-selector--autocompletelist--items">\n            </ul>\n          </div>\n        </div>')}(this),this.initAfterStructure()}},{key:"reinit",value:function(){var e=this.$elem_.querySelector(".dzs-chip-selector--form");e?(this.feedSource="form",this.chipSelectorOptions.persistentOptions=null,this.getOptionsFromForm(e)):this.$elem_.getAttribute("data-persistentOptions")&&this.readAttrForPersistentOptions(),this.chipSelectorOptions.persistentOptions&&(this.feedSource="options",this.persistentOptions=this.chipSelectorOptions.persistentOptions,this.autoCompleteOptions=this.chipSelectorOptions.persistentOptions),this.createListFromOptions(),this.updateChipsFromOptions()}},{key:"readAttrForPersistentOptions",value:function(){var e=this.$elem_.getAttribute("data-persistentOptions");this.chipSelectorOptions.persistentOptions=JSON.parse(String(e))}},{key:"getOptionsFromForm",value:function(e){var i=this;e.childNodes.forEach((function(e){if(e.nodeName.toLowerCase()==="LABEL".toLowerCase()){var n=e.querySelector("input"),o={htmlContent:e.innerHTML.replace(/<input.*?>/g,""),value:String(null==n?void 0:n.value),currentStatus:null!=n&&n.checked?t.CHECKED:t.UNCHECKED};i.persistentOptions.push(o),i.autoCompleteOptions.push(o)}}))}},{key:"initAfterStructure",value:function(){var e=this;e.$inputNewElement_=this.$elem_.querySelector(".dzs-chip-selector--input-new-element"),e.$autoCompleteList=this.$elem_.querySelector(".dzs-chip-selector--autocompletelist"),e.$form=this.$elem_.querySelector(".dzs-chip-selector--form"),h(this),this.reinit()}},{key:"onInputAreaFocus",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.$inputNewElement_.getBoundingClientRect().x-this.$elem_.getBoundingClientRect().x;e?(this.$autoCompleteList.style.left=t+"px",this.$elem_.classList.add(i+"--is-new-element-focused")):this.$elem_.classList.remove(i+"--is-new-element-focused")}},{key:"updateListFromOptions",value:function(){var i=this,o=this.$autoCompleteList.querySelector(".dzs-chip-selector--autocompletelist--items");null==o||o.childNodes.forEach((function(o){var s=String(o.getAttribute("data-value")),r=e.getOptionFromValue(i.persistentOptions,s);void 0!==r&&(r.currentStatus===t.UNCHECKED&&o.classList.remove(n),r.currentStatus===t.CHECKED&&o.classList.add(n))}))}},{key:"updateFormFromOptions",value:function(){var e=this;"form"===this.feedSource&&r(e.$form),this.$elem_.webComponent&&this.$elem_.webComponent.onUpdate&&(this.chipSelectorOptions.onUpdateFunction=this.$elem_.webComponent.onUpdate),this.chipSelectorOptions.onUpdateFunction&&this.chipSelectorOptions.onUpdateFunction(this.persistentOptions),"form"===this.feedSource&&this.persistentOptions.forEach((function(i){l(e.$form,'<label><input type="checkbox" '.concat(i.currentStatus===t.CHECKED?t.CHECKED:"",' name="subject[]" value="').concat(i.value,'">').concat(i.htmlContent,"</label>"))}))}},{key:"updateChipsFromOptions",value:function(){var e=this,i=e.$elem_.querySelector(".dzs-chip-selector--chip-list-wrapper");r(i);var n="";this.persistentOptions.forEach((function(o){o.currentStatus===t.CHECKED&&(l(i,function(e){return'<li data-value="'.concat(e.value,'" class="dzs-chip-selector--item">\n<div class="dzs-chip-selector--item--content">').concat(e.htmlContent,'</div>\n<button _ngcontent-mua-c151="" matchipremove="" class="dzs-chip-selector--item--remove"  type="button">\n  <figure>x</figure>\n</button>\n</li>')}(o)),e.chipSelectorOptions.viewIsWrapping||(n&&(n+=", "),n+=o.htmlContent))})),e.chipSelectorOptions.viewIsWrapping||(this.viewCheckIfNeedsWrapping(this),e.$elem_.querySelector("."+s).innerHTML=n)}},{key:"viewCheckIfNeedsWrapping",value:function(e){var t=!1,i=0,n=c(e.$elem_.querySelector(".dzs-chip-selector--input-new-element--label"),"min-width",!0),o=c(e.$elem_.querySelector(".dzs-chip-selector--container"),"width",!0),s=0;e.chipSelectorOptions.viewIsWrapping||(i=Number(c(e.$elem_.querySelector(".dzs-chip-selector--overflow-placeholder"),"width",!0))+Number(c(e.$elem_.querySelector(".dzs-chip-selector--overflow-placeholder"),"margin-left",!0))),e.$elem_.querySelector(".dzs-chip-selector--chip-list-wrapper").childNodes.forEach((function(e){var r=e;r.style.display="",(s+=c(r,"width",!0)+3)>o-n-i?(r.style.display="none",t=!0):r.style.display=""})),t?e.$elem_.classList.add("dzs-chip-selector--is-overflowing"):e.$elem_.classList.remove("dzs-chip-selector--is-overflowing")}},{key:"createListFromOptions",value:function(){var e=this.$autoCompleteList.querySelector(".dzs-chip-selector--autocompletelist--items");r(e),this.autoCompleteOptions.forEach((function(i){l(e,'<li class="dzs-chip-selector--autocompletelist--items--item '.concat(i.currentStatus===t.CHECKED?n:"",'" data-value="').concat(i.value,'">').concat(i.htmlContent,"</li>"))}))}},{key:"getAutocompleteItemDomFromValue",value:function(e){this.$autoCompleteList.querySelectorAll("."+o).forEach((function(t){if(t.getAttribute("data-value")===e)return t}))}},{key:"autoCompleteFilterResults",value:function(e){var t=this;function i(t){t.autoCompleteOptions.forEach((function(e){}));var i=t.$autoCompleteList.querySelectorAll("."+o);e=e.toLowerCase();var n=0;i.forEach((function(i){""===t.inputForm_currentQueryString||(i.textContent||"").toLowerCase().indexOf(e)>-1?(i.classList.remove("is-hidden"),n++):i.classList.add("is-hidden")})),0===n?t.$autoCompleteList.classList.add(p):t.$autoCompleteList.classList.remove(p)}e==this.inputForm_currentQueryString&&(this.chipSelectorOptions.middlewareFilterResults?this.chipSelectorOptions.middlewareFilterResults(this,e).then((function(){i(t)})).catch((function(e){console.log("error - ",e)})):i(this))}}],m=[{key:"getOptionFromValue",value:function(e,t){return e.filter((function(e){return e.value===t}))[0]}}],d&&y(a.prototype,d),m&&y(a,m),Object.defineProperty(a,"prototype",{writable:!1}),e}();(globalThis||window).dzs_initDzsChipSelector=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};new C(e,t)}})();
//# sourceMappingURL=dzsChipSelector.js.map