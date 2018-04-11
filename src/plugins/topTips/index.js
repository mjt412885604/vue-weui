import Vue from 'vue'
import topTips from './topTips'


var topTipsPrev,
    topTipsConstructor = Vue.extend(topTips)

export default function TopTips(content, options = {}) {
    if (!content) {
        return;
    }

    if (typeof options === 'number') {
        options = {
            time: options
        }
    }

    if (typeof options === 'function') {
        options = {
            callback: options
        }
    }

    options = Object.assign({
        time: 2000,
        callback: null,
        type: 'error'
    }, options)

    if (!topTipsPrev) {
        topTipsPrev = new topTipsConstructor().$mount()
    }

    topTipsPrev.content = content;
    topTipsPrev.type = options.type;
    document.body.appendChild(topTipsPrev.$el);

    function hide(callback) {
        document.body.removeChild(topTipsPrev.$el);
        topTipsPrev = null
        typeof callback == 'function' && callback()
    }

    Vue.nextTick(() => {
        clearTimeout(topTipsPrev.timer)
        topTipsPrev.timer = setTimeout(() => {
            hide(options.callback)
        }, options.time)
    })

    return topTipsPrev
}
