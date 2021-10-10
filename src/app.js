const mongoose = require('mongoose');

// Making connection with mongodb
mongoose.connect("mongodb://localhost:27017/Vishal")
    .then(() => {
        console.log("connection successfull....");
    })
    .catch((err) => {
        console.log(err);
    });

// #####################################################################################
//schema
// A Mongoose schema definesn the structure 0f the docunent,
// defaut values, validators etc.

const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        // lowercase: true
        uppercase: true,
        trim: true,
        minLength: 2,
        maxLength: 20
    },
    ctype: {
        type: String,
        required: true,
        lowercase: true,
        enum: ["frontend", "backend", "database"]

    },
    age: {
        type: Number,
        required: true,
        // validate(value) {
        //     if (value < 0) {
        //         throw new Error("Videos const shoud not be nagative")
        //     }
        // }
        validate(value) {
            return value.length < 0
        },
        message: "Videos const shoud not be nagative"

    },
    author: String,
    active: Boolean,
    date: {
        type: Date,
        defaut: Date.now
    }
});


// Collection Creation
const DataList = new mongoose.model('DataList', DataSchema);

// #################################################################################################
// CREATE the entiry docunent or insert with help of POST

const NodeData = new DataList({
    name: "Blog-App",
    ctype: "Back - End",
    age: 18,
    author: "Vishal MAjumdar",
    active: true
});

// NodeData.save();

const createDocument = async() => {
    try {
        const NodeData = new DataList({
            name: "Blog-App",
            ctype: "Back-End and Front-End",
            age: 18,
            author: "Vishal MAjumdar",
            active: true
        });

        const result = await NodeData.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};
// createDocument()

const createDocument = async() => {
    try {

        const PythonData = new DataList({
            name: "Python",
            ctype: "Back-End and Front-End",
            age: 5,
            author: "Vishal MAjumdar",
            active: true
        });

        const JavaScriptData = new DataList({
            name: "JavaScript",
            ctype: "Back-End and Front-End",
            age: 1,
            author: "Vishal MAjumdar",
            active: true
        });

        const NodeData = new DataList({
            name: "Node-js",
            ctype: "Back-End",
            age: 18,
            author: "Vishal MAjumdar",
            active: true
        });

        const ExpressData = new DataList({
            name: "Express",
            ctype: "Back-End",
            age: 18,
            author: "Vishal MAjumdar",
            active: true
        });

        const MongodbData = new DataList({
            name: "Mongodb",
            ctype: "Database",
            age: 18,
            author: "Vishal MAjumdar",
            active: true
        });

        const MongooseData = new DataList({
            name: "Mongoose",
            ctype: "Database",
            age: 18,
            author: "Vishal MAjumdar",
            active: true
        });

        const result = await DataList.insertMany([PythonData, JavaScriptData, ExpressData, NodeData, MongodbData, MongooseData]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// createDocument()

// ###############################################################################
// GET All data from Database
const getDocument = async() => {
    try {
        const result = await DataList.find()
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

// getDocument() 

// ###############################################################################
// GET All data from Database with all matching
const getDocument = async() => {
    try {
        const result = await DataList.find({ name: 'Blog-App' })
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// getDocument()

// ###############################################################################
// GET limit data from Database

const getDocument = async() => {
    try {
        const result = await DataList.find()
            .limit(1)
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// getDocument()

// ###############################################################################
// GET Selecting data which you have from Database

const getDocument = async() => {
    try {
        const result = await DataList.find()
            .select({ name: 1 })
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// getDocument()


// ###############################################################################
// GET Selecting data from Database using $gt && $gte comparion
const getDocument = async() => {
    try {
        const result = await DataList
            .find({ "age": { $gte: 18 } })
            // .find({ "age": { $gt: 15 } })
            .select()
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// getDocument()

// ###############################################################################
// GET Selecting data from Database using $lt && $lte comparion
const getDocument = async() => {
    try {
        const result = await DataList
            // .find({ "age": { $lte: 18 } })
            .find({ "age": { $lt: 18 } })
            .select()
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// getDocument()

// ###############################################################################
// GET Selecting data from Database using $lt && $lte comparion
const getDocument = async() => {
    try {
        const result = await DataList
            // .find({ "age": { $lte: 18 } })
            .find({ firstname: { $in: ["Tushar"] } })
            .select({ firstName: 1 })
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// getDocument()


// ###############################################################################
// GET counting number of data in our Database
const getDocument = async() => {
    try {
        const result = await DataList
            .find({ author: "Vishal MAjumdar" })
            // .select({ age: 1 })
            .select({ name: 1 })
            .sort({ name: -1 })
            // .countDocuments()
            // .count()
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// getDocument()

// // ###############################################################################
// // Update the Document in our Database
const updateDocument = async(id) => {
    try {
        const result = await DataList.findByIdAndUpdate({ _id: id }, {
            $set: {
                name: "Python"
            }
        }, { new: true })
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

// updateDocument("614dc65ad59d8bc0ab053107")

// ###############################################################################
// Update the Document in our Database
const deleteDocument = async(id) => {
    try {
        const result = await DataList.findByIdAndDelete({ _id: id });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
deleteDocument("614dc65ad59d8bc0ab05310c")