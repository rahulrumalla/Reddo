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

