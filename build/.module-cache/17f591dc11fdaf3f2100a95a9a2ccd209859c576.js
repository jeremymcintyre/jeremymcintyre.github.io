

var ProjectsDisplay = React.createClass({displayName: "ProjectsDisplay",
  render: function() {
    var projects = this.props.projects;
    return (
      projects.map(function(project) {

          React.createElement("h4", null, project.title)

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