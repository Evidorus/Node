const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/garage",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connecté");
  }
);

const garageSchema = new mongoose.Schema({
  brand: String,
  model: String,

  year: Number,
  created: {
      type: Date,
      default: new Date()
  }
});

const carsModel = mongoose.model("cars", garageSchema);

// carsModel
//   .deleteMany({})
//   .then(() => {
//     carsModel.create([
//       {
//         brand: "Renault",
//         model: "Espace",
//         year: 1999,
//       },
//       {
//         brand: "Renault",
//         model: "Scenic",
//         year: 2004,
//       },
//       {
//         brand: "Peugeot",
//         model: "308",
//         year: 2017,
//       },
//     ]);
//   })

// carsModel.findById(mongoose.Types.ObjectId('60463029f38fb924accbbd11')).then((result) => console.log(result))

// carsModel.updateMany({
//     model: 'Espace'
// },
// {
//     year: 2000
// }).catch((error) => {console.log(error)})

// carsModel.deleteMany({
//     brand: 'Renault'
// }).then(result => { console.log(result) })

// carsModel.insertMany([
//     {
//         brand: 'Aston Martin',
//         model: 'DB9',
//         year: 2010,
//         created: now
//     },
//     {
//         brand: 'Range Rover',
//         model: 'Discovery Sport',
//         year: 2017,
//         created: now
//     }]).then(response => {console.log(response)})

// carsModel.find({
//     year: {$gt: 2015}
// }).then(response => {console.log(response)})

var now = (new Date().toLocaleDateString('fr-FR'))
// carsModel.find({
//     model: /o/
// }).then(response => {console.log(response, now)})


