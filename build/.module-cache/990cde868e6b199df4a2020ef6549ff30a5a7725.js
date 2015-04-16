var Project = React.createClass({displayName: "Project",
  render: function() {
    var d = this.props.data;
    return (
      React.createElement("div", {className: "project"}, 
        React.createElement("img", {src: d.src, alt: d.alt}), 
        React.createElement("h4", null, d.title), 
        React.createElement("p", null, d.description, React.createElement("br", null), d.tech)
      )
    );
  }
});

var ProjectsDisplay = React.createClass({displayName: "ProjectsDisplay",
  render: function() {
    var projects = this.props.projects;
    console.log(projects);
    return (
      React.createElement("div", null, 
        projects.map(function(project) {
          return (React.createElement(Project, {data: project}))
        })
      )
    );
  }
});

var projectList = [
  {
    src: 'img/transaction-mappr-screen.png',
    alt: "screenshot of TransactionMappr",
    title: "TransactionMappr",
    description: "Dynamically display relationships between users' locations, transaction types/totals, and date",
    tech: 'Rails, React, jQuery, and Sass'
  },
  {
    src: "img/hummingbird-screen.png",
    alt: "Screenshot of Hummingbird",
    title: "Hummingbird",
    description: ""

  }
  ];

React.render(
  React.createElement(ProjectsDisplay, {projects: projectList}),
  document.getElementById('hello')
);