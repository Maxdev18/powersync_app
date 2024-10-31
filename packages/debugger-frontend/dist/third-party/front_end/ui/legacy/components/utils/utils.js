import*as e from"../../../../core/common/common.js";import*as t from"../../../../core/host/host.js";import*as n from"../../../../core/i18n/i18n.js";import*as i from"../../../../core/platform/platform.js";import*as o from"../../../../core/sdk/sdk.js";import*as r from"../../../../models/bindings/bindings.js";import*as a from"../../../visual_logging/visual_logging.js";import*as s from"../../legacy.js";import*as c from"../../../../models/breakpoints/breakpoints.js";import*as l from"../../../../models/text_utils/text_utils.js";import*as d from"../../../../models/workspace/workspace.js";const u=new CSSStyleSheet;u.replaceSync(".image-preview-container{background:transparent;text-align:center;border-spacing:0}.image-preview-container img{margin:6px 0;max-width:100px;max-height:100px;background-image:var(--image-file-checker);user-select:text;vertical-align:top;-webkit-user-drag:auto}.image-container{padding:0}.image-container > div{min-height:50px;display:flex;align-items:center;justify-content:center;cursor:pointer}.image-preview-container .row{line-height:1.2;vertical-align:baseline}.image-preview-container .title{padding-right:0.5em;text-align:right;color:var(--sys-color-token-subtle);white-space:nowrap}.image-preview-container .description{white-space:nowrap;text-align:left;color:var(--sys-color-on-surface)}.image-preview-container .description-link{max-width:20em}.image-preview-container .source-link{white-space:normal;word-break:break-all;color:var(--sys-color-primary);cursor:pointer}\n/*# sourceURL=imagePreview.css */\n");const p={unknownSource:"unknown source",imageFromS:"Image from {PH1}",fileSize:"File size:",intrinsicSize:"Intrinsic size:",renderedSize:"Rendered size:",currentSource:"Current source:",renderedAspectRatio:"Rendered aspect ratio:",intrinsicAspectRatio:"Intrinsic aspect ratio:"},g=n.i18n.registerUIStrings("ui/legacy/components/utils/ImagePreview.ts",p),m=n.i18n.getLocalizedString.bind(void 0,g);function h(t){return null!==t&&t.resourceType()===e.ResourceType.resourceTypes.Image}var k=Object.freeze({__proto__:null,ImagePreview:class{static async build(e,n,r,a={precomputedFeatures:void 0,imageAltText:void 0}){const{precomputedFeatures:s,imageAltText:c}=a,l=e.model(o.ResourceTreeModel.ResourceTreeModel);if(!l)return null;let d=l.resourceForURL(n),g=n;if(!h(d)&&s&&s.currentSrc&&(g=s.currentSrc,d=l.resourceForURL(g)),!d||!h(d))return null;const k=d,L=d.displayName,b=d.content?d.content:d.url.split("base64,")[1],f=d.contentSize(),C=f||i.StringUtilities.base64ToSize(b),v=C>0?i.NumberUtilities.bytesToString(C):"";return new Promise((e=>{const n=document.createElement("img");n.addEventListener("load",(function(){const o=document.createElement("div"),a=o.attachShadow({mode:"open"});a.adoptedStyleSheets=[u];const c=a.createChild("table");c.className="image-preview-container";const l=c.createChild("tr").createChild("td","image-container");l.colSpan=2;const d=l.createChild("div");d.title=L,d.appendChild(n),d.addEventListener("click",(()=>{t.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(g)}));const h=n.naturalWidth,k=n.naturalHeight,b=s?s.renderedWidth:h,f=s?s.renderedHeight:k;if(r){const e=c.createChild("tr","row");e.createChild("td","title").textContent=m(p.renderedSize),e.createChild("td","description").textContent=`${b} × ${f} px`;const t=c.createChild("tr","row");if(t.createChild("td","title").textContent=m(p.renderedAspectRatio),t.createChild("td","description").textContent=i.NumberUtilities.aspectRatio(b,f),f!==k||b!==h){const e=c.createChild("tr","row");e.createChild("td","title").textContent=m(p.intrinsicSize),e.createChild("td","description").textContent=`${h} × ${k} px`;const t=c.createChild("tr","row");t.createChild("td","title").textContent=m(p.intrinsicAspectRatio),t.createChild("td","description").textContent=i.NumberUtilities.aspectRatio(h,k)}}const C=c.createChild("tr","row");C.createChild("td","title").textContent=m(p.fileSize),C.createChild("td","description").textContent=v;const w=c.createChild("tr","row");w.createChild("td","title").textContent=m(p.currentSource);const I=i.StringUtilities.trimMiddle(g,100),S=w.createChild("td","description description-link").createChild("span","source-link");S.textContent=I,S.addEventListener("click",(()=>{t.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(g)})),e(o)}),!1),n.addEventListener("error",(()=>e(null)),!1),c&&(n.alt=c),k.populateImageSource(n)}))}static async loadDimensionsForNode(e){if(!e.nodeName()||"img"!==e.nodeName().toLowerCase())return;const t=await e.resolveToObject("");if(!t)return;const n=await t.callFunctionJSON((function(){return{renderedWidth:this.width,renderedHeight:this.height,currentSrc:this.currentSrc}}),void 0);return t.release(),n}static defaultAltTextForImageURL(t){const n=new e.ParsedURL.ParsedURL(t),i=n.isValid?n.displayName:m(p.unknownSource);return m(p.imageFromS,{PH1:i})}}});const L=new CSSStyleSheet;L.replaceSync(":host{display:inline-block;width:100%}.stack-preview-async-description{padding:3px 0 1px;font-style:italic}.stack-preview-container{display:block;width:100%}.stack-preview-container .ignore-list-link{opacity:60%}.stack-preview-container > tr{height:16px;line-height:16px}.stack-preview-container td{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-inline:2px}.stack-preview-container td.link{width:100%;max-width:0}.stack-preview-container .function-name{max-width:80em}.stack-preview-container:not(.show-hidden-rows) > tr.hidden-row{display:none}.stack-preview-container > tr.show-all-link,\n.stack-preview-container > tr.show-less-link{font-style:italic}.stack-preview-container.show-hidden-rows > tr.show-all-link{display:none}.stack-preview-container:not(.show-hidden-rows) > tr.show-less-link{display:none}\n/*# sourceURL=jsUtils.css */\n");const b={unknown:"(unknown)",auto:"auto",revealInS:"Reveal in {PH1}",reveal:"Reveal",openUsingS:"Open using {PH1}",linkHandling:"Link handling:"},f=n.i18n.registerUIStrings("ui/legacy/components/utils/Linkifier.ts",b),C=n.i18n.getLocalizedString.bind(void 0,f),v=new Set;let w=null;const I=new WeakMap,S=new WeakMap,x=new WeakMap,y=new Map;let T,U;class N extends e.ObjectWrapper.ObjectWrapper{maxLength;anchorsByTarget;locationPoolByTarget;useLinkDecorator;constructor(e,t){super(),this.maxLength=e||s.UIUtils.MaxLengthForDisplayedURLs,this.anchorsByTarget=new Map,this.locationPoolByTarget=new Map,this.useLinkDecorator=Boolean(t),v.add(this),o.TargetManager.TargetManager.instance().observeTargets(this)}static setLinkDecorator(e){console.assert(!w,"Cannot re-register link decorator."),w=e,e.addEventListener("LinkIconChanged",(function(e){const t=e.data,n=I.get(t)||[];for(const e of n)N.updateLinkDecorations(e)}));for(const e of v)e.updateAllAnchorDecorations()}updateAllAnchorDecorations(){for(const e of this.anchorsByTarget.values())for(const t of e)N.updateLinkDecorations(t)}static bindUILocation(e,t){const n=N.linkInfo(e);if(!n)return;if(n.uiLocation=t,!t)return;const i=t.uiSourceCode;let o=I.get(i);o||(o=new Set,I.set(i,o)),o.add(e)}static unbindUILocation(e){const t=N.linkInfo(e);if(!t||!t.uiLocation)return;const n=t.uiLocation.uiSourceCode;t.uiLocation=null;const i=I.get(n);i&&i.delete(e)}static bindBreakpoint(e,t){const n=N.linkInfo(e);if(!n)return;const i=c.BreakpointManager.BreakpointManager.instance().findBreakpoint(t);i&&(n.revealable=i)}static unbindBreakpoint(e){const t=N.linkInfo(e);t&&t.revealable&&(t.revealable=null)}targetAdded(e){this.anchorsByTarget.set(e,[]),this.locationPoolByTarget.set(e,new r.LiveLocation.LiveLocationPool)}targetRemoved(e){const t=this.locationPoolByTarget.get(e);if(this.locationPoolByTarget.delete(e),!t)return;t.disposeAll();const n=this.anchorsByTarget.get(e);if(n){this.anchorsByTarget.delete(e);for(const e of n){const t=N.linkInfo(e);if(!t)continue;t.liveLocation=null,N.unbindUILocation(e);const n=t.fallback;n&&e.replaceWith(n)}}}maybeLinkifyScriptLocation(e,t,n,i,a){let s=null;const c={lineNumber:i,maxLength:this.maxLength,columnNumber:a?.columnNumber,showColumnNumber:Boolean(a?.showColumnNumber),className:a?.className,tabStop:a?.tabStop,inlineFrameIndex:a?.inlineFrameIndex??0,userMetric:a?.userMetric},{columnNumber:l,className:d=""}=c;if(n&&(s=N.linkifyURL(n,c)),!e||e.isDisposed())return s;const u=e.model(o.DebuggerModel.DebuggerModel);if(!u)return s;const p=t?u.createRawLocationByScriptId(t,i||0,l,c.inlineFrameIndex):u.createRawLocationByURL(n,i||0,l,c.inlineFrameIndex,!0);if(!p)return s;const g={tabStop:a?.tabStop},{link:m,linkInfo:h}=N.createLink(s&&s.textContent?s.textContent:"",d,g);h.enableDecorator=this.useLinkDecorator,h.fallback=s,h.userMetric=a?.userMetric;const k=this.locationPoolByTarget.get(p.debuggerModel.target());if(!k)return s;const L={showColumnNumber:c.showColumnNumber??!1,revealBreakpoint:a?.revealBreakpoint};r.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createLiveLocation(p,(async e=>{await this.updateAnchor(m,L,e),this.dispatchEventToListeners("liveLocationUpdated",e)}).bind(this),k).then((e=>{e&&(h.liveLocation=e)}));return this.anchorsByTarget.get(p.debuggerModel.target()).push(m),m}linkifyScriptLocation(e,t,n,i,o){const r=this.maybeLinkifyScriptLocation(e,t,n,i,o),a={lineNumber:i,maxLength:this.maxLength,className:o?.className,columnNumber:o?.columnNumber,showColumnNumber:Boolean(o?.showColumnNumber),inlineFrameIndex:o?.inlineFrameIndex??0,tabStop:o?.tabStop,userMetric:o?.userMetric};return r||N.linkifyURL(n,a)}linkifyRawLocation(e,t,n){return this.linkifyScriptLocation(e.debuggerModel.target(),e.scriptId,t,e.lineNumber,{columnNumber:e.columnNumber,className:n,inlineFrameIndex:e.inlineFrameIndex})}maybeLinkifyConsoleCallFrame(e,t,n){const i={...n,columnNumber:t.columnNumber,inlineFrameIndex:n?.inlineFrameIndex??0};return this.maybeLinkifyScriptLocation(e,t.scriptId,t.url,t.lineNumber,i)}linkifyStackTraceTopFrame(e,t){console.assert(t.callFrames.length>0);const{url:n,lineNumber:i,columnNumber:a}=t.callFrames[0],s=N.linkifyURL(n,{lineNumber:i,columnNumber:a,showColumnNumber:!1,inlineFrameIndex:0,maxLength:this.maxLength,preventClick:!0});if(!e)return s;const c=this.locationPoolByTarget.get(e);if(!c)return console.assert(e.isDisposed()),s;console.assert(!e.isDisposed());const l=e.model(o.DebuggerModel.DebuggerModel),{link:d,linkInfo:u}=N.createLink("","");u.enableDecorator=this.useLinkDecorator,u.fallback=s;const p={showColumnNumber:!1};r.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createStackTraceTopFrameLiveLocation(l.createRawLocationsByStackTrace(t),(async e=>{await this.updateAnchor(d,p,e),this.dispatchEventToListeners("liveLocationUpdated",e)}).bind(this),c).then((e=>{u.liveLocation=e}));return this.anchorsByTarget.get(e).push(d),d}linkifyCSSLocation(e,t){const{link:n,linkInfo:i}=N.createLink("",t||"",{tabStop:!0});i.enableDecorator=this.useLinkDecorator;const o=this.locationPoolByTarget.get(e.cssModel().target());if(!o)return n;const a={showColumnNumber:!1};r.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().createLiveLocation(e,(async e=>{await this.updateAnchor(n,a,e),this.dispatchEventToListeners("liveLocationUpdated",e)}).bind(this),o).then((e=>{i.liveLocation=e}));return this.anchorsByTarget.get(e.cssModel().target()).push(n),n}reset(){for(const e of[...this.anchorsByTarget.keys()])this.targetRemoved(e),this.targetAdded(e)}dispose(){for(const e of[...this.anchorsByTarget.keys()])this.targetRemoved(e);o.TargetManager.TargetManager.instance().unobserveTargets(this),v.delete(this)}async updateAnchor(t,n,i){N.unbindUILocation(t),n.revealBreakpoint&&N.unbindBreakpoint(t);const o=await i.uiLocation();if(!o){if(i instanceof r.CSSWorkspaceBinding.LiveLocation){const n=i.header();n&&n.ownerNode&&(t.addEventListener("click",(t=>{t.consume(!0),e.Revealer.reveal(n.ownerNode||null)}),!1),N.setTrimmedText(t,"<style>"))}return t.classList.add("invalid-link"),void t.removeAttribute("role")}N.bindUILocation(t,o),n.revealBreakpoint&&N.bindBreakpoint(t,o);const a=o.linkText(!0,n.showColumnNumber);N.setTrimmedText(t,a,this.maxLength);let c=o.uiSourceCode.url();"application/wasm"===o.uiSourceCode.mimeType()?"number"==typeof o.columnNumber&&(c+=`:0x${o.columnNumber.toString(16)}`):(c+=":"+(o.lineNumber+1),n.showColumnNumber&&"number"==typeof o.columnNumber&&(c+=":"+(o.columnNumber+1))),s.Tooltip.Tooltip.install(t,c),t.classList.toggle("ignore-list-link",await i.isIgnoreListed()),N.updateLinkDecorations(t)}static updateLinkDecorations(e){const t=N.linkInfo(e);if(!t||!t.enableDecorator)return;if(!w||!t.uiLocation)return;t.icon&&t.icon.parentElement&&e.removeChild(t.icon);const n=w.linkIcon(t.uiLocation.uiSourceCode);n&&(n.style.setProperty("margin-right","2px"),e.insertBefore(n,e.firstChild)),t.icon=n}static linkifyURL(t,n){const i=(n=n||{showColumnNumber:!1,inlineFrameIndex:0}).text,o=n.className||"",a=n.lineNumber,c=n.columnNumber,l=n.showColumnNumber,d=n.preventClick,u=n.maxLength||s.UIUtils.MaxLengthForDisplayedURLs,p=n.bypassURLTrimming;if(!t||e.ParsedURL.schemeIs(t,"javascript:")){const e=document.createElement("span");return o&&(e.className=o),e.textContent=i||t||C(b.unknown),e}let g=i||r.ResourceUtils.displayNameForURL(t);"number"!=typeof a||i||(g+=":"+(a+1),l&&"number"==typeof c&&(g+=":"+(c+1)));const m={maxLength:u,title:g!==t?t:"",href:t,preventClick:d,tabStop:n.tabStop,bypassURLTrimming:p},{link:h,linkInfo:k}=N.createLink(g,o,m);return a&&(k.lineNumber=a),c&&(k.columnNumber=c),k.userMetric=n?.userMetric,h}static linkifyRevealable(e,t,n,i,o){const r={maxLength:s.UIUtils.MaxLengthForDisplayedURLs,href:n,title:i},{link:a,linkInfo:c}=N.createLink(t,o||"",r);return c.revealable=e,a}static createLink(e,t,n={}){const{maxLength:i,title:o,href:r,preventClick:a,tabStop:c,bypassURLTrimming:l}=n,d=document.createElement("button");t&&(d.className=t),d.classList.add("devtools-link","text-button","link-style"),o&&s.Tooltip.Tooltip.install(d,o),r&&(d.href=r),e instanceof HTMLElement?d.appendChild(e):l?(d.classList.add("devtools-link-styled-trim"),N.appendTextWithoutHashes(d,e)):N.setTrimmedText(d,e,i);const u={icon:null,enableDecorator:!1,uiLocation:null,liveLocation:null,url:r||null,lineNumber:null,columnNumber:null,inlineFrameIndex:0,revealable:null,fallback:null};return S.set(d,u),a?d.classList.add("devtools-link-prevent-click"):d.addEventListener("click",(e=>{N.handleClick(e)&&e.consume(!0)}),!1),s.ARIAUtils.markAsLink(d),d.tabIndex=c?0:-1,{link:d,linkInfo:u}}static setTrimmedText(e,t,n){if(e.removeChildren(),n&&t.length>n){const i=function(e,t){let n=Math.floor(t/2),i=e.length-Math.ceil(t/2)+1;const o=e.codePointAt(i-1);void 0!==o&&o>=65536&&(i++,n++);const r=e.codePointAt(n-1);void 0!==r&&n>0&&r>=65536&&n--;return[e.substring(0,n),e.substring(n,i),e.substring(i)]}(t,n);N.appendTextWithoutHashes(e,i[0]),N.appendHiddenText(e,i[1]),N.appendTextWithoutHashes(e,i[2])}else N.appendTextWithoutHashes(e,t)}static appendTextWithoutHashes(e,t){const n=l.TextUtils.Utils.splitStringByRegexes(t,[/[a-f0-9]{20,}/g]);for(const t of n)-1===t.regexIndex?s.UIUtils.createTextChild(e,t.value):(s.UIUtils.createTextChild(e,t.value.substring(0,7)),N.appendHiddenText(e,t.value.substring(7)))}static appendHiddenText(e,t){const n=s.UIUtils.createTextChild(e.createChild("span","devtools-link-ellipsis"),"…");x.set(n,t)}static untruncatedNodeText(e){return x.get(e)||e.textContent||""}static linkInfo(e){return e&&S.get(e)||null}static handleClick(e){const t=e.currentTarget;if(s.UIUtils.isBeingEdited(e.target)||t.hasSelection())return!1;const n=N.linkInfo(t);return!!n&&N.invokeFirstAction(n)}static handleClickFromNewComponentLand(e){N.invokeFirstAction(e)}static invokeFirstAction(e){const n=N.linkActions(e);return!!n.length&&(n[0].handler.call(null),e.userMetric&&t.userMetrics.actionTaken(e.userMetric),!0)}static linkHandlerSetting(){return T||(T=e.Settings.Settings.instance().createSetting("open-link-handler",C(b.auto))),T}static registerLinkHandler(e,t){y.set(e,t),F.instance().update()}static unregisterLinkHandler(e){y.delete(e),F.instance().update()}static uiLocation(e){const t=N.linkInfo(e);return t?t.uiLocation:null}static linkActions(n){const o=[];if(!n)return o;let a=i.DevToolsPath.EmptyUrlString,l=null;if(n.uiLocation)l=n.uiLocation,a=l.uiSourceCode.contentURL();else if(n.url){a=n.url;const t=d.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(a)||d.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(e.ParsedURL.ParsedURL.urlWithoutHash(a));l=t?t.uiLocation(n.lineNumber||0,n.columnNumber||0):null}const u=a?r.ResourceUtils.resourceForURL(a):null,p=l?l.uiSourceCode:u,g=n.revealable||l||u;if(g){const n=e.Revealer.revealDestination(g);o.push({section:"reveal",title:n?C(b.revealInS,{PH1:n}):C(b.reveal),jslogContext:"reveal",handler:()=>(g instanceof c.BreakpointManager.BreakpointLocation&&t.userMetrics.breakpointEditDialogRevealedFrom(5),e.Revealer.reveal(g))})}if(p){const e=l?l.lineNumber:n.lineNumber||0;for(const t of y.keys()){const n=y.get(t);if(!n)continue;const i={section:"reveal",title:C(b.openUsingS,{PH1:t}),jslogContext:"open-using",handler:n.bind(null,p,e)};t===N.linkHandlerSetting().get()?o.unshift(i):o.push(i)}}if((u||n.url)&&(o.push({section:"reveal",title:s.UIUtils.openLinkExternallyLabel(),jslogContext:"open-in-new-tab",handler:()=>t.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(a)}),o.push({section:"clipboard",title:s.UIUtils.copyLinkAddressLabel(),jslogContext:"copy-link-address",handler:()=>t.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(a)})),l&&l.uiSourceCode){const e=l.uiSourceCode;o.push({section:"clipboard",title:s.UIUtils.copyFileNameLabel(),jslogContext:"copy-file-name",handler:()=>t.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(e.displayName())})}return o}}class F{element;constructor(){this.element=document.createElement("select"),this.element.classList.add("chrome-select"),this.element.addEventListener("change",this.onChange.bind(this),!1),this.update()}static instance(e={forceNew:null}){const{forceNew:t}=e;return U&&!t||(U=new F),U}update(){this.element.removeChildren();const e=[...y.keys()];e.unshift(C(b.auto));for(const t of e){const e=document.createElement("option");e.textContent=t,e.selected=t===N.linkHandlerSetting().get(),this.element.appendChild(e)}this.element.disabled=e.length<=1}onChange(e){if(!e.target)return;const t=e.target.value;N.linkHandlerSetting().set(t)}settingElement(){return s.SettingsUI.createCustomSetting(C(b.linkHandling),this.element)}}let D=!1;D||(D=!0,window.addEventListener("linkifieractivated",(function(e){const t=e;N.handleClickFromNewComponentLand(t.data)})));var R=Object.freeze({__proto__:null,Linkifier:N,LinkContextMenuProvider:class{appendApplicableItems(e,t,n){let i=n;for(;i&&!S.get(i);)i=i.parentNodeOrShadowHost();const o=i,r=N.linkInfo(o);if(!r)return;const a=N.linkActions(r);for(const e of a)t.section(e.section).appendItem(e.title,e.handler,{jslogContext:e.jslogContext})}},LinkHandlerSettingUI:F,ContentProviderContextMenuProvider:class{appendApplicableItems(n,i,r){const a=r.contentURL();if(a){e.ParsedURL.schemeIs(a,"file:")||i.revealSection().appendItem(s.UIUtils.openLinkExternallyLabel(),(()=>t.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(a.endsWith(":formatted")?e.ParsedURL.ParsedURL.slice(a,0,a.lastIndexOf(":")):a)),{jslogContext:"open-in-new-tab"});for(const e of y.keys()){const t=y.get(e);t&&i.revealSection().appendItem(C(b.openUsingS,{PH1:e}),t.bind(null,r,0),{jslogContext:"open-using"})}r instanceof o.NetworkRequest.NetworkRequest||(i.clipboardSection().appendItem(s.UIUtils.copyLinkAddressLabel(),(()=>t.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(a)),{jslogContext:"copy-link-address"}),r instanceof d.UISourceCode.UISourceCode?i.clipboardSection().appendItem(s.UIUtils.copyFileNameLabel(),(()=>t.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(r.displayName())),{jslogContext:"copy-file-name"}):i.clipboardSection().appendItem(s.UIUtils.copyFileNameLabel(),(()=>t.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(r.displayName)),{jslogContext:"copy-file-name"}))}}}});const M={removeFromIgnore:"Remove from ignore list",addToIgnore:"Add script to ignore list",showSMoreFrames:"{n, plural, =1 {Show # more frame} other {Show # more frames}}",showLess:"Show less",unknownSource:"unknown"},H=n.i18n.registerUIStrings("ui/legacy/components/utils/JSPresentationUtils.ts",M),B=n.i18n.getLocalizedString.bind(void 0,H);function P(e,t){const n=new s.ContextMenu.ContextMenu(t);t.consume(!0);const i=N.uiLocation(e);i&&r.IgnoreListManager.IgnoreListManager.instance().canIgnoreListUISourceCode(i.uiSourceCode)&&(r.IgnoreListManager.IgnoreListManager.instance().isUserIgnoreListedURL(i.uiSourceCode.url())?n.debugSection().appendItem(B(M.removeFromIgnore),(()=>r.IgnoreListManager.IgnoreListManager.instance().unIgnoreListUISourceCode(i.uiSourceCode)),{jslogContext:"remove-from-ignore-list"}):n.debugSection().appendItem(B(M.addToIgnore),(()=>r.IgnoreListManager.IgnoreListManager.instance().ignoreListUISourceCode(i.uiSourceCode)),{jslogContext:"add-to-ignore-list"})),n.appendApplicableItems(t),n.show()}function A(t,n,i,c,l){const d=[];if(l){const t=new e.Throttler.Throttler(100);i.addEventListener("liveLocationUpdated",(()=>{t.schedule((async()=>function(e,t){let n=0,i=t.length;for(let e=t.length-1;e>=0;e--){const o=t[e];if("link"in o&&o.link){const e=N.uiLocation(o.link);e&&r.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(e.uiSourceCode)&&(o.ignoreListHide=!0),o.ignoreListHide&&n++}"asyncDescription"in o&&(n>0&&n===i-e-1&&(o.ignoreListHide=!0),i=e,n=0)}e(t)}(l,d)))}))}function u(e,t=void 0){let l=null;t&&(l={asyncDescription:s.UIUtils.asyncStackTraceLabel(e.description,t),ignoreListHide:!1},d.push(l));let u=0,p=!1;for(const t of e.callFrames){let e=!1;const l=s.UIUtils.beautifyFunctionName(t.functionName),g=i.maybeLinkifyConsoleCallFrame(n,t,{tabStop:Boolean(c),inlineFrameIndex:0,revealBreakpoint:p});if(g){g.setAttribute("jslog",`${a.link("stack-trace").track({click:!0})}`),g.addEventListener("contextmenu",P.bind(null,g));const t=N.uiLocation(g);t&&r.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(t.uiSourceCode)&&(e=!0),g.textContent||(g.textContent=B(M.unknownSource))}e&&++u,d.push({functionName:l,link:g,ignoreListHide:e}),p=[o.DebuggerModel.COND_BREAKPOINT_SOURCE_URL,o.DebuggerModel.LOGPOINT_SOURCE_URL].includes(t.url)}l&&u>0&&u===e.callFrames.length&&(l.ignoreListHide=!0)}u(t);let p=t.callFrames;for(let e=t.parent;e;e=e.parent)e.callFrames.length&&u(e,p),p=e.callFrames;return d}function j(e,t){e.removeChildren();let n=0;const i=[];for(const o of t){const t=e.createChild("tr");"asyncDescription"in o?(t.createChild("td").textContent="\n",t.createChild("td","stack-preview-async-description").textContent=o.asyncDescription,t.createChild("td"),t.createChild("td")):(t.createChild("td").textContent="\n",t.createChild("td","function-name").textContent=o.functionName,t.createChild("td").textContent=" @ ",o.link&&(t.createChild("td","link").appendChild(o.link),i.push(o.link)),o.ignoreListHide&&++n),o.ignoreListHide&&t.classList.add("hidden-row"),e.appendChild(t)}if(n){const t=e.createChild("tr","show-all-link");t.createChild("td").textContent="\n";const i=t.createChild("td");i.colSpan=4;const o=i.createChild("span","link");o.textContent=B(M.showSMoreFrames,{n:n}),o.addEventListener("click",(()=>{e.classList.add("show-hidden-rows"),s.GlassPane.GlassPane.containerMoved(e)}),!1);const r=e.createChild("tr","show-less-link");r.createChild("td").textContent="\n";const a=r.createChild("td");a.colSpan=4;const c=a.createChild("span","link");c.textContent=B(M.showLess),c.addEventListener("click",(()=>{e.classList.remove("show-hidden-rows"),s.GlassPane.GlassPane.containerMoved(e)}),!1)}return i}var E=Object.freeze({__proto__:null,buildStackTraceRows:A,buildStackTracePreviewContents:function(e,t,n={stackTrace:void 0,tabStops:void 0}){const{stackTrace:i,tabStops:o}=n,r=document.createElement("span");r.classList.add("monospace"),r.classList.add("stack-preview-container"),r.style.display="inline-block";const a=s.Utils.createShadowRootWithCoreStyles(r,{cssFile:[L],delegatesFocus:void 0}).createChild("table","stack-preview-container");if(!i)return{element:r,links:[]};const c=j.bind(null,a);return{element:r,links:j(a,A(i,e,t,o,c))}}});var _=Object.freeze({__proto__:null,reload:function(){s.DockController.DockController.instance().canDock()&&"undocked"===s.DockController.DockController.instance().dockSide()&&t.InspectorFrontendHost.InspectorFrontendHostInstance.setIsDocked(!0,(function(){})),t.InspectorFrontendHost.InspectorFrontendHostInstance.reattach((()=>window.location.reload()))}});const W={websocketDisconnected:"WebSocket disconnected"},z=n.i18n.registerUIStrings("ui/legacy/components/utils/TargetDetachedDialog.ts",W),O=n.i18n.getLocalizedString.bind(void 0,z);class $ extends o.SDKModel.SDKModel{static hideCrashedDialog;constructor(e){super(e),e.registerInspectorDispatcher(this),e.inspectorAgent().invoke_enable(),e.parentTarget()?.type()===o.Target.Type.Browser&&$.hideCrashedDialog&&($.hideCrashedDialog.call(null),$.hideCrashedDialog=null)}detached({reason:e}){s.RemoteDebuggingTerminatedScreen.RemoteDebuggingTerminatedScreen.show(e)}static webSocketConnectionLost(){s.RemoteDebuggingTerminatedScreen.RemoteDebuggingTerminatedScreen.show(O(W.websocketDisconnected))}targetCrashed(){if($.hideCrashedDialog)return;const e=this.target().parentTarget();if(e&&e.type()!==o.Target.Type.Browser)return;const t=new s.Dialog.Dialog("target-crashed");t.setSizeBehavior("MeasureContent"),t.addCloseButton(),t.setDimmed(!0),$.hideCrashedDialog=t.hide.bind(t),new s.TargetCrashedScreen.TargetCrashedScreen((()=>{$.hideCrashedDialog=null})).show(t.contentElement),t.show()}targetReloadedAfterCrash(){this.target().runtimeAgent().invoke_runIfWaitingForDebugger(),$.hideCrashedDialog&&($.hideCrashedDialog.call(null),$.hideCrashedDialog=null)}}o.SDKModel.SDKModel.register($,{capabilities:2048,autostart:!0});var G=Object.freeze({__proto__:null,TargetDetachedDialog:$});export{k as ImagePreview,E as JSPresentationUtils,R as Linkifier,_ as Reload,G as TargetDetachedDialog};