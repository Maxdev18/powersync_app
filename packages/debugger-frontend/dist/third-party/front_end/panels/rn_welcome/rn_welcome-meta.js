import*as e from"../../core/i18n/i18n.js";import"../../core/root/root.js";import*as o from"../../ui/legacy/legacy.js";const n={rnWelcome:"Welcome",showRnWelcome:"Show React Native Welcome panel",debuggerBrandName:"React Native DevTools"},r=e.i18n.registerUIStrings("panels/rn_welcome/rn_welcome-meta.ts",n),a=e.i18n.getLazilyComputedLocalizedString.bind(void 0,r);let i;o.ViewManager.registerViewExtension({location:"panel",id:"rn-welcome",title:a(n.rnWelcome),commandPrompt:a(n.showRnWelcome),order:-10,persistence:"permanent",loadView:async()=>(await async function(){return i||(i=await import("./rn_welcome.js")),i}()).RNWelcome.RNWelcomeImpl.instance({debuggerBrandName:a(n.debuggerBrandName),showBetaLabel:!1,showDocs:!0}),experiment:"react-native-specific-ui"});
