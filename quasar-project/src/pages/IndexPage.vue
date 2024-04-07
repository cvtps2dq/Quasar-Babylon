<template>
  <canvas ref="bjsCanvas" />
</template>
<script>
import { ref, onMounted, onUnmounted } from "vue";
import { createScene } from "../scenes/startingScene";
export default {
  name: "BabylonScene",
  setup() {
    const bjsCanvas = ref(null);
    onMounted(() => {
      if (bjsCanvas.value) {
        onResize();
        createScene(bjsCanvas.value);
        window.addEventListener("resize", onResize);
      }
    });
    onUnmounted(() => {
      window.removeEventListener("resize", onResize);
    });
    function onResize() {
      if (bjsCanvas.value != null) {
        bjsCanvas.value.width = window.innerWidth;
        bjsCanvas.value.height = window.innerHeight;
      }
    }
    return {
      bjsCanvas,
    };
  },
};
</script>
