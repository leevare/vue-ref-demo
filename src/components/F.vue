<template>
  <div>
    <p>F节点</p>
    <button @click="getA">获取A Ref</button>
    <button @click="getH">获取H Ref</button>
  </div>
</template>

<script>
export default {
  name: "F",
  inject: {
    getRef: {
      default: () => {}
    },
    getChildrenRef: {
      default: () => {}
    }
  },
  methods: {
    getA() {
      console.log(this.getRef());
    },
    getH() {
      console.log(this.getChildrenRef("childrenH"));
    }
  }
};
</script>
