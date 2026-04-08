import { API_ROUTES, http } from "@/api";
import type { IBookmark } from "@/interfaces/bookmark.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookmarkStore = defineStore('bookmarks', () => {
    const bookmarks = ref<IBookmark[]>();
    async function getCategoryBookmarks(categoryId: number | undefined){
        if (typeof categoryId == 'number'){
            const { data } = await http.get<IBookmark[]>(API_ROUTES.bookmarks(categoryId));
            bookmarks.value = data;
        }
        return
    }
    return {bookmarks, getCategoryBookmarks}
})