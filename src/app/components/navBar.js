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