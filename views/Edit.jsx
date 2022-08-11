const React = require("react");

class Edit extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <html lang="en">
        <head>
          <title>Edit Item</title>
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
            <h1>Edit Item page</h1>
            <form action={`/items/${item.id}?_method=PUT`} method="POST">
              <label for="name">Name:</label>
              <input type="text" name="name" className="form-control" />
              <label for="img">Img:</label>
              <input type="text" name="img" className="form-control" />
              <label for="price">Price:</label>
              <input
                type="number"
                name="price"
                className="form-control"
                step="0.01"
                min={0}
              />
              <label for="stock">Stock:</label>
              <input
                type="number"
                name="stock"
                className="form-control"
                min={0}
              />
              <label for="category">Category:</label>
              <select className="form-control" name="category">
                <option>Dry Food</option>
                <option>Wet Food</option>
              </select>
              <label for="animal">Animal:</label>
              <select className="form-control" name="animal">
                <option>Cats</option>
                <option>Dogs</option>
              </select>
              <input
                type="submit"
                name=""
                value="Edit Item"
                className="btn btn-secondary"
              />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Edit;
