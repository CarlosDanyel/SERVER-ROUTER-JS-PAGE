import { Router } from "./route.js";

const router = new Router();
router.add("/", "../index.html");
router.add("/universe", "../pages/universe.html");
router.add("/exploracao", "../pages/exploracao.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
