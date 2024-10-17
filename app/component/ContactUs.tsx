import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactUs = () => {
  return (
    <div className="min-h-[60vh] my-8 flex flex-col justify-center items-center">
      <div className="max-w-[60%]">
        <h1 className="text-center text-5xl font-bold text-blue-700">
          Get in touch!
        </h1>
        <p className="my-8 text-center leading-8 text-xl font-thin">
          Elevate your brand and leave a lasting impression with a meticulously
          crafted website tailored to your needs.
        </p>
      </div>
      <div className="w-full px-32 grid gap-2">
        <label>Email</label>
        <Input placeholder="Your email" />
        <label>Name</label>
        <Input placeholder="Your name" />

        <label>Message</label>
        <Input placeholder="Type your message here" />
      </div>
      <div className="px-32 w-full my-8">
        <Button className="w-full py-5 text-white">Send</Button>
      </div>
    </div>
  );
};

export default ContactUs;
