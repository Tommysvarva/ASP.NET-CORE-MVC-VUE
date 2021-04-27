var mvc_and_vue_app = new Vue({
    el: '#app',
    data: {
        model: {
            title: "vue only test!",
            count: 0
        }
    },
    methods: {
        increment() {
            this.model.count ++;
        }
    }
})