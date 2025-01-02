// ???

import mongoose from 'mongoose'

const medicalRecordSchema = new mongoose.Schema({
    patientId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
    },
    medicalHistory: {
        allergies : [String],
        medicalConditions : String
    },
    visit :{
        date : Date.now
    }
},{timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord",medicalRecordSchema)