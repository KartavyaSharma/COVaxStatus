const date = new Date();

const thisDay = date.getDate(), thisMonth = date.getMonth()+1, thisYear = date.getFullYear();
const tomorrow = thisDay + 1, yesterday = thisDay -1;

const afterDay = thisMonth + '-' + thisYear;

export const dateOptions = [
    {label: "Yesterday", value: `${yesterday + '-' + afterDay}`},
    {label: "Today", value: `${thisDay + '-' + afterDay}`},
    {label: "Tomorrow", value: `${tomorrow + '-' + afterDay}`}
]