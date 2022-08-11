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
          <div>
            <h2>{item.name}</h2>
            <img src={item.img} alt="" />
            <br />
            <ul>
              <li>Price: ${item.price}</li>
              {(() => {
                if (item.stock === 0) {
                  return <li>Stock: Out of Stock</li>;
                } else {
                  return <li>Stock: {item.stock}</li>;
                }
              })()}
            </ul>
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
