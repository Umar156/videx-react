import {
  faArrowAltCircleUp,
  faBarcode,
  faBook,
  faDoorOpen,
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
            type: "text",
          },
          {
            label: "Birth name / previous family name(s):",
            key: "previous-member",
            type: "text",
          },
          {
            label: "* First name(s):",
            key: "first-name",
            type: "text",
          },
          {
            label: "* Date of birth (MM.DD.YYYY):",
            key: "dob",
            type: "date",
          },
          {
            label: "* Place of birth:",
            key: "pob",
            type: "text",
          },
          {
            label: "* Country of birth:",
            key: "cob",
            type: "select",
            options: [
              { value: "", label: "Select country" },
              { value: "Afghanistan", label: "Afghanistan" },
              { value: "Albania", label: "Albania" },
              { value: "Algeria", label: "Algeria" },
              { value: "Andorra", label: "Andorra" },
              { value: "Angola", label: "Angola" },
              { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
              { value: "Armenia", label: "Armenia" },
              { value: "Aruba", label: "Aruba" },
              { value: "Australia", label: "Australia" },
            ],
          },
          {
            label: "* Gender:",
            key: "gender",
            type: "select",
            options: [
              { value: "", label: "Select gender" },
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ],
          },
          {
            label: "* Marital status:",
            key: "ms",
            type: "select",
            options: [
              { value: "", label: "Select status" },
              { value: "Single", label: "Single" },
              { value: "Married", label: "Married" },
              { value: "Separated", label: "Separated" },
            ],
          },
          {
            label: "* Current nationality:",
            key: "current-nationality",
            type: "select",
            options: [
              { value: "", label: "Select nationality" },
              { value: "AFG", label: "Afghanistan" },
              { value: "ALB", label: "Albania" },
              { value: "ANG", label: "Angola" },
            ],
          },
          {
            label: "Previous nationality:",
            key: "previous-nationality",
            type: "select",
            options: [
              { value: "", label: "Select nationality" },
              { value: "AFG", label: "Afghanistan" },
              { value: "ALB", label: "Albania" },
              { value: "ANG", label: "Angola" },
            ],
          },
        ],
      },
      {
        title: "Parents of the applicant",
        fields: [
          {
            label: "* Father’s surname:",
            key: "f-surname",
            type: "text",
          },
          {
            label: "* Father’s first name(s):",
            key: "f-first-name",
            type: "text",
          },
          {
            label: "Father’s nationality:",
            key: "f-nationality",
            type: "select",
            options: [
              { value: "", label: "Select nationality" },
              { value: "AFG", label: "Afghanistan" },
              { value: "ALB", label: "Albania" },
              { value: "ANG", label: "Angola" },
            ],
          },
          {
            label: "* Father’s date of birth:",
            key: "f-dob",
            type: "date",
          },
          {
            label: "* Father’s place of birth:",
            key: "f-pob",
            type: "text",
          },
          {
            label: "* Father’s place of residence:",
            key: "f-por",
            type: "text",
          },
          {
            label: "* Mother’s surname:",
            key: "m-surname",
            type: "text",
          },
          {
            label: "* Mother’s first name(s):",
            key: "m-first-name",
            type: "text",
          },
          {
            label: "Mother’s nationality:",
            key: "m-nationality",
            type: "select",
            options: [
              { value: "", label: "Select nationality" },
              { value: "AFG", label: "Afghanistan" },
              { value: "ALB", label: "Albania" },
              { value: "ANG", label: "Angola" },
            ],
          },
          {
            label: "* Mother’s date of birth:",
            key: "m-dob",
            type: "date",
          },
          {
            label: "* Mother's birthplace:",
            key: "m-bp",
            type: "text",
          },
          {
            label: "* Mother’s place of residence:",
            key: "m-por",
            type: "text",
          },
        ],
      },
      {
        title: "Profession",
        fields: [
          {
            label: "* Learned profession:",
            key: "l-profession",
            type: "select",
            options: [
              { value: "", label: "Select profession" },
              { value: "EMP", label: "Employee" },
              { value: "ARC", label: "Architect" },
              { value: "BNK", label: "Banker" },
            ],
          },
          {
            label: "Further information if necessary:",
            key: "f-info",
            type: "text",
          },
          {
            label: "Current employment (if different):",
            key: "c-employment",
            type: "text",
          },
          {
            label: "Further information if necessary:",
            key: "further-info",
            type: "text",
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
            type: "text",
          },
          {
            label: "House number:",
            key: "house-number",
            type: "text",
          },
          {
            label: "Other address details:",
            key: "other-address",
            type: "text",
          },
          {
            label: "* Postal code:",
            key: "postal-code",
            type: "text",
          },
          {
            label: "* Location:",
            key: "location",
            type: "text",
          },
          {
            label: "* Country",
            key: "country",
            type: "select",
            options: [
              { value: "", label: "Select country" },
              { value: "AFG", label: "Afghanistan" },
              { value: "ALB", label: "Albania" },
              { value: "ANG", label: "Angola" },
            ],
          },
          {
            label: "* Telephone/mobile number:",
            key: "mobile-number",
            type: "text",
          },
          {
            label: "E-mail:",
            key: "ms",
            type: "text",
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
            type: "select",
            options: [
              { value: "", label: "Select DOC" },
              { value: "PP", label: "Passport" },
              { value: "SP", label: "Service Pass" },
              { value: "OP", label: "Official Passport" },
            ],
          },
          {
            label: "Travel document number:",
            key: "doc-number",
            type: "text",
          },
          {
            label: "* Date of issue (MM.DD.YYYY):",
            key: "date-of-issue",
            type: "date",
          },
          {
            label: "* Valid until (MM.DD.YYYY):",
            key: "last-date",
            type: "date",
          },
          {
            label: "* Issuing State:",
            key: "issue-state",
            type: "select",
            options: [
              { value: "", label: "Select state" },
              { value: "AFG", label: "Afghanistan" },
              { value: "ALB", label: "Albania" },
              { value: "ANG", label: "Angola" },
            ],
          },
          {
            label: "Issued by:",
            key: "issue-by",
            type: "text",
          },
          {
            label: "Exhibited in:",
            key: "exhibited-in:",
            type: "text",
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
            type: "select",
            options: [
              { value: "", label: "Select purpose" },
              { value: "study", label: "Study" },
              { value: "Employment", label: "Employment" },
              { value: "AU", label: "AU Pair" },
            ],
          },
          {
            label: "Intended employment, if applicable:",
            key: "employment",
            type: "text",
          },
          {
            label: "* From (MM.DD.YYYY):",
            key: "date-of-start",
            type: "date",
          },
          {
            label: "* Until:",
            key: "untill-date",
            type: "date",
          },
        ],
      },
    ],
  },
  {
    section: "reference",
    icon: faDoorOpen,
    subSection: [
      {
        title: "Educational institution/company/organization",
        fields: [
          {
            label: "* Type of reference:",
            key: "type-reference",
            type: "select",
            options: [
              { value: "", label: "Select purpose" },
              {
                value: "EICO",
                label: "Educational institution/company/organization",
              },
              { value: "ACC", label: "Accredited Diplomat" },
            ],
          },
          {
            label: "* Name of educational institution",
            key: "edu-or-comp",
            type: "text",
          },
          {
            label: "Location of the organization:",
            key: "location",
            type: "text",
          },
          {
            label: "Location of the organization, country:",
            key: "LOC",
            type: "select",
            options: [
              { value: "", label: "Select Location" },
              { value: "AFG", label: "Afghanistan" },
              { value: "ALB", label: "Albania" },
              { value: "ANG", label: "Angola" },
            ],
          },
          {
            label: "Task / scope of the organization:",
            key: "task",
            type: "select",
            options: [
              { value: "", label: "Select Scope" },
              { value: "AG", label: "Agriculture" },
              { value: "SP", label: "Sport" },
              { value: "BNK", label: "Banking" },
            ],
          },
          {
            label: "Name of the organization’s registry:",
            key: "registry",
            type: "select",
            options: [
              { value: "", label: "Select Org Registry" },
              { value: "AG", label: "Trade Register" },
              { value: "SP", label: "Commercial Register" },
              { value: "BNK", label: "Partnership Register" },
            ],
          },
          {
            label: "Location of the register:",
            key: "location-registry",
            type: "text",
          },
          {
            label: "Registration number:",
            key: "reg-number",
            type: "text",
          },
          {
            label: "* Last name of contact person:",
            key: "last-contact-person",
            type: "text",
          },
          {
            label: "* First name(s) of contact person:",
            key: "first-contact-person",
            type: "text",
          },
          {
            label: "* Gender:",
            key: "gender-refer",
            type: "select",
            options: [
              { value: "", label: "Select gender" },
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ],
          },
          {
            label: "* Street:",
            key: "street-reference",
            type: "text",
          },
          {
            label: "* House number:",
            key: "house-refer",
            type: "text",
          },
          {
            label: "* Postal code:",
            key: "postal-reference",
            type: "text",
          },
          {
            label: "* Location:",
            key: "loc-reference",
            type: "text",
          },
          {
            label: "* Telephone/mobile number:",
            key: "mobile-reference",
            type: "text",
          },
          {
            label: "Email",
            key: "mail-reference",
            type: "text",
          },
        ],
      },
    ],
  },
  {
    section: "Living expenses and residence details",
    icon: faBook,
    subSection: [
      {
        title: "Living expenses and residence details",
        fields: [
          {
            label: "* Postal code:",
            key: "postal-code",
            type: "text",
          },
          {
            label: "* Location:",
            key: "location",
            type: "text",
          },
        ],
      },
    ],
  },
];
