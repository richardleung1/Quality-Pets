const React = require("react");

class Show extends React.Component {
  render() {
    const { item } = this.props;
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
            <h2>{item.name}</h2>
            <img className='show-img' src={item.img} alt="" height={500}/>
            <br />
            <h3>Price: ${item.price}</h3>
            {(() => {
              if (item.stock === 0) {
                return <h3>Out of Stock</h3>;
              } else {
                return (
                  <div>
                    <h3>Stock: {item.stock}</h3>
                    <form>
                      <label htmlFor="stock">Buy</label>
                      <input
                        type="number"
                        name="buy"
                        className="form-control"
                        min={1}
                        max={item.stock}
                        value={1}
                      />
                      <input
                        type="submit"
                        value="Buy"
                        className="btn btn-secondary"
                      />
                    </form>
                  </div>
                );
              }
            })()}
            <br />
            <a href={`/items/${item.id}/edit`} className="btn btn-secondary">
              Edit item
            </a>
            <form action={`/items/${item.id}?_method=DELETE`} method="POST">
              <input
                type="submit"
                className="btn btn-danger"
                value="Delete item"
              />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Show;
