var vm = new Vue({
    el: '#app',
    data: {
        urlKey: 0,
        displayList: true,
        people: [
             { name: 'Conor', age: 33 },
             { name: 'Ronan', age: 36 },
             { name: 'Darragh', age: 39 },
             { name: 'Karen', age: 26 }
        ],
        url: '',
        urls: [
            "http://www.google.com",
            "http://www.rte.ie",
            "http://www.irishtimes.com",
            "http://www.planetrugby.com"
        ],
        htmlText: "<span style='color: red'>This is a red span</span>"

    },

    created: function() {
        this.url = this.urls[this.urlKey];
    },

    watch: {
        urlKey: function() {
            this.url = this.urls[this.urlKey];
        }
    },

    methods: {
        toggleList: function() {
            this.displayList = this.displayList == false ? true : false;
        },

        cycleUrls: function() {
            if ( this.urlKey < this.urls.length - 1) {
                this.urlKey++;
            } else {
                this.urlKey = 0;
            }
        }
    }

});

Vue.component('family-member', {
    props: ['person'],
    template: "<li>{{ person.name}} : {{ person.age }} : Test</li>"
});
