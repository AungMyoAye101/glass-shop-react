const ContactFrom = () => {
  return (
    <form className="w-96 px-4 py-6 flex flex-col gap-4 rounded-md shadow-md border border-gray-400 bg-gray-50">
      <h1 className="text-lg text-center font-heading  font-semibold">
        Feel Free To Reach Us
      </h1>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-body text-gray-700 ">
          Your Name
        </label>
        <input
          type="name"
          id="name"
          placeholder="your name"
          className="px-4 py-2 rounded-md shadow-md focus:outline-none border border-gray-400"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-body text-gray-700 ">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          className="px-4 py-2 rounded-md shadow-md focus:outline-none border border-gray-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-body text-gray-400 ">
          Your comment
        </label>
        <textarea
          id="text"
          className="px-4 py-2 rounded-md shadow-md focus:outline-none border border-gray-400"
          placeholder="Enter your text"
        />
      </div>

      <button className="px-4 py-2 bg-purple-400 rounded-md shadow-md font-body">
        Send
      </button>
    </form>
  );
};

export default ContactFrom;
