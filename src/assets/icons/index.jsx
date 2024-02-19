import { AiOutlineEye, AiOutlineClose, AiOutlineLoading3Quarters, AiTwotoneEyeInvisible } from "solid-icons/ai";
import { FaRegularComment, FaSolidChevronLeft, FaSolidHeart } from "solid-icons/fa";
import { FiMenu, FiSearch } from "solid-icons/fi";
import { RiSystemShareForwardFill, RiArrowsArrowDownSLine } from "solid-icons/ri";

export const Icons = {
    HomeIcon: (props) => (
        <svg {...props} viewBox="0 0 24 24">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0034 21V16C15.0034 14.5 13.5 12.9971 12 12.9971C10.5 12.9971 9 14.5 9 16V21C9 21 6 21 5 21C4 21 3 20 3 19V9.00869C3 8.38612 3.33753 7.81248 3.88175 7.51014L10.3349 3.92503C11.3704 3.34975 12.6296 3.34975 13.6651 3.92503L20.1182 7.51014C20.6625 7.81248 21 8.38612 21 9.00869V19C21 20 19.9967 21 19.0026 21C18.0085 21 15.0034 21 15.0034 21Z"
                fill="currentColor"
            />
        </svg>
    ),
    TrophyIcon: (props) => (
        <svg {...props} viewBox="0 0 24 24">
            <path
                d="M20.3438 3.75H18.1875V2.8125C18.1875 2.70937 18.1031 2.625 18 2.625H6C5.89687 2.625 5.8125 2.70937 5.8125 2.8125V3.75H3.65625C3.38275 3.75 3.12044 3.85865 2.92705 4.05205C2.73365 4.24544 2.625 4.50775 2.625 4.78125V8.25C2.625 10.1648 4.03125 11.7563 5.86406 12.0469C6.225 14.7703 8.41406 16.9172 11.1562 17.2148V19.6805H6.5625C6.14766 19.6805 5.8125 20.0156 5.8125 20.4305V21.1875C5.8125 21.2906 5.89687 21.375 6 21.375H18C18.1031 21.375 18.1875 21.2906 18.1875 21.1875V20.4305C18.1875 20.0156 17.8523 19.6805 17.4375 19.6805H12.8438V17.2148C15.5859 16.9172 17.775 14.7703 18.1359 12.0469C19.9688 11.7563 21.375 10.1648 21.375 8.25V4.78125C21.375 4.50775 21.2663 4.24544 21.073 4.05205C20.8796 3.85865 20.6173 3.75 20.3438 3.75ZM5.8125 10.3031C4.94297 10.0242 4.3125 9.20859 4.3125 8.25V5.4375H5.8125V10.3031ZM19.6875 8.25C19.6875 9.21094 19.057 10.0266 18.1875 10.3031V5.4375H19.6875V8.25Z"
                fill="currentColor"
            />
        </svg>
    ),
    AddIcon: (props) => (
        <svg {...props} viewBox="0 0 24 24">
            <path
                d="M16.3399 1.9998H7.66988C4.27988 1.9998 1.99988 4.3798 1.99988 7.9198V16.0898C1.99988 19.6198 4.27988 21.9998 7.66988 21.9998H16.3399C19.7299 21.9998 21.9999 19.6198 21.9999 16.0898V7.9198C21.9999 4.3798 19.7299 1.9998 16.3399 1.9998Z"
                fill="currentColor"
            />
            <path
                d="M12.8742 15.3823L12.8735 12.8671L15.3879 12.8671C15.8709 12.8678 16.2633 12.4754 16.2626 11.9924C16.264 11.5074 15.8723 11.117 15.3886 11.117L12.8735 11.1163L12.8742 8.59974C12.8742 8.11608 12.481 7.72576 11.9988 7.72434C11.5158 7.72505 11.1234 8.11749 11.1234 8.59974L11.1234 11.117L8.61244 11.1163C8.12878 11.1163 7.73634 11.5088 7.73775 11.991C7.73705 12.2336 7.83463 12.4513 7.99302 12.6097C8.15212 12.7688 8.36991 12.8664 8.61174 12.8664L11.1234 12.8664L11.1241 15.383C11.1241 15.6248 11.2217 15.8426 11.3801 16.001C11.5385 16.1594 11.7577 16.257 11.9988 16.2577C12.4824 16.2577 12.8742 15.866 12.8742 15.3823Z"
                fill="white"
            />
        </svg>
    ),
    NotificationIcon: (props) => (
        <svg {...props} viewBox="0 0 24 24">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.01656 18.5588C8.04035 18.5588 9.72358 18.4564 12 18C11.6063 19.1651 10.5802 20 9.37504 20C8.37308 20 7.49533 19.4224 7 18.5588H7.01656ZM19.9708 12.4319C20.1504 13.3422 19.5017 14.1473 18.0413 14.8265C17.2413 15.1979 15.4623 15.905 12.5241 16.4675C10.2579 16.9005 8.59755 17 7.55245 17C7.2419 17 6.98517 16.9914 6.78299 16.98C5.17134 16.8891 4.26223 16.3809 4.0826 15.4706C3.80987 14.0915 4.24114 13.5591 4.95606 12.6774L5.14443 12.4448C5.62661 11.8429 5.81498 11.2518 5.50661 9.69231C4.81642 6.19985 6.41498 3.8131 9.89138 3.14466C13.3692 2.4841 15.7605 4.1058 16.4507 7.59898C16.7584 9.15842 17.1584 9.63649 17.8347 10.0165V10.0172L18.098 10.1639C19.0958 10.7179 19.698 11.0521 19.9708 12.4319Z"
                fill="currentColor"
            />
        </svg>
    ),
    ProfileIcon: (props) => (
        <svg {...props} viewBox="0 0 24 24">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 16.0005C6 14.8959 6.89543 14 8 14H16C17.1046 14 18 14.8964 18 16.001C18 16.1484 18 16.241 18 16.241C18 19.9197 6 19.9197 6 16.241C6 18.365 6 17.2892 6 16.0005Z"
                fill="currentColor"
            />
            <circle cx="12" cy="9" r="4" fill="currentColor" />
        </svg>
    ),
    MoreIcon: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14ZM16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z"
                fill="currentColor"
            />
        </svg>
    ),

    LoadingIcon: AiOutlineLoading3Quarters,
    CloseIcon: AiOutlineClose,
    EyeOpenIcon: AiOutlineEye,
    EyeOffIcon: AiTwotoneEyeInvisible,
    MenuIcon: FiMenu,
    SearchIcon: FiSearch,
    ChevronLeftIcon: FaSolidChevronLeft,
    LikeIcon: FaSolidHeart,
    CommentIcon: FaRegularComment,
    ShareIcon: RiSystemShareForwardFill,
    ToggleDown: RiArrowsArrowDownSLine,
};