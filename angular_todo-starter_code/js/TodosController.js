angular
    .module("todoApp")
    .controller("TodosController", TodosController);

    function TodosController(){
        var self = this;

/*=================RS
List of Pre Set Tasks
RS=================*/

       self.todoList = [
           {task: "Build an awesome todo list", done: false},
           {task: "Get super good at Angular", done: false},
           {task: "Party on code", done: false},
           {task: "Tackle the bonus challenges for this lesson", done: false},
           {task: "Take a nap", done: false}
       ];

/*===============RS
List of Connections
RS===============*/

       self.text; //Bound to Input Box for new todo
       self.addTodo = addTodo;
       self.delTodo = delTodo;
       self.completedTodos = completedTodos;
       self.remainingTodos = remainingTodos;


/*==========================RS
Function for Adding ToDo Tasks
RS==========================*/

       function addTodo() {
       	self.todoList.unshift({task: self.text, done:false});
       	self.text = null;

       }

/*========================RS
Function for Deleting a Task
RS========================*/

       function delTodo($index) {
       	self.todoList.splice($index, 1);
       }

/*=====================================RS
Counter for Completed and Reminaing Tasks
RS=====================================*/

  // function compRemTodo() {
  //   var compCount = 0;
  //   var remCount = 0;
  //   for (var i=0 ; i < self.todoList.length; i++) {
  //     if (self.todoList[i].done) {
  //       compCount++;
  //       return compCount
  //     }
  //     else if (self.todoList[i].done === false) {
  //       remCount++;
  //       return remCount
  //     }
  //   }
  // }





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