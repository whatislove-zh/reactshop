import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import Categories from "./components/categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Сірий стілець",
          img: "chair-grey.jpeg",
          desc: "lorem ipsum dolor loram",
          category: "chairs",
          price: "59.99",
        },
        {
          id: 2,
          title: "Білий стілець",
          img: "chair-white.jpeg",
          desc: "lorem ipsum dolor loram",
          category: "chairs",
          price: "59.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "sofa.jpeg",
          desc: "lorem ipsum dolor loram",
          category: "sofa",
          price: "149.99",
        },
        {
          id: 4,
          title: "Стіл",
          img: "table.webp",
          desc: "lorem ipsum dolor loram",
          category: "tables",
          price: "149.99",
        },
        {
          id: 5,
          title: "Лампа",
          img: "wall-light.jpeg",
          desc: "lorem ipsum dolor loram",
          category: "light",
          price: "49.99",
        },
      ],
    };
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category){
    if (category === "all"){
      this.setState({
        currentItems: this.state.items
      })
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
