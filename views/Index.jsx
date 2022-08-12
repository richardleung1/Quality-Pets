const React = require("react");

class Index extends React.Component {
  render() {
    const { items } = this.props;
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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
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
            <h1>All Products</h1>
            <ul>
              {items.map((item, index) => {
                return (
                  <li>
                    <a href={`/items/${item.id}`} className="btn btn-primary">
                      {item.name}
                    </a>
                    <br />
                    <a href={`/items/${item.id}`}>
                      <img src={`${item.img}`} alt="" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <a href="/items/new" className="btn btn-success">
              Add a New Item
            </a>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Index;
