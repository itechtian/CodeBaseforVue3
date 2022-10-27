import router from "../../router/index";

class RouterUtils {
  static routes = {};

  static pageTitles = {
    DEFAULT: "KOSMAN WINE",
  };
  static navigateTo(targetRoute) {
    router.push({name: targetRoute}).then();
  }
  static goBack() {router.go(-1);}
}
export default RouterUtils;
