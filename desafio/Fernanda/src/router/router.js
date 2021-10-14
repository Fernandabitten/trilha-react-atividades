import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import ListMoviesPage from "../pages/ListMoviesPage/ListMoviesPage";
import LastOrderPage from "../pages/LastOrderPage/LastOrderPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import Login from "../pages/Login/Login";

export const privateRoutes = [
  {
    path: "/movies/:id",
    component: MovieDetailsPage,
    title: "Movie Details",
    isVisible: false,
  },
  {
    path: "/list-movies",
    component: ListMoviesPage,
    title: "List Movies",
    isVisible: true,
  },
  {
    path: "/last-orders",
    component: LastOrderPage,
    title: "Last Orders",
    isVisible: true,
  },
  {
    path: "/checkout",
    component: CheckoutPage,
    title: "Checkout",
    isVisible: true,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    component: Login,
    title: "Login",
    isVisible: true,
  },
];
