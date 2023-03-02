import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import parse from 'html-react-parser';
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AvatarBoy from "../../../../../_metronic/media/svg/avatars/008-boy-3.svg";
import AvatarGirl from "../../../../../_metronic/media/svg/avatars/014-girl-7.svg";
import AvatarUnk from "../../../../../_metronic/media/svg/avatars/blank.svg";
import AxiosLibWithHeader2 from "../../../../helpers/AxiosLibWithHeader2";
import {openModal} from "../Modals/ModalPopUp";
import {isMyBirthdate} from "../../../../helpers/FormatDate";

var AuthToken = localStorage.getItem("AuthToken");
const AuthDecode = AuthToken ? jwt_decode(AuthToken) : [];

export default function UserMenu() {
  const [profile, setProfile] = useState("");

  const GetProfile = (AuthDecode) => {
    var keys = {
      AppId: AuthDecode.AppID,
      AppEnv: AuthDecode.AppEnv,
      Secretkey: AuthDecode.secretkey,
    };
    var body = {
      target_data: "GET_PROFILE",
    };
    const postData = {
      keys: keys,
      body: body,
    };

    AxiosLibWithHeader2(postData, "app/api/req-module").then((response) => {
      if (response.error) {
        openModal({ open: false, 
          message:parse('<p class="text-center fw-bold fs-3 text-info">Your session has been expired. Please RE-SIGN IN again.<br/><a href="/logout" class="btn btn-sm btn-danger mt-5">Click here to Sign In again</a></p>') , 
          header: "Information"}
        );
      } else if ("message" in response.response) {
        var msg = response.response.message.user;
        openModal({ open: false, message: parse('<p class="text-center text-danger fs-3">'+msg+'<br/><a href="/logout" class="btn btn-sm btn-danger mt-5">Click here to Sign In again</a></p>'), header: 'Information' });
      } else {
        var results = response.response.data;        
        if (results) {
          setProfile(results);
          var isHBD = isMyBirthdate(results.birthdate);
          if(isHBD){
            openModal({ open: false, 
                        message:parse('<p class="text-center fw-bold fs-3 text-info">Be happy! Today is the day you were brought into this world to be a blessing and inspiration to the people around you! You are a wonderful person! May you be given more birthdays to fulfill all of your dreams!</p><p class="text-end fs-4 mt-10 text-dark fst-italic">-SGU Family-</p>') , 
                        header: "Happy Birth Day "+results.fullname }
                      );
          }
        } else {
          openModal({ open: false, 
            message:parse('<p class="text-center fw-bold fs-3 text-info">User data is not found.</p>') , 
            header: "Error"}
          );
        }
      }
    });
  };

  useEffect(() => {
    GetProfile(AuthDecode);
  }, []);

  return (
    <>
      <div className="menu-content d-flex align-items-center px-3">
        <div className="symbol symbol-50px me-5">
          <img
            alt={profile ? profile.fullname : "-"}
            src={
              profile
                ? profile.gender === "p"
                  ? AvatarBoy
                  : AvatarGirl
                : AvatarUnk
            }
            className="p-1 bg-info bg-opacity-10"
          />
        </div>
        <div className="d-flex flex-column">
          <div className="fw-bolder d-flex align-items-center fs-5">
            <span className="text-right w-100 me-3">
              Hi, {AuthDecode ? AuthDecode.identity.given_name : "-"}
            </span>

            <Dropdown className="badge badge-light-info pe-1 py-1">
              <Dropdown.Toggle className="p-0 text-center" id="dropdown-basic">
                <i className="bi bi-caret-down-fill text-info"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu className="fw-bold p-4 fs-6 w-200px menu menu-sub menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary">
                <div className="menu-item">
                  <Link
                    to={"/profile"}
                    className="menu-link text-dark text-hover-info fw-bolder"
                  >
                    My Profile
                  </Link>
                </div>
                <div className="menu-item">
                  <Link
                    to={"/logout"}
                    className="menu-link text-dark text-hover-info fw-bolder text-right"
                  >
                    Log Out
                  </Link>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <span className="fw-bold text-muted text-hover-info fs-7">
            {profile ? profile.employee_id : "-"}
          </span>
        </div>
      </div>
    </>
  );
}
