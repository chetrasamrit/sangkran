import { defineStore } from "pinia";


import beatThePot from "../assets/photoh1.jpg";
import squat from "../assets/photoh2.jpg";
import download from "../assets/photoh3.jpg";
import discardthebay from "../assets/photoh4.jpg";
import hideTowels from "../assets/photop1.jpg";
import grabTheleaves from "../assets/photop2.jpg";
import bounce from "../assets/ph2.jpg";
import catchAkite from "../assets/sk2.jpg";
import bottledwaterpump from "../assets/download-5.jpg";
import chairDance from "../assets/download-6.jpg";
import kingWants from "../assets/as.jpg";
import brideTheBride from "../assets/download-8.jpg";

export const usePhotoStore = defineStore('photo', {
  state: () => ({
    h1:'រូបថត',
    newsItems:[
      {
    id: 1,
    title: 'បុណ្យគំរប់ខួប១០ឆ្នាំរបស់វត្ត',
    image: beatThePot
  }, {
    id: 2,
    title: 'បុណ្យផ្កាសាមគ្គី',
    image: squat
  }, {
    id: 3,
    title: 'ម្ចាស់ទានមកមើលគំនូរ',
    image: download
  }, {
    id: 4,
    title: 'បុណ្យកឋិនទាន',
    image: discardthebay
  }, {
    id: 5,
    title: 'ចូលឆ្នាំពេលថ្ងៃ',
    image: hideTowels
  }, {
    id: 6,
    title: 'ចូលឆ្នាំពេលយប់',
    image: grabTheleaves
  }, {
    id: 7,
    title: 'ចូលឆ្នាំ លើកមុន',
    image: catchAkite
  }, {
    id: 8,
    title: 'រាប់បាទឆ្លងចូលឆ្នាំ',
    image: bounce
  }

    ]


  }),
   actions: {
   
  },
})

