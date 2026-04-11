import { defineStore } from "pinia";
import { ref } from "vue";
import type { IProfile } from '../interfaces/profile.interface';
import { API_ROUTES, client } from '../api';

export const useProfileStore = defineStore('profile', () => {
    const profileData = ref<IProfile>();
    async function fetchProfile() {
       const {data} = await client().get<IProfile>(API_ROUTES.auth.profile)
       profileData.value = data;
      };
    return {profileData, fetchProfile};
})