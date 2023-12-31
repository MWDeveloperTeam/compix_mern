import styled from 'styled-components';
import { Constant } from '../../constant';

export const Menu = styled.section`
  width: 85%;
  /* height: calc(100% - 6rem); */
  height: calc(100vh - 6rem);
  position: fixed !important;
  left: 0;
  top: 6rem;
  display: flex;
  transition: ease-in-out 0.3s;
  z-index: 9622656565666666;
  transform: translate(${props => props.translate});
  transition: ease-in-out 0.3s;
  overflow-y: scroll;
  /* background-color: #000;  */

  &::-webkit-scrollbar {
  width: 0px;
}

  .main_container {
    width: 100%;
    height: 100%;
    background-color: ${Constant.Colors.mainColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      padding: 3rem 5rem;
      li {
        border-bottom: 0.1rem solid #fff;
        width: 100%;
        text-align: center;
        padding: 1rem;
        /* :active {
            background-color: red;
        } */
        a {
          color: #ccc;
          font-size: 1.7rem;
          letter-spacing: 0.2rem;
          text-transform: capitalize;
          cursor: pointer;
          transition: ease-in-out 0.3s;
          &:hover {
            color: ${Constant.Colors.seconderyColor};
          }
        }
      }
    }
  }

  .social_media_container {
    /* background-color: red; */
    padding: 0 5rem 3rem 5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;

    .take_test {
      a {
        color: #ccc;
        letter-spacing: 0.1rem;
      }
    }

    .social_meida {
      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        justify-content: center;
        li {
          a {
            color: #ccc;
            font-size: 1.8rem;
            :active {
              color: ${Constant.Colors.primaryColor};
            }
          }
        }
      }
    }

    .copy_right {
      color: #888;
      letter-spacing: 0.1rem;
      font-size: 1.1rem;
      p {
        color: #fff;
      }
    }
  }
`;
