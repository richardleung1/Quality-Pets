const React = require("react");

class Show extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <html lang="en">
        <head>
          <title>{item.name}</title>
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
              <li>Size: {item.size}</li>
              {(() => {
                if (item.stock === 0) {
                  return <li>Stock: Out of Stock</li>;
                } else {
                  return <li>Stock: {item.stock}</li>;
                }
              })()}
            </ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Show;
