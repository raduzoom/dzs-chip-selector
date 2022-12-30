(()=>{var t,e="is-selected";function i(t){for(;t.firstChild;)t.removeChild(t.firstChild);}function s(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";t.insertAdjacentHTML(i,e);}function n(t,e){for(var i=null;t&&t!==this&&t&&t.matches;){if(t.matches(e)){i=t;break}t=t.parentNode;}return i}!function(t){t.CHECKED="checked",t.UNCHECKED="unchecked";}(t||(t={}));var o="dzs-chip-selector--autocompletelist--is-placeholder-visible",r={placeholderNoItemsFound:"No items found",middlewareFilterResults:null,viewSkin:"default"};function l(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s);}}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u=function(){function u(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),c(this,"feedSource","form"),c(this,"autoCompleteOptions",[]),c(this,"persistentOptions",[]),c(this,"inputForm_currentQueryString",""),t&&(this.chipSelectorOptions=Object.assign(r,e),this.$elem_=t,t.selfInstance=this,this.placeholderNoItemsFound=this.chipSelectorOptions.placeholderNoItemsFound,t.isDzsChipsInited||this.initClass());}var a,p,h;return a=u,p=[{key:"initClass",value:function(){this.$elem_.isDzsChipsInited=!0,this.$elem_.classList.add("dzs-chip-selector--is-inited"),this.$elem_.classList.add("dzs-chip-selector"+"--skin-".concat(this.chipSelectorOptions.viewSkin)),this.initStructure(),this.initAfterStructure();}},{key:"initStructure",value:function(){this.$elem_.querySelector(".dzs-chip-selector--container")||s(this.$elem_,'<div class="dzs-chip-selector--container">\n          <div class="dzs-chip-selector--form-field">\n            <div class="dzs-chip-selector--chip-list">\n              <ul class="dzs-chip-selector--chip-list-wrapper">\n\n              </ul>\n            </div>\n            <label class="dzs-chip-selector--input-new-element--label">\n              <input placeholder="New fruit..." class="dzs-chip-selector--input-new-element"\n                     autocomplete="off"\n                     role="combobox" aria-autocomplete="list" aria-expanded="false"\n                     aria-haspopup="listbox"\n                     aria-owns="mat-autocomplete-1">\n            </label>\n          </div>\n        </div>'),this.$elem_.querySelector(".dzs-chip-selector--autocompletelist")||s(this.$elem_,'<div class="dzs-chip-selector--autocompletelist">\n          <div class="dzs-chip-selector--autocompletelist--inner">\n            <div class="dzs-chip-selector--autocompletelist--placeholder">No items found</div>\n            <ul class="dzs-chip-selector--autocompletelist--items">\n            </ul>\n          </div>\n        </div>');}},{key:"reinit",value:function(){var t=this.$elem_.querySelector(".dzs-chip-selector--form");t?(this.feedSource="form",this.chipSelectorOptions.persistentOptions=null,this.getOptionsFromForm(t)):this.$elem_.getAttribute("data-persistentOptions")&&this.readAttrForPersistentOptions(),this.chipSelectorOptions.persistentOptions&&(this.feedSource="options",this.persistentOptions=this.chipSelectorOptions.persistentOptions,this.autoCompleteOptions=this.chipSelectorOptions.persistentOptions),this.createListFromOptions(),this.updateChipsFromOptions();}},{key:"readAttrForPersistentOptions",value:function(){var t=this.$elem_.getAttribute("data-persistentOptions");this.chipSelectorOptions.persistentOptions=JSON.parse(t);}},{key:"getOptionsFromForm",value:function(e){var i=this;e.childNodes.forEach((function(e){if(e.nodeName.toLowerCase()==="LABEL".toLowerCase()){var s=e.querySelector("input"),n={htmlContent:e.innerHTML.replace(/<input.*?>/g,""),value:s.value,currentStatus:s.checked?t.CHECKED:t.UNCHECKED};i.persistentOptions.push(n),i.autoCompleteOptions.push(n);}}));}},{key:"initAfterStructure",value:function(){var i=this;function s(t){var e=i.$inputNewElement_;if("keyup"===t.type){if(i.inputForm_currentQueryString===e.value)return;i.inputForm_currentQueryString=e.value,i.autoCompleteFilterResults(i.inputForm_currentQueryString);}"focus"===t.type&&i.onInputAreaFocus(),"blur"===t.type&&i.onInputAreaFocus(!1);}i.$inputNewElement_=this.$elem_.querySelector(".dzs-chip-selector--input-new-element"),i.$autoCompleteList=this.$elem_.querySelector(".dzs-chip-selector--autocompletelist"),i.$form=this.$elem_.querySelector(".dzs-chip-selector--form"),this.$inputNewElement_.addEventListener("focus",s),this.$inputNewElement_.addEventListener("blur",s),this.$inputNewElement_.addEventListener("keyup",s),this.$autoCompleteList.addEventListener("click",(function(s){if("click"===s.type){var o=n(s.target,".dzs-chip-selector--autocompletelist--items--item"),r=null,l=o.getAttribute("data-value"),c=u.getOptionFromValue(i.autoCompleteOptions,l),a=u.getOptionFromValue(i.persistentOptions,l);void 0===a&&(a={htmlContent:o.innerHTML,value:o.getAttribute("data-value"),currentStatus:t.UNCHECKED},i.persistentOptions.push(a)),o.classList.contains(e)?(c.currentStatus=t.UNCHECKED,a.currentStatus=t.UNCHECKED):((r=i.persistentOptions.findIndex((function(t){return t.value===a.value})))<i.persistentOptions.length-1&&i.persistentOptions.push(i.persistentOptions.splice(r,1)[0]),c.currentStatus=t.CHECKED,a.currentStatus=t.CHECKED),i.updateListFromOptions(),i.updateFormFromOptions(),i.updateChipsFromOptions(),i.$inputNewElement_.value="",i.$inputNewElement_.dispatchEvent(new Event("keyup")),i.$inputNewElement_.dispatchEvent(new Event("change"));}})),this.$elem_.querySelector(".dzs-chip-selector--chip-list-wrapper").addEventListener("click",(function(e){if("click"===e.type){var s=n(e.target,".dzs-chip-selector--item--remove");if(s){var o=s.parentNode.getAttribute("data-value"),r=u.getOptionFromValue(i.autoCompleteOptions,o),l=u.getOptionFromValue(i.persistentOptions,o);r.currentStatus=t.UNCHECKED,l.currentStatus=t.UNCHECKED,i.updateListFromOptions(),i.updateChipsFromOptions(),i.updateFormFromOptions();}}})),this.reinit();}},{key:"onInputAreaFocus",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this.$inputNewElement_.getBoundingClientRect().x-this.$elem_.getBoundingClientRect().x;t?(this.$autoCompleteList.style.left=e+"px",this.$elem_.classList.add("dzs-chip-selector--is-new-element-focused")):this.$elem_.classList.remove("dzs-chip-selector--is-new-element-focused");}},{key:"updateListFromOptions",value:function(){var i=this;this.$autoCompleteList.querySelector(".dzs-chip-selector--autocompletelist--items").childNodes.forEach((function(s){var n=s.getAttribute("data-value"),o=u.getOptionFromValue(i.persistentOptions,n);void 0!==o&&(o.currentStatus===t.UNCHECKED&&s.classList.remove(e),o.currentStatus===t.CHECKED&&s.classList.add(e));}));}},{key:"updateFormFromOptions",value:function(){var e=this;"form"===this.feedSource&&i(e.$form),this.$elem_.webComponent&&this.$elem_.webComponent.onUpdate&&(this.chipSelectorOptions.onUpdateFunction=this.$elem_.webComponent.onUpdate),this.chipSelectorOptions.onUpdateFunction&&this.chipSelectorOptions.onUpdateFunction(this.persistentOptions),"form"===this.feedSource&&this.persistentOptions.forEach((function(i){s(e.$form,'<label><input type="checkbox" '.concat(i.currentStatus===t.CHECKED?t.CHECKED:"",' name="subject[]" value="').concat(i.value,'">').concat(i.htmlContent,"</label>"));}));}},{key:"updateChipsFromOptions",value:function(){var e=this.$elem_.querySelector(".dzs-chip-selector--chip-list-wrapper");i(e),this.persistentOptions.forEach((function(i){i.currentStatus===t.CHECKED&&s(e,'<li data-value="'.concat(i.value,'" class="dzs-chip-selector--item">\n<div class="dzs-chip-selector--item--content">').concat(i.htmlContent,'</div>\n<button _ngcontent-mua-c151="" matchipremove="" class="dzs-chip-selector--item--remove"  type="button">\n  <figure>x</figure>\n</button>\n</li>'));}));}},{key:"createListFromOptions",value:function(){var n=this.$autoCompleteList.querySelector(".dzs-chip-selector--autocompletelist--items");i(n),this.autoCompleteOptions.forEach((function(i){s(n,'<li class="dzs-chip-selector--autocompletelist--items--item '.concat(i.currentStatus===t.CHECKED?e:"",'" data-value="').concat(i.value,'">').concat(i.htmlContent,"</li>"));}));}},{key:"getAutocompleteItemDomFromValue",value:function(t){this.$autoCompleteList.querySelectorAll(".dzs-chip-selector--autocompletelist--items--item").forEach((function(e){if(e.getAttribute("data-value")===t)return e}));}},{key:"autoCompleteFilterResults",value:function(t){var e=this;function i(e){e.autoCompleteOptions.forEach((function(t){}));var i=e.$autoCompleteList.querySelectorAll(".dzs-chip-selector--autocompletelist--items--item");t=t.toLowerCase();var s=0;i.forEach((function(i){""===e.inputForm_currentQueryString||i.textContent.toLowerCase().indexOf(t)>-1?(i.classList.remove("is-hidden"),s++):i.classList.add("is-hidden");})),0===s?e.$autoCompleteList.classList.add(o):e.$autoCompleteList.classList.remove(o);}t==this.inputForm_currentQueryString&&(this.chipSelectorOptions.middlewareFilterResults?this.chipSelectorOptions.middlewareFilterResults(this,t).then((function(){i(e);})).catch((function(t){console.log("error - "),console.log(t);})):i(this));}}],h=[{key:"getOptionFromValue",value:function(t,e){return t.filter((function(t){return t.value===e}))[0]}}],p&&l(a.prototype,p),h&&l(a,h),Object.defineProperty(a,"prototype",{writable:!1}),u}();(window||globalThis).dzs_initDzsChipSelector=function(t,e){new u(t,e);};})();
