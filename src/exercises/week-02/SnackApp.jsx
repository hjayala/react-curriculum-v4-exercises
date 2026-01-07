import SnackFooter from "./SnackFooter";
import SnackList from "./SnackList";
import SnackHeader from "./SnackHeader";

function SnackApp() {
    return (
        <>
        <h1><SnackHeader /></h1>
        <p><SnackList /></p>
        <><SnackFooter /></>
        </>
    );
}

export default SnackApp;