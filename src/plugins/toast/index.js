import Vue from 'vue'
import toast from './toast.vue'

let instance,
    ToastConstructor = Vue.extend(toast)

let removeDom = event => {
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
    }
};

export default function Toast(options = {}) {
    if (typeof arguments[0] == 'string' || typeof arguments[0] == 'number') {
        options = {
            message: arguments[0]
        }
    }

    options = Object.assign({
        time: 2000,
        message: '',
        position: 'center',
        icon: null,
        callback: null
    }, options)

    if (!options.message) return;

    if (!instance) { // 防止二次调用
        instance = new ToastConstructor().$mount()
    }

    instance.message = options.message;
    instance.position = options.position;
    instance.icon = options.icon ? [,'success', 'warn', 'error'][parseInt(options.icon)] : null;
    document.body.appendChild(instance.$el)

    function hide(callback) {
        instance.visible = false
        instance.$el.addEventListener('transitionend', function (event) {
            if (event.target.parentNode) {
                event.target.parentNode.removeChild(event.target);
            }
            instance = null;
            typeof callback == 'function' && callback()
        })
    }

    Vue.nextTick(() => {
        instance.visible = true;
        instance.$el.removeEventListener('transitionend', removeDom);
        clearTimeout(instance.timer)
        instance.timer = setTimeout(() => {
            hide(options.callback)
        }, options.time)
    })

    return instance;
}
