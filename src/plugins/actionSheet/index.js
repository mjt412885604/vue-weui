import Vue from 'vue'
import actionSheet from './actionSheet'

var actionSheetPrev,
    actionSheetConstructor = Vue.extend(actionSheet);

let removeDom = event => {
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
    }
};

actionSheetConstructor.prototype.close = function () {
    this.visible = false
    this.$el.addEventListener('transitionend', removeDom)
    actionSheetPrev = null
}

export default function ActionSheet(options = {}) {
    options = Object.assign({}, {
        title: '',
        menus: [],
        actions: [{
            label: '取消',
            onClose: function () {}
        }]
    }, options)

    console.log(options)
    if (!options.menus) {
        return;
    }

    if (actionSheetPrev) {
        return;
    }

    actionSheetPrev = new actionSheetConstructor().$mount()

    Object.keys(options).forEach(key => {
        actionSheetPrev[key] = options[key]
    })


    document.body.appendChild(actionSheetPrev.$el)
    Vue.nextTick(() => {
        actionSheetPrev.visible = true
        actionSheetPrev.$el.removeEventListener('transitionend', removeDom);
    })

    return actionSheetPrev;
}
