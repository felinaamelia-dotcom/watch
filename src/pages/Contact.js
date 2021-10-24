export default function Contact() {
  return (
    <div className="container mx-auto my-10">
      <div className="mb-5">
        <h2 className="font-medium text-2xl">Contact</h2>
        <p className="font-light">
          Please Contact Me if Your Mind Has Any Question Fitted
        </p>
      </div>

      <section>
        <form className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Enter Name"
              className="border px-3 py-2 focus:outline-none focus:border-primary"
            />

            <input
              type="email"
              placeholder="Enter Email Address"
              className="border px-3 py-2 focus:outline-none focus:border-primary"
            />
          </div>

          <input
            type="text"
            placeholder="Enter Subject"
            className="border px-3 py-2 focus:outline-none focus:border-primary"
          />

          <textarea
            cols="30"
            rows="5"
            placeholder="Enter Message"
            className="border px-3 py-2 focus:outline-none focus:border-primary resize-none"
          ></textarea>

          <button type="submit" className="py-2 px-3 bg-primary hover:bg-opacity-95 transition-opacity text-white">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
