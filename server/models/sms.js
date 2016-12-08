import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const smsSchema = new Schema({
 to: { type: 'String', required: true },
  body: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('sms', smsSchema);
