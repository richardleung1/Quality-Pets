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
            crossorigin="anonymous"
          ></link>
        </head>
        <body>
          <div>
            <h1>New Item page</h1>
            <form action="/items" method="POST">
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
              <select class="form-control" name="category">
                <option>Dry Food</option>
                <option>Wet Food</option>
              </select>
              <label for="animal">Animal:</label>
              <select class="form-control" name="animal">
                <option>Cats</option>
                <option>Dogs</option>
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
