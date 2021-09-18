module.exports = {
  pluginOptions: {
    electronBuilder: {
        nodeIntegration: true,
        builderOptions:{
          publish: {
            provider: 'github',
            token: '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'
          },
          appId: 'vue.electron.app.com',
          win:{
            target: ["nsis"],
          },
          nsis:{
            uninstallDisplayName: "VUE ELECTRON APP",
            license: "license.txt",
            oneClick: false,
            allowToChangeInstallationDirectory: true
          }
        }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
