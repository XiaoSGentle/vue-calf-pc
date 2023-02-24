import '@/assets/icons'
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import YFooter from "@/components/Footer"
import HeaderNav from "@/components/Header"
import { getBaseUrl } from '@/utils/env'
import axios from '@/utils/request'
import { addDateRange, download, handleTree, parseTime, resetForm, selectDictLabel, selectDictLabels, timeFormat } from "@/utils/ruoyi"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faImage, faUserCircle, faThumbsUp, faClock } from '@fortawesome/free-regular-svg-icons'
import { faAngleDoubleRight, faGraduationCap, faUserGraduate, faTags, faUserPlus, faUserMinus, faCrown, faLevelUpAlt, faLock, faThumbsUp as fTU, faHourglassHalf, faBed, faCommentAlt,faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
// 代码高亮插件
import hljs from 'highlight.js'
import 'video.js/dist/video-js.css'
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import App from './App.vue'
import './assets/icons' // icon
import "./permission"
import router from './router'
import store from './store'
import Cube from 'cube-ui';

// http接口API集中管理
import httpApi from '@/utils/http-api.js'
Vue.use(httpApi)

library.add(faGraduationCap)
library.add(faImage)
library.add(faAngleDoubleRight)
library.add(faUserCircle)
library.add(faUserGraduate)
library.add(faTags)
library.add(faUserPlus)
library.add(faUserMinus)
library.add(faCrown)
library.add(faLevelUpAlt)
library.add(faLock)
library.add(faThumbsUp)
library.add(fTU)
library.add(faClock)
library.add(faHourglassHalf)
library.add(faBed)
library.add(faCommentAlt)
library.add(faHeart)



Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(Element)
Vue.use(Cube)

Vue.config.productionTip = false
Vue.prototype.$axios = axios


// 全局方法挂载
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree
Vue.prototype.getBaseUrl = getBaseUrl
Vue.prototype.timeFormat = timeFormat

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: "success" });
}

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: "error" });
}


Vue.use(VideoPlayer)

// 全局组件挂载
Vue.component('HeaderNav', HeaderNav)
Vue.component('YFooter', YFooter)
Vue.use(hljs.vuePlugin);



// require styles
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')