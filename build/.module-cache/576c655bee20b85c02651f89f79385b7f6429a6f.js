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
      return React.createElement("div", {onClick: this.handleClick}, 
      React.createElement("h1", null, "Javascript is Great"), 
React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptates, nemo error beatae molestiae deserunt voluptatibus impedit, labore est rerum atque nisi maiores doloribus at distinctio veritatis totam numquam doloremque?"), 
React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nemo assumenda doloremque cumque voluptatum necessitatibus debitis recusandae, id velit natus eum, nesciunt a distinctio amet in eveniet sunt nobis molestiae dolores dolorem! Nemo, repudiandae consequatur, autem minus obcaecati rem odit vel reprehenderit eveniet reiciendis, quasi, eos quas itaque. Odio, est reiciendis velit? Officiis reprehenderit deserunt, at obcaecati nobis aliquid saepe atque nulla harum. Velit ratione illo eveniet deleniti veniam ipsum voluptatem, dolore culpa perspiciatis, ut omnis minima voluptatum architecto repellat ea rem, consequuntur? Molestias cumque sapiente suscipit eaque aliquid recusandae qui maiores asperiores magni magnam a ea ipsam ducimus veritatis reprehenderit doloribus similique praesentium iusto, sint molestiae. Voluptatem consequatur, praesentium tempore eos dicta laudantium asperiores mollitia expedita sunt inventore ad. Perferendis blanditiis sit nobis, qui aspernatur voluptatibus placeat dolorum optio amet aperiam rerum itaque, aut sequi facilis harum similique et voluptatum, velit veritatis maxime sunt deleniti. Doloribus vero veritatis sequi quibusdam quod voluptates repellendus quis tempore et magni eligendi explicabo nisi eum enim, odio, eos facilis, ipsam? Molestiae, blanditiis maiores! Cupiditate modi at rerum, officiis in facere ut tenetur, unde maiores ullam, nemo, repellendus sapiente nostrum ratione. Dolorum earum ex beatae. Velit, iusto nisi assumenda delectus quae ea, esse magni earum? Natus qui autem nisi at dolore! Distinctio impedit, quos mollitia, sapiente accusantium natus maiores debitis deserunt ut eos magnam consectetur. Sequi aut perferendis eius, molestiae exercitationem adipisci, eligendi commodi rem tempora quae voluptatum perspiciatis dolores excepturi ipsa nam necessitatibus doloribus rerum eum maxime tenetur explicabo a nobis repellendus! Modi deserunt excepturi, porro iusto voluptates, expedita impedit voluptas maxime ipsam necessitatibus beatae mollitia officia libero distinctio inventore. Explicabo rerum voluptates placeat. Molestiae pariatur sunt cupiditate eum voluptatum id laborum ad expedita, obcaecati aliquid. Soluta rerum, cupiditate sequi quae dolores, voluptas laudantium beatae enim vitae odit voluptatibus autem amet, dolorum. Praesentium veniam earum deleniti nisi voluptatum?")
      )
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