<template>
  <div class="home">
    <div class="versionContainer">
      <div class="versionText">VERSION <b>{{version}}</b></div>
    </div>
  </div>
</template>
<script>
const {ipcRenderer} = require('electron');
export default {
  data() {
    return {
      version: '#.#.#',
    }
  },
  mounted(){
    ipcRenderer.send('app_version');
    ipcRenderer.on('app_version', (event, arg) => {
        ipcRenderer.removeAllListeners('app_version');
        this.version = arg.version;
    });
  }
}
</script>

<style lang="scss" scoped>
.versionContainer{
  position: absolute;
  background-color: rgb(24, 24, 24);
  top: 0;left: 0;
  height:100%; width: 100%;
  display: flex;justify-content: center;align-items: center;
  .versionText{
    font-size: 20pt;
    color: white;
  }
}
</style>
