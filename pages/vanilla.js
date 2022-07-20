/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HiOutlinePencilAlt, HiChevronDown } from "react-icons/hi";

export default function Vanilla() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
        color: white; // #FFFFFF
      `}
    >
      <div
        className="nav"
        css={css`
          background: #350d36;
          box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
          height: 45px;
        `}
      >
        header..
      </div>
      <div
        css={css`
          display: flex;
          height: 100vh;

          /* width: 100vw; */
          /* justify-content: space-between; */
          /* gap: 5px; */

          .panel {
            /* padding: 5px; */
            /* border: 1px solid gray; */
            /* border-color: rgb(82, 38, 83); */
            /* border-radius: 0.25px; */
            /* border-style: solid; */
            border: 1px solid rgb(82, 38, 83);

            /* background-color: #522653; */
            background-color: #3f0e40;
            /* margin: 5px; */
            /* border-radius: 10px; */
          }

          .workspaces {
            width: 75px;
          }

          .navigation {
            width: 250px;
          }

          .chat {
            flex-grow: 1;
            background-color: white;
            color: black;
          }

          /* .panel {
        flex-grow: 1;
      } */
          /* align-content: stretch; */
          /* align-items: stretch; */
          /* justify-items: space-between; */
        `}
      >
        <div className={"panel workspaces"}>workspaces</div>
        <div className={"panel navigation"}>
          <div
            css={css`
              display: flex;
              /* align-items: stretch; */
              /* background: var(--p-channel_sidebar__column-bg); */
              height: 50px;
              /* position: relative; */
              justify-content: space-between;
              align-items: center;
              border-bottom: 1px solid rgb(82, 38, 83);
              padding: 10px;
            `}
          >
            <div>
              Great Minds
              <span
                css={css`
                  padding: 4px;
                `}
              >
                <HiChevronDown />
              </span>
            </div>
            <button
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 100%;
                border: none;
                height: 32px;
                width: 32px;
              `}
            >
              {/* Seems like the icon just needs to have a max size, but will shrink depending on the button size */}
              <HiOutlinePencilAlt size={"20px"} />
            </button>
            {/* <HiOutlinePencilAlt size={"20px"} /> */}
          </div>
        </div>
        <div className={"panel chat"}>chat</div>
      </div>
    </div>
  );
}
