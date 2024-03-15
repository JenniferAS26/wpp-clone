import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createData, getDataByQueryParams, saveImage } from "@utils/api.js";
import Swal from "sweetalert2";
import silhouette from "@images/user-silhouette.jpg";
import takeAPicture from "@icons/take-a-picture.png";
import { FaChevronLeft } from "react-icons/fa";
import "./styles.scss";

const NewContact = () => {
  const { register, handleSubmit } = useForm();
  const [imagePreview, setImagePreview] = useState(silhouette);

  const userContacts = JSON.parse(localStorage.getItem("userContacts"));
  const currentId = localStorage.getItem("currentId");

  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const chosenImage = event.target.files[0];
    const imageReaderAPI = new FileReader();

    imageReaderAPI.onloadend = () => {
      setImagePreview(imageReaderAPI.result);
    };

    if (chosenImage) {
      imageReaderAPI.readAsDataURL(chosenImage);
    }
  };

  const onSubmit = async (contactInfo) => {
    const contactVerified = await getDataByQueryParams("chats", {
      contactPhoneNumber: contactInfo.contactPhoneNumber,
    });

    const file = contactInfo.contactPhoto[0];
    const imageUrl = await saveImage(file);

    if (
      contactVerified[0]?.contactPhoneNumber === contactInfo.contactPhoneNumber
    ) {
      Swal.fire({
        title: "Contact already exists",
        confirmButtonText: "Ok",
        reverseButtons: true,
        customClass: {
          button: "custom-button",
          htmlContainer: "custom-container",
        },
      });
    } else {
      const newContact = {
        userId: currentId,
        contactId: userContacts.length + 1,
        contactName: contactInfo.contactName,
        contactPhoneNumber: contactInfo.contactPhoneNumber,
        contactPhoto: imageUrl,
        dateMessage: Date(),
      };
      await createData("chats", newContact);
      const userConfirmDeletion = await Swal.fire({
        title: "New contact add successfully",
        confirmButtonText: "Ok",
        reverseButtons: true,
        customClass: {
          button: "custom-button",
          htmlContainer: "custom-container",
        },
      });
      if (userConfirmDeletion.isConfirmed) {
        navigate("/home");
        window.location.reload();
      }
    }
  };
  return (
    <div className="wrapper-new-contact">
      <div className="new-contact-container">
        <Link to="/contact-list" className="new-contact-back">
          <FaChevronLeft />
        </Link>
        <h2 className="new-contact-container__title">Add new contact</h2>
        <form
          className="new-contact-container__form form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="profile-picture-wrapper">
            <img className="camera-icon" src={takeAPicture} alt="camera icon" />
            <div className="form__profile-picture">
              <figure
                className="form__profile-picture--image-container"
                name="avatar"
              >
                <img
                  className="current-picture"
                  src={imagePreview}
                  alt="dummy image"
                />
              </figure>
              <div className="form__profile-picture--input-container">
                <label htmlFor="input-url">
                  <span>Choose a file</span> or drag it here.
                </label>
                <input
                  type="file"
                  id="input-url"
                  className="new-contact-input-image"
                  {...register("contactPhoto")}
                  name="contactPhoto"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
          <div className="form__input-wrapper">
            <div className="input-container">
              <input
                className="form__input new-contact-name-input"
                type="text"
                {...register("contactName")}
                name="contactName"
                required
              />
              <label className="input-label" htmlFor="">
                Enter a name
              </label>
              <div className="form__input--error error"></div>
            </div>
            <div className="input-container">
              <input
                className="form__input new-contact-number-input"
                type="number"
                {...register("contactPhoneNumber")}
                name="contactPhoneNumber"
                required
              />
              <label className="input-label" htmlFor="">
                Enter a phone number
              </label>
              <div className="form__input--error error"></div>
            </div>
          </div>
          <input
            className="form__submit"
            type="submit"
            value="Add new contact"
          />
        </form>
      </div>
    </div>
  );
};

export default NewContact;
