/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { Fragment, useState } from "react";
import style from "./Payment.module.css";
import Header from "../../component/Header/Header";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/ShoppingCartContext";
import formatCurrency from "../../utilities/formatCurrency";
import ReusableButtonTwo from "../../component/ReusableButtonTwo/ReusableButtonTwo";

type UserSubmitForm = {
  name: string;
  cardNB: string;
  exp: string;
  cvv: string;
};

const Payment = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("name is required")
      .min(3, "name must be at least 3 characters")
      .max(20, "name must not exceed 20 characters"),
    cardNB: Yup.string()
      .required("cardNB is required")
      .min(6, "cardNB must be at least 6 characters"),
    exp: Yup.string().required("expiration date is required"),
    cvv: Yup.string()
      .required("cvv number is required")
      .max(3, "name must not exceed 3 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema) as Resolver<UserSubmitForm>,
  });

  const { getTotalPrice } = useCartContext();
  const totalPrice = getTotalPrice();
  const navigate = useNavigate();

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
    if (data.name && data.cardNB && data.exp && data.cvv) {
      navigate("/paymentsuccess");
    } else {
      console.log("Please fill in all required fields.");
    }
  };

  return (
    <Fragment>
      <Header />
      <section className={style.PaymentSection}>
        <div className="register-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Card holder’s name</label>
              <br />
              <input
                type="text"
                {...register("name")}
                className={`${style.formControl} ${
                  errors.name ? style.isInvalid : ""
                } ${style.name}`}
              />
              <div className={style.invalidFeedback}>
                {errors.name?.message}
              </div>
            </div>

            <div className="form-group">
              <label>Card number</label>
              <br />
              <input
                type="cardNB"
                {...register("cardNB")}
                className={`${style.formControl} ${
                  errors.cardNB ? style.isInvalid : ""
                } ${style.cardNB}`}
              />
              <div className={style.invalidFeedback}>
                {errors.cardNB?.message}
              </div>
            </div>
            <div className="form-group">
              <label>Expiration date</label>
              <br />
              <input
                type="exp"
                {...register("exp")}
                className={`${style.formControl} ${
                  errors.exp ? style.isInvalid : ""
                } ${style.exp}`}
              />
              <div className={style.invalidFeedback}>{errors.exp?.message}</div>
            </div>

            <div className="form-group">
              <label>CVV</label>
              <br />
              <input
                type="cvv"
                {...register("cvv")}
                className={`${style.formControl} ${
                  errors.cvv ? style.isInvalid : ""
                } ${style.cvv}`}
              />
              <div className={style.invalidFeedback}>{errors.cvv?.message}</div>
            </div>

            <div className={style.payerbtn}>
              <ReusableButtonTwo
                title={`Payer : ${formatCurrency(totalPrice)}`}
                callback={() => console.log("accéder au payment")}
              />
            </div>
            <br />
            <button
              type="button"
              onClick={() => reset()}
              className={style.resetButton}
            >
              Reset
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Payment;
