import Vue from 'vue'
import dialog from './dialog'

var dialogPrev,
    dialogConstructor = Vue.extend(dialog);

dialogConstructor.prototype.close = function () {
    if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
    }
    this.visible = false
    dialogPrev = null
}

export default function Dialog(options = {}) {
    if (typeof options == 'string') {
        options = {
            content: options
        }
    }

    options = Object.assign({}, {
        title: '',
        content: '',
        className: '',
        closeOnClickModal: false,
        beforeClose: null,
        buttons: [{
            label: '确定',
            type: 'primary',
            onClick: function () {}
        }]
    }, options)

    if (!options.content) {
        return;
    }

    if (!dialogPrev) {
        dialogPrev = new dialogConstructor().$mount()
    }

    Object.keys(options).forEach(key => {
        dialogPrev[key] = options[key]
    })

    document.body.appendChild(dialogPrev.$el)
    Vue.nextTick(() => {
        dialogPrev.visible = true
    })

    return dialogPrev;
}
