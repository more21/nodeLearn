const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tutdb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connect"))
    .catch(() => console.log(err));

const techData = new mongoose.Schema({

    tech: {
        type: String,
        required: true,
        unique: true

    },
    trainweek: Number,
    status: Boolean,
    data: {
        type: Date,
        default: Date.now
    }
})

// create collection

const techDataList = new mongoose.model("techData", techData);

const getDocument = async() => {
    try {
        const result = await techDataList.find().sort({ tech: 1 })
            .select({ tech: 1 });
        console.log(result);
    } catch {
        console.log(err);
    }
}

const updateDocument = async(_id) => {
    try {
        const result = await techDataList.findByIdAndUpdate({ _id }, {
            $set: {
                tech: "Java"
            }
        }, {
            new: true,
            useFindAndModify: false
        });
        console.log(result);
    } catch {
        console.log(err);
    }
}

// updateDocument("60a8f664153853039854c5d4");
/*getDocument()*/

const deleteDoc = async(_id) => {
    try {
        const result = await techDataList.findByIdAndDelete({ _id });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// deleteDoc("60a8f39dab626b241c947f49");