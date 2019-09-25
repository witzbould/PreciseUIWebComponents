"use strict";function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toArray(e){return _arrayWithHoles(e)||_iterableToArray(e)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _decorate(e,t,r,n){var i=_getDecoratorsApi();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var l=t((function(e){i.initializeInstanceElements(e,a.elements)}),r),a=i.decorateClass(_coalesceClassElements(l.d.map(_createElementDescriptor)),e);return i.initializeClassElements(l.F,a.elements),i.runClassFinishers(l.F,a.finishers)}function _getDecoratorsApi(){_getDecoratorsApi=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!_hasDecorators(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var l=t[e.placement];l.splice(l.indexOf(e.key),1);var a=this.fromElementDescriptor(e),s=this.toElementFinisherExtras((0,i[o])(a)||a);e=s.element,this.addElementPlacement(e,t),s.finisher&&n.push(s.finisher);var d=s.extras;if(d){for(var c=0;c<d.length;c++)this.addElementPlacement(d[c],t);r.push.apply(r,d)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var l=0;l<e.length-1;l++)for(var a=l+1;a<e.length;a++)if(e[l].key===e[a].key&&e[l].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[l].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(void 0!==e)return _toArray(e).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=_toPropertyKey(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:_optionalCallableProperty(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=_optionalCallableProperty(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function _createElementDescriptor(e){var t,r=_toPropertyKey(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function _coalesceGetterSetter(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function _coalesceClassElements(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(_isDataDescriptor(o.descriptor)||_isDataDescriptor(i.descriptor)){if(_hasDecorators(o)||_hasDecorators(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(_hasDecorators(o)){if(_hasDecorators(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}_coalesceGetterSetter(o,i)}else t.push(o)}return t}function _hasDecorators(e){return e.decorators&&e.decorators.length}function _isDataDescriptor(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function _optionalCallableProperty(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}Object.defineProperty(exports,"__esModule",{value:!0});const customelementprefix="pui";function identity(e){return e}function attr2bool(e){return null!==e}function isDifferent(e,t){return!Object.is(e,t)}const debounce=(e,t,r=!1)=>{if("function"!=typeof e)throw new TypeError("Expected a function");let n;return function(...i){const o=r&&!n;clearTimeout(n),n=setTimeout(()=>{n=null,r||e.apply(this,i)},t),o&&e.apply(this,i)}},rAFthrottle=(e,t=!1)=>{if("function"!=typeof e)throw new TypeError("Expected a function");let r;return function(...n){const i=()=>{r=null,t||e.apply(this,n)},o=t&&!r;r||(r=requestAnimationFrame(i)),o&&e.apply(this,n)}},defaultPropertyDeclaration={observe:!0,reflect:!1,prop2attr:identity,attr2prop:identity,modified:isDifferent};function defineElement(e,t){return function(r){return r.finisher=function(r){customElements.define(e,r,t)},r}}function property(e){return function(t,r){if("field"===t.kind){const e=`__${t.key}`;t.extras=[{key:e,kind:t.kind,placement:t.placement,initializer:t.initializer,descriptor:{configurable:!0,enumerable:!0,writable:!0}}],t.kind="method",t.placement="prototype",delete t.initializer,t.descriptor={get(){return this[e]},set(r){const n=this[e];this[e]=r,this.requestUpdate(t.key,n,r)},configurable:!0,enumerable:!0}}return t.finisher=function(r){r.addClassProperty(t.key,e)},t}}class BaseElement extends HTMLElement{constructor(){if(super(),_defineProperty(this,"_renderRoot",void 0),_defineProperty(this,"_rAFscheduled",rAFthrottle(this.render.bind(this))),_defineProperty(this,"_template",void 0),_defineProperty(this,"_styleElement",void 0),this.attachShadow({mode:"open"}),!this.shadowRoot)throw this._renderRoot=this,new Error("No ShadowRoot");this._renderRoot=this.shadowRoot}static get observedAttributes(){const e=[];return this.classProperties.forEach((t,r)=>{t.observe&&"string"==typeof r&&e.push(r)}),e}static get classProperties(){return Object.prototype.hasOwnProperty.call(this,"_classProperties")||Object.defineProperty(this,"_classProperties",{enumerable:!0,value:new Map}),this._classProperties}static addClassProperty(e,t){this.classProperties.set(e,Object.assign({},defaultPropertyDeclaration,t))}get template(){return this._template||(this._template=document.createElement("template")),this._template}get styleElement(){return this._styleElement||(this._styleElement=document.createElement("style")),this._styleElement}updateTemplate(){throw new Error("must be implemented by subclass!")}updateStyle(){throw new Error("must be implemented by subclass!")}reflectAttributes(){this.constructor.classProperties.forEach((e,t)=>{if(!e.reflect&&"string"!=typeof t)return;const{prop2attr:r=identity}=e,n=r.call(this,this[t]);null===n?this.removeAttribute(t):this.setAttribute(t,n)})}attributeChangedCallback(e,t,r){if(t===r)return;const{attr2prop:n=identity}=this.constructor.classProperties.get(e)||defaultPropertyDeclaration;this[e]=n.call(this,r)}connectedCallback(){this.isConnected&&this.requestRender(!0,!0,!0)}requestUpdate(e,t,r){const{modified:n=isDifferent,reflect:i=!1}=this.constructor.classProperties.get(e)||defaultPropertyDeclaration;n.call(this,t,r)&&(this.styleElement.innerHTML=this.updateStyle(),this.template.innerHTML=this.updateTemplate(),this.requestRender(!0,!0,i))}requestRender(e,t,r){this.preRenderHook(),this._rAFscheduled(e,t,r)}preRenderHook(){}render(e,t,r){t&&this._renderRoot.appendChild(this.styleElement),e&&this._renderRoot.appendChild(this.template.content),r&&this.reflectAttributes(),console.log("render")}}let TextField=_decorate([defineElement("pui-textfield")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",key:"_formElement",value:void 0},{kind:"get",key:"formElement",value:function(){return this._formElement||(this._formElement=this.template.content.querySelector("#form-elem")),this._formElement}},{kind:"field",key:"_labelElem",value:void 0},{kind:"get",key:"labelElement",value:function(){return this._labelElem||(this._labelElem=this.template.content.querySelector("label")),this._labelElem}},{kind:"field",key:"_autocomplete",value:()=>!1},{kind:"get",key:"autocomplete",value:function(){return this._autocomplete}},{kind:"set",key:"autocomplete",value:function(e){this._autocomplete=e,Reflect.set(this.formElement,"autocomplete",this._autocomplete)}},{kind:"field",key:"_autofocus",value:()=>!1},{kind:"get",key:"autofocus",value:function(){return this._autofocus}},{kind:"set",key:"autofocus",value:function(e){this._autofocus=attr2bool(e),Reflect.set(this.formElement,"autofocus",this._autofocus)}},{kind:"field",key:"_disabled",value:()=>!1},{kind:"get",key:"disabled",value:function(){return this._disabled}},{kind:"set",key:"disabled",value:function(e){this._disabled=attr2bool(e),Reflect.set(this.formElement,"disabled",this._disabled)}},{kind:"field",key:"_form",value:()=>null},{kind:"field",key:"_list",value:()=>null},{kind:"field",key:"_name",value:()=>""},{kind:"get",key:"name",value:function(){return this._name}},{kind:"set",key:"name",value:function(e){this.formElement.name=this._name=e}},{kind:"field",key:"_readOnly",value:()=>!1},{kind:"get",key:"readOnly",value:function(){return this._readOnly}},{kind:"set",key:"readOnly",value:function(e){this.formElement.readOnly=this._readOnly=attr2bool(e)}},{kind:"field",key:"_required",value:()=>!1},{kind:"get",key:"required",value:function(){return this._required}},{kind:"set",key:"required",value:function(e){this.formElement.required=this._required=attr2bool(e)}},{kind:"field",key:"_type",value:()=>"text"},{kind:"get",key:"type",value:function(){return this._type}},{kind:"set",key:"type",value:function(e){this.formElement instanceof HTMLInputElement&&(this.formElement.type=this._type=e)}},{kind:"field",key:"_value",value:()=>""},{kind:"get",key:"value",value:function(){return this._value}},{kind:"set",key:"value",value:function(e){this._value=e,this.formElement.value!==this._value&&(this.formElement.value=this._value)}},{kind:"field",key:"_placeholder",value:()=>""},{kind:"get",key:"placeholder",value:function(){return this._placeholder}},{kind:"set",key:"placeholder",value:function(e){this.formElement.placeholder=this._placeholder=e}},{kind:"field",key:"_multiline",value:()=>!1},{kind:"get",key:"multiline",value:function(){return this._multiline}},{kind:"set",key:"multiline",value:function(e){this._multiline=e}},{kind:"field",key:"borderless",value:()=>!1},{kind:"field",key:"className",value:()=>""},{kind:"field",key:"clearable",value:()=>!1},{kind:"field",key:"defaultValue",value:()=>""},{kind:"field",key:"error",value:()=>""},{kind:"field",key:"icon",value:void 0},{kind:"field",key:"info",value:()=>""},{kind:"field",key:"label",value:()=>""},{kind:"field",key:"maxLength",value:()=>-1},{kind:"field",key:"minLenght",value:()=>-1},{kind:"field",key:"prefix",value:()=>""},{kind:"field",key:"resizable",value:()=>"none"},{kind:"method",key:"renderStyle",value:function(){return`\n.text-field-container {\n  position: relative;\n}\n.stack-pannel {\n  display: flex;\n  justify-content: flex-start;\n}\n#prefix,\n#suffix {\n  align-items: center;\n  background: rgb(239, 239, 239);\n  color: rgb(114, 114, 114);\n  display: flex;\n  font-size: 1rem;\n  padding: 1rem;\n}\nlabel {\n  display: flex;\n  flex-flow: column-reverse;\n  flex-grow: 1;\n  height: 100%;\n  margin: auto;\n  min-width: 0px;\n  position: relative;\n\n  align-items: center;\n  background: rgb(248, 248, 248);\n  border-bottom: 1px solid rgb(239, 239, 239);\n  box-shadow: none;\n  box-sizing: border-box;\n  cursor: auto;\n  display: flex;\n  flex: 1 1 0%;\n  margin: 0px;\n  max-height: 112px;\n  min-height: 54px;\n  overflow-y: auto;\n}\ninput {\n  -webkit-appearance: none;\n  background: none;\n  border-color: initial;\n  border-image: initial;\n  border-radius: 0px;\n  border-style: none;\n  border-width: initial;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: rgb(62, 62, 62);\n  cursor: auto;\n  font-family: inherit;\n  font-size: 1rem;\n  height: 100%;\n  margin: 0px;\n  padding: 1.5rem 1rem 0.5rem;\n  transition: all 0.2s ease 0s;\n  width: 100%;\n}\ntextarea {\n  background: rgb(248, 248, 248);\n  border-bottom: 1px solid rgb(211, 211, 211);\n  border-image: initial;\n  border-left-color: initial;\n  border-left-width: initial;\n  border-radius: 0px;\n  border-right-color: initial;\n  border-right-width: initial;\n  border-style: none none solid;\n  border-top-color: initial;\n  border-top-width: initial;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: rgb(114, 114, 114);\n  cursor: auto;\n  font-family: inherit;\n  font-size: 1rem;\n  margin: 0px;\n  padding: 1.5rem 1rem 0.5rem;\n  resize: ${this.resizable};\n  width: 100%;\n}\n#form-elem:disabled {\n  -webkit-appearance: none;\n  background: none;\n  border-color: initial;\n  border-image: initial;\n  border-radius: 0px;\n  border-style: none;\n  border-width: initial;\n  box-shadow: none;\n  box-sizing: border-box;\n  color: rgb(180, 180, 180);\n  cursor: not-allowed;\n  font-family: inherit;\n  font-size: 1rem;\n  height: 100%;\n  margin: 0px;\n  padding: 1rem;\n  transition: all 0.2s ease 0s;\n  width: 100%;\n}\n#description {\n  background: transparent;\n  box-sizing: border-box;\n  /* color: rgb(114, 114, 114); */\n  cursor: text;\n  display: block;\n  font-size: 0.75rem;\n  left: 1rem;\n  line-height: 1rem;\n  max-width: 66.66%;\n  overflow: hidden;\n  padding-top: 0.5rem;\n  position: absolute;\n  right: 0px;\n  text-overflow: ellipsis;\n  top: 0px;\n  transform-origin: left bottom;\n  /* transform: translate(0px, 0.85rem) scale(1.33); */\n  transition: all 0.2s ease 0s;\n  white-space: nowrap;\n}\n#form-elem:focus + #description {\n  color: rgb(0, 139, 208);\n  /* transform: none; */\n}`}},{kind:"field",key:"renderIcon",value(){return()=>this.icon?this.icon:"Icon/ErrorIco"}},{kind:"field",key:"attr2string",value(){return()=>this.constructor.observedAttributes.map(e=>e in this?`${e}="${this[e]}"`:"").join(" ")}},{kind:"field",key:"renderInput",value(){return()=>`<input id=form-elem ${this.attr2string()} />`}},{kind:"field",key:"renderTextarea",value(){return()=>`<textarea id=form-elem ${this.attr2string()} ${"number"==typeof this._multiline?`row=${this._multiline}`:""}></textarea>`}},{kind:"method",key:"renderTemplate",value:function(){return`\n<div class=text-field-container>\n  <div class=stack-pannel>\n    <span id=prefix><slot name=prefix>Prefix</slot></span>\n    <label>\n      ${this._multiline?this.renderTextarea():this.renderInput()}\n      <span id=description><slot>Description/Label/Error/Info</slot></span>\n      <i class=defaultIcon><slot name=icon>${this.renderIcon()}</slot></i>\n    </label>\n    <span id=suffix><slot name=suffix>Suffix</slot></span>\n  </div>\n</div>`}},{kind:"get",static:!0,key:"observedAttributes",value:function(){return["autocomplete","autofocus","disabled","form","list","multiline","name","placeholder","readOnly","required","type","value"]}},{kind:"method",key:"attributeChangedCallback",value:function(e,t,r){e in this&&(this[e]=r)}},{kind:"method",key:"forwardProperty",value:function(e,t,r){e&&t in e&&(e[t]=r)}},{kind:"method",key:"preCommitHook",value:function(){this.formElement.addEventListener("change",debounce(()=>this.value=this.formElement.value,50))}}]}}),BaseElement),Card=_decorate([defineElement("pui-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[property({reflect:!0})],key:"direction",value:()=>"column"},{kind:"field",decorators:[property({reflect:!0})],key:"layout",value:()=>""},{kind:"get",key:"layoutCSS",value:function(){return(this.layout.match(/[0-9]/gu)||[]).map((e,t)=>`.card > :nth-child(${t+1}) {flex:${e} 1 auto;}`).join("\n")}},{kind:"method",key:"updateTemplate",value:function(){return'<section class="card">\n  <div class="card-header"><slot name=header></slot></div>\n  <div class="card-media"><slot name=media></slot></div>\n  <div class="card-body"><slot name=body></slot></div>\n  <div class="card-footer"><slot name=footer></slot></div>\n</section>'}},{kind:"method",key:"updateStyle",value:function(){return`\n.card {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: ${this.direction};\n  justify-content: flex-start;\n  padding: 1rem;\n}\n${this.layoutCSS}`}}]}}),BaseElement),Container=_decorate([defineElement("pui-container")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[property({reflect:!0})],key:"align",value:()=>"center"},{kind:"field",decorators:[property({reflect:!0})],key:"maxWidth",value:()=>null},{kind:"method",key:"updateTemplate",value:function(){return"<div class=container>\n  <slot></slot>\n</div>"}},{kind:"method",key:"updateStyle",value:function(){return`.container {\n  display: flex;\n  justify-content: ${"center"===this.align?"center":`flex-${"left"===this.align?"left":"right"}`};\n  ${null===this.maxWidth?`max-width: ${this.maxWidth}`:""}\n}`}}]}}),BaseElement),ContentSwitch=_decorate([defineElement("pui-content-switch")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[property({reflect:!0,attr2prop:e=>Number(e),prop2attr:e=>String(e)})],key:"defaultIndex",value:()=>1},{kind:"field",decorators:[property({reflect:!0,attr2prop:e=>Number(e),prop2attr:e=>String(e)})],key:"selectedIndex",value:()=>1},{kind:"field",decorators:[property({reflect:!0})],key:"orientation",value:()=>"horizontal"},{kind:"method",key:"updateTemplate",value:function(){return"<div class=content-switch>\n  <slot></slot>\n</div>"}},{kind:"method",key:"updateStyle",value:function(){return""}}]}}),BaseElement);exports.Card=Card,exports.Container=Container,exports.ContentSwitch=ContentSwitch,exports.TextField=TextField;
//# sourceMappingURL=index.cjs.js.map
