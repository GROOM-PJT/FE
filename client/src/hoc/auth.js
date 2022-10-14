import { Axios } from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";

export default function (SpecificComponent, option, adminRoute = null) {
  //null => 아무나 출입이 가능한 페이지
  //true => 로그인한 유저만 출입이 가능한 페이지
  //false => 로그인한 유저는 출입 불가능한 페이지

  function AuthenticationCheck(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      //페이지에 접근할 때 마다 실행되서 권한을 확인할 수 있도록 함
      //원래는 axios.get('api/users/auth')
      dispatch(auth()).then((response) => {
        //auth 액션함수가 반환하는 값(=reducer에게 전달될 값)
        //백엔드에서 처리해서 가져온 정보
        console.log(response);

        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          //로그인 한 상태
          //adminRoute에 접근하려는데 admin이 아닌 경우
          if (adminRoute && !response.payload.isAdmin) {
            navigate("/");
          } else {
            // 로그인한 유저는 출입불가인 페이지에 접근할 때
            if (option === false) navigate("/");
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
