// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema(
//   {
//     fname: {
//       type: String,
//     //   required: [true, "Please add the first name"],
//     },
//     lname: {
//       type: String,
//     //   required: [true, "Please add the last name"],
//     },
//     "Full Name": {
//       type: String,
//     },
//     phone: {
//       type: String,
//     //   required: [true, "Please add the phone number"],
//     },
//     email: {
//       type: String,
//     //   required: [true, "Please add the user email address"],
//     //   unique: [true, "Email address already taken"],
//     },
//     password: {
//       type: String,
//     //   required: [true, "Please add the user password"],
//     },
//     status: {
//       type: String,
//       enum: ["Active", "Inactive"],
//     },
//     paymentStatus: {
//       type: String,
//       enum: ["Successfull", "Pending"],
//     },
//     subscription: {
//       type: String,
//     },
//     subscriptionStartDate: {
//       type: Date,
//     },
//     subscriptionEndDate: {
//       type: Date,
//     },
//     gender: {
//       type: String,
//       enum: ["Bride", "Groom"],
//       // // required: [true, "Please select bride"]
//     },
//     maritalStatus: {
//       type: String,
//       enum: ["Unmarried", "Divorcee", "Widow/Widower"],
//       // // required: [true, "Please select Marital Status"]
//     },
//     fNameEnglish: {
//       type: String,
//       // // required: [true, "Please Enter First Name"]
//     },
//     mNameEnglish: {
//       type: String,
//       // // required: [true, "Please Enter Middle Name"]
//     },
//     lNameEnglish: {
//       type: String,
//       // required: [true, "Please Enter Last Name"]
//     },
//     dateOfBirth: {
//       type: String,
//       // required: [true, "Please Enter Date Of Birth"]
//     },
//     height: {
//       type: String,
//     },
//     weight: {
//       type: String,
//     },
//     bloodGroup: {
//       type: String,
//     },
//     imagePath: {
//       type: String,
//     },
//     whatsappString: {
//       type: String,
//     },
//     parentName: {
//       type: String,
//       // required: [true, "Please Enter Parent Name"]
//     },
//     relationWithParent: {
//       type: String,
//       // required: [true, "Please Enter Relation With Parent"]
//     },
//     parentOccupation: {
//       type: String,
//       // required: [true, "Please Enter Parent Occupation"]
//     },
//     motherStatus: {
//       type: String,
//       enum: ["Alive", "Passed Away"],

//       // required: [true, "Please Select Mother Status"]
//     },
//     fatherStatus: {
//       type: String,
//       enum: ["Alive", "Passed Away"],
//       // required: [true, "Please Select Father Status"]
//     },
//     brothersMarried: {
//       type: String,
//     },
//     brothersUnMarried: {
//       type: String,
//     },
//     sistersMarried: {
//       type: String,
//     },
//     sistersUnMarried: {
//       type: String,
//     },
//     totalSiblings: {
//       type: String,
//     },
//     mothersMaternalSurname: {
//       type: String,
//       // required: [true, "Please Enter Mother's Maternal Surname"]
//     },
//     mothersMaternalNativePlace: {
//       type: String,
//       // required: [true, "Please Enter Mother's Maternal Native Place"]
//     },
//     mothersMaternalPlaceDistrict: {
//       type: String,
//     },
//     education: {
//       type: String,
//       enum: ["HSC", "SSC", "B.Tech"],
//       // required: [true, "Please Enter Education"]
//     },
//     otherEducationalDetails: {
//       type: String,
//     },
//     jobOrOccupation: {
//       type: String,
//       enum: [
//         "Prsently not doing Job",
//         "Looking for a Job",
//         "Private Job",
//         "Business",
//         "Civil Service",
//       ],
//       // required: [true, "Please Enter Occupation Details"]
//     },
//     jobOccupationDetails: {
//       type: String,
//     },
//     jobOccupationAddress: {
//       type: String,
//     },
//     incomePerAnnum: {
//       type: String,
//       enum: [
//         "Not Earning",
//         "Below 1.2 Lakh",
//         "1.2 to 5 Lakh",
//         "5 to 8 Lakh",
//         "8 to 10 Lakh",
//         "10 to 12 Lakh",
//         "12 to 15 Lakh",
//         "15 to 20 Lakh",
//         "Above 20 Lakh",
//       ],
//       // required: [true, "Please Enter Income Salary"]
//     },
//     isPhysicallyChallenged: {
//       type: String,
//       enum: ["Yes", "No"],
//       // required: [true, "Please select an option"]
//     },
//     physicallyChallengedDetails: {
//       type: String,
//     },
//     physique: {
//       type: String,
//       enum: ["Slim", "Average", "Heavy"],
//       // required: [true, "Please select a physique"]
//     },
//     specsOrContactLenses: {
//       type: String,
//       enum: [
//         "No Specs",
//         "Wearing a glasses",
//         "Wearing contact lenses",
//         "Wearing both alternatively",
//       ],
//       // required: [true, "Please select specs"]
//     },
//     skinComplexion: {
//       type: String,
//       enum: ["Fair", "Medium", "Brown"],
//       // required: [true, "Please select Skin Complexion"]
//     },
//     horoscopeMatching: {
//       type: String,
//       enum: ["Required", "Not Required"],
//     },
//     manglikAsPerHoroscope: {
//       type: String,
//       enum: ["Strong", "Mild", "Without dosha", "No"],
//     },
//     gotra: {
//       type: String,
//     },
//     kuladaivat: {
//       type: String,
//     },
//     otherImportantDetails: {
//       type: String,
//     },
//     country: {
//       type: String,
//       enum: ["India", "Outside India"],
//       // required: [true, "Please select Country"]
//     },
//     countryNameIfOutsideIndia: {
//       type: String,
//     },
//     address: {
//       type: String,
//       // required: [true, "Please Enter Address"]
//     },
//     locationCity: {
//       type: String,
//       // required: [true, "Please Enter Location"]
//     },
//     state: {
//       type: String,
//       // required: [true, "Please Enter State"]
//     },
//     pincode: {
//       type: String,
//       // required: [true, "Please Enter Pincode"]
//     },
//     nativePlace: {
//       type: String,
//     },
//     nativePlaceTaluka: {
//       type: String,
//       // required: [true, "Please Enter Taluka"]
//     },
//     nativePlaceDistrict: {
//       type: String,
//     },
//     hasOtherOwnershipResidence: {
//       type: String,
//       enum: ["Yes", "No"],
//     },
//     addressOfOtherOwnershipResidence: {
//       type: String,
//     },
//     closeRelativeName: {
//       type: String,
//       // required: [true, "Please Enter Mother Close Relative Name"]
//     },
//     closeRelativeAddress: {
//       type: String,
//       // required: [true, "Please Enter Mother Close Relative Address"]
//     },
//     closeRelativeContactDetails: {
//       type: String,
//       // required: [true, "Please Enter Mother Close Relative Contact Details"]
//     },
//     isSubCastePreferred: {
//       type: String,
//       enum: ["Yes", "No"],
//     },
//     isPartnerOutsideMumbaiPreferred: {
//       type: String,
//       enum: ["Yes", "No"],
//     },
//     otherExpectationsFromPartner: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    // required: [true, "Please Enter First Name"],
  },

  middleName: {
    type: String,
  },

  lastName: {
    type: String,
    // required: [true, "Please Enter Last Name"],
  },

  fullName: {
    type: String,
  },

  email: {
    type: String,
    // required: [true, "Please Enter Email"],
  },

  phone: {
    type: String,
    // required: [true, "Please Enter Phone Number"],
  },

  password: {
    type: String,
    // required: [true, "Please Enter Password"],
  },

  status: {
    type: String,
    enum: ["Active", "Inactive"],
  },

  gender: {
    type: String,
    enum: ["Male", "Female"],
  },

  maritalStatus: {
    type: String,
    enum: ["Unmarried", "Divorced", "Widow/Widower"],
  },

  dateOfBirth: {
    type: Date,
  },

  height: {
    type: String,
  },

  weight: {
    type: String,
  },

  bloodGroup: {
    type: String,
  },

  whatsappNumber: {
    type: String,
  },

  parentName: {
    type: String,
  },

  relationWithParent: {
    type: String,
  },

  parentOccupation: {
    type: String,
  },

  motherStatus: {
    type: String,
    enum: ["Alive", "Passed Away"],
  },

  fatherStatus: {
    type: String,
    enum: ["Alive", "Passed Away"],
  },

  brothersMarried: {
    type: String,
  },

  brothersUnmarried: {
    type: String,
  },

  sistersMarried: {
    type: String,
  },

  sistersUnmarried: {
    type: String,
  },

  totalSiblings: {
    type: String,
  },

  mothersMaternalSurname: {
    type: String,
  },

  imagePath: {
    type: String,
  },

  mothersMaternalNativePlace: {
    type: String,
  },

  mothersMaternalPlaceDistrict: {
    type: String,
  },

  education: {
    type: String,
    enum: ["HSC", "SSC", "B.Tech"],
  },

  otherEducationalDetails: {
    type: String,
  },

  jobOrOccupation: {
    type: String,
    enum: [
      "Not Currently Employed",
      "Looking for a Job",
      "Private Job",
      "Business",
      "Civil Service",
    ],
  },

  jobOccupationDetails: {
    type: String,
  },

  jobOccupationAddress: {
    type: String,
  },

  incomePerAnnum: {
    type: String,
    enum: [
      "Not Earning",
      "Below 1.2 Lakh",
      "1.2 to 5 Lakh",
      "5 to 8 Lakh",
      "8 to 10 Lakh",
      "10 to 12 Lakh",
      "12 to 15 Lakh",
      "15 to 20 Lakh",
      "Above 20 Lakh",
    ],
  },

  isPhysicallyChallenged: {
    type: String,
    enum: ["Yes", "No"],
  },

  physicallyChallengedDetails: {
    type: String,
  },

  physique: {
    type: String,
    enum: ["Slim", "Average", "Heavy"],
  },

  specsOrContactLenses: {
    type: String,
    enum: [
      "No Specs",
      "Wearing Glasses",
      "Wearing Contact Lenses",
      "Wearing Both Alternatively",
    ],
  },

  skinComplexion: {
    type: String,
    enum: ["Fair", "Medium", "Brown"],
  },

  horoscopeMatching: {
    type: String,
    enum: ["Required", "Not Required"],
  },

  manglikAsPerHoroscope: {
    type: String,
    enum: ["Strong", "Mild", "Without Dosha", "No"],
  },

  gotra: {
    type: String,
  },

  kuladaivat: {
    type: String,
  },

  otherImportantDetails: {
    type: String,
  },

  country: {
    type: String,
    enum: ["India", "Outside India"],
  },

  countryNameIfOutsideIndia: {
    type: String,
  },

  address: {
    type: String,
  },

  locationCity: {
    type: String,
  },

  state: {
    type: String,
  },

  pincode: {
    type: String,
  },

  nativePlace: {
    type: String,
  },

  nativePlaceTaluka: {
    type: String,
  },

  nativePlaceDistrict: {
    type: String,
  },

  hasOtherOwnershipResidence: {
    type: String,
    enum: ["Yes", "No"],
  },

  addressOfOtherOwnershipResidence: {
    type: String,
  },

  closeRelativeName: {
    type: String,
  },

  closeRelativeAddress: {
    type: String,
  },

  closeRelativeContactDetails: {
    type: String,
  },

  isSubCastePreferred: {
    type: String,
    enum: ["Yes", "No"],
  },

  isPartnerOutsideMumbaiPreferred: {
    type: String,
    enum: ["Yes", "No"],
  },

  otherExpectationsFromPartner: {
    type: String,
  },

  paymentStatus: {
    type: String,
    enum: ["Pending", "Successfull"],
  },

  subscription : {
    type : String
  },

  subscriptionStartDate: {
    type: Date,
  },

  subscriptionEndDate: {
    type: Date,
  },
});

module.exports = mongoose.model("User", userSchema);
