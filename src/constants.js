// Grouping Icons
import BacklogIcon from "/icons/Backlog.svg";
import CancelledIcon from "/icons/Cancelled.svg";
import DoneIcon from "/icons/Done.svg";
import HighPriorityIcon from "/icons/Img - High Priority.svg";
import LowPriorityIcon from "/icons/Img - Low Priority.svg";
import MediumPriorityIcon from "/icons/Img - Medium Priority.svg";
import InProgressIcon from "/icons/in-progress.svg";
import NoPriorityIcon from "/icons/No-priority.svg";
import UrgentPriorityColorIcon from "/icons/SVG - Urgent Priority colour.svg";
import TodoIcon from "/icons/To-do.svg";

const groupIconMap = {
    Backlog: BacklogIcon,
    Cancelled: CancelledIcon,
    Done: DoneIcon,
    High: HighPriorityIcon,
    Low: LowPriorityIcon,
    Medium: MediumPriorityIcon,
    "In progress": InProgressIcon,
    "No priority": NoPriorityIcon,
    Urgent: UrgentPriorityColorIcon,
    Todo: TodoIcon,
};

export {
    groupIconMap,
}