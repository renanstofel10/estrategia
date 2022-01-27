exports.addShadowRootLocator = function () {
  by.addLocator('css_sr', (cssSelector, opt_parentElement) => {
    let selectors = cssSelector.split('::sr');
    if (selectors.length === 0) {
      return [];
    }

    let shadowDomInUse = (document.head.createShadowRoot || document.head.attachShadow);
    let getShadowRoot  = (el) => ((el && shadowDomInUse) ? el.shadowRoot : el);
    let findAllMatches = (selector, targets, firstTry) => {
      let using, i, matches = [];
      for (i = 0; i < targets.length; ++i) {
        using = (firstTry) ? targets[i] : getShadowRoot(targets[i]);
        if (using) {
          if (selector === '') {
            matches.push(using);
          } else {
            Array.prototype.push.apply(matches, using.querySelectorAll(selector));
          }
        }
      }
      return matches;
    };
  
    let matches = findAllMatches(selectors.shift().trim(), [opt_parentElement || document], true);
    while (selectors.length > 0 && matches.length > 0) {
      matches = findAllMatches(selectors.shift().trim(), matches, false);
    }
    return matches;
  });
}