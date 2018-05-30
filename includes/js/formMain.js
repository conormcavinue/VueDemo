Vue.component('person', {
    props: {
        firstName: String,
        lastName: String,
        email: String,
        address: String,
    },
    template: "<div class='row'><div class='col s3'>{{ firstName }} {{ lastName }}</div><div class='col s3'>{{ email }}</div><div class='col s6'>{{ address }}</div></div>"
});

var vm = new Vue({
    el: '#app',
    data: {
        people: [],
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        todos: '',
        listIndex: 0
    },

    methods: {
        addUser: function () {
            this.people.push({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                address: this.address
            });
        },

        async getTodos() {
            axios.get('http://jsonplaceholder.typicode.com/todos')
                .then(function (response) {
                    vm.todos = response.data;
                })
                .catch(function (error) {
                    alert(error);
                });
        },

        cycleTodos: function() {
            vm.listIndex += 10;
        }
    },

    created() {
       this.getTodos();
    },

    filters: {
        paginate: function(value) {
            var index = value.id;
            if(index >= vm.listIndex && index <= (vm.listIndex + 10) ) {
                return value.title;
            }
        }
    }
});

