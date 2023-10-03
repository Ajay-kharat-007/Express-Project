const mongoose = require("mongoose")

const userDataSchema = mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User",
    },
    // name : {
    //     type : String,
    //     require : [true, "Please add the contact name"],
    // },
    // email : {
    //     type : String,
    //     require : [true, "Please add the Email Address"],
    // },
    // phone : {
    //     type : String,
    //     require : [true, "Please add the Phone Number"],
    // },
    brideOrGroom: {
        type: String,
        required: [true, "Please select bride"]
    },
    maritalStatus: {
        type: String,
        required: [true, "Please select Marital Status"]
    },
    fNameEnglish: {
        type: String,
        required: [true, "Please Enter First Name"]
    },
    mNameEnglish: {
        type: String,
        required: [true, "Please Enter Middle Name"]
    },
    lNameEnglish: {
        type: String,
        required: [true, "Please Enter Last Name"]
    },
    dateOfBirth: {
        type: String,
        required: [true, "Please Enter Date Of Birth"]
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    bloodGroup: {
        type: String
    },
    mobile: {
        type: Number,
        required: [true, "Please Enter Mobile Number"]
    },
    image : {
        data : Buffer,
        contentType : String
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"]
    },
    whatsappNumber: {
        type: Number
    },
    parentName: {
        type: String,
        required: [true, "Please Enter Parent Name"]
    },
    relationWithParent: {
        type: String,
        required: [true, "Please Enter Relation With Parent"]
    },
    parentOccupation: {
        type: String,
        required: [true, "Please Enter Parent Occupation"]
    },
    motherStatus: {
        type: String,
        required: [true, "Please Select Mother Status"]
    },
    fatherStatus: {
        type: String,
        required: [true, "Please Select Father Status"]
    },
    brothersMarried: {
        type: Number
    },
    brothersUnMarried: {
        type: Number
    },
    sistersMarried: {
        type: Number
    },
    sistersUnMarried: {
        type: Number
    },
    totalSiblings: {
        type: Number
    },
    mothersMaternalSurname: {
        type: String,
        required: [true, "Please Enter Mother's Maternal Surname"]
    },
    mothersMaternalNativePlace: {
        type: String,
        required: [true, "Please Enter Mother's Maternal Native Place"]
    },
    mothersMaternalPlaceDistrict: {
        type: String
    },
    education: {
        type: String,
        required: [true, "Please Enter Education"]
    },
    otherEducationalDetails: {
        type: String
    },
    jobOrOccupation: {
        type: String,
        required: [true, "Please Enter Occupation Details"]
    },
    jobOccupationDetails: {
        type: String
    },
    jobOccupationAddress: {
        type: String
    },
    incomePerAnnum: {
        type: String,
        required: [true, "Please Enter Income Salary"]
    },
    isPhysicallyChallenged: {
        type: String,
        required: [true, "Please select an option"]
    },
    physicallyChallengedDetails: {
        type: String
    },
    physique: {
        type: String,
        required: [true, "Please select a physique"]
    },
    specsOrContactLenses: {
        type: String,
        required: [true, "Please select specs"]
    },
    skinComplexion: {
        type: String,
        required: [true, "Please select Skin Complexion"]
    },
    horoscopeMatching: {
        type: String
    },
    manglikAsPerHoroscope: {
        type: String
    },
    gotra: {
        type: String
    },
    kuladaivat: {
        type: String
    },
    otherImportantDetails: {
        type: String
    },
    country: {
        type: String,
        required: [true, "Please select Country"]
    },
    countryNameIfOutsideIndia: {
        type: String
    },
    address: {
        type: String,
        required: [true, "Please Enter Address"]
    },
    locationCity: {
        type: String,
        required: [true, "Please Enter Location"]
    },
    state: {
        type: String,
        required: [true, "Please Enter State"]
    },
    pincode: {
        type: String,
        required: [true, "Please Enter Pincode"]
    },
    nativePlace: {
        type: String
    },
    nativePlaceTaluka: {
        type: String,
        required: [true, "Please Enter Taluka"]
    },
    nativePlaceDistrict: {
        type: String
    },
    hasOtherOwnershipResidence: {
        type: String
    },
    addressOfOtherOwnershipResidence: {
        type: String
    },
    closeRelativeName: {
        type: String,
        required: [true, "Please Enter Mother Close Relative Name"]
    },
    closeRelativeAddress: {
        type: String,
        required: [true, "Please Enter Mother Close Relative Address"]
    },
    closeRelativeContactDetails: {
        type: String,
        required: [true, "Please Enter Mother Close Relative Contact Details"]
    },
    isSubCastePreferred: {
        type: String
    },
    isPartnerOutsideMumbaiPreferred: {
        type: String
    },
    otherExpectationsFromPartner: {
        type: String
    },
    desiredPassword: {
        type: String
    },
    retypeDesiredPassword: {
        type: String
    }
},
{
    timestamps : true
}
);

// module.exports = mongoose.model("UserData", userDataSchema);

// const mongoose = require('mongoose');

// const userDataSchema = mongoose.Schema({
//     name : {
//         type : String,
//         required : true
//     },
//     image : {
//         data : Buffer,
//         contentType : String
//     }
// })

module.exports = UserDataModel = mongoose.model("UserData", userDataSchema)