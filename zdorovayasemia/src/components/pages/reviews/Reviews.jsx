import React from "react";
import InnerBanner from "../../innerBanner/InnerBanner";
import Image from "../../image/Image";
import Button from "../../button/Button";
import style from "./Reviews.module.css";

const Reviews = props => {
  return (
    <div>
      <InnerBanner bgimage="..//images/mainpic.jpg" children="Отзывы" />
      <div className={style.container}>
        <div className={style.wrapTop}>
          <div className={style.wrapText}>
            <span>
              Оставьте отзыв о массажно-оздоровительном центре «Здоровая семья»
            </span>
            <p>Поделитесь вашим опытом общения c МОЦ «Здоровая семья»</p>
          </div>
          <Button children="Оставить отзыв" />
        </div>
        <div className={style.review}>
          <div className={style.reviewInfo}>
            <div className={style.reviewLeft}>
              <div className={style.reviewDate}>08.12.2018</div>
              <div className={style.reviewName}>
                <Image
                  width="14"
                  height="15"
                  src="..//images/icons/person.svg"
                />
                Жанна
              </div>
            </div>
            <div className={style.reviewRang}>
              <div className={style.reviewCounter}>5</div>
              <div className={style.reviewStars}>
                <Image
                  width="18"
                  height="18"
                  src="..//images/icons/star-active.svg"
                />
                <Image
                  width="18"
                  height="18"
                  src="..//images/icons/star-active.svg"
                />
                <Image
                  width="18"
                  height="18"
                  src="..//images/icons/star-active.svg"
                />
                <Image
                  width="18"
                  height="18"
                  src="..//images/icons/star-active.svg"
                />
                <Image
                  width="18"
                  height="18"
                  src="..//images/icons/star-active.svg"
                />
              </div>
            </div>
          </div>
          <div className={style.reviewText}>
            <span className={style.title}>Обертывания и маски для лица</span>
            <p className={style.text}>
              Добрый вечер! Случайно нашла на страничке вк группу "Здоровая
              семья". Сразу записалась, и попала к Магу и волшебнику Дмитрию.
              Его ручки творят чудеса, обертывания и маски для лица делают кожу
              бархатистой. Он действительно знает, что нужно моей коже))
              Рекомендую всем девушкам, женщинам, и мужчинам тоже (массаж
              восхитителен)!!!
            </p>
          </div>
          <span className={style.btn}>Комментировать</span>
        </div>
        <div className={style.review}>
          <div className={style.reviewInfo}>
            <div className={style.reviewLeft}>
              <div className={style.reviewDate}>08.12.2018</div>
              <div className={style.reviewName}>
                <Image
                  width="14"
                  height="15"
                  src="..//images/icons/person.svg"
                />
                Имя Фамилия
              </div>
            </div>
            <div className={style.reviewRang}>
              <div className={style.reviewCounter}>4.0</div>
              <div className={style.reviewStars}>
                <Image
                  width="18"
                  height="18"
                  src="..//images/icons/star-active.svg"
                />
                <Image
                  width="18"
                  height="18"
                  src="..//images/icons/star-active.svg"
                />
                <Image
                  width="18"
                  height="18"
                  src="..//images/icons/star-active.svg"
                />
                <Image
                  width="18"
                  height="18"
                  src="..//images/icons/star-active.svg"
                />
                <Image
                  width="18"
                  height="18"
                  src="..//images/icons/star-favourite.svg"
                />
              </div>
            </div>
          </div>
          <div className={style.reviewText}>
            <span className={style.title}>
              При закрытии вклада сняли проценты и часть депозита
            </span>
            <p className={style.text}>
              Пришлось обратиться в банк , чтоб выдали перевод КОРОНА,
              продержали около часа, так как было передо мной 2 вип клиента, при
              выдачи перевода требовали у меня разменные...читать далее(если
              много текста)
            </p>
          </div>
          <span className={style.btn}>Комментировать</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
