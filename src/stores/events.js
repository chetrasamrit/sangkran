import { defineStore } from 'pinia'

// Corrected imports (all from ../assets/)
import beatThePot from "../assets/beat-the-pot.jpg";
import squat from "../assets/squat.jpg";
import download from "../assets/download.jpg";
import discardthebay from "../assets/download-2.jpg";
import hideTowels from "../assets/images.jpg";
import grabTheleaves from "../assets/download-3.jpg";
import bounce from "../assets/download-4.jpg";
import catchAkite from "../assets/images-1.jpg";
import bottledwaterpump from "../assets/download-5.jpg";
import chairDance from "../assets/download-6.jpg";
import kingWants from "../assets/as.jpg";
import brideTheBride from "../assets/download-8.jpg";

export const useEventsStore = defineStore('events', {
  state: () => ({
    newsItems: [
      {
        id: 1,
        title: 'វាយក្អម',
        description: 'The annual festival will kick off with music, dance, and traditional games.',
        date: '២០២៦-០៤-១៣',
        image: beatThePot
      },
      {
        id: 2,
        title: 'បោះអង្គុញ',
        description: 'A new exhibit showcasing local crafts and traditions is now open.',
        date: '២០២៦-០៤-១៣',
        image: squat
      },
      {
        id: 3,
        title: 'ទាញព្រ័ត្រ',
        description: 'Join us in keeping our city clean this weekend with a volunteer event.',
        date: '២០២៦-០៤-១៣',
        image: download
      },
      {
        id: 4,
        title: 'ចោលឈូង',
        description: 'Join us in keeping our city clean this weekend with a volunteer event.',
        date: '២០២៦-០៤-១៣',
        image: discardthebay
      },
      {
        id: 5,
        title: 'លាក់កន្សែង',
        description: 'Join us in keeping our city clean this weekend with a volunteer event.',
        date: '២០២៦-០៤-១៣',
        image: hideTowels
      },
      {
        id: 6,
        title: 'ដណ្ដើមស្លឹកឈើ',
        description: 'Join us in keeping our city clean this weekend with a volunteer event.',
        date: '២០២៦-០៤-១៣',
        image: grabTheleaves
      },
      {
        id: 7,
        title: 'លោតប៉ាវ',
        description: 'Join us in keeping our city clean this weekend with a volunteer event.',
        date: '២០២៦-០៤-១៣',
        image: bounce
      },
      {
        id: 8,
        title: 'ចាប់កូនខ្លែង',
        description: 'Join us in keeping our city clean this weekend with a volunteer event.',
        date: '២០២៦-០៤-១៣',
        image: catchAkite
      },
      {
        id: 9,
        title: 'បូមទឹកដាក់ដប',
        description: 'Join us in keeping our city clean this weekend with a volunteer event.',
        date: '២០២៦-០៤-១៣',
        image: bottledwaterpump
      },
      {
        id: 10,
        title: 'រាំដណ្ដើមកៅអី',
        description: 'Join us in keeping our city clean this weekend with a volunteer event.',
        date: '២០២៦-០៤-១៣',
        image: chairDance 
      },
      {
        id: 11,
        title: 'ស្ដេចចង់',
        description: 'Join us in keeping our city clean this weekend with a volunteer event.',
        date: '២០២៦-០៤-១៣',
        image: kingWants
      },
      {
        id: 12,
        title: 'ពង្រាត់កូនក្រមុំ',
        description: 'Join us in keeping our city clean this weekend with a volunteer event.',
        date: '២០២៦-០៤-១៣',
        image: brideTheBride
      },
    ],
  }),
  actions: {
    // You can add store actions here later
  }
})
