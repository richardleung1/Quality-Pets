const React = require("react");

class Animal extends React.Component {
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
          <ul className="nav justify-content-center">
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
          <div>
            <h1>{items[0].animal} Categories</h1>
            <ul>
              {items.map((item, index) => {
                return (
                  <li>
                    <br />
                    <a
                      href={`/${item.animal}/${item.category}`}
                      className="btn btn-primary"
                    >
                      {item.category}
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
