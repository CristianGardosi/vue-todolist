const apptodo = new Vue ({ 
    el: '#apptodo',

    data: {

        newTodo: '',
        newWhenTodo: '',
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


    },

    methods: {
        addTodo() {
            this.todos.push({
                whattodo: this.newTodo,
                whentodo: this.newWhenTodo
            })
        }
    }

});