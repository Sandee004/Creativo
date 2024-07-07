import Accordion from './accordion';
const Services = () => {
    return (
        <div className="flex flex-col sm:flex-row px-5 justify-between text-white bg-black py-5">
            <div className="sm:w-1/5 text-sm mb-4">
                <p className="font-bold">Our Services</p>
            </div>
            <div className="sm:w-3/5">
            <Accordion
                title="Visual Branding"
                answer="Your brand is more than just a logo; it's the essence of your business. We create compelling brand identities that tell your unique story and resonate with your target audience."
                />
                <Accordion
                    title="Creative Campaign"
                    answer="Your brand is more than just a logo; it's the essence of your business. We create compelling brand identities that tell your unique story and resonate with your target audience."
                />
                <Accordion
                    title="UI/UX Design"
                    answer="Your brand is more than just a logo; it's the essence of your business. We create compelling brand identities that tell your unique story and resonate with your target audience."
                    />
                <Accordion
                    title="Development"
                    answer="Your brand is more than just a logo; it's the essence of your business. We create compelling brand identities that tell your unique story and resonate with your target audience."
                    />
            </div>
        </div>

    )
}

export default Services;