function Hero() {
    return (
        <div className="space-y-4 md:w-2/3">
            <img
                src="/news-homepage/image-web-3-mobile.jpg"
                alt="web-3"
                className="md:hidden"
            />
            <img
                src="/news-homepage/image-web-3-desktop.jpg"
                alt="web-3"
                className="hidden md:block"
            />
            <div className="items-center justify-between gap-8 md:flex">
                <h1 className="text-4xl font-extrabold md:flex-1/2 md:text-5xl">
                    The Bright Future of Web 3.0?
                </h1>

                <div className="md:flex-1/2">
                    <p className="text-Dark-grayish-blue text-lg">
                        We dive into the next evolution of the web that claims
                        to put the power of the platforms back into the hands of
                        the people. But is it really fulfilling its promise?
                    </p>
                    <button className="bg-Soft-red hover:text-Grayish-blue hover:bg-Very-dark-blue mt-4 cursor-pointer px-8 py-4 text-sm font-extrabold tracking-[.5rem] uppercase transition-colors duration-75 ease-in">
                        read more
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
