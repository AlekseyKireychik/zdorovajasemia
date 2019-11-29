import React from "react";
import InnerBanner from "../../components/innerBanner/InnerBanner";
import ServiceItemBtn from "./serviceItem/ServiceItemBtn";
import ServicesItemConten from "./servicesItemContent/ServicesItemContent";
import style from "./Services.module.css";

const servicesDate = [
  {
    id: 1,
    title: "Консультация невролога",
    subTitle: "В консультацию невролога входит:",
    list: [
      "опрос  пациента, жалобы, сбор анамнеза заболевания",
      "объективный осмотр: оценка корковых функций, выявление нарушений со стороны черепно-мозговых нервов, двигательной, чувствительной сфер, оценка рефлексов, координаторные, вестибулярные пробы,определение менингиальнных симптомов, триггерных зон, осмотр кожных покровов и др",
      "выписка рецептов на лекарственные средства",
      "выдача  консультативного заключения, заверенного личной печатью врача, содержащего рекомендации по обследованию, лечению пациента,  срокам повторного осмотра"
    ]
  },
  {
    id: 2,
    title: "Массаж детский (Общий)",
    subTitle: "Курс массажа 10 сеансов способен решить следующие проблемы:",
    list: [
      "Развитие опорно-двигательного аппарата",
      "Регулировать тонус различных групп мышц",
      "Восстановить силы и убрать хроническую усталость",
      "Улучшить кровообращение",
      "Скорректировать осанку",
      "Помочь с проблемами желудочно-кишечного тракта",
      "Укрепить иммунитет",
      "Получение тактильных ощущений, которые способствуют развитию мозга"
    ]
  },
  {
    id: 3,
    title: "Оздоровительная гимнастика (для детей до года)",
    subTitle:
      "Занимаясь оздоровительной гимнастикой, Вы способствуете улучшению работы:",
    list: [
      "Пищеварительная система ( уменьшить образование коликов и решить проблемы со стулом)",
      "Нервная система (нормализовать сон, снизить чрезмерную активность)",
      "Дыхательная система ( избавить от последствий перенесенных ОРВИ и других болезней)",
      "Сердечно-сосудистая система",
      "Развить мускулатуру и мышечный тонус"
    ],
    listTwo: [
      "Не забываем, что оздоровительная гимнастика помогает НЕ ТОЛЬКО КАК ПРОФИЛАКТИКА.",
      "Она работает как ЛЕЧЕНИЕ и ВОССТАНОВЛЕНИЕ после самых разных заболеваний.",
      "Комплекс упражнений подбирается под каждого ребенка и зависит от состояния здоровья и вида заболеваний."
    ]
  },
  {
    id: 4,
    title: "Оздоровительная гимнастика (для детей от 4 до 10, от 10 до 15 лет)",
    subTitle:
      "Дети подросли и на их неокрепшие плечи ложатся самые разные нагрузки:",
    list: [
      "монотонное сидение за партой",
      "спортивные секции",
      "малоподвижные игры",
      "гаджеты"
    ],
    text: [
      "Оздоровительная гимнастика поможет справиться с последствиями современной жизни."
    ],
    subTitleTwo: "ГЛАВНАЯ ЦЕЛЬ и ЗАДАЧА это:",
    subItems: [
      "Предотвращение и лечение сколиоза",
      "Формирование правильной осанки",
      "Улучшение работы сердечно-сосудистой системы",
      "Решение проблем плоскостопия.",
      "Развитие мускулатуры",
      "Воспитание силы воли, выносливости и гибкости."
    ]
  },
  {
    id: 5,
    title: "Массаж для взрослых",
    subTitle:
      "Занимаясь оздоровительной гимнастикой, Вы способствуете улучшению работы:",
    list: [
      "Антицеллюлитный массаж",
      "Лимфодренажный массаж",
      "Медовый массаж",
      "Спортивный массаж",
      "Расслабляющий массаж",
      "Массаж горячими мешочками",
      "Массаж горячими камнями «Стоун-терапия»",
      "Массаж креольский (бамбуковыми палочками)",
      "Общий массаж тела",
      "Массаж спины",
      "Массаж живота",
      "Массаж стоп",
      "Массаж кистей рук",
      "Массаж верхних конечностей + воротниковая зона",
      "Массаж лица",
      "Массаж лица, шеи и декольте"
    ]
  },
  {
    id: 6,
    title: "Тейпирование",
    description: [
      "Кинезиологическое тейпирование – это простой и эффективный метод лечения растяжения связок, мышечных болей и других травм, а также гематом и отеков с помощью специальной клейкой ленты (тейпа). Кинезиотейпы - это эластичные хлопковые ленты, покрытые гипоаллергенным клеящим гелем на акриловой основе. Они накладываются на кожу, и при температуре тела клей активизируется. Поскольку хлопок – дышащий материал, тейпы можно оставлять на коже до 2 недель. При этом пациент абсолютно не ограничен в движениях, и может спокойно принимать водные процедуры."
    ],
    subTitle: "Эффекты кинезиотейпинга:",
    list: [
      "обезболивающий;",
      "противовоспалительный;",
      "лимфодренажный;",
      "динамический – облегчает движение конечности или сустава;",
      "расслабляющее действие на мышцы;",
      "борьба с отеками и гематомами;",
      "мягкая стабилизация сустава."
    ],
    subTitleTwo: "Кинезиотейпинг эффективен в лечении:",
    listTwo: [
      "растяжений связок;",
      "ушибов мягких тканей и гематомы;",
      "подвывихов лодыжки, плеча, пальцев;",
      "плечелопаточного периартрита (боли  в плече);",
      "плантарного фасциита (пяточной шпоры);",
      "болей в колене, подвывиха надколенника, болевого синдрома при хондромаляции;",
      "болей в шее;",
      "головной боли;",
      "боли в пояснице и отёков ног у беременных;",
      "остеохондроза позвоночника;",
      "люмбаго."
    ]
  },
  {
    id: 7,
    title: "Косметология",
    list: [
      "Тщательно выбираете свою косметику? Этого же правила придерживаемся и мы. ",
      "Наш выбор сделан в пользу российской косметики «ARAVIA». Как знак качества - эту фирму выбирают десятки тысяч салонов красоты и косметологов.",
      "Натуральная косметика«ARAVIA» соответствует строгим мировым стандартам и подтверждена международным сертификатам «ECOCER».",
      "Косметика основана на натуральных биоактивных компонентах и работает как витамин для вашей кожи.",
      "Ассортимент «ARAVIA» велик и постоянно пополняется, основываясь на спросе и потребностях клиентов.",
      "ARAVIA Professional - линия для лица",
      "️КАРБОКСИТЕРАПИЯ СО2 – комплекс для насыщении клеток кожи кислородом",
      "ARAVIA Organic - комплекс для коррекции фигуры.",
      "Каждая серия представлена широким ассортиментом от очищения до питания и увлажнения."
    ],
    subTitleTwo:
      "Наши специалисты помогут разобраться и подобрать нужные средства под ваш тип и проблемы кожи, которые нужно решить:",
    listTwo: [
      "️признаки усталости;",
      "️чрезмерно жирная или сухая кожа;",
      "️акне, угревая сыпь, пигментные пятна;",
      "расширенные поры;",
      "возрастные проблемы;",
      "дряблость, целлюлит;",
      "снижение упругости кожи."
    ],
    textTwo: [
      "Прошли времена, когда при записи на массаж вас просили принести тюбик крема для массажа."
    ]
  }
];

const itemServiceTile = servicesDate.map(item => {
  return (
    <ServiceItemBtn
      key={item.id}
      children={item.title}
    />
  );
});

const ValServiceItemConten = servicesDate.map(item => {
  return (
    <ServicesItemConten
      key={"0" + item.id}
      title={item.title}
      description={item.description}
      subTitle={item.subTitle}
      list={item.list}
      text={item.text}
      subTitleTwo={item.subTitleTwo}
      listTwo={item.listTwo}
      textTwo={item.textTwo}      
    />
  );
});

const Services = props => {
  return (
    <React.Fragment>
      <InnerBanner bgimage="..//images/services.jpg" children="Услуги" />
      <div className={style.container}>
        <ul className={style.list}>{itemServiceTile}</ul>
        {ValServiceItemConten}
      </div>
    </React.Fragment>
  );
};

export default Services;