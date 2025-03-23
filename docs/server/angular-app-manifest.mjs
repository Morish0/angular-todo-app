
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-todo-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-todo-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4912, hash: '3b33c5bce6f0676477e4a454e1035f91591335cdfe1561be392746903bb5bb0b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: '3b81437ce6fa9489fdadce8366cb6c740f9cc5647d7809334ce5c4cce56df662', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16327, hash: '389f70e45ee6a42963e1d564eaf28771023632f65cb29ddc19c89310a7f853ef', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
