//
// 1 - Создание коллекции спортсменов
//
db.athletes.insertMany([
    {
      "ath_birthdate": new Date("1997-09-30"),
      "ath_name": "Макс",
      "ath_surname": "Ферстаппен",
      "ath_country": "Нидерланды",
      "achievements": [],
      "records": []
    },
    {
      "ath_birthdate": new Date("1987-06-24"),
      "ath_name": "Лионель",
      "ath_surname": "Месси",
      "ath_country": "Аргентина",
      "achievements": [],
      "records": []
    },
    {
      "ath_birthdate": new Date("1987-04-19"),
      "ath_name": "Мария",
      "ath_surname": "Шарапова",
      "ath_country": "Россия",
      "achievements": [],
      "records": []
    },
    {
      "ath_birthdate": new Date("1988-09-20"),
      "ath_name": "Хабиб",
      "ath_surname": "Нурмагомедов",
      "ath_country": "Россия",
      "achievements": [],
      "records": []
    },
    {
      "ath_birthdate": new Date("1986-05-22"),
      "ath_name": "Татьяна",
      "ath_surname": "Волосожар",
      "ath_country": "Россия",
      "achievements": [],
      "records": []
    }
]);
  

//
// 2 - Создание переменных достижений спортсменов
//
var max_achiev = [
    {
      "ach_competition": "Гран-при Формулы 1",
      "ach_medal": "Золото",
      "ach_date": new Date("2023-10-15"),
      "ach_location": "Остин, США"
    },
    {
      "ach_competition": "Гран-при Монако",
      "ach_medal": "Золото",
      "ach_date": new Date("2023-05-28"),
      "ach_location": "Монако, Монако"
    },
    {
      "ach_competition": "Гран-при Бельгии",
      "ach_medal": "Золото",
      "ach_date": new Date("2023-07-30"),
      "ach_location": "Спа, Бельгия"
    },
    {
      "ach_competition": "Гран-при Венгрии",
      "ach_medal": "Золото",
      "ach_date": new Date("2023-07-23"),
      "ach_location": "Будапешт, Венгрия"
    },
    {
      "ach_competition": "Чемпионат мира среди пилотов",
      "ach_medal": "Золото",
      "ach_date": new Date("2023-12-01"),
      "ach_location": "Мировой"
    }
];
  
var messi_achiev = [
    {
      "ach_competition": "Чемпионат мира по футболу",
      "ach_medal": "Золото",
      "ach_date": new Date("2022-12-18"),
      "ach_location": "Лусаил, Катар"
    },
    {
      "ach_competition": "Копа Америка",
      "ach_medal": "Золото",
      "ach_date": new Date("2021-07-10"),
      "ach_location": "Рио-де-Жанейро, Бразилия"
    },
    {
      "ach_competition": "Лига чемпионов УЕФА",
      "ach_medal": "Золото",
      "ach_date": new Date("2015-06-06"),
      "ach_location": "Берлин, Германия"
    },
    {
      "ach_competition": "Лучший бомбардир Ла Лиги",
      "ach_medal": "Награда",
      "ach_date": new Date("2019-05-19"),
      "ach_location": "Испания"
    },
    {
      "ach_competition": "Золотой мяч",
      "ach_medal": "Награда",
      "ach_date": new Date("2023-10-30"),
      "ach_location": "Париж, Франция"
    }
];
  
 var sharapova_achiev = [
    {
      "ach_competition": "Уимблдон",
      "ach_medal": "Золото",
      "ach_date": new Date("2004-07-03"),
      "ach_location": "Лондон, Великобритания"
    },
    {
      "ach_competition": "Открытый чемпионат США",
      "ach_medal": "Золото",
      "ach_date": new Date("2006-09-09"),
      "ach_location": "Нью-Йорк, США"
    },
    {
      "ach_competition": "Открытый чемпионат Австралии",
      "ach_medal": "Золото",
      "ach_date": new Date("2008-01-26"),
      "ach_location": "Мельбурн, Австралия"
    },
    {
      "ach_competition": "Открытый чемпионат Франции",
      "ach_medal": "Золото",
      "ach_date": new Date("2014-06-07"),
      "ach_location": "Париж, Франция"
    },
    {
      "ach_competition": "Чемпионат WTA",
      "ach_medal": "Золото",
      "ach_date": new Date("2004-11-15"),
      "ach_location": "Лос-Анджелес, США"
    }
];
  
var khabib_achiev = [
    {
      "ach_competition": "Чемпионат UFC в легком весе",
      "ach_medal": "Золото",
      "ach_date": new Date("2018-04-07"),
      "ach_location": "Бруклин, США"
    },
    {
      "ach_competition": "UFC 229",
      "ach_medal": "Золото",
      "ach_date": new Date("2018-10-06"),
      "ach_location": "Лас-Вегас, США"
    },
    {
      "ach_competition": "UFC 242",
      "ach_medal": "Золото",
      "ach_date": new Date("2019-09-07"),
      "ach_location": "Абу-Даби, ОАЭ"
    },
    {
      "ach_competition": "UFC 254",
      "ach_medal": "Золото",
      "ach_date": new Date("2020-10-24"),
      "ach_location": "Абу-Даби, ОАЭ"
    },
    {
      "ach_competition": "Непобежденный рекорд",
      "ach_medal": "Награда",
      "ach_date": new Date("2020-10-24"),
      "ach_location": "Мировой"
    }
];
  
var volosozhar_achiev = [
    {
      "ach_competition": "Зимние Олимпийские игры",
      "ach_medal": "Золото",
      "ach_date": new Date("2014-02-12"),
      "ach_location": "Сочи, Россия"
    },
    {
      "ach_competition": "Чемпионат мира по фигурному катанию",
      "ach_medal": "Золото",
      "ach_date": new Date("2013-03-16"),
      "ach_location": "Лондон, Канада"
    },
    {
      "ach_competition": "Чемпионат Европы по фигурному катанию",
      "ach_medal": "Золото",
      "ach_date": new Date("2012-01-28"),
      "ach_location": "Шеффилд, Великобритания"
    },
    {
      "ach_competition": "Финал Гран-при",
      "ach_medal": "Золото",
      "ach_date": new Date("2012-12-08"),
      "ach_location": "Сочи, Россия"
    },
    {
      "ach_competition": "Чемпионат России по фигурному катанию",
      "ach_medal": "Золото",
      "ach_date": new Date("2014-12-26"),
      "ach_location": "Россия"
    }
];


//
// 3 - Вставка достижений в документы спортсменов
//
db.athletes.updateOne(
    { "ath_name": "Макс", "ath_surname": "Ферстаппен" },
    { $push: { "achievements": { $each: max_achiev } } }
);
  
db.athletes.updateOne(
    { "ath_name": "Лионель", "ath_surname": "Месси" },
    { $push: { "achievements": { $each: messi_achiev } } }
);
  
db.athletes.updateOne(
    { "ath_name": "Мария", "ath_surname": "Шарапова" },
    { $push: { "achievements": { $each: sharapova_achiev } } }
);
  
db.athletes.updateOne(
    { "ath_name": "Хабиб", "ath_surname": "Нурмагомедов" },
    { $push: { "achievements": { $each: khabib_achiev } } }
);
  
db.athletes.updateOne(
    { "ath_name": "Татьяна", "ath_surname": "Волосожар" },
    { $push: { "achievements": { $each: volosozhar_achiev } } }
);
   

//
// 4 - Создание коллекии видов спорта
//
var football = db.sports.insertOne({ 
    "spt_name": "Футбол", 
    "spt_category": 1, 
    "spt_olympic": true 
});
var formula1 = db.sports.insertOne({ 
    "spt_name": "Формула 1", 
    "spt_category": 1, 
    "spt_olympic": false 
});
var hockey = db.sports.insertOne({ 
    "spt_name": "Хоккей", 
    "spt_category": 3, 
    "spt_olympic": true 
});
var tennis = db.sports.insertOne({ 
    "spt_name": "Большой теннис", 
    "spt_category": 1, 
    "spt_olympic": true 
});
var boxing = db.sports.insertOne({ 
    "spt_name": "Бокс", 
    "spt_category": 1, 
    "spt_olympic": true 
});
var mma = db.sports.insertOne({ 
    "spt_name": "ММА", 
    "spt_category": 1, 
    "spt_olympic": false 

});
var figure_skating = db.sports.insertOne({ 
    "spt_name": "Фигурное катание", 
    "spt_category": 2, 
    "spt_olympic": true 

});
var swimming = db.sports.insertOne({
    "spt_name": "Плавание", 
    "spt_category": 1, 
    "spt_olympic": true 

});


//
// 5 - Создание коллекции записей для спортсменов
//

// 5.1 - Записи для Месси
var messi_records = [
    { 
        "rec_value": 2, 
        "rec_metric": "Голы", 
        "rec_date": new Date("2021-07-10"), 
        "rec_place": "Кубок Америки 2021", 
        "sport_ref": DBRef("sports", football.insertedId) 
    },
    { 
        "rec_value": 5, 
        "rec_metric": "Голы", 
        "rec_date": new Date("2022-12-18"), 
        "rec_place": "Чемпионат мира 2022", 
        "sport_ref": DBRef("sports", football.insertedId) 
    },
    { 
        "rec_value": 10,
        "rec_metric": "Голы", 
        "rec_date": new Date("2019-05-25"), 
        "rec_place": "Ла Лига 2019", 
        "sport_ref": DBRef("sports", football.insertedId) 
    },
    { 
        "rec_value": 3, 
        "rec_metric": "Голы", 
        "rec_date": new Date("2015-06-06"), 
        "rec_place": "Лига чемпионов 2015", 
        "sport_ref": DBRef("sports", football.insertedId) 
    },
    { 
        "rec_value": 1, 
        "rec_metric": "Золотой мяч", 
        "rec_date": new Date("2019-12-02"), 
        "rec_place": "Париж", 
        "sport_ref": DBRef("sports", football.insertedId) 
    }
];

var messi_result = db.records.insertMany(messi_records);
var messi_record_ids = Object.values(messi_result.insertedIds);

db.athletes.updateOne(
  { "ath_name": "Лионель", "ath_surname": "Месси" },
  { $push: { "records": { $each: messi_record_ids } } }
);

// 5.2 - Записи для Макса Ферстаппена
var max_records = [
    { 
        "rec_value": 1, 
        "rec_metric": "Победа", 
        "rec_date": new Date("2021-12-12"), 
        "rec_place": "Гран-при Абу-Даби 2021", 
        "sport_ref": DBRef("sports", formula1.insertedId) 
    },
    { 
        "rec_value": 15, 
        "rec_metric": "Победы за сезон", 
        "rec_date": new Date("2022-11-20"), 
        "rec_place": "Сезон Формулы 1 2022", 
        "sport_ref": DBRef("sports", formula1.insertedId) 
    },
    { 
        "rec_value": 1, 
        "rec_metric": "Чемпион мира", 
        "rec_date": new Date("2021-12-12"), 
        "rec_place": "Сезон Формулы 1 2021", 
        "sport_ref": DBRef("sports", formula1.insertedId) 
    },
    { 
        "rec_value": 10, 
        "rec_metric": "Подиумы", 
        "rec_date": new Date("2020-12-13"), 
        "rec_place": "Сезон Формулы 1 2020", 
        "sport_ref": DBRef("sports", formula1.insertedId) 
    },
    { 
        "rec_value": 2, 
        "rec_metric": "Чемпион мира", 
        "rec_date": new Date("2022-11-20"), 
        "rec_place": "Сезон Формулы 1 2022", 
        "sport_ref": DBRef("sports", formula1.insertedId) 
    }
];

var max_result = db.records.insertMany(max_records);
var max_record_ids = Object.values(max_result.insertedIds);

db.athletes.updateOne(
  { "ath_name": "Макс", "ath_surname": "Ферстаппен" },
  { $push: { "records": { $each: max_record_ids } } }
);

// 5.3 - Записи для Марии Шараповой
var sharapova_records = [
    { 
        "rec_value": 1, 
        "rec_metric": "Победа", 
        "rec_date": new Date("2004-07-03"), 
        "rec_place": "Уимблдон", 
        "sport_ref": DBRef("sports", tennis.insertedId) 
    },
    { 
        "rec_value": 5, 
        "rec_metric": "Победы на турнирах Большого шлема", 
        "rec_date": new Date("2014-06-07"), 
        "rec_place": "Ролан Гаррос", 
        "sport_ref": DBRef("sports", tennis.insertedId) 
    },
    { 
        "rec_value": 1, 
        "rec_metric": "Победа", 
        "rec_date": new Date("2008-01-26"), 
        "rec_place": "Australian Open", 
        "sport_ref": DBRef("sports", tennis.insertedId) 
    },
    { 
        "rec_value": 1, 
        "rec_metric": "Серебро", 
        "rec_date": new Date("2012-08-05"), 
        "rec_place": "Олимпиада 2012", 
        "sport_ref": DBRef("sports", tennis.insertedId) 
    },
    { 
        "rec_value": 1, 
        "rec_metric": "Победа", 
        "rec_date": new Date("2006-09-09"), 
        "rec_place": "US Open", 
        "sport_ref": DBRef("sports", tennis.insertedId) 
    }
];

var sharapova_result = db.records.insertMany(sharapova_records);
var sharapova_record_ids = Object.values(sharapova_result.insertedIds);

db.athletes.updateOne(
  { "ath_name": "Мария", "ath_surname": "Шарапова" },
  { $push: { "records": { $each: sharapova_record_ids } } }
);

// 5.4 - Записи для Хабиба Нурмагомедова
var khabib_records = [
    { 
        "rec_value": 1, 
        "rec_metric": "Победа", 
        "rec_date": new Date("2020-10-24"), 
        "rec_place": "UFC 254", 
        "sport_ref": DBRef("sports", mma.insertedId) 
    },
    { 
        "rec_value": 29, "rec_metric": "Беспроигрышная серия", 
        "rec_date": new Date("2020-10-24"), 
        "rec_place": "Карьерный итог", 
        "sport_ref": DBRef("sports", mma.insertedId) 
    },
    { 
        "rec_value": 1, "rec_metric": "Победа", 
        "rec_date": new Date("2018-04-07"), 
        "rec_place": "UFC 223", 
        "sport_ref": DBRef("sports", mma.insertedId) 
    },
    { 
        "rec_value": 1, "rec_metric": "Победа", 
        "rec_date": new Date("2019-09-07"), 
        "rec_place": "UFC 242", 
        "sport_ref": DBRef("sports", mma.insertedId) 
    },
    { 
        "rec_value": 1, "rec_metric": "Чемпион UFC в лёгком весе", 
        "rec_date": new Date("2018-04-07"), 
        "rec_place": "UFC", 
        "sport_ref": DBRef("sports", mma.insertedId) 
    }
];

var khabib_result = db.records.insertMany(khabib_records);
var khabib_record_ids = Object.values(khabib_result.insertedIds);

db.athletes.updateOne(
  { "ath_name": "Хабиб", "ath_surname": "Нурмагомедов" },
  { $push: { "records": { $each: khabib_record_ids } } }
);

// 5.5 - Записи для Татьяны Волосожар
var volosozhar_records = [
    { 
        "rec_value": 1, 
        "rec_metric": "Место", 
        "rec_date": new Date("2014-02-11"), 
        "rec_place": "Олимпийские игры 2014", 
        "sport_ref": DBRef("sports", figure_skating.insertedId) 
    },
    { 
        "rec_value": 1, 
        "rec_metric": "Место", 
        "rec_date": new Date("2014-02-15"), 
        "rec_place": "Олимпийские игры 2014", 
        "sport_ref": DBRef("sports", figure_skating.insertedId) 
    },
    { 
        "rec_value": 1, 
        "rec_metric": "Место", 
        "rec_date": new Date("2013-03-16"), 
        "rec_place": "Чемпионат мира 2013", 
        "sport_ref": DBRef("sports", figure_skating.insertedId) 
    },
    { 
        "rec_value": 1, 
        "rec_metric": "Место", 
        "rec_date": new Date("2012-01-28"), 
        "rec_place": "Чемпионат Европы 2012", 
        "sport_ref": DBRef("sports", figure_skating.insertedId) 
    },
    { 
        "rec_value": 1, 
        "rec_metric": "Место", 
        "rec_date": new Date("2014-01-18"), 
        "rec_place": "Чемпионат Европы 2014", 
        "sport_ref": DBRef("sports", figure_skating.insertedId) 
    }
];

var volosozhar_result = db.records.insertMany(volosozhar_records);
var volosozhar_record_ids = Object.values(volosozhar_result.insertedIds);

db.athletes.updateOne(
  { "ath_name": "Татьяна", "ath_surname": "Волосожар" },
  { $push: { "records": { $each: volosozhar_record_ids } } }
);
