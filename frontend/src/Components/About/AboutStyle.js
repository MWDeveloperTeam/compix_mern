import styled from 'styled-components';
import { Constant } from '../../constant/index';
import backImg from '../../Media/p1.jpg';

export const Section = styled.section`
  /* clip-path: polygon(0 0, 100% 6%, 100% 100%, 0 94%); */
  height: auto;
  padding: 7rem 10rem;
  background-color: ${Constant.Colors.lightBackgroundColor};
  font-family: ${Constant.Fonts.primaryFont};
  .about_heading_container {
    h1 {
      font-size: 5rem;
      color: #fff;
      margin-left: 2rem;
      display: flex;
      align-items: center;

      ::before {
        content: '';
        width: 0.6rem;
        height: 5rem;
        background-color: ${Constant.Colors.seconderyColorLight};
        position: absolute;
        left: 10rem;
      }
    }
    p {
      color: #fff;
      font-size: 1.5rem;
      width: 60%;
      line-height: 2.2rem;
      margin-top: 2rem;
    }
  }

  .content_container {
    /* background-color: blue; */
    display: flex;
    .content {

      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2rem 3rem 2rem 0;

      h1 {
        font-size: 2.8rem;
        color: ${Constant.Colors.mainColor};
        border-bottom: 0.1rem solid #fff;
        padding-bottom: 1.5rem;
      }

      p {
        font-size: 1.5rem;
        color:${Constant.Colors.mainColor};
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.7rem;
      margin-top: 3rem;
      color: ${Constant.Colors.mainColor};
      text-transform: capitalize;
      svg {
        margin-right: 1.5rem;
        font-size: 1.8rem;
        color: ${Constant.Colors.seconderyColor};
      }
    }
  }

  .img_container {
    flex: 1;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */
    figure {
      height: 100%;
      /* background-color: red; */
      img {
        width: 100%; 
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-right: 1rem;
    .about_heading_container {
      h1 {
        font-size: 5rem;

        ::before {
          content: '';
          width: 0.6rem;
          height: 5rem;
        }
      }
      p {
        font-size: 1.4rem;
        width: 60%;
      }
    }

    .content_container {
      display: flex;
      gap: 1.6rem;
      .content {
        padding: 2rem 0;

        h1 {
          font-size: 2.8rem;
        }

        p {
          font-size: 1.5rem;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.5rem;
        svg {
          font-size: 1.8rem;
        }
      }
    }

    .img_container {
      /* width: 30%; */
      figure {
        img {
          /* width: 28rem; */
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;
    height: auto;
    .about_heading_container {
      h1 {
        font-size: 5rem;

        ::before {
          content: '';
          width: 0.6rem;
          height: 5rem;
          left: 4rem;
        }
      }
      p {
        font-size: 1.4rem;
        width: 100%;
        line-height: 2.3rem;
      }
    }

    .content_container {
      display: flex;
      flex-direction: column;
      .content {
        padding: 3rem 0;

        h1 {
          font-size: 2.8rem;
        }

        p {
          font-size: 1.5rem;
          line-height: 2.3rem;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.5rem;
        svg {
          font-size: 1.8rem;
        }
      }
    }

    .img_container {
      justify-content: center;
      align-items: center;
      width: 100%;
      figure {
        img {
          /* width: 20rem; */
        }
      }
    }
  }

  @media only screen and (max-width: 580px) {
    .about_heading_container {
      h1 {
        font-size: 4rem;
        ::before {
          left: 3rem;
        }
      }
      p {
        font-size: 1.6rem;
      }
    }

    .content_container {
      .content {
        h1 {
        }
        p {
          font-size: 1.8rem;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        font-size: 1.3rem;
        svg {
          font-size: 1.6rem;
        }
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .img_container {
      height: auto;
      figure {
        img {
          max-width: 15rem;
        }
      }
    }
  }
`;
