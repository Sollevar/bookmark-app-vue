import { API_ROUTES, http } from "@/api";
import type { ICategory } from "@/interfaces/category.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoryStore = defineStore('categories', () => {
    const categories = ref<ICategory[]>();
    async function fetchCategories() {
        const { data } = await http.get<ICategory[]>(API_ROUTES.categories);
        categories.value = data;
    }
    return { categories, fetchCategories }
})