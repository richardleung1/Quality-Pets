const React = require("react");

class Home extends React.Component {
  render() {
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
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
            crossOrigin="anonymous"
          ></script>
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
            <h1>Welcome to Quality Pets</h1>
            <a href="/Dogs">
              <img
                className="home"
                src="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn"
                alt="Dogs"
                width="300"
              />
            </a>
            <a href="/Cats">
              <img
                className="home"
                src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                alt="Cats"
                width="300"
              />
            </a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;
