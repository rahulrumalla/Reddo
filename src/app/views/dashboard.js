var DashBoard = React.createClass({
	render: function(){
		return (
			<div>
				<NavBar />
				<WelcomeBanner />
				<div 	className="container">
					<div className="row">
						<div className="col-md-2">
							<Feeds url="../feeds.json" />
							<hr />
							<Trends url="../trends.json" />
						</div>
						<QuestionsFeed url="../questions.json" className="col-md-8"/>	
					</div>
				</div>
			</div>
			);
	}
});

