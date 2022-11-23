import mongoose from 'mongoose'

const schema = new mongoose.Scheama({
    name:{
        type: String,
        required: [true, 'o campo "nome" é obrigatório.']
    },
    email: {
        type: String,
        required: [true, 'o campo "email" é obrigatório.']
    },
    password:{
        type: String,
        required: [true, 'o campo "senha" é obrigatório.']
    },
})

export default mongoose.models.user || mongoose.model('users', schema)