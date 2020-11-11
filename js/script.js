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
            if (this.newTodo.trim() !== '' && this.newWhenTodo.trim() !== '') {
                this.todos.push(
                    {
                    whattodo: this.newTodo,
                    whentodo: this.newWhenTodo
                    }
                );
            }
            // Pulisco la form una volta inviata la mia task in modo da poterne inserire un'altra
            this.newTodo = '';
            this.newWhenTodo = '';
        },
        // Funzione per eliminare una task tramite il @click su un elemento HTML e basata sul suo indice all'interno dell'array con l'utilizzo della nuova funzionalità .splice
        // 
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            // Con questa sintassi splice elimina l'elemento associato al click, se non indicassi 1 li eliminerebbe tutti 
            this.todos.splice(todoIndex, 1);
        }
    }

});