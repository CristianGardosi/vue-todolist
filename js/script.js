const apptodo = new Vue ({ 
    el: '#apptodo',

    data: {
        todos: [
            {   
                whattodo: 'Completare il CSS della nostra app',
                whentodo: 'Nel pomeriggio'
            },
            {
                whattodo: 'Portare fuori Buddy',
                whentodo: 'In mattinata'
            },
            {
                whattodo: 'Allenarsi al parco',
                whentodo: 'Entro le 22'
            },
            {
                whattodo: 'Cercare secondo schermo 21/9',
                whentodo: 'In settimana'
            },
        ],

        newTodo: '',

        newWhenTodo: ''
    },

    methods: {
        addTodo() {
            this.todos.push({
                whattodo: this.newTodo,
                whentodo: this.newWhenTodo
            })
            // Pulisco la form una volta inviata la mia task in modo da poterne inserire un'altra
            this.newTodo = '';
            this.newWhenTodo = '';
        }
    }

});