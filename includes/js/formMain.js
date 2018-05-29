Vue.component('person', {
    props: {
        firstName: String,
        lastName: String,
        email: String,
        address: String,
    },
    template: "<div class='row'><div class='col s3'>{{ firstName }} {{ lastName }}</div><div class='col s3'>{{ email }}</div><div class='col s6'>{{ address }}</div></div>"
});

Vue.component('video-list', {
    props: {
        src: String,

    },
    template: "<video class='video-js' controls preload='auto' data-setup='{}'><source src='{{ src }}' type='video/mp4'></video>"
});

var vm = new Vue({
    el: '#app',
    data: {
        people: [],
        videos: [
             "http://localhost/videos/RU.2016.EOYT.Week.1.Ireland.v.New.Zealand.SD.NZ.Commentary.1st.Half.x264.mp4",
             "http://localhost/videos/RU.2016.EOYT.Week.1.Ireland.v.New.Zealand.SD.NZ.Commentary.2nd.Half.x264.mp4",
             "http://localhost/videos/Preacher.S02E01.mp4",
             "http://localhost/videos/boxed-join.mp4"
        ],

        firstName: '',
        lastName: '',
        email: '',
        address: ''
    },

    methods: {
        addUser: function () {
            this.people.push({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                address: this.address
            });
        }
    }
});

