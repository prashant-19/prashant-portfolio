import React, { useState } from "react";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="w-full px-6 py-8 bg-white rounded-2xl shadow-lg lg:shadow-xl border border-gray-300 lg:max-w-lg mx-auto">


            {isSubmitted ? (
                <p className="text-green-600 text-center font-semibold">
                    ✅ Your message has been sent!
                </p>
            ) : (
                <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    onSubmit={() => setIsSubmitted(true)}
                    className="space-y-5"
                >
                    <input
                        type="hidden"
                        name="access_key"
                        value="a607e2d2-bc1d-41c2-9696-083d31c10f32"
                    />
                    <input
                        type="hidden"
                        name="redirect"
                        value="https://prashantt.vercel.app/"
                    />

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-slate-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-700 text-white font-semibold py-2 rounded-md hover:bg-slate-600 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            )}
        </div>
    );
};

export default Form;
