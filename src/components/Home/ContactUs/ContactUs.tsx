import { useState, ChangeEvent, FormEvent } from "react";
import classes from "./ContactUs.module.css";
import clsx from "clsx";
import Input from "./Input/Input";
import { Heading, Text } from "@/components/common";
import { logo } from "@/images";

const ContactUs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ name, email, message });
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <section className={clsx(classes.container, "container")} id="contact-us">
      <div className={classes.contactInfo}>
        <Heading className={classes.heading}>Contact Us</Heading>

        <Text className={classes.info} xl2>
          Want to collaborate, integrate, or learn more about RGG? Reach out and
          let’s build something meaningful together.
        </Text>

        <form onSubmit={handleSubmit} className={classes.form}>
          <Input
            label="Name or company"
            value={name}
            setValue={setName}
            placeholder="-"
          />

          <Input
            label="Email"
            value={email}
            setValue={setEmail}
            placeholder="-"
          />

          <div className={classes.inputContainer}>
            <label htmlFor="message" className={classes.label}>
              Message
            </label>

            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              className={classes.textArea}
              placeholder="-"
              rows={4}
            />
          </div>
        </form>
      </div>

      <img src={logo} alt="RGG logo" className={classes.logo} />
    </section>
  );
};

export default ContactUs;
