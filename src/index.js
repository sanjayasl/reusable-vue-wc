import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'
//import VueWebComponent from './components/VueWebComponent'
import QuantityButton from './components/QuantityButton'

const CustomElement = wrap(Vue, QuantityButton)

window.customElements.define('quantity-button', CustomElement)
