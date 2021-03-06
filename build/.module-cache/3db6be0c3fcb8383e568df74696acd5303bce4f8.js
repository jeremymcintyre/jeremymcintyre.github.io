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

var ProjectColumn = React.createClass({displayName: "ProjectColumn",
  render: function() {
    var projects = this.props.projects;
    return (
      React.createElement("div", {className: this.props.classList}, 
        projects.map(function(project) {
          return React.createElement(Project, {key: project.id, data: project})
        })
      )
    );
  }
});

var ProjectDisplay = React.createClass({displayName: "ProjectDisplay",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("h1", null, React.createElement("span", {className: "glyphicon glyphicon-ok"}), " Projects"), 
        React.createElement("h2", null, React.createElement("small", null, "I currently enjoy building with Rails, PostgreSQL, ReactJS, and SCSS"))
      )
    )
  }
})

// make a ProjectDisplayColumn

var projectListColumn1 = [
  {
    id: 1,
    src: 'img/transaction-mappr-screen.png',
    alt: "screenshot of TransactionMappr",
    title: "TransactionMappr",
    description: "Dynamically display relationships between users' locations, transaction types/totals, and date",
    tech: 'Rails, React, jQuery, and Sass'
  },
  {
    id: 2,
    src: "img/hummingbird-screen.png",
    alt: "Screenshot of Hummingbird",
    title: "Hummingbird",
    description: "Schedule text messages for precision date/time delivery.",
    tech: "Rails, Ionic, Angular"
  }
];

var projectListColumn2 = [
  {
    id: 1,
    src: "img/northstar-screen.png",
    alt: "Screenshot of Northstar",
    title: "Northstar",
    description: "Develop a better sense of distance and direction. Instantly locate in relation to favorite landmarks.",
    tech: "Sinatra, Ruby, Javascript, Google Maps"
  }
];





React.render(
  React.createElement(ProjectDisplay, null, 
    React.createElement(ProjectColumn, {classList: "col-sm-6 col-md-4 col-md-offset-2", projects: projectList1}), 
    React.createElement(ProjectColumn, {classList: "col-sm-6 col-md-4", projects: projectList2})
  ),
  document.getElementById('projects')
);