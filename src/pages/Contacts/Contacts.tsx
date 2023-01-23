import React from "react";
import "./Contacts.scss";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div className="contact">
      <h1 className="contact__title">ОБРАТНАЯ СВЯЗЬ</h1>
      <div className="contact__divider" />
      <form action="contact.php">
        <div className="contact__grid-wrap">
          <div className="contact__item contact__item--grid-a">
            <input className="contact__input" type="text" id="name" />
            <label className="contact__label" htmlFor="name">
              Имя отправителя*
            </label>
          </div>

          <div className="contact__item contact__item--grid-b">
            <input className="contact__input" type="text" id="email" />
            <label className="contact__label" htmlFor="email">
              @mail*
            </label>
          </div>

          <div className="contact__item contact__item--grid-c">
            <input className="contact__input" type="text" id="theme" />
            <label className="contact__label" htmlFor="theme">
              Тема письма*
            </label>
          </div>

          <div className="contact__item contact__item--grid-d">
            <textarea
              wrap="soft"
              className="contact__input contact__input--comment"
              id="comment"
            />
            <label className="contact__label" htmlFor="comment">
              Текст сообщения*
            </label>
          </div>
        </div>
        <div className="contact__btn-wrap">
          <input
            className="contact__button"
            type="submit"
            id="subm"
            value="ОТПРАВИТЬ СООБЩЕНИЕ"
          />
        </div>
      </form>
    </div>
  );
};

export default Contacts;
