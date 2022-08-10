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
          <div>
            <h1>Edit Item page</h1>
            <form action={`/items/${item.id}?_method=PUT`} method="POST">
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
