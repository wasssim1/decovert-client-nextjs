"use client";

import axios from "axios";
import emailjs from "emailjs-com";
import moment from "moment";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import useGlobalContext from "@/hooks/use-context";
import EmailIcon from "@/sheardComponent/elements/icons/email-icon";
import LocationIcon from "@/sheardComponent/elements/icons/location-icon";
import PhoneIcon from "@/sheardComponent/elements/icons/phone-icon";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const TOAST_SUCCESS_MESSAGE = "Message envoyé avec succès";
const TOAST_FAILURE_MESSAGE = "Échec de l'envoi du message";

const PAGE_TITLE_GET_IN_TOUCH = "Contactez-nous";

const FORM_PLACEHOLDER_NAME = "Nom & Prénom";
const FORM_PLACEHOLDER_PHONE = "Téléphone";
const FORM_PLACEHOLDER_EMAIL = "E-mail";
const FORM_PLACEHOLDER_MESSAGE = "Message";
const FORM_REQUIRED_FIELD = "Champ obligatoire";
const FORM_SUBMIT = "Envoyer";

const ContactForm = () => {
  const { user } = useGlobalContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const now = moment();
  const date = now.format("MM/DD/YY hh:mm a");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const message = data.message;

    const userInfo = {
      name,
      email,
      phone,
      message,
      date,
    };

    const sendEmail = () => {
      const templateParams = {
        name: name,
        message: message,
        email: email,
      };

      emailjs
        .send(
          `${process.env.EMAIL_SERVICE_ID}`,
          `${process.env.EMAIL_TEMPLATE_ID}`,
          templateParams,
          `${process.env.EMAIL_PUBLIC_KEY}`
        )
        .then(
          function (response) {
            console.info("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    };

    axios
      .post(`${process.env.BASE_URL}user-input/contact`, userInfo)
      .then((res) => {
        if (res.data.message === "success") {
          sendEmail();
          toast.success(TOAST_SUCCESS_MESSAGE);
          reset();
        }
        if (res.data.message === "custom error") {
          toast.error(TOAST_FAILURE_MESSAGE);
        }
      })
      .catch((err) => {
        console.log({ err });
        toast.error(TOAST_FAILURE_MESSAGE);
      });
  };

  return (
    <section className="bd-Contact__area pt-105">
      <div className="container">
        <div className="row g-0 justify-content-center">
          <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-12">
            <div className="bd-contact__main-wrapper mb-70">
              <div className="bd-section__title-wrapper">
                <h2 className="bd-section__title mb-50">
                  {PAGE_TITLE_GET_IN_TOUCH}
                </h2>
              </div>
              <div className="bd-contact__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="bd-single__form-input mb-20">
                        <input
                          type="text"
                          defaultValue={user?.name && user?.name}
                          placeholder={FORM_PLACEHOLDER_NAME}
                          {...register("name", {
                            required: FORM_REQUIRED_FIELD,
                          })}
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bd-single__form-input  mb-20">
                        <input
                          defaultValue={user?.phone && user?.phone}
                          type="text"
                          placeholder={FORM_PLACEHOLDER_PHONE}
                          {...register("phone", {
                            required: FORM_REQUIRED_FIELD,
                          })}
                        />
                        {errors.phone && <span>{errors.phone.message}</span>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bd-single__form-input  mb-20">
                        <input
                          type="text"
                          placeholder={FORM_PLACEHOLDER_EMAIL}
                          defaultValue={user?.email && user?.email}
                          {...register("email", {
                            required: FORM_REQUIRED_FIELD,
                            pattern: {
                              value:
                                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                              message: "Invalid email format",
                            },
                          })}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bd-single__form-input  mb-20">
                        <textarea
                          id="message"
                          placeholder={FORM_PLACEHOLDER_MESSAGE}
                          {...register("message", {
                            required: FORM_REQUIRED_FIELD,
                          })}
                        />
                        {errors.message && (
                          <span>{errors.message.message}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="contact-btn">
                    <button type="submit" className="bd-fill__btn">
                      {FORM_SUBMIT}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4">
            <div className="bd__sidebar-wrapper mb-70">
              <div className="bd-sidebar__support">
                <div className="bd-sidebar__title">
                  <h4>{"Support"}</h4>
                </div>
                <div className="bd-sidebar__content">
                  <div className="bd-contact__list">
                    <div className="bd-contact__item">
                      <div className="bd-contact__item-list">
                        <div className="bd-contact__icon">
                          <PhoneIcon />
                        </div>
                        <div className="bd-contact__content">
                          <div className="bd-contact__title">
                            <h4>Téléphone</h4>
                          </div>
                          <span>
                            Mobile :{" "}
                            <a href="tel:(+88)872-670-780">
                              <span>(+216) 20 678 882</span>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-contact__item">
                      <div className="bd-contact__item-list">
                        <div className="bd-contact__icon">
                          <EmailIcon />
                        </div>
                        <div className="bd-contact__content">
                          <div className="bd-contact__title">
                            <h4>E-mail</h4>
                          </div>
                          <span>
                            <a href="mailto:Info@example.com">
                              contact@decovert.store
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-contact__item">
                      <div className="bd-contact__item-list">
                        <div className="bd-contact__icon">
                          <LocationIcon />
                        </div>
                        <div className="bd-contact__content">
                          <div className="bd-contact__title">
                            <h4>Location</h4>
                          </div>
                          <p>Tunis, TN</p>
                          <p>El Mourouj, TN</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
