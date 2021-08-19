module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
  pwa: {
    name: 'Vue-Music App',
    themeColor: '#ff5e3a',
    manifestOptions: {
      name: 'Vue-Music App',
      short_name: 'Music',
    },
  },
};
