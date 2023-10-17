import Header from "./component/Header";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-red-400 h-[100vh]">
      <Header />
      <div className="flex justify-between gap-10 mt-[5%] bg-red-100 w-[90%] md:w-[40%] p-20 items-center flex-col">
        <h1 className="3xl underline">Contact Form</h1>
        <input
          type="text"
          className="border-b-sky-200 p-2"
          placeholder="Name"
        />
        <input
          type="text"
          className="border-b-sky-200 p-2"
          placeholder="Email"
        />
        <input
          type="text"
          className="border-b-sky-200 px-2 py-6"
          placeholder="Subject:"
        />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Contact;
