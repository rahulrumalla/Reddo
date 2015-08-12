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
            <ul id="navActionBar" className="nav navbar-nav">
               <li className="active"><a><span className="glyphicon glyphicon-home" aria-hidden="true">&nbsp;</span>Home</a></li>
               <li><a><span className="glyphicon glyphicon-question-sign">&nbsp;</span>Ask</a></li>
               <li><a><span className="glyphicon glyphicon-bell">&nbsp;</span>Notifications</a></li>
               <li><a><span className="glyphicon glyphicon-user">&nbsp;</span>Profile</a></li>
            </ul>
          </div>
        </nav>
      );
    }
  }
);