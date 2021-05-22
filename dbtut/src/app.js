const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://localhost:27017/tutdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connect"))
    .catch(() => console.log(err));


// create schema

const techData = new mongoose.Schema({

    tech: {
        type: String,

        unique: true,
        validate(value) {
            if (validator.isEmpty(value)) {
                throw new Error("value must not be empty");
            }
        }
    },
    trainweek: {
        type: Number,
        validate(value) {
            if (value <= 0) {
                throw new Error("Training period more of equal to 1");
            }

        }
    },
    status: Boolean,
    data: {
        type: Date,
        default: Date.now
    }
})

// create collection

const techDataList = new mongoose.model("techData", techData);

// create document

const createDocument = async() => {
    try {
        const insData = [{
                tech: "C Pro",
                trainweek: 1,
                status: true
            },
            {
                tech: "C#",
                trainweek: 2,
                status: true
            }

        ]

        const result = await techDataList.insertMany(insData);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();