import mongoose from 'mongoose'

const Schema = mongoose.Schema

const FlavourSchema = new Schema({
  active: Boolean,
  name: String,
})

export default mongoose.model('Flavour', FlavourSchema)
