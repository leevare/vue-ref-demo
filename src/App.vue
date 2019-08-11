<template>
  <div>
    <p>A节点</p>
    <button @click="getE">获取E</button>
    <B></B>
    <C>
      <E ref="E" v-ref="c => setChildrenRef($refs.E.$options.name, c)"></E>
      <F></F>
    </C>
    <D></D>
  </div>
</template>

<script>
import B from "./components/B";
import C from "./components/C";
import D from "./components/D";
import E from "./components/E";
import F from "./components/F";

export default {
  name: "A",
  components: { B, C, D, E, F },
  provide() {
    return {
      setChildrenRef: this.setChildrenRef,
      getChildrenRef: name => this[name],
      getRef: () => this
    };
  },
  methods: {
    getE() {
      console.log(this["childrenE"]);
    },
    setChildrenRef(name, ref) {
      this[name] = ref;
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
}
</style>
