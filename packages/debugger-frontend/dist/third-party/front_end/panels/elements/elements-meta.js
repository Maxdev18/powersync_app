import*as e from"../../core/common/common.js";import*as t from"../../core/i18n/i18n.js";import*as n from"../../core/root/root.js";import*as o from"../../core/sdk/sdk.js";import*as a from"../../ui/legacy/legacy.js";const i={showElements:"Show Elements",elements:"Elements",showEventListeners:"Show Event Listeners",eventListeners:"Event Listeners",showProperties:"Show Properties",properties:"Properties",showStackTrace:"Show Stack Trace",stackTrace:"Stack Trace",showLayout:"Show Layout",layout:"Layout",hideElement:"Hide element",editAsHtml:"Edit as HTML",duplicateElement:"Duplicate element",undo:"Undo",redo:"Redo",captureAreaScreenshot:"Capture area screenshot",selectAnElementInThePageTo:"Select an element in the page to inspect it",newStyleRule:"New Style Rule",refreshEventListeners:"Refresh event listeners",wordWrap:"Word wrap",enableDomWordWrap:"Enable `DOM` word wrap",disableDomWordWrap:"Disable `DOM` word wrap",showHtmlComments:"Show `HTML` comments",hideHtmlComments:"Hide `HTML` comments",revealDomNodeOnHover:"Reveal `DOM` node on hover",showDetailedInspectTooltip:"Show detailed inspect tooltip",showCSSDocumentationTooltip:"Show CSS documentation tooltip",copyStyles:"Copy styles",showUserAgentShadowDOM:"Show user agent shadow `DOM`",showComputedStyles:"Show Computed Styles",showStyles:"Show Styles",toggleEyeDropper:"Toggle eye dropper"},s=t.i18n.registerUIStrings("panels/elements/elements-meta.ts",i),r=t.i18n.getLazilyComputedLocalizedString.bind(void 0,s);let l,c;async function d(){return l||(l=await import("./elements.js")),l}function m(e){return void 0===l?[]:e(l)}a.ViewManager.registerViewExtension({location:"panel",id:"elements",commandPrompt:r(i.showElements),title:r(i.elements),order:10,persistence:"permanent",hasToolbar:!1,loadView:async()=>(await d()).ElementsPanel.ElementsPanel.instance()}),a.ActionRegistration.registerActionExtension({actionId:"elements.show-styles",category:"ELEMENTS",title:r(i.showStyles),loadActionDelegate:async()=>new((await d()).ElementsPanel.ElementsActionDelegate)}),a.ActionRegistration.registerActionExtension({actionId:"elements.show-computed",category:"ELEMENTS",title:r(i.showComputedStyles),loadActionDelegate:async()=>new((await d()).ElementsPanel.ElementsActionDelegate)}),a.ViewManager.registerViewExtension({location:"elements-sidebar",id:"elements.event-listeners",commandPrompt:r(i.showEventListeners),title:r(i.eventListeners),order:5,hasToolbar:!0,persistence:"permanent",loadView:async()=>(await d()).EventListenersWidget.EventListenersWidget.instance()}),a.ViewManager.registerViewExtension({location:"elements-sidebar",id:"elements.dom-properties",commandPrompt:r(i.showProperties),title:r(i.properties),order:7,persistence:"permanent",loadView:async()=>new((await d()).PropertiesWidget.PropertiesWidget)}),a.ViewManager.registerViewExtension({experiment:"capture-node-creation-stacks",location:"elements-sidebar",id:"elements.dom-creation",commandPrompt:r(i.showStackTrace),title:r(i.stackTrace),order:10,persistence:"permanent",loadView:async()=>new((await d()).NodeStackTraceWidget.NodeStackTraceWidget)}),a.ViewManager.registerViewExtension({location:"elements-sidebar",id:"elements.layout",commandPrompt:r(i.showLayout),title:r(i.layout),order:4,persistence:"permanent",loadView:async()=>(await async function(){return c||(c=await import("./components/components.js")),c}()).LayoutPane.LayoutPane.instance().wrapper}),a.ActionRegistration.registerActionExtension({actionId:"elements.hide-element",category:"ELEMENTS",title:r(i.hideElement),loadActionDelegate:async()=>new((await d()).ElementsPanel.ElementsActionDelegate),contextTypes:()=>m((e=>[e.ElementsPanel.ElementsPanel])),bindings:[{shortcut:"H"}]}),a.ActionRegistration.registerActionExtension({actionId:"elements.toggle-eye-dropper",category:"ELEMENTS",title:r(i.toggleEyeDropper),loadActionDelegate:async()=>new((await d()).ElementsPanel.ElementsActionDelegate),contextTypes:()=>m((e=>[e.ColorSwatchPopoverIcon.ColorSwatchPopoverIcon])),bindings:[{shortcut:"c"}]}),a.ActionRegistration.registerActionExtension({actionId:"elements.edit-as-html",category:"ELEMENTS",title:r(i.editAsHtml),loadActionDelegate:async()=>new((await d()).ElementsPanel.ElementsActionDelegate),contextTypes:()=>m((e=>[e.ElementsPanel.ElementsPanel])),bindings:[{shortcut:"F2"}]}),a.ActionRegistration.registerActionExtension({actionId:"elements.duplicate-element",category:"ELEMENTS",title:r(i.duplicateElement),loadActionDelegate:async()=>new((await d()).ElementsPanel.ElementsActionDelegate),contextTypes:()=>m((e=>[e.ElementsPanel.ElementsPanel])),bindings:[{shortcut:"Shift+Alt+Down"}]}),a.ActionRegistration.registerActionExtension({actionId:"elements.copy-styles",category:"ELEMENTS",title:r(i.copyStyles),loadActionDelegate:async()=>new((await d()).ElementsPanel.ElementsActionDelegate),contextTypes:()=>m((e=>[e.ElementsPanel.ElementsPanel])),bindings:[{shortcut:"Ctrl+Alt+C",platform:"windows,linux"},{shortcut:"Meta+Alt+C",platform:"mac"}]}),a.ActionRegistration.registerActionExtension({actionId:"elements.undo",category:"ELEMENTS",title:r(i.undo),loadActionDelegate:async()=>new((await d()).ElementsPanel.ElementsActionDelegate),contextTypes:()=>m((e=>[e.ElementsPanel.ElementsPanel])),bindings:[{shortcut:"Ctrl+Z",platform:"windows,linux"},{shortcut:"Meta+Z",platform:"mac"}]}),a.ActionRegistration.registerActionExtension({actionId:"elements.redo",category:"ELEMENTS",title:r(i.redo),loadActionDelegate:async()=>new((await d()).ElementsPanel.ElementsActionDelegate),contextTypes:()=>m((e=>[e.ElementsPanel.ElementsPanel])),bindings:[{shortcut:"Ctrl+Y",platform:"windows,linux"},{shortcut:"Meta+Shift+Z",platform:"mac"}]}),a.ActionRegistration.registerActionExtension({actionId:"elements.capture-area-screenshot",loadActionDelegate:async()=>new((await d()).InspectElementModeController.ToggleSearchActionDelegate),condition:n.Runtime.conditions.canDock,title:r(i.captureAreaScreenshot),category:"SCREENSHOT"}),a.ActionRegistration.registerActionExtension({category:"ELEMENTS",actionId:"elements.toggle-element-search",toggleable:!0,loadActionDelegate:async()=>new((await d()).InspectElementModeController.ToggleSearchActionDelegate),title:r(i.selectAnElementInThePageTo),iconClass:"select-element",bindings:[{shortcut:"Ctrl+Shift+C",platform:"windows,linux"},{shortcut:"Meta+Shift+C",platform:"mac"}]}),a.ActionRegistration.registerActionExtension({category:"ELEMENTS",actionId:"elements.new-style-rule",title:r(i.newStyleRule),iconClass:"plus",loadActionDelegate:async()=>new((await d()).StylesSidebarPane.ActionDelegate),contextTypes:()=>m((e=>[e.StylesSidebarPane.StylesSidebarPane]))}),a.ActionRegistration.registerActionExtension({category:"ELEMENTS",actionId:"elements.refresh-event-listeners",title:r(i.refreshEventListeners),iconClass:"refresh",loadActionDelegate:async()=>new((await d()).EventListenersWidget.ActionDelegate),contextTypes:()=>m((e=>[e.EventListenersWidget.EventListenersWidget]))}),e.Settings.registerSettingExtension({category:"ELEMENTS",storageType:"Synced",order:1,title:r(i.showUserAgentShadowDOM),settingName:"show-ua-shadow-dom",settingType:"boolean",defaultValue:!1}),e.Settings.registerSettingExtension({category:"ELEMENTS",storageType:"Synced",order:2,title:r(i.wordWrap),settingName:"dom-word-wrap",settingType:"boolean",options:[{value:!0,title:r(i.enableDomWordWrap)},{value:!1,title:r(i.disableDomWordWrap)}],defaultValue:!0}),e.Settings.registerSettingExtension({category:"ELEMENTS",storageType:"Synced",order:3,title:r(i.showHtmlComments),settingName:"show-html-comments",settingType:"boolean",defaultValue:!0,options:[{value:!0,title:r(i.showHtmlComments)},{value:!1,title:r(i.hideHtmlComments)}]}),e.Settings.registerSettingExtension({category:"ELEMENTS",storageType:"Synced",order:4,title:r(i.revealDomNodeOnHover),settingName:"highlight-node-on-hover-in-overlay",settingType:"boolean",defaultValue:!0}),e.Settings.registerSettingExtension({category:"ELEMENTS",storageType:"Synced",order:5,title:r(i.showDetailedInspectTooltip),settingName:"show-detailed-inspect-tooltip",settingType:"boolean",defaultValue:!0}),e.Settings.registerSettingExtension({settingName:"show-event-listeners-for-ancestors",settingType:"boolean",defaultValue:!0}),e.Settings.registerSettingExtension({category:"ADORNER",storageType:"Synced",settingName:"adorner-settings",settingType:"array",defaultValue:[]}),e.Settings.registerSettingExtension({category:"ELEMENTS",storageType:"Synced",title:r(i.showCSSDocumentationTooltip),settingName:"show-css-property-documentation-on-hover",settingType:"boolean",defaultValue:!0}),a.ContextMenu.registerProvider({contextTypes:()=>[o.RemoteObject.RemoteObject,o.DOMModel.DOMNode,o.DOMModel.DeferredDOMNode],loadProvider:async()=>new((await d()).ElementsPanel.ContextMenuProvider),experiment:void 0}),a.ViewManager.registerLocationResolver({name:"elements-sidebar",category:"ELEMENTS",loadResolver:async()=>(await d()).ElementsPanel.ElementsPanel.instance()}),e.Revealer.registerRevealer({contextTypes:()=>[o.DOMModel.DOMNode,o.DOMModel.DeferredDOMNode,o.RemoteObject.RemoteObject],destination:e.Revealer.RevealerDestination.ELEMENTS_PANEL,loadRevealer:async()=>new((await d()).ElementsPanel.DOMNodeRevealer)}),e.Revealer.registerRevealer({contextTypes:()=>[o.CSSProperty.CSSProperty],destination:e.Revealer.RevealerDestination.STYLES_SIDEBAR,loadRevealer:async()=>new((await d()).ElementsPanel.CSSPropertyRevealer)}),a.Toolbar.registerToolbarItem({loadItem:async()=>(await d()).LayersWidget.ButtonProvider.instance(),order:1,location:"styles-sidebarpane-toolbar"}),a.Toolbar.registerToolbarItem({loadItem:async()=>(await d()).ElementStatePaneWidget.ButtonProvider.instance(),order:2,location:"styles-sidebarpane-toolbar"}),a.Toolbar.registerToolbarItem({loadItem:async()=>(await d()).ClassesPaneWidget.ButtonProvider.instance(),order:3,location:"styles-sidebarpane-toolbar"}),a.Toolbar.registerToolbarItem({loadItem:async()=>(await d()).StylesSidebarPane.ButtonProvider.instance(),order:100,location:"styles-sidebarpane-toolbar"}),a.Toolbar.registerToolbarItem({actionId:"elements.toggle-element-search",location:"main-toolbar-left",order:0}),a.UIUtils.registerRenderer({contextTypes:()=>[o.DOMModel.DOMNode,o.DOMModel.DeferredDOMNode],loadRenderer:async()=>(await d()).ElementsTreeOutline.Renderer.instance()}),e.Linkifier.registerLinkifier({contextTypes:()=>[o.DOMModel.DOMNode,o.DOMModel.DeferredDOMNode],loadLinkifier:async()=>(await d()).DOMLinkifier.Linkifier.instance()});