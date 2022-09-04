import Demo from './index.vue'

Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo)
}

export default Demo
