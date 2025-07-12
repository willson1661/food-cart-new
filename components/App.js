const { useState } = React;

// Data
const ALL = [
  {
    title: "Bubble & Squeak",
    img: "https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg",
    id: "52885",
    price: "1000",
    category: "Vegetarian",
  },
  {
    title: "Apam balik",
    img: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
    id: "53049",
    price: "1260",
    category: "Dessert",
  },
  {
    title: "Apple & Blackberry Crumble",
    img: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
    id: "52893",
    price: "1250",
    category: "Dessert",
  },
  {
    title: "Apple Frangipan Tart",
    img: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
    id: "52768",
    price: "1050",
    category: "Dessert",
  },
  {
    title: "Baingan Bharta",
    img: "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
    id: "52807",
    price: "1100",
    category: "Vegetarian",
  },
  {
    title: "Baked salmon with fennel & tomatoes",
    img: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    id: "52959",
    price: "1200",
    category: "Other",
  },
  {
    title: "Bakewell tart",
    img: "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
    id: "52767",
    price: "1300",
    category: "Dessert",
  },
  {
    title: "Banana Pancakes",
    img: "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
    id: "52855",
    price: "1400",
    category: "Dessert",
  },
  {
    title: "Bean & Sausage Hotpot",
    img: "https://www.themealdb.com/images/media/meals/vxuyrx1511302687.jpg",
    id: "52848",
    price: "1500",
    category: "Meat",
  },
  {
    title: "Beef Banh Mi Bowls with Sriracha",
    img: "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
    id: "52997",
    price: "1600",
    category: "Meat",
  },
  {
    title: "Bistek",
    img: "https://www.themealdb.com/images/media/meals/4pqimk1683207418.jpg",
    id: "53069",
    price: "1700",
    category: "Meat",
  },
  {
    title: "Boulangère Potatoes",
    img: "https://www.themealdb.com/images/media/meals/qywups1511796761.jpg",
    id: "52914",
    price: "1800",
    category: "Vegetarian",
  },
  {
    title: "Bread and Butter Pudding",
    img: "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
    id: "52792",
    price: "1900",
    category: "Dessert",
  },
  {
    title: "Bread omelette",
    img: "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
    id: "53076",
    price: "2000",
    category: "Egg",
  },
  {
    title: "Breakfast Potatoes",
    img: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
    id: "52965",
    price: "900",
    category: "Vegetarian",
  },
  {
    title: "Brie wrapped in prosciutto & brioche",
    img: "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
    id: "52913",
    price: "1100",
    category: "Other",
  },
  {
    title: "Broccoli & Stilton soup",
    img: "https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg",
    id: "52842",
    price: "950",
    category: "Vegetarian",
  },
  {
    title: "Budino Di Ricotta",
    img: "https://www.themealdb.com/images/media/meals/1549542877.jpg",
    id: "52961",
    price: "1200",
    category: "Dessert",
  },
  {
    title: "Burek",
    img: "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
    id: "53060",
    price: "1300",
    category: "Meat",
  },
  {
    title: "Callaloo Jamaican Style",
    img: "https://www.themealdb.com/images/media/meals/ussyxw1515364536.jpg",
    id: "52939",
    price: "1000",
    category: "Vegetarian",
  },
  {
    title: "Canadian Butter Tarts",
    img: "https://www.themealdb.com/images/media/meals/wpputp1511812960.jpg",
    id: "52923",
    price: "1400",
    category: "Dessert",
  },
  {
    title: "Cashew Ghoriba Biscuits",
    img: "https://www.themealdb.com/images/media/meals/t3r3ka1560461972.jpg",
    id: "52976",
    price: "1100",
    category: "Dessert",
  },
  {
    title: "Chicken Congee",
    img: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
    id: "52956",
    price: "1500",
    category: "Chicken",
  },
  {
    title: "Chicken Couscous",
    img: "https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg",
    id: "52850",
    price: "1600",
    category: "Chicken",
  },
  {
    title: "Chicken Katsu Curry",
    img: "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
    id: "52820",
    price: "1700",
    category: "Chicken",
  },
  {
    title: "Egg Fried Rice",
    img: "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
    id: "52955",
    price: "1200",
    category: "Egg",
  },
];

// Components
const Navbar = ({
  setCurrentPage,
  setIsMobileMenuOpen,
  isMobileMenuOpen,
  cartItems,
  setIsCartOpen,
  setIsChatOpen,
  setSearchQuery,
}) => (
  React.createElement('nav', {
    className: "bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center fixed w-full top-0 z-20 font-inter"
  },
    React.createElement('div', {
      className: "flex justify-between items-center w-full md:w-auto"
    },
      React.createElement('div', {
        className: "text-2xl font-bold text-orange-600"
      }, "Foody Zone"),
      React.createElement('div', {
        className: "md:hidden flex items-center"
      },
        React.createElement('div', {
          className: "relative mr-4"
        },
          React.createElement('button', {
            onClick: () => setIsCartOpen(true),
            className: "text-gray-700 hover:text-orange-600 cursor-pointer transition duration-300 ease-in-out focus:outline-none"
          },
            React.createElement('svg', {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            },
              React.createElement('path', {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              })
            )
          ),
          cartItems.length > 0 && React.createElement('span', {
            className: "absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full px-1"
          }, cartItems.length)
        ),
        React.createElement('button', {
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          className: "text-gray-700 focus:outline-none"
        },
          React.createElement('svg', {
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          },
            React.createElement('path', {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M4 6h16M4 12h16m-7 6h7"
            })
          )
        )
      )
    ),
    React.createElement('div', {
      className: "hidden md:flex space-x-6 items-center"
    },
      React.createElement('button', {
        onClick: () => setCurrentPage("home"),
        className: "text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out"
      }, "Home"),
      React.createElement('button', {
        onClick: () => setCurrentPage("profile"),
        className: "text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out"
      }, "Profile"),
      React.createElement('button', {
        onClick: () => setCurrentPage("about"),
        className: "text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out"
      }, "About"),
      React.createElement('button', {
        onClick: () => setIsChatOpen(true),
        className: "text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out"
      }, "Chat"),
      React.createElement('div', {
        className: "relative"
      },
        React.createElement('button', {
          onClick: () => setIsCartOpen(true),
          className: "text-gray-700 hover:text-orange-600 cursor-pointer transition duration-300 ease-in-out focus:outline-none"
        },
          React.createElement('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          },
            React.createElement('path', {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            })
          )
        ),
        cartItems.length > 0 && React.createElement('span', {
          className: "absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full px-1"
        }, cartItems.length)
      )
    ),
    React.createElement('div', {
      className: "w-full mt-4 md:mt-0 md:w-64"
    },
      React.createElement('input', {
        type: "text",
        placeholder: "Search dishes...",
        onChange: (e) => setSearchQuery(e.target.value),
        className: "w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      })
    ),
    isMobileMenuOpen && React.createElement('div', {
      className: "md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 animate-slide-down"
    },
      React.createElement('button', {
        onClick: () => {
          setCurrentPage("home");
          setIsMobileMenuOpen(false);
        },
        className: "text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out w-full text-center py-2"
      }, "Home"),
      React.createElement('button', {
        onClick: () => {
          setCurrentPage("profile");
          setIsMobileMenuOpen(false);
        },
        className: "text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out w-full text-center py-2"
      }, "Profile"),
      React.createElement('button', {
        onClick: () => {
          setCurrentPage("about");
          setIsMobileMenuOpen(false);
        },
        className: "text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out w-full text-center py-2"
      }, "About"),
      React.createElement('button', {
        onClick: () => {
          setIsChatOpen(true);
          setIsMobileMenuOpen(false);
        },
        className: "text-gray-700 hover:text-orange-600 transition duration-300 ease-in-out w-full text-center py-2"
      }, "Chat")
    )
  )
);

const HeroSection = ({ setCurrentPage }) => (
  React.createElement('section', {
    className: "relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 px-4 md:px-8 flex items-center justify-center min-h-screen-minus-nav"
  },
    React.createElement('div', {
      className: "container mx-auto text-center z-10"
    },
      React.createElement('h1', {
        className: "text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up"
      }, "Delicious Food, Delivered Fast!"),
      React.createElement('p', {
        className: "text-lg md:text-xl mb-8 animate-fade-in-up animation-delay-300"
      }, "Order your favorite meals from the best restaurants near you."),
      React.createElement('button', {
        onClick: () => setCurrentPage('home'),
        className: "bg-white text-orange-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in-up animation-delay-600"
      }, "Order Now")
    ),
    React.createElement('div', {
      className: "absolute inset-0 overflow-hidden"
    },
      React.createElement('div', {
        className: "absolute w-64 h-64 bg-white opacity-10 rounded-full -top-16 -left-16 animate-pulse-slow"
      }),
      React.createElement('div', {
        className: "absolute w-96 h-96 bg-white opacity-10 rounded-full -bottom-32 -right-32 animate-pulse-slow animation-delay-500"
      })
    )
  )
);

const FoodCard = ({ item, onAddToCart }) => (
  React.createElement('div', {
    className: "bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl"
  },
    React.createElement('img', {
      src: item.img,
      alt: item.title,
      className: "w-full h-48 object-cover rounded-t-xl",
      onError: (e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/FF7043/FFFFFF?text=No+Image`; }
    }),
    React.createElement('div', {
      className: "p-4"
    },
      React.createElement('h3', {
        className: "text-xl font-semibold text-gray-800 mb-2"
      }, item.title),
      item.price && React.createElement('p', {
        className: "text-orange-600 font-bold mb-4"
      }, `RS. ${item.price}`),
      React.createElement('button', {
        onClick: () => onAddToCart(item),
        className: "w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-95"
      }, "Add to Cart")
    )
  )
);

const HomePage = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  addToCart,
  setCurrentPage,
  searchQuery,
}) => {
  const [apiItems, setApiItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Map app categories to TheMealDB categories
  const categoryMap = {
    Chicken: "Chicken",
    Meat: "Beef",
    Egg: "Miscellaneous",
    Vegetarian: "Vegetarian",
    Dessert: "Dessert",
  };

  React.useEffect(() => {
    if (selectedCategory !== "All") {
      setIsLoading(true);
      const apiCategory = categoryMap[selectedCategory] || "Miscellaneous";
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${apiCategory}`
      )
        .then((response) => response.json())
        .then((data) => {
          const fetchedItems = data.meals
            ? data.meals.map((meal) => ({
                title: meal.strMeal,
                img: meal.strMealThumb,
                id: meal.idMeal,
                price: (Math.random() * 1000 + 500).toFixed(0),
                category: selectedCategory,
              }))
            : [];
          setApiItems(fetchedItems);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching API data:", error);
          setApiItems([]);
          setIsLoading(false);
        });
    } else {
      setApiItems([]);
    }
  }, [selectedCategory]);

  const filteredFoodItems =
    selectedCategory === "All" || apiItems.length === 0
      ? ALL.filter(
          (item) =>
            selectedCategory === "All" || item.category === selectedCategory
        )
      : apiItems;

  const filteredItems = searchQuery
    ? filteredFoodItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFoodItems;

  const categoryIcons = {
    All: "🌐",
    Chicken: "🍗",
    Meat: "🥩",
    Egg: "🥚",
    Vegetarian: "🥗",
    Dessert: "🍰",
  };

  return React.createElement('div', {
    className: "pt-20 bg-gray-50 min-h-screen-minus-nav font-inter"
  },
    React.createElement(HeroSection, { setCurrentPage }),
    React.createElement('section', {
      className: "py-12 px-4 md:px-8"
    },
      React.createElement('div', {
        className: "container mx-auto"
      },
        React.createElement('h2', {
          className: "text-3xl font-bold text-gray-800 text-center mb-8 animate-fade-in"
        }, "Our Delicious Menu"),
        React.createElement('div', {
          className: "flex flex-wrap justify-center gap-3 mb-10 animate-fade-in animation-delay-200"
        },
          categories.map((category) =>
            React.createElement('button', {
              key: category,
              onClick: () => setSelectedCategory(category),
              className: `px-6 py-2 rounded-full font-medium transition duration-300 ease-in-out flex items-center space-x-2 ${
                selectedCategory === category
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              }`
            },
              React.createElement('span', {}, categoryIcons[category]),
              React.createElement('span', {}, category)
            )
          )
        ),
        isLoading ? (
          React.createElement('div', {
            className: "text-center text-gray-600 text-lg col-span-full"
          },
            React.createElement('div', {
              className: "animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto mb-4"
            }),
            "Loading dishes..."
          )
        ) : filteredItems.length > 0 ? (
          React.createElement('div', {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8"
          },
            filteredItems.map((item, index) =>
              React.createElement(FoodCard, {
                key: item.id || index,
                item: item,
                onAddToCart: addToCart
              })
            )
          )
        ) : (
          React.createElement('p', {
            className: "text-center text-gray-600 text-lg col-span-full"
          }, "No dishes found for this category.")
        )
      )
    )
  );
};

const AboutPage = () => (
  React.createElement('div', {
    className: "pt-20 bg-gray-50 min-h-screen-minus-nav flex items-center justify-center font-inter"
  },
    React.createElement('div', {
      className: "container mx-auto p-8 bg-white rounded-xl shadow-lg text-center max-w-2xl animate-fade-in"
    },
      React.createElement('h2', {
        className: "text-4xl font-bold text-orange-600 mb-6"
      }, "About Foody Zone"),
      React.createElement('p', {
        className: "text-gray-700 text-lg leading-relaxed mb-4"
      }, "Foody Zone is dedicated to bringing you the freshest and most delicious meals right to your doorstep. We partner with top local restaurants to ensure a wide variety of culinary delights are available at your fingertips."),
      React.createElement('p', {
        className: "text-gray-700 text-lg leading-relaxed"
      }, "Our mission is to make ordering food easy, fast, and enjoyable. We believe in quality, convenience, and exceptional customer service."),
      React.createElement('p', {
        className: "text-gray-700 text-sm mt-8"
      }, "Foody Zone is a registered company under Hexaview Tech Pvt. Ltd.")
    )
  )
);

const ProfilePage = () => (
  React.createElement('div', {
    className: "pt-20 bg-gray-50 min-h-screen-minus-nav flex items-center justify-center font-inter"
  },
    React.createElement('div', {
      className: "container mx-auto p-8 bg-white rounded-xl shadow-lg text-center max-w-2xl animate-fade-in"
    },
      React.createElement('h2', {
        className: "text-4xl font-bold text-orange-600 mb-6"
      }, "Your Profile"),
      React.createElement('p', {
        className: "text-gray-700 text-lg leading-relaxed mb-4"
      }, "Welcome to your Foody Zone profile! Here you can manage your orders, update your personal information, and track your delivery status."),
      React.createElement('p', {
        className: "text-gray-700 text-lg leading-relaxed"
      }, "We are constantly working to enhance your experience. Stay tuned for new features and personalized recommendations!"),
      React.createElement('div', {
        className: "mt-8"
      },
        React.createElement('button', {
          className: "bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition duration-300 ease-in-out mr-4"
        }, "Edit Profile"),
        React.createElement('button', {
          className: "bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
        }, "Order History")
      )
    )
  )
);

const CartModal = ({ cartItems, onClose, incrementQuantity, decrementQuantity, removeFromCart, clearCart, totalPrice }) => (
  React.createElement('div', {
    className: "fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4 font-inter animate-fade-in"
  },
    React.createElement('div', {
      className: "bg-white rounded-xl shadow-2xl w-full max-w-3xl h-full max-h-[90vh] flex flex-col"
    },
      React.createElement('div', {
        className: "flex justify-between items-center p-6 border-b border-gray-200"
      },
        React.createElement('h2', {
          className: "text-3xl font-bold text-gray-800"
        }, `Your Cart (${cartItems.length} Items)`),
        React.createElement('button', {
          onClick: onClose,
          className: "text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out"
        },
          React.createElement('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-8 w-8",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          },
            React.createElement('path', {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M6 18L18 6M6 6l12 12"
            })
          )
        )
      ),
      React.createElement('div', {
        className: "flex-grow overflow-y-auto p-6 space-y-4"
      },
        cartItems.length === 0 ? (
          React.createElement('p', {
            className: "text-center text-gray-600 text-lg py-10"
          }, "Your cart is empty. Start adding some delicious food!")
        ) : (
          cartItems.map(item =>
            React.createElement('div', {
              key: item.id,
              className: "flex items-center bg-gray-50 rounded-lg shadow-sm p-4 animate-fade-in-up"
            },
              React.createElement('img', {
                src: item.img,
                alt: item.title,
                className: "w-20 h-20 object-cover rounded-md mr-4",
                onError: (e) => { e.target.onerror = null; e.target.src = `https://placehold.co/80x80/FF7043/FFFFFF?text=Item`; }
              }),
              React.createElement('div', {
                className: "flex-grow"
              },
                React.createElement('h3', {
                  className: "text-lg font-semibold text-gray-800"
                }, item.title),
                React.createElement('p', {
                  className: "text-orange-600 font-bold"
                }, `RS. ${item.price}`)
              ),
              React.createElement('div', {
                className: "flex items-center space-x-2"
              },
                React.createElement('button', {
                  onClick: () => decrementQuantity(item.id),
                  className: "bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
                }, "-"),
                React.createElement('span', {
                  className: "font-semibold text-gray-800"
                }, item.quantity),
                React.createElement('button', {
                  onClick: () => incrementQuantity(item.id),
                  className: "bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-600 transition duration-200 ease-in-out transform hover:scale-105"
                }, "+"),
                React.createElement('button', {
                  onClick: () => removeFromCart(item.id),
                  className: "bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200 ease-in-out transform hover:scale-105"
                }, "DEL")
              )
            )
          )
        )
      ),
      React.createElement('div', {
        className: "p-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
      },
        React.createElement('div', {
          className: "text-2xl font-bold text-gray-800"
        }, `Total Price: RS. ${totalPrice.toFixed(2)}`),
        React.createElement('div', {
          className: "flex space-x-4"
        },
          React.createElement('button', {
            onClick: clearCart,
            className: "bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
          }, "Clear Cart"),
          React.createElement('button', {
            className: "bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
          }, "Pay Now")
        )
      )
    )
  )
);

const ChatModal = ({ isOpen, onClose, chatHistory, chatInput, setChatInput, handleChatSubmit, isChatLoading }) => {
  const chatMessagesEndRef = React.useRef(null);

  React.useEffect(() => {
    chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return React.createElement('div', {
    className: `fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4 font-inter ${isOpen ? 'animate-fade-in' : 'hidden'}`
  },
    React.createElement('div', {
      className: "bg-white rounded-xl shadow-2xl w-full max-w-md h-full max-h-[80vh] flex flex-col"
    },
      React.createElement('div', {
        className: "flex justify-between items-center p-4 border-b border-gray-200"
      },
        React.createElement('h2', {
          className: "text-xl font-bold text-gray-800"
        }, "Customer Support Chat"),
        React.createElement('button', {
          onClick: onClose,
          className: "text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out"
        },
          React.createElement('svg', {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-6 w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          },
            React.createElement('path', {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M6 18L18 6M6 6l12 12"
            })
          )
        )
      ),
      React.createElement('div', {
        className: "flex-grow overflow-y-auto p-4 space-y-4"
      },
        chatHistory.map((msg, index) =>
          React.createElement('div', {
            key: index,
            className: `flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`
          },
            React.createElement('div', {
              className: `max-w-[70%] p-3 rounded-lg shadow-md ${msg.role === 'user' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`
            },
              msg.parts.map((part, pIdx) =>
                React.createElement('p', { key: pIdx }, part.text)
              )
            )
          )
        ),
        isChatLoading && React.createElement('div', {
          className: "flex justify-start"
        },
          React.createElement('div', {
            className: "max-w-[70%] p-3 rounded-lg shadow-md bg-gray-200 text-gray-800"
          },
            React.createElement('div', {
              className: "flex items-center"
            },
              React.createElement('div', {
                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"
              }),
              React.createElement('span', {}, "Typing...")
            )
          )
        ),
        React.createElement('div', { ref: chatMessagesEndRef })
      ),
      React.createElement('div', {
        className: "p-4 border-t border-gray-200 flex"
      },
        React.createElement('input', {
          type: "text",
          value: chatInput,
          onChange: (e) => setChatInput(e.target.value),
          placeholder: "Type your message...",
          className: "flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500",
          disabled: isChatLoading
        }),
        React.createElement('button', {
          onClick: handleChatSubmit,
          className: "ml-2 bg-orange-600 text-white rounded-full px-4 py-2 hover:bg-orange-700 transition duration-300 ease-in-out",
          disabled: isChatLoading
        }, "Send")
      )
    )
  );
};

const Footer = () => (
  React.createElement('footer', {
    className: "bg-gray-800 text-gray-300 py-10 px-4 md:px-8 font-inter"
  },
    React.createElement('div', {
      className: "container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
    },
      React.createElement('div', {},
        React.createElement('h3', {
          className: "text-xl font-bold text-white mb-4"
        }, "Foody Zone"),
        React.createElement('p', {
          className: "text-sm mb-2"
        }, "Foody zone is a registered company under Hexaview Tech Pvt. Ltd."),
        React.createElement('p', {
          className: "text-sm"
        }, "© 2023 Foody Zone. All rights reserved.")
      ),
      React.createElement('div', {},
        React.createElement('h4', {
          className: "text-lg font-semibold text-white mb-4"
        }, "Company"),
        React.createElement('ul', {},
          React.createElement('li', {
            className: "mb-2"
          },
            React.createElement('a', {
              href: "#",
              className: "hover:text-orange-400 transition duration-300 ease-in-out"
            }, "About")
          ),
          React.createElement('li', {
            className: "mb-2"
          },
            React.createElement('a', {
              href: "#",
              className: "hover:text-orange-400 transition duration-300 ease-in-out"
            }, "Blog")
          )
        )
      ),
      React.createElement('div', {},
        React.createElement('h4', {
          className: "text-lg font-semibold text-white mb-4"
        }, "For Foodies"),
        React.createElement('ul', {},
          React.createElement('li', {
            className: "mb-2"
          },
            React.createElement('a', {
              href: "#",
              className: "hover:text-orange-400 transition duration-300 ease-in-out"
            }, "Code of conduct")
          ),
          React.createElement('li', {
            className: "mb-2"
          },
            React.createElement('a', {
              href: "#",
              className: "hover:text-orange-400 transition duration-300 ease-in-out"
            }, "Community")
          )
        )
      ),
      React.createElement('div', {},
        React.createElement('h4', {
          className: "text-lg font-semibold text-white mb-4"
        }, "Social links"),
        React.createElement('div', {
          className: "flex space-x-4"
        },
          React.createElement('a', {
            href: "#",
            className: "text-gray-300 hover:text-orange-400 transition duration-300 ease-in-out"
          },
            React.createElement('svg', {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "currentColor"
            },
              React.createElement('path', {
                d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.238 0-4.185 1.277-4.185 4.533v2.467z"
              })
            )
          ),
          React.createElement('a', {
            href: "#",
            className: "text-gray-300 hover:text-orange-400 transition duration-300 ease-in-out"
          },
            React.createElement('svg', {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "currentColor"
            },
              React.createElement('path', {
                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.251-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM18.406 6.155c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              })
            )
          ),
          React.createElement('a', {
            href: "#",
            className: "text-gray-300 hover:text-orange-400 transition duration-300 ease-in-out"
          },
            React.createElement('svg', {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "currentColor"
            },
              React.createElement('path', {
                d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-11.615 11.514v-8.316l7.054 4.157-7.054 4.159z"
              })
            )
          )
        )
      )
    )
  )
);

const Toast = ({ message, isVisible, setIsToastVisible }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsToastVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, setIsToastVisible]);

  return React.createElement('div', {
    className: `fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform ${
      isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10 pointer-events-none"
    } z-50`
  }, message);
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const categories = ["All", "Chicken", "Meat", "Egg", "Vegetarian", "Dessert"];

  const addToCart = (itemToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        setToastMessage(`${itemToAdd.title} quantity updated in cart!`);
        setIsToastVisible(true);
        return prevItems.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        setToastMessage(`${itemToAdd.title} added to cart!`);
        setIsToastVisible(true);
        return [...prevItems, { ...itemToAdd, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price || 0) * item.quantity,
      0
    );
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatInput("");
    setChatHistory((prev) => [
      ...prev,
      { role: "user", parts: [{ text: userMessage }] },
    ]);
    setIsChatLoading(true);

    try {
      const apiKey = "AIzaSyA7rXCJegMH9A3YFdjTJ4XZrNC0OLItFrM";
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: userMessage }],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text;
      setChatHistory((prev) => [
        ...prev,
        { role: "model", parts: [{ text: botResponse }] },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          role: "model",
          parts: [{ text: "Sorry, I could not get a response." }],
        },
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  return React.createElement('div', {
    className: "min-h-screen flex flex-col"
  },
    React.createElement(Navbar, {
      setCurrentPage,
      setIsMobileMenuOpen,
      isMobileMenuOpen,
      cartItems,
      setIsCartOpen,
      setIsChatOpen,
      setSearchQuery,
    }),
    React.createElement('main', {
      className: "flex-grow"
    },
      currentPage === "home" && React.createElement(HomePage, {
        categories,
        selectedCategory,
        setSelectedCategory,
        addToCart,
        setCurrentPage,
        searchQuery,
      }),
      currentPage === "about" && React.createElement(AboutPage),
      currentPage === "profile" && React.createElement(ProfilePage)
    ),
    React.createElement(Footer),
    isCartOpen && React.createElement(CartModal, {
      cartItems,
      onClose: () => setIsCartOpen(false),
      incrementQuantity,
      decrementQuantity,
      removeFromCart,
      clearCart,
      totalPrice: calculateTotalPrice(),
    }),
    isChatOpen && React.createElement(ChatModal, {
      isOpen: isChatOpen,
      onClose: () => setIsChatOpen(false),
      chatHistory,
      chatInput,
      setChatInput,
      handleChatSubmit,
      isChatLoading,
    }),
    React.createElement(Toast, {
      message: toastMessage,
      isVisible: isToastVisible,
      setIsToastVisible,
    })
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));