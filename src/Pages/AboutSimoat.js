import Footer from '../Components/Footer';


const AboutSimoat = () => {
    return (
        <>
            <div style={{ backgroundColor: '#D8D2C2' }}>
                <div className='container' style={{ marginTop: '150px', paddingTop: '100px', paddingBottom: '100px' }}>
                    <h1 className='header text-center mb-4'>Why SimOat?</h1>
                    <div className='page-content '>
                        <h2 className='subheading text-center mb-4'>Delicious. Nutritious. Effortless. Overnight oats are more than just a trend — they’re a wholesome way to fuel your day. Here’s why:</h2>
                        <div>
                            <hr></hr>
                            <h3 className='mt-5'>✅ 1. Convenient & Time-Saving</h3>
                            <p>
                                No cooking needed! Just grab your cup from the fridge and go.
                                Perfect for busy mornings, post-workout snacks, or anytime you need a quick, healthy bite.
                            </p>

                            <h3 className='mt-4'>
                                🥄 2. Ready-to-Eat & Pre-Portioned
                            </h3>
                            <p>
                                Each serving is prepped and portioned to give you the right balance of nutrients — no measuring, no mess, no stress.
                            </p>
                            <h3 className='mt-4'>
                                🌾 3. Packed with Nutrition
                            </h3>
                            <p>
                                Our oats are made with fiber-rich rolled oats, plant-based milk, natural sweeteners, and fresh fruits or superfoods.
                                They’re high in fiber, rich in antioxidants, and great for digestion.</p>
                            <h3 className='mt-4'>
                                💪 4. Keeps You Full Longer
                            </h3>
                            <p>
                                Thanks to their high fiber and protein content, Overnight Oats help you feel satisfied for hours — so you're less likely to snack before lunch.
                            </p>

                            <h3 className='mt-4'>
                                ❤️ 5. Good for the Heart & Gut
                            </h3>
                            <p>
                                Oats are known to help lower cholesterol and support healthy digestion, making them a smart choice for daily wellness.
                            </p>
                            <h3 className='mt-4'>
                                🌱 6. Customizable for Every Lifestyle
                            </h3>
                            <p>
                                Whether you're vegan, gluten-free, or just looking to eat cleaner — Overnight Oats are easy to enjoy your way.
                                We offer a variety of flavors and ingredients to suit different tastes and dietary need
                            </p>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutSimoat;