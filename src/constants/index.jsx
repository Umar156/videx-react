import {
  faArrowAltCircleUp,
  faBarcode,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export const dataFiles = [
  {
    title: "New application",
    icon: faPlus,
    key: "new-application",
    type: "string",
  },
  {
    title: "Scan Barcode",
    icon: faBarcode,
    key: "scan-barcode",
    type: "string",
  },
  {
    title: "Import data",
    icon: faArrowAltCircleUp,
    key: "import-data",
    type: "string",
  },
];

export const sectionInfo = [
  {
    title: "Personal Information",
    key: "personal-info",
    type: "string",
  },
  {
    title: "Contact details",
    key: "contact-info",
    type: "string",
  },
  {
    title: "Identity documents",
    key: "identity-doc",
    type: "string",
  },
  {
    title: "Travel dates",
    key: "travel-dates",
    type: "string",
  },
  {
    title: "reference",
    key: "reference-info",
    type: "string",
  },
  {
    title: "Livelihood",
    key: "livelihood-info",
    type: "string",
  },
];

export const formData = [
  {
    section: "Personal Information",
    subSection: [
      {
        title: "Personal data of the applicant",
        fields: [
          {
            label: "* Surname:",
            key: "surname",
            type: "string",
          },
          {
            label: "Birth name / previous family name(s):",
            key: "previous-member",
            type: "string",
          },
          {
            label: "* First name(s):",
            key: "first-name",
            type: "string",
          },
          {
            label: "* Date of birth (DD.MM.YYYY):",
            key: "dob",
            type: "string",
          },
          {
            label: "* Place of birth:",
            key: "pob",
            type: "string",
          },
          {
            label: "* Country of birth:",
            key: "cob",
            type: "string",
          },
          {
            label: "* Gender",
            key: "gender",
            type: "string",
          },
          {
            label: "* Marital status:",
            key: "ms",
            type: "string",
          },
          {
            label: "* Current nationality:",
            key: "current-nationality",
            type: "string",
          },
          {
            label: "Previous nationality:",
            key: "previous-nationality",
            type: "string",
          },
        ],
      },
      {
        title: "Parents of the applicant",
        fields: [
          {
            label: "* Father’s surname:",
            key: "f-surname",
            type: "string",
          },
          {
            label: "* Father’s first name(s):",
            key: "f-first-name",
            type: "string",
          },
          {
            label: "Father’s nationality:",
            key: "f-nationality",
            type: "string",
          },
          {
            label: "* Father’s date of birth:",
            key: "f-dob",
            type: "string",
          },
          {
            label: "* Father’s place of birth:",
            key: "f-pob",
            type: "string",
          },
          {
            label: "* Father’s place of residence:",
            key: "f-por",
            type: "string",
          },
          {
            label: "* Mother’s surname:",
            key: "m-surname",
            type: "string",
          },
          {
            label: "* Mother’s first name(s):",
            key: "m-first-name",
            type: "string",
          },
          {
            label: "Mother’s nationality:",
            key: "m-nationality",
            type: "string",
          },
          {
            label: "* Mother’s date of birth:",
            key: "m-dob",
            type: "string",
          },
          {
            label: "* Mother's birthplace:",
            key: "m-bp",
            type: "string",
          },
          {
            label: "* Mother’s place of residence:",
            key: "m-por",
            type: "string",
          },
        ],
      },
      {
        title: "Profession",
        fields: [
          {
            label: "* Learned profession:",
            key: "l-profession",
            type: "string",
          },
          {
            label: "Further information if necessary:",
            key: "f-info",
            type: "string",
          },
          {
            label: "Current employment (if different):",
            key: "c-employment",
            type: "string",
          },
          {
            label: "Further information if necessary:",
            key: "further-info",
            type: "string",
          },
        ],
      },
    ],
  },
];
