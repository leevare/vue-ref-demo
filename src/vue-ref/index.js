export default {
  install(Vue, options = {}) {
    const directiveName = options.name || "ref";
    Vue.directive(directiveName, {
      bind(el, binding, vnode) {
        binding.value(vnode.componentInstance || el, vnode.key);
      },
      update(el, binding, vnode, oldVnode) {
        if (oldVnode.data && oldVnode.data.directives) {
          const oldBinding = oldVnode.data.directives.find(
            directive => directive.name === directiveName
          );
          if (oldBinding && oldBinding.value !== binding.value) {
            oldBinding && oldBinding.value(null, oldVnode.key);
            binding.value(vnode.componentInstance || el, vnode.key);
            return;
          }
        }
        if (
          vnode.componentInstance !== oldVnode.componentInstance ||
          vnode.elm !== oldVnode.elm
        ) {
          binding.value(vnode.componentInstance || el, vnode.key);
        }
      },
      unbind(el, binding, vnode) {
        binding.value(null, vnode.key);
      }
    });
  }
};
