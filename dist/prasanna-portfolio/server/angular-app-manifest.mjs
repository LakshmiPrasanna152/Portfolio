
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/background"
  },
  {
    "renderMode": 2,
    "route": "/footer"
  },
  {
    "renderMode": 2,
    "route": "/navbar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1488, hash: 'e391637a5c3a97ef1fe55f713db64bfb1bcdfc1c8c7c3118035dfc8c24a8da7f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 968, hash: '09967e0768cd275233893c580218a29c46e89301f5f9c3ca3af719f5d41a259d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 60910, hash: 'd2f8041466b211b49704d81bbf5ba075571021d698755ab30118fa93d44db5bf', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'footer/index.html': {size: 60910, hash: 'd2f8041466b211b49704d81bbf5ba075571021d698755ab30118fa93d44db5bf', text: () => import('./assets-chunks/footer_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 60910, hash: 'd2f8041466b211b49704d81bbf5ba075571021d698755ab30118fa93d44db5bf', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 60910, hash: 'd2f8041466b211b49704d81bbf5ba075571021d698755ab30118fa93d44db5bf', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 60910, hash: 'd2f8041466b211b49704d81bbf5ba075571021d698755ab30118fa93d44db5bf', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'background/index.html': {size: 60910, hash: 'd2f8041466b211b49704d81bbf5ba075571021d698755ab30118fa93d44db5bf', text: () => import('./assets-chunks/background_index_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 60910, hash: 'd2f8041466b211b49704d81bbf5ba075571021d698755ab30118fa93d44db5bf', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'index.html': {size: 60910, hash: 'd2f8041466b211b49704d81bbf5ba075571021d698755ab30118fa93d44db5bf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60910, hash: 'd2f8041466b211b49704d81bbf5ba075571021d698755ab30118fa93d44db5bf', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-VT2OWJI5.css': {size: 6104, hash: 'LcYKM8N2TGs', text: () => import('./assets-chunks/styles-VT2OWJI5_css.mjs').then(m => m.default)}
  },
};
