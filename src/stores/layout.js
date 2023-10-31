import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useLayoutStore = defineStore('layout', () => {
    const collapse = ref(false)
    const userMenuList = ref([])
    const avatar = ref('')
    const tabList = ref([])
    const trigger = () => {
        collapse.value = !collapse.value
    }
    const saveTab = (tab) => {
        if (tabList.value.findIndex(item => item.path === tab.path) == -1) {
            tabList.value.push(tab)
        }
    }
    const removeTab = (tab) => {
        const index = tabList.value.findIndex(item => item.name === tab.name)
        tabList.value.splice(index, 1)
    }
    const resetTab = () => {
        tabList.value = [{ name: "首页", path: "/" }]
    }
    return { collapse, userMenuList, avatar, tabList, trigger, removeTab, resetTab, saveTab }
})