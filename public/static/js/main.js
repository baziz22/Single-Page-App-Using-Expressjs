import Dashboard from "./views/Dashboard.js";
import Blogs from "./views/Blogs.js";
import Settings from "./views/Settings.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/blogs", view: Blogs },
    { path: "/settings", view: Settings },
  ];

  //Test each rout for potential match
  const potentialMatches = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });

  let match = potentialMatches.find((item) => item.isMatch);
  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  // create a new instant of the view at the match route
  const view = new match.route.view();
  document.querySelector("#app").innerHTML = await view.getHTML();

  //console.log(match.route.view());
};

// To make the router doing his job in order of using previous and forward page button.
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
