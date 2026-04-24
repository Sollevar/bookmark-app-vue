import { API_ROUTES, http } from "@/api";
import type { IBookmark } from "@/interfaces/bookmark.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookmarkStore = defineStore('bookmarks', () => {
    const bookmarks = ref<IBookmark[]>();
    const activeSort = ref<string>('date');
    async function getCategoryBookmarks(categoryId: number | undefined, sort:string){
        if (typeof categoryId == 'number'){
            const { data } = await http.get<IBookmark[]>(API_ROUTES.bookmarks.get(categoryId), {
                params:{
                    sort
                }
            });
            bookmarks.value = data;
        }
        return
    };
    async function deleteBookmark(id:number, categoryId:number) {
        await http.delete<number>(API_ROUTES.bookmarks.delete(id));
        await getCategoryBookmarks(categoryId,activeSort.value);
    };
    async function createBookmark(url: string, categoryId:number) {
        await http.post<IBookmark>(API_ROUTES.bookmarks.create, {
            url: url,
            category_id:categoryId,
        });
        await getCategoryBookmarks(categoryId,activeSort.value);
    }
    return {bookmarks, getCategoryBookmarks, deleteBookmark, activeSort,createBookmark}
})