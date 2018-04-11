import actionSheet from './actionSheet'
import dialog from './dialog'
import loading from './loading'
import picker from './picker/picker'
import scroll from './scroll/scroll'
import toast from './toast'
import topTips from './topTips'
import {
    Cells,
    Cell,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter
} from './cell'
import {
    Button,
    ButtonArea
} from './button'
import Slider from './slider/slider'
import Loadmore from './loadmore/loadmore'
import Badge from './badge/badge'
import {
    Flex,
    FlexItem
} from './flex'
import Progress from './progress/progress'
import CheckBox from './checkbox/checkbox'
import Swiper from './swiper/swiper'

const components = [
    picker,
    scroll,
    Cells,
    Cell,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter,
    Button,
    ButtonArea,
    Slider,
    Loadmore,
    Badge,
    Flex,
    FlexItem,
    Progress,
    CheckBox,
    Swiper
]

let install = function (Vue, opts = {}) {
    if (install.installed) {
        return;
    }
    install.installed = true;

    components.map(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$actionSheet = actionSheet;
    Vue.prototype.$dialog = dialog;
    Vue.prototype.$loading = loading;
    Vue.prototype.$toast = toast;
    Vue.prototype.$topTips = topTips;
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = {
    install,
    actionSheet,
    dialog,
    loading,
    picker,
    scroll,
    toast,
    topTips,
    Cells,
    Cell,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter,
    Button,
    ButtonArea,
    Slider,
    Loadmore,
    Badge,
    Flex,
    FlexItem,
    Progress,
    CheckBox,
    Swiper
}
