var ToDo = React.createClass({displayName: "ToDo",
    render: function() {
        return(
            React.createElement("div", {className: "todo"}, 
                React.createElement("h3", null, this.props.children), 
                React.createElement("button", {className: "btn btn-primary glyphicon glyphicon-pencil", onClick: this.edit}), 
                React.createElement("button", {className: "btn btn-warning glyphicon glyphicon-trash", onClick: this.delete})
            )
        )
        
        
    },
    edit: function(){
        console.log("Editing task");

    },
    delete: function(){
        console.log("Task Deleted");

    }
});
React.render(React.createElement(ToDo, null, "Some Random Task"), document.getElementById('react-component'));