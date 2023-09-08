const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User",
    },
    name : {
        type : String,
        require : [true, "Please add the contact name"],
    },
    email : {
        type : String,
        require : [true, "Please add the Email Address"],
    },
    phone : {
        type : String,
        require : [true, "Please add the Phone Number"],
    }
},
{
    timestamps : true
}
);

module.exports = mongoose.model("Contact", contactSchema);