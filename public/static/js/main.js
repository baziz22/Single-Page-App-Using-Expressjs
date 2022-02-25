const router = async () => {
  const routes = [
    { path: "/", view: "Viewing Dashboard" },
    { path: "/posts", view: "Viewing Post" },
    { path: "/settings", view: "Viewing settings" },
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
  console.log(match.route.path);
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});
