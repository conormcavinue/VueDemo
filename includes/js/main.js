Vue.component('family-member', {
    props: ['person'],
    template: "<li>{{ person.name}} : {{ person.age }} : Test</li>"
});


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
        urls: [
            "http://www.google.com",
            "http://www.rte.ie",
            "http://www.irishtimes.com",
            "http://www.planetrugby.com"
        ],
        htmlText: "<span>This is a red span</span>",
        buttonClass: {
            'btn': true
        },
        alertText: ''


    },

    computed: {
        url: function () {
            return this.urls[this.urlKey];
        },

        classObject: function () {
            return {
                'yellow-text': this.urlKey === 0,
                'green-text': this.urlKey === 1,
                'blue-text': this.urlKey === 2,
                'red-text': this.urlKey === 3
            };
        }
    },

    methods: {
        toggleList: function () {
            this.displayList = this.displayList === false ? true : false;
        },

        sendText: function () {
            alert(this.alertText);
        },

        cycleUrls: function () {
            if (this.urlKey < this.urls.length - 1) {
                this.urlKey++;
            } else {
                this.urlKey = 0;
            }
        }
    }

});

