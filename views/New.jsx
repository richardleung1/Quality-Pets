const React = require("react");

class New extends React.Component {
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
            <h1>New Item page</h1>
            <form action="/items" method="POST">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" className="form-control" />
              <label htmlFor="img">Img:</label>
              <input type="text" name="img" className="form-control" />
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                name="price"
                className="form-control"
                step="0.01"
                min={0}
              />
              <label htmlFor="stock">Stock:</label>
              <input
                type="number"
                name="stock"
                className="form-control"
                min={0}
                value={0}
              />
              <label htmlFor="animal">Animal:</label>
              <select className="form-control" name="animal">
                <option>Cats</option>
                <option>Dogs</option>
              </select>
              <label htmlFor="category">Category:</label>
              <select className="form-control" name="category">
                <option>Food</option>
                <option>Treats</option>
                <option>Toys</option>
              </select>
              <input
                type="submit"
                name=""
                value="Create Item"
                className="btn btn-success"
              />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = New;
