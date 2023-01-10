(()=>{"use strict";var t,e="dzs-chip-selector",i="is-selected",s="dzs-chip-selector--autocompletelist--items--item";function n(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function o(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";t.insertAdjacentHTML(i,e)}function r(t,e){for(var i=null;t&&t!==this&&t&&t.matches;){if(t.matches(e)){i=t;break}t=t.parentNode}return i}!function(t){t.CHECKED="checked",t.UNCHECKED="unchecked"}(t||(t={}));var l="dzs-chip-selector--autocompletelist--is-placeholder-visible",c={placeholderNoItemsFound:"No items found",middlewareFilterResults:null,viewSkin:"default"};function u(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p=function(){function p(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),a(this,"feedSource","form"),a(this,"autoCompleteOptions",[]),a(this,"persistentOptions",[]),a(this,"inputForm_currentQueryString",""),t&&(this.chipSelectorOptions=Object.assign(c,e),this.$elem_=t,t.selfInstance=this,this.placeholderNoItemsFound=String(this.chipSelectorOptions.placeholderNoItemsFound),t.isDzsChipsInited||this.initClass())}var h,d,m;return h=p,d=[{key:"initClass",value:function(){this.$elem_.isDzsChipsInited=!0,this.$elem_.classList.add(e+"--is-inited"),this.$elem_.classList.add(e+"--skin-".concat(this.chipSelectorOptions.viewSkin)),this.initStructure(),this.initAfterStructure()}},{key:"initStructure",value:function(){this.$elem_.querySelector(".dzs-chip-selector--container")||o(this.$elem_,'<div class="dzs-chip-selector--container">\n          <div class="dzs-chip-selector--form-field">\n            <div class="dzs-chip-selector--chip-list">\n              <ul class="dzs-chip-selector--chip-list-wrapper">\n\n              </ul>\n            </div>\n            <label class="dzs-chip-selector--input-new-element--label">\n              <input placeholder="New fruit..." class="dzs-chip-selector--input-new-element"\n                     autocomplete="off"\n                     role="combobox" aria-autocomplete="list" aria-expanded="false"\n                     aria-haspopup="listbox"\n                     aria-owns="mat-autocomplete-1">\n            </label>\n          </div>\n        </div>'),this.$elem_.querySelector(".dzs-chip-selector--autocompletelist")||o(this.$elem_,'<div class="dzs-chip-selector--autocompletelist">\n          <div class="dzs-chip-selector--autocompletelist--inner">\n            <div class="dzs-chip-selector--autocompletelist--placeholder">No items found</div>\n            <ul class="dzs-chip-selector--autocompletelist--items">\n            </ul>\n          </div>\n        </div>')}},{key:"reinit",value:function(){var t=this.$elem_.querySelector(".dzs-chip-selector--form");t?(this.feedSource="form",this.chipSelectorOptions.persistentOptions=null,this.getOptionsFromForm(t)):this.$elem_.getAttribute("data-persistentOptions")&&this.readAttrForPersistentOptions(),this.chipSelectorOptions.persistentOptions&&(this.feedSource="options",this.persistentOptions=this.chipSelectorOptions.persistentOptions,this.autoCompleteOptions=this.chipSelectorOptions.persistentOptions),this.createListFromOptions(),this.updateChipsFromOptions()}},{key:"readAttrForPersistentOptions",value:function(){var t=this.$elem_.getAttribute("data-persistentOptions");this.chipSelectorOptions.persistentOptions=JSON.parse(String(t))}},{key:"getOptionsFromForm",value:function(e){var i=this;e.childNodes.forEach((function(e){if(e.nodeName.toLowerCase()==="LABEL".toLowerCase()){var s=e.querySelector("input"),n={htmlContent:e.innerHTML.replace(/<input.*?>/g,""),value:String(null==s?void 0:s.value),currentStatus:null!=s&&s.checked?t.CHECKED:t.UNCHECKED};i.persistentOptions.push(n),i.autoCompleteOptions.push(n)}}))}},{key:"initAfterStructure",value:function(){var e,n,o=this;function l(t){var e=o.$inputNewElement_;if("keyup"===t.type){if(o.inputForm_currentQueryString===e.value)return;o.inputForm_currentQueryString=e.value,o.autoCompleteFilterResults(o.inputForm_currentQueryString)}"focus"===t.type&&o.onInputAreaFocus(),"blur"===t.type&&o.onInputAreaFocus(!1)}o.$inputNewElement_=this.$elem_.querySelector(".dzs-chip-selector--input-new-element"),o.$autoCompleteList=this.$elem_.querySelector(".dzs-chip-selector--autocompletelist"),o.$form=this.$elem_.querySelector(".dzs-chip-selector--form"),this.$inputNewElement_.addEventListener("focus",l),this.$inputNewElement_.addEventListener("blur",l),this.$inputNewElement_.addEventListener("keyup",l),this.$autoCompleteList.addEventListener("click",(function(e){if("click"===e.type){var n=r(e.target,"."+s),l=null,c=String(null==n?void 0:n.getAttribute("data-value")),u=p.getOptionFromValue(o.autoCompleteOptions,c),a=p.getOptionFromValue(o.persistentOptions,c);void 0===a&&(a={htmlContent:null==n?void 0:n.innerHTML,value:null==n?void 0:n.getAttribute("data-value"),currentStatus:t.UNCHECKED},o.persistentOptions.push(a)),null!=n&&n.classList.contains(i)?(u.currentStatus=t.UNCHECKED,a.currentStatus=t.UNCHECKED):((l=o.persistentOptions.findIndex((function(t){return t.value===a.value})))<o.persistentOptions.length-1&&o.persistentOptions.push(o.persistentOptions.splice(l,1)[0]),u.currentStatus=t.CHECKED,a.currentStatus=t.CHECKED),o.updateListFromOptions(),o.updateFormFromOptions(),o.updateChipsFromOptions(),o.$inputNewElement_.value="",o.$inputNewElement_.dispatchEvent(new Event("keyup")),o.$inputNewElement_.dispatchEvent(new Event("change"))}})),null===(e=this.$elem_)||void 0===e||null===(n=e.querySelector(".dzs-chip-selector--chip-list-wrapper"))||void 0===n||n.addEventListener("click",(function(e){if("click"===e.type){var i=r(e.target,".dzs-chip-selector--item--remove");if(i){var s=i.parentNode,n=String(s.getAttribute("data-value")),l=p.getOptionFromValue(o.autoCompleteOptions,n),c=p.getOptionFromValue(o.persistentOptions,n);l.currentStatus=t.UNCHECKED,c.currentStatus=t.UNCHECKED,o.updateListFromOptions(),o.updateChipsFromOptions(),o.updateFormFromOptions()}}})),this.reinit()}},{key:"onInputAreaFocus",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=this.$inputNewElement_.getBoundingClientRect().x-this.$elem_.getBoundingClientRect().x;t?(this.$autoCompleteList.style.left=i+"px",this.$elem_.classList.add(e+"--is-new-element-focused")):this.$elem_.classList.remove(e+"--is-new-element-focused")}},{key:"updateListFromOptions",value:function(){var e=this,s=this.$autoCompleteList.querySelector(".dzs-chip-selector--autocompletelist--items");null==s||s.childNodes.forEach((function(s){var n=String(s.getAttribute("data-value")),o=p.getOptionFromValue(e.persistentOptions,n);void 0!==o&&(o.currentStatus===t.UNCHECKED&&s.classList.remove(i),o.currentStatus===t.CHECKED&&s.classList.add(i))}))}},{key:"updateFormFromOptions",value:function(){var e=this;"form"===this.feedSource&&n(e.$form),this.$elem_.webComponent&&this.$elem_.webComponent.onUpdate&&(this.chipSelectorOptions.onUpdateFunction=this.$elem_.webComponent.onUpdate),this.chipSelectorOptions.onUpdateFunction&&this.chipSelectorOptions.onUpdateFunction(this.persistentOptions),"form"===this.feedSource&&this.persistentOptions.forEach((function(i){o(e.$form,'<label><input type="checkbox" '.concat(i.currentStatus===t.CHECKED?t.CHECKED:"",' name="subject[]" value="').concat(i.value,'">').concat(i.htmlContent,"</label>"))}))}},{key:"updateChipsFromOptions",value:function(){var e=this.$elem_.querySelector(".dzs-chip-selector--chip-list-wrapper");n(e),this.persistentOptions.forEach((function(i){i.currentStatus===t.CHECKED&&o(e,'<li data-value="'.concat(i.value,'" class="dzs-chip-selector--item">\n<div class="dzs-chip-selector--item--content">').concat(i.htmlContent,'</div>\n<button _ngcontent-mua-c151="" matchipremove="" class="dzs-chip-selector--item--remove"  type="button">\n  <figure>x</figure>\n</button>\n</li>'))}))}},{key:"createListFromOptions",value:function(){var e=this.$autoCompleteList.querySelector(".dzs-chip-selector--autocompletelist--items");n(e),this.autoCompleteOptions.forEach((function(s){o(e,'<li class="dzs-chip-selector--autocompletelist--items--item '.concat(s.currentStatus===t.CHECKED?i:"",'" data-value="').concat(s.value,'">').concat(s.htmlContent,"</li>"))}))}},{key:"getAutocompleteItemDomFromValue",value:function(t){this.$autoCompleteList.querySelectorAll("."+s).forEach((function(e){if(e.getAttribute("data-value")===t)return e}))}},{key:"autoCompleteFilterResults",value:function(t){var e=this;function i(e){e.autoCompleteOptions.forEach((function(t){}));var i=e.$autoCompleteList.querySelectorAll("."+s);t=t.toLowerCase();var n=0;i.forEach((function(i){""===e.inputForm_currentQueryString||(i.textContent||"").toLowerCase().indexOf(t)>-1?(i.classList.remove("is-hidden"),n++):i.classList.add("is-hidden")})),0===n?e.$autoCompleteList.classList.add(l):e.$autoCompleteList.classList.remove(l)}t==this.inputForm_currentQueryString&&(this.chipSelectorOptions.middlewareFilterResults?this.chipSelectorOptions.middlewareFilterResults(this,t).then((function(){i(e)})).catch((function(t){console.log("error - "),console.log(t)})):i(this))}}],m=[{key:"getOptionFromValue",value:function(t,e){return t.filter((function(t){return t.value===e}))[0]}}],d&&u(h.prototype,d),m&&u(h,m),Object.defineProperty(h,"prototype",{writable:!1}),p}();(window||globalThis).dzs_initDzsChipSelector=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};new p(t,e)}})();
//# sourceMappingURL=dzsChipSelector.js.map