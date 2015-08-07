
var NavBar = React.createClass({
    render: function() {
      return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">Reddo</a>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
            </form>
          </div>
        </nav>
      );
    }
  }
);
var Question = React.createClass({
	render: function() {
		return (
			<div className="media">
			  <div className="media-left media-middle">
			    <a href="#">
			      <img className="media-object" src="../build/img/reactjs.png" />
			    </a>
			  </div>
			  <div className="media-body">
			    <h4 className="media-heading">{this.props.questionTitle}</h4>
			    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
			  </div>
			  <hr />
			</div>
		);
	}
});

var QuestionsFeed = React.createClass({
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
				<Question userImageUrl="" questionTitle={question.question} />
				);
		});
		return (
			<div id="questionsFeed" className="col-md-8">
				{questions}
			</div>
			);
	}
});

var WelcomeBanner = React.createClass({
	render: function(){
		return (
		    <div className="jumbotron center-block text-center">
		        <h3 className="">Welcome to REDDO</h3>
		        <p>
		            Ask anything.
		            <br/> This is a Q and A site using ReactJS and NodeJS
		        </p>
		    </div>
		);
	}
});
var DashBoard = React.createClass({
	render: function(){
		return (
			<div>
				<NavBar />
				<WelcomeBanner />
				<QuestionsFeed url="../questions.json" />
			</div>
			);
	}
});


//require('views/dashboard.jsx');

React.render(
  <DashBoard />,
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
