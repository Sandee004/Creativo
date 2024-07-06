
const Collab = () => {
    return (
        <>
        <div className="bg-black w-[100%] flex flex-col sm:flex-row p-5 text-white justify-between">
            <div className="text-sm sm:w-1/5 font-bold">
                <p>Let's Collaborate</p>
            </div>
            <div className="sm:w-3/5 justify-center">
            <p className="text-xl leding-relaxed my-4">Ready to turn your ideas into exceptional designs? Contact us today, and let's make something amazing together!</p>
            <button className="w-[100%] my-3 bg-white text-black font-bold py-2 rounded-md">LET'S TALK</button>
            </div>
        </div>

            <footer className="bg-black text-white py-4 px-5 flex flex-wrap justify-around">
              <div className="w-full sm:w-1/3 mb-4 md:mb-0">
                  <div className="flex my-5">
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4376 7.43769L14.2658 0.932373L8.0941 7.43769L0 11.2971L4.09935 18.8449L22.1355 10.9997L4.95855 24.3381L5.44907 28.0676L14.2658 26.4324L23.0826 28.0676L24.2519 19.1771L28.5317 11.2971L20.4376 7.43769Z" fill="white"/>
                      </svg>
                      <p className="mx-1 text-xl">Creativo.</p>
                  </div>
                <p>Creativo is where your imagination and our expertise converge to create design solutions that elevate your brand and set you apart from the competition.</p>
              <p className="font-bold text-[20px] mt-5">hello@creativo.com</p>
                <p className="font-bold text-[20px]">+1-800-123 4567</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-20 row-gap-2 sm:w-1/3 text-sm mt-5">
                <div>
                  <h3 className="font-bold mb-2">Company</h3>
                  <ul className="list-none pl-0">
                    <li className="py-1">
                      <a href="#" className="text-gray-300 hover:text-white py-2">About</a>
                    </li>
                    <li className="py-1">
                      <a href="#" className="text-gray-300 hover:text-white py-2">Services</a>
                    </li>
                    <li className="py-1">
                      <a href="#" className="text-gray-300 hover:text-white">Careers</a>
                    </li>
                    <li className="py-1">
                      <a href="#" className="text-gray-300 hover:text-white">Blog</a>
                    </li>
                      <li className="py-1">
                      <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
                      </li>
                  </ul>
                </div>
                  <div>
                    <h3 className="font-bold mb-2">Contact</h3>
                    <ul className="list-none pl-0">
                      <li className="py-1">
                        <a href="#" className="text-gray-300 hover:text-white py-2">Help</a>
                      </li>
                      <li className="py-1">
                        <a href="#" className="text-gray-300 hover:text-white py-2">FAQs</a>
                      </li>
                      <li className="py-1">
                        <a href="#" className="text-gray-300 hover:text-white">Press</a>
                      </li>
                      <li className="py-1">
                        <a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a>
                      </li>
                        <li className="py-1">
                        <a href="#" className="text-gray-300 hover:text-white">Partners</a>
                        </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Discover</h3>
                    <ul className="list-none pl-0">
                      <li className="py-1">
                        <a href="#" className="text-gray-300 hover:text-white py-2">Affiliate</a>
                      </li>
                      <li className="py-1">
                        <a href="#" className="text-gray-300 hover:text-white py-2">Services</a>
                      </li>
                      <li className="py-1">
                        <a href="#" className="text-gray-300 hover:text-white">Partner Program</a>
                      </li>
                      <li className="py-1">
                        <a href="#" className="text-gray-300 hover:text-white">Blog</a>
                      </li>
                        <li className="py-1">
                        <a href="#" className="text-gray-300 hover:text-white">Pricing</a>
                        </li>
                    </ul>
                  </div>
                  
              </div>
            </footer>

        </>
    )
}

export default Collab