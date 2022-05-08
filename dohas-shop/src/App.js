import "./App.css";
import products from "./products.js";

//how to display data (render), needs to return html, dont play with data here!!!!
//its a component
function Product(props) {
  return (
    <div className="Product">
      <p>{props.name}</p>
      <img src={props.image}></img>
      <p>{props.price}</p>
    </div>
  );
}

function App() {
  //make data an array of components so they can be rendered, add them to the Product classname
  const newproducts = products.map((element) => (
    <Product name={element.name} image={element.image} price={element.price} />
  ));
  return (
    <div className="App">
      <h1>Heart Flower</h1>
      <p>buy flowers for your loved ones!</p>
      <img
        src="https://media.istockphoto.com/photos/flower-shop-picture-id514375117"
        alt=""
      ></img>
      {newproducts}
    </div>
  );
}

export default App;
