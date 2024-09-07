import email from "../assets/email.png";
import CustomInput from "./CustomInput";
const Contact = () => {
  return (
    <>
      <div className="mt-20 flex flex-col justify-center items-center">
        <h3 className="text-4xl font-semibold tracking-wide">Contact Us</h3>
        <div className="h-1 w-14 mt-4 bg-warning rounded-full"></div>
      </div>
      <section className="h-[50vh] container mt-20 flex">
        <div className="flex-1 flex flex-col justify-center items-center">
          <CustomInput title="Full Name" placeholder="ex : John Doe" />
          <CustomInput title="Email" placeholder="ex : John@me.com" />
          <textarea
            placeholder="Message"
            className="w-full max-w-xs outline-none border p-3 rounded-lg mt-8"
          />
          <div className="w-full max-w-xs">
            <button className="btn btn-warning text-white mt-5">Send</button>
          </div>
        </div>
        <img src={email} alt="contact picture" className="object-cover" />
      </section>
    </>
  );
};

export default Contact;
