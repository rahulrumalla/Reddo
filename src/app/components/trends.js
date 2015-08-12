var Trend = React.createClass({
	render: function(){
		return (
			<li className="">
				<a href={this.props.url}>{this.props.name}</a>
			</li>
			);
	}
});

var Trends = React.createClass({
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
				<Feed feedUrl={trend.url} feedName={trend.name} />
				);
		});

		return (
			<div id="trends">
				<ul className="">
				<h4>Trends</h4>
					{trends}
				</ul>
			</div>
			);
	}
});