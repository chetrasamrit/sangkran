import { defineStore } from 'pinia'
import photo_v from '../assets/photo-v.jpg' // make sure this file exists

export const useHistoryStore = defineStore('history', {
  state: () => ({
    historyName: 'ប្រវត្តិបន្តិចបន្ទួចរបស់វត្តយើង', // short title
    photo_v, // temple image
    cons: [
      { create: 'វត្តត្រូវបានបង្កើតឡើង', year: '២០១៥' },
      { create: 'បានធ្វើការជួសជុល និងស្តារឡើងវិញ', year: '២០១៨' },
      { create: 'ក្លាយជាកន្លែងសង្គម និងបុណ្យប្រពៃណីសំខាន់ៗ', year: '២០២០' },
      { create: 'បុណ្យប្រពៃណីប្រចាំឆ្នាំ', year: '២០២១' },
      { create: 'បានពង្រីកសាលាអធិស្ឋាន', year: '២០២២' }
    ]
  })
})
