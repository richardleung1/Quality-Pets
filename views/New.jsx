const React = require("react");

class New extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>New Item</title>
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
              Name: <input type="text" name="name" />
              <br />
              Img: <input type="text" name="img" />
              <br />
              Price: <input type="number" name="price" />
              <br />
              Stock: <input type="number" name="stock" />
              <br />
              Size: <input type="text" name="size" />
              <br />
              Category: <input type="text" name="category" />
              <br />
              Animal: <input type="text" name="img" />
              <br />
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
