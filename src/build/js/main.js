var Feed = React.createClass({displayName: "Feed",
	render: function(){
		return (
			React.createElement("li", {className: ""}, 
				React.createElement("a", {href: this.props.feedUrl}, this.props.feedName)
			)
			);
	}
});

var Feeds = React.createClass({displayName: "Feeds",
	getFeeds: function(){
		$.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	},
	getInitialState: function(){
		return { data: [] };
	},
	componentDidMount: function(){
		this.getFeeds();
	},
	render: function(){
		var feeds = this.state.data.map(function(feed, index){
			return (
				React.createElement(Feed, {feedUrl: feed.feedUrl, feedName: feed.feedName})
				);
		});

		return (
			React.createElement("div", {className: "", id: "feeds"}, 
				React.createElement("ul", {className: ""}, 
				React.createElement("h4", null, "Feeds"), 
					feeds
				)
			)
			);
	}
});
var NavBar = React.createClass({displayName: "NavBar",
    render: function() {
      return (
        React.createElement("nav", {className: "navbar navbar-default navbar-fixed-top"}, 
          React.createElement("div", {className: "container"}, 
            React.createElement("a", {className: "navbar-brand", href: "#"}, "Reddo"), 
            React.createElement("form", {className: "navbar-form navbar-left", role: "search"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("input", {type: "text", className: "form-control", placeholder: "Search"})
              )
            ), 
            React.createElement("ul", {id: "navActionBar", className: "nav navbar-nav"}, 
               React.createElement("li", {className: "active"}, React.createElement("a", null, React.createElement("span", {className: "glyphicon glyphicon-home", "aria-hidden": "true"}, " "), "Home")), 
               React.createElement("li", null, React.createElement("a", null, React.createElement("span", {className: "glyphicon glyphicon-question-sign"}, " "), "Ask")), 
               React.createElement("li", null, React.createElement("a", null, React.createElement("span", {className: "glyphicon glyphicon-bell"}, " "), "Notifications")), 
               React.createElement("li", null, React.createElement("a", null, React.createElement("span", {className: "glyphicon glyphicon-user"}, " "), "Profile"))
            )
          )
        )
      );
    }
  }
);
var Question = React.createClass({displayName: "Question",
	render: function() {
		return (
			React.createElement("div", {className: "media"}, 
			  React.createElement("div", {className: "media-left media-middle"}, 
			    React.createElement("a", {href: "#"}, 
			      React.createElement("img", {className: "media-object", src: "../img/reactjs.png"})
			    )
			  ), 
			  React.createElement("div", {className: "media-body"}, 
			    React.createElement("h4", {className: "media-heading"}, this.props.questionTitle), 
			    "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.", 
			  	React.createElement("div", {className: "actionStrip"}, 
				  	React.createElement("span", null, 
				  		React.createElement("a", {className: "btn btn-xs btn-primary"}, "Upvote | ", this.props.upVoteCount)
				  	), 
				  	React.createElement("span", null, 
				  		React.createElement("a", {href: ""}, "Downvote")
				  	), 
				  	React.createElement("span", null, 
				  		React.createElement("a", {href: ""}, "Comments ", React.createElement("span", {className: ""}, this.props.commentCount, "+"))
				  	), 
				  	React.createElement("span", null, 
				  		React.createElement("a", {href: ""}, "Share")
				  	)
				 )
			  ), 
			  React.createElement("hr", null)
			)
		);
	}
});

var QuestionsFeed = React.createClass({displayName: "QuestionsFeed",
	getQuestions: function() {
		$.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	},
	getInitialState: function() {
		return { data: [] };
	},
	componentDidMount: function(){
		this.getQuestions();
	},
	render: function(){
		var questions = this.state.data.map(function(question, index){
			return (
				React.createElement(Question, {userImageUrl: "", 
						upVoteCount: question.upVoteCount, 
						commentCount: question.commentCount, 
						questionTitle: question.question, 
						key: question.id})
				);
		});
		return (
			React.createElement("div", {id: "questionsFeed", className: "col-md-8"}, 
				questions
			)
			);
	}
});
var Trend = React.createClass({displayName: "Trend",
	render: function(){
		return (
			React.createElement("li", {className: ""}, 
				React.createElement("a", {href: this.props.url}, this.props.name)
			)
			);
	}
});

var Trends = React.createClass({displayName: "Trends",
	getTrends: function(){
		$.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	},
	getInitialState: function(){
		return { data: [] };
	},
	componentDidMount: function(){
		this.getTrends();
	},
	render: function(){
		var trends = this.state.data.map(function(trend, index){
			return (
				React.createElement(Feed, {feedUrl: trend.url, feedName: trend.name})
				);
		});

		return (
			React.createElement("div", {id: "trends"}, 
				React.createElement("ul", {className: ""}, 
				React.createElement("h4", null, "Trends"), 
					trends
				)
			)
			);
	}
});
var WelcomeBanner = React.createClass({displayName: "WelcomeBanner",
	render: function(){
		return (
		    React.createElement("div", {className: "jumbotron center-block text-center"}, 
		        React.createElement("h3", {className: ""}, "Welcome to REDDO"), 
		        React.createElement("p", null, 
		            "Ask anything.", 
		            React.createElement("br", null), " This is a Q and A site using ReactJS and NodeJS"
		        )
		    )
		);
	}
});
var DashBoard = React.createClass({displayName: "DashBoard",
	render: function(){
		return (
			React.createElement("div", null, 
				React.createElement(NavBar, null), 
				React.createElement(WelcomeBanner, null), 
				React.createElement("div", {	className: "container"}, 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-md-2"}, 
							React.createElement(Feeds, {url: "../feeds.json"}), 
							React.createElement("hr", null), 
							React.createElement(Trends, {url: "../trends.json"})
						), 
						React.createElement(QuestionsFeed, {url: "../questions.json", className: "col-md-8"})	
					)
				)
			)
			);
	}
});


//require('views/dashboard.jsx');

React.render(
  React.createElement(DashBoard, null),
  document.getElementById('application')
  );

/*
var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comments.push(comment);
    this.setState({data: comments}, function() {
      // `setState` accepts a callback. To avoid (improbable) race condition,
      // `we'll send the ajax request right after we optimistically set the new
      // `state.
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment, index) {
      return (
        // `key` is a React-specific concept and is not mandatory for the
        // purpose of this tutorial. if you're curious, see more here:
        // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        <Comment author={comment.author} key={index}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});


React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
*/
