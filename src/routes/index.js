import newsRouter from './news';
import pageRouter from './page';

const routes = (app) => {
  app.get("/", (req, res) => {
    res.render("home");
  });

  app.use("/news", newsRouter);
  app.use("/", pageRouter);
};

export default routes;
