import * as singleSpa from 'single-spa';

singleSpa.registerApplication('orchestrator', () => import ('../index'), pathPrefix(''), );

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}