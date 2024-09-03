import { Header } from "./components/index.js";
import CappProvider from "./context/cappcontext";
import useStyles from "./stylesheet";
import { useCapp } from "./context/cappcontext";
import SideBar from "./components/sidebar/index.js";
import Navigation from "./navigation/index.js";

function App() {
  const { currentTheme } = useCapp();
  const classes = useStyles({ theme: currentTheme });
  return (
    <div className={classes.bodyContainer}>
      <Header />
      <SideBar/>
      <Navigation/>
    </div>
  );
}

const ContextAPI = () => {
  return <CappProvider>

    <App />
  </CappProvider>

}
export default ContextAPI;
