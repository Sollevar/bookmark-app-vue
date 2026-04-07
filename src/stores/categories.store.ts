import { API_ROUTES, http } from "@/api";
import type { ICategory } from "@/interfaces/category.interface";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";


export const useCategoryStore = defineStore('categories', () => {
    const categories = ref<ICategory[]>();
    async function fetchCategories() {
        const { data } = await http.get<ICategory[]>(API_ROUTES.categories);
        categories.value = data;
    };
    async function createCategory (){
        const { data } = await http.post<ICategory>(API_ROUTES.categories, {
            name:'Новая категория',
            alias: uuidv4(),
        });
       categories.value?.push(data)
    }
    return { categories, fetchCategories, createCategory }
})