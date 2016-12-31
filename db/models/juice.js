import mongoose from 'mongoose'

const Schema = mongoose.Schema

const FlavourSchema = new Schema({
  id: String,
  name: String,
})

const JuiceSchema = new Schema({
  brand: String,
  dateCreated: Date,
  description: String,
  flavours: [FlavourSchema],
  name: String,
})

export default mongoose.model('Juice', JuiceSchema)
