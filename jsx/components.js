var Project = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      <a href={data.href}>
        <div className="project">
          <img src={data.src} alt={data.alt} />
          <h4>{data.title}</h4>
          <p>{data.description}<br/>{data.tech}</p>
        </div>
      </a>
    );
  }
});

var ProjectColumn = React.createClass({
  render: function() {
    var projects = this.props.projects;
    return (
      <div className={this.props.classList}>
        {projects.map(function(project) {
          return <Project key={project.id} data={project}/>
        })}
      </div>
    );
  }
});

var ProjectDisplay = React.createClass({
  render: function() {
    return(
      <div>
        <h1><span className="glyphicon glyphicon-ok"></span> Projects</h1>
        <h2><small>I currently enjoy building with Rails, PostgreSQL, ReactJS, and SCSS</small></h2>
        <ProjectColumn classList="col-sm-6 col-md-4 col-md-offset-2" projects={projectColumn1} />
        <ProjectColumn classList="col-sm-6 col-md-4" projects={projectColumn2} />
      </div>
    )
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
  <ProjectDisplay />,
  document.getElementById('projects')
);