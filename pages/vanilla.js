/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  HiOutlinePencilAlt,
  HiChevronDown,
  HiOutlineChatAlt2,
  HiOutlineBookmark,
  HiOutlineOfficeBuilding,
  HiDotsVertical,
  HiSearch,
  HiOutlineClock,
  HiOutlineQuestionMarkCircle,
  HiUserCircle,
} from "react-icons/hi";
import { GoMention } from "react-icons/go";

export default function Vanilla() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
        color: white; // #FFFFFF
        svg {
          cursor: pointer; // just a trick to make them seem like buttons for this UI demo
        }
      `}
    >
      {/* Break */}
      <div
        className="nav"
        css={css`
          background: #350d36;
          /* box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%); */
          height: 45px;
          display: flex;
          justify-content: space-around;
          gap: 20px;
          * {
            color: white;
            opacity: 0.9;
            font-size: 20px; // for the icons, and then override to decrease for the 'Search' text.
          }
        `}
      >
        <div
          css={css`
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          `}
        >
          <HiOutlineClock />
        </div>
        <div
          css={css`
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <button
            css={css`
              width: 100%;
              background-color: #644665;
              display: flex;
              gap: 5px;
              justify-content: center;
              align-items: center;
              border: 0;
              height: 24px;
              border-radius: 5px;
              * {
                font-size: 13px;
              }
              /* margin: 20px; */
            `}
          >
            <HiSearch />
            <span>Search</span>
          </button>
        </div>
        <div
          css={css`
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0 20px;
            gap: 10px;
          `}
        >
          <HiOutlineQuestionMarkCircle />
          <HiUserCircle />
        </div>
      </div>
      {/* Break */}

      {/* Break */}
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
              &:hover {
                /* background-color: orange; */
                background-color: #340e36;
                cursor: pointer;
              }
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
          </div>

          {/* Navigation section 2 (Threads, Mentions, Saved Items) */}
          <div
            css={css`
              color: rgba(255, 255, 255, 0.7);
              padding: 16px 0;
              /* border-bottom: 1px solid rgb(82, 38, 83); */
              display: flex;
              flex-direction: column;
              /* gap: 8px; */
              div {
                /* display: flex; */
                /* align-content: center; */
                /* height: 28px; */
                /* line-height: 30px; // or increase the TOP padding/margin */
                padding: 0 11px;
                height: 28px;
                display: flex;
                align-items: center;
                cursor: pointer;
                gap: 2px;

                &:hover {
                  /* background-color: orange; */
                  background-color: #340e36;
                }
              }
            `}
          >
            <div>
              <HiOutlineChatAlt2 /> Threads
            </div>
            <div>
              <GoMention /> Mentions & reactions
            </div>
            <div>
              <HiOutlineBookmark /> Saved Items
            </div>
            <div>
              <HiOutlineOfficeBuilding /> Slack Connect
            </div>
            <div>
              <HiDotsVertical /> More
            </div>
          </div>
        </div>
        <div
          className={"panel chat"}
          css={css`
            display: flex;
            flex-direction: column;
            > div {
              padding: 10px;
            }
          `}
        >
          <div
            css={css`
              background-color: white;
              height: 50px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            `}
          >
            <h3>Chat</h3>
            {/* <span>Icons, etc</span> */}
          </div>
          <div
            css={css`
              flex: 1;
              background-color: #f8f8f8;
            `}
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}
