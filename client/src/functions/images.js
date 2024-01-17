export const renderDefaultCoffee = (categories) => {
    switch (categories[0].slug) {
      case "coffee":
        return "../images/coffee1.jpeg";
      case "drink":
        return "../images/drink.png";
      case "espresso":
        return "../images/espresso.jpeg";
      case "bakery":
        return "../images/bakery.jpeg";
      default:
        return "../images/coffee1.jpeg";
    }
  };