import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="first_row">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Nom *"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="invalid-feedback">Veuillez écrire votre nom!</span>
          )}
        </div>
        {/* End .first_row */}

        <div className="second">
          <div className="left">
            <input
              {...register(
                "email",
                {
                  required: "Veuillez écrire votre email!",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Ceci ne correspond pas au format email",
                  },
                },
                { required: true }
              )}
              type="email"
              placeholder="Email *"
            />
            {errors.email && (
              <span className="invalid-feedback">{errors.email.message}</span>
            )}
          </div>
          <div className="right">
            <input
              {...register("subject", { required: true })}
              placeholder="Objet *"
            />
            {errors.subject && (
              <span className="invalid-feedback">Veuillez écrire l'objet de votre message!</span>
            )}
          </div>
        </div>
        {/* End .second */}

        <div className="third">
          <textarea
            {...register("message", { required: true })}
            placeholder="Message *"
          ></textarea>
          {errors.message && (
            <span className="invalid-feedback">Veuillez écrire votre message!</span>
          )}
        </div>
        {/* End .third */}

        <div className="beny_tm_button">
          <button type="submit" className="color">
            <span className="wrapper">
              <span className="first">Envoyer</span>
              <span className="second">Envoyer</span>
            </span>
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
