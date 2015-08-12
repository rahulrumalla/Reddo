var Feed = React.createClass({
	render: function(){
		return (
			<li className="">
				<a href={this.props.feedUrl}>{this.props.feedName}</a>
			</li>
			);
	}
});

var Feeds = React.createClass({
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
				<Feed feedUrl={feed.feedUrl} feedName={feed.feedName} />
				);
		});

		return (
			<div className="" id="feeds">
				<ul className="">
				<h4>Feeds</h4>
					{feeds}
				</ul>
			</div>
			);
	}
});