import { defineStore } from "pinia";

export const useAboutStore = defineStore('about', {
  state: () => ({
    title: 'កម្មវិធី',
    description: [
      {events:'ពិធីទទួលទេវតា'

      },
      {events:'ងូតទឺកអោយចាស់ៗ'

      },
      {events:'លេងល្បែងប្រជាប្រិយខ្មែរ'

      },
      {events:'និង​រាំលេងពេលរាត្រីចំនួនបីថ្ងៃ។'

      },
        ],
      
    
  })
});
