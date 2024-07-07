import gridImg1 from '../images/gridImg1.png';
import gridImg2 from '../images/gridImg2.png';
import gridImg3 from '../images/gridImg3.png';
import gridImg4 from '../images/gridImg4.png';
import gridImg5 from '../images/gridImg5.png';
import gridImg6 from '../images/gridImg6.png';

const Portfolio = () => {
  return (
    <div className="flex flex-col sm:flex-row mx-5 py-5 justify-between">
        <div className="sm:w-1/5 text-sm">
            <p className="font-bold">Our Portfolio</p>
        </div>
        <div className="sm:w-3/5">
            <p className="text-xl">We envision a world where every idea, product, or service is brought to life through exceptional design.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <img src={gridImg1} alt="grid-img1" />
                    <p className="text-sm mb-6 mt-2">
                        <span className="font-bold">Daily App: </span>
                            Increasing your productivity
                        </p>
                </div>
    
                <div>
                    <img src={gridImg2} alt="grid-img1" />
                    <p className="text-sm mb-6 mt-2">
                        <span className="font-bold">Daily App: </span>
                            Increasing your productivity
                        </p>
                </div>
    
                <div>
                    <img src={gridImg3} alt="grid-img1" />
                    <p className="text-sm mb-6 mt-2">
                        <span className="font-bold">Daily App: </span>
                            Increasing your productivity
                        </p>
                </div>
    
                <div>
                    <img src={gridImg4} alt="grid-img1" />
                    <p className="text-sm mb-6 mt-2">
                    <span className="font-bold">Daily App: </span>
                        Increasing your productivity
                    </p>
                </div>
    
                <div>
                    <img src={gridImg5} alt="grid-img1" />
                    <p className="text-sm mb-6 mt-2">
                        <span className="font-bold">Daily App: </span>
                            Increasing your productivity
                        </p>
                </div>
    
                <div>
                    <img src={gridImg6} alt="grid-img1" />
                    <p className="text-sm mb-6 mt-2">
                        <span className="font-bold">Daily App: </span>
                            Increasing your productivity
                        </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio