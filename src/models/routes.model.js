// routes-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const routes = new Schema({

    name: { type: String, required: true },
    grade: { type: String, required: true },
    colour: { type: String, required: true },
    style: { type: String, required: true },
    rope: { type: Number, required: true },
    date: { type: Date, required: true },
    stringDate: { type: String },

    gymId: { type: Schema.Types.ObjectId, ref: 'gyms' },
    evaluationIds: [],

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('routes', routes);
};
