const install = function(Vue, options){
    Vue.directive('focus', {
        inserted: function(el){
            el.focus()
        }
    })
}

export default install;