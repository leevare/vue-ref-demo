<template>
  <div>
    D节点
    <div class="children">
      <H ref="H" v-ref="c => setChildrenRef($refs.H.$options.name, c)"></H>
    </div>
  </div>
</template>

<script>
import H from "../components/H";

export default {
  name: "D",
  components: { H },
  inject: {
    setChildrenRef: {
      default: () => {}
    }
  }
};
</script>
