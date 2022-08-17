const React = require("react");

class Animal extends React.Component {
  render() {
    const { animal } = this.props;
    const categories = ["Food", "Treats", "Toys"];
    return (
      <html lang="en">
        <head>
          <title>Quality Pets</title>
          <link rel="stylesheet" href="./css/style.css" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
            crossOrigin="anonymous"
          ></link>
        </head>
        <body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              Quality Pets
            </a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/items">
                  All Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Cats">
                  Cats
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Dogs">
                  Dogs
                </a>
              </li>
            </ul>
          </nav>
          <div>
            
            <h1>Categories</h1>
            <ul>
              {categories.map((category, index) => {
                return (
                  <li>
                    <br />
                    <a
                      href={`${animal}/${category}`}
                      className="btn btn-primary"
                    >
                      {category}
                    </a>
                    <br />
                  </li>
                );
              })}
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Animal;
