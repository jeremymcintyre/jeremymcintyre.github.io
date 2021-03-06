var Project = React.createClass({displayName: "Project",
  render: function() {
    var data = this.props.data;
    return (
      React.createElement("a", {href: data.href}, 
        React.createElement("div", {className: "project"}, 
          React.createElement("img", {src: data.src, alt: data.alt}), 
          React.createElement("h4", null, data.title), 
          React.createElement("p", null, data.description, React.createElement("br", null), data.tech)
        )
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
  getInitialState: function() {
    return {showAll: true};
  },
  handleClick: function(event) {
    this.setState({showAll: !this.state.showAll});
  },
  render: function() {
    if (this.state.showAll) {
      return(
        React.createElement("div", {onClick: this.handleClick}, 
          React.createElement("h1", null, React.createElement("span", {className: "glyphicon glyphicon-ok"}), " Projects"), 
          React.createElement("h2", null, React.createElement("small", null, "I currently enjoy building with Rails, PostgreSQL, ReactJS, and SCSS")), 
          React.createElement(ProjectColumn, {classList: "col-sm-6 col-md-4 col-md-offset-2", projects: projectColumn1}), 
          React.createElement(ProjectColumn, {classList: "col-sm-6 col-md-4", projects: projectColumn2})
        )
      )
    } else {
      return React.createElement("h1", {onClick: this.handleClick}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" + ' ' +
"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," + ' ' +
"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" + ' ' +
"consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" + ' ' +
"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" + ' ' +
"proident, sunt in culpa qui officia deserunt mollit anim id est laborum." + ' ' +

"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" + ' ' +
"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," + ' ' +
"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" + ' ' +
"consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" + ' ' +
"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" + ' ' +
"proident, sunt in culpa qui officia deserunt mollit anim id est laborum." + ' ' +

"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" + ' ' +
"tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," + ' ' +
"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" + ' ' +
"consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse" + ' ' +
"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" + ' ' +
"proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")
    }
  }
})

// make a ProjectDisplayColumn

var projectColumn1 = [
  {
    id: 1,
    src: 'img/transaction-mappr-screen.png',
    href: 'https://stark-shelf-3141.herokuapp.com',
    alt: "screenshot of TransactionMappr",
    title: "TransactionMappr",
    description: "Dynamically display relationships between users' locations, transaction types/totals, and date. (March)",
    tech: 'Rails, React, jQuery, and Sass'
  },
  {
    id: 2,
    src: "img/hummingbird-screen.png",
    alt: "Screenshot of Hummingbird",
    title: "Hummingbird",
    description: "Schedule text messages for precision date/time delivery. (February)",
    tech: "Rails, Ionic, Angular"
  }
];

var projectColumn2 = [
  {
    id: 3,
    src: "img/northstar-screen.png",
    href: 'https://northstar-app.herokuapp.com',
    alt: "Screenshot of Northstar",
    title: "Northstar",
    description: "Develop a better sense of distance and direction. Instantly locate in relation to favorite landmarks. (January)",
    tech: "Sinatra, Ruby, Javascript, Google Maps"
  },
  {
    id: 4,
    src: "img/coming-soon.png",
    alt: "Coming Soon!",
    title: "Traintracks",
    description: "Planning and tracking tool for personal race training. (New project)",
    tech: "Rails, React, Postgres, Sass"
  }
];





React.render(
  React.createElement(ProjectDisplay, null),
  document.getElementById('projects')
);