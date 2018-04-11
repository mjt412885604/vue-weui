import Vue from 'vue'
import loading from './loading'

var loadingPrev,
    loadingConstructor = Vue.extend(loading);

// 关闭loading体
loadingConstructor.prototype.hide = function (callback) {
    this.$el.parentNode.removeChild(this.$el)
    loadingPrev = false
    typeof callback == 'function' && callback()
}

// 更改文字体
loadingConstructor.prototype.title = function (message) {
    if (message) {
        this.message = message
    }
}

export default function Loading(options = {
    message: ''
}) {
    if (typeof options == 'string') {
        options = {
            message: options
        }
    }

    if (!loadingPrev) {
        loadingPrev = new loadingConstructor({
            data: options
        }).$mount()
    }

    document.body.appendChild(loadingPrev.$el)

    return loadingPrev;
}
