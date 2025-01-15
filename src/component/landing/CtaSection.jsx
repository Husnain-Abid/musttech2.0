import { useState } from 'react'

export default function CtaSection() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Email submitted:', email)
        setEmail('')
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <section className="bg-black px-6 py-20">
            <div className="mx-auto container">
                {/* CTA Card */}
                <div className="rounded bg-customred px-8 py-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        {`Let's discuss your idea`}
                    </h2>
                    <p className="mb-8 text-base text-red-100">
                        {`Share your vision with us, and let's create something`} <br/> {`extraordinary together`}
                    </p>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            required
                            className="flex-1 rounded-full text-sm bg-white px-6 py-3 text-black placeholder:text-[#0D0E14]   focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <button
                            type="submit"
                            className="rounded-full text-sm  bg-black px-6 py-3 font-bold text-customred transition-colors hover:bg-gray-800 hover:text-white"
                        >
                            SEND
                        </button>
                    </form>
                </div>

                {/* Go to Top Button */}
                <div className="mt-5 text-center">
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center text-sm rounded-full border border-white px-6 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
                    >
                        GO TO TOP
                    </button>
                </div>
            </div>
        </section>
    )
}

