import wingViewport from 'wing-viewport';

export const viewport = {
  install(app) {
    app.config.globalProperties.$viewport = this;
  },
  ...wingViewport,
};

export default viewport;
