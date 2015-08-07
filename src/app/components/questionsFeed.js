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
				<Question userImageUrl="" questionTitle={question.question} key={question.id}/>
				);
		});
		return (
			<div id="questionsFeed" className="col-md-8">
				{questions}
			</div>
			);
	}
});