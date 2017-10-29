import Vue from 'vue'
import './view.scss'

Vue.component('individual-comment', {
  template:
  `<li> {{ commentpost }} </li>`,
  props: ['commentpost']
})

new Vue({
  el: 'view-temp',
  template: '#view-temp',
  data: {
    newComment: '',
    comments: [
      'Looks great Julianne!',
      'I love the sea',
      'Where are you at?'
    ]
  },
  methods: {
    addComment: function () {
      this.comments.push(this.newComment)
      this.newComment = ''
    }
  }
})
