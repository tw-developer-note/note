'use strict';

module.exports = {

  types: [
    {
      value: 'docs',
      name: 'ð  docs: ä¿®æ¹æä»¶ã'
    },
    {
      value: 'feat',
      name: 'â¨  feat: æ°å¢åè½ã'
    },
    {
      value: 'fix',
      name: 'ð  fix: ä¿®å¾© bugã'
    },
    {
      value: 'WIP',
      name: 'ðª  WIP: æ«å­å·¥ä½ã'
    },
    {
      value: 'chore',
      name: 'ð¯  chore: ä¿®æ¹å»ºç½®æµç¨ãåç®¡çãæ§å»ºéç¨æè¼å©å·¥å·çè®åãä¸åå«ä¿®æ¹æ¸¬è©¦æªãsrc è£¡çæªæ¡ã'
    },
    {
      value: 'style',
      name: 'ð  style: ä¿®æ¹ç¨å¼ç¢¼çé¢¨æ ¼ï¼ä¸æå°ç¢åæä»»ä½çåè½è®å (ç©ºç½éµãæ ¼å¼åãåè...ç­)ã'
    }
  ],
  scopes: [{
    value: 'md',
    name: 'åªåå°MDçé¨å'
  }, {
    value: 'package/native',
    name: 'æ°å¢ä¾è³´å°åççå¥ä»¶'
  }],
  messages: {
    type: '<type> ç¨æ¼èªªæ commit çé¡å¥ï¼åªåè¨±ä½¿ç¨ä¸é¢ 9 åæ¨è­: \n',
    scope: '<scope> å½±é¿ç¯åï¼æ¯å¦æå½±é¿å°åªåæ¨¡å¡/æ§è½/åªä¸å±¤ï¼æ¥­åå±¤ï¼æä¹å±¤ï¼ç·©å­ï¼rpcï¼ï¼å¦ææ¯ç¹æ§ä»£ç¢¼ï¼å¯ä»¥å¯«ç¹æ§åç¨± (å¯é¸): \n',
    customScope: '<scope> èªå®ç¾©å½±é¿ç¯åï¼è«ç²¾ç°¡æ¼è¦ä½ä¸å¤±åæ: \n',
    subject: '<subject> ç®ççç°¡ç­æè¿°ï¼ä¸è¶é 100 åå­ç¬¦: \n',
    body: '<body> å°æ¬æ¬¡ commit çè©³ç´°æè¿°ï¼ä½¿ç¨ç¬¬ä¸äººç¨±ï¼æè©²èªªæä»£ç¢¼è®åçåæ©ï¼ä»¥åèä»¥åè¡çºçå°æ¯ï¼å¯ä»¥ä½¿ç¨ "|" åæå¤è¡ (å¯é¸):\n',
    breaking: '<breaking> å°ç ´å£æ§è®å(Breaking Change)çæè¿°ãä»¥åè®åçç±åé·ç§»æ¹æ³ (å¯é¸):\n',
    footer: '<footer> éå°ç issueï¼åæ¯ï¼#520, #1314 (å¯é¸):\n',
    confirmCommit: '<confirm commit> è«ç¢ºèªä»¥ä¸æè¿°ã',
  },
  upperCaseSubject: true,
  footerPrefix: 'Related issue:',
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix", "refactor"],
};