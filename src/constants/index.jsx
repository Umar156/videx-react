import {
  faArrowAltCircleUp,
  faBarcode,
  faMapLocation,
  faPlus,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faContactCard } from "@fortawesome/free-solid-svg-icons/faContactCard";
import { faIdCard } from "@fortawesome/free-solid-svg-icons/faIdCard";

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
    icon: faUserCircle,
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
  {
    section: "Contact details",
    icon: faContactCard,
    subSection: [
      {
        title: "Current address and availability",
        fields: [
          {
            label: "* Street:",
            key: "street",
            type: "string",
          },
          {
            label: "House number:",
            key: "house-number",
            type: "string",
          },
          {
            label: "Other address details:",
            key: "other-address",
            type: "string",
          },
          {
            label: "* Postal code:",
            key: "postal-code",
            type: "string",
          },
          {
            label: "* Location:",
            key: "location",
            type: "string",
          },
          {
            label: "* Country",
            key: "country",
            type: "string",
          },
          {
            label: "* Telephone/mobile number:",
            key: "mobile-number",
            type: "string",
          },
          {
            label: "E-mail:",
            key: "ms",
            type: "string",
          },
        ],
      },
    ],
  },
  {
    section: "Identity documents",
    icon: faIdCard,
    subSection: [
      {
        title: "Identity documents",
        fields: [
          {
            label: "* Type of travel document:",
            key: "travel-doc",
            type: "string",
          },
          {
            label: "Travel document number:",
            key: "doc-number",
            type: "string",
          },
          {
            label: "* Date of issue (DD.MM.YYYY):",
            key: "date-of-issue",
            type: "string",
          },
          {
            label: "* Valid until (DD.MM.YYYY):",
            key: "last-date",
            type: "string",
          },
          {
            label: "* Issuing State:",
            key: "issue-state",
            type: "string",
          },
          {
            label: "Issued by:",
            key: "issue-by",
            type: "string",
          },
          {
            label: "Exhibited in:",
            key: "exhibited-in:",
            type: "string",
          },
        ],
      },
    ],
  },
  {
    section: "Travel dates",
    icon: faMapLocation,
    subSection: [
      {
        title: "Travel dates and purpose",
        fields: [
          {
            label: "* Purpose of stay in Germany:",
            key: "germany-stay",
            type: "string",
          },
          {
            label: "Intended employment, if applicable:",
            key: "employment",
            type: "string",
          },
          {
            label: "* From (DD.MM.YYYY):",
            key: "date-of-start",
            type: "string",
          },
          {
            label: "* Until:",
            key: "untill-date",
            type: "string",
          },
        ],
      },
    ],
  },
];
