import './assets/style/common/reset.scss'
import Demo from './components/demo'

const componentList = [Demo]

function install(Vue) {
  if (install.installed) return
  componentList.map((component) => {
    Vue.use(component)
  })
}

export default {
  install,
  Demo
}
