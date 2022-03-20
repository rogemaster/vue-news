import Chart from 'chart.js';

export default {
    install(Vue) {
        console.log('Chart Plugin install')
        Vue.prototype.$_Chart = Chart;
    }
}