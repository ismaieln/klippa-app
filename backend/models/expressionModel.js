import mongoose from 'mongoose'

const expressionSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Expression = mongoose.model('Expression', expressionSchema)

export default Expression
