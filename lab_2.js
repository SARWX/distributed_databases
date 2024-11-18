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
      "rec_place": "Кубок Америки 2021, Бразилия, Рио-де-Жанейро", 
      "sport_ref": DBRef("sports", football.insertedId) 
  },
  { 
      "rec_value": 5, 
      "rec_metric": "Голы", 
      "rec_date": new Date("2022-12-18"), 
      "rec_place": "Чемпионат мира 2022, Катар, Лусаил", 
      "sport_ref": DBRef("sports", football.insertedId) 
  },
  { 
      "rec_value": 10, 
      "rec_metric": "Голевые передачи", 
      "rec_date": new Date("2019-05-25"), 
      "rec_place": "Ла Лига 2019, Испания, Барселона", 
      "sport_ref": DBRef("sports", football.insertedId) 
  },
  { 
      "rec_value": 3, 
      "rec_metric": "Голы", 
      "rec_date": new Date("2015-06-06"), 
      "rec_place": "Лига чемпионов 2015, Германия, Берлин", 
      "sport_ref": DBRef("sports", football.insertedId) 
  },
  { 
      "rec_value": 4, 
      "rec_metric": "Голевые передачи", 
      "rec_date": new Date("2021-03-10"), 
      "rec_place": "Лига чемпионов 2021, Франция, Париж", 
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
      "rec_metric": "Место", 
      "rec_date": new Date("2021-12-12"), 
      "rec_place": "Гран-при Абу-Даби 2021, ОАЭ, Абу-Даби", 
      "sport_ref": DBRef("sports", formula1.insertedId) 
  },
  { 
      "rec_value": "1:26.103", 
      "rec_metric": "Лучший круг", 
      "rec_date": new Date("2022-11-20"), 
      "rec_place": "Гран-при Бразилии 2022, Бразилия, Сан-Паулу", 
      "sport_ref": DBRef("sports", formula1.insertedId) 
  },
  { 
      "rec_value": 1, 
      "rec_metric": "Место", 
      "rec_date": new Date("2021-12-12"), 
      "rec_place": "Сезон Формулы 1 2021, Великобритания, Сильверстоун", 
      "sport_ref": DBRef("sports", formula1.insertedId) 
  },
  { 
      "rec_value": 3, 
      "rec_metric": "Место", 
      "rec_date": new Date("2020-12-13"), 
      "rec_place": "Гран-при Абу-Даби 2020, ОАЭ, Абу-Даби", 
      "sport_ref": DBRef("sports", formula1.insertedId) 
  },
  { 
      "rec_value": 1, 
      "rec_metric": "Место", 
      "rec_date": new Date("2022-11-20"), 
      "rec_place": "Гран-при Абу-Даби 2022, ОАЭ, Абу-Даби", 
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
      "rec_value": 2000, 
      "rec_metric": "Очки", 
      "rec_date": new Date("2004-07-03"), 
      "rec_place": "Уимблдон, Великобритания, Лондон", 
      "sport_ref": DBRef("sports", tennis.insertedId) 
  },
  { 
      "rec_value": 2000, 
      "rec_metric": "Очки", 
      "rec_date": new Date("2014-06-07"), 
      "rec_place": "Ролан Гаррос, Франция, Париж", 
      "sport_ref": DBRef("sports", tennis.insertedId) 
  },
  { 
      "rec_value": 2000, 
      "rec_metric": "Очки", 
      "rec_date": new Date("2008-01-26"), 
      "rec_place": "Australian Open, Австралия, Мельбурн", 
      "sport_ref": DBRef("sports", tennis.insertedId) 
  },
  { 
      "rec_value": 1300, 
      "rec_metric": "Очки", 
      "rec_date": new Date("2012-08-05"), 
      "rec_place": "Олимпиада 2012, Великобритания, Лондон", 
      "sport_ref": DBRef("sports", tennis.insertedId) 
  },
  { 
      "rec_value": 2000, 
      "rec_metric": "Очки", 
      "rec_date": new Date("2006-09-09"), 
      "rec_place": "US Open, США, Нью-Йорк", 
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
      "rec_value": 143, 
      "rec_metric": "Очки за победу", 
      "rec_date": new Date("2020-10-24"), 
      "rec_place": "UFC 254, ОАЭ, Абу-Даби", 
      "sport_ref": DBRef("sports", mma.insertedId) 
  },
  { 
      "rec_value": 29, 
      "rec_metric": "Удары в голову", 
      "rec_date": new Date("2020-10-24"), 
      "rec_place": "UFC 254, ОАЭ, Абу-Даби", 
      "sport_ref": DBRef("sports", mma.insertedId) 
  },
  { 
      "rec_value": 102, 
      "rec_metric": "Очки за победу", 
      "rec_date": new Date("2018-04-07"), 
      "rec_place": "UFC 223, США, Бруклин", 
      "sport_ref": DBRef("sports", mma.insertedId) 
  },
  { 
      "rec_value": 93, 
      "rec_metric": "Удары в голову", 
      "rec_date": new Date("2018-04-07"), 
      "rec_place": "UFC 223, США, Бруклин", 
      "sport_ref": DBRef("sports", mma.insertedId) 
  },
  { 
      "rec_value": 127, 
      "rec_metric": "Очки за победу", 
      "rec_date": new Date("2019-09-07"), 
      "rec_place": "UFC 242, ОАЭ, Абу-Даби", 
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
      "rec_value": 245.89, 
      "rec_metric": "Очки за выступление", 
      "rec_date": new Date("2014-02-11"), 
      "rec_place": "Олимпийские игры 2014, Россия, Сочи", 
      "sport_ref": DBRef("sports", figure_skating.insertedId) 
  },
  { 
      "rec_value": 236.86, 
      "rec_metric": "Очки за выступление", 
      "rec_date": new Date("2014-02-15"), 
      "rec_place": "Олимпийские игры 2014, Россия, Сочи", 
      "sport_ref": DBRef("sports", figure_skating.insertedId) 
  },
  { 
      "rec_value": 225.34, 
      "rec_metric": "Очки за выступление", 
      "rec_date": new Date("2013-03-16"), 
      "rec_place": "Чемпионат мира 2013, Канада, Лондон", 
      "sport_ref": DBRef("sports", figure_skating.insertedId) 
  },
  { 
      "rec_value": 210.45, 
      "rec_metric": "Очки за выступление", 
      "rec_date": new Date("2012-01-28"), 
      "rec_place": "Чемпионат Европы 2012, Великобритания, Шеффилд", 
      "sport_ref": DBRef("sports", figure_skating.insertedId) 
  },
  { 
      "rec_value": 220.98, 
      "rec_metric": "Очки за выступление", 
      "rec_date": new Date("2014-01-18"), 
      "rec_place": "Чемпионат Европы 2014, Венгрия, Будапешт", 
      "sport_ref": DBRef("sports", figure_skating.insertedId) 
  }
];


var volosozhar_result = db.records.insertMany(volosozhar_records);
var volosozhar_record_ids = Object.values(volosozhar_result.insertedIds);

db.athletes.updateOne(
  { "ath_name": "Татьяна", "ath_surname": "Волосожар" },
  { $push: { "records": { $each: volosozhar_record_ids } } }
);


// 6 - Проверка
// db.athletes.aggregate([
//   { $match: { "ath_name": "Лионель", "ath_surname": "Месси" } },
//   { $lookup: {
//       from: "records",            // Коллекция, с которой мы делаем объединение
//       localField: "records",      // Поле в athletes, которое содержит массив ObjectId
//       foreignField: "_id",        // Поле в коллекции records, на которое ссылаются id из athletes
//       as: "messi_records"         // Псевдоним для поля с результатами объединения
//   }},
//  { $unwind: "$messi_records" },  // Разворачиваем массив для вывода каждой записи отдельно
//  { $replaceRoot: { newRoot: "$messi_records" } }  // Заменяем корень документа на документ из records
// ]);








// ЛАБ 3

// 1
db.athletes.createIndex({ ath_surname: 1 }, { name: "last_name" });
db.records.createIndex({ rec_date: 1 }, { name: "date" });
db.sports.createIndex({ spt_name: 1 }, { name: "name", unique: true });

// 2
// 2.1 - добавить запись к спортсмену
// Найдем футбол
var football = db.sports.findOne({ spt_name: "Футбол" });
// добавим в коллекцию
var messi_record = db.records.insertOne(  
  { 
    "rec_value": 0, 
    "rec_metric": "Голы", 
    "rec_date": new Date("2017-11-11"), 
    "rec_place": "Товарищеский матч, Россия, Москва", 
    "sport_ref": DBRef("sports", football._id)
  });

db.athletes.updateOne(
  { "ath_name": "Лионель", "ath_surname": "Месси" },
  { $push: { "records": messi_record.insertedId } }
);


// 2.21 - добавить новое достижение спортсмену
db.athletes.updateOne(
  { "ath_name": "Макс", "ath_surname": "Ферстаппен" },
  { $push: { "achievements": {
    "ach_competition": "Гран-при Формулы 1",
    "ach_medal": "Золото",
    "ach_date": new Date("2023-11-05"),
    "ach_location": "Мехико, Мексика"
  }
   } }
);


// 2.22 изменить результат спортсмена
db.records.updateOne(
  { "rec_date": new Date("2022-12-18"), 
    "rec_place": "Чемпионат мира 2022, Катар, Лусаил"  },
  { $set: { "rec_value": 7  }}
);


// 2.31 - удаление результатов за апрель 2018 у спортсмена
var habib = db.athletes.findOne({ "ath_name": "Хабиб", "ath_surname": "Нурмагомедов" });
var recordIds = habib.records;

// фильтруем записи по дате и получаем массив ID
var recordsToDeleteIds = db.records.find({
  "_id": { $in: recordIds },
  "rec_date": { $gte: new Date("2018-04-01"), $lt: new Date("2018-05-01") }
}).map(record => record._id).toArray();  // преобразуем курсор в массив id

// удаляем записи из коллекции records
db.records.deleteMany({
  "_id": { $in: recordsToDeleteIds }
});

// удаляем ссылки на эти записи из массива records у спортсмена
db.athletes.updateOne(
  { "_id": habib._id },
  { $pull: { "records": { $in: recordsToDeleteIds } } }
);


// 3 - поиск
// 3.1 - все результаты спортсмена по датам (сортировка по дате)
db.athletes.aggregate([
  { 
    $match: { "ath_name": "Хабиб", "ath_surname": "Нурмагомедов" } 
  },
  {
    $lookup: {
      from: "records",
      localField: "records",
      foreignField: "_id",
      as: "athlete_results"
    }
  },
  { 
    $unwind: "$athlete_results" 
  },
  {
    $project: {
      _id: 0,
      "athlete_results.rec_date": 1,
      "athlete_results.rec_place": 1,
      "athlete_results.rec_value": 1,
      "athlete_results.rec_metric": 1
    }
  },
  { 
    $sort: { "athlete_results.rec_date": 1 } 
  }
]);


// 3.2 - поиск всех спортсменов, учавствовавших в соревнованиях в России
db.athletes.aggregate([
  {
    $lookup: {
      from: "records",
      localField: "records",
      foreignField: "_id",
      as: "athlete_results"
    }
  },
  {
    $unwind: "$athlete_results" // Разворачиваем массив "athlete_results" для фильтрации
  },
  {
    $match: {
      "athlete_results.rec_place": { $regex: "Россия", $options: "i" }
    }
  },
  {
    $project: {
      _id: 0,
      "ath_name": 1,
      "ath_surname": 1,
      "ath_country": 1,
      "athlete_results.rec_place": 1,
      "athlete_results.rec_date": 1
    }
  },
  { 
    $sort: { "ath_name": 1, "ath_surname": 1 } 
  }
]);
