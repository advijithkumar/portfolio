import Home from "../pages/Home";
const Body =() => {
    return (
        <div className="body">
            <h1>Hi,Viewers </h1>
            <p>This  is  the  main  content  area  of  the  application.</p>
            <div className="bodyContent">
                <Home />
            </div>
        </div>
    );
}
export default Body;