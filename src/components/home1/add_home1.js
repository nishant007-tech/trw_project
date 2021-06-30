// import axios from "axios";
// import React from "react";
// import Sidebar from "../../components/Sidebar";
// import SimpleReactValidator from "simple-react-validator";
// class AddHome1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       subtitle: "",
//       video: "",

//       mobile_message: "",
//       validError: false,
//     };
//     this.handleChange = this.handleChange.bind(this);

//     this.onFileChange = this.onFileChange.bind(this);

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.validator = new SimpleReactValidator({
//       className: "text-danger",
//       validators: {
//         passwordvalid: {
//           message:
//             "The :attribute must be at least 6 and at most 30 with 1 numeric,1 special charac" +
//             "ter and 1 alphabet.",
//           rule: function (val, params, validator) {
//             return (
//               validator.helpers.testRegex(
//                 val,
//                 /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,30}$/i
//               ) && params.indexOf(val) === -1
//             );
//           },
//         },
//         passwordMismatch: {
//           message: "confirm password must match with password field.",
//           rule: function (val, params, validator) {
//             return document.getElementById("password_input").value === val
//               ? true
//               : false;
//           },
//         },
//         whitespace: {
//           message: "The :attribute not allowed first whitespace   characters.",
//           rule: function (val, params, validator) {
//             return (
//               validator.helpers.testRegex(val, /[^\s\\]/) &&
//               params.indexOf(val) === -1
//             );
//           },
//         },
//         specialChar: {
//           message: "The :attribute not allowed special   characters.",
//           rule: function (val, params, validator) {
//             return (
//               validator.helpers.testRegex(val, /^[ A-Za-z0-9_@./#&+-]*$/i) &&
//               params.indexOf(val) === -1
//             );
//           },
//         },
//         specialCharText: {
//           message: "The :attribute may only contain letters, dot and spaces.",
//           rule: function (val, params, validator) {
//             return (
//               validator.helpers.testRegex(val, /^[ A-Za-z_@./#&+-]*$/i) &&
//               params.indexOf(val) === -1
//             );
//           },
//         },

//         zip: {
//           message: "Invalid Pin Code",
//           rule: function (val, params, validator) {
//             return (
//               validator.helpers.testRegex(val, /^(\d{5}(\d{4})?)?$/i) &&
//               params.indexOf(val) === -1
//             );
//           },
//         },
//         website: {
//           message: "The Url should be example.com ",
//           rule: function (val, params, validator) {
//             return (
//               validator.helpers.testRegex(
//                 val,
//                 /(https(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
//               ) && params.indexOf(val) === -1
//             );
//           },
//         },
//         Fax: {
//           message: "Invalid fax number ",
//           rule: function (val, params, validator) {
//             return (
//               validator.helpers.testRegex(
//                 val,
//                 /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i
//               ) && params.indexOf(val) === -1
//             );
//           },
//         },
//       },
//     });
//   }
//   onFileChange(e) {
//     this.setState({ video: e.target.files[0] });
//   }
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     if (this.validator.allValid()) {
//       const formdata = new FormData();
//       formdata.append("title", this.state.title);
//       formdata.append("subtitle", this.state.subtitle);
//       formdata.append("file", this.state.video);
//       console.log(this.state.video);
//       axios
//         .post(
//           "https://trw-backend-api.herokuapp.com/home/AddHome1",

//           formdata
//         )
//         .then(function (response) {
//           // handle success

//           console.log(response.data);
//         })
//         .catch(function (error) {
//           // handle error
//           console.log(error);
//         });
//       this.props.history.push("/home_section_1");
//     } else {
//       this.validator.showMessages();
//       this.forceUpdate();
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Sidebar></Sidebar>
//         <div className="admin-wrapper col-12">
//           <div className="admin-content">
//             <div className="admin-head">Home Section 1 - Add New</div>
//             <div className="admin-data">
//               <div className="container-fluid p-0">
//                 <form
//                   className="form-contact contact_form"
//                   onSubmit={this.handleSubmit}
//                 >
//                   <div className="row m-0">
//                     <div className="col-lg-12 p-0"></div>
//                     <div className="col-lg-12 p-0">
//                       <div className="form-group tags-field row m-0">
//                         <label className="col-lg-2 p-0">Title</label>
//                         <input
//                           className="form-control col-lg-10"
//                           name="title"
//                           onChange={this.handleChange}
//                           value={this.state.title}
//                           type="text"
//                           onfocus="this.placeholder = 'Menu Name'"
//                           onblur="this.placeholder = ''"
//                           placeholder=""
//                         />
//                         {this.validator.message(
//                           "Title",
//                           this.state.title,
//                           "required|whitespace|min:1|max:100"
//                         )}
//                       </div>
//                       <div className="form-group tags-field row m-0">
//                         <label className="col-lg-2 p-0">Sub Title</label>
//                         <input
//                           className="form-control col-lg-10"
//                           name="subtitle"
//                           onChange={this.handleChange}
//                           value={this.state.subtitle}
//                           type="text"
//                           onfocus="this.placeholder = 'Menu Name'"
//                           onblur="this.placeholder = ''"
//                           placeholder=""
//                         />
//                         {this.validator.message(
//                           "Sub Title",
//                           this.state.subtitle,
//                           "required|whitespace|min:1|max:400"
//                         )}
//                       </div>
//                       <div className="form-group tags-field row m-0">
//                         <label className="col-lg-2 p-0">Upload Video</label>
//                         <input
//                           type="file"
//                           onChange={this.onFileChange}
//                           name="file"
//                           className="form-control col-lg-10"
//                         />

//                         {this.validator.message(
//                           "Video",
//                           this.state.video,
//                           "required"
//                         )}
//                       </div>
//                     </div>

//                     <div className="col-lg-12 p-0">
//                       <div className="form-group tags-field  row m-0">
//                         <label className="col-lg-2 p-0" />
//                         <div className="col-lg-6 p-0">
//                           <button
//                             className="button button-contactForm boxed-btn"
//                             type="submit"
//                           >
//                             Save
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AddHome1;

import axios from "axios";
import React from "react";
import Sidebar from "../../components/Sidebar";
import SimpleReactValidator from "simple-react-validator";
class AddHome1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subtitle: "",

      mobile_message: "",
      validError: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = new SimpleReactValidator({
      className: "text-danger",
      validators: {
        passwordvalid: {
          message:
            "The :attribute must be at least 6 and at most 30 with 1 numeric,1 special charac" +
            "ter and 1 alphabet.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(
                val,
                /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,30}$/i
              ) && params.indexOf(val) === -1
            );
          },
        },
        passwordMismatch: {
          message: "confirm password must match with password field.",
          rule: function (val, params, validator) {
            return document.getElementById("password_input").value === val
              ? true
              : false;
          },
        },
        whitespace: {
          message: "The :attribute not allowed first whitespace   characters.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /[^\s\\]/) &&
              params.indexOf(val) === -1
            );
          },
        },
        specialChar: {
          message: "The :attribute not allowed special   characters.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /^[ A-Za-z0-9_@./#&+-]*$/i) &&
              params.indexOf(val) === -1
            );
          },
        },
        specialCharText: {
          message: "The :attribute may only contain letters, dot and spaces.",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /^[ A-Za-z_@./#&+-]*$/i) &&
              params.indexOf(val) === -1
            );
          },
        },

        zip: {
          message: "Invalid Pin Code",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(val, /^(\d{5}(\d{4})?)?$/i) &&
              params.indexOf(val) === -1
            );
          },
        },
        website: {
          message: "The Url should be example.com ",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(
                val,
                /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
              ) && params.indexOf(val) === -1
            );
          },
        },
        Fax: {
          message: "Invalid fax number ",
          rule: function (val, params, validator) {
            return (
              validator.helpers.testRegex(
                val,
                /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i
              ) && params.indexOf(val) === -1
            );
          },
        },
      },
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validator.allValid()) {
      const menu = {
        title: this.state.title,
        subtitle: this.state.subtitle,
      };
      console.log(menu);
      axios
        .post(`https://trw-backend-api.herokuapp.com/home/AddHome1`, menu)
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });

      this.props.history.push("/menu");
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <Sidebar></Sidebar>
        <div className="admin-wrapper col-12">
          <div className="admin-content">
            <div className="admin-head">Section 1 - Add New</div>
            <div className="admin-data">
              <div className="container-fluid p-0">
                <form
                  className="form-contact contact_form"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row m-0">
                    <div className="col-lg-12 p-0"></div>
                    <div className="col-lg-12 p-0">
                      <div className="form-group tags-field row m-0">
                        <label className="col-lg-2 p-0">Title</label>
                        <input
                          className="form-control col-lg-10"
                          name="title"
                          onChange={this.handleChange}
                          value={this.state.title}
                          type="text"
                          onfocus="this.placeholder = 'Menu Name'"
                          onblur="this.placeholder = ''"
                          placeholder=""
                        />
                        {this.validator.message(
                          "Title",
                          this.state.title,
                          "required|whitespace|min:1|max:100"
                        )}
                      </div>
                      <div className="form-group tags-field row m-0">
                        <label className="col-lg-2 p-0">Sub Title</label>
                        <input
                          className="form-control col-lg-10"
                          name="subtitle"
                          onChange={this.handleChange}
                          value={this.state.subtitle}
                          type="text"
                          onfocus="this.placeholder = 'Menu Name'"
                          onblur="this.placeholder = ''"
                          placeholder=""
                        />
                        {this.validator.message(
                          "Sub Title",
                          this.state.subtitle,
                          "required|whitespace|min:1|max:400"
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 p-0">
                      <div className="form-group tags-field  row m-0">
                        <label className="col-lg-2 p-0" />
                        <div className="col-lg-6 p-0">
                          <button
                            className="button button-contactForm boxed-btn"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddHome1;
