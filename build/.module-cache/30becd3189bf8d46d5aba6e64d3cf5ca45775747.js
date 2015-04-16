var Project = React.createClass({displayName: "Project",
  render: function() {
    var data = this.props.data;
    return (
      React.createElement("div", {class: "project"}, 
        React.createElement("img", {src: data.src, alt: data.alt}), 
        React.createElement("h4", null, data.title), 
        React.createElement("p", null, data.description, React.createElement("br", null), data.tech)
      )
    )
  }
})

var ProjectsDisplay = React.createClass({displayName: "ProjectsDisplay",
  render: function() {
    var projects = this.props.projects;
    return (
      projects.map(function(project) {
        return React.createElement(Project, {data: project})
      })
    )
  }
})

var projectList = [
  {img: 'img/transaction-mappr-screen.png',
  alt: "screenshot of TransactionMappr",
  title: "TransactionMappr",
  description: "Dynamically display relationships between users' locations, transaction types/totals, and date",
  tech: 'Rails, React, jQuery, and Sass'}
]

React.render(
  React.createElement(ProjectsDisplay, {projects: projectList}),
  document.getElementById('hello')
);