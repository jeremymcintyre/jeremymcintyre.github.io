

var ProjectsDisplay = React.createClass({displayName: "ProjectsDisplay",
  render: function() {
    var projects = this.props.projects;
    debugger;
    console.log(projects);
    return (
      projects.map(function(project) {
        return (
          React.createElement("div", {className: "project"}, 
            React.createElement("h4", null, "HIII")
          )
        )
      })
    );
  }
});

var projectList = [{img: 'img/transaction-mappr-screen.png',
  alt: "screenshot of TransactionMappr",
  title: "TransactionMappr",
  description: "Dynamically display relationships between users' locations, transaction types/totals, and date",
  tech: 'Rails, React, jQuery, and Sass'}];

React.render(
  React.createElement(ProjectsDisplay, {projects: projectList}),
  document.getElementById('hello')
);