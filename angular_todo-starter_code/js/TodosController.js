angular
    .module("todoApp")
    .controller("TodosController", TodosController);

    function TodosController(){
        var self = this;


       self.todoList = [
           {task: "Build an awesome todo list", done: false},
           {task: "Get super good at Angular", done: false},
           {task: "Party on code", done: false},
           {task: "Tackle the bonus challenges for this lesson", done: false},
           {task: "Take a nap", done: false}
       ];

       self.text; //Bound to Input Box for new todo
       self.addTodo = addTodo;
       self.delTodo = delTodo;
       self.completedTodos = completedTodos;
       self.remainingTodos = remainingTodos;

       function addTodo() {
       	//var newTodo = {task: self.text, done: false};
       	//self.todoList.push(newTodo);
       	       	       		// OR

       	self.todoList.push({task: self.text, done:false});
       	self.text = null;

       }

       function delTodo($index) {
       	self.todoList.splice($index, 1);
       }


       function completedTodos(){
        var count = 0;
        for(var i = 0; i < self.todoList.length; i++){
            if(self.todoList[i].done){
                count++;
            	}
        	}
        	return count;
    	}

    	function remainingTodos(){
    	        var count = 0;
    	        for(var i = 0; i < self.todoList.length; i++){
    	            if(self.todoList[i].done === false){
    	                count++;
    	            }
    	        }
    	    return count;
    	}

   	}
    