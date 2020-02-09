import React from "react";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import Image from "../../components/image/Image";
import Store from "../../store";
import style from "./Products.module.css";

const Products = props => {
  return (
    <React.Fragment>
      <InnerBanner
        bgimage={Store._state.pageProducts.info.background}
        children={Store._state.pageProducts.info.title}
      />
      <div className={style.container}>
        <section className={style.titleGroup}>
          <h2>{Store._state.pageProducts.category.titleCategory}</h2>
        </section>
        <section className={style.product}>
          <div className={style.productText}>
            <h3>Орто-покрытия</h3>
            <span>
              При ежедневном использовании орто-покрытия можно решить следующие
              проблемы:
            </span>
            <ul>
              <li>Профилактика и исправление плоскостопия</li>
              <li>Улучшение кровообращение</li>
              <li>Укрепление мышц стопы</li>
              <li>
                Активизация рефлексных зон, которые отвечают за состояние
                внутренних органов
              </li>
              <li>
                Снижение локальной перегрузки стоп и снятие нагрузки с
                болезненных участков
              </li>
            </ul>
            <p>
              Яркое, фактурное покрытие превращает профилактическую и лечебную
              процедуру в интересную игру.
            </p>
            <p>
              Детская фантазия безгранична. Попросите малышей придумать новую
              игру и упражнения, играйте вместе, ваши ноги скажут вам спасибо.
              Пазлы легко мыть и собирать вновь, предавать новые формы (квадрат,
              прямоугольник, дорожка, ступеньки, классики)⠀
            </p>
            <p>
              Со временем ребёнок забывает делать упражнения. Положите коврик в
              ванной, в проходном коридоре или на кухне и вся семья без
              напоминания будет топтаться по нему с пользой.
            </p>
          </div>
          <div className={style.productImg}>
            <img src="..//images/products/ortopocr.jpg" alt="орто-покрытие"/>
          </div>
        </section>
        <section className={style.product}>
          <div className={style.productText}>
            <h3>ШИНА ФРЕЙКА</h3>
            <span>Предназначена не для профилактики, а для лечения:</span>
            <ul>
              <li>Предвывиха и подвывиха головки бедра</li>
              <li>Дисплазии легкой степени тяжести</li>
            </ul>
            <span>
              <b>
                Шина Фрейка даёт возможность фиксации бедер ребенка в положении
                отведения и сгибания под углом большим или равным 90°.
              </b>
            </span>
            <p>
              Наша модель УДОБНА тем, что состоит из двух независимых частей:
              бандажа и пластиковой шины-вкладки. По мере роста ребёнка можно
              докупать шины большего размера, что гораздо экономичней. Всего в
              наличии есть 5 размеров (с 15 до 25 см).
            </p>
          </div>
          <div className={style.productImg}>
            <Image alt="Шина Фрейка" width="400" height="400" />
          </div>
        </section>
        <section className={style.product}>
          <div className={style.productText}>
            <h3>СТРЕМЕНА ПАВЛИКА</h3>
            <span>Применяются при:</span>
            <ul>
              <li>дисплазии тазобедренного сустава</li>
              <li>предвывихах, подвывихах головки бедра</li>
              <li>вывихе головки бедра</li>
            </ul>
          </div>
          <div className={style.productImg}>
            <Image alt="Шина Фрейка" width="400" height="400" />
          </div>
        </section>
        <section className={style.product}>
          <div className={style.productText}>
            <h3>Пояс ортопедический для коррекции осанки.</h3>
            <p>
              Корректор нужно носить в течение 3-4 месяцев около 3 часов в день
              желательно при сидячем виде работы.
            </p>
            <p>
              При необходимости рекомендуется сделать месяц перерыва
              и продолжить лечение.
            </p>
            <p>
              Работает как напоминалка – не СУТУЛЬТЕСЬ! Когда человек начинает
              сутулиться, то правильно подобранный пояс будет натирать в области
              подмышек или на груди.
            </p>
            <span>ПОКАЗАНИЯ:</span>
            <ul>
              <li>профилактика нарушений осанки у детей и взрослых</li>
              <li>
                коррекция сутулости, кифоза, сколиотических деформаций
                позвоночника в начальной стадии
              </li>
              <li>
                спондилопатии и остеохондропатии грудного отдела позвоночника
              </li>
            </ul>
            <p>
              Для родителей школьников – это просто находка. В школе некому
              сделать замечание, что не нужно сутулиться. Пояс сделан из
              эластичных лент, которые не видны под одеждой. Результат не
              заставит долго ждать.
            </p>
            <p>
              Позаботьтесь о своём здоровье и здоровье ваших близких, а мы
              поможем – подберём и запишем на курс массажа, проконсультируем о
              сопутствующих товарах, дадим рекомендации, как заниматься в
              домашних условиях.
            </p>
          </div>
          <div className={style.productImg}>
            <Image alt="Шина Фрейка" width="400" height="400" />
          </div>
        </section>
        <section className={style.product}>
          <div className={style.productText}>
            <h3>БАЛАНСИРОВОЧНАЯ ПОДУШКА </h3>
            <span>
              Крутой тренажер для всей семьи, который не занимает много места.
            </span>
            <p>Подходит и взрослым и детям от года.</p>
            <p>Область применение широка.</p>
            <span>Подходит для следующего:</span>
            <ul>
              <li>
                Тренирует вестибулярный аппарат, координацию движения и гибкость
              </li>
              <li>Массаж спины, стоп, мышц таза</li>
              <li>Улучшает осанку, общую физическую форму</li>
              <li>
                Идёт активная работа нервной системы при удержании баланса
              </li>
              <li>Активизирует мозг</li>
              <li>
                Стимулирует биологически активные точки на стопах, что
                благотворно сказывается на работе внутренних органов.
              </li>
              <li>
                ️Подходит для реабилитации после травм опорно-двигательного
                аппарата.
              </li>
              <li>Лечение и профилактика варикоза.</li>
            </ul>
            <p>
              ПОДУШКА оснащена клапаном, который позволяет регулировать
              жесткость и высоту изделия.
            </p>
            <p>
              Одна поверхность тренажера рельефная. Мягкие шипы и производят
              массажный эффект. Выдерживает до 100кг.
            </p>
          </div>
          <div className={style.productImg}>
            <Image alt="Шина Фрейка" width="400" height="400" />
          </div>
        </section>
        <section className={style.product}>
          <div className={style.productText}>
            <h3>ОРТОПЕДИЧЕСКИЕ СТЕЛЬКИ фирмы Аюрведа.</h3>
            <span>СТЕЛЬКА условно СОСТОИТ из двух частей:</span>
            <ul>
              <li>
                верхняя изготовлена из кожи, либо из гигиенического полотна
              </li>
              <li>низ стельки включает супинатор</li>
            </ul>
            <p>
              Самый распространённый диагноз нашего времени плосковальгусная
              установка стоп.
            </p>
            <p>
              Плосковальгусные (х-образные) ноги хорошо поддаются лечению именно
              у детей в раннем возрасте. И основой лечения являются
              ортопедические стельки, обувь.
            </p>
            <p>
              У каждого ребенка на сезон приходится 3-4 пары обуви. Купить
              ортопедическую обувь не всегда есть возможность. А стельки удобны
              в применении и доступны по ценам. Легко переставляются с одной
              пары в другую. Но желательно иметь 2 пары стелек, чтобы была
              возможность просушить их после носки.
            </p>
            <span>
              В НАЛИЧИИ размеры с 13 по 19 (в сантиметрах), двух типов:
            </span>
            <ul>
              <li>
                М2 - средняя жесткость. Высота супинатора средняя, при сильном
                нажатии незначительно сжимается, но форму не теряет.
              </li>
              <li>М3 - жесткие с высоким супинатором в виде арок.</li>
            </ul>
          </div>
          <div className={style.productImg}>
            <Image alt="Шина Фрейка" width="400" height="400" />
          </div>
        </section>
        <section className={style.product}>
          <div className={style.productText}>
            <h3>МЯЧ ФИТБОЛ </h3>
            <span>
              МЯЧ ФИТБОЛ антивзрыв 75 см снижает мышечный гипертонус (а он, как
              правило, встречается у 90 % малышей).
            </span>
            <ul>
              <li>Тренирует координацию и вестибулярный аппарат;</li>
              <li>
                Поможет справиться с желудочными и кишечными коликами, вздутием;
              </li>
              <li>Укрепляет спинной мышечный корсет;</li>
              <li>Стимулирует работу органов дыхания;</li>
              <li>Стабилизирует сердечно-сосудистую систему.</li>
            </ul>
          </div>
          <div className={style.productImg}>
            <Image alt="Шина Фрейка" width="400" height="400" />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Products;
