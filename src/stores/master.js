import { defineStore } from 'pinia'

export const useMasterStore = defineStore('master', {
  state: () => ({
    pagodaName : 'វត្ត តេជោសិទ្ធារាមវត្តបាន្លួង',
    managerName : 'ចៅអធិការ  <b>សៀង ទូច</b>',
    email : 'chetrasamrit2005@gmail.com',
    phone : '+855 12 345 678',
    address : 'ភូមិ ពន្សាំង ឃុំ ចំប៉ា ស្រុក ព្រៃកប្បាស ខេត្ត តាកែវ',
    
    navbar:[
        { name: 'ទំព័រដើម', path: '/' },
        { name: 'កម្មវិធី', path: '/about' },
        { name: 'រូបថត', path: '/photo' },
        { name: 'ល្បែងប្រជាប្រិយ', path: '/events' },
        { name: 'ប្រវត្តិ', path: '/history' },
    ]
  }),
  actions: {
   
  },
})
