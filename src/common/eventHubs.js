// 事件中心
import Vue from 'vue'
let eventHub = new Vue()
export default {
  getEventHub() {
    return eventHub;
  }
}
