import img1 from "../images/img1.png";
const Homepage = () => {
    return (
        <div className="sm:flex-row sm:justify-between sm:px-5 sm:flex py-12">
            <div id="text-container" className="flex flex-col sm:items-center sm:flex-row px-5 mb-10 sm:w-2/5">
                <div className="bg-black w-16 sm:w-20 my-5 h-1 sm:hidden"></div>
                <div>
                    <p className="text-4xl font-bold">
                        Where Design Meets Innovation
                    </p>
                    <p className="text-xl my-1 leading-relaxed">
                        Whether you're a startup looking to establish your brand
                        identity or an established business aiming to refresh
                        your image, we've got the creative firepower to make it
                        happen.
                    </p>
                    <button className="bg-black px-10 text-sm rounded-sm py-2 text-white my-5">
                        LET'S TALK
                    </button>
                </div>
            </div>
            <div id="img-container" className="sm:w-/5">
                <img src={img1} alt="Image"></img>
            </div>
        </div>
    );
};

export default Homepage;
